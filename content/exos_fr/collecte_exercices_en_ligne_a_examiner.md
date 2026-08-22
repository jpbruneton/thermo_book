# Collecte d’exercices en ligne à examiner

> Statut : réserve éditoriale interne, non publiée et non chargée par le site.
> Collecte effectuée le 22 août 2026. Les propositions sont des reformulations
> originales inspirées de ressources pédagogiques en ligne, pas des copies.
> Aucune solution complète n’est encore rédigée.

## Objet et filtre éditorial

Ce fichier rassemble des idées qui apportent un mécanisme physique, un type de
raisonnement ou une application absents de la banque française actuelle. Le
filtre a porté sur les fichiers **exo_chp1.tex** à **exo_chp11.tex**, ainsi que
sur **exo_a_a_voir**.

Ont été écartés dès la collecte les exercices qui répéteraient :

- les transformations usuelles du gaz parfait, les lois de Laplace et les
  cycles géométriques élémentaires du chapitre 5 ;
- la détente de Joule, le contact avec un thermostat et les bilans d’entropie
  déjà traités ;
- Carnot, Stirling, Rankine et le réfrigérateur de Carnot sous leur forme
  standard ;
- Clausius--Clapeyron, le point triple, le palier de Maxwell et Van der Waals ;
- le gaz de photons cosmologique, la voile solaire, les phonons 2D et la
  pression de dégénérescence ;
- les problèmes qui exigent de reconstruire une distribution microscopique ou
  de compter des micro-états.

Le niveau est provisoire :

- **A** : bon candidat, original et directement compatible avec le cours ;
- **B** : intéressant, mais demande un peu de cours ou de données en plus ;
- **C** : extension avancée à garder en réserve.

## Cours résumé commun

### Système, état et bilan d’énergie

Un système doit être défini avant tout calcul : fermé ou ouvert, rigide ou
déformable, adiabatique ou diatherme. Avec la convention du cours,

\[
\Delta U=Q+W,
\]

où chaleur et travail reçus sont positifs. Pour un écoulement permanent à une
entrée et une sortie, en négligeant au besoin les énergies cinétique et
potentielle,

\[
\dot Q+\dot W_{\rm reçu}
=\dot m\,(h_{\rm sortie}-h_{\rm entrée}),\qquad h=u+Pv.
\]

### Entropie, potentiel pertinent et travail maximal

\[
\Delta S=\int\frac{\delta Q}{T_{\rm frontière}}+S_{\rm créée},
\qquad S_{\rm créée}\geq0.
\]

À \(T,V\) fixés, l’équilibre minimise \(F=U-TS\). À \(T,P\) fixés, il minimise
\(G=H-TS\). Pour un corps de capacité thermique constante \(C\), refroidi
réversiblement de \(T_1\) à \(T_0\) en produisant du travail,

\[
W_{\max}=C\left[(T_1-T_0)-T_0\ln\!\left(\frac{T_1}{T_0}\right)\right].
\]

### Potentiel chimique, mélanges et membranes

Pour une espèce idéale,

\[
\mu_i=\mu_i^\circ(T)+RT\ln a_i.
\]

À l’équilibre, le potentiel chimique de toute espèce qui peut traverser une
frontière est le même des deux côtés. Pour une solution diluée idéale,
\(\Pi=c_{\rm soluté}RT\). Une séparation ne peut demander moins de travail que
l’augmentation d’énergie libre associée au démélange.

### Travaux généralisés et relations de Maxwell

\[
\mathrm dU=T\,\mathrm dS+J\,\mathrm dL+\gamma\,\mathrm dA
-M\,\mathrm dH+\mu\,\mathrm dN.
\]

Le travail \(-P\,\mathrm dV\) n’est donc qu’un cas particulier. Les dérivées
croisées d’un potentiel relient des effets mécaniques, thermiques, magnétiques
ou interfaciaux.

### Coefficients de réponse et stabilité

Les capacités thermiques, compressibilités et coefficients de dilatation sont
des dérivées de l’équation d’état. La stabilité impose notamment
\(C_P,C_V>0\) et une compressibilité positive. Pour une onde acoustique rapide,

\[
c^2=\left(\frac{\partial P}{\partial\rho}\right)_S.
\]

