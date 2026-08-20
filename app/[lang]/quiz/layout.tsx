import type { Metadata } from "next";
import { getListedWebThemes, getThemeTitle, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { getTranslations, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { getQuizTranslations } from "@/lib/quizTranslations";
import { getQuizLessonsForLang } from "@/lib/quizzes";

/** Languages whose quiz hub lists at least one fully translated lesson quiz. */
function langsWithQuiz(): Lang[] {
  const listedNumbers = new Set(getListedWebThemes().map((theme) => theme.number));
  return SUPPORTED_LANGS.filter((lang) =>
    getQuizLessonsForLang(lang).some((lecon) => listedNumbers.has(lecon))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getQuizTranslations(lang);
  const title = getTranslations(lang).nav.quiz;
  const site = localizedSiteTitle(lang);
  const url = absoluteUrl(sectionHref(lang, "quiz"));

  const available = langsWithQuiz();
  const languages: Record<string, string> = {};
  for (const availableLang of available) {
    languages[availableLang] = absoluteUrl(sectionHref(availableLang, "quiz"));
  }
  if (languages.fr) languages["x-default"] = languages.fr;

  return {
    title,
    description: t.hubMetaDescription(site),
    alternates: { canonical: url, languages },
    robots: available.includes(lang) ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${site}`,
      description: t.hubMetaOgDescription(site),
      url,
    },
  };
}

function quizListJsonLd(lang: Lang): object {
  const lessons = getListedWebThemes();
  const listedNumbers = new Set(lessons.map((theme) => theme.number));
  const quizWord = getTranslations(lang).nav.quiz;
  const t = getQuizTranslations(lang);
  const items = getQuizLessonsForLang(lang).filter((lecon) => listedNumbers.has(lecon));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: quizWord,
    numberOfItems: items.length,
    itemListElement: items.map((lecon, index) => {
      const lesson = lessons.find((theme) => theme.number === lecon);
      const title = lesson ? getThemeTitle(lesson, lang) : t.lessonLabel(lecon);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Quiz",
          name: `${quizWord} — ${title}`,
          url: absoluteUrl(sectionHref(lang, "quiz", String(lecon))),
          inLanguage: lang,
        },
      };
    }),
  };
}

export default async function QuizLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const hasQuiz = langsWithQuiz().includes(lang);

  return (
    <>
      {hasQuiz && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quizListJsonLd(lang)) }}
        />
      )}
      {children}
    </>
  );
}
