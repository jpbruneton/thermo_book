import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const fonts = {
  ar: ["Noto Naskh Arabic", "Arabic", true], bn: ["Nirmala UI", "Bengali", false],
  de: ["Noto Serif"], en: ["Noto Serif"], es: ["Noto Serif"],
  fa: ["Noto Naskh Arabic", "Arabic", true], fr: ["Noto Serif"],
  hi: ["Nirmala UI", "Devanagari", false], id: ["Noto Serif"], it: ["Noto Serif"],
  ja: ["Yu Gothic"], ko: ["Malgun Gothic"], pl: ["Noto Serif"], pt: ["Noto Serif"],
  ru: ["Noto Serif"], sw: ["Noto Serif"], tr: ["Noto Serif"],
  ur: ["Noto Naskh Arabic", "Arabic", true], vi: ["Noto Serif"], zh: ["SimSun"],
};

const t = {
  ar: {
    weight: "وزن", fall: "سقوط", water: "الماء (المسعر)",
    note: ["عجلة مجدافية: سقوط", "الوزن يديرها،", "فيسخن الماء", "بفعل الاحتكاك"],
    isobaric: "متساوي الضغط", isochoric: "متساوي الحجم", isothermal: "متساوي الحرارة", adiabatic: "كظومي",
    engine: "محرك حراري", receiver: "آلة مستقبلة", clockwise: "باتجاه عقارب الساعة", counterclockwise: "عكس عقارب الساعة",
    centigrade: "مقياس مئوي", latent: "حرارة كامنة", hypothesis: "فرضية", reflections: "تأملات",
    boring: "ثقب المدافع", paddle: "عجلة مجدافية", conservation: "حفظ الطاقة", absolute: "مقياس مطلق",
    second: "القانون الثاني", entropy: "إنتروبيا", statistical: "إنتروبيا إحصائية",
  },
  bn: {
    weight: "ওজন", fall: "পতন", water: "জল (ক্যালরিমিটার)",
    note: ["প্যাডেল চাকা: ওজনের", "পতন এটিকে ঘোরায়,", "ঘর্ষণে জল", "গরম হয়"],
    isobaric: "সমচাপীয়", isochoric: "সমআয়তনীয়", isothermal: "সমতাপীয়", adiabatic: "রুদ্ধতাপীয়",
    engine: "তাপ ইঞ্জিন", receiver: "গ্রাহক যন্ত্র", clockwise: "ঘড়ির কাঁটার দিকে", counterclockwise: "ঘড়ির কাঁটার বিপরীতে",
    centigrade: "শতাংশ স্কেল", latent: "সুপ্ত তাপ", hypothesis: "অনুমান", reflections: "প্রতিফলন",
    boring: "কামান ছিদ্রকরণ", paddle: "প্যাডেল চাকা", conservation: "শক্তির সংরক্ষণ", absolute: "পরম স্কেল",
    second: "দ্বিতীয় সূত্র", entropy: "এনট্রপি", statistical: "পরিসংখ্যানিক এনট্রপি",
  },
  de: {
    weight: "Gewicht", fall: "Fall", water: "Wasser (Kalorimeter)",
    note: ["Schaufelrad: Das fallende", "Gewicht treibt es an;", "durch Reibung wird", "das Wasser erwärmt"],
    isobaric: "isobar", isochoric: "isochor", isothermal: "isotherm", adiabatic: "adiabatisch",
    engine: "Wärmekraftmaschine", receiver: "Arbeitsmaschine", clockwise: "Uhrzeigersinn", counterclockwise: "Gegenuhrzeigersinn",
    centigrade: "Celsiusskala", latent: "latente Wärme", hypothesis: "Hypothese", reflections: "Betrachtungen",
    boring: "Kanonenbohren", paddle: "Schaufelrad", conservation: "Energieerhaltung", absolute: "absolute Skala",
    second: "zweiter Hauptsatz", entropy: "Entropie", statistical: "statistische Entropie",
  },
  en: {
    weight: "weight", fall: "fall", water: "water (calorimeter)",
    note: ["paddle wheel: the falling", "weight drives it,", "heating the water", "through friction"],
    isobaric: "isobaric", isochoric: "isochoric", isothermal: "isothermal", adiabatic: "adiabatic",
    engine: "engine", receiver: "receiver", clockwise: "clockwise", counterclockwise: "counterclockwise",
    centigrade: "centigrade scale", latent: "latent heat", hypothesis: "hypothesis", reflections: "Reflections",
    boring: "cannon boring", paddle: "paddle wheel", conservation: "conservation of energy", absolute: "absolute scale",
    second: "second law", entropy: "entropy", statistical: "statistical entropy",
  },
  es: {
    weight: "peso", fall: "caída", water: "agua (calorímetro)",
    note: ["rueda de paletas: la caída", "del peso la impulsa", "y calienta el agua", "por rozamiento"],
    isobaric: "isobárica", isochoric: "isócora", isothermal: "isoterma", adiabatic: "adiabática",
    engine: "motor", receiver: "receptor", clockwise: "sentido horario", counterclockwise: "sentido antihorario",
    centigrade: "escala centígrada", latent: "calor latente", hypothesis: "hipótesis", reflections: "Reflexiones",
    boring: "perforación de cañones", paddle: "rueda de paletas", conservation: "conservación de la energía", absolute: "escala absoluta",
    second: "segundo principio", entropy: "entropía", statistical: "entropía estadística",
  },
  fa: {
    weight: "وزنه", fall: "سقوط", water: "آب (گرماسنج)",
    note: ["چرخ پره‌ای: سقوط", "وزنه آن را می‌چرخاند", "و آب را با اصطکاک", "گرم می‌کند"],
    isobaric: "هم‌فشار", isochoric: "هم‌حجم", isothermal: "هم‌دما", adiabatic: "بی‌دررو",
    engine: "موتور گرمایی", receiver: "ماشین گیرنده", clockwise: "ساعت‌گرد", counterclockwise: "پادساعت‌گرد",
    centigrade: "مقیاس سلسیوس", latent: "گرمای نهان", hypothesis: "فرضیه", reflections: "تأملات",
    boring: "سوراخ‌کاری توپ", paddle: "چرخ پره‌ای", conservation: "پایستگی انرژی", absolute: "مقیاس مطلق",
    second: "قانون دوم", entropy: "آنتروپی", statistical: "آنتروپی آماری",
  },
  fr: {
    weight: "poids", fall: "chute", water: "eau (calorimètre)",
    note: ["roue à aubes : la chute", "du poids l'entraîne,", "ce qui échauffe l'eau", "par frottement"],
    isobaric: "isobare", isochoric: "isochore", isothermal: "isotherme", adiabatic: "adiabatique",
    engine: "moteur", receiver: "récepteur", clockwise: "sens horaire", counterclockwise: "sens antihoraire",
    centigrade: "échelle centigrade", latent: "chaleur latente", hypothesis: "hypothèse", reflections: "Réflexions",
    boring: "forage des canons", paddle: "roue à aubes", conservation: "conservation de l'énergie", absolute: "échelle absolue",
    second: "second principe", entropy: "entropie", statistical: "entropie statistique",
  },
  hi: {
    weight: "भार", fall: "पतन", water: "जल (कैलोरीमापी)",
    note: ["पैडल चक्र: गिरता भार", "इसे घुमाता है,", "जिससे घर्षण द्वारा", "जल गर्म होता है"],
    isobaric: "समदाबी", isochoric: "समआयतनी", isothermal: "समतापी", adiabatic: "रुद्धोष्म",
    engine: "ऊष्मा इंजन", receiver: "ग्राही यंत्र", clockwise: "दक्षिणावर्त", counterclockwise: "वामावर्त",
    centigrade: "सेल्सियस पैमाना", latent: "गुप्त ऊष्मा", hypothesis: "परिकल्पना", reflections: "चिंतन",
    boring: "तोपों की बोरिंग", paddle: "पैडल चक्र", conservation: "ऊर्जा संरक्षण", absolute: "परम पैमाना",
    second: "द्वितीय नियम", entropy: "एन्ट्रॉपी", statistical: "सांख्यिकीय एन्ट्रॉपी",
  },
  id: {
    weight: "beban", fall: "jatuh", water: "air (kalorimeter)",
    note: ["roda dayung: jatuhnya", "beban memutarnya", "dan memanaskan air", "melalui gesekan"],
    isobaric: "isobarik", isochoric: "isokhorik", isothermal: "isotermal", adiabatic: "adiabatik",
    engine: "mesin", receiver: "penerima", clockwise: "searah jarum jam", counterclockwise: "berlawanan arah jarum jam",
    centigrade: "skala Celsius", latent: "kalor laten", hypothesis: "hipotesis", reflections: "Refleksi",
    boring: "pengeboran meriam", paddle: "roda dayung", conservation: "kekekalan energi", absolute: "skala mutlak",
    second: "hukum kedua", entropy: "entropi", statistical: "entropi statistik",
  },
  it: {
    weight: "peso", fall: "caduta", water: "acqua (calorimetro)",
    note: ["ruota a pale: la caduta", "del peso la aziona", "e riscalda l'acqua", "per attrito"],
    isobaric: "isobara", isochoric: "isocora", isothermal: "isoterma", adiabatic: "adiabatica",
    engine: "motore", receiver: "ricevitore", clockwise: "senso orario", counterclockwise: "senso antiorario",
    centigrade: "scala centigrada", latent: "calore latente", hypothesis: "ipotesi", reflections: "Riflessioni",
    boring: "alesatura dei cannoni", paddle: "ruota a pale", conservation: "conservazione dell'energia", absolute: "scala assoluta",
    second: "secondo principio", entropy: "entropia", statistical: "entropia statistica",
  },
  ja: {
    weight: "おもり", fall: "落下", water: "水（熱量計）",
    note: ["羽根車：おもりの落下が", "羽根車を回し、", "摩擦によって水を", "加熱する"],
    isobaric: "定圧", isochoric: "定積", isothermal: "等温", adiabatic: "断熱",
    engine: "熱機関", receiver: "受動機関", clockwise: "時計回り", counterclockwise: "反時計回り",
    centigrade: "摂氏温度目盛", latent: "潜熱", hypothesis: "仮説", reflections: "考察",
    boring: "大砲の中ぐり", paddle: "羽根車", conservation: "エネルギー保存", absolute: "絶対温度目盛",
    second: "第二法則", entropy: "エントロピー", statistical: "統計的エントロピー",
  },
  ko: {
    weight: "추", fall: "낙하", water: "물(열량계)",
    note: ["패들 휠: 추가 낙하하며", "바퀴를 돌리고,", "마찰로 물을", "가열한다"],
    isobaric: "등압", isochoric: "등적", isothermal: "등온", adiabatic: "단열",
    engine: "열기관", receiver: "수동 기관", clockwise: "시계 방향", counterclockwise: "반시계 방향",
    centigrade: "섭씨 눈금", latent: "잠열", hypothesis: "가설", reflections: "고찰",
    boring: "대포 포신 가공", paddle: "패들 휠", conservation: "에너지 보존", absolute: "절대 눈금",
    second: "제2법칙", entropy: "엔트로피", statistical: "통계적 엔트로피",
  },
  pl: {
    weight: "ciężarek", fall: "spadek", water: "woda (kalorymetr)",
    note: ["koło łopatkowe: spadek", "ciężarka wprawia je w ruch", "i ogrzewa wodę", "przez tarcie"],
    isobaric: "izobaryczna", isochoric: "izochoryczna", isothermal: "izotermiczna", adiabatic: "adiabatyczna",
    engine: "silnik", receiver: "odbiornik", clockwise: "zgodnie z ruchem wskazówek", counterclockwise: "przeciwnie do ruchu wskazówek",
    centigrade: "skala Celsjusza", latent: "ciepło utajone", hypothesis: "hipoteza", reflections: "Rozważania",
    boring: "wiercenie armat", paddle: "koło łopatkowe", conservation: "zachowanie energii", absolute: "skala absolutna",
    second: "druga zasada", entropy: "entropia", statistical: "entropia statystyczna",
  },
  pt: {
    weight: "peso", fall: "queda", water: "água (calorímetro)",
    note: ["roda de pás: a queda", "do peso a aciona", "e aquece a água", "por atrito"],
    isobaric: "isobárica", isochoric: "isocórica", isothermal: "isotérmica", adiabatic: "adiabática",
    engine: "motor", receiver: "receptor", clockwise: "sentido horário", counterclockwise: "sentido anti-horário",
    centigrade: "escala centígrada", latent: "calor latente", hypothesis: "hipótese", reflections: "Reflexões",
    boring: "perfuração de canhões", paddle: "roda de pás", conservation: "conservação da energia", absolute: "escala absoluta",
    second: "segunda lei", entropy: "entropia", statistical: "entropia estatística",
  },
  ru: {
    weight: "груз", fall: "падение", water: "вода (калориметр)",
    note: ["лопастное колесо: падение", "груза приводит его в движение", "и нагревает воду", "за счёт трения"],
    isobaric: "изобарный", isochoric: "изохорный", isothermal: "изотермический", adiabatic: "адиабатический",
    engine: "двигатель", receiver: "приёмник", clockwise: "по часовой стрелке", counterclockwise: "против часовой стрелки",
    centigrade: "стоградусная шкала", latent: "скрытая теплота", hypothesis: "гипотеза", reflections: "Размышления",
    boring: "сверление пушек", paddle: "лопастное колесо", conservation: "сохранение энергии", absolute: "абсолютная шкала",
    second: "второе начало", entropy: "энтропия", statistical: "статистическая энтропия",
  },
  sw: {
    weight: "uzito", fall: "kuanguka", water: "maji (kalorimita)",
    note: ["gurudumu la makasia:", "uzito huanguka na kulizungusha,", "na msuguano hupasha", "maji joto"],
    isobaric: "isobari", isochoric: "isokori", isothermal: "isothermi", adiabatic: "adiabati",
    engine: "injini", receiver: "kipokezi", clockwise: "mwelekeo wa saa", counterclockwise: "kinyume cha saa",
    centigrade: "kipimo cha selsiasi", latent: "joto fiche", hypothesis: "nadharia tete", reflections: "Tafakari",
    boring: "uchimbaji wa mizinga", paddle: "gurudumu la makasia", conservation: "uhifadhi wa nishati", absolute: "kipimo kamili",
    second: "sheria ya pili", entropy: "entropia", statistical: "entropia ya kitakwimu",
  },
  tr: {
    weight: "ağırlık", fall: "düşme", water: "su (kalorimetre)",
    note: ["paletli çark: ağırlığın", "düşmesi çarkı döndürür", "ve suyu sürtünmeyle", "ısıtır"],
    isobaric: "izobarik", isochoric: "izokorik", isothermal: "izotermal", adiabatic: "adyabatik",
    engine: "motor", receiver: "alıcı", clockwise: "saat yönü", counterclockwise: "saat yönünün tersi",
    centigrade: "santigrat ölçek", latent: "gizli ısı", hypothesis: "hipotez", reflections: "Düşünceler",
    boring: "top namlusu delme", paddle: "paletli çark", conservation: "enerjinin korunumu", absolute: "mutlak ölçek",
    second: "ikinci yasa", entropy: "entropi", statistical: "istatistiksel entropi",
  },
  ur: {
    weight: "وزن", fall: "سقوط", water: "پانی (حرارت پیما)",
    note: ["پیڈل پہیہ: وزن کا", "سقوط اسے گھماتا ہے", "اور رگڑ سے پانی", "گرم ہوتا ہے"],
    isobaric: "مساوی دباؤ", isochoric: "مساوی حجم", isothermal: "مساوی درجۂ حرارت", adiabatic: "بے حرارتی",
    engine: "حرارتی انجن", receiver: "وصولی مشین", clockwise: "گھڑی کی سمت", counterclockwise: "گھڑی کی مخالف سمت",
    centigrade: "سینٹی گریڈ پیمانہ", latent: "مخفی حرارت", hypothesis: "مفروضہ", reflections: "تأملات",
    boring: "توپوں کی بورنگ", paddle: "پیڈل پہیہ", conservation: "توانائی کا تحفظ", absolute: "مطلق پیمانہ",
    second: "دوسرا قانون", entropy: "اینٹروپی", statistical: "شماریاتی اینٹروپی",
  },
  vi: {
    weight: "vật nặng", fall: "rơi", water: "nước (nhiệt lượng kế)",
    note: ["bánh guồng: vật nặng", "rơi làm nó quay", "và làm nóng nước", "do ma sát"],
    isobaric: "đẳng áp", isochoric: "đẳng tích", isothermal: "đẳng nhiệt", adiabatic: "đoạn nhiệt",
    engine: "động cơ", receiver: "máy nhận công", clockwise: "chiều kim đồng hồ", counterclockwise: "ngược chiều kim đồng hồ",
    centigrade: "thang bách phân", latent: "nhiệt ẩn", hypothesis: "giả thuyết", reflections: "Suy ngẫm",
    boring: "khoan nòng pháo", paddle: "bánh guồng", conservation: "bảo toàn năng lượng", absolute: "thang tuyệt đối",
    second: "nguyên lý thứ hai", entropy: "entropy", statistical: "entropy thống kê",
  },
  zh: {
    weight: "重物", fall: "下落", water: "水（量热器）",
    note: ["桨轮：重物下落", "带动桨轮旋转，", "通过摩擦使水", "升温"],
    isobaric: "等压", isochoric: "等容", isothermal: "等温", adiabatic: "绝热",
    engine: "热机", receiver: "耗功装置", clockwise: "顺时针", counterclockwise: "逆时针",
    centigrade: "摄氏温标", latent: "潜热", hypothesis: "假说", reflections: "思考",
    boring: "炮管镗削", paddle: "桨轮", conservation: "能量守恒", absolute: "绝对温标",
    second: "第二定律", entropy: "熵", statistical: "统计熵",
  },
};

