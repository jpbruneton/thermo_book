/**
 * Compile la banque d'exercices en un PDF structuré en 3 parties :
 *   Partie I   — Énoncés (exercices numérotés avec titre)
 *   Partie II  — Indications (référence au numéro de l'exercice)
 *   Partie III — Solutions
 *
 * Usage :
 *   node scripts/build-exercises-pdf.mjs [fr|en] [--sans-solutions]
 *
 * Sortie : public/pdfs/exercises_fr.pdf  (ou _en, ou _fr_sans_solutions)
 */

import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

const args = process.argv.slice(2);
const lang = args.includes("en") ? "en" : "fr";
const sansSolutions = args.includes("--sans-solutions");

const srcFile = join(repoRoot, "content", "tex", `exercises_${lang}.tex`);
if (!existsSync(srcFile)) { console.error(`❌ Source not found: ${srcFile}`); process.exit(1); }

// ── Parser ─────────────────────────────────────────────────────────────────
const source = readFileSync(srcFile, "utf-8");

function readBalancedArg(input, openIdx) {
  if (input[openIdx] !== "{") return null;
  let depth = 1, c = openIdx + 1, content = "";
  while (c < input.length && depth > 0) {
    const ch = input[c], prev = c > 0 ? input[c - 1] : "";
    if (ch === "{" && prev !== "\\") { depth++; content += ch; c++; continue; }
    if (ch === "}" && prev !== "\\") { depth--; if (depth > 0) content += ch; c++; continue; }
    content += ch; c++;
  }
  return depth !== 0 ? null : { content, endIndex: c };
}

function extractEnv(src, env, from = 0) {
  const bTag = `\\begin{${env}}`, eTag = `\\end{${env}}`;
  const bStart = src.indexOf(bTag, from);
  if (bStart === -1) return null;
  let depth = 1, c = bStart + bTag.length;
  while (c < src.length && depth > 0) {
    const b = src.indexOf(bTag, c), e = src.indexOf(eTag, c);
    if (e === -1) return null;
    if (b !== -1 && b < e) { depth++; c = b + bTag.length; }
    else { depth--; if (depth === 0) return { content: src.slice(bStart + bTag.length, e).trim(), start: bStart, end: e + eTag.length }; c = e + eTag.length; }
  }
  return null;
}

const exercises = [];
const beginTag = "\\begin{exo}", endTag = "\\end{exo}";
let cursor = 0, counter = 1;

while (cursor < source.length) {
  const bStart = source.indexOf(beginTag, cursor);
  if (bStart === -1) break;
  const eEnd = source.indexOf(endTag, bStart);
  if (eEnd === -1) break;
  const raw = source.slice(bStart, eEnd + endTag.length);

  let c = beginTag.length, title = "", id = `exo-${counter}`;
  while (c < raw.length && /[ \t]/.test(raw[c])) c++;
  if (raw[c] === "[") { const cl = raw.indexOf("]", c + 1); if (cl !== -1) { title = raw.slice(c + 1, cl).trim(); c = cl + 1; } }
  while (c < raw.length && /[ \t]/.test(raw[c])) c++;
  if (raw[c] === "{") { const bl = readBalancedArg(raw, c); if (bl?.content.trim()) { id = bl.content.trim(); c = bl.endIndex; } }

  const body = raw.slice(c, raw.lastIndexOf(endTag)).trim();
  const indicationBlock = extractEnv(body, "indication");
  const solutionBlock = extractEnv(body, "solution");

  let enonce = body;
  enonce = enonce.replace(/\\lecon\{[^}]*\}/g, "").replace(/\\keywords\{[^}]*\}/g, "");
  const ind2 = extractEnv(enonce, "indication");
  if (ind2) enonce = enonce.slice(0, ind2.start) + enonce.slice(ind2.end);
  const sol2 = extractEnv(enonce, "solution");
  if (sol2) enonce = enonce.slice(0, sol2.start) + enonce.slice(sol2.end);

  exercises.push({ number: counter, id, title, enonce: enonce.trim(), indication: indicationBlock?.content ?? null, solution: solutionBlock?.content ?? null });
  counter++;
  cursor = eEnd + endTag.length;
}

console.log(`Parsed ${exercises.length} exercises from ${srcFile}`);

// ── Assemble LaTeX ─────────────────────────────────────────────────────────
const isFr = lang === "fr";
const L = {
  part1: isFr ? "Énoncés" : "Exercises",
  part2: isFr ? "Indications" : "Hints",
  part3: isFr ? "Solutions" : "Solutions",
  exo: isFr ? "Exercice" : "Exercise",
  title: isFr ? "Exercices de thermodynamique" : "Thermodynamics — Exercises",
  babel: isFr ? "french" : "english",
  noHints: isFr ? "Aucune indication pour cette série." : "No hints for this set.",
  noSols: isFr ? "Aucune solution disponible." : "No solutions available.",
  toc: isFr ? "Table des matières" : "Table of Contents",
};

