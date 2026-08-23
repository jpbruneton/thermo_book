import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const locales = {
  ar: {
    font: "Noto Naskh Arabic", script: "Arabic", rtl: true,
    phase: "فضاء الطور", coordinates: "إحداثيات", compatible: "حالات مجهرية متوافقة مع", huge: "عددها هائل",
    macro: "حالة عيانية متوازنة", variables: "متغيرات", or: "أو", aggregation: "تجميع",
    statement: "تحمل جميع هذه الحالات المجهرية، على مقياسنا،", sameEnergy: "الطاقة الداخلية نفسها",
  },
  bn: {
    font: "Nirmala UI", script: "Bengali",
    phase: "দশা স্থান", coordinates: "স্থানাঙ্ক", compatible: "এর সঙ্গে সামঞ্জস্যপূর্ণ অণুবীক্ষণিক অবস্থা", huge: "সংখ্যায় বিপুল",
    macro: "সাম্যাবস্থার স্থূল অবস্থা", variables: "চলক", or: "বা", aggregation: "সমষ্টিকরণ",
    statement: "আমাদের মাপকাঠিতে এই সব অণুবীক্ষণিক অবস্থার", sameEnergy: "একই অন্তঃশক্তি",
  },
  de: {
    font: "Noto Serif",
    phase: "Phasenraum", coordinates: "Koordinaten", compatible: "mit X verträgliche Mikrozustände", huge: "in ungeheurer Anzahl",
    macro: "Gleichgewichts-Makrozustand", variables: "Variablen", or: "oder", aggregation: "Aggregation",
    statement: "Alle diese Mikrozustände besitzen auf unserer Skala dieselbe", sameEnergy: "innere Energie",
  },
  en: {
    font: "Noto Serif",
    phase: "phase space", coordinates: "coordinates", compatible: "microstates compatible with", huge: "an immense number",
    macro: "equilibrium macrostate", variables: "variables", or: "or", aggregation: "aggregation",
    statement: "At our scale, all these microstates carry the", sameEnergy: "same internal energy",
  },
  es: {
    font: "Noto Serif",
    phase: "espacio de fases", coordinates: "coordenadas", compatible: "microestados compatibles con", huge: "en número inmenso",
    macro: "macroestado de equilibrio", variables: "variables", or: "o", aggregation: "agregación",
    statement: "A nuestra escala, todos estos microestados poseen la", sameEnergy: "misma energía interna",
  },
  fa: {
    font: "Noto Naskh Arabic", script: "Arabic", rtl: true,
    phase: "فضای فاز", coordinates: "مختصات", compatible: "ریزحالت‌های سازگار با", huge: "به تعداد بسیار زیاد",
    macro: "درشت‌حالت تعادلی", variables: "متغیر", or: "یا", aggregation: "تجمیع",
    statement: "همهٔ این ریزحالت‌ها در مقیاس ما دارای", sameEnergy: "انرژی درونی یکسان",
  },
  fr: {
    font: "Noto Serif",
    phase: "espace des phases", coordinates: "coordonnées", compatible: "microétats compatibles avec", huge: "en nombre immense",
    macro: "macro-état d'équilibre", variables: "variables", or: "ou", aggregation: "agrégation",
    statement: "Tous ces microétats portent, à notre échelle, la", sameEnergy: "même énergie interne",
  },
  hi: {
    font: "Nirmala UI", script: "Devanagari",
    phase: "प्रावस्था समष्टि", coordinates: "निर्देशांक", compatible: "के संगत सूक्ष्म अवस्थाएँ", huge: "अत्यंत बड़ी संख्या में",
    macro: "साम्य स्थूल अवस्था", variables: "चर", or: "या", aggregation: "समूहन",
    statement: "हमारे पैमाने पर इन सभी सूक्ष्म अवस्थाओं की", sameEnergy: "आंतरिक ऊर्जा समान",
  },
  id: {
    font: "Noto Serif",
    phase: "ruang fase", coordinates: "koordinat", compatible: "keadaan mikro yang kompatibel dengan", huge: "dalam jumlah sangat besar",
    macro: "keadaan makro setimbang", variables: "variabel", or: "atau", aggregation: "agregasi",
    statement: "Pada skala kita, semua keadaan mikro ini memiliki", sameEnergy: "energi dalam yang sama",
  },
  it: {
    font: "Noto Serif",
    phase: "spazio delle fasi", coordinates: "coordinate", compatible: "microstati compatibili con", huge: "in numero immenso",
    macro: "macrostato di equilibrio", variables: "variabili", or: "o", aggregation: "aggregazione",
    statement: "Alla nostra scala, tutti questi microstati hanno la", sameEnergy: "stessa energia interna",
  },
  ja: {
    font: "Yu Gothic",
    phase: "位相空間", coordinates: "座標", compatible: "と両立する微視的状態", huge: "膨大な数",
    macro: "平衡マクロ状態", variables: "変数", or: "または", aggregation: "粗視化",
    statement: "私たちの尺度では、これらすべての微視的状態は", sameEnergy: "同じ内部エネルギー",
  },
  ko: {
    font: "Malgun Gothic",
    phase: "위상 공간", coordinates: "좌표", compatible: "와 양립하는 미시상태", huge: "매우 많은 수",
    macro: "평형 거시상태", variables: "변수", or: "또는", aggregation: "집합화",
    statement: "우리의 척도에서 이 모든 미시상태는", sameEnergy: "같은 내부 에너지",
  },
  pl: {
    font: "Noto Serif",
    phase: "przestrzeń fazowa", coordinates: "współrzędnych", compatible: "mikrostany zgodne z", huge: "w ogromnej liczbie",
    macro: "makrostan równowagi", variables: "zmiennych", or: "lub", aggregation: "agregacja",
    statement: "W naszej skali wszystkie te mikrostany mają tę samą", sameEnergy: "energię wewnętrzną",
  },
  pt: {
    font: "Noto Serif",
    phase: "espaço de fases", coordinates: "coordenadas", compatible: "microestados compatíveis com", huge: "em número imenso",
    macro: "macroestado de equilíbrio", variables: "variáveis", or: "ou", aggregation: "agregação",
    statement: "Na nossa escala, todos estes microestados possuem a", sameEnergy: "mesma energia interna",
  },
  ru: {
    font: "Noto Serif",
    phase: "фазовое пространство", coordinates: "координат", compatible: "микросостояния, совместимые с", huge: "в огромном количестве",
    macro: "равновесное макросостояние", variables: "переменных", or: "или", aggregation: "агрегирование",
    statement: "В нашем масштабе все эти микросостояния имеют одну и ту же", sameEnergy: "внутреннюю энергию",
  },
  sw: {
    font: "Noto Serif",
    phase: "nafasi ya awamu", coordinates: "viwianishi", compatible: "hali ndogo zinazoendana na", huge: "kwa idadi kubwa sana",
    macro: "hali kubwa ya msawazo", variables: "vigezo", or: "au", aggregation: "ujumlishaji",
    statement: "Kwa kipimo chetu, hali hizi zote ndogo zina", sameEnergy: "nishati ileile ya ndani",
  },
  tr: {
    font: "Noto Serif",
    phase: "faz uzayı", coordinates: "koordinat", compatible: "ile uyumlu mikro durumlar", huge: "çok büyük sayıda",
    macro: "denge makro durumu", variables: "değişken", or: "veya", aggregation: "toplulaştırma",
    statement: "Bizim ölçeğimizde tüm bu mikro durumlar aynı", sameEnergy: "iç enerjiye sahiptir",
  },
  ur: {
    font: "Noto Naskh Arabic", script: "Arabic", rtl: true,
    phase: "فیز فضاء", coordinates: "محددات", compatible: "سے ہم آہنگ خرد حالتیں", huge: "بہت بڑی تعداد میں",
    macro: "توازنی کلان حالت", variables: "متغیرات", or: "یا", aggregation: "اجتماع",
    statement: "ہمارے پیمانے پر ان تمام خرد حالتوں کی", sameEnergy: "داخلی توانائی یکساں",
  },
  vi: {
    font: "Noto Serif",
    phase: "không gian pha", coordinates: "tọa độ", compatible: "các vi trạng thái tương thích với", huge: "với số lượng vô cùng lớn",
    macro: "trạng thái vĩ mô cân bằng", variables: "biến", or: "hoặc", aggregation: "kết hợp",
    statement: "Ở thang đo của chúng ta, mọi vi trạng thái này có", sameEnergy: "cùng một nội năng",
  },
  zh: {
    font: "SimSun",
    phase: "相空间", coordinates: "个坐标", compatible: "与之相容的微观状态", huge: "数量极其庞大",
    macro: "平衡宏观状态", variables: "个变量", or: "或", aggregation: "聚合",
    statement: "在我们的尺度上，所有这些微观状态具有", sameEnergy: "相同的内能",
  },
};