### Phases et composition

Deux phases en équilibre ont même \(T\), même \(P\) et mêmes potentiels
chimiques des constituants échangeables. Dans un diagramme \(g(x)\), une
tangente commune donne les compositions coexistantes. Une courbure négative,
\(\partial^2g/\partial x^2<0\), signale une instabilité.

### Rayonnement, atmosphères et conversion

Un corps noir émet \(\sigma T^4\) par unité de surface. Une planète sans effet
de serre vérifie \((1-\alpha)S/4=\sigma T_{\rm eq}^4\). Dans une atmosphère
idéale isotherme, \(\mathrm dP/\mathrm dz=-\rho g\).

Une machine cyclique vérifie \(\Delta U_{\rm cycle}=0\). Une pile réversible
convertit une variation d’énergie libre en travail électrique :
\(\Delta G=-zFE\). Un échangeur ou un cycle combiné valorise une chaleur qui
aurait été rejetée à température encore élevée.

## Vue d’ensemble des candidats

| ID | Idée | Leçon | Niveau |
|---|---|---:|:---:|
| C01 | Buée sur un pare-brise : choisir le bon système | 3 | A |
| C02 | Hémisphères sous vide et force atmosphérique | 3 | A |
| C03 | Que pèse vraiment l’air d’un pneu ? | 3 | A |
| C04 | Ballon d’azote dans une atmosphère de CO2 | 3 ou 5 | A |
| C05 | Cristal de MgO : chauffer et comprimer avec des données réelles | 9 | A |
| C06 | Élastique thermoélastique | 4 ou 8 | A |
| C07 | Origines de la tension superficielle | 8 ou 9 | B |
| C08 | Adhérence capillaire de deux plaques | 4 | B |
| C09 | Gonflage lent ou rapide d’un pneu | 5 ou 7 | A |
| C10 | Vitesse du son par thermodynamique | 9 | A |
| C11 | Mélange de gaz et paradoxe de Gibbs macroscopique | 6 ou 7 | A |
| C12 | Démontrer le minimum de Gibbs | 8 | A |
| C13 | Pression atmosphérique et potentiel chimique | 7 | A |
| C14 | Jusqu’où l’eau peut-elle monter dans un arbre ? | 7 | B |
| C15 | Masse molaire d’une macromolécule par osmose | 7 | A |
| C16 | Dessalement : travail minimal et osmose inverse | 7 ou 11 | A |
| C17 | Cellule de concentration comme détendeur | 7 ou 8 | B |
| C18 | Mesurer \(\Delta S\) d’une pile avec \(E(T)\) | 8 | A |
| C19 | Désaimantation adiabatique | 8 ou 9 | B |
| C20 | Une réaction augmente la capacité thermique | 9 | B |
| C21 | Bilame et thermostat | 9 | A |
| C22 | Reconstituer un diagramme de phases | 10 | A |
| C23 | Alliage binaire et tangente commune | 10 | B |
| C24 | Pourquoi une solubilité n’est jamais strictement nulle | 10 | B |
| C25 | Solubilité d’un dopant dans le silicium | 7 ou 10 | C |
| C26 | Panneau solaire d’un satellite | 4 ou 7 | A |
| C27 | Température d’une planète, atmosphère à une couche | 4 ou 7 | A |
| C28 | Cycle rectangulaire d’un gaz de photons | 7 ou 11 | B |
| C29 | Stockage par air comprimé et sel chaud | 6 ou 11 | C |
| C30 | Pile à combustible : travail, chaleur et rendement | 7 ou 11 | B |
| C31 | Cycle combiné et récupération de chaleur | 11 | C |
| C32 | Émissions de combustibles à puissance égale | 11 | B |

## Fiches candidates

### C01 — Buée sur un pare-brise : choisir le bon système

**Originalité.** Aucun exercice du chapitre 3 ne fait encore choisir
simultanément système, frontières, constituants et phases.

**Piste d’énoncé.** Dans une voiture froide, de la vapeur d’eau peut condenser
sur le pare-brise. Définir le système minimal permettant de décider si la buée
apparaît, qualifier ses frontières et recenser constituants et phases. Comparer
ensuite chauffage, ventilation et déshumidification.

