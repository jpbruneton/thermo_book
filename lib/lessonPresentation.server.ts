import "server-only";
import type { Lang } from "./i18n";
import type { LessonPresentation, LessonTocEntry } from "./lessonPresentation";
import { processLatex } from "./latex";

function simplifyLatexForToc(value: string): string {
  let result = value;
  result = result.replace(/\\mathbb\{([^{}]+)\}/g, "$1");
  result = result.replace(/\\mathcal\{([^{}]+)\}/g, "$1");
  result = result.replace(/\\ell/g, "ℓ");
  result = result.replace(/\\C/g, "C");
  result = result.replace(/\\N/g, "N");
  result = result.replace(/\\R/g, "R");
  result = result.replace(/\\to/g, "→");
  result = result.replace(/\\rightarrow/g, "→");
  result = result.replace(/[_^]\{([^{}]+)\}/g, "$1");
  result = result.replace(/[_^]([A-Za-z0-9]+)/g, "$1");
  result = result.replace(/\\[a-zA-Z]+/g, "");
  result = result.replace(/[{}]/g, "");
  result = result.replace(/\s*([()])/g, "$1").replace(/([()])\s*/g, "$1");
  result = result.replace(/([A-Za-zℓ])\s+(\d)/g, "$1$2");
  result = result.replace(/(\d)\s+([A-Za-z])/g, "$1$2");
  return result.replace(/\s+/g, " ").trim();
}

function stripHtmlForToc(value: string): string {
  const withoutKatexMathMl = value.replace(
    /<span class="katex-mathml">[\s\S]*?<\/span>/g,
    ""
  );
  const htmlStripped = withoutKatexMathMl.replace(/<[^>]+>/g, " ");
  const withoutInlineMathDelimiters = htmlStripped.replace(/\$+([\s\S]*?)\$+/g, (_m, math: string) =>
    simplifyLatexForToc(math)
  );
  const compact = withoutInlineMathDelimiters
    .replace(/\s*([()])/g, "$1")
    .replace(/([()])\s*/g, "$1")
    .replace(/([A-Za-zℓ])\s+(\d)/g, "$1$2")
    .replace(/(\d)\s+([A-Za-z])/g, "$1$2");
  return compact.replace(/\s+/g, " ").trim();
}

function slugify(value: string): string {
  const normalized = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return normalized || "section";
}

export function prepareLessonPresentation(
  sourceHtml: string,
  lang: Lang
): Pick<LessonPresentation, "renderedLang" | "toc"> {
  const rendered = sourceHtml ? processLatex(sourceHtml) : "";
  const localizedContent = rendered.replace(
    /<sup class="lesson-cite" data-cite-en="([^"]*)" data-cite-fr="([^"]*)">\[[^\]]*\]<\/sup>/g,
    (_match, enRaw: string, frRaw: string) => {
      const preferred = lang === "fr" ? frRaw : enRaw;
      const fallback = lang === "fr" ? enRaw : frRaw;
      const value = preferred && preferred !== "?" ? preferred : fallback && fallback !== "?" ? fallback : "?";
      return `<sup class="lesson-cite">[${value}]</sup>`;
    }
  );

  // Use the source headings to avoid duplicate KaTeX HTML/MathML in the TOC.
  const sourceHeadingTexts: string[] = [];
  sourceHtml.replace(/<(h[2-4])>([\s\S]*?)<\/\1>/g, (_match, _tag, headingInner: string) => {
    const plainMath = headingInner.replace(/\$+([\s\S]*?)\$+/g, (_m, math: string) =>
      simplifyLatexForToc(math)
    );
    sourceHeadingTexts.push(stripHtmlForToc(plainMath));
    return "";
  });

  const toc: LessonTocEntry[] = [];
  const usedIds: Record<string, number> = {};
  let headingIndex = 0;
  const renderedLang = localizedContent.replace(
    /<(h[2-4])>([\s\S]*?)<\/\1>/g,
    (_match, tag: string, headingInner: string) => {
      const level = Number(tag.slice(1)) as LessonTocEntry["level"];
      const text = sourceHeadingTexts[headingIndex] || stripHtmlForToc(headingInner);
      headingIndex += 1;
      const baseId = slugify(text);
      const current = usedIds[baseId] ?? 0;
      usedIds[baseId] = current + 1;
      const id = current > 0 ? `${baseId}-${current + 1}` : baseId;
      toc.push({ id, text, level });
      return `<${tag} id="${id}">${headingInner}</${tag}>`;
    }
  );

  return { renderedLang, toc };
}
