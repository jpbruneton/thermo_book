import { notFound, permanentRedirect } from "next/navigation";
import { getWebThemeFromUrlSlug, getWebThemes, getThemeTitle, getThemeDescription, getThemeTopics, getThemeUrlSlug, bookMeta } from "@/lib/chapters";
import { ChapterPageClient } from "./ChapterPageClient";
import type { Metadata } from "next";
import { getLessonReferences, getLessonWebContent, getTexFilePathForLang } from "@/lib/chapterContent.server";
import { processLatex } from "@/lib/latex";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";
import { sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

interface Props {
  params: { slug: string; lang: Lang };
  searchParams?: { lesson?: string | string[] };
}

export async function generateStaticParams({ params }: { params: { lang: Lang } }) {
  return getWebThemes().map((theme) => ({ slug: getThemeUrlSlug(theme, params.lang) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const theme = getWebThemeFromUrlSlug(params.slug, params.lang);
  if (!theme) return {};
  const { lang } = params;
  const isFr = lang === "fr";
  const title = getThemeTitle(theme, lang);
  const description = getThemeDescription(theme, lang);
  const label = isFr ? "Leçon" : "Lesson";
  const keywords = theme.lessons
    .flatMap((l) => getThemeTopics(theme.slug, l, lang))
    .slice(0, 15);
  const url = absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang)));
  const languages: Record<string, string> = {};
  for (const l of SUPPORTED_LANGS) {
    languages[l] = absoluteUrl(sectionHref(l, "chapters", getThemeUrlSlug(theme, l)));
  }
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

function themeJsonLd(theme: NonNullable<ReturnType<typeof getWebThemeFromUrlSlug>>, lang: Lang) {
  const isFr = lang === "fr";
  const title = getThemeTitle(theme, lang);
  const description = getThemeDescription(theme, lang);
  const label = isFr ? "Leçon" : "Lesson";
  const url = absoluteUrl(sectionHref(lang, "chapters", getThemeUrlSlug(theme, lang)));
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
