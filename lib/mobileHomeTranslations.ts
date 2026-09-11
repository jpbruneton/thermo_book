import type { Lang } from "./languages";

interface MobileHome {
  title: string;
  // Paired ** markers emphasize the page count and solved exercises.
  description: string;
  lessons: string;
  exercises: string;
  quizzes: string;
}

export const mobileHomeTranslations: Record<Lang, MobileHome> = {
  en: {
    title: "Online Thermodynamics Course",
    description: "Explore thermodynamics through **~200 pages** of rigorous explanations and **80+ solved exercises.**",
    lessons: "Go to lessons",
    exercises: "Go to exercises",
    quizzes: "Go to quizzes",
  },
  fr: {
    title: "Cours de thermodynamique en ligne",
    description: "Explorez la thermodynamique à travers **environ 200 pages** d’explications rigoureuses et **plus de 80 exercices corrigés.**",
    lessons: "Accéder aux leçons",
    exercises: "Accéder aux exercices",
    quizzes: "Accéder aux quiz",
  },
  de: {
    title: "Online-Kurs in Thermodynamik",
    description: "Entdecken Sie die Thermodynamik auf **rund 200 Seiten** mit fundierten Erklärungen und **über 80 gelösten Übungsaufgaben.**",
    lessons: "Zu den Lektionen",
    exercises: "Zu den Übungen",
    quizzes: "Zu den Quizzen",
  },
  es: {
    title: "Curso de termodinámica en línea",
    description: "Explora la termodinámica a través de **unas 200 páginas** de explicaciones rigurosas y **más de 80 ejercicios resueltos.**",
    lessons: "Ir a las lecciones",
    exercises: "Ir a los ejercicios",
    quizzes: "Ir a los cuestionarios",
  },
  pt: {
    title: "Curso de termodinâmica online",
    description: "Explore a termodinâmica em **cerca de 200 páginas** de explicações rigorosas e **mais de 80 exercícios resolvidos.**",
    lessons: "Ir para as lições",
    exercises: "Ir para os exercícios",
    quizzes: "Ir para os questionários",
  },
  it: {
    title: "Corso di termodinamica online",
    description: "Esplora la termodinamica attraverso **circa 200 pagine** di spiegazioni rigorose e **oltre 80 esercizi svolti.**",
    lessons: "Vai alle lezioni",
    exercises: "Vai agli esercizi",
    quizzes: "Vai ai quiz",
  },
  pl: {
    title: "Kurs termodynamiki online",
    description: "Poznaj termodynamikę dzięki **około 200 stronom** ścisłych wyjaśnień i **ponad 80 rozwiązanym zadaniom.**",
    lessons: "Przejdź do lekcji",
    exercises: "Przejdź do zadań",
    quizzes: "Przejdź do quizów",
  },
  ru: {
    title: "Онлайн-курс термодинамики",
    description: "Изучайте термодинамику: **около 200 страниц** строгих объяснений и **более 80 задач с решениями.**",
    lessons: "Перейти к урокам",
    exercises: "Перейти к задачам",
    quizzes: "Перейти к тестам",
  },
  zh: {
    title: "在线热力学课程",
    description: "通过**约 200 页**严谨的讲解和**80 多道附有完整解答的习题**，探索热力学。",
    lessons: "进入课程",
    exercises: "查看习题",
    quizzes: "开始测验",
  },
  ja: {
    title: "オンライン熱力学講座",
    description: "**約200ページ**の厳密な解説と**80問以上の解答付き演習**を通じて、熱力学を学びましょう。",
    lessons: "講義へ",
    exercises: "演習問題へ",
    quizzes: "クイズへ",
  },
  ko: {
    title: "온라인 열역학 강의",
    description: "**약 200페이지**의 엄밀한 설명과 **80개 이상의 풀이가 포함된 연습문제**를 통해 열역학을 탐구하세요.",
    lessons: "강의로 이동",
    exercises: "연습문제로 이동",
    quizzes: "퀴즈로 이동",
  },
  hi: {
    title: "ऑनलाइन ऊष्मागतिकी पाठ्यक्रम",
    description: "**लगभग 200 पृष्ठों** की सुसंगत और तर्कपूर्ण व्याख्याओं तथा **80 से अधिक हल किए गए अभ्यास प्रश्नों** के माध्यम से ऊष्मागतिकी को समझें।",
    lessons: "पाठों पर जाएँ",
    exercises: "अभ्यास प्रश्नों पर जाएँ",
    quizzes: "प्रश्नोत्तरी पर जाएँ",
  },
  vi: {
    title: "Khóa học nhiệt động lực học trực tuyến",
    description: "Khám phá nhiệt động lực học qua **khoảng 200 trang** giải thích chặt chẽ và **hơn 80 bài tập có lời giải.**",
    lessons: "Đến bài học",
    exercises: "Đến bài tập",
    quizzes: "Đến bài trắc nghiệm",
  },
  ar: {
    title: "مقرر الديناميكا الحرارية عبر الإنترنت",
    description: "استكشف الديناميكا الحرارية من خلال **نحو 200 صفحة** من الشروحات الدقيقة و**أكثر من 80 تمرينًا محلولًا.**",
    lessons: "انتقل إلى الدروس",
    exercises: "انتقل إلى التمارين",
    quizzes: "انتقل إلى الاختبارات",
  },
  id: {
    title: "Kuliah Termodinamika Daring",
    description: "Pelajari termodinamika melalui **sekitar 200 halaman** penjelasan yang sistematis dan teliti serta **lebih dari 80 soal latihan lengkap dengan penyelesaiannya.**",
    lessons: "Buka pelajaran",
    exercises: "Buka latihan",
    quizzes: "Buka kuis",
  },
  tr: {
    title: "Çevrimiçi Termodinamik Dersi",
    description: "**Yaklaşık 200 sayfalık** titiz açıklamalar ve **80’den fazla çözümlü alıştırma** ile termodinamiği keşfedin.",
    lessons: "Derslere git",
    exercises: "Alıştırmalara git",
    quizzes: "Testlere git",
  },
  bn: {
    title: "অনলাইন তাপগতিবিদ্যা কোর্স",
    description: "**প্রায় ২০০ পৃষ্ঠার** যুক্তিনিষ্ঠ ও সুসংহত ব্যাখ্যা এবং **৮০টিরও বেশি সমাধানসহ অনুশীলনীর** মাধ্যমে তাপগতিবিদ্যা জানুন।",
    lessons: "পাঠে যান",
    exercises: "অনুশীলনীতে যান",
    quizzes: "কুইজে যান",
  },
  ur: {
    title: "حر حرکیات کا آن لائن کورس",
    description: "**تقریباً 200 صفحات** پر مشتمل دقیق توضیحات اور **80 سے زیادہ حل شدہ مشقوں** کے ذریعے حر حرکیات سمجھیں۔",
    lessons: "اسباق پر جائیں",
    exercises: "مشقوں پر جائیں",
    quizzes: "کوئز پر جائیں",
  },
  sw: {
    title: "Kozi ya Termodinamiki Mtandaoni",
    description: "Jifunze termodinamiki kupitia **takriban kurasa 200** za maelezo ya kina na sahihi, pamoja na **mazoezi zaidi ya 80 yenye suluhisho.**",
    lessons: "Nenda kwenye masomo",
    exercises: "Nenda kwenye mazoezi",
    quizzes: "Nenda kwenye maswali ya kujipima",
  },
  fa: {
    title: "دورهٔ آنلاین ترمودینامیک",
    description: "با **حدود ۲۰۰ صفحه** توضیحات دقیق و **بیش از ۸۰ تمرین حل‌شده**، ترمودینامیک را بیاموزید.",
    lessons: "رفتن به درس‌ها",
    exercises: "رفتن به تمرین‌ها",
    quizzes: "رفتن به آزمون‌ها",
  },
};
