# Langues cibles

Liste de référence des langues envisagées pour la diffusion du site.
L'architecture i18n (`Lang` dans [`lib/i18n.ts`](../lib/i18n.ts)) supporte
désormais les 20 codes ci-dessous comme routes valides (`/xx` et `/xx/...`) ;
ce qui varie entre langues, c'est la profondeur du contenu réellement traduit
— voir la colonne Statut. Statut à mettre à jour au fur et à mesure.

## Statut

| Code | Langue     | Statut       | Notes |
|------|------------|--------------|-------|
| fr   | Français   | ✅ en prod   | Langue source, contenu de référence, toutes sections |
| en   | Anglais    | 🚧 partiel   | Chrome UI + traduction du contenu en cours, leçon par leçon ; exercices du chapitre 2 et quiz de la leçon 1 traduits |
| de   | Allemand   | 🚧 partiel   | Accueil, à propos, métadonnées des leçons, glossaire, leçon 1, exercices du chapitre 2 et quiz de la leçon 1 traduits |
| es   | Espagnol   | 🚧 partiel   | Idem de |
| pt   | Portugais  | 🚧 partiel   | Idem de |
| it   | Italien    | 🚧 partiel   | Idem de |
| pl   | Polonais   | 🚧 partiel   | Idem de |
| ru   | Russe      | 🚧 partiel   | Idem de |
| zh   | Chinois    | 🚧 partiel   | Idem de |
| ja   | Japonais   | 🚧 partiel   | Idem de |
| ko   | Coréen     | 🚧 partiel   | Idem de |
| hi   | Hindi      | 🚧 partiel   | Idem de |
| vi   | Vietnamien | 🚧 partiel   | Idem de |
| ar   | Arabe      | 🚧 partiel   | Idem de + RTL (`dir="rtl"` sur `<html>`, mise en page en miroir automatique via flex/grid) |
| id   | Indonésien | 🚧 partiel   | Accueil, à propos, métadonnées des leçons, glossaire, leçons 1 et 2, exercices du chapitre 2 et quiz de la leçon 1 traduits |
| tr   | Turc       | 🚧 partiel   | Idem id |
| bn   | Bengali    | 🚧 partiel   | Chrome uniquement : accueil, à propos, métadonnées des leçons (titres/descriptions/mots-clés), glossaire, libellés d'exercices et de quiz. Aucun contenu de leçon, d'exercice ni de question de quiz traduit pour l'instant |
| ur   | Ourdou     | 🚧 partiel   | Idem bn + RTL (`dir="rtl"` sur `<html>`, mise en page en miroir automatique via flex/grid) |
| sw   | Swahili    | 🚧 partiel   | Idem bn |
| fa   | Farsi      | 🚧 partiel   | Idem bn + RTL (`dir="rtl"` sur `<html>`, mise en page en miroir automatique via flex/grid) |

Légende : ✅ en prod (toutes sections) · 🚧 partiel (au moins une section a du
contenu réel dans cette langue ; jamais de repli silencieux vers fr/en — les
pages sans contenu affichent un état explicite) · 📋 planifié / pas commencé.

## Comment ça marche

- `lib/i18n.ts` : `translations.fr` et `translations.en` restent les objets
  complets (source de vérité pour le type `Translations`). Chaque langue
  au-delà de fr/en est un objet **partiel** (`partialTranslations` : `nav`,
  `book`, `home`, `footer`, `about`, `chapters`) fusionné en profondeur
  (`getTranslations(lang)`) par-dessus l'anglais complet — les libellés de
  chrome non traduits (ex. `chapter.tocTitle`, `chapter.breadcrumbHome`)
  retombent sur l'anglais, ce qui est acceptable car ce ne sont que des
  libellés d'interface, jamais du contenu de leçon.
