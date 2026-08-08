import "server-only";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export interface ExerciseEntry {
  /** Sequential number in the file (1, 2, …). */
  number: number;
  /** Identifier from \begin{exo}[...]{id}, or auto-generated. */
  id: string;
  /** Title (TeX) from \begin{exo}[Title]{...}. Empty string if absent. */
  titleTex: string;
  /** Lesson number from \lecon{N}. 0 if absent. */
  lecon: number;
  /** Keywords from \keywords{k1, k2, ...}. */
  keywords: string[];
  /** Exercise body (without indication/solution blocks). */
  enonceTex: string;
  /** Explicit editorial approval for indexing; false unless \seoready{true} is present. */
  seoReady: boolean;
  /** Indication block body, or null. */
  indicationTex: string | null;
  /** Solution block body, or null. */
  solutionTex: string | null;
}

function exercisesFilePath(lang: "fr" | "en"): string {
  return join(process.cwd(), "content", "tex", `exercises_${lang}.tex`);
}

/** Extract the content of a balanced brace group starting at openBraceIndex. */
function readBalancedArg(input: string, openBraceIndex: number): { content: string; endIndex: number } | null {
  if (input[openBraceIndex] !== "{") return null;
  let depth = 1;
  let cursor = openBraceIndex + 1;
  let content = "";
  while (cursor < input.length && depth > 0) {
    const ch = input[cursor];
    const prev = cursor > 0 ? input[cursor - 1] : "";
    if (ch === "{" && prev !== "\\") { depth++; content += ch; cursor++; continue; }
    if (ch === "}" && prev !== "\\") { depth--; if (depth > 0) { content += ch; } cursor++; continue; }
    content += ch;
    cursor++;
  }
  if (depth !== 0) return null;
  return { content, endIndex: cursor };
}

/** Extract \command{...} value from a TeX source string. */
function extractCmd(source: string, command: string): string | null {
  const marker = `\\${command}`;
  let index = 0;
  while (index < source.length) {
    const start = source.indexOf(marker, index);
    if (start === -1) return null;
    const after = start + marker.length;
    const nextChar = source[after] ?? "";
    if (/[a-zA-Z]/.test(nextChar)) { index = after; continue; }
    let cursor = after;
    while (cursor < source.length && /[ \t]/.test(source[cursor])) cursor++;
    if (source[cursor] !== "{") { index = cursor; continue; }
    const block = readBalancedArg(source, cursor);
    if (!block) return null;
    return block.content.trim();
  }
  return null;
}

/** Extract content between \begin{env} and \end{env}, handling nesting. */
function extractEnv(source: string, env: string, startFrom = 0): { content: string; start: number; end: number } | null {
  const beginTag = `\\begin{${env}}`;
  const endTag = `\\end{${env}}`;
  const bStart = source.indexOf(beginTag, startFrom);
  if (bStart === -1) return null;
  let depth = 1;
  let cursor = bStart + beginTag.length;
  while (cursor < source.length && depth > 0) {
    const b = source.indexOf(beginTag, cursor);
    const e = source.indexOf(endTag, cursor);
    if (e === -1) return null;
    if (b !== -1 && b < e) { depth++; cursor = b + beginTag.length; }
    else { depth--; if (depth === 0) { return { content: source.slice(bStart + beginTag.length, e).trim(), start: bStart, end: e + endTag.length }; } cursor = e + endTag.length; }
  }
  return null;
}

