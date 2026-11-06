import { execFileSync as execFontQuery } from "node:child_process";

// Polices Windows d'origine ; sous Linux, repli sur les polices Noto installées.
const FONT_FALLBACKS = {
  "Nirmala UI|Devanagari": "Noto Serif Devanagari",
  "Nirmala UI|Bengali": "Noto Serif Bengali",
  "SimSun|": "Noto Serif CJK SC",
  "Yu Gothic|": "Noto Sans CJK JP",
  "Malgun Gothic|": "Noto Sans CJK KR",
};
export function resolveFont(font, script = "") {
  let installed = "";
  try { installed = execFontQuery("fc-list", [":", "family"], { encoding: "utf8" }); } catch { return font; }
  if (installed.split("\n").some((line) => line.split(",").includes(font))) return font;
  return FONT_FALLBACKS[`${font}|${script}`] ?? FONT_FALLBACKS[`${font}|`] ?? font;
}
