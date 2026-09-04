"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { LessonPresentation } from "@/lib/lessonPresentation";
import { useLang } from "@/app/context/LangContext";
import { sectionHref } from "@/lib/i18n";

interface Props {
  lesson: LessonPresentation;
  hideHeader?: boolean;
  /** Rendered after the keyword bubbles, just above the lesson's first section. */
  topNav?: ReactNode;
}

function getLessonPdfRelativePath(lesson: LessonPresentation, lang: "fr" | "en"): string {
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

export function ChapterContent({ lesson, hideHeader = false, topNav }: Props) {
  const [tab, setTab] = useState<"web" | "refs" | "pdf">("web");
  const [activeTocId, setActiveTocId] = useState("");
  const [tocVisible, setTocVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t, lang } = useLang();
  const englishReferences = lesson.references.filter((reference) => reference.language === "en");
  const frenchReferences = lesson.references.filter((reference) => reference.language === "fr");
  const currentReferences =
    (lang === "fr" ? frenchReferences : englishReferences).length > 0
      ? lang === "fr"
        ? frenchReferences
        : englishReferences
      : lang === "fr"
        ? englishReferences
        : frenchReferences;
  const pdfLang = lang === "fr" ? "fr" : "en";
  const pdfRelativePath = useMemo(() => getLessonPdfRelativePath(lesson, pdfLang), [lesson, pdfLang]);
  const pdfFileLabel = pdfRelativePath.includes("/")
    ? pdfRelativePath.slice(pdfRelativePath.lastIndexOf("/") + 1)
    : pdfRelativePath;
  const hasLessonContent = lesson.renderedLang.trim().length > 0;
  const lessonHeadingFr = lesson.subtitleFr.trim() || lesson.titleFr;
  const lessonHeadingEn = lesson.subtitleEn.trim() || lesson.titleEn;
  const lessonHeading = lang === "fr" ? lessonHeadingFr : lessonHeadingEn;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [lesson.slug]);

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
  useEffect(() => {
    if (tab !== "web" || lesson.toc.length === 0) return;

    const orderedIds = lesson.toc.map((entry) => entry.id);
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
  }, [tab, lesson.toc]);

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
      {lesson.topicsLang.length > 0 && (
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
          {lesson.topicsLang.map((topic) => (
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
                  dangerouslySetInnerHTML={{ __html: lesson.renderedLang }}
                />
                {currentReferences.length > 0 && (
                  <ol
                    style={{
                      listStyleType: "decimal",
                      paddingLeft: "1.3rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      fontFamily: "var(--font-crimson)",
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {currentReferences.map((reference) => (
                      <li key={reference.key}>
                        <a href={reference.url} target="_blank" rel="noreferrer" style={{ color: "var(--amber)" }}>
                          {reference.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {lesson.toc.length > 0 && (
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
                      {lesson.toc.map((entry) => (
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