const root = resolve(import.meta.dirname, "..");
const selected = process.argv.slice(2);
const languages = selected.length ? selected : Object.keys(t);

function preamble(lang, name, libraries = "arrows.meta,positioning") {
  const [font, script, rtl] = fonts[lang];
  const scriptOption = script ? `,Script=${script}` : "";
  const direction = rtl
    ? "\\usepackage{bidi}\n\\newcommand{\\Lang}[1]{\\RL{#1}}\n\\newcommand{\\Latin}[1]{\\LR{#1}}"
    : "\\newcommand{\\Lang}[1]{#1}\n\\newcommand{\\Latin}[1]{#1}";
  return `% Source TikZ (${lang}) de « ${name} ».\n% Génération : node scripts/generate-selected-lesson-figures.mjs ${lang}\n\\documentclass[border=4pt]{standalone}\n\\usepackage{fontspec}\n\\setmainfont{${font}}[Renderer=HarfBuzz${scriptOption}]\n\\usepackage{amsmath}\n\\usepackage{xcolor}\n\\usepackage{tikz}\n\\usetikzlibrary{${libraries}}\n${direction}\n`;
}

function joule(lang, x) {
  const note = x.note.map((line) => `\\Lang{${line}}`).join("\\\\");
  return `${preamble(lang, "joule-roue-a-aubes", "arrows.meta,positioning,shapes.geometric")}
\\begin{document}
\\begin{tikzpicture}[
  >={Latex[length=2.5mm,width=2mm]},
  pulley/.style={draw, thick, circle, minimum size=0.9cm, fill=black!5},
  weight/.style={draw, thick, fill=black!15, minimum width=0.9cm, minimum height=0.9cm},
  vessel/.style={draw, thick}, flow/.style={thick,-{Latex[length=2mm,width=1.6mm]}}
]
  \\draw[thick] (-0.6,4.6) -- (2.6,4.6);
  \\node[pulley] (P) at (0,4.2) {};
  \\node[weight] (W) at (0,2.4) {};
  \\draw[thick] (P.west) to[out=180,in=90] (-0.45,4.2) -- (-0.45,2.85);
  \\node[left=0.15cm of W] {\\Lang{${x.weight}}};
  \\draw[flow] (W.south) -- ++(0,-0.7) node[below] {\\Lang{${x.fall}}};
  \\draw[thick] (P.east) -- (2.4,4.2) -- (2.4,3.1);
  \\begin{scope}
    \\draw[vessel] (1.2,0) rectangle (3.6,3.1);
    \\fill[blue!8] (1.25,0.05) rectangle (3.55,2.6);
    \\node[pulley,minimum size=1.3cm] (wheel) at (2.4,1.5) {};
    \\foreach \\a in {0,45,...,315} { \\draw[thick] (2.4,1.5) -- ++(\\a:0.65); }
    \\draw[thick] (2.4,3.1) -- (2.4,2.15);
  \\end{scope}
  \\node[below] at (2.4,-0.15) {\\Lang{${x.water}}};
  \\node[align=center,font=\\footnotesize] (annot) at (6.3,1.5) {${note}};
  \\draw[flow] (annot.west) -- (wheel.east);
\\end{tikzpicture}
\\end{document}
`;
}

