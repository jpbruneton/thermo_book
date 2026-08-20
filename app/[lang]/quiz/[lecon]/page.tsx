import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getThemeTitle, getThemeUrlSlug, getWebThemes, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import { getTranslations, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { getQuizTranslations } from "@/lib/quizTranslations";
import {
  getLocalizedQuizQuestions,
  getQuizLangsForLecon,
  getQuizLessons,
  getQuizQuestionsByLecon,
  type QuizQuestion,
} from "@/lib/quizzes";
import { QuizRunner } from "./QuizRunner";

/**
 * Quiz questions are translated lesson by lesson (`lib/quizQuestionTranslations.ts`).
 * A language that has no complete translation for this lesson gets an explicit
 * "not available yet" state rather than French content served under /de/, /es/…
 */
function QuizUnavailable({ lang, title, lecon }: { lang: Lang; title: string; lecon: number }) {
  const t = getQuizTranslations(lang);
  return (
    <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link
          href={sectionHref(lang, "quiz")}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "var(--amber)", textDecoration: "none" }}
        >
          {t.back}
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--text-heading)",
            margin: "1rem 0 0.75rem",
          }}
        >
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-crimson)", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
          {t.unavailableLesson(lecon)}
        </p>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getQuizLessons().map((lecon) => ({ lecon: String(lecon) }));
}

function quizJsonLd({
  lang,
  title,
  url,
  quizUrl,
  lessonUrl,
  questions,
}: {
  lang: Lang;
  title: string;
  url: string;
  quizUrl: string;
  lessonUrl: string | null;
  questions: QuizQuestion[];
}) {
  const t = getTranslations(lang);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: getSiteUrl() },
      { "@type": "ListItem", position: 2, name: t.nav.quiz, item: quizUrl },
      { "@type": "ListItem", position: 3, name: `${t.nav.quiz} — ${title}`, item: url },
    ],
  };

  const quiz = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: `${t.nav.quiz} — ${title}`,
    about: title,
    inLanguage: lang,
    url,
    educationalLevel: t.chapter.educationalLevel,
    learningResourceType: "Quiz",
    numberOfQuestions: questions.length,
    ...(lessonUrl
      ? { isBasedOn: { "@type": "LearningResource", name: title, url: lessonUrl } }
      : {}),
    hasPart: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.choices[q.correctIndex],
      },
    })),
  };

  return [breadcrumb, quiz];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lecon: string; lang: Lang }>;
}): Promise<Metadata> {
  const { lecon: leconParam, lang } = await params;
  const lecon = Number(leconParam);
  const lesson = getWebThemes().find((theme) => theme.number === lecon);
  const t = getQuizTranslations(lang);
  const quizWord = getTranslations(lang).nav.quiz;
  const title = lesson ? getThemeTitle(lesson, lang) : t.lessonLabel(lecon);

  const url = absoluteUrl(sectionHref(lang, "quiz", String(lecon)));
  // Only languages actually serving this quiz are advertised to search engines.
  const availableLangs = getQuizLangsForLecon(lecon, SUPPORTED_LANGS);
  const languages: Record<string, string> = {};
  for (const availableLang of availableLangs) {
    languages[availableLang] = absoluteUrl(sectionHref(availableLang, "quiz", String(lecon)));
  }
  if (languages.fr) languages["x-default"] = languages.fr;

  const available = availableLangs.includes(lang);
  return {
    title: `${quizWord} — ${title}`,
    description: t.lessonMetaDescription(lecon, title),
    alternates: { canonical: url, languages },
    robots: available && lesson?.listed !== false ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${quizWord} — ${title} | ${localizedSiteTitle(lang)}`,
      url,
    },
  };
}

export default async function QuizLeconPage({
  params,
}: {
  params: Promise<{ lecon: string; lang: Lang }>;
}) {
  const { lecon: leconParam, lang } = await params;
  const lecon = Number(leconParam);
  if (!Number.isInteger(lecon) || getQuizQuestionsByLecon(lecon).length === 0) {
    notFound();
  }

  const lesson = getWebThemes().find((theme) => theme.number === lecon);
  const t = getQuizTranslations(lang);
  const title = lesson ? getThemeTitle(lesson, lang) : t.lessonLabel(lecon);

  const questions = getLocalizedQuizQuestions(lecon, lang);
  if (!questions) {
    return <QuizUnavailable lang={lang} title={title} lecon={lecon} />;
  }

  const url = absoluteUrl(sectionHref(lang, "quiz", String(lecon)));
  const quizUrl = absoluteUrl(sectionHref(lang, "quiz"));
  const lessonUrl = lesson
    ? absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(lesson, lang)))
    : null;

  return (
    <>
      {quizJsonLd({ lang, title, url, quizUrl, lessonUrl, questions }).map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <QuizRunner lecon={lecon} title={title} questions={questions} />
    </>
  );
}