const root = resolve(import.meta.dirname, "..");
const selected = process.argv.slice(2);
const languages = selected.length ? selected : Object.keys(locales);

function source(lang, x) {
  const script = x.script ? `,Script=${x.script}` : "";
  const direction = x.rtl ? "\\usepackage{bidi}\n\\newcommand{\\Lang}[1]{\\RL{#1}}" : "\\newcommand{\\Lang}[1]{#1}";
  return `% Source TikZ (${lang}) de « agregation-micro-macro ».\n% Génération : node scripts/generate-aggregation-figure.mjs ${lang}\n\\documentclass[border=4pt]{standalone}
\\usepackage{fontspec}
\\setmainfont{${x.font}}[Renderer=HarfBuzz${script}]
\\usepackage{amsmath,amssymb,xcolor,tikz}
\\usetikzlibrary{arrows.meta}
${direction}
\\definecolor{Ink}{HTML}{2F2923}
\\definecolor{Ember}{HTML}{B94727}
\\definecolor{MapBlue}{HTML}{315F91}
\\definecolor{MicroFill}{HTML}{E8F1F7}
\\definecolor{MacroFill}{HTML}{FAF1E7}
\\definecolor{RelationFill}{HTML}{FFF9F1}
\\begin{document}
\\pagecolor{white}
\\begin{tikzpicture}[
  >={Latex[length=3mm,width=2.2mm]}, flow/.style={Ink,very thick,-{Latex[length=4mm,width=3mm]}},
  state/.style={draw=Ember,fill=MacroFill,very thick,rounded corners=7pt,align=center,inner xsep=8pt,inner ysep=8pt},
  micro/.style={fill=MapBlue,draw=none,circle,inner sep=2.1pt}, every node/.style={text=Ink}
]
  \\path[use as bounding box] (-7.4,-5.3) rectangle (7.4,2.85); \\fill[white] (-7.4,-5.3) rectangle (7.4,2.85);
  \\node[draw=MapBlue,fill=MicroFill,very thick,rounded corners=9pt,minimum width=7.2cm,minimum height=4.9cm] (gamma) at (-3.6,-0.25) {};
  \\node[anchor=south,font=\\normalsize,text=MapBlue,align=center,text width=7cm] at (gamma.north)
    {\\Lang{${x.phase}} $\\Gamma$ \\ ($\\sim 6N$ \\Lang{${x.coordinates}})};
  \\draw[Ember,very thick,dashed] (-3.6,0.1) ellipse (2.55 and 1.5);
  \\node[micro] at (-4.75,0.5) {}; \\node[micro] at (-3.75,-0.4) {}; \\node[micro] at (-2.55,0.7) {};
  \\node[micro] at (-3.15,0.2) {}; \\node[micro] at (-4.35,-0.6) {}; \\node[micro] at (-2.35,-0.45) {};
  \\node[micro] at (-5.05,-0.2) {}; \\node[micro] at (-2.95,-0.8) {}; \\node[micro] at (-4.05,0.9) {};
  \\node[font=\\small] at (-5.05,0.85) {$\\gamma_1$}; \\node[font=\\small] at (-3.75,-0.8) {$\\gamma_2$}; \\node[font=\\small] at (-2.3,1.0) {$\\gamma_3$};
  \\node[font=\\normalsize,align=center,text width=6.8cm] at (-3.6,-2.05)
    {\\Lang{${x.compatible}} $X$\\\\[0.6mm](\\Lang{${x.huge}})};
  \\node[state,minimum width=4.3cm] (X) at (4.15,0.1)
    {\\normalsize \\Lang{${x.macro}}\\\\[1.5mm]{\\LARGE $X\\in\\mathcal E$}\\\\[1.5mm]\\normalsize $d$ \\Lang{${x.variables}}, $d\\sim 2$ \\Lang{${x.or}} $3$};
  \\draw[flow] (-0.95,0.1)--(X.west) node[midway,above=2pt,font=\\normalsize] {\\Lang{${x.aggregation}}};
  \\node[draw=Ink,fill=RelationFill,very thick,rounded corners=7pt,text width=13.2cm,align=center] at (0,-4.05)
    {\\Lang{${x.statement}} \\textbf{\\Lang{${x.sameEnergy}}}:\\\\[2mm]
    {\\large $U_{\\mathrm{micro}}(\\gamma_1)\\simeq U_{\\mathrm{micro}}(\\gamma_2)\\simeq U_{\\mathrm{micro}}(\\gamma_3)\\simeq\\cdots\\;\\equiv\\;U_{\\mathrm{th}}(X)$}};
\\end{tikzpicture}
\\end{document}
`;
}

