import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";
import { localizedSiteTitle } from "@/lib/chapters";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

// Overrides the root layout's French title template ("%s | Thermodynamique
// Élémentaire et Avancée") so the <title> suffix matches the page's own
// language instead of always appending the French site name.
export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang: Lang = isLang(params.lang) ? params.lang : "fr";
  const siteTitle = localizedSiteTitle(lang);
  return {
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

  return <>{children}</>;
}
