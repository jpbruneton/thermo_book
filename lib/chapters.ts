import { getTranslations, type Lang } from "./i18n";
import { chapterTranslations } from "./chapterTranslations";

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
  /**
   * false = hidden from the /chapters listing and homepage, and noindexed,
   * in every language, while the page itself stays reachable and routable.
   * Defaults to true. Used to keep draft content (Parts II/III) off the
   * indexable, browsable site without 404ing direct links.
   */
  listed?: boolean;
}

export const bookMeta = {
  title: "Thermodynamique Élémentaire et Avancée",
  subtitle: "",
  author: "Jean-Philippe Bruneton",
  affiliation: "Université Paris Cité, France",
  year: "2026",
  description:
    "La première partie est un cours de niveau Licence 2 avec de nombreux exercices corrigés, couvrant les principes fondamentaux, l'étude des gaz et des transitions de phase, et les machines thermiques. Les parties suivantes abordent la géométrie différentielle, le démon de Maxwell, l'endoréversibilité, la thermoélectricité et la thermodynamique quantique.",
  keywords: ["thermodynamique", "thermodynamics", "entropie", "premier principe", "second principe", "Maxwell", "Onsager", "endoréversibilité"],
};

/** Title plus optional subtitle, for SEO and Open Graph (no trailing colon if subtitle empty). */
export function bookMetaDisplayTitle(): string {
  const sub = bookMeta.subtitle.trim();
  return sub.length > 0 ? `${bookMeta.title}: ${sub}` : bookMeta.title;
}

/**
 * Localized site title, for use as the " | Site Name" suffix on <title> tags
 * and og:title on /[lang] pages. Falls back to the French bookMeta.title only
 * when no lang is given (non-localized routes like the historical `/`).
 */
export function localizedSiteTitle(lang?: Lang): string {
  if (!lang) return bookMetaDisplayTitle();
  const t = getTranslations(lang);
  const title = t.book.title.replace(/\n/g, " ");
  const sub = t.book.subtitle?.trim();
  return sub && sub.length > 0 ? `${title}: ${sub}` : title;
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
  topicsFr?: string[];
  topicsEn?: string[];
  readingTime?: string;
  content?: string;
  partHeadingFr?: string;
  partHeadingEn?: string;
  listed?: boolean;
}): Theme {
  return {
    slug: params.slug,
    number: params.number,
    display_on_web: true,
    titleFr: params.titleFr,
    titleEn: params.titleEn,
    descriptionFr: params.descriptionFr,
    descriptionEn: params.descriptionEn,
    partHeadingFr: params.partHeadingFr,
    partHeadingEn: params.partHeadingEn,
    listed: params.listed ?? true,
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
        topicsFr: params.topicsFr ?? [],
        topicsEn: params.topicsEn ?? [],
        pdfFile: "",
        pdfAvailable: false,
        readingTime: params.readingTime ?? "",
        content: params.content ?? "<p>Contenu à venir.</p>",
        texFile: `chp${params.number}_fr/lecon1.tex`,
        references: [],
      },
    ],
  };
}

