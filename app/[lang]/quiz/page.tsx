import { getWebThemes } from "@/lib/chapters";
import { getQuizLessons, getQuizQuestionsByLecon } from "@/lib/quizzes";
import { QuizHomeClient } from "./QuizHomeClient";

export interface QuizLessonCard {
  lecon: number;
  titleFr: string;
  titleEn: string;
  count: number;
}

export default function QuizHomePage() {
  const lessons = getWebThemes();
  const lessonTitle = (n: number) => {
    const l = lessons.find((t) => t.number === n);
    return l ? { fr: l.titleFr, en: l.titleEn } : { fr: `Leçon ${n}`, en: `Lesson ${n}` };
  };

  const cards: QuizLessonCard[] = getQuizLessons().map((lecon) => ({
    lecon,
    titleFr: lessonTitle(lecon).fr,
    titleEn: lessonTitle(lecon).en,
    count: getQuizQuestionsByLecon(lecon).length,
  }));

  return <QuizHomeClient cards={cards} />;
}
