import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const translations = {
  ar: {
    font: "Noto Naskh Arabic", script: "Arabic", rtl: true,
    hot: "المصدر الساخن", cold: "المصدر البارد", single: "مصدر حراري وحيد",
    title: "الديناميكا الحرارية", macro: ["وصف نظام", "عياني"],
    without: "من دون تتبع", particles: "جسيمًا", state: "متغيرات الحالة", concentrations: "التراكيز",
    first: "القانون الأول", conservation: "حفظ الطاقة", internal: "الطاقة الداخلية",
    second: "القانون الثاني", direction: "اتجاه التحولات", entropy: "الإنتروبيا",
    formalism: "الصياغة العامة للديناميكا الحرارية",
    applications: ["التطبيقات: المحركات الحرارية، التحولات الطورية", "الكيمياء، الفيزياء الفلكية"],
  },
  bn: {
    font: "Nirmala UI", script: "Bengali",
    hot: "উষ্ণ উৎস", cold: "শীতল উৎস", single: "একক তাপীয় উৎস",
    title: "তাপগতিবিদ্যা", macro: ["একটি বৃহদাকার ব্যবস্থার", "বর্ণনা"],
    without: "অনুসরণ না করে", particles: "কণা", state: "অবস্থা চলক", concentrations: "ঘনমাত্রা",
    first: "প্রথম সূত্র", conservation: "শক্তির সংরক্ষণ", internal: "অন্তঃশক্তি",
    second: "দ্বিতীয় সূত্র", direction: "রূপান্তরের দিক", entropy: "এনট্রপি",
    formalism: "তাপগতিবিদ্যার সাধারণ কাঠামো",
    applications: ["প্রয়োগ: তাপ ইঞ্জিন, দশা পরিবর্তন", "রসায়ন, জ্যোতির্পদার্থবিজ্ঞান"],
  },
  de: {
    font: "Noto Serif",
    hot: "Heiße Quelle", cold: "Kalte Quelle", single: "Einzige Wärmequelle",
    title: "Thermodynamik", macro: ["Ein makroskopisches", "System beschreiben"],
    without: "Ohne einzelne Verfolgung der", particles: "Teilchen", state: "Zustandsgrößen", concentrations: "Konzentrationen",
    first: "Erster Hauptsatz", conservation: "Energieerhaltung", internal: "Innere Energie",
    second: "Zweiter Hauptsatz", direction: "Richtung der Prozesse", entropy: "Entropie",
    formalism: "Allgemeiner Formalismus der Thermodynamik",
    applications: ["Anwendungen: Wärmekraftmaschinen, Phasenübergänge", "Chemie, Astrophysik"],
  },
  en: {
    font: "Noto Serif",
    hot: "Hot reservoir", cold: "Cold reservoir", single: "Single reservoir",
    title: "Thermodynamics", macro: ["Describe a macroscopic", "system"],
    without: "Without tracking the", particles: "particles", state: "State variables", concentrations: "concentrations",
    first: "First law", conservation: "Conservation of energy", internal: "Internal energy",
    second: "Second law", direction: "Direction of processes", entropy: "Entropy",
    formalism: "General formalism of thermodynamics",
    applications: ["Applications: heat engines, phase transitions", "chemistry, astrophysics"],
  },
  es: {
    font: "Noto Serif",
    hot: "Foco caliente", cold: "Foco frío", single: "Fuente térmica única",
    title: "Termodinámica", macro: ["Describir un sistema", "macroscópico"],
    without: "Sin seguir las", particles: "partículas", state: "Variables de estado", concentrations: "concentraciones",
    first: "Primer principio", conservation: "Conservación de la energía", internal: "Energía interna",
    second: "Segundo principio", direction: "Sentido de las transformaciones", entropy: "Entropía",
    formalism: "Formalismo general de la termodinámica",
    applications: ["Aplicaciones: máquinas térmicas, cambios de fase", "química, astrofísica"],
  },
  fa: {
    font: "Noto Naskh Arabic", script: "Arabic", rtl: true,
    hot: "منبع گرم", cold: "منبع سرد", single: "منبع گرمایی یگانه",
    title: "ترمودینامیک", macro: ["توصیف یک سامانه", "ماکروسکوپی"],
    without: "بدون دنبال کردن", particles: "ذره", state: "متغیرهای حالت", concentrations: "غلظت‌ها",
    first: "قانون اول", conservation: "پایستگی انرژی", internal: "انرژی درونی",
    second: "قانون دوم", direction: "جهت فرایندها", entropy: "آنتروپی",
    formalism: "صورت‌بندی کلی ترمودینامیک",
    applications: ["کاربردها: ماشین‌های گرمایی، گذارهای فاز", "شیمی، اخترفیزیک"],
  },
  fr: {
    font: "Noto Serif",
    hot: "Source chaude", cold: "Source froide", single: "Source unique",
    title: "Thermodynamique", macro: ["Décrire un système", "macroscopique"],
    without: "Sans suivre les", particles: "particules", state: "Variables d'état", concentrations: "concentrations",
    first: "Premier principe", conservation: "Conservation de l'énergie", internal: "Énergie interne",
    second: "Second principe", direction: "Sens des transformations", entropy: "Entropie",
    formalism: "Formalisme général de la thermodynamique",
    applications: ["Applications : machines thermiques, changements", "de phase, chimie, astrophysique"],
  },
  hi: {
    font: "Nirmala UI", script: "Devanagari",
    hot: "गर्म स्रोत", cold: "ठंडा स्रोत", single: "एकल ऊष्मा स्रोत",
    title: "ऊष्मागतिकी", macro: ["एक स्थूलदर्शी निकाय का", "वर्णन"],
    without: "अनुसरण किए बिना", particles: "कण", state: "अवस्था चर", concentrations: "सांद्रताएँ",
    first: "प्रथम नियम", conservation: "ऊर्जा संरक्षण", internal: "आंतरिक ऊर्जा",
    second: "द्वितीय नियम", direction: "परिवर्तनों की दिशा", entropy: "एन्ट्रॉपी",
    formalism: "ऊष्मागतिकी का सामान्य औपचारिक ढाँचा",
    applications: ["अनुप्रयोग: ऊष्मा इंजन, प्रावस्था परिवर्तन", "रसायन, खगोलभौतिकी"],
  },
  id: {
    font: "Noto Serif",
    hot: "Reservoir panas", cold: "Reservoir dingin", single: "Reservoir tunggal",
    title: "Termodinamika", macro: ["Mendeskripsikan sistem", "makroskopik"],
    without: "Tanpa melacak", particles: "partikel", state: "Variabel keadaan", concentrations: "konsentrasi",
    first: "Hukum pertama", conservation: "Kekekalan energi", internal: "Energi dalam",
    second: "Hukum kedua", direction: "Arah proses", entropy: "Entropi",
    formalism: "Formalisme umum termodinamika",
    applications: ["Aplikasi: mesin kalor, perubahan fase", "kimia, astrofisika"],
  },
  it: {
    font: "Noto Serif",
    hot: "Sorgente calda", cold: "Sorgente fredda", single: "Sorgente unica",
    title: "Termodinamica", macro: ["Descrivere un sistema", "macroscopico"],
    without: "Senza seguire le", particles: "particelle", state: "Variabili di stato", concentrations: "concentrazioni",
    first: "Primo principio", conservation: "Conservazione dell'energia", internal: "Energia interna",
    second: "Secondo principio", direction: "Direzione delle trasformazioni", entropy: "Entropia",
    formalism: "Formalismo generale della termodinamica",
    applications: ["Applicazioni: macchine termiche, transizioni di fase", "chimica, astrofisica"],
  },
  ja: {
    font: "Yu Gothic",
    hot: "高温熱源", cold: "低温熱源", single: "単一熱源",
    title: "熱力学", macro: ["巨視的な系を", "記述する"],
    without: "個別に追跡しない", particles: "個の粒子", state: "状態変数", concentrations: "濃度",
    first: "熱力学第一法則", conservation: "エネルギー保存", internal: "内部エネルギー",
    second: "熱力学第二法則", direction: "変化の方向", entropy: "エントロピー",
    formalism: "熱力学の一般形式",
    applications: ["応用：熱機関、相転移", "化学、宇宙物理学"],
  },
  ko: {
    font: "Malgun Gothic",
    hot: "고온 열원", cold: "저온 열원", single: "단일 열원",
    title: "열역학", macro: ["거시적 계를", "기술하기"],
    without: "개별적으로 추적하지 않는", particles: "개의 입자", state: "상태 변수", concentrations: "농도",
    first: "열역학 제1법칙", conservation: "에너지 보존", internal: "내부 에너지",
    second: "열역학 제2법칙", direction: "변화의 방향", entropy: "엔트로피",
    formalism: "열역학의 일반 형식",
    applications: ["응용: 열기관, 상전이", "화학, 천체물리학"],
  },
  pl: {
    font: "Noto Serif",
    hot: "Źródło gorące", cold: "Źródło zimne", single: "Pojedyncze źródło",
    title: "Termodynamika", macro: ["Opisać układ", "makroskopowy"],
    without: "Bez śledzenia", particles: "cząstek", state: "Zmienne stanu", concentrations: "stężenia",
    first: "Pierwsza zasada", conservation: "Zachowanie energii", internal: "Energia wewnętrzna",
    second: "Druga zasada", direction: "Kierunek przemian", entropy: "Entropia",
    formalism: "Ogólny formalizm termodynamiki",
    applications: ["Zastosowania: silniki cieplne, przemiany fazowe", "chemia, astrofizyka"],
  },
  pt: {
    font: "Noto Serif",
    hot: "Fonte quente", cold: "Fonte fria", single: "Fonte única",
    title: "Termodinâmica", macro: ["Descrever um sistema", "macroscópico"],
    without: "Sem acompanhar as", particles: "partículas", state: "Variáveis de estado", concentrations: "concentrações",
    first: "Primeira lei", conservation: "Conservação da energia", internal: "Energia interna",
    second: "Segunda lei", direction: "Sentido das transformações", entropy: "Entropia",
    formalism: "Formalismo geral da termodinâmica",
    applications: ["Aplicações: máquinas térmicas, mudanças de fase", "química, astrofísica"],
  },
  ru: {
    font: "Noto Serif",
    hot: "Горячий источник", cold: "Холодный источник", single: "Единственный источник",
    title: "Термодинамика", macro: ["Описать макроскопическую", "систему"],
    without: "Не отслеживая", particles: "частиц", state: "Переменные состояния", concentrations: "концентрации",
    first: "Первое начало", conservation: "Сохранение энергии", internal: "Внутренняя энергия",
    second: "Второе начало", direction: "Направление процессов", entropy: "Энтропия",
    formalism: "Общий формализм термодинамики",
    applications: ["Применения: тепловые машины, фазовые переходы", "химия, астрофизика"],
  },
  sw: {
    font: "Noto Serif",
    hot: "Chanzo cha joto", cold: "Chanzo baridi", single: "Chanzo kimoja",
    title: "Termodinamiki", macro: ["Kueleza mfumo", "wa makroskopiki"],
    without: "Bila kufuatilia", particles: "chembe", state: "Vigezo vya hali", concentrations: "mikusanyiko",
    first: "Sheria ya kwanza", conservation: "Uhifadhi wa nishati", internal: "Nishati ya ndani",
    second: "Sheria ya pili", direction: "Mwelekeo wa mabadiliko", entropy: "Entropia",
    formalism: "Mfumo wa jumla wa termodinamiki",
    applications: ["Matumizi: injini za joto, mabadiliko ya awamu", "kemia, astrofizikia"],
  },
  tr: {
    font: "Noto Serif",
    hot: "Sıcak kaynak", cold: "Soğuk kaynak", single: "Tek ısı kaynağı",
    title: "Termodinamik", macro: ["Makroskopik bir sistemi", "betimlemek"],
    without: "Tek tek izlemeden", particles: "parçacık", state: "Durum değişkenleri", concentrations: "derişimler",
    first: "Birinci yasa", conservation: "Enerjinin korunumu", internal: "İç enerji",
    second: "İkinci yasa", direction: "Süreçlerin yönü", entropy: "Entropi",
    formalism: "Termodinamiğin genel biçimciliği",
    applications: ["Uygulamalar: ısı makineleri, faz geçişleri", "kimya, astrofizik"],
  },
  ur: {
    font: "Noto Naskh Arabic", script: "Arabic", rtl: true,
    hot: "گرم منبع", cold: "سرد منبع", single: "واحد حرارتی منبع",
    title: "حر حرکیات", macro: ["ایک میکروسکوپی نظام کی", "وضاحت"],
    without: "بغیر تعاقب کیے", particles: "ذرات", state: "حالت کے متغیرات", concentrations: "ارتکازات",
    first: "پہلا قانون", conservation: "توانائی کا تحفظ", internal: "داخلی توانائی",
    second: "دوسرا قانون", direction: "تبدیلیوں کی سمت", entropy: "اینٹروپی",
    formalism: "حر حرکیات کی عمومی تشکیل",
    applications: ["اطلاقات: حرارتی انجن، مرحلہ جاتی تبدیلیاں", "کیمیا، فلکی طبیعیات"],
  },
  vi: {
    font: "Noto Serif",
    hot: "Nguồn nóng", cold: "Nguồn lạnh", single: "Nguồn nhiệt duy nhất",
    title: "Nhiệt động lực học", macro: ["Mô tả một hệ", "vĩ mô"],
    without: "Không theo dõi", particles: "hạt", state: "Biến trạng thái", concentrations: "nồng độ",
    first: "Nguyên lý thứ nhất", conservation: "Bảo toàn năng lượng", internal: "Nội năng",
    second: "Nguyên lý thứ hai", direction: "Chiều của các quá trình", entropy: "Entropy",
    formalism: "Khuôn khổ tổng quát của nhiệt động lực học",
    applications: ["Ứng dụng: động cơ nhiệt, chuyển pha", "hóa học, vật lý thiên văn"],
  },
  zh: {
    font: "SimSun",
    hot: "高温热源", cold: "低温热源", single: "单一热源",
    title: "热力学", macro: ["描述一个", "宏观系统"],
    without: "无需逐一追踪", particles: "个粒子", state: "状态变量", concentrations: "浓度",
    first: "热力学第一定律", conservation: "能量守恒", internal: "内能",
    second: "热力学第二定律", direction: "过程的方向", entropy: "熵",
    formalism: "热力学的一般形式体系",
    applications: ["应用：热机、相变", "化学、天体物理学"],
  },
};

