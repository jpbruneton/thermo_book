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

### Exceptions issues de l'audit des titres et du glossaire

Les termes suivants ne doivent pas être traduits littéralement. Les noms
propres distinguent deux potentiels différents et `COP` doit rester visible :

| Code | énergie libre de Helmholtz | énergie libre de Gibbs | coefficient de performance | construction de Maxwell | égalité de Jarzynski |
|------|----------------------------|-------------------------|----------------------------|--------------------------|-----------------------|
| en | Helmholtz free energy | Gibbs free energy | coefficient of performance (COP) | Maxwell construction | Jarzynski equality |
| de | Helmholtz-Energie | Gibbs-Energie | Leistungszahl (COP) | Maxwell-Konstruktion | Jarzynski-Gleichung |
| es | energía libre de Helmholtz | energía libre de Gibbs | coeficiente de rendimiento (COP) | construcción de Maxwell | igualdad de Jarzynski |
| pt | energia livre de Helmholtz | energia livre de Gibbs | coeficiente de desempenho (COP) | construção de Maxwell | igualdade de Jarzynski |
| zh | 亥姆霍兹自由能 | 吉布斯自由能 | 性能系数 (COP) | 麦克斯韦等面积法则 | 贾辛斯基等式 |
| ko | 헬름홀츠 자유 에너지 | 깁스 자유 에너지 | 성능계수 (COP) | 맥스웰 등면적 법칙 | 야르진스키 등식 |
| ja | ヘルムホルツ自由エネルギー | ギブズ自由エネルギー | 成績係数 (COP) | マクスウェルの等面積則 | ヤルジンスキー等式 |
| it | energia libera di Helmholtz | energia libera di Gibbs | coefficiente di prestazione (COP) | costruzione di Maxwell | uguaglianza di Jarzynski |
| ru | энергия Гельмгольца | энергия Гиббса | холодильный коэффициент (COP) | построение Максвелла | равенство Ярзинского |
| hi | हेल्महोल्ट्ज़ मुक्त ऊर्जा | गिब्स मुक्त ऊर्जा | प्रदर्शन गुणांक (COP) | मैक्सवेल समान-क्षेत्र नियम | यार्ज़िंस्की समता |
| vi | năng lượng tự do Helmholtz | năng lượng tự do Gibbs | hệ số hiệu quả (COP) | quy tắc diện tích bằng nhau Maxwell | đẳng thức Jarzynski |
| pl | energia swobodna Helmholtza | energia swobodna Gibbsa | współczynnik efektywności (COP) | konstrukcja Maxwella | równość Jarzynskiego |
| ar | طاقة هلمهولتز الحرة | طاقة غيبس الحرة | معامل الأداء (COP) | قاعدة ماكسويل للمساحتين المتساويتين | مساواة يارزينسكي |

Règles contextuelles supplémentaires :

- `enthalpie libre` est le nom français historique de l'énergie libre de Gibbs ;
  ne pas produire les calques `free enthalpy`, `自由焓`, `自由エンタルピー`,
  `자유 엔탈피` ou leurs équivalents ;
- la construction de Maxwell est la règle des aires égales, pas la règle du
  levier ; cette dernière est une autre règle des diagrammes de phases ;
- `cycles moteurs` et `cycles récepteurs` deviennent respectivement des cycles
  de puissance et de réfrigération dans les langues où le calque de
  « récepteur » n'est pas idiomatique (`power/refrigeration cycles`, `ciclos de
  potencia/refrigeración`, `ciclos de potência/refrigeração`, `动力循环/制冷循环`,
  `動力サイクル/冷凍サイクル`) ;
- `création d'entropie` se traduit par le terme scientifique correspondant à
  `entropy production`, notamment `producción de entropía` (es) et `produção de
  entropia` (pt), et non par un calque de « création » ;
- `endoréversible` signifie réversible à l'intérieur du système. En arabe,
  employer `عكوس داخليا` / `العكوسية الداخلية`, jamais `اللاعكوسية الداخلية`
  qui exprime le contraire ;
- `thermodynamique hors équilibre` signifie `الديناميكا الحرارية خارج التوازن`
  en arabe, et non « proche de l'équilibre », qui constitue un domaine plus
  restreint ;
- en arabe scientifique, employer `المسعرية` pour la calorimétrie,
  `التقلبات الكمومية` pour les fluctuations quantiques, `الظواهر المقترنة`
  pour les phénomènes couplés, `معامل الجدارة` pour la figure de mérite et
  `الكمونات الديناميكية الحرارية` pour les potentiels thermodynamiques ;
- la réciprocité d'Onsager se traduit par `पारस्परिकता` en hindi ; ne pas
  employer `व्युत्क्रमता`, qui renvoie plutôt à l'inversion ou à la
  réversibilité ;
- pour le réservoir thermique générique, éviter les mots désignant seulement
  un réservoir matériel : employer notamment `热库` (zh), `熱浴` (ja), `열원`
  (ko), `Nguồn nhiệt` (vi) et `الخزان الحراري` (ar) ;
- dans le contexte climatique, traduire `moteur atmosphérique` comme
  `atmospheric heat engine` et son équivalent explicite, afin d'éviter le sens
  historique anglais d'`atmospheric engine` ;
- le nom consacré est l'égalité de Jarzynski, au singulier. L'article original
  porte sur une égalité hors équilibre reliant une différence d'énergie libre
  à une moyenne de travaux.

## Portée actuelle

Ce prompt et le script couvrent uniquement les **leçons** (`leconN.tex`). La
traduction des **exercices** (`exercises_fr.tex`) et des **quiz**
(`lib/quizzes.ts`) suit un processus différent, pas encore défini — voir la
conversation du 2026-08-05.
