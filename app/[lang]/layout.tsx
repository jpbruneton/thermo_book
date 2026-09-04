import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { localizedSiteTitle } from "@/lib/chapters";
import { SiteDocument, siteMetadata } from "@/app/components/SiteDocument";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

// The language is part of the route, so both the document and its metadata
// can be generated at build time without reading request headers.
export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang: Lang = isLang(params.lang) ? params.lang : "fr";
  const siteTitle = localizedSiteTitle(lang);
  return {
    ...siteMetadata,
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
    openGraph: {
      siteName: siteTitle,
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) {
    notFound();
  }

  return <SiteDocument lang={params.lang}>{children}</SiteDocument>;
}
