import { getListedWebThemes, getThemeTitle } from "@/lib/chapters";
import type { Lang } from "@/lib/i18n";
import { getQuizTranslations } from "@/lib/quizTranslations";
import { getLocalizedQuizQuestions, getQuizLessonsForLang } from "@/lib/quizzes";
import { QuizHomeClient } from "./QuizHomeClient";

export interface QuizLessonCard {
  lecon: number;
  /** Lesson title, already resolved for the current language. */
  title: string;
  count: number;
}

export default async function QuizHomePage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const lessons = getListedWebThemes();
  const listedNumbers = new Set(lessons.map((theme) => theme.number));
  const t = getQuizTranslations(lang);

  // Unlisted (Part II/III) lessons are excluded even if quiz content exists for
  // them, and a lesson only appears once its quiz is fully translated in `lang`.
  const cards: QuizLessonCard[] = getQuizLessonsForLang(lang)
    .filter((lecon) => listedNumbers.has(lecon))
    .map((lecon) => {
      const lesson = lessons.find((theme) => theme.number === lecon);
      return {
        lecon,
        title:
          t.lessonCardTitles[lecon] ??
          (lesson ? getThemeTitle(lesson, lang) : t.lessonLabel(lecon)),
        count: getLocalizedQuizQuestions(lecon, lang)?.length ?? 0,
      };
    });

  return <QuizHomeClient cards={cards} />;
}
