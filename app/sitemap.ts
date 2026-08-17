import { MetadataRoute } from "next";
import { getWebThemes, getThemeUrlSlug } from "@/lib/chapters";
import { getSiteUrl } from "@/lib/siteUrl";
import { getExerciseById, getExerciseUrlSlug, hasExercises, loadExercises } from "@/lib/exercisesLibrary.server";
import { hasLessonWebContent } from "@/lib/chapterContent.server";
import { getAllExercisesPdfHref, getExerciseThemePdfLinks } from "@/lib/exercisePdfDownloads.server";
import { getQuizLessons } from "@/lib/quizzes";
import { sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

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

  const webThemes = getWebThemes();
  // Lesson numbers belonging to an unlisted (Part II/III, draft) theme: their
  // quiz and exercise pages are excluded from the sitemap too, not just the lessons.
  const listedLessonNumbers = new Set(
    webThemes.filter((theme) => theme.listed !== false).map((theme) => theme.number)
  );

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
      langs: SUPPORTED_LANGS,
      includeLang: (lang) => hasExercises(lang),
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

  // One URL per authored lesson translation. Thin "not available yet" shells, and
  // unlisted/draft themes (Parts II/III, noindexed — see chapters/[slug]/page.tsx),
  // remain navigable for users but are deliberately absent from the sitemap and hreflang.
  const themeRoutes: MetadataRoute.Sitemap = webThemes.flatMap((theme) => {
    if (theme.lessons.length === 0 || theme.listed === false) return [];

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
  const quizRoutes: MetadataRoute.Sitemap = getQuizLessons()
    .filter((lecon) => listedLessonNumbers.has(lecon))
    .flatMap((lecon) => {
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

  // Stable, intent-specific landing pages for every approved worked exercise,
  // with one localized URL for each language that contains the same exercise id.
  const exerciseDetailRoutes: MetadataRoute.Sitemap = SUPPORTED_LANGS.flatMap((lang) =>
    loadExercises(lang)
      .filter((exercise) => exercise.seoReady && listedLessonNumbers.has(exercise.lecon))
      .map((exercise) => {
        const urlsByLang: Partial<Record<Lang, string>> = {};
        for (const availableLang of SUPPORTED_LANGS) {
          const candidate = getExerciseById(availableLang, exercise.id);
          if (!candidate?.seoReady) continue;
          urlsByLang[availableLang] = `${SITE_URL}${sectionHref(
            availableLang,
            "exercises",
            getExerciseUrlSlug(availableLang, candidate)
          )}`;
        }
        return {
          url: `${SITE_URL}${sectionHref(lang, "exercises", getExerciseUrlSlug(lang, exercise))}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.72,
          alternates: hreflangFor(urlsByLang),
        };
      })
  );

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
