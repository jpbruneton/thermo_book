import { MetadataRoute } from "next";
import { getWebThemes, getThemeUrlSlug } from "@/lib/chapters";
import { getSiteUrl } from "@/lib/siteUrl";
import { hasExercises, loadExercises } from "@/lib/exercisesLibrary.server";
import { hasLessonWebContent } from "@/lib/chapterContent.server";
import { getAllExercisesPdfHref, getExerciseThemePdfLinks } from "@/lib/exercisePdfDownloads.server";
import { getQuizLessons } from "@/lib/quizzes";
import { sectionHref, SUPPORTED_LANGS, TRANSLATED_SECTION_LANGS, type Lang } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

/** Builds the `alternates.languages` hreflang map for a set of per-lang URLs of the same page. */
function hreflangFor(urlsByLang: Partial<Record<Lang, string>>): { languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const lang of SUPPORTED_LANGS) {
    const url = urlsByLang[lang];
    if (url) languages[lang] = url;
  }
  if (urlsByLang.fr) languages["x-default"] = urlsByLang.fr;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // The homepage itself is translated for every supported language (chrome + hero +
  // lesson-card list), unlike individual sections below — so it gets the full hreflang set.
  const homeUrlsByLang: Partial<Record<Lang, string>> = {};
  for (const lang of SUPPORTED_LANGS) {
    homeUrlsByLang[lang] = `${SITE_URL}/${lang}`;
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: hreflangFor(homeUrlsByLang),
    },
    ...SUPPORTED_LANGS.map((lang) => ({
      url: homeUrlsByLang[lang]!,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
      alternates: hreflangFor(homeUrlsByLang),
    })),
  ];

  const englishExercisesAvailable = hasExercises("en");
  const webThemes = getWebThemes();

  const sectionsConfig: Array<{
    section: "chapters" | "about" | "glossary" | "exercises" | "quiz";
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    /** Which languages have real, indexable content for this section. */
    langs: readonly Lang[];
    includeLang: (lang: Lang) => boolean;
  }> = [
    { section: "chapters", priority: 0.9, changeFrequency: "monthly", langs: SUPPORTED_LANGS, includeLang: () => true },
    { section: "about", priority: 0.6, changeFrequency: "yearly", langs: SUPPORTED_LANGS, includeLang: () => true },
    { section: "glossary", priority: 0.5, changeFrequency: "monthly", langs: SUPPORTED_LANGS, includeLang: () => true },
    { section: "quiz", priority: 0.7, changeFrequency: "monthly", langs: ["fr"], includeLang: () => true },
    {
      section: "exercises",
      priority: 0.75,
      changeFrequency: "weekly",
      langs: TRANSLATED_SECTION_LANGS,
      includeLang: (lang) => lang === "fr" || englishExercisesAvailable,
    },
  ];

  for (const { section, priority, changeFrequency, langs, includeLang } of sectionsConfig) {
    const urlsByLang: Partial<Record<Lang, string>> = {};
    for (const lang of langs) {
      if (includeLang(lang)) urlsByLang[lang] = `${SITE_URL}${sectionHref(lang, section)}`;
    }
    for (const lang of langs) {
      const url = urlsByLang[lang];
      if (!url) continue;
      staticRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: hreflangFor(urlsByLang),
      });
    }
  }

  // One URL per authored lesson translation. Thin "not available yet" shells remain
  // navigable for users, but are deliberately absent from the sitemap and hreflang.
  const themeRoutes: MetadataRoute.Sitemap = webThemes.flatMap((theme) => {
    if (theme.lessons.length === 0) return [];

    return theme.lessons.flatMap((lesson, lessonIndex) => {
      const langs = SUPPORTED_LANGS.filter((lang) =>
        hasLessonWebContent(lesson.texFile, lang)
      );
      const urlsByLang: Partial<Record<Lang, string>> = {};
      for (const lang of langs) {
        const themeUrl = `${SITE_URL}${sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang))}`;
        urlsByLang[lang] = lessonIndex === 0 ? themeUrl : `${themeUrl}?lesson=${String(lessonIndex + 1)}`;
      }
      return langs.map((lang) => ({
        url: urlsByLang[lang]!,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
        alternates: hreflangFor(urlsByLang),
      }));
    });
  });

  // Quiz questions are authored in French only. English and other unavailable
  // shells are not advertised as indexable educational content.
  const quizRoutes: MetadataRoute.Sitemap = getQuizLessons().flatMap((lecon) => {
    const urlsByLang: Partial<Record<Lang, string>> = {};
    for (const lang of ["fr"] as const) {
      urlsByLang[lang] = `${SITE_URL}${sectionHref(lang, "quiz", String(lecon))}`;
    }
    return (["fr"] as const).map((lang) => ({
      url: urlsByLang[lang]!,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: hreflangFor(urlsByLang),
    }));
  });

  // Stable, intent-specific landing pages for every French worked exercise.
  const exerciseDetailRoutes: MetadataRoute.Sitemap = loadExercises("fr")
    .filter((exercise) => exercise.seoReady)
    .map((exercise) => ({
      url: `${SITE_URL}${sectionHref("fr", "exercises", exercise.id)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: { languages: { fr: `${SITE_URL}${sectionHref("fr", "exercises", exercise.id)}` } },
    }));

  // Exercise PDF downloads: the merged all-themes booklet plus any per-theme
  // PDF that has actually been built (checked on disk), fr and en.
  const exercisePdfRoutes: MetadataRoute.Sitemap = [];
  for (const lang of ["fr", "en"] as const) {
    const href = getAllExercisesPdfHref(lang);
    if (href) {
      exercisePdfRoutes.push({
        url: `${SITE_URL}${href}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
  }
  for (const theme of webThemes) {
    const links = getExerciseThemePdfLinks(theme.number);
    for (const href of [
      links.frAvecSolutions,
      links.frSansSolutions,
      links.enAvecSolutions,
      links.enSansSolutions,
    ]) {
      if (!href) continue;
      exercisePdfRoutes.push({
        url: `${SITE_URL}${href}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return [
    ...staticRoutes,
    ...themeRoutes,
    ...quizRoutes,
    ...exerciseDetailRoutes,
    ...exercisePdfRoutes,
  ];
}
