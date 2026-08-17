import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWebThemes, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, type Lang } from "@/lib/i18n";
import { getQuizLessons, getQuizQuestionsByLecon } from "@/lib/quizzes";
import { QuizRunner } from "./QuizRunner";

/**
 * Quiz questions are currently authored in French only (lib/quizzes.ts has no
 * per-language content). Rather than silently serving French content under
 * /en/, show an explicit "not available yet" state until real English
 * questions exist.
 */
function QuizUnavailable({ lang, title, lecon }: { lang: Lang; title: string; lecon: number }) {
  const isFr = lang === "fr";
  return (
    <div style={{ position: "relative", zIndex: 1, padding: "4rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link
          href={sectionHref(lang, "quiz")}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "var(--amber)", textDecoration: "none" }}
        >
          {isFr ? "← Retour aux quiz" : "← Back to quizzes"}
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
          {isFr
            ? `Le quiz de la leçon ${lecon} n'est pas encore disponible dans cette langue.`
            : `The quiz for lesson ${lecon} is not available yet in this language.`}
        </p>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getQuizLessons().map((lecon) => ({ lecon: String(lecon) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lecon: string; lang: Lang }>;
}): Promise<Metadata> {
  const { lecon: leconParam, lang } = await params;
  const lecon = Number(leconParam);
  const lessons = getWebThemes();
  const lesson = lessons.find((t) => t.number === lecon);
  const isFr = lang === "fr";
  const title = lesson ? (isFr ? lesson.titleFr : lesson.titleEn) : (isFr ? `Leçon ${lecon}` : `Lesson ${lecon}`);
  const description = isFr
    ? `Quiz de cours sur la leçon ${lecon} : ${title}.`
    : `Course quiz on lesson ${lecon}: ${title}.`;
  const url = absoluteUrl(sectionHref(lang, "quiz", String(lecon)));
  const frenchUrl = absoluteUrl(sectionHref("fr", "quiz", String(lecon)));
  return {
    title: `Quiz — ${title}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: frenchUrl,
        "x-default": frenchUrl,
      },
    },
    robots: isFr && lesson?.listed !== false ? undefined : { index: false, follow: true },
    openGraph: {
      title: `Quiz — ${title} | ${localizedSiteTitle(lang)}`,
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
  const questions = getQuizQuestionsByLecon(lecon);
  if (!Number.isInteger(lecon) || questions.length === 0) {
    notFound();
  }

  const lessons = getWebThemes();
  const lesson = lessons.find((t) => t.number === lecon);
  const titleFr = lesson ? lesson.titleFr : `Leçon ${lecon}`;
  const titleEn = lesson ? lesson.titleEn : `Lesson ${lecon}`;

  if (lang !== "fr") {
    return <QuizUnavailable lang={lang} title={titleEn} lecon={lecon} />;
  }

  return (
    <QuizRunner
      lecon={lecon}
      titleFr={titleFr}
      titleEn={titleEn}
      questions={questions}
    />
  );
}
