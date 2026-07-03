import type { Metadata } from "next";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import type { Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = isFr ? "À propos" : "About";
  const description = isFr
    ? `${bookMetaDisplayTitle()} — par ${bookMeta.author} (${bookMeta.affiliation}). ${bookMeta.description}`
    : `${bookMetaDisplayTitle()} — by ${bookMeta.author} (${bookMeta.affiliation}). ${bookMeta.description}`;
  const ogDescription = isFr
    ? `${bookMetaDisplayTitle()} par ${bookMeta.author}, ${bookMeta.affiliation}.`
    : `${bookMetaDisplayTitle()} by ${bookMeta.author}, ${bookMeta.affiliation}.`;
  const url = absoluteUrl(`/${lang}/about`);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl("/fr/about"),
        en: absoluteUrl("/en/about"),
      },
    },
    openGraph: {
      title: `${title} | ${bookMeta.title}`,
      description: ogDescription,
      url,
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