/** Parse one raw \begin{exo}...\end{exo} block. */
function parseExoBlock(rawBlock: string, counter: number): ExerciseEntry {
  const beginExo = "\\begin{exo}";
  const endExo = "\\end{exo}";
  const startIdx = rawBlock.indexOf(beginExo);
  let titleTex = "";
  let id = `exo-${counter}`;
  let cursor = startIdx !== -1 ? startIdx + beginExo.length : 0;

  // Skip spaces/tabs (not newlines yet — title/id on same line)
  while (cursor < rawBlock.length && /[ \t]/.test(rawBlock[cursor])) cursor++;

  // Optional [title]
  if (rawBlock[cursor] === "[") {
    const close = rawBlock.indexOf("]", cursor + 1);
    if (close !== -1) { titleTex = rawBlock.slice(cursor + 1, close).trim(); cursor = close + 1; }
  }
  while (cursor < rawBlock.length && /[ \t]/.test(rawBlock[cursor])) cursor++;

  // Optional {id}
  if (rawBlock[cursor] === "{") {
    const block = readBalancedArg(rawBlock, cursor);
    if (block && block.content.trim()) { id = block.content.trim(); cursor = block.endIndex; }
  }

  // Body = everything from cursor to \end{exo}
  const endIdx = rawBlock.lastIndexOf(endExo);
  const body = rawBlock.slice(cursor, endIdx !== -1 ? endIdx : undefined).trim();

  const leconRaw = extractCmd(body, "lecon");
  const lecon = leconRaw ? (parseInt(leconRaw, 10) || 0) : 0;

  const kwRaw = extractCmd(body, "keywords");
  const keywords = kwRaw ? kwRaw.split(",").map((k) => k.trim()).filter(Boolean) : [];

  // Draft-safe by default: a new exercise is never added to search surfaces
  // until the author explicitly opts it in from the TeX source.
  const seoReadyRaw = extractCmd(body, "seoready");
  const seoReady = /^(true|yes|1|ready|published)$/i.test(seoReadyRaw ?? "");

  const indicationBlock = extractEnv(body, "indication");
  const indicationTex = indicationBlock ? indicationBlock.content : null;

  const solutionBlock = extractEnv(body, "solution");
  const solutionTex = solutionBlock ? solutionBlock.content : null;

  // Énoncé = body minus metadata commands and blocks
  let enonceTex = body;
  enonceTex = enonceTex.replace(/\\lecon\{[^}]*\}/g, "");
  enonceTex = enonceTex.replace(/\\keywords\{[^}]*\}/g, "");
  enonceTex = enonceTex.replace(/\\seoready\{[^}]*\}/g, "");
  const indBlock2 = extractEnv(enonceTex, "indication");
  if (indBlock2) enonceTex = enonceTex.slice(0, indBlock2.start) + enonceTex.slice(indBlock2.end);
  const solBlock2 = extractEnv(enonceTex, "solution");
  if (solBlock2) enonceTex = enonceTex.slice(0, solBlock2.start) + enonceTex.slice(solBlock2.end);
  enonceTex = enonceTex.trim();

  return { number: counter, id, titleTex, lecon, keywords, enonceTex, seoReady, indicationTex, solutionTex };
}

/** Load and parse all exercises from the single-file bank. */
export function loadExercises(lang: "fr" | "en"): ExerciseEntry[] {
  const path = exercisesFilePath(lang);
  if (!existsSync(path)) return [];
  const source = readFileSync(path, "utf-8");

  const results: ExerciseEntry[] = [];
  const beginTag = "\\begin{exo}";
  const endTag = "\\end{exo}";
  let cursor = 0;
  let counter = 1;

  while (cursor < source.length) {
    const bStart = source.indexOf(beginTag, cursor);
    if (bStart === -1) break;
    const eEnd = source.indexOf(endTag, bStart);
    if (eEnd === -1) break;
    const rawBlock = source.slice(bStart, eEnd + endTag.length);
    results.push(parseExoBlock(rawBlock, counter));
    counter++;
    cursor = eEnd + endTag.length;
  }
  return results;
}

export function hasExercises(lang: "fr" | "en"): boolean {
  return existsSync(exercisesFilePath(lang)) && loadExercises(lang).length > 0;
}

/** Finds an exercise by its stable public identifier. */
export function getExerciseById(lang: "fr" | "en", id: string): ExerciseEntry | undefined {
  return loadExercises(lang).find((exercise) => exercise.id === id);
}

/**
 * Produces a compact human-readable title for metadata and structured data.
 * Exercise headings contain only light inline TeX, so preserving the symbols is
 * preferable to exposing raw dollar delimiters and commands in search results.
 */
export function exerciseTitleToPlainText(titleTex: string): string {
  const superscript: Record<string, string> = {
    "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
    "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
    "+": "⁺", "-": "⁻",
  };
  const subscript: Record<string, string> = {
    "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
    "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
    "+": "₊", "-": "₋",
  };
  const mapScript = (value: string, table: Record<string, string>) =>
    value.split("").map((character) => table[character] ?? character).join("");

  return titleTex
    .replace(/\\text\{([^{}]*)\}/g, "$1")
    .replace(/\^\{?([0-9+-]+)\}?/g, (_match, value: string) => mapScript(value, superscript))
    .replace(/_\{?([0-9+-]+)\}?/g, (_match, value: string) => mapScript(value, subscript))
    .replace(/\\ln\b/g, "ln")
    .replace(/\\([a-zA-Z]+)\b/g, "$1")
    .replace(/[$\{\}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
