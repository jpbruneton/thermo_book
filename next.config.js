/** @type {import('next').NextConfig} */
const legacyExerciseSlugRedirects = require("./lib/legacyExerciseSlugRedirects.json");

// Public localized URL words, per language. English words match the internal
// folder names 1:1, so English (and non-Latin-alphabet languages, which keep
// English words for URL-safety) need no entry here. Keep in sync with
// lib/i18n.ts `sectionSlugs`. Sections whose public word is unchanged are
// omitted for that language (no rewrite needed).
const LOCALIZED_SECTION_SLUGS = {
  fr: {
    chapters: "chapitres",
    exercises: "exercices",
    glossary: "glossaire",
    about: "a-propos",
  },
  de: {
    chapters: "lektionen",
    exercises: "uebungen",
    glossary: "glossar",
    about: "ueber-das-buch",
  },
  es: {
    chapters: "lecciones",
    exercises: "ejercicios",
    glossary: "glosario",
    about: "sobre-el-libro",
  },
  pt: {
    chapters: "licoes",
    exercises: "exercicios",
    glossary: "glossario",
    about: "sobre-o-livro",
  },
  it: {
    chapters: "lezioni",
    exercises: "esercizi",
    glossary: "glossario",
    about: "il-libro",
  },
  pl: {
    chapters: "lekcje",
    exercises: "cwiczenia",
    glossary: "slowniczek",
    about: "o-ksiazce",
  },
  vi: {
    chapters: "bai-hoc",
    exercises: "bai-tap",
    glossary: "bang-thuat-ngu",
    about: "gioi-thieu",
  },
  id: {
    chapters: "pelajaran",
    exercises: "latihan",
    quiz: "kuis",
    glossary: "glosarium",
    about: "tentang-buku",
  },
  tr: {
    chapters: "dersler",
    exercises: "alistirmalar",
    glossary: "sozluk",
    about: "kitap-hakkinda",
  },
  sw: {
    chapters: "masomo",
    exercises: "mazoezi",
    quiz: "jaribio",
    glossary: "kamusi",
    about: "kuhusu-kitabu",
  },
};

const nextConfig = {
  output: "standalone",
  experimental: {
    // Keep the exercise bank available for fallback requests (including legacy
    // slugs) as well as the build-time prerenderer of canonical static pages.
    outputFileTracingIncludes: {
      "*": ["./content/tex/exos_*/**/*.tex"],
    },
  },
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
    // Canonicalize the internal English-named /{lang}/* paths (still reachable since
    // the route folders are literally named in English) to their public localized URL.
    for (const [lang, slugs] of Object.entries(LOCALIZED_SECTION_SLUGS)) {
      for (const [section, localSlug] of Object.entries(slugs)) {
        out.push({ source: `/${lang}/${section}`, destination: `/${lang}/${localSlug}`, permanent: true });
        out.push({ source: `/${lang}/${section}/:path*`, destination: `/${lang}/${localSlug}/:path*`, permanent: true });
      }
    }
    for (const [from, to] of Object.entries(legacyExerciseSlugRedirects)) {
      out.push({
        source: `/fr/${LOCALIZED_SECTION_SLUGS.fr.exercises}/${from}`,
        destination: `/fr/${LOCALIZED_SECTION_SLUGS.fr.exercises}/${to}`,
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
    // Map each language's public section words to the internal (English-named) route folders.
    const out = [];
    for (const [lang, slugs] of Object.entries(LOCALIZED_SECTION_SLUGS)) {
      for (const [section, localSlug] of Object.entries(slugs)) {
        out.push({ source: `/${lang}/${localSlug}`, destination: `/${lang}/${section}` });
        out.push({ source: `/${lang}/${localSlug}/:path*`, destination: `/${lang}/${section}/:path*` });
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
