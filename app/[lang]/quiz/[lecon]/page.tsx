import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWebThemes, bookMeta } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref } from "@/lib/i18n";
import { getQuizLessons, getQuizQuestionsByLecon } from "@/lib/quizzes";
import { QuizRunner } from "./QuizRunner";

export function generateStaticParams() {
  return getQuizLessons().map((lecon) => ({ lecon: String(lecon) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lecon: string; lang: "en" | "fr" }>;
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
  return {
    title: `Quiz — ${title}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl(sectionHref("fr", "quiz", String(lecon))),
        en: absoluteUrl(sectionHref("en", "quiz", String(lecon))),
      },
    },
    openGraph: {
      title: `Quiz — ${title} | ${bookMeta.title}`,
      url,
    },
  };
}

export default async function QuizLeconPage({
  params,
}: {
  params: Promise<{ lecon: string; lang: "en" | "fr" }>;
}) {
  const { lecon: leconParam } = await params;
  const lecon = Number(leconParam);
  const questions = getQuizQuestionsByLecon(lecon);
  if (!Number.isInteger(lecon) || questions.length === 0) {
    notFound();
  }

  const lessons = getWebThemes();
  const lesson = lessons.find((t) => t.number === lecon);

  return (
    <QuizRunner
      lecon={lecon}
      titleFr={lesson ? lesson.titleFr : `Leçon ${lecon}`}
      titleEn={lesson ? lesson.titleEn : `Lesson ${lecon}`}
      questions={questions}
    />
  );
}