for (const lang of languages) {
  const data = locales[lang];
  if (!data) throw new Error(`Unknown language: ${lang}`);
  const sourceDir = join(root, "content", "tex", "figs-src", lang);
  const outputDir = join(root, "public", "figs", lang);
  mkdirSync(sourceDir, { recursive: true }); mkdirSync(outputDir, { recursive: true });
  const sourcePath = join(sourceDir, "agregation-micro-macro.tex");
  writeFileSync(sourcePath, source(lang, data), "utf8");
  const buildDir = mkdtempSync(join(tmpdir(), `thermo-${lang}-aggregation-`));
  try {
    const engine = data.rtl ? "xelatex" : "lualatex";
    execFileSync(engine, ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, sourcePath], { stdio: "pipe" });
    const stem = join(buildDir, "agregation-micro-macro");
    execFileSync("pdftoppm", ["-png", "-r", "600", "-singlefile", `${stem}.pdf`, stem], { stdio: "pipe" });
    writeFileSync(join(outputDir, "agregation-micro-macro.png"), readFileSync(`${stem}.png`));
  } catch (error) {
    const details = [error.stdout?.toString(), error.stderr?.toString(), error.message].filter(Boolean).join("\n");
    throw new Error(`Failed to build ${lang}/agregation-micro-macro:\n${details}`);
  } finally {
    rmSync(buildDir, { recursive: true, force: true });
  }
  console.log(`Generated aggregation figure for ${lang}`);
}
