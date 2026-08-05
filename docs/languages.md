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
| de   | Allemand   | 🏠 accueil traduit | Chrome (nav/pied de page) + page d'accueil traduits (2026-08-05) ; sections (leçons, exercices, quiz, glossaire, à propos) en repli anglais |
| es   | Espagnol   | 🏠 accueil traduit | Idem de |
| pt   | Portugais  | 🏠 accueil traduit | Idem de |
| it   | Italien    | 🏠 accueil traduit | Idem de |
| pl   | Polonais   | 🏠 accueil traduit | Idem de |
| ru   | Russe      | 🏠 accueil traduit | Idem de |
| zh   | Chinois    | 🏠 accueil traduit | Idem de |
| ja   | Japonais   | 🏠 accueil traduit | Idem de |
| ko   | Coréen     | 🏠 accueil traduit | Idem de |
| hi   | Hindi      | 🏠 accueil traduit | Idem de |
| vi   | Vietnamien | 🏠 accueil traduit | Idem de |
| ar   | Arabe      | 🏠 accueil traduit | Idem de + RTL (`dir="rtl"` sur `<html>`, mise en page en miroir automatique via flex/grid) |

Légende : ✅ en prod (toutes sections) · 🚧 en cours (plusieurs sections) ·
🏠 accueil traduit (chrome + page d'accueil seulement, reste en repli anglais)
· 📋 planifié / pas commencé.

## Comment ça marche (depuis le 2026-08-05)

- `lib/i18n.ts` : `translations.fr` et `translations.en` restent les objets
  complets (source de vérité pour le type `Translations`). Chaque langue
  au-delà de fr/en est un objet **partiel** (`partialTranslations`, seulement
  `nav`/`book`/`home`/`footer` pour l'instant) fusionné en profondeur
  (`getTranslations(lang)`) par-dessus l'anglais complet — toute section non
  traduite (`chapters`, `chapter`, `about`, `updates`) retombe automatiquement
  sur l'anglais plutôt que de planter ou d'afficher une chaîne vide.
- `SUPPORTED_LANGS` (14 codes) pilote le routage (`isLang`, `generateStaticParams`
  de `app/[lang]/layout.tsx`, le header `x-site-lang` dans `middleware.ts`) —
  toutes ces routes existent et rendent quelque chose.
- `TRANSLATED_SECTION_LANGS` (`["fr", "en"]` seulement) pilote `app/sitemap.ts`
  pour les sections par-section (leçons, exercices, quiz, glossaire, à propos) :
  on n'indexe pas de pages de contenu de repli anglais sous un code langue
  comme s'il s'agissait d'un contenu réellement localisé. La page d'accueil
  (`app/[lang]/page.tsx`), elle, a un hreflang complet sur les 14 langues
  puisqu'elle est vraiment traduite.
- `app/[lang]/page.tsx` est la nouvelle route d'accueil par langue (`/de`,
  `/es`, etc.) ; la racine `/` (`app/page.tsx`) reste la page d'accueil
  historique, pilotée par l'état client (`LangContext`), inchangée.
- Le menu « More… » de `app/components/NavBar.tsx` navigue désormais
  directement vers `/xx` au clic (plus de toast « pas encore traduit »),
  puisque l'accueil y est réellement disponible.

## Prochaine étape : traduire les leçons/exercices/quiz

Le prompt de traduction et la convention de fichiers restent dans
[`translation-prompt.md`](translation-prompt.md) et le script
[`scripts/translate-lesson.mjs`](../scripts/translate-lesson.mjs). Une fois
une leçon traduite dans `content/tex/chpN_<code>/lesson1.tex`, `lib/chapters.ts`
et `lib/chapterContent.server.ts` (aujourd'hui câblés sur `Fr`/`En` uniquement)
devront être généralisés en `Record<Lang, ...>` pour que la section
« Leçons » sorte du repli anglais.

Pour zh/ko/ja/ar en particulier : la typographie de `cleanLatexInline` (espaces
insécables autour de `: ; ? !`, guillemets `«»`) est calée sur le français et
ne s'applique pas telle quelle à ces langues — à traiter quand le contenu des
leçons sera traduit dans ces langues.