// Plain-text form of a heading for \addcontentsline: drops math delimiters and LaTeX
// commands, then escapes characters (^, _, &, #, %, ~) that are only valid in math mode
// or need escaping in text mode — otherwise they break the typeset TOC page.
function tocSafe(text) {
  let result = text.replace(/\$([^$]*)\$/g, "$1");
  result = result.replace(/\\[a-zA-Z]+\*?/g, "").replace(/[{}\\]/g, "");
  result = result.replace(/[_#&%~]/g, "\\$&");
  result = result.replace(/\^/g, "\\textasciicircum{}");
  return result.replace(/\s+/g, " ").trim();
}

function exoHeading(e) {
  const label = e.title ? `${L.exo}~${e.number} — ${e.title}` : `${L.exo}~${e.number}`;
  const tocLabel = e.title ? `${L.exo} ${e.number} — ${tocSafe(e.title)}` : `${L.exo} ${e.number}`;
  return `\\subsection*{${label}}\n\\addcontentsline{toc}{subsection}{${tocLabel}}`;
}

const part1Tex = exercises.map((e) => `${exoHeading(e)}\n${e.enonce}`).join("\n\n\\bigskip\n\n");

const exosWithHints = exercises.filter((e) => e.indication);
const part2Tex = exosWithHints.length === 0 ? L.noHints : exosWithHints.map((e) => {
  const h = e.title ? `\\textbf{${L.exo}~${e.number} — ${e.title}}` : `\\textbf{${L.exo}~${e.number}}`;
  return `${h} : ${e.indication}`;
}).join("\n\n");

const exosWithSols = exercises.filter((e) => e.solution);
const part3Tex = sansSolutions ? null : (exosWithSols.length === 0 ? L.noSols : exosWithSols.map((e) => `${exoHeading(e)}\n${e.solution}`).join("\n\n\\bigskip\n\n"));

const headerFile = join(repoRoot, "content", "tex", `header_${lang}.tex`);
const header = existsSync(headerFile) ? readFileSync(headerFile, "utf-8") : "";

const tex = `\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[${L.babel}]{babel}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{geometry}
\\geometry{margin=2.5cm}
\\usepackage{enumitem}
\\usepackage{graphicx}
\\graphicspath{{public/figs/}}
\\setlength{\\parskip}{0.4em}
\\setcounter{tocdepth}{2}
\\usepackage{hyperref}
\\hypersetup{hidelinks}

${header}

\\begin{document}

\\begin{center}
  {\\Large\\bfseries ${L.title}}
\\end{center}
\\vspace{1.5em}

\\tableofcontents
\\newpage

\\section*{Partie I — ${L.part1}}
\\addcontentsline{toc}{section}{Partie I — ${L.part1}}
${part1Tex}

\\newpage
\\section*{Partie II — ${L.part2}}
\\addcontentsline{toc}{section}{Partie II — ${L.part2}}
${part2Tex}

${part3Tex !== null ? `\\newpage\n\\section*{Partie III — ${L.part3}}\n\\addcontentsline{toc}{section}{Partie III — ${L.part3}}\n${part3Tex}` : ""}

\\end{document}
`;

// ── Compile ────────────────────────────────────────────────────────────────
const tmpDir = join(repoRoot, "scripts", "latex-tmp");
mkdirSync(tmpDir, { recursive: true });
const suffix = sansSolutions ? "_sans_solutions" : "";
const texOut = join(tmpDir, `exercises_${lang}${suffix}.tex`);
writeFileSync(texOut, tex, "utf-8");
console.log(`Wrote ${texOut}`);

const pdflatex = process.env.PDFLATEX ?? "pdflatex";
// 3 passes: pass 1 writes the .toc, pass 2 renders it (shifting later page numbers),
// pass 3 re-resolves those page numbers now that the .toc itself takes up pages.
for (let pass = 1; pass <= 3; pass++) {
  const r = spawnSync(pdflatex, ["-interaction=nonstopmode", "-output-directory", tmpDir, texOut], { cwd: repoRoot, encoding: "utf-8" });
  if (r.status !== 0) { console.error(`pdflatex pass ${pass} failed:\n${(r.stdout ?? "").slice(-2000)}`); process.exit(1); }
  console.log(`  pdflatex pass ${pass} OK`);
}

const pdfSrc = join(tmpDir, `exercises_${lang}${suffix}.pdf`);
const pdfDest = join(repoRoot, "public", "pdfs", `exercises_${lang}${suffix}.pdf`);
mkdirSync(dirname(pdfDest), { recursive: true });
copyFileSync(pdfSrc, pdfDest);
console.log(`✓ PDF written to ${pdfDest}`);
