# Traduction des exercices de la leçon 6

État au 7 septembre 2026 : les dix exercices sont traduits dans les dix-neuf
langues cibles, énoncés, indications et solutions compris.

Source : `content/tex/exos_fr/exo_chp6.tex`, dix exercices. Référence pour
le vocabulaire et les notations : `content/tex/chp6_<lang>/lesson1.tex`
dans chaque langue, ainsi que `docs/translation-prompt.md`.

| Langues | Exercices traduits avec énoncé, indication et solution | À traduire |
| --- | --- | --- |
| en | 1 à 10 | Aucun |
| de, es, pt, it, pl, ru, zh, ja, ko, hi, vi, ar, id, tr, bn, ur, sw, fa | 1 à 10 | Aucun |

Les fichiers se trouvent dans `content/tex/exos_<lang>/exo_chp6.tex`.
Total : 190 traductions complètes d'exercices sur les 190 prévues.

## Conventions à conserver

- Capacité thermique molaire : `c_V`, `c_P` ; capacité totale : `C`.
- Entropie produite : `S_{\mathrm{i}}` ; entropie échangée : `S_{\mathrm{e}}`.
- Sources du cycle de Carnot : indices `\mathrm{H}` et `\mathrm{C}`,
  conformément aux cours traduits. Ne pas transformer les indices finaux `f`
  en indices de source froide dans les autres exercices.
- Conserver les indices des espèces, les états A, B, B', B'', et distinguer
  le nombre de particules A de la constante d'Avogadro `\mathcal N_A`.
- Conserver la convention récepteur (du banquier), notamment pour la machine
  entre les deux blocs : le travail reçu est négatif et sa valeur absolue
  est le travail récupérable.
- Traduire toutes les étapes des corrigés détaillés, sans les résumer.
  Les consignes pédagogiques de `content/tex/exos_fr/AGENTS.md` restent
  pertinentes pour les traductions.

## Contrôles

- Identifiants, ordre, nombre de questions et environnements comparés au français.
- Conservation exacte des formules protégées vérifiée pour chaque segment
  traduit ; source française inchangée après normalisation des fins de ligne.
- Rendu KaTeX et conversion HTML du site contrôlés pour les 190 exercices :
  46 questions, 737 expressions mathématiques et six figures par langue.
- Dans chaque langue : cinq schémas localisés et schéma sans texte de la
  compression repris à l'identique. Sources TikZ dans `content/tex/figs-src/`
  et images dans `content/tex/site-assets/figs/`.
- Schémas compilés sans caractères manquants ni débordements signalés.
  Plusieurs rendus inspectés, notamment les écritures arabe, persane, ourdoue,
  hindi, bengalie, chinoise, japonaise et coréenne. L'ordre des mots autour des
  nombres de particules a été adapté dans les schémas de membrane concernés.
- Compilation de `public/pdfs/exercises_en.pdf` réussie en trois passes,
  sans avertissement de débordement ; pages des énoncés 12 à 17 inspectées.
- Les dix-huit autres langues n'ont pas encore fait l'objet d'une compilation PDF.
- La vérification visuelle dans le navigateur reste à faire : aucun navigateur
  n'était connecté. KaTeX signale des métriques manquantes pour certains
  caractères non latins dans les textes de formules, sans erreur de conversion.

Les fichiers de préparation et les rapports locaux sont dans
`tmp/exercises6-translation/`. Le fichier `assemble.py` réassemble les
traductions rédigées dans les sous-dossiers de langues : il écrase le fichier
de destination. Avant de l'utiliser après une modification directe, reporter
cette modification dans les unités traduites. Les fichiers `native.json`
et `figure-labels.json` des langues contiennent les libellés des formules et
des schémas. `build-figures.py` génère les schémas localisés ;
`check-prepared.py` vérifie les segments et `audit.cjs --complete` contrôle
la présence et le rendu de tous les exercices.
