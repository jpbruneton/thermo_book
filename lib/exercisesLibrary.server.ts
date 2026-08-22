import "server-only";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { Lang } from "@/lib/i18n";

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

interface ExerciseSourceFile {
  chapter: number;
  path: string;
}

function exercisesDirectory(lang: Lang): string {
  return join(process.cwd(), "content", `exos_${lang}`);
}

/** Return chapter files in numeric order (exo_chp2 before exo_chp10). */
function exerciseSourceFiles(lang: Lang): ExerciseSourceFile[] {
  const directory = exercisesDirectory(lang);
  if (!existsSync(directory)) return [];

  return readdirSync(directory)
    .map((name) => {
      const match = /^exo_chp(\d+)\.tex$/i.exec(name);
      if (!match) return null;
      return {
        chapter: Number.parseInt(match[1], 10),
        path: join(directory, name),
      };
    })
    .filter((source): source is ExerciseSourceFile => source !== null)
    .sort((a, b) => a.chapter - b.chapter);
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
function parseExoBlock(rawBlock: string, counter: number, chapter: number): ExerciseEntry {
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

  // The chapter filename is the source of truth. Existing \lecon metadata is
  // still accepted in authored files, but is no longer required for grouping.
  const lecon = chapter;

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

/** Load and parse every chapter file from content/exos_<lang>/exo_chpN.tex. */
export function loadExercises(lang: Lang): ExerciseEntry[] {
  const results: ExerciseEntry[] = [];
  const beginTag = "\\begin{exo}";
  const endTag = "\\end{exo}";
  let counter = 1;

  for (const sourceFile of exerciseSourceFiles(lang)) {
    const source = readFileSync(sourceFile.path, "utf-8");
    let cursor = 0;

    while (cursor < source.length) {
      const bStart = source.indexOf(beginTag, cursor);
      if (bStart === -1) break;
      const eEnd = source.indexOf(endTag, bStart);
      if (eEnd === -1) break;
      const rawBlock = source.slice(bStart, eEnd + endTag.length);
      results.push(parseExoBlock(rawBlock, counter, sourceFile.chapter));
      counter++;
      cursor = eEnd + endTag.length;
    }
  }

  return results;
}

export function hasExercises(lang: Lang): boolean {
  return exerciseSourceFiles(lang).length > 0 && loadExercises(lang).length > 0;
}

/** Finds an exercise by its stable public identifier. */
export function getExerciseById(lang: Lang, id: string): ExerciseEntry | undefined {
  return loadExercises(lang).find((exercise) => exercise.id === id);
}

/**
 * Public exercise slugs are localized when the language uses a Latin alphabet.
 * For other writing systems we keep the stable ASCII source id: native-script
 * URLs are percent-encoded when shared, while the language prefix and page
 * content remain fully localized.
 */
const SOURCE_ID_SLUG_LANGS = new Set<Lang>([
  "fr", "ru", "zh", "ja", "ko", "hi", "ar", "bn", "ur", "fa",
]);

function asciiSlug(value: string): string {
  return value
    .replace(/[äÄ]/g, "ae")
    .replace(/[öÖ]/g, "oe")
    .replace(/[üÜ]/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[łŁ]/g, "l")
    .replace(/[đĐ]/g, "d")
    .replace(/[ıİ]/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getExerciseUrlSlug(lang: Lang, exercise: ExerciseEntry): string {
  if (SOURCE_ID_SLUG_LANGS.has(lang)) return exercise.id;
  return asciiSlug(exerciseTitleToPlainText(exercise.titleTex)) || exercise.id;
}

/** Accept the localized public slug as well as the stable legacy id. */
export function getExerciseByUrlSlug(lang: Lang, slug: string): ExerciseEntry | undefined {
  return loadExercises(lang).find(
    (exercise) => exercise.id === slug || getExerciseUrlSlug(lang, exercise) === slug
  );
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
