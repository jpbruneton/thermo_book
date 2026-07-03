import type { Metadata } from "next";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, type Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = isFr ? "Exercices" : "Exercises";
  const description = isFr
    ? `Exercices et problèmes d'application pour ${bookMetaDisplayTitle()}.`
    : `Practice problems and exercises for ${bookMetaDisplayTitle()}.`;
  const url = absoluteUrl(sectionHref(lang, "exercises"));
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl(sectionHref("fr", "exercises")),
        en: absoluteUrl(sectionHref("en", "exercises")),
      },
    },
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
