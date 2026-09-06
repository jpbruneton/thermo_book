import type { Lang } from "@/lib/i18n";
import { quizQuestionTranslations } from "@/lib/quizQuestionTranslations";

export interface QuizQuestion {
  id: string;
  /** Lesson number (1..10), matches lib/chapters.ts theme numbers. */
  lecon: number;
  question: string;
  /** 2, 3 or 4 choices. ["Vrai", "Faux"] for a true/false question. */
  choices: string[];
  /** Explanation shown when the corresponding choice is clicked (index-aligned with choices). */
  explanations: string[];
  correctIndex: number;
  /**
   * True/false question, derived from the French source (`choices` = Vrai/Faux)
   * by `getLocalizedQuizQuestions`. Set on the localized copy so the renderer
   * can pick the V/F badge without string-matching a French word.
   */
  trueFalse?: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  // ─── Leçon 1 : Introduction générale ───
  {
    id: "l1-q1",
    lecon: 1,
    question: "Qu'est-ce qu'un moteur thermique, au sens de la thermodynamique ?",
    choices: [
      "Un dispositif qui, au cours d'un cycle, convertit intégralement en travail la chaleur qu'il reçoit de la source chaude.",
      "Un dispositif qui fonctionne en cycle au contact d'une seule source de chaleur, dont il extrait du travail.",
      "Un dispositif qui produit de la chaleur à partir d'un travail mécanique fourni par un opérateur extérieur.",
      "Un dispositif cyclique qui convertit en travail une fraction du flux de chaleur allant du chaud vers le froid.",
    ],
    explanations: [
      "Faux : convertir intégralement la chaleur en travail au cours d'un cycle est impossible (énoncé de Kelvin du second principe).",
      "Faux : un moteur monotherme cyclique ne peut fournir aucun travail ; c'est précisément l'énoncé de Kelvin.",
      "Faux : cela décrirait plutôt un radiateur ou une pompe à chaleur, pas un moteur.",
      "Exact : le moteur détourne une fraction du flux chaud → froid, jamais la totalité.",
    ],
    correctIndex: 3,
  },
  {
    id: "l1-q2",
    lecon: 1,
    question: "Pourquoi un moteur thermique a-t-il besoin d'une différence de température entre deux sources ?",
    choices: [
      "Parce que sans différence de température, aucun flux de chaleur ne s'écoule, et il n'y a rien à convertir en travail.",
      "Parce que le travail mécanique ne peut être produit qu'à partir d'une source dont la température dépasse un seuil minimal, propre à chaque fluide de travail.",
      "Parce que la pression du fluide de travail doit toujours rester supérieure à la pression atmosphérique pendant tout le cycle.",
    ],
    explanations: [
      "Exact : le moteur est un péage sur le flux de chaleur chaud → froid ; sans flux, pas de travail. Le gradient de température est le vrai « carburant ».",
      "Faux : il n'existe aucun seuil de température ; une différence même faible suffit (cf. centrales OTEC exploitant quelques degrés d'écart dans l'océan).",
      "Faux : la pression n'est pas le critère ; c'est l'écart de température entre les deux sources qui compte.",
    ],
    correctIndex: 0,
  },
  {
    id: "l1-vf1",
    lecon: 1,
    question: "Un moteur thermique cyclique peut fonctionner en n'étant en contact qu'avec une seule source de chaleur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : c'est précisément ce qu'interdit l'énoncé de Kelvin du second principe ; un moteur monotherme cyclique ne peut fournir de travail.",
      "Exact : il faut au moins deux sources à des températures différentes.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 2 : Historique ───
  {
    id: "l2-q1",
    lecon: 2,
    question: "Que soutient la théorie du calorique, dominante à la fin du XVIIIe siècle ?",
    choices: [
      "La chaleur est une forme d'agitation microscopique de la matière, transmise de proche en proche par les collisions entre particules.",
      "La chaleur est un fluide matériel conservé, qui s'écoule du chaud vers le froid.",
      "La chaleur et la température sont une seule et même grandeur physique, mesurée par le thermomètre.",
    ],
    explanations: [
      "Faux : c'est la thèse rivale, dite mécaniste ou cinétique (Bacon, Bernoulli), qui se révélera correcte a posteriori.",
      "Exact : le calorique est conçu comme un fluide impondérable et conservé, une théorie fausse mais féconde.",
      "Faux : la distinction chaleur/température est justement acquise avant le calorique, grâce à Joseph Black (capacité thermique, chaleur latente).",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q2",
    lecon: 2,
    question: "Quelle expérience est venue contredire la théorie du calorique ?",
    choices: [
      "Le forage des canons observé par Rumford : le frottement produit de la chaleur sans limite apparente.",
      "La mesure par Joseph Black de la chaleur latente absorbée par la glace lors de sa fusion, à température constante.",
      "La synthèse par Clapeyron des lois de Boyle, Charles et Gay-Lussac en une équation d'état unique des gaz parfaits.",
    ],
    explanations: [
      "Exact : si la chaleur était un fluide conservé et fini, le forage continu ne pourrait pas en produire indéfiniment. Rumford (1798) conclut qu'elle est liée au mouvement.",
      "Faux : la chaleur latente est au contraire bien expliquée par le calorique (le fluide se « combine » à la matière lors du changement d'état).",
      "Faux : Clapeyron (1834) unifie les lois des gaz, sans rapport direct avec la nature de la chaleur.",
    ],
    correctIndex: 0,
  },
  {
    id: "l2-vf1",
    lecon: 2,
    question: "Carnot a établi en 1824 la formule du rendement maximal η = 1 - T_f/T_c.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : Carnot a démontré l'existence et l'universalité d'un rendement maximal, mais pas son expression ; il manquait l'échelle absolue de température, introduite par Kelvin en 1848.",
      "Exact : il a prouvé l'existence de cette borne universelle sans pouvoir en donner l'expression, faute d'une définition rigoureuse de la température.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q4",
    lecon: 2,
    question: "Dans la relation Q = m c ΔT mise en évidence par Joseph Black, que représente le coefficient c ?",
    choices: [
      "La quantité totale de chaleur échangée par le corps, exprimée en joules.",
      "La quantité de chaleur qu'il faut fournir à une unité de masse du corps pour élever sa température d'un degré.",
      "Le rapport entre le travail fourni au corps et la chaleur qu'il reçoit.",
    ],
    explanations: [
      "Faux : c'est Q elle-même qui est la chaleur totale échangée, pas c ; Q dépend en plus de la masse et de l'écart de température.",
      "Exact : c'est la capacité thermique massique (ou chaleur spécifique), le coefficient propre à chaque matériau que Black met en évidence.",
      "Faux : cette relation n'a rien à voir avec c ; c ne fait intervenir que la chaleur et la température.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q5",
    lecon: 2,
    question: "Quelle est, en unités modernes, la valeur de la calorie telle que mesurée par Joule ?",
    choices: ["Environ 1 J par calorie", "Environ 4,18 J par calorie", "Environ 100 J par calorie", "Environ 0,24 J par calorie"],
    explanations: [
      "Faux : ce serait le cas si la calorie et le joule mesuraient déjà la même chose sans conversion.",
      "Exact : 1 cal ≈ 4,18 J ; c'est la valeur, mesurée avec une précision croissante entre 1843 et 1849, qui a établi l'équivalence entre chaleur et travail.",
      "Faux : cette valeur est bien trop grande d'un facteur ~24 par rapport à la mesure de Joule.",
      "Faux : c'est à peu près l'inverse (1/4,18 ≈ 0,24).",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q6",
    lecon: 2,
    question: "Un emballage alimentaire indique « 250 cal ». À combien de joules cela correspond-il approximativement ?",
    choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
    explanations: [
      "Faux : cela reviendrait à confondre l'unité indiquée avec le joule.",
      "Exact : la calorie alimentaire est en réalité 1kcal, notée normalement Cal avec une majuscule. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
      "Faux : cela reviendrait à oublier qu'une cal alimentaire est en réalité une kilocalorie.",
      "Faux : cela reviendrait à confondre la calorie alimentaire avec le kilojoule.",
    ],
    correctIndex: 1,
  },

  {
    id: "l2-vf3",
    lecon: 2,
    question: "La calorimétrie est la science de la mesure des quantités de chaleur échangées entre systèmes.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : Black, 1760, début de la calorimétrie.",
      "Faux : la calorimétrie est bien la science de la mesure de la chaleur, pas de la température.",
    ],
    correctIndex: 0,
  },
  {
    id: "l2-q7",
    lecon: 2,
    question:
      "On réchauffe un glaçon à 0°C jusqu'à obtenir de l'eau liquide à 20°C. Comment calculer correctement la chaleur totale reçue ?",
    choices: [
      "Q = m c_eau ΔT, avec ΔT = 20°C et c_eau la capacité thermique massique de l'eau liquide.",
      "Q = m L + m c_eau ΔT, avec L la chaleur massique latente de fusion, c_eau la capacité thermique massique de l'eau liquide, et ΔT = 20°C.",
      "Q = m c_glace ΔT + m c_eau ΔT avec ΔT = 20°C.",
    ],
    explanations: [
      "Faux : ce calcul oublie la chaleur latente de fusion, absorbée à 0°C sans que la température ne change ; c'est justement la seconde découverte de Black, distincte de la capacité thermique.",
      "Exact : la chaleur latente (fusion à température constante) et la relation Q = mcΔT (échauffement à phase constante) se cumulent, mais s'appliquent chacune à une étape distincte du processus.",
      "Faux : une fois la glace fondue, c'est bien la capacité thermique de l'eau liquide qui s'applique à l'échauffement de 0°C à 20°C, pas celle de la glace.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-vf4",
    lecon: 2,
    question: "Lorsque de l'eau liquide gèle, elle libère de la chaleur vers l'extérieur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : la solidification est l'inverse de la fusion. L'eau restitue exactement la chaleur latente qu'il avait fallu lui fournir pour fondre la même quantité de glace, ce qui explique par exemple pourquoi l'eau d'un lac qui gèle en hiver réchauffe légèrement l'air environnant.",
      "Faux : c'est bien un phénomène exothermique, symétrique de la fusion (endothermique) : c'est bien la même chaleur latente, avec un signe inversé.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 3 : Notions fondamentales ───
  {
    id: "l3-q1",
    lecon: 3,
    question: "Un système isolé est un système dont les parois sont :",
    choices: [
      "Diathermanes, mobiles et perméables.",
      "Rigides, adiabatiques et imperméables.",
      "Rigides, diathermanes et imperméables.",
      "Mobiles, adiabatiques et perméables.",
    ],
    explanations: [
      "Faux : ce sont au contraire les propriétés qui autorisent tous les échanges (chaleur, travail, matière).",
      "Exact : rigide interdit l'échange de travail, adiabatique l'échange de chaleur, imperméable l'échange de matière.",
      "Faux : des parois diathermanes laissent passer la chaleur ; le système ne serait pas isolé.",
      "Faux : des parois mobiles et perméables laissent passer travail et matière.",
    ],
    correctIndex: 1,
  },
  {
    id: "l3-vf2",
    lecon: 3,
    question: "Une paroi diathermane signifie qu'elle laisse passer la chaleur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact",
      "Faux",
    ],
    correctIndex: 0,
  },
  {
    id: "l3-vf3",
    lecon: 3,
    question: "Une paroi adiabatique signifie qu'elle laisse passer la chaleur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : cela serait une paroi diathermane.",
      "Exact : adiabatique signifie au contraire qu'aucune chaleur ne traverse la paroi; adiabatique est le contraire de diathermane.",
    ],
    correctIndex: 1,
  },
  {
    id: "l3-vf4",
    lecon: 3,
    question: "Un système est dit fermé si ses parois sont imperméables à la matière, tout en pouvant échanger chaleur et travail avec l'extérieur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : fermé signifie seulement pas d'échange de matière ; contrairement à un système isolé, la chaleur et le travail peuvent, eux, être échangés.",
      "Faux : c'est bien la définition d'un système fermé (à ne pas confondre avec un système isolé, qui lui interdit aussi les échanges de chaleur et de travail).",
    ],
    correctIndex: 0,
  },
  {
    id: "l3-q3",
    lecon: 3,
    question: "Parmi ces grandeurs, laquelle est intensive ?",
    choices: ["Le volume V", "L'énergie interne U", "La pression P", "Le nombre de particules N"],
    explanations: [
      "Faux : le volume double si l'on double le système ; il est extensif.",
      "Faux : l'énergie interne est extensive (en l'absence de forces à longue portée).",
      "Exact : la pression ne change pas si l'on double le système ; c'est une grandeur émergente, sans équivalent pour une molécule individuelle.",
      "Faux : N double avec le système ; il est extensif.",
    ],
    correctIndex: 2,
  },
  {
    id: "l3-q5",
    lecon: 3,
    question: "Une transformation isochore se fait :",
    choices: ["À pression constante", "Sans échange de chaleur", "À température constante", "À volume constant"],
    explanations: [
      "Faux : c'est une transformation isobare.",
      "Faux : c'est une transformation adiabatique.",
      "Faux : c'est une transformation isotherme.",
      "Exact : isochore = volume constant.",
    ],
    correctIndex: 3,
  },
  {
    id: "l3-vf1",
    lecon: 3,
    question: "Un système thermodynamique à l'équilibre est nécessairement homogène (mêmes paramètres intensifs en tout point).",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : un verre d'eau posé sur une table est à l'équilibre, et pourtant sa pression n'est pas la même en surface et au fond. C'est la loi de Pascal (hydrostatique) : dans un fluide au repos soumis à la pesanteur, la pression augmente avec la profondeur, P(z) = P_0 + ρgh. Cette non-uniformité ne disparaît jamais, même en attendant indéfiniment : elle n'est donc pas due à un défaut d'équilibre, mais à la présence d'un champ de force extérieur (la gravité).",
      "Exact : le verre d'eau posé sur une table en est l'exemple classique — sa pression augmente avec la profondeur (loi de Pascal : P(z) = P_0 + ρgh) sans que rien n'y circule ni n'évolue. L'équilibre thermodynamique n'exige que l'absence de flux macroscopique (de chaleur, de matière, de quantité de mouvement) entre les points du système ; il n'exige pas que les paramètres intensifs comme la pression y soient partout identiques, surtout en présence d'un champ extérieur comme la gravité.",
    ],
    correctIndex: 1,
  },
  {
    id: "l3-vf5",
    lecon: 3,
    question:
      "Une barre métallique dont les deux extrémités sont maintenues à des températures différentes finit par atteindre un régime où le profil de température ne dépend plus du temps. Ce régime est un état d'équilibre thermodynamique.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : c'est un état stationnaire, pas un état d'équilibre. Le profil de température est bien constant dans le temps, mais un flux de chaleur macroscopique continue de traverser la barre, de l'extrémité chaude vers l'extrémité froide.",
      "Exact : il s'agit d'un état stationnaire, à distinguer de l'équilibre. La définition de l'équilibre thermodynamique exige non seulement que les grandeurs macroscopiques n'évoluent plus, mais aussi l'absence de tout flux macroscopique (ici, un flux de chaleur persiste entre les deux extrémités).",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 4 : Premier principe ───
  {
    id: "l4-q2",
    lecon: 4,
    question: "Pourquoi note-t-on δQ et δW plutôt que dQ et dW ?",
    choices: [
      "Parce que ce sont des différentielles inexactes : leur intégrale dépend du chemin suivi.",
      "Parce que Q et W sont des grandeurs trop petites pour être décrites par des différentielles ordinaires.",
    ],
    explanations: [
      "Exact : Q et W dépendent du chemin, contrairement à U qui ne dépend que des états initial et final. Écrire dQ reviendrait à ressusciter la théorie du calorique.",
      "Faux : la « taille » des grandeurs n'a rien à voir ; c'est la dépendance au chemin qui est en jeu.",
    ],
    correctIndex: 0,
  },
  {
    id: "l4-q3",
    lecon: 4,
    question:
      "Un système fermé subit une transformation cyclique (A → A). Que peut-on affirmer sur le bilan Q_cycle + W_cycle ?",
    choices: [
      "Il vaut nécessairement zéro, car Q et W sont des fonctions d'état.",
      "Il vaut zéro car U est une fonction d'état.",
      "Il est toujours strictement positif pour une machine motrice.",
    ],
    explanations: [
      "Faux : c'est l'inverse — Q et W ne sont pas des fonctions d'état (ce sont des transferts, pas des grandeurs du système) ; c'est justement parce qu'ils ne le sont pas que seule leur somme est contrainte à s'annuler sur un cycle, via ΔU_cycle = 0.",
      "Exact : sur un cycle, le système retrouve son état initial. Comme U est une fonction d'état, ΔU_cycle = U(A) − U(A) = 0, donc le premier principe impose Q_cycle + W_cycle = 0.",
      "Faux : c'est la somme Q_cycle + W_cycle qui est nulle, pas chaque terme séparément ; Q_cycle et W_cycle peuvent chacun être non nuls (et de signes opposés) pour une machine motrice.",
    ],
    correctIndex: 1,
  },
  {
    id: "l4-q4",
    lecon: 4,
    question: "On comprime un gaz de façon quasi-statique. Que peut-on dire du travail reçu par le gaz ?",
    choices: [
      "Négatif : en se comprimant, le gaz cède nécessairement de l'énergie mécanique au milieu extérieur qui le comprime.",
      "Positif : le gaz reçoit du travail lors d'une compression.",
      "Nul : dans une transformation quasi-statique, les échanges de travail se compensent exactement à chaque étape.",
    ],
    explanations: [
      "Faux : c'est l'erreur de signe classique ; avec dV < 0, on a bien -P dV > 0 : le gaz reçoit du travail.",
      "Exact : comprimer un gaz demande de lui fournir de l'énergie mécanique ; en convention du banquier, ce qui entre est compté positivement.",
      "Faux : quasi-statique ne signifie pas travail nul, seulement que la transformation passe par une suite d'équilibres.",
    ],
    correctIndex: 1,
  },
  {
    id: "l4-q6",
    lecon: 4,
    question: "Lors d'une transformation isochore d'un système fermé, on a toujours :",
    choices: [
      "W = 0, donc ΔU = Q",
      "Q = 0, donc ΔU = W",
      "ΔU = 0, donc Q = -W",
    ],
    explanations: [
      "Exact : à volume constant, δW = -P dV = 0 ; toute la variation d'énergie interne vient de la chaleur.",
      "Faux : c'est le bilan d'une transformation adiabatique, pas isochore.",
      "Faux : c'est le bilan d'une transformation isotherme d'un gaz parfait (U ne dépendant que de T).",
    ],
    correctIndex: 0,
  },
  // ─── Leçon 5 : Application au gaz parfait ───
  {
    id: "l5-q1",
    lecon: 5,
    question: "Un gaz parfait subit une détente de Joule : on casse la paroi qui le sépare d'un compartiment vide, dans une enceinte isolée. Sa température finale est :",
    choices: [
      "Plus élevée qu'au départ",
      "Plus basse qu'au départ, car le gaz fournit du travail en se détendant",
      "Inchangée",
      "Plus haute ou plus basse selon la valeur de γ",
    ],
    explanations: [
      "Faux : rien n'apporte d'énergie au gaz ; l'enceinte est isolée.",
      "Faux : c'est le piège ; le gaz se détend contre le vide, donc sans force opposée : W = 0. Et Q = 0 (isolé). Donc ΔU = 0.",
      "Exact : W = 0 (détente contre le vide), Q = 0 (enceinte isolée), donc ΔU = 0 ; or pour un gaz parfait U ne dépend que de T, donc T est inchangée.",
      "Faux : γ n'intervient pas ici ; le bilan W = Q = 0 vaut quel que soit le gaz parfait.",
    ],
    correctIndex: 2,
  },
  {
    id: "l5-q2",
    lecon: 5,
    question: "Une mole de gaz parfait subit une compression isotherme. Que vaut ΔU ?",
    choices: [
      "ΔU = W, le travail reçu pendant la compression, car toute l'énergie mécanique fournie est stockée dans le gaz",
      "ΔU = Q, la chaleur échangée pendant la compression, comptée avec son signe",
      "ΔU = 0",
    ],
    explanations: [
      "Faux : le gaz reçoit bien du travail, mais il expulse exactement la même quantité d'énergie sous forme de chaleur pour maintenir sa température.",
      "Faux : ΔU = Q ne vaut qu'en isochore (W = 0), pas en isotherme.",
      "Exact : pour un gaz parfait, U ne dépend que de T ; isotherme ⇒ ΔU = 0. Lors de la compression, le gaz reçoit du travail (W > 0) et cède exactement autant de chaleur à l'extérieur (Q = -W < 0).",
    ],
    correctIndex: 2,
  },
  {
    id: "l5-q3",
    lecon: 5,
    question:
      "Un gaz parfait subit une détente isotherme quasi statique. Quel bilan est correct ?",
    choices: [
      "W < 0, Q > 0 et ΔU = 0 : le gaz fournit du travail et reçoit de la chaleur",
      "W > 0, Q < 0 et ΔU = 0 : le gaz reçoit du travail et cède de la chaleur",
      "W < 0, Q < 0 et ΔU < 0 : le gaz fournit du travail, cède de la chaleur et refroidit",
    ],
    explanations: [
      "Exact : pendant une détente, dV > 0 donc δW = -P dV < 0 : le gaz fournit du travail. Comme T reste constante, ΔU = 0 pour un gaz parfait ; le premier principe impose alors Q = -W > 0 : le gaz reçoit de la chaleur.",
      "Faux : ces signes sont ceux d'une compression isotherme. Une détente fournit du travail à l'extérieur, donc le travail reçu par le gaz est négatif.",
      "Faux : le gaz ne refroidit pas puisque la transformation est isotherme. La chaleur reçue compense exactement le travail fourni : Q = -W > 0.",
    ],
    correctIndex: 0,
  },
  {
    id: "l5-q4",
    lecon: 5,
    question:
      "À partir du même état (P,V), on détend quasi statiquement un gaz parfait soit de manière isotherme, soit de manière adiabatique. Quelle affirmation est correcte ?",
    choices: [
      "L'isotherme est plus raide que l'adiabatique, car maintenir T constante accélère la baisse de pression",
      "Les deux courbes ont la même pente au point de départ, mais le gaz refroidit seulement sur l'isotherme",
      "L'adiabatique est plus raide que l'isotherme dans le diagramme (P,V), la pression y chute plus vite et le gaz refroidit",
      "Le gaz chauffe pendant la détente adiabatique, car il fournit du travail à l'extérieur",
    ],
    explanations: [
      "Faux : c'est l'adiabatique qui est la plus raide, puisque |−γP/V| > |−P/V| lorsque γ > 1.",
      "Faux : les pentes diffèrent d'un facteur γ. Sur l'isotherme T ne varie pas ; c'est lors de la détente adiabatique que le gaz refroidit.",
      "Exact : au même point, la pente vaut -P/V sur l'isotherme et -γP/V sur l'adiabatique. Comme γ > 1, l'adiabatique est plus raide. De plus Q = 0 et W < 0 pendant la détente : ΔU = W < 0, donc T diminue.",
      "Faux : fournir du travail sans recevoir de chaleur diminue l'énergie interne du gaz. Pour un gaz parfait, U ne dépend que de T : le gaz refroidit. Inversement, une compression adiabatique le chauffe.",
    ],
    correctIndex: 2,
  },
  {
    id: "l5-q5",
    lecon: 5,
    question:
      "Dans un diagramme de Clapeyron (P,V), un gaz parfait parcourt un cycle dans le sens horaire. Avec la convention des énergies reçues positives, comment classer ce cycle et quels sont les signes des bilans ?",
    choices: [
      "Cycle moteur : W_cycle > 0 et Q_cycle < 0",
      "Cycle moteur : W_cycle < 0 et Q_cycle > 0",
      "Cycle récepteur : W_cycle > 0 et Q_cycle < 0",
      "Cycle récepteur : W_cycle < 0 et Q_cycle > 0",
    ],
    explanations: [
      "Faux : W_cycle > 0 signifie que le gaz reçoit du travail ; ce serait un cycle récepteur, parcouru dans le sens antihoraire.",
      "Exact : un cycle horaire est moteur : le gaz fournit globalement du travail, donc le travail qu'il reçoit est négatif (W_cycle < 0). Comme ΔU_cycle = 0, Q_cycle = -W_cycle > 0 : il reçoit globalement de la chaleur.",
      "Faux : ces signes correspondent bien à un cycle récepteur, mais celui-ci est parcouru dans le sens antihoraire, pas horaire.",
      "Faux : les signes indiqués sont ceux d'un cycle moteur. Un cycle récepteur reçoit du travail : W_cycle > 0 et, puisque ΔU_cycle = 0, Q_cycle < 0.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-vf1",
    lecon: 5,
    question:
      "Lors d'une transformation adiabatique d'un gaz parfait, Q = 0 ; sa température reste donc nécessairement constante.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : adiabatique signifie seulement qu'aucune chaleur n'est échangée. Le gaz peut néanmoins recevoir ou fournir du travail, ce qui modifie son énergie interne et donc sa température.",
      "Exact : Q = 0 n'implique pas ΔU = 0. Avec ΔU = Q + W, on a ici ΔU = W. Une détente adiabatique fournit du travail (W < 0) et refroidit le gaz ; une compression adiabatique reçoit du travail (W > 0) et le chauffe.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q7",
    lecon: 5,
    question:
      "Deux mêmes quantités d'un gaz parfait, initialement à la même température, reçoivent la même chaleur Q > 0. Le premier gaz est chauffé à volume constant, le second à pression constante. Lequel atteint la température finale la plus élevée ?",
    choices: [
      "Le gaz chauffé à pression constante, car il peut se dilater",
      "Les deux atteignent la même température, puisqu'ils reçoivent la même chaleur",
      "Le gaz chauffé à volume constant, car c_V < c_P",
      "On ne peut rien conclure sans connaître la pression initiale",
    ],
    explanations: [
      "Faux : lors de la dilatation isobare, une partie de l'énergie reçue est restituée à l'extérieur sous forme de travail. Il reste donc moins d'énergie pour augmenter la température.",
      "Faux : à volume constant, Q = nc_VΔT, tandis qu'à pression constante, Q = nc_PΔT. Les capacités thermiques ne sont pas les mêmes.",
      "Exact : pour un même Q > 0, ΔT_V = Q/(nc_V) et ΔT_P = Q/(nc_P). Comme c_P = c_V + R > c_V, on a ΔT_V > ΔT_P : le gaz chauffé à volume constant chauffe davantage.",
      "Faux : la comparaison dépend de c_V et c_P, pas de la pression initiale. Pour un gaz parfait, c_P > c_V.",
    ],
    correctIndex: 2,
  },
  {
    id: "l5-q8",
    lecon: 5,
    question:
      "Un gaz parfait passe de l'état A à l'état B avec P_B = P_A/2 et V_B = 3V_A. Que peut-on affirmer sans connaître le chemin suivi ?",
    choices: [
      "Le gaz refroidit, car sa pression diminue",
      "Sa température ne change pas, car la baisse de pression compense l'augmentation de volume",
      "Le gaz chauffe et il a nécessairement reçu à la fois de la chaleur et du travail",
      "Le gaz chauffe, mais on ne peut pas déterminer séparément les signes de Q et W",
    ],
    explanations: [
      "Faux : la température d'un gaz parfait dépend du produit PV, pas de la pression seule. Ici, ce produit augmente.",
      "Faux : P_BV_B = (P_A/2)(3V_A) = 3P_AV_A/2. Le produit PV n'est donc pas constant.",
      "Faux : le gaz chauffe bien, mais le premier principe fixe seulement la somme Q + W = ΔU > 0. Selon le chemin suivi, Q ou W peut être négatif.",
      "Exact : avec PV = nRT, T_B/T_A = P_BV_B/(P_AV_A) = 3/2. Comme U ne dépend que de T pour un gaz parfait, ΔU > 0. En revanche, Q et W dépendent du chemin : leurs signes individuels ne sont pas déterminés par les seuls états A et B.",
    ],
    correctIndex: 3,
  },
  {
    id: "l5-q9",
    lecon: 5,
    question:
      "Dans un diagramme (P,V), les états C(2P_0,V_0) et B(P_0,2V_0) sont reliés par un segment de droite. Que peut-on affirmer pour un gaz parfait ?",
    choices: [
      "ΔU_{C→B} = 0, mais la transformation n'est pas isotherme et Q_{C→B} = -W_{C→B}",
      "Le travail est nul, puisque les températures initiale et finale sont égales",
      "La chaleur et le travail sont tous deux nuls, puisque l'énergie interne ne varie pas",
    ],
    explanations: [
      "Exact : pour un gaz parfait, U ne dépend que de T, donc T_C = T_B implique ΔU_{C→B} = 0. Le premier principe donne alors Q_{C→B} = -W_{C→B}, même si la température varie pendant le trajet.",
      "Faux : ΔU = 0 n'impose pas W = 0. Le gaz change de volume contre une pression non nulle et fournit ici du travail.",
      "Faux : seule leur somme est nulle. La chaleur reçue compense exactement le travail fourni, comme l'impose ΔU = Q + W = 0.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 6 : Le second principe ───
  // Source : content/tex/chp6_fr/lecon1.tex ; progression du cours, puis compléments.
  {
    id: "l6-q1",
    lecon: 6,
    question: "Dans cette leçon, que demande la réversibilité globale d'une transformation ?",
    choices: [
      "Que le système seul puisse retrouver son état initial, quels que soient les changements de son extérieur.",
      "Qu'un retour puisse restaurer le système et tout son extérieur, sans laisser aucun autre changement.",
      "Que le retour parcoure obligatoirement le même chemin en sens inverse.",
      "Que la transformation soit suffisamment lente pour que ses échanges d'énergie deviennent nuls.",
    ],
    explanations: [
      "Faux : restaurer le système seul peut laisser une trace dans un thermostat ou une source de travail. Il faut aussi restaurer tout l'extérieur.",
      "Exact : il suffit qu'au moins un procédé de retour efface toutes les modifications du système et de son extérieur. La définition globale n'impose pas le chemin de ce retour.",
      "Faux : retracer le chemin relève de la réversibilité locale. La définition globale autorise un autre chemin de retour.",
      "Faux : la lenteur ne garantit pas la réversibilité et ne rend pas nécessairement les chaleurs et les travaux échangés nuls.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q2",
    lecon: 6,
    question: "Quelle affirmation décrit correctement la réversibilité locale et son lien avec la réversibilité globale ?",
    choices: [
      "Elle demande uniquement que les états initial et final du système soient des états d'équilibre.",
      "Elle découle automatiquement de tout procédé qui restaure globalement le système et son extérieur.",
      "Elle permet d'inverser chaque étape d'une succession d'états d'équilibre par une modification infinitésimale des contraintes ; elle implique la réversibilité globale.",
      "Elle permet de retracer le chemin du système, tout en conservant les mêmes signes pour les échanges de chaleur et de travail.",
    ],
    explanations: [
      "Faux : les états intermédiaires et la possibilité d'inverser chaque étape sont essentiels à la définition locale.",
      "Faux : un retour global pourrait emprunter un autre chemin. Son existence ne prouve pas à elle seule que le chemin initial est localement réversible.",
      "Exact : on peut alors parcourir la même succession d'états en sens inverse, en restaurant aussi l'extérieur. La réversibilité locale implique donc la réversibilité globale.",
      "Faux : lors du parcours inverse d'un chemin localement réversible, les échanges thermiques et mécaniques changent de signe à chaque étape.",
    ],
    correctIndex: 2,
  },
  {
    id: "l6-vf1",
    lecon: 6,
    question: "Une compression quasi-statique est nécessairement localement réversible, même si le piston présente des frottements.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : les frottements dissipent de l'énergie et laissent une trace dans le gaz ou son extérieur, même si le gaz reste proche de l'équilibre.",
      "Exact : le caractère quasi-statique ne suffit pas. Il faut aussi supprimer les dissipations et conduire les échanges avec des différences infinitésimales de pression, de température ou de potentiel chimique.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q3",
    lecon: 6,
    question: "Pourquoi un réfrigérateur ordinaire ne contredit-il pas l'énoncé de Clausius ?",
    choices: [
      "Parce que le transfert de chaleur du froid vers le chaud s'accompagne d'un apport de travail extérieur.",
      "Parce que l'énoncé de Clausius ne s'applique qu'aux gaz parfaits.",
      "Parce que le premier principe suffit à autoriser toute machine dont le bilan énergétique est équilibré.",
    ],
    explanations: [
      "Exact : Clausius interdit une transformation cyclique dont le seul effet serait ce transfert du froid vers le chaud. Le réfrigérateur reçoit du travail : ce transfert n'est donc pas son seul effet.",
      "Faux : cet énoncé ne dépend pas du fluide de travail. Il porte sur le bilan global d'une transformation cyclique.",
      "Faux : la conservation de l'énergie est nécessaire mais ne suffit pas. Le second principe impose une contrainte physique supplémentaire.",
    ],
    correctIndex: 0,
  },
  {
    id: "l6-q4",
    lecon: 6,
    question: "Quel fonctionnement est précisément interdit par l'énoncé de Kelvin–Planck ?",
    choices: [
      "Convertir du travail reçu en chaleur au cours d'un cycle.",
      "Recevoir une chaleur Q > 0 et fournir un travail W = −Q pendant une détente isotherme non cyclique d'un gaz parfait.",
      "Fournir du travail sur un cycle en prélevant de la chaleur au thermostat chaud et en en cédant au thermostat froid.",
      "Accomplir un cycle dont le seul effet est de prélever une chaleur Q > 0 à un thermostat unique et de fournir W = −Q à l'extérieur.",
    ],
    explanations: [
      "Faux : la conversion de travail en chaleur est permise. L'interdiction porte sur la conversion intégrale de chaleur en travail avec un thermostat unique et sans autre effet.",
      "Faux : cette détente ne ramène pas le gaz à son état initial. La condition cyclique de l'énoncé est essentielle.",
      "Faux : c'est le fonctionnement d'un moteur ditherme, possible si son rendement respecte la borne de Carnot.",
      "Exact : le premier principe permettrait ce bilan Q + W = 0, mais le second principe interdit ce fonctionnement monotherme cyclique. Avec la convention du cours, fournir du travail correspond à W < 0.",
    ],
    correctIndex: 3,
  },
  {
    id: "l6-q5",
    lecon: 6,
    question: "Dans la preuve d'équivalence des deux énoncés, on suppose qu'une machine viole Kelvin–Planck et on utilise tout son travail pour alimenter un réfrigérateur ordinaire. Quel est le seul effet de l'ensemble sur un cycle ?",
    choices: [
      "Un transfert de chaleur du chaud vers le froid avec un travail net fourni.",
      "Un transfert de chaleur du froid vers le chaud sans travail extérieur net.",
      "Une augmentation de l'énergie interne des deux fluides de travail.",
    ],
    explanations: [
      "Faux : tout le travail de la machine supposée alimente le réfrigérateur. Le travail extérieur net est nul et le transfert thermique net va du froid vers le chaud.",
      "Exact : les travaux se compensent et les deux fluides reviennent à leurs états initiaux. Le seul effet restant viole Clausius, ce qui établit ce sens de l'implication.",
      "Faux : chaque fluide décrit un cycle, donc sa variation d'énergie interne est nulle. Le bilan concerne les modifications des thermostats.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q6",
    lecon: 6,
    question: "Un moteur ditherme fonctionne entre 600 K et 300 K et reçoit Q_ch = 1 000 J par cycle. Quelle est la valeur maximale du travail fourni |W| ?",
    choices: [
      "1 000 J, puisque ΔU = 0 sur un cycle.",
      "300 J, puisque l'écart de température vaut 300 K.",
      "500 J, valeur atteinte par une machine ditherme localement réversible.",
      "Une valeur impossible à déterminer sans connaître le fluide de travail.",
    ],
    explanations: [
      "Faux : ΔU = 0 impose Q_ch + Q_fr + W = 0, sans autoriser la conversion intégrale de Q_ch en travail. Il faut aussi respecter le second principe.",
      "Faux : une différence de température ne donne pas directement une énergie. Le rendement utilise le rapport des températures absolues.",
      "Exact : η_max = 1 − T_fr/T_ch = 1/2, donc |W|_max = 500 J. La convention du cours donne alors W = −500 J et Q_fr = −500 J. Un cycle globalement irréversible fournit strictement moins de travail pour ce même Q_ch.",
      "Faux : les théorèmes de Carnot fixent le même rendement à toutes les machines dithermes localement réversibles entre ces thermostats, indépendamment du fluide.",
    ],
    correctIndex: 2,
  },
  {
    id: "l6-q7",
    lecon: 6,
    question: "Quelles transformations composent le cycle moteur de Carnot d'un gaz parfait présenté dans la leçon ?",
    choices: [
      "Une détente isotherme à T_ch, une détente adiabatique réversible, une compression isotherme à T_fr, puis une compression adiabatique réversible.",
      "Deux transformations isobares reliées par deux transformations isochores.",
      "Deux détentes libres reliées par deux compressions isothermes.",
    ],
    explanations: [
      "Exact : les échanges de chaleur ont lieu sur les deux isothermes localement réversibles ; les adiabatiques relient les deux températures sans échange thermique. Le cycle moteur est parcouru dans le sens horaire dans le diagramme (V, P).",
      "Faux : le cycle de Carnot comporte deux isothermes et deux adiabatiques réversibles, pas deux isobares et deux isochores.",
      "Faux : les détentes libres sont irréversibles et ne constituent pas les adiabatiques réversibles du cycle de Carnot.",
    ],
    correctIndex: 0,
  },
  {
    id: "l6-q8",
    lecon: 6,
    question: "Une machine cyclique reçoit les chaleurs algébriques Q_k de thermostats à T_k > 0. Quelle affirmation respecte l'inégalité de Clausius et les définitions de la leçon ?",
    choices: [
      "Σ_k Q_k/T_k ≥ 0, avec une valeur strictement positive pour un cycle globalement irréversible.",
      "Σ_k Q_k/T_k = 0 pour tout cycle, puisque l'entropie de la machine retrouve sa valeur initiale.",
      "Σ_k Q_k/T_k ≤ 0, et l'égalité prouve à elle seule que le chemin initial est localement réversible.",
      "Σ_k Q_k/T_k ≤ 0 ; l'égalité caractérise ici la réversibilité globale, sans prouver à elle seule la réversibilité locale du chemin initial.",
    ],
    explanations: [
      "Faux : les Q_k sont comptés positivement lorsqu'ils sont reçus par la machine. Avec cette convention, la somme est négative ou nulle.",
      "Faux : ΔS_machine = 0 sur un cycle, mais l'entropie échangée peut être négative et compensée par une production positive d'entropie.",
      "Faux : le signe est correct, mais le cas d'égalité construit un retour global à l'aide de machines auxiliaires. Il ne montre pas que la machine initiale peut retracer son propre chemin.",
      "Exact : un cycle localement réversible réalise l'égalité. Réciproquement, une somme nulle permet de restaurer les sources par des machines auxiliaires ; une somme strictement négative signale un cycle globalement irréversible.",
    ],
    correctIndex: 3,
  },
  {
    id: "l6-q9",
    lecon: 6,
    question: "Comment la leçon construit-elle l'entropie à partir de l'égalité ∮ δQ_rev/T = 0 sur les cycles localement réversibles ?",
    choices: [
      "Elle en déduit que la chaleur Q est une fonction d'état.",
      "Elle définit S(B) − S(A) par l'intégrale de δQ_rev/T, indépendante du chemin localement réversible choisi entre A et B.",
      "Elle définit l'entropie absolue de tout état par S = U/T.",
    ],
    explanations: [
      "Faux : c'est δQ_rev/T qui est une différentielle exacte. La chaleur échangée continue de dépendre du chemin.",
      "Exact : deux chemins localement réversibles, dont l'un est parcouru à l'envers, forment un cycle d'intégrale nulle. L'entropie est ainsi définie à une constante additive près sur chaque domaine réversiblement connexe, et s'exprime en J/K.",
      "Faux : la construction définit des différences d'entropie et laisse une constante additive libre. Elle ne donne pas la formule générale S = U/T.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q10",
    lecon: 6,
    question: "Pour un système simple fermé de composition fixée, la relation fondamentale donne dS = dU/T + (P/T) dV. Que signifie (∂S/∂U)_{V,N} = 1/T ?",
    choices: [
      "L'entropie ne dépend que de l'énergie interne, même lorsque le volume varie.",
      "La température est égale à l'entropie divisée par l'énergie interne.",
      "À volume et quantité de matière fixés, l'entropie croît avec l'énergie interne dans le domaine T > 0 considéré ici.",
    ],
    explanations: [
      "Faux : la dérivée est prise à V et N fixés. Elle n'efface pas la dépendance de S envers ces variables ; le terme (P/T) dV décrit précisément celle envers le volume.",
      "Faux : 1/T est une dérivée de S par rapport à U, pas le rapport S/U. On ne peut pas confondre ces deux opérations.",
      "Exact : à V et N fixés, la pente de S en fonction de U vaut 1/T. Elle est donc positive pour les températures absolues positives étudiées dans la leçon.",
    ],
    correctIndex: 2,
  },
  {
    id: "l6-q11",
    lecon: 6,
    question: "Un système fermé cède 2 400 J à un thermostat à 300 K. Sa variation d'entropie est ΔS = −6 J/K. Quels sont son entropie échangée S_e et son entropie produite S_i ?",
    choices: [
      "S_e = −8 J/K et S_i = +2 J/K : le bilan est compatible avec le second principe.",
      "S_e = +8 J/K et S_i = −14 J/K : céder de la chaleur compte positivement.",
      "S_e = −8 J/K et S_i = −6 J/K : l'entropie produite est égale à ΔS.",
      "Ce processus est nécessairement impossible, puisque l'entropie du système diminue.",
    ],
    explanations: [
      "Exact : Q = −2 400 J, donc S_e = Q/T_ext = −8 J/K. Le bilan ΔS = S_e + S_i donne S_i = +2 J/K. Le thermostat gagne 8 J/K : l'entropie totale augmente de 2 J/K si les autres dispositifs ne changent pas d'entropie.",
      "Faux : la convention du banquier compte négativement la chaleur cédée par le système. De plus, une production d'entropie négative serait interdite.",
      "Faux : la production est S_i = ΔS − S_e, et non ΔS. L'entropie du système peut diminuer tout en produisant de l'entropie, s'il en cède davantage qu'il n'en produit.",
      "Faux : le système n'est pas isolé. Le second principe impose S_i ≥ 0 et la non-décroissance de l'entropie de l'ensemble complet, pas celle de chaque partie.",
    ],
    correctIndex: 0,
  },
  {
    id: "l6-q12",
    lecon: 6,
    question: "Une transformation irréversible relie deux états d'équilibre A et B, mais ses états intermédiaires sont loin de l'équilibre. Comment calculer ΔS et la production d'entropie ?",
    choices: [
      "Imposer une température uniforme au système à chaque instant et intégrer la chaleur réelle divisée par cette température.",
      "Calculer ΔS sur un chemin localement réversible entre A et B, puis utiliser les échanges du processus réel pour calculer S_e et S_i = ΔS − S_e.",
      "Utiliser la chaleur du chemin réversible aussi pour S_e, puisque A et B sont les mêmes.",
    ],
    explanations: [
      "Faux : une température unique du système n'est pas nécessairement définie pendant une transformation loin de l'équilibre. On conserve alors le bilan intégré entre les états d'équilibre.",
      "Exact : ΔS dépend seulement des extrémités. En revanche, S_e = ∫ δQ/T_ext et S_i dépendent du processus réel ; seuls les échanges de ce processus permettent d'en établir le bilan.",
      "Faux : la chaleur du chemin de calcul peut différer de la chaleur réellement échangée. Remplacer l'une par l'autre ferait disparaître artificiellement la production d'entropie.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q13",
    lecon: 6,
    question: "Un gaz parfait de n moles subit une détente de Joule–Gay-Lussac du volume v au volume V > v dans une enceinte rigide et adiabatique. Le retrait de la cloison ne modifie pas l'extérieur. Quel bilan est correct ?",
    choices: [
      "Q = W = 0, donc ΔS_gaz = 0.",
      "ΔU = 0, mais la température du gaz parfait diminue nécessairement.",
      "ΔS_gaz = nR ln(v/V) < 0, car le gaz se dilue.",
      "Q = W = ΔU = 0, la température reste la même entre les états initial et final et ΔS_tot = nR ln(V/v) > 0.",
    ],
    explanations: [
      "Faux : l'absence d'échange thermique n'interdit pas la production d'entropie. On ne peut pas appliquer dS = δQ_rev/T à la chaleur réelle de cette détente irréversible.",
      "Faux : pour un gaz parfait, l'énergie interne ne dépend que de la température. ΔU = 0 implique donc la même température aux deux états d'équilibre.",
      "Faux : le rapport est V/v > 1. Une détente isotherme localement réversible entre les mêmes états donne ΔS_gaz = nR ln(V/v) > 0.",
      "Exact : le premier principe ne distingue pas les sens possibles, mais l'augmentation d'entropie totale prouve qu'aucun retour ne peut restaurer le gaz et son extérieur sans laisser une trace ailleurs.",
    ],
    correctIndex: 3,
  },
  {
    id: "l6-q14",
    lecon: 6,
    question: "Après cette détente libre, une compression isotherme localement réversible ramène le gaz parfait de V à v à sa température initiale T. Pourquoi n'est-ce pas un retour global de la détente libre ?",
    choices: [
      "Parce qu'une compression ne peut jamais être localement réversible.",
      "Parce que le gaz ne retrouve pas son entropie initiale malgré le retour au même état.",
      "Parce que le thermostat a reçu nRT ln(V/v) de chaleur et gagné nR ln(V/v) d'entropie : l'extérieur garde la trace de la détente libre.",
    ],
    explanations: [
      "Faux : une compression isotherme conduite sans dissipation et avec des déséquilibres infinitésimaux peut être localement réversible. Cela ne fait pas d'elle l'inverse global de la détente libre.",
      "Faux : S est une fonction d'état. Le gaz retrouve bien son entropie initiale, en perdant nR ln(V/v) pendant la compression.",
      "Exact : le gaz est restauré, mais la source mécanique a fourni du travail et le thermostat a reçu de la chaleur. La compression réversible n'ajoute pas de production totale d'entropie ; elle transfère au thermostat la trace créée par la détente libre.",
    ],
    correctIndex: 2,
  },
  {
    id: "l6-q15",
    lecon: 6,
    question: "Une chaleur Q = 1 200 J passe directement d'un thermostat à 600 K vers un thermostat à 300 K. Quelle est la variation d'entropie totale des deux thermostats ?",
    choices: [
      "+2 J/K ; rendre le transfert plus lent ne change pas cette valeur pour la même chaleur transférée.",
      "0 J/K, puisque la chaleur perdue par l'un est égale à celle reçue par l'autre.",
      "−2 J/K, puisque le thermostat chaud perd de l'entropie.",
      "+4 J/K, car seule l'entropie du thermostat froid doit être comptée.",
    ],
    explanations: [
      "Exact : ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. La durée ne figure pas dans ce bilan ; une paroi peu conductrice ralentit le transfert sans supprimer l'irréversibilité due à l'écart fini de température.",
      "Faux : l'énergie est conservée, mais les variations d'entropie sont pondérées par les inverses des températures, qui diffèrent.",
      "Faux : le thermostat chaud perd 2 J/K, mais le thermostat froid en gagne 4. Leur somme est positive.",
      "Faux : +4 J/K est seulement la variation du thermostat froid. Le bilan total inclut aussi les −2 J/K du thermostat chaud.",
    ],
    correctIndex: 0,
  },
  {
    id: "l6-q16",
    lecon: 6,
    question: "Quelle hypothèse permet de déduire le maximum d'entropie à l'équilibre stable à partir de ΔS ≥ 0 pour un système isolé ?",
    choices: [
      "Il suffit de comparer l'équilibre à tous les états, même si leurs énergies ou leurs volumes diffèrent.",
      "Chaque macroconfiguration comparée peut relaxer vers le même équilibre stable, à grandeurs conservées et contraintes extérieures identiques.",
      "Toute configuration stationnaire est accessible instantanément depuis n'importe quelle autre.",
    ],
    explanations: [
      "Faux : le maximum est recherché sous contraintes, notamment à U, V et N fixés. Changer ces valeurs change l'ensemble des états comparés.",
      "Exact : pour chaque état accessible X, la relaxation isolée X → E donne S(E) ≥ S(X). L'hypothèse d'une même classe accessible est nécessaire à ce raisonnement.",
      "Faux : l'accessibilité et le temps de relaxation sont des questions distinctes. Des barrières peuvent notamment maintenir le système dans un état métastable.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q17",
    lecon: 6,
    question: "La leçon obtient S(λX + (1 − λ)Y) ≥ λS(X) + (1 − λ)S(Y), avec 0 ≤ λ ≤ 1. Qu'en déduit-on pour la stabilité ?",
    choices: [
      "L'entropie est convexe ; l'équilibre stable minimise S à contraintes fixées.",
      "L'entropie est strictement concave partout ; l'équilibre est donc toujours unique.",
      "L'entropie est concave dans ses variables extensives ; sur un ensemble convexe à contraintes linéaires, un état stationnaire de S est un maximum global.",
    ],
    explanations: [
      "Faux : le sens de l'inégalité définit la concavité, et le principe d'équilibre d'un système isolé recherche un maximum d'entropie.",
      "Faux : la concavité n'est pas nécessairement stricte, notamment dans les domaines de coexistence de phases. On ne peut pas en déduire systématiquement l'unicité.",
      "Exact : l'état contraint a l'entropie λS(X) + (1 − λ)S(Y) par additivité et extensivité. La relaxation vers l'état homogène ne la diminue pas, ce qui donne la concavité et le critère de maximum sous les contraintes indiquées.",
    ],
    correctIndex: 2,
  },
  {
    id: "l6-q18",
    lecon: 6,
    question: "Deux sous-systèmes de composition fixée peuvent échanger indépendamment de l'énergie et du volume dans un ensemble isolé. Que donne la stationnarité de S_tot pour toutes les redistributions autorisées ?",
    choices: [
      "U_1 = U_2 et V_1 = V_2, quelles que soient les tailles des sous-systèmes.",
      "S_1 = S_2, sans condition sur leurs températures.",
      "T_1 = T_2 seulement ; la pression ne joue aucun rôle dans le bilan entropique.",
      "T_1 = T_2 et P_1 = P_2.",
    ],
    explanations: [
      "Faux : l'équilibre n'impose pas l'égalité des grandeurs extensives. Deux sous-systèmes de tailles différentes peuvent avoir des énergies et des volumes différents à l'équilibre.",
      "Faux : on annule les variations de l'entropie totale, pas la différence des entropies des deux parties.",
      "Faux : les variations de volume sont autorisées. Le coefficient P_1/T_1 − P_2/T_2 doit donc s'annuler lui aussi.",
      "Exact : dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1. Les deux coefficients s'annulent, ce qui donne les équilibres thermique et mécanique.",
    ],
    correctIndex: 3,
  },
  {
    id: "l6-q19",
    lecon: 6,
    question: "Dans l'expérience du piston et des grains de sable, quelle limite conduit à une compression localement réversible ?",
    choices: [
      "Ajouter les mêmes grosses masses en attendant simplement plus longtemps entre deux ajouts.",
      "Faire tendre la masse de chaque grain vers zéro en écartant les autres dissipations, notamment les frottements.",
      "Isoler thermiquement le gaz, sans condition sur les déséquilibres mécaniques.",
    ],
    explanations: [
      "Faux : chaque grosse masse crée encore une relaxation finie et une production positive d'entropie. Attendre davantage n'efface pas cette production.",
      "Exact : les déséquilibres de chaque étape et la production totale d'entropie tendent alors vers zéro. Le retrait des grains dans l'ordre inverse permet de retracer le chemin du gaz, du piston et des grains.",
      "Faux : l'adiabaticité interdit les échanges de chaleur, pas les dissipations ni la production d'entropie. Elle ne suffit donc pas à assurer la réversibilité.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-vf2",
    lecon: 6,
    question: "Le second principe fixe le sens thermodynamiquement admissible des évolutions, mais ne détermine pas à lui seul leur durée ni les coefficients de transport.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : il contraint les transformations et caractérise les équilibres sous les hypothèses du cours. Il ne fournit ni temps de relaxation, ni conductivité thermique, ni viscosité, ni coefficient de diffusion.",
      "Faux : le second principe n'est pas une équation complète de la dynamique. Des lois supplémentaires sont nécessaires pour décrire la vitesse d'évolution et les états intermédiaires d'une transformation violente.",
    ],
    correctIndex: 0,
  },
  // Compléments « Pour aller plus loin » de la leçon.
  {
    id: "l6-q20",
    lecon: 6,
    question: "Complément — À l'équilibre, N particules indépendantes se répartissent dans deux moitiés égales d'une enceinte. Quelle est la probabilité de les trouver toutes dans la moitié gauche lors d'une observation ?",
    choices: [
      "1/2, quel que soit N.",
      "2^{−N}, y compris à l'instant initial où elles viennent d'être préparées toutes à gauche.",
      "2^{−N} à l'équilibre ; cette formule ne décrit pas la relaxation depuis l'état initial préparé.",
    ],
    explanations: [
      "Faux : 1/2 est la probabilité pour une seule particule. Pour N positions indépendantes, on multiplie ces probabilités.",
      "Faux : juste après la préparation à gauche, la probabilité conditionnelle de les y trouver vaut 1. La distribution d'équilibre ne décrit pas chaque instant de la relaxation.",
      "Exact : la probabilité vaut (1/2)^N. Pour la détente de v à 2v, ΔS = Nk_B ln 2, donc 2^{−N} = exp(−ΔS/k_B). Cette probabilité d'équilibre ne fournit pas une loi temporelle.",
    ],
    correctIndex: 2,
  },
  {
    id: "l6-q21",
    lecon: 6,
    question: "Complément — Quelle conclusion respecte la discussion de la réversibilité microscopique et de la récurrence de Poincaré ?",
    choices: [
      "La réversibilité des équations microscopiques permet de restaurer une détente libre en remettant simplement la cloison.",
      "Le théorème garantit le retour exact de tout micro-état au bout d'un temps court.",
      "Le temps 2^N τ_mix est une formule générale exacte pour la récurrence du micro-état complet.",
      "Sous les hypothèses du théorème, presque tout micro-état revient arbitrairement près de son état initial, sans garantie de retour exact ni rapide.",
    ],
    explanations: [
      "Faux : remettre une cloison ne renverse pas toutes les vitesses ni les corrélations microscopiques. Un contrôle de quelques variables macroscopiques ne réalise pas l'inversion microscopique exacte.",
      "Faux : le théorème porte sur presque tout micro-état, pour un mouvement dans une région de volume de phase fini. Il affirme un retour arbitrairement proche, sans imposer un délai court.",
      "Faux : cette estimation suppose des observations indépendantes séparées par τ_mix et concerne une fluctuation vers un macro-état particulier. Elle n'est pas une formule générale de récurrence du micro-état complet.",
      "Exact : la récurrence apporte une nuance microscopique, sans rendre les détentes macroscopiques réversibles par les moyens thermodynamiques usuels. Les temps de retour peuvent dépasser toutes les durées expérimentales.",
    ],
    correctIndex: 3,
  },

  // ─── Leçon 7 : Relations fondamentales ───
  {
    id: "l7-q1",
    lecon: 7,
    question: "Les variables naturelles de l'énergie interne U sont :",
    choices: ["T, P, N", "S, V, N", "T, V, N", "S, P, N"],
    explanations: [
      "Faux : T et P sont deux intensives ; aucun potentiel usuel n'a ces variables naturelles ensemble avec N seulement.",
      "Exact : U = U(S, V, N), et T, -P, μ s'obtiennent comme dérivées partielles de U.",
      "Faux : ce sont les variables naturelles de l'énergie libre F = U - TS.",
      "Faux : ce sont les variables naturelles de l'enthalpie H = U + PV.",
    ],
    correctIndex: 1,
  },
  {
    id: "l7-q2",
    lecon: 7,
    question: "Parmi ces relations, laquelle est une équation d'état en représentation énergie ?",
    choices: [
      "T = (∂U/∂S) à V, N fixés",
      "T = (∂U/∂V) à S, N fixés",
      "T = (∂S/∂U) à V, N fixés",
      "T = (∂U/∂N) à S, V fixés",
    ],
    explanations: [
      "Exact : la température est la pente de l'énergie interne par rapport à l'entropie, à V et N fixés.",
      "Faux : cette dérivée vaut -P, pas T.",
      "Faux : (∂S/∂U) vaut 1/T (représentation entropie), pas T.",
      "Faux : cette dérivée définit le potentiel chimique μ.",
    ],
    correctIndex: 0,
  },
  {
    id: "l7-q3",
    lecon: 7,
    question: "Le théorème d'Euler, appliqué à l'extensivité de U(S,V,N), donne :",
    choices: [
      "U = T S + P V - μ N",
      "dU = T dS - P dV + μ dN",
      "S dT - V dP + N dμ = 0",
      "U = T S - P V + μ N",
    ],
    explanations: [
      "Faux : erreur de signes sur les termes PV et μN.",
      "Faux : c'est le premier principe différentiel, valable indépendamment d'Euler.",
      "Faux : c'est Gibbs-Duhem, obtenue en différentiant la relation d'Euler et en soustrayant le premier principe.",
      "Exact : c'est la relation d'Euler, conséquence directe de l'homogénéité de degré 1 de U.",
    ],
    correctIndex: 3,
  },
  {
    id: "l7-q4",
    lecon: 7,
    question: "Que nous apprend la relation de Gibbs-Duhem, S dT - V dP + N dμ = 0 ?",
    choices: [
      "Que les trois paramètres intensifs T, P, μ ne peuvent pas varier indépendamment : il n'y a que deux degrés de liberté.",
      "Que les trois variables extensives S, V, N sont liées entre elles par une contrainte de proportionnalité, quel que soit le système considéré.",
      "Que l'entropie d'un système à l'équilibre est nécessairement une fonction croissante et concave de l'énergie interne.",
    ],
    explanations: [
      "Exact : fixer les variations de deux intensifs détermine la troisième ; un corps pur monophasé a deux degrés de liberté thermodynamiques.",
      "Faux : les extensives restent indépendantes ; Gibbs-Duhem contraint les intensives.",
      "Faux : la concavité de S relève de la stabilité thermodynamique, un résultat distinct.",
    ],
    correctIndex: 0,
  },
  {
    id: "l7-q5",
    lecon: 7,
    question: "Parmi ces égalités, laquelle est une relation de Maxwell correcte ?",
    choices: [
      "(∂T/∂V)_S = -(∂P/∂S)_V",
      "(∂T/∂V)_S = (∂P/∂S)_V",
      "(∂S/∂V)_T = -(∂P/∂T)_V",
      "(∂T/∂S)_V = -(∂P/∂V)_S",
    ],
    explanations: [
      "Exact : elle découle du théorème de Schwarz (égalité des dérivées croisées) appliqué à U(S,V) avec T = ∂U/∂S et P = -∂U/∂V.",
      "Faux : il manque le signe moins, qui vient du -P dans dU = T dS - P dV.",
      "Faux : la relation correcte (issue de F) est (∂S/∂V)_T = +(∂P/∂T)_V, sans signe moins.",
      "Faux : ce couple de dérivées ne correspond à aucune égalité de dérivées croisées d'un potentiel.",
    ],
    correctIndex: 0,
  },
  {
    id: "l7-q6",
    lecon: 7,
    question: "La loi de Laplace, P V^γ = constante, est valable pour :",
    choices: [
      "Toute transformation adiabatique d'un gaz parfait, qu'elle soit brutale ou infiniment lente, dès lors que Q = 0.",
      "Tout fluide subissant une compression rapide, y compris les gaz réels et les liquides faiblement compressibles.",
      "Toute transformation réversible d'un gaz parfait, y compris les isothermes et les isobares quasi-statiques.",
      "Une transformation adiabatique et réversible d'un gaz parfait (à γ constant).",
    ],
    explanations: [
      "Faux : c'est le piège ; la détente de Joule est adiabatique mais irréversible, et elle ne suit pas Laplace (T y reste constante alors que V change).",
      "Faux : la démonstration utilise explicitement PV = nRT ; elle ne vaut que pour le gaz parfait.",
      "Faux : une isotherme réversible d'un GP suit PV = cste, pas PV^γ = cste.",
      "Exact : il faut les deux conditions à la fois (δQ = 0 et réversibilité), plus l'équation d'état du gaz parfait avec γ constant.",
    ],
    correctIndex: 3,
  },
  {
    id: "l7-vf1",
    lecon: 7,
    question: "Les relations de Maxwell découlent de l'égalité des dérivées croisées (théorème de Schwarz) appliquée aux potentiels thermodynamiques.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : chaque potentiel (U, F, H, G) fournit ses relations de Maxwell en égalant les dérivées secondes croisées de ses variables naturelles.",
      "Faux : c'est bien leur origine ; les dérivées secondes croisées d'une fonction régulière sont égales, et chaque potentiel en fournit un jeu.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 8 : Changements de variables, potentiels ───
  {
    id: "l8-q1",
    lecon: 8,
    question: "Pourquoi faut-il toujours préciser les variables tenues constantes dans une dérivée partielle thermodynamique ?",
    choices: [
      "Parce que les variables ne sont pas indépendantes : la même dérivée prend des valeurs différentes selon ce qu'on fixe.",
      "Par convention d'écriture uniquement : le résultat numérique du calcul est le même dans tous les cas, mais la notation complète est exigée dans les copies.",
      "Parce que certaines dérivées partielles divergent si l'on ne fixe pas les bonnes variables, ce qui rendrait le calcul impossible.",
    ],
    explanations: [
      "Exact : ∂V/∂T à P fixé et ∂V/∂T à S fixé donnent des valeurs différentes pour le même gaz (nR/P contre -3nR/2P pour un GP monoatomique). Les indices ne sont pas optionnels.",
      "Faux : le résultat numérique change réellement ; ce n'est pas une simple convention.",
      "Faux : la question n'est pas la divergence mais l'ambiguïté : sans indices, l'expression peut désigner plusieurs quantités distinctes.",
    ],
    correctIndex: 0,
  },
  {
    id: "l8-q2",
    lecon: 8,
    question: "Une transformée de Legendre, en thermodynamique, permet de :",
    choices: [
      "Calculer l'entropie d'un gaz parfait à partir de ses deux équations d'état, par intégration directe terme à terme.",
      "Passer d'une représentation graphique (P,V) à une représentation (T,S) sans changer la forme du cycle étudié.",
      "Construire un nouveau potentiel où une variable extensive est remplacée par son intensive conjuguée.",
      "Rendre exactes les différentielles δQ et δW en les combinant avec les différentielles des fonctions d'état.",
    ],
    explanations: [
      "Faux : l'entropie du GP s'obtient en intégrant les équations d'état (et Gibbs-Duhem), pas par Legendre.",
      "Faux : le changement de diagramme est une simple relecture graphique, sans rapport avec Legendre.",
      "Exact : c'est le procédé qui fait passer de U(S,V,N) à F(T,V,N) = U - TS, ou à H, G.",
      "Faux : δQ et δW restent inexactes quoi qu'on fasse ; c'est une propriété physique, pas un défaut de représentation.",
    ],
    correctIndex: 2,
  },
  {
    id: "l8-q3",
    lecon: 8,
    question: "L'énergie libre F = U - TS a pour variables naturelles :",
    choices: ["S, V, N", "T, V, N", "T, P, N", "S, P, N"],
    explanations: [
      "Faux : ce sont les variables naturelles de U.",
      "Exact : dF = -S dT - P dV + μ dN, donc F = F(T, V, N).",
      "Faux : ce sont celles de l'enthalpie libre G.",
      "Faux : ce sont celles de l'enthalpie H.",
    ],
    correctIndex: 1,
  },
  {
    id: "l8-q4",
    lecon: 8,
    question: "Parmi les quatre potentiels usuels U, F, H, G, lequel a pour variables naturelles (S, P, N) ?",
    choices: ["U, l'énergie interne", "F, l'énergie libre", "H, l'enthalpie", "G, l'enthalpie libre"],
    explanations: [
      "Faux : les variables naturelles de U sont (S, V, N).",
      "Faux : celles de F = U - TS sont (T, V, N).",
      "Exact : dH = T dS + V dP + μ dN, donc H = H(S, P, N).",
      "Faux : celles de G = H - TS sont (T, P, N).",
    ],
    correctIndex: 2,
  },
  {
    id: "l8-q5",
    lecon: 8,
    question: "La différentielle de l'enthalpie libre G s'écrit :",
    choices: [
      "dG = T dS + V dP + μ dN",
      "dG = -S dT - P dV + μ dN",
      "dG = -S dT + V dP + μ dN",
    ],
    explanations: [
      "Faux : c'est dH, la différentielle de l'enthalpie.",
      "Faux : c'est dF, la différentielle de l'énergie libre.",
      "Exact : G = H - TS donne dG = -S dT + V dP + μ dN, d'où ses variables naturelles (T, P, N).",
    ],
    correctIndex: 2,
  },
  {
    id: "l8-q6",
    lecon: 8,
    question: "Pour un système fermé, la variation d'enthalpie ΔH est égale à la chaleur reçue Q lors d'une transformation :",
    choices: ["Isotherme", "Isochore", "Isobare", "Adiabatique"],
    explanations: [
      "Faux : en isotherme, rien ne relie directement ΔH à Q en général.",
      "Faux : en isochore, c'est ΔU qui vaut Q (car W = 0), pas ΔH.",
      "Exact : dH = δQ + V dP, donc à pression constante dH = δQ. C'est ce qui rend H si utile pour les changements d'état à pression atmosphérique (chaleur latente = ΔH).",
      "Faux : en adiabatique, Q = 0 alors que ΔH n'a aucune raison d'être nulle.",
    ],
    correctIndex: 2,
  },

  // ─── Leçon 9 : Coefficients calorimétriques et thermoélastiques ───
  {
    id: "l9-q1",
    lecon: 9,
    question: "La capacité thermique à volume constant c_V est définie par :",
    choices: [
      "c_V = T (∂S/∂T)_V",
      "c_V = T (∂S/∂V)_T",
      "c_V = T (∂S/∂P)_T",
      "c_V = (∂U/∂V)_T",
    ],
    explanations: [
      "Exact : elle s'obtient en identifiant δQ = T dS = c_V dT + ℓ dV en variables (T,V) ; à volume constant, dU = δQ = c_V dT.",
      "Faux : c'est la définition du coefficient de dilatation isotherme ℓ.",
      "Faux : cette dérivée définit le coefficient de compression isotherme h.",
      "Faux : ce n'est pas une capacité thermique ; les capacités mesurent une réponse à un changement de température.",
    ],
    correctIndex: 0,
  },
  {
    id: "l9-q2",
    lecon: 9,
    question: "Pour un gaz parfait quelconque, la relation de Mayer c_P - c_V (molaire) vaut :",
    choices: ["0", "γR", "3R/2", "R"],
    explanations: [
      "Faux : c_P = c_V n'est une bonne approximation que pour les phases quasi-incompressibles (liquides, solides).",
      "Faux : γ = c_P/c_V est le rapport, pas la différence.",
      "Faux : 3R/2 est la valeur de c_V pour un GP monoatomique, pas la différence.",
      "Exact : c_P - c_V = R pour tout gaz parfait, quelle que soit son atomicité.",
    ],
    correctIndex: 3,
  },
  {
    id: "l9-q3",
    lecon: 9,
    question: "On chauffe l'air d'une pièce avec un radiateur. La pièce n'est pas hermétique : l'air dilaté s'échappe par les interstices, la pression restant atmosphérique. Quelle capacité thermique utiliser ?",
    choices: [
      "c_V, car le volume de la pièce est fixé par les murs",
      "c_P, car le gaz évolue à pression constante",
      "La moyenne de c_P et c_V, car volume et pression jouent ici un rôle symétrique dans la transformation",
    ],
    explanations: [
      "Faux : c'est le piège ; le volume de la pièce est constant, mais pas celui du gaz, qui se dilate et s'échappe. Or c'est le gaz qui subit la transformation.",
      "Exact : le gaz se dilate à pression atmosphérique constante, donc c'est bien c_P (pour l'air, c_p ≈ 1000 J/K/kg).",
      "Faux : il n'y a aucune raison de moyenner ; la transformation est isobare pour le gaz, point final.",
    ],
    correctIndex: 1,
  },
  {
    id: "l9-q4",
    lecon: 9,
    question: "La stabilité thermodynamique impose notamment :",
    choices: [
      "c_V ≥ 0 et χ_T ≥ 0",
      "c_V ≤ 0 et χ_T ≥ 0",
      "γ = c_P/c_V < 1",
      "α > 0 pour tout fluide",
    ],
    explanations: [
      "Exact : ces critères découlent de la concavité de S (ou convexité de U) ; un système violant l'un d'eux serait instable.",
      "Faux : c_V négatif signifierait qu'apporter de la chaleur refroidit le corps, ce qui est instable.",
      "Faux : la stabilité impose au contraire γ > 1.",
      "Faux : α peut être négatif ; l'eau entre 0 et 4°C se contracte quand on la chauffe (anomalie dilatométrique), sans violer la stabilité.",
    ],
    correctIndex: 0,
  },
  {
    id: "l9-q5",
    lecon: 9,
    question: "Pour un gaz parfait monoatomique, le coefficient de Laplace γ = c_P/c_V vaut :",
    choices: ["7/5", "5/3", "3/2", "1"],
    explanations: [
      "Faux : 7/5 est la valeur pour un gaz parfait diatomique (c_V = 5R/2).",
      "Exact : c_V = 3R/2 et c_P = 5R/2, donc γ = 5/3.",
      "Faux : 3/2 est le facteur de c_V = 3R/2, pas le rapport c_P/c_V.",
      "Faux : γ = 1 signifierait c_P = c_V, ce que la relation de Mayer exclut pour un gaz.",
    ],
    correctIndex: 1,
  },
  {
    id: "l9-vf1",
    lecon: 9,
    question: "Pour un gaz parfait, la capacité thermique à pression constante c_P est toujours strictement supérieure à c_V.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : la relation de Mayer donne c_P - c_V = nR > 0, quelle que soit l'atomicité du gaz.",
      "Faux : c_P - c_V = nR > 0 est toujours vérifié pour un gaz parfait ; c'est la relation de Mayer.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 10 : Transitions de phase ───
  {
    id: "l10-q1",
    lecon: 10,
    question: "Au cours d'une transition de phase à pression constante (par exemple la fusion), tant que les deux phases coexistent, la température :",
    choices: ["Augmente continûment", "Devient indéfinie", "Diminue continûment", "Reste constante"],
    explanations: [
      "Faux : tant que les deux phases coexistent, l'énergie apportée sert au changement de phase, pas à l'échauffement.",
      "Faux : T est parfaitement définie (et constante) pendant la coexistence à l'équilibre.",
      "Faux : la température ne diminue pas non plus pendant la coexistence à P constante.",
      "Exact : la chaleur latente fait progresser la transition sans changer T, d'où le palier de température lors de la fonte d'un glaçon.",
    ],
    correctIndex: 3,
  },
  {
    id: "l10-q2",
    lecon: 10,
    question: "Dans le diagramme (P,V) du gaz de Van der Waals, à quoi sert la règle des paliers de Maxwell ?",
    choices: [
      "À fixer la position du palier liquide-vapeur, par égalité des aires au-dessus et au-dessous du segment.",
      "À calculer la température critique du fluide, en cherchant l'isotherme dont la partie croissante disparaît exactement au point d'inflexion.",
      "À démontrer que les isothermes de Van der Waals sont partout décroissantes, comme celles du gaz parfait, une fois les corrections a et b prises en compte.",
    ],
    explanations: [
      "Exact : la règle des aires égales découle de l'égalité des potentiels chimiques aux deux extrémités du palier (∫v dP = 0 le long de l'isotherme).",
      "Faux : la température critique s'obtient par le point d'inflexion à tangente horizontale de l'isotherme critique, sans la règle de Maxwell.",
      "Faux : c'est le contraire ; sous la température critique, certaines portions sont croissantes (χ_T < 0), et c'est cette instabilité qui motive la construction du palier.",
    ],
    correctIndex: 0,
  },
  {
    id: "l10-q3",
    lecon: 10,
    question: "Des gouttes de pluie verglaçante restent liquides en dessous de 0°C (surfusion) jusqu'à toucher le sol. Que peut-on dire de cet état ?",
    choices: [
      "C'est un état d'équilibre stable, aussi stable que la glace à cette température, les deux phases étant simplement séparées par une barrière de tension superficielle.",
      "C'est un état localement stable mais globalement instable : une petite perturbation déclenche la solidification.",
      "C'est un état hors équilibre au sens strict, dans lequel ni la température ni la pression des gouttes ne sont définies tant que la transition n'a pas eu lieu.",
    ],
    explanations: [
      "Faux : l'eau liquide n'est pas l'état d'entropie maximale sous 0°C ; c'est un équilibre métastable, pas l'équilibre global.",
      "Exact : c'est la distinction stabilité locale / stabilité globale du cours ; l'état résiste aux petites fluctuations mais bascule à la moindre perturbation suffisante (l'impact au sol).",
      "Faux : T et P sont bien définies dans une goutte en surfusion ; elle est à un équilibre (métastable), pas hors équilibre.",
    ],
    correctIndex: 1,
  },
  {
    id: "l10-q4",
    lecon: 10,
    question: "La formule de Clapeyron, (dP/dT) = Δs/Δv le long d'une courbe de coexistence, cesse d'être applicable :",
    choices: [
      "Dès que l'on s'éloigne du point triple, car la chaleur latente varie trop vite avec la température pour que la dérivée garde un sens.",
      "Pour les transitions solide-gaz (sublimation), car le solide n'a pas de volume molaire bien défini à basse pression.",
      "Au point critique, où Δv → 0 rend la formule singulière.",
    ],
    explanations: [
      "Faux : la formule de Clapeyron elle-même vaut le long de toute la courbe (c'est son approximation de Rankine qui n'est bonne que près du point triple).",
      "Faux : elle s'applique à toute transition du premier ordre, sublimation comprise.",
      "Exact : au point critique, les volumes molaires des deux phases deviennent égaux (c'est même la définition du point critique), et Δs/Δv devient singulier.",
    ],
    correctIndex: 2,
  },
  {
    id: "l10-q5",
    lecon: 10,
    question: "Sur un palier de coexistence liquide-vapeur en diagramme (P,V), le système est au point M, entre les extrémités A (liquide) et B (vapeur). Le titre en vapeur x_v vaut :",
    choices: ["AM / AB", "MB / AB", "AM / MB"],
    explanations: [
      "Exact : c'est la règle des moments ; plus M est proche de B (côté vapeur), plus le titre en vapeur est grand ; x_v = (u - u_l)/(u_v - u_l) = AM/AB.",
      "Faux : MB/AB donne la fraction de liquide, pas de vapeur.",
      "Faux : ce rapport vaut x_v/(1-x_v), le rapport vapeur/liquide, pas le titre.",
    ],
    correctIndex: 0,
  },
  {
    id: "l10-q6",
    lecon: 10,
    question: "Sur la courbe de saturation d'un diagramme (P,V), comment s'appellent la branche montante (côté liquide) et la branche descendante (côté vapeur) ?",
    choices: [
      "Courbe d'ébullition (liquide) et courbe de rosée (vapeur)",
      "Courbe de rosée (liquide) et courbe d'ébullition (vapeur)",
      "Courbe de fusion (liquide) et courbe de sublimation (vapeur)",
    ],
    explanations: [
      "Exact : la partie croissante, côté liquide, est la courbe d'ébullition ; la partie décroissante, côté vapeur, la courbe de rosée.",
      "Faux : c'est l'inverse ; la rosée est du côté vapeur (c'est là que les premières gouttes apparaissent en refroidissant le gaz).",
      "Faux : fusion et sublimation concernent la phase solide, absente de ce diagramme liquide-vapeur.",
    ],
    correctIndex: 0,
  },
  {
    id: "l10-q7",
    lecon: 10,
    question: "Un taux d'humidité relative de 100 % signifie que :",
    choices: [
      "L'air est entièrement constitué de vapeur d'eau, l'azote et l'oxygène ayant été chassés par évaporation.",
      "La température de l'air a atteint 100°C, point d'ébullition de l'eau à pression atmosphérique.",
      "La pression partielle de vapeur d'eau atteint la pression de vapeur saturante : l'eau liquide commence à se condenser.",
    ],
    explanations: [
      "Faux : même saturé, l'air ne contient qu'environ 20 g d'eau par m³ à 20°C, une toute petite fraction.",
      "Faux : l'humidité relative compare des pressions partielles, pas des températures.",
      "Exact : à 100 %, la vapeur d'eau est en équilibre avec une phase liquide naissante ; tout excès se condense spontanément (brouillard, rosée, nuages).",
    ],
    correctIndex: 2,
  },
  {
    id: "l10-vf1",
    lecon: 10,
    question: "Il est possible de faire coexister à l'équilibre quatre phases distinctes d'un même corps pur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : la règle des phases de Gibbs, v = 3 - φ, donne une variance négative pour φ = 4, ce qui est impossible. Trois phases coexistent en un point unique (le point triple).",
      "Exact : la variance v = 3 - φ deviendrait négative ; au maximum trois phases coexistent, en un point unique du diagramme (P,T).",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 11 : Machines thermiques ───
  {
    id: "l11-q1",
    lecon: 11,
    question: "Le rendement maximal d'un moteur ditherme entre une source chaude T_c et une source froide T_f vaut :",
    choices: [
      "η = 1 - T_f/T_c",
      "η = T_f/T_c",
      "η = T_c/(T_c - T_f)",
      "η = 1 - T_c/T_f",
    ],
    explanations: [
      "Exact : c'est le rendement de Carnot, conséquence de l'inégalité de Clausius appliquée au cycle réversible.",
      "Faux : cette quantité est le complément à 1 du rendement de Carnot.",
      "Faux : c'est l'efficacité maximale d'une pompe à chaleur, pas le rendement d'un moteur.",
      "Faux : avec T_c > T_f, cette expression serait négative.",
    ],
    correctIndex: 0,
  },
  {
    id: "l11-q2",
    lecon: 11,
    question: "L'efficacité d'une pompe à chaleur ou d'un réfrigérateur peut-elle dépasser 1 ?",
    choices: [
      "Non : comme le rendement d'un moteur, elle est bornée par 1 en vertu de la conservation de l'énergie, qui interdit de restituer plus que ce que l'on fournit.",
      "Oui : l'efficacité |Q_c|/W d'une pompe à chaleur dépasse couramment 1.",
      "Oui, mais seulement pour les cycles irréversibles, où l'énergie dissipée s'ajoute à la chaleur pompée.",
    ],
    explanations: [
      "Faux : c'est la confusion classique rendement/efficacité ; la pompe ne « crée » rien, elle déplace de la chaleur qui existait déjà dans la source froide.",
      "Exact : c'est tout l'intérêt du chauffage par pompe à chaleur face au chauffage électrique direct. La borne est T_c/(T_c - T_f), largement supérieure à 1.",
      "Faux : c'est l'inverse ; les cycles réversibles donnent l'efficacité maximale ; l'irréversibilité la dégrade.",
    ],
    correctIndex: 1,
  },
  {
    id: "l11-q3",
    lecon: 11,
    question: "L'efficacité maximale d'une pompe à chaleur fonctionnant entre T_f et T_c vaut :",
    choices: [
      "T_c / (T_c - T_f)",
      "T_f / (T_c - T_f)",
      "1 - T_f/T_c",
      "(T_c - T_f) / T_c",
    ],
    explanations: [
      "Exact : e_PAC = |Q_c|/W ≤ T_c/(T_c - T_f), obtenue avec l'inégalité de Clausius. Plus l'écart de température est faible, plus elle est grande.",
      "Faux : T_f/(T_c - T_f) est l'efficacité maximale du réfrigérateur (on s'intéresse alors à Q_f).",
      "Faux : c'est le rendement de Carnot d'un moteur.",
      "Faux : c'est l'inverse de la bonne formule ; elle serait toujours inférieure à 1.",
    ],
    correctIndex: 0,
  },
  {
    id: "l11-q4",
    lecon: 11,
    question: "L'énoncé de Kelvin du second principe affirme que :",
    choices: [
      "La chaleur ne peut pas passer spontanément d'un corps froid vers un corps plus chaud, sans compensation par un apport extérieur de travail.",
      "Un système décrivant un cycle au contact d'une seule source de chaleur ne peut pas fournir de travail.",
      "Toutes les machines réversibles fonctionnant entre les deux mêmes températures ont exactement le même rendement, quel que soit leur fluide de travail.",
    ],
    explanations: [
      "Faux : c'est l'énoncé de Clausius.",
      "Exact : c'est l'énoncé de Kelvin (impossibilité du moteur monotherme cyclique). C'est lui qui interdit d'avancer en bateau en refroidissant simplement l'eau de mer.",
      "Faux : c'est l'énoncé (historiquement premier) de Carnot.",
    ],
    correctIndex: 1,
  },
  {
    id: "l11-q5",
    lecon: 11,
    question: "L'inégalité de Clausius pour un cycle quelconque s'écrit :",
    choices: [
      "∮ δQ/T ≥ 0",
      "∮ T dS ≤ 0",
      "∮ δQ = 0",
      "∮ δQ/T ≤ 0",
    ],
    explanations: [
      "Faux : c'est l'inégalité inverse.",
      "Faux : l'inégalité porte sur δQ/T le long du cycle réel, pas sur T dS.",
      "Faux : ∮δQ n'est pas nul en général ; sinon aucun moteur ne fonctionnerait (Q_total = -W_total ≠ 0).",
      "Exact : conséquence directe de ΔS = 0 sur un cycle et de dS_c ≥ 0 ; l'égalité correspond au cas réversible.",
    ],
    correctIndex: 3,
  },
  {
    id: "l11-q6",
    lecon: 11,
    question: "Dans un diagramme (T,S), un cycle de Carnot a la forme :",
    choices: ["D'un rectangle", "D'une ellipse", "D'un triangle rectangle"],
    explanations: [
      "Exact : deux isothermes (segments horizontaux à T_c et T_f) et deux adiabatiques réversibles, donc isentropiques (segments verticaux à S constant).",
      "Faux : aucune branche du cycle de Carnot n'est courbe en variables (T,S).",
      "Faux : il faut quatre côtés, deux isothermes et deux isentropiques.",
    ],
    correctIndex: 0,
  },
  {
    id: "l11-q7",
    lecon: 11,
    question: "Dans un diagramme (T,S), l'aire enclose par un cycle réversible parcouru en sens horaire représente :",
    choices: [
      "La chaleur totale reçue sur le cycle, égale au travail fourni.",
      "La variation d'entropie totale du fluide sur un cycle complet, qui mesure le degré d'irréversibilité de la machine.",
      "La variation d'énergie interne du fluide, accumulée à chaque tour de cycle.",
    ],
    explanations: [
      "Exact : ∮T dS = Q_total en réversible, et comme ΔU = 0 sur le cycle, Q_total = -W_total : l'aire donne le travail fourni par le moteur.",
      "Faux : ΔS = 0 sur tout cycle (fonction d'état), et un cycle réversible ne crée aucune entropie.",
      "Faux : ΔU = 0 sur tout cycle ; rien ne s'accumule.",
    ],
    correctIndex: 0,
  },
  {
    id: "l11-vf1",
    lecon: 11,
    question: "Dans un diagramme (T,S), une adiabatique réversible est représentée par un segment vertical.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : adiabatique + réversible = isentropique, donc S constant : une droite verticale. C'est ce qui rend le diagramme TS si commode pour le cycle de Carnot.",
      "Faux : δQ = 0 et réversibilité donnent dS = 0 ; c'est bien une verticale (S constant) dans le plan (T,S).",
    ],
    correctIndex: 0,
  },
];

export function getQuizLessons(): number[] {
  const set = new Set(quizQuestions.map((q) => q.lecon));
  return Array.from(set).sort((a, b) => a - b);
}

export function getQuizQuestionsByLecon(lecon: number): QuizQuestion[] {
  return quizQuestions.filter((q) => q.lecon === lecon);
}

/** A true/false question is recognised on the French source, never on a translation. */
function isTrueFalse(question: QuizQuestion): boolean {
  return question.choices.length === 2 && question.choices[0] === "Vrai";
}

/**
 * Questions of one lesson in `lang`, or `null` when that language has no
 * complete translation for it.
 *
 * All-or-nothing on purpose: a quiz mixing translated and French questions
 * would be worse than an explicit "not available yet" page, so a single
 * missing (or structurally mismatched) question disables the whole lesson for
 * that language. See docs/languages.md.
 */
export function getLocalizedQuizQuestions(lecon: number, lang: Lang): QuizQuestion[] | null {
  const source = getQuizQuestionsByLecon(lecon);
  if (source.length === 0) return null;

  if (lang === "fr") {
    return source.map((q) => ({ ...q, trueFalse: isTrueFalse(q) }));
  }

  const table = quizQuestionTranslations[lang];
  if (!table) return null;

  const localized: QuizQuestion[] = [];
  for (const q of source) {
    const translated = table[q.id];
    if (
      !translated ||
      translated.choices.length !== q.choices.length ||
      translated.explanations.length !== q.explanations.length
    ) {
      return null;
    }
    localized.push({
      ...q,
      question: translated.question,
      choices: translated.choices,
      explanations: translated.explanations,
      trueFalse: isTrueFalse(q),
    });
  }
  return localized;
}

/** Lesson numbers whose quiz is fully available in `lang`. */
export function getQuizLessonsForLang(lang: Lang): number[] {
  return getQuizLessons().filter((lecon) => getLocalizedQuizQuestions(lecon, lang) !== null);
}

/** Languages serving a complete quiz for this lesson — drives hreflang and the sitemap. */
export function getQuizLangsForLecon(lecon: number, langs: readonly Lang[]): Lang[] {
  return langs.filter((lang) => getLocalizedQuizQuestions(lecon, lang) !== null);
}
