import type { Metadata } from "next";
import { localizedSiteTitle } from "@/lib/chapters";
import { absoluteUrl } from "@/lib/siteUrl";
import { getTranslations, sectionHref, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const t = getTranslations(lang);
  const title = t.nav.glossary;
  const description = t.glossary.subtitle;
  const url = absoluteUrl(sectionHref(lang, "glossary"));
  const languages: Record<string, string> = {};
  for (const availableLang of SUPPORTED_LANGS) {
    languages[availableLang] = absoluteUrl(sectionHref(availableLang, "glossary"));
  }
  languages["x-default"] = absoluteUrl(sectionHref("fr", "glossary"));
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: `${title} | ${localizedSiteTitle(lang)}`,
      description,
      url,
    },
  };
}

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
