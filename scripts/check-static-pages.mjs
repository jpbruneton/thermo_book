import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

// Run after `npm run build`. Optionally pass the origin of `next start` to
// check the public rewrites, cache headers and legacy redirects as well.
const buildDir = join(process.cwd(), ".next");
const { routes } = JSON.parse(readFileSync(join(buildDir, "prerender-manifest.json"), "utf8"));
const { rewrites } = JSON.parse(readFileSync(join(buildDir, "routes-manifest.json"), "utf8"));
const { match, compile } = createRequire(import.meta.url)("next/dist/compiled/path-to-regexp");
const publicRewrites = rewrites.map(({ source, destination }) => ({
  match: match(source),
  destination: compile(destination),
}));
const rtlLangs = new Set(["ar", "fa", "ur"]);
const expectedLangs = [
  "fr", "en", "de", "es", "pt", "it", "pl", "ru", "zh", "ja",
  "ko", "hi", "vi", "ar", "id", "tr", "bn", "ur", "sw", "fa",
];
const samplePages = [
  ["/", "/", "en"],
  ["/fr/chapters/notions-fondamentales", "/fr/chapitres/notions-fondamentales", "fr"],
];

function readHtml(route) {
  return readFileSync(join(buildDir, "server", "app", `${route === "/" ? "index" : route.slice(1)}.html`), "utf8");
}

function resolvePublicPath(publicPath) {
  for (const rewrite of publicRewrites) {
    const result = rewrite.match(publicPath);
    if (result) return rewrite.destination(result.params);
  }
  return publicPath;
}

const introduction = readHtml("/fr/chapters/introduction");
for (const lang of expectedLangs) {
  samplePages.push([`/${lang}`, `/${lang}`, lang]);
  const alternate = introduction.match(new RegExp(`hrefLang="${lang}" href="([^"]+)"`))?.[1];
  assert.ok(alternate, `${lang}: introduction translation is linked`);
  const introPath = new URL(alternate).pathname;
  samplePages.push([resolvePublicPath(introPath), introPath, lang]);
  const exerciseHub = `/${lang}/exercises`;
  const exerciseCanonical = readHtml(exerciseHub).match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(exerciseCanonical, `${lang}: exercise hub has a canonical URL`);
  samplePages.push([exerciseHub, new URL(exerciseCanonical).pathname, lang]);
}

function checkDocument(html, lang, label) {
  assert.equal((html.match(/<html\b/g) ?? []).length, 1, `${label}: one HTML document`);
  assert.match(html, new RegExp(`<html[^>]* lang="${lang}"`), `${label}: HTML language`);
  const dir = rtlLangs.has(lang) ? "rtl" : "ltr";
  assert.match(html, new RegExp(`<html[^>]* dir="${dir}"`), `${label}: text direction`);
}

const localizedRoutes = Object.keys(routes).filter((route) => /^\/[a-z]{2}(?:\/|$)/.test(route));
assert.ok(localizedRoutes.length > 0, "Localized pages must be prerendered");
for (const route of ["/", ...localizedRoutes]) {
  assert.equal(routes[route]?.initialRevalidateSeconds, false, `${route}: generated at build time`);
  const html = readHtml(route);
  checkDocument(html, route === "/" ? "en" : route.split("/")[1], route);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(canonical, `${route}: canonical URL exists`);
  const publicPath = new URL(canonical).pathname;
  assert.equal(resolvePublicPath(publicPath), route, `${publicPath}: public URL resolves to the static page`);
}

for (const [route, publicPath] of samplePages) {
  assert.ok(routes[route], `${publicPath}: must be present in the prerender manifest`);
  const html = readHtml(route);
  assert.ok(html.includes(`rel="canonical" href="https://learnthermo.org${publicPath === "/" ? "" : publicPath}"`), `${publicPath}: canonical URL`);
  if (route.includes("/chapters/")) {
    const visibleHtml = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    assert.match(visibleHtml, /class="prose-content"/, `${publicPath}: lesson body before JavaScript`);
    assert.match(visibleHtml, /<h2\b[^>]*id="/, `${publicPath}: lesson sections before JavaScript`);
    if (route.endsWith("/notions-fondamentales")) {
      assert.match(visibleHtml, /class="katex"/, `${publicPath}: prerendered equations`);
    }
    for (const targetLang of expectedLangs) {
      const alternate = html.match(new RegExp(`hrefLang="${targetLang}" href="([^"]+)"`))?.[1];
      assert.ok(alternate, `${publicPath}: ${targetLang} translation is linked`);
      assert.ok(routes[resolvePublicPath(new URL(alternate).pathname)], `${publicPath}: ${targetLang} translation is static`);
    }
  }
}

const exerciseRoutes = localizedRoutes.filter((route) => /^\/[a-z]{2}\/exercises\/[^/]+$/.test(route));
for (const lang of expectedLangs) {
  assert.ok(exerciseRoutes.some((route) => route.startsWith(`/${lang}/`)), `${lang}: exercises must be prerendered`);
}

const origin = process.argv[2];
if (origin) {
  const publicSamples = [...samplePages];
  for (const lang of expectedLangs) {
    const route = exerciseRoutes.find((path) => path.startsWith(`/${lang}/`));
    const canonical = readHtml(route).match(/rel="canonical" href="([^"]+)"/)[1];
    publicSamples.push([route, new URL(canonical).pathname, lang]);
  }
  for (const [, publicPath, lang] of publicSamples) {
    const response = await fetch(new URL(publicPath, origin));
    assert.equal(response.status, 200, `${publicPath}: public route`);
    assert.equal(response.headers.get("x-nextjs-cache"), "HIT", `${publicPath}: static cache hit`);
    assert.match(response.headers.get("cache-control") ?? "", /s-maxage=/, `${publicPath}: shared cache`);
    checkDocument(await response.text(), lang, publicPath);
  }
  for (const [path, expected] of [
    ["/fr/chapters/introduction?lesson=1", "/fr/chapitres/introduction?lesson=1"],
    ["/chapters/introduction", "/fr/chapitres/introduction"],
  ]) {
    const response = await fetch(new URL(path, origin), { redirect: "manual" });
    assert.equal(response.status, 308, `${path}: permanent redirect`);
    const location = new URL(response.headers.get("location"), origin);
    assert.equal(location.pathname + location.search, expected, `${path}: redirect destination`);
  }
  for (const path of ["/fr/chapitres/no-such-lesson", "/ja/exercises/no-such-exercise", "/unknown/nested/page"]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 404, `${path}: missing page`);
  }
  console.log("Public localized routes, cache hits, redirects and 404s verified.");
}

console.log(`${localizedRoutes.length} localized pages generated statically across all ${expectedLangs.length} languages; document languages, canonical URLs, translation links and lesson content verified.`);
