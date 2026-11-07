"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import { Suspense, useMemo, useTransition } from "react";
import type { Theme } from "@/lib/chapters";
import type { LessonPresentation } from "@/lib/lessonPresentation";
import { ChapterContent } from "../ChapterContent";
import { LessonKeywords } from "@/app/components/LessonKeywords";
import { useLang } from "@/app/context/LangContext";
import { sectionHref } from "@/lib/languages";

type ThemeWithLocalizedLessonContent = Omit<Theme, "lessons"> & {
  lessons: LessonPresentation[];
};

interface Props {
  localizedPaths: Record<string, string>;
  theme: ThemeWithLocalizedLessonContent;
  prev: Theme | null;
  next: Theme | null;
  relatedExercises: Array<{ id: string; urlSlug: string; number: number; title: string }>;
}

// Lessons whose text is final: they show the "final version" badge instead of
// the "rewrite in progress" one.
const FINAL_VERSION_SLUGS = [
  "introduction",
  "historique",
  "notions-fondamentales",
  "premier-principe",
  "application-gaz-parfait",
  "second-principe",
];

const headerBoxStyle: CSSProperties = {
  borderBottom: "1px solid var(--border)",
  padding: "2.5rem 0 1.5rem",
  background: "var(--title-band-bg)",
  transition: "background 0.25s ease",
};

const maxWStyle: CSSProperties = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "0 1.5rem",
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

// Lessons that also exist in a simplified version serve it by default;
// ?version=complete shows the full text.
const FULL_VERSION_PARAM = "version";
const FULL_VERSION_VALUE = "complete";

function isFullVersionRequested(searchParams: ReturnType<typeof useSearchParams>): boolean {
  return searchParams.get(FULL_VERSION_PARAM) === FULL_VERSION_VALUE;
}

function hasSimplifiedVersion(theme: ThemeWithLocalizedLessonContent): boolean {
  return theme.lessons.length === 1 && Boolean(theme.lessons[0].fullVersion);
}

// Same expressions as the opening sentence of each lesson1_simplf.tex / lesson1.tex.
const LESSON_VERSION_LABELS: Record<string, { simplified: string; full: string }> = {
  fr: { simplified: "Version simplifiée", full: "Version complète" },
  en: { simplified: "Simplified version", full: "Full version" },
  de: { simplified: "Vereinfachte Version", full: "Vollständige Version" },
  es: { simplified: "Versión simplificada", full: "Versión completa" },
  pt: { simplified: "Versão simplificada", full: "Versão completa" },
  it: { simplified: "Versione semplificata", full: "Versione completa" },
  zh: { simplified: "简化版", full: "完整版" },
  ja: { simplified: "簡易版", full: "完全版" },
  ko: { simplified: "간소화 버전", full: "전체 버전" },
  ru: { simplified: "Упрощённая версия", full: "Полная версия" },
  pl: { simplified: "Wersja uproszczona", full: "Wersja pełna" },
  tr: { simplified: "Basitleştirilmiş sürüm", full: "Tam sürüm" },
  hi: { simplified: "सरलीकृत संस्करण", full: "पूर्ण संस्करण" },
  ur: { simplified: "آسان نسخہ", full: "مکمل نسخہ" },
  bn: { simplified: "সরলীকৃত সংস্করণ", full: "পূর্ণ সংস্করণ" },
  ar: { simplified: "النسخة المبسطة", full: "النسخة الكاملة" },
  fa: { simplified: "نسخهٔ ساده‌شده", full: "نسخهٔ کامل" },
  id: { simplified: "Versi sederhana", full: "Versi lengkap" },
  vi: { simplified: "Phiên bản đơn giản", full: "Phiên bản đầy đủ" },
  sw: { simplified: "Toleo rahisi", full: "Toleo kamili" },
};

function LessonVersionButtons({
  showFull,
  onSelect,
}: {
  showFull: boolean;
  onSelect?: (full: boolean) => void;
}) {
  const { lang } = useLang();
  const labels = LESSON_VERSION_LABELS[lang] ?? LESSON_VERSION_LABELS.en;
  return (
    <div className="lesson-version-switch" role="group" aria-label={lang === "fr" ? "Version de la leçon" : "Lesson version"}>
      {([false, true] as const).map((full) => (
        <button
          key={String(full)}
          type="button"
          className={`lesson-version-btn${showFull === full ? " is-active" : ""}`}
          aria-pressed={showFull === full}
          onClick={onSelect ? () => onSelect(full) : undefined}
        >
          {full ? labels.full : labels.simplified}
        </button>
      ))}
    </div>
  );
}

function LessonVersionSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const showFull = isFullVersionRequested(searchParams);
  const select = (full: boolean) => {
    if (full === showFull) return;
    const params = new URLSearchParams(searchParams.toString());
    if (full) params.set(FULL_VERSION_PARAM, FULL_VERSION_VALUE);
    else params.delete(FULL_VERSION_PARAM);
    const query = params.toString();
    startTransition(() => {
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    });
  };
  return <LessonVersionButtons showFull={showFull} onSelect={select} />;
}

