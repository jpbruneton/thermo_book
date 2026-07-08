"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/lib/chapters";
import { useLang } from "@/app/context/LangContext";
import { sectionHref } from "@/lib/i18n";

interface Props {
  lesson: LessonWithLocalizedContent;
  hideHeader?: boolean;
  /** Rendered after the keyword bubbles, just above the lesson's first section. */
  topNav?: ReactNode;
}

interface LessonWithLocalizedContent extends Lesson {
  contentFr: string;
  contentEn: string;
  renderedFr: string;
  renderedEn: string;
}

interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3 | 4;
}

function getLessonPdfRelativePath(lesson: Lesson, lang: "fr" | "en"): string {
  const ficheMatch = lesson.texFile.match(/(?:theme|chp)(\d+)_(?:fr|en)\/(fiche\d+)\.tex$/);
  if (ficheMatch) {
    const themeNumber = ficheMatch[1];
    const ficheName = ficheMatch[2];
    return `chp${themeNumber}_${lang}/${ficheName}.pdf`;
  }
  const lessonMatch = lesson.texFile.match(/(?:theme|chp)(\d+)_(?:fr|en)\/(?:lecon|lesson)(\d+)\.tex$/);
  if (!lessonMatch) return lesson.pdfFile;
  const themeNumber = lessonMatch[1];
  const lessonNumber = lesson.number;
  const directory = `chp${themeNumber}_${lang}`;
  const fileName = lang === "fr" ? `lecon${lessonNumber}.pdf` : `lesson${lessonNumber}.pdf`;
  return `${directory}/${fileName}`;
}

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

