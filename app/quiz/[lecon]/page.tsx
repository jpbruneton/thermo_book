import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWebThemes, bookMeta } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { getQuizLessons, getQuizQuestionsByLecon } from "@/lib/quizzes";
import { QuizRunner } from "./QuizRunner";

export function generateStaticParams() {
  return getQuizLessons().map((lecon) => ({ lecon: String(lecon) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lecon: string }>;
}): Promise<Metadata> {
  const { lecon: leconParam } = await params;
  const lecon = Number(leconParam);
  const lessons = getWebThemes();
  const lesson = lessons.find((t) => t.number === lecon);
  const title = lesson ? lesson.titleFr : `Leçon ${lecon}`;
  return {
    title: `Quiz — ${title}`,
    description: `Quiz de cours sur la leçon ${lecon} : ${title}.`,
    alternates: { canonical: absoluteUrl(`/quiz/${lecon}`) },
    openGraph: {
      title: `Quiz — ${title} | ${bookMeta.title}`,
      url: absoluteUrl(`/quiz/${lecon}`),
    },
  };
}

export default async function QuizLeconPage({
  params,
}: {
  params: Promise<{ lecon: string }>;
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