const root = resolve(import.meta.dirname, "..");
const selected = process.argv.slice(2);
const languages = selected.length ? selected : Object.keys(translations);

function preamble(lang, data, name) {
  const bidi = data.rtl ? "\\usepackage{bidi}\n\\newcommand{\\Lang}[1]{\\RL{#1}}" : "\\newcommand{\\Lang}[1]{#1}";
  const script = data.script ? `,Script=${data.script}` : "";
  return `% Source TikZ (${lang}) de « ${name} ».\n% Génération : node scripts/generate-chp1-figures.mjs ${lang}\n\\documentclass[border=4pt]{standalone}\n\\usepackage{fontspec}\n\\setmainfont{${data.font}}[Renderer=HarfBuzz${script}]\n\\usepackage{amsmath}\n\\usepackage{tikz}\n\\usetikzlibrary{arrows.meta,positioning}\n${bidi}\n`;
}

function reservoirFigure(lang, data, impossible = false) {
  const name = impossible ? "machine-monotherme-impossible" : "moteur-ditherme-schema";
  const nodes = impossible
    ? `  \\node[reservoir] (hot) at (0,2.4) {\\Lang{${data.single}}, $T$};\n  \\node[machine] (M) at (0,0) {$M$};\n\n  \\draw[flow] (hot.south) -- node[right] {$Q$} (M.north);\n  \\draw[flow] (M.east) -- ++(2.4,0) node[right] {$W = Q$};`
    : `  \\node[reservoir] (hot) at (0,3.2) {\\Lang{${data.hot}}, $T_c$};\n  \\node[reservoir] (cold) at (0,-3.2) {\\Lang{${data.cold}}, $T_f$};\n  \\node[machine] (M) at (0,0) {$M$};\n\n  \\draw[flow] (hot.south) -- node[right] {$Q_c$} (M.north);\n  \\draw[flow] (M.south) -- node[right] {$Q_f$} (cold.north);\n  \\draw[flow] (M.east) -- ++(2.4,0) node[right] {$W$};`;
  return `${preamble(lang, data, name)}
\\begin{document}
\\begin{tikzpicture}[
  >={Latex[length=2.5mm,width=2mm]},
  reservoir/.style={draw, thick, minimum width=4.2cm, minimum height=1.4cm, fill=black!5},
  machine/.style={draw, thick, circle, minimum size=1.7cm, fill=white},
  flow/.style={thick,-{Latex[length=2.5mm,width=2mm]}}
]
${nodes}
\\end{tikzpicture}
\\end{document}
`;
}

