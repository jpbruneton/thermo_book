"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import { Suspense, useMemo, useTransition } from "react";
import type { Theme } from "@/lib/chapters";
import { ChapterContent } from "../ChapterContent";
import { useLang } from "@/app/context/LangContext";
import { sectionHref } from "@/lib/i18n";

type LocalizedLesson = Theme["lessons"][number] & {
  contentFr: string;
  contentEn: string;
  renderedFr: string;
  renderedEn: string;
};

type ThemeWithLocalizedLessonContent = Omit<Theme, "lessons"> & {
  lessons: LocalizedLesson[];
};

interface Props {
  theme: ThemeWithLocalizedLessonContent;
  prev: Theme | null;
  next: Theme | null;
}

const headerBoxStyle: CSSProperties = {
  borderBottom: "1px solid var(--border)",
  padding: "4rem 1.5rem 3rem",
  background: "var(--bg-secondary)",
  transition: "background 0.25s ease",
};

const maxWStyle: CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
};

function getActiveLessonIndex(
  searchParams: ReturnType<typeof useSearchParams>,
  lessonCount: number
): number {
  const requestedLessonNumber = Number(searchParams.get("lesson") || "");
  const requestedLessonIndex =
    Number.isFinite(requestedLessonNumber) && requestedLessonNumber >= 1
      ? Math.min(
          Math.max(requestedLessonNumber - 1, 0),
          Math.max(lessonCount - 1, 0)
        )
      : 0;
  return requestedLessonIndex;
}

function ChapterThemeHeadingBlock({ theme }: { theme: ThemeWithLocalizedLessonContent }) {
  const { t, lang } = useLang();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
          fontFamily: "var(--font-inter)",
          fontSize: "0.8rem",
          color: "var(--text-dim)",
        }}
      >
        <Link href="/" style={{ color: "var(--text-dim)", textDecoration: "none" }}>
          {t.chapter.breadcrumbHome}
        </Link>
        <span>/</span>
        <Link href={sectionHref(lang, "chapters")} style={{ color: "var(--text-dim)", textDecoration: "none" }}>
          {t.chapter.breadcrumbThemes}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--amber)" }}>
          {t.chapter.themeLabel.charAt(0) + t.chapter.themeLabel.slice(1).toLowerCase()}{" "}
          {theme.number}
        </span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "var(--text-heading)",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}
      >
        {lang === "fr" ? theme.titleFr : theme.titleEn}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: "1.2rem",
          color: "var(--amber-soft)",
          marginBottom: "1.5rem",
        }}
      >
        {lang === "fr" ? theme.descriptionFr : theme.descriptionEn}
      </p>
    </>
  );
}

