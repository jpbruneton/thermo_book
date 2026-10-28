import { bookMeta, getThemeTitle, getListedWebThemes } from "@/lib/chapters";
import { exerciseTitleToPlainHtml } from "@/lib/chapterContent.server";
import { exerciseTitleToPlainText, getExerciseUrlSlug, loadExercises } from "@/lib/exercisesLibrary.server";
import { getExerciseTranslations } from "@/lib/exerciseTranslations";
import { absoluteUrl } from "@/lib/siteUrl";
import { getAllExercisesPdfHref } from "@/lib/exercisePdfDownloads.server";
import { sectionHref, type Lang } from "@/lib/i18n";
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

// Explicit, machine-readable "these are solved/corrected exercises" signal for
// the hub listing page, mirroring what each exercise page already states in its
// own JSON-LD (learningResourceType) — same wording as the visible page title.
// Rendered on the hub only: in the layout it was shipped (HTML + RSC) with
// every exercise page.
function exercisesListJsonLd(lang: Lang) {
  const t = getExerciseTranslations(lang);
  const listedLessonNumbers = new Set(getListedWebThemes().map((theme) => theme.number));
  const exercises = loadExercises(lang).filter(
    (exercise) => exercise.seoReady && listedLessonNumbers.has(exercise.lecon)
  );
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.hubTitle,
    description: t.hubDescription,
    numberOfItems: exercises.length,
    itemListElement: exercises.map((exercise, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LearningResource",
        name: exerciseTitleToPlainText(exercise.titleTex),
        learningResourceType: t.learningResourceType,
        educationalLevel: t.educationalLevel,
        url: absoluteUrl(sectionHref(lang, "exercises", getExerciseUrlSlug(lang, exercise))),
        inLanguage: lang,
        provider: { "@type": "Organization", name: bookMeta.affiliation },
      },
    })),
  };
}

export default function ExercisesPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exercisesListJsonLd(lang)) }}
      />
      <ExercisesClient
      cards={loadExercises(lang).length > 0 ? buildCards(lang) : []}
      allPdfHref={SHOW_ALL_EXERCISES_PDF_DOWNLOAD && (lang === "fr" || lang === "en")
        ? getAllExercisesPdfHref(lang)
        : null}
      />
    </>
  );
}
