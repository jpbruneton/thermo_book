import type { Metadata } from "next";
import { bookMeta, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { sectionHref, type Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const isFr = lang === "fr";
  const title = isFr ? "À propos" : "About";
  const description = isFr
    ? `${localizedSiteTitle(lang)} — par ${bookMeta.author} (${bookMeta.affiliation}). ${bookMeta.description}`
    : `${localizedSiteTitle(lang)} — by ${bookMeta.author} (${bookMeta.affiliation}). ${bookMeta.description}`;
  const ogDescription = isFr
    ? `${localizedSiteTitle(lang)} par ${bookMeta.author}, ${bookMeta.affiliation}.`
    : `${localizedSiteTitle(lang)} by ${bookMeta.author}, ${bookMeta.affiliation}.`;
  const url = absoluteUrl(sectionHref(lang, "about"));
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: absoluteUrl(sectionHref("fr", "about")),
        en: absoluteUrl(sectionHref("en", "about")),
      },
    },
    openGraph: {
      title: `${title} | ${localizedSiteTitle(lang)}`,
      description: ogDescription,
      url,
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
