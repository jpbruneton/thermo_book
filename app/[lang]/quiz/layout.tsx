import type { Metadata } from "next";
import { getListedWebThemes, getWebThemes, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, type Lang } from "@/lib/i18n";
import { getQuizLessons } from "@/lib/quizzes";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = "Quiz";
  const description = isFr
    ? `Quiz de cours (questions à choix multiples) pour ${localizedSiteTitle(lang)}.`
    : `Course quiz (multiple-choice questions) for ${localizedSiteTitle(lang)}.`;
  const ogDescription = isFr
    ? `Testez vos connaissances de cours sur ${localizedSiteTitle(lang)}.`
    : `Test your knowledge of ${localizedSiteTitle(lang)}.`;
  const url = absoluteUrl(sectionHref(lang, "quiz"));
  const frenchUrl = absoluteUrl(sectionHref("fr", "quiz"));
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: frenchUrl,
        "x-default": frenchUrl,
      },
    },
    robots: isFr ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${localizedSiteTitle(lang)}`,
      description: ogDescription,
      url,
    },
  };
}

// Quiz content is French-only (see comment in [lecon]/page.tsx) and the hub is
// noindexed for every other language, so this list is only ever emitted in fr.
function quizListJsonLd(): object {
  const listedNumbers = new Set(getListedWebThemes().map((theme) => theme.number));
  const lessons = getWebThemes();
  const items = getQuizLessons().filter((lecon) => listedNumbers.has(lecon));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quiz",
    numberOfItems: items.length,
    itemListElement: items.map((lecon, index) => {
      const lesson = lessons.find((theme) => theme.number === lecon);
      const title = lesson ? lesson.titleFr : `Leçon ${lecon}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Quiz",
          name: `Quiz — ${title}`,
          url: absoluteUrl(sectionHref("fr", "quiz", String(lecon))),
          inLanguage: "fr",
        },
      };
    }),
  };
}

export default function QuizLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <>
      {params.lang === "fr" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quizListJsonLd()) }}
        />
      )}
      {children}
    </>
  );
}
