# Langues cibles

Liste de référence des langues envisagées pour la diffusion du site, à mesure
que l'architecture i18n (actuellement `Lang = "en" | "fr"` dans
[`lib/i18n.ts`](../lib/i18n.ts)) sera généralisée. Statut à mettre à jour au
fur et à mesure.

## Statut

| Code | Langue     | Statut       | Notes |
|------|------------|--------------|-------|
| fr   | Français   | ✅ en prod   | Langue source, contenu de référence |
| en   | Anglais    | 🚧 partiel   | Chrome UI + traduction du contenu en cours, leçon par leçon |
| de   | Allemand   | 📋 planifié  | |
| es   | Espagnol   | 📋 planifié  | |
| pt   | Portugais  | 📋 planifié  | |
| zh   | Chinois    | 📋 planifié  | Pas d'accents latins ; typographie (`cleanLatexInline`) à traiter séparément |
| ko   | Coréen     | 📋 planifié  | Idem zh |
| ja   | Japonais   | 📋 planifié  | Idem zh |
| it   | Italien    | 📋 planifié  | Diacritiques latins déjà gérés par `accentMap` |
| ru   | Russe      | 📋 planifié  | Alphabet cyrillique, pas d'accents latins |
| hi   | Hindi      | 📋 planifié  | Alphabet devanagari |
| vi   | Vietnamien | 📋 planifié  | Diacritiques latins étendus (tons), non couverts par `accentMap` actuel |
| pl   | Polonais   | 📋 planifié  | Diacritiques latins étendus, non couverts par `accentMap` actuel |
| ar   | Arabe      | 📋 planifié  | RTL — impact layout (`dir`, nav, TOC) et rendu KaTeX ; le plus coûteux techniquement |

Légende : ✅ en prod · 🚧 en cours · 📋 planifié / pas commencé.

## Prérequis techniques avant d'ajouter une langue au-delà de fr/en

Voir la conversation du 2026-08-05 pour le détail ; en résumé, plusieurs
endroits sont aujourd'hui câblés sur exactement `en`/`fr` et devront être
généralisés en `Record<Lang, ...>` :

- `lib/i18n.ts` : `Lang`, `SUPPORTED_LANGS`, `sectionSlugs`, `translations`
- `lib/chapters.ts` : champs `titleFr`/`titleEn` etc. (paires figées par leçon)
- `lib/chapterContent.server.ts` : `getEnglishTexFilePath` (câblé sur `_en`),
  `ContentLanguage`, et les libellés de blocs (`isEnglish ? X : Y`)
- `middleware.ts` : regex `^/(en|fr)`
- `next.config.js` : table `FR_SECTION_SLUGS` (mots d'URL publics par langue)

Pour zh/ko/ja/ar en particulier : la typographie de `cleanLatexInline` (espaces
insécables autour de `: ; ? !`, guillemets `«»`) est calée sur le français et
ne s'applique pas telle quelle à ces langues.
