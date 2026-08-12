#!/usr/bin/env node
/**
 * Traduit une leçon (chapitre) du français vers une ou plusieurs langues cibles
 * via l'API Claude, et sauvegarde le résultat au bon endroit dans content/tex/.
 *
 * Convention de fichiers (cf. lib/chapters.ts / lib/chapterContent.server.ts) :
 *   content/tex/chpN_fr/lecon1.tex   ->   content/tex/chpN_<code>/lesson1.tex
 *
 * Usage :
 *   node --env-file=.env.local scripts/translate-lesson.mjs <N> [--langs=en,de,es] [--dry-run] [--force]
 *
 *   <N>            numéro du chapitre (1, 2, 3, ...)
 *   --langs=...    liste de codes langue séparés par des virgules (défaut : toutes les langues
 *                  planifiées dans docs/languages.md, hors fr)
 *   --dry-run      n'appelle pas l'API, affiche juste ce qui serait fait
 *   --force        écrase un fichier de traduction déjà présent (sinon il est sauté)
 *
 * Nécessite ANTHROPIC_API_KEY dans l'environnement (voir .env.local).
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");

/** Langues cibles connues, cf. docs/languages.md. Le nom est celui utilisé dans le prompt de traduction. */
const LANGUAGES = {
  en: "English",
  de: "German",
  es: "Spanish",
  pt: "Portuguese",
  zh: "Mandarin Chinese",
  ko: "Korean",
  ja: "Japanese",
  it: "Italian",
  ru: "Russian",
  hi: "Hindi",
  vi: "Vietnamese",
  pl: "Polish",
  ar: "Arabic",
  id: "Indonesian",
  tr: "Turkish",
};

function buildSystemPrompt(languageName) {
  return `You are an expert scientific translator and native speaker of the ${languageName}, with a strong background in academic writing. Your task is to translate the following LaTeX document from French into fluent, native-level scientific ${languageName}.

Strict rules to follow:

Scientific quality — Write as a native speaking researcher would. Use natural phrasing, standard academic vocabulary, and appropriate register for a scientific publication. Avoid literal translations or calques from French.
Sentence length — You may break long French sentences into shorter, clearer ones whenever it improves readability. Do not pad or inflate the text.

LaTeX structure — do not alter — Preserve all LaTeX commands, environments, labels, references (\\ref, \\cite, \\label, etc.), math environments, and document structure exactly as they appear. You may have to translate some text within latex equations.

Custom commands and macros — do not alter — The document may contain user-defined commands (e.g. \\newcommand, \\DeclareMathOperator, or shorthand macros). Keep them strictly as-is, both in their definitions and wherever they are used in the text.

Equations and math — do not alter — Translate only the surrounding prose. Leave all mathematical content, symbols, and notation completely unchanged.

Figures, tables, captions — Translate captions and labels written in natural language, but do not touch filenames, \\includegraphics paths, or numerical/symbolic content.

Do not add, remove, or reorder content — The translated document must reflect exactly the same information as the original. No summarizing, no commentary, no additions. Dont use -- characters unless there are some in the original text.

Translate from french \\og ...\\fg{} to the expected form in the targeted langage.

Output only the translated LaTeX source, with no explanation or preamble.`;
}

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (const arg of argv) {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      flags[key] = value ?? true;
    } else {
      positional.push(arg);
    }
  }
  return { positional, flags };
}

function sourceTexPath(chapterNumber) {
  return join(repoRoot, "content", "tex", `chp${chapterNumber}_fr`, "lecon1.tex");
}

function targetTexPath(chapterNumber, langCode) {
  return join(repoRoot, "content", "tex", `chp${chapterNumber}_${langCode}`, "lesson1.tex");
}

async function translateOne(client, sourceText, langCode, languageName) {
  const stream = client.messages.stream({
    model: "claude-opus-5",
    max_tokens: 64000,
    system: buildSystemPrompt(languageName),
    thinking: { type: "adaptive" },
    output_config: { effort: "high" },
    messages: [{ role: "user", content: sourceText }],
  });

  const finalMessage = await stream.finalMessage();
  const textBlocks = finalMessage.content.filter((block) => block.type === "text");
  const translated = textBlocks.map((block) => block.text).join("");

  if (finalMessage.stop_reason === "refusal") {
    throw new Error(`refus du modèle pour la langue "${langCode}"`);
  }
  if (!translated.trim()) {
    throw new Error(`réponse vide pour la langue "${langCode}" (stop_reason: ${finalMessage.stop_reason})`);
  }
  return translated;
}

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const chapterNumber = Number(positional[0]);

  if (!Number.isInteger(chapterNumber) || chapterNumber <= 0) {
    console.error("Usage: node scripts/translate-lesson.mjs <numero-chapitre> [--langs=en,de,es] [--dry-run] [--force]");
    process.exit(1);
  }

  const requestedLangs = typeof flags.langs === "string"
    ? flags.langs.split(",").map((code) => code.trim()).filter(Boolean)
    : Object.keys(LANGUAGES).filter((code) => code !== "fr");

  const unknown = requestedLangs.filter((code) => !LANGUAGES[code]);
  if (unknown.length > 0) {
    console.error(`Langue(s) inconnue(s) : ${unknown.join(", ")}. Connues : ${Object.keys(LANGUAGES).join(", ")}`);
    process.exit(1);
  }

  const srcPath = sourceTexPath(chapterNumber);
  if (!existsSync(srcPath)) {
    console.error(`Fichier source introuvable : ${srcPath}`);
    process.exit(1);
  }
  const sourceText = readFileSync(srcPath, "utf-8");

  console.log(`Chapitre ${chapterNumber} — source : ${srcPath}`);
  console.log(`Langues cibles : ${requestedLangs.join(", ")}`);

  if (flags["dry-run"]) {
    for (const code of requestedLangs) {
      console.log(`[dry-run] ${code} -> ${targetTexPath(chapterNumber, code)}`);
    }
    return;
  }

  const client = new Anthropic();
  const results = [];

  for (const code of requestedLangs) {
    const destPath = targetTexPath(chapterNumber, code);
    if (existsSync(destPath) && !flags.force) {
      console.log(`⏭  ${code} : déjà traduit (${destPath}), utilisez --force pour écraser`);
      results.push({ code, status: "skipped" });
      continue;
    }

    process.stdout.write(`… ${code} (${LANGUAGES[code]})`);
    try {
      const translated = await translateOne(client, sourceText, code, LANGUAGES[code]);
      mkdirSync(dirname(destPath), { recursive: true });
      writeFileSync(destPath, translated, "utf-8");
      console.log(` -> ✓ ${destPath}`);
      results.push({ code, status: "ok", path: destPath });
    } catch (error) {
      console.log(` -> ✗ ${error instanceof Error ? error.message : String(error)}`);
      results.push({ code, status: "error", error: String(error) });
    }
  }

  const failed = results.filter((r) => r.status === "error");
  console.log(`\nTerminé : ${results.filter((r) => r.status === "ok").length} traduit(s), ${results.filter((r) => r.status === "skipped").length} sauté(s), ${failed.length} échec(s).`);
  if (failed.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