export function ChapterContent({ lesson, hideHeader = false, topNav }: Props) {
  const [tab, setTab] = useState<"web" | "refs" | "pdf">("web");
  const [activeTocId, setActiveTocId] = useState("");
  const [tocVisible, setTocVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t, lang } = useLang();
  const englishReferences = lesson.references.filter((reference) => reference.language === "en");
  const frenchReferences = lesson.references.filter((reference) => reference.language === "fr");
  const lessonContent = lang === "en" ? lesson.contentEn : lesson.contentFr;
  const pdfRelativePath = useMemo(() => getLessonPdfRelativePath(lesson, lang), [lesson, lang]);
  const pdfFileLabel = pdfRelativePath.includes("/")
    ? pdfRelativePath.slice(pdfRelativePath.lastIndexOf("/") + 1)
    : pdfRelativePath;
  const hasLessonContent = lessonContent.trim().length > 0;
  const lessonHeadingFr = lesson.subtitleFr.trim() || lesson.titleFr;
  const lessonHeadingEn = lesson.subtitleEn.trim() || lesson.titleEn;
  const lessonHeading = lang === "fr" ? lessonHeadingFr : lessonHeadingEn;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [lesson.slug]);

  const renderedContent = useMemo(
    () => (lang === "en" ? lesson.renderedEn || lesson.renderedFr : lesson.renderedFr),
    [lang, lesson.renderedFr, lesson.renderedEn]
  );
  const splitReferenceLabel = (label: string, fallbackUrl: string) => {
    const normalizedLabel = label.replace(/\s+/g, " ").trim();
    const inlineUrlMatch = normalizedLabel.match(/https?:\/\/[^\s]+/i);
    const linkUrl = inlineUrlMatch ? inlineUrlMatch[0] : fallbackUrl.trim();

    if (!linkUrl) return { before: normalizedLabel, url: "", after: "" };

    const index = normalizedLabel.indexOf(linkUrl);
    if (index === -1) {
      return { before: normalizedLabel, url: linkUrl, after: "" };
    }

    const before = normalizedLabel.slice(0, index);
    const after = normalizedLabel.slice(index + linkUrl.length);
    return { before, url: linkUrl, after };
  };
  const formatReferenceLines = (label: string, url: string) => {
    const structuredSeparator = "|||";
    if (label.includes(structuredSeparator)) {
      const [rawAuthor, rawDescription] = label.split(structuredSeparator);
      return {
        author: (rawAuthor || "").replace(/\s+/g, " ").trim(),
        url: url.trim(),
        description: (rawDescription || "").replace(/\s+/g, " ").trim(),
      };
    }

    const normalized = label.replace(/\s+/g, " ").trim();
    let author = normalized;
    let description = "";

    const firstSentenceEnd = normalized.match(/\.\s+/);
    const firstDot = firstSentenceEnd ? firstSentenceEnd.index ?? -1 : -1;
    if (firstDot !== -1) {
      author = normalized.slice(0, firstDot).trim();
      description = normalized.slice(firstDot + 1).trim().replace(/^\s+/, "");
    }

    // Safety fallback when old labels still contain inline URLs.
    const legacy = splitReferenceLabel(normalized, url);
    if (legacy.before && legacy.before.length > 0 && legacy.before.length < author.length) {
      author = legacy.before.replace(/[,\s]+$/, "").trim();
      description = legacy.after.replace(/^[,.;:\s]+/, "").trim() || description;
    }

    return {
      author,
      url: url.trim(),
      description,
    };
  };
  const localizedRenderedContent = useMemo(() => {
    return renderedContent.replace(
      /<sup class="lesson-cite" data-cite-en="([^"]*)" data-cite-fr="([^"]*)">\[[^\]]*\]<\/sup>/g,
      (_match, enRaw: string, frRaw: string) => {
        const preferred = lang === "fr" ? frRaw : enRaw;
        const fallback = lang === "fr" ? enRaw : frRaw;
        const value = preferred && preferred !== "?" ? preferred : fallback && fallback !== "?" ? fallback : "?";
        return `<sup class="lesson-cite">[${value}]</sup>`;
      }
    );
  }, [renderedContent, lang]);
  const sourceHeadingTexts = useMemo(() => {
    const sourceHeadingRegex = /<(h[2-4])>([\s\S]*?)<\/\1>/g;
    const headings: string[] = [];
    lessonContent.replace(sourceHeadingRegex, (_fullMatch, _tag: string, headingInner: string) => {
      const withoutInlineMathDelimiters = headingInner.replace(/\$+([\s\S]*?)\$+/g, (_m, math: string) =>
        simplifyLatexForToc(math)
      );
      const text = stripHtmlForToc(withoutInlineMathDelimiters);
      headings.push(text);
      return "";
    });
    return headings;
  }, [lessonContent]);
  const webContentWithToc = useMemo(() => {
    const toc: TocEntry[] = [];
    const usedIds: Record<string, number> = {};
    const headingRegex = /<(h[2-4])>([\s\S]*?)<\/\1>/g;
    let headingIndex = 0;

    const content = localizedRenderedContent.replace(
      headingRegex,
      (_fullMatch, tag: string, headingInner: string) => {
        const level = Number(tag.slice(1)) as 2 | 3 | 4;
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

    return { content, toc };
  }, [localizedRenderedContent, sourceHeadingTexts]);

  useEffect(() => {
    if (tab !== "web" || webContentWithToc.toc.length === 0) return;

    const orderedIds = webContentWithToc.toc.map((entry) => entry.id);
    const activateFromViewport = () => {
      const offset = 120;
      let current = orderedIds[0];

      for (const id of orderedIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
        else break;
      }

      setActiveTocId(current);
    };

    activateFromViewport();
    window.addEventListener("scroll", activateFromViewport, { passive: true });
    window.addEventListener("resize", activateFromViewport);

    return () => {
      window.removeEventListener("scroll", activateFromViewport);
      window.removeEventListener("resize", activateFromViewport);
    };
  }, [tab, webContentWithToc.toc]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 280);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {!hideHeader && (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "1.25rem 1.5rem 0",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.45rem",
              color: "var(--text-heading)",
              marginBottom: "0.5rem",
              lineHeight: 1.3,
            }}
          >
            {lessonHeading}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-crimson)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "0.5rem",
            }}
          >
            {lang === "fr" ? lesson.descriptionFr : lesson.descriptionEn}
          </p>
        </div>
      )}

      {/* Keywords bubbles — always visible */}
      {(lang === "fr" ? lesson.topicsFr : lesson.topicsEn).length > 0 && (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: hideHeader ? "1rem 1.5rem 0" : "0.5rem 1.5rem 0",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {(lang === "fr" ? lesson.topicsFr : lesson.topicsEn).map((topic) => (
            <Link
              key={topic}
              href={`${sectionHref(lang, "glossary")}?q=${encodeURIComponent(topic)}`}
              style={{
                background: "var(--accent-bg-sm)",
                border: "1px solid var(--accent-border-sm)",
                borderRadius: "100px",
                padding: "0.2rem 0.75rem",
                fontFamily: "var(--font-inter)",
                fontSize: "0.74rem",
                color: "var(--amber)",
                textDecoration: "none",
              }}
            >
              {topic}
            </Link>
          ))}
        </div>
      )}

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 1.5rem 0", borderBottom: "1px solid var(--border-subtle)" }} />

      {/* ─── Web Content ─── */}
      {tab === "web" && (
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "3rem 1.5rem",
          }}
        >
          {hasLessonContent ? (
            <div className="lesson-web-layout">
              <div className="lesson-web-main">
                {/* Sits at the very top of this column, level with the TOC's
                    top edge on the right (both are direct children of the
                    same .lesson-web-layout row). */}
                {topNav && <div style={{ marginBottom: "1.5rem" }}>{topNav}</div>}
                <div
                  className="prose-content"
                  dangerouslySetInnerHTML={{ __html: webContentWithToc.content }}
                />
              </div>
              {webContentWithToc.toc.length > 0 && (
                <aside className="lesson-toc lesson-toc-sticky">
                  <div className="lesson-toc-header">
                    {tocVisible && <h3 className="lesson-toc-title">{t.chapter.tocTitle}</h3>}
                    <button
                      className="lesson-toc-toggle"
                      onClick={() => setTocVisible((current) => !current)}
                    >
                      {tocVisible ? t.chapter.hideToc : t.chapter.showToc}
                    </button>
                  </div>
                  {tocVisible && (
                    <ul className="lesson-toc-list">
                      {webContentWithToc.toc.map((entry) => (
                        <li
                          key={entry.id}
                          className="lesson-toc-item"
                          style={{
                            marginLeft:
                              entry.level === 2
                                ? "0"
                                : entry.level === 3
                                  ? "0.7rem"
                                  : "1.4rem",
                          }}
                        >
                          <a
                            href={`#${entry.id}`}
                            className={`lesson-toc-link ${activeTocId === entry.id ? "lesson-toc-link-active" : ""}`}
                            onClick={() => setActiveTocId(entry.id)}
                          >
                            {entry.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </aside>
              )}
            </div>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-crimson)",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "760px",
              }}
            >
              {t.chapter.contentUnavailable}
            </p>
          )}
        </div>
      )}

{showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={lang === "fr" ? "Revenir en haut" : "Back to top"}
          title={lang === "fr" ? "Revenir en haut" : "Back to top"}
          style={{
            position: "fixed",
            right: "1.2rem",
            bottom: "1.2rem",
            width: "42px",
            height: "42px",
            borderRadius: "999px",
            border: "1px solid var(--accent-border-md)",
            background: "var(--bg-card)",
            color: "var(--amber)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
            cursor: "pointer",
            zIndex: 40,
            fontSize: "1.1rem",
            lineHeight: 1,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}