function timeline(lang, x) {
  return `${preamble(lang, "frise-histoire-thermo", "arrows.meta")}
\\begin{document}
\\begin{tikzpicture}[
  >={Latex[length=2.5mm,width=2mm]}, tick/.style={draw, thick, fill=black, circle, inner sep=1.4pt},
  lblup/.style={align=center, font=\\scriptsize, anchor=south},
  lbldown/.style={align=center, font=\\scriptsize, anchor=north}, x=2.05cm
]
  \\draw[thick,-{Latex[length=3mm,width=2mm]}] (-0.6,4) -- (6.6,4);
  \\node[tick] at (0,4) {}; \\draw[thick] (0,4)--(0,4.35); \\node[lblup] at (0,4.4) {\\textbf{1662}\\\\Boyle--Mariotte\\\\$PV=\\mathrm{const.}$};
  \\node[tick] at (2,4) {}; \\draw[thick] (2,4)--(2,4.35); \\node[lblup] at (2,4.4) {\\textbf{1760s}\\\\Black\\\\\\Lang{${x.latent}}};
  \\node[tick] at (4,4) {}; \\draw[thick] (4,4)--(4,4.35); \\node[lblup] at (4,4.4) {\\textbf{1811}\\\\Avogadro\\\\\\Lang{${x.hypothesis}}};
  \\node[tick] at (6,4) {}; \\draw[thick] (6,4)--(6,4.35); \\node[lblup] at (6,4.4) {\\textbf{1824}\\\\Carnot\\\\\\Lang{${x.reflections}}};
  \\node[tick] at (1,4) {}; \\draw[thick] (1,4)--(1,3.65); \\node[lbldown] at (1,3.6) {$\\mathbf{1742\\text{--}43}$\\\\Celsius, Christin\\\\\\Lang{${x.centigrade}}};
  \\node[tick] at (3,4) {}; \\draw[thick] (3,4)--(3,3.65); \\node[lbldown] at (3,3.6) {\\textbf{1798}\\\\Rumford\\\\\\Lang{${x.boring}}};
  \\node[tick] at (5,4) {}; \\draw[thick] (5,4)--(5,3.65); \\node[lbldown] at (5,3.6) {\\textbf{1834}\\\\Clapeyron\\\\$PV=nRT$};

  \\draw[thick,-{Latex[length=3mm,width=2mm]}] (-0.6,0) -- (6.6,0);
  \\node[tick] at (0,0) {}; \\draw[thick] (0,0)--(0,0.35); \\node[lblup] at (0,0.4) {$\\mathbf{1843\\text{--}49}$\\\\Joule\\\\\\Lang{${x.paddle}}};
  \\node[tick] at (2,0) {}; \\draw[thick] (2,0)--(2,0.35); \\node[lblup] at (2,0.4) {\\textbf{1848}\\\\Kelvin\\\\\\Lang{${x.absolute}}};
  \\node[tick] at (4,0) {}; \\draw[thick] (4,0)--(4,0.35); \\node[lblup] at (4,0.4) {\\textbf{1865}\\\\Clausius\\\\\\Lang{${x.entropy}}};
  \\node[tick] at (1,0) {}; \\draw[thick] (1,0)--(1,-0.35); \\node[lbldown] at (1,-0.4) {\\textbf{1847}\\\\Helmholtz\\\\\\Lang{${x.conservation}}};
  \\node[tick] at (3,0) {}; \\draw[thick] (3,0)--(3,-0.35); \\node[lbldown] at (3,-0.4) {\\textbf{1850}\\\\Clausius\\\\\\Lang{${x.second}}};
  \\node[tick] at (5,0) {}; \\draw[thick] (5,0)--(5,-0.35); \\node[lbldown] at (5,-0.4) {\\textbf{1877}\\\\Boltzmann\\\\\\Lang{${x.statistical}}};
\\end{tikzpicture}
\\end{document}
`;
}