- **Titres/descriptions de leçon** : `lib/chapterTranslations.ts` contient les
  titres et descriptions des 17 thèmes pour les 14 langues au-delà de fr/en
  (indépendant du fait que le contenu de la leçon elle-même existe ou non).
  `lib/chapters.ts` expose `getThemeTitle(theme, lang)`,
  `getThemeDescription(theme, lang)`, `getThemePartHeading(theme, lang)` —
  toujours utiliser ces fonctions plutôt qu'un `lang === "fr" ? titleFr :
  titleEn` codé en dur. Les mots-clés des bulles sous chaque leçon sont aussi
  traduits (`chapterTranslations[lang][slug].topics`, exposés via
  `getThemeTopics(themeSlug, lesson, lang)`). Les libellés au niveau de la
  leçon individuelle (fiches, sous-titres) restent en repli anglais pour
  l'instant — hors périmètre de cette passe.
- **Contenu de leçon** : `lib/chapterContent.server.ts` expose
  `getTexFilePathForLang(frTexFile, lang)`, qui mappe
  `content/tex/chpN_fr/leconM.tex` vers `content/tex/chpN_<lang>/lessonM.tex`
  pour n'importe quelle langue (généralisation de `getEnglishTexFilePath`,
  toujours là pour le calcul `hasEnglishContent` du sitemap). La page
  `app/[lang]/chapters/[slug]/page.tsx` résout le contenu pour la langue
  courante côté serveur (champs `contentLang`/`renderedLang` sur la leçon,
  plus de `contentFr`/`contentEn` séparés) ; si le fichier `.tex` n'existe pas
  pour cette langue, `ChapterContent.tsx` affiche
  `t.chapter.contentUnavailable` (« contenu non disponible dans cette langue
  », générique — ne pas remettre le nom d'une langue en dur dans ce message).
  Pour ajouter une leçon dans une langue : déposer le fichier au bon endroit
  (voir `docs/translation-prompt.md` + `scripts/translate-lesson.mjs`), rien
  d'autre à changer.
- **Exercices sans repli silencieux.** `lib/exercisesLibrary.server.ts` charge
  `content/exos_<lang>/exo_chpN.tex` pour n'importe quel `Lang`. La liste, les
  pages détaillées, les métadonnées et le sitemap n'annoncent une langue que
  lorsque ses propres fichiers contiennent réellement des exercices. Le
  chapitre 2 est traduit dans les 16 langues ; les fichiers vides des chapitres
  1 et 3 réservent seulement la structure et ne créent aucune page factice.
  Les exercices validés du chapitre 2 portent `\seoready{true}` dans chaque
  langue. Eux seuls sont indexables et présents dans le sitemap ; les exercices
  français des chapitres suivants restent en `noindex` jusqu'à leur validation.
  Les slugs des pages détaillées sont dérivés du titre traduit pour les langues
  à alphabet latin, avec redirection permanente depuis l'identifiant historique.
- **Quiz sans repli silencieux.** Les libellés d'interface viennent de
  `lib/quizTranslations.ts` (les 16 langues, même rôle que
  `exerciseTranslations`) et le contenu des questions de
  `lib/quizQuestionTranslations.ts`, indexé par identifiant de question.
  `getLocalizedQuizQuestions(lecon, lang)` renvoie les questions traduites ou
  `null` : une leçon n'est servie dans une langue que si **toutes** ses
  questions y sont traduites, avec le même nombre de choix et d'explications
  qu'en français — sinon la page affiche `unavailableLesson`, jamais un quiz
  mi-traduit. Le hub ne liste que les leçons réellement disponibles, et les
  métadonnées (`hreflang`, `robots`) comme le sitemap sont calculés à partir de
  cette même disponibilité. La leçon 1 est traduite dans les 16 langues ; les
  leçons 2 à 10 restent en français seulement. Pour ajouter une langue à une
  leçon : compléter `quizQuestionTranslations`, rien d'autre à changer.
  Les questions vrai/faux sont repérées sur la source française (champ
  `trueFalse`), pas en comparant le libellé traduit.
- **Glossaire** : `app/[lang]/glossary/page.tsx` construit la liste des
  mots-clés à partir de `getThemeTopics(themeSlug, lesson, lang)` (même
  source que les bulles sous chaque leçon), et les libellés d'interface
  (titre, sous-titre, "Tous les mots-clés", etc.) viennent de `t.glossary.*`
  dans `lib/i18n.ts`, traduits pour les 16 langues — plus de ternaire
  `lang === "fr" ? ... : ...` codé en dur dans ce fichier.
- `SUPPORTED_LANGS` (16 codes) pilote le routage (`isLang`, `generateStaticParams`
  de `app/[lang]/layout.tsx`, le header `x-site-lang` dans `middleware.ts`) —
  toutes ces routes existent et rendent quelque chose (contenu réel ou état
  « non disponible »), jamais une 404.
- `app/sitemap.ts` détecte les langues disponibles section par section. Pour
  les exercices, `hasExercises(lang)` et les identifiants communs déterminent
  les pages et les liens `hreflang`; les coquilles vides ne sont pas indexées.
- `app/[lang]/page.tsx` est la route d'accueil par langue (`/de`, `/es`,
  etc.) ; la racine `/` (`app/page.tsx`) reste la page d'accueil historique,
  pilotée par l'état client (`LangContext`), inchangée.
- Le menu « More… » de `app/components/NavBar.tsx` navigue directement vers
  `/xx` au clic, puisque l'accueil y est réellement disponible.
- La page « à propos » explique elle-même que le livre est écrit en français
  par l'auteur, et que le contenu dans les autres langues est produit par
  traduction automatique (IA) — voir `about.aboutProjectLead` et
  `about.translationWarning` (affiché pour toute langue ≠ fr).
- **Slugs d'URL localisés** (`lib/i18n.ts` `sectionSlugs` + `next.config.js`
  `LOCALIZED_SECTION_SLUGS`, à garder synchronisés) : pour les langues à
  alphabet latin (fr, de, es, pt, it, pl, vi, id, tr, sw), les mots de section dans l'URL sont
  traduits — ex. `/de/uebungen`, `/vi/bai-tap`, `/id/latihan`, `/tr/dersler`, `/sw/mazoezi`. Les
  anciennes URL anglaises (`/de/exercises`, etc.) redirigent en 308 vers la version
  localisée. Pour les langues à écriture non latine (ru, zh, ja, ko, hi,
  ar, bn, ur, fa), le slug reste en anglais délibérément : une URL cyrillique/CJK/
  devanagari/arabe/bengali finit percent-encodée dès qu'elle est copiée-collée ou
  partagée, ce qui a l'air cassé — seul le slug reste en ASCII, le contenu et
  la navigation sont bien traduits.

## Prochaine étape : traduire davantage de leçons, d'exercices et de quiz

Le prompt de traduction et la convention de fichiers restent dans
[`translation-prompt.md`](translation-prompt.md) et le script
[`scripts/translate-lesson.mjs`](../scripts/translate-lesson.mjs). Traduire une
leçon supplémentaire ne demande **aucun changement de code** — juste déposer
`content/tex/chpN_<code>/lessonM.tex` au bon endroit ; la page de détail la
détecte automatiquement.

Pour ajouter des exercices, déposer `exo_chpN.tex` dans le dossier
`content/exos_<code>` correspondant. Le chargeur les détecte sans changement
de code. Pour les quiz, ajouter les questions traduites dans
`lib/quizQuestionTranslations.ts` (voir plus haut) : leçons 2 à 10 encore à
faire.

Pour zh/ko/ja/ar en particulier : la typographie de `cleanLatexInline` (espaces
insécables autour de `: ; ? !`, guillemets `«»`) est calée sur le français et
ne s'applique pas telle quelle à ces langues. Les libellés de blocs
(Théorème/Theorem, Démonstration/Proof, etc.) utilisent déjà le jeu anglais
pour toute langue ≠ fr (voir `contentLanguage` dans
`lib/chapterContent.server.ts`), donc pas de mélange avec du français, mais
ce n'est pas encore une vraie traduction de ces libellés.
