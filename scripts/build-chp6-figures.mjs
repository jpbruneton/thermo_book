import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";

// Compile existing lesson 6 TikZ sources locally (French by default).
const root = resolve(import.meta.dirname, "..");
const lesson = readFileSync(join(root, "content/tex/chp6_fr/lecon1.tex"), "utf8");
const names = [...new Set([...lesson.matchAll(/\\includegraphics(?:\[[^\]]*\])?\{figs\/fr\/(fig_[\w-]+)\.png\}/g)].map((match) => match[1]))];
if (!names.length) throw new Error("No lesson 6 figures found.");
const selected = process.argv.slice(2);
const languages = selected.length ? selected : ["fr"];
for (const lang of languages) {
  if (!/^[a-z]{2}$/.test(lang)) throw new Error(`Invalid language: ${lang}`);
  const destinations = [`content/tex/site-assets/figs/${lang}`, `public/figs/${lang}`].map((path) => join(root, path));
  for (const destination of destinations) mkdirSync(destination, { recursive: true });

  for (const name of names) {
    const buildDir = mkdtempSync(join(tmpdir(), `thermo-chp6-${lang}-`));
    // Verify the temporary target before recursive cleanup (also on Windows).
    if (dirname(resolve(buildDir)) !== resolve(tmpdir())) throw new Error(`Unexpected build path: ${buildDir}`);
    try {
      const source = join(root, "content/tex/figs-src", lang, `${name}.tex`);
      const engine = ["ar", "fa", "ur"].includes(lang) ? "xelatex" : "lualatex";
      execFileSync(engine, ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, source], { stdio: "pipe" });
      const log = readFileSync(join(buildDir, `${name}.log`), "utf8");
      if (/Missing character:|Overfull \\[hv]box/.test(log)) {
        throw new Error(`Missing glyphs or overflowing text:\n${log.split("\n").filter((line) => /Missing character:|Overfull/.test(line)).join("\n")}`);
      }
      const stem = join(buildDir, name);
      execFileSync("pdftoppm", ["-png", "-r", "600", "-singlefile", `${stem}.pdf`, stem], { stdio: "pipe" });
      for (const destination of destinations) copyFileSync(`${stem}.png`, join(destination, `${name}.png`));
      console.log(`Generated ${lang}/${name}.png`);
    } catch (error) {
      throw new Error(`Failed to build ${lang}/${name}:\n${[error.stdout?.toString(), error.stderr?.toString(), error.message].filter(Boolean).join("\n")}`);
    } finally {
      rmSync(buildDir, { recursive: true, force: true });
    }
  }
}
