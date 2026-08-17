import type { Metadata } from "next";
import { bookMeta, localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { getTranslations, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const t = getTranslations(lang);
  const title = t.nav.about;
  const description = `${localizedSiteTitle(lang)} — ${bookMeta.author} (${bookMeta.affiliation}). ${t.book.description}`;
  const ogDescription = `${localizedSiteTitle(lang)} — ${bookMeta.author}, ${bookMeta.affiliation}.`;
  const url = absoluteUrl(sectionHref(lang, "about"));
  const languages: Record<string, string> = {};
  for (const availableLang of SUPPORTED_LANGS) {
    languages[availableLang] = absoluteUrl(sectionHref(availableLang, "about"));
  }
  languages["x-default"] = absoluteUrl(sectionHref("fr", "about"));
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
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
