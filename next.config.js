/** @type {import('next').NextConfig} */
const legacyExerciseSlugRedirects = require("./lib/legacyExerciseSlugRedirects.json");

// Public French URL words. English words match the internal folder names 1:1, so
// only French needs a rewrite; keep this in sync with lib/i18n.ts `sectionSlugs`.
const FR_SECTION_SLUGS = {
  chapters: "chapitres",
  exercises: "exercices",
  glossary: "glossaire",
  about: "a-propos",
};

const nextConfig = {
  output: "standalone",
  async redirects() {
    const out = [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      // Pre-existing bare URLs are now served under /fr (the primary content language).
      { source: "/chapters", destination: "/fr/chapitres", permanent: true },
      { source: "/chapters/:slug", destination: "/fr/chapitres/:slug", permanent: true },
      { source: "/exercises", destination: "/fr/exercices", permanent: true },
      { source: "/exercises/:slug", destination: "/fr/exercices/:slug", permanent: true },
      { source: "/quiz", destination: "/fr/quiz", permanent: true },
      { source: "/quiz/:lecon", destination: "/fr/quiz/:lecon", permanent: true },
      { source: "/glossary", destination: "/fr/glossaire", permanent: true },
      { source: "/about", destination: "/fr/a-propos", permanent: true },
    ];
    // Canonicalize the internal English-named /fr/* paths (still reachable since the
    // route folders are literally named in English) to their public French URL.
    for (const [section, frSlug] of Object.entries(FR_SECTION_SLUGS)) {
      out.push({ source: `/fr/${section}`, destination: `/fr/${frSlug}`, permanent: true });
      out.push({ source: `/fr/${section}/:path*`, destination: `/fr/${frSlug}/:path*`, permanent: true });
    }
    for (const [from, to] of Object.entries(legacyExerciseSlugRedirects)) {
      out.push({
        source: `/fr/${FR_SECTION_SLUGS.exercises}/${from}`,
        destination: `/fr/${FR_SECTION_SLUGS.exercises}/${to}`,
        permanent: true,
      });
      out.push({
        source: `/en/exercises/${from}`,
        destination: `/en/exercises/${to}`,
        permanent: true,
      });
    }
    return out;
  },
  async rewrites() {
    // Map the public French section words to the internal (English-named) route folders.
    const out = [];
    for (const [section, frSlug] of Object.entries(FR_SECTION_SLUGS)) {
      out.push({ source: `/fr/${frSlug}`, destination: `/fr/${section}` });
      out.push({ source: `/fr/${frSlug}/:path*`, destination: `/fr/${section}/:path*` });
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