function ChapterThemeHeadingBlock({ theme }: { theme: ThemeWithLocalizedLessonContent }) {
  const { t, lang, chapters } = useLang();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem",
          fontFamily: "var(--font-inter)",
          fontSize: "0.8rem",
          color: "var(--text-dim)",
        }}
      >
        <Link prefetch={false} href="/" style={{ color: "var(--text-dim)", textDecoration: "none" }}>
          {t.chapter.breadcrumbHome}
        </Link>
        <span>/</span>
        <Link prefetch={false} href={sectionHref(lang, "chapters")} style={{ color: "var(--text-dim)", textDecoration: "none" }}>
          {t.chapter.breadcrumbThemes}
        </Link>
        <span>/</span>
        <span style={{ color: "var(--amber)" }}>
          {t.chapter.themeLabel.charAt(0) + t.chapter.themeLabel.slice(1).toLowerCase()}{" "}
          {theme.number}
        </span>
      </div>

      <h1
        className="lesson-page-title"
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 700,
          color: "var(--text-heading)",
          marginBottom: "0.4rem",
          lineHeight: 1.2,
        }}
      >
        {chapters[theme.slug].title}
      </h1>
      {theme.lessons.length === 1 && (
        <LessonKeywords topics={theme.lessons[0].topicsLang} style={{ marginTop: "0.75rem" }} />
      )}
      {hasSimplifiedVersion(theme) && (
        <Suspense fallback={<LessonVersionButtons showFull={false} />}>
          <LessonVersionSwitch />
        </Suspense>
      )}
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
        marginTop: "1rem",
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

function ChapterContentWithSearchParams(props: Props) {
  const { theme } = props;
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

  return (
    <ChapterContentAndPrevNext
      {...props}
      activeLessonIndex={activeLessonIndex}
      navigateToLesson={navigateToLesson}
    />
  );
}

function ChapterContentAndPrevNext({
  theme,
  prev,
  next,
  relatedExercises,
  activeLessonIndex = 0,
  navigateToLesson,
}: Props & {
  activeLessonIndex?: number;
  navigateToLesson?: (lessonIndex: number) => void;
}) {
  const { t, lang, chapters, exercises: exerciseT } = useLang();
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
      ? chapters[prev.slug].title
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
      ? chapters[next.slug].title
      : null;
  const previousHref = !previousLesson && prev
    ? sectionHref(lang, "chapters", chapters[prev.slug].urlSlug)
    : undefined;
  const nextHref = !nextLesson && next
    ? sectionHref(lang, "chapters", chapters[next.slug].urlSlug)
    : undefined;
  const previousOnClick = previousLesson && navigateToLesson ? () => navigateToLesson(activeLessonIndex - 1) : undefined;
  const nextOnClick = nextLesson && navigateToLesson ? () => navigateToLesson(activeLessonIndex + 1) : undefined;

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
          isFinalVersion={FINAL_VERSION_SLUGS.includes(theme.slug)}
          isRewriteInProgress={theme.number >= 6 && !FINAL_VERSION_SLUGS.includes(theme.slug)}
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

      {relatedExercises.length > 0 && (
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Reuses the .lesson-web-layout grid so the box's left/right edges
              align with the lesson text column instead of the full page width,
              and never extends under the TOC column. */}
          <div className="lesson-web-layout">
            <div className="lesson-web-main">
              <aside className="lesson-related-exercises" aria-label={exerciseT.exercisesOnLesson}>
                <p>{exerciseT.exercisesOnLesson}</p>
                <ul>
                  {relatedExercises.map((exercise) => (
                    <li key={exercise.id}>
                      <Link prefetch={false} href={sectionHref(lang, "exercises", exercise.urlSlug)}>
                        <span>{exerciseT.exercise} {exercise.number}</span>
                        {exercise.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link prefetch={false} className="lesson-related-exercises-all" href={sectionHref(lang, "exercises")}>
                  {exerciseT.hubTitle} →
                </Link>
              </aside>
            </div>
            <div />
          </div>
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
      <Link prefetch={false} href={href} style={{ textDecoration: "none" }}>
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
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: compact ? "0.6rem" : "1rem" }}>
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

function ChapterContentWithVersion(props: Props) {
  const searchParams = useSearchParams();
  const showFull = isFullVersionRequested(searchParams);
  const theme = useMemo(() => {
    const lesson = props.theme.lessons[0];
    if (!showFull || !lesson?.fullVersion) return props.theme;
    return {
      ...props.theme,
      lessons: [{ ...lesson, ...lesson.fullVersion }],
    };
  }, [props.theme, showFull]);
  return <ChapterContentAndPrevNext {...props} theme={theme} />;
}

function ChapterPageView(props: Props) {
  const { theme } = props;
  const defaultContent = <ChapterContentAndPrevNext {...props} />;

  return (
    <div data-localized-paths={JSON.stringify(props.localizedPaths)} style={{ position: "relative", zIndex: 1 }}>
      <div className="lesson-title-band" style={headerBoxStyle}>
        <div style={maxWStyle}>
          <div className="lesson-web-layout">
            <div className="lesson-web-main">
              <ChapterThemeHeadingBlock theme={theme} />
              {theme.lessons.length > 1 && (
                <Suspense fallback={null}>
                  <ChapterLessonTabButtons theme={theme} />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* A normal lesson must include its full text in the static HTML.
          Only multi-body pages need the query-dependent lesson selector. */}
      {theme.lessons.length > 1 ? (
        <Suspense fallback={defaultContent}>
          <ChapterContentWithSearchParams {...props} />
        </Suspense>
      ) : hasSimplifiedVersion(theme) ? (
        <Suspense fallback={defaultContent}>
          <ChapterContentWithVersion {...props} />
        </Suspense>
      ) : defaultContent}
    </div>
  );
}

export function ChapterPageClient(props: Props) {
  return <ChapterPageView {...props} />;
}
