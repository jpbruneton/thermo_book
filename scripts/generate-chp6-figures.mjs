import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// These translations were written directly, without a translation service/API.
// French diagrams remain the geometry and mathematical-notation reference.
const root = resolve(import.meta.dirname, "..");
const sourceRoot = join(root, "content/tex/figs-src");
const translations = JSON.parse(readFileSync(join(sourceRoot, "chp6-translations.json"), "utf8"));
const args = process.argv.slice(2);
const sourcesOnly = args.includes("--sources-only");
const selected = args.filter((arg) => arg !== "--sources-only");
const languages = selected.length ? selected : Object.keys(translations);
for (const lang of languages) {
  if (!Object.hasOwn(translations, lang)) throw new Error(`Unknown target language: ${lang}`);
}
const lesson = readFileSync(join(root, "content/tex/chp6_fr/lecon1.tex"), "utf8");
const names = [...new Set([...lesson.matchAll(/\\includegraphics(?:\[[^\]]*\])?\{figs\/fr\/(fig_[\w-]+)\.png\}/g)].map((match) => match[1]))];
if (names.length !== 7) throw new Error("Review translations: the lesson 6 figure inventory has changed.");

const fonts = {
  ar: ["Noto Naskh Arabic", "Arabic"], fa: ["Noto Naskh Arabic", "Arabic"], ur: ["Noto Naskh Arabic", "Arabic"],
  hi: ["Nirmala UI", "Devanagari"], bn: ["Nirmala UI", "Bengali"],
  zh: ["SimSun"], ja: ["Yu Gothic"], ko: ["Malgun Gothic"],
};

function translate(source, lang, name) {
  const t = translations[lang];
  const rtl = ["ar", "fa", "ur"].includes(lang);
  const [font, script] = fonts[lang] ?? ["Noto Serif"];
  const fontOptions = [rtl ? null : "Renderer=HarfBuzz", script ? `Script=${script}` : null].filter(Boolean).join(",");
  const wrap = (text) => `\\Lang{${text}}`;
  const lines = (items) => items.map(wrap).join("\\\\\n     ");
  let result = source.replace(/^[ \t]*%.*\r?\n/gm, "");
  result = `% Lesson 6 TikZ (${lang}): ${name}.\n% Regenerate: node scripts/generate-chp6-figures.mjs ${lang}\n` + result;
  result = result.replace("\\setmainfont{Noto Serif}", `\\setmainfont{${font}}${fontOptions ? `[${fontOptions}]` : ""}`);
  result = result.replace("\\begin{document}", `${rtl ? "\\usepackage{bidi}\n\\newcommand{\\Lang}[1]{\\RL{#1}}" : "\\newcommand{\\Lang}[1]{#1}"}\n\\begin{document}`);

  const replacements = [
    ["Bilan global si $\\eta_{\\mathcal M}>\\eta_{\\mathcal M'}$ :", `${wrap(t.condition)}\\\\\n     $\\eta_{\\mathcal M}>\\eta_{\\mathcal M'}$`],
    ["Bilan global :", wrap(t.balance)],
    ["transfert du froid vers le chaud, sans travail extérieur", lines(t.transfer)],
    ["chaleur prélevée au seul thermostat chaud\n     et convertie en travail", lines(t.conversion)],
    ["Thermostat chaud", wrap(t.hot)], ["Thermostat froid", wrap(t.cold)],
    ["Thermostat unique", wrap(t.single)], ["Thermostat commun", wrap(t.common)],
  ];
  result = result.replaceAll("\r\n", "\n");
  for (const [french, localized] of replacements) result = result.replaceAll(french, localized);
  // Wider annotations accommodate translations; anchors and heat-flow paths stay fixed.
  result = result.replaceAll("text width=2.5cm", "text width=4.1cm").replaceAll("text width=2.8cm", "text width=4.1cm");
  if (rtl) result = result.replaceAll("align=left", "align=right");
  if (/Thermostat|Bilan global|transfert du froid|chaleur prélevée/.test(result)) {
    throw new Error(`Untranslated label in ${lang}/${name}`);
  }
  const math = (text) => [...text.matchAll(/\$([^$]+)\$/g)].map((match) => match[1]);
  if (JSON.stringify(math(source)) !== JSON.stringify(math(result))) {
    throw new Error(`Mathematical notation changed in ${lang}/${name}`);
  }
  return result;
}

for (const lang of languages) {
  mkdirSync(join(sourceRoot, lang), { recursive: true });
  for (const name of names) {
    const source = readFileSync(join(sourceRoot, "fr", `${name}.tex`), "utf8");
    writeFileSync(join(sourceRoot, lang, `${name}.tex`), translate(source, lang, name), "utf8");
  }
  console.log(`Translated ${names.length} TikZ sources into ${lang}`);
}
if (!sourcesOnly) {
  execFileSync(process.execPath, [join(root, "scripts/build-chp6-figures.mjs"), ...languages], { stdio: "inherit" });
}
