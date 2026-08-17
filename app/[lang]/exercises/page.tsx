import { getThemeTitle, getListedWebThemes } from "@/lib/chapters";
import { exerciseTitleToPlainHtml } from "@/lib/chapterContent.server";
import { getExerciseUrlSlug, loadExercises } from "@/lib/exercisesLibrary.server";
import { getAllExercisesPdfHref } from "@/lib/exercisePdfDownloads.server";
import type { Lang } from "@/lib/i18n";
import { ExercisesClient } from "./ExercisesClient";

const SHOW_ALL_EXERCISES_PDF_DOWNLOAD = false;

export interface ExerciseCard {
  number: number;
  id: string;
  urlSlug: string;
  titleHtml: string;
  titleTex: string;
  lecon: number;
  lessonTitle: string;
  keywords: string[];
}

function buildCards(lang: Lang): ExerciseCard[] {
  const lessons = getListedWebThemes();
  const listedNumbers = new Set(lessons.map((t) => t.number));
  const lessonTitle = (n: number) => {
    const l = lessons.find((t) => t.number === n);
    return l ? getThemeTitle(l, lang) : `${lang === "fr" ? "Leçon" : "Lesson"} ${n}`;
  };
  // Exercises attached to an unlisted (Part II/III) lesson number stay hidden too.
  return loadExercises(lang)
    .filter((e) => listedNumbers.has(e.lecon))
    .map((e) => ({
      number: e.number,
      id: e.id,
      urlSlug: getExerciseUrlSlug(lang, e),
      titleHtml: exerciseTitleToPlainHtml(e.titleTex),
      titleTex: e.titleTex,
      lecon: e.lecon,
      lessonTitle: lessonTitle(e.lecon),
      keywords: e.keywords,
    }));
}

export default function ExercisesPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <ExercisesClient
      cards={loadExercises(lang).length > 0 ? buildCards(lang) : []}
      allPdfHref={SHOW_ALL_EXERCISES_PDF_DOWNLOAD && (lang === "fr" || lang === "en")
        ? getAllExercisesPdfHref(lang)
        : null}
    />
  );
}
