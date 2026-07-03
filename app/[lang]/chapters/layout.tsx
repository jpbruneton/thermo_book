import type { Metadata } from "next";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import type { Lang } from "@/lib/i18n";

// This metadata applies to /[lang]/chapters (the listing page).
// Individual /[lang]/chapters/[slug] pages override it via their own generateMetadata.
export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = isFr ? "Leçons" : "Lessons";
  const description = isFr
    ? `Parcourir toutes les leçons de ${bookMetaDisplayTitle()}.`
    : `Browse all lessons of ${bookMetaDisplayTitle()}.`;
  const url = absoluteUrl(`/${lang}/chapters`);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl("/fr/chapters"),
        en: absoluteUrl("/en/chapters"),
      },
    },
    openGraph: {
      title: `${title} | ${bookMeta.title}`,
      description,
      url,
    },
  };
}

export default function ChaptersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
