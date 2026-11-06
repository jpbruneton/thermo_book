// Génère les versions traduites de la figure « recompression-isotherme » (leçon 6).
//
// Référence : content/tex/figs-src/fr/recompression-isotherme.tex (géométrie, couleurs,
// maths). Le seul texte en langue naturelle est le nœud « (vide) » (le vide sous le
// piston) ; le script le remplace par le terme physique de chaque langue et ne touche
// à rien d'autre.
//
//   - Langues latines couvertes par T1 (de en es id it pl pt sw tr) : pdflatex + lmodern,
//     préambule identique au français.
//   - Autres langues (ru vi hi bn zh ja ko ar fa ur) : xelatex + fontspec[no-math] ;
//     lmodern reste chargé pour que les maths soient rendues exactement comme en français,
//     et seul le mot est composé dans une police OpenType (Latin Modern Roman pour vi,
//     Noto sinon ; Linux, voir `fc-list`). Les langues
//     RTL (ar fa ur) utilisent \beginR…\endR (TeX--XeT), sans le paquet bidi.
//
// Sorties : content/tex/figs-src/<lang>/recompression-isotherme.tex
//           content/tex/site-assets/figs/<lang>/recompression-isotherme.png
//           (pdftoppm -r 300 -png -singlefile, comme pour le français).
//
// Usage : node scripts/generate-recompression-figure.mjs [--sources-only] [lang ...]

import { execFileSync } from "node:child_process";
import { copyFileSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const NAME = "recompression-isotherme";

// word : terme traduit ; font : police Noto (absent ⇒ pdflatex + lmodern) ;
// open/close : parenthèses (pleine chasse pour zh/ja).
const locales = {
  de: { word: "Vakuum" },
  en: { word: "vacuum" },
  es: { word: "vacío" },
  id: { word: "vakum" },
  it: { word: "vuoto" },
  pl: { word: "próżnia" },
  pt: { word: "vácuo" },
  sw: { word: "ombwe" },
  tr: { word: "vakum" },
  ru: { word: "вакуум", font: "Noto Serif" },
  vi: { word: "chân không", font: "Latin Modern Roman" },
  hi: { word: "निर्वात", font: "Noto Serif Devanagari", script: "Devanagari" },
  bn: { word: "শূন্যস্থান", font: "Noto Serif Bengali", script: "Bengali" },
  zh: { word: "真空", font: "Noto Serif CJK SC", open: "（", close: "）" },
  ja: { word: "真空", font: "Noto Serif CJK JP", open: "（", close: "）" },
  ko: { word: "진공", font: "Noto Serif CJK KR" },
  ar: { word: "فراغ", font: "Noto Naskh Arabic", script: "Arabic", rtl: true },
  fa: { word: "خلأ", font: "Noto Naskh Arabic", script: "Arabic", rtl: true },
  ur: { word: "خلا", font: "Noto Naskh Arabic", script: "Arabic", rtl: true },
};

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const texRoot = join(root, "content", "tex");
const args = process.argv.slice(2);
const sourcesOnly = args.includes("--sources-only");
const selected = args.filter((arg) => arg !== "--sources-only");
const languages = selected.length ? selected : Object.keys(locales);
for (const lang of languages) {
  if (!Object.hasOwn(locales, lang)) throw new Error(`Unknown language: ${lang}`);
}

const french = readFileSync(join(texRoot, "figs-src", "fr", `${NAME}.tex`), "utf8").replaceAll("\r\n", "\n");
const FR_LABEL = "{(vide)}";
const FR_ENCODING = "\\usepackage[T1]{fontenc}\n\\usepackage[utf8]{inputenc}\n";
if (!french.includes(FR_LABEL) || !french.includes(FR_ENCODING)) {
  throw new Error("The French source changed: review generate-recompression-figure.mjs.");
}

function source(lang, x) {
  const engine = x.font ? "xelatex" : "pdflatex";
  // En-tête : remplace le bloc de commentaires initial du français.
  let tex = french.replace(/^(?:%.*\n)+/, "");
  tex = `% Source TikZ du schéma "${NAME}.png" (leçon 6), version ${lang}.\n`
    + `% Générée depuis figs-src/fr/${NAME}.tex ; seul le mot « vide » est traduit (« ${x.word} »).\n`
    + `% Compiler avec ${engine}, puis pdftoppm -r 300 -png -singlefile (PNG opaque).\n`
    + `% Régénérer : node scripts/generate-recompression-figure.mjs ${lang}\n` + tex;
  let label;
  if (x.font) {
    const options = [x.script ? `Script=${x.script}` : null, x.rtl ? null : "Renderer=HarfBuzz"].filter(Boolean).join(",");
    tex = tex.replace(FR_ENCODING, `\\usepackage[no-math]{fontspec}\n\\newfontfamily\\langfont{${x.font}}${options ? `[${options}]` : ""}\n`);
    const word = x.rtl ? `\\beginR ${x.word}\\endR` : x.word;
    if (x.rtl) tex = tex.replace("\\begin{document}", "\\TeXXeTstate=1\n\\begin{document}");
    label = x.open ? `{\\langfont ${x.open}${word}${x.close}}` : `{({\\langfont ${word}})}`;
  } else {
    label = `{(${x.word})}`;
  }
  tex = tex.replace(FR_LABEL, label);
  return { tex, engine };
}

const work = mkdtempSync(join(tmpdir(), `thermo-${NAME}-`));
try {
  for (const lang of languages) {
    const { tex, engine } = source(lang, locales[lang]);
    const sourceDir = join(texRoot, "figs-src", lang);
    const outputDir = join(texRoot, "site-assets", "figs", lang);
    mkdirSync(sourceDir, { recursive: true });
    const sourcePath = join(sourceDir, `${NAME}.tex`);
    writeFileSync(sourcePath, tex, "utf8");
    if (sourcesOnly) { console.log(`Wrote ${lang}/${NAME}.tex`); continue; }
    const buildDir = join(work, lang);
    mkdirSync(buildDir, { recursive: true });
    try {
      execFileSync(engine, ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, sourcePath], { stdio: "pipe" });
      const log = readFileSync(join(buildDir, `${NAME}.log`), "utf8");
      if (/Missing character/.test(log)) throw new Error(`Missing glyphs in ${lang}/${NAME} (see log).`);
      const stem = join(buildDir, NAME);
      execFileSync("pdftoppm", ["-r", "300", "-png", "-singlefile", `${stem}.pdf`, stem], { stdio: "pipe" });
      mkdirSync(outputDir, { recursive: true });
      copyFileSync(`${stem}.png`, join(outputDir, `${NAME}.png`));
    } catch (error) {
      const details = [error.stdout?.toString(), error.stderr?.toString(), error.message].filter(Boolean).join("\n");
      throw new Error(`Failed to build ${lang}/${NAME}:\n${details}`);
    }
    console.log(`Generated ${lang}/${NAME} (${engine})`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
