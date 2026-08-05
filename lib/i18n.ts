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
  | "ar";

/** Every routable language code — /{lang}/... resolves for all of these. */
export const SUPPORTED_LANGS: readonly Lang[] = [
  "fr", "en", "de", "es", "pt", "it", "pl", "ru", "zh", "ja", "ko", "hi", "vi", "ar",
];

/**
 * Languages with real, section-by-section translated content (chapters, exercises,
 * quiz, glossary, about) — used to scope sitemap generation for those sections so we
 * don't index thin fallback pages under a language code as if they were localized.
 * Languages outside this list still resolve as routes (chrome text translated, page
 * content falls back to English) but aren't advertised per-section in the sitemap.
 */
export const TRANSLATED_SECTION_LANGS: readonly Lang[] = ["fr", "en"];

export function isLang(value: string): value is Lang {
  return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export const SECTIONS = ["chapters", "exercises", "quiz", "glossary", "about"] as const;
export type Section = (typeof SECTIONS)[number];

/** English section words, reused as-is for every language that has no translated public URL word. */
const IDENTITY_SECTION_SLUGS: Record<Section, string> = {
  chapters: "chapters",
  exercises: "exercises",
  quiz: "quiz",
  glossary: "glossary",
  about: "about",
};

/**
 * Public URL word for each section, per language (e.g. /fr/chapitres vs /en/chapters).
 * The internal route folders (app/[lang]/chapters, .../exercises, etc.) always use the
 * English word; `next.config.js` rewrites the French public words to those internal paths.
 * Languages other than fr reuse the English word directly — no rewrite needed since it
 * already matches the internal folder name.
 */
export const sectionSlugs: Record<Lang, Record<Section, string>> = {
  en: IDENTITY_SECTION_SLUGS,
  fr: {
    chapters: "chapitres",
    exercises: "exercices",
    quiz: "quiz",
    glossary: "glossaire",
    about: "a-propos",
  },
  de: IDENTITY_SECTION_SLUGS,
  es: IDENTITY_SECTION_SLUGS,
  pt: IDENTITY_SECTION_SLUGS,
  it: IDENTITY_SECTION_SLUGS,
  pl: IDENTITY_SECTION_SLUGS,
  ru: IDENTITY_SECTION_SLUGS,
  zh: IDENTITY_SECTION_SLUGS,
  ja: IDENTITY_SECTION_SLUGS,
  ko: IDENTITY_SECTION_SLUGS,
  hi: IDENTITY_SECTION_SLUGS,
  vi: IDENTITY_SECTION_SLUGS,
  ar: IDENTITY_SECTION_SLUGS,
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

export type UpdateEntry = {
  date: string;
  title: string;
  body: string;
};

export const translations = {
  en: {
    book: {
      title: "Elementary and Advanced\nThermodynamics",
      subtitle: "",
      description:
        "The first part is an undergraduate course with many worked exercises, covering the vocabulary, formalism, and fundamental principles of thermodynamics, the study of gases and phase transitions, and heat engines and thermal cycles. The following parts explore more advanced topics: differential geometry in thermodynamics, Maxwell's demon, endoreversibility, climate physics, thermoelectricity, near-equilibrium thermodynamics (Onsager relations, etc.), and quantum thermodynamics.",
      edition: "First Edition",
    },
    nav: {
      home: "Home",
      chapters: "Lessons",
      exercises: "Exercises",
      quiz: "Quiz",
      glossary: "Glossary",
      about: "About",
    },
    home: {
      badge: "Free Online Edition",
      readOnline: "Read Online →",
      aboutBook: "About the Book",
      chapterPrefix: "Ch",
      themePrefix: "Lesson",
      stats: {
        chapters: "Lessons",
        edition: "Edition",
        format: "Format",
        formatValue: "Web + PDF",
      },
      contentsLabel: "Contents",
      exploreTitle: "Explore the Lessons",
      readTheme: "Open lesson →",
      readLesson: "Read lesson →",
      readChapter: "Read chapter →",
      fullBookDownload: "Download the full edition (coming soon)",
      features: [
        {
          icon: "∫",
          title: "Full Math Rendering",
          body: "All equations rendered with KaTeX — crisp LaTeX-quality math in your browser.",
        },
        {
          icon: "⬇",
          title: "PDF Downloads",
          body: "Every chapter available as a downloadable PDF for offline study.",
        },
        {
          icon: "◎",
          title: "Free & Open Access",
          body: "Complete text freely available online. No paywalls, no sign-up required.",
        },
      ],
    },
    chapters: {
      label: "LESSONS",
      title: "All Lessons",
      description: "",
    },
    chapter: {
      chapterLabel: "LESSON",
      themeLabel: "LESSON",
      lessonLabel: "LESSON",
      readTime: (t: string) => `${t} read`,
      downloadPdf: "↓ Download PDF",
      breadcrumbHome: "Home",
      breadcrumbChapters: "Lessons",
      breadcrumbThemes: "Lessons",
      prev: "← Previous",
      next: "Next →",
      noteTitle: "Note:",
      noteBody:
        "This is a preview excerpt. Download the full PDF for the complete chapter, exercises, and solutions.",
      tabOnline: "Read Online",
      tabReferences: "References",
      tabPdf: "PDF Viewer",
      tocTitle: "Table of Contents",
      showToc: "Show TOC",
      hideToc: "Hide TOC",
      refsEmpty: "No references added yet for this lesson.",
      refsEnglishTitle: "English references",
      refsFrenchTitle: "French references",
      refsSectionEmpty: "No link added in this section yet.",
      contentUnavailable:
        "English lesson content is not available yet for this lesson.",
      downloadBtn: "↓ Download",
      pdfFallback: "If the PDF doesn't display,",
      pdfFallbackLink: "click here to download it",
      noLessonTitle: "No lesson available",
      noLessonBody:
        "This lesson is listed in the structure, but its content has not been published yet.",
    },
    about: {
      label: "ABOUT THE BOOK",
      aboutBookTitle: "About This Book",
      bookDetails: "Book Details",
      detailLabels: {
        author: "Author",
        affiliation: "Affiliation",
        edition: "Edition",
        year: "Year",
      },
      authorTitle: "About the Author",
      authorBioSuffix: "is a physicist at ",
      authorBioRest:
        "His research interests include the laws of gravitation, quantum mechanics and its foundations, and symbolic regression as a machine learning task. This book grew from lecture notes developed over many years of teaching at graduate and advanced undergraduate level.",
      authorLinksHeading: "Profiles",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "About the Project",
      aboutProjectLead:
        "This site and the book are under development. Lessons and exercises will be added gradually.",
      aboutProjectOutlineLabel: "Planned content:",
      aboutProjectOutlineBody:
        "A progressive course in thermodynamics, from the founding principles to more advanced developments.",
      aboutBookBody2:
        "The text develops thermodynamics from first principles. Proofs are given in full whenever they clarify the physics, and many worked examples complement the theoretical exposition.",
      translationWarning:
        "Warning: this book is primarily written in French; the English version is automatically translated using Claude Sonnet 4.6.",
      sameAuthorTitle: "By the Same Author",
      sameAuthorBody:
        "Quantum Mechanics — A Modern Introduction, a companion course on quantum mechanics.",
      sameAuthorLink: "Read it at quantumlectures.org",
    },
    updates: {
      label: "UPDATES",
      title: "Project updates",
      description: "",
      latestTitle: "Latest posts",
      timelineLabel: "Timeline",
      entries: [
        {
          date: "2026-04-27",
          title: "Exercise pages architecture finalized",
          body:
            "The /exercises hub is in place: library TeX with metadata and search, grouping by book theme, clickable cards that deep-link to each exercise on the theme page, and PDF downloads (with or without solutions — English and French) wired from public/pdfs. The build script can batch all themes (--all) and strips solutions plus hints/indications for the statements-only PDFs.",
        },
        {
          date: "2026-03-31",
          title: "Domain acquisition and theme 2",
          body:
            "Acquisition of the production domain; theme 2 lessons and exercises are being rolled out (English page translation in progress).",
        },
      ] as UpdateEntry[],
      comingSoon: "",
    },
    footer: {
      navigation: "Navigation",
      home: "Home",
      allChapters: "All Lessons",
      exercises: "Exercises",
      aboutBook: "About the Book",
      author: "Author",
      copyright: (year: string, author: string) =>
        `© ${year} ${author}. All rights reserved.`,
    },
  },
  fr: {
    book: {
      title: "Thermodynamique\nÉlémentaire et Avancée",
      subtitle: "",
      description:
        "La première partie est un cours de niveau Licence 2, accompagné de nombreux exercices corrigés, couvrant le vocabulaire et le formalisme thermodynamique, les principes fondamentaux, l'étude des gaz et des transitions de phase, ainsi que les machines et cycles thermiques. Les parties suivantes explorent des thèmes plus avancés : géométrie différentielle en thermodynamique, démon de Maxwell, endoréversibilité, climatologie, thermoélectricité, thermodynamique hors équilibre (relations d'Onsager, etc.) et thermodynamique quantique.",
      edition: "Première Édition",
    },
    nav: {
      home: "Accueil",
      chapters: "Leçons",
      exercises: "Exercices",
      quiz: "Quiz",
      glossary: "Glossaire",
      about: "À propos",
    },
    home: {
      badge: "Édition gratuite en ligne",
      readOnline: "Lire en ligne →",
      aboutBook: "À propos du livre",
      chapterPrefix: "Ch",
      themePrefix: "Leçon",
      stats: {
        chapters: "Leçons",
        edition: "Édition",
        format: "Format",
        formatValue: "Web + PDF",
      },
      contentsLabel: "Sommaire",
      exploreTitle: "Explorer les leçons",
      readTheme: "Ouvrir la leçon →",
      readLesson: "Lire la leçon →",
      readChapter: "Lire le chapitre →",
      fullBookDownload: "Télécharger l'édition complète (bientôt)",
      features: [
        {
          icon: "∫",
          title: "Rendu mathématique complet",
          body: "Toutes les équations sont rendues avec KaTeX — des maths de qualité LaTeX dans votre navigateur.",
        },
        {
          icon: "⬇",
          title: "Téléchargements PDF",
          body: "Chaque chapitre est disponible en téléchargement PDF pour une étude hors ligne.",
        },
        {
          icon: "◎",
          title: "Accès libre et gratuit",
          body: "Texte intégral disponible gratuitement en ligne. Sans abonnement, sans inscription.",
        },
      ],
    },
    chapters: {
      label: "LEÇONS",
      title: "Toutes les leçons",
      description: "",
    },
    chapter: {
      chapterLabel: "LEÇON",
      themeLabel: "LEÇON",
      lessonLabel: "LEÇON",
      readTime: (t: string) => `${t} de lecture`,
      downloadPdf: "↓ Télécharger le PDF",
      breadcrumbHome: "Accueil",
      breadcrumbChapters: "Leçons",
      breadcrumbThemes: "Leçons",
      prev: "← Précédent",
      next: "Suivant →",
      noteTitle: "Note :",
      noteBody:
        "Ceci est un extrait de prévisualisation. Téléchargez le PDF complet pour le chapitre entier, les exercices et les solutions.",
      tabOnline: "Lire en ligne",
      tabReferences: "Références",
      tabPdf: "Visionneur PDF",
      tocTitle: "Table des matières",
      showToc: "Afficher la table des matières",
      hideToc: "Masquer la table des matières",
      refsEmpty: "Aucune référence ajoutée pour cette leçon pour le moment.",
      refsEnglishTitle: "Références anglaises",
      refsFrenchTitle: "Références françaises",
      refsSectionEmpty: "Aucun lien ajouté dans cette section pour le moment.",
      contentUnavailable:
        "Le contenu de cette leçon n'est pas encore disponible dans cette langue.",
      downloadBtn: "↓ Télécharger",
      pdfFallback: "Si le PDF ne s'affiche pas,",
      pdfFallbackLink: "cliquez ici pour le télécharger",
      noLessonTitle: "Aucune leçon disponible",
      noLessonBody:
        "Cette leçon est bien présente dans la structure, mais son contenu n'est pas encore publié.",
    },
    about: {
      label: "À PROPOS DU LIVRE",
      aboutBookTitle: "À propos de ce livre",
      bookDetails: "Détails du livre",
      detailLabels: {
        author: "Auteur",
        affiliation: "Établissement",
        edition: "Édition",
        year: "Année",
      },
      authorTitle: "À propos de l'auteur",
      authorBioSuffix: "est physicien à l'",
      authorBioRest:
        "Ses intérêts de recherche couvrent les lois de la gravitation, la mécanique quantique et ses fondements, ainsi que la régression symbolique comme tâche d'apprentissage automatique. Ce livre est issu de notes de cours développées au fil de nombreuses années d'enseignement aux cycles supérieurs.",
      authorLinksHeading: "Liens",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "À propos du projet",
      aboutProjectLead:
        "Ce site et cet ouvrage sont en cours de développement. Les leçons et les exercices seront publiés progressivement.",
      aboutProjectOutlineLabel: "Contenu prévu :",
      aboutProjectOutlineBody:
        "Un cours progressif de thermodynamique, des principes fondateurs jusqu'aux développements plus avancés.",
      aboutBookBody2:
        "Le texte développe la thermodynamique à partir des premiers principes. Les preuves sont données en entier lorsqu'elles éclairent la physique, et de nombreux exemples travaillés complètent l'exposition théorique.",
      translationWarning:
        "Note : ce livre est principalement rédigé en français ; la version anglaise est traduite automatiquement avec Claude Sonnet 4.6.",
      sameAuthorTitle: "Du même auteur",
      sameAuthorBody:
        "Mécanique Quantique — Une Introduction Moderne, un cours compagnon sur la mécanique quantique.",
      sameAuthorLink: "À lire sur quantumlectures.org",
    },
    updates: {
      label: "ACTUALITÉS",
      title: "Actualités du projet",
      description: "",
      latestTitle: "Derniers articles",
      timelineLabel: "Fil chronologique",
      entries: [
        {
          date: "2026-04-27",
          title: "Architecture des pages exercices finalisée",
          body:
            "La page /exercices est en place : bibliothèque TeX avec métadonnées et recherche, regroupement par thème du livre, cartes cliquables avec lien direct vers chaque exercice sur la page du thème, et téléchargements PDF (avec ou sans corrigés — français et anglais) branchés sur public/pdfs. Le script de build peut traiter tous les thèmes (--all) et retire corrigés, indices et indications pour les PDF « énoncés seuls ».",
        },
        {
          date: "2026-03-31",
          title: "Acquisition du domaine et thème 2",
          body:
            "Acquisition du nom de domaine de production ; déploiement des leçons du thème 2 et de ses exercices en cours (+ traduction sur la page anglaise).",
        },
      ] as UpdateEntry[],
      comingSoon: "",
    },
    footer: {
      navigation: "Navigation",
      home: "Accueil",
      allChapters: "Toutes les leçons",
      exercises: "Exercices",
      aboutBook: "À propos du livre",
      author: "Auteur",
      copyright: (year: string, author: string) =>
        `© ${year} ${author}. Tous droits réservés.`,
    },
  },
};

export type Translations = typeof translations.en;

/** Deep-partial of T: functions and arrays stay whole (no element-wise partial), plain objects recurse. */
type DeepPartial<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly unknown[]
    ? T
    : T extends object
      ? { [K in keyof T]?: DeepPartial<T[K]> }
      : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (!override || !isPlainObject(base) || !isPlainObject(override)) return base;
  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override)) {
    const overrideVal = (override as Record<string, unknown>)[key];
    const baseVal = result[key];
    result[key] =
      isPlainObject(overrideVal) && isPlainObject(baseVal)
        ? deepMerge(baseVal, overrideVal as DeepPartial<unknown>)
        : overrideVal;
  }
  return result as T;
}

