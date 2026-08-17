import type { Metadata } from "next";
import { localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, type Lang } from "@/lib/i18n";

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

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
