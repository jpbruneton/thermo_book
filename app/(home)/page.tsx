import type { Metadata } from "next";
import HomePageClient from "@/app/HomePageClient";
import { getSiteUrl } from "@/lib/siteUrl";
import { SUPPORTED_LANGS } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

const languages: Record<string, string> = { "x-default": SITE_URL };
for (const lang of SUPPORTED_LANGS) languages[lang] = `${SITE_URL}/${lang}`;

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL, languages },
  openGraph: { url: SITE_URL },
};

export default function HomePage() {
  return <HomePageClient />;
}
