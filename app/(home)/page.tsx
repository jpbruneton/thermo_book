import type { Metadata } from "next";
import HomePageClient from "@/app/HomePageClient";
import { getSiteUrl } from "@/lib/siteUrl";
import { getTranslations, SUPPORTED_LANGS } from "@/lib/i18n";
import { bookMeta } from "@/lib/bookMetadata";

const SITE_URL = getSiteUrl();
const book = getTranslations("en").book;
const title = book.title.replace(/\n/g, " ");

const languages: Record<string, string> = { "x-default": SITE_URL };
for (const lang of SUPPORTED_LANGS) languages[lang] = `${SITE_URL}/${lang}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description: book.description,
  alternates: { canonical: SITE_URL, languages },
  openGraph: {
    type: "book",
    url: SITE_URL,
    siteName: title,
    title,
    description: book.description,
    authors: [bookMeta.author],
    images: [{ url: "/figs/fr/front.png", width: 800, height: 1100, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: book.description,
    images: ["/figs/fr/front.png"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