function ChapterLessonTabButtons({ theme }: { theme: ThemeWithLocalizedLessonContent }) {
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const activeLessonIndex = getActiveLessonIndex(
    searchParams,
    Math.max(theme.lessons.length, 0)
  );

  const navigateToLesson = (lessonIndex: number) => {
    const maxIndex = Math.max(theme.lessons.length - 1, 0);
    const clamped = Math.min(Math.max(lessonIndex, 0), maxIndex);
    const params = new URLSearchParams(searchParams.toString());
    if (clamped === 0) {
      params.delete("lesson");
    } else {
      params.set("lesson", String(clamped + 1));
    }
    const query = params.toString();
    startTransition(() => {
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    });
  };

  // No tab bar when the Leçon has a single body (no inner lessons to switch between).
  if (theme.lessons.length <= 1) return null;

  const normalLessons = theme.lessons
    .map((lesson, index) => ({ lesson, index }))
    .filter(({ lesson }) => lesson.kind !== "fiche");
  const fiches = theme.lessons
    .map((lesson, index) => ({ lesson, index }))
    .filter(({ lesson }) => lesson.kind === "fiche");

  return (
    <div
      style={{
        marginTop: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {normalLessons.map(({ lesson, index }) => (
          <button
            key={lesson.slug}
            type="button"
            onClick={() => navigateToLesson(index)}
            style={{
              background:
                index === activeLessonIndex
                  ? "var(--accent-bg-md)"
                  : "var(--accent-bg-xs)",
              border:
                index === activeLessonIndex
                  ? "1px solid var(--accent-border-md)"
                  : "1px solid var(--accent-border-sm)",
              borderRadius: "999px",
              padding: "0.35rem 0.85rem",
              fontFamily: "var(--font-inter)",
              fontSize: "0.78rem",
              color:
                index === activeLessonIndex
                  ? "var(--amber)"
                  : "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            {lang === "fr"
              ? `Leçon n°${lesson.number} : ${lesson.subtitleFr}`
              : `Lesson ${lesson.number}: ${lesson.subtitleEn}`}
          </button>
        ))}
      </div>
      {fiches.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-dim)",
              marginRight: "0.15rem",
            }}
          >
            {lang === "fr" ? "Fiches de révision" : "Revision Sheets"}
          </span>
          {fiches.map(({ lesson, index }) => (
            <button
              key={lesson.slug}
              type="button"
              onClick={() => navigateToLesson(index)}
              style={{
                background:
                  index === activeLessonIndex
                    ? "var(--accent-bg-md)"
                    : "var(--accent-bg-xs)",
                border:
                  index === activeLessonIndex
                    ? "1px solid var(--accent-border-md)"
                    : "1px solid var(--accent-border-sm)",
                borderRadius: "999px",
                padding: "0.35rem 0.85rem",
                fontFamily: "var(--font-inter)",
                fontSize: "0.78rem",
                color:
                  index === activeLessonIndex
                    ? "var(--amber)"
                    : "var(--text-secondary)",
                cursor: "pointer",
              }}
            >
              {lang === "fr"
                ? `Fiche n°${lesson.number} : ${lesson.subtitleFr}`
                : `Sheet ${lesson.number}: ${lesson.subtitleEn}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ChapterContentAndPrevNext({ theme, prev, next }: Props) {
  const { t, lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const activeLessonIndex = getActiveLessonIndex(
    searchParams,
    Math.max(theme.lessons.length, 0)
  );

  const navigateToLesson = (lessonIndex: number) => {
    const maxIndex = Math.max(theme.lessons.length - 1, 0);
    const clamped = Math.min(Math.max(lessonIndex, 0), maxIndex);
    const params = new URLSearchParams(searchParams.toString());
    if (clamped === 0) {
      params.delete("lesson");
    } else {
      params.set("lesson", String(clamped + 1));
    }
    const query = params.toString();
    startTransition(() => {
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    });
  };

  const activeLesson = useMemo(
    () => theme.lessons[activeLessonIndex] || null,
    [theme.lessons, activeLessonIndex]
  );
  const previousLesson =
    theme.lessons.length > 0 && activeLessonIndex > 0
      ? theme.lessons[activeLessonIndex - 1]
      : null;
  const nextLesson =
    theme.lessons.length > 0 && activeLessonIndex < theme.lessons.length - 1
      ? theme.lessons[activeLessonIndex + 1]
      : null;

  const previousLabel = t.chapter.prev;
  const nextLabel = t.chapter.next;
  const previousTitle = previousLesson
    ? previousLesson.kind === "fiche"
      ? lang === "fr"
        ? `Fiche n°${previousLesson.number} : ${previousLesson.subtitleFr}`
        : `Sheet ${previousLesson.number}: ${previousLesson.subtitleEn}`
      : lang === "fr"
        ? `Leçon n°${previousLesson.number} : ${previousLesson.subtitleFr}`
        : `Lesson ${previousLesson.number}: ${previousLesson.subtitleEn}`
    : prev
      ? lang === "fr"
        ? prev.titleFr
        : prev.titleEn
      : null;
  const nextTitle = nextLesson
    ? nextLesson.kind === "fiche"
      ? lang === "fr"
        ? `Fiche n°${nextLesson.number} : ${nextLesson.subtitleFr}`
        : `Sheet ${nextLesson.number}: ${nextLesson.subtitleEn}`
      : lang === "fr"
        ? `Leçon n°${nextLesson.number} : ${nextLesson.subtitleFr}`
        : `Lesson ${nextLesson.number}: ${nextLesson.subtitleEn}`
    : next
      ? lang === "fr"
        ? next.titleFr
        : next.titleEn
      : null;
  const previousHref = !previousLesson && prev ? sectionHref(lang, "chapters", prev.slug) : undefined;
  const nextHref = !nextLesson && next ? sectionHref(lang, "chapters", next.slug) : undefined;
  const previousOnClick = previousLesson ? () => navigateToLesson(activeLessonIndex - 1) : undefined;
  const nextOnClick = nextLesson ? () => navigateToLesson(activeLessonIndex + 1) : undefined;

  const compactNavRow = (
    <LessonNavRow
      previousLabel={previousLabel}
      previousTitle={previousTitle}
      previousHref={previousHref}
      previousOnClick={previousOnClick}
      nextLabel={nextLabel}
      nextTitle={nextTitle}
      nextHref={nextHref}
      nextOnClick={nextOnClick}
      compact
      bare
    />
  );

  return (
    <>
      {activeLesson ? (
        <ChapterContent
          lesson={activeLesson}
          hideHeader={theme.lessons.length <= 1}
          topNav={compactNavRow}
        />
      ) : (
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3rem 1.5rem 4rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.6rem",
              color: "var(--text-heading)",
              marginBottom: "0.7rem",
            }}
          >
            {t.chapter.noLessonTitle}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-crimson)",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            {t.chapter.noLessonBody}
          </p>
        </div>
      )}

      <LessonNavRow
        previousLabel={previousLabel}
        previousTitle={previousTitle}
        previousHref={previousHref}
        previousOnClick={previousOnClick}
        nextLabel={nextLabel}
        nextTitle={nextTitle}
        nextHref={nextHref}
        nextOnClick={nextOnClick}
      />
    </>
  );
}

interface NavCardProps {
  label: string;
  title: string;
  align: "left" | "right";
  href?: string;
  onClick?: () => void;
  compact?: boolean;
}

function NavCard({ label, title, align, href, onClick, compact }: NavCardProps) {
  const card = (
    <div
      className="chapter-card"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--accent-border-sm)",
        borderRadius: compact ? "6px" : "8px",
        padding: compact ? "0.5rem 0.9rem" : "1.25rem 1.5rem",
        textAlign: align,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: compact ? "0.62rem" : "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--text-dim)",
          marginBottom: compact ? "0.15rem" : "0.4rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: compact ? "0.8rem" : "0.95rem",
          color: "var(--text-heading)",
          overflow: compact ? "hidden" : undefined,
          textOverflow: compact ? "ellipsis" : undefined,
          whiteSpace: compact ? "nowrap" : undefined,
        }}
      >
        {title}
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{ textAlign: "left", border: "none", background: "none", padding: 0, cursor: "pointer", width: "100%" }}
      >
        {card}
      </button>
    );
  }
  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {card}
      </Link>
    );
  }
  return <div />;
}

interface LessonNavRowProps {
  previousLabel: string;
  previousTitle: string | null;
  previousHref?: string;
  previousOnClick?: () => void;
  nextLabel: string;
  nextTitle: string | null;
  nextHref?: string;
  nextOnClick?: () => void;
  compact?: boolean;
  /** Skip the outer maxWidth/.lesson-web-layout wrapper — used when the
   * caller already places this inside the .lesson-web-main column itself
   * (e.g. the compact top-of-lesson nav, aligned with the TOC's top edge). */
  bare?: boolean;
}

function LessonNavRow({
  previousLabel,
  previousTitle,
  previousHref,
  previousOnClick,
  nextLabel,
  nextTitle,
  nextHref,
  nextOnClick,
  compact,
  bare,
}: LessonNavRowProps) {
  if (!previousTitle && !nextTitle) return null;

  const grid = (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: compact ? "0.6rem" : "1rem" }}>
      {previousTitle ? (
        <NavCard
          label={previousLabel}
          title={previousTitle}
          align="left"
          href={previousHref}
          onClick={previousOnClick}
          compact={compact}
        />
      ) : (
        <div />
      )}
      {nextTitle ? (
        <NavCard
          label={nextLabel}
          title={nextTitle}
          align="right"
          href={nextHref}
          onClick={nextOnClick}
          compact={compact}
        />
      ) : (
        <div />
      )}
    </div>
  );

  if (bare) return grid;

  return (
    <div
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: compact ? "1.25rem 1.5rem 0" : "3rem 1.5rem 5rem",
      }}
    >
      {/* Reuses the .lesson-web-layout grid (text column + TOC column) so
          this row's left edge aligns with the lesson text above/below it,
          instead of being centered against the full width incl. the TOC. */}
      <div className="lesson-web-layout">
        <div className="lesson-web-main">{grid}</div>
        <div />
      </div>
    </div>
  );
}

function ChapterPageView({ theme, prev, next }: Props) {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={headerBoxStyle}>
        <div style={maxWStyle}>
          <ChapterThemeHeadingBlock theme={theme} />
          <Suspense fallback={null}>
            <ChapterLessonTabButtons theme={theme} />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={null}>
        <ChapterContentAndPrevNext theme={theme} prev={prev} next={next} />
      </Suspense>
    </div>
  );
}

export function ChapterPageClient(props: Props) {
  return <ChapterPageView {...props} />;
}