export const themes: Theme[] = [
  makeLecon({
    number: 1,
    slug: "introduction",
    partHeadingFr: "Partie I — Cours élémentaire",
    partHeadingEn: "Part I — Elementary Course",
    titleFr: "Introduction générale",
    titleEn: "General Introduction",
    descriptionFr: "La nature de la thermodynamique.",
    descriptionEn: "The nature of thermodynamics.",
    readingTime: "12 min",
    topicsFr: [
      "Machines thermiques",
      "Conversion chaleur-travail",
      "Second principe",
      "Entropie",
      "Source chaude",
      "Source froide",
      "Rendement de Carnot",
      "Universalité de la thermodynamique",
    ],
    topicsEn: [
      "Heat engines",
      "Heat-to-work conversion",
      "Second law",
      "Entropy",
      "Hot reservoir",
      "Cold reservoir",
      "Carnot efficiency",
      "Universality of thermodynamics",
    ],
  }),
  makeLecon({
    number: 2,
    slug: "historique",
    titleFr: "Historique de la thermodynamique et de la calorimétrie",
    titleEn: "A History of Thermodynamics and Calorimetry",
    descriptionFr: "De la théorie du calorique à l'entropie de Clausius.",
    descriptionEn: "From the caloric theory to Clausius's entropy.",
    readingTime: "11 min",
    topicsFr: [
      "Histoire de la thermodynamique",
      "Théorie du calorique",
      "Joseph Black",
      "Calorimétrie",
      "Chaleur latente",
      "Rumford et Davy",
      "Gaz parfait",
      "Mayer",
      "Joule",
      "Kelvin",
      "Clausius",
      "Entropie",
    ],
    topicsEn: [
      "History of thermodynamics",
      "Caloric theory",
      "Joseph Black",
      "Calorimetry",
      "Latent heat",
      "Rumford and Davy",
      "Ideal gas",
      "Mayer",
      "Joule",
      "Kelvin",
      "Clausius",
      "Entropy",
    ],
  }),
  makeLecon({
    number: 3,
    slug: "notions-fondamentales",
    titleFr: "Notions fondamentales",
    titleEn: "Fundamental Concepts",
    descriptionFr:
      "Équilibre, parois, variables et fonctions d'état, transformations thermodynamique.",
    descriptionEn:
      "Equilibrium, walls, state variables and functions, and thermodynamic transformations.",
    readingTime: "17 min",
    topicsFr: [
      "Système thermodynamique",
      "Parois",
      "Équilibre",
      "Variables d'état",
      "Fonctions d'état",
      "Transformations quasi-statiques",
      "Réservoir",
      "Extensivité",
      "Intensivité",
    ],
    topicsEn: [
      "Thermodynamic system",
      "Walls",
      "Equilibrium",
      "State variables",
      "State functions",
      "Quasi-static transformations",
      "Reservoir",
      "Extensivity",
      "Intensivity",
    ],
  }),
  makeLecon({
    number: 4,
    slug: "premier-principe",
    titleFr: "Le premier principe de la thermodynamique",
    titleEn: "The First Law of Thermodynamics",
    descriptionFr: "Travail, chaleur, énergie interne et premier principe.",
    descriptionEn: "Work, heat, internal energy, and the first law.",
    readingTime: "20 min",
    topicsFr: [
      "Énergie interne",
      "Premier principe",
      "Travail des forces de pression",
      "Transfert thermique",
      "Fonction d'état",
      "Différentielle exacte",
      "Transformation quasi-statique",
      "Transformation adiabatique",
      "Extensivité",
    ],
    topicsEn: [
      "Internal energy",
      "First law",
      "Pressure-volume work",
      "Heat transfer",
      "State function",
      "Exact differential",
      "Quasi-static process",
      "Adiabatic process",
      "Extensivity",
    ],
  }),
  makeLecon({
    number: 5,
    slug: "application-gaz-parfait",
    titleFr: "Application au gaz parfait",
    titleEn: "Application to the Ideal Gas",
    descriptionFr: "Application du premier principe aux transformations du gaz parfait.",
    descriptionEn: "Application of the first law to ideal-gas transformations.",
    readingTime: "20 min",
    topicsFr: [
      "Gaz parfait",
      "Détente de Joule-Gay-Lussac",
      "Loi de Joule",
      "Transformations isothermes",
      "Transformations isochores",
      "Transformations isobares",
      "Transformations adiabatiques",
      "Diagrammes de Clapeyron",
      "Cycles moteurs",
      "Cycles récepteurs",
    ],
    topicsEn: [
      "Ideal gas",
      "Joule-Gay-Lussac expansion",
      "Joule's law",
      "Isothermal processes",
      "Isochoric processes",
      "Isobaric processes",
      "Adiabatic processes",
      "Clapeyron diagrams",
      "Power cycles",
      "Refrigeration cycles",
    ],
  }),
  makeLecon({
    number: 6,
    slug: "second-principe",
    titleFr: "Réversibilité et irréversibilité : le second principe",
    titleEn: "Reversibility and Irreversibility: The Second Law",
    descriptionFr: "Entropie, réversibilité et second principe.",
    descriptionEn: "Entropy, reversibility, and the second law.",
    readingTime: "20 min",
    topicsFr: [
      "Second principe",
      "Entropie",
      "Réversibilité",
      "Irréversibilité",
      "Création d'entropie",
      "Évolution spontanée",
    ],
    topicsEn: [
      "Second law",
      "Entropy",
      "Reversibility",
      "Irreversibility",
      "Entropy production",
      "Spontaneous evolution",
    ],
  }),
  makeLecon({
    number: 7,
    slug: "relations-fondamentales",
    titleFr: "Structure mathématique : les relations fondamentales",
    titleEn: "Mathematical Structure: The Fundamental Relations",
    descriptionFr: "Relations fondamentales et potentiels thermodynamiques.",
    descriptionEn: "Fundamental relations and thermodynamic potentials.",
    readingTime: "25 min",
    topicsFr: [
      "Systèmes ouverts",
      "Relations fondamentales",
      "Représentation énergie",
      "Représentation entropie",
      "Relations de Maxwell",
      "Relation de Gibbs-Duhem",
      "Théorème d'Euler",
      "Troisième principe",
      "Stabilité thermodynamique",
      "Convexité",
    ],
    topicsEn: [
      "Open systems",
      "Fundamental relations",
      "Energy representation",
      "Entropy representation",
      "Maxwell relations",
      "Gibbs-Duhem relation",
      "Euler's theorem",
      "Third law",
      "Thermodynamic stability",
      "Convexity",
    ],
  }),
  makeLecon({
    number: 8,
    slug: "changements-de-variables",
    titleFr: "Structure formelle : Changements de variables",
    titleEn: "Formal Structure: Changes of Variables",
    descriptionFr: "Calcul différentiel, transformée de Legendre et potentiels thermodynamiques.",
    descriptionEn: "Differential calculus, the Legendre transform, and thermodynamic potentials.",
    readingTime: "15 min",
    topicsFr: [
      "Calcul différentiel multivarié",
      "Transformée de Legendre",
      "Potentiels thermodynamiques",
      "Énergie libre de Helmholtz",
      "Enthalpie",
      "Énergie libre de Gibbs",
    ],
    topicsEn: [
      "Multivariate differential calculus",
      "Legendre transform",
      "Thermodynamic potentials",
      "Helmholtz free energy",
      "Enthalpy",
      "Gibbs free energy",
    ],
  }),
  makeLecon({
    number: 9,
    slug: "coefficients",
    titleFr: "Coefficients calorimétriques et thermoélastiques",
    titleEn: "Calorimetric and Thermoelastic Coefficients",
    descriptionFr: "Coefficients calorimétriques, thermoélastiques et équations d'état.",
    descriptionEn: "Calorimetric and thermoelastic coefficients, and equations of state.",
    readingTime: "25 min",
    topicsFr: [
      "Coefficients calorimétriques",
      "Coefficients thermoélastiques",
      "Capacités thermiques",
      "Équation d'état",
      "Phase incompressible",
      "Stabilité thermodynamique",
    ],
    topicsEn: [
      "Calorimetric coefficients",
      "Thermoelastic coefficients",
      "Heat capacities",
      "Equation of state",
      "Incompressible phase",
      "Thermodynamic stability",
    ],
  }),
  makeLecon({
    number: 10,
    slug: "transitions-de-phases",
    titleFr: "Transition de phases",
    titleEn: "Phase Transitions",
    descriptionFr: "Diagrammes des phases, instabilités et gaz de Van der Waals.",
    descriptionEn: "Phase diagrams, instabilities, and the Van der Waals gas.",
    readingTime: "35 min",
    topicsFr: [
      "Transitions de phase",
      "Diagramme des phases",
      "Point critique",
      "Instabilité",
      "Gaz de Van der Waals",
      "Isothermes",
      "Construction de Maxwell",
      "Courbe de saturation",
    ],
    topicsEn: [
      "Phase transitions",
      "Phase diagram",
      "Critical point",
      "Instability",
      "Van der Waals gas",
      "Isotherms",
      "Maxwell construction",
      "Saturation curve",
    ],
  }),
  makeLecon({
    number: 11,
    slug: "machines-thermiques",
    titleFr: "Machines thermiques",
    titleEn: "Heat Engines",
    descriptionFr: "Cycles dithermes, cycle de Carnot, rendements et énoncés du second principe.",
    descriptionEn: "Two-reservoir cycles, the Carnot cycle, efficiencies, and statements of the second law.",
    readingTime: "20 min",
    topicsFr: [
      "Machines thermiques",
      "Machine à vapeur",
      "Cycles dithermes",
      "Inégalité de Clausius",
      "Cycle de Carnot",
      "Rendement",
      "Coefficient de performance (COP)",
      "Diagramme TS",
      "Cycle de Rankine",
    ],
    topicsEn: [
      "Heat engines",
      "Steam engine",
      "Two-reservoir cycles",
      "Clausius inequality",
      "Carnot cycle",
      "Efficiency",
      "Coefficient of performance",
      "TS diagram",
      "Rankine cycle",
    ],
  }),
  makeLecon({
    number: 9,
    slug: "geometrie-differentielle",
    partHeadingFr: "Partie II — Thermodynamique avancée",
    partHeadingEn: "Part II — Advanced Thermodynamics",
    titleFr: "Géométrie différentielle en thermodynamique",
    titleEn: "Differential Geometry in Thermodynamics",
    descriptionFr: "Structures géométriques sous-jacentes à la thermodynamique.",
    descriptionEn: "The geometric structures underlying thermodynamics.",
    topicsFr: ["Géométrie de contact", "Variétés thermodynamiques", "Legendre et géométrie", "Structure symplectique"],
    topicsEn: ["Contact geometry", "Thermodynamic manifolds", "Legendre and geometry", "Symplectic structure"],
    listed: false,
  }),
  makeLecon({
    number: 10,
    slug: "demon-de-maxwell",
    titleFr: "Le démon de Maxwell",
    titleEn: "Maxwell's Demon",
    descriptionFr: "Information, entropie et les limites de la thermodynamique classique.",
    descriptionEn: "Information, entropy, and the limits of classical thermodynamics.",
    topicsFr: ["Démon de Maxwell", "Entropie et information", "Principe de Landauer", "Effacement d'information"],
    topicsEn: ["Maxwell's demon", "Entropy and information", "Landauer's principle", "Information erasure"],
    listed: false,
  }),
  makeLecon({
    number: 11,
    slug: "endoreversibilite",
    titleFr: "Cycles endoréversibles",
    titleEn: "Endoreversible Cycles",
    descriptionFr: "Rendement à puissance maximale et moteurs thermiques réels.",
    descriptionEn: "Efficiency at maximum power and real heat engines.",
    topicsFr: ["Endoréversibilité", "Rendement de Curzon-Ahlborn", "Puissance maximale", "Optimisation thermodynamique"],
    topicsEn: ["Endoreversibility", "Curzon-Ahlborn efficiency", "Maximum power", "Thermodynamic optimization"],
    listed: false,
  }),
  makeLecon({
    number: 12,
    slug: "thermoelectricite",
    titleFr: "Thermoélectricité",
    titleEn: "Thermoelectricity",
    descriptionFr: "Effets thermoélectriques et conversion d'énergie.",
    descriptionEn: "Thermoelectric effects and energy conversion.",
    topicsFr: ["Effet Seebeck", "Effet Peltier", "Effet Thomson", "Figure de mérite"],
    topicsEn: ["Seebeck effect", "Peltier effect", "Thomson effect", "Figure of merit"],
    listed: false,
  }),
  makeLecon({
    number: 13,
    slug: "thermodynamique-hors-equilibre",
    titleFr: "Thermodynamique hors équilibre",
    titleEn: "Non-Equilibrium Thermodynamics",
    descriptionFr: "Phénomènes irréversibles et relations d'Onsager.",
    descriptionEn: "Irreversible phenomena and Onsager's relations.",
    topicsFr: ["Thermodynamique linéaire", "Relations d'Onsager", "Réciprocité", "Production d'entropie", "Phénomènes couplés"],
    topicsEn: ["Linear thermodynamics", "Onsager relations", "Reciprocity", "Entropy production", "Coupled phenomena"],
    listed: false,
  }),
  makeLecon({
    number: 14,
    slug: "climat",
    titleFr: "Climatologie et thermodynamique",
    titleEn: "Climate and Thermodynamics",
    descriptionFr: "Applications thermodynamiques au système climatique terrestre.",
    descriptionEn: "Thermodynamic applications to Earth's climate system.",
    topicsFr: ["Bilan radiatif", "Effet de serre", "Moteur thermique atmosphérique", "Entropie climatique"],
    topicsEn: ["Radiative balance", "Greenhouse effect", "Atmospheric heat engine", "Climate entropy"],
    listed: false,
  }),
  makeLecon({
    number: 15,
    slug: "thermodynamique-quantique",
    partHeadingFr: "Partie III — Thermodynamique quantique",
    partHeadingEn: "Part III — Quantum Thermodynamics",
    titleFr: "Thermodynamique quantique",
    titleEn: "Quantum Thermodynamics",
    descriptionFr: "Travail, chaleur et entropie à l'échelle quantique.",
    listed: false,
    descriptionEn: "Work, heat, and entropy at the quantum scale.",
    topicsFr: ["Moteurs quantiques", "Fluctuations quantiques", "Égalité de Jarzynski", "Thermodynamique de l'information quantique"],
    topicsEn: ["Quantum engines", "Quantum fluctuations", "Jarzynski equality", "Quantum information thermodynamics"],
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

/**
 * Themes shown on /chapters and the homepage contents grid. Unlisted themes
 * (`listed: false`, currently Parts II/III) stay reachable at their own URL —
 * see generateMetadata in chapters/[slug]/page.tsx for the matching noindex —
 * but are left out of every listing, in every language.
 */
export function getListedWebThemes(): Theme[] {
  return getWebThemes().filter((theme) => theme.listed !== false);
}

/**
 * Languages whose public lesson slug is derived from the translated title.
 * Other languages deliberately use the English title so URLs remain readable
 * ASCII instead of being percent-encoded when shared.
 */
const LATIN_SCRIPT_THEME_SLUG_LANGS: ReadonlySet<Lang> = new Set<Lang>([
  "fr", "en", "de", "es", "pt", "it", "pl", "vi",
]);

function slugifyThemeTitle(value: string): string {
  return value
    .replace(/[łŁ]/g, (letter) => (letter === "Ł" ? "L" : "l"))
    .replace(/[đĐ]/g, (letter) => (letter === "Đ" ? "D" : "d"))
    .replace(/[ß]/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Public, language-aware URL segment for a theme. */
export function getThemeUrlSlug(theme: Pick<Theme, "slug" | "titleFr" | "titleEn">, lang: Lang): string {
  // Existing French slugs are already localized and remain stable.
  if (lang === "fr") return theme.slug;
  const title = LATIN_SCRIPT_THEME_SLUG_LANGS.has(lang)
    ? getThemeTitle(theme, lang)
    : theme.titleEn;
  return slugifyThemeTitle(title);
}

/**
 * Resolves a public localized slug. The internal French slug is accepted as a
 * legacy alias so existing links can be redirected to the canonical URL.
 */
export function getWebThemeFromUrlSlug(slug: string, lang: Lang): Theme | undefined {
  const webThemes = getWebThemes();
  return (
    webThemes.find((theme) => getThemeUrlSlug(theme, lang) === slug) ??
    webThemes.find((theme) => theme.slug === slug)
  );
}

export function getTotalLessonsCount(): number {
  return getWebThemes().reduce(
    (count, theme) => count + theme.lessons.length,
    0
  );
}

/**
 * Theme title/description/part-heading for any supported language. fr/en use the
 * theme's own fields directly; every other language reads from chapterTranslations
 * (translated title + description, even for themes whose lesson content isn't
 * translated yet), falling back to English only if that specific theme is somehow
 * missing from the dictionary.
 */
export function getThemeTitle(theme: Pick<Theme, "slug" | "titleFr" | "titleEn">, lang: Lang): string {
  if (lang === "fr") return theme.titleFr;
  if (lang === "en") return theme.titleEn;
  return chapterTranslations[lang]?.[theme.slug]?.title ?? theme.titleEn;
}

export function getThemeDescription(theme: Pick<Theme, "slug" | "descriptionFr" | "descriptionEn">, lang: Lang): string {
  if (lang === "fr") return theme.descriptionFr;
  if (lang === "en") return theme.descriptionEn;
  return chapterTranslations[lang]?.[theme.slug]?.description ?? theme.descriptionEn;
}

export function getThemePartHeading(theme: Theme, lang: Lang): string | undefined {
  if (lang === "fr") return theme.partHeadingFr;
  if (lang === "en") return theme.partHeadingEn;
  return chapterTranslations[lang]?.[theme.slug]?.partHeading ?? theme.partHeadingEn;
}

/** Keyword bubbles for a lesson, translated per theme slug (see getThemeTitle). */
export function getThemeTopics(themeSlug: string, lesson: Lesson, lang: Lang): string[] {
  if (lang === "fr") return lesson.topicsFr;
  if (lang === "en") return lesson.topicsEn;
  return chapterTranslations[lang]?.[themeSlug]?.topics ?? lesson.topicsEn;
}
