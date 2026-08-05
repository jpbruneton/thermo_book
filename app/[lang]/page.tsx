import type { Metadata } from "next";
import HomePageClient from "@/app/HomePageClient";
import { getSiteUrl } from "@/lib/siteUrl";
import { getTranslations, isLang, SUPPORTED_LANGS } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  const t = getTranslations(lang);
  const title = t.book.title.replace(/\n/g, " ");
  const url = `${SITE_URL}/${lang}`;

  const languages: Record<string, string> = { "x-default": SITE_URL };
  for (const l of SUPPORTED_LANGS) languages[l] = `${SITE_URL}/${l}`;

  return {
    title,
    description: t.book.description,
    alternates: { canonical: url, languages },
    openGraph: { url, title, description: t.book.description },
  };
}

export default function LangHomePage() {
  return <HomePageClient />;
}
