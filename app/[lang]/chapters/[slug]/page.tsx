import { notFound } from "next/navigation";
import { getWebTheme, getWebThemes, getThemeTitle, getThemeDescription, bookMeta } from "@/lib/chapters";
import { ChapterPageClient } from "./ChapterPageClient";
import type { Metadata } from "next";
import { getLessonReferences, getLessonWebContent, getTexFilePathForLang } from "@/lib/chapterContent.server";
import { processLatex } from "@/lib/latex";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import { sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

interface Props {
  params: { slug: string; lang: Lang };
}

export async function generateStaticParams() {
  return getWebThemes().map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const theme = getWebTheme(params.slug);
  if (!theme) return {};
  const { lang } = params;
  const isFr = lang === "fr";
  const title = getThemeTitle(theme, lang);
  const description = getThemeDescription(theme, lang);
  const label = isFr ? "Leçon" : "Lesson";
  const keywords = theme.lessons
    .flatMap((l) => (isFr ? l.topicsFr : l.topicsEn))
    .slice(0, 15);
  const url = absoluteUrl(sectionHref(lang, "chapters", theme.slug));
  const languages: Record<string, string> = {};
  for (const l of SUPPORTED_LANGS) languages[l] = absoluteUrl(sectionHref(l, "chapters", theme.slug));
  return {
    title: `${label} ${theme.number}: ${title}`,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "article",
      title: `${label} ${theme.number}: ${title}`,
      description,
      url,
    },
  };
}

function themeJsonLd(theme: NonNullable<ReturnType<typeof getWebTheme>>, lang: Lang) {
  const isFr = lang === "fr";
  const title = getThemeTitle(theme, lang);
  const description = getThemeDescription(theme, lang);
  const label = isFr ? "Leçon" : "Lesson";
  const url = absoluteUrl(sectionHref(lang, "chapters", theme.slug));
  const chaptersUrl = absoluteUrl(sectionHref(lang, "chapters"));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isFr ? "Accueil" : "Home", item: getSiteUrl() },
      { "@type": "ListItem", position: 2, name: isFr ? "Leçons" : "Lessons", item: chaptersUrl },
      { "@type": "ListItem", position: 3, name: `${label} ${theme.number}: ${title}`, item: url },
    ],
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${label} ${theme.number}: ${title}`,
    description,
    url,
    inLanguage: lang,
    provider: {
      "@type": "Organization",
      name: bookMeta.affiliation,
    },
  };

  return [breadcrumb, course];
}

export default function ChapterPage({ params }: Props) {
  const theme = getWebTheme(params.slug);
  if (!theme) notFound();

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
        references: resolvedReferences,
      };
    }),
  };

  const webThemes = getWebThemes();
  const currentIndex = webThemes.findIndex((item) => item.slug === theme.slug);
  const prev = currentIndex > 0 ? webThemes[currentIndex - 1] : null;
  const next =
    currentIndex < webThemes.length - 1 ? webThemes[currentIndex + 1] : null;

  return (
    <>
      {themeJsonLd(theme, params.lang).map((block, index) => (
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
      />
    </>
  );
}
