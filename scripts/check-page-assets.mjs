import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const buildDir = join(process.cwd(), ".next");
const { routes } = JSON.parse(readFileSync(join(buildDir, "prerender-manifest.json"), "utf8"));
const postcss = createRequire(import.meta.url)("postcss");
const checkedCss = new Set();
const localFonts = new Set();

function checkCss(cssPath) {
  if (checkedCss.has(cssPath)) return;
  const css = readFileSync(join(buildDir, cssPath.replace(/^\/_next\//, "")), "utf8");
  assert.doesNotMatch(css, /@import\b/, `${cssPath}: no stylesheet import waterfall`);
  for (const [, rawUrl] of css.matchAll(/url\(([^)]+)\)/g)) {
    const url = rawUrl.replace(/^["']|["']$/g, "");
    if (url.startsWith("data:")) continue;
    assert.ok(url.startsWith("/_next/static/media/"), `${cssPath}: locally served asset ${url}`);
    assert.ok(existsSync(join(buildDir, url.slice("/_next/".length))), `${url}: asset exists`);
    if (/\.(?:woff2?|ttf)$/.test(url)) localFonts.add(url);
  }
  checkedCss.add(cssPath);
}

// Flight text records are length-prefixed in bytes. Skip those HTML strings
// while reading the JSON models that contain the client component props.
function flightModels(data) {
  const models = [];
  let cursor = 0;
  while (cursor < data.length) {
    const colon = data.indexOf(58, cursor);
    if (colon === -1) break;
    cursor = colon + 1;
    if (data[cursor] === 84) { // T: a text record
      const comma = data.indexOf(44, cursor);
      const length = Number.parseInt(data.toString("ascii", cursor + 1, comma), 16);
      cursor = comma + 1 + length;
      continue;
    }
    let end = data.indexOf(10, cursor);
    if (end === -1) end = data.length;
    const line = data.toString("utf8", cursor, end);
    if (line.startsWith("[") || line.startsWith("{")) models.push(JSON.parse(line));
    cursor = end + 1;
  }
  return models;
}

function findLessons(value, lessons = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => findLessons(item, lessons));
  } else if (value && typeof value === "object") {
    if (Object.hasOwn(value, "renderedLang")) lessons.push(value);
    Object.values(value).forEach((item) => findLessons(item, lessons));
  }
  return lessons;
}

let chapterCount = 0;
for (const route of Object.keys(routes).filter((path) => path === "/" || /^\/[a-z]{2}(?:\/|$)/.test(path))) {
  const pagePath = join(buildDir, "server", "app", route === "/" ? "index" : route.slice(1));
  const html = readFileSync(`${pagePath}.html`, "utf8");
  const cssPaths = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(cssPaths.length > 0, `${route}: stylesheets exist`);
  cssPaths.forEach(checkCss);
  const css = cssPaths.map((path) => readFileSync(join(buildDir, path.replace(/^\/_next\//, "")), "utf8")).join("\n");
  for (const name of ["playfair", "crimson", "inter", "jetbrains", "cookie"]) {
    assert.ok(css.includes(`--font-${name}:`), `${route}: ${name} font variable`);
  }
  const preloads = [...html.matchAll(/<link[^>]*rel="preload"[^>]*as="font"[^>]*>/g)];
  assert.equal(preloads.length, 0, `${route}: load font subsets and styles on demand`);

  if (!route.includes("/chapters/")) continue;
  chapterCount += 1;
  const lessons = findLessons(flightModels(readFileSync(`${pagePath}.rsc`)));
  assert.ok(lessons.length > 0, `${route}: lesson props found`);
  for (const lesson of lessons) {
    assert.ok(!Object.hasOwn(lesson, "content"), `${route}: no intermediate content copy`);
    assert.ok(!Object.hasOwn(lesson, "contentLang"), `${route}: no localized source copy`);
    assert.ok(Array.isArray(lesson.toc), `${route}: precomputed table of contents`);
    for (const entry of lesson.toc) {
      assert.ok(html.includes(`id="${entry.id}"`), `${route}: TOC target ${entry.id}`);
      assert.ok(html.includes(`href="#${entry.id}"`), `${route}: TOC link ${entry.id}`);
    }
  }
}

// The site's sizing overrides must still follow KaTeX's defaults after moving
// the CSS from a remote import into the build.
const sample = readFileSync(join(buildDir, "server/app/fr/chapters/notions-fondamentales.html"), "utf8");
const styles = [...sample.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)]
  .map((match) => readFileSync(join(buildDir, match[1].replace(/^\/_next\//, "")), "utf8"))
  .join("\n");
let mathFontSize;
postcss.parse(styles).walkRules((rule) => {
  if (rule.selector !== ".katex") return;
  rule.walkDecls((declaration) => {
    if (declaration.prop === "font") mathFontSize = declaration.value;
    if (declaration.prop === "font-size") mathFontSize = declaration.value;
  });
});
assert.equal(mathFontSize, "1.05em", "Preserve the site's equation size");
assert.ok(localFonts.size > 0, "Font files are emitted locally");
console.log(`${chapterCount} chapter payloads verified without intermediate content; ${checkedCss.size} stylesheets and ${localFonts.size} local font files verified.`);
