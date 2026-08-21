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
    glossary: "glossaire",
    about: "a-propos",
  },
  de: {
    chapters: "lektionen",
    exercises: "uebungen",
    quiz: "quiz",
    glossary: "glossar",
    about: "ueber-das-buch",
  },
  es: {
    chapters: "lecciones",
    exercises: "ejercicios",
    quiz: "quiz",
    glossary: "glosario",
    about: "sobre-el-libro",
  },
  pt: {
    chapters: "licoes",
    exercises: "exercicios",
    quiz: "quiz",
    glossary: "glossario",
    about: "sobre-o-livro",
  },
  it: {
    chapters: "lezioni",
    exercises: "esercizi",
    quiz: "quiz",
    glossary: "glossario",
    about: "il-libro",
  },
  pl: {
    chapters: "lekcje",
    exercises: "cwiczenia",
    quiz: "quiz",
    glossary: "slowniczek",
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
    glossary: "bang-thuat-ngu",
    about: "gioi-thieu",
  },
  ar: IDENTITY_SECTION_SLUGS,
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
    quiz: "quiz",
    glossary: "sozluk",
    about: "kitap-hakkinda",
  },
  bn: IDENTITY_SECTION_SLUGS,
  ur: IDENTITY_SECTION_SLUGS,
  sw: {
    chapters: "masomo",
    exercises: "mazoezi",
    quiz: "jaribio",
    glossary: "kamusi",
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
      learningResourceType: "University lesson",
      educationalLevel: "Undergraduate higher education",
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
        "This lesson's content is not available yet in this language.",
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
        "This site and the book are under development. Lessons and exercises will be added gradually. The book is written in French by the author; content offered in other languages is produced through automated (AI) translation.",
      aboutProjectOutlineLabel: "Planned content:",
      aboutProjectOutlineBody:
        "A progressive course in thermodynamics, from the founding principles to more advanced developments.",
      aboutProjectStatusBody:
        "Current status: lessons 1 to 3 finalized in all languages.",
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
    glossary: {
      title: "Keyword Glossary",
      subtitle: "Click a keyword to see every lesson that uses it.",
      allKeywords: "All keywords",
      relatedLessons: "Related lessons",
      noResult: "No keyword found for this filter.",
      lessonEntry: (n: number, title: string) => `Lesson ${n}: ${title}`,
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
      learningResourceType: "Cours universitaire",
      educationalLevel: "Enseignement supérieur — Licence",
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
        "Ce site et cet ouvrage sont en cours de développement. Les leçons et les exercices seront publiés progressivement. Le livre est rédigé en français par l'auteur ; les contenus proposés dans les autres langues sont produits par traduction automatique (IA).",
      aboutProjectOutlineLabel: "Contenu prévu :",
      aboutProjectOutlineBody:
        "Un cours progressif de thermodynamique, des principes fondateurs jusqu'aux développements plus avancés.",
      aboutProjectStatusBody:
        "Statut actuel : leçons 1 à 3 finalisées dans toutes les langues.",
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
    glossary: {
      title: "Glossaire des mots-clés",
      subtitle: "Cliquez sur un mot-clé pour voir toutes les leçons qui l'utilisent.",
      allKeywords: "Tous les mots-clés",
      relatedLessons: "Leçons associées",
      noResult: "Aucun mot-clé trouvé pour ce filtre.",
      lessonEntry: (n: number, title: string) => `Leçon ${n} : ${title}`,
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
    chapters: {
      label: "LEKTIONEN",
      title: "Alle Lektionen",
      description: "",
    },
    chapter: {
      chapterLabel: "LEKTION",
      themeLabel: "LEKTION",
      lessonLabel: "LEKTION",
      learningResourceType: "Hochschulkurs",
      educationalLevel: "Hochschulniveau — Bachelor",
      readTime: (t: string) => `${t} Lesezeit`,
      downloadPdf: "↓ PDF herunterladen",
      breadcrumbHome: "Startseite",
      breadcrumbChapters: "Lektionen",
      breadcrumbThemes: "Lektionen",
      prev: "← Zurück",
      next: "Weiter →",
      noteTitle: "Hinweis:",
      noteBody:
        "Dies ist ein Vorschau-Auszug. Laden Sie das vollständige PDF herunter für das gesamte Kapitel, Übungen und Lösungen.",
      tabOnline: "Online lesen",
      tabReferences: "Referenzen",
      tabPdf: "PDF-Ansicht",
      tocTitle: "Inhaltsverzeichnis",
      showToc: "Inhaltsverzeichnis anzeigen",
      hideToc: "Inhaltsverzeichnis ausblenden",
      refsEmpty: "Für diese Lektion wurden noch keine Referenzen hinzugefügt.",
      refsEnglishTitle: "Englische Referenzen",
      refsFrenchTitle: "Französische Referenzen",
      refsSectionEmpty: "In diesem Abschnitt wurde noch kein Link hinzugefügt.",
      contentUnavailable:
        "Der Inhalt dieser Lektion ist in dieser Sprache noch nicht verfügbar.",
      downloadBtn: "↓ Herunterladen",
      pdfFallback: "Falls das PDF nicht angezeigt wird,",
      pdfFallbackLink: "hier klicken, um es herunterzuladen",
      noLessonTitle: "Keine Lektion verfügbar",
      noLessonBody:
        "Diese Lektion ist in der Struktur aufgeführt, aber ihr Inhalt wurde noch nicht veröffentlicht.",
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
    glossary: {
      title: "Glossar der Schlüsselwörter",
      subtitle: "Klicken Sie auf ein Schlüsselwort, um alle Lektionen zu sehen, die es verwenden.",
      allKeywords: "Alle Schlüsselwörter",
      relatedLessons: "Zugehörige Lektionen",
      noResult: "Kein Schlüsselwort für diesen Filter gefunden.",
      lessonEntry: (n: number, title: string) => `Lektion ${n}: ${title}`,
    },
    about: {
      label: "ÜBER DAS BUCH",
      aboutBookTitle: "Über dieses Buch",
      bookDetails: "Angaben zum Buch",
      detailLabels: { author: "Autor", affiliation: "Institution", edition: "Ausgabe", year: "Jahr" },
      authorTitle: "Über den Autor",
      authorBioSuffix: "ist Physiker an der ",
      authorBioRest:
        "Seine Forschungsinteressen umfassen die Gesetze der Gravitation, die Quantenmechanik und ihre Grundlagen sowie symbolische Regression als Aufgabe des maschinellen Lernens. Dieses Buch ist aus Vorlesungsskripten entstanden, die über viele Jahre der Lehre auf Master- und fortgeschrittenem Bachelor-Niveau erarbeitet wurden.",
      authorLinksHeading: "Profile",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Über das Projekt",
      aboutProjectLead:
        "Diese Website und das Buch befinden sich in Entwicklung. Lektionen und Übungen werden nach und nach hinzugefügt. Das Buch wird vom Autor auf Französisch verfasst; die Inhalte in den anderen Sprachen werden durch automatisierte (KI-)Übersetzung erstellt.",
      aboutProjectOutlineLabel: "Geplante Inhalte:",
      aboutProjectOutlineBody:
        "Ein aufbauender Kurs zur Thermodynamik, von den Grundprinzipien bis zu fortgeschritteneren Entwicklungen.",
      aboutProjectStatusBody:
        "Aktueller Stand: Lektionen 1 bis 3 in allen Sprachen fertiggestellt.",
      aboutBookBody2:
        "Der Text entwickelt die Thermodynamik ausgehend von den ersten Prinzipien. Beweise werden vollständig angegeben, wann immer sie die Physik verdeutlichen, und zahlreiche durchgerechnete Beispiele ergänzen die theoretische Darstellung.",
      translationWarning:
        "Hinweis: Dieses Buch ist ursprünglich auf Französisch verfasst; diese Fassung wird automatisch mit Claude Sonnet 4.6 übersetzt.",
      sameAuthorTitle: "Vom selben Autor",
      sameAuthorBody:
        "Quantenmechanik — Eine moderne Einführung, ein begleitender Kurs zur Quantenmechanik.",
      sameAuthorLink: "Zu lesen auf quantumlectures.org",
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
    chapters: {
      label: "LECCIONES",
      title: "Todas las lecciones",
      description: "",
    },
    chapter: {
      chapterLabel: "LECCIÓN",
      themeLabel: "LECCIÓN",
      lessonLabel: "LECCIÓN",
      learningResourceType: "Curso universitario",
      educationalLevel: "Educación superior — Grado",
      readTime: (t: string) => `${t} de lectura`,
      downloadPdf: "↓ Descargar el PDF",
      breadcrumbHome: "Inicio",
      breadcrumbChapters: "Lecciones",
      breadcrumbThemes: "Lecciones",
      prev: "← Anterior",
      next: "Siguiente →",
      noteTitle: "Nota:",
      noteBody:
        "Este es un extracto de vista previa. Descargue el PDF completo para el capítulo entero, los ejercicios y las soluciones.",
      tabOnline: "Leer en línea",
      tabReferences: "Referencias",
      tabPdf: "Visor de PDF",
      tocTitle: "Índice",
      showToc: "Mostrar índice",
      hideToc: "Ocultar índice",
      refsEmpty: "Aún no se han añadido referencias para esta lección.",
      refsEnglishTitle: "Referencias en inglés",
      refsFrenchTitle: "Referencias en francés",
      refsSectionEmpty: "Aún no se ha añadido ningún enlace en esta sección.",
      contentUnavailable:
        "El contenido de esta lección aún no está disponible en este idioma.",
      downloadBtn: "↓ Descargar",
      pdfFallback: "Si el PDF no se muestra,",
      pdfFallbackLink: "haga clic aquí para descargarlo",
      noLessonTitle: "Ninguna lección disponible",
      noLessonBody:
        "Esta lección figura en la estructura, pero su contenido aún no se ha publicado.",
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
    glossary: {
      title: "Glosario de palabras clave",
      subtitle: "Haga clic en una palabra clave para ver todas las lecciones que la usan.",
      allKeywords: "Todas las palabras clave",
      relatedLessons: "Lecciones relacionadas",
      noResult: "No se encontró ninguna palabra clave para este filtro.",
      lessonEntry: (n: number, title: string) => `Lección ${n}: ${title}`,
    },
    about: {
      label: "SOBRE EL LIBRO",
      aboutBookTitle: "Sobre este libro",
      bookDetails: "Detalles del libro",
      detailLabels: { author: "Autor", affiliation: "Afiliación", edition: "Edición", year: "Año" },
      authorTitle: "Sobre el autor",
      authorBioSuffix: "es físico en la ",
      authorBioRest:
        "Sus intereses de investigación incluyen las leyes de la gravitación, la mecánica cuántica y sus fundamentos, así como la regresión simbólica como tarea de aprendizaje automático. Este libro surgió de notas de clase desarrolladas a lo largo de muchos años de docencia a nivel de posgrado y grado avanzado.",
      authorLinksHeading: "Perfiles",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Sobre el proyecto",
      aboutProjectLead:
        "Este sitio y el libro están en desarrollo. Las lecciones y los ejercicios se irán publicando progresivamente. El libro está escrito en francés por el autor; los contenidos ofrecidos en otros idiomas se producen mediante traducción automática (IA).",
      aboutProjectOutlineLabel: "Contenido previsto:",
      aboutProjectOutlineBody:
        "Un curso progresivo de termodinámica, desde los principios fundacionales hasta desarrollos más avanzados.",
      aboutProjectStatusBody:
        "Estado actual: lecciones 1 a 3 finalizadas en todos los idiomas.",
      aboutBookBody2:
        "El texto desarrolla la termodinámica desde los primeros principios. Las demostraciones se presentan en su totalidad cuando aclaran la física, y numerosos ejemplos resueltos complementan la exposición teórica.",
      translationWarning:
        "Aviso: este libro está escrito originalmente en francés; esta versión se traduce automáticamente con Claude Sonnet 4.6.",
      sameAuthorTitle: "Del mismo autor",
      sameAuthorBody:
        "Mecánica Cuántica — Una Introducción Moderna, un curso complementario sobre mecánica cuántica.",
      sameAuthorLink: "Leerlo en quantumlectures.org",
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
    chapters: {
      label: "LIÇÕES",
      title: "Todas as lições",
      description: "",
    },
    chapter: {
      chapterLabel: "LIÇÃO",
      themeLabel: "LIÇÃO",
      lessonLabel: "LIÇÃO",
      learningResourceType: "Curso universitário",
      educationalLevel: "Ensino superior — Licenciatura",
      readTime: (t: string) => `${t} de leitura`,
      downloadPdf: "↓ Baixar o PDF",
      breadcrumbHome: "Início",
      breadcrumbChapters: "Lições",
      breadcrumbThemes: "Lições",
      prev: "← Anterior",
      next: "Próximo →",
      noteTitle: "Nota:",
      noteBody:
        "Este é um trecho de pré-visualização. Baixe o PDF completo para o capítulo inteiro, os exercícios e as soluções.",
      tabOnline: "Ler on-line",
      tabReferences: "Referências",
      tabPdf: "Visualizador de PDF",
      tocTitle: "Sumário",
      showToc: "Mostrar sumário",
      hideToc: "Ocultar sumário",
      refsEmpty: "Ainda não há referências adicionadas para esta lição.",
      refsEnglishTitle: "Referências em inglês",
      refsFrenchTitle: "Referências em francês",
      refsSectionEmpty: "Ainda não há nenhum link adicionado nesta seção.",
      contentUnavailable:
        "O conteúdo desta lição ainda não está disponível neste idioma.",
      downloadBtn: "↓ Baixar",
      pdfFallback: "Se o PDF não for exibido,",
      pdfFallbackLink: "clique aqui para baixá-lo",
      noLessonTitle: "Nenhuma lição disponível",
      noLessonBody:
        "Esta lição está presente na estrutura, mas seu conteúdo ainda não foi publicado.",
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
    glossary: {
      title: "Glossário de palavras-chave",
      subtitle: "Clique em uma palavra-chave para ver todas as lições que a utilizam.",
      allKeywords: "Todas as palavras-chave",
      relatedLessons: "Lições relacionadas",
      noResult: "Nenhuma palavra-chave encontrada para este filtro.",
      lessonEntry: (n: number, title: string) => `Lição ${n}: ${title}`,
    },
    about: {
      label: "SOBRE O LIVRO",
      aboutBookTitle: "Sobre este livro",
      bookDetails: "Detalhes do livro",
      detailLabels: { author: "Autor", affiliation: "Afiliação", edition: "Edição", year: "Ano" },
      authorTitle: "Sobre o autor",
      authorBioSuffix: "é físico na ",
      authorBioRest:
        "Seus interesses de pesquisa incluem as leis da gravitação, a mecânica quântica e seus fundamentos, e a regressão simbólica como tarefa de aprendizado de máquina. Este livro nasceu de notas de aula desenvolvidas ao longo de muitos anos de ensino em nível de pós-graduação e graduação avançada.",
      authorLinksHeading: "Perfis",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Sobre o projeto",
      aboutProjectLead:
        "Este site e o livro estão em desenvolvimento. As lições e os exercícios serão publicados progressivamente. O livro é escrito em francês pelo autor; os conteúdos oferecidos em outros idiomas são produzidos por tradução automática (IA).",
      aboutProjectOutlineLabel: "Conteúdo previsto:",
      aboutProjectOutlineBody:
        "Um curso progressivo de termodinâmica, dos princípios fundadores a desenvolvimentos mais avançados.",
      aboutProjectStatusBody:
        "Estado atual: lições 1 a 3 finalizadas em todos os idiomas.",
      aboutBookBody2:
        "O texto desenvolve a termodinâmica a partir dos primeiros princípios. As provas são apresentadas integralmente sempre que esclarecem a física, e numerosos exemplos resolvidos complementam a exposição teórica.",
      translationWarning:
        "Aviso: este livro é originalmente escrito em francês; esta versão é traduzida automaticamente com Claude Sonnet 4.6.",
      sameAuthorTitle: "Do mesmo autor",
      sameAuthorBody:
        "Mecânica Quântica — Uma Introdução Moderna, um curso complementar sobre mecânica quântica.",
      sameAuthorLink: "Leia em quantumlectures.org",
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
    chapters: {
      label: "LEZIONI",
      title: "Tutte le lezioni",
      description: "",
    },
    chapter: {
      chapterLabel: "LEZIONE",
      themeLabel: "LEZIONE",
      lessonLabel: "LEZIONE",
      learningResourceType: "Corso universitario",
      educationalLevel: "Istruzione superiore — Laurea",
      readTime: (t: string) => `${t} di lettura`,
      downloadPdf: "↓ Scarica il PDF",
      breadcrumbHome: "Home",
      breadcrumbChapters: "Lezioni",
      breadcrumbThemes: "Lezioni",
      prev: "← Precedente",
      next: "Successivo →",
      noteTitle: "Nota:",
      noteBody:
        "Questo è un estratto di anteprima. Scarica il PDF completo per il capitolo intero, gli esercizi e le soluzioni.",
      tabOnline: "Leggi online",
      tabReferences: "Riferimenti",
      tabPdf: "Visualizzatore PDF",
      tocTitle: "Indice",
      showToc: "Mostra indice",
      hideToc: "Nascondi indice",
      refsEmpty: "Nessun riferimento ancora aggiunto per questa lezione.",
      refsEnglishTitle: "Riferimenti in inglese",
      refsFrenchTitle: "Riferimenti in francese",
      refsSectionEmpty: "Nessun link ancora aggiunto in questa sezione.",
      contentUnavailable:
        "Il contenuto di questa lezione non è ancora disponibile in questa lingua.",
      downloadBtn: "↓ Scarica",
      pdfFallback: "Se il PDF non viene visualizzato,",
      pdfFallbackLink: "clicca qui per scaricarlo",
      noLessonTitle: "Nessuna lezione disponibile",
      noLessonBody:
        "Questa lezione è presente nella struttura, ma il suo contenuto non è ancora stato pubblicato.",
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
    glossary: {
      title: "Glossario delle parole chiave",
      subtitle: "Clicca su una parola chiave per vedere tutte le lezioni che la usano.",
      allKeywords: "Tutte le parole chiave",
      relatedLessons: "Lezioni correlate",
      noResult: "Nessuna parola chiave trovata per questo filtro.",
      lessonEntry: (n: number, title: string) => `Lezione ${n}: ${title}`,
    },
    about: {
      label: "SUL LIBRO",
      aboutBookTitle: "Su questo libro",
      bookDetails: "Dettagli del libro",
      detailLabels: { author: "Autore", affiliation: "Affiliazione", edition: "Edizione", year: "Anno" },
      authorTitle: "Sull'autore",
      authorBioSuffix: "è fisico presso ",
      authorBioRest:
        "I suoi interessi di ricerca includono le leggi della gravitazione, la meccanica quantistica e i suoi fondamenti, e la regressione simbolica come compito di apprendimento automatico. Questo libro è nato da appunti di lezione sviluppati nel corso di molti anni di insegnamento a livello di laurea magistrale e triennale avanzato.",
      authorLinksHeading: "Profili",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Sul progetto",
      aboutProjectLead:
        "Questo sito e il libro sono in fase di sviluppo. Lezioni ed esercizi saranno pubblicati progressivamente. Il libro è scritto in francese dall'autore; i contenuti proposti nelle altre lingue sono prodotti tramite traduzione automatica (IA).",
      aboutProjectOutlineLabel: "Contenuti previsti:",
      aboutProjectOutlineBody:
        "Un corso progressivo di termodinamica, dai principi fondanti agli sviluppi più avanzati.",
      aboutProjectStatusBody:
        "Stato attuale: lezioni da 1 a 3 completate in tutte le lingue.",
      aboutBookBody2:
        "Il testo sviluppa la termodinamica a partire dai primi principi. Le dimostrazioni sono fornite per intero ogniqualvolta chiariscono la fisica, e numerosi esempi svolti completano l'esposizione teorica.",
      translationWarning:
        "Avviso: questo libro è scritto originariamente in francese; questa versione è tradotta automaticamente con Claude Sonnet 4.6.",
      sameAuthorTitle: "Dello stesso autore",
      sameAuthorBody:
        "Meccanica Quantistica — Un'Introduzione Moderna, un corso complementare sulla meccanica quantistica.",
      sameAuthorLink: "Leggilo su quantumlectures.org",
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
    chapters: {
      label: "LEKCJE",
      title: "Wszystkie lekcje",
      description: "",
    },
    chapter: {
      chapterLabel: "LEKCJA",
      themeLabel: "LEKCJA",
      lessonLabel: "LEKCJA",
      learningResourceType: "Kurs uniwersytecki",
      educationalLevel: "Szkolnictwo wyższe — studia licencjackie",
      readTime: (t: string) => `${t} czytania`,
      downloadPdf: "↓ Pobierz PDF",
      breadcrumbHome: "Strona główna",
      breadcrumbChapters: "Lekcje",
      breadcrumbThemes: "Lekcje",
      prev: "← Poprzednia",
      next: "Następna →",
      noteTitle: "Uwaga:",
      noteBody:
        "To jest fragment podglądowy. Pobierz pełny plik PDF, aby uzyskać cały rozdział, ćwiczenia i rozwiązania.",
      tabOnline: "Czytaj online",
      tabReferences: "Odniesienia",
      tabPdf: "Podgląd PDF",
      tocTitle: "Spis treści",
      showToc: "Pokaż spis treści",
      hideToc: "Ukryj spis treści",
      refsEmpty: "Dla tej lekcji nie dodano jeszcze żadnych odniesień.",
      refsEnglishTitle: "Odniesienia w języku angielskim",
      refsFrenchTitle: "Odniesienia w języku francuskim",
      refsSectionEmpty: "W tej sekcji nie dodano jeszcze żadnego linku.",
      contentUnavailable:
        "Treść tej lekcji nie jest jeszcze dostępna w tym języku.",
      downloadBtn: "↓ Pobierz",
      pdfFallback: "Jeśli plik PDF się nie wyświetla,",
      pdfFallbackLink: "kliknij tutaj, aby go pobrać",
      noLessonTitle: "Brak dostępnej lekcji",
      noLessonBody:
        "Ta lekcja znajduje się w strukturze, ale jej treść nie została jeszcze opublikowana.",
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
    glossary: {
      title: "Słowniczek słów kluczowych",
      subtitle: "Kliknij słowo kluczowe, aby zobaczyć wszystkie lekcje, które go używają.",
      allKeywords: "Wszystkie słowa kluczowe",
      relatedLessons: "Powiązane lekcje",
      noResult: "Nie znaleziono słowa kluczowego dla tego filtra.",
      lessonEntry: (n: number, title: string) => `Lekcja ${n}: ${title}`,
    },
    about: {
      label: "O KSIĄŻCE",
      aboutBookTitle: "O tej książce",
      bookDetails: "Szczegóły książki",
      detailLabels: { author: "Autor", affiliation: "Afiliacja", edition: "Wydanie", year: "Rok" },
      authorTitle: "O autorze",
      authorBioSuffix: "jest fizykiem na ",
      authorBioRest:
        "Jego zainteresowania badawcze obejmują prawa grawitacji, mechanikę kwantową i jej podstawy oraz regresję symboliczną jako zadanie uczenia maszynowego. Ta książka powstała z notatek wykładowych opracowywanych przez wiele lat nauczania na poziomie magisterskim i zaawansowanym licencjackim.",
      authorLinksHeading: "Profile",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "O projekcie",
      aboutProjectLead:
        "Ta strona i książka są w trakcie tworzenia. Lekcje i ćwiczenia będą dodawane stopniowo. Książka jest napisana po francusku przez autora; treści oferowane w innych językach powstają w wyniku automatycznego (AI) tłumaczenia.",
      aboutProjectOutlineLabel: "Planowana zawartość:",
      aboutProjectOutlineBody:
        "Stopniowy kurs termodynamiki, od podstawowych zasad po bardziej zaawansowane zagadnienia.",
      aboutProjectStatusBody:
        "Aktualny stan: lekcje 1–3 ukończone we wszystkich językach.",
      aboutBookBody2:
        "Tekst rozwija termodynamikę od podstawowych zasad. Dowody podane są w pełni, gdy tylko wyjaśniają fizykę, a liczne rozwiązane przykłady uzupełniają wykład teoretyczny.",
      translationWarning:
        "Uwaga: ta książka została pierwotnie napisana w języku francuskim; ta wersja jest tłumaczona automatycznie za pomocą Claude Sonnet 4.6.",
      sameAuthorTitle: "Tego samego autora",
      sameAuthorBody:
        "Mechanika kwantowa — nowoczesne wprowadzenie, kurs towarzyszący dotyczący mechaniki kwantowej.",
      sameAuthorLink: "Przeczytaj na quantumlectures.org",
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
    chapters: {
      label: "УРОКИ",
      title: "Все уроки",
      description: "",
    },
    chapter: {
      chapterLabel: "УРОК",
      themeLabel: "УРОК",
      lessonLabel: "УРОК",
      learningResourceType: "Университетский курс",
      educationalLevel: "Высшее образование — бакалавриат",
      readTime: (t: string) => `${t} чтения`,
      downloadPdf: "↓ Скачать PDF",
      breadcrumbHome: "Главная",
      breadcrumbChapters: "Уроки",
      breadcrumbThemes: "Уроки",
      prev: "← Назад",
      next: "Далее →",
      noteTitle: "Примечание:",
      noteBody:
        "Это фрагмент предварительного просмотра. Скачайте полный PDF, чтобы получить всю главу, упражнения и решения.",
      tabOnline: "Читать онлайн",
      tabReferences: "Ссылки",
      tabPdf: "Просмотр PDF",
      tocTitle: "Содержание",
      showToc: "Показать содержание",
      hideToc: "Скрыть содержание",
      refsEmpty: "Для этого урока пока не добавлено ссылок.",
      refsEnglishTitle: "Ссылки на английском",
      refsFrenchTitle: "Ссылки на французском",
      refsSectionEmpty: "В этом разделе пока не добавлено ни одной ссылки.",
      contentUnavailable:
        "Содержание этого урока пока недоступно на этом языке.",
      downloadBtn: "↓ Скачать",
      pdfFallback: "Если PDF не отображается,",
      pdfFallbackLink: "нажмите здесь, чтобы скачать его",
      noLessonTitle: "Урок недоступен",
      noLessonBody:
        "Этот урок присутствует в структуре, но его содержание ещё не опубликовано.",
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
    glossary: {
      title: "Глоссарий ключевых слов",
      subtitle: "Нажмите на ключевое слово, чтобы увидеть все уроки, где оно используется.",
      allKeywords: "Все ключевые слова",
      relatedLessons: "Связанные уроки",
      noResult: "По этому фильтру ключевых слов не найдено.",
      lessonEntry: (n: number, title: string) => `Урок ${n}: ${title}`,
    },
    about: {
      label: "О КНИГЕ",
      aboutBookTitle: "Об этой книге",
      bookDetails: "Сведения о книге",
      detailLabels: { author: "Автор", affiliation: "Организация", edition: "Издание", year: "Год" },
      authorTitle: "Об авторе",
      authorBioSuffix: "физик в ",
      authorBioRest:
        "Его научные интересы включают законы гравитации, квантовую механику и её основания, а также символьную регрессию как задачу машинного обучения. Эта книга выросла из конспектов лекций, разработанных за многие годы преподавания на уровне магистратуры и продвинутого бакалавриата.",
      authorLinksHeading: "Профили",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "О проекте",
      aboutProjectLead:
        "Этот сайт и книга находятся в разработке. Уроки и упражнения будут добавляться постепенно. Книга написана автором на французском языке; материалы на других языках подготовлены с помощью автоматического (ИИ) перевода.",
      aboutProjectOutlineLabel: "Запланированное содержание:",
      aboutProjectOutlineBody:
        "Последовательный курс термодинамики — от основополагающих принципов до более сложных разделов.",
      aboutProjectStatusBody:
        "Текущий статус: уроки 1–3 завершены на всех языках.",
      aboutBookBody2:
        "Текст излагает термодинамику, начиная с первых принципов. Доказательства приводятся полностью всякий раз, когда они проясняют физику, а многочисленные разобранные примеры дополняют теоретическое изложение.",
      translationWarning:
        "Примечание: эта книга изначально написана на французском языке; данная версия переведена автоматически с помощью Claude Sonnet 4.6.",
      sameAuthorTitle: "От того же автора",
      sameAuthorBody:
        "Квантовая механика — современное введение, сопутствующий курс по квантовой механике.",
      sameAuthorLink: "Читать на quantumlectures.org",
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
    chapters: {
      label: "课程",
      title: "所有课程",
      description: "",
    },
    chapter: {
      chapterLabel: "课程",
      themeLabel: "课程",
      lessonLabel: "课程",
      learningResourceType: "大学课程",
      educationalLevel: "高等教育本科阶段",
      readTime: (t: string) => `阅读时长：${t}`,
      downloadPdf: "↓ 下载 PDF",
      breadcrumbHome: "首页",
      breadcrumbChapters: "课程",
      breadcrumbThemes: "课程",
      prev: "← 上一课",
      next: "下一课 →",
      noteTitle: "提示：",
      noteBody: "这是预览节选。下载完整 PDF 以获取整章内容、练习和解答。",
      tabOnline: "在线阅读",
      tabReferences: "参考资料",
      tabPdf: "PDF 查看器",
      tocTitle: "目录",
      showToc: "显示目录",
      hideToc: "隐藏目录",
      refsEmpty: "此课程尚未添加参考资料。",
      refsEnglishTitle: "英文参考资料",
      refsFrenchTitle: "法文参考资料",
      refsSectionEmpty: "此部分尚未添加链接。",
      contentUnavailable: "此课程内容尚未提供该语言版本。",
      downloadBtn: "↓ 下载",
      pdfFallback: "如果 PDF 无法显示，",
      pdfFallbackLink: "点击此处下载",
      noLessonTitle: "暂无可用课程",
      noLessonBody: "该课程已列入目录结构，但其内容尚未发布。",
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
    glossary: {
      title: "关键词词汇表",
      subtitle: "点击关键词查看所有使用它的课程。",
      allKeywords: "所有关键词",
      relatedLessons: "相关课程",
      noResult: "未找到符合该筛选条件的关键词。",
      lessonEntry: (n: number, title: string) => `第${n}课：${title}`,
    },
    about: {
      label: "关于本书",
      aboutBookTitle: "关于本书",
      bookDetails: "书籍详情",
      detailLabels: { author: "作者", affiliation: "所属机构", edition: "版本", year: "年份" },
      authorTitle: "关于作者",
      authorBioSuffix: "是一位物理学家，任职于",
      authorBioRest:
        "他的研究兴趣包括引力定律、量子力学及其基础，以及作为机器学习任务的符号回归。本书源自他多年在硕士及高年级本科教学中积累的讲义。",
      authorLinksHeading: "个人主页",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "谷歌学术",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "关于本项目",
      aboutProjectLead:
        "本网站和本书仍在建设中，课程和练习将陆续发布。本书由作者以法语撰写；其他语言版本的内容均通过自动化（人工智能）翻译生成。",
      aboutProjectOutlineLabel: "计划内容：",
      aboutProjectOutlineBody: "一门循序渐进的热力学课程，从基本原理到更深入的进阶内容。",
      aboutProjectStatusBody: "当前状态：第1至3课已在所有语言中完成。",
      aboutBookBody2:
        "正文从基本原理出发展开热力学论述。凡有助于澄清物理内涵之处均给出完整证明，并辅以大量已解答的例题来补充理论阐述。",
      translationWarning:
        "提示：本书最初以法语撰写；此版本由 Claude Sonnet 4.6 自动翻译生成。",
      sameAuthorTitle: "同一作者的其他作品",
      sameAuthorBody: "《量子力学——现代导论》，一门关于量子力学的配套课程。",
      sameAuthorLink: "在 quantumlectures.org 阅读",
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
    chapters: {
      label: "レッスン",
      title: "すべてのレッスン",
      description: "",
    },
    chapter: {
      chapterLabel: "レッスン",
      themeLabel: "レッスン",
      lessonLabel: "レッスン",
      learningResourceType: "大学の講義",
      educationalLevel: "高等教育 — 学部課程",
      readTime: (t: string) => `読了目安: ${t}`,
      downloadPdf: "↓ PDF をダウンロード",
      breadcrumbHome: "ホーム",
      breadcrumbChapters: "レッスン",
      breadcrumbThemes: "レッスン",
      prev: "← 前へ",
      next: "次へ →",
      noteTitle: "注記:",
      noteBody:
        "これはプレビュー抜粋です。章全体、演習、解答を含む完全版 PDF をダウンロードしてください。",
      tabOnline: "オンラインで読む",
      tabReferences: "参考文献",
      tabPdf: "PDF ビューア",
      tocTitle: "目次",
      showToc: "目次を表示",
      hideToc: "目次を非表示",
      refsEmpty: "このレッスンにはまだ参考文献が追加されていません。",
      refsEnglishTitle: "英語の参考文献",
      refsFrenchTitle: "フランス語の参考文献",
      refsSectionEmpty: "このセクションにはまだリンクが追加されていません。",
      contentUnavailable: "このレッスンの内容はこの言語ではまだ利用できません。",
      downloadBtn: "↓ ダウンロード",
      pdfFallback: "PDF が表示されない場合は、",
      pdfFallbackLink: "こちらをクリックしてダウンロードしてください",
      noLessonTitle: "利用可能なレッスンがありません",
      noLessonBody: "このレッスンは構成上存在しますが、内容はまだ公開されていません。",
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
    glossary: {
      title: "キーワード用語集",
      subtitle: "キーワードをクリックすると、それを使用しているすべてのレッスンが表示されます。",
      allKeywords: "すべてのキーワード",
      relatedLessons: "関連レッスン",
      noResult: "このフィルターに一致するキーワードは見つかりませんでした。",
      lessonEntry: (n: number, title: string) => `レッスン${n}：${title}`,
    },
    about: {
      label: "本書について",
      aboutBookTitle: "本書について",
      bookDetails: "書誌情報",
      detailLabels: { author: "著者", affiliation: "所属", edition: "版", year: "年" },
      authorTitle: "著者について",
      authorBioSuffix: "の所属先は ",
      authorBioRest:
        "同氏は物理学者であり、研究関心は重力の法則、量子力学とその基礎、そして機械学習の課題としてのシンボリック回帰に及びます。本書は、大学院および学部上級レベルで長年にわたり行われてきた講義ノートをもとに生まれました。",
      authorLinksHeading: "プロフィール",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "プロジェクトについて",
      aboutProjectLead:
        "このサイトと本書は現在開発中です。レッスンと演習は順次追加されていきます。本書は著者によってフランス語で執筆されており、他の言語で提供されるコンテンツは自動（AI）翻訳によるものです。",
      aboutProjectOutlineLabel: "予定されている内容：",
      aboutProjectOutlineBody:
        "基礎原理から、より高度な発展的内容までを扱う、段階的な熱力学のコースです。",
      aboutProjectStatusBody:
        "現在の状況：レッスン1〜3はすべての言語で完成しています。",
      aboutBookBody2:
        "本文は第一原理から熱力学を展開します。物理的な理解を助ける場合には証明を省略せずに示し、多数の解答付き例題が理論的な説明を補完します。",
      translationWarning:
        "注記：本書はもともとフランス語で書かれています。このバージョンは Claude Sonnet 4.6 によって自動的に翻訳されています。",
      sameAuthorTitle: "同じ著者による他の著作",
      sameAuthorBody: "『量子力学——現代的入門』、量子力学に関する姉妹コースです。",
      sameAuthorLink: "quantumlectures.org で読む",
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
    chapters: {
      label: "강의",
      title: "모든 강의",
      description: "",
    },
    chapter: {
      chapterLabel: "강의",
      themeLabel: "강의",
      lessonLabel: "강의",
      learningResourceType: "대학 강의",
      educationalLevel: "고등교육 — 학부 과정",
      readTime: (t: string) => `읽는 시간: ${t}`,
      downloadPdf: "↓ PDF 다운로드",
      breadcrumbHome: "홈",
      breadcrumbChapters: "강의",
      breadcrumbThemes: "강의",
      prev: "← 이전",
      next: "다음 →",
      noteTitle: "참고:",
      noteBody:
        "이것은 미리보기 발췌본입니다. 전체 챕터, 연습문제, 풀이를 보려면 전체 PDF를 다운로드하세요.",
      tabOnline: "온라인으로 읽기",
      tabReferences: "참고 자료",
      tabPdf: "PDF 뷰어",
      tocTitle: "목차",
      showToc: "목차 표시",
      hideToc: "목차 숨기기",
      refsEmpty: "이 강의에는 아직 추가된 참고 자료가 없습니다.",
      refsEnglishTitle: "영어 참고 자료",
      refsFrenchTitle: "프랑스어 참고 자료",
      refsSectionEmpty: "이 섹션에는 아직 추가된 링크가 없습니다.",
      contentUnavailable: "이 강의의 내용은 아직 이 언어로 제공되지 않습니다.",
      downloadBtn: "↓ 다운로드",
      pdfFallback: "PDF가 표시되지 않으면,",
      pdfFallbackLink: "여기를 클릭하여 다운로드하세요",
      noLessonTitle: "이용 가능한 강의 없음",
      noLessonBody: "이 강의는 구조상 존재하지만 아직 내용이 게시되지 않았습니다.",
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
    glossary: {
      title: "키워드 용어집",
      subtitle: "키워드를 클릭하면 이를 사용하는 모든 강의를 볼 수 있습니다.",
      allKeywords: "모든 키워드",
      relatedLessons: "관련 강의",
      noResult: "이 필터에 해당하는 키워드를 찾을 수 없습니다.",
      lessonEntry: (n: number, title: string) => `${n}강: ${title}`,
    },
    about: {
      label: "책 소개",
      aboutBookTitle: "이 책에 대하여",
      bookDetails: "책 정보",
      detailLabels: { author: "저자", affiliation: "소속", edition: "판", year: "연도" },
      authorTitle: "저자 소개",
      authorBioSuffix: "의 소속: ",
      authorBioRest:
        "물리학자로 재직 중이며, 연구 관심 분야는 중력 법칙, 양자역학과 그 기초, 그리고 머신러닝 과제로서의 기호 회귀를 포함합니다. 이 책은 대학원 및 학부 고학년 수준에서 다년간 강의하며 축적된 강의 노트에서 출발했습니다.",
      authorLinksHeading: "프로필",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "프로젝트 소개",
      aboutProjectLead:
        "이 사이트와 책은 현재 개발 중입니다. 강의와 연습문제는 점차적으로 추가될 예정입니다. 이 책은 저자가 프랑스어로 집필했으며, 다른 언어로 제공되는 콘텐츠는 자동(AI) 번역을 통해 제작됩니다.",
      aboutProjectOutlineLabel: "예정된 콘텐츠:",
      aboutProjectOutlineBody: "기초 원리에서부터 더 심화된 내용까지 다루는 단계적인 열역학 강의입니다.",
      aboutProjectStatusBody: "현재 상태: 1강부터 3강까지 모든 언어로 완성되었습니다.",
      aboutBookBody2:
        "본문은 제1원리에서 출발하여 열역학을 전개합니다. 물리적 이해에 도움이 될 때는 증명을 온전히 제시하며, 다수의 풀이 예제가 이론적 설명을 보완합니다.",
      translationWarning:
        "안내: 이 책은 원래 프랑스어로 작성되었습니다. 이 버전은 Claude Sonnet 4.6을 통해 자동으로 번역되었습니다.",
      sameAuthorTitle: "동일 저자의 다른 저서",
      sameAuthorBody: "《양자역학 — 현대적 입문》, 양자역학에 관한 자매 강의입니다.",
      sameAuthorLink: "quantumlectures.org 에서 읽기",
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
    chapters: {
      label: "पाठ",
      title: "सभी पाठ",
      description: "",
    },
    chapter: {
      chapterLabel: "पाठ",
      themeLabel: "पाठ",
      lessonLabel: "पाठ",
      learningResourceType: "विश्वविद्यालय पाठ्यक्रम",
      educationalLevel: "उच्च शिक्षा — स्नातक स्तर",
      readTime: (t: string) => `${t} पढ़ने का समय`,
      downloadPdf: "↓ PDF डाउनलोड करें",
      breadcrumbHome: "होम",
      breadcrumbChapters: "पाठ",
      breadcrumbThemes: "पाठ",
      prev: "← पिछला",
      next: "अगला →",
      noteTitle: "नोट:",
      noteBody:
        "यह एक पूर्वावलोकन अंश है। पूरे अध्याय, अभ्यास और समाधान के लिए पूर्ण PDF डाउनलोड करें।",
      tabOnline: "ऑनलाइन पढ़ें",
      tabReferences: "संदर्भ",
      tabPdf: "PDF व्यूअर",
      tocTitle: "विषय-सूची",
      showToc: "विषय-सूची दिखाएँ",
      hideToc: "विषय-सूची छिपाएँ",
      refsEmpty: "इस पाठ के लिए अभी तक कोई संदर्भ नहीं जोड़ा गया है।",
      refsEnglishTitle: "अंग्रेज़ी संदर्भ",
      refsFrenchTitle: "फ़्रेंच संदर्भ",
      refsSectionEmpty: "इस अनुभाग में अभी तक कोई लिंक नहीं जोड़ा गया है।",
      contentUnavailable: "इस पाठ की सामग्री अभी इस भाषा में उपलब्ध नहीं है।",
      downloadBtn: "↓ डाउनलोड करें",
      pdfFallback: "यदि PDF प्रदर्शित नहीं होता है,",
      pdfFallbackLink: "इसे डाउनलोड करने के लिए यहाँ क्लिक करें",
      noLessonTitle: "कोई पाठ उपलब्ध नहीं",
      noLessonBody:
        "यह पाठ संरचना में सूचीबद्ध है, लेकिन इसकी सामग्री अभी प्रकाशित नहीं हुई है।",
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
    glossary: {
      title: "मुख्य शब्दों की शब्दावली",
      subtitle: "किसी मुख्य शब्द पर क्लिक करें ताकि उसका उपयोग करने वाले सभी पाठ देख सकें।",
      allKeywords: "सभी मुख्य शब्द",
      relatedLessons: "संबंधित पाठ",
      noResult: "इस फ़िल्टर के लिए कोई मुख्य शब्द नहीं मिला।",
      lessonEntry: (n: number, title: string) => `पाठ ${n}: ${title}`,
    },
    about: {
      label: "पुस्तक के बारे में",
      aboutBookTitle: "इस पुस्तक के बारे में",
      bookDetails: "पुस्तक विवरण",
      detailLabels: { author: "लेखक", affiliation: "संबद्धता", edition: "संस्करण", year: "वर्ष" },
      authorTitle: "लेखक के बारे में",
      authorBioSuffix: "— संबद्धता: ",
      authorBioRest:
        "एक भौतिक विज्ञानी हैं। उनकी शोध रुचियों में गुरुत्वाकर्षण के नियम, क्वांटम यांत्रिकी और उसकी नींव, तथा मशीन लर्निंग कार्य के रूप में सांकेतिक समाश्रयण शामिल हैं। यह पुस्तक स्नातकोत्तर एवं उन्नत स्नातक स्तर पर वर्षों के अध्यापन के दौरान तैयार किए गए व्याख्यान नोट्स से विकसित हुई है।",
      authorLinksHeading: "प्रोफ़ाइल",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "परियोजना के बारे में",
      aboutProjectLead:
        "यह साइट और पुस्तक विकासाधीन हैं। पाठ और अभ्यास धीरे-धीरे जोड़े जाएंगे। यह पुस्तक लेखक द्वारा फ़्रेंच में लिखी गई है; अन्य भाषाओं में उपलब्ध सामग्री स्वचालित (AI) अनुवाद द्वारा तैयार की जाती है।",
      aboutProjectOutlineLabel: "नियोजित सामग्री:",
      aboutProjectOutlineBody:
        "मूल सिद्धांतों से लेकर अधिक उन्नत विकासों तक, ऊष्मागतिकी का एक क्रमिक पाठ्यक्रम।",
      aboutProjectStatusBody:
        "वर्तमान स्थिति: पाठ 1 से 3 सभी भाषाओं में पूर्ण हो चुके हैं।",
      aboutBookBody2:
        "यह पाठ मूल सिद्धांतों से ऊष्मागतिकी को विकसित करता है। जहाँ भी भौतिकी को स्पष्ट करने के लिए आवश्यक हो, प्रमाण पूर्ण रूप से दिए गए हैं, और कई हल किए गए उदाहरण सैद्धांतिक विवरण को पूरक करते हैं।",
      translationWarning:
        "सूचना: यह पुस्तक मूल रूप से फ़्रेंच में लिखी गई है; यह संस्करण Claude Sonnet 4.6 द्वारा स्वचालित रूप से अनूदित है।",
      sameAuthorTitle: "इसी लेखक की अन्य पुस्तक",
      sameAuthorBody: "क्वांटम यांत्रिकी — एक आधुनिक परिचय, क्वांटम यांत्रिकी पर एक साथी पाठ्यक्रम।",
      sameAuthorLink: "quantumlectures.org पर पढ़ें",
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
    chapters: {
      label: "BÀI HỌC",
      title: "Tất cả bài học",
      description: "",
    },
    chapter: {
      chapterLabel: "BÀI HỌC",
      themeLabel: "BÀI HỌC",
      lessonLabel: "BÀI HỌC",
      learningResourceType: "Khóa học đại học",
      educationalLevel: "Giáo dục đại học — bậc cử nhân",
      readTime: (t: string) => `${t} đọc`,
      downloadPdf: "↓ Tải PDF",
      breadcrumbHome: "Trang chủ",
      breadcrumbChapters: "Bài học",
      breadcrumbThemes: "Bài học",
      prev: "← Trước",
      next: "Tiếp theo →",
      noteTitle: "Lưu ý:",
      noteBody:
        "Đây là đoạn trích xem trước. Hãy tải PDF đầy đủ để có toàn bộ chương, bài tập và lời giải.",
      tabOnline: "Đọc trực tuyến",
      tabReferences: "Tài liệu tham khảo",
      tabPdf: "Trình xem PDF",
      tocTitle: "Mục lục",
      showToc: "Hiện mục lục",
      hideToc: "Ẩn mục lục",
      refsEmpty: "Chưa có tài liệu tham khảo nào được thêm cho bài học này.",
      refsEnglishTitle: "Tài liệu tham khảo tiếng Anh",
      refsFrenchTitle: "Tài liệu tham khảo tiếng Pháp",
      refsSectionEmpty: "Chưa có liên kết nào được thêm vào phần này.",
      contentUnavailable: "Nội dung bài học này chưa có sẵn bằng ngôn ngữ này.",
      downloadBtn: "↓ Tải xuống",
      pdfFallback: "Nếu PDF không hiển thị,",
      pdfFallbackLink: "nhấp vào đây để tải xuống",
      noLessonTitle: "Không có bài học nào",
      noLessonBody: "Bài học này có trong cấu trúc, nhưng nội dung chưa được xuất bản.",
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
    glossary: {
      title: "Bảng chú giải từ khóa",
      subtitle: "Nhấp vào một từ khóa để xem tất cả các bài học sử dụng nó.",
      allKeywords: "Tất cả từ khóa",
      relatedLessons: "Bài học liên quan",
      noResult: "Không tìm thấy từ khóa nào cho bộ lọc này.",
      lessonEntry: (n: number, title: string) => `Bài ${n}: ${title}`,
    },
    about: {
      label: "GIỚI THIỆU SÁCH",
      aboutBookTitle: "Về cuốn sách này",
      bookDetails: "Thông tin sách",
      detailLabels: { author: "Tác giả", affiliation: "Đơn vị công tác", edition: "Ấn bản", year: "Năm" },
      authorTitle: "Về tác giả",
      authorBioSuffix: "là nhà vật lý tại ",
      authorBioRest:
        "Các mối quan tâm nghiên cứu của ông bao gồm các định luật hấp dẫn, cơ học lượng tử và nền tảng của nó, cũng như hồi quy ký hiệu (symbolic regression) như một bài toán học máy. Cuốn sách này được phát triển từ các ghi chú bài giảng được xây dựng qua nhiều năm giảng dạy ở bậc sau đại học và đại học nâng cao.",
      authorLinksHeading: "Hồ sơ",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Về dự án",
      aboutProjectLead:
        "Trang web này và cuốn sách đang trong quá trình phát triển. Các bài học và bài tập sẽ được bổ sung dần dần. Cuốn sách được tác giả viết bằng tiếng Pháp; nội dung được cung cấp bằng các ngôn ngữ khác được tạo ra thông qua dịch thuật tự động (AI).",
      aboutProjectOutlineLabel: "Nội dung dự kiến:",
      aboutProjectOutlineBody:
        "Một khóa học nhiệt động lực học theo trình tự, từ các nguyên lý nền tảng đến những phát triển nâng cao hơn.",
      aboutProjectStatusBody:
        "Tình trạng hiện tại: các bài 1 đến 3 đã hoàn thiện ở tất cả các ngôn ngữ.",
      aboutBookBody2:
        "Văn bản trình bày nhiệt động lực học xuất phát từ các nguyên lý đầu tiên. Các chứng minh được trình bày đầy đủ bất cứ khi nào chúng làm rõ vật lý, và nhiều ví dụ có lời giải bổ sung cho phần trình bày lý thuyết.",
      translationWarning:
        "Lưu ý: cuốn sách này ban đầu được viết bằng tiếng Pháp; phiên bản này được dịch tự động bằng Claude Sonnet 4.6.",
      sameAuthorTitle: "Cùng tác giả",
      sameAuthorBody:
        "Cơ học lượng tử — Một dẫn nhập hiện đại, một khóa học đồng hành về cơ học lượng tử.",
      sameAuthorLink: "Đọc tại quantumlectures.org",
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
    chapters: {
      label: "الدروس",
      title: "جميع الدروس",
      description: "",
    },
    chapter: {
      chapterLabel: "درس",
      themeLabel: "درس",
      lessonLabel: "درس",
      learningResourceType: "مقرر جامعي",
      educationalLevel: "التعليم العالي — مرحلة البكالوريوس",
      readTime: (t: string) => `وقت القراءة: ${t}`,
      downloadPdf: "↓ تنزيل PDF",
      breadcrumbHome: "الرئيسية",
      breadcrumbChapters: "الدروس",
      breadcrumbThemes: "الدروس",
      prev: "→ السابق",
      next: "التالي ←",
      noteTitle: "ملاحظة:",
      noteBody:
        "هذا مقتطف للمعاينة. نزّل ملف PDF الكامل للحصول على الفصل بأكمله والتمارين والحلول.",
      tabOnline: "القراءة عبر الإنترنت",
      tabReferences: "المراجع",
      tabPdf: "عارض PDF",
      tocTitle: "جدول المحتويات",
      showToc: "إظهار جدول المحتويات",
      hideToc: "إخفاء جدول المحتويات",
      refsEmpty: "لم تتم إضافة أي مراجع لهذا الدرس بعد.",
      refsEnglishTitle: "مراجع بالإنجليزية",
      refsFrenchTitle: "مراجع بالفرنسية",
      refsSectionEmpty: "لم تتم إضافة أي رابط في هذا القسم بعد.",
      contentUnavailable: "محتوى هذا الدرس غير متاح بعد بهذه اللغة.",
      downloadBtn: "↓ تنزيل",
      pdfFallback: "إذا لم يظهر ملف PDF،",
      pdfFallbackLink: "انقر هنا لتنزيله",
      noLessonTitle: "لا يوجد درس متاح",
      noLessonBody: "هذا الدرس مدرج في الهيكل، لكن محتواه لم يُنشر بعد.",
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
    glossary: {
      title: "قاموس الكلمات المفتاحية",
      subtitle: "انقر على كلمة مفتاحية لعرض جميع الدروس التي تستخدمها.",
      allKeywords: "جميع الكلمات المفتاحية",
      relatedLessons: "الدروس ذات الصلة",
      noResult: "لم يتم العثور على أي كلمة مفتاحية لهذا الفلتر.",
      lessonEntry: (n: number, title: string) => `الدرس ${n}: ${title}`,
    },
    about: {
      label: "عن الكتاب",
      aboutBookTitle: "عن هذا الكتاب",
      bookDetails: "تفاصيل الكتاب",
      detailLabels: { author: "المؤلف", affiliation: "الانتماء المؤسسي", edition: "الطبعة", year: "السنة" },
      authorTitle: "عن المؤلف",
      authorBioSuffix: "فيزيائي في ",
      authorBioRest:
        "تشمل اهتماماته البحثية قوانين الجاذبية، وميكانيكا الكم وأسسها، والانحدار الرمزي بوصفه مهمة من مهام التعلم الآلي. نشأ هذا الكتاب من مذكرات محاضرات طُوّرت على مدى سنوات عديدة من التدريس على مستوى الدراسات العليا والمرحلة الجامعية المتقدمة.",
      authorLinksHeading: "الملفات الشخصية",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "عن المشروع",
      aboutProjectLead:
        "هذا الموقع وهذا الكتاب قيد التطوير. سيتم إضافة الدروس والتمارين تدريجياً. الكتاب مكتوب باللغة الفرنسية بقلم المؤلف؛ أما المحتويات المتاحة باللغات الأخرى فهي مُنتَجة عبر الترجمة الآلية (بالذكاء الاصطناعي).",
      aboutProjectOutlineLabel: "المحتوى المخطط له:",
      aboutProjectOutlineBody:
        "مقرر تدريجي في الديناميكا الحرارية، من المبادئ التأسيسية إلى التطورات الأكثر تقدماً.",
      aboutProjectStatusBody:
        "الوضع الحالي: الدروس من 1 إلى 3 مكتملة بجميع اللغات.",
      aboutBookBody2:
        "يطوّر النص الديناميكا الحرارية انطلاقاً من المبادئ الأولى. تُقدَّم البراهين كاملة كلما أوضحت الجانب الفيزيائي، وتُكمّل العديد من الأمثلة المحلولة العرض النظري.",
      translationWarning:
        "تنبيه: هذا الكتاب مكتوب أصلاً باللغة الفرنسية؛ وتُترجم هذه النسخة تلقائياً باستخدام Claude Sonnet 4.6.",
      sameAuthorTitle: "من نفس المؤلف",
      sameAuthorBody: "ميكانيكا الكم — مقدمة حديثة، مقرر مصاحب حول ميكانيكا الكم.",
      sameAuthorLink: "اقرأه على quantumlectures.org",
    },
  },
  id: {
    book: {
      title: "Termodinamika Dasar dan Lanjut",
      subtitle: "",
      description:
        "Bagian pertama adalah kuliah tingkat sarjana dengan banyak latihan beserta penyelesaiannya. Bagian ini mencakup kosakata, formalisme, dan prinsip-prinsip dasar termodinamika, kajian gas dan transisi fase, serta mesin kalor dan siklus termal. Bagian-bagian berikutnya membahas topik yang lebih lanjut: geometri diferensial dalam termodinamika, demon Maxwell, endoreversibilitas, fisika iklim, termoelektrisitas, termodinamika dekat kesetimbangan (hubungan Onsager, dan lain-lain), serta termodinamika kuantum.",
      edition: "Edisi Pertama",
    },
    nav: {
      home: "Beranda",
      chapters: "Pelajaran",
      exercises: "Latihan",
      quiz: "Kuis",
      glossary: "Glosarium",
      about: "Tentang Buku",
    },
    chapters: {
      label: "PELAJARAN",
      title: "Semua Pelajaran",
      description: "",
    },
    chapter: {
      chapterLabel: "PELAJARAN",
      themeLabel: "PELAJARAN",
      lessonLabel: "PELAJARAN",
      learningResourceType: "Kuliah universitas",
      educationalLevel: "Pendidikan tinggi — Sarjana",
      readTime: (t: string) => `Waktu baca: ${t}`,
      downloadPdf: "↓ Unduh PDF",
      breadcrumbHome: "Beranda",
      breadcrumbChapters: "Pelajaran",
      breadcrumbThemes: "Pelajaran",
      prev: "← Sebelumnya",
      next: "Berikutnya →",
      noteTitle: "Catatan:",
      noteBody:
        "Ini adalah kutipan pratinjau. Unduh PDF lengkap untuk bab utuh, latihan, dan penyelesaiannya.",
      tabOnline: "Baca Daring",
      tabReferences: "Referensi",
      tabPdf: "Penampil PDF",
      tocTitle: "Daftar Isi",
      showToc: "Tampilkan daftar isi",
      hideToc: "Sembunyikan daftar isi",
      refsEmpty: "Belum ada referensi yang ditambahkan untuk pelajaran ini.",
      refsEnglishTitle: "Referensi berbahasa Inggris",
      refsFrenchTitle: "Referensi berbahasa Prancis",
      refsSectionEmpty: "Belum ada tautan yang ditambahkan di bagian ini.",
      contentUnavailable: "Konten pelajaran ini belum tersedia dalam bahasa ini.",
      downloadBtn: "↓ Unduh",
      pdfFallback: "Jika PDF tidak tampil,",
      pdfFallbackLink: "klik di sini untuk mengunduhnya",
      noLessonTitle: "Tidak ada pelajaran yang tersedia",
      noLessonBody: "Pelajaran ini terdaftar dalam struktur, tetapi kontennya belum dipublikasikan.",
    },
    home: {
      badge: "Edisi Daring Gratis",
      readOnline: "Baca Daring →",
      aboutBook: "Tentang Buku",
      chapterPrefix: "Bab",
      themePrefix: "Pelajaran",
      stats: { chapters: "Pelajaran", edition: "Edisi", format: "Format", formatValue: "Web + PDF" },
      contentsLabel: "Daftar Isi",
      exploreTitle: "Jelajahi Pelajaran",
      readTheme: "Buka pelajaran →",
      readLesson: "Baca pelajaran →",
      readChapter: "Baca bab →",
      fullBookDownload: "Unduh edisi lengkap (segera hadir)",
      features: [
        {
          icon: "∫",
          title: "Penyajian Matematika Lengkap",
          body: "Semua persamaan ditampilkan dengan KaTeX — matematika setajam kualitas LaTeX langsung di peramban Anda.",
        },
        {
          icon: "⬇",
          title: "Unduhan PDF",
          body: "Setiap bab tersedia sebagai PDF yang dapat diunduh untuk belajar secara luring.",
        },
        {
          icon: "◎",
          title: "Akses Gratis dan Terbuka",
          body: "Teks lengkap tersedia gratis secara daring. Tanpa paywall dan tanpa perlu mendaftar.",
        },
      ],
    },
    footer: {
      navigation: "Navigasi",
      home: "Beranda",
      allChapters: "Semua Pelajaran",
      exercises: "Latihan",
      aboutBook: "Tentang Buku",
      author: "Penulis",
      copyright: (year: string, author: string) => `© ${year} ${author}. Hak cipta dilindungi.`,
    },
    glossary: {
      title: "Glosarium Kata Kunci",
      subtitle: "Klik kata kunci untuk melihat semua pelajaran yang menggunakannya.",
      allKeywords: "Semua kata kunci",
      relatedLessons: "Pelajaran terkait",
      noResult: "Tidak ada kata kunci yang ditemukan untuk filter ini.",
      lessonEntry: (n: number, title: string) => `Pelajaran ${n}: ${title}`,
    },
    about: {
      label: "TENTANG BUKU",
      aboutBookTitle: "Tentang Buku Ini",
      bookDetails: "Detail Buku",
      detailLabels: { author: "Penulis", affiliation: "Afiliasi", edition: "Edisi", year: "Tahun" },
      authorTitle: "Tentang Penulis",
      authorBioSuffix: "adalah fisikawan di ",
      authorBioRest:
        "Minat penelitiannya meliputi hukum-hukum gravitasi, mekanika kuantum beserta landasannya, dan regresi simbolik sebagai tugas pembelajaran mesin. Buku ini berkembang dari catatan kuliah yang disusun selama bertahun-tahun mengajar pada tingkat pascasarjana dan sarjana lanjut.",
      authorLinksHeading: "Profil",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Tentang Proyek",
      aboutProjectLead:
        "Situs dan buku ini sedang dikembangkan. Pelajaran dan latihan akan ditambahkan secara bertahap. Buku ini ditulis dalam bahasa Prancis oleh penulis; konten dalam bahasa lain dihasilkan melalui penerjemahan otomatis (AI).",
      aboutProjectOutlineLabel: "Konten yang direncanakan:",
      aboutProjectOutlineBody:
        "Kuliah termodinamika yang disusun bertahap, dari prinsip-prinsip dasar hingga perkembangan yang lebih lanjut.",
      aboutProjectStatusBody:
        "Status saat ini: pelajaran 1 sampai 3 telah selesai dalam semua bahasa.",
      aboutBookBody2:
        "Buku ini mengembangkan termodinamika dari prinsip-prinsip pertama. Pembuktian diberikan secara lengkap setiap kali dapat memperjelas fisikanya, dan banyak contoh dengan penyelesaian melengkapi uraian teoretis.",
      translationWarning:
        "Peringatan: buku ini pada awalnya ditulis dalam bahasa Prancis; versi ini diterjemahkan secara otomatis dengan bantuan kecerdasan buatan.",
      sameAuthorTitle: "Dari Penulis yang Sama",
      sameAuthorBody:
        "Mekanika Kuantum — Pengantar Modern, kuliah pendamping mengenai mekanika kuantum.",
      sameAuthorLink: "Baca di quantumlectures.org",
    },
  },
  tr: {
    book: {
      title: "Temel ve İleri\nTermodinamik",
      subtitle: "",
      description:
        "Birinci bölüm, çok sayıda çözümlü alıştırma içeren bir lisans dersidir. Termodinamiğin kavramlarını, biçimsel yapısını ve temel ilkelerini; gazları ve faz geçişlerini; ısı makinelerini ve termal çevrimleri kapsar. Sonraki bölümlerde daha ileri konular ele alınır: termodinamikte diferansiyel geometri, Maxwell'in cini, endoreversibilite, iklim fiziği, termoelektrik, dengeye yakın termodinamik (Onsager bağıntıları vb.) ve kuantum termodinamiği.",
      edition: "Birinci Baskı",
    },
    nav: {
      home: "Ana Sayfa",
      chapters: "Dersler",
      exercises: "Alıştırmalar",
      quiz: "Test",
      glossary: "Sözlük",
      about: "Kitap Hakkında",
    },
    chapters: {
      label: "DERSLER",
      title: "Tüm Dersler",
      description: "",
    },
    chapter: {
      chapterLabel: "DERS",
      themeLabel: "DERS",
      lessonLabel: "DERS",
      learningResourceType: "Üniversite dersi",
      educationalLevel: "Yükseköğretim — Lisans",
      readTime: (t: string) => `${t} okuma`,
      downloadPdf: "↓ PDF'yi indir",
      breadcrumbHome: "Ana Sayfa",
      breadcrumbChapters: "Dersler",
      breadcrumbThemes: "Dersler",
      prev: "← Önceki",
      next: "Sonraki →",
      noteTitle: "Not:",
      noteBody:
        "Bu bir önizleme alıntısıdır. Bölümün tamamını, alıştırmaları ve çözümleri görmek için tam PDF'yi indirin.",
      tabOnline: "Çevrimiçi Oku",
      tabReferences: "Kaynaklar",
      tabPdf: "PDF Görüntüleyici",
      tocTitle: "İçindekiler",
      showToc: "İçindekileri göster",
      hideToc: "İçindekileri gizle",
      refsEmpty: "Bu ders için henüz kaynak eklenmedi.",
      refsEnglishTitle: "İngilizce kaynaklar",
      refsFrenchTitle: "Fransızca kaynaklar",
      refsSectionEmpty: "Bu bölüme henüz bağlantı eklenmedi.",
      contentUnavailable: "Bu dersin içeriği bu dilde henüz mevcut değil.",
      downloadBtn: "↓ İndir",
      pdfFallback: "PDF görüntülenmezse,",
      pdfFallbackLink: "indirmek için buraya tıklayın",
      noLessonTitle: "Kullanılabilir ders yok",
      noLessonBody: "Bu ders yapıda yer almaktadır, ancak içeriği henüz yayımlanmamıştır.",
    },
    home: {
      badge: "Ücretsiz Çevrimiçi Baskı",
      readOnline: "Çevrimiçi Oku →",
      aboutBook: "Kitap Hakkında",
      chapterPrefix: "Böl.",
      themePrefix: "Ders",
      stats: { chapters: "Dersler", edition: "Baskı", format: "Biçim", formatValue: "Web + PDF" },
      contentsLabel: "İçindekiler",
      exploreTitle: "Dersleri Keşfedin",
      readTheme: "Dersi aç →",
      readLesson: "Dersi oku →",
      readChapter: "Bölümü oku →",
      fullBookDownload: "Tam baskıyı indir (yakında)",
      features: [
        {
          icon: "∫",
          title: "Eksiksiz Matematiksel Gösterim",
          body: "Tüm denklemler KaTeX ile görüntülenir — tarayıcınızda net, LaTeX kalitesinde matematik.",
        },
        {
          icon: "⬇",
          title: "PDF İndirmeleri",
          body: "Her bölüm, çevrimdışı çalışma için indirilebilir PDF olarak sunulur.",
        },
        {
          icon: "◎",
          title: "Ücretsiz ve Açık Erişim",
          body: "Metnin tamamına çevrimiçi ve ücretsiz erişebilirsiniz. Ödeme duvarı ve kayıt zorunluluğu yoktur.",
        },
      ],
    },
    footer: {
      navigation: "Gezinme",
      home: "Ana Sayfa",
      allChapters: "Tüm Dersler",
      exercises: "Alıştırmalar",
      aboutBook: "Kitap Hakkında",
      author: "Yazar",
      copyright: (year: string, author: string) => `© ${year} ${author}. Tüm hakları saklıdır.`,
    },
    glossary: {
      title: "Anahtar Kavramlar Sözlüğü",
      subtitle: "Bir anahtar kavrama tıklayarak kullanıldığı tüm dersleri görün.",
      allKeywords: "Tüm anahtar kavramlar",
      relatedLessons: "İlgili dersler",
      noResult: "Bu filtreye uygun anahtar kavram bulunamadı.",
      lessonEntry: (n: number, title: string) => `Ders ${n}: ${title}`,
    },
    about: {
      label: "KİTAP HAKKINDA",
      aboutBookTitle: "Bu Kitap Hakkında",
      bookDetails: "Kitap Bilgileri",
      detailLabels: { author: "Yazar", affiliation: "Kurum", edition: "Baskı", year: "Yıl" },
      authorTitle: "Yazar Hakkında",
      authorBioSuffix: "şu kurumda fizikçidir: ",
      authorBioRest:
        "Araştırma alanları kütleçekim yasalarını, kuantum mekaniğini ve temellerini, ayrıca bir makine öğrenmesi görevi olarak sembolik regresyonu kapsar. Bu kitap, lisansüstü ve ileri lisans düzeyinde uzun yıllar boyunca geliştirilen ders notlarından doğmuştur.",
      authorLinksHeading: "Profiller",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Proje Hakkında",
      aboutProjectLead:
        "Bu site ve kitap geliştirme aşamasındadır. Dersler ve alıştırmalar zaman içinde eklenecektir. Kitap yazar tarafından Fransızca kaleme alınmakta; diğer dillerde sunulan içerikler otomatik (yapay zekâ destekli) çeviriyle üretilmektedir.",
      aboutProjectOutlineLabel: "Planlanan içerik:",
      aboutProjectOutlineBody:
        "Temel ilkelerden daha ileri gelişmelere uzanan aşamalı bir termodinamik dersi.",
      aboutProjectStatusBody:
        "Güncel durum: 1'den 3'e kadar olan dersler tüm dillerde tamamlandı.",
      aboutBookBody2:
        "Metin, termodinamiği temel ilkelerden başlayarak geliştirir. Fiziği açıklığa kavuşturduğu durumlarda kanıtlar eksiksiz verilir; çok sayıda çözümlü örnek de kuramsal anlatımı tamamlar.",
      translationWarning:
        "Uyarı: Bu kitap aslında Fransızca yazılmıştır; bu sürüm yapay zekâ yardımıyla otomatik olarak çevrilmiştir.",
      sameAuthorTitle: "Aynı Yazardan",
      sameAuthorBody:
        "Kuantum Mekaniği — Modern Bir Giriş, kuantum mekaniği üzerine tamamlayıcı bir ders.",
      sameAuthorLink: "quantumlectures.org adresinde okuyun",
    },
  },
  bn: {
    book: {
      title: "প্রাথমিক ও উন্নত\nতাপগতিবিদ্যা",
      subtitle: "",
      description:
        "প্রথম অংশটি একটি স্নাতক স্তরের কোর্স, যাতে রয়েছে বহু সমাধানকৃত অনুশীলনী, এবং যা তাপগতিবিদ্যার শব্দভাণ্ডার, আকারভঙ্গি ও মৌলিক নীতি, গ্যাস ও দশা পরিবর্তনের অধ্যয়ন, এবং তাপ ইঞ্জিন ও তাপীয় চক্র নিয়ে আলোচনা করে। পরবর্তী অংশগুলিতে আরও উচ্চতর বিষয় অন্বেষণ করা হয়েছে: তাপগতিবিদ্যায় অন্তরক জ্যামিতি, ম্যাক্সওয়েলের দানব, এন্ডোরিভার্সিবিলিটি, জলবায়ু পদার্থবিজ্ঞান, তাপবিদ্যুৎ, প্রায়-সাম্যাবস্থার তাপগতিবিদ্যা (অনসাগার সম্পর্ক প্রভৃতি), এবং কোয়ান্টাম তাপগতিবিদ্যা।",
      edition: "প্রথম সংস্করণ",
    },
    nav: {
      home: "হোম",
      chapters: "পাঠ",
      exercises: "অনুশীলনী",
      quiz: "কুইজ",
      glossary: "শব্দকোষ",
      about: "বইটি সম্পর্কে",
    },
    chapters: {
      label: "পাঠ",
      title: "সমস্ত পাঠ",
      description: "",
    },
    chapter: {
      chapterLabel: "পাঠ",
      themeLabel: "পাঠ",
      lessonLabel: "পাঠ",
      learningResourceType: "বিশ্ববিদ্যালয় পাঠ",
      educationalLevel: "উচ্চশিক্ষা — স্নাতক পর্যায়",
      readTime: (t: string) => `পড়ার সময়: ${t}`,
      downloadPdf: "↓ PDF ডাউনলোড করুন",
      breadcrumbHome: "হোম",
      breadcrumbChapters: "পাঠ",
      breadcrumbThemes: "পাঠ",
      prev: "← পূর্ববর্তী",
      next: "পরবর্তী →",
      noteTitle: "নোট:",
      noteBody:
        "এটি একটি পূর্বরূপ অংশ। সম্পূর্ণ অধ্যায়, অনুশীলনী ও সমাধানের জন্য পূর্ণ PDF ডাউনলোড করুন।",
      tabOnline: "অনলাইনে পড়ুন",
      tabReferences: "তথ্যসূত্র",
      tabPdf: "PDF ভিউয়ার",
      tocTitle: "সূচিপত্র",
      showToc: "সূচিপত্র দেখান",
      hideToc: "সূচিপত্র লুকান",
      refsEmpty: "এই পাঠের জন্য এখনও কোনো তথ্যসূত্র যোগ করা হয়নি।",
      refsEnglishTitle: "ইংরেজি তথ্যসূত্র",
      refsFrenchTitle: "ফরাসি তথ্যসূত্র",
      refsSectionEmpty: "এই বিভাগে এখনও কোনো লিঙ্ক যোগ করা হয়নি।",
      contentUnavailable:
        "এই পাঠের বিষয়বস্তু এই ভাষায় এখনও উপলব্ধ নয়।",
      downloadBtn: "↓ ডাউনলোড করুন",
      pdfFallback: "যদি PDF প্রদর্শিত না হয়,",
      pdfFallbackLink: "ডাউনলোড করতে এখানে ক্লিক করুন",
      noLessonTitle: "কোনো পাঠ উপলব্ধ নেই",
      noLessonBody:
        "এই পাঠটি কাঠামোতে তালিকাভুক্ত আছে, কিন্তু এর বিষয়বস্তু এখনও প্রকাশিত হয়নি।",
    },
    home: {
      badge: "বিনামূল্যে অনলাইন সংস্করণ",
      readOnline: "অনলাইনে পড়ুন →",
      aboutBook: "বইটি সম্পর্কে",
      chapterPrefix: "অধ্যায়",
      themePrefix: "পাঠ",
      stats: { chapters: "পাঠ", edition: "সংস্করণ", format: "ফরম্যাট", formatValue: "ওয়েব + PDF" },
      contentsLabel: "সূচি",
      exploreTitle: "পাঠগুলি অন্বেষণ করুন",
      readTheme: "পাঠ খুলুন →",
      readLesson: "পাঠ পড়ুন →",
      readChapter: "অধ্যায় পড়ুন →",
      fullBookDownload: "সম্পূর্ণ সংস্করণ ডাউনলোড করুন (শীঘ্রই)",
      features: [
        {
          icon: "∫",
          title: "সম্পূর্ণ গাণিতিক উপস্থাপন",
          body: "সমস্ত সমীকরণ KaTeX দিয়ে রেন্ডার করা হয় — আপনার ব্রাউজারে নিখুঁত LaTeX-মানের গণিত।",
        },
        {
          icon: "⬇",
          title: "PDF ডাউনলোড",
          body: "অফলাইনে অধ্যয়নের জন্য প্রতিটি অধ্যায় ডাউনলোডযোগ্য PDF হিসেবে উপলব্ধ।",
        },
        {
          icon: "◎",
          title: "মুক্ত ও বিনামূল্যে প্রবেশাধিকার",
          body: "সম্পূর্ণ পাঠ্য বিনামূল্যে অনলাইনে উপলব্ধ। কোনো পেওয়াল নেই, নিবন্ধনের প্রয়োজন নেই।",
        },
      ],
    },
    footer: {
      navigation: "নেভিগেশন",
      home: "হোম",
      allChapters: "সমস্ত পাঠ",
      exercises: "অনুশীলনী",
      aboutBook: "বইটি সম্পর্কে",
      author: "লেখক",
      copyright: (year: string, author: string) => `© ${year} ${author}. সর্বস্বত্ব সংরক্ষিত।`,
    },
    glossary: {
      title: "মূল শব্দকোষ",
      subtitle: "কোনো মূল শব্দে ক্লিক করে সেটি ব্যবহারকারী সমস্ত পাঠ দেখুন।",
      allKeywords: "সমস্ত মূল শব্দ",
      relatedLessons: "সম্পর্কিত পাঠ",
      noResult: "এই ফিল্টারের জন্য কোনো মূল শব্দ পাওয়া যায়নি।",
      lessonEntry: (n: number, title: string) => `পাঠ ${n}: ${title}`,
    },
    about: {
      label: "বইটি সম্পর্কে",
      aboutBookTitle: "এই বই সম্পর্কে",
      bookDetails: "বইয়ের বিবরণ",
      detailLabels: { author: "লেখক", affiliation: "প্রতিষ্ঠান", edition: "সংস্করণ", year: "বছর" },
      authorTitle: "লেখক সম্পর্কে",
      authorBioSuffix: "একজন পদার্থবিদ, তিনি কর্মরত আছেন ",
      authorBioRest:
        "তাঁর গবেষণার আগ্রহের মধ্যে রয়েছে মহাকর্ষের সূত্র, কোয়ান্টাম বলবিদ্যা ও তার ভিত্তি, এবং মেশিন লার্নিং-এর একটি কাজ হিসেবে সিম্বলিক রিগ্রেশন। এই বইটি স্নাতকোত্তর ও উচ্চতর স্নাতক স্তরে বহু বছরের শিক্ষকতার মধ্য দিয়ে গড়ে ওঠা পাঠ্যনোট থেকে বিকশিত হয়েছে।",
      authorLinksHeading: "প্রোফাইল",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "প্রকল্প সম্পর্কে",
      aboutProjectLead:
        "এই ওয়েবসাইট এবং বইটি উন্নয়নাধীন। পাঠ ও অনুশীলনী ধীরে ধীরে যোগ করা হবে। বইটি লেখক দ্বারা ফরাসি ভাষায় রচিত; অন্যান্য ভাষায় প্রদত্ত বিষয়বস্তু স্বয়ংক্রিয় (AI) অনুবাদের মাধ্যমে তৈরি।",
      aboutProjectOutlineLabel: "পরিকল্পিত বিষয়বস্তু:",
      aboutProjectOutlineBody:
        "তাপগতিবিদ্যার একটি ক্রমবর্ধমান কোর্স, মৌলিক নীতি থেকে শুরু করে আরও উচ্চতর বিকাশ পর্যন্ত।",
      aboutProjectStatusBody:
        "বর্তমান অবস্থা: বাংলা ভাষায় ১ থেকে ৪ নম্বর পাঠ উপলব্ধ।",
      aboutBookBody2:
        "এই পাঠ্য প্রাথমিক নীতি থেকে তাপগতিবিদ্যা বিকশিত করে। প্রমাণগুলি সম্পূর্ণভাবে দেওয়া হয় যখনই তা পদার্থবিজ্ঞানকে স্পষ্ট করে, এবং বহু সমাধানকৃত উদাহরণ তাত্ত্বিক বিবরণের পরিপূরক।",
      translationWarning:
        "সতর্কতা: এই বইটি মূলত ফরাসি ভাষায় রচিত; এই সংস্করণটি কৃত্রিম বুদ্ধিমত্তার সহায়তায় স্বয়ংক্রিয়ভাবে অনূদিত।",
      sameAuthorTitle: "একই লেখকের অন্যান্য বই",
      sameAuthorBody:
        "Quantum Mechanics — A Modern Introduction, কোয়ান্টাম বলবিদ্যার উপর একটি সহযোগী কোর্স।",
      sameAuthorLink: "quantumlectures.org-এ পড়ুন",
    },
  },
  ur: {
    book: {
      title: "بنیادی اور اعلیٰ\nحرارتی حرکیات",
      subtitle: "",
      description:
        "پہلا حصہ ایک انڈرگریجویٹ کورس ہے جس میں بہت سی حل شدہ مشقیں شامل ہیں، جو حرارتی حرکیات کی اصطلاحات، ہیئت اور بنیادی اصولوں، گیسوں اور فیز کی تبدیلیوں کے مطالعے، اور حرارتی انجنوں اور حرارتی چکروں کا احاطہ کرتا ہے۔ اگلے حصے مزید اعلیٰ موضوعات کا جائزہ لیتے ہیں: حرارتی حرکیات میں تفرقی جیومیٹری، میکسویل کا شیطان، اینڈوریورسیبلٹی، موسمیاتی طبیعیات، تھرمو الیکٹرسٹی، توازن کے قریب حرارتی حرکیات (اونساگر تعلقات وغیرہ)، اور کوانٹم حرارتی حرکیات۔",
      edition: "پہلا ایڈیشن",
    },
    nav: {
      home: "ہوم",
      chapters: "اسباق",
      exercises: "مشقیں",
      quiz: "کوئز",
      glossary: "لغت",
      about: "کتاب کے بارے میں",
    },
    chapters: {
      label: "اسباق",
      title: "تمام اسباق",
      description: "",
    },
    chapter: {
      chapterLabel: "سبق",
      themeLabel: "سبق",
      lessonLabel: "سبق",
      learningResourceType: "جامعہ کورس",
      educationalLevel: "اعلیٰ تعلیم — انڈرگریجویٹ",
      readTime: (t: string) => `پڑھنے کا وقت: ${t}`,
      downloadPdf: "↓ PDF ڈاؤن لوڈ کریں",
      breadcrumbHome: "ہوم",
      breadcrumbChapters: "اسباق",
      breadcrumbThemes: "اسباق",
      prev: "→ پچھلا",
      next: "اگلا ←",
      noteTitle: "نوٹ:",
      noteBody:
        "یہ ایک پیش نظارہ اقتباس ہے۔ مکمل باب، مشقیں اور حل کے لیے مکمل PDF ڈاؤن لوڈ کریں۔",
      tabOnline: "آن لائن پڑھیں",
      tabReferences: "حوالہ جات",
      tabPdf: "PDF ویور",
      tocTitle: "فہرست مضامین",
      showToc: "فہرست دکھائیں",
      hideToc: "فہرست چھپائیں",
      refsEmpty: "اس سبق کے لیے ابھی تک کوئی حوالہ شامل نہیں کیا گیا۔",
      refsEnglishTitle: "انگریزی حوالہ جات",
      refsFrenchTitle: "فرانسیسی حوالہ جات",
      refsSectionEmpty: "اس سیکشن میں ابھی تک کوئی لنک شامل نہیں کیا گیا۔",
      contentUnavailable: "اس سبق کا مواد ابھی اس زبان میں دستیاب نہیں ہے۔",
      downloadBtn: "↓ ڈاؤن لوڈ کریں",
      pdfFallback: "اگر PDF ظاہر نہ ہو،",
      pdfFallbackLink: "ڈاؤن لوڈ کرنے کے لیے یہاں کلک کریں",
      noLessonTitle: "کوئی سبق دستیاب نہیں",
      noLessonBody: "یہ سبق ڈھانچے میں شامل ہے، لیکن اس کا مواد ابھی شائع نہیں ہوا۔",
    },
    home: {
      badge: "مفت آن لائن ایڈیشن",
      readOnline: "آن لائن پڑھیں ←",
      aboutBook: "کتاب کے بارے میں",
      chapterPrefix: "باب",
      themePrefix: "سبق",
      stats: { chapters: "اسباق", edition: "ایڈیشن", format: "فارمیٹ", formatValue: "ویب + PDF" },
      contentsLabel: "مشمولات",
      exploreTitle: "اسباق دریافت کریں",
      readTheme: "سبق کھولیں ←",
      readLesson: "سبق پڑھیں ←",
      readChapter: "باب پڑھیں ←",
      fullBookDownload: "مکمل ایڈیشن ڈاؤن لوڈ کریں (جلد آ رہا ہے)",
      features: [
        {
          icon: "∫",
          title: "مکمل ریاضیاتی پیشکش",
          body: "تمام مساوات KaTeX کے ذریعے دکھائی جاتی ہیں — آپ کے براؤزر میں شفاف LaTeX معیار کی ریاضی۔",
        },
        {
          icon: "⬇",
          title: "PDF ڈاؤن لوڈز",
          body: "ہر باب آف لائن مطالعے کے لیے ڈاؤن لوڈ کے قابل PDF کے طور پر دستیاب ہے۔",
        },
        {
          icon: "◎",
          title: "آزاد اور مفت رسائی",
          body: "مکمل متن مفت آن لائن دستیاب ہے۔ کوئی پے وال نہیں، کسی رجسٹریشن کی ضرورت نہیں۔",
        },
      ],
    },
    footer: {
      navigation: "نیویگیشن",
      home: "ہوم",
      allChapters: "تمام اسباق",
      exercises: "مشقیں",
      aboutBook: "کتاب کے بارے میں",
      author: "مصنف",
      copyright: (year: string, author: string) => `© ${year} ${author}۔ جملہ حقوق محفوظ ہیں۔`,
    },
    glossary: {
      title: "کلیدی الفاظ کی لغت",
      subtitle: "کسی کلیدی لفظ پر کلک کریں تاکہ وہ تمام اسباق دیکھ سکیں جو اسے استعمال کرتے ہیں۔",
      allKeywords: "تمام کلیدی الفاظ",
      relatedLessons: "متعلقہ اسباق",
      noResult: "اس فلٹر کے لیے کوئی کلیدی لفظ نہیں ملا۔",
      lessonEntry: (n: number, title: string) => `سبق ${n}: ${title}`,
    },
    about: {
      label: "کتاب کے بارے میں",
      aboutBookTitle: "اس کتاب کے بارے میں",
      bookDetails: "کتاب کی تفصیلات",
      detailLabels: { author: "مصنف", affiliation: "ادارہ", edition: "ایڈیشن", year: "سال" },
      authorTitle: "مصنف کے بارے میں",
      authorBioSuffix: "ایک طبیعیات دان ہیں، وہ کام کرتے ہیں ",
      authorBioRest:
        "ان کی تحقیقی دلچسپیوں میں کشش ثقل کے قوانین، کوانٹم میکانکس اور اس کی بنیادیں، اور مشین لرننگ کے کام کے طور پر علامتی رجعت شامل ہیں۔ یہ کتاب گریجویٹ اور اعلیٰ انڈرگریجویٹ سطح پر کئی سالوں کی تدریس کے دوران تیار کیے گئے لیکچر نوٹس سے وجود میں آئی۔",
      authorLinksHeading: "پروفائلز",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "پروجیکٹ کے بارے میں",
      aboutProjectLead:
        "یہ ویب سائٹ اور یہ کتاب زیرِ تکمیل ہیں۔ اسباق اور مشقیں بتدریج شامل کی جائیں گی۔ یہ کتاب مصنف نے فرانسیسی زبان میں لکھی ہے؛ دیگر زبانوں میں پیش کردہ مواد خودکار (AI) ترجمے کے ذریعے تیار کیا گیا ہے۔",
      aboutProjectOutlineLabel: "منصوبہ بند مواد:",
      aboutProjectOutlineBody:
        "حرارتی حرکیات کا ایک بتدریج کورس، بنیادی اصولوں سے لے کر مزید اعلیٰ پیش رفتوں تک۔",
      aboutProjectStatusBody:
        "موجودہ حیثیت: اردو میں اسباق 1، 3 اور 4 دستیاب ہیں۔",
      aboutBookBody2:
        "یہ متن حرارتی حرکیات کو بنیادی اصولوں سے شروع کرتے ہوئے آگے بڑھاتا ہے۔ ثبوت مکمل طور پر دیے جاتے ہیں جب بھی وہ طبیعیات کو واضح کرتے ہیں، اور بہت سی حل شدہ مثالیں نظری وضاحت کی تکمیل کرتی ہیں۔",
      translationWarning:
        "انتباہ: یہ کتاب بنیادی طور پر فرانسیسی زبان میں لکھی گئی ہے؛ یہ نسخہ مصنوعی ذہانت کی مدد سے خودکار طور پر ترجمہ کیا گیا ہے۔",
      sameAuthorTitle: "اسی مصنف کی دیگر تصانیف",
      sameAuthorBody: "Quantum Mechanics — A Modern Introduction، کوانٹم میکانکس پر ایک ہمراہ کورس۔",
      sameAuthorLink: "quantumlectures.org پر پڑھیں",
    },
  },
  sw: {
    book: {
      title: "Thermodynamiki ya Msingi\nna ya Juu",
      subtitle: "",
      description:
        "Sehemu ya kwanza ni kozi ya shahada ya kwanza yenye mazoezi mengi yaliyofanyiwa kazi, inayoshughulikia msamiati, uundaji wa kimfumo, na kanuni za msingi za thermodynamiki, uchunguzi wa gesi na mabadiliko ya awamu, pamoja na injini za joto na mizunguko ya joto. Sehemu zinazofuata zinachunguza mada za kina zaidi: jiometri tofautishi katika thermodynamiki, pepo wa Maxwell, endoreversibility, fizikia ya hali ya hewa, thermoelectricity, thermodynamiki karibu na usawa (uhusiano wa Onsager, n.k.), na thermodynamiki ya kwantamu.",
      edition: "Toleo la Kwanza",
    },
    nav: {
      home: "Nyumbani",
      chapters: "Masomo",
      exercises: "Mazoezi",
      quiz: "Jaribio",
      glossary: "Kamusi",
      about: "Kuhusu Kitabu",
    },
    chapters: {
      label: "MASOMO",
      title: "Masomo Yote",
      description: "",
    },
    chapter: {
      chapterLabel: "SOMO",
      themeLabel: "SOMO",
      lessonLabel: "SOMO",
      learningResourceType: "Kozi ya Chuo Kikuu",
      educationalLevel: "Elimu ya Juu — Shahada ya Kwanza",
      readTime: (t: string) => `Muda wa kusoma: ${t}`,
      downloadPdf: "↓ Pakua PDF",
      breadcrumbHome: "Nyumbani",
      breadcrumbChapters: "Masomo",
      breadcrumbThemes: "Masomo",
      prev: "← Iliyotangulia",
      next: "Inayofuata →",
      noteTitle: "Kumbuka:",
      noteBody:
        "Huu ni muhtasari wa onyesho la awali. Pakua PDF kamili kwa ajili ya sura nzima, mazoezi, na majibu.",
      tabOnline: "Soma Mtandaoni",
      tabReferences: "Marejeleo",
      tabPdf: "Kionyeshi cha PDF",
      tocTitle: "Yaliyomo",
      showToc: "Onyesha Yaliyomo",
      hideToc: "Ficha Yaliyomo",
      refsEmpty: "Hakuna marejeleo yaliyoongezwa kwa somo hili bado.",
      refsEnglishTitle: "Marejeleo ya Kiingereza",
      refsFrenchTitle: "Marejeleo ya Kifaransa",
      refsSectionEmpty: "Hakuna kiungo kilichoongezwa katika sehemu hii bado.",
      contentUnavailable: "Maudhui ya somo hili bado hayapatikani katika lugha hii.",
      downloadBtn: "↓ Pakua",
      pdfFallback: "Ikiwa PDF haionekani,",
      pdfFallbackLink: "bofya hapa kuipakua",
      noLessonTitle: "Hakuna Somo Linalopatikana",
      noLessonBody: "Somo hili limeorodheshwa katika muundo, lakini maudhui yake bado hayajachapishwa.",
    },
    home: {
      badge: "Toleo Bure la Mtandaoni",
      readOnline: "Soma Mtandaoni →",
      aboutBook: "Kuhusu Kitabu",
      chapterPrefix: "Sura",
      themePrefix: "Somo",
      stats: { chapters: "Masomo", edition: "Toleo", format: "Muundo", formatValue: "Wavuti + PDF" },
      contentsLabel: "Yaliyomo",
      exploreTitle: "Gundua Masomo",
      readTheme: "Fungua somo →",
      readLesson: "Soma somo →",
      readChapter: "Soma sura →",
      fullBookDownload: "Pakua toleo kamili (hivi karibuni)",
      features: [
        {
          icon: "∫",
          title: "Uonyeshaji Kamili wa Hisabati",
          body: "Milinganyo yote inaonyeshwa kwa KaTeX — hisabati safi ya ubora wa LaTeX kwenye kivinjari chako.",
        },
        {
          icon: "⬇",
          title: "Upakuaji wa PDF",
          body: "Kila sura inapatikana kama PDF inayopakuliwa kwa ajili ya masomo bila mtandao.",
        },
        {
          icon: "◎",
          title: "Ufikiaji Huru na Bure",
          body: "Maandishi kamili yanapatikana bure mtandaoni. Hakuna malipo, hakuna usajili unaohitajika.",
        },
      ],
    },
    footer: {
      navigation: "Uelekezaji",
      home: "Nyumbani",
      allChapters: "Masomo Yote",
      exercises: "Mazoezi",
      aboutBook: "Kuhusu Kitabu",
      author: "Mwandishi",
      copyright: (year: string, author: string) => `© ${year} ${author}. Haki zote zimehifadhiwa.`,
    },
    glossary: {
      title: "Kamusi ya Maneno Muhimu",
      subtitle: "Bofya neno muhimu kuona masomo yote yanayolitumia.",
      allKeywords: "Maneno Muhimu Yote",
      relatedLessons: "Masomo Yanayohusiana",
      noResult: "Hakuna neno muhimu lililopatikana kwa kichujio hiki.",
      lessonEntry: (n: number, title: string) => `Somo ${n}: ${title}`,
    },
    about: {
      label: "KUHUSU KITABU",
      aboutBookTitle: "Kuhusu Kitabu Hiki",
      bookDetails: "Maelezo ya Kitabu",
      detailLabels: { author: "Mwandishi", affiliation: "Taasisi", edition: "Toleo", year: "Mwaka" },
      authorTitle: "Kuhusu Mwandishi",
      authorBioSuffix: "ni mwanafizikia katika ",
      authorBioRest:
        "Maslahi yake ya utafiti ni pamoja na sheria za mvuto, mekanika ya kwantamu na misingi yake, na urejeshi wa alama (symbolic regression) kama kazi ya kujifunza kwa mashine. Kitabu hiki kimetokana na maelezo ya masomo yaliyoendelezwa kwa miaka mingi ya ufundishaji katika ngazi ya shahada ya uzamili na shahada ya kwanza ya juu.",
      authorLinksHeading: "Wasifu",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "Kuhusu Mradi",
      aboutProjectLead:
        "Tovuti hii na kitabu hiki bado vinaendelezwa. Masomo na mazoezi yataongezwa hatua kwa hatua. Kitabu kimeandikwa kwa Kifaransa na mwandishi; maudhui yanayotolewa katika lugha nyingine yametengenezwa kwa tafsiri ya kiotomatiki (AI).",
      aboutProjectOutlineLabel: "Maudhui Yaliyopangwa:",
      aboutProjectOutlineBody:
        "Kozi inayoendelea ya thermodynamiki, kutoka kanuni za msingi hadi maendeleo ya kina zaidi.",
      aboutProjectStatusBody:
        "Hali ya sasa: masomo ya 1 hadi 4 yanapatikana kwa Kiswahili.",
      aboutBookBody2:
        "Maandishi haya yanaendeleza thermodynamiki kutoka kanuni za kwanza. Uthibitisho hutolewa kikamilifu kila unapofafanua fizikia, na mifano mingi iliyofanyiwa kazi inakamilisha maelezo ya kinadharia.",
      translationWarning:
        "Onyo: kitabu hiki kiliandikwa awali kwa Kifaransa; toleo hili limetafsiriwa kiotomatiki kwa msaada wa akili bandia.",
      sameAuthorTitle: "Kutoka kwa Mwandishi Huyo Huyo",
      sameAuthorBody:
        "Quantum Mechanics — A Modern Introduction, kozi shirikishi kuhusu mekanika ya kwantamu.",
      sameAuthorLink: "Isome kwenye quantumlectures.org",
    },
  },
  fa: {
    book: {
      title: "ترمودینامیک\nمقدماتی و پیشرفته",
      subtitle: "",
      description:
        "بخش اول یک درس مقطع کارشناسی است که همراه با تمرین‌های حل‌شدهٔ فراوان، به واژگان، صورت‌بندی و اصول بنیادین ترمودینامیک، مطالعهٔ گازها و گذارهای فاز، و همچنین موتورهای حرارتی و چرخه‌های گرمایی می‌پردازد. بخش‌های بعدی موضوعات پیشرفته‌تری را بررسی می‌کنند: هندسهٔ دیفرانسیل در ترمودینامیک، شیطان ماکسول، برگشت‌ناپذیری درونی، فیزیک اقلیم، ترموالکتریسیته، ترمودینامیک نزدیک به تعادل (روابط آنساگر و غیره)، و ترمودینامیک کوانتومی.",
      edition: "چاپ اول",
    },
    nav: {
      home: "خانه",
      chapters: "درس‌ها",
      exercises: "تمرین‌ها",
      quiz: "آزمون",
      glossary: "واژه‌نامه",
      about: "دربارهٔ کتاب",
    },
    chapters: {
      label: "درس‌ها",
      title: "همهٔ درس‌ها",
      description: "",
    },
    chapter: {
      chapterLabel: "درس",
      themeLabel: "درس",
      lessonLabel: "درس",
      learningResourceType: "درس دانشگاهی",
      educationalLevel: "آموزش عالی — مقطع کارشناسی",
      readTime: (t: string) => `زمان مطالعه: ${t}`,
      downloadPdf: "↓ دانلود PDF",
      breadcrumbHome: "خانه",
      breadcrumbChapters: "درس‌ها",
      breadcrumbThemes: "درس‌ها",
      prev: "→ قبلی",
      next: "بعدی ←",
      noteTitle: "توجه:",
      noteBody:
        "این یک بخش پیش‌نمایش است. برای فصل کامل، تمرین‌ها و پاسخ‌ها، PDF کامل را دانلود کنید.",
      tabOnline: "مطالعهٔ آنلاین",
      tabReferences: "منابع",
      tabPdf: "نمایشگر PDF",
      tocTitle: "فهرست مطالب",
      showToc: "نمایش فهرست مطالب",
      hideToc: "پنهان کردن فهرست مطالب",
      refsEmpty: "هنوز هیچ منبعی برای این درس افزوده نشده است.",
      refsEnglishTitle: "منابع انگلیسی",
      refsFrenchTitle: "منابع فرانسوی",
      refsSectionEmpty: "هنوز هیچ پیوندی در این بخش افزوده نشده است.",
      contentUnavailable: "محتوای این درس هنوز به این زبان در دسترس نیست.",
      downloadBtn: "↓ دانلود",
      pdfFallback: "اگر PDF نمایش داده نشد،",
      pdfFallbackLink: "برای دانلود اینجا کلیک کنید",
      noLessonTitle: "درسی در دسترس نیست",
      noLessonBody: "این درس در ساختار فهرست شده است، اما محتوای آن هنوز منتشر نشده است.",
    },
    home: {
      badge: "نسخهٔ آنلاین رایگان",
      readOnline: "مطالعهٔ آنلاین ←",
      aboutBook: "دربارهٔ کتاب",
      chapterPrefix: "فصل",
      themePrefix: "درس",
      stats: { chapters: "درس‌ها", edition: "چاپ", format: "قالب", formatValue: "وب + PDF" },
      contentsLabel: "فهرست",
      exploreTitle: "کاوش در درس‌ها",
      readTheme: "باز کردن درس ←",
      readLesson: "مطالعهٔ درس ←",
      readChapter: "مطالعهٔ فصل ←",
      fullBookDownload: "دانلود نسخهٔ کامل (به‌زودی)",
      features: [
        {
          icon: "∫",
          title: "نمایش کامل ریاضی",
          body: "همهٔ معادلات با KaTeX نمایش داده می‌شوند — ریاضیاتی شفاف با کیفیت LaTeX در مرورگر شما.",
        },
        {
          icon: "⬇",
          title: "دانلود PDF",
          body: "هر فصل به‌صورت PDF قابل‌دانلود برای مطالعهٔ آفلاین در دسترس است.",
        },
        {
          icon: "◎",
          title: "دسترسی آزاد و رایگان",
          body: "متن کامل به‌صورت رایگان آنلاین در دسترس است. بدون دیوار پرداخت، بدون نیاز به ثبت‌نام.",
        },
      ],
    },
    footer: {
      navigation: "پیمایش",
      home: "خانه",
      allChapters: "همهٔ درس‌ها",
      exercises: "تمرین‌ها",
      aboutBook: "دربارهٔ کتاب",
      author: "نویسنده",
      copyright: (year: string, author: string) => `© ${year} ${author}. تمامی حقوق محفوظ است.`,
    },
    glossary: {
      title: "واژه‌نامهٔ کلیدواژه‌ها",
      subtitle: "روی یک کلیدواژه کلیک کنید تا همهٔ درس‌هایی که از آن استفاده می‌کنند را ببینید.",
      allKeywords: "همهٔ کلیدواژه‌ها",
      relatedLessons: "درس‌های مرتبط",
      noResult: "هیچ کلیدواژه‌ای برای این فیلتر یافت نشد.",
      lessonEntry: (n: number, title: string) => `درس ${n}: ${title}`,
    },
    about: {
      label: "دربارهٔ کتاب",
      aboutBookTitle: "دربارهٔ این کتاب",
      bookDetails: "مشخصات کتاب",
      detailLabels: { author: "نویسنده", affiliation: "وابستگی سازمانی", edition: "چاپ", year: "سال" },
      authorTitle: "دربارهٔ نویسنده",
      authorBioSuffix: "فیزیک‌دانی است که در ",
      authorBioRest:
        "علایق پژوهشی او شامل قوانین گرانش، مکانیک کوانتومی و مبانی آن، و رگرسیون نمادین به‌عنوان یک وظیفهٔ یادگیری ماشین است. این کتاب از یادداشت‌های درسی‌ای شکل گرفته که طی سال‌های متمادی تدریس در مقاطع تحصیلات تکمیلی و کارشناسی پیشرفته تدوین شده‌اند.",
      authorLinksHeading: "نمایه‌ها",
      authorLinkLinkedIn: "LinkedIn",
      authorLinkGoogleScholar: "Google Scholar",
      authorLinkGitHub: "GitHub",
      aboutProjectTitle: "دربارهٔ پروژه",
      aboutProjectLead:
        "این وب‌سایت و این کتاب هنوز در حال توسعه هستند. درس‌ها و تمرین‌ها به‌تدریج افزوده خواهند شد. کتاب به زبان فرانسه توسط نویسنده نوشته شده است؛ محتوای ارائه‌شده به زبان‌های دیگر از طریق ترجمهٔ خودکار (هوش مصنوعی) تولید می‌شود.",
      aboutProjectOutlineLabel: "محتوای برنامه‌ریزی‌شده:",
      aboutProjectOutlineBody:
        "دوره‌ای تدریجی در ترمودینامیک، از اصول بنیادین تا پیشرفت‌های پیشرفته‌تر.",
      aboutProjectStatusBody:
        "وضعیت فعلی: درس‌های ۱، ۳ و ۴ به فارسی در دسترس‌اند.",
      aboutBookBody2:
        "این متن ترمودینامیک را از اصول نخستین بسط می‌دهد. اثبات‌ها هر جا که به روشن‌شدن فیزیک کمک کنند به‌طور کامل ارائه می‌شوند، و مثال‌های حل‌شدهٔ فراوان مکمل ارائهٔ نظری هستند.",
      translationWarning:
        "هشدار: این کتاب در اصل به زبان فرانسه نوشته شده است؛ این نسخه با کمک هوش مصنوعی به‌صورت خودکار ترجمه شده است.",
      sameAuthorTitle: "از همین نویسنده",
      sameAuthorBody:
        "Quantum Mechanics — A Modern Introduction، دوره‌ای همراه دربارهٔ مکانیک کوانتومی.",
      sameAuthorLink: "مطالعه در quantumlectures.org",
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
