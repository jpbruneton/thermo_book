import { getWebThemes } from "@/lib/chapters";
import { exerciseTitleToPlainHtml, getTexWebHtmlFromSource } from "@/lib/chapterContent.server";
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
  enonceHtml: string;
  indicationHtml: string | null;
  solutionHtml: string | null;
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
    enonceHtml: getTexWebHtmlFromSource(e.enonceTex, lang, []),
    indicationHtml: e.indicationTex
      ? getTexWebHtmlFromSource(`\\begin{indication}\n${e.indicationTex}\n\\end{indication}`, lang, [])
      : null,
    solutionHtml: e.solutionTex
      ? getTexWebHtmlFromSource(`\\begin{solution}\n${e.solutionTex}\n\\end{solution}`, lang, [])
      : null,
  }));
}

export default function ExercisesPage() {
  const cardsFr = buildCards("fr");
  const cardsEn = buildCards("en");
  return <ExercisesClient cardsFr={cardsFr} cardsEn={cardsEn} />;
}