/**
 * Site chrome and homepage strings for languages beyond fr/en. Deliberately partial —
 * only `nav`, `book`, `home`, and `footer` are translated so far (the homepage and the
 * chrome that wraps every page). Sections not covered here (`chapters`, `chapter`,
 * `about`, `updates`) fall back to English via `getTranslations`'s deep merge.
 */
const partialTranslations: Record<Exclude<Lang, "fr" | "en">, DeepPartial<Translations>> = {
  de: {
    book: {
      title: "Elementare und fortgeschrittene\nThermodynamik",
      subtitle: "",
      description:
        "Der erste Teil ist ein Grundkurs mit zahlreichen durchgerechneten Übungen, der das Vokabular, den Formalismus und die grundlegenden Prinzipien der Thermodynamik, die Lehre von Gasen und Phasenübergängen sowie Wärmekraftmaschinen und thermodynamische Kreisprozesse behandelt. Die folgenden Teile behandeln fortgeschrittenere Themen: Differentialgeometrie in der Thermodynamik, den Maxwellschen Dämon, Endoreversibilität, Klimaphysik, Thermoelektrizität, Thermodynamik nahe dem Gleichgewicht (Onsager-Beziehungen usw.) und Quantenthermodynamik.",
      edition: "Erste Auflage",
    },
    nav: {
      home: "Startseite",
      chapters: "Lektionen",
      exercises: "Übungen",
      quiz: "Quiz",
      glossary: "Glossar",
      about: "Über das Buch",
    },
    home: {
      badge: "Kostenlose Online-Ausgabe",
      readOnline: "Online lesen →",
      aboutBook: "Über das Buch",
      chapterPrefix: "Kap.",
      themePrefix: "Lektion",
      stats: { chapters: "Lektionen", edition: "Ausgabe", format: "Format", formatValue: "Web + PDF" },
      contentsLabel: "Inhalt",
      exploreTitle: "Die Lektionen entdecken",
      readTheme: "Lektion öffnen →",
      readLesson: "Lektion lesen →",
      readChapter: "Kapitel lesen →",
      fullBookDownload: "Vollständige Ausgabe herunterladen (demnächst)",
      features: [
        {
          icon: "∫",
          title: "Vollständiger mathematischer Satz",
          body: "Alle Gleichungen werden mit KaTeX gerendert — gestochen scharfe Mathematik in LaTeX-Qualität direkt im Browser.",
        },
        {
          icon: "⬇",
          title: "PDF-Downloads",
          body: "Jedes Kapitel steht als herunterladbares PDF für das Offline-Studium zur Verfügung.",
        },
        {
          icon: "◎",
          title: "Frei & kostenlos zugänglich",
          body: "Der vollständige Text ist kostenlos online verfügbar. Keine Bezahlschranken, keine Registrierung nötig.",
        },
      ],
    },
    footer: {
      navigation: "Navigation",
      home: "Startseite",
      allChapters: "Alle Lektionen",
      exercises: "Übungen",
      aboutBook: "Über das Buch",
      author: "Autor",
      copyright: (year: string, author: string) => `© ${year} ${author}. Alle Rechte vorbehalten.`,
    },
  },
  es: {
    book: {
      title: "Termodinámica\nElemental y Avanzada",
      subtitle: "",
      description:
        "La primera parte es un curso de nivel universitario con numerosos ejercicios resueltos, que abarca el vocabulario, el formalismo y los principios fundamentales de la termodinámica, el estudio de los gases y las transiciones de fase, y las máquinas y ciclos térmicos. Las partes siguientes exploran temas más avanzados: geometría diferencial en termodinámica, el demonio de Maxwell, la endorreversibilidad, la física del clima, la termoelectricidad, la termodinámica cercana al equilibrio (relaciones de Onsager, etc.) y la termodinámica cuántica.",
      edition: "Primera edición",
    },
    nav: {
      home: "Inicio",
      chapters: "Lecciones",
      exercises: "Ejercicios",
      quiz: "Quiz",
      glossary: "Glosario",
      about: "Acerca del libro",
    },
    home: {
      badge: "Edición gratuita en línea",
      readOnline: "Leer en línea →",
      aboutBook: "Acerca del libro",
      chapterPrefix: "Cap.",
      themePrefix: "Lección",
      stats: { chapters: "Lecciones", edition: "Edición", format: "Formato", formatValue: "Web + PDF" },
      contentsLabel: "Contenido",
      exploreTitle: "Explorar las lecciones",
      readTheme: "Abrir lección →",
      readLesson: "Leer lección →",
      readChapter: "Leer capítulo →",
      fullBookDownload: "Descargar la edición completa (próximamente)",
      features: [
        {
          icon: "∫",
          title: "Renderizado matemático completo",
          body: "Todas las ecuaciones se renderizan con KaTeX: matemáticas nítidas de calidad LaTeX directamente en tu navegador.",
        },
        {
          icon: "⬇",
          title: "Descargas en PDF",
          body: "Cada capítulo está disponible como PDF descargable para estudiar sin conexión.",
        },
        {
          icon: "◎",
          title: "Acceso libre y gratuito",
          body: "Texto completo disponible gratis en línea. Sin muros de pago, sin necesidad de registrarse.",
        },
      ],
    },
    footer: {
      navigation: "Navegación",
      home: "Inicio",
      allChapters: "Todas las lecciones",
      exercises: "Ejercicios",
      aboutBook: "Acerca del libro",
      author: "Autor",
      copyright: (year: string, author: string) => `© ${year} ${author}. Todos los derechos reservados.`,
    },
  },
  pt: {
    book: {
      title: "Termodinâmica\nElementar e Avançada",
      subtitle: "",
      description:
        "A primeira parte é um curso de graduação com numerosos exercícios resolvidos, cobrindo o vocabulário, o formalismo e os princípios fundamentais da termodinâmica, o estudo dos gases e das transições de fase, e as máquinas e ciclos térmicos. As partes seguintes exploram temas mais avançados: geometria diferencial em termodinâmica, o demônio de Maxwell, a endorreversibilidade, a física do clima, a termoeletricidade, a termodinâmica próxima do equilíbrio (relações de Onsager, etc.) e a termodinâmica quântica.",
      edition: "Primeira edição",
    },
    nav: {
      home: "Início",
      chapters: "Lições",
      exercises: "Exercícios",
      quiz: "Quiz",
      glossary: "Glossário",
      about: "Sobre o livro",
    },
    home: {
      badge: "Edição gratuita on-line",
      readOnline: "Ler on-line →",
      aboutBook: "Sobre o livro",
      chapterPrefix: "Cap.",
      themePrefix: "Lição",
      stats: { chapters: "Lições", edition: "Edição", format: "Formato", formatValue: "Web + PDF" },
      contentsLabel: "Sumário",
      exploreTitle: "Explorar as lições",
      readTheme: "Abrir lição →",
      readLesson: "Ler lição →",
      readChapter: "Ler capítulo →",
      fullBookDownload: "Baixar a edição completa (em breve)",
      features: [
        {
          icon: "∫",
          title: "Renderização matemática completa",
          body: "Todas as equações são renderizadas com KaTeX — matemática nítida com qualidade LaTeX diretamente no navegador.",
        },
        {
          icon: "⬇",
          title: "Downloads em PDF",
          body: "Cada capítulo está disponível em PDF para download e estudo offline.",
        },
        {
          icon: "◎",
          title: "Acesso livre e gratuito",
          body: "Texto completo disponível gratuitamente on-line. Sem barreiras de pagamento, sem necessidade de cadastro.",
        },
      ],
    },
    footer: {
      navigation: "Navegação",
      home: "Início",
      allChapters: "Todas as lições",
      exercises: "Exercícios",
      aboutBook: "Sobre o livro",
      author: "Autor",
      copyright: (year: string, author: string) => `© ${year} ${author}. Todos os direitos reservados.`,
    },
  },
  it: {
    book: {
      title: "Termodinamica\nElementare e Avanzata",
      subtitle: "",
      description:
        "La prima parte è un corso universitario con numerosi esercizi svolti, che copre il vocabolario, il formalismo e i principi fondamentali della termodinamica, lo studio dei gas e delle transizioni di fase, e le macchine e i cicli termici. Le parti successive esplorano argomenti più avanzati: geometria differenziale in termodinamica, il demone di Maxwell, l'endoreversibilità, la fisica del clima, la termoelettricità, la termodinamica vicino all'equilibrio (relazioni di Onsager, ecc.) e la termodinamica quantistica.",
      edition: "Prima edizione",
    },
    nav: {
      home: "Home",
      chapters: "Lezioni",
      exercises: "Esercizi",
      quiz: "Quiz",
      glossary: "Glossario",
      about: "Il libro",
    },
    home: {
      badge: "Edizione online gratuita",
      readOnline: "Leggi online →",
      aboutBook: "Il libro",
      chapterPrefix: "Cap.",
      themePrefix: "Lezione",
      stats: { chapters: "Lezioni", edition: "Edizione", format: "Formato", formatValue: "Web + PDF" },
      contentsLabel: "Indice",
      exploreTitle: "Esplora le lezioni",
      readTheme: "Apri lezione →",
      readLesson: "Leggi lezione →",
      readChapter: "Leggi capitolo →",
      fullBookDownload: "Scarica l'edizione completa (a breve)",
      features: [
        {
          icon: "∫",
          title: "Rendering matematico completo",
          body: "Tutte le equazioni sono rese con KaTeX — matematica nitida di qualità LaTeX direttamente nel browser.",
        },
        {
          icon: "⬇",
          title: "Download in PDF",
          body: "Ogni capitolo è disponibile in PDF scaricabile per lo studio offline.",
        },
        {
          icon: "◎",
          title: "Accesso libero e gratuito",
          body: "Testo completo disponibile gratuitamente online. Nessun paywall, nessuna registrazione richiesta.",
        },
      ],
    },
    footer: {
      navigation: "Navigazione",
      home: "Home",
      allChapters: "Tutte le lezioni",
      exercises: "Esercizi",
      aboutBook: "Il libro",
      author: "Autore",
      copyright: (year: string, author: string) => `© ${year} ${author}. Tutti i diritti riservati.`,
    },
  },
  pl: {
    book: {
      title: "Termodynamika\nElementarna i Zaawansowana",
      subtitle: "",
      description:
        "Pierwsza część to kurs licencjacki z licznymi rozwiązanymi zadaniami, obejmujący słownictwo, formalizm i podstawowe zasady termodynamiki, naukę o gazach i przejściach fazowych oraz silniki cieplne i cykle termodynamiczne. Kolejne części omawiają bardziej zaawansowane zagadnienia: geometrię różniczkową w termodynamice, demona Maxwella, endorewersyjność, fizykę klimatu, termoelektryczność, termodynamikę bliską równowagi (relacje Onsagera itd.) oraz termodynamikę kwantową.",
      edition: "Wydanie pierwsze",
    },
    nav: {
      home: "Strona główna",
      chapters: "Lekcje",
      exercises: "Ćwiczenia",
      quiz: "Quiz",
      glossary: "Słowniczek",
      about: "O książce",
    },
    home: {
      badge: "Bezpłatne wydanie online",
      readOnline: "Czytaj online →",
      aboutBook: "O książce",
      chapterPrefix: "Rozdz.",
      themePrefix: "Lekcja",
      stats: { chapters: "Lekcje", edition: "Wydanie", format: "Format", formatValue: "Web + PDF" },
      contentsLabel: "Spis treści",
      exploreTitle: "Poznaj lekcje",
      readTheme: "Otwórz lekcję →",
      readLesson: "Czytaj lekcję →",
      readChapter: "Czytaj rozdział →",
      fullBookDownload: "Pobierz pełne wydanie (wkrótce)",
      features: [
        {
          icon: "∫",
          title: "Pełne renderowanie matematyki",
          body: "Wszystkie równania renderowane za pomocą KaTeX — precyzyjna matematyka jakości LaTeX bezpośrednio w przeglądarce.",
        },
        {
          icon: "⬇",
          title: "Pliki PDF do pobrania",
          body: "Każdy rozdział jest dostępny jako plik PDF do pobrania i nauki offline.",
        },
        {
          icon: "◎",
          title: "Wolny i darmowy dostęp",
          body: "Pełny tekst dostępny bezpłatnie online. Bez płatnych barier, bez rejestracji.",
        },
      ],
    },
    footer: {
      navigation: "Nawigacja",
      home: "Strona główna",
      allChapters: "Wszystkie lekcje",
      exercises: "Ćwiczenia",
      aboutBook: "O książce",
      author: "Autor",
      copyright: (year: string, author: string) => `© ${year} ${author}. Wszelkie prawa zastrzeżone.`,
    },
  },
  ru: {
    book: {
      title: "Термодинамика\nЭлементарная и продвинутая",
      subtitle: "",
      description:
        "Первая часть представляет собой университетский курс с многочисленными разобранными упражнениями, охватывающий терминологию, формализм и фундаментальные принципы термодинамики, изучение газов и фазовых переходов, а также тепловые машины и термодинамические циклы. Последующие части рассматривают более сложные темы: дифференциальную геометрию в термодинамике, демона Максвелла, эндореверсивность, физику климата, термоэлектричество, термодинамику вблизи равновесия (соотношения Онзагера и др.) и квантовую термодинамику.",
      edition: "Первое издание",
    },
    nav: {
      home: "Главная",
      chapters: "Уроки",
      exercises: "Упражнения",
      quiz: "Тест",
      glossary: "Глоссарий",
      about: "О книге",
    },
    home: {
      badge: "Бесплатное онлайн-издание",
      readOnline: "Читать онлайн →",
      aboutBook: "О книге",
      chapterPrefix: "Гл.",
      themePrefix: "Урок",
      stats: { chapters: "Уроки", edition: "Издание", format: "Формат", formatValue: "Web + PDF" },
      contentsLabel: "Содержание",
      exploreTitle: "Изучить уроки",
      readTheme: "Открыть урок →",
      readLesson: "Читать урок →",
      readChapter: "Читать главу →",
      fullBookDownload: "Скачать полное издание (скоро)",
      features: [
        {
          icon: "∫",
          title: "Полный рендеринг математики",
          body: "Все уравнения отображаются с помощью KaTeX — чёткая математика качества LaTeX прямо в браузере.",
        },
        {
          icon: "⬇",
          title: "Загрузка PDF",
          body: "Каждая глава доступна в виде PDF-файла для изучения без подключения к интернету.",
        },
        {
          icon: "◎",
          title: "Свободный и бесплатный доступ",
          body: "Полный текст доступен бесплатно онлайн. Без платного доступа, без регистрации.",
        },
      ],
    },
    footer: {
      navigation: "Навигация",
      home: "Главная",
      allChapters: "Все уроки",
      exercises: "Упражнения",
      aboutBook: "О книге",
      author: "Автор",
      copyright: (year: string, author: string) => `© ${year} ${author}. Все права защищены.`,
    },
  },
  zh: {
    book: {
      title: "基础与进阶\n热力学",
      subtitle: "",
      description:
        "第一部分是本科课程，包含大量已解答的习题，涵盖热力学的术语、形式体系与基本原理，气体与相变的研究，以及热机与热力循环。后续部分探讨更进阶的主题：热力学中的微分几何、麦克斯韦妖、内可逆性、气候物理学、热电效应、近平衡态热力学（昂萨格关系等）以及量子热力学。",
      edition: "第一版",
    },
    nav: {
      home: "首页",
      chapters: "课程",
      exercises: "练习",
      quiz: "测验",
      glossary: "词汇表",
      about: "关于本书",
    },
    home: {
      badge: "免费在线版",
      readOnline: "在线阅读 →",
      aboutBook: "关于本书",
      chapterPrefix: "第",
      themePrefix: "课",
      stats: { chapters: "课程", edition: "版本", format: "格式", formatValue: "网页 + PDF" },
      contentsLabel: "目录",
      exploreTitle: "浏览课程",
      readTheme: "打开课程 →",
      readLesson: "阅读课程 →",
      readChapter: "阅读章节 →",
      fullBookDownload: "下载完整版（即将推出）",
      features: [
        {
          icon: "∫",
          title: "完整数学公式渲染",
          body: "所有公式均使用 KaTeX 渲染 —— 在浏览器中呈现清晰、LaTeX 品质的数学公式。",
        },
        {
          icon: "⬇",
          title: "PDF 下载",
          body: "每一章都提供可下载的 PDF，方便离线学习。",
        },
        {
          icon: "◎",
          title: "免费开放获取",
          body: "完整文本可在线免费获取，无需付费墙，无需注册。",
        },
      ],
    },
    footer: {
      navigation: "导航",
      home: "首页",
      allChapters: "所有课程",
      exercises: "练习",
      aboutBook: "关于本书",
      author: "作者",
      copyright: (year: string, author: string) => `© ${year} ${author}。保留所有权利。`,
    },
  },
  ja: {
    book: {
      title: "初等および上級\n熱力学",
      subtitle: "",
      description:
        "第一部は、多数の解答付き演習を含む学部課程であり、熱力学の用語・形式・基本原理、気体と相転移の研究、熱機関と熱サイクルを扱います。続く各部では、熱力学における微分幾何学、マクスウェルの悪魔、内的可逆性、気候物理学、熱電気、近平衡熱力学（オンサーガー関係など）、量子熱力学といった、より高度なテーマを扱います。",
      edition: "第1版",
    },
    nav: {
      home: "ホーム",
      chapters: "レッスン",
      exercises: "演習",
      quiz: "クイズ",
      glossary: "用語集",
      about: "本書について",
    },
    home: {
      badge: "無料オンライン版",
      readOnline: "オンラインで読む →",
      aboutBook: "本書について",
      chapterPrefix: "第",
      themePrefix: "レッスン",
      stats: { chapters: "レッスン", edition: "版", format: "形式", formatValue: "Web + PDF" },
      contentsLabel: "目次",
      exploreTitle: "レッスンを見る",
      readTheme: "レッスンを開く →",
      readLesson: "レッスンを読む →",
      readChapter: "章を読む →",
      fullBookDownload: "完全版をダウンロード（近日公開）",
      features: [
        {
          icon: "∫",
          title: "完全な数式表示",
          body: "すべての数式は KaTeX でレンダリングされ、ブラウザ上で LaTeX 品質の美しい数式を表示します。",
        },
        {
          icon: "⬇",
          title: "PDF ダウンロード",
          body: "各章はオフライン学習用にダウンロード可能な PDF として提供されています。",
        },
        {
          icon: "◎",
          title: "無料・オープンアクセス",
          body: "全文を無料でオンライン公開。有料の壁や登録は一切不要です。",
        },
      ],
    },
    footer: {
      navigation: "ナビゲーション",
      home: "ホーム",
      allChapters: "すべてのレッスン",
      exercises: "演習",
      aboutBook: "本書について",
      author: "著者",
      copyright: (year: string, author: string) => `© ${year} ${author}. 無断複写・転載を禁じます。`,
    },
  },
  ko: {
    book: {
      title: "기초 및 고급\n열역학",
      subtitle: "",
      description:
        "1부는 풀이가 포함된 다양한 연습문제를 갖춘 학부 과정으로, 열역학의 어휘와 형식체계, 기본 원리, 기체와 상전이 연구, 열기관과 열역학적 사이클을 다룹니다. 이후 부분에서는 더 심화된 주제를 다룹니다: 열역학의 미분기하학, 맥스웰의 악마, 내부가역성, 기후물리학, 열전기, 준평형 열역학(온사거 관계 등), 그리고 양자 열역학.",
      edition: "초판",
    },
    nav: {
      home: "홈",
      chapters: "강의",
      exercises: "연습문제",
      quiz: "퀴즈",
      glossary: "용어집",
      about: "책 소개",
    },
    home: {
      badge: "무료 온라인판",
      readOnline: "온라인으로 읽기 →",
      aboutBook: "책 소개",
      chapterPrefix: "제",
      themePrefix: "강의",
      stats: { chapters: "강의", edition: "판", format: "형식", formatValue: "웹 + PDF" },
      contentsLabel: "목차",
      exploreTitle: "강의 둘러보기",
      readTheme: "강의 열기 →",
      readLesson: "강의 읽기 →",
      readChapter: "챕터 읽기 →",
      fullBookDownload: "전체판 다운로드 (준비 중)",
      features: [
        {
          icon: "∫",
          title: "완전한 수식 렌더링",
          body: "모든 수식은 KaTeX로 렌더링되어 브라우저에서 선명한 LaTeX 품질의 수식을 볼 수 있습니다.",
        },
        {
          icon: "⬇",
          title: "PDF 다운로드",
          body: "모든 챕터는 오프라인 학습을 위해 다운로드 가능한 PDF로 제공됩니다.",
        },
        {
          icon: "◎",
          title: "무료 공개 접근",
          body: "전체 텍스트를 온라인에서 무료로 이용할 수 있습니다. 결제 장벽도, 가입도 필요 없습니다.",
        },
      ],
    },
    footer: {
      navigation: "내비게이션",
      home: "홈",
      allChapters: "모든 강의",
      exercises: "연습문제",
      aboutBook: "책 소개",
      author: "저자",
      copyright: (year: string, author: string) => `© ${year} ${author}. 모든 권리 보유.`,
    },
  },
  hi: {
    book: {
      title: "प्रारंभिक और उन्नत\nऊष्मागतिकी",
      subtitle: "",
      description:
        "पहला भाग एक स्नातक स्तर का पाठ्यक्रम है जिसमें कई हल किए गए अभ्यास शामिल हैं, जो ऊष्मागतिकी की शब्दावली, औपचारिकता और मूल सिद्धांतों, गैसों और अवस्था परिवर्तनों के अध्ययन, तथा ऊष्मा इंजनों और तापीय चक्रों को कवर करता है। आगे के भाग अधिक उन्नत विषयों की खोज करते हैं: ऊष्मागतिकी में अवकल ज्यामिति, मैक्सवेल का दानव, अंतःप्रतिवर्तिता, जलवायु भौतिकी, थर्मोइलेक्ट्रिसिटी, निकट-साम्य ऊष्मागतिकी (ऑन्सागर संबंध आदि), और क्वांटम ऊष्मागतिकी।",
      edition: "प्रथम संस्करण",
    },
    nav: {
      home: "होम",
      chapters: "पाठ",
      exercises: "अभ्यास",
      quiz: "क्विज़",
      glossary: "शब्दावली",
      about: "पुस्तक के बारे में",
    },
    home: {
      badge: "निःशुल्क ऑनलाइन संस्करण",
      readOnline: "ऑनलाइन पढ़ें →",
      aboutBook: "पुस्तक के बारे में",
      chapterPrefix: "अध्याय",
      themePrefix: "पाठ",
      stats: { chapters: "पाठ", edition: "संस्करण", format: "प्रारूप", formatValue: "वेब + PDF" },
      contentsLabel: "विषय-सूची",
      exploreTitle: "पाठों को देखें",
      readTheme: "पाठ खोलें →",
      readLesson: "पाठ पढ़ें →",
      readChapter: "अध्याय पढ़ें →",
      fullBookDownload: "पूर्ण संस्करण डाउनलोड करें (जल्द आ रहा है)",
      features: [
        {
          icon: "∫",
          title: "पूर्ण गणितीय प्रस्तुति",
          body: "सभी समीकरण KaTeX के साथ रेंडर किए गए हैं — आपके ब्राउज़र में स्पष्ट, LaTeX-गुणवत्ता वाला गणित।",
        },
        {
          icon: "⬇",
          title: "PDF डाउनलोड",
          body: "हर अध्याय ऑफ़लाइन अध्ययन के लिए डाउनलोड करने योग्य PDF के रूप में उपलब्ध है।",
        },
        {
          icon: "◎",
          title: "निःशुल्क एवं खुली पहुँच",
          body: "पूरा पाठ ऑनलाइन निःशुल्क उपलब्ध है। कोई पेवॉल नहीं, कोई पंजीकरण आवश्यक नहीं।",
        },
      ],
    },
    footer: {
      navigation: "नेविगेशन",
      home: "होम",
      allChapters: "सभी पाठ",
      exercises: "अभ्यास",
      aboutBook: "पुस्तक के बारे में",
      author: "लेखक",
      copyright: (year: string, author: string) => `© ${year} ${author}. सर्वाधिकार सुरक्षित।`,
    },
  },
  vi: {
    book: {
      title: "Nhiệt động lực học\nCơ bản và Nâng cao",
      subtitle: "",
      description:
        "Phần đầu tiên là một khóa học đại học với nhiều bài tập có lời giải, bao quát từ vựng, hình thức luận và các nguyên lý cơ bản của nhiệt động lực học, nghiên cứu về chất khí và chuyển pha, cũng như động cơ nhiệt và chu trình nhiệt. Các phần tiếp theo khám phá những chủ đề nâng cao hơn: hình học vi phân trong nhiệt động lực học, quỷ Maxwell, tính nội thuận nghịch, vật lý khí hậu, nhiệt điện, nhiệt động lực học gần cân bằng (quan hệ Onsager, v.v.), và nhiệt động lực học lượng tử.",
      edition: "Ấn bản đầu tiên",
    },
    nav: {
      home: "Trang chủ",
      chapters: "Bài học",
      exercises: "Bài tập",
      quiz: "Trắc nghiệm",
      glossary: "Bảng thuật ngữ",
      about: "Giới thiệu",
    },
    home: {
      badge: "Ấn bản trực tuyến miễn phí",
      readOnline: "Đọc trực tuyến →",
      aboutBook: "Giới thiệu về cuốn sách",
      chapterPrefix: "Ch.",
      themePrefix: "Bài",
      stats: { chapters: "Bài học", edition: "Ấn bản", format: "Định dạng", formatValue: "Web + PDF" },
      contentsLabel: "Mục lục",
      exploreTitle: "Khám phá các bài học",
      readTheme: "Mở bài học →",
      readLesson: "Đọc bài học →",
      readChapter: "Đọc chương →",
      fullBookDownload: "Tải ấn bản đầy đủ (sắp ra mắt)",
      features: [
        {
          icon: "∫",
          title: "Hiển thị toán học đầy đủ",
          body: "Tất cả các phương trình được hiển thị bằng KaTeX — toán học sắc nét, chất lượng LaTeX ngay trên trình duyệt của bạn.",
        },
        {
          icon: "⬇",
          title: "Tải PDF",
          body: "Mỗi chương đều có sẵn dưới dạng PDF có thể tải xuống để học ngoại tuyến.",
        },
        {
          icon: "◎",
          title: "Truy cập tự do & miễn phí",
          body: "Toàn bộ nội dung có sẵn miễn phí trực tuyến. Không tường phí, không cần đăng ký.",
        },
      ],
    },
    footer: {
      navigation: "Điều hướng",
      home: "Trang chủ",
      allChapters: "Tất cả bài học",
      exercises: "Bài tập",
      aboutBook: "Giới thiệu về cuốn sách",
      author: "Tác giả",
      copyright: (year: string, author: string) => `© ${year} ${author}. Bảo lưu mọi quyền.`,
    },
  },
  ar: {
    book: {
      title: "الديناميكا الحرارية\nالأساسية والمتقدمة",
      subtitle: "",
      description:
        "الجزء الأول هو مقرر جامعي يتضمن العديد من التمارين المحلولة، ويغطي المفردات والصياغة الرياضية والمبادئ الأساسية للديناميكا الحرارية، ودراسة الغازات والانتقالات الطورية، والمحركات الحرارية والدورات الحرارية. تستكشف الأجزاء التالية مواضيع أكثر تقدماً: الهندسة التفاضلية في الديناميكا الحرارية، شيطان ماكسويل، اللاعكوسية الداخلية، فيزياء المناخ، الكهروحرارية، الديناميكا الحرارية القريبة من التوازن (علاقات أونساغر وغيرها)، والديناميكا الحرارية الكمومية.",
      edition: "الطبعة الأولى",
    },
    nav: {
      home: "الرئيسية",
      chapters: "الدروس",
      exercises: "التمارين",
      quiz: "اختبار",
      glossary: "المسرد",
      about: "عن الكتاب",
    },
    home: {
      badge: "نسخة إلكترونية مجانية",
      readOnline: "القراءة عبر الإنترنت ←",
      aboutBook: "عن الكتاب",
      chapterPrefix: "فصل",
      themePrefix: "درس",
      stats: { chapters: "الدروس", edition: "الطبعة", format: "الصيغة", formatValue: "ويب + PDF" },
      contentsLabel: "المحتويات",
      exploreTitle: "استكشف الدروس",
      readTheme: "فتح الدرس ←",
      readLesson: "قراءة الدرس ←",
      readChapter: "قراءة الفصل ←",
      fullBookDownload: "تنزيل النسخة الكاملة (قريباً)",
      features: [
        {
          icon: "∫",
          title: "عرض رياضي كامل",
          body: "يتم عرض جميع المعادلات باستخدام KaTeX — رياضيات واضحة بجودة LaTeX مباشرة في متصفحك.",
        },
        {
          icon: "⬇",
          title: "تنزيلات PDF",
          body: "كل فصل متاح كملف PDF قابل للتنزيل للدراسة دون اتصال بالإنترنت.",
        },
        {
          icon: "◎",
          title: "وصول مجاني ومفتوح",
          body: "النص الكامل متاح مجاناً عبر الإنترنت. بدون حواجز دفع، وبدون الحاجة إلى التسجيل.",
        },
      ],
    },
    footer: {
      navigation: "التنقل",
      home: "الرئيسية",
      allChapters: "جميع الدروس",
      exercises: "التمارين",
      aboutBook: "عن الكتاب",
      author: "المؤلف",
      copyright: (year: string, author: string) => `© ${year} ${author}. جميع الحقوق محفوظة.`,
    },
  },
};

/**
 * Resolves the full translation set for a language: fr/en are used as-is (complete),
 * every other supported language is deep-merged over the English translations so any
 * section not yet translated (chapters, chapter, about, updates, ...) falls back to
 * English rather than crashing or showing an empty string.
 */
export function getTranslations(lang: Lang): Translations {
  if (lang === "en") return translations.en;
  if (lang === "fr") return translations.fr;
  return deepMerge<Translations>(translations.en, partialTranslations[lang]);
}
