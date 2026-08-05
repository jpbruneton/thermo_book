import type { Lang } from "./i18n";

/**
 * Theme (leçon) title/description translations for languages beyond fr/en,
 * keyed by theme slug (see lib/chapters.ts `themes`). Individual lesson
 * content (the .tex body) is translated separately, file by file — see
 * docs/translation-prompt.md — so a theme can appear here with a translated
 * title/description well before its lesson content exists in that language.
 */
interface ThemeTranslationEntry {
  title: string;
  description: string;
  /** Only set for the three themes that open a new "Part" in the book. */
  partHeading?: string;
}

type ThemeTranslations = Record<string, ThemeTranslationEntry>;

export const chapterTranslations: Record<Exclude<Lang, "fr" | "en">, ThemeTranslations> = {
  de: {
    introduction: {
      title: "Allgemeine Einführung",
      description:
        "Warum Thermodynamik studieren: Umwandlung von Wärme in Arbeit, Wärmekraftmaschinen, Energiequellen und aktuelle Herausforderungen.",
      partHeading: "Teil I — Grundkurs",
    },
    historique: {
      title: "Geschichte der Thermodynamik und Kalorimetrie",
      description:
        "Von der Theorie des Caloricums zur Entropie von Clausius: die langsame Trennung von Wärme und Temperatur und die Entstehung der beiden Hauptsätze.",
    },
    "notions-fondamentales": {
      title: "Grundlegende Begriffe",
      description:
        "Gleichgewicht, nullter Hauptsatz, Wände, Zustandsgrößen und -funktionen, quasistatische Zustandsänderungen.",
    },
    "premier-principe": {
      title: "Energieerhaltung: der erste Hauptsatz",
      description: "Arbeit, Wärme, innere Energie und der erste Hauptsatz.",
    },
    "second-principe": {
      title: "Reversibilität und Irreversibilität: der zweite Hauptsatz",
      description: "Entropie, Reversibilität und der zweite Hauptsatz.",
    },
    "relations-fondamentales": {
      title: "Mathematische Struktur: die fundamentalen Beziehungen",
      description: "Fundamentale Beziehungen und thermodynamische Potentiale.",
    },
    "changements-de-variables": {
      title: "Formale Struktur: Variablenwechsel",
      description: "Differentialrechnung, Legendre-Transformation und thermodynamische Potentiale.",
    },
    coefficients: {
      title: "Kalorimetrische und thermoelastische Koeffizienten",
      description: "Kalorimetrische und thermoelastische Koeffizienten sowie Zustandsgleichungen.",
    },
    "transitions-de-phases": {
      title: "Phasenübergänge",
      description: "Phasendiagramme, Instabilitäten und das Van-der-Waals-Gas.",
    },
    "machines-thermiques": {
      title: "Wärmekraftmaschinen",
      description: "Zweispeicher-Kreisprozesse, der Carnot-Zyklus, Wirkungsgrade und Formulierungen des zweiten Hauptsatzes.",
    },
    "geometrie-differentielle": {
      title: "Differentialgeometrie in der Thermodynamik",
      description: "Die geometrischen Strukturen, die der Thermodynamik zugrunde liegen.",
      partHeading: "Teil II — Fortgeschrittene Thermodynamik",
    },
    "demon-de-maxwell": {
      title: "Der Maxwellsche Dämon",
      description: "Information, Entropie und die Grenzen der klassischen Thermodynamik.",
    },
    endoreversibilite: {
      title: "Endoreversible Kreisprozesse",
      description: "Wirkungsgrad bei maximaler Leistung und reale Wärmekraftmaschinen.",
    },
    thermoelectricite: {
      title: "Thermoelektrizität",
      description: "Thermoelektrische Effekte und Energieumwandlung.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Nichtgleichgewichtsthermodynamik",
      description: "Irreversible Phänomene und die Onsager-Beziehungen.",
    },
    climat: {
      title: "Klimatologie und Thermodynamik",
      description: "Thermodynamische Anwendungen auf das Klimasystem der Erde.",
    },
    "thermodynamique-quantique": {
      title: "Quantenthermodynamik",
      description: "Arbeit, Wärme und Entropie auf der Quantenskala.",
      partHeading: "Teil III — Quantenthermodynamik",
    },
  },
  es: {
    introduction: {
      title: "Introducción general",
      description:
        "Por qué estudiar termodinámica: conversión de calor en trabajo, máquinas térmicas, fuentes de energía y desafíos contemporáneos.",
      partHeading: "Parte I — Curso elemental",
    },
    historique: {
      title: "Historia de la termodinámica y la calorimetría",
      description:
        "De la teoría del calórico a la entropía de Clausius: la lenta separación entre calor y temperatura, y el nacimiento de los dos principios.",
    },
    "notions-fondamentales": {
      title: "Nociones fundamentales",
      description: "Equilibrio, principio cero, paredes, variables y funciones de estado, transformaciones cuasiestáticas.",
    },
    "premier-principe": {
      title: "Conservación de la energía: el primer principio",
      description: "Trabajo, calor, energía interna y el primer principio.",
    },
    "second-principe": {
      title: "Reversibilidad e irreversibilidad: el segundo principio",
      description: "Entropía, reversibilidad y el segundo principio.",
    },
    "relations-fondamentales": {
      title: "Estructura matemática: las relaciones fundamentales",
      description: "Relaciones fundamentales y potenciales termodinámicos.",
    },
    "changements-de-variables": {
      title: "Estructura formal: cambios de variables",
      description: "Cálculo diferencial, la transformada de Legendre y los potenciales termodinámicos.",
    },
    coefficients: {
      title: "Coeficientes calorimétricos y termoelásticos",
      description: "Coeficientes calorimétricos, termoelásticos y ecuaciones de estado.",
    },
    "transitions-de-phases": {
      title: "Transiciones de fase",
      description: "Diagramas de fase, inestabilidades y el gas de Van der Waals.",
    },
    "machines-thermiques": {
      title: "Máquinas térmicas",
      description: "Ciclos ditérmicos, el ciclo de Carnot, rendimientos y enunciados del segundo principio.",
    },
    "geometrie-differentielle": {
      title: "Geometría diferencial en termodinámica",
      description: "Las estructuras geométricas subyacentes a la termodinámica.",
      partHeading: "Parte II — Termodinámica avanzada",
    },
    "demon-de-maxwell": {
      title: "El demonio de Maxwell",
      description: "Información, entropía y los límites de la termodinámica clásica.",
    },
    endoreversibilite: {
      title: "Ciclos endorreversibles",
      description: "Rendimiento a potencia máxima y motores térmicos reales.",
    },
    thermoelectricite: {
      title: "Termoelectricidad",
      description: "Efectos termoeléctricos y conversión de energía.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Termodinámica fuera del equilibrio",
      description: "Fenómenos irreversibles y las relaciones de Onsager.",
    },
    climat: {
      title: "Climatología y termodinámica",
      description: "Aplicaciones termodinámicas al sistema climático terrestre.",
    },
    "thermodynamique-quantique": {
      title: "Termodinámica cuántica",
      description: "Trabajo, calor y entropía a escala cuántica.",
      partHeading: "Parte III — Termodinámica cuántica",
    },
  },
  pt: {
    introduction: {
      title: "Introdução geral",
      description:
        "Por que estudar termodinâmica: conversão de calor em trabalho, máquinas térmicas, fontes de energia e desafios contemporâneos.",
      partHeading: "Parte I — Curso elementar",
    },
    historique: {
      title: "História da termodinâmica e da calorimetria",
      description:
        "Da teoria do calórico à entropia de Clausius: a lenta separação entre calor e temperatura, e o nascimento dos dois princípios.",
    },
    "notions-fondamentales": {
      title: "Noções fundamentais",
      description: "Equilíbrio, princípio zero, paredes, variáveis e funções de estado, transformações quase-estáticas.",
    },
    "premier-principe": {
      title: "Conservação da energia: o primeiro princípio",
      description: "Trabalho, calor, energia interna e o primeiro princípio.",
    },
    "second-principe": {
      title: "Reversibilidade e irreversibilidade: o segundo princípio",
      description: "Entropia, reversibilidade e o segundo princípio.",
    },
    "relations-fondamentales": {
      title: "Estrutura matemática: as relações fundamentais",
      description: "Relações fundamentais e potenciais termodinâmicos.",
    },
    "changements-de-variables": {
      title: "Estrutura formal: mudanças de variáveis",
      description: "Cálculo diferencial, a transformada de Legendre e os potenciais termodinâmicos.",
    },
    coefficients: {
      title: "Coeficientes calorimétricos e termoelásticos",
      description: "Coeficientes calorimétricos, termoelásticos e equações de estado.",
    },
    "transitions-de-phases": {
      title: "Transições de fase",
      description: "Diagramas de fase, instabilidades e o gás de Van der Waals.",
    },
    "machines-thermiques": {
      title: "Máquinas térmicas",
      description: "Ciclos ditérmicos, o ciclo de Carnot, rendimentos e enunciados do segundo princípio.",
    },
    "geometrie-differentielle": {
      title: "Geometria diferencial em termodinâmica",
      description: "As estruturas geométricas subjacentes à termodinâmica.",
      partHeading: "Parte II — Termodinâmica avançada",
    },
    "demon-de-maxwell": {
      title: "O demônio de Maxwell",
      description: "Informação, entropia e os limites da termodinâmica clássica.",
    },
    endoreversibilite: {
      title: "Ciclos endorreversíveis",
      description: "Rendimento em potência máxima e motores térmicos reais.",
    },
    thermoelectricite: {
      title: "Termoeletricidade",
      description: "Efeitos termoelétricos e conversão de energia.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Termodinâmica fora do equilíbrio",
      description: "Fenômenos irreversíveis e as relações de Onsager.",
    },
    climat: {
      title: "Climatologia e termodinâmica",
      description: "Aplicações termodinâmicas ao sistema climático terrestre.",
    },
    "thermodynamique-quantique": {
      title: "Termodinâmica quântica",
      description: "Trabalho, calor e entropia na escala quântica.",
      partHeading: "Parte III — Termodinâmica quântica",
    },
  },
  it: {
    introduction: {
      title: "Introduzione generale",
      description:
        "Perché studiare la termodinamica: conversione calore-lavoro, macchine termiche, fonti di energia e sfide contemporanee.",
      partHeading: "Parte I — Corso elementare",
    },
    historique: {
      title: "Storia della termodinamica e della calorimetria",
      description:
        "Dalla teoria del calorico all'entropia di Clausius: la lenta separazione tra calore e temperatura, e la nascita dei due principi.",
    },
    "notions-fondamentales": {
      title: "Nozioni fondamentali",
      description: "Equilibrio, principio zero, pareti, variabili e funzioni di stato, trasformazioni quasi-statiche.",
    },
    "premier-principe": {
      title: "Conservazione dell'energia: il primo principio",
      description: "Lavoro, calore, energia interna e il primo principio.",
    },
    "second-principe": {
      title: "Reversibilità e irreversibilità: il secondo principio",
      description: "Entropia, reversibilità e il secondo principio.",
    },
    "relations-fondamentales": {
      title: "Struttura matematica: le relazioni fondamentali",
      description: "Relazioni fondamentali e potenziali termodinamici.",
    },
    "changements-de-variables": {
      title: "Struttura formale: cambi di variabili",
      description: "Calcolo differenziale, la trasformata di Legendre e i potenziali termodinamici.",
    },
    coefficients: {
      title: "Coefficienti calorimetrici e termoelastici",
      description: "Coefficienti calorimetrici, termoelastici ed equazioni di stato.",
    },
    "transitions-de-phases": {
      title: "Transizioni di fase",
      description: "Diagrammi di fase, instabilità e il gas di Van der Waals.",
    },
    "machines-thermiques": {
      title: "Macchine termiche",
      description: "Cicli ditermici, il ciclo di Carnot, rendimenti ed enunciati del secondo principio.",
    },
    "geometrie-differentielle": {
      title: "Geometria differenziale in termodinamica",
      description: "Le strutture geometriche alla base della termodinamica.",
      partHeading: "Parte II — Termodinamica avanzata",
    },
    "demon-de-maxwell": {
      title: "Il demone di Maxwell",
      description: "Informazione, entropia e i limiti della termodinamica classica.",
    },
    endoreversibilite: {
      title: "Cicli endoreversibili",
      description: "Rendimento a potenza massima e motori termici reali.",
    },
    thermoelectricite: {
      title: "Termoelettricità",
      description: "Effetti termoelettrici e conversione di energia.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Termodinamica di non equilibrio",
      description: "Fenomeni irreversibili e le relazioni di Onsager.",
    },
    climat: {
      title: "Climatologia e termodinamica",
      description: "Applicazioni termodinamiche al sistema climatico terrestre.",
    },
    "thermodynamique-quantique": {
      title: "Termodinamica quantistica",
      description: "Lavoro, calore ed entropia su scala quantistica.",
      partHeading: "Parte III — Termodinamica quantistica",
    },
  },
  pl: {
    introduction: {
      title: "Wprowadzenie ogólne",
      description:
        "Dlaczego warto studiować termodynamikę: przemiana ciepła w pracę, silniki cieplne, źródła energii i współczesne wyzwania.",
      partHeading: "Część I — Kurs podstawowy",
    },
    historique: {
      title: "Historia termodynamiki i kalorymetrii",
      description:
        "Od teorii cieplika do entropii Clausiusa: powolne oddzielenie ciepła od temperatury i narodziny dwóch zasad.",
    },
    "notions-fondamentales": {
      title: "Pojęcia podstawowe",
      description: "Równowaga, zasada zerowa, ścianki, zmienne i funkcje stanu, przemiany quasi-statyczne.",
    },
    "premier-principe": {
      title: "Zachowanie energii: pierwsza zasada",
      description: "Praca, ciepło, energia wewnętrzna i pierwsza zasada.",
    },
    "second-principe": {
      title: "Odwracalność i nieodwracalność: druga zasada",
      description: "Entropia, odwracalność i druga zasada.",
    },
    "relations-fondamentales": {
      title: "Struktura matematyczna: relacje podstawowe",
      description: "Relacje podstawowe i potencjały termodynamiczne.",
    },
    "changements-de-variables": {
      title: "Struktura formalna: zmiana zmiennych",
      description: "Rachunek różniczkowy, transformacja Legendre'a i potencjały termodynamiczne.",
    },
    coefficients: {
      title: "Współczynniki kalorymetryczne i termosprężyste",
      description: "Współczynniki kalorymetryczne, termosprężyste i równania stanu.",
    },
    "transitions-de-phases": {
      title: "Przemiany fazowe",
      description: "Diagramy fazowe, niestabilności i gaz Van der Waalsa.",
    },
    "machines-thermiques": {
      title: "Silniki cieplne",
      description: "Cykle dwutermiczne, cykl Carnota, sprawności i sformułowania drugiej zasady.",
    },
    "geometrie-differentielle": {
      title: "Geometria różniczkowa w termodynamice",
      description: "Struktury geometryczne leżące u podstaw termodynamiki.",
      partHeading: "Część II — Termodynamika zaawansowana",
    },
    "demon-de-maxwell": {
      title: "Demon Maxwella",
      description: "Informacja, entropia i granice termodynamiki klasycznej.",
    },
    endoreversibilite: {
      title: "Cykle endorewersyjne",
      description: "Sprawność przy maksymalnej mocy i rzeczywiste silniki cieplne.",
    },
    thermoelectricite: {
      title: "Termoelektryczność",
      description: "Efekty termoelektryczne i konwersja energii.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Termodynamika nierównowagowa",
      description: "Zjawiska nieodwracalne i relacje Onsagera.",
    },
    climat: {
      title: "Klimatologia i termodynamika",
      description: "Zastosowania termodynamiczne w ziemskim systemie klimatycznym.",
    },
    "thermodynamique-quantique": {
      title: "Termodynamika kwantowa",
      description: "Praca, ciepło i entropia w skali kwantowej.",
      partHeading: "Część III — Termodynamika kwantowa",
    },
  },
  ru: {
    introduction: {
      title: "Общее введение",
      description:
        "Зачем изучать термодинамику: преобразование теплоты в работу, тепловые машины, источники энергии и современные вызовы.",
      partHeading: "Часть I — Базовый курс",
    },
    historique: {
      title: "История термодинамики и калориметрии",
      description:
        "От теории теплорода к энтропии Клаузиуса: медленное разделение понятий теплоты и температуры и рождение двух начал.",
    },
    "notions-fondamentales": {
      title: "Основные понятия",
      description: "Равновесие, нулевое начало, стенки, переменные и функции состояния, квазистатические процессы.",
    },
    "premier-principe": {
      title: "Сохранение энергии: первое начало",
      description: "Работа, теплота, внутренняя энергия и первое начало.",
    },
    "second-principe": {
      title: "Обратимость и необратимость: второе начало",
      description: "Энтропия, обратимость и второе начало.",
    },
    "relations-fondamentales": {
      title: "Математическая структура: фундаментальные соотношения",
      description: "Фундаментальные соотношения и термодинамические потенциалы.",
    },
    "changements-de-variables": {
      title: "Формальная структура: замена переменных",
      description: "Дифференциальное исчисление, преобразование Лежандра и термодинамические потенциалы.",
    },
    coefficients: {
      title: "Калориметрические и термоупругие коэффициенты",
      description: "Калориметрические, термоупругие коэффициенты и уравнения состояния.",
    },
    "transitions-de-phases": {
      title: "Фазовые переходы",
      description: "Фазовые диаграммы, неустойчивости и газ Ван-дер-Ваальса.",
    },
    "machines-thermiques": {
      title: "Тепловые машины",
      description: "Двухрезервуарные циклы, цикл Карно, КПД и формулировки второго начала.",
    },
    "geometrie-differentielle": {
      title: "Дифференциальная геометрия в термодинамике",
      description: "Геометрические структуры, лежащие в основе термодинамики.",
      partHeading: "Часть II — Продвинутая термодинамика",
    },
    "demon-de-maxwell": {
      title: "Демон Максвелла",
      description: "Информация, энтропия и границы классической термодинамики.",
    },
    endoreversibilite: {
      title: "Эндореверсивные циклы",
      description: "КПД при максимальной мощности и реальные тепловые машины.",
    },
    thermoelectricite: {
      title: "Термоэлектричество",
      description: "Термоэлектрические эффекты и преобразование энергии.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Неравновесная термодинамика",
      description: "Необратимые явления и соотношения Онзагера.",
    },
    climat: {
      title: "Климатология и термодинамика",
      description: "Термодинамические приложения к климатической системе Земли.",
    },
    "thermodynamique-quantique": {
      title: "Квантовая термодинамика",
      description: "Работа, теплота и энтропия в квантовом масштабе.",
      partHeading: "Часть III — Квантовая термодинамика",
    },
  },
  zh: {
    introduction: {
      title: "总体介绍",
      description: "为什么要学习热力学：热功转换、热机、能源以及当代挑战。",
      partHeading: "第一部分——基础课程",
    },
    historique: {
      title: "热力学与量热学的历史",
      description: "从热质说到克劳修斯熵：热与温度概念的缓慢分离，以及两大定律的诞生。",
    },
    "notions-fondamentales": {
      title: "基本概念",
      description: "平衡态、第零定律、壁、状态变量与状态函数、准静态过程。",
    },
    "premier-principe": {
      title: "能量守恒：热力学第一定律",
      description: "功、热、内能与第一定律。",
    },
    "second-principe": {
      title: "可逆与不可逆：热力学第二定律",
      description: "熵、可逆性与第二定律。",
    },
    "relations-fondamentales": {
      title: "数学结构：基本关系式",
      description: "基本关系式与热力学势。",
    },
    "changements-de-variables": {
      title: "形式结构：变量变换",
      description: "微分计算、勒让德变换与热力学势。",
    },
    coefficients: {
      title: "量热系数与热弹性系数",
      description: "量热系数、热弹性系数与状态方程。",
    },
    "transitions-de-phases": {
      title: "相变",
      description: "相图、不稳定性与范德瓦尔斯气体。",
    },
    "machines-thermiques": {
      title: "热机",
      description: "双热源循环、卡诺循环、效率与第二定律的表述。",
    },
    "geometrie-differentielle": {
      title: "热力学中的微分几何",
      description: "热力学背后的几何结构。",
      partHeading: "第二部分——进阶热力学",
    },
    "demon-de-maxwell": {
      title: "麦克斯韦妖",
      description: "信息、熵与经典热力学的局限。",
    },
    endoreversibilite: {
      title: "内可逆循环",
      description: "最大功率下的效率与真实热机。",
    },
    thermoelectricite: {
      title: "热电效应",
      description: "热电效应与能量转换。",
    },
    "thermodynamique-hors-equilibre": {
      title: "非平衡态热力学",
      description: "不可逆现象与昂萨格关系。",
    },
    climat: {
      title: "气候学与热力学",
      description: "热力学在地球气候系统中的应用。",
    },
    "thermodynamique-quantique": {
      title: "量子热力学",
      description: "量子尺度下的功、热与熵。",
      partHeading: "第三部分——量子热力学",
    },
  },
  ja: {
    introduction: {
      title: "全体的な導入",
      description: "なぜ熱力学を学ぶのか：熱と仕事の変換、熱機関、エネルギー源、そして現代的な課題。",
      partHeading: "第1部——基礎コース",
    },
    historique: {
      title: "熱力学と熱量測定の歴史",
      description: "熱素説からクラウジウスのエントロピーへ：熱と温度という概念のゆるやかな分離と、二つの法則の誕生。",
    },
    "notions-fondamentales": {
      title: "基礎概念",
      description: "平衡、熱力学第零法則、壁、状態変数と状態関数、準静的過程。",
    },
    "premier-principe": {
      title: "エネルギー保存：熱力学第一法則",
      description: "仕事、熱、内部エネルギー、そして第一法則。",
    },
    "second-principe": {
      title: "可逆性と不可逆性：熱力学第二法則",
      description: "エントロピー、可逆性、そして第二法則。",
    },
    "relations-fondamentales": {
      title: "数学的構造：基本関係式",
      description: "基本関係式と熱力学ポテンシャル。",
    },
    "changements-de-variables": {
      title: "形式的構造：変数変換",
      description: "微分法、ルジャンドル変換、そして熱力学ポテンシャル。",
    },
    coefficients: {
      title: "熱量係数と熱弾性係数",
      description: "熱量係数、熱弾性係数、そして状態方程式。",
    },
    "transitions-de-phases": {
      title: "相転移",
      description: "相図、不安定性、そしてファンデルワールス気体。",
    },
    "machines-thermiques": {
      title: "熱機関",
      description: "二熱源サイクル、カルノーサイクル、効率、そして第二法則の諸表現。",
    },
    "geometrie-differentielle": {
      title: "熱力学における微分幾何学",
      description: "熱力学の背後にある幾何学的構造。",
      partHeading: "第2部——発展的熱力学",
    },
    "demon-de-maxwell": {
      title: "マクスウェルの悪魔",
      description: "情報、エントロピー、そして古典熱力学の限界。",
    },
    endoreversibilite: {
      title: "内的可逆サイクル",
      description: "最大出力時の効率と現実の熱機関。",
    },
    thermoelectricite: {
      title: "熱電気",
      description: "熱電効果とエネルギー変換。",
    },
    "thermodynamique-hors-equilibre": {
      title: "非平衡熱力学",
      description: "不可逆現象とオンサーガーの関係式。",
    },
    climat: {
      title: "気候学と熱力学",
      description: "地球気候システムへの熱力学的応用。",
    },
    "thermodynamique-quantique": {
      title: "量子熱力学",
      description: "量子スケールにおける仕事、熱、エントロピー。",
      partHeading: "第3部——量子熱力学",
    },
  },
  ko: {
    introduction: {
      title: "전체 소개",
      description: "왜 열역학을 공부해야 하는가: 열-일 변환, 열기관, 에너지원, 그리고 현대적 과제들.",
      partHeading: "제1부 — 기초 과정",
    },
    historique: {
      title: "열역학과 열량측정의 역사",
      description: "열소설에서 클라우지우스의 엔트로피까지: 열과 온도 개념의 더딘 분리, 그리고 두 법칙의 탄생.",
    },
    "notions-fondamentales": {
      title: "기본 개념",
      description: "평형, 열역학 제0법칙, 벽, 상태변수와 상태함수, 준정적 과정.",
    },
    "premier-principe": {
      title: "에너지 보존: 열역학 제1법칙",
      description: "일, 열, 내부 에너지, 그리고 제1법칙.",
    },
    "second-principe": {
      title: "가역성과 비가역성: 열역학 제2법칙",
      description: "엔트로피, 가역성, 그리고 제2법칙.",
    },
    "relations-fondamentales": {
      title: "수학적 구조: 기본 관계식",
      description: "기본 관계식과 열역학 퍼텐셜.",
    },
    "changements-de-variables": {
      title: "형식적 구조: 변수 변환",
      description: "미분법, 르장드르 변환, 그리고 열역학 퍼텐셜.",
    },
    coefficients: {
      title: "열량 계수와 열탄성 계수",
      description: "열량 계수, 열탄성 계수, 그리고 상태방정식.",
    },
    "transitions-de-phases": {
      title: "상전이",
      description: "상평형 그림, 불안정성, 그리고 반데르발스 기체.",
    },
    "machines-thermiques": {
      title: "열기관",
      description: "이열원 사이클, 카르노 사이클, 효율, 그리고 제2법칙의 여러 표현.",
    },
    "geometrie-differentielle": {
      title: "열역학의 미분기하학",
      description: "열역학의 근간을 이루는 기하학적 구조.",
      partHeading: "제2부 — 심화 열역학",
    },
    "demon-de-maxwell": {
      title: "맥스웰의 악마",
      description: "정보, 엔트로피, 그리고 고전 열역학의 한계.",
    },
    endoreversibilite: {
      title: "내부가역 사이클",
      description: "최대 출력에서의 효율과 실제 열기관.",
    },
    thermoelectricite: {
      title: "열전기",
      description: "열전 효과와 에너지 변환.",
    },
    "thermodynamique-hors-equilibre": {
      title: "비평형 열역학",
      description: "비가역 현상과 온사거 관계식.",
    },
    climat: {
      title: "기후학과 열역학",
      description: "지구 기후 시스템에 대한 열역학적 응용.",
    },
    "thermodynamique-quantique": {
      title: "양자 열역학",
      description: "양자 규모에서의 일, 열, 엔트로피.",
      partHeading: "제3부 — 양자 열역학",
    },
  },
  hi: {
    introduction: {
      title: "सामान्य परिचय",
      description: "ऊष्मागतिकी का अध्ययन क्यों करें: ऊष्मा-कार्य रूपांतरण, ऊष्मा इंजन, ऊर्जा स्रोत और समकालीन चुनौतियाँ।",
      partHeading: "भाग I — प्रारंभिक पाठ्यक्रम",
    },
    historique: {
      title: "ऊष्मागतिकी एवं ऊष्मामिति का इतिहास",
      description: "कैलोरिक सिद्धांत से क्लॉसियस की एन्ट्रॉपी तक: ऊष्मा और तापमान के बीच धीमे पृथक्करण, तथा दो सिद्धांतों का जन्म।",
    },
    "notions-fondamentales": {
      title: "मूल अवधारणाएँ",
      description: "साम्यावस्था, शून्यवाँ नियम, दीवारें, अवस्था चर एवं फलन, अर्ध-स्थैतिक प्रक्रियाएँ।",
    },
    "premier-principe": {
      title: "ऊर्जा संरक्षण: प्रथम नियम",
      description: "कार्य, ऊष्मा, आंतरिक ऊर्जा और प्रथम नियम।",
    },
    "second-principe": {
      title: "प्रतिवर्तनीयता और अप्रतिवर्तनीयता: द्वितीय नियम",
      description: "एन्ट्रॉपी, प्रतिवर्तनीयता और द्वितीय नियम।",
    },
    "relations-fondamentales": {
      title: "गणितीय संरचना: मूल संबंध",
      description: "मूल संबंध और ऊष्मागतिक विभव।",
    },
    "changements-de-variables": {
      title: "औपचारिक संरचना: चर परिवर्तन",
      description: "अवकल गणना, लेजांड्र रूपांतरण और ऊष्मागतिक विभव।",
    },
    coefficients: {
      title: "ऊष्मामितीय एवं ऊष्मा-प्रत्यास्थ गुणांक",
      description: "ऊष्मामितीय गुणांक, ऊष्मा-प्रत्यास्थ गुणांक और अवस्था समीकरण।",
    },
    "transitions-de-phases": {
      title: "प्रावस्था संक्रमण",
      description: "प्रावस्था आरेख, अस्थिरताएँ और वान डेर वाल्स गैस।",
    },
    "machines-thermiques": {
      title: "ऊष्मा इंजन",
      description: "द्वि-स्रोत चक्र, कार्नो चक्र, दक्षता और द्वितीय नियम के कथन।",
    },
    "geometrie-differentielle": {
      title: "ऊष्मागतिकी में अवकल ज्यामिति",
      description: "ऊष्मागतिकी के आधारभूत ज्यामितीय संरचनाएँ।",
      partHeading: "भाग II — उन्नत ऊष्मागतिकी",
    },
    "demon-de-maxwell": {
      title: "मैक्सवेल का दानव",
      description: "सूचना, एन्ट्रॉपी और चिरसम्मत ऊष्मागतिकी की सीमाएँ।",
    },
    endoreversibilite: {
      title: "अंतःप्रतिवर्ती चक्र",
      description: "अधिकतम शक्ति पर दक्षता और वास्तविक ऊष्मा इंजन।",
    },
    thermoelectricite: {
      title: "थर्मोइलेक्ट्रिसिटी",
      description: "थर्मोइलेक्ट्रिक प्रभाव और ऊर्जा रूपांतरण।",
    },
    "thermodynamique-hors-equilibre": {
      title: "असाम्य ऊष्मागतिकी",
      description: "अप्रतिवर्ती परिघटनाएँ और ऑन्सागर संबंध।",
    },
    climat: {
      title: "जलवायु विज्ञान और ऊष्मागतिकी",
      description: "पृथ्वी की जलवायु प्रणाली पर ऊष्मागतिक अनुप्रयोग।",
    },
    "thermodynamique-quantique": {
      title: "क्वांटम ऊष्मागतिकी",
      description: "क्वांटम स्तर पर कार्य, ऊष्मा और एन्ट्रॉपी।",
      partHeading: "भाग III — क्वांटम ऊष्मागतिकी",
    },
  },
  vi: {
    introduction: {
      title: "Giới thiệu chung",
      description:
        "Vì sao nên học nhiệt động lực học: chuyển hóa nhiệt thành công, động cơ nhiệt, nguồn năng lượng và những thách thức đương đại.",
      partHeading: "Phần I — Khóa học cơ bản",
    },
    historique: {
      title: "Lịch sử nhiệt động lực học và nhiệt lượng học",
      description:
        "Từ thuyết chất nhiệt đến entropy của Clausius: sự tách biệt chậm rãi giữa nhiệt và nhiệt độ, và sự ra đời của hai định luật.",
    },
    "notions-fondamentales": {
      title: "Các khái niệm cơ bản",
      description: "Cân bằng, định luật số không, vách ngăn, biến số và hàm trạng thái, quá trình tựa tĩnh.",
    },
    "premier-principe": {
      title: "Bảo toàn năng lượng: định luật thứ nhất",
      description: "Công, nhiệt, nội năng và định luật thứ nhất.",
    },
    "second-principe": {
      title: "Thuận nghịch và bất thuận nghịch: định luật thứ hai",
      description: "Entropy, tính thuận nghịch và định luật thứ hai.",
    },
    "relations-fondamentales": {
      title: "Cấu trúc toán học: các hệ thức cơ bản",
      description: "Các hệ thức cơ bản và thế nhiệt động.",
    },
    "changements-de-variables": {
      title: "Cấu trúc hình thức: đổi biến",
      description: "Phép tính vi phân, biến đổi Legendre và các thế nhiệt động.",
    },
    coefficients: {
      title: "Hệ số nhiệt lượng và hệ số nhiệt đàn hồi",
      description: "Hệ số nhiệt lượng, hệ số nhiệt đàn hồi và phương trình trạng thái.",
    },
    "transitions-de-phases": {
      title: "Chuyển pha",
      description: "Giản đồ pha, sự mất ổn định và khí Van der Waals.",
    },
    "machines-thermiques": {
      title: "Động cơ nhiệt",
      description: "Chu trình hai nguồn nhiệt, chu trình Carnot, hiệu suất và các phát biểu của định luật thứ hai.",
    },
    "geometrie-differentielle": {
      title: "Hình học vi phân trong nhiệt động lực học",
      description: "Các cấu trúc hình học nền tảng của nhiệt động lực học.",
      partHeading: "Phần II — Nhiệt động lực học nâng cao",
    },
    "demon-de-maxwell": {
      title: "Quỷ Maxwell",
      description: "Thông tin, entropy và giới hạn của nhiệt động lực học cổ điển.",
    },
    endoreversibilite: {
      title: "Chu trình nội thuận nghịch",
      description: "Hiệu suất tại công suất cực đại và các động cơ nhiệt thực tế.",
    },
    thermoelectricite: {
      title: "Nhiệt điện",
      description: "Hiệu ứng nhiệt điện và chuyển hóa năng lượng.",
    },
    "thermodynamique-hors-equilibre": {
      title: "Nhiệt động lực học phi cân bằng",
      description: "Các hiện tượng bất thuận nghịch và hệ thức Onsager.",
    },
    climat: {
      title: "Khí hậu học và nhiệt động lực học",
      description: "Các ứng dụng nhiệt động lực học cho hệ thống khí hậu Trái Đất.",
    },
    "thermodynamique-quantique": {
      title: "Nhiệt động lực học lượng tử",
      description: "Công, nhiệt và entropy ở thang lượng tử.",
      partHeading: "Phần III — Nhiệt động lực học lượng tử",
    },
  },
  ar: {
    introduction: {
      title: "مقدمة عامة",
      description: "لماذا ندرس الديناميكا الحرارية: تحويل الحرارة إلى شغل، المحركات الحرارية، مصادر الطاقة، والتحديات المعاصرة.",
      partHeading: "الجزء الأول — المقرر الأساسي",
    },
    historique: {
      title: "تاريخ الديناميكا الحرارية وقياس الحرارة",
      description: "من نظرية الحريرة إلى إنتروبيا كلاوزيوس: الانفصال البطيء بين الحرارة ودرجة الحرارة، وولادة المبدأين.",
    },
    "notions-fondamentales": {
      title: "المفاهيم الأساسية",
      description: "التوازن، المبدأ الصفري، الجدران، متغيرات ودوال الحالة، التحولات شبه الساكنة.",
    },
    "premier-principe": {
      title: "حفظ الطاقة: المبدأ الأول",
      description: "الشغل، الحرارة، الطاقة الداخلية، والمبدأ الأول.",
    },
    "second-principe": {
      title: "الانعكاسية واللاانعكاسية: المبدأ الثاني",
      description: "الإنتروبيا، الانعكاسية، والمبدأ الثاني.",
    },
    "relations-fondamentales": {
      title: "البنية الرياضية: العلاقات الأساسية",
      description: "العلاقات الأساسية والكمونات الحرارية الديناميكية.",
    },
    "changements-de-variables": {
      title: "البنية الصورية: تغيير المتغيرات",
      description: "الحساب التفاضلي، تحويل ليجاندر، والكمونات الحرارية الديناميكية.",
    },
    coefficients: {
      title: "المعاملات الحرورية والحراري-المرنة",
      description: "المعاملات الحرورية، المعاملات الحراري-المرنة، ومعادلات الحالة.",
    },
    "transitions-de-phases": {
      title: "التحولات الطورية",
      description: "مخططات الأطوار، حالات عدم الاستقرار، وغاز فان دير فالس.",
    },
    "machines-thermiques": {
      title: "المحركات الحرارية",
      description: "الدورات ثنائية المصدر الحراري، دورة كارنو، المردودات، وصيغ المبدأ الثاني.",
    },
    "geometrie-differentielle": {
      title: "الهندسة التفاضلية في الديناميكا الحرارية",
      description: "البنى الهندسية الكامنة وراء الديناميكا الحرارية.",
      partHeading: "الجزء الثاني — الديناميكا الحرارية المتقدمة",
    },
    "demon-de-maxwell": {
      title: "شيطان ماكسويل",
      description: "المعلومات، الإنتروبيا، وحدود الديناميكا الحرارية الكلاسيكية.",
    },
    endoreversibilite: {
      title: "الدورات اللاعكوسية الداخلية",
      description: "المردود عند أقصى قدرة، والمحركات الحرارية الواقعية.",
    },
    thermoelectricite: {
      title: "الكهروحرارية",
      description: "التأثيرات الكهروحرارية وتحويل الطاقة.",
    },
    "thermodynamique-hors-equilibre": {
      title: "الديناميكا الحرارية القريبة من التوازن",
      description: "الظواهر اللاانعكاسية وعلاقات أونساغر.",
    },
    climat: {
      title: "علم المناخ والديناميكا الحرارية",
      description: "تطبيقات الديناميكا الحرارية على النظام المناخي للأرض.",
    },
    "thermodynamique-quantique": {
      title: "الديناميكا الحرارية الكمومية",
      description: "الشغل، الحرارة، والإنتروبيا على المقياس الكمومي.",
      partHeading: "الجزء الثالث — الديناميكا الحرارية الكمومية",
    },
  },
};