function transformations(lang, x) {
  return `${preamble(lang, "transformations-clapeyron", "backgrounds")}
\\begin{document}
\\pagecolor{white}
\\begin{tikzpicture}[x=4cm,y=4cm,show background rectangle,background rectangle/.style={fill=white}]
  \\draw[->] (0.75,0.25)--(2.45,0.25) node[right] {$V$};
  \\draw[->] (0.75,0.25)--(0.75,1.45) node[above] {$P$};
  \\coordinate (A) at (1,1); \\fill (A) circle (1.2pt) node[above left] {$A$};
  \\draw[thick,->,draw={rgb,255:red,220;green,50;blue,47}] (A)--(2.15,1);
  \\node[above,text={rgb,255:red,220;green,50;blue,47}] at (1.92,1) {\\Lang{${x.isobaric}}};
  \\draw[thick,->] (A)--(1,1.38); \\node[right] at (1,1.23) {\\Lang{${x.isochoric}}};
  \\draw[thick,->,draw={rgb,255:red,38;green,139;blue,210},domain=1:2.15,samples=80,smooth,variable=\\x] plot ({\\x},{1/\\x});
  \\node[above right,text={rgb,255:red,38;green,139;blue,210}] at (1.72,{1/1.72}) {\\Lang{${x.isothermal}}};
  \\draw[thick,->,draw={rgb,255:red,133;green,153;blue,0},domain=1:2.15,samples=80,smooth,variable=\\x] plot ({\\x},{1/(\\x^1.4)});
  \\node[left,text={rgb,255:red,133;green,153;blue,0}] at (1.34,{1/(1.34^1.4)}) {\\Lang{${x.adiabatic}}};
\\end{tikzpicture}
\\end{document}
`;
}

