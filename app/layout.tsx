import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import { VercelInstrumentation } from "./components/VercelInstrumentation";
import { bookMeta, bookMetaDisplayTitle } from "@/lib/chapters";
import { getSiteUrl } from "@/lib/siteUrl";
import { isLang } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: bookMetaDisplayTitle(),
  description: bookMeta.description,
  author: {
    "@type": "Person",
    name: bookMeta.author,
    affiliation: {
      "@type": "Organization",
      name: bookMeta.affiliation,
    },
  },
  datePublished: bookMeta.year,
  inLanguage: ["en", "fr"],
  url: SITE_URL,
  image: `${SITE_URL}/figs/front.png`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: bookMetaDisplayTitle(),
  url: SITE_URL,
  inLanguage: ["en", "fr"],
};

function resolveHtmlLang(): "en" | "fr" {
  const siteLang = headers().get("x-site-lang");
  if (siteLang && isLang(siteLang)) {
    return siteLang;
  }
  return "fr";
}

// Set GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION in Vercel env vars once
// each search console property is created; no code change needed after that.
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
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
        url: "/figs/front.png",
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
    images: ["/figs/front.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlLang = resolveHtmlLang();

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