**Cours.** Système, paroi diatherme, phase homogène, équilibre.

**Source.** [MIT 3.020, problem set 1](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset01.pdf).

### C02 — Hémisphères sous vide et force atmosphérique

**Originalité.** Application spectaculaire de la pression comme force de
surface, sans reprendre un bilan \(W,Q,\Delta U\).

**Piste d’énoncé.** Deux hémisphères métalliques de rayon \(R\) sont assemblés
puis vidés. Calculer la résultante qui les maintient ensemble, la comparer au
poids d’une voiture et expliquer pourquoi il ne faut pas multiplier la pression
par toute l’aire sphérique.

**Cours.** Pression, force normale, surface de contrôle.

**Source.** [University of Chicago, Climate Workbook, thermodynamique sèche](https://geosci.uchicago.edu/~rtp1/geo232/labs/ClimateWorkbook.pdf).

### C03 — Que pèse vraiment l’air d’un pneu ?

**Originalité.** Le gaz parfait est ici relié à une masse directement
mesurable, avec le piège pression absolue contre pression manométrique.

**Piste d’énoncé.** Un pneu rigide est gonflé lentement à une pression donnée.
Calculer la masse ajoutée et comparer air, hélium et CO2. Déterminer si la
différence serait visible sur une balance ordinaire.

**Cours.** \(PV=nRT\), masse molaire, pression absolue.

**Source.** [University of Chicago, Climate Workbook, « Ideal gas law »](https://geosci.uchicago.edu/~rtp1/geo232/labs/ClimateWorkbook.pdf).

### C04 — Ballon d’azote dans une atmosphère de CO2

**Originalité.** Problème de flottabilité planétaire fondé sur la masse
molaire plutôt que sur le seul chauffage d’un ballon.

**Piste d’énoncé.** Sur une planète dont l’atmosphère est du CO2 à \(P,T\)
donnés, dimensionner un ballon rempli de \(N_2\) qui soulève une charge.
Séparer masse du gaz, masse déplacée et masse de l’enveloppe.

**Cours.** Équation d’état, masse volumique, poussée d’Archimède.

**Source.** [University of Chicago, Climate Workbook, « nitrogen balloon »](https://geosci.uchicago.edu/~rtp1/geo232/labs/ClimateWorkbook.pdf).

### C05 — Cristal de MgO : chauffer et comprimer avec des données réelles

**Originalité.** Introduit l’utilisation raisonnée de \(C_P(T)\), de la masse
volumique et de la compressibilité d’un solide réel.

**Piste d’énoncé.** Pour une plaquette de MgO, fournir un petit tableau de
propriétés. Calculer sa masse, la pression nécessaire pour diminuer son volume
de 1 %, puis l’énergie de chauffage de 298 K à 500 K avec \(C_P\) constant et
avec \(C_P(T)\). Quantifier l’erreur du modèle constant.

**Cours.** Compressibilité, capacité thermique variable, intégration.

**Source.** [MIT 3.020, problem set 1, « Using Thermodynamic Data »](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset01.pdf).

### C06 — Élastique thermoélastique

**Originalité.** Premier travail généralisé \(J\,\mathrm dL\), avec un résultat
quotidien contre-intuitif.

**Piste d’énoncé.** On donne \(J=bT(L-L_0)\) et \(U=CT\). Écrire la relation
fondamentale, déterminer \(S(T,L)\), prévoir le signe de la chaleur lors d’un
étirement isotherme, puis le signe de \(\Delta T\) lors d’un étirement rapide
adiabatique.

**Cours.** Travail généralisé, différentielle exacte, Maxwell, adiabatique.

**Sources.** [University of Maryland, Jarzynski, problem set 1](https://www.terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/problemSets/Problem%20Set%201.pdf) ;
[University of Florida, élastique](https://phys.ufl.edu/courses/phy3513/fall18/Hw%206.pdf).

### C07 — Origines de la tension superficielle

**Originalité.** Utilise le terme \(\gamma\,\mathrm dA\) et interprète la
décroissance de la tension superficielle avec la température.

**Piste d’énoncé.** On fournit une loi affine \(\gamma(T)\) pour l’eau. À partir
de \(G(T,P,A,N)\), obtenir la relation de Maxwell correspondante, séparer
\(\gamma\) en contributions entropique et enthalpique à 300 K, puis commenter
la contribution dominante.

**Cours.** Gibbs, variables naturelles, Maxwell, travail de surface.

**Source.** [University of Pittsburgh, exercice corrigé sur la tension superficielle](https://sites.pitt.edu/~jordan/chem1420-2014/hw6-ans.pdf).

### C08 — Adhérence capillaire de deux plaques

**Originalité.** Relie pression de Laplace, tension superficielle et force
macroscopique d’adhérence.

**Piste d’énoncé.** Un liquide mouille deux plaques parallèles séparées de
\(h\). Avec l’angle de contact et un ménisque cylindrique, établir la différence
de pression, calculer la force qui colle les plaques et étudier sa dépendance en
\(h\) à volume de liquide fixé.

**Cours.** Travail de surface, pression, équilibre mécanique.

**Source.** [MIT 2.25, problème 2.07, capillary stiction](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/2f0bee1909b7c1760d69671d273d4286_MIT2_25F13_Solution2.07.pdf).

### C09 — Gonflage lent ou rapide d’un pneu

**Originalité.** Le réservoir est rigide mais ouvert pendant le gonflage :
il faut distinguer énergie interne et enthalpie transportée.

**Piste d’énoncé.** Comparer un remplissage lent isotherme et un remplissage
rapide adiabatique. Établir le bilan transitoire, calculer la température juste
après le remplissage rapide, puis la pression après refroidissement.

**Cours.** Système ouvert instationnaire, enthalpie d’entrée, gaz parfait.

**Source.** [University of Chicago, Climate Workbook, pneu et adiabatique sèche](https://geosci.uchicago.edu/~rtp1/geo232/labs/ClimateWorkbook.pdf).

### C10 — Vitesse du son par thermodynamique

**Originalité.** Application réelle de la compressibilité isentropique,
absente de la banque.

**Piste d’énoncé.** Montrer qu’une petite onde rapide vérifie
\(c^2=(\partial P/\partial\rho)_S\). Avec
\(P\rho^{-\gamma}=\mathrm{cste}\), retrouver
\(c=\sqrt{\gamma RT/M}\), calculer \(c\) dans l’air et expliquer pourquoi la
formule isotherme est incorrecte.

**Cours.** Dérivées indicées, adiabatique, compressibilité.

**Source.** [University of Notre Dame, notes de thermodynamique](https://www3.nd.edu/~powers/ame.30332/notes.pdf).

### C11 — Mélange de gaz et paradoxe de Gibbs macroscopique

**Originalité.** Compare deux gaz différents et un gaz identique sans compter
de micro-états.

**Piste d’énoncé.** Deux compartiments isolés contiennent des gaz parfaits aux
mêmes \(T,P\). Retirer la cloison, calculer l’état final et l’entropie de
mélange si les gaz diffèrent. Refaire pour deux échantillons du même gaz et
expliquer pourquoi aucun changement macroscopique ne subsiste.

**Cours.** Additivité de l’entropie, détente libre, identité des constituants.

**Source.** [Texas A&M, Physics 607, devoir sur le mélange](https://people.tamu.edu/~abanov/courses/P607/2012_Spring/HW.pdf).

### C12 — Démontrer le minimum de Gibbs

**Originalité.** La banque construit les potentiels, mais ne démontre pas le
critère d’évolution par un bilan sur système plus réservoir.

**Piste d’énoncé.** Enfermer un système fermé dans un grand réservoir à
\(T_0,P_0\). Appliquer les deux principes au composite isolé et montrer que,
pour une évolution du petit système à \(T_0,P_0\), \(\Delta G\leq0\).
Identifier l’égalité et le minimum d’équilibre.

**Cours.** Gibbs, réservoir, entropie créée.

**Source.** [MIT 3.020, problem set 2, « Conditions for equilibrium »](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset02.pdf).

### C13 — Pression atmosphérique et potentiel chimique

**Originalité.** Fait dériver la loi barométrique par l’égalité d’un potentiel
chimique qui inclut la gravité.

**Piste d’énoncé.** On donne
\(\mu(T,P,z)=\mu^\circ(T)+RT\ln(P/P^\circ)+Mgz\). En déduire \(P(z)\) dans une
atmosphère isotherme, calculer le rapport de densité entre mer et Everest, puis
discuter la limite de l’hypothèse isotherme.

**Cours.** Potentiel chimique, champ extérieur, gaz parfait.

**Sources.** [Texas A&M, problème « Atmosphere »](https://people.tamu.edu/~abanov/courses/P607/2012_Spring/HW.pdf) ;
[DeVoe, Thermodynamics and Chemistry](https://faculty.washington.edu/gdrobny/v5-screen.pdf).

### C14 — Jusqu’où l’eau peut-elle monter dans un arbre ?

**Originalité.** Application biologique du potentiel chimique avec gravité et
activité de l’eau.

**Piste d’énoncé.** L’activité de l’eau passe de 1 aux racines à 0,90 dans les
feuilles. Avec \(\mu=\mu^\circ+RT\ln a+Mgh\), estimer la hauteur maximale
d’équilibre. Comparer aux plus grands arbres et distinguer équilibre et
cinétique du transport.

**Cours.** Potentiel chimique, activité, gravité.

**Source.** [Caltech Physics 12c, « Ascent of sap in trees »](https://preskill.caltech.edu/ph12c/12c-soln4-2016.pdf).

### C15 — Masse molaire d’une macromolécule par osmose

**Originalité.** Une mesure thermodynamique donne une propriété moléculaire
sans théorie statistique.

**Piste d’énoncé.** Une masse connue de protéine est dissoute dans l’eau ; sa
pression osmotique est mesurée. En supposant \(\Pi=cRT\), déterminer la masse
molaire et analyser la sensibilité du résultat aux incertitudes expérimentales.

**Cours.** Potentiel chimique, solution diluée, pression osmotique.

**Source.** [OpenStax Chemistry, propriétés colligatives et hémoglobine](https://openstax.org/books/chemistry/pages/11-4-colligative-properties).

### C16 — Dessalement : travail minimal et osmose inverse

**Originalité.** Compare limite thermodynamique, pression osmotique et travail
réel d’une technologie climatique.

**Piste d’énoncé.** Une unité reçoit de l’eau salée et produit eau douce et
saumure. Faire les bilans de matière, puis calculer le travail minimal avec
l’entropie de mélange idéale. Estimer pression osmotique, travail d’une pompe
idéale et efficacité de second principe. Proposer une récupération d’énergie
sur la saumure.

**Cours.** Système ouvert, énergie libre de mélange, second principe.

**Source.** [MIT 2.60, homework 1, dessalement](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/d060fbd39d89a05a1daed3013ebe88c4_MIT2_60s20_hw1.pdf).

### C17 — Cellule de concentration comme détendeur

**Originalité.** Montre que le même \(RT\ln(P_2/P_1)\) peut devenir travail
mécanique ou électrique.

**Piste d’énoncé.** Deux électrodes à hydrogène sont séparées par une membrane
à protons et soumises à deux pressions partielles. Avec la loi de Nernst
fournie, calculer tension et travail électrique molaire maximal, puis comparer
au travail d’une détente isotherme réversible.

**Cours.** Potentiel chimique, \(\Delta G=-zFE\), détente isotherme.

**Source.** [MIT 2.60, homework 4, cellule comme capteur et détendeur](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/ea8d8288becc6b05367694c45bf793e7_MIT2_60s20_hw4.pdf).

### C18 — Mesurer \(\Delta S\) d’une pile avec \(E(T)\)

**Originalité.** Exploite expérimentalement une dérivée de potentiel plutôt
qu’une simple tension de pile.

**Piste d’énoncé.** La tension réversible varie linéairement avec \(T\). À
partir de \(\Delta G=-zFE\) et
\((\partial G/\partial T)_P=-S\), obtenir \(\Delta S\), puis \(\Delta H\).
Calculer la chaleur réversible de décharge et expliquer pourquoi enthalpie de
réaction et travail électrique maximal diffèrent.

**Cours.** Gibbs--Helmholtz, entropie de réaction, travail électrique.

**Sources.** [Columbia University, thermodynamique des batteries](https://www.columbia.edu/itc/chemistry/chem-c2507/navbar/announcefile/BatteryExpt.html) ;
[MIT 3.012, thermodynamique d’une batterie](https://ocw.mit.edu/courses/3-012-fundamentals-of-materials-fall-2005/resources/lec14t_note/).

### C19 — Refroidissement par désaimantation adiabatique

**Originalité.** Premier exercice magnétocalorique, sans transition de phase ni
calcul microscopique.

**Piste d’énoncé.** On donne
\(\mathrm dU=T\,\mathrm dS-M\,\mathrm dH\) et \(M=\chi(T)H\). Établir une
relation de Maxwell, puis montrer

\[
\left(\frac{\partial T}{\partial H}\right)_S
=-\frac{TH}{C_H}\left(\frac{\partial\chi}{\partial T}\right)_H.
\]

Avec une loi de Curie fournie, prévoir le signe de l’effet et estimer un rapport
de températures lors d’une réduction du champ.

**Cours.** Travail magnétique, Maxwell, transformation isentropique.

**Source.** [Harvey Mudd College, Physics 117, « Magnetic Cooling »](https://saeta.physics.hmc.edu/courses/p117/hw/hw07.pdf).

### C20 — Une réaction augmente la capacité thermique

**Originalité.** Un \(C_P\) mesuré inclut ici un déplacement d’équilibre, pas
seulement le stockage de chaleur sensible.

**Piste d’énoncé.** Pour
\(N_2+3H_2\rightleftharpoons2NH_3\), fournir \(K(T)\), enthalpie de réaction et
\(C_P\) des espèces. Comparer la chaleur nécessaire pour une petite hausse de
\(T\) à composition figée et à composition rééquilibrée.

**Cours.** Enthalpie, équilibre chimique donné, dérivée le long de l’équilibre.

**Source.** [MIT 3.020, problem set 4, « Le Chatelier strikes again »](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset04.pdf).

### C21 — Bilame et thermostat

**Originalité.** Application mécanique des coefficients de dilatation des
solides.

**Piste d’énoncé.** Deux lames collées ont
\(\alpha_1\neq\alpha_2\). Dans un modèle géométrique simplifié, relier
\(\Delta T\) au rayon de courbure, déterminer le sens de flexion, puis
dimensionner un contact qui commute à une température donnée.

**Cours.** Dilatation linéaire, contrainte géométrique, ordre de grandeur.

**Sources.** [University of Iowa, démonstration du bilame](https://instructional-resources.physics.uiowa.edu/4a3010-expansion-contraction-demo-bimetal-strip) ;
[NYU Physics, Bimetal II](https://physics.nyu.edu/~physlab/Demos/updatedEquipment/thermodynamics/bimetal2.html).

### C22 — Reconstituer un diagramme de phases

**Originalité.** Enquête inverse utilisant signes, pentes et chaleur latente
plutôt que lecture d’un diagramme déjà tracé.

**Piste d’énoncé.** Deux phases fictives coexistent en deux points \((T,P)\).
Fournir une chaleur latente en valeur absolue, des transformations
exo/endothermiques et un point de fusion. Retrouver le signe de \(\Delta H\),
la phase stable à basse \(T\), \(\Delta V\) par Clapeyron et la température de
transition à 1 bar.

**Cours.** Stabilité, chaleur latente, Clapeyron, extrapolation.

**Source.** [MIT 3.020, problem set 3, « mystery phase diagram »](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset03.pdf).

### C23 — Alliage binaire et tangente commune

**Originalité.** La banque traite surtout les corps purs ; ce candidat introduit
les phases multicomposants sans cinétique ni physique statistique.

**Piste d’énoncé.** Fournir deux fonctions molaires simples
\(g_\alpha(x,T)\) et \(g_\beta(x,T)\). Tracer les courbes, construire la
tangente commune, déterminer les compositions coexistantes puis les fractions
de phases pour une composition globale. Vérifier la règle du levier.

**Cours.** Potentiel chimique, minimum de \(G\), équilibre de phases.

**Sources.** [MIT 3.020, problem set 6, Ag--Cu](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset06.pdf) ;
[MIT 3.020, problem set 7, diagrammes binaires](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset07.pdf).

### C24 — Pourquoi une solubilité n’est jamais strictement nulle

**Originalité.** Résultat conceptuel fin obtenu uniquement à partir d’une
fonction \(G(x)\) donnée.

**Piste d’énoncé.** Pour

\[
\Delta g_{\rm mix}=a\,x(1-x)
+RT[x\ln x+(1-x)\ln(1-x)],
\]

étudier la pente lorsque \(x\to0^+\). Montrer qu’à toute température non nulle
une phase d’équilibre contient une quantité, éventuellement exponentiellement
petite, du second constituant.

**Cours.** Gibbs, limite logarithmique, équilibre.

**Source.** [MIT 3.020, problem set 5, « There’s always a solution! »](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset05.pdf).

### C25 — Solubilité d’un dopant dans le silicium

**Originalité.** Application technologique du potentiel chimique et de la
solution diluée.

**Piste d’énoncé.** Donner l’enthalpie d’insertion d’un atome de nickel
interstitiel et \(\Delta S_{\rm mix}\simeq-R\delta\ln\delta\). Minimiser
l’énergie libre pour obtenir la concentration à 800 °C puis à température
ambiante. Relier le résultat au risque de contamination pendant un recuit.

**Cours.** Énergie libre, potentiel chimique, solution diluée.

**Source.** [MIT 3.020, problem set 10, dopage du silicium](https://ocw.mit.edu/courses/3-020-thermodynamics-of-materials-spring-2021/mit3_020s21_pset10.pdf).

### C26 — Panneau solaire d’un satellite

**Originalité.** Bilan radiatif local avec géométries d’absorption et
d’émission différentes.

**Piste d’énoncé.** Un panneau de surface \(A\), absorptivité \(a\) et
émissivité \(\varepsilon\) reçoit le Soleil à la distance terrestre et rayonne
par une ou deux faces. Calculer puissance absorbée et température d’équilibre.
Étudier un revêtement blanc et une orientation rasante.

**Cours.** Premier principe stationnaire, Stefan--Boltzmann, émissivité.

**Source.** [University of Rochester, panneau de satellite](https://www.sas.rochester.edu/chm/courses/chm252_455/Homework-Exams/Ex3-F/Final%202021c.pdf).

### C27 — Température d’une planète et atmosphère à une couche

**Originalité.** Le dépôt n’a pas encore de bilan radiatif global ni de modèle
minimal de l’effet de serre.

**Piste d’énoncé.** Calculer la température d’une planète sans atmosphère à
partir de \(S,\alpha,\sigma\). Ajouter une couche transparente au visible et
absorbante en infrarouge, écrire les deux bilans stationnaires et comparer
température de surface et température effective. Appliquer à une planète avec
données fournies.

**Cours.** Bilan énergétique, corps noir, équilibre stable.

**Sources.** [University of Michigan, Earth Energy Balance Model](https://sites.lsa.umich.edu/globalchange/labs/energy-balance/) ;
[MIT Open Learning, modèle à \(N\) couches](https://openlearninglibrary.mit.edu/asset-v1%3AMITx%2B12.340x%2B1T2020%2Btype%40asset%2Bblock/models_Nlayer_N_layer.html).

### C28 — Cycle rectangulaire d’un gaz de photons

**Originalité.** Le gaz de photons existe dans la banque, mais pas comme fluide
de travail d’une machine.

**Piste d’énoncé.** Une cavité à piston contient un rayonnement avec
\(U=aT^4V\) et \(P=U/(3V)\). Pour un cycle rectangulaire dans \((P,V)\),
calculer \(W,\Delta U,Q\) sur chaque branche, le bilan et le rendement. Comparer
les signes à ceux d’un gaz parfait matériel.

**Cours.** Équation d’état donnée, premier principe, cycle moteur.

**Source.** [University of Rhode Island, « Square heat engine with photon gas »](https://phys.uri.edu/gerhard/PHY525/tdc4.pdf).

### C29 — Stockage par air comprimé et sel chaud

**Originalité.** Introduit stockage d’énergie, énergie disponible et rendement
aller-retour.

**Piste d’énoncé.** Un réservoir rigide contient de l’air comprimé chaud et un
autre un sel fondu chauffé. Calculer l’énergie stockée, puis le travail maximal
extractible en revenant à \(T_0,P_0\). Appliquer des efficacités de second
principe et en déduire rendement aller-retour et durée de charge par une
éolienne.

**Cours.** Énergie interne, exergie, source finie, stockage.

**Source.** [MIT 2.60, homework 1, « Compressed Air Storage »](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/d060fbd39d89a05a1daed3013ebe88c4_MIT2_60s20_hw1.pdf).

### C30 — Pile à combustible : travail, chaleur et rendement

**Originalité.** Machine ouverte électrochimique, différente d’un moteur
cyclique ditherme.

**Piste d’énoncé.** Une pile \(H_2/O_2\) fonctionne à \(T,P\) fixés. Fournir
\(\Delta H,\Delta G\), tension réelle, courant et taux d’utilisation. Calculer
tension réversible, débit d’hydrogène, puissance, rendement et chaleur à
évacuer. Expliquer pourquoi Carnot ne s’applique pas naïvement.

**Cours.** Système ouvert, enthalpie de réaction, Gibbs, travail électrique.

**Source.** [MIT 2.60, homework 3, pile PEM](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/fa208ad3d5a55239ecd737964ae97bcf_MIT2_60s20_hw3.pdf).

### C31 — Cycle combiné et récupération de chaleur

**Originalité.** La banque a un Rankine isolé, pas le couplage
Brayton--Rankine.

**Piste d’énoncé.** Une turbine à gaz rejette un débit chaud qui produit de la
vapeur. Avec des enthalpies fournies, calculer débit de vapeur, travaux des deux
turbines et rendement global. Comparer au fonctionnement séparé et localiser la
réduction d’irréversibilité.

**Cours.** Écoulement permanent, échangeur, rendement de cycle.

**Source.** [MIT 2.60, homework 4, « Combined Cycle Power Plant »](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/ea8d8288becc6b05367694c45bf793e7_MIT2_60s20_hw4.pdf).

### C32 — Émissions de combustibles à puissance égale

**Originalité.** Relie stœchiométrie, pouvoir calorifique, rendement et
émissions au lieu de comparer seulement des masses de combustible.

**Piste d’énoncé.** Une centrale peut brûler carbone, méthane ou octane. Avec
pouvoirs calorifiques et rendements fournis, calculer débit et
\(\mathrm{kg\,CO_2/MJ_e}\). Refaire avec des rendements technologiques
différents et expliquer le rôle conjoint du rapport H/C et de la machine.

**Cours.** Premier principe en régime permanent, rendement, stœchiométrie.

**Source.** [MIT 2.60, homework 2, « Carbon Dioxide Emissions »](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/53c0cd1f11c693e0e5bd0fe3594760e2_MIT2_60s20_hw2.pdf).

## Idées consultées mais non retenues

- Un nouveau cycle rectangulaire de gaz parfait : doublon direct du chapitre 5.
- Un nouveau calcul de COP idéal : doublon du chapitre 11.
- Une détente de Joule--Thomson standard : déjà présente au chapitre 9.
- Une simple lecture du diagramme de phases de l’eau ou du CO2 : trop proche
  des exercices actuels du chapitre 10.
- Un calcul de pression de radiation ou de voile solaire : déjà traité.
- Einstein, Landau et Curie--Weiss : déjà placés dans **exo_a_a_voir**.
- Les micro-états et distributions microscopiques : hors du filtre retenu.
- Claude, Linde et les combustions avec dissociation détaillée : trop
  dépendants de tables ou de logiciels spécialisés pour la banque actuelle.

## Ordre suggéré pour la future revue

1. Examiner d’abord les candidats A courts : C01 à C05, C09 à C13, C15, C18,
   C21, C22, C26 et C27.
2. Choisir au plus deux axes parmi interfaces et matière molle (C06--C08),
   chimie et membranes (C16--C20), puis alliages (C23--C25).
3. Réserver C28--C32 aux synthèses ou à une section avancée.
4. Avant intégration, rédiger une solution indépendante, vérifier les signes
   avec la convention du cours, fixer les données et contrôler les quiz.
