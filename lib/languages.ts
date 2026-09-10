export type Lang =
  | "fr"
  | "en"
  | "de"
  | "es"
  | "pt"
  | "it"
  | "pl"
  | "ru"
  | "zh"
  | "ja"
  | "ko"
  | "hi"
  | "vi"
  | "ar"
  | "id"
  | "tr"
  | "bn"
  | "ur"
  | "sw"
  | "fa";

/** Every routable language code — /{lang}/... resolves for all of these. */
export const SUPPORTED_LANGS: readonly Lang[] = [
  "fr", "en", "de", "es", "pt", "it", "pl", "ru", "zh", "ja", "ko", "hi", "vi", "ar", "id", "tr",
  "bn", "ur", "sw", "fa",
];

export function isLang(value: string): value is Lang {
  return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

/** Right-to-left script languages — drives `dir="rtl"` on <html> and mirrored chrome layout. */
const RTL_LANGS: readonly Lang[] = ["ar", "ur", "fa"];

export function isRtlLang(lang: Lang): boolean {
  return (RTL_LANGS as readonly string[]).includes(lang);
}

export const SECTIONS = ["chapters", "exercises", "quiz", "downloads", "about"] as const;
export type Section = (typeof SECTIONS)[number];

/** English section words, reused as-is for every language that has no translated public URL word. */
const IDENTITY_SECTION_SLUGS: Record<Section, string> = {
  chapters: "chapters",
  exercises: "exercises",
  quiz: "quiz",
  downloads: "downloads",
  about: "about",
};

/**
 * Public URL word for each section, per language (e.g. /fr/chapitres vs /en/chapters).
 * The internal route folders (app/[lang]/chapters, .../exercises, etc.) always use the
 * English word; `next.config.js` rewrites each language's public words to those internal
 * paths (keep the two files in sync). Languages with a non-Latin alphabet (ru, zh, ja, ko,
 * hi, ar, bn, ur, fa) deliberately reuse the English word instead of a localized one: URLs in
 * Cyrillic/CJK/Devanagari/Arabic/Bengali script get percent-encoded the moment they're copied or
 * shared (chat, social, email), which reads as broken — the content itself is translated,
 * only the slug stays in ASCII.
 */
export const sectionSlugs: Record<Lang, Record<Section, string>> = {
  en: IDENTITY_SECTION_SLUGS,
  fr: {
    chapters: "chapitres",
    exercises: "exercices",
    quiz: "quiz",
    downloads: "telechargements",
    about: "a-propos",
  },
  de: {
    chapters: "lektionen",
    exercises: "uebungen",
    quiz: "quiz",
    downloads: "downloads",
    about: "ueber-das-buch",
  },
  es: {
    chapters: "lecciones",
    exercises: "ejercicios",
    quiz: "quiz",
    downloads: "descargas",
    about: "sobre-el-libro",
  },
  pt: {
    chapters: "licoes",
    exercises: "exercicios",
    quiz: "quiz",
    downloads: "downloads",
    about: "sobre-o-livro",
  },
  it: {
    chapters: "lezioni",
    exercises: "esercizi",
    quiz: "quiz",
    downloads: "download",
    about: "il-libro",
  },
  pl: {
    chapters: "lekcje",
    exercises: "cwiczenia",
    quiz: "quiz",
    downloads: "pobieranie",
    about: "o-ksiazce",
  },
  ru: IDENTITY_SECTION_SLUGS,
  zh: IDENTITY_SECTION_SLUGS,
  ja: IDENTITY_SECTION_SLUGS,
  ko: IDENTITY_SECTION_SLUGS,
  hi: IDENTITY_SECTION_SLUGS,
  vi: {
    chapters: "bai-hoc",
    exercises: "bai-tap",
    quiz: "quiz",
    downloads: "tai-xuong",
    about: "gioi-thieu",
  },
  ar: IDENTITY_SECTION_SLUGS,
  id: {
    chapters: "pelajaran",
    exercises: "latihan",
    quiz: "kuis",
    downloads: "unduhan",
    about: "tentang-buku",
  },
  tr: {
    chapters: "dersler",
    exercises: "alistirmalar",
    quiz: "quiz",
    downloads: "indirmeler",
    about: "kitap-hakkinda",
  },
  bn: IDENTITY_SECTION_SLUGS,
  ur: IDENTITY_SECTION_SLUGS,
  sw: {
    chapters: "masomo",
    exercises: "mazoezi",
    quiz: "jaribio",
    downloads: "vipakuliwa",
    about: "kuhusu-kitabu",
  },
  fa: IDENTITY_SECTION_SLUGS,
};

/** Builds the public href for a section, e.g. sectionHref("fr", "chapters", "introduction") -> "/fr/chapitres/introduction". */
export function sectionHref(lang: Lang, section: Section, ...rest: string[]): string {
  const base = `/${lang}/${sectionSlugs[lang][section]}`;
  return rest.length > 0 ? `${base}/${rest.join("/")}` : base;
}

/** Reverse lookup: given a lang and a public URL segment, which section does it refer to (if any)? */
export function sectionFromSlug(lang: Lang, slug: string): Section | null {
  const entry = (Object.entries(sectionSlugs[lang]) as [Section, string][]).find(
    ([, value]) => value === slug
  );
  return entry ? entry[0] : null;
}

