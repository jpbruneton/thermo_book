import type { Metadata } from "next";
import { bookMeta, getListedWebThemes, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { exerciseTitleToPlainText, getExerciseUrlSlug, hasExercises, loadExercises } from "@/lib/exercisesLibrary.server";
import { getExerciseTranslations } from "@/lib/exerciseTranslations";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const t = getExerciseTranslations(lang);
  const title = t.hubTitle;
  const description = t.hubDescription;
  const url = absoluteUrl(sectionHref(lang, "exercises"));
  const languages: Record<string, string> = {};
  for (const availableLang of SUPPORTED_LANGS) {
    if (hasExercises(availableLang)) {
      languages[availableLang] = absoluteUrl(sectionHref(availableLang, "exercises"));
    }
  }
  if (languages.fr) languages["x-default"] = languages.fr;
  const contentAvailable = hasExercises(lang);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: contentAvailable ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${localizedSiteTitle(lang)}`,
      description,
      url,
    },
  };
}

// Explicit, machine-readable "these are solved/corrected exercises" signal for
// the hub listing page, mirroring what each exercise page already states in its
// own JSON-LD (learningResourceType) — same wording as the visible page title.
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

export default function ExercisesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exercisesListJsonLd(params.lang)) }}
      />
      {children}
    </>
  );
}
