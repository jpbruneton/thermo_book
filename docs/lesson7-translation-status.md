# Traduction partielle de la leçon 7

Périmètre demandé le 10 septembre 2026 : lignes 1 à 611 incluses de
`content/tex/chp7_fr/lecon1.tex`, dans la version du sous-module
`db8b1dbba5561a3f90aefb4741b694c38499e341`.

La dernière phrase traduite termine la section « Équilibre et stationnarité
de l'entropie », avec l'égalité des potentiels chimiques à l'équilibre.
La section « Stabilité et concavité de l'entropie » commence à la ligne 613
de cette version et reste hors périmètre, comme toutes les sections suivantes.

## Langues et fichiers

Les 19 langues cibles sont `en`, `de`, `es`, `pt`, `it`, `pl`, `ru`, `zh`,
`ja`, `ko`, `hi`, `vi`, `ar`, `id`, `tr`, `bn`, `ur`, `sw` et `fa`.
Les fichiers suivent la convention `content/tex/chp7_<lang>/lesson1.tex`.

Les 19 versions sont terminées et relues sur ce périmètre.

Les traductions sont rédigées directement par les agents, sans service ni
API de traduction, selon `docs/translation-prompt.md`. Les équations,
macros et identifiants LaTeX de la portion source sont conservés, à l'exception
du renvoi vers la section non encore traduite, remplacé par un lien explicite
vers la version française pour la publication.

## Vérifications

Pour chaque langue, la comparaison avec la portion française confirme la
conservation des 274 fragments mathématiques, de l'ordre des équations
affichées, des environnements, des titres de structure et des identifiants
LaTeX. Le rendu par le convertisseur du site et KaTeX produit 52 blocs
mathématiques affichés sans erreur. Les caractères Unicode ont été contrôlés.
La source française est inchangée.

## Points à reprendre lors de la traduction de la suite

- Le renvoi vers l'inversion pointe vers la section française 7.2, avec
  l'ancre `72-la-representation-energie-et-le-minimum-denergie`. Rétablir
  `\ref{sec:ch7-inversion}` après traduction de sa destination.
- Le lien vers la leçon 6 utilise l'URL canonique de la langue cible.
- L'exercice `maxwell-gaz-parfait` n'existe actuellement qu'en français.
  Son intitulé est traduit dans la leçon, mais le lien conserve sa destination
  française pour pointer vers un contenu disponible.
- La référence de Callen et `\input{ref_7_7}` appartiennent à la suite de la
  source et ne sont pas ajoutés à ces traductions partielles.
