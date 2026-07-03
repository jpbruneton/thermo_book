export type Lang = "en" | "fr";

export const SUPPORTED_LANGS: readonly Lang[] = ["en", "fr"];

export function isLang(value: string): value is Lang {
  return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export const SECTIONS = ["chapters", "exercises", "quiz", "glossary", "about"] as const;
export type Section = (typeof SECTIONS)[number];

/**
 * Public URL word for each section, per language (e.g. /fr/chapitres vs /en/chapters).
 * The internal route folders (app/[lang]/chapters, .../exercises, etc.) always use the
 * English word; `next.config.js` rewrites the French public words to those internal paths.
 */
export const sectionSlugs: Record<Lang, Record<Section, string>> = {
  en: {
    chapters: "chapters",
    exercises: "exercises",
    quiz: "quiz",
    glossary: "glossary",
    about: "about",
  },
  fr: {
    chapters: "chapitres",
    exercises: "exercices",
    quiz: "quiz",
    glossary: "glossaire",
    about: "a-propos",
  },
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
