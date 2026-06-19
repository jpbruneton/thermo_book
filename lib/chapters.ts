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
  topicsFr?: string[];
  topicsEn?: string[];
  readingTime?: string;
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
    titleFr: "Introduction et notions fondamentales",
    titleEn: "Introduction and Fundamental Concepts",
    descriptionFr: "Histoire, définitions et notions fondamentales de la thermodynamique.",
    descriptionEn: "History, definitions, and the fundamental concepts of thermodynamics.",
    readingTime: "30 min",
    topicsFr: [
      "Histoire de la thermodynamique",
      "Équilibre",
      "Principe zéro",
      "Système thermodynamique",
      "Parois",
      "Variables d'état",
      "Fonctions d'état",
      "Transformations quasi-statiques",
      "Réservoir",
      "Extensivité",
    ],
    topicsEn: [
      "History of thermodynamics",
      "Equilibrium",
      "Zeroth law",
      "Thermodynamic system",
      "Walls",
      "State variables",
      "State functions",
      "Quasi-static transformations",
      "Reservoir",
      "Extensivity",
    ],
  }),
  makeLecon({
    number: 2,
    slug: "premier-principe",
    titleFr: "Conservation de l'énergie : le premier principe",
    titleEn: "Energy Conservation: The First Law",
    descriptionFr: "Travail, chaleur, énergie interne et premier principe.",
    descriptionEn: "Work, heat, internal energy, and the first law.",
    readingTime: "20 min",
    topicsFr: [
      "Énergie interne",
      "Transferts thermiques",
      "Premier principe",
      "Travail",
      "Diagramme de Clapeyron",
      "Cycles moteurs",
      "Cycles récepteurs",
    ],
    topicsEn: [
      "Internal energy",
      "Heat transfer",
      "First law",
      "Work",
      "Clapeyron diagram",
      "Engine cycles",
      "Refrigeration cycles",
    ],
  }),
  makeLecon({
    number: 3,
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
    number: 4,
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
    number: 5,
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
      "Énergie libre",
      "Enthalpie",
      "Enthalpie libre",
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
    number: 6,
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
    number: 7,
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
      "Règle du palier de Maxwell",
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
    number: 8,
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
      "Efficacité",
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
