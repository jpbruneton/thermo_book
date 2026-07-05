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
      "Faux : un moteur monotherme cyclique ne peut fournir aucun travail — c'est précisément l'énoncé de Kelvin.",
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
      "Faux : la pression n'est pas le critère — c'est l'écart de température entre les deux sources qui compte.",
    ],
    correctIndex: 0,
  },
  {
    id: "l1-vf1",
    lecon: 1,
    question: "Un moteur thermique cyclique peut fonctionner en n'étant en contact qu'avec une seule source de chaleur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : c'est précisément ce qu'interdit l'énoncé de Kelvin du second principe — un moteur monotherme cyclique ne peut fournir de travail.",
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
      "La chaleur est une forme d'énergie qui se convertit en travail mécanique selon un taux de change fixe.",
    ],
    explanations: [
      "Faux : c'est la thèse rivale, dite mécaniste ou cinétique (Bacon, Bernoulli), qui se révélera correcte a posteriori.",
      "Exact : le calorique est conçu comme un fluide impondérable et conservé — une théorie fausse mais féconde.",
      "Faux : la distinction chaleur/température est justement acquise avant le calorique, grâce à Joseph Black (capacité thermique, chaleur latente).",
      "Faux : c'est la vision moderne issue du premier principe (Mayer, Joule), qui remplacera le calorique au XIXe siècle.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q2",
    lecon: 2,
    question: "Quelle expérience a porté un coup sérieux à la théorie du calorique ?",
    choices: [
      "Le forage des canons observé par Rumford : le frottement produit de la chaleur sans limite apparente.",
      "La mesure par Joseph Black de la chaleur latente absorbée par la glace lors de sa fusion, à température constante.",
      "La synthèse par Clapeyron des lois de Boyle, Charles et Gay-Lussac en une équation d'état unique des gaz parfaits.",
      "L'invention par Fahrenheit du thermomètre à mercure et d'une échelle de température reproductible.",
    ],
    explanations: [
      "Exact : si la chaleur était un fluide conservé et fini, le forage continu ne pourrait pas en produire indéfiniment. Rumford (1798) conclut qu'elle est liée au mouvement.",
      "Faux : la chaleur latente est au contraire bien expliquée par le calorique (le fluide se « combine » à la matière lors du changement d'état).",
      "Faux : Clapeyron (1834) unifie les lois des gaz, sans rapport direct avec la nature de la chaleur.",
      "Faux : le thermomètre mesure la température, pas la nature de la chaleur — deux notions distinctes.",
    ],
    correctIndex: 0,
  },
  {
    id: "l2-q3",
    lecon: 2,
    question: "Qu'a démontré Carnot en 1824, alors même que son raisonnement s'appuyait sur la théorie (fausse) du calorique ?",
    choices: [
      "L'expression exacte du rendement maximal, η = 1 - T_f/T_c, en fonction des températures absolues des deux sources.",
      "Que toutes les machines réversibles entre deux températures données ont le même rendement, indépassable par les machines irréversibles.",
      "Que la chaleur et le travail sont deux formes d'une même grandeur conservée, l'énergie — le futur premier principe.",
      "Qu'il existe une fonction d'état, l'entropie, qui ne peut que croître dans un système isolé.",
    ],
    explanations: [
      "Faux : Carnot ne peut pas obtenir cette expression, faute d'une échelle de température absolue — ce sera l'apport de Kelvin vers 1848.",
      "Exact : c'est le théorème de Carnot — un résultat correct et durable, obtenu à partir de prémisses fausses mais d'un raisonnement juste sur la réversibilité.",
      "Faux : c'est l'apport de Mayer, Joule et Helmholtz dans les années 1840, postérieur à Carnot.",
      "Faux : c'est Clausius, entre 1850 et 1865, qui introduit et nomme l'entropie.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-vf1",
    lecon: 2,
    question: "Carnot a établi en 1824 la formule du rendement maximal η = 1 - T_f/T_c.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : Carnot a démontré l'existence et l'universalité d'un rendement maximal, mais pas son expression — il manquait l'échelle absolue de température, introduite par Kelvin en 1848.",
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
      "La température d'équilibre finale atteinte par le corps après l'échange de chaleur.",
      "Le rapport entre le travail fourni au corps et la chaleur qu'il reçoit.",
    ],
    explanations: [
      "Faux : c'est Q elle-même qui est la chaleur totale échangée, pas c — Q dépend en plus de la masse et de l'écart de température.",
      "Exact : c'est la capacité thermique massique (ou chaleur spécifique), le coefficient propre à chaque matériau que Black met en évidence.",
      "Faux : cette température se calcule à partir d'un bilan de chaleur, mais n'est pas ce que désigne c.",
      "Faux : cette relation n'a rien à voir avec c ; c ne fait intervenir que la chaleur et la température.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q5",
    lecon: 2,
    question: "Quelle est, en unités modernes, la valeur de l'équivalent mécanique de la calorie établi par les expériences de Joule ?",
    choices: ["Environ 1 J par calorie", "Environ 4,18 J par calorie", "Environ 100 J par calorie", "Environ 0,24 J par calorie"],
    explanations: [
      "Faux : ce serait le cas si la calorie et le joule mesuraient déjà la même chose sans conversion.",
      "Exact : 1 cal ≈ 4,18 J — c'est la valeur, mesurée avec une précision croissante entre 1843 et 1849, qui a établi l'équivalence entre chaleur et travail.",
      "Faux : cette valeur est bien trop grande d'un facteur ~24 par rapport à la mesure de Joule.",
      "Faux : c'est à peu près l'inverse (1/4,18 ≈ 0,24) — l'équivalent mécanique de la calorie, pas son inverse.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q6",
    lecon: 2,
    question: "Un emballage alimentaire indique « 250 kcal ». À combien de kilojoules cela correspond-il approximativement ?",
    choices: ["≈ 250 kJ", "≈ 1046 kJ", "≈ 60 kJ", "≈ 4184 kJ"],
    explanations: [
      "Faux : cela reviendrait à confondre kcal et kJ, comme si 1 cal = 1 J.",
      "Exact : 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
      "Faux : c'est trop faible — cela correspondrait à moins de 15 kcal.",
      "Faux : c'est l'énergie que donnerait 1000 kcal, pas 250 kcal.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-vf2",
    lecon: 2,
    question: "La « Calorie » (ou kcal) affichée sur les emballages alimentaires est rigoureusement la même unité que la calorie (cal) utilisée en physique.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : la Calorie alimentaire (Cal, ou kcal) vaut 1000 fois la calorie de physicien (cal) — une confusion classique et une source d'erreur fréquente d'un facteur 1000.",
      "Exact : 1 Cal (alimentaire) = 1 kcal = 1000 cal. Un aliment « à 200 kcal » libère donc environ 200 000 cal, soit environ 836 kJ.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-vf3",
    lecon: 2,
    question: "La calorimétrie est la science de la mesure des quantités de chaleur échangées entre systèmes.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : Black en fait, avec la mesure quantitative de la capacité thermique et de la chaleur latente, une science quantitative dans les années 1760 ; elle a ensuite été affinée par Lavoisier et Laplace avec le calorimètre à glace.",
      "Faux : c'est bien la bonne définition, ce n'est pas un piège.",
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
      "Faux : des parois diathermanes laissent passer la chaleur — le système ne serait pas isolé.",
      "Faux : des parois mobiles et perméables laissent passer travail et matière.",
    ],
    correctIndex: 1,
  },
  {
    id: "l3-q2",
    lecon: 3,
    question: "Le principe zéro de la thermodynamique affirme que :",
    choices: [
      "L'énergie totale d'un système isolé reste constante au cours de toute transformation.",
      "L'entropie d'un système isolé ne peut qu'augmenter lors d'une évolution spontanée.",
      "L'équilibre thermodynamique est transitif : si A est en équilibre avec B, et B avec C, alors A l'est avec C.",
      "L'entropie de tout système tend vers zéro quand la température tend vers le zéro absolu.",
    ],
    explanations: [
      "Faux : c'est le contenu du premier principe.",
      "Faux : c'est le contenu du second principe.",
      "Exact : c'est le principe zéro — il fonde la notion même de température et ne se déduit pas des autres principes.",
      "Faux : c'est le troisième principe.",
    ],
    correctIndex: 2,
  },
  {
    id: "l3-q3",
    lecon: 3,
    question: "Parmi ces grandeurs, laquelle est intensive ?",
    choices: ["Le volume V", "L'énergie interne U", "La pression P", "Le nombre de particules N"],
    explanations: [
      "Faux : le volume double si l'on double le système — il est extensif.",
      "Faux : l'énergie interne est extensive (en l'absence de forces à longue portée).",
      "Exact : la pression ne change pas si l'on double le système ; c'est une grandeur émergente, sans équivalent pour une molécule individuelle.",
      "Faux : N double avec le système — il est extensif.",
    ],
    correctIndex: 2,
  },
  {
    id: "l3-q4",
    lecon: 3,
    question: "Une transformation quasi-statique est-elle nécessairement réversible ?",
    choices: [
      "Oui : les deux notions sont équivalentes, elles décrivent des transformations infiniment lentes.",
      "Non : elle passe par des équilibres successifs, mais peut rester irréversible, par exemple s'il y a des frottements.",
      "Non : une transformation quasi-statique est au contraire toujours irréversible, par définition.",
    ],
    explanations: [
      "Faux : quasi-statique est nécessaire mais pas suffisant — il faut en plus l'égalité des paramètres intensifs de part et d'autre des parois et l'absence de dissipation.",
      "Exact : on peut être quasi-statique tout en dissipant de l'énergie, ce qui rend la transformation irréversible.",
      "Faux : toute transformation réversible est justement quasi-statique — les deux ne s'opposent pas.",
    ],
    correctIndex: 1,
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
      "Faux : un verre d'eau posé sur une table est à l'équilibre, pourtant sa pression augmente avec la profondeur (loi de Pascal) — l'équilibre signifie l'absence de flux, pas l'uniformité spatiale.",
      "Exact : l'exemple classique du verre d'eau le montre — l'équilibre n'implique pas l'homogénéité.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 4 : Premier principe ───
  {
    id: "l4-q1",
    lecon: 4,
    question: "Pour un système fermé, le premier principe de la thermodynamique s'écrit :",
    choices: [
      "dS = δQ / T",
      "dG = -S dT + V dP",
      "dU = δQ × δW",
      "dU = δQ + δW",
    ],
    explanations: [
      "Faux : c'est la définition différentielle de l'entropie (pour une transformation réversible), issue du second principe.",
      "Faux : c'est la différentielle de l'enthalpie libre G (leçon 7).",
      "Faux : les termes d'échange s'ajoutent, ils ne se multiplient pas.",
      "Exact : l'énergie interne d'un système fermé ne varie que par échange de chaleur ou de travail (convention du banquier).",
    ],
    correctIndex: 3,
  },
  {
    id: "l4-q2",
    lecon: 4,
    question: "Pourquoi note-t-on δQ et δW plutôt que dQ et dW ?",
    choices: [
      "Parce que ce sont des différentielles inexactes : leur intégrale dépend du chemin suivi.",
      "Par convention typographique historique, héritée de Clausius, sans conséquence sur les calculs que l'on mène ensuite.",
      "Parce que Q et W sont des grandeurs trop petites pour être décrites par des différentielles ordinaires.",
      "Parce que la chaleur et le travail ne sont définis que pour les transformations irréversibles, contrairement à U.",
    ],
    explanations: [
      "Exact : Q et W dépendent du chemin, contrairement à U qui ne dépend que des états initial et final. Écrire dQ reviendrait à ressusciter la théorie du calorique.",
      "Faux : la notation a un sens mathématique précis (différentielle inexacte), et écrire dQ dans une copie signale une incompréhension du formalisme.",
      "Faux : la « taille » des grandeurs n'a rien à voir ; c'est la dépendance au chemin qui est en jeu.",
      "Faux : chaleur et travail sont définis pour toute transformation ; c'est leur caractère non-fonction-d'état qui impose le δ.",
    ],
    correctIndex: 0,
  },
  {
    id: "l4-q3",
    lecon: 4,
    question: "Sur un diagramme de Clapeyron (P,V), pour un cycle parcouru dans le sens horaire, l'aire intérieure au cycle représente :",
    choices: [
      "La variation d'énergie interne du fluide sur un cycle complet.",
      "La chaleur totale échangée avec l'extérieur, qui est nulle sur un cycle.",
      "Le travail fourni par le gaz à l'extérieur au cours du cycle.",
      "La variation d'entropie du fluide sur un cycle complet.",
    ],
    explanations: [
      "Faux : ΔU = 0 sur tout cycle puisque U est une fonction d'état — ce n'est pas ce que représente l'aire.",
      "Faux : la chaleur totale n'est pas nulle sur un cycle moteur (c'est elle qui est convertie en travail) ; seules ΔU et ΔS sont nulles.",
      "Exact : parcourue en sens horaire, l'aire du cycle vaut le travail fourni — c'est un cycle moteur.",
      "Faux : ΔS = 0 sur tout cycle (fonction d'état), et l'aire en (P,V) n'a pas la dimension d'une entropie.",
    ],
    correctIndex: 2,
  },
  {
    id: "l4-q4",
    lecon: 4,
    question: "On comprime un gaz de façon quasi-statique : dV < 0. Le travail reçu par le gaz, δW = -P dV, est alors :",
    choices: [
      "Négatif : en se comprimant, le gaz cède nécessairement de l'énergie mécanique au milieu extérieur qui le comprime.",
      "Positif : le gaz reçoit du travail lors d'une compression.",
      "Nul : dans une transformation quasi-statique, les échanges de travail se compensent exactement à chaque étape.",
    ],
    explanations: [
      "Faux : c'est l'erreur de signe classique — avec dV < 0, on a bien -P dV > 0 : le gaz reçoit du travail.",
      "Exact : comprimer un gaz demande de lui fournir de l'énergie mécanique ; en convention du banquier, ce qui entre est compté positivement.",
      "Faux : quasi-statique ne signifie pas travail nul, seulement que la transformation passe par une suite d'équilibres.",
    ],
    correctIndex: 1,
  },
  {
    id: "l4-q5",
    lecon: 4,
    question: "Un gaz parfait subit une détente de Joule : on casse la paroi qui le sépare d'un compartiment vide, dans une enceinte isolée. Sa température finale est :",
    choices: [
      "Plus élevée qu'au départ",
      "Plus basse qu'au départ, car le gaz fournit du travail en se détendant",
      "Inchangée",
      "Plus haute ou plus basse selon la valeur de γ",
    ],
    explanations: [
      "Faux : rien n'apporte d'énergie au gaz — l'enceinte est isolée.",
      "Faux : c'est le piège — le gaz se détend contre le vide, donc sans force opposée : W = 0. Et Q = 0 (isolé). Donc ΔU = 0.",
      "Exact : W = 0 (détente contre le vide), Q = 0 (enceinte isolée), donc ΔU = 0 ; or pour un gaz parfait U ne dépend que de T, donc T est inchangée.",
      "Faux : γ n'intervient pas ici ; le bilan W = Q = 0 vaut quel que soit le gaz parfait.",
    ],
    correctIndex: 2,
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
  {
    id: "l4-q7",
    lecon: 4,
    question: "Une mole de gaz parfait subit une compression isotherme. Que vaut ΔU ?",
    choices: [
      "ΔU = W, le travail reçu pendant la compression, car toute l'énergie mécanique fournie est stockée dans le gaz",
      "ΔU = Q, la chaleur échangée pendant la compression, comptée avec son signe",
      "ΔU = 0",
    ],
    explanations: [
      "Faux : le gaz reçoit bien du travail, mais il expulse exactement la même quantité d'énergie sous forme de chaleur pour maintenir sa température.",
      "Faux : ΔU = Q ne vaut qu'en isochore (W = 0), pas en isotherme.",
      "Exact : pour un gaz parfait, U ne dépend que de T ; isotherme ⇒ ΔU = 0, et donc Q = -W (le gaz expulse la chaleur reçue sous forme de travail).",
    ],
    correctIndex: 2,
  },
  {
    id: "l4-vf1",
    lecon: 4,
    question: "Le travail δW et la chaleur δQ échangés par un système sont, comme l'énergie interne U, des différentielles exactes.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : contrairement à dU, ni δQ ni δW ne sont exactes — leur intégrale dépend du chemin suivi, pas seulement des états initial et final.",
      "Exact : c'est justement la raison du symbole δ. Seules les fonctions d'état ont des différentielles exactes.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 5 : Second principe (entropie) ───
  {
    id: "l5-q1",
    lecon: 5,
    question: "Pour une transformation infinitésimale réversible d'un système fermé, la variation d'entropie s'écrit :",
    choices: [
      "dS = δQ_rev / T",
      "dS = δW / T",
      "dS = δQ_rev × T",
      "dS = dU / T",
    ],
    explanations: [
      "Exact : c'est la définition donnée par le second principe pour une transformation réversible.",
      "Faux : l'entropie fait intervenir la chaleur échangée réversiblement, pas le travail.",
      "Faux : on divise par T, on ne multiplie pas — l'entropie est en J/K.",
      "Faux : dU = δQ + δW n'égale T dS qu'en l'absence de travail ; la relation générale réversible est dU = T dS - P dV.",
    ],
    correctIndex: 0,
  },
  {
    id: "l5-q2",
    lecon: 5,
    question: "Pour un système isolé, le second principe affirme que :",
    choices: [
      "Son entropie reste constante au cours de toute transformation, puisque aucun échange de chaleur n'est possible avec l'extérieur.",
      "Son entropie ne peut que croître ou rester constante ; l'équilibre correspond au maximum d'entropie.",
      "Son énergie interne ne peut que décroître, l'énergie se dégradant progressivement en chaleur inutilisable.",
      "Sa température s'uniformise instantanément dès que le système est fermé par des parois adiabatiques.",
    ],
    explanations: [
      "Faux : dS = δQ/T ne vaut que pour les chemins réversibles ; pour un système isolé, dS = dS_c ≥ 0 et l'entropie croît dès qu'il y a irréversibilité.",
      "Exact : c'est l'énoncé central — croissance de l'entropie lors des évolutions spontanées, maximum à l'équilibre.",
      "Faux : l'énergie d'un système isolé est constante (premier principe) ; c'est l'entropie qui évolue.",
      "Faux : l'uniformisation prend un temps caractéristique, et le second principe ne dit rien d'« instantané ».",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q3",
    lecon: 5,
    question: "Pourquoi calcule-t-on souvent ΔS le long d'un « chemin virtuel réversible » plutôt que le long de la transformation réelle, quand celle-ci est irréversible ?",
    choices: [
      "Parce que l'entropie n'est mathématiquement définie que le long des transformations réversibles, jamais pour les autres.",
      "Parce que S est une fonction d'état : ΔS ne dépend que des états initial et final, donc tout chemin réversible commode convient.",
      "Parce que les transformations irréversibles n'admettent pas d'état final d'équilibre sur lequel évaluer l'entropie.",
      "Parce que le long d'un chemin réversible, la température reste constante, ce qui simplifie l'intégrale.",
    ],
    explanations: [
      "Faux : l'entropie est définie pour tout état d'équilibre, quel que soit le chemin qui y a mené.",
      "Exact : c'est « l'astuce fondamentale » du cours — on choisit un chemin réversible entre les mêmes états A et B pour pouvoir intégrer dS = δQ_rev/T.",
      "Faux : l'état final d'une transformation irréversible est un état d'équilibre parfaitement défini ; c'est le chemin qui est mal défini.",
      "Faux : rien n'impose l'isothermie le long d'un chemin réversible.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q4",
    lecon: 5,
    question: "On plonge de l'eau à 20°C dans un four maintenu à 80°C. Pour calculer la variation d'entropie de l'eau, il faut :",
    choices: [
      "Diviser la chaleur reçue par la température du four : ΔS_eau = Q/T_four, puisque c'est le four qui impose la température.",
      "Intégrer dS = m c dT/T le long de la montée en température de l'eau, ce qui donne m c ln(T_f/T_i).",
      "Conclure ΔS_eau = 0, car la variation d'entropie ne concerne que le four, seul système dont la température est bien définie.",
    ],
    explanations: [
      "Faux : c'est l'erreur classique — diviser par la température du thermostat ne vaut que pour le four lui-même (ΔS_four = -Q/T_four), pas pour l'eau dont la température varie.",
      "Exact : l'eau traverse toutes les températures entre 20 et 80°C ; on intègre le long de sa propre trajectoire (chemin virtuel réversible), d'où le logarithme.",
      "Faux : l'eau reçoit de la chaleur, son entropie augmente bel et bien — et le bilan total (eau + four) est positif, signalant l'irréversibilité.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q5",
    lecon: 5,
    question: "L'entropie d'un système non isolé peut-elle décroître au cours d'une transformation ?",
    choices: [
      "Non : l'entropie de tout système, isolé ou non, ne peut jamais décroître — c'est l'énoncé universel du second principe.",
      "Oui, si un opérateur extérieur apporte de l'énergie de la bonne façon (ranger une pièce, démêler des câbles, un organisme vivant).",
      "Oui, mais uniquement pour des systèmes microscopiques soumis à des fluctuations quantiques.",
    ],
    explanations: [
      "Faux : l'interdiction ne porte que sur les systèmes isolés. Refroidir un verre d'eau diminue son entropie, par exemple.",
      "Exact : l'entropie locale peut décroître au prix d'une création d'entropie ailleurs (opérateur, environnement) qui compense largement. Le vivant fonctionne exactement ainsi.",
      "Faux : nul besoin d'effets quantiques — refroidir un corps macroscopique suffit à faire décroître son entropie.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q6",
    lecon: 5,
    question: "Un système passe d'un état A à un état B, une fois par un chemin réversible, une fois par un chemin irréversible. La chaleur échangée Q est-elle la même dans les deux cas ?",
    choices: [
      "Oui, puisque les états initial et final sont identiques, tous les termes du bilan énergétique coïncident.",
      "Non : ΔS est le même (fonction d'état), mais Q_irr < Q_rev car la création d'entropie remplace une partie de l'échange.",
      "Oui pour la chaleur, mais pas pour le travail, qui seul dépend du chemin suivi entre A et B.",
    ],
    explanations: [
      "Faux : Q et W dépendent du chemin — seules les fonctions d'état (U, S...) ont la même variation.",
      "Exact : ΔS = ∫δQ_rev/T = ∫δQ_irr/T + S_créée avec S_créée > 0, donc les chaleurs échangées diffèrent nécessairement. Les indices « rev » et « irr » comptent !",
      "Faux : chaleur et travail dépendent tous deux du chemin ; seule leur somme ΔU = Q + W est fixée.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q7",
    lecon: 5,
    question: "Dans la détente de Joule d'un gaz parfait (enceinte isolée, détente dans le vide), on a Q = 0. Peut-on en conclure que ΔS = 0 ?",
    choices: [
      "Oui : dS = δQ/T et δQ = 0, donc l'entropie ne varie pas.",
      "Oui, car l'énergie interne est constante et l'entropie ne dépend que de U.",
      "Non : la formule dS = δQ/T ne vaut que pour un chemin réversible, or cette détente est brutalement irréversible ; ΔS > 0.",
    ],
    explanations: [
      "Faux : c'est le piège classique — dS = δQ/T suppose la réversibilité. Ici dS = δQ/T + dS_c avec dS_c > 0.",
      "Faux : S dépend aussi du volume, S = S(U,V,N) ; à U constant, le volume ayant augmenté, l'entropie augmente (ΔS = nR ln(V_f/V_i) pour un GP).",
      "Exact : on calcule ΔS par un chemin virtuel réversible (isotherme, car T est inchangée) et on trouve ΔS = nR ln(V_f/V_i) > 0, signature de l'irréversibilité.",
    ],
    correctIndex: 2,
  },
  {
    id: "l5-vf1",
    lecon: 5,
    question: "Une transformation adiabatique réversible est isentropique.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : δQ = 0 et réversibilité (dS_c = 0) donnent dS = δQ_rev/T = 0. Attention, la réciproque du raisonnement ne marche pas pour une adiabatique irréversible : Q = 0 mais ΔS > 0.",
      "Faux : dS = δQ_rev/T = 0 quand δQ = 0 en réversible — c'est bien isentropique. (C'est l'adiabatique irréversible qui ne l'est pas.)",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 6 : Relations fondamentales ───
  {
    id: "l6-q1",
    lecon: 6,
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
    id: "l6-q2",
    lecon: 6,
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
    id: "l6-q3",
    lecon: 6,
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
    id: "l6-q4",
    lecon: 6,
    question: "Que nous apprend la relation de Gibbs-Duhem, S dT - V dP + N dμ = 0 ?",
    choices: [
      "Que les trois paramètres intensifs T, P, μ ne peuvent pas varier indépendamment : il n'y a que deux degrés de liberté.",
      "Que les trois variables extensives S, V, N sont liées entre elles par une contrainte de proportionnalité, quel que soit le système considéré.",
      "Que l'entropie d'un système à l'équilibre est nécessairement une fonction croissante et concave de l'énergie interne.",
    ],
    explanations: [
      "Exact : fixer les variations de deux intensifs détermine la troisième — un corps pur monophasé a deux degrés de liberté thermodynamiques.",
      "Faux : les extensives restent indépendantes ; Gibbs-Duhem contraint les intensives.",
      "Faux : la concavité de S relève de la stabilité thermodynamique, un résultat distinct.",
    ],
    correctIndex: 0,
  },
  {
    id: "l6-q5",
    lecon: 6,
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
    id: "l6-q6",
    lecon: 6,
    question: "La loi de Laplace, P V^γ = constante, est valable pour :",
    choices: [
      "Toute transformation adiabatique d'un gaz parfait, qu'elle soit brutale ou infiniment lente, dès lors que Q = 0.",
      "Tout fluide subissant une compression rapide, y compris les gaz réels et les liquides faiblement compressibles.",
      "Toute transformation réversible d'un gaz parfait, y compris les isothermes et les isobares quasi-statiques.",
      "Une transformation adiabatique et réversible d'un gaz parfait (à γ constant).",
    ],
    explanations: [
      "Faux : c'est le piège — la détente de Joule est adiabatique mais irréversible, et elle ne suit pas Laplace (T y reste constante alors que V change).",
      "Faux : la démonstration utilise explicitement PV = nRT ; elle ne vaut que pour le gaz parfait.",
      "Faux : une isotherme réversible d'un GP suit PV = cste, pas PV^γ = cste.",
      "Exact : il faut les deux conditions à la fois — δQ = 0 et réversibilité — plus l'équation d'état du gaz parfait avec γ constant.",
    ],
    correctIndex: 3,
  },
  {
    id: "l6-vf1",
    lecon: 6,
    question: "Les relations de Maxwell découlent de l'égalité des dérivées croisées (théorème de Schwarz) appliquée aux potentiels thermodynamiques.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : chaque potentiel (U, F, H, G) fournit ses relations de Maxwell en égalant les dérivées secondes croisées de ses variables naturelles.",
      "Faux : c'est bien leur origine — les dérivées secondes croisées d'une fonction régulière sont égales, et chaque potentiel en fournit un jeu.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 7 : Changements de variables, potentiels ───
  {
    id: "l7-q1",
    lecon: 7,
    question: "Pourquoi faut-il toujours préciser les variables tenues constantes dans une dérivée partielle thermodynamique ?",
    choices: [
      "Parce que les variables ne sont pas indépendantes : la même dérivée prend des valeurs différentes selon ce qu'on fixe.",
      "Par convention d'écriture uniquement : le résultat numérique du calcul est le même dans tous les cas, mais la notation complète est exigée dans les copies.",
      "Parce que certaines dérivées partielles divergent si l'on ne fixe pas les bonnes variables, ce qui rendrait le calcul impossible.",
    ],
    explanations: [
      "Exact : ∂V/∂T à P fixé et ∂V/∂T à S fixé donnent des valeurs différentes pour le même gaz (nR/P contre -3nR/2P pour un GP monoatomique). Les indices ne sont pas optionnels.",
      "Faux : le résultat numérique change réellement — ce n'est pas une simple convention.",
      "Faux : la question n'est pas la divergence mais l'ambiguïté : sans indices, l'expression peut désigner plusieurs quantités distinctes.",
    ],
    correctIndex: 0,
  },
  {
    id: "l7-q2",
    lecon: 7,
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
      "Faux : δQ et δW restent inexactes quoi qu'on fasse — c'est une propriété physique, pas un défaut de représentation.",
    ],
    correctIndex: 2,
  },
  {
    id: "l7-q3",
    lecon: 7,
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
    id: "l7-q4",
    lecon: 7,
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
    id: "l7-q5",
    lecon: 7,
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
    id: "l7-q6",
    lecon: 7,
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

  // ─── Leçon 8 : Coefficients calorimétriques et thermoélastiques ───
  {
    id: "l8-q1",
    lecon: 8,
    question: "La capacité thermique à volume constant C_V est définie par :",
    choices: [
      "C_V = T (∂S/∂T)_V",
      "C_V = T (∂S/∂V)_T",
      "C_V = T (∂S/∂P)_T",
      "C_V = (∂U/∂V)_T",
    ],
    explanations: [
      "Exact : elle s'obtient en identifiant δQ = T dS = C_V dT + ℓ dV en variables (T,V) ; à volume constant, dU = δQ = C_V dT.",
      "Faux : c'est la définition du coefficient de dilatation isotherme ℓ.",
      "Faux : cette dérivée définit le coefficient de compression isotherme h.",
      "Faux : ce n'est pas une capacité thermique — les capacités mesurent une réponse à un changement de température.",
    ],
    correctIndex: 0,
  },
  {
    id: "l8-q2",
    lecon: 8,
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
    id: "l8-q3",
    lecon: 8,
    question: "On chauffe l'air d'une pièce avec un radiateur. La pièce n'est pas hermétique : l'air dilaté s'échappe par les interstices, la pression restant atmosphérique. Quelle capacité thermique utiliser ?",
    choices: [
      "C_V, car le volume de la pièce est fixé par les murs",
      "C_P, car le gaz évolue à pression constante",
      "La moyenne de C_P et C_V, car volume et pression jouent ici un rôle symétrique dans la transformation",
    ],
    explanations: [
      "Faux : c'est le piège — le volume de la pièce est constant, mais pas celui du gaz, qui se dilate et s'échappe. Or c'est le gaz qui subit la transformation.",
      "Exact : le gaz se dilate à pression atmosphérique constante, donc c'est bien C_P (pour l'air, c_p ≈ 1000 J/K/kg).",
      "Faux : il n'y a aucune raison de moyenner — la transformation est isobare pour le gaz, point final.",
    ],
    correctIndex: 1,
  },
  {
    id: "l8-q4",
    lecon: 8,
    question: "La stabilité thermodynamique impose notamment :",
    choices: [
      "C_V ≥ 0 et χ_T ≥ 0",
      "C_V ≤ 0 et χ_T ≥ 0",
      "γ = C_P/C_V < 1",
      "α > 0 pour tout fluide",
    ],
    explanations: [
      "Exact : ces critères découlent de la concavité de S (ou convexité de U) ; un système violant l'un d'eux serait instable.",
      "Faux : C_V négatif signifierait qu'apporter de la chaleur refroidit le corps — instable.",
      "Faux : la stabilité impose au contraire γ > 1.",
      "Faux : α peut être négatif — l'eau entre 0 et 4°C se contracte quand on la chauffe (anomalie dilatométrique), sans violer la stabilité.",
    ],
    correctIndex: 0,
  },
  {
    id: "l8-q5",
    lecon: 8,
    question: "Pour un gaz parfait monoatomique, le coefficient de Laplace γ = C_P/C_V vaut :",
    choices: ["7/5", "5/3", "3/2", "1"],
    explanations: [
      "Faux : 7/5 est la valeur pour un gaz parfait diatomique (c_V = 5R/2).",
      "Exact : c_V = 3R/2 et c_P = 5R/2, donc γ = 5/3.",
      "Faux : 3/2 est le facteur de c_V = 3R/2, pas le rapport c_P/c_V.",
      "Faux : γ = 1 signifierait C_P = C_V, ce que la relation de Mayer exclut pour un gaz.",
    ],
    correctIndex: 1,
  },
  {
    id: "l8-vf1",
    lecon: 8,
    question: "Pour un gaz parfait, la capacité thermique à pression constante C_P est toujours strictement supérieure à C_V.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : la relation de Mayer donne C_P - C_V = nR > 0, quelle que soit l'atomicité du gaz.",
      "Faux : C_P - C_V = nR > 0 est toujours vérifié pour un gaz parfait — c'est la relation de Mayer.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 9 : Transitions de phase ───
  {
    id: "l9-q1",
    lecon: 9,
    question: "Au cours d'une transition de phase à pression constante (par exemple la fusion), tant que les deux phases coexistent, la température :",
    choices: ["Augmente continûment", "Devient indéfinie", "Diminue continûment", "Reste constante"],
    explanations: [
      "Faux : tant que les deux phases coexistent, l'énergie apportée sert au changement de phase, pas à l'échauffement.",
      "Faux : T est parfaitement définie — et constante — pendant la coexistence à l'équilibre.",
      "Faux : la température ne diminue pas non plus pendant la coexistence à P constante.",
      "Exact : la chaleur latente fait progresser la transition sans changer T — d'où le palier de température lors de la fonte d'un glaçon.",
    ],
    correctIndex: 3,
  },
  {
    id: "l9-q2",
    lecon: 9,
    question: "Dans le diagramme (P,V) du gaz de Van der Waals, à quoi sert la règle des paliers de Maxwell ?",
    choices: [
      "À fixer la position du palier liquide-vapeur, par égalité des aires au-dessus et au-dessous du segment.",
      "À calculer la température critique du fluide, en cherchant l'isotherme dont la partie croissante disparaît exactement au point d'inflexion.",
      "À démontrer que les isothermes de Van der Waals sont partout décroissantes, comme celles du gaz parfait, une fois les corrections a et b prises en compte.",
    ],
    explanations: [
      "Exact : la règle des aires égales découle de l'égalité des potentiels chimiques aux deux extrémités du palier (∫v dP = 0 le long de l'isotherme).",
      "Faux : la température critique s'obtient par le point d'inflexion à tangente horizontale de l'isotherme critique, sans la règle de Maxwell.",
      "Faux : c'est le contraire — sous la température critique, certaines portions sont croissantes (χ_T < 0), et c'est cette instabilité qui motive la construction du palier.",
    ],
    correctIndex: 0,
  },
  {
    id: "l9-q3",
    lecon: 9,
    question: "Des gouttes de pluie verglaçante restent liquides en dessous de 0°C (surfusion) jusqu'à toucher le sol. Que peut-on dire de cet état ?",
    choices: [
      "C'est un état d'équilibre stable, aussi stable que la glace à cette température, les deux phases étant simplement séparées par une barrière de tension superficielle.",
      "C'est un état localement stable mais globalement instable : une petite perturbation déclenche la solidification.",
      "C'est un état hors équilibre au sens strict, dans lequel ni la température ni la pression des gouttes ne sont définies tant que la transition n'a pas eu lieu.",
    ],
    explanations: [
      "Faux : l'eau liquide n'est pas l'état d'entropie maximale sous 0°C ; c'est un équilibre métastable, pas l'équilibre global.",
      "Exact : c'est la distinction stabilité locale / stabilité globale du cours — l'état résiste aux petites fluctuations mais bascule à la moindre perturbation suffisante (l'impact au sol).",
      "Faux : T et P sont bien définies dans une goutte en surfusion — elle est à un équilibre (métastable), pas hors équilibre.",
    ],
    correctIndex: 1,
  },
  {
    id: "l9-q4",
    lecon: 9,
    question: "La formule de Clapeyron, (dP/dT) = Δs/Δv le long d'une courbe de coexistence, cesse d'être applicable :",
    choices: [
      "Dès que l'on s'éloigne du point triple, car la chaleur latente varie trop vite avec la température pour que la dérivée garde un sens.",
      "Pour les transitions solide-gaz (sublimation), car le solide n'a pas de volume molaire bien défini à basse pression.",
      "Au point critique, où Δv → 0 rend la formule singulière.",
    ],
    explanations: [
      "Faux : la formule de Clapeyron elle-même vaut le long de toute la courbe (c'est son approximation de Rankine qui n'est bonne que près du point triple).",
      "Faux : elle s'applique à toute transition du premier ordre, sublimation comprise.",
      "Exact : au point critique, les volumes molaires des deux phases deviennent égaux — c'est même la définition du point critique — et Δs/Δv devient singulier.",
    ],
    correctIndex: 2,
  },
  {
    id: "l9-q5",
    lecon: 9,
    question: "Sur un palier de coexistence liquide-vapeur en diagramme (P,V), le système est au point M, entre les extrémités A (liquide) et B (vapeur). Le titre en vapeur x_v vaut :",
    choices: ["AM / AB", "MB / AB", "AM / MB"],
    explanations: [
      "Exact : c'est la règle des moments — plus M est proche de B (côté vapeur), plus le titre en vapeur est grand ; x_v = (u - u_l)/(u_v - u_l) = AM/AB.",
      "Faux : MB/AB donne la fraction de liquide, pas de vapeur.",
      "Faux : ce rapport vaut x_v/(1-x_v), le rapport vapeur/liquide, pas le titre.",
    ],
    correctIndex: 0,
  },
  {
    id: "l9-q6",
    lecon: 9,
    question: "Sur la courbe de saturation d'un diagramme (P,V), comment s'appellent la branche montante (côté liquide) et la branche descendante (côté vapeur) ?",
    choices: [
      "Courbe d'ébullition (liquide) et courbe de rosée (vapeur)",
      "Courbe de rosée (liquide) et courbe d'ébullition (vapeur)",
      "Courbe de fusion (liquide) et courbe de sublimation (vapeur)",
    ],
    explanations: [
      "Exact : la partie croissante, côté liquide, est la courbe d'ébullition ; la partie décroissante, côté vapeur, la courbe de rosée.",
      "Faux : c'est l'inverse — la rosée est du côté vapeur (c'est là que les premières gouttes apparaissent en refroidissant le gaz).",
      "Faux : fusion et sublimation concernent la phase solide, absente de ce diagramme liquide-vapeur.",
    ],
    correctIndex: 0,
  },
  {
    id: "l9-q7",
    lecon: 9,
    question: "Un taux d'humidité relative de 100 % signifie que :",
    choices: [
      "L'air est entièrement constitué de vapeur d'eau, l'azote et l'oxygène ayant été chassés par évaporation.",
      "La température de l'air a atteint 100°C, point d'ébullition de l'eau à pression atmosphérique.",
      "La pression partielle de vapeur d'eau atteint la pression de vapeur saturante : l'eau liquide commence à se condenser.",
    ],
    explanations: [
      "Faux : même saturé, l'air ne contient qu'environ 20 g d'eau par m³ à 20°C — une toute petite fraction.",
      "Faux : l'humidité relative compare des pressions partielles, pas des températures.",
      "Exact : à 100 %, la vapeur d'eau est en équilibre avec une phase liquide naissante ; tout excès se condense spontanément (brouillard, rosée, nuages).",
    ],
    correctIndex: 2,
  },
  {
    id: "l9-vf1",
    lecon: 9,
    question: "Il est possible de faire coexister à l'équilibre quatre phases distinctes d'un même corps pur.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Faux : la règle des phases de Gibbs, v = 3 - φ, donne une variance négative pour φ = 4 — c'est impossible. Trois phases coexistent en un point unique (le point triple).",
      "Exact : la variance v = 3 - φ deviendrait négative ; au maximum trois phases coexistent, en un point unique du diagramme (P,T).",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 10 : Machines thermiques ───
  {
    id: "l10-q1",
    lecon: 10,
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
    id: "l10-q2",
    lecon: 10,
    question: "L'efficacité d'une pompe à chaleur ou d'un réfrigérateur peut-elle dépasser 1 ?",
    choices: [
      "Non : comme le rendement d'un moteur, elle est bornée par 1 en vertu de la conservation de l'énergie, qui interdit de restituer plus que ce que l'on fournit.",
      "Oui : l'efficacité |Q_c|/W d'une pompe à chaleur dépasse couramment 1.",
      "Oui, mais seulement pour les cycles irréversibles, où l'énergie dissipée s'ajoute à la chaleur pompée.",
    ],
    explanations: [
      "Faux : c'est la confusion classique rendement/efficacité — la pompe ne « crée » rien, elle déplace de la chaleur qui existait déjà dans la source froide.",
      "Exact : c'est tout l'intérêt du chauffage par pompe à chaleur face au chauffage électrique direct. La borne est T_c/(T_c - T_f), largement supérieure à 1.",
      "Faux : c'est l'inverse — les cycles réversibles donnent l'efficacité maximale ; l'irréversibilité la dégrade.",
    ],
    correctIndex: 1,
  },
  {
    id: "l10-q3",
    lecon: 10,
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
      "Faux : c'est l'inverse de la bonne formule — elle serait toujours inférieure à 1.",
    ],
    correctIndex: 0,
  },
  {
    id: "l10-q4",
    lecon: 10,
    question: "L'énoncé de Kelvin du second principe affirme que :",
    choices: [
      "La chaleur ne peut pas passer spontanément d'un corps froid vers un corps plus chaud, sans compensation par un apport extérieur de travail.",
      "Un système décrivant un cycle au contact d'une seule source de chaleur ne peut pas fournir de travail.",
      "Toutes les machines réversibles fonctionnant entre les deux mêmes températures ont exactement le même rendement, quel que soit leur fluide de travail.",
    ],
    explanations: [
      "Faux : c'est l'énoncé de Clausius.",
      "Exact : c'est l'énoncé de Kelvin — impossibilité du moteur monotherme cyclique. C'est lui qui interdit d'avancer en bateau en refroidissant simplement l'eau de mer.",
      "Faux : c'est l'énoncé (historiquement premier) de Carnot.",
    ],
    correctIndex: 1,
  },
  {
    id: "l10-q5",
    lecon: 10,
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
      "Faux : ∮δQ n'est pas nul en général — sinon aucun moteur ne fonctionnerait (Q_total = -W_total ≠ 0).",
      "Exact : conséquence directe de ΔS = 0 sur un cycle et de dS_c ≥ 0 ; l'égalité correspond au cas réversible.",
    ],
    correctIndex: 3,
  },
  {
    id: "l10-q6",
    lecon: 10,
    question: "Dans un diagramme (T,S), un cycle de Carnot a la forme :",
    choices: ["D'un rectangle", "D'une ellipse", "D'un triangle rectangle"],
    explanations: [
      "Exact : deux isothermes (segments horizontaux à T_c et T_f) et deux adiabatiques réversibles, donc isentropiques (segments verticaux à S constant).",
      "Faux : aucune branche du cycle de Carnot n'est courbe en variables (T,S).",
      "Faux : il faut quatre côtés — deux isothermes et deux isentropiques.",
    ],
    correctIndex: 0,
  },
  {
    id: "l10-q7",
    lecon: 10,
    question: "Dans un diagramme (T,S), l'aire enclose par un cycle réversible parcouru en sens horaire représente :",
    choices: [
      "La chaleur totale reçue sur le cycle, égale au travail fourni.",
      "La variation d'entropie totale du fluide sur un cycle complet, qui mesure le degré d'irréversibilité de la machine.",
      "La variation d'énergie interne du fluide, accumulée à chaque tour de cycle.",
    ],
    explanations: [
      "Exact : ∮T dS = Q_total en réversible, et comme ΔU = 0 sur le cycle, Q_total = -W_total : l'aire donne le travail fourni par le moteur.",
      "Faux : ΔS = 0 sur tout cycle (fonction d'état) — et un cycle réversible ne crée aucune entropie.",
      "Faux : ΔU = 0 sur tout cycle ; rien ne s'accumule.",
    ],
    correctIndex: 0,
  },
  {
    id: "l10-vf1",
    lecon: 10,
    question: "Dans un diagramme (T,S), une adiabatique réversible est représentée par un segment vertical.",
    choices: ["Vrai", "Faux"],
    explanations: [
      "Exact : adiabatique + réversible = isentropique, donc S constant : une droite verticale. C'est ce qui rend le diagramme TS si commode pour le cycle de Carnot.",
      "Faux : δQ = 0 et réversibilité donnent dS = 0 — c'est bien une verticale (S constant) dans le plan (T,S).",
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
