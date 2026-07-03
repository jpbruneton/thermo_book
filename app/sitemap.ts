import { MetadataRoute } from "next";
import { getWebThemes } from "@/lib/chapters";
import { getSiteUrl } from "@/lib/siteUrl";
import { getEnglishTexFilePath, getLessonWebContent } from "@/lib/chapterContent.server";
import { hasExercises } from "@/lib/exercisesLibrary.server";
import { getAllExercisesPdfHref, getExerciseThemePdfLinks } from "@/lib/exercisePdfDownloads.server";
import { getQuizLessons } from "@/lib/quizzes";
import { sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

function themeHasEnglishContent(theme: ReturnType<typeof getWebThemes>[number]): boolean {
  return theme.lessons.some(
    (lesson) => getLessonWebContent(getEnglishTexFilePath(lesson.texFile), -1, []).length > 0
  );
}

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
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const englishExercisesAvailable = hasExercises("en");
  const webThemes = getWebThemes();

  const sectionsConfig: Array<{
    section: "chapters" | "about" | "glossary" | "exercises" | "quiz";
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    includeLang: (lang: Lang) => boolean;
  }> = [
    { section: "chapters", priority: 0.9, changeFrequency: "monthly", includeLang: () => true },
    { section: "about", priority: 0.6, changeFrequency: "yearly", includeLang: () => true },
    { section: "glossary", priority: 0.5, changeFrequency: "monthly", includeLang: () => true },
    { section: "quiz", priority: 0.7, changeFrequency: "monthly", includeLang: () => true },
    {
      section: "exercises",
      priority: 0.75,
      changeFrequency: "weekly",
      includeLang: (lang) => lang === "fr" || englishExercisesAvailable,
    },
  ];

  for (const { section, priority, changeFrequency, includeLang } of sectionsConfig) {
    const urlsByLang: Partial<Record<Lang, string>> = {};
    for (const lang of SUPPORTED_LANGS) {
      if (includeLang(lang)) urlsByLang[lang] = `${SITE_URL}${sectionHref(lang, section)}`;
    }
    for (const lang of SUPPORTED_LANGS) {
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

  // One URL per lesson per language: first lesson uses bare /{lang}/chapters/[slug];
  // others use ?lesson=N (1-based index in theme.lessons). English entries are skipped
  // for themes with no English lesson content yet, to avoid indexing thin gate pages.
  const themeRoutes: MetadataRoute.Sitemap = webThemes.flatMap((theme) => {
    const hasEnglish = themeHasEnglishContent(theme);
    const langs = SUPPORTED_LANGS.filter((lang) => lang === "fr" || hasEnglish);

    if (theme.lessons.length === 0) {
      const urlsByLang: Partial<Record<Lang, string>> = {};
      for (const lang of langs) {
        urlsByLang[lang] = `${SITE_URL}${sectionHref(lang, "chapters", theme.slug)}`;
      }
      return langs.map((lang) => ({
        url: urlsByLang[lang]!,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: hreflangFor(urlsByLang),
      }));
    }

    return theme.lessons.flatMap((_, lessonIndex) => {
      const urlsByLang: Partial<Record<Lang, string>> = {};
      for (const lang of langs) {
        const themeUrl = `${SITE_URL}${sectionHref(lang, "chapters", theme.slug)}`;
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

  // One quiz URL per lesson number per language (quiz content itself is not
  // translated per-lesson, but the page shell and lesson title are).
  const quizRoutes: MetadataRoute.Sitemap = getQuizLessons().flatMap((lecon) => {
    const urlsByLang: Partial<Record<Lang, string>> = {};
    for (const lang of SUPPORTED_LANGS) {
      urlsByLang[lang] = `${SITE_URL}${sectionHref(lang, "quiz", String(lecon))}`;
    }
    return SUPPORTED_LANGS.map((lang) => ({
      url: urlsByLang[lang]!,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: hreflangFor(urlsByLang),
    }));
  });

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

  return [...staticRoutes, ...themeRoutes, ...quizRoutes, ...exercisePdfRoutes];
}
