import Link from "next/link";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  exerciseTitleToPlainHtml,
  getTexWebHtmlFromSource,
} from "@/lib/chapterContent.server";
import { getWebThemes, getThemeTitle, getThemeUrlSlug, bookMeta } from "@/lib/chapters";
import {
  exerciseTitleToPlainText,
  getExerciseById,
  loadExercises,
} from "@/lib/exercisesLibrary.server";
import { processLatex } from "@/lib/latex";
import { absoluteUrl } from "@/lib/siteUrl";
import { isLang, sectionHref, type Lang } from "@/lib/i18n";

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (params.lang !== "fr") return [];
  return loadExercises("fr").map((exercise) => ({ slug: exercise.id }));
}

function exerciseDescription(
  title: string,
  lessonTitle: string,
  keywords: string[],
  hasSolution: boolean
): string {
  const correction = hasSolution ? "avec solution détaillée" : "avec méthode et indication";
  const topics = keywords.length > 0 ? ` Notions : ${keywords.slice(0, 5).join(", ")}.` : "";
  return `${title} : exercice de thermodynamique ${correction}, rattaché au cours « ${lessonTitle} ».${topics}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params;
  if (!isLang(lang) || lang !== "fr") {
    return { robots: { index: false, follow: true } };
  }

  const exercise = getExerciseById("fr", slug);
  if (!exercise) return {};

  const theme = getWebThemes().find((item) => item.number === exercise.lecon);
  const title = exerciseTitleToPlainText(exercise.titleTex) || `Exercice ${exercise.number}`;
  const lessonTitle = theme ? getThemeTitle(theme, "fr") : `Leçon ${exercise.lecon}`;
  const description = exerciseDescription(
    title,
    lessonTitle,
    exercise.keywords,
    Boolean(exercise.solutionTex)
  );
  const url = absoluteUrl(sectionHref("fr", "exercises", exercise.id));

  return {
    title: `${title} — exercice corrigé de thermodynamique`,
    description,
    keywords: exercise.keywords,
    alternates: {
      canonical: url,
      languages: exercise.seoReady ? { fr: url } : undefined,
    },
    robots: exercise.seoReady ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      title: `${title} — exercice corrigé de thermodynamique`,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title: `${title} — exercice corrigé de thermodynamique`,
      description,
    },
  };
}

function exerciseJsonLd({
  exercise,
  title,
  description,
  url,
  lessonUrl,
  lessonTitle,
}: {
  exercise: NonNullable<ReturnType<typeof getExerciseById>>;
  title: string;
  description: string;
  url: string;
  lessonUrl: string | null;
  lessonTitle: string;
}) {
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/fr") },
    {
      "@type": "ListItem",
      position: 2,
      name: "Exercices corrigés",
      item: absoluteUrl(sectionHref("fr", "exercises")),
    },
    { "@type": "ListItem", position: 3, name: title, item: url },
  ];

  const resource: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description,
    url,
    inLanguage: "fr",
    learningResourceType: "Exercice corrigé",
    educationalLevel: "Enseignement supérieur — Licence",
    author: { "@type": "Person", name: bookMeta.author },
    publisher: { "@type": "Organization", name: bookMeta.affiliation },
    about: exercise.keywords.map((name) => ({ "@type": "Thing", name })),
    isPartOf: {
      "@type": "Book",
      name: bookMeta.title,
      url: absoluteUrl("/fr"),
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
  if (params.lang !== "fr") redirect(sectionHref(params.lang as Lang, "exercises"));

  const exercise = getExerciseById("fr", params.slug);
  if (!exercise) notFound();

  const exercises = loadExercises("fr");
  const exerciseIndex = exercises.findIndex((item) => item.id === exercise.id);
  const previousExercise = exerciseIndex > 0 ? exercises[exerciseIndex - 1] : null;
  const nextExercise = exerciseIndex < exercises.length - 1 ? exercises[exerciseIndex + 1] : null;
  const theme = getWebThemes().find((item) => item.number === exercise.lecon);
  const title = exerciseTitleToPlainText(exercise.titleTex) || `Exercice ${exercise.number}`;
  const titleHtml = exerciseTitleToPlainHtml(exercise.titleTex);
  const lessonTitle = theme ? getThemeTitle(theme, "fr") : `Leçon ${exercise.lecon}`;
  const lessonUrl = theme
    ? absoluteUrl(sectionHref("fr", "chapters", getThemeUrlSlug(theme, "fr")))
    : null;
  const url = absoluteUrl(sectionHref("fr", "exercises", exercise.id));
  const description = exerciseDescription(
    title,
    lessonTitle,
    exercise.keywords,
    Boolean(exercise.solutionTex)
  );

  const statementHtml = processLatex(getTexWebHtmlFromSource(exercise.enonceTex, "fr", []));
  const hintHtml = exercise.indicationTex
    ? processLatex(
        getTexWebHtmlFromSource(
          `\\begin{indication}\n${exercise.indicationTex}\n\\end{indication}`,
          "fr",
          []
        )
      )
    : "";
  const solutionHtml = exercise.solutionTex
    ? processLatex(
        getTexWebHtmlFromSource(
          `\\begin{solution}\n${exercise.solutionTex}\n\\end{solution}`,
          "fr",
          []
        )
      )
    : "";

  return (
    <>
      {exerciseJsonLd({ exercise, title, description, url, lessonUrl, lessonTitle }).map(
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
          <nav className="exercise-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/fr">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href={sectionHref("fr", "exercises")}>Exercices</Link>
            <span aria-hidden="true">/</span>
            <span>Exercice {exercise.number}</span>
          </nav>

          <header className="exercise-detail-header">
            <p className="exercise-detail-kicker">Exercice corrigé de thermodynamique</p>
            <h1 dangerouslySetInnerHTML={{ __html: titleHtml || title }} />
            <p className="exercise-detail-context">
              Exercice {exercise.number} · Leçon {exercise.lecon} — {lessonTitle}
            </p>
            {exercise.keywords.length > 0 && (
              <ul className="exercise-keywords" aria-label="Notions abordées">
                {exercise.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
              </ul>
            )}
          </header>

          {!exercise.seoReady && (
            <p className="exercise-draft-notice" data-nosnippet>
              Version de travail — cet exercice est encore en cours de relecture.
            </p>
          )}

          <section aria-labelledby="exercise-statement-title" className="exercise-detail-section">
            <h2 id="exercise-statement-title">Énoncé</h2>
            <div className="prose-content" dangerouslySetInnerHTML={{ __html: statementHtml }} />
          </section>

          {hintHtml && (
            <section aria-labelledby="exercise-hint-title" className="exercise-detail-section">
              <h2 id="exercise-hint-title" className="visually-hidden">Indication</h2>
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: hintHtml }} />
            </section>
          )}

          {solutionHtml && (
            <section aria-labelledby="exercise-solution-title" className="exercise-detail-section">
              <h2 id="exercise-solution-title">Solution détaillée</h2>
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: solutionHtml }} />
            </section>
          )}

          <aside className="exercise-related-lesson" aria-label="Cours associé">
            <span>À revoir avant cet exercice</span>
            {theme ? (
              <Link href={sectionHref("fr", "chapters", getThemeUrlSlug(theme, "fr"))}>
                Leçon {theme.number} — {lessonTitle} →
              </Link>
            ) : (
              <strong>{lessonTitle}</strong>
            )}
          </aside>

          <nav className="exercise-prev-next" aria-label="Navigation entre les exercices">
            {previousExercise ? (
              <Link href={sectionHref("fr", "exercises", previousExercise.id)}>
                <span>← Exercice précédent</span>
                {exerciseTitleToPlainText(previousExercise.titleTex)}
              </Link>
            ) : <span />}
            {nextExercise ? (
              <Link href={sectionHref("fr", "exercises", nextExercise.id)}>
                <span>Exercice suivant →</span>
                {exerciseTitleToPlainText(nextExercise.titleTex)}
              </Link>
            ) : <span />}
          </nav>
        </div>
      </article>
    </>
  );
}
