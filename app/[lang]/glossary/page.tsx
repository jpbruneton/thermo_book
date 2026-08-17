"use client";

import Link from "next/link";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { getListedWebThemes, getThemeTitle, getThemeTopics, getThemeUrlSlug } from "@/lib/chapters";
import { useLang } from "@/app/context/LangContext";
import { sectionHref } from "@/lib/i18n";

interface GlossaryOccurrence {
  themeSlug: string;
  themeNumber: number;
  themeTitle: string;
  lessonNumber: number;
}

interface GlossaryItem {
  keyword: string;
  occurrences: GlossaryOccurrence[];
}

function normalizeKeyword(value: string): string {
  return value.trim().toLowerCase();
}

function GlossaryIntro() {
  const { t } = useLang();

  return (
    <div style={{ maxWidth: "850px" }}>
      <h1
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.9rem, 4vw, 2.5rem)",
          color: "var(--text-heading)",
          marginBottom: "0.6rem",
        }}
      >
        {t.glossary.title}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-crimson)",
          fontSize: "1.05rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "1.2rem",
        }}
      >
        {t.glossary.subtitle}
      </p>
    </div>
  );
}

function GlossaryFilterAndList() {
  const { lang, t } = useLang();
  const searchParams = useSearchParams();
  const selectedKeywordRaw = searchParams.get("q") || "";
  const selectedKeyword = selectedKeywordRaw.trim();
  const selectedKeywordNormalized = normalizeKeyword(selectedKeywordRaw);

  const glossaryItems = useMemo<GlossaryItem[]>(() => {
    const map = new Map<string, GlossaryItem>();
    const themes = getListedWebThemes();

    for (const theme of themes) {
      for (const lesson of theme.lessons) {
        const topics = getThemeTopics(theme.slug, lesson, lang);
        for (const topic of topics) {
          const normalized = normalizeKeyword(topic);
          if (!map.has(normalized)) {
            map.set(normalized, {
              keyword: topic,
              occurrences: [],
            });
          }
          map.get(normalized)?.occurrences.push({
            themeSlug: getThemeUrlSlug(theme, lang),
            themeNumber: theme.number,
            themeTitle: getThemeTitle(theme, lang),
            lessonNumber: lesson.number,
          });
        }
      }
    }

    return Array.from(map.values()).sort((a, b) =>
      a.keyword.localeCompare(b.keyword, lang, { sensitivity: "base" })
    );
  }, [lang]);

  const filteredItems = useMemo(() => {
    if (!selectedKeywordNormalized) return glossaryItems;
    return glossaryItems.filter(
      (item) => normalizeKeyword(item.keyword) === selectedKeywordNormalized
    );
  }, [glossaryItems, selectedKeywordNormalized]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
        <Link
          href={sectionHref(lang, "glossary")}
          style={{
            background: !selectedKeyword ? "var(--accent-bg-md)" : "var(--accent-bg-xs)",
            border: "1px solid var(--accent-border-sm)",
            borderRadius: "100px",
            padding: "0.25rem 0.78rem",
            fontFamily: "var(--font-inter)",
            fontSize: "0.76rem",
            color: !selectedKeyword ? "var(--amber)" : "var(--text-secondary)",
            textDecoration: "none",
          }}
        >
          {t.glossary.allKeywords}
        </Link>
        {glossaryItems.map((item) => {
          const isActive =
            normalizeKeyword(item.keyword) === selectedKeywordNormalized &&
            selectedKeywordNormalized.length > 0;
          return (
            <Link
              key={item.keyword}
              href={`${sectionHref(lang, "glossary")}?q=${encodeURIComponent(item.keyword)}`}
              style={{
                background: isActive ? "var(--accent-bg-md)" : "var(--accent-bg-xs)",
                border: "1px solid var(--accent-border-sm)",
                borderRadius: "100px",
                padding: "0.25rem 0.78rem",
                fontFamily: "var(--font-inter)",
                fontSize: "0.76rem",
                color: isActive ? "var(--amber)" : "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {item.keyword}
            </Link>
          );
        })}
      </div>

      {filteredItems.length === 0 ? (
        <p
          style={{
            fontFamily: "var(--font-crimson)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
          }}
        >
          {t.glossary.noResult}
        </p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {filteredItems.map((item) => (
            <section
              key={item.keyword}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--accent-border-sm)",
                borderRadius: "10px",
                padding: "1rem 1.1rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.15rem",
                  color: "var(--text-heading)",
                  marginBottom: "0.35rem",
                }}
              >
                {item.keyword}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: "0.6rem",
                }}
              >
                {t.glossary.relatedLessons}
              </p>
              <div style={{ display: "grid", gap: "0.5rem" }}>
                {item.occurrences.map((occurrence, index) => (
                  <Link
                    key={`${occurrence.themeSlug}-${occurrence.lessonNumber}-${index}`}
                    href={`${sectionHref(lang, "chapters", occurrence.themeSlug)}?lesson=${occurrence.lessonNumber}`}
                    style={{
                      display: "block",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontFamily: "var(--font-crimson)",
                      fontSize: "1rem",
                    }}
                  >
                    {t.glossary.lessonEntry(occurrence.themeNumber, occurrence.themeTitle)}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

export default function GlossaryPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem 4rem",
      }}
    >
      <GlossaryIntro />
      <Suspense fallback={null}>
        <GlossaryFilterAndList />
      </Suspense>
    </main>
  );
}
