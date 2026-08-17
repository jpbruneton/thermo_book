import { notFound, permanentRedirect } from "next/navigation";
import { getWebThemeFromUrlSlug, getWebThemes, getThemeTitle, getThemeDescription, getThemeTopics, getThemeUrlSlug, bookMeta, localizedSiteTitle } from "@/lib/chapters";
import { ChapterPageClient } from "./ChapterPageClient";
import type { Metadata } from "next";
import { getLessonReferences, getLessonWebContent, getTexFilePathForLang, hasLessonWebContent } from "@/lib/chapterContent.server";
import { processLatex } from "@/lib/latex";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import { getTranslations, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import {
  exerciseTitleToPlainText,
  getExerciseUrlSlug,
  loadExercises,
} from "@/lib/exercisesLibrary.server";

interface Props {
  params: { slug: string; lang: Lang };
  searchParams?: { lesson?: string | string[] };
}

export async function generateStaticParams({ params }: { params: { lang: Lang } }) {
  return getWebThemes().map((theme) => ({ slug: getThemeUrlSlug(theme, params.lang) }));
}

// chapter.chapterLabel/themeLabel are stored upper-case (small-caps badge use,
// see ChapterPageClient) but read as "Lesson 9" / "LEÇON 9" in titles and JSON-LD.
function titleCaseLabel(label: string): string {
  return label.charAt(0) + label.slice(1).toLowerCase();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const theme = getWebThemeFromUrlSlug(params.slug, params.lang);
  if (!theme) return {};
  const { lang } = params;
  const title = getThemeTitle(theme, lang);
  const description = getThemeDescription(theme, lang);
  const label = titleCaseLabel(getTranslations(lang).chapter.chapterLabel);
  const keywords = theme.lessons
    .flatMap((l) => getThemeTopics(theme.slug, l, lang))
    .slice(0, 15);
  const url = absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang)));
  const languages: Record<string, string> = {};
  const availableLangs = SUPPORTED_LANGS.filter((candidateLang) =>
    theme.lessons.some((lesson) => hasLessonWebContent(lesson.texFile, candidateLang))
  );
  // Unlisted (draft) themes are noindexed everywhere, so don't advertise
  // cross-language alternates for them either.
  if (theme.listed !== false) {
    for (const availableLang of availableLangs) {
      languages[availableLang] = absoluteUrl(
        sectionHref(availableLang, "chapters", getThemeUrlSlug(theme, availableLang))
      );
    }
    if (languages.fr) languages["x-default"] = languages.fr;
  }
  const contentAvailable = availableLangs.includes(lang);
  return {
    title: `${label} ${theme.number}: ${title}`,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    // Parts II/III (theme.listed === false) are draft content: kept reachable
    // by direct URL, but noindexed in every language regardless of whether a
    // translation exists, same as content that isn't authored yet.
    robots: contentAvailable && theme.listed !== false ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      title: `${label} ${theme.number}: ${title}`,
      description,
      url,
    },
  };
}

function themeJsonLd(
  theme: NonNullable<ReturnType<typeof getWebThemeFromUrlSlug>>,
  lang: Lang,
  contentAvailable: boolean
) {
  const t = getTranslations(lang).chapter;
  const title = getThemeTitle(theme, lang);
  const description = getThemeDescription(theme, lang);
  const label = titleCaseLabel(t.chapterLabel);
  const url = absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang)));
  const chaptersUrl = absoluteUrl(sectionHref(lang, "chapters"));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: getSiteUrl() },
      { "@type": "ListItem", position: 2, name: t.breadcrumbThemes, item: chaptersUrl },
      { "@type": "ListItem", position: 3, name: `${label} ${theme.number}: ${title}`, item: url },
    ],
  };

  const learningResource = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${label} ${theme.number}: ${title}`,
    description,
    url,
    inLanguage: lang,
    learningResourceType: t.learningResourceType,
    educationalLevel: t.educationalLevel,
    author: {
      "@type": "Person",
      name: bookMeta.author,
    },
    publisher: {
      "@type": "Organization",
      name: bookMeta.affiliation,
    },
    isPartOf: {
      "@type": "Book",
      name: localizedSiteTitle(lang),
      url: getSiteUrl(),
    },
  };

  return contentAvailable ? [breadcrumb, learningResource] : [breadcrumb];
}

export default function ChapterPage({ params, searchParams }: Props) {
  const theme = getWebThemeFromUrlSlug(params.slug, params.lang);
  if (!theme) notFound();

  const canonicalSlug = getThemeUrlSlug(theme, params.lang);
  if (params.slug !== canonicalSlug) {
    const lesson = Array.isArray(searchParams?.lesson) ? searchParams.lesson[0] : searchParams?.lesson;
    const destination = sectionHref(params.lang, "chapters", canonicalSlug);
    permanentRedirect(lesson ? `${destination}?lesson=${encodeURIComponent(lesson)}` : destination);
  }

  const themeWithDynamicContent = {
    ...theme,
    lessons: theme.lessons.map((lesson) => {
      const resolvedReferences = getLessonReferences(theme.number, lesson.number, lesson.references);
      const langTexFile = getTexFilePathForLang(lesson.texFile, params.lang);
      const langContent = getLessonWebContent(langTexFile, -1, resolvedReferences) || (params.lang === "fr" ? lesson.content : "");
      const renderedLang = langContent ? processLatex(langContent) : "";
      return {
        ...lesson,
        content: langContent,
        contentLang: langContent,
        renderedLang,
        topicsLang: getThemeTopics(theme.slug, lesson, params.lang),
        references: resolvedReferences,
      };
    }),
  };
  const contentAvailable = theme.lessons.some((lesson) =>
    hasLessonWebContent(lesson.texFile, params.lang)
  );

  const webThemes = getWebThemes();
  const currentIndex = webThemes.findIndex((item) => item.slug === theme.slug);
  const prev = currentIndex > 0 ? webThemes[currentIndex - 1] : null;
  const nextCandidate =
    currentIndex < webThemes.length - 1 ? webThemes[currentIndex + 1] : null;
  // Don't lead readers from a listed chapter into an unlisted (draft) one.
  const next = theme.listed !== false && nextCandidate?.listed === false ? null : nextCandidate;
  const isPrimaryExerciseLesson = webThemes.find((item) => item.number === theme.number)?.slug === theme.slug;
  const relatedExercises = isPrimaryExerciseLesson
    ? loadExercises(params.lang)
        .filter((exercise) => exercise.lecon === theme.number)
        .map((exercise) => ({
          id: exercise.id,
          urlSlug: getExerciseUrlSlug(params.lang, exercise),
          number: exercise.number,
          title: exerciseTitleToPlainText(exercise.titleTex),
        }))
    : [];

  return (
    <>
      {themeJsonLd(theme, params.lang, contentAvailable).map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <ChapterPageClient
        theme={themeWithDynamicContent}
        prev={prev}
        next={next}
        relatedExercises={relatedExercises}
      />
    </>
  );
}
