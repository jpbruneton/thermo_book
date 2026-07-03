export interface QuizQuestion {
  id: string;
  /** Lesson number (1..10), matches lib/chapters.ts theme numbers. */
  lecon: number;
  question: string;
  choices: [string, string, string, string];
  /** Explanation shown when the corresponding choice is clicked (index-aligned with choices). */
  explanations: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
}

export const quizQuestions: QuizQuestion[] = [
  // ─── Leçon 1 : Introduction générale ───
  {
    id: "l1-q1",
    lecon: 1,
    question: "Qu'est-ce qu'un moteur thermique, au sens de la thermodynamique ?",
    choices: [
      "Un dispositif qui convertit intégralement la chaleur reçue en travail.",
      "Un dispositif qui, fonctionnant en cycle, convertit une fraction du flux de chaleur allant du chaud vers le froid en travail mécanique.",
      "Un dispositif qui produit de la chaleur à partir de travail, sans limite.",
      "Un dispositif qui fonctionne avec une seule source de chaleur.",
    ],
    explanations: [
      "Faux : convertir intégralement de la chaleur en travail au cours d'un cycle est impossible (énoncé de Kelvin du second principe).",
      "Exact : le moteur détourne une fraction du flux de chaleur chaud → froid pour la convertir en travail, jamais la totalité.",
      "Faux : cela décrirait plutôt une pompe à chaleur, pas un moteur produisant du travail à partir de chaleur.",
      "Faux : un moteur cyclique a besoin d'au moins deux sources à températures différentes pour fonctionner (sinon aucun travail n'est produit — c'est l'énoncé de Kelvin).",
    ],
    correctIndex: 1,
  },
  {
    id: "l1-q2",
    lecon: 1,
    question: "Pourquoi un moteur thermique a-t-il besoin d'une différence de température entre deux sources ?",
    choices: [
      "Parce que sans différence de température, aucun flux de chaleur ne s'écoule spontanément, et donc aucun travail ne peut en être extrait.",
      "Parce que la chaleur ne peut exister qu'à haute température.",
      "Parce que le travail mécanique ne peut être produit qu'à partir d'une source infiniment chaude.",
      "Parce que la pression du gaz doit toujours dépasser la pression atmosphérique.",
    ],
    explanations: [
      "Exact : le moteur est comme un péage sur le flux de chaleur chaud → froid ; sans ce flux, il n'y a rien à détourner en travail.",
      "Faux : la chaleur est un mode de transfert d'énergie qui existe dès qu'il y a un déséquilibre thermique, à toute température.",
      "Faux : rien n'impose une température infinie ; une différence de température même faible suffit (cf. centrales OTEC, radeau flottant).",
      "Faux : la pression n'est pas la grandeur pertinente ici, c'est la différence de température qui compte.",
    ],
    correctIndex: 0,
  },

  // ─── Leçon 2 : Historique ───
  {
    id: "l2-q1",
    lecon: 2,
    question: "Que soutient la théorie du calorique, dominante à la fin du XVIIIe siècle ?",
    choices: [
      "La chaleur est une forme d'agitation microscopique de la matière.",
      "La chaleur est un fluide matériel, conservé, qui s'écoule spontanément du chaud vers le froid.",
      "La chaleur est une onde électromagnétique.",
      "La chaleur n'existe pas indépendamment du travail mécanique.",
    ],
    explanations: [
      "Faux : c'est la thèse rivale, dite mécaniste ou cinétique (Bacon, Bernoulli), qui se révélera correcte a posteriori.",
      "Exact : le calorique est conçu comme un fluide impondérable et conservé, qui explique bien la calorimétrie et la dilatation des corps.",
      "Faux : cette idée est anachronique et ne correspond à aucune théorie de la chaleur du XVIIIe siècle.",
      "Faux : au contraire, la théorie du calorique traite la chaleur comme une substance autonome, presque un « élément » chimique.",
    ],
    correctIndex: 1,
  },
  {
    id: "l2-q2",
    lecon: 2,
    question: "Quelle expérience a porté un coup sérieux à la théorie du calorique ?",
    choices: [
      "L'expérience de Rumford sur le forage des canons, montrant une production de chaleur apparemment inépuisable par frottement.",
      "La mesure de la chaleur latente de fusion de la glace par Joseph Black.",
      "L'établissement de l'équation d'état des gaz parfaits par Clapeyron.",
      "L'invention du thermomètre à mercure par Fahrenheit.",
    ],
    explanations: [
      "Exact : si la chaleur était un fluide conservé et fini, le forage continu ne pourrait pas en produire indéfiniment ; Rumford en conclut (1798) que la chaleur est liée au mouvement.",
      "Faux : la chaleur latente est au contraire bien expliquée par la théorie du calorique (le calorique se « combine » à la matière lors du changement d'état).",
      "Faux : Clapeyron (1834) synthétise les lois des gaz, sans rapport direct avec la remise en cause du calorique.",
      "Faux : le thermomètre mesure la température, pas la nature de la chaleur — ce sont deux notions distinctes que la théorie du calorique confondait déjà mal.",
    ],
    correctIndex: 0,
  },
  {
    id: "l2-q3",
    lecon: 2,
    question: "Qu'a démontré Carnot en 1824, alors même que son raisonnement s'appuyait sur la théorie (fausse) du calorique ?",
    choices: [
      "L'expression numérique exacte du rendement maximal en fonction des températures.",
      "Que le rendement de toute machine réversible ne dépend que des deux températures des sources, et qu'aucune machine irréversible ne peut faire mieux.",
      "Que l'entropie est une fonction d'état.",
      "Que la chaleur est équivalente au travail mécanique (premier principe).",
    ],
    explanations: [
      "Faux : Carnot ne peut pas obtenir l'expression exacte, faute d'une échelle de température absolue — ce sera l'apport de Kelvin, vers 1848.",
      "Exact : c'est le théorème de Carnot, un résultat correct et durable obtenu à partir de prémisses fausses, mais d'un raisonnement juste sur la réversibilité.",
      "Faux : c'est Clausius, entre 1850 et 1865, qui introduit et nomme l'entropie.",
      "Faux : c'est l'apport de Mayer, Joule et Helmholtz dans les années 1840 (premier principe), postérieur à Carnot.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 3 : Notions fondamentales ───
  {
    id: "l3-q1",
    lecon: 3,
    question: "Un système isolé est un système dont les parois sont :",
    choices: [
      "Diathermanes, mobiles et perméables.",
      "Rigides, adiabatiques et imperméables.",
      "Mobiles et diathermanes uniquement.",
      "Perméables uniquement.",
    ],
    explanations: [
      "Faux : ce sont au contraire les propriétés qui autoriseraient tous les échanges (chaleur, travail, matière) — l'inverse d'un isolement.",
      "Exact : rigide interdit l'échange de travail, adiabatique interdit l'échange de chaleur, imperméable interdit l'échange de matière.",
      "Faux : incomplet — de telles parois laisseraient encore passer la chaleur et le travail.",
      "Faux : de telles parois laisseraient passer de la matière, ce qui exclut l'isolement.",
    ],
    correctIndex: 1,
  },
  {
    id: "l3-q2",
    lecon: 3,
    question: "Le principe zéro de la thermodynamique affirme que :",
    choices: [
      "L'énergie totale d'un système isolé est constante.",
      "L'entropie d'un système isolé ne peut qu'augmenter.",
      "L'équilibre thermodynamique est une relation transitive : si A est en équilibre avec B, et B avec C, alors A est en équilibre avec C.",
      "La température absolue ne peut jamais atteindre le zéro absolu.",
    ],
    explanations: [
      "Faux : c'est le contenu du premier principe (conservation de l'énergie).",
      "Faux : c'est le contenu du second principe.",
      "Exact : c'est précisément l'énoncé du principe zéro — il fonde la notion même de température, mais ne se déduit pas des autres principes.",
      "Faux : cette idée est plutôt liée au troisième principe, pas au principe zéro.",
    ],
    correctIndex: 2,
  },
  {
    id: "l3-q3",
    lecon: 3,
    question: "Un système thermodynamique à l'équilibre est-il nécessairement homogène (mêmes valeurs des paramètres intensifs en tout point) ?",
    choices: [
      "Oui, l'équilibre implique toujours l'homogénéité parfaite du système.",
      "Non : un verre d'eau posé sur une table est à l'équilibre, pourtant sa pression augmente avec la profondeur (loi de Pascal).",
      "Oui, sauf si le système contient plusieurs espèces chimiques.",
      "Non, un système à l'équilibre n'a en fait aucune pression ni température bien définies.",
      ],
    explanations: [
      "Faux : c'est une confusion fréquente. L'équilibre signifie l'absence de flux net (pas d'évolution dans le temps), pas l'uniformité spatiale.",
      "Exact : c'est l'exemple classique du cours — la pression varie avec la profondeur à l'équilibre, sans que cela viole quoi que ce soit.",
      "Faux : la présence de plusieurs espèces chimiques n'est pas le critère pertinent ici ; même un corps pur peut être non homogène en pression à l'équilibre.",
      "Faux : au contraire, la pression et la température sont bien définies localement à l'équilibre — c'est justement ce qui permet de parler de « la » pression à une profondeur donnée.",
    ],
    correctIndex: 1,
  },
  {
    id: "l3-q4",
    lecon: 3,
    question: "Une transformation quasi-statique est-elle nécessairement réversible ?",
    choices: [
      "Oui, les deux notions sont rigoureusement équivalentes.",
      "Non : une transformation quasi-statique passe par des équilibres successifs, mais peut rester irréversible (par exemple s'il subsiste des frottements).",
      "Non, une transformation quasi-statique est au contraire toujours irréversible.",
      "Oui, à condition que la transformation soit isotherme.",
    ],
    explanations: [
      "Faux : quasi-statique est une condition nécessaire mais pas suffisante à la réversibilité ; il faut en plus l'égalité des paramètres intensifs de part et d'autre des parois, et l'absence de dissipation.",
      "Exact : on peut être quasi-statique (une succession d'équilibres) tout en dissipant de l'énergie localement, ce qui rend la transformation irréversible.",
      "Faux : une transformation réversible (idéalisée) est justement toujours quasi-statique — ce n'est pas une contradiction en soi.",
      "Faux : l'isothermie n'a rien à voir avec la réversibilité en tant que telle.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 4 : Premier principe ───
  {
    id: "l4-q1",
    lecon: 4,
    question: "Pour un système fermé, le premier principe de la thermodynamique s'écrit :",
    choices: [
      "dS = δQ_rev / T",
      "dU = δQ + δW",
      "dG = -S dT + V dP",
      "dU = T dS - P dV, valable uniquement pour les gaz parfaits",
    ],
    explanations: [
      "Faux : c'est la définition différentielle de l'entropie, issue du second principe, pas le premier principe.",
      "Exact : c'est l'expression standard du premier principe pour un système fermé (convention du banquier).",
      "Faux : c'est la différentielle de l'enthalpie libre G, un résultat de plus haut niveau (leçon 7).",
      "Faux : cette formule (valable en réversible, en combinant les deux principes) n'est pas restreinte aux gaz parfaits ; elle vaut pour tout système fermé.",
    ],
    correctIndex: 1,
  },
  {
    id: "l4-q2",
    lecon: 4,
    question: "Pourquoi note-t-on δQ et δW plutôt que dQ et dW ?",
    choices: [
      "Parce que ce sont des différentielles exactes, comme dU.",
      "Parce que ce sont des différentielles inexactes : leur intégrale sur une transformation dépend du chemin suivi.",
      "Par pure convention typographique, sans signification physique.",
      "Parce que Q et W ne peuvent jamais être calculés, même sur une transformation donnée.",
    ],
    explanations: [
      "Faux : c'est le contraire — c'est justement parce qu'elles NE sont PAS exactes que l'on utilise le symbole δ.",
      "Exact : Q et W dépendent du chemin suivi, contrairement à U qui ne dépend que de l'état initial et de l'état final.",
      "Faux : écrire dQ dans une copie signale immédiatement au correcteur une incompréhension du formalisme — la notation a un sens physique précis.",
      "Faux : Q et W sont parfaitement calculables sur une transformation donnée ; ils dépendent seulement du chemin, pas seulement des états extrêmes.",
    ],
    correctIndex: 1,
  },
  {
    id: "l4-q3",
    lecon: 4,
    question: "Sur un diagramme de Clapeyron (P,V), pour un cycle parcouru dans le sens horaire, l'aire intérieure au cycle représente :",
    choices: [
      "La variation d'énergie interne sur le cycle.",
      "Le travail fourni par le gaz à l'extérieur au cours du cycle.",
      "La chaleur totale échangée avec l'extérieur, qui est nulle.",
      "La variation d'entropie sur le cycle.",
    ],
    explanations: [
      "Faux : ΔU = 0 sur tout cycle puisque U est une fonction d'état ; ce n'est pas ce que représente l'aire.",
      "Exact : l'aire du cycle vaut le travail fourni par le gaz lorsque le cycle est parcouru en sens horaire (cycle moteur).",
      "Faux : la chaleur totale n'est pas nulle sur un cycle moteur (elle est justement convertie en travail) ; seule ΔU est nulle.",
      "Faux : l'aire du diagramme (P,V) ne représente pas une variation d'entropie.",
    ],
    correctIndex: 1,
  },
  {
    id: "l4-q4",
    lecon: 4,
    question: "On comprime un gaz de façon quasi-statique : son volume diminue (dV < 0). Le travail reçu par le gaz, δW = -P dV, est alors :",
    choices: [
      "Négatif : le gaz fournit du travail en se comprimant.",
      "Positif : le gaz reçoit effectivement du travail lors d'une compression.",
      "Nul, car le volume varie infiniment lentement.",
      "Toujours égal à -PΔV où P est la pression finale, quelle que soit la transformation.",
    ],
    explanations: [
      "Faux : c'est l'erreur de signe classique. Avec dV < 0 et la convention du banquier, δW = -P dV est bien positif : c'est un travail reçu.",
      "Exact : comprimer un gaz demande de lui fournir de l'énergie mécanique ; avec dV<0, on a bien -P dV > 0.",
      "Faux : quasi-statique ne signifie pas travail nul, seulement que la transformation passe par une suite d'équilibres.",
      "Faux : ce n'est vrai que pour une transformation isobare ; en général W = -∫P dV dépend de la façon dont P varie le long du chemin.",
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
      "dS = dU / T",
      "dS = δQ_rev × T",
    ],
    explanations: [
      "Exact : c'est la définition du second principe pour une transformation réversible.",
      "Faux : l'entropie fait intervenir la chaleur échangée réversiblement, pas le travail.",
      "Faux : dU = δQ + δW n'est pas égal à T dS en général ; l'identité dU = TdS - PdV suppose déjà la réversibilité.",
      "Faux : erreur de dimension — la formule multiplie au lieu de diviser.",
    ],
    correctIndex: 0,
  },
  {
    id: "l5-q2",
    lecon: 5,
    question: "Pour un système isolé, le second principe affirme que :",
    choices: [
      "Son entropie reste toujours strictement constante.",
      "Son entropie ne peut que croître ou rester constante ; le nouvel équilibre correspond à l'entropie maximale compatible avec les contraintes.",
      "Son énergie interne ne peut que croître.",
      "Sa température doit rester constante.",
    ],
    explanations: [
      "Faux : ce n'est vrai que dans le cas limite d'une transformation réversible ; en général l'entropie croît (création d'entropie dS_c > 0).",
      "Exact : c'est l'énoncé central du second principe — l'entropie d'un système isolé croît lors d'une évolution spontanée, jusqu'à un maximum à l'équilibre.",
      "Faux : c'est le premier principe qui contraint l'énergie d'un système isolé (elle reste constante), pas le second.",
      "Faux : rien n'impose que la température reste constante lorsqu'un système isolé évolue vers l'équilibre.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q3",
    lecon: 5,
    question: "Pourquoi calcule-t-on souvent ΔS le long d'un « chemin virtuel réversible » plutôt que le long de la transformation réelle, quand celle-ci est irréversible ?",
    choices: [
      "Parce que l'entropie n'est définie que pour les transformations réversibles.",
      "Parce que S est une fonction d'état : sa variation ne dépend que des états initial et final, donc on peut choisir n'importe quel chemin réversible commode entre les deux.",
      "Parce que les transformations irréversibles n'ont pas d'état final bien défini.",
      "Parce que sur un chemin réversible, la température n'intervient pas dans le calcul.",
    ],
    explanations: [
      "Faux : l'entropie est bien définie pour tout état d'équilibre, quel que soit le chemin (même irréversible) qui y a mené.",
      "Exact : c'est « l'astuce fondamentale » du cours — ΔS ne dépend que des états A et B, jamais du chemin réellement suivi.",
      "Faux : l'état final d'une transformation irréversible est un état d'équilibre parfaitement défini ; seul le chemin lui-même est mal défini (paramètres intensifs non définis en cours de route).",
      "Faux : la température intervient bien dans le calcul, via dS = δQ_rev/T.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q4",
    lecon: 5,
    question: "On plonge directement de l'eau froide dans un four à 80°C (température constante du four). Pour calculer la variation d'entropie de l'EAU, quelle formule utiliser ?",
    choices: [
      "ΔS_eau = Q_reçue / 80°C (en Kelvin), en utilisant la température constante du four.",
      "ΔS_eau = m c ln(T_f/T_i), en intégrant dS = m c dT/T le long de la trajectoire de température de l'eau elle-même.",
      "ΔS_eau = 0, car l'échauffement est un phénomène purement mécanique.",
      "ΔS_eau ne peut pas être calculée puisque la transformation est irréversible.",
    ],
    explanations: [
      "Faux : c'est l'erreur classique — on ne peut diviser par la température du four que pour calculer ΔS_four (qui, lui, est un thermostat à T constante), pas ΔS_eau dont la température varie continûment pendant l'échauffement.",
      "Exact : l'eau traverse toute une série de températures T entre T_i et T_f ; il faut intégrer dS = δQ/T le long de SA propre trajectoire (chemin virtuel réversible), d'où le logarithme.",
      "Faux : l'échauffement fait bien intervenir un transfert de chaleur, donc une variation d'entropie non nulle pour l'eau.",
      "Faux : c'est exactement l'objet de « l'astuce fondamentale » (question précédente) : S étant une fonction d'état, ΔS_eau se calcule très bien malgré l'irréversibilité globale du processus.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q5",
    lecon: 5,
    question: "L'entropie d'un système NON isolé peut-elle décroître au cours d'une transformation ?",
    choices: [
      "Non, jamais : l'entropie ne peut qu'augmenter, pour tout système.",
      "Oui, à condition qu'un opérateur extérieur apporte de l'énergie de la bonne façon (comme lorsqu'on démêle des câbles ou qu'on range une pièce).",
      "Oui, mais uniquement si le système est à température négative.",
      "Non, sauf pour les systèmes vivants qui échappent aux lois de la thermodynamique.",
    ],
    explanations: [
      "Faux : c'est vrai uniquement pour un système ISOLÉ. Un système en contact avec l'extérieur peut voir son entropie diminuer localement.",
      "Exact : ranger une pièce, démêler des câbles, ou le fonctionnement d'un organisme vivant, diminuent localement l'entropie — au prix d'une entropie créée ailleurs (chez l'opérateur, dans l'environnement) qui compense largement.",
      "Faux : la notion de température négative n'est pas le critère pertinent ici et sort du cadre du cours.",
      "Faux : les systèmes vivants sont bel et bien des systèmes thermodynamiques ordinaires, simplement non isolés — ils obéissent parfaitement au second principe.",
    ],
    correctIndex: 1,
  },
  {
    id: "l5-q6",
    lecon: 5,
    question: "Le terme de création d'entropie dS_c, présent dans le bilan dS = δQ_irr/T + dS_c d'une transformation irréversible, peut-il être négatif ?",
    choices: [
      "Oui, dans certains cas particuliers bien choisis.",
      "Non, jamais : dS_c ≥ 0 systématiquement, avec égalité seulement dans le cas limite réversible.",
      "Oui, si le système reçoit du travail plutôt que de la chaleur.",
      "Cela dépend du signe de la chaleur échangée δQ.",
    ],
    explanations: [
      "Faux : dS_c ≥ 0 est une inégalité universelle du second principe, sans exception — c'est elle qui formalise l'irréversibilité et la flèche du temps.",
      "Exact : dS_c mesure justement le degré d'irréversibilité de la transformation ; elle ne peut jamais être négative, sinon on violerait le second principe.",
      "Faux : la nature de l'échange (chaleur ou travail) ne change rien au signe de dS_c, qui est toujours positif ou nul.",
      "Faux : dS_c est indépendant du signe de δQ ; c'est un terme séparé, purement lié à l'irréversibilité du processus.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 6 : Relations fondamentales ───
  {
    id: "l6-q1",
    lecon: 6,
    question: "Les variables naturelles de l'énergie interne U sont :",
    choices: ["T, P, N", "S, V, N", "T, V, N", "S, P, N"],
    explanations: [
      "Faux : T et P sont deux variables intensives ; ce ne sont les variables naturelles d'aucun des potentiels usuels ensemble.",
      "Exact : U = U(S, V, N), avec T, -P et μ obtenus comme dérivées partielles de U par rapport à ces variables.",
      "Faux : ce sont les variables naturelles de l'énergie libre F = U - TS.",
      "Faux : ce sont les variables naturelles de l'enthalpie H = U + PV.",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q2",
    lecon: 6,
    question: "Le théorème d'Euler, appliqué à l'extensivité de U(S,V,N), permet d'établir la relation :",
    choices: [
      "U = T S - P V + μ N",
      "dU = T dS - P dV + μ dN",
      "S dT - V dP + N dμ = 0",
      "U = T S + P V - μ N",
    ],
    explanations: [
      "Exact : c'est précisément la relation d'Euler, conséquence du caractère homogène de degré 1 de U(S,V,N).",
      "Faux : c'est le premier principe sous forme différentielle, valable indépendamment du théorème d'Euler.",
      "Faux : c'est la relation de Gibbs-Duhem, obtenue en différentiant la relation d'Euler — pas la relation d'Euler elle-même.",
      "Faux : erreur de signe — ce n'est pas la bonne combinaison des termes.",
    ],
    correctIndex: 0,
  },
  {
    id: "l6-q3",
    lecon: 6,
    question: "La relation de Gibbs-Duhem montre que :",
    choices: [
      "Les trois variables extensives S, V, N peuvent varier librement les unes des autres.",
      "Les trois paramètres intensifs T, P, μ ne sont pas indépendants : ils ne peuvent pas varier librement les uns des autres.",
      "L'entropie d'un système isolé est toujours maximale.",
      "L'énergie interne est nécessairement une fonction convexe de l'entropie.",
    ],
    explanations: [
      "Faux : sans rapport — Gibbs-Duhem contraint les paramètres intensifs, pas les variables extensives, qui elles restent bien indépendantes.",
      "Exact : Gibbs-Duhem, S dT - V dP + N dμ = 0, montre qu'il n'y a que deux degrés de liberté intensifs indépendants pour un corps pur, pas trois.",
      "Faux : c'est une conséquence du second principe à l'équilibre, pas de la relation de Gibbs-Duhem.",
      "Faux : la convexité de U par rapport à S est liée à la stabilité thermodynamique, une question distincte (traitée en fin de chapitre).",
    ],
    correctIndex: 1,
  },
  {
    id: "l6-q4",
    lecon: 6,
    question: "Pour un corps pur (une seule espèce chimique) à l'équilibre entre une seule phase, combien de paramètres intensifs peuvent varier indépendamment (nombre de degrés de liberté thermodynamique) ?",
    choices: ["Un seul.", "Deux.", "Trois.", "Autant qu'on veut, sans contrainte."],
    explanations: [
      "Faux : ce serait le cas s'il existait deux relations de Gibbs-Duhem contraignant les trois intensifs, ce qui n'est pas le cas ici (une seule phase).",
      "Exact : les trois paramètres T, P, μ sont liés par une seule relation de Gibbs-Duhem, il reste donc 3 - 1 = 2 degrés de liberté.",
      "Faux : la relation de Gibbs-Duhem élimine justement une des trois variables intensives, il n'en reste que deux indépendantes.",
      "Faux : Gibbs-Duhem impose bien une contrainte ; les paramètres intensifs ne sont jamais totalement libres.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 7 : Changements de variables ───
  {
    id: "l7-q1",
    lecon: 7,
    question: "Pourquoi faut-il, en thermodynamique, toujours préciser les variables tenues constantes dans une dérivée partielle ?",
    choices: [
      "Parce que les variables thermodynamiques ne sont en général pas indépendantes, et une même dérivée peut prendre des valeurs différentes selon les variables fixées.",
      "Par simple convention d'écriture, sans conséquence sur le résultat numérique.",
      "Parce que les dérivées partielles n'existent pas en thermodynamique.",
      "Uniquement pour les systèmes ouverts, où N varie.",
    ],
    explanations: [
      "Exact : par exemple ∂V/∂T à P fixé et ∂V/∂T à S fixé donnent des résultats numériquement différents pour un même système.",
      "Faux : cela change bel et bien le résultat numérique, comme le montre l'exemple ∂V/∂T à P fixé ≠ ∂V/∂T à S fixé.",
      "Faux : les dérivées partielles existent parfaitement, à condition de préciser quelles variables sont fixées.",
      "Faux : cette précaution est nécessaire pour tout système thermodynamique, ouvert ou fermé.",
    ],
    correctIndex: 0,
  },
  {
    id: "l7-q2",
    lecon: 7,
    question: "Une transformée de Legendre, en thermodynamique, permet de :",
    choices: [
      "Calculer directement l'entropie d'un gaz parfait.",
      "Construire un nouveau potentiel thermodynamique dont une variable extensive est remplacée par sa variable intensive conjuguée.",
      "Annuler le second principe pour simplifier les calculs.",
      "Transformer un système ouvert en système fermé.",
    ],
    explanations: [
      "Faux : sans rapport direct — le calcul de l'entropie du gaz parfait passe par l'intégration des équations d'état, pas par une transformée de Legendre.",
      "Exact : c'est exactement le procédé utilisé pour passer de U(S,V,N) à F(T,V,N) = U - TS, par exemple.",
      "Faux : absurde — le second principe n'est jamais « annulé », c'est une loi physique, pas une contrainte de calcul que l'on peut lever.",
      "Faux : sans rapport — N reste bien une variable naturelle de F, G et H, que le système soit ouvert ou fermé.",
    ],
    correctIndex: 1,
  },
  {
    id: "l7-q3",
    lecon: 7,
    question: "L'énergie libre F = U - TS a pour variables naturelles :",
    choices: ["S, V, N", "T, V, N", "T, P, N", "S, P, N"],
    explanations: [
      "Faux : ce sont les variables naturelles de l'énergie interne U.",
      "Exact : dF = -S dT - P dV + μ dN, donc F = F(T, V, N).",
      "Faux : ce sont les variables naturelles de l'enthalpie libre G.",
      "Faux : ce sont les variables naturelles de l'enthalpie H.",
    ],
    correctIndex: 1,
  },
  {
    id: "l7-q4",
    lecon: 7,
    question: "Parmi les quatre potentiels thermodynamiques usuels U, F, H, G, lequel a pour variables naturelles (S, P, N) ?",
    choices: ["U, l'énergie interne", "F, l'énergie libre", "H, l'enthalpie", "G, l'enthalpie libre"],
    explanations: [
      "Faux : les variables naturelles de U sont (S, V, N).",
      "Faux : les variables naturelles de F = U - TS sont (T, V, N).",
      "Exact : H = U + PV a pour différentielle dH = T dS + V dP + μ dN, donc H = H(S, P, N).",
      "Faux : les variables naturelles de G = H - TS sont (T, P, N).",
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
      "C_V = (∂U/∂V)_T",
      "C_V = T (∂S/∂P)_T",
    ],
    explanations: [
      "Exact : c'est la définition de C_V, obtenue en identifiant δQ = T dS = C_V dT + ℓ dV en variables (T,V).",
      "Faux : c'est la définition du coefficient de dilatation isotherme ℓ, pas de C_V.",
      "Faux : ce n'est pas la bonne dérivée pour définir une capacité thermique.",
      "Faux : cette expression est liée au coefficient de compression isotherme h, pas à C_V.",
    ],
    correctIndex: 0,
  },
  {
    id: "l8-q2",
    lecon: 8,
    question: "Pour un gaz parfait (quelconque, mono- ou polyatomique), la relation de Mayer C_P - C_V (par mole) vaut :",
    choices: ["0", "R", "3R/2", "5R/2"],
    explanations: [
      "Faux : cela impliquerait C_P = C_V, ce qui n'est vrai (en excellente approximation) que pour un solide ou un liquide quasi-incompressible, pas pour un gaz.",
      "Exact : c'est la relation de Mayer, c_P^m - c_V^m = R, valable pour tout gaz parfait quelle que soit son atomicité.",
      "Faux : c'est la valeur de c_V pour un gaz parfait monoatomique, pas la différence c_P - c_V.",
      "Faux : c'est la valeur de c_P pour un gaz parfait monoatomique, pas la différence c_P - c_V.",
    ],
    correctIndex: 1,
  },
  {
    id: "l8-q3",
    lecon: 8,
    question: "On veut chauffer l'air d'une pièce de 10°C, en supposant la pièce hermétique... mais en réalité l'air peut s'échapper par les interstices, donc c'est la pression atmosphérique qui reste constante, pas le volume du gaz. Quelle capacité thermique faut-il alors utiliser pour ce calcul ?",
    choices: [
      "C_V, la capacité à volume constant, car le volume de la pièce ne change pas.",
      "C_P, la capacité à pression constante, car c'est le gaz lui-même (et non la pièce) qui subit la transformation, à pression atmosphérique fixée.",
      "Peu importe, C_V et C_P donnent le même ordre de grandeur pour un gaz.",
      "Ni l'une ni l'autre : il faut utiliser la chaleur latente de vaporisation.",
    ],
    explanations: [
      "Faux : c'est le piège classique — le volume de la PIÈCE est constant, mais pas celui du GAZ qui s'en échappe ; or c'est bien le gaz qui subit la transformation thermodynamique.",
      "Exact : puisque le gaz se dilate à pression atmosphérique constante (l'excès s'échappant), c'est C_P qu'il faut utiliser, et non C_V — l'écart reste faible mais change le résultat.",
      "Faux : pour l'air, C_P et C_V diffèrent d'environ 40% (c_p ≈ 1000 J/K/kg contre c_v plus faible), ce qui n'est pas négligeable dans ce calcul.",
      "Faux : il n'y a ici aucun changement de phase, donc pas de chaleur latente à considérer.",
    ],
    correctIndex: 1,
  },
  {
    id: "l8-q4",
    lecon: 8,
    question: "La stabilité thermodynamique impose notamment que :",
    choices: [
      "C_V ≤ 0",
      "C_V ≥ 0 et χ_T ≥ 0 (compressibilité isotherme)",
      "γ = C_P/C_V < 1",
      "Le coefficient de dilatation α est toujours négatif",
    ],
    explanations: [
      "Faux : c'est le contraire — un système où C_V serait négatif serait instable (chauffer diminuerait son entropie).",
      "Exact : ce sont deux des critères de stabilité, obtenus à partir de la convexité/concavité des potentiels thermodynamiques (U, F).",
      "Faux : le cours montre au contraire que la stabilité impose γ > 1, pas γ < 1.",
      "Faux : α peut être positif ou négatif selon le fluide — l'eau entre 0°C et 4°C en est un contre-exemple classique (anomalie dilatométrique), sans que cela viole la stabilité.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 9 : Transitions de phase ───
  {
    id: "l9-q1",
    lecon: 9,
    question: "Au cours d'une transition de phase à pression constante (par exemple la fusion), tant que les deux phases coexistent, la température :",
    choices: [
      "Augmente continûment.",
      "Reste constante.",
      "Diminue continûment.",
      "Devient indéfinie.",
    ],
    explanations: [
      "Faux : c'est le contraire — tant que les deux phases coexistent, l'énergie apportée sert au changement de phase, pas à un échauffement.",
      "Exact : la chaleur apportée (chaleur latente) sert entièrement à faire progresser la transition (fondre plus de matière), pas à changer T.",
      "Faux : de même, la température ne diminue pas non plus pendant la coexistence à pression constante.",
      "Faux : T est parfaitement bien définie — et constante — tant que les deux phases coexistent à l'équilibre.",
    ],
    correctIndex: 1,
  },
  {
    id: "l9-q2",
    lecon: 9,
    question: "La règle des paliers de Maxwell, dans le diagramme (P,V) du gaz de Van der Waals, sert à :",
    choices: [
      "Déterminer la position du palier de coexistence liquide-vapeur, en égalant les aires au-dessus et en-dessous du segment.",
      "Calculer directement la valeur de la température critique.",
      "Montrer que le gaz de Van der Waals est stable partout dans son diagramme des phases.",
      "Calculer le rendement de Carnot d'un moteur thermique.",
    ],
    explanations: [
      "Exact : la règle des aires égales, issue de l'égalité des potentiels chimiques aux deux extrémités du palier, fixe précisément sa position.",
      "Faux : la température critique se détermine autrement, via le point d'inflexion à tangente horizontale de l'isotherme critique.",
      "Faux : c'est au contraire l'instabilité de certaines isothermes (χ_T < 0 en dessous de la température critique) qui motive la construction du palier.",
      "Faux : sans rapport — le rendement de Carnot relève des machines thermiques (une autre leçon), pas des transitions de phase.",
    ],
    correctIndex: 0,
  },
  {
    id: "l9-q3",
    lecon: 9,
    question: "Des gouttes de pluie verglaçante restent liquides en dessous de 0°C (eau en surfusion) jusqu'à toucher le sol. Que peut-on dire de cet état ?",
    choices: [
      "C'est un état d'équilibre thermodynamique stable, aussi stable que la glace à cette température.",
      "C'est un état localement stable mais globalement instable : une petite perturbation suffit à déclencher la transition brutale vers la phase solide.",
      "C'est impossible physiquement, cet état ne peut pas exister ne serait-ce qu'un instant.",
      "C'est un état d'équilibre entre trois phases (le point triple).",
    ],
    explanations: [
      "Faux : l'eau liquide n'est pas l'état le plus stable en dessous de 0°C ; c'est un équilibre métastable, pas l'équilibre global.",
      "Exact : le cours distingue justement stabilité locale (résiste aux petites fluctuations) et stabilité globale (le véritable minimum d'énergie / maximum d'entropie) — la surfusion illustre exactement ce cas.",
      "Faux : cet état existe bel et bien en pratique, précisément parce qu'aucune perturbation suffisante n'a encore déclenché la transition.",
      "Faux : le point triple correspond à la coexistence de trois phases à une seule pression et température précises, ce qui n'a rien à voir avec la surfusion.",
    ],
    correctIndex: 1,
  },
  {
    id: "l9-q4",
    lecon: 9,
    question: "La formule de Clapeyron, (dP/dT)_coexistence = Δs/Δv, cesse d'être applicable :",
    choices: [
      "Loin du point triple, sans aucune restriction particulière.",
      "Au point critique, où les volumes molaires des deux phases deviennent égaux (Δv → 0), ce qui rend la formule singulière.",
      "Uniquement pour les transitions solide-gaz.",
      "Dès que la pression dépasse 1 bar.",
    ],
    explanations: [
      "Faux : la formule de Clapeyron elle-même reste valable le long de toute la courbe de coexistence à deux phases, tant que Δv ≠ 0 (l'approximation de Rankine qui en découle, elle, n'est bonne que près du point triple).",
      "Exact : au point critique, liquide et gaz deviennent indiscernables (mêmes volumes molaires), donc Δv → 0 et la formule Δs/Δv devient singulière — c'est d'ailleurs la définition même du point critique.",
      "Faux : la formule de Clapeyron s'applique à toute transition de phase du premier ordre, quelle que soit la nature des deux phases.",
      "Faux : la valeur numérique de la pression n'est pas en soi le critère de validité de la formule.",
    ],
    correctIndex: 1,
  },

  // ─── Leçon 10 : Machines thermiques ───
  {
    id: "l10-q1",
    lecon: 10,
    question: "Le rendement maximal d'un moteur ditherme (cycle de Carnot) entre une source chaude T_c et une source froide T_f vaut :",
    choices: [
      "η = T_f / T_c",
      "η = 1 - T_f/T_c",
      "η = T_c/(T_c - T_f)",
      "η = 1",
    ],
    explanations: [
      "Faux : ce n'est pas la formule du rendement de Carnot.",
      "Exact : c'est le rendement de Carnot, obtenu à partir de l'inégalité de Clausius appliquée au cycle réversible.",
      "Faux : c'est (à un facteur près) l'efficacité maximale d'une pompe à chaleur, pas le rendement d'un moteur.",
      "Faux : un rendement de 1 violerait le second principe (énoncé de Kelvin) — il faudrait convertir toute la chaleur reçue en travail, sans aucun rejet vers la source froide.",
    ],
    correctIndex: 1,
  },
  {
    id: "l10-q2",
    lecon: 10,
    question: "Peut-on avoir une efficacité de pompe à chaleur ou de réfrigérateur supérieure à 1 ?",
    choices: [
      "Non, jamais, tout comme le rendement d'un moteur qui est toujours inférieur ou égal à 1.",
      "Oui : contrairement au rendement d'un moteur (toujours ≤ 1 par conservation de l'énergie), l'efficacité d'une pompe à chaleur ou d'un réfrigérateur peut dépasser 1.",
      "Oui, mais seulement si le cycle est irréversible.",
      "Non, car l'efficacité et le rendement sont rigoureusement la même grandeur.",
    ],
    explanations: [
      "Faux : c'est une confusion classique entre rendement (moteur, ≤ 1) et efficacité (pompe à chaleur / réfrigérateur, peut être > 1) — deux grandeurs différentes malgré leur définition proche.",
      "Exact : l'efficacité d'une pompe à chaleur, par exemple, vaut |Q_c|/W et peut largement dépasser 1 (c'est même tout l'intérêt du chauffage par pompe à chaleur par rapport au chauffage électrique direct).",
      "Faux : c'est même l'inverse — les cycles réversibles donnent l'efficacité maximale ; l'irréversibilité ne fait que la dégrader.",
      "Faux : rendement et efficacité sont définis différemment (rapports différents des mêmes flux d'énergie) et n'ont pas les mêmes bornes.",
    ],
    correctIndex: 1,
  },
  {
    id: "l10-q3",
    lecon: 10,
    question: "L'énoncé de Kelvin du second principe affirme que :",
    choices: [
      "Il est impossible de transférer spontanément de la chaleur d'un corps froid vers un corps chaud.",
      "Un système qui décrit un cycle et n'est en contact qu'avec une seule source de chaleur ne peut pas fournir de travail.",
      "Toutes les machines thermiques réversibles fonctionnant entre les deux mêmes températures ont le même rendement.",
      "L'entropie d'un système isolé ne peut qu'augmenter.",
    ],
    explanations: [
      "Faux : c'est l'énoncé de Clausius, pas celui de Kelvin.",
      "Exact : c'est précisément l'énoncé de Kelvin — impossibilité du moteur monotherme cyclique.",
      "Faux : c'est l'énoncé (historiquement le premier) de Carnot.",
      "Faux : c'est la formulation moderne générale du second principe (via l'entropie), pas spécifiquement l'énoncé de Kelvin.",
    ],
    correctIndex: 1,
  },
  {
    id: "l10-q4",
    lecon: 10,
    question: "L'inégalité de Clausius pour un cycle quelconque s'écrit :",
    choices: [
      "∮ δQ/T ≥ 0",
      "∮ δQ/T ≤ 0, avec égalité dans le cas réversible.",
      "∮ δQ = 0, toujours.",
      "∮ T dS ≤ 0",
    ],
    explanations: [
      "Faux : c'est l'inégalité inverse de la bonne relation.",
      "Exact : c'est l'inégalité de Clausius, conséquence directe de ΔS = 0 sur tout cycle et de dS_c ≥ 0.",
      "Faux : seule ΔU (ou ΔS) est nulle sur un cycle en général ; ∮δQ n'est pas nul (sauf cas particuliers), sinon aucun cycle moteur ne pourrait fonctionner.",
      "Faux : ce n'est pas la bonne façon d'écrire l'inégalité, qui porte sur δQ/T et non sur T dS le long du cycle réel.",
    ],
    correctIndex: 1,
  },
];

export function getQuizLessons(): number[] {
  const set = new Set(quizQuestions.map((q) => q.lecon));
  return Array.from(set).sort((a, b) => a - b);
}

export function getQuizQuestionsByLecon(lecon: number): QuizQuestion[] {
  return quizQuestions.filter((q) => q.lecon === lecon);
}