function flowchartFigure(lang, data) {
  const apps = data.applications.map((line) => `\\Lang{${line}}`).join("\\\\");
  return `${preamble(lang, data, "organigramme-thermodynamique")}
\\begin{document}
\\begin{tikzpicture}[
  >={Latex[length=2.5mm,width=2mm]},
  box/.style={draw, thick, rounded corners, align=center, fill=black!5, inner sep=7pt},
  link/.style={thick}
]
  \\node[box] (title) at (0,10) {\\textbf{\\Lang{${data.title}}}};
  \\node[box] (macro) at (-4,7.6) {\\Lang{${data.macro[0]}}\\\\\\Lang{${data.macro[1]}}};
  \\node[box] (nofollow) at (4,7.6) {\\Lang{${data.without}}\\\\$\\sim 10^{23}$ \\Lang{${data.particles}}};
  \\node[box] (variables) at (0,5.2) {\\Lang{${data.state}}\\\\$(P, V, T, U, \\ldots)$\\\\\\Lang{${data.concentrations}}};
  \\node[box] (first) at (-4,2.8) {\\Lang{${data.first}}\\\\\\Lang{${data.conservation}}\\\\$\\to$ \\Lang{${data.internal}}};
  \\node[box] (second) at (4,2.8) {\\Lang{${data.second}}\\\\\\Lang{${data.direction}}\\\\$\\to$ \\Lang{${data.entropy}}};
  \\node[box] (formalism) at (0,0.4) {\\Lang{${data.formalism}}};
  \\node[box] (applications) at (0,-2) {${apps}};

  \\draw[link] (title) -- (macro);
  \\draw[link] (title) -- (nofollow);
  \\draw[link] (macro) -- (variables);
  \\draw[link] (nofollow) -- (variables);
  \\draw[link] (variables) -- (first);
  \\draw[link] (variables) -- (second);
  \\draw[link] (first) -- (formalism);
  \\draw[link] (second) -- (formalism);
  \\draw[link] (formalism) -- (applications);
\\end{tikzpicture}
\\end{document}
`;
}

