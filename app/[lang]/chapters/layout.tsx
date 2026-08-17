import type { Metadata } from "next";
import {
  bookMeta,
  localizedSiteTitle,
  getThemeDescription,
  getThemeTitle,
  getThemeUrlSlug,
  getWebThemes,
} from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { getTranslations, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { hasLessonWebContent } from "@/lib/chapterContent.server";

// This metadata applies to /[lang]/chapters (the listing page).
// Individual /[lang]/chapters/[slug] pages override it via their own generateMetadata.
export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const t = getTranslations(lang);
  const title = t.chapters.title;
  const description = t.chapters.description.trim() || `${t.chapters.title} — ${t.book.title.replace(/\n/g, " ")}.`;
  const url = absoluteUrl(sectionHref(lang, "chapters"));
  const languages: Record<string, string> = { "x-default": absoluteUrl(sectionHref("fr", "chapters")) };
  for (const availableLang of SUPPORTED_LANGS) {
    languages[availableLang] = absoluteUrl(sectionHref(availableLang, "chapters"));
  }
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: `${title} | ${localizedSiteTitle(lang)}`,
      description,
      url,
    },
  };
}

function lessonListJsonLd(lang: Lang) {
  const lessons = getWebThemes().filter((theme) =>
    theme.lessons.some((lesson) => hasLessonWebContent(lesson.texFile, lang))
  );
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: getTranslations(lang).chapters.title,
    numberOfItems: lessons.length,
    itemListElement: lessons.map((theme, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LearningResource",
        name: getThemeTitle(theme, lang),
        description: getThemeDescription(theme, lang),
        url: absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang))),
        inLanguage: lang,
        learningResourceType: lang === "fr" ? "Cours universitaire" : "University lesson",
        provider: { "@type": "Organization", name: bookMeta.affiliation },
      },
    })),
  };
}

export default function ChaptersLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonListJsonLd(params.lang)) }}
      />
      {children}
    </>
  );
}
