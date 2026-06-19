export interface LessonReference {
  key: string;
  label: string;
  url: string;
  language: "en" | "fr";
}

export interface Lesson {
  slug: string;
  number: number;
  display_on_web: boolean;
  kind?: "lesson" | "fiche";
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  topicsFr: string[];
  topicsEn: string[];
  pdfFile: string;
  pdfAvailable: boolean;
  readingTime: string;
  content: string;
  texFile: string;
  references: LessonReference[];
}

export interface Theme {
  slug: string;
  number: number;
  display_on_web: boolean;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  lessons: Lesson[];
  /** If set, a section heading is shown above this theme on the chapters index (e.g. Part I / Part II). */
  partHeadingFr?: string;
  partHeadingEn?: string;
}

export const bookMeta = {
  title: "Thermodynamique",
  subtitle: "",
  author: "Jean-Philippe Bruneton",
  affiliation: "Université Paris Cité, France",
  year: "2026",
  description:
    "Un cours de thermodynamique pour le premier cycle universitaire et au-delà : des principes fondamentaux aux développements avancés.",
  keywords: ["thermodynamique", "thermodynamics", "entropie", "premier principe", "second principe"],
};

/** Title plus optional subtitle, for SEO and Open Graph (no trailing colon if subtitle empty). */
export function bookMetaDisplayTitle(): string {
  const sub = bookMeta.subtitle.trim();
  return sub.length > 0 ? `${bookMeta.title}: ${sub}` : bookMeta.title;
}

/**
 * Flat list of Leçons. There is no theme grouping in this book: each entry below
 * is a single Leçon shown directly on /chapters. The internal `Theme` shape is
 * kept (with exactly one `lessons[]` item) so the existing renderer, sitemap and
 * exercise pipeline keep working unchanged. To add a Leçon, copy one block and
 * bump `number` / `slug` / `texFile`.
 */
function makeLecon(params: {
  number: number;
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  content?: string;
}): Theme {
  return {
    slug: params.slug,
    number: params.number,
    display_on_web: true,
    titleFr: params.titleFr,
    titleEn: params.titleEn,
    descriptionFr: params.descriptionFr,
    descriptionEn: params.descriptionEn,
    lessons: [
      {
        slug: `${params.slug}-lecon`,
        number: params.number,
        display_on_web: true,
        titleFr: params.titleFr,
        titleEn: params.titleEn,
        subtitleFr: params.titleFr,
        subtitleEn: params.titleEn,
        descriptionFr: params.descriptionFr,
        descriptionEn: params.descriptionEn,
        topicsFr: [],
        topicsEn: [],
        pdfFile: "",
        pdfAvailable: false,
        readingTime: "",
        content: params.content ?? "<p>Contenu à venir.</p>",
        texFile: `theme${params.number}_fr/lecon1.tex`,
        references: [],
      },
    ],
  };
}

export const themes: Theme[] = [
  makeLecon({
    number: 1,
    slug: "introduction",
    titleFr: "Introduction : hier et aujourd'hui",
    titleEn: "Introduction: Yesterday and Today",
    descriptionFr: "Histoire et enjeux de la thermodynamique, d'hier à aujourd'hui.",
    descriptionEn: "History and stakes of thermodynamics, from yesterday to today.",
  }),
  makeLecon({
    number: 2,
    slug: "formalisme",
    titleFr: "Formalisme : Définitions",
    titleEn: "Formalism: Definitions",
    descriptionFr: "Grandeurs, variables d'état et définitions fondamentales.",
    descriptionEn: "Quantities, state variables, and fundamental definitions.",
  }),
  makeLecon({
    number: 3,
    slug: "principes",
    titleFr: "Principes",
    titleEn: "Principles",
    descriptionFr: "Les principes de la thermodynamique.",
    descriptionEn: "The principles of thermodynamics.",
  }),
];

export function getTheme(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}

export function getWebThemes(): Theme[] {
  return themes
    .filter((theme) => theme.display_on_web)
    .map((theme) => ({
      ...theme,
      lessons: theme.lessons.filter((lesson) => lesson.display_on_web),
    }));
}

export function getWebTheme(slug: string): Theme | undefined {
  return getWebThemes().find((theme) => theme.slug === slug);
}

export function getTotalLessonsCount(): number {
  return getWebThemes().reduce(
    (count, theme) => count + theme.lessons.length,
    0
  );
}