function cycles(lang, x) {
  return `${preamble(lang, "cycles-moteur-recepteur", "backgrounds,decorations.markings,arrows.meta")}
\\tikzset{midarrow/.style={postaction={decorate},decoration={markings,mark=at position .5 with {\\arrow{Latex}}}},midarrowrev/.style={postaction={decorate},decoration={markings,mark=at position .5 with {\\arrowreversed{Latex}}}}}
\\begin{document}
\\pagecolor{white}
\\begin{tikzpicture}[show background rectangle,background rectangle/.style={fill=white}]
  \\begin{scope}[x=2.6cm,y=2.4cm]
    \\draw[->] (.6,.2)--(2.5,.2) node[right] {$V$}; \\draw[->] (.6,.2)--(.6,1.55) node[above] {$P$};
    \\fill[gray!20] (1,.65)..controls(1.2,1.35)and(1.9,1.35)..(2.1,.65)..controls(1.8,.38)and(1.3,.38)..(1,.65);
    \\draw[thick,midarrow] (1,.65)..controls(1.2,1.35)and(1.9,1.35)..(2.1,.65);
    \\draw[thick,midarrow] (2.1,.65)..controls(1.8,.38)and(1.3,.38)..(1,.65);
    \\node at (1.55,.85) {\\Lang{${x.engine}}}; \\node at (1.55,-.08) {\\Lang{${x.clockwise}}};
  \\end{scope}
  \\begin{scope}[xshift=6.24cm,x=2.6cm,y=2.4cm]
    \\draw[->] (.6,.2)--(2.5,.2) node[right] {$V$}; \\draw[->] (.6,.2)--(.6,1.55) node[above] {$P$};
    \\fill[gray!20] (1,.65)..controls(1.2,1.35)and(1.9,1.35)..(2.1,.65)..controls(1.8,.38)and(1.3,.38)..(1,.65);
    \\draw[thick,midarrowrev] (1,.65)..controls(1.2,1.35)and(1.9,1.35)..(2.1,.65);
    \\draw[thick,midarrowrev] (2.1,.65)..controls(1.8,.38)and(1.3,.38)..(1,.65);
    \\node at (1.55,.85) {\\Lang{${x.receiver}}}; \\node at (1.55,-.08) {\\Lang{${x.counterclockwise}}};
  \\end{scope}
\\end{tikzpicture}
\\end{document}
`;
}

