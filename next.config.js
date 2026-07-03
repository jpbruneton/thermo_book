/** @type {import('next').NextConfig} */
const legacyExerciseSlugRedirects = require("./lib/legacyExerciseSlugRedirects.json");

const nextConfig = {
  output: "standalone",
  async redirects() {
    const out = [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      // Pre-existing bare URLs are now served under /fr (the primary content language).
      { source: "/chapters", destination: "/fr/chapters", permanent: true },
      { source: "/chapters/:slug", destination: "/fr/chapters/:slug", permanent: true },
      { source: "/exercises", destination: "/fr/exercises", permanent: true },
      { source: "/exercises/:slug", destination: "/fr/exercises/:slug", permanent: true },
      { source: "/quiz", destination: "/fr/quiz", permanent: true },
      { source: "/quiz/:lecon", destination: "/fr/quiz/:lecon", permanent: true },
      { source: "/glossary", destination: "/fr/glossary", permanent: true },
      { source: "/about", destination: "/fr/about", permanent: true },
    ];
    for (const [from, to] of Object.entries(legacyExerciseSlugRedirects)) {
      for (const lang of ["fr", "en"]) {
        out.push({
          source: `/${lang}/chapters/${from}`,
          destination: `/${lang}/chapters/${to}`,
          permanent: true,
        });
        out.push({
          source: `/${lang}/exercises/${from}`,
          destination: `/${lang}/exercises/${to}`,
          permanent: true,
        });
      }
    }
    return out;
  },
  async headers() {
    return [
      {
        source: "/pdfs/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
