import { getListedWebThemes } from "@/lib/chapters";
import { getQuizLessons, getQuizQuestionsByLecon } from "@/lib/quizzes";
import { QuizHomeClient } from "./QuizHomeClient";

export interface QuizLessonCard {
  lecon: number;
  titleFr: string;
  titleEn: string;
  count: number;
}

export default function QuizHomePage() {
  const lessons = getListedWebThemes();
  const listedNumbers = new Set(lessons.map((t) => t.number));
  const lessonTitle = (n: number) => {
    const l = lessons.find((t) => t.number === n);
    return l ? { fr: l.titleFr, en: l.titleEn } : { fr: `Leçon ${n}`, en: `Lesson ${n}` };
  };

  // Unlisted (Part II/III) lesson numbers are excluded even if quiz content exists for them.
  const cards: QuizLessonCard[] = getQuizLessons()
    .filter((lecon) => listedNumbers.has(lecon))
    .map((lecon) => ({
      lecon,
      titleFr: lessonTitle(lecon).fr,
      titleEn: lessonTitle(lecon).en,
      count: getQuizQuestionsByLecon(lecon).length,
    }));

  return <QuizHomeClient cards={cards} />;
}
