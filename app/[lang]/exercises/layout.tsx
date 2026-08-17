import type { Metadata } from "next";
import { localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { hasExercises } from "@/lib/exercisesLibrary.server";
import { getExerciseTranslations } from "@/lib/exerciseTranslations";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const t = getExerciseTranslations(lang);
  const title = t.hubTitle;
  const description = t.hubDescription;
  const url = absoluteUrl(sectionHref(lang, "exercises"));
  const languages: Record<string, string> = {};
  for (const availableLang of SUPPORTED_LANGS) {
    if (hasExercises(availableLang)) {
      languages[availableLang] = absoluteUrl(sectionHref(availableLang, "exercises"));
    }
  }
  if (languages.fr) languages["x-default"] = languages.fr;
  const contentAvailable = hasExercises(lang);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: contentAvailable ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${localizedSiteTitle(lang)}`,
      description,
      url,
    },
  };
}

export default function ExercisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
