import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "@/app/globals.css";
import { fontVariables } from "@/app/fonts";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Providers } from "@/app/providers";
import { VercelInstrumentation } from "./VercelInstrumentation";
import { bookMeta, bookMetaDisplayTitle, localizedSiteTitle } from "@/lib/chapters";
import { getSiteUrl } from "@/lib/siteUrl";
import { getTranslations, isRtlLang, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

// Injected on every page regardless of route, so the name/description must
// follow the current page's language instead of always being French.
function bookJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: localizedSiteTitle(lang),
    description: getTranslations(lang).book.description,
    author: {
      "@type": "Person",
      name: bookMeta.author,
      affiliation: {
        "@type": "Organization",
        name: bookMeta.affiliation,
      },
    },
    datePublished: bookMeta.year,
    inLanguage: [...SUPPORTED_LANGS],
    url: SITE_URL,
    image: `${SITE_URL}/figs/fr/front.png`,
  };
}

function websiteJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: localizedSiteTitle(lang),
    url: SITE_URL,
    inLanguage: [...SUPPORTED_LANGS],
  };
}

// Set GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION in Vercel env vars once
// each search console property is created; no code change needed after that.
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: bookMetaDisplayTitle(),
    template: `%s | ${bookMeta.title}`,
  },
  description: bookMeta.description,
  keywords: bookMeta.keywords,
  authors: [{ name: bookMeta.author }],
  manifest: "/manifest.json",
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    ...(bingSiteVerification ? { other: { "msvalidate.01": bingSiteVerification } } : {}),
  },
  openGraph: {
    type: "book",
    siteName: bookMetaDisplayTitle(),
    title: bookMetaDisplayTitle(),
    description: bookMeta.description,
    authors: [bookMeta.author],
    url: SITE_URL,
    images: [
      {
        url: "/figs/fr/front.png",
        width: 800,
        height: 1100,
        alt: bookMetaDisplayTitle(),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: bookMetaDisplayTitle(),
    description: bookMeta.description,
    images: ["/figs/fr/front.png"],
  },
};

export function SiteDocument({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Lang;
}) {
  return (
    <html lang={lang} dir={isRtlLang(lang) ? "rtl" : "ltr"} className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd(lang)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(lang)) }}
        />
      </head>
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <VercelInstrumentation />
        </Providers>
      </body>
    </html>
  );
}
