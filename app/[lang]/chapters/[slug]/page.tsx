import { notFound } from "next/navigation";
import { getWebTheme, getWebThemes } from "@/lib/chapters";
import { ChapterPageClient } from "./ChapterPageClient";
import type { Metadata } from "next";
import { getEnglishTexFilePath, getLessonReferences, getLessonWebContent } from "@/lib/chapterContent.server";
import { processLatex } from "@/lib/latex";
import { absoluteUrl } from "@/lib/siteUrl";
import type { Lang } from "@/lib/i18n";

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
  const title = isFr ? theme.titleFr : theme.titleEn;
  const description = isFr ? theme.descriptionFr : theme.descriptionEn;
  const label = isFr ? "Leçon" : "Lesson";
  const keywords = theme.lessons
    .flatMap((l) => (isFr ? l.topicsFr : l.topicsEn))
    .slice(0, 15);
  const url = absoluteUrl(`/${lang}/chapters/${theme.slug}`);
  return {
    title: `${label} ${theme.number}: ${title}`,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl(`/fr/chapters/${theme.slug}`),
        en: absoluteUrl(`/en/chapters/${theme.slug}`),
      },
    },
    openGraph: {
      type: "article",
      title: `${label} ${theme.number}: ${title}`,
      description,
      url,
    },
  };
}

export default function ChapterPage({ params }: Props) {
  const theme = getWebTheme(params.slug);
  if (!theme) notFound();

  const themeWithDynamicContent = {
    ...theme,
    lessons: theme.lessons.map((lesson) => {
      const resolvedReferences = getLessonReferences(theme.number, lesson.number, lesson.references);
      const frContent = getLessonWebContent(lesson.texFile, -1, resolvedReferences) || lesson.content;
      const enTexFile = getEnglishTexFilePath(lesson.texFile);
      const enContent = getLessonWebContent(enTexFile, -1, resolvedReferences);
      const renderedFr = processLatex(frContent);
      const renderedEn = enContent ? processLatex(enContent) : "";
      return {
        ...lesson,
        content: frContent,
        contentFr: frContent,
        contentEn: enContent ?? "",
        renderedFr,
        renderedEn,
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
    <ChapterPageClient
      theme={themeWithDynamicContent}
      prev={prev}
      next={next}
    />
  );
}
