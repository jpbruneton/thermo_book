import { MetadataRoute } from "next";
import { getWebThemes } from "@/lib/chapters";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import { getEnglishTexFilePath, getLessonWebContent } from "@/lib/chapterContent.server";
import { hasExercises } from "@/lib/exercisesLibrary.server";
import { SUPPORTED_LANGS } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

function themeHasEnglishContent(theme: ReturnType<typeof getWebThemes>[number]): boolean {
  return theme.lessons.some(
    (lesson) => getLessonWebContent(getEnglishTexFilePath(lesson.texFile), -1, []).length > 0
  );
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

  for (const lang of SUPPORTED_LANGS) {
    staticRoutes.push(
      {
        url: `${SITE_URL}/${lang}/chapters`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/${lang}/about`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
      },
      {
        url: `${SITE_URL}/${lang}/glossary`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      }
    );
    if (lang === "fr" || englishExercisesAvailable) {
      staticRoutes.push({
        url: `${SITE_URL}/${lang}/exercises`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
  }

  // One URL per lesson per language: first lesson uses bare /{lang}/chapters/[slug];
  // others use ?lesson=N (1-based index in theme.lessons). English entries are skipped
  // for themes with no English lesson content yet, to avoid indexing thin gate pages.
  const themeRoutes: MetadataRoute.Sitemap = webThemes.flatMap((theme) => {
    const hasEnglish = themeHasEnglishContent(theme);
    return SUPPORTED_LANGS.flatMap((lang) => {
      if (lang === "en" && !hasEnglish) return [];
      if (theme.lessons.length === 0) {
        return [
          {
            url: `${SITE_URL}/${lang}/chapters/${theme.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
        ];
      }
      return theme.lessons.map((_, lessonIndex) => ({
        url:
          lessonIndex === 0
            ? `${SITE_URL}/${lang}/chapters/${theme.slug}`
            : `${SITE_URL}/${lang}/chapters/${theme.slug}?lesson=${String(lessonIndex + 1)}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      }));
    });
  });

  return [...staticRoutes, ...themeRoutes];
}
