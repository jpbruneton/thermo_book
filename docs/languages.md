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
| de   | Allemand   | 🏠 accueil + à propos | Chrome (nav/pied de page), page d'accueil et page « à propos » traduits ; leçons/exercices/quiz/glossaire affichent « page non disponible » |
| es   | Espagnol   | 🏠 accueil + à propos | Idem de |
| pt   | Portugais  | 🏠 accueil + à propos | Idem de |
| it   | Italien    | 🏠 accueil + à propos | Idem de |
| pl   | Polonais   | 🏠 accueil + à propos | Idem de |
| ru   | Russe      | 🏠 accueil + à propos | Idem de |
| zh   | Chinois    | 🏠 accueil + à propos | Idem de |
| ja   | Japonais   | 🏠 accueil + à propos | Idem de |
| ko   | Coréen     | 🏠 accueil + à propos | Idem de |
| hi   | Hindi      | 🏠 accueil + à propos | Idem de |
| vi   | Vietnamien | 🏠 accueil + à propos | Idem de |
| ar   | Arabe      | 🏠 accueil + à propos | Idem de + RTL (`dir="rtl"` sur `<html>`, mise en page en miroir automatique via flex/grid) |

Légende : ✅ en prod (toutes sections) · 🚧 en cours (plusieurs sections) ·
🏠 accueil + à propos traduits (reste des sections affiche un état « page non
disponible », jamais de repli silencieux vers fr/en) · 📋 planifié / pas
commencé.

## Comment ça marche

- `lib/i18n.ts` : `translations.fr` et `translations.en` restent les objets
  complets (source de vérité pour le type `Translations`). Chaque langue
  au-delà de fr/en est un objet **partiel** (`partialTranslations` : `nav`,
  `book`, `home`, `footer`, `about`) fusionné en profondeur
  (`getTranslations(lang)`) par-dessus l'anglais complet.
- **Pas de repli silencieux.** Les sections non traduites (leçons, exercices,
  quiz, glossaire) n'affichent jamais de contenu anglais ou français sous
  couvert d'une autre langue : `app/components/SectionUnavailable.tsx` affiche
  un état explicite « cette page n'est pas encore disponible dans cette
  langue », déclenché quand la langue courante n'est pas dans
  `TRANSLATED_SECTION_LANGS` (`["fr", "en"]`). Voir `app/[lang]/chapters/page.tsx`,
  `[slug]/page.tsx`, `glossary/page.tsx` pour le pattern (garde en tête de
  composant). La page « à propos » n'a plus cette garde : son contenu est
  désormais traduit pour les 14 langues.
- `SUPPORTED_LANGS` (14 codes) pilote le routage (`isLang`, `generateStaticParams`
  de `app/[lang]/layout.tsx`, le header `x-site-lang` dans `middleware.ts`) —
  toutes ces routes existent et rendent quelque chose (contenu réel ou état
  « non disponible »), jamais une 404.
- `TRANSLATED_SECTION_LANGS` (`["fr", "en"]`) pilote aussi `app/sitemap.ts`
  pour les sections par-section : on n'indexe pas de pages « non disponible »
  comme s'il s'agissait d'un contenu localisé. La page d'accueil et la page
  « à propos », elles, ont un hreflang complet sur les 14 langues puisqu'elles
  sont vraiment traduites.
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

## Prochaine étape : traduire les leçons/exercices/quiz

Le prompt de traduction et la convention de fichiers restent dans
[`translation-prompt.md`](translation-prompt.md) et le script
[`scripts/translate-lesson.mjs`](../scripts/translate-lesson.mjs). Une fois
une leçon traduite dans `content/tex/chpN_<code>/lesson1.tex`, `lib/chapters.ts`
et `lib/chapterContent.server.ts` (aujourd'hui câblés sur `Fr`/`En` uniquement)
devront être généralisés en `Record<Lang, ...>`, et la garde
`TRANSLATED_SECTION_LANGS` retirée/étendue pour cette langue et cette section
(suivre le pattern déjà utilisé pour « à propos »).

Pour zh/ko/ja/ar en particulier : la typographie de `cleanLatexInline` (espaces
insécables autour de `: ; ? !`, guillemets `«»`) est calée sur le français et
ne s'applique pas telle quelle à ces langues — à traiter quand le contenu des
leçons sera traduit dans ces langues.
