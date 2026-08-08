import type { Metadata } from "next";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, type Lang } from "@/lib/i18n";
import { hasExercises } from "@/lib/exercisesLibrary.server";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = isFr ? "Exercices" : "Exercises";
  const description = isFr
    ? "Banque de 63 exercices de thermodynamique avec énoncés, indications et solutions, classés par leçon et par notion."
    : `Practice problems and exercises for ${bookMetaDisplayTitle()}.`;
  const url = absoluteUrl(sectionHref(lang, "exercises"));
  const languages: Record<string, string> = {};
  if (hasExercises("fr")) languages.fr = absoluteUrl(sectionHref("fr", "exercises"));
  if (hasExercises("en")) languages.en = absoluteUrl(sectionHref("en", "exercises"));
  if (languages.fr) languages["x-default"] = languages.fr;
  const contentAvailable = (lang === "fr" || lang === "en") && hasExercises(lang);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: contentAvailable ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${title} | ${bookMeta.title}`,
      description,
      url,
    },
  };
}

export default function ExercisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