for (const lang of languages) {
  if (!t[lang]) throw new Error(`Unknown language: ${lang}`);
  const sourceDir = join(root, "content", "tex", "figs-src", lang);
  const outputDir = join(root, "public", "figs", lang);
  mkdirSync(sourceDir, { recursive: true });
  mkdirSync(outputDir, { recursive: true });
  const figures = {
    "joule-roue-a-aubes": joule(lang, t[lang]),
    "frise-histoire-thermo": timeline(lang, t[lang]),
    "transformations-clapeyron": transformations(lang, t[lang]),
    "cycles-moteur-recepteur": cycles(lang, t[lang]),
  };
  for (const [name, source] of Object.entries(figures)) {
    const sourcePath = join(sourceDir, `${name}.tex`);
    writeFileSync(sourcePath, source, "utf8");
    const buildDir = mkdtempSync(join(tmpdir(), `thermo-${lang}-${name}-`));
    try {
      const engine = fonts[lang][2] ? "xelatex" : "lualatex";
      execFileSync(engine, ["-interaction=nonstopmode", "-halt-on-error", `-output-directory=${buildDir}`, sourcePath], { stdio: "pipe" });
      const stem = join(buildDir, name);
      execFileSync("pdftoppm", ["-png", "-r", "600", "-singlefile", `${stem}.pdf`, stem], { stdio: "pipe" });
      writeFileSync(join(outputDir, `${name}.png`), readFileSync(`${stem}.png`));
    } catch (error) {
      const details = [error.stdout?.toString(), error.stderr?.toString(), error.message].filter(Boolean).join("\n");
      throw new Error(`Failed to build ${lang}/${name}:\n${details}`);
    } finally {
      rmSync(buildDir, { recursive: true, force: true });
    }
  }
  console.log(`Generated selected lesson figures for ${lang}`);
}
