import { getWebThemes } from "@/lib/chapters";
import { exerciseTitleToPlainHtml } from "@/lib/chapterContent.server";
import { loadExercises } from "@/lib/exercisesLibrary.server";
import { ExercisesClient } from "./ExercisesClient";

export interface ExerciseCard {
  number: number;
  id: string;
  titleHtml: string;
  titleTex: string;
  lecon: number;
  leconTitleFr: string;
  leconTitleEn: string;
  keywords: string[];
}

function buildCards(lang: "fr" | "en"): ExerciseCard[] {
  const lessons = getWebThemes();
  const lessonTitle = (n: number) => {
    const l = lessons.find((t) => t.number === n);
    return l ? { fr: l.titleFr, en: l.titleEn } : { fr: `Leçon ${n}`, en: `Lesson ${n}` };
  };
  return loadExercises(lang).map((e) => ({
    number: e.number,
    id: e.id,
    titleHtml: exerciseTitleToPlainHtml(e.titleTex),
    titleTex: e.titleTex,
    lecon: e.lecon,
    leconTitleFr: lessonTitle(e.lecon).fr,
    leconTitleEn: lessonTitle(e.lecon).en,
    keywords: e.keywords,
  }));
}

export default function ExercisesPage() {
  const cardsFr = buildCards("fr");
  const cardsEn = buildCards("en");
  return <ExercisesClient cardsFr={cardsFr} cardsEn={cardsEn} />;
}
