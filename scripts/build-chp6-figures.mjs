import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

// French lesson 6 only; TikZ sources are edited in content/tex/figs-src/fr.
const root = resolve(import.meta.dirname, "..");
const lesson = readFileSync(join(root, "content/tex/chp6_fr/lecon1.tex"), "utf8");
const names = [...new Set([...lesson.matchAll(/\\includegraphics(?:\[[^\]]*\])?\{figs\/fr\/(fig_[\w-]+)\.png\}/g)].map((match) => match[1]))];
if (!names.length) throw new Error("No lesson 6 figures found.");
const destinations = ["content/tex/site-assets/figs/fr", "public/figs/fr"].map((path) => join(root, path));
for (const destination of destinations) mkdirSync(destination, { recursive: true });

for (const name of names) {
  const buildDir = mkdtempSync(join(tmpdir(), "thermo-chp6-fr-"));
  try {
    const source = join(root, "content/tex/figs-src/fr", `${name}.tex`);
    execFileSync("lualatex", ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, source], { stdio: "pipe" });
    const stem = join(buildDir, name);
    execFileSync("pdftoppm", ["-png", "-r", "600", "-singlefile", `${stem}.pdf`, stem], { stdio: "pipe" });
    for (const destination of destinations) copyFileSync(`${stem}.png`, join(destination, `${name}.png`));
    console.log(`Generated fr/${name}.png`);
  } catch (error) {
    throw new Error(`Failed to build ${name}:\n${[error.stdout?.toString(), error.stderr?.toString(), error.message].filter(Boolean).join("\n")}`);
  } finally {
    rmSync(buildDir, { recursive: true, force: true });
  }
}
