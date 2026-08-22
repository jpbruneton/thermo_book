import Link from "next/link";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import {
  exerciseTitleToPlainHtml,
  getTexWebHtmlFromSource,
} from "@/lib/chapterContent.server";
import { getWebThemes, getThemeTitle, getThemeUrlSlug, bookMeta, localizedSiteTitle } from "@/lib/chapters";
import {
  exerciseTitleToPlainText,
  getExerciseById,
  getExerciseByUrlSlug,
  getExerciseUrlSlug,
  loadExercises,
} from "@/lib/exercisesLibrary.server";
import { getExerciseTranslations } from "@/lib/exerciseTranslations";
import { processLatex } from "@/lib/latex";
import { absoluteUrl } from "@/lib/siteUrl";
import { getTranslations, isLang, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return [];
  const lang = params.lang;
  return loadExercises(lang).map((exercise) => ({
    slug: getExerciseUrlSlug(lang, exercise),
  }));
}

function exerciseDescription(
  lang: Lang,
  title: string,
  lessonTitle: string,
  keywords: string[],
  hasSolution: boolean
): string {
  const t = getExerciseTranslations(lang);
  const solution = hasSolution ? t.withDetailedSolution : t.withGuidance;
  const topics = keywords.length > 0 ? ` ${t.topics}: ${keywords.slice(0, 5).join(", ")}.` : "";
  return `${title}. ${t.solvedExercise}. ${solution} ${t.relatedLesson}: ${lessonTitle}.${topics}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params;
  if (!isLang(lang)) {
    return { robots: { index: false, follow: true } };
  }

  const exercise = getExerciseByUrlSlug(lang, slug);
  if (!exercise) return {};

  const t = getExerciseTranslations(lang);
  const theme = getWebThemes().find((item) => item.number === exercise.lecon);
  const title = exerciseTitleToPlainText(exercise.titleTex) || `${t.exercise} ${exercise.number}`;
  const lessonTitle = theme ? getThemeTitle(theme, lang) : `${t.lesson} ${exercise.lecon}`;
  const description = exerciseDescription(
    lang,
    title,
    lessonTitle,
    exercise.keywords,
    Boolean(exercise.solutionTex)
  );
  const url = absoluteUrl(sectionHref(lang, "exercises", getExerciseUrlSlug(lang, exercise)));
  const metadataTitle = `${title} — ${t.metadataSuffix}`;
  const languages: Record<string, string> = {};
  for (const availableLang of SUPPORTED_LANGS) {
    const candidate = getExerciseById(availableLang, exercise.id);
    if (candidate?.seoReady) {
      languages[availableLang] = absoluteUrl(
        sectionHref(availableLang, "exercises", getExerciseUrlSlug(availableLang, candidate))
      );
    }
  }
  if (languages.fr) languages["x-default"] = languages.fr;

  return {
    title: metadataTitle,
    description,
    keywords: exercise.keywords,
    alternates: {
      canonical: url,
      languages: exercise.seoReady && theme?.listed !== false ? languages : undefined,
    },
    // Unlisted (Part II/III) lessons keep their exercises noindexed too.
    robots: exercise.seoReady && theme?.listed !== false ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      title: metadataTitle,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title: metadataTitle,
      description,
    },
  };
}

function exerciseJsonLd({
  lang,
  exercise,
  title,
  description,
  url,
  lessonUrl,
  lessonTitle,
  homeLabel,
}: {
  lang: Lang;
  exercise: NonNullable<ReturnType<typeof getExerciseById>>;
  title: string;
  description: string;
  url: string;
  lessonUrl: string | null;
  lessonTitle: string;
  homeLabel: string;
}) {
  const t = getExerciseTranslations(lang);
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: homeLabel, item: absoluteUrl(`/${lang}`) },
    {
      "@type": "ListItem",
      position: 2,
      name: t.hubTitle,
      item: absoluteUrl(sectionHref(lang, "exercises")),
    },
    { "@type": "ListItem", position: 3, name: title, item: url },
  ];

  const resource: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url,
    inLanguage: lang,
    learningResourceType: t.learningResourceType,
    educationalLevel: t.educationalLevel,
    author: { "@type": "Person", name: bookMeta.author },
    publisher: { "@type": "Organization", name: bookMeta.affiliation },
    about: exercise.keywords.map((name) => ({ "@type": "Thing", name })),
    isPartOf: {
      "@type": "Book",
      name: localizedSiteTitle(lang),
      url: absoluteUrl(`/${lang}`),
    },
  };

  if (lessonUrl) {
    resource.isBasedOn = {
      "@type": "LearningResource",
      name: lessonTitle,
      url: lessonUrl,
    };
  }

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
    resource,
  ];
}

export default function ExerciseDetailPage({ params }: Props) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const siteT = getTranslations(lang);
  const t = getExerciseTranslations(lang);

  const exercise = getExerciseByUrlSlug(lang, params.slug);
  if (!exercise) notFound();
  const publicSlug = getExerciseUrlSlug(lang, exercise);
  if (params.slug !== publicSlug) {
    permanentRedirect(sectionHref(lang, "exercises", publicSlug));
  }

  const exercises = loadExercises(lang);
  const exerciseIndex = exercises.findIndex((item) => item.id === exercise.id);
  const previousExercise = exerciseIndex > 0 ? exercises[exerciseIndex - 1] : null;
  const nextExercise = exerciseIndex < exercises.length - 1 ? exercises[exerciseIndex + 1] : null;
  const theme = getWebThemes().find((item) => item.number === exercise.lecon);
  const exerciseLabel = t.exercise;
  const lessonLabel = t.lesson;
  const statementLabel = t.statement;
  const solutionLabel = t.detailedSolution;
  const title = exerciseTitleToPlainText(exercise.titleTex) || `${exerciseLabel} ${exercise.number}`;
  const titleHtml = exerciseTitleToPlainHtml(exercise.titleTex);
  const lessonTitle = theme ? getThemeTitle(theme, lang) : `${lessonLabel} ${exercise.lecon}`;
  const lessonUrl = theme
    ? absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang)))
    : null;
  const url = absoluteUrl(sectionHref(lang, "exercises", publicSlug));
  const description = exerciseDescription(
    lang,
    title,
    lessonTitle,
    exercise.keywords,
    Boolean(exercise.solutionTex)
  );

  const statementHtml = processLatex(getTexWebHtmlFromSource(exercise.enonceTex, lang, []));
  const hintHtml = exercise.indicationTex
    ? processLatex(
        getTexWebHtmlFromSource(
          `\\begin{indication}\n${exercise.indicationTex}\n\\end{indication}`,
          lang,
          []
        )
      )
    : "";
  const solutionHtml = exercise.solutionTex
    ? processLatex(
        getTexWebHtmlFromSource(
          `\\begin{solution}\n${exercise.solutionTex}\n\\end{solution}`,
          lang,
          []
        )
      )
    : "";

  return (
    <>
      {exerciseJsonLd({
        lang,
        exercise,
        title,
        description,
        url,
        lessonUrl,
        lessonTitle,
        homeLabel: siteT.nav.home,
      }).map(
        (block, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        )
      )}

      <article className="exercise-detail-page">
        <div className="exercise-detail-inner">
          <nav className="exercise-back-nav exercise-back-nav-top" aria-label={t.exercises}>
            <Link href={sectionHref(lang, "exercises")}>{t.back}</Link>
          </nav>

          <nav className="exercise-breadcrumb" aria-label={t.breadcrumbLabel}>
            <Link href={`/${lang}`}>{siteT.nav.home}</Link>
            <span aria-hidden="true">/</span>
            <Link href={sectionHref(lang, "exercises")}>{siteT.nav.exercises}</Link>
            <span aria-hidden="true">/</span>
            <span>{exerciseLabel} {exercise.number}</span>
          </nav>

          <header className="exercise-detail-header">
            <p className="exercise-detail-kicker">{t.solvedExercise}</p>
            <h1 dangerouslySetInnerHTML={{ __html: titleHtml || title }} />
            <p className="exercise-detail-context">
              {exerciseLabel} {exercise.number} · {lessonLabel} {exercise.lecon} — {lessonTitle}
            </p>
            {exercise.keywords.length > 0 && (
              <ul className="exercise-keywords" aria-label={t.topics}>
                {exercise.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
              </ul>
            )}
          </header>

          {!exercise.seoReady && (
            <p className="exercise-draft-notice" data-nosnippet>
              {t.draftNotice}
            </p>
          )}

          <section aria-labelledby="exercise-statement-title" className="exercise-detail-section">
            <h2 id="exercise-statement-title">{statementLabel}</h2>
            <div className="prose-content" dangerouslySetInnerHTML={{ __html: statementHtml }} />
          </section>

          {hintHtml && (
            <section aria-labelledby="exercise-hint-title" className="exercise-detail-section">
              <h2 id="exercise-hint-title" className="visually-hidden">{t.hint}</h2>
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: hintHtml }} />
            </section>
          )}

          {solutionHtml && (
            <section aria-labelledby="exercise-solution-title" className="exercise-detail-section">
              <h2 id="exercise-solution-title">{solutionLabel}</h2>
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: solutionHtml }} />
            </section>
          )}

          <aside className="exercise-related-lesson" aria-label={t.relatedLessonLabel}>
            <span>{t.reviewBefore}</span>
            {theme ? (
              <Link href={sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang))}>
                {lessonLabel} {theme.number} — {lessonTitle} →
              </Link>
            ) : (
              <strong>{lessonTitle}</strong>
            )}
          </aside>

          <nav className="exercise-prev-next" aria-label={t.exercises}>
            {previousExercise ? (
              <Link href={sectionHref(lang, "exercises", getExerciseUrlSlug(lang, previousExercise))}>
                <span>{t.previousExercise}</span>
                {exerciseTitleToPlainText(previousExercise.titleTex)}
              </Link>
            ) : <span />}
            {nextExercise ? (
              <Link href={sectionHref(lang, "exercises", getExerciseUrlSlug(lang, nextExercise))}>
                <span>{t.nextExercise}</span>
                {exerciseTitleToPlainText(nextExercise.titleTex)}
              </Link>
            ) : <span />}
          </nav>

          <nav className="exercise-back-nav exercise-back-nav-bottom" aria-label={t.exercises}>
            <Link href={sectionHref(lang, "exercises")}>{t.back}</Link>
          </nav>
        </div>
      </article>
    </>
  );
}
