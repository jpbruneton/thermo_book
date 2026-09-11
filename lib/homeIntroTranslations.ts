import { SUPPORTED_LANGS, type Lang } from "./languages";

type HomeIntro = readonly [string, string, string, string];
const languageCount = SUPPORTED_LANGS.length;

// Desktop introduction: every translation is based on the approved English copy.
// The second paragraph is the language hint, displayed in italics.
export const homeIntroTranslations: Record<Lang, HomeIntro> = {
  en: [
    "Explore the fundamentals of thermodynamics through ~200 pages of rigorous explanations and 80+ solved exercises.",
    `Choose from ${languageCount} languages using the menu above.`,
    "An undergraduate course with a strong emphasis on mathematical structure, developing the general theory of thermodynamics beyond the familiar example of ideal gases.",
    "Coming next: advanced topics covering liquids and solids, near-equilibrium thermodynamics, information and thermodynamics, and quantum thermodynamics.",
  ],
  fr: [
    "Explorez les fondements de la thermodynamique à travers environ 200 pages d’explications rigoureuses et plus de 80 exercices corrigés.",
    `Choisissez parmi ${languageCount} langues dans le menu ci-dessus.`,
    "Un cours de niveau licence qui met l’accent sur la structure mathématique et développe la théorie générale de la thermodynamique au-delà de l’exemple familier des gaz parfaits.",
    "À venir : des sujets avancés consacrés aux liquides et aux solides, à la thermodynamique proche de l’équilibre, aux liens entre information et thermodynamique, ainsi qu’à la thermodynamique quantique.",
  ],
  de: [
    "Entdecken Sie die Grundlagen der Thermodynamik auf rund 200 Seiten mit fundierten Erklärungen und über 80 gelösten Übungsaufgaben.",
    `Wählen Sie im Menü oben aus ${languageCount} Sprachen.`,
    "Ein Kurs auf Bachelor-Niveau mit besonderem Schwerpunkt auf der mathematischen Struktur, der die allgemeine Theorie der Thermodynamik über das vertraute Beispiel idealer Gase hinaus entwickelt.",
    "Demnächst: weiterführende Themen zu Flüssigkeiten und Festkörpern, Thermodynamik nahe dem Gleichgewicht, Information und Thermodynamik sowie Quantenthermodynamik.",
  ],
  es: [
    "Explora los fundamentos de la termodinámica a través de unas 200 páginas de explicaciones rigurosas y más de 80 ejercicios resueltos.",
    `Elige entre ${languageCount} idiomas en el menú de arriba.`,
    "Un curso de grado universitario que pone especial énfasis en la estructura matemática y desarrolla la teoría general de la termodinámica más allá del conocido ejemplo de los gases ideales.",
    "Próximamente: temas avanzados sobre líquidos y sólidos, termodinámica cerca del equilibrio, información y termodinámica, y termodinámica cuántica.",
  ],
  pt: [
    "Explore os fundamentos da termodinâmica em cerca de 200 páginas de explicações rigorosas e mais de 80 exercícios resolvidos.",
    `Escolha entre ${languageCount} idiomas no menu acima.`,
    "Um curso universitário de primeiro ciclo com forte ênfase na estrutura matemática, que desenvolve a teoria geral da termodinâmica para além do exemplo familiar dos gases ideais.",
    "Em breve: tópicos avançados sobre líquidos e sólidos, termodinâmica próxima do equilíbrio, informação e termodinâmica, e termodinâmica quântica.",
  ],
  it: [
    "Esplora i fondamenti della termodinamica attraverso circa 200 pagine di spiegazioni rigorose e oltre 80 esercizi svolti.",
    `Scegli tra ${languageCount} lingue nel menu qui sopra.`,
    "Un corso di livello universitario triennale che pone particolare enfasi sulla struttura matematica e sviluppa la teoria generale della termodinamica al di là del consueto esempio dei gas ideali.",
    "In arrivo: argomenti avanzati su liquidi e solidi, termodinamica vicino all’equilibrio, informazione e termodinamica, e termodinamica quantistica.",
  ],
  pl: [
    "Poznaj podstawy termodynamiki dzięki około 200 stronom ścisłych wyjaśnień i ponad 80 rozwiązanym zadaniom.",
    `Wybierz jeden z ${languageCount} języków w menu powyżej.`,
    "Kurs na poziomie studiów pierwszego stopnia, kładący duży nacisk na strukturę matematyczną i rozwijający ogólną teorię termodynamiki poza znanym przykładem gazów doskonałych.",
    "Wkrótce: zaawansowane zagadnienia dotyczące cieczy i ciał stałych, termodynamiki w pobliżu równowagi, informacji i termodynamiki oraz termodynamiki kwantowej.",
  ],
  ru: [
    "Изучайте основы термодинамики: около 200 страниц строгих объяснений и более 80 задач с решениями.",
    `Выберите один из ${languageCount} языков в меню выше.`,
    "Курс уровня бакалавриата с особым акцентом на математической структуре, развивающий общую теорию термодинамики за пределами привычного примера идеальных газов.",
    "Скоро: углублённые темы о жидкостях и твёрдых телах, термодинамике вблизи равновесия, информации и термодинамике, а также квантовой термодинамике.",
  ],
  zh: [
    "通过约 200 页严谨的讲解和 80 多道附有完整解答的习题，探索热力学的基本原理。",
    `使用上方菜单，从 ${languageCount} 种语言中选择。`,
    "这是一门本科课程，着重阐述热力学的数学结构，不局限于熟悉的理想气体例子，而是展开热力学的一般理论。",
    "即将推出：涵盖液体与固体、近平衡热力学、信息与热力学以及量子热力学的进阶内容。",
  ],
  ja: [
    "約200ページの厳密な解説と80問以上の解答付き演習を通じて、熱力学の基礎を学びましょう。",
    `上のメニューから${languageCount}言語のいずれかを選べます。`,
    "数学的構造を重視した学部レベルの講義です。おなじみの理想気体の例にとどまらず、熱力学の一般理論を展開します。",
    "今後公開予定：液体と固体、平衡近傍の熱力学、情報と熱力学、量子熱力学を扱う発展的な内容。",
  ],
  ko: [
    "약 200페이지의 엄밀한 설명과 80개 이상의 풀이가 포함된 연습문제를 통해 열역학의 기초를 탐구하세요.",
    `위 메뉴에서 ${languageCount}개 언어 중 하나를 선택하세요.`,
    "수학적 구조를 중시하는 학부 수준의 강의로, 익숙한 이상기체의 예를 넘어 열역학의 일반 이론을 전개합니다.",
    "공개 예정: 액체와 고체, 평형 근처의 열역학, 정보와 열역학, 양자 열역학을 다루는 심화 내용.",
  ],
  hi: [
    "लगभग 200 पृष्ठों की सुसंगत और तर्कपूर्ण व्याख्याओं तथा 80 से अधिक हल किए गए अभ्यास प्रश्नों के माध्यम से ऊष्मागतिकी के मूल सिद्धांतों को समझें।",
    `ऊपर दिए गए मेनू में ${languageCount} भाषाओं में से अपनी भाषा चुनें।`,
    "स्नातक स्तर का यह पाठ्यक्रम गणितीय संरचना पर विशेष बल देता है और आदर्श गैसों के परिचित उदाहरण से आगे बढ़कर ऊष्मागतिकी का सामान्य सिद्धांत विकसित करता है।",
    "जल्द आ रहे हैं: द्रवों और ठोसों, साम्य के निकट ऊष्मागतिकी, सूचना और ऊष्मागतिकी, तथा क्वांटम ऊष्मागतिकी पर उन्नत विषय।",
  ],
  vi: [
    "Khám phá các nền tảng của nhiệt động lực học qua khoảng 200 trang giải thích chặt chẽ và hơn 80 bài tập có lời giải.",
    `Chọn một trong ${languageCount} ngôn ngữ bằng trình đơn phía trên.`,
    "Khóa học ở trình độ đại học, đặc biệt chú trọng cấu trúc toán học và phát triển lý thuyết tổng quát của nhiệt động lực học vượt ra ngoài ví dụ quen thuộc về khí lý tưởng.",
    "Sắp ra mắt: các chủ đề nâng cao về chất lỏng và chất rắn, nhiệt động lực học gần cân bằng, thông tin và nhiệt động lực học, cùng nhiệt động lực học lượng tử.",
  ],
  ar: [
    "استكشف أسس الديناميكا الحرارية من خلال نحو 200 صفحة من الشروحات الدقيقة وأكثر من 80 تمرينًا محلولًا.",
    `اختر من بين ${languageCount} لغة باستخدام القائمة أعلاه.`,
    "مقرر بمستوى البكالوريوس يركّز على البنية الرياضية، ويطوّر النظرية العامة للديناميكا الحرارية متجاوزًا المثال المألوف للغازات المثالية.",
    "قريبًا: موضوعات متقدمة تتناول السوائل والمواد الصلبة، والديناميكا الحرارية قرب الاتزان، والمعلومات والديناميكا الحرارية، والديناميكا الحرارية الكمومية.",
  ],
  id: [
    "Pelajari dasar-dasar termodinamika melalui sekitar 200 halaman penjelasan yang sistematis dan teliti serta lebih dari 80 soal latihan lengkap dengan penyelesaiannya.",
    `Pilih salah satu dari ${languageCount} bahasa melalui menu di atas.`,
    "Kuliah tingkat sarjana yang menekankan struktur matematika dan mengembangkan teori umum termodinamika melampaui contoh gas ideal yang sudah dikenal.",
    "Segera hadir: topik lanjutan tentang zat cair dan zat padat, termodinamika dekat kesetimbangan, informasi dan termodinamika, serta termodinamika kuantum.",
  ],
  tr: [
    "Yaklaşık 200 sayfalık titiz açıklamalar ve 80’den fazla çözümlü alıştırma ile termodinamiğin temellerini keşfedin.",
    `Yukarıdaki menüden ${languageCount} dil arasından seçim yapın.`,
    "Matematiksel yapıya özellikle önem veren, alışılmış ideal gaz örneğinin ötesine geçerek termodinamiğin genel teorisini geliştiren lisans düzeyinde bir ders.",
    "Yakında: sıvılar ve katılar, dengeye yakın termodinamik, bilgi ve termodinamik ile kuantum termodinamiğini kapsayan ileri konular.",
  ],
  bn: [
    "প্রায় ২০০ পৃষ্ঠার যুক্তিনিষ্ঠ ও সুসংহত ব্যাখ্যা এবং ৮০টিরও বেশি সমাধানসহ অনুশীলনীর মাধ্যমে তাপগতিবিদ্যার মূলনীতি জানুন।",
    `উপরের মেনু থেকে ${languageCount}টি ভাষার মধ্যে একটি বেছে নিন।`,
    "স্নাতক পর্যায়ের এই কোর্সে গাণিতিক কাঠামোর ওপর বিশেষ গুরুত্ব দেওয়া হয়েছে। আদর্শ গ্যাসের পরিচিত উদাহরণের গণ্ডি পেরিয়ে এখানে তাপগতিবিদ্যার সাধারণ তত্ত্ব গড়ে তোলা হয়।",
    "শীঘ্রই আসছে: তরল ও কঠিন পদার্থ, সাম্যাবস্থার কাছাকাছি তাপগতিবিদ্যা, তথ্য ও তাপগতিবিদ্যা এবং কোয়ান্টাম তাপগতিবিদ্যা নিয়ে উচ্চতর বিষয়বস্তু।",
  ],
  ur: [
    "تقریباً 200 صفحات پر مشتمل دقیق توضیحات اور 80 سے زیادہ حل شدہ مشقوں کے ذریعے حر حرکیات کے بنیادی اصول سمجھیں۔",
    `اوپر دیے گئے مینو سے ${languageCount} زبانوں میں سے ایک منتخب کریں۔`,
    "بیچلر کی سطح کا یہ کورس ریاضیاتی ساخت پر خاص زور دیتا ہے اور مثالی گیسوں کی مانوس مثال سے آگے بڑھ کر حر حرکیات کا عمومی نظریہ پیش کرتا ہے۔",
    "جلد پیش کیے جائیں گے: مائعات اور ٹھوس اجسام، توازن کے قریب حر حرکیات، معلومات اور حر حرکیات، اور کوانٹم حر حرکیات سے متعلق اعلیٰ سطح کے موضوعات۔",
  ],
  sw: [
    "Jifunze misingi ya termodinamiki kupitia takriban kurasa 200 za maelezo ya kina na sahihi, pamoja na mazoezi zaidi ya 80 yenye suluhisho.",
    `Chagua mojawapo ya lugha ${languageCount} kwenye menyu iliyo hapo juu.`,
    "Kozi ya shahada ya kwanza inayosisitiza muundo wa kihisabati na kukuza nadharia ya jumla ya termodinamiki zaidi ya mfano unaofahamika wa gesi bora.",
    "Yanayokuja: mada za kiwango cha juu kuhusu vimiminika na yabisi, termodinamiki karibu na usawa, taarifa na termodinamiki, pamoja na termodinamiki ya kwanta.",
  ],
  fa: [
    "با حدود ۲۰۰ صفحه توضیحات دقیق و بیش از ۸۰ تمرین حل‌شده، مبانی ترمودینامیک را بیاموزید.",
    `از منوی بالا یکی از ${languageCount} زبان را انتخاب کنید.`,
    "دوره‌ای در سطح کارشناسی با تأکید ویژه بر ساختار ریاضی که نظریهٔ عمومی ترمودینامیک را فراتر از مثال آشنای گازهای ایده‌آل بسط می‌دهد.",
    "به‌زودی: مباحث پیشرفته دربارهٔ مایعات و جامدات، ترمودینامیک نزدیک به تعادل، اطلاعات و ترمودینامیک، و ترمودینامیک کوانتومی.",
  ],
};