for (const lang of languages) {
  const data = translations[lang];
  if (!data) throw new Error(`Unknown language: ${lang}`);
  const sourceDir = join(root, "content", "tex", "figs-src", lang);
  const outputDir = join(root, "public", "figs", lang);
  mkdirSync(sourceDir, { recursive: true });
  mkdirSync(outputDir, { recursive: true });

  const figures = {
    "moteur-ditherme-schema": reservoirFigure(lang, data),
    "machine-monotherme-impossible": reservoirFigure(lang, data, true),
    "organigramme-thermodynamique": flowchartFigure(lang, data),
  };

  for (const [name, source] of Object.entries(figures)) {
    const sourcePath = join(sourceDir, `${name}.tex`);
    writeFileSync(sourcePath, source, "utf8");
    const buildDir = mkdtempSync(join(tmpdir(), `thermo-${lang}-${name}-`));
    try {
      const engine = data.rtl ? "xelatex" : "lualatex";
      execFileSync(engine, ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, sourcePath], { stdio: "pipe" });
      const pdf = join(buildDir, `${name}.pdf`);
      const stem = join(buildDir, name);
      execFileSync("pdftoppm", ["-png", "-r", "600", "-singlefile", pdf, stem], { stdio: "pipe" });
      writeFileSync(join(outputDir, `${name}.png`), readFileSync(`${stem}.png`));
    } catch (error) {
      const details = [error.stdout?.toString(), error.stderr?.toString(), error.message].filter(Boolean).join("\n");
      throw new Error(`Failed to build ${lang}/${name}:\n${details}`);
    } finally {
      rmSync(buildDir, { recursive: true, force: true });
    }
  }
  console.log(`Generated chapter 1 figures for ${lang}`);
}
