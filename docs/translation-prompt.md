# Prompt de traduction des leçons

Prompt de référence utilisé pour traduire une leçon (`content/tex/chpN_fr/lecon1.tex`)
vers une langue cible. C'est le prompt système utilisé par
[`scripts/translate-lesson.mjs`](../scripts/translate-lesson.mjs) (voir ce fichier
pour l'automatisation via l'API), et c'est aussi le prompt à suivre quand la
traduction est demandée directement à Claude en conversation, sans passer par le
script.

## Convention de fichiers

```
content/tex/chpN_fr/lecon1.tex   →   content/tex/chpN_<code>/lesson1.tex
```

`<code>` = code langue ISO (voir [languages.md](languages.md) pour la liste et le
statut de chaque langue). Le nom de fichier cible est toujours `lessonN.tex`
(mot anglais), quelle que soit la langue — c'est la convention déjà en place pour
`_en/` dans le code ([`getEnglishTexFilePath`](../lib/chapterContent.server.ts)),
généralisée aux autres langues.

## Prompt (à remplir avec le nom de la langue cible en anglais, ex. "German", "Spanish")

```
You are an expert scientific translator and native speaker of the [language], with a strong background in academic writing. Your task is to translate the following LaTeX document from French into fluent, native-level scientific [language].

Strict rules to follow:

Scientific quality — Write as a native speaking researcher would. Use natural phrasing, standard academic vocabulary, and appropriate register for a scientific publication. Avoid literal translations or calques from French.
Sentence length — You may break long French sentences into shorter, clearer ones whenever it improves readability. Do not pad or inflate the text.

LaTeX structure — do not alter — Preserve all LaTeX commands, environments, labels, references (\ref, \cite, \label, etc.), math environments, and document structure exactly as they appear. You may have to translate some text within latex equations.

Custom commands and macros — do not alter — The document may contain user-defined commands (e.g. \newcommand, \DeclareMathOperator, or shorthand macros). Keep them strictly as-is, both in their definitions and wherever they are used in the text.

Equations and math — do not alter — Translate only the surrounding prose. Leave all mathematical content, symbols, and notation completely unchanged.

Figures, tables, captions — Translate captions and labels written in natural language, but do not touch filenames, \includegraphics paths, or numerical/symbolic content.

Do not add, remove, or reorder content — The translated document must reflect exactly the same information as the original. No summarizing, no commentary, no additions. Dont use -- characters unless there are some in the original text.

Translate from french \og ...\fg{} to the expected form in the targeted langage.

Output only the translated LaTeX source, with no explanation or preamble.
```

## Noms de langue à utiliser (placeholder `[language]`)

| Code | Nom (à insérer dans le prompt) |
|------|--------------------------------|
| en   | English    |
| de   | German     |
| es   | Spanish    |
| pt   | Portuguese |
| zh   | Mandarin Chinese |
| ko   | Korean     |
| ja   | Japanese   |
| it   | Italian    |
| ru   | Russian    |
| hi   | Hindi      |
| vi   | Vietnamese |
| pl   | Polish     |
| ar   | Arabic     |

## Terminologie thermodynamique contrôlée

Ces équivalents doivent être utilisés dans les leçons. Ils évitent notamment les
faux amis entre travail, puissance, rendement et chaleur. Dans une expression
comme $W = \vec F \cdot \mathrm{d}\vec \ell$, `travail` désigne toujours la
grandeur physique d'unité joule, jamais l'emploi, la main-d'œuvre ou une tâche.

| Code | travail / travail mécanique | chaleur | rendement | puissance |
|------|------------------------------|---------|-----------|-----------|
| en | work / mechanical work | heat | efficiency | power |
| de | Arbeit / mechanische Arbeit | Wärme (pas `Hitze`) | Wirkungsgrad | Leistung |
| es | trabajo / trabajo mecánico | calor | rendimiento | potencia |
| pt | trabalho / trabalho mecânico | calor | rendimento | potência |
| zh | 功 / 机械功 | 热 ; 热量 pour une quantité $Q$ | 效率 | 功率 |
| ko | 일 / 기계적 일 | 열 ; 열량 pour une quantité $Q$ | 효율 | 출력 |
| ja | 仕事 / 力学的仕事 (pas `機械的仕事`) | 熱 ; 熱量 pour une quantité $Q$ | 効率 | 仕事率 ou 出力 selon le contexte |
| it | lavoro / lavoro meccanico | calore | rendimento | potenza |
| ru | работа / механическая работа | теплота dans le registre scientifique formel | КПД ou коэффициент полезного действия | мощность |
| hi | कार्य / यांत्रिक कार्य | ऊष्मा | दक्षता | शक्ति |
| vi | công / công cơ học (pas `công việc`) | nhiệt ; nhiệt lượng pour une quantité $Q$ | hiệu suất | công suất |
| pl | praca / praca mechaniczna | ciepło | sprawność (pas `wydajność`) | moc |
| ar | شغل / شغل ميكانيكي (pas `عمل`) | حرارة | كفاءة | قدرة |

Autres choix à conserver de manière cohérente :

- `machine thermique` : `heat engine` (en), `Wärmekraftmaschine` (de),
  `máquina térmica` ou `motor térmico` (es), `máquina térmica` ou `motor
  térmico` (pt), `热机` (zh), `열기관` (ko), `熱機関` (ja), `macchina
  termica` ou `motore termico` (it), `тепловая машина` ou `тепловой
  двигатель` (ru), `ऊष्मा इंजन` (hi), `động cơ nhiệt` (vi), `silnik
  cieplny` ou `maszyna cieplna` (pl), `محرك حراري` (ar) ;
- `source chaude/froide` désigne un réservoir thermique : préférer `hot/cold
  reservoir` en anglais, `heißes/kaltes Wärmereservoir` en allemand et
  `foco caliente/frío` en espagnol plutôt qu'un calque général de « source » ;
- `gaz parfait` : `ideal gas` (en), `ideales Gas` (de), `gas ideal` (es),
  `gás ideal` (pt), `理想气体` (zh), `이상기체` (ko), `理想気体` (ja),
  `gas perfetto` (it), `идеальный газ` (ru), `आदर्श गैस` (hi), `khí lý
  tưởng` (vi), `gaz doskonały` (pl), `غاز مثالي` (ar) ;
- ne jamais confondre `travail` (énergie, unité J) et `puissance` (débit
  d'énergie, unité W). Le BIPM distingue explicitement le joule pour le
  travail, l'énergie et la chaleur, et le watt pour la puissance.

## Portée actuelle

Ce prompt et le script couvrent uniquement les **leçons** (`leconN.tex`). La
traduction des **exercices** (`exercises_fr.tex`) et des **quiz**
(`lib/quizzes.ts`) suit un processus différent, pas encore défini — voir la
conversation du 2026-08-05.
