# Langues cibles

Liste de référence des langues envisagées pour la diffusion du site.
L'architecture i18n (`Lang` dans [`lib/i18n.ts`](../lib/i18n.ts)) supporte
désormais les 14 codes ci-dessous comme routes valides (`/xx` et `/xx/...`) ;
ce qui varie entre langues, c'est la profondeur du contenu réellement traduit
— voir la colonne Statut. Statut à mettre à jour au fur et à mesure.

## Statut

| Code | Langue     | Statut       | Notes |
|------|------------|--------------|-------|
| fr   | Français   | ✅ en prod   | Langue source, contenu de référence, toutes sections |
| en   | Anglais    | 🚧 partiel   | Chrome UI + traduction du contenu en cours, leçon par leçon |
| de   | Allemand   | 🚧 partiel   | Accueil, à propos, liste des leçons (titres/descriptions) et leçon 1 traduits ; leçons 2+ affichent « contenu non disponible » ; exercices/quiz/glossaire encore non traduits |
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
  titres et descriptions des 17 thèmes pour les 12 langues au-delà de fr/en
  (indépendant du fait que le contenu de la leçon elle-même existe ou non).
  `lib/chapters.ts` expose `getThemeTitle(theme, lang)`,
  `getThemeDescription(theme, lang)`, `getThemePartHeading(theme, lang)` —
  toujours utiliser ces fonctions plutôt qu'un `lang === "fr" ? titleFr :
  titleEn` codé en dur. Les mots-clés (`topicsFr`/`topicsEn`) et les libellés
  au niveau de la leçon individuelle (fiches, sous-titres) restent en repli
  anglais pour l'instant — hors périmètre de cette passe.
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
- **Pas de repli silencieux.** Les sections encore sans aucun contenu traduit
  (exercices, quiz, glossaire) n'affichent jamais de contenu anglais ou
  français sous couvert d'une autre langue : `app/components/SectionUnavailable.tsx`
  affiche un état explicite, déclenché quand la langue courante n'est pas
  dans `TRANSLATED_SECTION_LANGS` (`["fr", "en"]`). Voir `glossary/page.tsx`
  pour le pattern (garde en tête de composant). Les leçons et la page « à
  propos » n'ont plus cette garde de page entière : leur contenu est résolu
  finement par langue (leçon par leçon, ou entièrement traduit pour « à
  propos »).
- `SUPPORTED_LANGS` (14 codes) pilote le routage (`isLang`, `generateStaticParams`
  de `app/[lang]/layout.tsx`, le header `x-site-lang` dans `middleware.ts`) —
  toutes ces routes existent et rendent quelque chose (contenu réel ou état
  « non disponible »), jamais une 404.
- `TRANSLATED_SECTION_LANGS` (`["fr", "en"]`) pilote `app/sitemap.ts` pour les
  sections encore binaires (exercices, quiz, glossaire) : on n'indexe pas de
  pages « non disponible » comme s'il s'agissait d'un contenu localisé.
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
  alphabet latin (fr, de, es, pt, it, pl), les mots de section dans l'URL sont
  traduits — ex. `/de/uebungen`, `/es/ejercicios`, `/it/lezioni`. Les anciennes
  URL anglaises (`/de/exercises`, etc.) redirigent en 308 vers la version
  localisée. Pour les langues à écriture non latine (ru, zh, ja, ko, hi, vi,
  ar), le slug reste en anglais délibérément : une URL cyrillique/CJK/
  devanagari/arabe finit percent-encodée dès qu'elle est copiée-collée ou
  partagée, ce qui a l'air cassé — seul le slug reste en ASCII, le contenu et
  la navigation sont bien traduits.

## Prochaine étape : traduire davantage de leçons, puis exercices/quiz/glossaire

Le prompt de traduction et la convention de fichiers restent dans
[`translation-prompt.md`](translation-prompt.md) et le script
[`scripts/translate-lesson.mjs`](../scripts/translate-lesson.mjs). Traduire une
leçon supplémentaire ne demande **aucun changement de code** — juste déposer
`content/tex/chpN_<code>/lessonM.tex` au bon endroit ; la page de détail la
détecte automatiquement.

Pour les exercices, le quiz et le glossaire, suivre le pattern déjà en place
pour les leçons : généraliser `lib/exercisesLibrary.server.ts` /
`lib/quizzes.ts` en `Record<Lang, ...>` ou équivalent par-langue, puis retirer
la garde `TRANSLATED_SECTION_LANGS` pour cette section une fois le contenu
réel disponible.

Pour zh/ko/ja/ar en particulier : la typographie de `cleanLatexInline` (espaces
insécables autour de `: ; ? !`, guillemets `«»`) est calée sur le français et
ne s'applique pas telle quelle à ces langues. Les libellés de blocs
(Théorème/Theorem, Démonstration/Proof, etc.) utilisent déjà le jeu anglais
pour toute langue ≠ fr (voir `contentLanguage` dans
`lib/chapterContent.server.ts`), donc pas de mélange avec du français, mais
ce n'est pas encore une vraie traduction de ces libellés.
