import type { Lang } from "@/lib/i18n";
import type { TranslatedQuizQuestion } from "@/lib/quizQuestionTranslations";

// Direct translations of the reviewed French lesson 6 quiz, without a provider.
// Keep the choice/explanation order aligned with lib/quizzes.ts.
// Shared mnemonic indices: H/C, gas, actual, system, tot/ext/rev/e/i.
export const quizLesson6Translations: Partial<
  Record<Lang, Record<string, TranslatedQuizQuestion>>
> = {
  "en": {
    "l6-q1": {
      "question": "In this lesson, what does global reversibility of a process require?",
      "choices": [
        "That the system alone can return to its initial state, whatever changes occur in its surroundings.",
        "That a return process can restore the system and all its surroundings without leaving any other change.",
        "That the return must follow exactly the same path in reverse.",
        "That the process is quasi-static and the system remains close to equilibrium at every step."
      ],
      "explanations": [
        "Incorrect: restoring the system alone may leave a trace in a thermal reservoir or a work source. All the surroundings must also be restored.",
        "Correct: it suffices for at least one return procedure to erase every change to the system and its surroundings. The global definition does not prescribe the return path.",
        "Incorrect: retracing the path concerns local reversibility. The global definition allows a different return path.",
        "Incorrect: being quasi-static is insufficient. Friction may remain and prevent complete restoration of the system and its surroundings."
      ]
    },
    "l6-q11": {
      "question": "A closed system releases 2 400 J to a thermal reservoir at 300 K. Its entropy change is ΔS = −6 J/K. What are its exchanged entropy S_e and produced entropy S_i?",
      "choices": [
        "S_e = −8 J/K and S_i = +2 J/K.",
        "S_e = +8 J/K and S_i = +2 J/K.",
        "S_e = −6 J/K and S_i = 0 J/K.",
        "S_e = −8 J/K and S_i = +14 J/K."
      ],
      "explanations": [
        "Correct: Q = −2 400 J, so S_e = Q/T_ext = −8 J/K. The balance ΔS = S_e + S_i gives S_i = +2 J/K. The reservoir gains 8 J/K: total entropy increases by 2 J/K if the other devices have no entropy change.",
        "Incorrect: S_e is counted from the viewpoint of the system, which releases heat: S_e = −2 400/300 = −8 J/K. The +8 J/K is the reservoir's gain.",
        "Incorrect: S_e is fixed by Q/T_ext = −8 J/K, not by ΔS. Their difference is the entropy produced: S_i = ΔS − S_e = +2 J/K.",
        "Incorrect: the sign of ΔS must be retained: S_i = (−6) − (−8) = +2 J/K. Adding the absolute values 6 and 8 does not give the entropy produced."
      ]
    },
    "l6-q15": {
      "question": "Heat Q = 1 200 J passes directly from a thermal reservoir at 600 K to one at 300 K. What is the total entropy change of the two reservoirs?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Correct: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Duration does not enter this balance; a poorly conducting wall slows the transfer without removing the irreversibility due to the finite temperature difference.",
        "Incorrect: energy is conserved, but the entropy changes are weighted by the reciprocal temperatures, which differ.",
        "Incorrect: this result adds the absolute values. The hot reservoir loses 1 200/600 = 2 J/K, while the cold one gains 1 200/300 = 4 J/K: the sum must be −2 + 4.",
        "Incorrect: +4 J/K is only the cold reservoir's change. The total balance also includes the hot reservoir's −2 J/K."
      ]
    },
    "l6-q3": {
      "question": "Why does an ordinary refrigerator not contradict Clausius's statement?",
      "choices": [
        "Because heat transfer from cold to hot is accompanied by work supplied from outside.",
        "Because the fluid returns to its initial state after each cycle, cancelling the effects on both reservoirs.",
        "Because the algebraic sum of heat and work is zero over a cycle, which is sufficient to allow this transfer."
      ],
      "explanations": [
        "Correct: Clausius forbids a cyclic process whose sole effect would be this transfer from cold to hot. The refrigerator receives work, so this transfer is not its sole effect.",
        "Incorrect: the fluid returns to its initial state, but the reservoirs have exchanged energy. Cyclic operation does not erase these external changes.",
        "Incorrect: energy conservation is necessary but insufficient. The second law imposes an additional physical constraint."
      ]
    },
    "l6-q13": {
      "question": "An ideal gas of n moles undergoes Joule–Gay-Lussac expansion from volume v to volume V > v in a rigid, adiabatic vessel. Removing the partition does not change the surroundings. Which balance is correct?",
      "choices": [
        "Q = W = 0, so ΔU_gas = 0 and ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 and ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 and ΔS_tot = 0, although ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 and ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Incorrect: Q = W = 0 does imply ΔU_gas = 0, but not ΔS_gas = 0. The absence of heat exchange does not forbid entropy production: dS = δQ_rev/T does not apply to the actual heat in this irreversible expansion.",
        "Incorrect: the gas expands against a vacuum, so it supplies no work: W = 0. With Q = 0, we have ΔU_gas = 0. Entropy increases without any energy input.",
        "Incorrect: the surroundings remain unchanged, so ΔS_ext = 0. No external decrease compensates for the gas's entropy increase: ΔS_tot = ΔS_gas > 0.",
        "Correct: Q = W = 0 gives ΔU_gas = 0. Since the surroundings are unchanged, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. This increase proves that no return can restore the gas and its surroundings without leaving a trace elsewhere."
      ]
    },
    "l6-q6": {
      "question": "A two-reservoir engine operates between 600 K and 300 K and receives Q_H = 1 000 J per cycle. What is the maximum work supplied |W|?",
      "choices": [
        "1 000 J.",
        "Approximately 667 J.",
        "500 J.",
        "Impossible to determine without knowing the working fluid."
      ],
      "explanations": [
        "Incorrect: not all the heat received from the hot reservoir can be converted into work over a cycle. The second law requires some to be rejected to the cold reservoir, even though ΔU = 0.",
        "Incorrect: 667 J is approximately Q_H T_H/(T_H + T_C). Carnot efficiency is 1 − T_C/T_H, not T_H/(T_H + T_C).",
        "Correct: the maximum efficiency is Carnot efficiency, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Thus |W|_max = η_max Q_H = 500 J. A locally reversible two-reservoir machine achieves this value.",
        "Incorrect: the temperatures of both reservoirs and the heat received suffice to calculate the maximum work: |W|_max = Q_H (1 − T_C/T_H). Neither the fluid nor the engine's details need to be known."
      ]
    },
    "l6-q18": {
      "question": "Two subsystems of fixed composition can exchange energy and volume independently within an isolated whole. What can be said about their equilibrium state?",
      "choices": [
        "U_1 = U_2 and V_1 = V_2, whatever the sizes of the subsystems.",
        "P_1/T_1 = P_2/T_2, without necessarily having equal temperatures.",
        "T_1 = T_2, but the pressures need not be equal.",
        "T_1 = T_2 and P_1 = P_2."
      ],
      "explanations": [
        "Incorrect: equilibrium does not require extensive quantities to be equal. Subsystems of different sizes may have different energies and volumes at equilibrium.",
        "Incorrect: this equality only makes the coefficient of dV_1 vanish. Since energy can also be redistributed independently, the coefficient of dU_1 must vanish: T_1 = T_2. The criterion used is stationarity of total entropy.",
        "Incorrect: since volume exchange is also allowed, equilibrium must be mechanical as well as thermal. The pressures must therefore also be equal.",
        "Correct: at equilibrium, total entropy is stationary under all allowed redistributions: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Since energy and volume exchanges are independent, both coefficients vanish: T_1 = T_2 and P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "A cyclic machine receives signed heats Q_k from reservoirs at T_k > 0 and exchanges work with an ideal source. Which statement respects the Clausius inequality and the lesson's definitions?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, with a strictly positive value for a globally irreversible cycle.",
        "Σ_k Q_k/T_k = 0 for every cycle, since the machine's entropy returns to its initial value.",
        "Σ_k Q_k/T_k ≤ 0, and equality alone proves that the original path is locally reversible.",
        "Σ_k Q_k/T_k ≤ 0; equality characterizes global reversibility without proving local reversibility."
      ],
      "explanations": [
        "Incorrect: Q_k is counted positively when received by the machine. With this convention, the sum is nonpositive.",
        "Incorrect: ΔS_system = 0 over a cycle, but the exchanged entropy can be negative and offset by positive entropy production.",
        "Incorrect: the sign is correct, but equality constructs a global return using auxiliary machines. It does not show that the original machine can retrace its own path.",
        "Correct: a locally reversible cycle achieves equality. Conversely, a zero sum allows the sources to be restored using auxiliary machines; a strictly negative sum indicates a globally irreversible cycle."
      ]
    },
    "l6-q9": {
      "question": "How does the lesson construct entropy from the equality ∮ δQ_rev/T = 0 for locally reversible cycles?",
      "choices": [
        "It deduces that heat Q is a state function.",
        "It defines S(B) − S(A) as the integral of δQ_rev/T.",
        "It defines S(B) − S(A) as the integral of δQ/T_ext along any actual path."
      ],
      "explanations": [
        "Incorrect: δQ_rev/T is the exact differential. The heat exchanged still depends on the path.",
        "Correct: two locally reversible paths, one traversed in reverse, form a cycle with zero integral. Entropy is thereby defined up to an additive constant on each reversibly connected domain, and is expressed in J/K.",
        "Incorrect: on an actual irreversible path, the integral of δQ/T_ext gives the exchanged entropy, not necessarily ΔS. The construction uses δQ_rev/T along a locally reversible path."
      ]
    },
    "l6-q2": {
      "question": "Which statement correctly describes local reversibility?",
      "choices": [
        "It suffices for the system's initial and final states to be equilibrium states.",
        "It follows automatically from any procedure that globally restores the system and its surroundings.",
        "It requires every step in a succession of equilibrium states to be reversible through an infinitesimal change in the constraints.",
        "It allows the system's path to be retraced while keeping the same signs for heat and work exchanges."
      ],
      "explanations": [
        "Incorrect: the intermediate states and the ability to reverse each step are essential to the local definition.",
        "Incorrect: a global return could take another path. Its existence alone does not prove that the original path is locally reversible.",
        "Correct: the same succession of states can then be followed in reverse, restoring the surroundings too. Local reversibility therefore implies global reversibility.",
        "Incorrect: when a locally reversible path is traversed in reverse, thermal and mechanical exchanges change sign at every step."
      ]
    },
    "l6-q12": {
      "question": "An irreversible process connects two equilibrium states A and B, but its intermediate states are far from equilibrium. Which statement is correct?",
      "choices": [
        "The entropy change ΔS is the integral of δQ_actual/T_ext along the actual path.",
        "The entropy change ΔS can be calculated along a locally reversible path from A to B, whereas S_e and S_i depend on the actual process.",
        "States A and B alone determine the exchanged entropy S_e and produced entropy S_i."
      ],
      "explanations": [
        "Incorrect: this integral gives S_e, the exchanged entropy. The balance is ΔS = S_e + S_i: the heat actually exchanged is insufficient to calculate ΔS without accounting for the entropy produced.",
        "Correct: S is a state function, so ΔS = ∫ δQ_rev/T can be calculated along a locally reversible path connecting the same states. We then return to the actual exchanges to determine S_e = ∫ δQ_actual/T_ext and S_i = ΔS − S_e.",
        "Incorrect: states A and B fix ΔS, but not its decomposition into exchanged and produced entropy. S_e depends on the heat actually exchanged and the external temperatures; S_i then follows from ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Precisely which operation does the Kelvin–Planck statement forbid?",
      "choices": [
        "Converting work received into heat over a cycle.",
        "Receiving heat Q > 0 and supplying work W = −Q during a noncyclic isothermal expansion of an ideal gas.",
        "Supplying work over a cycle by extracting heat from the hot reservoir and rejecting some to the cold reservoir.",
        "Completing a cycle whose sole effect is to extract heat Q > 0 from a single reservoir and supply W = −Q to the surroundings."
      ],
      "explanations": [
        "Incorrect: converting work into heat is allowed. The prohibition concerns complete conversion of heat into work with a single reservoir and no other effect.",
        "Incorrect: this expansion does not return the gas to its initial state. The cyclic condition in the statement is essential.",
        "Incorrect: this is the operation of a two-reservoir engine, which is possible if its efficiency respects the Carnot bound.",
        "Correct: the first law would allow this balance Q + W = 0, but the second law forbids this cyclic single-reservoir operation. With the course convention, supplying work corresponds to W < 0."
      ]
    },
    "l6-vf1": {
      "question": "A quasi-static compression is necessarily locally reversible.",
      "choices": [
        "True",
        "False"
      ],
      "explanations": [
        "Incorrect: a quasi-static compression may, for example, involve friction. Friction dissipates energy and leaves a trace in the gas or its surroundings even if the gas stays close to equilibrium.",
        "Correct: being quasi-static is insufficient. Dissipation must also be eliminated and exchanges driven by infinitesimal differences in pressure, temperature or chemical potential."
      ]
    },
    "l6-q7": {
      "question": "Which sequence describes the Carnot engine cycle of an ideal gas, with all branches locally reversible?",
      "choices": [
        "Isothermal expansion at T_H, reversible adiabatic expansion, isothermal compression at T_C, then reversible adiabatic compression.",
        "Isothermal expansion at T_H, isochoric cooling, isothermal compression at T_C, then isochoric heating.",
        "Isothermal expansion at T_C, adiabatic compression, isothermal compression at T_H, then adiabatic expansion."
      ],
      "explanations": [
        "Correct: heat is exchanged along the two locally reversible isotherms; the adiabats connect the two temperatures without heat exchange. The engine cycle is traversed clockwise in the (V, P) diagram.",
        "Incorrect: in the Carnot cycle the connections between the isotherms are adiabatic, not isochoric. Isochoric branches would change the cycle and its heat exchanges.",
        "Incorrect: this sequence describes the Carnot cycle traversed in reverse. The machine then receives work to extract heat from the cold reservoir and reject heat to the hot reservoir."
      ]
    },
    "l6-vf2": {
      "question": "The second law fixes the thermodynamically allowed direction of evolution, but by itself determines neither its duration nor transport coefficients.",
      "choices": [
        "True",
        "False"
      ],
      "explanations": [
        "Correct: it constrains processes and characterizes equilibria under the course assumptions. It provides neither relaxation times nor thermal conductivity, viscosity or diffusion coefficients.",
        "Incorrect: the second law is not a complete dynamical equation. Additional laws are needed to describe the rate of evolution and the intermediate states of an abrupt process."
      ]
    }
  },
  "de": {
    "l6-q1": {
      "question": "Was verlangt in dieser Lektion die globale Reversibilität einer Zustandsänderung?",
      "choices": [
        "Dass das System allein seinen Anfangszustand wieder erreichen kann, unabhängig von Änderungen seiner Umgebung.",
        "Dass eine Rückführung das System und seine gesamte Umgebung wiederherstellen kann, ohne eine weitere Änderung zu hinterlassen.",
        "Dass die Rückführung zwingend denselben Weg in umgekehrter Richtung durchläuft.",
        "Dass die Zustandsänderung quasistatisch ist und das System bei jedem Schritt nahe am Gleichgewicht bleibt."
      ],
      "explanations": [
        "Falsch: Die Wiederherstellung des Systems allein kann eine Spur in einem Wärmereservoir oder einer Arbeitsquelle hinterlassen. Auch die gesamte Umgebung muss wiederhergestellt werden.",
        "Richtig: Es genügt, wenn mindestens ein Rückführungsverfahren alle Änderungen des Systems und seiner Umgebung beseitigt. Die globale Definition schreibt den Rückweg nicht vor.",
        "Falsch: Das Zurückverfolgen des Weges betrifft die lokale Reversibilität. Die globale Definition erlaubt einen anderen Rückweg.",
        "Falsch: Quasistatik genügt nicht. Reibung kann weiterhin auftreten und die vollständige Wiederherstellung des Systems und seiner Umgebung verhindern."
      ]
    },
    "l6-q11": {
      "question": "Ein geschlossenes System gibt 2 400 J an ein Wärmereservoir bei 300 K ab. Seine Entropieänderung beträgt ΔS = −6 J/K. Wie groß sind seine ausgetauschte Entropie S_e und seine produzierte Entropie S_i?",
      "choices": [
        "S_e = −8 J/K und S_i = +2 J/K.",
        "S_e = +8 J/K und S_i = +2 J/K.",
        "S_e = −6 J/K und S_i = 0 J/K.",
        "S_e = −8 J/K und S_i = +14 J/K."
      ],
      "explanations": [
        "Richtig: Q = −2 400 J, also S_e = Q/T_ext = −8 J/K. Die Bilanz ΔS = S_e + S_i ergibt S_i = +2 J/K. Das Reservoir gewinnt 8 J/K: Die Gesamtentropie wächst um 2 J/K, sofern die übrigen Vorrichtungen ihre Entropie nicht ändern.",
        "Falsch: S_e wird aus Sicht des Systems gezählt, das Wärme abgibt: S_e = −2 400/300 = −8 J/K. Die +8 J/K entsprechen dem Gewinn des Reservoirs.",
        "Falsch: S_e ist durch Q/T_ext = −8 J/K festgelegt, nicht durch ΔS. Ihre Differenz ist die produzierte Entropie: S_i = ΔS − S_e = +2 J/K.",
        "Falsch: Das Vorzeichen von ΔS muss erhalten bleiben: S_i = (−6) − (−8) = +2 J/K. Die Addition der Beträge 6 und 8 ergibt nicht die Entropieproduktion."
      ]
    },
    "l6-q15": {
      "question": "Die Wärme Q = 1 200 J fließt direkt von einem Wärmereservoir bei 600 K zu einem bei 300 K. Wie groß ist die gesamte Entropieänderung beider Reservoirs?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Richtig: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Die Dauer geht nicht in diese Bilanz ein; eine schlecht leitende Wand verlangsamt den Übertrag, beseitigt aber nicht die Irreversibilität aufgrund der endlichen Temperaturdifferenz.",
        "Falsch: Die Energie bleibt erhalten, doch die Entropieänderungen sind mit den unterschiedlichen Kehrwerten der Temperaturen gewichtet.",
        "Falsch: Dieses Ergebnis addiert die Beträge. Das heiße Reservoir verliert 1 200/600 = 2 J/K, während das kalte 1 200/300 = 4 J/K gewinnt: Zu rechnen ist −2 + 4.",
        "Falsch: +4 J/K ist nur die Änderung des kalten Reservoirs. Die Gesamtbilanz enthält auch die −2 J/K des heißen Reservoirs."
      ]
    },
    "l6-q3": {
      "question": "Warum widerspricht ein gewöhnlicher Kühlschrank nicht der Clausius-Aussage?",
      "choices": [
        "Weil der Wärmeübertrag von kalt nach heiß von einer Arbeitszufuhr aus der Umgebung begleitet wird.",
        "Weil das Arbeitsmedium nach jedem Umlauf seinen Anfangszustand wieder erreicht, wodurch sich die Wirkungen auf beide Reservoirs aufheben.",
        "Weil die algebraische Summe von Wärme und Arbeit über einen Umlauf null ist, was genügt, um diesen Übertrag zu erlauben."
      ],
      "explanations": [
        "Richtig: Clausius verbietet einen Kreisprozess, dessen einzige Wirkung dieser Übertrag von kalt nach heiß wäre. Der Kühlschrank nimmt Arbeit auf: Der Übertrag ist also nicht seine einzige Wirkung.",
        "Falsch: Das Arbeitsmedium kehrt in seinen Anfangszustand zurück, doch die Reservoirs haben Energie ausgetauscht. Der zyklische Betrieb beseitigt diese äußeren Änderungen nicht.",
        "Falsch: Energieerhaltung ist notwendig, reicht aber nicht aus. Der zweite Hauptsatz stellt eine zusätzliche physikalische Bedingung."
      ]
    },
    "l6-q13": {
      "question": "Ein ideales Gas mit der Stoffmenge n Mol durchläuft eine Joule–Gay-Lussac-Expansion vom Volumen v auf V > v in einem starren, adiabatischen Behälter. Das Entfernen der Trennwand verändert die Umgebung nicht. Welche Bilanz ist richtig?",
      "choices": [
        "Q = W = 0, also ΔU_gas = 0 und ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 und ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 und ΔS_tot = 0, obwohl ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 und ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Falsch: Aus Q = W = 0 folgt zwar ΔU_gas = 0, aber nicht ΔS_gas = 0. Fehlender Wärmeübertrag verbietet keine Entropieproduktion: dS = δQ_rev/T gilt nicht für die tatsächliche Wärme dieser irreversiblen Expansion.",
        "Falsch: Das Gas expandiert gegen das Vakuum und gibt daher keine Arbeit ab: W = 0. Mit Q = 0 gilt ΔU_gas = 0. Die Entropie steigt ohne Energiezufuhr.",
        "Falsch: Die Umgebung bleibt unverändert, also ΔS_ext = 0. Keine äußere Abnahme gleicht die Entropiezunahme des Gases aus: ΔS_tot = ΔS_gas > 0.",
        "Richtig: Q = W = 0 ergibt ΔU_gas = 0. Da die Umgebung unverändert bleibt, gilt ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Diese Zunahme beweist, dass keine Rückführung Gas und Umgebung wiederherstellen kann, ohne anderswo eine Spur zu hinterlassen."
      ]
    },
    "l6-q6": {
      "question": "Ein Motor arbeitet zwischen zwei Wärmereservoiren bei 600 K und 300 K und nimmt pro Umlauf Q_H = 1 000 J auf. Wie groß ist die maximal abgegebene Arbeit |W|?",
      "choices": [
        "1 000 J.",
        "Etwa 667 J.",
        "500 J.",
        "Ohne Kenntnis des Arbeitsmediums nicht bestimmbar."
      ],
      "explanations": [
        "Falsch: Die gesamte vom heißen Reservoir aufgenommene Wärme lässt sich über einen Umlauf nicht in Arbeit umwandeln. Der zweite Hauptsatz verlangt, einen Teil an das kalte Reservoir abzugeben, auch wenn ΔU = 0 gilt.",
        "Falsch: 667 J entspricht ungefähr Q_H T_H/(T_H + T_C). Der Carnot-Wirkungsgrad ist jedoch 1 − T_C/T_H und nicht T_H/(T_H + T_C).",
        "Richtig: Der maximale Wirkungsgrad ist der Carnot-Wirkungsgrad: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Somit gilt |W|_max = η_max Q_H = 500 J. Eine lokal reversible Maschine zwischen zwei Reservoiren erreicht diesen Wert.",
        "Falsch: Die Temperaturen beider Reservoirs und die aufgenommene Wärme genügen zur Berechnung der maximalen Arbeit: |W|_max = Q_H (1 − T_C/T_H). Arbeitsmedium und technische Einzelheiten des Motors müssen nicht bekannt sein."
      ]
    },
    "l6-q18": {
      "question": "Zwei Teilsysteme fester Zusammensetzung können innerhalb eines abgeschlossenen Gesamtsystems Energie und Volumen unabhängig austauschen. Was gilt für ihren Gleichgewichtszustand?",
      "choices": [
        "U_1 = U_2 und V_1 = V_2, unabhängig von der Größe der Teilsysteme.",
        "P_1/T_1 = P_2/T_2, ohne dass die Temperaturen gleich sein müssen.",
        "T_1 = T_2, aber die Drücke müssen nicht gleich sein.",
        "T_1 = T_2 und P_1 = P_2."
      ],
      "explanations": [
        "Falsch: Gleichgewicht verlangt keine Gleichheit extensiver Größen. Unterschiedlich große Teilsysteme können im Gleichgewicht verschiedene Energien und Volumina haben.",
        "Falsch: Diese Gleichheit lässt nur den Koeffizienten von dV_1 verschwinden. Da auch die Energie unabhängig umverteilt werden kann, muss der Koeffizient von dU_1 verschwinden: T_1 = T_2. Das verwendete Kriterium ist die Stationarität der Gesamtentropie.",
        "Falsch: Da auch Volumenaustausch erlaubt ist, muss neben thermischem auch mechanisches Gleichgewicht herrschen. Daher müssen ebenfalls die Drücke gleich sein.",
        "Richtig: Im Gleichgewicht ist die Gesamtentropie bezüglich aller erlaubten Umverteilungen stationär: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Da Energie- und Volumenaustausch unabhängig sind, verschwinden beide Koeffizienten: T_1 = T_2 und P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Eine zyklisch arbeitende Maschine nimmt die vorzeichenbehafteten Wärmen Q_k von Reservoiren bei T_k > 0 auf und tauscht Arbeit mit einer idealen Quelle aus. Welche Aussage entspricht der Clausius-Ungleichung und den Definitionen der Lektion?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, mit einem strikt positiven Wert bei einem global irreversiblen Kreisprozess.",
        "Σ_k Q_k/T_k = 0 für jeden Kreisprozess, da die Entropie der Maschine ihren Anfangswert wieder erreicht.",
        "Σ_k Q_k/T_k ≤ 0, und allein die Gleichheit beweist, dass der ursprüngliche Weg lokal reversibel ist.",
        "Σ_k Q_k/T_k ≤ 0; Gleichheit charakterisiert globale Reversibilität, ohne lokale Reversibilität zu beweisen."
      ],
      "explanations": [
        "Falsch: Q_k wird bei Aufnahme durch die Maschine positiv gezählt. Nach dieser Konvention ist die Summe negativ oder null.",
        "Falsch: Über einen Umlauf gilt ΔS_system = 0, aber die ausgetauschte Entropie kann negativ sein und durch positive Entropieproduktion ausgeglichen werden.",
        "Falsch: Das Vorzeichen stimmt, doch im Gleichheitsfall wird mithilfe von Hilfsmaschinen eine globale Rückführung konstruiert. Das zeigt nicht, dass die ursprüngliche Maschine ihren eigenen Weg zurückverfolgen kann.",
        "Richtig: Bei einem lokal reversiblen Kreisprozess gilt Gleichheit. Umgekehrt ermöglicht eine verschwindende Summe die Wiederherstellung der Quellen durch Hilfsmaschinen; eine strikt negative Summe kennzeichnet einen global irreversiblen Kreisprozess."
      ]
    },
    "l6-q9": {
      "question": "Wie konstruiert die Lektion die Entropie aus der Gleichheit ∮ δQ_rev/T = 0 für lokal reversible Kreisprozesse?",
      "choices": [
        "Sie folgert daraus, dass die Wärme Q eine Zustandsfunktion ist.",
        "Sie definiert S(B) − S(A) durch das Integral von δQ_rev/T.",
        "Sie definiert S(B) − S(A) durch das Integral von δQ/T_ext entlang eines beliebigen tatsächlichen Weges."
      ],
      "explanations": [
        "Falsch: δQ_rev/T ist ein exaktes Differential. Die ausgetauschte Wärme bleibt wegabhängig.",
        "Richtig: Zwei lokal reversible Wege, einer davon in Gegenrichtung durchlaufen, bilden einen Kreisprozess mit verschwindendem Integral. So wird die Entropie bis auf eine additive Konstante auf jedem reversibel zusammenhängenden Gebiet definiert; ihre Einheit ist J/K.",
        "Falsch: Auf einem tatsächlichen irreversiblen Weg liefert das Integral von δQ/T_ext die ausgetauschte Entropie, nicht notwendigerweise ΔS. Die Konstruktion verwendet δQ_rev/T auf einem lokal reversiblen Weg."
      ]
    },
    "l6-q2": {
      "question": "Welche Aussage beschreibt lokale Reversibilität richtig?",
      "choices": [
        "Es genügt, dass Anfangs- und Endzustand des Systems Gleichgewichtszustände sind.",
        "Sie folgt automatisch aus jedem Verfahren, das System und Umgebung global wiederherstellt.",
        "Sie verlangt, dass sich jeder Schritt einer Folge von Gleichgewichtszuständen durch eine infinitesimale Änderung der Zwangsbedingungen umkehren lässt.",
        "Sie erlaubt, den Weg des Systems zurückzuverfolgen und dabei die Vorzeichen der Wärme- und Arbeitsüberträge beizubehalten."
      ],
      "explanations": [
        "Falsch: Die Zwischenzustände und die Umkehrbarkeit jedes Schritts sind für die lokale Definition entscheidend.",
        "Falsch: Eine globale Rückführung könnte einen anderen Weg nehmen. Ihre Existenz allein beweist nicht die lokale Reversibilität des ursprünglichen Weges.",
        "Richtig: Dann lässt sich dieselbe Zustandsfolge rückwärts durchlaufen und dabei auch die Umgebung wiederherstellen. Lokale Reversibilität impliziert somit globale Reversibilität.",
        "Falsch: Beim rückwärtigen Durchlaufen eines lokal reversiblen Weges wechseln die thermischen und mechanischen Überträge bei jedem Schritt das Vorzeichen."
      ]
    },
    "l6-q12": {
      "question": "Eine irreversible Zustandsänderung verbindet zwei Gleichgewichtszustände A und B, ihre Zwischenzustände liegen jedoch weit vom Gleichgewicht entfernt. Welche Aussage ist richtig?",
      "choices": [
        "Die Entropieänderung ΔS ist das Integral von δQ_actual/T_ext entlang des tatsächlichen Weges.",
        "Die Entropieänderung ΔS lässt sich auf einem lokal reversiblen Weg zwischen A und B berechnen, während S_e und S_i vom tatsächlichen Prozess abhängen.",
        "Die Zustände A und B allein bestimmen die ausgetauschte Entropie S_e und die produzierte Entropie S_i."
      ],
      "explanations": [
        "Falsch: Dieses Integral liefert S_e, die ausgetauschte Entropie. Die Bilanz lautet ΔS = S_e + S_i: Die tatsächlich ausgetauschte Wärme genügt ohne Berücksichtigung der produzierten Entropie nicht zur Berechnung von ΔS.",
        "Richtig: S ist eine Zustandsfunktion, daher kann ΔS = ∫ δQ_rev/T auf einem lokal reversiblen Weg zwischen denselben Zuständen berechnet werden. Anschließend bestimmt man anhand der tatsächlichen Überträge S_e = ∫ δQ_actual/T_ext und S_i = ΔS − S_e.",
        "Falsch: Die Zustände A und B legen ΔS fest, aber nicht dessen Zerlegung in ausgetauschte und produzierte Entropie. S_e hängt von den tatsächlich ausgetauschten Wärmen und den äußeren Temperaturen ab; S_i folgt dann aus ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Welcher Betrieb wird durch die Kelvin–Planck-Aussage genau verboten?",
      "choices": [
        "Aufgenommene Arbeit während eines Kreisprozesses in Wärme umzuwandeln.",
        "Während einer nichtzyklischen isothermen Expansion eines idealen Gases Wärme Q > 0 aufzunehmen und Arbeit W = −Q abzugeben.",
        "Während eines Kreisprozesses Arbeit abzugeben, indem dem heißen Reservoir Wärme entzogen und ein Teil an das kalte abgegeben wird.",
        "Einen Kreisprozess auszuführen, dessen einzige Wirkung darin besteht, einem einzigen Reservoir Wärme Q > 0 zu entziehen und W = −Q an die Umgebung abzugeben."
      ],
      "explanations": [
        "Falsch: Die Umwandlung von Arbeit in Wärme ist erlaubt. Verboten ist die vollständige Umwandlung von Wärme in Arbeit mit einem einzigen Reservoir und ohne weitere Wirkung.",
        "Falsch: Diese Expansion führt das Gas nicht in seinen Anfangszustand zurück. Die Bedingung des Kreisprozesses ist für die Aussage wesentlich.",
        "Falsch: Dies ist der Betrieb eines Motors mit zwei Wärmereservoiren, der möglich ist, wenn sein Wirkungsgrad die Carnot-Schranke einhält.",
        "Richtig: Der erste Hauptsatz würde die Bilanz Q + W = 0 erlauben, doch der zweite verbietet diesen zyklischen Betrieb mit einem einzigen Reservoir. Mit der Konvention des Kurses entspricht Arbeitsabgabe W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Eine quasistatische Kompression ist notwendigerweise lokal reversibel.",
      "choices": [
        "Wahr",
        "Falsch"
      ],
      "explanations": [
        "Falsch: Eine quasistatische Kompression kann beispielsweise mit Reibung erfolgen. Diese dissipiert Energie und hinterlässt eine Spur im Gas oder seiner Umgebung, selbst wenn das Gas nahe am Gleichgewicht bleibt.",
        "Richtig: Quasistatik allein genügt nicht. Zusätzlich müssen Dissipation beseitigt und Überträge durch infinitesimale Druck-, Temperatur- oder chemische Potentialdifferenzen angetrieben werden."
      ]
    },
    "l6-q7": {
      "question": "Welche Abfolge beschreibt den Carnot-Kreisprozess eines idealen Gases im Motorbetrieb, wenn alle Teilprozesse lokal reversibel sind?",
      "choices": [
        "Isotherme Expansion bei T_H, reversible adiabatische Expansion, isotherme Kompression bei T_C, dann reversible adiabatische Kompression.",
        "Isotherme Expansion bei T_H, isochore Abkühlung, isotherme Kompression bei T_C, dann isochore Erwärmung.",
        "Isotherme Expansion bei T_C, adiabatische Kompression, isotherme Kompression bei T_H, dann adiabatische Expansion."
      ],
      "explanations": [
        "Richtig: Der Wärmeübertrag findet auf den beiden lokal reversiblen Isothermen statt; die Adiabaten verbinden die beiden Temperaturen ohne Wärmeübertrag. Im Motorbetrieb wird der Kreisprozess im (V, P)-Diagramm im Uhrzeigersinn durchlaufen.",
        "Falsch: Im Carnot-Kreisprozess sind die Verbindungen zwischen den Isothermen adiabatisch, nicht isochor. Isochore Teilprozesse würden den Kreisprozess und seine Wärmeüberträge verändern.",
        "Falsch: Diese Abfolge beschreibt den rückwärts durchlaufenen Carnot-Kreisprozess. Die Maschine nimmt dann Arbeit auf, um dem kalten Reservoir Wärme zu entziehen und dem heißen Wärme zuzuführen."
      ]
    },
    "l6-vf2": {
      "question": "Der zweite Hauptsatz legt die thermodynamisch zulässige Entwicklungsrichtung fest, bestimmt aber allein weder ihre Dauer noch die Transportkoeffizienten.",
      "choices": [
        "Wahr",
        "Falsch"
      ],
      "explanations": [
        "Richtig: Er schränkt Zustandsänderungen ein und charakterisiert Gleichgewichte unter den Annahmen des Kurses. Er liefert weder Relaxationszeiten noch Wärmeleitfähigkeit, Viskosität oder Diffusionskoeffizienten.",
        "Falsch: Der zweite Hauptsatz ist keine vollständige Bewegungsgleichung. Zusätzliche Gesetze sind nötig, um die Entwicklungsgeschwindigkeit und die Zwischenzustände einer abrupten Zustandsänderung zu beschreiben."
      ]
    }
  },
  "es": {
    "l6-q1": {
      "question": "En esta lección, ¿qué exige la reversibilidad global de una transformación?",
      "choices": [
        "Que pueda restaurarse el estado inicial del sistema, cualesquiera que sean los cambios en su exterior.",
        "Que un retorno pueda restaurar el sistema y todo su exterior, sin dejar ningún otro cambio.",
        "Que el retorno recorra obligatoriamente el mismo camino en sentido inverso.",
        "Que la transformación sea cuasiestática y que el sistema permanezca cerca del equilibrio en cada etapa."
      ],
      "explanations": [
        "Falso: restaurar el sistema solo puede dejar una huella en un termostato o una fuente de trabajo. También hay que restaurar todo el exterior.",
        "Correcto: basta con que al menos un procedimiento de retorno borre todas las modificaciones del sistema y de su exterior. La definición global no impone el camino de ese retorno.",
        "Falso: recorrer de nuevo el camino en sentido inverso corresponde a la reversibilidad local. La definición global permite otro camino de retorno.",
        "Falso: el carácter cuasiestático no basta. Puede persistir el rozamiento e impedir la restauración completa del sistema y de su exterior."
      ]
    },
    "l6-q11": {
      "question": "Un sistema cerrado cede 2 400 J a un termostato a 300 K. Su variación de entropía es ΔS = −6 J/K. ¿Cuáles son su entropía intercambiada S_e y su entropía producida S_i?",
      "choices": [
        "S_e = −8 J/K y S_i = +2 J/K.",
        "S_e = +8 J/K y S_i = +2 J/K.",
        "S_e = −6 J/K y S_i = 0 J/K.",
        "S_e = −8 J/K y S_i = +14 J/K."
      ],
      "explanations": [
        "Correcto: Q = −2 400 J, por lo que S_e = Q/T_ext = −8 J/K. El balance ΔS = S_e + S_i da S_i = +2 J/K. El termostato gana 8 J/K: la entropía total aumenta en 2 J/K si los demás dispositivos no cambian de entropía.",
        "Falso: S_e se cuenta desde el punto de vista del sistema, que cede calor: S_e = −2 400/300 = −8 J/K. Los +8 J/K corresponden a la ganancia del termostato.",
        "Falso: S_e viene fijada por Q/T_ext = −8 J/K, no por ΔS. Su diferencia es la entropía producida: S_i = ΔS − S_e = +2 J/K.",
        "Falso: hay que conservar el signo de ΔS: S_i = (−6) − (−8) = +2 J/K. Sumar los valores absolutos 6 y 8 no da la producción de entropía."
      ]
    },
    "l6-q15": {
      "question": "Un calor Q = 1 200 J pasa directamente de un termostato a 600 K a otro a 300 K. ¿Cuál es la variación de entropía total de ambos termostatos?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Correcto: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. La duración no aparece en este balance; una pared poco conductora ralentiza la transferencia sin eliminar la irreversibilidad debida a la diferencia finita de temperatura.",
        "Falso: la energía se conserva, pero las variaciones de entropía están ponderadas por las inversas de las temperaturas, que son distintas.",
        "Falso: este resultado suma los valores absolutos. El termostato caliente pierde 1 200/600 = 2 J/K, mientras que el frío gana 1 200/300 = 4 J/K: hay que calcular −2 + 4.",
        "Falso: +4 J/K es solo la variación del termostato frío. El balance total también incluye los −2 J/K del termostato caliente."
      ]
    },
    "l6-q3": {
      "question": "¿Por qué un refrigerador ordinario no contradice el enunciado de Clausius?",
      "choices": [
        "Porque la transferencia de calor del foco frío al caliente va acompañada de un aporte de trabajo exterior.",
        "Porque el fluido recupera su estado inicial en cada ciclo, lo que anula los efectos sobre ambos termostatos.",
        "Porque la suma algebraica de los calores y del trabajo es nula en un ciclo, lo que basta para permitir esta transferencia."
      ],
      "explanations": [
        "Correcto: Clausius prohíbe una transformación cíclica cuyo único efecto sea esa transferencia del foco frío al caliente. El refrigerador recibe trabajo: por tanto, esa transferencia no es su único efecto.",
        "Falso: el fluido vuelve a su estado inicial, pero los termostatos han intercambiado energía. El carácter cíclico no elimina esos cambios exteriores.",
        "Falso: la conservación de la energía es necesaria, pero no basta. El segundo principio impone una restricción física adicional."
      ]
    },
    "l6-q13": {
      "question": "Un gas ideal de n moles experimenta una expansión de Joule–Gay-Lussac del volumen v al volumen V > v en un recinto rígido y adiabático. La retirada de la pared no modifica el exterior. ¿Qué balance es correcto?",
      "choices": [
        "Q = W = 0, por lo que ΔU_gas = 0 y ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 y ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 y ΔS_tot = 0, aunque ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 y ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Falso: Q = W = 0 sí implica ΔU_gas = 0, pero no ΔS_gas = 0. La ausencia de intercambio térmico no impide la producción de entropía: la relación dS = δQ_rev/T no se aplica al calor real de esta expansión irreversible.",
        "Falso: el gas se expande contra el vacío; por tanto, no suministra trabajo, W = 0. Con Q = 0, tenemos ΔU_gas = 0. La entropía aumenta sin aporte de energía.",
        "Falso: el exterior permanece inalterado, por lo que ΔS_ext = 0. Ninguna disminución exterior compensa el aumento de entropía del gas: ΔS_tot = ΔS_gas > 0.",
        "Correcto: Q = W = 0 da ΔU_gas = 0. Como el exterior no se modifica, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Este aumento demuestra que ningún retorno puede restaurar el gas y su exterior sin dejar una huella en otro lugar."
      ]
    },
    "l6-q6": {
      "question": "Un motor ditérmico funciona entre 600 K y 300 K y recibe Q_H = 1 000 J por ciclo. ¿Cuál es el valor máximo del trabajo suministrado |W|?",
      "choices": [
        "1 000 J.",
        "Aproximadamente 667 J.",
        "500 J.",
        "Es imposible determinarlo sin conocer el fluido de trabajo."
      ],
      "explanations": [
        "Falso: no se puede convertir en trabajo todo el calor recibido del termostato caliente durante un ciclo. El segundo principio exige ceder una parte al termostato frío, aunque ΔU = 0.",
        "Falso: 667 J corresponde aproximadamente a Q_H T_H/(T_H + T_C). Pero el rendimiento de Carnot es 1 − T_C/T_H, no T_H/(T_H + T_C).",
        "Correcto: el rendimiento máximo es el de Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Así, |W|_max = η_max Q_H = 500 J. Una máquina ditérmica localmente reversible alcanza este valor.",
        "Falso: las temperaturas de ambos termostatos y el calor recibido bastan para calcular el trabajo máximo: |W|_max = Q_H (1 − T_C/T_H). No hace falta conocer el fluido ni los detalles del motor."
      ]
    },
    "l6-q18": {
      "question": "Dos subsistemas de composición fija pueden intercambiar energía y volumen de forma independiente dentro de un conjunto aislado. ¿Qué puede afirmarse sobre su estado de equilibrio?",
      "choices": [
        "U_1 = U_2 y V_1 = V_2, cualesquiera que sean los tamaños de los subsistemas.",
        "P_1/T_1 = P_2/T_2, sin que las temperaturas tengan que ser iguales.",
        "T_1 = T_2, pero las presiones no son necesariamente iguales.",
        "T_1 = T_2 y P_1 = P_2."
      ],
      "explanations": [
        "Falso: el equilibrio no exige la igualdad de las magnitudes extensivas. Dos subsistemas de tamaños distintos pueden tener energías y volúmenes distintos en el equilibrio.",
        "Falso: esta igualdad solo anula el coeficiente de dV_1. Como la energía también puede redistribuirse de forma independiente, el coeficiente de dU_1 debe anularse: T_1 = T_2. El criterio utilizado es la estacionariedad de la entropía total.",
        "Falso: puesto que también se permiten intercambios de volumen, el equilibrio debe ser tanto mecánico como térmico. Por tanto, las presiones también deben ser iguales.",
        "Correcto: en el equilibrio, la entropía total es estacionaria frente a todas las redistribuciones permitidas: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Como los intercambios de energía y de volumen son independientes, ambos coeficientes se anulan: T_1 = T_2 y P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Una máquina cíclica recibe los calores algebraicos Q_k de termostatos a T_k > 0 e intercambia trabajo con una fuente ideal. ¿Qué afirmación respeta la desigualdad de Clausius y las definiciones de la lección?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, con un valor estrictamente positivo para un ciclo globalmente irreversible.",
        "Σ_k Q_k/T_k = 0 para cualquier ciclo, puesto que la entropía de la máquina recupera su valor inicial.",
        "Σ_k Q_k/T_k ≤ 0, y la igualdad demuestra por sí sola que el camino inicial es localmente reversible.",
        "Σ_k Q_k/T_k ≤ 0; la igualdad caracteriza la reversibilidad global, sin demostrar la reversibilidad local."
      ],
      "explanations": [
        "Falso: los Q_k se cuentan positivamente cuando la máquina los recibe. Con este convenio, la suma es negativa o nula.",
        "Falso: ΔS_system = 0 en un ciclo, pero la entropía intercambiada puede ser negativa y quedar compensada por una producción positiva de entropía.",
        "Falso: el signo es correcto, pero el caso de igualdad construye un retorno global mediante máquinas auxiliares. No demuestra que la máquina inicial pueda recorrer su propio camino en sentido inverso.",
        "Correcto: un ciclo localmente reversible cumple la igualdad. Recíprocamente, una suma nula permite restaurar las fuentes mediante máquinas auxiliares; una suma estrictamente negativa indica un ciclo globalmente irreversible."
      ]
    },
    "l6-q9": {
      "question": "¿Cómo construye la lección la entropía a partir de la igualdad ∮ δQ_rev/T = 0 en los ciclos localmente reversibles?",
      "choices": [
        "Deduce que el calor Q es una función de estado.",
        "Define S(B) − S(A) mediante la integral de δQ_rev/T.",
        "Define S(B) − S(A) mediante la integral de δQ/T_ext sobre cualquier camino real."
      ],
      "explanations": [
        "Falso: es δQ_rev/T lo que constituye una diferencial exacta. El calor intercambiado sigue dependiendo del camino.",
        "Correcto: dos caminos localmente reversibles, uno de ellos recorrido en sentido inverso, forman un ciclo de integral nula. La entropía queda así definida salvo una constante aditiva en cada dominio reversiblemente conexo y se expresa en J/K.",
        "Falso: sobre un camino real irreversible, la integral de δQ/T_ext da la entropía intercambiada, no necesariamente ΔS. La construcción utiliza δQ_rev/T sobre un camino localmente reversible."
      ]
    },
    "l6-q2": {
      "question": "¿Qué afirmación describe correctamente la reversibilidad local?",
      "choices": [
        "Basta con que los estados inicial y final del sistema sean estados de equilibrio.",
        "Se deduce automáticamente de cualquier procedimiento que restaure globalmente el sistema y su exterior.",
        "Exige invertir cada etapa de una sucesión de estados de equilibrio mediante una modificación infinitesimal de las restricciones.",
        "Permite recorrer el camino del sistema en sentido inverso conservando los mismos signos para los intercambios de calor y trabajo."
      ],
      "explanations": [
        "Falso: los estados intermedios y la posibilidad de invertir cada etapa son esenciales para la definición local.",
        "Falso: un retorno global podría seguir otro camino. Su existencia no demuestra por sí sola que el camino inicial sea localmente reversible.",
        "Correcto: se puede entonces recorrer la misma sucesión de estados en sentido inverso, restaurando también el exterior. Por tanto, la reversibilidad local implica la reversibilidad global.",
        "Falso: al recorrer en sentido inverso un camino localmente reversible, los intercambios térmicos y mecánicos cambian de signo en cada etapa."
      ]
    },
    "l6-q12": {
      "question": "Una transformación irreversible conecta dos estados de equilibrio A y B, pero sus estados intermedios están lejos del equilibrio. ¿Qué afirmación es correcta?",
      "choices": [
        "La variación de entropía ΔS es la integral de δQ_actual/T_ext sobre el camino real.",
        "La variación de entropía ΔS puede calcularse sobre un camino localmente reversible entre A y B, mientras que S_e y S_i dependen del proceso real.",
        "Los estados A y B determinan por sí solos la entropía intercambiada S_e y la entropía producida S_i."
      ],
      "explanations": [
        "Falso: esta integral da S_e, la entropía intercambiada. El balance es ΔS = S_e + S_i: el calor realmente intercambiado no basta para calcular ΔS sin tener en cuenta la entropía producida.",
        "Correcto: S es una función de estado, por lo que ΔS = ∫ δQ_rev/T puede calcularse sobre un camino localmente reversible que conecte los mismos estados. Después se vuelve a los intercambios reales para determinar S_e = ∫ δQ_actual/T_ext y S_i = ΔS − S_e.",
        "Falso: los estados A y B fijan ΔS, pero no su descomposición en entropía intercambiada y producida. S_e depende de los calores realmente intercambiados y de las temperaturas exteriores; S_i se deduce entonces del balance ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "¿Qué funcionamiento prohíbe exactamente el enunciado de Kelvin–Planck?",
      "choices": [
        "Convertir el trabajo recibido en calor durante un ciclo.",
        "Recibir un calor Q > 0 y suministrar un trabajo W = −Q durante una expansión isotérmica no cíclica de un gas ideal.",
        "Suministrar trabajo en un ciclo extrayendo calor del termostato caliente y cediendo calor al frío.",
        "Realizar un ciclo cuyo único efecto sea extraer un calor Q > 0 de un único termostato y suministrar W = −Q al exterior."
      ],
      "explanations": [
        "Falso: está permitido convertir trabajo en calor. La prohibición se refiere a convertir íntegramente calor en trabajo con un único termostato y sin ningún otro efecto.",
        "Falso: esta expansión no devuelve el gas a su estado inicial. La condición cíclica del enunciado es esencial.",
        "Falso: es el funcionamiento de un motor ditérmico, posible si su rendimiento respeta la cota de Carnot.",
        "Correcto: el primer principio permitiría este balance Q + W = 0, pero el segundo prohíbe este funcionamiento monotérmico cíclico. Con el convenio del curso, suministrar trabajo corresponde a W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Una compresión cuasiestática es necesariamente localmente reversible.",
      "choices": [
        "Verdadero",
        "Falso"
      ],
      "explanations": [
        "Falso: una compresión cuasiestática puede realizarse, por ejemplo, con rozamiento. Este disipa energía y deja una huella en el gas o en su exterior, aunque el gas permanezca cerca del equilibrio.",
        "Correcto: el carácter cuasiestático no basta. También hay que eliminar las disipaciones y realizar los intercambios con diferencias infinitesimales de presión, temperatura o potencial químico."
      ]
    },
    "l6-q7": {
      "question": "¿Qué sucesión describe el ciclo de Carnot de un gas ideal que funciona como motor, siendo todas sus ramas localmente reversibles?",
      "choices": [
        "Una expansión isotérmica a T_H, una expansión adiabática reversible, una compresión isotérmica a T_C y después una compresión adiabática reversible.",
        "Una expansión isotérmica a T_H, un enfriamiento isócoro, una compresión isotérmica a T_C y después un calentamiento isócoro.",
        "Una expansión isotérmica a T_C, una compresión adiabática, una compresión isotérmica a T_H y después una expansión adiabática."
      ],
      "explanations": [
        "Correcto: los intercambios de calor tienen lugar en las dos isotermas localmente reversibles; las adiabáticas conectan ambas temperaturas sin intercambio térmico. El ciclo motor se recorre en sentido horario en el diagrama (V, P).",
        "Falso: las conexiones entre las isotermas del ciclo de Carnot son adiabáticas, no isócoras. Unas ramas isócoras modificarían el ciclo y sus intercambios de calor.",
        "Falso: esta sucesión describe el ciclo de Carnot recorrido en sentido inverso. La máquina recibe entonces trabajo para extraer calor del termostato frío y cederlo al caliente."
      ]
    },
    "l6-vf2": {
      "question": "El segundo principio fija el sentido termodinámicamente admisible de las evoluciones, pero no determina por sí solo su duración ni los coeficientes de transporte.",
      "choices": [
        "Verdadero",
        "Falso"
      ],
      "explanations": [
        "Correcto: restringe las transformaciones y caracteriza los equilibrios bajo las hipótesis del curso. No proporciona el tiempo de relajación, la conductividad térmica, la viscosidad ni el coeficiente de difusión.",
        "Falso: el segundo principio no es una ecuación completa de la dinámica. Se necesitan leyes adicionales para describir la velocidad de evolución y los estados intermedios de una transformación brusca."
      ]
    }
  },
  "pt": {
    "l6-q1": {
      "question": "Nesta lição, o que exige a reversibilidade global de uma transformação?",
      "choices": [
        "Que apenas o sistema possa recuperar o estado inicial, quaisquer que sejam as alterações do seu exterior.",
        "Que um regresso possa restaurar o sistema e todo o seu exterior, sem deixar qualquer outra alteração.",
        "Que o regresso percorra obrigatoriamente o mesmo caminho no sentido inverso.",
        "Que a transformação seja quase-estática e que o sistema permaneça próximo do equilíbrio em cada etapa."
      ],
      "explanations": [
        "Falso: restaurar apenas o sistema pode deixar um vestígio num termostato ou numa fonte de trabalho. É também necessário restaurar todo o exterior.",
        "Correto: basta que pelo menos um procedimento de regresso apague todas as modificações do sistema e do seu exterior. A definição global não impõe o caminho desse regresso.",
        "Falso: percorrer de novo o caminho no sentido inverso diz respeito à reversibilidade local. A definição global permite outro caminho de regresso.",
        "Falso: o caráter quase-estático não basta. O atrito pode subsistir e impedir a restauração completa do sistema e do seu exterior."
      ]
    },
    "l6-q11": {
      "question": "Um sistema fechado cede 2 400 J a um termostato a 300 K. A sua variação de entropia é ΔS = −6 J/K. Quais são a sua entropia trocada S_e e a sua entropia produzida S_i?",
      "choices": [
        "S_e = −8 J/K e S_i = +2 J/K.",
        "S_e = +8 J/K e S_i = +2 J/K.",
        "S_e = −6 J/K e S_i = 0 J/K.",
        "S_e = −8 J/K e S_i = +14 J/K."
      ],
      "explanations": [
        "Correto: Q = −2 400 J, pelo que S_e = Q/T_ext = −8 J/K. O balanço ΔS = S_e + S_i dá S_i = +2 J/K. O termostato ganha 8 J/K: a entropia total aumenta 2 J/K se os outros dispositivos não variarem de entropia.",
        "Falso: S_e é contada do ponto de vista do sistema, que cede calor: S_e = −2 400/300 = −8 J/K. Os +8 J/K correspondem ao ganho do termostato.",
        "Falso: S_e é fixada por Q/T_ext = −8 J/K, não por ΔS. A diferença é a entropia produzida: S_i = ΔS − S_e = +2 J/K.",
        "Falso: é necessário conservar o sinal de ΔS: S_i = (−6) − (−8) = +2 J/K. Somar os valores absolutos 6 e 8 não dá a produção de entropia."
      ]
    },
    "l6-q15": {
      "question": "Um calor Q = 1 200 J passa diretamente de um termostato a 600 K para um termostato a 300 K. Qual é a variação da entropia total dos dois termostatos?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Correto: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. A duração não aparece neste balanço; uma parede pouco condutora abranda a transferência sem eliminar a irreversibilidade devida à diferença finita de temperatura.",
        "Falso: a energia conserva-se, mas as variações de entropia são ponderadas pelos inversos das temperaturas, que são diferentes.",
        "Falso: este resultado soma os valores absolutos. O termostato quente perde 1 200/600 = 2 J/K, enquanto o frio ganha 1 200/300 = 4 J/K: é necessário calcular −2 + 4.",
        "Falso: +4 J/K é apenas a variação do termostato frio. O balanço total também inclui os −2 J/K do termostato quente."
      ]
    },
    "l6-q3": {
      "question": "Porque é que um frigorífico comum não contradiz o enunciado de Clausius?",
      "choices": [
        "Porque a transferência de calor do frio para o quente é acompanhada por um fornecimento de trabalho exterior.",
        "Porque o fluido recupera o estado inicial em cada ciclo, o que anula os efeitos sobre os dois termostatos.",
        "Porque a soma algébrica dos calores e do trabalho é nula num ciclo, o que basta para permitir esta transferência."
      ],
      "explanations": [
        "Correto: Clausius proíbe uma transformação cíclica cujo único efeito seja essa transferência do frio para o quente. O frigorífico recebe trabalho: a transferência não é, portanto, o seu único efeito.",
        "Falso: o fluido regressa ao estado inicial, mas os termostatos trocaram energia. O caráter cíclico não elimina essas alterações exteriores.",
        "Falso: a conservação da energia é necessária, mas não basta. O segundo princípio impõe uma restrição física adicional."
      ]
    },
    "l6-q13": {
      "question": "Um gás ideal de n moles sofre uma expansão de Joule–Gay-Lussac do volume v para o volume V > v num recipiente rígido e adiabático. A remoção da parede não modifica o exterior. Qual é o balanço correto?",
      "choices": [
        "Q = W = 0, pelo que ΔU_gas = 0 e ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 e ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 e ΔS_tot = 0, embora ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 e ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Falso: Q = W = 0 implica efetivamente ΔU_gas = 0, mas não ΔS_gas = 0. A ausência de troca térmica não impede a produção de entropia: a relação dS = δQ_rev/T não se aplica ao calor real desta expansão irreversível.",
        "Falso: o gás expande-se contra o vácuo; não fornece, portanto, trabalho, W = 0. Com Q = 0, temos ΔU_gas = 0. A entropia aumenta sem fornecimento de energia.",
        "Falso: o exterior permanece inalterado, pelo que ΔS_ext = 0. Nenhuma diminuição exterior compensa o aumento de entropia do gás: ΔS_tot = ΔS_gas > 0.",
        "Correto: Q = W = 0 dá ΔU_gas = 0. Como o exterior não é modificado, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Este aumento prova que nenhum regresso pode restaurar o gás e o seu exterior sem deixar um vestígio noutro lugar."
      ]
    },
    "l6-q6": {
      "question": "Um motor ditérmico funciona entre 600 K e 300 K e recebe Q_H = 1 000 J por ciclo. Qual é o valor máximo do trabalho fornecido |W|?",
      "choices": [
        "1 000 J.",
        "Cerca de 667 J.",
        "500 J.",
        "É impossível determinar sem conhecer o fluido de trabalho."
      ],
      "explanations": [
        "Falso: não se pode converter em trabalho todo o calor recebido do termostato quente num ciclo. O segundo princípio exige ceder uma parte ao termostato frio, mesmo que ΔU = 0.",
        "Falso: 667 J corresponde aproximadamente a Q_H T_H/(T_H + T_C). Porém, o rendimento de Carnot é 1 − T_C/T_H, e não T_H/(T_H + T_C).",
        "Correto: o rendimento máximo é o de Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Assim, |W|_max = η_max Q_H = 500 J. Este valor é atingido por uma máquina ditérmica localmente reversível.",
        "Falso: as temperaturas dos dois termostatos e o calor recebido bastam para calcular o trabalho máximo: |W|_max = Q_H (1 − T_C/T_H). Não é necessário conhecer o fluido nem os pormenores do motor."
      ]
    },
    "l6-q18": {
      "question": "Dois subsistemas de composição fixa podem trocar energia e volume independentemente num conjunto isolado. O que se pode afirmar sobre o seu estado de equilíbrio?",
      "choices": [
        "U_1 = U_2 e V_1 = V_2, quaisquer que sejam as dimensões dos subsistemas.",
        "P_1/T_1 = P_2/T_2, sem que as temperaturas sejam necessariamente iguais.",
        "T_1 = T_2, mas as pressões não são necessariamente iguais.",
        "T_1 = T_2 e P_1 = P_2."
      ],
      "explanations": [
        "Falso: o equilíbrio não impõe a igualdade das grandezas extensivas. Dois subsistemas de dimensões diferentes podem ter energias e volumes diferentes no equilíbrio.",
        "Falso: esta igualdade anula apenas o coeficiente de dV_1. Como a energia também pode ser redistribuída independentemente, o coeficiente de dU_1 tem de se anular: T_1 = T_2. O critério utilizado é a estacionariedade da entropia total.",
        "Falso: como as trocas de volume também são permitidas, o equilíbrio tem de ser tanto mecânico como térmico. As pressões também têm, portanto, de ser iguais.",
        "Correto: no equilíbrio, a entropia total é estacionária para todas as redistribuições permitidas: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Como as trocas de energia e de volume são independentes, os dois coeficientes anulam-se: T_1 = T_2 e P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Uma máquina cíclica recebe os calores algébricos Q_k de termostatos a T_k > 0 e troca trabalho com uma fonte ideal. Que afirmação respeita a desigualdade de Clausius e as definições da lição?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, com um valor estritamente positivo para um ciclo globalmente irreversível.",
        "Σ_k Q_k/T_k = 0 para qualquer ciclo, pois a entropia da máquina recupera o valor inicial.",
        "Σ_k Q_k/T_k ≤ 0, e a igualdade prova, por si só, que o caminho inicial é localmente reversível.",
        "Σ_k Q_k/T_k ≤ 0; a igualdade caracteriza a reversibilidade global, sem provar a reversibilidade local."
      ],
      "explanations": [
        "Falso: os Q_k são contados positivamente quando são recebidos pela máquina. Com esta convenção, a soma é negativa ou nula.",
        "Falso: ΔS_system = 0 num ciclo, mas a entropia trocada pode ser negativa e compensada por uma produção positiva de entropia.",
        "Falso: o sinal está correto, mas o caso de igualdade constrói um regresso global com máquinas auxiliares. Não mostra que a máquina inicial possa voltar a percorrer o seu próprio caminho no sentido inverso.",
        "Correto: um ciclo localmente reversível verifica a igualdade. Reciprocamente, uma soma nula permite restaurar as fontes através de máquinas auxiliares; uma soma estritamente negativa indica um ciclo globalmente irreversível."
      ]
    },
    "l6-q9": {
      "question": "Como é que a lição constrói a entropia a partir da igualdade ∮ δQ_rev/T = 0 nos ciclos localmente reversíveis?",
      "choices": [
        "Deduz que o calor Q é uma função de estado.",
        "Define S(B) − S(A) pelo integral de δQ_rev/T.",
        "Define S(B) − S(A) pelo integral de δQ/T_ext sobre qualquer caminho real."
      ],
      "explanations": [
        "Falso: é δQ_rev/T que é uma diferencial exata. O calor trocado continua a depender do caminho.",
        "Correto: dois caminhos localmente reversíveis, um dos quais percorrido no sentido inverso, formam um ciclo de integral nulo. A entropia fica assim definida a menos de uma constante aditiva em cada domínio reversivelmente conexo e exprime-se em J/K.",
        "Falso: num caminho real irreversível, o integral de δQ/T_ext dá a entropia trocada, não necessariamente ΔS. A construção utiliza δQ_rev/T num caminho localmente reversível."
      ]
    },
    "l6-q2": {
      "question": "Que afirmação descreve corretamente a reversibilidade local?",
      "choices": [
        "Basta que os estados inicial e final do sistema sejam estados de equilíbrio.",
        "Decorre automaticamente de qualquer procedimento que restaure globalmente o sistema e o seu exterior.",
        "Exige inverter cada etapa de uma sucessão de estados de equilíbrio por uma modificação infinitesimal das restrições.",
        "Permite voltar a percorrer o caminho do sistema no sentido inverso, conservando os mesmos sinais para as trocas de calor e trabalho."
      ],
      "explanations": [
        "Falso: os estados intermédios e a possibilidade de inverter cada etapa são essenciais à definição local.",
        "Falso: um regresso global poderia seguir outro caminho. A sua existência não prova, por si só, que o caminho inicial seja localmente reversível.",
        "Correto: pode então percorrer-se a mesma sucessão de estados no sentido inverso, restaurando também o exterior. A reversibilidade local implica, portanto, a reversibilidade global.",
        "Falso: ao percorrer um caminho localmente reversível no sentido inverso, as trocas térmicas e mecânicas mudam de sinal em cada etapa."
      ]
    },
    "l6-q12": {
      "question": "Uma transformação irreversível liga dois estados de equilíbrio A e B, mas os seus estados intermédios estão longe do equilíbrio. Que afirmação está correta?",
      "choices": [
        "A variação de entropia ΔS é o integral de δQ_actual/T_ext no caminho real.",
        "A variação de entropia ΔS pode ser calculada num caminho localmente reversível entre A e B, enquanto S_e e S_i dependem do processo real.",
        "Os estados A e B determinam, por si só, a entropia trocada S_e e a entropia produzida S_i."
      ],
      "explanations": [
        "Falso: este integral dá S_e, a entropia trocada. O balanço é ΔS = S_e + S_i: o calor efetivamente trocado não basta para calcular ΔS sem ter em conta a entropia produzida.",
        "Correto: S é uma função de estado, pelo que ΔS = ∫ δQ_rev/T pode ser calculada num caminho localmente reversível que ligue os mesmos estados. Regressa-se depois às trocas reais para determinar S_e = ∫ δQ_actual/T_ext e S_i = ΔS − S_e.",
        "Falso: os estados A e B fixam ΔS, mas não a sua decomposição em entropia trocada e produzida. S_e depende dos calores efetivamente trocados e das temperaturas exteriores; S_i deduz-se então do balanço ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Que funcionamento é precisamente proibido pelo enunciado de Kelvin–Planck?",
      "choices": [
        "Converter trabalho recebido em calor durante um ciclo.",
        "Receber um calor Q > 0 e fornecer um trabalho W = −Q durante uma expansão isotérmica não cíclica de um gás ideal.",
        "Fornecer trabalho num ciclo retirando calor do termostato quente e cedendo calor ao termostato frio.",
        "Realizar um ciclo cujo único efeito seja retirar um calor Q > 0 de um único termostato e fornecer W = −Q ao exterior."
      ],
      "explanations": [
        "Falso: a conversão de trabalho em calor é permitida. A proibição diz respeito à conversão integral de calor em trabalho com um único termostato e sem outro efeito.",
        "Falso: esta expansão não devolve o gás ao seu estado inicial. A condição cíclica do enunciado é essencial.",
        "Falso: este é o funcionamento de um motor ditérmico, possível se o seu rendimento respeitar o limite de Carnot.",
        "Correto: o primeiro princípio permitiria este balanço Q + W = 0, mas o segundo princípio proíbe este funcionamento monotérmico cíclico. Com a convenção do curso, fornecer trabalho corresponde a W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Uma compressão quase-estática é necessariamente localmente reversível.",
      "choices": [
        "Verdadeiro",
        "Falso"
      ],
      "explanations": [
        "Falso: uma compressão quase-estática pode, por exemplo, realizar-se com atrito. Este dissipa energia e deixa um vestígio no gás ou no seu exterior, mesmo que o gás permaneça próximo do equilíbrio.",
        "Correto: o caráter quase-estático não basta. É também necessário eliminar as dissipações e conduzir as trocas com diferenças infinitesimais de pressão, temperatura ou potencial químico."
      ]
    },
    "l6-q7": {
      "question": "Que sucessão descreve o ciclo motor de Carnot de um gás ideal, sendo todos os seus ramos localmente reversíveis?",
      "choices": [
        "Uma expansão isotérmica a T_H, uma expansão adiabática reversível, uma compressão isotérmica a T_C e, depois, uma compressão adiabática reversível.",
        "Uma expansão isotérmica a T_H, um arrefecimento isocórico, uma compressão isotérmica a T_C e, depois, um aquecimento isocórico.",
        "Uma expansão isotérmica a T_C, uma compressão adiabática, uma compressão isotérmica a T_H e, depois, uma expansão adiabática."
      ],
      "explanations": [
        "Correto: as trocas de calor ocorrem nas duas isotérmicas localmente reversíveis; as adiabáticas ligam as duas temperaturas sem troca térmica. O ciclo motor é percorrido no sentido horário no diagrama (V, P).",
        "Falso: as ligações entre as isotérmicas do ciclo de Carnot são adiabáticas, não isocóricas. Ramos isocóricos modificariam o ciclo e as suas trocas de calor.",
        "Falso: esta sucessão descreve o ciclo de Carnot percorrido no sentido inverso. A máquina recebe então trabalho para retirar calor do termostato frio e cedê-lo ao termostato quente."
      ]
    },
    "l6-vf2": {
      "question": "O segundo princípio fixa o sentido termodinamicamente admissível das evoluções, mas não determina, por si só, a sua duração nem os coeficientes de transporte.",
      "choices": [
        "Verdadeiro",
        "Falso"
      ],
      "explanations": [
        "Correto: restringe as transformações e caracteriza os equilíbrios sob as hipóteses do curso. Não fornece o tempo de relaxação, a condutividade térmica, a viscosidade nem o coeficiente de difusão.",
        "Falso: o segundo princípio não é uma equação completa da dinâmica. São necessárias leis adicionais para descrever a velocidade de evolução e os estados intermédios de uma transformação brusca."
      ]
    }
  },
  "it": {
    "l6-q1": {
      "question": "In questa lezione, che cosa richiede la reversibilità globale di una trasformazione?",
      "choices": [
        "Che il solo sistema possa recuperare lo stato iniziale, quali che siano i cambiamenti del suo ambiente esterno.",
        "Che un ritorno possa ripristinare il sistema e tutto il suo ambiente esterno, senza lasciare alcun altro cambiamento.",
        "Che il ritorno percorra obbligatoriamente lo stesso cammino nel verso opposto.",
        "Che la trasformazione sia quasistatica e il sistema rimanga vicino all'equilibrio a ogni tappa."
      ],
      "explanations": [
        "Falso: ripristinare il solo sistema può lasciare una traccia in un termostato o in una sorgente di lavoro. Occorre ripristinare anche tutto l'ambiente esterno.",
        "Corretto: basta che almeno una procedura di ritorno cancelli tutte le modifiche del sistema e del suo ambiente esterno. La definizione globale non impone il cammino del ritorno.",
        "Falso: ripercorrere il cammino riguarda la reversibilità locale. La definizione globale ammette un diverso cammino di ritorno.",
        "Falso: il carattere quasistatico non basta. Può persistere attrito che impedisce il completo ripristino del sistema e del suo ambiente esterno."
      ]
    },
    "l6-q11": {
      "question": "Un sistema chiuso cede 2 400 J a un termostato a 300 K. La sua variazione di entropia è ΔS = −6 J/K. Quali sono la sua entropia scambiata S_e e la sua entropia prodotta S_i?",
      "choices": [
        "S_e = −8 J/K e S_i = +2 J/K.",
        "S_e = +8 J/K e S_i = +2 J/K.",
        "S_e = −6 J/K e S_i = 0 J/K.",
        "S_e = −8 J/K e S_i = +14 J/K."
      ],
      "explanations": [
        "Corretto: Q = −2 400 J, quindi S_e = Q/T_ext = −8 J/K. Il bilancio ΔS = S_e + S_i dà S_i = +2 J/K. Il termostato guadagna 8 J/K: l'entropia totale aumenta di 2 J/K se gli altri dispositivi non cambiano entropia.",
        "Falso: S_e è conteggiata dal punto di vista del sistema, che cede calore: S_e = −2 400/300 = −8 J/K. I +8 J/K corrispondono al guadagno del termostato.",
        "Falso: S_e è fissata da Q/T_ext = −8 J/K, non da ΔS. La differenza è l'entropia prodotta: S_i = ΔS − S_e = +2 J/K.",
        "Falso: occorre conservare il segno di ΔS: S_i = (−6) − (−8) = +2 J/K. Sommare i valori assoluti 6 e 8 non dà la produzione di entropia."
      ]
    },
    "l6-q15": {
      "question": "Un calore Q = 1 200 J passa direttamente da un termostato a 600 K a un termostato a 300 K. Qual è la variazione di entropia totale dei due termostati?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Corretto: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. La durata non compare in questo bilancio; una parete poco conduttrice rallenta il trasferimento senza eliminare l'irreversibilità dovuta alla differenza finita di temperatura.",
        "Falso: l'energia si conserva, ma le variazioni di entropia sono pesate dagli inversi delle temperature, che sono diverse.",
        "Falso: questo risultato somma i valori assoluti. Il termostato caldo perde 1 200/600 = 2 J/K, mentre quello freddo guadagna 1 200/300 = 4 J/K: occorre calcolare −2 + 4.",
        "Falso: +4 J/K è soltanto la variazione del termostato freddo. Il bilancio totale comprende anche i −2 J/K del termostato caldo."
      ]
    },
    "l6-q3": {
      "question": "Perché un normale frigorifero non contraddice l'enunciato di Clausius?",
      "choices": [
        "Perché il trasferimento di calore dal freddo al caldo è accompagnato da un apporto di lavoro esterno.",
        "Perché il fluido recupera lo stato iniziale a ogni ciclo, annullando così gli effetti sui due termostati.",
        "Perché la somma algebrica dei calori e del lavoro è nulla su un ciclo, il che basta a consentire questo trasferimento."
      ],
      "explanations": [
        "Corretto: Clausius vieta una trasformazione ciclica il cui unico effetto sia questo trasferimento dal freddo al caldo. Il frigorifero riceve lavoro: il trasferimento non è quindi il suo unico effetto.",
        "Falso: il fluido torna allo stato iniziale, ma i termostati hanno scambiato energia. Il carattere ciclico non elimina questi cambiamenti esterni.",
        "Falso: la conservazione dell'energia è necessaria ma non sufficiente. Il secondo principio impone un ulteriore vincolo fisico."
      ]
    },
    "l6-q13": {
      "question": "Un gas perfetto di n moli subisce un'espansione di Joule–Gay-Lussac dal volume v al volume V > v in un recipiente rigido e adiabatico. La rimozione della parete non modifica l'ambiente esterno. Quale bilancio è corretto?",
      "choices": [
        "Q = W = 0, quindi ΔU_gas = 0 e ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 e ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 e ΔS_tot = 0, sebbene ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 e ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Falso: Q = W = 0 implica effettivamente ΔU_gas = 0, ma non ΔS_gas = 0. L'assenza di scambio termico non impedisce la produzione di entropia: la relazione dS = δQ_rev/T non si applica al calore reale di questa espansione irreversibile.",
        "Falso: il gas si espande contro il vuoto; non fornisce quindi lavoro, W = 0. Con Q = 0, abbiamo ΔU_gas = 0. L'entropia aumenta senza apporto di energia.",
        "Falso: l'ambiente esterno rimane invariato, quindi ΔS_ext = 0. Nessuna diminuzione esterna compensa l'aumento di entropia del gas: ΔS_tot = ΔS_gas > 0.",
        "Corretto: Q = W = 0 dà ΔU_gas = 0. Poiché l'ambiente esterno non è modificato, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Questo aumento dimostra che nessun ritorno può ripristinare il gas e il suo ambiente esterno senza lasciare una traccia altrove."
      ]
    },
    "l6-q6": {
      "question": "Un motore bitermico funziona tra 600 K e 300 K e riceve Q_H = 1 000 J per ciclo. Qual è il valore massimo del lavoro fornito |W|?",
      "choices": [
        "1 000 J.",
        "Circa 667 J.",
        "500 J.",
        "Impossibile determinarlo senza conoscere il fluido di lavoro."
      ],
      "explanations": [
        "Falso: non si può convertire in lavoro tutto il calore ricevuto dal termostato caldo su un ciclo. Il secondo principio impone di cederne una parte al termostato freddo, anche se ΔU = 0.",
        "Falso: 667 J corrisponde approssimativamente a Q_H T_H/(T_H + T_C). Il rendimento di Carnot vale invece 1 − T_C/T_H, non T_H/(T_H + T_C).",
        "Corretto: il rendimento massimo è quello di Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Quindi |W|_max = η_max Q_H = 500 J. Questo valore è raggiunto da una macchina bitermica localmente reversibile.",
        "Falso: le temperature dei due termostati e il calore ricevuto bastano per calcolare il lavoro massimo: |W|_max = Q_H (1 − T_C/T_H). Non occorre conoscere il fluido né i dettagli del motore."
      ]
    },
    "l6-q18": {
      "question": "Due sottosistemi di composizione fissata possono scambiare indipendentemente energia e volume in un insieme isolato. Che cosa si può dire del loro stato di equilibrio?",
      "choices": [
        "U_1 = U_2 e V_1 = V_2, quali che siano le dimensioni dei sottosistemi.",
        "P_1/T_1 = P_2/T_2, senza che le temperature siano necessariamente uguali.",
        "T_1 = T_2, ma le pressioni non sono necessariamente uguali.",
        "T_1 = T_2 e P_1 = P_2."
      ],
      "explanations": [
        "Falso: l'equilibrio non impone l'uguaglianza delle grandezze estensive. Due sottosistemi di dimensioni diverse possono avere energie e volumi diversi all'equilibrio.",
        "Falso: questa uguaglianza annulla soltanto il coefficiente di dV_1. Poiché anche l'energia può essere redistribuita indipendentemente, il coefficiente di dU_1 deve annullarsi: T_1 = T_2. Il criterio utilizzato è la stazionarietà dell'entropia totale.",
        "Falso: poiché sono consentiti anche scambi di volume, l'equilibrio deve essere meccanico oltre che termico. Anche le pressioni devono quindi essere uguali.",
        "Corretto: all'equilibrio, l'entropia totale è stazionaria rispetto a tutte le redistribuzioni consentite: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Poiché gli scambi di energia e volume sono indipendenti, entrambi i coefficienti si annullano: T_1 = T_2 e P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Una macchina ciclica riceve i calori algebrici Q_k da termostati a T_k > 0 e scambia lavoro con una sorgente ideale. Quale affermazione rispetta la disuguaglianza di Clausius e le definizioni della lezione?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, con un valore strettamente positivo per un ciclo globalmente irreversibile.",
        "Σ_k Q_k/T_k = 0 per ogni ciclo, poiché l'entropia della macchina recupera il valore iniziale.",
        "Σ_k Q_k/T_k ≤ 0, e l'uguaglianza dimostra da sola che il cammino iniziale è localmente reversibile.",
        "Σ_k Q_k/T_k ≤ 0; l'uguaglianza caratterizza la reversibilità globale, senza dimostrare la reversibilità locale."
      ],
      "explanations": [
        "Falso: i Q_k sono conteggiati positivamente quando vengono ricevuti dalla macchina. Con questa convenzione, la somma è negativa o nulla.",
        "Falso: ΔS_system = 0 su un ciclo, ma l'entropia scambiata può essere negativa e compensata da una produzione positiva di entropia.",
        "Falso: il segno è corretto, ma il caso di uguaglianza costruisce un ritorno globale mediante macchine ausiliarie. Non mostra che la macchina iniziale possa ripercorrere il proprio cammino.",
        "Corretto: un ciclo localmente reversibile realizza l'uguaglianza. Viceversa, una somma nulla permette di ripristinare le sorgenti mediante macchine ausiliarie; una somma strettamente negativa indica un ciclo globalmente irreversibile."
      ]
    },
    "l6-q9": {
      "question": "Come viene costruita l'entropia nella lezione a partire dall'uguaglianza ∮ δQ_rev/T = 0 sui cicli localmente reversibili?",
      "choices": [
        "Si deduce che il calore Q è una funzione di stato.",
        "Si definisce S(B) − S(A) mediante l'integrale di δQ_rev/T.",
        "Si definisce S(B) − S(A) mediante l'integrale di δQ/T_ext lungo un qualsiasi cammino reale."
      ],
      "explanations": [
        "Falso: è δQ_rev/T a essere un differenziale esatto. Il calore scambiato continua a dipendere dal cammino.",
        "Corretto: due cammini localmente reversibili, uno dei quali percorso nel verso opposto, formano un ciclo con integrale nullo. L'entropia è così definita a meno di una costante additiva su ogni dominio reversibilmente connesso e si esprime in J/K.",
        "Falso: lungo un cammino reale irreversibile, l'integrale di δQ/T_ext dà l'entropia scambiata, non necessariamente ΔS. La costruzione utilizza δQ_rev/T lungo un cammino localmente reversibile."
      ]
    },
    "l6-q2": {
      "question": "Quale affermazione descrive correttamente la reversibilità locale?",
      "choices": [
        "Basta che gli stati iniziale e finale del sistema siano stati di equilibrio.",
        "Deriva automaticamente da qualsiasi procedura che ripristini globalmente il sistema e il suo ambiente esterno.",
        "Richiede di invertire ogni tappa di una successione di stati di equilibrio mediante una modifica infinitesima dei vincoli.",
        "Permette di ripercorrere il cammino del sistema mantenendo gli stessi segni per gli scambi di calore e lavoro."
      ],
      "explanations": [
        "Falso: gli stati intermedi e la possibilità di invertire ogni tappa sono essenziali per la definizione locale.",
        "Falso: un ritorno globale potrebbe seguire un altro cammino. La sua esistenza non dimostra da sola che il cammino iniziale sia localmente reversibile.",
        "Corretto: si può allora percorrere la stessa successione di stati nel verso opposto, ripristinando anche l'ambiente esterno. La reversibilità locale implica quindi quella globale.",
        "Falso: percorrendo nel verso opposto un cammino localmente reversibile, gli scambi termici e meccanici cambiano segno a ogni tappa."
      ]
    },
    "l6-q12": {
      "question": "Una trasformazione irreversibile collega due stati di equilibrio A e B, ma i suoi stati intermedi sono lontani dall'equilibrio. Quale affermazione è corretta?",
      "choices": [
        "La variazione di entropia ΔS è l'integrale di δQ_actual/T_ext lungo il cammino reale.",
        "La variazione di entropia ΔS può essere calcolata lungo un cammino localmente reversibile tra A e B, mentre S_e e S_i dipendono dal processo reale.",
        "Gli stati A e B determinano da soli l'entropia scambiata S_e e l'entropia prodotta S_i."
      ],
      "explanations": [
        "Falso: questo integrale dà S_e, l'entropia scambiata. Il bilancio è ΔS = S_e + S_i: il calore effettivamente scambiato non basta per calcolare ΔS senza tenere conto dell'entropia prodotta.",
        "Corretto: S è una funzione di stato, quindi ΔS = ∫ δQ_rev/T può essere calcolata lungo un cammino localmente reversibile che collega gli stessi stati. Si torna poi agli scambi reali per determinare S_e = ∫ δQ_actual/T_ext e S_i = ΔS − S_e.",
        "Falso: gli stati A e B fissano ΔS, ma non la sua scomposizione in entropia scambiata e prodotta. S_e dipende dai calori effettivamente scambiati e dalle temperature esterne; S_i si ricava poi dal bilancio ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Quale funzionamento è precisamente vietato dall'enunciato di Kelvin–Planck?",
      "choices": [
        "Convertire lavoro ricevuto in calore durante un ciclo.",
        "Ricevere un calore Q > 0 e fornire un lavoro W = −Q durante un'espansione isoterma non ciclica di un gas perfetto.",
        "Fornire lavoro su un ciclo prelevando calore dal termostato caldo e cedendo calore al termostato freddo.",
        "Compiere un ciclo il cui unico effetto è prelevare un calore Q > 0 da un unico termostato e fornire W = −Q all'ambiente esterno."
      ],
      "explanations": [
        "Falso: la conversione di lavoro in calore è consentita. Il divieto riguarda la conversione integrale di calore in lavoro con un unico termostato e senza altri effetti.",
        "Falso: questa espansione non riporta il gas allo stato iniziale. La condizione ciclica dell'enunciato è essenziale.",
        "Falso: è il funzionamento di un motore bitermico, possibile se il suo rendimento rispetta il limite di Carnot.",
        "Corretto: il primo principio consentirebbe questo bilancio Q + W = 0, ma il secondo principio vieta questo funzionamento monotermico ciclico. Con la convenzione del corso, fornire lavoro corrisponde a W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Una compressione quasistatica è necessariamente localmente reversibile.",
      "choices": [
        "Vero",
        "Falso"
      ],
      "explanations": [
        "Falso: una compressione quasistatica può, per esempio, avvenire con attrito. Questo dissipa energia e lascia una traccia nel gas o nel suo ambiente esterno, anche se il gas rimane vicino all'equilibrio.",
        "Corretto: il carattere quasistatico non basta. Occorre anche eliminare le dissipazioni e condurre gli scambi con differenze infinitesime di pressione, temperatura o potenziale chimico."
      ]
    },
    "l6-q7": {
      "question": "Quale successione descrive il ciclo motore di Carnot di un gas perfetto, con tutti i rami localmente reversibili?",
      "choices": [
        "Un'espansione isoterma a T_H, un'espansione adiabatica reversibile, una compressione isoterma a T_C, poi una compressione adiabatica reversibile.",
        "Un'espansione isoterma a T_H, un raffreddamento isocoro, una compressione isoterma a T_C, poi un riscaldamento isocoro.",
        "Un'espansione isoterma a T_C, una compressione adiabatica, una compressione isoterma a T_H, poi un'espansione adiabatica."
      ],
      "explanations": [
        "Corretto: gli scambi di calore avvengono sulle due isoterme localmente reversibili; le adiabatiche collegano le due temperature senza scambio termico. Il ciclo motore è percorso in senso orario nel diagramma (V, P).",
        "Falso: i collegamenti tra le isoterme del ciclo di Carnot sono adiabatici, non isocori. Rami isocori modificherebbero il ciclo e i suoi scambi di calore.",
        "Falso: questa successione descrive il ciclo di Carnot percorso nel verso opposto. La macchina riceve allora lavoro per prelevare calore dal termostato freddo e cederlo a quello caldo."
      ]
    },
    "l6-vf2": {
      "question": "Il secondo principio fissa il verso termodinamicamente ammissibile delle evoluzioni, ma non ne determina da solo la durata né i coefficienti di trasporto.",
      "choices": [
        "Vero",
        "Falso"
      ],
      "explanations": [
        "Corretto: vincola le trasformazioni e caratterizza gli equilibri sotto le ipotesi del corso. Non fornisce il tempo di rilassamento, la conducibilità termica, la viscosità né il coefficiente di diffusione.",
        "Falso: il secondo principio non è un'equazione completa della dinamica. Servono leggi aggiuntive per descrivere la velocità di evoluzione e gli stati intermedi di una trasformazione brusca."
      ]
    }
  },
  "pl": {
    "l6-q1": {
      "question": "Czego w tej lekcji wymaga globalna odwracalność przemiany?",
      "choices": [
        "Aby sam układ mógł odzyskać stan początkowy, niezależnie od zmian w otoczeniu.",
        "Aby istniał powrót przywracający układ i całe jego otoczenie bez pozostawienia jakiejkolwiek innej zmiany.",
        "Aby powrót koniecznie przebiegał tą samą drogą w przeciwnym kierunku.",
        "Aby przemiana była quasi-statyczna, a układ pozostawał blisko równowagi na każdym etapie."
      ],
      "explanations": [
        "Nieprawda: przywrócenie samego układu może pozostawić ślad w termostacie lub źródle pracy. Trzeba także przywrócić całe otoczenie.",
        "Zgadza się: wystarczy co najmniej jedna procedura powrotna usuwająca wszystkie zmiany układu i jego otoczenia. Definicja globalna nie narzuca drogi tego powrotu.",
        "Nieprawda: odtworzenie drogi w przeciwnym kierunku dotyczy odwracalności lokalnej. Definicja globalna dopuszcza inną drogę powrotu.",
        "Nieprawda: quasi-statyczność nie wystarcza. Może występować tarcie uniemożliwiające pełne przywrócenie układu i jego otoczenia."
      ]
    },
    "l6-q11": {
      "question": "Układ zamknięty oddaje 2 400 J termostatowi o temperaturze 300 K. Zmiana jego entropii wynosi ΔS = −6 J/K. Ile wynoszą jego entropia wymieniona S_e i entropia wytworzona S_i?",
      "choices": [
        "S_e = −8 J/K i S_i = +2 J/K.",
        "S_e = +8 J/K i S_i = +2 J/K.",
        "S_e = −6 J/K i S_i = 0 J/K.",
        "S_e = −8 J/K i S_i = +14 J/K."
      ],
      "explanations": [
        "Zgadza się: Q = −2 400 J, więc S_e = Q/T_ext = −8 J/K. Bilans ΔS = S_e + S_i daje S_i = +2 J/K. Entropia termostatu wzrasta o 8 J/K: całkowita entropia rośnie o 2 J/K, jeśli entropia pozostałych urządzeń się nie zmienia.",
        "Nieprawda: S_e liczymy z punktu widzenia układu, który oddaje ciepło: S_e = −2 400/300 = −8 J/K. Wartość +8 J/K odpowiada przyrostowi entropii termostatu.",
        "Nieprawda: S_e wyznacza Q/T_ext = −8 J/K, a nie ΔS. Ich różnica jest entropią wytworzoną: S_i = ΔS − S_e = +2 J/K.",
        "Nieprawda: trzeba zachować znak ΔS: S_i = (−6) − (−8) = +2 J/K. Dodanie wartości bezwzględnych 6 i 8 nie daje entropii wytworzonej."
      ]
    },
    "l6-q15": {
      "question": "Ciepło Q = 1 200 J przepływa bezpośrednio z termostatu o temperaturze 600 K do termostatu o temperaturze 300 K. Jaka jest zmiana całkowitej entropii obu termostatów?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Zgadza się: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Czas trwania nie występuje w tym bilansie; słabo przewodząca ścianka spowalnia przepływ, nie usuwając nieodwracalności wynikającej ze skończonej różnicy temperatur.",
        "Nieprawda: energia jest zachowana, ale zmiany entropii są ważone odwrotnościami temperatur, które się różnią.",
        "Nieprawda: ten wynik dodaje wartości bezwzględne. Entropia gorącego termostatu maleje o 1 200/600 = 2 J/K, a zimnego rośnie o 1 200/300 = 4 J/K: należy obliczyć −2 + 4.",
        "Nieprawda: +4 J/K to tylko zmiana entropii zimnego termostatu. Bilans całkowity uwzględnia także −2 J/K gorącego termostatu."
      ]
    },
    "l6-q3": {
      "question": "Dlaczego zwykła lodówka nie przeczy sformułowaniu Clausiusa?",
      "choices": [
        "Ponieważ przepływowi ciepła od ciała chłodniejszego do cieplejszego towarzyszy dostarczenie pracy z otoczenia.",
        "Ponieważ czynnik roboczy odzyskuje stan początkowy w każdym cyklu, co usuwa skutki dla obu termostatów.",
        "Ponieważ algebraiczna suma ciepła i pracy w cyklu jest zerowa, a to wystarcza, aby taki przepływ był dozwolony."
      ],
      "explanations": [
        "Zgadza się: Clausius zabrania przemiany cyklicznej, której jedynym skutkiem byłby taki przepływ od ciała chłodniejszego do cieplejszego. Lodówka otrzymuje pracę, więc przepływ ten nie jest jej jedynym skutkiem.",
        "Nieprawda: czynnik roboczy wraca do stanu początkowego, ale termostaty wymieniły energię. Cykliczność nie usuwa tych zmian w otoczeniu.",
        "Nieprawda: zachowanie energii jest konieczne, lecz nie wystarcza. Druga zasada narzuca dodatkowe ograniczenie fizyczne."
      ]
    },
    "l6-q13": {
      "question": "Gaz doskonały w ilości n moli ulega rozprężaniu Joule'a–Gay-Lussaca od objętości v do objętości V > v w sztywnym, adiabatycznym zbiorniku. Usunięcie przegrody nie zmienia otoczenia. Który bilans jest poprawny?",
      "choices": [
        "Q = W = 0, więc ΔU_gas = 0 i ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 i ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 i ΔS_tot = 0, choć ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 i ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Nieprawda: z Q = W = 0 rzeczywiście wynika ΔU_gas = 0, ale nie ΔS_gas = 0. Brak wymiany ciepła nie wyklucza produkcji entropii: relacji dS = δQ_rev/T nie można stosować do rzeczywistego ciepła w tym nieodwracalnym rozprężaniu.",
        "Nieprawda: gaz rozpręża się do próżni, nie dostarcza więc żadnej pracy, W = 0. Przy Q = 0 mamy ΔU_gas = 0. Entropia rośnie bez dopływu energii.",
        "Nieprawda: otoczenie pozostaje niezmienione, więc ΔS_ext = 0. Żaden spadek entropii otoczenia nie kompensuje wzrostu entropii gazu: ΔS_tot = ΔS_gas > 0.",
        "Zgadza się: Q = W = 0 daje ΔU_gas = 0. Ponieważ otoczenie się nie zmienia, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Ten wzrost dowodzi, że żaden powrót nie może przywrócić gazu i otoczenia bez pozostawienia śladu gdzie indziej."
      ]
    },
    "l6-q6": {
      "question": "Silnik dwutermostatowy działa między 600 K a 300 K i otrzymuje Q_H = 1 000 J w każdym cyklu. Jaka jest maksymalna wartość dostarczanej pracy |W|?",
      "choices": [
        "1 000 J.",
        "Około 667 J.",
        "500 J.",
        "Nie da się określić bez znajomości czynnika roboczego."
      ],
      "explanations": [
        "Nieprawda: nie można w cyklu przekształcić w pracę całego ciepła otrzymanego z gorącego termostatu. Druga zasada wymaga oddania części zimnemu termostatowi, nawet jeśli ΔU = 0.",
        "Nieprawda: 667 J odpowiada w przybliżeniu Q_H T_H/(T_H + T_C). Tymczasem sprawność Carnota wynosi 1 − T_C/T_H, a nie T_H/(T_H + T_C).",
        "Zgadza się: maksymalną sprawnością jest sprawność Carnota, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Zatem |W|_max = η_max Q_H = 500 J. Wartość tę osiąga lokalnie odwracalna maszyna dwutermostatowa.",
        "Nieprawda: temperatury obu termostatów i otrzymane ciepło wystarczają do obliczenia maksymalnej pracy: |W|_max = Q_H (1 − T_C/T_H). Nie trzeba znać czynnika roboczego ani szczegółów silnika."
      ]
    },
    "l6-q18": {
      "question": "Dwa podukłady o ustalonym składzie mogą niezależnie wymieniać energię i objętość w izolowanej całości. Co można powiedzieć o ich stanie równowagi?",
      "choices": [
        "U_1 = U_2 i V_1 = V_2, niezależnie od rozmiarów podukładów.",
        "P_1/T_1 = P_2/T_2, bez koniecznej równości temperatur.",
        "T_1 = T_2, ale ciśnienia nie muszą być równe.",
        "T_1 = T_2 i P_1 = P_2."
      ],
      "explanations": [
        "Nieprawda: równowaga nie wymaga równości wielkości ekstensywnych. Dwa podukłady o różnych rozmiarach mogą mieć w równowadze różne energie i objętości.",
        "Nieprawda: ta równość zeruje tylko współczynnik przy dV_1. Ponieważ energia również może być niezależnie rozdzielana, współczynnik przy dU_1 musi znikać: T_1 = T_2. Stosowanym kryterium jest stacjonarność całkowitej entropii.",
        "Nieprawda: skoro wymiana objętości również jest dozwolona, równowaga musi być zarówno mechaniczna, jak i cieplna. Zatem ciśnienia również muszą być równe.",
        "Zgadza się: w równowadze całkowita entropia jest stacjonarna względem wszystkich dozwolonych zmian rozdziału: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Ponieważ wymiany energii i objętości są niezależne, oba współczynniki znikają: T_1 = T_2 i P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Maszyna cykliczna otrzymuje algebraiczne ilości ciepła Q_k z termostatów o T_k > 0 i wymienia pracę z idealnym źródłem. Które stwierdzenie jest zgodne z nierównością Clausiusa i definicjami z lekcji?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, z wartością ściśle dodatnią dla cyklu globalnie nieodwracalnego.",
        "Σ_k Q_k/T_k = 0 dla każdego cyklu, ponieważ entropia maszyny odzyskuje wartość początkową.",
        "Σ_k Q_k/T_k ≤ 0, a równość sama dowodzi lokalnej odwracalności pierwotnej drogi.",
        "Σ_k Q_k/T_k ≤ 0; równość charakteryzuje odwracalność globalną, nie dowodząc odwracalności lokalnej."
      ],
      "explanations": [
        "Nieprawda: Q_k liczymy dodatnio, gdy maszyna otrzymuje ciepło. Przy tej konwencji suma jest ujemna lub zerowa.",
        "Nieprawda: w cyklu ΔS_system = 0, lecz entropia wymieniona może być ujemna i kompensowana dodatnią produkcją entropii.",
        "Nieprawda: znak jest poprawny, ale przypadek równości pozwala zbudować powrót globalny za pomocą maszyn pomocniczych. Nie pokazuje, że pierwotna maszyna może odtworzyć własną drogę w przeciwnym kierunku.",
        "Zgadza się: cykl lokalnie odwracalny daje równość. Odwrotnie, zerowa suma pozwala przywrócić źródła za pomocą maszyn pomocniczych; suma ściśle ujemna wskazuje na cykl globalnie nieodwracalny."
      ]
    },
    "l6-q9": {
      "question": "Jak w lekcji konstruuje się entropię na podstawie równości ∮ δQ_rev/T = 0 dla cykli lokalnie odwracalnych?",
      "choices": [
        "Wyciąga się z niej wniosek, że ciepło Q jest funkcją stanu.",
        "Definiuje się S(B) − S(A) jako całkę z δQ_rev/T.",
        "Definiuje się S(B) − S(A) jako całkę z δQ/T_ext po dowolnej rzeczywistej drodze."
      ],
      "explanations": [
        "Nieprawda: to δQ_rev/T jest różniczką zupełną. Wymienione ciepło nadal zależy od drogi.",
        "Zgadza się: dwie lokalnie odwracalne drogi, z których jedną przebywa się w przeciwnym kierunku, tworzą cykl o zerowej całce. Entropia jest więc określona z dokładnością do stałej addytywnej w każdej odwracalnie spójnej dziedzinie i wyraża się w J/K.",
        "Nieprawda: na rzeczywistej drodze nieodwracalnej całka z δQ/T_ext daje entropię wymienioną, niekoniecznie ΔS. Konstrukcja wykorzystuje δQ_rev/T na drodze lokalnie odwracalnej."
      ]
    },
    "l6-q2": {
      "question": "Które stwierdzenie poprawnie opisuje odwracalność lokalną?",
      "choices": [
        "Wystarczy, aby stany początkowy i końcowy układu były stanami równowagi.",
        "Wynika automatycznie z każdej procedury globalnie przywracającej układ i jego otoczenie.",
        "Wymaga możliwości odwrócenia każdego etapu ciągu stanów równowagi przez infinitezymalną zmianę więzów.",
        "Pozwala odtworzyć drogę układu w przeciwnym kierunku, zachowując te same znaki wymiany ciepła i pracy."
      ],
      "explanations": [
        "Nieprawda: stany pośrednie i możliwość odwrócenia każdego etapu są zasadnicze dla definicji lokalnej.",
        "Nieprawda: powrót globalny mógłby odbywać się inną drogą. Samo jego istnienie nie dowodzi lokalnej odwracalności pierwotnej drogi.",
        "Zgadza się: można wtedy przebyć ten sam ciąg stanów w przeciwnym kierunku, przywracając także otoczenie. Odwracalność lokalna pociąga więc za sobą odwracalność globalną.",
        "Nieprawda: podczas przebywania lokalnie odwracalnej drogi w przeciwnym kierunku wymiany cieplne i mechaniczne zmieniają znak na każdym etapie."
      ]
    },
    "l6-q12": {
      "question": "Przemiana nieodwracalna łączy dwa stany równowagi A i B, lecz jej stany pośrednie są dalekie od równowagi. Które stwierdzenie jest poprawne?",
      "choices": [
        "Zmiana entropii ΔS jest całką z δQ_actual/T_ext po rzeczywistej drodze.",
        "Zmianę entropii ΔS można obliczyć po lokalnie odwracalnej drodze między A i B, natomiast S_e i S_i zależą od rzeczywistego procesu.",
        "Same stany A i B określają entropię wymienioną S_e i entropię wytworzoną S_i."
      ],
      "explanations": [
        "Nieprawda: ta całka daje S_e, czyli entropię wymienioną. Bilans ma postać ΔS = S_e + S_i: rzeczywiście wymienione ciepło nie wystarcza do obliczenia ΔS bez uwzględnienia entropii wytworzonej.",
        "Zgadza się: S jest funkcją stanu, więc ΔS = ∫ δQ_rev/T można obliczyć po lokalnie odwracalnej drodze łączącej te same stany. Następnie wracamy do rzeczywistych wymian, aby wyznaczyć S_e = ∫ δQ_actual/T_ext i S_i = ΔS − S_e.",
        "Nieprawda: stany A i B określają ΔS, ale nie jej rozkład na entropię wymienioną i wytworzoną. S_e zależy od rzeczywiście wymienionego ciepła i temperatur zewnętrznych; S_i wyznacza się następnie z bilansu ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Jakiego dokładnie sposobu działania zabrania sformułowanie Kelvina–Plancka?",
      "choices": [
        "Przekształcania otrzymanej pracy w ciepło w cyklu.",
        "Otrzymywania ciepła Q > 0 i dostarczania pracy W = −Q podczas niecyklicznego rozprężania izotermicznego gazu doskonałego.",
        "Dostarczania pracy w cyklu przy pobieraniu ciepła z gorącego termostatu i oddawaniu części zimnemu.",
        "Wykonywania cyklu, którego jedynym skutkiem jest pobranie ciepła Q > 0 z jednego termostatu i dostarczenie otoczeniu W = −Q."
      ],
      "explanations": [
        "Nieprawda: przekształcanie pracy w ciepło jest dozwolone. Zakaz dotyczy całkowitego przekształcenia ciepła w pracę przy jednym termostacie i bez innych skutków.",
        "Nieprawda: takie rozprężanie nie przywraca gazu do stanu początkowego. Warunek cykliczności w tym sformułowaniu jest zasadniczy.",
        "Nieprawda: tak działa silnik dwutermostatowy, co jest możliwe, jeśli jego sprawność nie przekracza granicy Carnota.",
        "Zgadza się: pierwsza zasada dopuszczałaby bilans Q + W = 0, ale druga zabrania takiej pracy cyklicznej z jednym termostatem. Przy konwencji przyjętej w kursie dostarczaniu pracy odpowiada W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Sprężanie quasi-statyczne jest koniecznie lokalnie odwracalne.",
      "choices": [
        "Prawda",
        "Fałsz"
      ],
      "explanations": [
        "Nieprawda: sprężanie quasi-statyczne może na przykład zachodzić z tarciem. Rozprasza ono energię i pozostawia ślad w gazie lub jego otoczeniu, nawet jeśli gaz pozostaje blisko równowagi.",
        "Zgadza się: quasi-statyczność nie wystarcza. Trzeba także wyeliminować dyssypację i prowadzić wymiany przy infinitezymalnych różnicach ciśnienia, temperatury lub potencjału chemicznego."
      ]
    },
    "l6-q7": {
      "question": "Która kolejność opisuje cykl silnikowy Carnota gazu doskonałego, gdy wszystkie jego gałęzie są lokalnie odwracalne?",
      "choices": [
        "Rozprężanie izotermiczne przy T_H, odwracalne rozprężanie adiabatyczne, sprężanie izotermiczne przy T_C, a następnie odwracalne sprężanie adiabatyczne.",
        "Rozprężanie izotermiczne przy T_H, chłodzenie izochoryczne, sprężanie izotermiczne przy T_C, a następnie ogrzewanie izochoryczne.",
        "Rozprężanie izotermiczne przy T_C, sprężanie adiabatyczne, sprężanie izotermiczne przy T_H, a następnie rozprężanie adiabatyczne."
      ],
      "explanations": [
        "Zgadza się: wymiany ciepła zachodzą na dwóch lokalnie odwracalnych izotermach; adiabaty łączą obie temperatury bez wymiany ciepła. Cykl silnikowy przebiega zgodnie z ruchem wskazówek zegara na wykresie (V, P).",
        "Nieprawda: izotermy cyklu Carnota są połączone adiabatami, a nie izochorami. Gałęzie izochoryczne zmieniłyby cykl i jego wymiany ciepła.",
        "Nieprawda: ta kolejność opisuje cykl Carnota przebiegający w przeciwnym kierunku. Maszyna otrzymuje wtedy pracę, aby pobierać ciepło z zimnego termostatu i oddawać je gorącemu."
      ]
    },
    "l6-vf2": {
      "question": "Druga zasada wyznacza termodynamicznie dopuszczalny kierunek przemian, ale sama nie określa czasu ich trwania ani współczynników transportu.",
      "choices": [
        "Prawda",
        "Fałsz"
      ],
      "explanations": [
        "Zgadza się: ogranicza przemiany i charakteryzuje równowagę przy założeniach kursu. Nie podaje czasu relaksacji, przewodności cieplnej, lepkości ani współczynnika dyfuzji.",
        "Nieprawda: druga zasada nie jest pełnym równaniem dynamiki. Do opisania szybkości ewolucji i stanów pośrednich gwałtownej przemiany potrzebne są dodatkowe prawa."
      ]
    }
  },
  "ru": {
    "l6-q1": {
      "question": "Что в этой лекции требуется для глобальной обратимости процесса?",
      "choices": [
        "Чтобы сама система могла вернуться в исходное состояние независимо от изменений в её окружении.",
        "Чтобы существовал возврат, восстанавливающий систему и всё её окружение без каких-либо других изменений.",
        "Чтобы возврат обязательно проходил по тому же пути в обратном направлении.",
        "Чтобы процесс был квазистатическим и на каждом этапе система оставалась близкой к равновесию."
      ],
      "explanations": [
        "Неверно: восстановление одной лишь системы может оставить след в термостате или источнике работы. Необходимо также восстановить всё окружение.",
        "Верно: достаточно хотя бы одной процедуры возврата, устраняющей все изменения системы и её окружения. Глобальное определение не задаёт путь такого возврата.",
        "Неверно: повторение пути в обратном направлении относится к локальной обратимости. Глобальное определение допускает другой путь возврата.",
        "Неверно: квазистатичности недостаточно. Может сохраняться трение, препятствующее полному восстановлению системы и её окружения."
      ]
    },
    "l6-q11": {
      "question": "Замкнутая система отдаёт 2 400 J термостату при 300 K. Изменение её энтропии равно ΔS = −6 J/K. Чему равны её энтропия обмена S_e и произведённая энтропия S_i?",
      "choices": [
        "S_e = −8 J/K и S_i = +2 J/K.",
        "S_e = +8 J/K и S_i = +2 J/K.",
        "S_e = −6 J/K и S_i = 0 J/K.",
        "S_e = −8 J/K и S_i = +14 J/K."
      ],
      "explanations": [
        "Верно: Q = −2 400 J, поэтому S_e = Q/T_ext = −8 J/K. Баланс ΔS = S_e + S_i даёт S_i = +2 J/K. Энтропия термостата увеличивается на 8 J/K: полная энтропия возрастает на 2 J/K, если энтропия остальных устройств не изменяется.",
        "Неверно: знак S_e определяется с точки зрения системы, которая отдаёт теплоту: S_e = −2 400/300 = −8 J/K. Величина +8 J/K соответствует увеличению энтропии термостата.",
        "Неверно: S_e определяется отношением Q/T_ext = −8 J/K, а не величиной ΔS. Их разность есть произведённая энтропия: S_i = ΔS − S_e = +2 J/K.",
        "Неверно: необходимо сохранить знак ΔS: S_i = (−6) − (−8) = +2 J/K. Сложение абсолютных величин 6 и 8 не даёт произведённую энтропию."
      ]
    },
    "l6-q15": {
      "question": "Теплота Q = 1 200 J передаётся непосредственно от термостата при 600 K к термостату при 300 K. Чему равно изменение полной энтропии двух термостатов?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Верно: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Длительность не входит в этот баланс; стенка с низкой теплопроводностью замедляет перенос, но не устраняет необратимость, обусловленную конечной разностью температур.",
        "Неверно: энергия сохраняется, но изменения энтропии взвешиваются с обратными температурами, которые различны.",
        "Неверно: этот результат получен сложением абсолютных величин. Энтропия горячего термостата уменьшается на 1 200/600 = 2 J/K, а холодного увеличивается на 1 200/300 = 4 J/K: нужно вычислить −2 + 4.",
        "Неверно: +4 J/K — изменение энтропии только холодного термостата. Полный баланс включает также −2 J/K горячего термостата."
      ]
    },
    "l6-q3": {
      "question": "Почему обычный холодильник не противоречит формулировке Клаузиуса?",
      "choices": [
        "Потому что перенос теплоты от холодного к горячему сопровождается подводом работы извне.",
        "Потому что рабочее тело возвращается в исходное состояние в каждом цикле, что устраняет воздействие на оба термостата.",
        "Потому что алгебраическая сумма теплоты и работы за цикл равна нулю, а этого достаточно, чтобы разрешить такой перенос."
      ],
      "explanations": [
        "Верно: Клаузиус запрещает циклический процесс, единственным результатом которого был бы такой перенос от холодного к горячему. Над холодильником совершается работа, поэтому перенос не является его единственным результатом.",
        "Неверно: рабочее тело возвращается в исходное состояние, но термостаты обменялись энергией. Цикличность не устраняет этих изменений в окружении.",
        "Неверно: сохранение энергии необходимо, но недостаточно. Второе начало накладывает дополнительное физическое ограничение."
      ]
    },
    "l6-q13": {
      "question": "Идеальный газ в количестве n молей испытывает расширение Джоуля–Гей-Люссака от объёма v до объёма V > v в жёстком адиабатическом сосуде. Удаление перегородки не изменяет окружение. Какой баланс верен?",
      "choices": [
        "Q = W = 0, поэтому ΔU_gas = 0 и ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 и ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 и ΔS_tot = 0, хотя ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 и ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Неверно: из Q = W = 0 действительно следует ΔU_gas = 0, но не ΔS_gas = 0. Отсутствие теплообмена не запрещает производство энтропии: соотношение dS = δQ_rev/T нельзя применять к фактической теплоте этого необратимого расширения.",
        "Неверно: газ расширяется в вакуум, поэтому работы не совершает, W = 0. При Q = 0 получаем ΔU_gas = 0. Энтропия возрастает без подвода энергии.",
        "Неверно: окружение не изменяется, поэтому ΔS_ext = 0. Никакое уменьшение энтропии окружения не компенсирует возрастание энтропии газа: ΔS_tot = ΔS_gas > 0.",
        "Верно: Q = W = 0 даёт ΔU_gas = 0. Поскольку окружение не изменяется, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Это возрастание доказывает, что ни один возврат не может восстановить газ и его окружение, не оставив следа где-либо ещё."
      ]
    },
    "l6-q6": {
      "question": "Двигатель работает между двумя термостатами при 600 K и 300 K и получает Q_H = 1 000 J за цикл. Какова максимальная величина отдаваемой работы |W|?",
      "choices": [
        "1 000 J.",
        "Примерно 667 J.",
        "500 J.",
        "Невозможно определить, не зная рабочего тела."
      ],
      "explanations": [
        "Неверно: нельзя за цикл превратить в работу всю теплоту, полученную от горячего термостата. Второе начало требует отдать её часть холодному термостату, даже если ΔU = 0.",
        "Неверно: 667 J приблизительно соответствует Q_H T_H/(T_H + T_C). Однако КПД Карно равен 1 − T_C/T_H, а не T_H/(T_H + T_C).",
        "Верно: максимальный КПД равен КПД Карно, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Поэтому |W|_max = η_max Q_H = 500 J. Эту величину достигает локально обратимая машина, работающая между двумя термостатами.",
        "Неверно: температур двух термостатов и полученной теплоты достаточно для вычисления максимальной работы: |W|_max = Q_H (1 − T_C/T_H). Знать рабочее тело или устройство двигателя не требуется."
      ]
    },
    "l6-q18": {
      "question": "Две подсистемы постоянного состава могут независимо обмениваться энергией и объёмом в изолированной совокупности. Что можно сказать об их равновесном состоянии?",
      "choices": [
        "U_1 = U_2 и V_1 = V_2 независимо от размеров подсистем.",
        "P_1/T_1 = P_2/T_2, при этом температуры не обязательно равны.",
        "T_1 = T_2, но давления не обязательно равны.",
        "T_1 = T_2 и P_1 = P_2."
      ],
      "explanations": [
        "Неверно: равновесие не требует равенства экстенсивных величин. Две подсистемы разных размеров могут иметь разные энергии и объёмы в равновесии.",
        "Неверно: это равенство обращает в нуль лишь коэффициент при dV_1. Поскольку энергия также может перераспределяться независимо, коэффициент при dU_1 должен обращаться в нуль: T_1 = T_2. Используемый критерий — стационарность полной энтропии.",
        "Неверно: поскольку обмены объёмом также разрешены, равновесие должно быть не только тепловым, но и механическим. Поэтому давления также должны быть равны.",
        "Верно: в равновесии полная энтропия стационарна относительно всех разрешённых перераспределений: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Поскольку обмены энергией и объёмом независимы, оба коэффициента обращаются в нуль: T_1 = T_2 и P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Циклическая машина получает алгебраические количества теплоты Q_k от термостатов при T_k > 0 и обменивается работой с идеальным источником. Какое утверждение согласуется с неравенством Клаузиуса и определениями этой лекции?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, причём для глобально необратимого цикла величина строго положительна.",
        "Σ_k Q_k/T_k = 0 для любого цикла, поскольку энтропия машины возвращается к исходному значению.",
        "Σ_k Q_k/T_k ≤ 0, а равенство само по себе доказывает локальную обратимость исходного пути.",
        "Σ_k Q_k/T_k ≤ 0; равенство характеризует глобальную обратимость, не доказывая локальную."
      ],
      "explanations": [
        "Неверно: Q_k считаются положительными, когда теплота получена машиной. При таком соглашении сумма отрицательна или равна нулю.",
        "Неверно: за цикл ΔS_system = 0, но энтропия обмена может быть отрицательной и компенсироваться положительным производством энтропии.",
        "Неверно: знак верен, но в случае равенства глобальный возврат строится с помощью вспомогательных машин. Это не показывает, что исходная машина может повторить собственный путь в обратном направлении.",
        "Верно: локально обратимый цикл даёт равенство. И наоборот, нулевая сумма позволяет восстановить источники с помощью вспомогательных машин; строго отрицательная сумма указывает на глобально необратимый цикл."
      ]
    },
    "l6-q9": {
      "question": "Как в лекции строится энтропия на основе равенства ∮ δQ_rev/T = 0 для локально обратимых циклов?",
      "choices": [
        "Из него выводится, что теплота Q является функцией состояния.",
        "S(B) − S(A) определяется интегралом от δQ_rev/T.",
        "S(B) − S(A) определяется интегралом от δQ/T_ext по любому реальному пути."
      ],
      "explanations": [
        "Неверно: точным дифференциалом является δQ_rev/T. Переданная теплота по-прежнему зависит от пути.",
        "Верно: два локально обратимых пути, один из которых проходится в обратном направлении, образуют цикл с нулевым интегралом. Таким образом, энтропия определяется с точностью до аддитивной постоянной в каждой обратимо связной области и выражается в J/K.",
        "Неверно: на реальном необратимом пути интеграл от δQ/T_ext даёт энтропию обмена, а не обязательно ΔS. При построении используется δQ_rev/T на локально обратимом пути."
      ]
    },
    "l6-q2": {
      "question": "Какое утверждение правильно описывает локальную обратимость?",
      "choices": [
        "Достаточно, чтобы начальное и конечное состояния системы были равновесными.",
        "Она автоматически следует из любой процедуры, глобально восстанавливающей систему и её окружение.",
        "Она требует возможности обратить каждый этап последовательности равновесных состояний бесконечно малым изменением ограничений.",
        "Она позволяет повторить путь системы в обратном направлении, сохраняя прежние знаки обменов теплотой и работой."
      ],
      "explanations": [
        "Неверно: промежуточные состояния и возможность обратить каждый этап существенны для локального определения.",
        "Неверно: глобальный возврат мог бы идти другим путём. Само его существование не доказывает локальную обратимость исходного пути.",
        "Верно: тогда можно пройти ту же последовательность состояний в обратном направлении, восстановив также окружение. Поэтому локальная обратимость влечёт глобальную.",
        "Неверно: при прохождении локально обратимого пути в обратном направлении тепловые и механические обмены меняют знак на каждом этапе."
      ]
    },
    "l6-q12": {
      "question": "Необратимый процесс соединяет два равновесных состояния A и B, но его промежуточные состояния далеки от равновесия. Какое утверждение верно?",
      "choices": [
        "Изменение энтропии ΔS равно интегралу от δQ_actual/T_ext по реальному пути.",
        "Изменение энтропии ΔS можно вычислить по локально обратимому пути между A и B, тогда как S_e и S_i зависят от реального процесса.",
        "Состояния A и B сами по себе определяют энтропию обмена S_e и произведённую энтропию S_i."
      ],
      "explanations": [
        "Неверно: этот интеграл даёт S_e, энтропию обмена. Баланс имеет вид ΔS = S_e + S_i: фактически переданной теплоты недостаточно для вычисления ΔS без учёта произведённой энтропии.",
        "Верно: S является функцией состояния, поэтому ΔS = ∫ δQ_rev/T можно вычислить по локально обратимому пути между теми же состояниями. Затем возвращаются к реальным обменам, чтобы определить S_e = ∫ δQ_actual/T_ext и S_i = ΔS − S_e.",
        "Неверно: состояния A и B задают ΔS, но не её разложение на энтропию обмена и произведённую энтропию. S_e зависит от фактически переданной теплоты и внешних температур; затем S_i определяется из баланса ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Какой именно режим работы запрещает формулировка Кельвина–Планка?",
      "choices": [
        "Превращение полученной работы в теплоту за цикл.",
        "Получение теплоты Q > 0 и отдача работы W = −Q при нециклическом изотермическом расширении идеального газа.",
        "Отдача работы за цикл с получением теплоты от горячего термостата и передачей части теплоты холодному.",
        "Совершение цикла, единственным результатом которого являются получение теплоты Q > 0 от единственного термостата и отдача окружению W = −Q."
      ],
      "explanations": [
        "Неверно: превращение работы в теплоту разрешено. Запрет относится к полному превращению теплоты в работу с единственным термостатом и без других результатов.",
        "Неверно: такое расширение не возвращает газ в исходное состояние. Условие цикличности в формулировке существенно.",
        "Неверно: так работает двигатель с двумя термостатами; это возможно, если его КПД удовлетворяет пределу Карно.",
        "Верно: первое начало допускает баланс Q + W = 0, но второе запрещает такой циклический режим с единственным термостатом. По принятому в курсе соглашению отдаче работы соответствует W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Квазистатическое сжатие обязательно локально обратимо.",
      "choices": [
        "Верно",
        "Неверно"
      ],
      "explanations": [
        "Неверно: квазистатическое сжатие может, например, происходить с трением. Трение рассеивает энергию и оставляет след в газе или его окружении, даже если газ остаётся близким к равновесию.",
        "Верно: квазистатичности недостаточно. Нужно также устранить диссипацию и проводить обмены при бесконечно малых разностях давления, температуры или химического потенциала."
      ]
    },
    "l6-q7": {
      "question": "Какая последовательность описывает двигательный цикл Карно для идеального газа, если все его участки локально обратимы?",
      "choices": [
        "Изотермическое расширение при T_H, обратимое адиабатическое расширение, изотермическое сжатие при T_C, затем обратимое адиабатическое сжатие.",
        "Изотермическое расширение при T_H, изохорическое охлаждение, изотермическое сжатие при T_C, затем изохорическое нагревание.",
        "Изотермическое расширение при T_C, адиабатическое сжатие, изотермическое сжатие при T_H, затем адиабатическое расширение."
      ],
      "explanations": [
        "Верно: теплообмены происходят на двух локально обратимых изотермах; адиабаты соединяют две температуры без теплообмена. Двигательный цикл проходится по часовой стрелке на диаграмме (V, P).",
        "Неверно: изотермы цикла Карно соединяются адиабатами, а не изохорами. Изохорические участки изменили бы цикл и его теплообмены.",
        "Неверно: эта последовательность описывает цикл Карно в обратном направлении. Тогда машина получает работу, чтобы забирать теплоту у холодного термостата и отдавать её горячему."
      ]
    },
    "l6-vf2": {
      "question": "Второе начало задаёт термодинамически допустимое направление процессов, но само по себе не определяет их длительность и коэффициенты переноса.",
      "choices": [
        "Верно",
        "Неверно"
      ],
      "explanations": [
        "Верно: оно ограничивает возможные процессы и характеризует равновесие при предположениях курса. Оно не даёт ни времени релаксации, ни теплопроводности, ни вязкости, ни коэффициента диффузии.",
        "Неверно: второе начало не является полным уравнением динамики. Для описания скорости эволюции и промежуточных состояний резко протекающего процесса нужны дополнительные законы."
      ]
    }
  },
  "zh": {
    "l6-q1": {
      "question": "本课中，过程的全局可逆性要求什么？",
      "choices": [
        "系统自身能够恢复初态，而不论外界发生了哪些变化。",
        "存在一个返回过程，能恢复系统及其全部外界，且不留下任何其他变化。",
        "返回过程必须严格沿同一路径反向进行。",
        "过程是准静态的，系统在每一步都保持接近平衡。"
      ],
      "explanations": [
        "错误：只恢复系统自身，可能仍在热库或功源中留下痕迹。还必须恢复全部外界。",
        "正确：只需至少存在一种返回方法，能消除系统及其外界的全部变化。全局定义不限定返回的路径。",
        "错误：重走原路径属于局部可逆性的要求。全局定义允许沿另一条路径返回。",
        "错误：准静态性并不充分。仍可能存在摩擦，妨碍系统及其外界的完整恢复。"
      ]
    },
    "l6-q11": {
      "question": "一个封闭系统向温度为 300 K 的热库放出 2 400 J 热量。其熵变为 ΔS = −6 J/K。交换熵 S_e 和熵产生量 S_i 分别是多少？",
      "choices": [
        "S_e = −8 J/K，S_i = +2 J/K。",
        "S_e = +8 J/K，S_i = +2 J/K。",
        "S_e = −6 J/K，S_i = 0 J/K。",
        "S_e = −8 J/K，S_i = +14 J/K。"
      ],
      "explanations": [
        "正确：Q = −2 400 J，因此 S_e = Q/T_ext = −8 J/K。收支式 ΔS = S_e + S_i 给出 S_i = +2 J/K。热库的熵增加 8 J/K；若其他装置的熵不变，总熵就增加 2 J/K。",
        "错误：S_e 从系统的角度计量，而系统在放热，因此 S_e = −2 400/300 = −8 J/K。+8 J/K 是热库的熵增。",
        "错误：S_e 由 Q/T_ext = −8 J/K 确定，而非由 ΔS 确定。两者之差才是熵产生量：S_i = ΔS − S_e = +2 J/K。",
        "错误：必须保留 ΔS 的符号：S_i = (−6) − (−8) = +2 J/K。将绝对值 6 和 8 相加，得不到熵产生量。"
      ]
    },
    "l6-q15": {
      "question": "热量 Q = 1 200 J 直接从温度为 600 K 的热库传向温度为 300 K 的热库。两个热库的总熵变是多少？",
      "choices": [
        "+2 J/K。",
        "0 J/K。",
        "+6 J/K。",
        "+4 J/K。"
      ],
      "explanations": [
        "正确：ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K。该收支式中没有持续时间；导热性差的壁会减慢传热，但不能消除有限温差造成的不可逆性。",
        "错误：能量守恒，但各熵变分别由不同的温度倒数加权。",
        "错误：这个结果把绝对值相加了。高温热库的熵减少 1 200/600 = 2 J/K，低温热库的熵增加 1 200/300 = 4 J/K，应该计算 −2 + 4。",
        "错误：+4 J/K 只是低温热库的熵变。总收支还须包含高温热库的 −2 J/K。"
      ]
    },
    "l6-q3": {
      "question": "为什么普通制冷机不违反克劳修斯表述？",
      "choices": [
        "因为从低温处向高温处传热的同时，还需要外界输入功。",
        "因为工质每个循环都恢复初态，从而消除了对两个热库的影响。",
        "因为一个循环中热量与功的代数和为零，这就足以允许这种传热。"
      ],
      "explanations": [
        "正确：克劳修斯禁止的是以从低温处向高温处传热为唯一效果的循环过程。制冷机接受功，因此传热并非其唯一效果。",
        "错误：工质恢复了初态，但热库交换了能量。循环性并不能消除这些外界变化。",
        "错误：能量守恒是必要条件，但并不充分。第二定律施加了额外的物理约束。"
      ]
    },
    "l6-q13": {
      "question": "n 摩尔理想气体在刚性绝热容器内经历焦耳–盖吕萨克膨胀，从体积 v 膨胀到 V > v。移去隔板不改变外界。哪个收支正确？",
      "choices": [
        "Q = W = 0，因此 ΔU_gas = 0，ΔS_gas = 0。",
        "Q = 0，W = ΔU_gas < 0，ΔS_gas > 0。",
        "Q = W = ΔU_gas = 0，ΔS_tot = 0，尽管 ΔS_gas > 0。",
        "Q = W = ΔU_gas = 0，ΔS_tot = nR ln(V/v) > 0。"
      ],
      "explanations": [
        "错误：Q = W = 0 确实意味着 ΔU_gas = 0，但不意味着 ΔS_gas = 0。没有热交换并不排除熵产生：关系 dS = δQ_rev/T 不适用于这次不可逆膨胀中实际交换的热量。",
        "错误：气体向真空膨胀，不输出功，因此 W = 0。结合 Q = 0，可得 ΔU_gas = 0。没有能量输入，熵仍可增加。",
        "错误：外界保持不变，因此 ΔS_ext = 0。外界没有熵减来抵消气体的熵增：ΔS_tot = ΔS_gas > 0。",
        "正确：Q = W = 0 给出 ΔU_gas = 0。外界没有变化，因此 ΔS_tot = ΔS_gas = nR ln(V/v) > 0。这一增量证明，任何返回过程都无法在不于别处留下痕迹的同时恢复气体及其外界。"
      ]
    },
    "l6-q6": {
      "question": "一个双热源动力机在 600 K 与 300 K 之间运行，每个循环吸收 Q_H = 1 000 J 热量。输出功 |W| 的最大值是多少？",
      "choices": [
        "1 000 J。",
        "约 667 J。",
        "500 J。",
        "不知道工质就无法确定。"
      ],
      "explanations": [
        "错误：一个循环中，不可能把从高温热库吸收的全部热量都转化为功。即使 ΔU = 0，第二定律仍要求向低温热库放出一部分热量。",
        "错误：667 J 近似等于 Q_H T_H/(T_H + T_C)。但卡诺效率为 1 − T_C/T_H，而非 T_H/(T_H + T_C)。",
        "正确：最大效率是卡诺效率，η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2。因此 |W|_max = η_max Q_H = 500 J。局部可逆双热源机器可达到这一数值。",
        "错误：两个热库的温度和吸收的热量足以确定最大功：|W|_max = Q_H (1 − T_C/T_H)。不需要知道工质或动力机的具体细节。"
      ]
    },
    "l6-q18": {
      "question": "在一个孤立整体内，两个组成固定的子系统可以独立地交换能量和体积。关于其平衡态，能得出什么结论？",
      "choices": [
        "不论子系统大小如何，都有 U_1 = U_2，V_1 = V_2。",
        "P_1/T_1 = P_2/T_2，但温度不一定相等。",
        "T_1 = T_2，但压强不一定相等。",
        "T_1 = T_2，P_1 = P_2。"
      ],
      "explanations": [
        "错误：平衡不要求广延量相等。两个大小不同的子系统在平衡时可以具有不同的能量和体积。",
        "错误：这一等式只使 dV_1 的系数为零。能量也可独立重新分配，因此 dU_1 的系数也须为零，即 T_1 = T_2。这里使用的判据是总熵的驻定性。",
        "错误：由于也允许体积交换，平衡必须同时满足力学平衡和热平衡。因此压强也必须相等。",
        "正确：平衡时，总熵对于所有允许的重新分配都是驻定的：dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0。能量和体积交换相互独立，因此两个系数分别为零：T_1 = T_2，P_1 = P_2。"
      ]
    },
    "l6-q8": {
      "question": "一台循环机器从温度为 T_k > 0 的热库接收带符号热量 Q_k，并与理想功源交换功。哪个说法符合克劳修斯不等式及本课定义？",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0，全局不可逆循环的值严格为正。",
        "所有循环都满足 Σ_k Q_k/T_k = 0，因为机器的熵恢复初值。",
        "Σ_k Q_k/T_k ≤ 0，且等号本身就能证明原路径局部可逆。",
        "Σ_k Q_k/T_k ≤ 0；等号刻画全局可逆性，但不能证明局部可逆性。"
      ],
      "explanations": [
        "错误：机器接收热量时，Q_k 计为正。按此约定，该和为负或零。",
        "错误：一个循环中 ΔS_system = 0，但交换熵可以为负，并由正的熵产生量补偿。",
        "错误：符号正确，但取等号的情况是借助辅助机器构造全局返回，不能证明原机器能够重走自身的路径。",
        "正确：局部可逆循环取等号。反过来，和为零时可以借助辅助机器恢复各源；和严格为负则表明循环全局不可逆。"
      ]
    },
    "l6-q9": {
      "question": "本课如何由局部可逆循环满足的等式 ∮ δQ_rev/T = 0 构建熵？",
      "choices": [
        "由此推出热量 Q 是状态函数。",
        "用 δQ_rev/T 的积分定义 S(B) − S(A)。",
        "用任意实际路径上 δQ/T_ext 的积分定义 S(B) − S(A)。"
      ],
      "explanations": [
        "错误：δQ_rev/T 才是全微分。交换的热量仍取决于路径。",
        "正确：两条局部可逆路径，其中一条反向经过，可以构成积分为零的循环。于是，在每个可逆连通区域内，熵的定义允许相差一个加法常数，单位为 J/K。",
        "错误：在实际不可逆路径上，δQ/T_ext 的积分给出交换熵，不一定是 ΔS。构建熵使用的是局部可逆路径上的 δQ_rev/T。"
      ]
    },
    "l6-q2": {
      "question": "哪个说法正确描述了局部可逆性？",
      "choices": [
        "只需系统的初态和终态是平衡态。",
        "任何能全局恢复系统及其外界的方法都会自动保证局部可逆性。",
        "它要求通过约束的无穷小改变，逆转平衡态序列中的每一步。",
        "它允许重走系统的路径，同时保持热交换和功交换的符号不变。"
      ],
      "explanations": [
        "错误：中间状态以及逆转每一步的可能性，是局部定义的关键。",
        "错误：全局返回可以沿另一条路径实现。它的存在本身不能证明原路径局部可逆。",
        "正确：此时可以反向经历同一状态序列，同时恢复外界。因此局部可逆性蕴含全局可逆性。",
        "错误：反向经过局部可逆路径时，每一步的热交换和力学交换都改变符号。"
      ]
    },
    "l6-q12": {
      "question": "一个不可逆过程连接平衡态 A 和 B，但中间状态远离平衡。哪个说法正确？",
      "choices": [
        "熵变 ΔS 等于实际路径上 δQ_actual/T_ext 的积分。",
        "熵变 ΔS 可以沿 A 与 B 之间的局部可逆路径计算，而 S_e 和 S_i 取决于实际过程。",
        "仅凭状态 A 和 B 就能确定交换熵 S_e 和熵产生量 S_i。"
      ],
      "explanations": [
        "错误：该积分给出交换熵 S_e。收支式为 ΔS = S_e + S_i；不考虑熵产生量，仅凭实际交换的热量不足以计算 ΔS。",
        "正确：S 是状态函数，因此可沿连接相同状态的局部可逆路径计算 ΔS = ∫ δQ_rev/T。随后回到实际交换，确定 S_e = ∫ δQ_actual/T_ext 和 S_i = ΔS − S_e。",
        "错误：状态 A 和 B 确定 ΔS，但不能确定它如何分为交换熵与熵产生量。S_e 取决于实际交换的热量及外界温度，再由 ΔS = S_e + S_i 确定 S_i。"
      ]
    },
    "l6-q4": {
      "question": "开尔文–普朗克表述具体禁止哪种运行方式？",
      "choices": [
        "在一个循环中将接收的功转化为热。",
        "理想气体在非循环的等温膨胀中吸收热量 Q > 0，并输出功 W = −Q。",
        "在一个循环中从高温热库吸热、向低温热库放热并输出功。",
        "完成一个循环，其唯一效果是从单一热库吸收热量 Q > 0，并向外界输出 W = −Q。"
      ],
      "explanations": [
        "错误：功转化为热是允许的。所禁止的是只与单一热库交换热、没有其他效果，却将热全部转化为功。",
        "错误：该膨胀没有使气体恢复初态。表述中的循环条件至关重要。",
        "错误：这是双热源动力机的运行方式，只要效率符合卡诺上限，就可以实现。",
        "正确：第一定律允许 Q + W = 0 这一收支，但第二定律禁止这种单热源循环运行。按本课程的约定，输出功对应 W < 0。"
      ]
    },
    "l6-vf1": {
      "question": "准静态压缩必然是局部可逆的。",
      "choices": [
        "对",
        "错"
      ],
      "explanations": [
        "错误：例如，准静态压缩可以伴随摩擦。即使气体保持接近平衡，摩擦仍会耗散能量，并在气体或外界中留下痕迹。",
        "正确：准静态性并不充分。还须消除耗散，并通过无穷小的压强差、温差或化学势差进行交换。"
      ]
    },
    "l6-q7": {
      "question": "哪一序列描述了理想气体的卡诺动力循环，且各段均局部可逆？",
      "choices": [
        "温度为 T_H 的等温膨胀、可逆绝热膨胀、温度为 T_C 的等温压缩，最后是可逆绝热压缩。",
        "温度为 T_H 的等温膨胀、等容冷却、温度为 T_C 的等温压缩，最后是等容加热。",
        "温度为 T_C 的等温膨胀、绝热压缩、温度为 T_H 的等温压缩，最后是绝热膨胀。"
      ],
      "explanations": [
        "正确：热交换发生在两个局部可逆等温过程中；绝热过程连接两种温度，期间没有热交换。在 (V, P) 图中，动力循环沿顺时针方向进行。",
        "错误：卡诺循环中连接两个等温过程的是绝热过程，而非等容过程。换成等容段会改变循环及其热交换。",
        "错误：该序列描述反向进行的卡诺循环。此时机器接受功，从低温热库吸热，向高温热库放热。"
      ]
    },
    "l6-vf2": {
      "question": "第二定律规定热力学所允许的演化方向，但不能单独确定演化持续时间或输运系数。",
      "choices": [
        "对",
        "错"
      ],
      "explanations": [
        "正确：它约束过程，并在本课的假设下刻画平衡态。它不给出弛豫时间、热导率、黏度或扩散系数。",
        "错误：第二定律并非完整的动力学方程。要描述演化速率以及剧烈过程中出现的中间状态，还需要其他定律。"
      ]
    }
  },
  "ja": {
    "l6-q1": {
      "question": "本課では、変化の大域的可逆性は何を要求するか。",
      "choices": [
        "外界の変化にかかわらず、系だけが初期状態へ戻れること。",
        "系と外界全体を復元し、ほかに何の変化も残さない帰還が可能なこと。",
        "帰還が必ず同じ経路を逆向きにたどること。",
        "変化が準静的で、各段階で系が平衡に近いこと。"
      ],
      "explanations": [
        "誤り。系だけを復元しても、熱浴や仕事源に痕跡が残りうる。外界全体も復元する必要がある。",
        "正しい。系と外界のすべての変化を消す帰還の方法が、少なくとも一つあればよい。大域的定義は帰還経路を指定しない。",
        "誤り。経路を逆にたどることは局所的可逆性に関わる。大域的定義は別の帰還経路も認める。",
        "誤り。準静的であるだけでは十分でない。摩擦が残り、系と外界の完全な復元を妨げることがある。"
      ]
    },
    "l6-q11": {
      "question": "閉じた系が 300 K の熱浴へ 2 400 J を放熱する。系のエントロピー変化は ΔS = −6 J/K である。交換エントロピー S_e と生成エントロピー S_i はいくらか。",
      "choices": [
        "S_e = −8 J/K、S_i = +2 J/K。",
        "S_e = +8 J/K、S_i = +2 J/K。",
        "S_e = −6 J/K、S_i = 0 J/K。",
        "S_e = −8 J/K、S_i = +14 J/K。"
      ],
      "explanations": [
        "正しい。Q = −2 400 J なので S_e = Q/T_ext = −8 J/K。収支 ΔS = S_e + S_i から S_i = +2 J/K となる。熱浴のエントロピーは 8 J/K 増えるため、ほかの装置のエントロピーが変わらなければ全エントロピーは 2 J/K 増える。",
        "誤り。S_e は放熱する系の側から数えるので、S_e = −2 400/300 = −8 J/K。+8 J/K は熱浴の増加分である。",
        "誤り。S_e は ΔS ではなく Q/T_ext = −8 J/K で決まる。その差が生成エントロピーであり、S_i = ΔS − S_e = +2 J/K。",
        "誤り。ΔS の符号を保つ必要がある。S_i = (−6) − (−8) = +2 J/K であり、絶対値 6 と 8 を足しても生成エントロピーにはならない。"
      ]
    },
    "l6-q15": {
      "question": "熱量 Q = 1 200 J が 600 K の熱浴から 300 K の熱浴へ直接移る。二つの熱浴の全エントロピー変化はいくらか。",
      "choices": [
        "+2 J/K。",
        "0 J/K。",
        "+6 J/K。",
        "+4 J/K。"
      ],
      "explanations": [
        "正しい。ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K。この収支に所要時間は現れない。熱を通しにくい壁は移動を遅くするが、有限の温度差による不可逆性を消さない。",
        "誤り。エネルギーは保存されるが、エントロピー変化はそれぞれ異なる温度の逆数で重みづけされる。",
        "誤り。これは絶対値を足した結果である。高温熱浴は 1 200/600 = 2 J/K を失い、低温熱浴は 1 200/300 = 4 J/K を得るので、−2 + 4 と計算する。",
        "誤り。+4 J/K は低温熱浴だけの変化である。全体の収支には高温熱浴の −2 J/K も含める。"
      ]
    },
    "l6-q3": {
      "question": "通常の冷凍機がクラウジウスの表現に矛盾しないのはなぜか。",
      "choices": [
        "低温側から高温側への熱移動に、外界からの仕事の供給が伴うから。",
        "流体が各サイクルで初期状態に戻り、二つの熱浴への影響を消すから。",
        "1 サイクルの熱と仕事の代数和がゼロであり、それだけでこの移動が許されるから。"
      ],
      "explanations": [
        "正しい。クラウジウスが禁じるのは、低温側から高温側への熱移動だけを結果とするサイクルである。冷凍機は仕事を受け取るので、熱移動だけが結果ではない。",
        "誤り。流体は初期状態に戻るが、熱浴はエネルギーを交換している。サイクルであることは、この外界の変化を消さない。",
        "誤り。エネルギー保存は必要だが十分ではない。第二法則は追加の物理的制約を課す。"
      ]
    },
    "l6-q13": {
      "question": "n モルの理想気体が剛体の断熱容器内で、体積 v から V > v へジュール–ゲイ＝リュサック膨張する。仕切りの除去は外界を変化させない。正しい収支はどれか。",
      "choices": [
        "Q = W = 0 なので ΔU_gas = 0、ΔS_gas = 0。",
        "Q = 0、W = ΔU_gas < 0、ΔS_gas > 0。",
        "Q = W = ΔU_gas = 0、ΔS_tot = 0。ただし ΔS_gas > 0。",
        "Q = W = ΔU_gas = 0、ΔS_tot = nR ln(V/v) > 0。"
      ],
      "explanations": [
        "誤り。Q = W = 0 から ΔU_gas = 0 は導けるが、ΔS_gas = 0 は導けない。熱交換がなくてもエントロピーは生成される。dS = δQ_rev/T は、この不可逆膨張の実際の熱には適用できない。",
        "誤り。気体は真空へ膨張するので仕事を供給せず、W = 0 である。Q = 0 と合わせて ΔU_gas = 0。エネルギー供給なしにエントロピーが増える。",
        "誤り。外界は変わらないので ΔS_ext = 0。気体のエントロピー増加を相殺する外界の減少はなく、ΔS_tot = ΔS_gas > 0。",
        "正しい。Q = W = 0 から ΔU_gas = 0。外界は変化しないので ΔS_tot = ΔS_gas = nR ln(V/v) > 0。この増加は、ほかの場所に痕跡を残さずに気体と外界を復元する帰還が存在しないことを示す。"
      ]
    },
    "l6-q6": {
      "question": "二熱源動力機関が 600 K と 300 K の間で動き、各サイクルに Q_H = 1 000 J を受け取る。供給する仕事 |W| の最大値はいくらか。",
      "choices": [
        "1 000 J。",
        "約 667 J。",
        "500 J。",
        "作動流体がわからなければ求められない。"
      ],
      "explanations": [
        "誤り。1 サイクルで高温熱浴から受け取った熱をすべて仕事には変換できない。ΔU = 0 でも、第二法則はその一部を低温熱浴へ渡すことを要求する。",
        "誤り。667 J はおよそ Q_H T_H/(T_H + T_C) に対応する。しかしカルノー効率は 1 − T_C/T_H であり、T_H/(T_H + T_C) ではない。",
        "正しい。最大効率はカルノー効率 η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2。よって |W|_max = η_max Q_H = 500 J となる。局所的に可逆な二熱源機関がこの値を達成する。",
        "誤り。二つの熱浴の温度と受け取る熱量だけで、最大仕事 |W|_max = Q_H (1 − T_C/T_H) を計算できる。流体や機関の詳細は不要である。"
      ]
    },
    "l6-q18": {
      "question": "組成が固定された二つの部分系が、孤立した全体の中でエネルギーと体積を独立に交換できる。その平衡状態について何がいえるか。",
      "choices": [
        "部分系の大きさによらず U_1 = U_2、V_1 = V_2。",
        "P_1/T_1 = P_2/T_2 だが、温度が等しいとは限らない。",
        "T_1 = T_2 だが、圧力が等しいとは限らない。",
        "T_1 = T_2、P_1 = P_2。"
      ],
      "explanations": [
        "誤り。平衡は示量量の一致を要求しない。大きさが異なる二つの部分系は、平衡でもエネルギーや体積が異なりうる。",
        "誤り。この等式は dV_1 の係数だけをゼロにする。エネルギーも独立に再配分できるので、dU_1 の係数もゼロ、すなわち T_1 = T_2 でなければならない。用いる基準は全エントロピーの停留性である。",
        "誤り。体積の交換も許されるので、熱平衡と同時に力学的平衡も必要である。したがって圧力も等しくなければならない。",
        "正しい。平衡では、許されるすべての再配分に対して全エントロピーが停留する。dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0。エネルギーと体積の交換は独立なので、両係数がゼロとなり、T_1 = T_2、P_1 = P_2 を得る。"
      ]
    },
    "l6-q8": {
      "question": "循環機関が T_k > 0 の熱浴から符号付き熱量 Q_k を受け取り、理想的な仕事源と仕事を交換する。クラウジウスの不等式と本課の定義に合う記述はどれか。",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0 で、大域的に不可逆なサイクルでは厳密に正となる。",
        "機関のエントロピーが初期値に戻るので、すべてのサイクルで Σ_k Q_k/T_k = 0。",
        "Σ_k Q_k/T_k ≤ 0 であり、等号だけで元の経路の局所的可逆性が証明される。",
        "Σ_k Q_k/T_k ≤ 0。等号は大域的可逆性を特徴づけるが、局所的可逆性を証明しない。"
      ],
      "explanations": [
        "誤り。Q_k は機関が受け取るとき正と数える。この規約では和は負またはゼロである。",
        "誤り。1 サイクルで ΔS_system = 0 だが、交換エントロピーは負でもよく、正のエントロピー生成によって相殺されうる。",
        "誤り。符号は正しいが、等号の場合は補助機関による大域的帰還を構成する。元の機関が自身の経路を逆にたどれることは示していない。",
        "正しい。局所的に可逆なサイクルは等号を満たす。逆に和がゼロなら、補助機関によって各供給源を復元できる。和が厳密に負なら、大域的に不可逆なサイクルである。"
      ]
    },
    "l6-q9": {
      "question": "本課では、局所的に可逆なサイクルの等式 ∮ δQ_rev/T = 0 からどのようにエントロピーを構成するか。",
      "choices": [
        "熱量 Q が状態関数だと結論する。",
        "δQ_rev/T の積分によって S(B) − S(A) を定義する。",
        "任意の実際の経路で δQ/T_ext を積分して S(B) − S(A) を定義する。"
      ],
      "explanations": [
        "誤り。完全微分なのは δQ_rev/T である。交換する熱は引き続き経路に依存する。",
        "正しい。二つの局所的に可逆な経路の一方を逆にたどれば、積分がゼロのサイクルになる。こうして可逆的に連結な各領域で、加法定数を除いてエントロピーを定義できる。単位は J/K である。",
        "誤り。実際の不可逆な経路での δQ/T_ext の積分は交換エントロピーを与え、必ずしも ΔS ではない。構成に用いるのは局所的に可逆な経路の δQ_rev/T である。"
      ]
    },
    "l6-q2": {
      "question": "局所的可逆性を正しく説明する記述はどれか。",
      "choices": [
        "系の初期状態と最終状態が平衡状態であれば十分である。",
        "系と外界を大域的に復元するどんな方法からも自動的に導かれる。",
        "拘束の無限小の変更によって、平衡状態の列の各段階を逆転できることを要求する。",
        "熱と仕事の交換の符号を保ったまま、系の経路を逆にたどれる。"
      ],
      "explanations": [
        "誤り。中間状態と、各段階を逆転できることが局所的定義には不可欠である。",
        "誤り。大域的な帰還は別の経路を使いうる。その存在だけでは元の経路の局所的可逆性は証明されない。",
        "正しい。このとき同じ状態の列を逆向きにたどり、外界も復元できる。したがって局所的可逆性は大域的可逆性を含意する。",
        "誤り。局所的に可逆な経路を逆にたどると、熱的・力学的交換は各段階で符号を変える。"
      ]
    },
    "l6-q12": {
      "question": "不可逆な変化が二つの平衡状態 A、B を結ぶが、中間状態は平衡から遠い。正しい記述はどれか。",
      "choices": [
        "エントロピー変化 ΔS は実際の経路の δQ_actual/T_ext の積分である。",
        "ΔS は A、B 間の局所的に可逆な経路で計算できる一方、S_e と S_i は実際の過程に依存する。",
        "状態 A、B だけで交換エントロピー S_e と生成エントロピー S_i が決まる。"
      ],
      "explanations": [
        "誤り。この積分は交換エントロピー S_e を与える。収支は ΔS = S_e + S_i なので、生成エントロピーを考慮せずに実際の交換熱だけから ΔS は求められない。",
        "正しい。S は状態関数なので、同じ状態を結ぶ局所的に可逆な経路で ΔS = ∫ δQ_rev/T を計算できる。次に実際の交換に戻り、S_e = ∫ δQ_actual/T_ext と S_i = ΔS − S_e を求める。",
        "誤り。状態 A、B は ΔS を決めるが、交換エントロピーと生成エントロピーへの分解は決めない。S_e は実際の交換熱と外界温度に依存し、S_i は収支 ΔS = S_e + S_i から求める。"
      ]
    },
    "l6-q4": {
      "question": "ケルビン–プランクの表現が正確に禁じる動作はどれか。",
      "choices": [
        "1 サイクルで受け取った仕事を熱に変換すること。",
        "理想気体の非循環の等温膨張中に、熱量 Q > 0 を受け取り、仕事 W = −Q を供給すること。",
        "1 サイクルで高温熱浴から熱を取り出し、低温熱浴へ放熱しながら仕事を供給すること。",
        "単一の熱浴から熱量 Q > 0 を取り出し、外界へ W = −Q を供給することだけを結果とするサイクル。"
      ],
      "explanations": [
        "誤り。仕事から熱への変換は許される。禁じられるのは、単一の熱浴を使い、ほかの結果を残さず熱を完全に仕事へ変換することである。",
        "誤り。この膨張は気体を初期状態に戻さない。表現にあるサイクルという条件が本質的である。",
        "誤り。これは二熱源動力機関の動作で、効率がカルノーの限界を満たせば可能である。",
        "正しい。第一法則はこの収支 Q + W = 0 を許すが、第二法則は単一熱源によるこの循環動作を禁じる。本講義の規約では、仕事の供給は W < 0 に対応する。"
      ]
    },
    "l6-vf1": {
      "question": "準静的な圧縮は必ず局所的に可逆である。",
      "choices": [
        "正しい",
        "誤り"
      ],
      "explanations": [
        "誤り。例えば準静的な圧縮でも摩擦を伴いうる。気体が平衡に近くても、摩擦はエネルギーを散逸させ、気体や外界に痕跡を残す。",
        "正しい。準静的であるだけでは十分でない。散逸も除き、無限小の圧力差、温度差、化学ポテンシャル差で交換を進める必要がある。"
      ]
    },
    "l6-q7": {
      "question": "すべての枝が局所的に可逆な、理想気体のカルノー動力サイクルを表す順序はどれか。",
      "choices": [
        "T_H での等温膨張、可逆断熱膨張、T_C での等温圧縮、可逆断熱圧縮。",
        "T_H での等温膨張、定積冷却、T_C での等温圧縮、定積加熱。",
        "T_C での等温膨張、断熱圧縮、T_H での等温圧縮、断熱膨張。"
      ],
      "explanations": [
        "正しい。熱交換は局所的に可逆な二つの等温変化で起こり、断熱変化は熱交換なしに二つの温度を結ぶ。(V, P) 線図では動力サイクルを時計回りにたどる。",
        "誤り。カルノーサイクルの等温変化を結ぶのは断熱変化であり、定積変化ではない。定積の枝に変えるとサイクルと熱交換が変わる。",
        "誤り。この順序はカルノーサイクルの逆向きに対応する。機関は仕事を受け取り、低温熱浴から熱を取り出して高温熱浴へ渡す。"
      ]
    },
    "l6-vf2": {
      "question": "第二法則は熱力学的に許される変化の方向を定めるが、それだけでは所要時間や輸送係数を決めない。",
      "choices": [
        "正しい",
        "誤り"
      ],
      "explanations": [
        "正しい。本講義の仮定の下で変化を制約し、平衡を特徴づける。しかし緩和時間、熱伝導率、粘度、拡散係数は与えない。",
        "誤り。第二法則は完全な動力学方程式ではない。変化の速さや激しい変化の中間状態を記述するには、追加の法則が必要である。"
      ]
    }
  },
  "ko": {
    "l6-q1": {
      "question": "이 강의에서 과정의 전역적 가역성은 무엇을 요구하는가?",
      "choices": [
        "주위가 어떻게 변했든 계 자체가 처음 상태로 돌아갈 수 있어야 한다.",
        "계와 주위 전체를 복원하고 다른 어떤 변화도 남기지 않는 복귀가 가능해야 한다.",
        "반드시 같은 경로를 반대 방향으로 따라 돌아와야 한다.",
        "과정이 준정적이며 계가 각 단계에서 평형에 가까워야 한다."
      ],
      "explanations": [
        "틀리다. 계 자체만 복원하면 열원이나 일 공급원에 흔적이 남을 수 있다. 주위 전체도 복원해야 한다.",
        "맞다. 계와 주위의 모든 변화를 지우는 복귀 방법이 적어도 하나 있으면 된다. 전역적 정의는 복귀 경로를 지정하지 않는다.",
        "틀리다. 경로를 거꾸로 따르는 것은 국소적 가역성에 해당한다. 전역적 정의는 다른 복귀 경로도 허용한다.",
        "틀리다. 준정적 성질만으로는 부족하다. 마찰이 남아 계와 주위의 완전한 복원을 막을 수 있다."
      ]
    },
    "l6-q11": {
      "question": "닫힌계가 300 K의 열원에 2 400 J를 내놓는다. 계의 엔트로피 변화는 ΔS = −6 J/K이다. 교환 엔트로피 S_e와 생성 엔트로피 S_i는 얼마인가?",
      "choices": [
        "S_e = −8 J/K, S_i = +2 J/K.",
        "S_e = +8 J/K, S_i = +2 J/K.",
        "S_e = −6 J/K, S_i = 0 J/K.",
        "S_e = −8 J/K, S_i = +14 J/K."
      ],
      "explanations": [
        "맞다. Q = −2 400 J이므로 S_e = Q/T_ext = −8 J/K이다. 수지 ΔS = S_e + S_i에서 S_i = +2 J/K를 얻는다. 열원은 8 J/K를 얻으므로 다른 장치의 엔트로피가 변하지 않으면 전체 엔트로피는 2 J/K 증가한다.",
        "틀리다. S_e는 열을 내놓는 계의 관점에서 센다. 따라서 S_e = −2 400/300 = −8 J/K이다. +8 J/K는 열원의 증가량이다.",
        "틀리다. S_e는 ΔS가 아니라 Q/T_ext = −8 J/K로 정해진다. 그 차이가 생성 엔트로피로, S_i = ΔS − S_e = +2 J/K이다.",
        "틀리다. ΔS의 부호를 유지해야 한다. S_i = (−6) − (−8) = +2 J/K이다. 절댓값 6과 8을 더해서는 엔트로피 생성량을 얻을 수 없다."
      ]
    },
    "l6-q15": {
      "question": "열량 Q = 1 200 J가 600 K의 열원에서 300 K의 열원으로 직접 이동한다. 두 열원의 전체 엔트로피 변화는 얼마인가?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "맞다. ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K이다. 이 수지에는 시간이 나타나지 않는다. 열전도성이 낮은 벽은 전달을 늦추지만 유한한 온도차에 따른 비가역성을 없애지는 않는다.",
        "틀리다. 에너지는 보존되지만 엔트로피 변화에는 서로 다른 온도의 역수가 가중치로 들어간다.",
        "틀리다. 이 값은 절댓값들을 더한 결과이다. 고온 열원은 1 200/600 = 2 J/K를 잃고 저온 열원은 1 200/300 = 4 J/K를 얻으므로 −2 + 4로 계산해야 한다.",
        "틀리다. +4 J/K는 저온 열원만의 변화이다. 전체 수지에는 고온 열원의 −2 J/K도 포함해야 한다."
      ]
    },
    "l6-q3": {
      "question": "보통의 냉동기가 클라우지우스 진술과 모순되지 않는 이유는 무엇인가?",
      "choices": [
        "차가운 곳에서 뜨거운 곳으로의 열전달에 외부 일의 공급이 동반되기 때문이다.",
        "유체가 매 사이클 처음 상태로 돌아오므로 두 열원에 미친 효과가 취소되기 때문이다.",
        "한 사이클에서 열과 일의 대수적 합이 0이며, 이것만으로 해당 전달이 허용되기 때문이다."
      ],
      "explanations": [
        "맞다. 클라우지우스는 차가운 곳에서 뜨거운 곳으로의 전달만을 유일한 효과로 갖는 순환 과정을 금지한다. 냉동기는 일을 받으므로 열전달만이 유일한 효과는 아니다.",
        "틀리다. 유체는 처음 상태로 돌아오지만 열원들은 에너지를 교환했다. 순환적이라는 성질은 이러한 외부 변화를 없애지 않는다.",
        "틀리다. 에너지 보존은 필요조건이지만 충분하지 않다. 제2법칙은 추가적인 물리적 제약을 준다."
      ]
    },
    "l6-q13": {
      "question": "n몰의 이상기체가 단단한 단열 용기 안에서 부피 v에서 V > v로 줄–게이뤼삭 팽창을 한다. 칸막이 제거는 주위를 바꾸지 않는다. 올바른 수지는 무엇인가?",
      "choices": [
        "Q = W = 0이므로 ΔU_gas = 0, ΔS_gas = 0이다.",
        "Q = 0, W = ΔU_gas < 0, ΔS_gas > 0이다.",
        "Q = W = ΔU_gas = 0이고 ΔS_tot = 0이지만 ΔS_gas > 0이다.",
        "Q = W = ΔU_gas = 0이고 ΔS_tot = nR ln(V/v) > 0이다."
      ],
      "explanations": [
        "틀리다. Q = W = 0에서 ΔU_gas = 0은 따르지만 ΔS_gas = 0은 따르지 않는다. 열교환이 없어도 엔트로피는 생성될 수 있다. dS = δQ_rev/T는 이 비가역 팽창에서 실제로 교환한 열에 적용되지 않는다.",
        "틀리다. 기체는 진공으로 팽창하므로 일을 공급하지 않아 W = 0이다. Q = 0과 함께 ΔU_gas = 0을 얻는다. 에너지 공급 없이도 엔트로피는 증가한다.",
        "틀리다. 주위가 변하지 않으므로 ΔS_ext = 0이다. 기체의 엔트로피 증가를 상쇄할 외부 감소는 없다. ΔS_tot = ΔS_gas > 0이다.",
        "맞다. Q = W = 0에서 ΔU_gas = 0이다. 주위가 변하지 않으므로 ΔS_tot = ΔS_gas = nR ln(V/v) > 0이다. 이 증가는 다른 곳에 흔적을 남기지 않고 기체와 주위를 복원하는 복귀가 불가능함을 증명한다."
      ]
    },
    "l6-q6": {
      "question": "두 열원 동력 기관이 600 K와 300 K 사이에서 작동하며 매 사이클 Q_H = 1 000 J를 받는다. 공급하는 일 |W|의 최대값은 얼마인가?",
      "choices": [
        "1 000 J.",
        "약 667 J.",
        "500 J.",
        "작동 유체를 모르면 결정할 수 없다."
      ],
      "explanations": [
        "틀리다. 한 사이클에서 고온 열원으로부터 받은 열을 전부 일로 바꿀 수 없다. ΔU = 0이어도 제2법칙은 그 일부를 저온 열원에 내놓도록 요구한다.",
        "틀리다. 667 J는 대략 Q_H T_H/(T_H + T_C)에 해당한다. 그러나 카르노 효율은 T_H/(T_H + T_C)가 아니라 1 − T_C/T_H이다.",
        "맞다. 최대 효율은 카르노 효율 η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2이다. 따라서 |W|_max = η_max Q_H = 500 J이다. 국소적으로 가역인 두 열원 기관이 이 값을 달성한다.",
        "틀리다. 두 열원의 온도와 받은 열량만으로 최대 일 |W|_max = Q_H (1 − T_C/T_H)를 계산할 수 있다. 유체나 기관의 세부 사항은 필요하지 않다."
      ]
    },
    "l6-q18": {
      "question": "조성이 고정된 두 부분계가 고립된 전체 안에서 에너지와 부피를 독립적으로 교환할 수 있다. 평형 상태에 대해 무엇을 말할 수 있는가?",
      "choices": [
        "부분계의 크기와 무관하게 U_1 = U_2, V_1 = V_2이다.",
        "P_1/T_1 = P_2/T_2이지만 온도가 같을 필요는 없다.",
        "T_1 = T_2이지만 압력이 반드시 같지는 않다.",
        "T_1 = T_2, P_1 = P_2이다."
      ],
      "explanations": [
        "틀리다. 평형은 크기량이 같을 것을 요구하지 않는다. 크기가 다른 두 부분계는 평형에서도 에너지와 부피가 다를 수 있다.",
        "틀리다. 이 등식은 dV_1의 계수만 0으로 만든다. 에너지도 독립적으로 재분배되므로 dU_1의 계수도 0이어야 하며, 따라서 T_1 = T_2이다. 여기서 쓰는 기준은 전체 엔트로피의 정류성이다.",
        "틀리다. 부피 교환도 허용되므로 열평형과 기계적 평형이 함께 성립해야 한다. 따라서 압력도 같아야 한다.",
        "맞다. 평형에서는 허용되는 모든 재분배에 대해 전체 엔트로피가 정류값을 갖는다. dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0이다. 에너지와 부피 교환이 독립적이므로 두 계수가 각각 0이 되어 T_1 = T_2, P_1 = P_2를 얻는다."
      ]
    },
    "l6-q8": {
      "question": "순환 기관이 T_k > 0의 열원에서 부호 포함 열량 Q_k를 받고 이상적인 일 공급원과 일을 교환한다. 클라우지우스 부등식 및 이 강의의 정의에 맞는 진술은 무엇인가?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0이며 전역적으로 비가역인 사이클에서는 엄격히 양수이다.",
        "기관의 엔트로피가 처음 값으로 돌아오므로 모든 사이클에서 Σ_k Q_k/T_k = 0이다.",
        "Σ_k Q_k/T_k ≤ 0이며 등호만으로 원래 경로의 국소적 가역성이 증명된다.",
        "Σ_k Q_k/T_k ≤ 0이다. 등호는 전역적 가역성을 특징지으나 국소적 가역성을 증명하지 않는다."
      ],
      "explanations": [
        "틀리다. 기관이 받을 때 Q_k를 양수로 센다. 이 약속에서는 합이 음수 또는 0이다.",
        "틀리다. 한 사이클에서 ΔS_system = 0이지만 교환 엔트로피는 음수일 수 있고, 양의 엔트로피 생성량이 이를 상쇄할 수 있다.",
        "틀리다. 부호는 맞지만 등호의 경우에는 보조 기관으로 전역적 복귀를 구성한다. 원래 기관이 자신의 경로를 거꾸로 따를 수 있음을 보이는 것은 아니다.",
        "맞다. 국소적으로 가역인 사이클에서는 등호가 성립한다. 반대로 합이 0이면 보조 기관으로 공급원들을 복원할 수 있다. 합이 엄격히 음수이면 사이클은 전역적으로 비가역이다."
      ]
    },
    "l6-q9": {
      "question": "이 강의는 국소적으로 가역인 사이클의 등식 ∮ δQ_rev/T = 0에서 어떻게 엔트로피를 구성하는가?",
      "choices": [
        "열량 Q가 상태 함수임을 도출한다.",
        "δQ_rev/T의 적분으로 S(B) − S(A)를 정의한다.",
        "임의의 실제 경로에서 δQ/T_ext를 적분하여 S(B) − S(A)를 정의한다."
      ],
      "explanations": [
        "틀리다. 완전미분은 δQ_rev/T이다. 교환한 열은 여전히 경로에 의존한다.",
        "맞다. 두 국소적으로 가역인 경로 중 하나를 역방향으로 따르면 적분이 0인 사이클이 된다. 따라서 가역적으로 연결된 각 영역에서 엔트로피가 덧셈 상수의 차이를 제외하고 정의되며, 단위는 J/K이다.",
        "틀리다. 실제 비가역 경로에서 δQ/T_ext의 적분은 교환 엔트로피를 주며 반드시 ΔS와 같지는 않다. 구성에는 국소적으로 가역인 경로의 δQ_rev/T를 사용한다."
      ]
    },
    "l6-q2": {
      "question": "국소적 가역성을 올바르게 설명하는 진술은 무엇인가?",
      "choices": [
        "계의 처음 상태와 나중 상태가 평형이면 충분하다.",
        "계와 주위를 전역적으로 복원하는 모든 방법에서 자동으로 따라 나온다.",
        "구속 조건의 무한소 변화로 평형 상태의 연속을 이루는 각 단계를 반전할 수 있어야 한다.",
        "열과 일의 교환 부호를 유지하면서 계의 경로를 거꾸로 따를 수 있다."
      ],
      "explanations": [
        "틀리다. 중간 상태와 각 단계를 반전할 수 있다는 것이 국소적 정의의 핵심이다.",
        "틀리다. 전역적 복귀는 다른 경로를 이용할 수 있다. 그 존재만으로 원래 경로의 국소적 가역성이 증명되지는 않는다.",
        "맞다. 그러면 같은 상태의 순서를 반대로 따르며 주위도 복원할 수 있다. 따라서 국소적 가역성은 전역적 가역성을 함의한다.",
        "틀리다. 국소적으로 가역인 경로를 반대로 따르면 열적·기계적 교환의 부호가 각 단계에서 바뀐다."
      ]
    },
    "l6-q12": {
      "question": "비가역 과정이 두 평형 상태 A와 B를 연결하지만 중간 상태는 평형에서 멀리 떨어져 있다. 올바른 진술은 무엇인가?",
      "choices": [
        "엔트로피 변화 ΔS는 실제 경로에서 δQ_actual/T_ext의 적분이다.",
        "ΔS는 A와 B 사이의 국소적으로 가역인 경로에서 계산할 수 있지만 S_e와 S_i는 실제 과정에 의존한다.",
        "상태 A와 B만으로 교환 엔트로피 S_e와 생성 엔트로피 S_i가 정해진다."
      ],
      "explanations": [
        "틀리다. 이 적분은 교환 엔트로피 S_e를 준다. 수지는 ΔS = S_e + S_i이다. 생성 엔트로피를 고려하지 않으면 실제로 교환한 열만으로 ΔS를 계산할 수 없다.",
        "맞다. S는 상태 함수이므로 같은 상태를 연결하는 국소적으로 가역인 경로에서 ΔS = ∫ δQ_rev/T를 계산할 수 있다. 이후 실제 교환으로 돌아가 S_e = ∫ δQ_actual/T_ext와 S_i = ΔS − S_e를 결정한다.",
        "틀리다. A와 B는 ΔS를 정하지만 교환 엔트로피와 생성 엔트로피로의 분해는 정하지 않는다. S_e는 실제 교환 열과 외부 온도에 의존하며, S_i는 수지 ΔS = S_e + S_i에서 구한다."
      ]
    },
    "l6-q4": {
      "question": "켈빈–플랑크 진술이 정확히 금지하는 작동은 무엇인가?",
      "choices": [
        "한 사이클에서 받은 일을 열로 바꾸는 것.",
        "이상기체의 비순환 등온 팽창 중 열량 Q > 0을 받고 일 W = −Q를 공급하는 것.",
        "한 사이클에서 고온 열원으로부터 열을 빼내고 저온 열원에 열을 내놓으면서 일을 공급하는 것.",
        "단일 열원에서 열량 Q > 0을 빼내어 주위에 W = −Q를 공급하는 것만을 유일한 효과로 갖는 사이클."
      ],
      "explanations": [
        "틀리다. 일을 열로 바꾸는 것은 허용된다. 금지되는 것은 단일 열원만 이용하고 다른 효과 없이 열을 전부 일로 바꾸는 것이다.",
        "틀리다. 이 팽창은 기체를 처음 상태로 되돌리지 않는다. 진술에서 순환 조건은 핵심이다.",
        "틀리다. 이는 두 열원 동력 기관의 작동이며, 효율이 카르노 한계를 만족하면 가능하다.",
        "맞다. 제1법칙은 이 수지 Q + W = 0을 허용하지만 제2법칙은 이러한 단일 열원 순환 작동을 금지한다. 강의의 부호 약속에서 일의 공급은 W < 0에 해당한다."
      ]
    },
    "l6-vf1": {
      "question": "준정적 압축은 반드시 국소적으로 가역이다.",
      "choices": [
        "참",
        "거짓"
      ],
      "explanations": [
        "틀리다. 예를 들어 준정적 압축도 마찰을 동반할 수 있다. 기체가 평형에 가까워도 마찰은 에너지를 소산시키고 기체나 주위에 흔적을 남긴다.",
        "맞다. 준정적 성질만으로는 충분하지 않다. 소산도 없애고 무한소 압력차, 온도차 또는 화학 퍼텐셜 차이로 교환을 진행해야 한다."
      ]
    },
    "l6-q7": {
      "question": "모든 구간이 국소적으로 가역일 때, 이상기체의 카르노 동력 사이클을 나타내는 순서는 무엇인가?",
      "choices": [
        "T_H에서 등온 팽창, 가역 단열 팽창, T_C에서 등온 압축, 가역 단열 압축.",
        "T_H에서 등온 팽창, 등적 냉각, T_C에서 등온 압축, 등적 가열.",
        "T_C에서 등온 팽창, 단열 압축, T_H에서 등온 압축, 단열 팽창."
      ],
      "explanations": [
        "맞다. 열교환은 국소적으로 가역인 두 등온 구간에서 일어나고, 단열 구간은 열교환 없이 두 온도를 연결한다. (V, P) 선도에서 동력 사이클은 시계 방향으로 진행한다.",
        "틀리다. 카르노 사이클의 등온 구간을 잇는 것은 등적 과정이 아니라 단열 과정이다. 등적 구간으로 바꾸면 사이클과 열교환이 달라진다.",
        "틀리다. 이 순서는 카르노 사이클의 역방향이다. 그러면 기관은 일을 받아 저온 열원에서 열을 빼내고 고온 열원에 내놓는다."
      ]
    },
    "l6-vf2": {
      "question": "제2법칙은 열역학적으로 허용되는 변화의 방향을 정하지만, 그 자체만으로 소요 시간이나 수송계수를 정하지는 않는다.",
      "choices": [
        "참",
        "거짓"
      ],
      "explanations": [
        "맞다. 강의의 가정 아래에서 과정을 제약하고 평형을 특징짓는다. 그러나 완화 시간, 열전도율, 점도 또는 확산계수를 제공하지는 않는다.",
        "틀리다. 제2법칙은 완전한 동역학 방정식이 아니다. 변화 속도와 격렬한 과정의 중간 상태를 기술하려면 추가 법칙이 필요하다."
      ]
    }
  },
  "hi": {
    "l6-q1": {
      "question": "इस पाठ में किसी प्रक्रम की समग्र उत्क्रमणीयता क्या माँगती है?",
      "choices": [
        "केवल निकाय अपनी आरंभिक अवस्था में लौट सके, चाहे परिवेश में कोई भी परिवर्तन हुए हों।",
        "ऐसी वापसी संभव हो जो निकाय और उसके पूरे परिवेश को पुनर्स्थापित करे तथा कोई अन्य परिवर्तन न छोड़े।",
        "वापसी अनिवार्यतः उसी पथ पर विपरीत दिशा में हो।",
        "प्रक्रम अर्ध-स्थैतिक हो और प्रत्येक चरण में निकाय साम्य के निकट रहे।"
      ],
      "explanations": [
        "गलत: केवल निकाय को पुनर्स्थापित करने पर तापस्थायी भंडार या कार्य स्रोत में चिह्न रह सकता है। पूरे परिवेश को भी पुनर्स्थापित करना होगा।",
        "सही: कम-से-कम एक वापसी विधि निकाय और उसके परिवेश के सभी परिवर्तन मिटा सके, इतना पर्याप्त है। समग्र परिभाषा वापसी का पथ निर्धारित नहीं करती।",
        "गलत: उसी पथ को उलटा तय करना स्थानीय उत्क्रमणीयता से संबंधित है। समग्र परिभाषा दूसरा वापसी पथ भी स्वीकार करती है।",
        "गलत: अर्ध-स्थैतिक प्रकृति पर्याप्त नहीं है। घर्षण रह सकता है और निकाय तथा परिवेश की पूर्ण पुनर्स्थापना रोक सकता है।"
      ]
    },
    "l6-q11": {
      "question": "एक बंद निकाय 300 K के तापस्थायी भंडार को 2 400 J ऊष्मा देता है। उसका एंट्रॉपी परिवर्तन ΔS = −6 J/K है। उसकी विनिमयित एंट्रॉपी S_e और उत्पन्न एंट्रॉपी S_i क्या हैं?",
      "choices": [
        "S_e = −8 J/K और S_i = +2 J/K।",
        "S_e = +8 J/K और S_i = +2 J/K।",
        "S_e = −6 J/K और S_i = 0 J/K।",
        "S_e = −8 J/K और S_i = +14 J/K।"
      ],
      "explanations": [
        "सही: Q = −2 400 J, इसलिए S_e = Q/T_ext = −8 J/K। लेखा ΔS = S_e + S_i देता है S_i = +2 J/K। भंडार की एंट्रॉपी 8 J/K बढ़ती है: अन्य उपकरणों की एंट्रॉपी न बदले तो कुल एंट्रॉपी 2 J/K बढ़ती है।",
        "गलत: S_e उस निकाय की दृष्टि से गिनी जाती है जो ऊष्मा दे रहा है: S_e = −2 400/300 = −8 J/K। +8 J/K तापस्थायी भंडार की वृद्धि है।",
        "गलत: S_e का मान Q/T_ext = −8 J/K से तय होता है, ΔS से नहीं। उनका अंतर उत्पन्न एंट्रॉपी है: S_i = ΔS − S_e = +2 J/K।",
        "गलत: ΔS का चिह्न बनाए रखना चाहिए: S_i = (−6) − (−8) = +2 J/K। परिमाणों 6 और 8 को जोड़ने से एंट्रॉपी उत्पादन नहीं मिलता।"
      ]
    },
    "l6-q15": {
      "question": "ऊष्मा Q = 1 200 J सीधे 600 K के तापस्थायी भंडार से 300 K के भंडार में जाती है। दोनों भंडारों की कुल एंट्रॉपी का परिवर्तन क्या है?",
      "choices": [
        "+2 J/K।",
        "0 J/K।",
        "+6 J/K।",
        "+4 J/K।"
      ],
      "explanations": [
        "सही: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K। इस लेखे में अवधि नहीं आती; कम चालक दीवार अंतरण को धीमा करती है, किंतु परिमित तापमान अंतर से होने वाली अनुत्क्रमणीयता नहीं मिटाती।",
        "गलत: ऊर्जा संरक्षित है, किंतु एंट्रॉपी परिवर्तनों में तापमानों के व्युत्क्रम भार की तरह आते हैं और दोनों तापमान अलग हैं।",
        "गलत: इस परिणाम में परिमाण जोड़े गए हैं। गर्म भंडार की एंट्रॉपी 1 200/600 = 2 J/K घटती है और ठंडे की 1 200/300 = 4 J/K बढ़ती है: गणना −2 + 4 होनी चाहिए।",
        "गलत: +4 J/K केवल ठंडे भंडार का परिवर्तन है। कुल लेखे में गर्म भंडार का −2 J/K भी शामिल है।"
      ]
    },
    "l6-q3": {
      "question": "सामान्य प्रशीतक क्लॉसियस कथन के विरुद्ध क्यों नहीं है?",
      "choices": [
        "क्योंकि ठंडे से गर्म की ओर ऊष्मा अंतरण के साथ बाहर से कार्य भी दिया जाता है।",
        "क्योंकि द्रव हर चक्र में आरंभिक अवस्था में लौटता है, जिससे दोनों तापस्थायी भंडारों पर प्रभाव मिट जाते हैं।",
        "क्योंकि चक्र में ऊष्माओं और कार्य का बीजीय योग शून्य है, और इतना ही इस अंतरण की अनुमति के लिए पर्याप्त है।"
      ],
      "explanations": [
        "सही: क्लॉसियस ऐसा चक्रीय प्रक्रम निषिद्ध करता है जिसका एकमात्र प्रभाव ठंडे से गर्म की ओर अंतरण हो। प्रशीतक कार्य प्राप्त करता है, इसलिए अंतरण उसका एकमात्र प्रभाव नहीं है।",
        "गलत: द्रव आरंभिक अवस्था में लौटता है, किंतु भंडारों ने ऊर्जा का विनिमय किया है। चक्रीय प्रकृति इन बाहरी परिवर्तनों को नहीं मिटाती।",
        "गलत: ऊर्जा संरक्षण आवश्यक है, किंतु पर्याप्त नहीं। द्वितीय नियम एक अतिरिक्त भौतिक प्रतिबंध लगाता है।"
      ]
    },
    "l6-q13": {
      "question": "n मोल आदर्श गैस एक दृढ़, ऊष्मारोधी पात्र में जूल–गे-लुसाक प्रसार द्वारा आयतन v से V > v तक जाती है। विभाजक हटाने से परिवेश नहीं बदलता। कौन-सा लेखा सही है?",
      "choices": [
        "Q = W = 0, इसलिए ΔU_gas = 0 और ΔS_gas = 0।",
        "Q = 0, W = ΔU_gas < 0 और ΔS_gas > 0।",
        "Q = W = ΔU_gas = 0 और ΔS_tot = 0, हालाँकि ΔS_gas > 0।",
        "Q = W = ΔU_gas = 0 और ΔS_tot = nR ln(V/v) > 0।"
      ],
      "explanations": [
        "गलत: Q = W = 0 से ΔU_gas = 0 अवश्य मिलता है, किंतु ΔS_gas = 0 नहीं। ऊष्मीय विनिमय न होने पर भी एंट्रॉपी उत्पादन संभव है: संबंध dS = δQ_rev/T इस अनुत्क्रमणीय प्रसार की वास्तविक ऊष्मा पर लागू नहीं होता।",
        "गलत: गैस निर्वात के विरुद्ध फैलती है, इसलिए कोई कार्य नहीं देती: W = 0। Q = 0 के साथ ΔU_gas = 0 मिलता है। बिना ऊर्जा मिले एंट्रॉपी बढ़ती है।",
        "गलत: परिवेश अपरिवर्तित है, इसलिए ΔS_ext = 0। गैस की एंट्रॉपी वृद्धि को निरस्त करने वाली कोई बाहरी कमी नहीं है: ΔS_tot = ΔS_gas > 0।",
        "सही: Q = W = 0 से ΔU_gas = 0। परिवेश नहीं बदलता, इसलिए ΔS_tot = ΔS_gas = nR ln(V/v) > 0। यह वृद्धि सिद्ध करती है कि कोई वापसी गैस और परिवेश को अन्यत्र चिह्न छोड़े बिना पुनर्स्थापित नहीं कर सकती।"
      ]
    },
    "l6-q6": {
      "question": "एक द्वितापीय इंजन 600 K और 300 K के बीच चलता है और प्रति चक्र Q_H = 1 000 J प्राप्त करता है। दिए गए कार्य |W| का अधिकतम मान क्या है?",
      "choices": [
        "1 000 J।",
        "लगभग 667 J।",
        "500 J।",
        "कार्यकारी द्रव जाने बिना निर्धारित नहीं किया जा सकता।"
      ],
      "explanations": [
        "गलत: एक चक्र में गर्म भंडार से मिली पूरी ऊष्मा को कार्य में नहीं बदला जा सकता। ΔU = 0 होने पर भी द्वितीय नियम उसका कुछ भाग ठंडे भंडार को देना आवश्यक करता है।",
        "गलत: 667 J लगभग Q_H T_H/(T_H + T_C) के बराबर है। किंतु कार्नो दक्षता 1 − T_C/T_H है, T_H/(T_H + T_C) नहीं।",
        "सही: अधिकतम दक्षता कार्नो दक्षता है: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2। अतः |W|_max = η_max Q_H = 500 J। स्थानीयतः उत्क्रमणीय द्वितापीय मशीन इस मान तक पहुँचती है।",
        "गलत: अधिकतम कार्य के लिए दोनों भंडारों के तापमान और मिली ऊष्मा पर्याप्त हैं: |W|_max = Q_H (1 − T_C/T_H)। द्रव या इंजन का विवरण जानना आवश्यक नहीं।"
      ]
    },
    "l6-q18": {
      "question": "नियत संघटन वाले दो उपनिकाय एक विलगित समुच्चय में स्वतंत्र रूप से ऊर्जा और आयतन का विनिमय कर सकते हैं। उनकी साम्यावस्था के बारे में क्या कह सकते हैं?",
      "choices": [
        "उपनिकायों के आकार चाहे जो हों, U_1 = U_2 और V_1 = V_2।",
        "P_1/T_1 = P_2/T_2, किंतु तापमान बराबर होना आवश्यक नहीं।",
        "T_1 = T_2, किंतु दाब अनिवार्यतः बराबर नहीं हैं।",
        "T_1 = T_2 और P_1 = P_2।"
      ],
      "explanations": [
        "गलत: साम्य में व्यापक राशियों की समानता आवश्यक नहीं। अलग आकार के दो उपनिकायों की ऊर्जा और आयतन साम्य में भी अलग हो सकते हैं।",
        "गलत: यह समानता केवल dV_1 का गुणांक शून्य करती है। ऊर्जा का पुनर्वितरण भी स्वतंत्र है, इसलिए dU_1 का गुणांक भी शून्य होना चाहिए: T_1 = T_2। यहाँ कुल एंट्रॉपी के स्थिरबिंदु की कसौटी प्रयुक्त है।",
        "गलत: आयतन का विनिमय भी अनुमत है, इसलिए साम्य ऊष्मीय के साथ यांत्रिक भी होना चाहिए। अतः दाब भी बराबर होने चाहिए।",
        "सही: साम्य में कुल एंट्रॉपी सभी अनुमत पुनर्वितरणों के लिए स्थिरबिंदु पर है: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0। ऊर्जा और आयतन के विनिमय स्वतंत्र हैं, इसलिए दोनों गुणांक शून्य होते हैं: T_1 = T_2 और P_1 = P_2।"
      ]
    },
    "l6-q8": {
      "question": "एक चक्रीय मशीन T_k > 0 पर स्थित तापस्थायी भंडारों से बीजीय ऊष्माएँ Q_k प्राप्त करती है और आदर्श स्रोत से कार्य विनिमय करती है। कौन-सा कथन क्लॉसियस असमिका और पाठ की परिभाषाओं के अनुरूप है?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, और समग्रतः अनुत्क्रमणीय चक्र में मान सख्ती से धनात्मक है।",
        "प्रत्येक चक्र में Σ_k Q_k/T_k = 0, क्योंकि मशीन की एंट्रॉपी आरंभिक मान में लौटती है।",
        "Σ_k Q_k/T_k ≤ 0, और अकेली समानता मूल पथ की स्थानीय उत्क्रमणीयता सिद्ध करती है।",
        "Σ_k Q_k/T_k ≤ 0; समानता समग्र उत्क्रमणीयता का अभिलक्षण है, किंतु स्थानीय उत्क्रमणीयता सिद्ध नहीं करती।"
      ],
      "explanations": [
        "गलत: मशीन को मिलने पर Q_k धनात्मक गिने जाते हैं। इस परिपाटी में योग ऋणात्मक या शून्य है।",
        "गलत: एक चक्र में ΔS_system = 0, किंतु विनिमयित एंट्रॉपी ऋणात्मक हो सकती है और धनात्मक एंट्रॉपी उत्पादन उसे निरस्त कर सकता है।",
        "गलत: चिह्न सही है, किंतु समानता के मामले में सहायक मशीनों से समग्र वापसी बनाई जाती है। इससे यह सिद्ध नहीं होता कि मूल मशीन अपना पथ उलटा तय कर सकती है।",
        "सही: स्थानीयतः उत्क्रमणीय चक्र में समानता होती है। उलटे, शून्य योग होने पर सहायक मशीनों से स्रोत पुनर्स्थापित हो सकते हैं; सख्ती से ऋणात्मक योग समग्रतः अनुत्क्रमणीय चक्र दर्शाता है।"
      ]
    },
    "l6-q9": {
      "question": "स्थानीयतः उत्क्रमणीय चक्रों पर समानता ∮ δQ_rev/T = 0 से पाठ एंट्रॉपी कैसे निर्मित करता है?",
      "choices": [
        "इससे निष्कर्ष निकालता है कि ऊष्मा Q एक अवस्था फलन है।",
        "δQ_rev/T के समाकल से S(B) − S(A) परिभाषित करता है।",
        "किसी भी वास्तविक पथ पर δQ/T_ext के समाकल से S(B) − S(A) परिभाषित करता है।"
      ],
      "explanations": [
        "गलत: पूर्ण अवकल δQ_rev/T है। विनिमय हुई ऊष्मा अब भी पथ पर निर्भर है।",
        "सही: दो स्थानीयतः उत्क्रमणीय पथों में एक को उलटा तय करने पर शून्य समाकल वाला चक्र बनता है। इस तरह हर उत्क्रमणीय रूप से संबद्ध क्षेत्र में एंट्रॉपी एक योगात्मक नियतांक की अनिश्चितता तक परिभाषित है और J/K में व्यक्त होती है।",
        "गलत: वास्तविक अनुत्क्रमणीय पथ पर δQ/T_ext का समाकल विनिमयित एंट्रॉपी देता है, अनिवार्यतः ΔS नहीं। निर्माण में स्थानीयतः उत्क्रमणीय पथ पर δQ_rev/T प्रयुक्त होता है।"
      ]
    },
    "l6-q2": {
      "question": "कौन-सा कथन स्थानीय उत्क्रमणीयता का सही वर्णन करता है?",
      "choices": [
        "केवल निकाय की आरंभिक और अंतिम अवस्थाओं का साम्यावस्था होना पर्याप्त है।",
        "निकाय और परिवेश को समग्रतः पुनर्स्थापित करने वाली हर विधि से यह स्वतः मिलती है।",
        "प्रतिबंधों में अति सूक्ष्म परिवर्तन से साम्यावस्थाओं के अनुक्रम का प्रत्येक चरण उलटा करना संभव होना चाहिए।",
        "ऊष्मा और कार्य विनिमयों के चिह्न वही रखते हुए निकाय का पथ उलटा तय किया जा सकता है।"
      ],
      "explanations": [
        "गलत: मध्यवर्ती अवस्थाएँ और हर चरण को उलटने की संभावना स्थानीय परिभाषा के लिए अनिवार्य हैं।",
        "गलत: समग्र वापसी दूसरे पथ से हो सकती है। केवल उसका अस्तित्व मूल पथ की स्थानीय उत्क्रमणीयता सिद्ध नहीं करता।",
        "सही: तब वही अवस्था अनुक्रम उलटी दिशा में तय किया जा सकता है और परिवेश भी पुनर्स्थापित होता है। इसलिए स्थानीय उत्क्रमणीयता से समग्र उत्क्रमणीयता मिलती है।",
        "गलत: स्थानीयतः उत्क्रमणीय पथ को उलटा तय करने पर प्रत्येक चरण में ऊष्मीय और यांत्रिक विनिमयों के चिह्न बदलते हैं।"
      ]
    },
    "l6-q12": {
      "question": "एक अनुत्क्रमणीय प्रक्रम दो साम्यावस्थाओं A और B को जोड़ता है, किंतु उसकी मध्यवर्ती अवस्थाएँ साम्य से दूर हैं। कौन-सा कथन सही है?",
      "choices": [
        "एंट्रॉपी परिवर्तन ΔS वास्तविक पथ पर δQ_actual/T_ext का समाकल है।",
        "एंट्रॉपी परिवर्तन ΔS की गणना A और B के बीच स्थानीयतः उत्क्रमणीय पथ पर की जा सकती है, जबकि S_e और S_i वास्तविक प्रक्रम पर निर्भर हैं।",
        "केवल अवस्थाएँ A और B विनिमयित एंट्रॉपी S_e और उत्पन्न एंट्रॉपी S_i तय करती हैं।"
      ],
      "explanations": [
        "गलत: यह समाकल विनिमयित एंट्रॉपी S_e देता है। लेखा ΔS = S_e + S_i है: उत्पन्न एंट्रॉपी को ध्यान में लिए बिना केवल वास्तविक ऊष्मीय विनिमय से ΔS नहीं निकाला जा सकता।",
        "सही: S अवस्था फलन है, इसलिए उन्हीं अवस्थाओं को जोड़ने वाले स्थानीयतः उत्क्रमणीय पथ पर ΔS = ∫ δQ_rev/T की गणना संभव है। फिर वास्तविक विनिमयों पर लौटकर S_e = ∫ δQ_actual/T_ext और S_i = ΔS − S_e निकालते हैं।",
        "गलत: A और B से ΔS तय होता है, किंतु विनिमयित और उत्पन्न एंट्रॉपी में उसका विभाजन नहीं। S_e वास्तविक ऊष्माओं और बाहरी तापमानों पर निर्भर है; फिर S_i लेखे ΔS = S_e + S_i से मिलता है।"
      ]
    },
    "l6-q4": {
      "question": "केल्विन–प्लांक कथन ठीक किस संचालन को निषिद्ध करता है?",
      "choices": [
        "एक चक्र में प्राप्त कार्य को ऊष्मा में बदलना।",
        "आदर्श गैस के अचक्रीय समतापी प्रसार में ऊष्मा Q > 0 प्राप्त करके कार्य W = −Q देना।",
        "एक चक्र में गर्म तापस्थायी भंडार से ऊष्मा लेकर और ठंडे भंडार को ऊष्मा देकर कार्य प्रदान करना।",
        "ऐसा चक्र पूरा करना जिसका एकमात्र प्रभाव एक ही तापस्थायी भंडार से ऊष्मा Q > 0 लेना और परिवेश को W = −Q देना हो।"
      ],
      "explanations": [
        "गलत: कार्य को ऊष्मा में बदलना अनुमत है। निषेध एक ही भंडार के साथ, किसी अन्य प्रभाव के बिना, पूरी ऊष्मा को कार्य में बदलने पर है।",
        "गलत: यह प्रसार गैस को आरंभिक अवस्था में नहीं लौटाता। कथन की चक्रीय शर्त अनिवार्य है।",
        "गलत: यह द्वितापीय इंजन का संचालन है, जो कार्नो सीमा के अनुरूप दक्षता होने पर संभव है।",
        "सही: प्रथम नियम इस लेखे Q + W = 0 की अनुमति देता, किंतु द्वितीय नियम इस एक-तापीय चक्रीय संचालन को निषिद्ध करता है। पाठ की परिपाटी में कार्य देना W < 0 से व्यक्त होता है।"
      ]
    },
    "l6-vf1": {
      "question": "अर्ध-स्थैतिक संपीडन अनिवार्यतः स्थानीयतः उत्क्रमणीय होता है।",
      "choices": [
        "सत्य",
        "असत्य"
      ],
      "explanations": [
        "गलत: उदाहरणतः अर्ध-स्थैतिक संपीडन घर्षण के साथ हो सकता है। घर्षण ऊर्जा का क्षय करता है और गैस या परिवेश में चिह्न छोड़ता है, भले ही गैस साम्य के निकट रहे।",
        "सही: अर्ध-स्थैतिक प्रकृति पर्याप्त नहीं। क्षय मिटाना और दाब, तापमान या रासायनिक विभव के अति सूक्ष्म अंतरों से विनिमय कराना भी आवश्यक है।"
      ]
    },
    "l6-q7": {
      "question": "कौन-सा अनुक्रम आदर्श गैस का कार्नो इंजन चक्र बताता है, जिसकी सभी शाखाएँ स्थानीयतः उत्क्रमणीय हैं?",
      "choices": [
        "T_H पर समतापी प्रसार, उत्क्रमणीय रुद्धोष्म प्रसार, T_C पर समतापी संपीडन, फिर उत्क्रमणीय रुद्धोष्म संपीडन।",
        "T_H पर समतापी प्रसार, समआयतनी शीतलन, T_C पर समतापी संपीडन, फिर समआयतनी तापन।",
        "T_C पर समतापी प्रसार, रुद्धोष्म संपीडन, T_H पर समतापी संपीडन, फिर रुद्धोष्म प्रसार।"
      ],
      "explanations": [
        "सही: ऊष्मा विनिमय दोनों स्थानीयतः उत्क्रमणीय समतापी शाखाओं पर होते हैं; रुद्धोष्म शाखाएँ बिना ऊष्मीय विनिमय दोनों तापमान जोड़ती हैं। (V, P) आरेख में इंजन चक्र दक्षिणावर्त चलता है।",
        "गलत: कार्नो चक्र की समतापी शाखाओं को रुद्धोष्म शाखाएँ जोड़ती हैं, समआयतनी नहीं। समआयतनी शाखाओं से चक्र और उसके ऊष्मीय विनिमय बदलेंगे।",
        "गलत: यह अनुक्रम उलटी दिशा में तय किए कार्नो चक्र का है। तब मशीन कार्य लेकर ठंडे भंडार से ऊष्मा निकालती है और गर्म भंडार को देती है।"
      ]
    },
    "l6-vf2": {
      "question": "द्वितीय नियम विकास की ऊष्मागतिक रूप से अनुमत दिशा तय करता है, किंतु अकेले उसकी अवधि या परिवहन गुणांक निर्धारित नहीं करता।",
      "choices": [
        "सत्य",
        "असत्य"
      ],
      "explanations": [
        "सही: पाठ की मान्यताओं में यह प्रक्रमों को प्रतिबंधित करता है और साम्य का अभिलक्षण करता है। यह न विश्रांति समय देता है, न ऊष्मीय चालकता, न श्यानता, न विसरण गुणांक।",
        "गलत: द्वितीय नियम गतिकी का पूर्ण समीकरण नहीं है। विकास की दर और तीव्र प्रक्रम की मध्यवर्ती अवस्थाएँ बताने के लिए अतिरिक्त नियम चाहिए।"
      ]
    }
  },
  "vi": {
    "l6-q1": {
      "question": "Trong bài này, tính thuận nghịch toàn cục của một quá trình đòi hỏi điều gì?",
      "choices": [
        "Chỉ riêng hệ có thể trở về trạng thái ban đầu, bất kể những thay đổi của môi trường bên ngoài.",
        "Một quá trình trở về có thể khôi phục hệ và toàn bộ môi trường, mà không để lại bất kỳ thay đổi nào khác.",
        "Quá trình trở về bắt buộc phải đi theo cùng một đường với chiều ngược lại.",
        "Quá trình phải tựa tĩnh và hệ luôn gần cân bằng ở mỗi bước."
      ],
      "explanations": [
        "Sai: khôi phục riêng hệ có thể để lại dấu vết trong một nguồn nhiệt hoặc nguồn công. Cũng phải khôi phục toàn bộ môi trường.",
        "Đúng: chỉ cần tồn tại ít nhất một cách trở về xóa bỏ mọi thay đổi của hệ và môi trường. Định nghĩa toàn cục không quy định đường đi của quá trình trở về này.",
        "Sai: đi ngược lại đường đi thuộc về tính thuận nghịch cục bộ. Định nghĩa toàn cục cho phép một đường trở về khác.",
        "Sai: tính tựa tĩnh chưa đủ. Ma sát có thể còn tồn tại và ngăn việc khôi phục hoàn toàn hệ cùng môi trường."
      ]
    },
    "l6-q11": {
      "question": "Một hệ kín nhả 2 400 J cho một nguồn nhiệt ở 300 K. Biến thiên entropy của hệ là ΔS = −6 J/K. Entropy trao đổi S_e và entropy sinh ra S_i của hệ bằng bao nhiêu?",
      "choices": [
        "S_e = −8 J/K và S_i = +2 J/K.",
        "S_e = +8 J/K và S_i = +2 J/K.",
        "S_e = −6 J/K và S_i = 0 J/K.",
        "S_e = −8 J/K và S_i = +14 J/K."
      ],
      "explanations": [
        "Đúng: Q = −2 400 J, nên S_e = Q/T_ext = −8 J/K. Cân bằng ΔS = S_e + S_i cho S_i = +2 J/K. Nguồn nhiệt nhận thêm 8 J/K: entropy tổng cộng tăng 2 J/K nếu entropy của các thiết bị khác không thay đổi.",
        "Sai: S_e được tính từ phía hệ, là bên nhả nhiệt: S_e = −2 400/300 = −8 J/K. Giá trị +8 J/K ứng với phần tăng của nguồn nhiệt.",
        "Sai: S_e được xác định bởi Q/T_ext = −8 J/K, chứ không phải bởi ΔS. Hiệu của chúng là entropy sinh ra: S_i = ΔS − S_e = +2 J/K.",
        "Sai: phải giữ đúng dấu của ΔS: S_i = (−6) − (−8) = +2 J/K. Cộng các giá trị tuyệt đối 6 và 8 không cho lượng entropy sinh ra."
      ]
    },
    "l6-q15": {
      "question": "Một nhiệt lượng Q = 1 200 J truyền trực tiếp từ nguồn nhiệt ở 600 K sang nguồn nhiệt ở 300 K. Biến thiên entropy tổng cộng của hai nguồn nhiệt bằng bao nhiêu?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Đúng: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Thời gian không xuất hiện trong cân bằng này; một vách dẫn nhiệt kém làm chậm sự truyền nhiệt nhưng không loại bỏ tính không thuận nghịch do chênh lệch nhiệt độ hữu hạn.",
        "Sai: năng lượng được bảo toàn, nhưng các biến thiên entropy được nhân với nghịch đảo của các nhiệt độ khác nhau.",
        "Sai: kết quả này cộng các giá trị tuyệt đối. Nguồn nóng mất 1 200/600 = 2 J/K, còn nguồn lạnh nhận thêm 1 200/300 = 4 J/K: phải tính −2 + 4.",
        "Sai: +4 J/K chỉ là biến thiên của nguồn lạnh. Cân bằng tổng cộng còn bao gồm −2 J/K của nguồn nóng."
      ]
    },
    "l6-q3": {
      "question": "Vì sao một tủ lạnh thông thường không mâu thuẫn với phát biểu Clausius?",
      "choices": [
        "Vì sự truyền nhiệt từ lạnh sang nóng đi kèm với công được cung cấp từ môi trường.",
        "Vì môi chất trở về trạng thái ban đầu sau mỗi chu trình, qua đó xóa bỏ các tác dụng lên hai nguồn nhiệt.",
        "Vì tổng đại số của nhiệt và công bằng không trong một chu trình, và điều đó đủ để cho phép sự truyền nhiệt này."
      ],
      "explanations": [
        "Đúng: Clausius cấm một quá trình tuần hoàn có tác dụng duy nhất là sự truyền nhiệt từ lạnh sang nóng ấy. Tủ lạnh nhận công: vì vậy sự truyền nhiệt không phải tác dụng duy nhất của nó.",
        "Sai: môi chất trở về trạng thái ban đầu, nhưng các nguồn nhiệt đã trao đổi năng lượng. Tính tuần hoàn không xóa bỏ những thay đổi bên ngoài này.",
        "Sai: bảo toàn năng lượng là cần thiết nhưng chưa đủ. Nguyên lý thứ hai đặt ra một ràng buộc vật lý bổ sung."
      ]
    },
    "l6-q13": {
      "question": "Một khí lý tưởng gồm n mol giãn nở Joule–Gay-Lussac từ thể tích v đến thể tích V > v trong một bình cứng, cách nhiệt. Việc tháo vách ngăn không làm thay đổi môi trường. Cân bằng nào đúng?",
      "choices": [
        "Q = W = 0, nên ΔU_gas = 0 và ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 và ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 và ΔS_tot = 0, dù ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 và ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Sai: Q = W = 0 quả thực kéo theo ΔU_gas = 0, nhưng không kéo theo ΔS_gas = 0. Không trao đổi nhiệt không có nghĩa là không sinh entropy: hệ thức dS = δQ_rev/T không áp dụng cho nhiệt thực của sự giãn nở không thuận nghịch này.",
        "Sai: khí giãn nở vào chân không nên không cung cấp công, W = 0. Với Q = 0, ta có ΔU_gas = 0. Entropy tăng mà không cần cung cấp năng lượng.",
        "Sai: môi trường không thay đổi nên ΔS_ext = 0. Không có sự giảm entropy nào bên ngoài bù cho sự tăng entropy của khí: ΔS_tot = ΔS_gas > 0.",
        "Đúng: Q = W = 0 cho ΔU_gas = 0. Vì môi trường không thay đổi, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Sự tăng này chứng minh rằng không có quá trình trở về nào khôi phục được khí và môi trường mà không để lại dấu vết ở nơi khác."
      ]
    },
    "l6-q6": {
      "question": "Một động cơ hai nguồn nhiệt hoạt động giữa 600 K và 300 K, nhận Q_H = 1 000 J trong mỗi chu trình. Giá trị cực đại của công cung cấp |W| là bao nhiêu?",
      "choices": [
        "1 000 J.",
        "Khoảng 667 J.",
        "500 J.",
        "Không thể xác định nếu chưa biết môi chất công tác."
      ],
      "explanations": [
        "Sai: không thể biến toàn bộ nhiệt nhận từ nguồn nóng thành công trong một chu trình. Nguyên lý thứ hai đòi hỏi nhả một phần cho nguồn lạnh, ngay cả khi ΔU = 0.",
        "Sai: 667 J xấp xỉ bằng Q_H T_H/(T_H + T_C). Nhưng hiệu suất Carnot bằng 1 − T_C/T_H, chứ không phải T_H/(T_H + T_C).",
        "Đúng: hiệu suất cực đại là hiệu suất Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Do đó |W|_max = η_max Q_H = 500 J. Một máy hai nguồn nhiệt thuận nghịch cục bộ đạt được giá trị này.",
        "Sai: nhiệt độ của hai nguồn nhiệt và nhiệt lượng nhận vào đủ để tính công cực đại: |W|_max = Q_H (1 − T_C/T_H). Không cần biết môi chất hay các chi tiết của động cơ."
      ]
    },
    "l6-q18": {
      "question": "Hai hệ con có thành phần cố định có thể trao đổi năng lượng và thể tích một cách độc lập trong một tổ hợp cô lập. Có thể nói gì về trạng thái cân bằng của chúng?",
      "choices": [
        "U_1 = U_2 và V_1 = V_2, bất kể kích thước của các hệ con.",
        "P_1/T_1 = P_2/T_2, mà nhiệt độ không nhất thiết bằng nhau.",
        "T_1 = T_2, nhưng áp suất không nhất thiết bằng nhau.",
        "T_1 = T_2 và P_1 = P_2."
      ],
      "explanations": [
        "Sai: cân bằng không đòi hỏi các đại lượng quảng tính bằng nhau. Hai hệ con có kích thước khác nhau có thể có năng lượng và thể tích khác nhau ở cân bằng.",
        "Sai: đẳng thức này chỉ làm hệ số của dV_1 bằng không. Vì năng lượng cũng có thể phân bố lại độc lập, hệ số của dU_1 phải bằng không: T_1 = T_2. Tiêu chí được dùng là tính dừng của entropy tổng cộng.",
        "Sai: vì cũng cho phép trao đổi thể tích, cân bằng phải vừa là cân bằng cơ học vừa là cân bằng nhiệt. Do đó áp suất cũng phải bằng nhau.",
        "Đúng: ở cân bằng, entropy tổng cộng là dừng đối với mọi sự phân bố lại được phép: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Vì trao đổi năng lượng và thể tích độc lập, cả hai hệ số đều bằng không: T_1 = T_2 và P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Một máy tuần hoàn nhận các nhiệt lượng đại số Q_k từ những nguồn nhiệt ở T_k > 0 và trao đổi công với một nguồn lý tưởng. Khẳng định nào phù hợp với bất đẳng thức Clausius và các định nghĩa của bài học?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, với giá trị dương nghiêm ngặt đối với chu trình không thuận nghịch toàn cục.",
        "Σ_k Q_k/T_k = 0 đối với mọi chu trình, vì entropy của máy trở về giá trị ban đầu.",
        "Σ_k Q_k/T_k ≤ 0, và riêng dấu bằng đã chứng minh rằng đường đi ban đầu thuận nghịch cục bộ.",
        "Σ_k Q_k/T_k ≤ 0; dấu bằng đặc trưng tính thuận nghịch toàn cục, mà không chứng minh tính thuận nghịch cục bộ."
      ],
      "explanations": [
        "Sai: các Q_k được tính dương khi máy nhận nhiệt. Theo quy ước này, tổng âm hoặc bằng không.",
        "Sai: ΔS_system = 0 trong một chu trình, nhưng entropy trao đổi có thể âm và được bù bằng một lượng entropy sinh ra dương.",
        "Sai: dấu là đúng, nhưng trường hợp bằng nhau xây dựng một quá trình trở về toàn cục bằng các máy phụ trợ. Nó không cho thấy máy ban đầu có thể đi ngược lại đường đi của chính mình.",
        "Đúng: một chu trình thuận nghịch cục bộ thỏa mãn dấu bằng. Ngược lại, tổng bằng không cho phép khôi phục các nguồn bằng máy phụ trợ; tổng âm nghiêm ngặt cho biết chu trình không thuận nghịch toàn cục."
      ]
    },
    "l6-q9": {
      "question": "Bài học xây dựng entropy như thế nào từ đẳng thức ∮ δQ_rev/T = 0 trên các chu trình thuận nghịch cục bộ?",
      "choices": [
        "Suy ra nhiệt lượng Q là một hàm trạng thái.",
        "Định nghĩa S(B) − S(A) bằng tích phân của δQ_rev/T.",
        "Định nghĩa S(B) − S(A) bằng tích phân của δQ/T_ext trên một đường đi thực bất kỳ."
      ],
      "explanations": [
        "Sai: chính δQ_rev/T mới là vi phân toàn phần. Nhiệt trao đổi vẫn phụ thuộc vào đường đi.",
        "Đúng: hai đường thuận nghịch cục bộ, trong đó một đường được đi theo chiều ngược, tạo thành một chu trình có tích phân bằng không. Như vậy entropy được xác định sai khác một hằng số cộng trên mỗi miền liên thông thuận nghịch, và có đơn vị J/K.",
        "Sai: trên một đường đi thực không thuận nghịch, tích phân của δQ/T_ext cho entropy trao đổi, không nhất thiết là ΔS. Cách xây dựng dùng δQ_rev/T trên một đường thuận nghịch cục bộ."
      ]
    },
    "l6-q2": {
      "question": "Khẳng định nào mô tả đúng tính thuận nghịch cục bộ?",
      "choices": [
        "Chỉ cần các trạng thái đầu và cuối của hệ là các trạng thái cân bằng.",
        "Nó tự động suy ra từ mọi cách khôi phục toàn cục hệ và môi trường.",
        "Nó đòi hỏi đảo ngược mỗi bước của một dãy trạng thái cân bằng bằng một thay đổi vô cùng nhỏ của các ràng buộc.",
        "Nó cho phép đi ngược lại đường đi của hệ mà vẫn giữ nguyên dấu của các trao đổi nhiệt và công."
      ],
      "explanations": [
        "Sai: các trạng thái trung gian và khả năng đảo ngược mỗi bước là những yếu tố thiết yếu của định nghĩa cục bộ.",
        "Sai: một quá trình trở về toàn cục có thể theo đường khác. Chỉ riêng sự tồn tại của nó không chứng minh đường đi ban đầu thuận nghịch cục bộ.",
        "Đúng: khi đó có thể đi qua cùng dãy trạng thái theo chiều ngược, đồng thời khôi phục cả môi trường. Vì vậy tính thuận nghịch cục bộ kéo theo tính thuận nghịch toàn cục.",
        "Sai: khi đi ngược một đường thuận nghịch cục bộ, các trao đổi nhiệt và cơ học đổi dấu ở mỗi bước."
      ]
    },
    "l6-q12": {
      "question": "Một quá trình không thuận nghịch nối hai trạng thái cân bằng A và B, nhưng các trạng thái trung gian ở xa cân bằng. Khẳng định nào đúng?",
      "choices": [
        "Biến thiên entropy ΔS là tích phân của δQ_actual/T_ext trên đường đi thực.",
        "Có thể tính biến thiên entropy ΔS trên một đường thuận nghịch cục bộ giữa A và B, còn S_e và S_i phụ thuộc vào quá trình thực.",
        "Chỉ riêng các trạng thái A và B xác định entropy trao đổi S_e và entropy sinh ra S_i."
      ],
      "explanations": [
        "Sai: tích phân này cho S_e, tức entropy trao đổi. Cân bằng là ΔS = S_e + S_i: nhiệt thực sự trao đổi không đủ để tính ΔS nếu không xét đến entropy sinh ra.",
        "Đúng: S là hàm trạng thái, nên có thể tính ΔS = ∫ δQ_rev/T trên một đường thuận nghịch cục bộ nối cùng các trạng thái. Sau đó quay lại các trao đổi thực để xác định S_e = ∫ δQ_actual/T_ext và S_i = ΔS − S_e.",
        "Sai: các trạng thái A và B xác định ΔS, nhưng không xác định cách phân tách nó thành entropy trao đổi và entropy sinh ra. S_e phụ thuộc vào nhiệt thực sự trao đổi và các nhiệt độ bên ngoài; S_i khi đó được suy ra từ cân bằng ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Phát biểu Kelvin–Planck cấm chính xác kiểu hoạt động nào?",
      "choices": [
        "Biến công nhận vào thành nhiệt trong một chu trình.",
        "Nhận nhiệt lượng Q > 0 và cung cấp công W = −Q trong sự giãn nở đẳng nhiệt không tuần hoàn của một khí lý tưởng.",
        "Cung cấp công trong một chu trình bằng cách lấy nhiệt từ nguồn nóng và nhả nhiệt cho nguồn lạnh.",
        "Thực hiện một chu trình có tác dụng duy nhất là lấy nhiệt lượng Q > 0 từ một nguồn nhiệt duy nhất và cung cấp W = −Q cho môi trường."
      ],
      "explanations": [
        "Sai: được phép biến công thành nhiệt. Điều bị cấm là biến hoàn toàn nhiệt thành công với một nguồn nhiệt duy nhất mà không có tác dụng nào khác.",
        "Sai: sự giãn nở này không đưa khí về trạng thái ban đầu. Điều kiện tuần hoàn trong phát biểu là thiết yếu.",
        "Sai: đây là hoạt động của động cơ hai nguồn nhiệt, có thể thực hiện nếu hiệu suất tuân theo giới hạn Carnot.",
        "Đúng: nguyên lý thứ nhất cho phép cân bằng Q + W = 0 này, nhưng nguyên lý thứ hai cấm kiểu hoạt động tuần hoàn với một nguồn nhiệt duy nhất đó. Theo quy ước của môn học, cung cấp công ứng với W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Một quá trình nén tựa tĩnh nhất thiết thuận nghịch cục bộ.",
      "choices": [
        "Đúng",
        "Sai"
      ],
      "explanations": [
        "Sai: chẳng hạn, một quá trình nén tựa tĩnh có thể diễn ra với ma sát. Ma sát tiêu tán năng lượng và để lại dấu vết trong khí hoặc môi trường, dù khí luôn gần cân bằng.",
        "Đúng: tính tựa tĩnh chưa đủ. Cũng phải loại bỏ tiêu tán và tiến hành các trao đổi với chênh lệch vô cùng nhỏ về áp suất, nhiệt độ hoặc thế hóa học."
      ]
    },
    "l6-q7": {
      "question": "Dãy quá trình nào mô tả chu trình động cơ Carnot của khí lý tưởng, với mọi nhánh đều thuận nghịch cục bộ?",
      "choices": [
        "Giãn nở đẳng nhiệt ở T_H, giãn nở đoạn nhiệt thuận nghịch, nén đẳng nhiệt ở T_C, rồi nén đoạn nhiệt thuận nghịch.",
        "Giãn nở đẳng nhiệt ở T_H, làm lạnh đẳng tích, nén đẳng nhiệt ở T_C, rồi gia nhiệt đẳng tích.",
        "Giãn nở đẳng nhiệt ở T_C, nén đoạn nhiệt, nén đẳng nhiệt ở T_H, rồi giãn nở đoạn nhiệt."
      ],
      "explanations": [
        "Đúng: trao đổi nhiệt diễn ra trên hai đường đẳng nhiệt thuận nghịch cục bộ; các đường đoạn nhiệt nối hai nhiệt độ mà không trao đổi nhiệt. Chu trình động cơ được thực hiện theo chiều kim đồng hồ trên đồ thị (V, P).",
        "Sai: các nhánh nối hai đường đẳng nhiệt của chu trình Carnot là đoạn nhiệt, không phải đẳng tích. Các nhánh đẳng tích sẽ làm thay đổi chu trình và các trao đổi nhiệt của nó.",
        "Sai: dãy này mô tả chu trình Carnot được thực hiện theo chiều ngược. Máy khi đó nhận công để lấy nhiệt từ nguồn lạnh và nhả cho nguồn nóng."
      ]
    },
    "l6-vf2": {
      "question": "Nguyên lý thứ hai quy định chiều diễn biến được phép về mặt nhiệt động lực học, nhưng riêng nó không xác định thời gian diễn biến hay các hệ số vận chuyển.",
      "choices": [
        "Đúng",
        "Sai"
      ],
      "explanations": [
        "Đúng: nguyên lý này ràng buộc các quá trình và đặc trưng các trạng thái cân bằng dưới những giả thuyết của môn học. Nó không cung cấp thời gian hồi phục, độ dẫn nhiệt, độ nhớt hay hệ số khuếch tán.",
        "Sai: nguyên lý thứ hai không phải phương trình động lực học đầy đủ. Cần có các định luật bổ sung để mô tả tốc độ diễn biến và các trạng thái trung gian của một quá trình đột ngột."
      ]
    }
  },
  "ar": {
    "l6-q1": {
      "question": "ماذا تتطلب العكوسية الإجمالية لتحول، وفق هذا الدرس؟",
      "choices": [
        "أن يستطيع النظام وحده استعادة حالته الابتدائية، أيا كانت التغييرات في محيطه.",
        "أن توجد عودة تعيد النظام ومحيطه كله إلى حالاتهما الابتدائية، دون ترك أي تغيير آخر.",
        "أن تسلك العودة بالضرورة المسار نفسه في الاتجاه المعاكس.",
        "أن يكون التحول شبه ساكن، وأن يبقى النظام قريبا من التوازن في كل خطوة."
      ],
      "explanations": [
        "خطأ: قد تترك استعادة النظام وحده أثرا في خزان حراري أو مصدر للشغل. يجب أيضا استعادة المحيط كله.",
        "صحيح: يكفي وجود إجراء عودة واحد على الأقل يمحو جميع التغييرات في النظام ومحيطه. لا يفرض التعريف الإجمالي مسارا لهذه العودة.",
        "خطأ: إعادة تتبع المسار تتعلق بالعكوسية المحلية. يسمح التعريف الإجمالي بمسار عودة آخر.",
        "خطأ: لا تكفي الصفة شبه الساكنة. فقد يبقى احتكاك يمنع الاستعادة الكاملة للنظام ومحيطه."
      ]
    },
    "l6-q11": {
      "question": "يعطي نظام مغلق 2 400 J لخزان حراري عند 300 K. تغير إنتروبيته هو ΔS = −6 J/K. ما إنتروبيته المتبادلة S_e وإنتروبيته المنتجة S_i؟",
      "choices": [
        "S_e = −8 J/K وS_i = +2 J/K.",
        "S_e = +8 J/K وS_i = +2 J/K.",
        "S_e = −6 J/K وS_i = 0 J/K.",
        "S_e = −8 J/K وS_i = +14 J/K."
      ],
      "explanations": [
        "صحيح: Q = −2 400 J، ومن ثم S_e = Q/T_ext = −8 J/K. تعطي الحصيلة ΔS = S_e + S_i القيمة S_i = +2 J/K. يكسب الخزان الحراري 8 J/K: فتزداد الإنتروبيا الكلية بمقدار 2 J/K إذا لم تتغير إنتروبيا الأجهزة الأخرى.",
        "خطأ: تحسب S_e من وجهة نظر النظام الذي يعطي الحرارة: S_e = −2 400/300 = −8 J/K. أما +8 J/K فتمثل زيادة إنتروبيا الخزان الحراري.",
        "خطأ: تحدد S_e بالعلاقة Q/T_ext = −8 J/K، لا بالتغير ΔS. والفرق بينهما هو الإنتروبيا المنتجة: S_i = ΔS − S_e = +2 J/K.",
        "خطأ: يجب الحفاظ على إشارة ΔS: S_i = (−6) − (−8) = +2 J/K. لا يعطي جمع القيمتين المطلقتين 6 و8 الإنتروبيا المنتجة."
      ]
    },
    "l6-q15": {
      "question": "تنتقل حرارة Q = 1 200 J مباشرة من خزان حراري عند 600 K إلى خزان حراري عند 300 K. ما تغير الإنتروبيا الكلية للخزانين؟",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "صحيح: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. لا تدخل المدة في هذه الحصيلة؛ فالجدار ضعيف التوصيل يبطئ الانتقال دون إزالة اللاعكوسية الناتجة عن فرق درجة الحرارة المنتهي.",
        "خطأ: الطاقة محفوظة، لكن تغيرات الإنتروبيا موزونة بمقلوبي درجتي الحرارة، وهما مختلفان.",
        "خطأ: هذه النتيجة تجمع القيم المطلقة. يفقد الخزان الساخن 1 200/600 = 2 J/K، بينما يكسب الخزان البارد 1 200/300 = 4 J/K: يجب حساب −2 + 4.",
        "خطأ: +4 J/K هو تغير إنتروبيا الخزان البارد وحده. تشمل الحصيلة الكلية أيضا −2 J/K للخزان الساخن."
      ]
    },
    "l6-q3": {
      "question": "لماذا لا تناقض الثلاجة العادية صيغة كلاوزيوس؟",
      "choices": [
        "لأن انتقال الحرارة من البارد إلى الساخن يصاحبه تزويد بشغل خارجي.",
        "لأن المائع يستعيد حالته الابتدائية في كل دورة، مما يلغي الآثار في الخزانين الحراريين.",
        "لأن المجموع الجبري للحرارة والشغل معدوم على دورة، وهذا يكفي للسماح بهذا الانتقال."
      ],
      "explanations": [
        "صحيح: يمنع كلاوزيوس تحولا دوريا يكون أثره الوحيد هذا الانتقال من البارد إلى الساخن. تتلقى الثلاجة شغلا، لذا لا يكون هذا الانتقال أثرها الوحيد.",
        "خطأ: يعود المائع إلى حالته الابتدائية، لكن الخزانين الحراريين تبادلا طاقة. لا تزيل الصفة الدورية هذه التغييرات الخارجية.",
        "خطأ: حفظ الطاقة ضروري لكنه غير كاف. يفرض المبدأ الثاني قيدا فيزيائيا إضافيا."
      ]
    },
    "l6-q13": {
      "question": "يخضع غاز مثالي مقداره n مول لتمدد جول–غي لوساك من الحجم v إلى الحجم V > v في وعاء صلب وكظوم. لا تغير إزالة الحاجز المحيط. أي حصيلة صحيحة؟",
      "choices": [
        "Q = W = 0، ومن ثم ΔU_gas = 0 وΔS_gas = 0.",
        "Q = 0 وW = ΔU_gas < 0 وΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 وΔS_tot = 0، مع أن ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 وΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "خطأ: تستلزم Q = W = 0 بالفعل ΔU_gas = 0، لكنها لا تستلزم ΔS_gas = 0. غياب التبادل الحراري لا يمنع إنتاج الإنتروبيا: لا تنطبق العلاقة dS = δQ_rev/T على الحرارة الحقيقية لهذا التمدد اللاعكوس.",
        "خطأ: يتمدد الغاز ضد الفراغ، لذا لا يقدم أي شغل، W = 0. ومع Q = 0 يكون ΔU_gas = 0. تزداد الإنتروبيا دون تزويد بالطاقة.",
        "خطأ: يبقى المحيط دون تغيير، لذا ΔS_ext = 0. لا يعوض أي تناقص خارجي زيادة إنتروبيا الغاز: ΔS_tot = ΔS_gas > 0.",
        "صحيح: تعطي Q = W = 0 النتيجة ΔU_gas = 0. وبما أن المحيط لا يتغير، فإن ΔS_tot = ΔS_gas = nR ln(V/v) > 0. تثبت هذه الزيادة أنه لا توجد عودة تعيد الغاز ومحيطه إلى حالتيهما الابتدائيتين دون ترك أثر في مكان آخر."
      ]
    },
    "l6-q6": {
      "question": "يعمل محرك ثنائي الخزان الحراري بين 600 K و300 K، ويتلقى Q_H = 1 000 J في كل دورة. ما القيمة القصوى للشغل الذي يقدمه |W|؟",
      "choices": [
        "1 000 J.",
        "نحو 667 J.",
        "500 J.",
        "لا يمكن تحديدها دون معرفة المائع العامل."
      ],
      "explanations": [
        "خطأ: لا يمكن تحويل كل الحرارة المتلقاة من الخزان الساخن إلى شغل على دورة. يفرض المبدأ الثاني إعطاء جزء منها للخزان البارد، حتى إذا كان ΔU = 0.",
        "خطأ: تقابل 667 J تقريبا المقدار Q_H T_H/(T_H + T_C). لكن كفاءة كارنو تساوي 1 − T_C/T_H، لا T_H/(T_H + T_C).",
        "صحيح: الكفاءة القصوى هي كفاءة كارنو، η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. لذا |W|_max = η_max Q_H = 500 J. تحقق هذه القيمة آلة ثنائية الخزان الحراري عكوسة محليا.",
        "خطأ: تكفي درجتا حرارة الخزانين والحرارة المتلقاة لحساب الشغل الأقصى: |W|_max = Q_H (1 − T_C/T_H). لا حاجة إلى معرفة المائع أو تفاصيل المحرك."
      ]
    },
    "l6-q18": {
      "question": "يمكن لنظامين فرعيين ثابتَي التركيب تبادل الطاقة والحجم بشكل مستقل داخل مجموعة معزولة. ماذا يمكن القول عن حالة توازنهما؟",
      "choices": [
        "U_1 = U_2 وV_1 = V_2، أيا كان حجما النظامين الفرعيين.",
        "P_1/T_1 = P_2/T_2، دون ضرورة تساوي درجتي الحرارة.",
        "T_1 = T_2، لكن الضغطين ليسا متساويين بالضرورة.",
        "T_1 = T_2 وP_1 = P_2."
      ],
      "explanations": [
        "خطأ: لا يفرض التوازن تساوي المقادير الامتدادية. قد يكون لنظامين فرعيين مختلفي الحجم طاقتان وحجمان مختلفان عند التوازن.",
        "خطأ: لا تلغي هذه المساواة إلا معامل dV_1. وبما أن الطاقة يمكن أيضا إعادة توزيعها بشكل مستقل، يجب أن ينعدم معامل dU_1: T_1 = T_2. المعيار المستخدم هو سكون الإنتروبيا الكلية بالنسبة إلى التغيرات المسموحة.",
        "خطأ: بما أن تبادل الحجم مسموح أيضا، يجب أن يكون التوازن ميكانيكيا وحراريا معا. لذا يجب أيضا أن يتساوى الضغطان.",
        "صحيح: عند التوازن، تكون الإنتروبيا الكلية ساكنة بالنسبة إلى كل إعادة توزيع مسموحة: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. وبما أن تبادلَي الطاقة والحجم مستقلان، ينعدم المعاملان: T_1 = T_2 وP_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "تتلقى آلة دورية كميات الحرارة الجبرية Q_k من خزانات حرارية عند T_k > 0، وتتبادل شغلا مع مصدر مثالي. أي عبارة توافق متباينة كلاوزيوس وتعريفات الدرس؟",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0، وتكون القيمة موجبة تماما لدورة لاعكوسة إجماليا.",
        "Σ_k Q_k/T_k = 0 لكل دورة، لأن إنتروبيا الآلة تستعيد قيمتها الابتدائية.",
        "Σ_k Q_k/T_k ≤ 0، وتثبت المساواة وحدها أن المسار الابتدائي عكوس محليا.",
        "Σ_k Q_k/T_k ≤ 0؛ وتميز المساواة العكوسية الإجمالية دون إثبات العكوسية المحلية."
      ],
      "explanations": [
        "خطأ: تحسب Q_k موجبة عندما تتلقاها الآلة. وبهذا الاصطلاح يكون المجموع سالبا أو معدوما.",
        "خطأ: على دورة يكون ΔS_system = 0، لكن الإنتروبيا المتبادلة قد تكون سالبة ويعوضها إنتاج موجب للإنتروبيا.",
        "خطأ: الإشارة صحيحة، لكن حالة المساواة تبني عودة إجمالية بمساعدة آلات إضافية. ولا تبين أن الآلة الابتدائية تستطيع إعادة تتبع مسارها الخاص بالعكس.",
        "صحيح: تحقق الدورة العكوسة محليا المساواة. وبالعكس، يتيح المجموع المعدوم استعادة المصادر بآلات مساعدة؛ أما المجموع السالب تماما فيدل على دورة لاعكوسة إجماليا."
      ]
    },
    "l6-q9": {
      "question": "كيف يبني الدرس الإنتروبيا انطلاقا من المساواة ∮ δQ_rev/T = 0 على الدورات العكوسة محليا؟",
      "choices": [
        "يستنتج منها أن الحرارة Q دالة حالة.",
        "يعرف S(B) − S(A) بتكامل δQ_rev/T.",
        "يعرف S(B) − S(A) بتكامل δQ/T_ext على أي مسار حقيقي."
      ],
      "explanations": [
        "خطأ: المقدار δQ_rev/T هو التفاضل التام. وتظل الحرارة المتبادلة معتمدة على المسار.",
        "صحيح: يشكل مساران عكوسان محليا، يسلك أحدهما بالعكس، دورة تكاملها معدوم. وهكذا تعرف الإنتروبيا باستثناء ثابت جمعي على كل مجال متصل بمسارات عكوسة، وتقاس بـ J/K.",
        "خطأ: على مسار حقيقي لاعكوس، يعطي تكامل δQ/T_ext الإنتروبيا المتبادلة، لا ΔS بالضرورة. يستخدم البناء δQ_rev/T على مسار عكوس محليا."
      ]
    },
    "l6-q2": {
      "question": "أي عبارة تصف العكوسية المحلية بشكل صحيح؟",
      "choices": [
        "يكفي أن تكون حالتا النظام الابتدائية والنهائية حالتي توازن.",
        "تنتج تلقائيا عن أي إجراء يعيد النظام ومحيطه إجماليا إلى حالاتهما الابتدائية.",
        "تتطلب إمكان عكس كل خطوة من تعاقب حالات توازن بتعديل متناه في الصغر للقيود.",
        "تتيح إعادة تتبع مسار النظام بالعكس مع الحفاظ على الإشارات نفسها لمبادلات الحرارة والشغل."
      ],
      "explanations": [
        "خطأ: الحالات الوسيطة وإمكان عكس كل خطوة أساسيان في التعريف المحلي.",
        "خطأ: قد تسلك العودة الإجمالية مسارا آخر. ولا يثبت وجودها وحده أن المسار الابتدائي عكوس محليا.",
        "صحيح: يمكن حينئذ سلوك تعاقب الحالات نفسه في الاتجاه المعاكس، مع استعادة المحيط أيضا. لذا تستلزم العكوسية المحلية العكوسية الإجمالية.",
        "خطأ: عند سلوك مسار عكوس محليا في الاتجاه المعاكس، تغير المبادلات الحرارية والميكانيكية إشارتها في كل خطوة."
      ]
    },
    "l6-q12": {
      "question": "يصل تحول لاعكوس بين حالتي توازن A وB، لكن حالاته الوسيطة بعيدة عن التوازن. أي عبارة صحيحة؟",
      "choices": [
        "تغير الإنتروبيا ΔS هو تكامل δQ_actual/T_ext على المسار الحقيقي.",
        "يمكن حساب تغير الإنتروبيا ΔS على مسار عكوس محليا بين A وB، بينما تعتمد S_e وS_i على العملية الحقيقية.",
        "تحدد الحالتان A وB وحدهما الإنتروبيا المتبادلة S_e والإنتروبيا المنتجة S_i."
      ],
      "explanations": [
        "خطأ: يعطي هذا التكامل S_e، أي الإنتروبيا المتبادلة. الحصيلة هي ΔS = S_e + S_i: فلا تكفي الحرارة المتبادلة فعلا لحساب ΔS دون أخذ الإنتروبيا المنتجة في الحسبان.",
        "صحيح: S دالة حالة، لذا يمكن حساب ΔS = ∫ δQ_rev/T على مسار عكوس محليا يصل بين الحالتين نفسيهما. ثم نعود إلى المبادلات الحقيقية لتحديد S_e = ∫ δQ_actual/T_ext وS_i = ΔS − S_e.",
        "خطأ: تحدد الحالتان A وB التغير ΔS، لكنهما لا تحددان تقسيمه إلى إنتروبيا متبادلة وإنتروبيا منتجة. تعتمد S_e على الحرارة المتبادلة فعلا ودرجات الحرارة الخارجية؛ ثم تستنتج S_i من الحصيلة ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "أي نمط تشغيل تمنعه صيغة كلفن–بلانك تحديدا؟",
      "choices": [
        "تحويل الشغل المتلقى إلى حرارة خلال دورة.",
        "تلقي حرارة Q > 0 وتقديم شغل W = −Q خلال تمدد متساوي درجة الحرارة وغير دوري لغاز مثالي.",
        "تقديم شغل على دورة بأخذ حرارة من الخزان الحراري الساخن وإعطاء جزء منها للخزان البارد.",
        "إنجاز دورة يكون أثرها الوحيد أخذ حرارة Q > 0 من خزان حراري واحد وتقديم W = −Q للمحيط."
      ],
      "explanations": [
        "خطأ: يسمح بتحويل الشغل إلى حرارة. يتعلق المنع بتحويل الحرارة بالكامل إلى شغل باستخدام خزان حراري واحد ودون أي أثر آخر.",
        "خطأ: لا يعيد هذا التمدد الغاز إلى حالته الابتدائية. الشرط الدوري في الصيغة أساسي.",
        "خطأ: هذا نمط تشغيل محرك ثنائي الخزان الحراري، وهو ممكن إذا احترمت كفاءته حد كارنو.",
        "صحيح: يسمح المبدأ الأول بهذه الحصيلة Q + W = 0، لكن المبدأ الثاني يمنع هذا التشغيل الدوري مع خزان حراري واحد. ووفق اصطلاح الدرس، يقابل تقديم الشغل W < 0."
      ]
    },
    "l6-vf1": {
      "question": "الانضغاط شبه الساكن عكوس محليا بالضرورة.",
      "choices": [
        "صحيح",
        "خطأ"
      ],
      "explanations": [
        "خطأ: قد يجري الانضغاط شبه الساكن مع احتكاك مثلا. يبدد الاحتكاك الطاقة ويترك أثرا في الغاز أو محيطه، حتى إذا بقي الغاز قريبا من التوازن.",
        "صحيح: لا تكفي الصفة شبه الساكنة. يجب أيضا إزالة التبديد وإجراء المبادلات بفروق متناهية في الصغر في الضغط أو درجة الحرارة أو الكمون الكيميائي."
      ]
    },
    "l6-q7": {
      "question": "أي تعاقب يصف دورة كارنو المحركة لغاز مثالي، مع كون جميع فروعها عكوسة محليا؟",
      "choices": [
        "تمدد متساوي درجة الحرارة عند T_H، ثم تمدد كظوم عكوس، ثم انضغاط متساوي درجة الحرارة عند T_C، ثم انضغاط كظوم عكوس.",
        "تمدد متساوي درجة الحرارة عند T_H، ثم تبريد متساوي الحجم، ثم انضغاط متساوي درجة الحرارة عند T_C، ثم تسخين متساوي الحجم.",
        "تمدد متساوي درجة الحرارة عند T_C، ثم انضغاط كظوم، ثم انضغاط متساوي درجة الحرارة عند T_H، ثم تمدد كظوم."
      ],
      "explanations": [
        "صحيح: تحدث المبادلات الحرارية على الفرعين المتساويَي درجة الحرارة والعكوسين محليا؛ ويصل الفرعان الكظومان بين درجتي الحرارة دون تبادل حراري. تسلك الدورة المحركة اتجاه عقارب الساعة في المخطط (V, P).",
        "خطأ: الروابط بين الفرعين المتساويَي درجة الحرارة في دورة كارنو كظومة وليست متساوية الحجم. من شأن الفروع المتساوية الحجم تغيير الدورة ومبادلاتها الحرارية.",
        "خطأ: يصف هذا التعاقب دورة كارنو في الاتجاه المعاكس. وتتلقى الآلة حينئذ شغلا لأخذ حرارة من الخزان الحراري البارد وإعطائها للخزان الساخن."
      ]
    },
    "l6-vf2": {
      "question": "يحدد المبدأ الثاني اتجاه التطورات المسموح به ديناميكيا حراريا، لكنه لا يحدد وحده مدتها أو معاملات النقل.",
      "choices": [
        "صحيح",
        "خطأ"
      ],
      "explanations": [
        "صحيح: يقيد التحولات ويميز حالات التوازن ضمن فرضيات الدرس. لكنه لا يعطي زمن الاسترخاء ولا الموصلية الحرارية ولا اللزوجة ولا معامل الانتشار.",
        "خطأ: ليس المبدأ الثاني معادلة كاملة للديناميكا. تلزم قوانين إضافية لوصف سرعة التطور والحالات الوسيطة لتحول عنيف."
      ]
    }
  },
  "id": {
    "l6-q1": {
      "question": "Dalam pelajaran ini, apa yang disyaratkan oleh reversibilitas global suatu proses?",
      "choices": [
        "Sistem saja dapat kembali ke keadaan awalnya, apa pun perubahan pada lingkungannya.",
        "Suatu proses balik dapat memulihkan sistem dan seluruh lingkungannya, tanpa meninggalkan perubahan lain apa pun.",
        "Proses balik harus menempuh lintasan yang sama dengan arah berlawanan.",
        "Proses harus kuasistatik dan sistem tetap dekat dengan kesetimbangan pada setiap tahap."
      ],
      "explanations": [
        "Salah: memulihkan sistem saja dapat meninggalkan jejak pada reservoir termal atau sumber kerja. Seluruh lingkungan juga harus dipulihkan.",
        "Benar: cukup ada setidaknya satu prosedur balik yang menghapus semua perubahan sistem dan lingkungannya. Definisi global tidak menetapkan lintasan proses balik tersebut.",
        "Salah: menelusuri kembali lintasan berkaitan dengan reversibilitas lokal. Definisi global mengizinkan lintasan balik yang berbeda.",
        "Salah: sifat kuasistatik tidak cukup. Gesekan dapat tetap ada dan menghalangi pemulihan lengkap sistem beserta lingkungannya."
      ]
    },
    "l6-q11": {
      "question": "Sistem tertutup membuang 2 400 J ke reservoir termal pada 300 K. Perubahan entropinya adalah ΔS = −6 J/K. Berapakah entropi yang dipertukarkan S_e dan entropi yang diproduksi S_i?",
      "choices": [
        "S_e = −8 J/K dan S_i = +2 J/K.",
        "S_e = +8 J/K dan S_i = +2 J/K.",
        "S_e = −6 J/K dan S_i = 0 J/K.",
        "S_e = −8 J/K dan S_i = +14 J/K."
      ],
      "explanations": [
        "Benar: Q = −2 400 J, sehingga S_e = Q/T_ext = −8 J/K. Neraca ΔS = S_e + S_i memberikan S_i = +2 J/K. Reservoir memperoleh 8 J/K: entropi total meningkat sebesar 2 J/K jika entropi perangkat lainnya tidak berubah.",
        "Salah: S_e dihitung dari sudut pandang sistem, yang membuang kalor: S_e = −2 400/300 = −8 J/K. Nilai +8 J/K merupakan pertambahan entropi reservoir.",
        "Salah: S_e ditentukan oleh Q/T_ext = −8 J/K, bukan oleh ΔS. Selisihnya adalah entropi yang diproduksi: S_i = ΔS − S_e = +2 J/K.",
        "Salah: tanda ΔS harus dipertahankan: S_i = (−6) − (−8) = +2 J/K. Menjumlahkan nilai mutlak 6 dan 8 tidak memberikan produksi entropi."
      ]
    },
    "l6-q15": {
      "question": "Kalor Q = 1 200 J berpindah langsung dari reservoir termal pada 600 K ke reservoir termal pada 300 K. Berapakah perubahan entropi total kedua reservoir?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Benar: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Durasi tidak muncul dalam neraca ini; dinding dengan daya hantar rendah memperlambat perpindahan tanpa menghilangkan ireversibilitas akibat perbedaan suhu berhingga.",
        "Salah: energi kekal, tetapi perubahan entropi diberi bobot oleh kebalikan suhu, yang nilainya berbeda.",
        "Salah: hasil ini menjumlahkan nilai mutlak. Reservoir panas kehilangan 1 200/600 = 2 J/K, sedangkan reservoir dingin memperoleh 1 200/300 = 4 J/K: yang harus dihitung adalah −2 + 4.",
        "Salah: +4 J/K hanya merupakan perubahan reservoir dingin. Neraca total juga mencakup −2 J/K dari reservoir panas."
      ]
    },
    "l6-q3": {
      "question": "Mengapa lemari es biasa tidak bertentangan dengan pernyataan Clausius?",
      "choices": [
        "Karena perpindahan kalor dari dingin ke panas disertai masukan kerja dari lingkungan.",
        "Karena fluida kembali ke keadaan awal pada setiap siklus, sehingga meniadakan pengaruh pada kedua reservoir.",
        "Karena jumlah aljabar kalor dan kerja bernilai nol selama satu siklus, yang cukup untuk mengizinkan perpindahan tersebut."
      ],
      "explanations": [
        "Benar: Clausius melarang proses siklik yang satu-satunya akibatnya adalah perpindahan dari dingin ke panas tersebut. Lemari es menerima kerja: jadi, perpindahan itu bukan satu-satunya akibatnya.",
        "Salah: fluida kembali ke keadaan awal, tetapi reservoir telah bertukar energi. Sifat siklik tidak menghapus perubahan lingkungan tersebut.",
        "Salah: kekekalan energi diperlukan, tetapi tidak cukup. Hukum kedua menetapkan kendala fisik tambahan."
      ]
    },
    "l6-q13": {
      "question": "Gas ideal sebanyak n mol mengalami ekspansi Joule–Gay-Lussac dari volume v ke volume V > v dalam wadah kaku dan adiabatik. Pelepasan sekat tidak mengubah lingkungan. Neraca manakah yang benar?",
      "choices": [
        "Q = W = 0, sehingga ΔU_gas = 0 dan ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 dan ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 dan ΔS_tot = 0, meskipun ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 dan ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Salah: Q = W = 0 memang mengimplikasikan ΔU_gas = 0, tetapi tidak mengimplikasikan ΔS_gas = 0. Tidak adanya pertukaran kalor tidak melarang produksi entropi: hubungan dS = δQ_rev/T tidak berlaku untuk kalor nyata dalam ekspansi ireversibel ini.",
        "Salah: gas berekspansi melawan vakum; jadi, gas tidak memberikan kerja, W = 0. Dengan Q = 0, berlaku ΔU_gas = 0. Entropi meningkat tanpa masukan energi.",
        "Salah: lingkungan tidak berubah, sehingga ΔS_ext = 0. Tidak ada penurunan entropi lingkungan yang mengimbangi kenaikan entropi gas: ΔS_tot = ΔS_gas > 0.",
        "Benar: Q = W = 0 memberikan ΔU_gas = 0. Karena lingkungan tidak berubah, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Kenaikan ini membuktikan bahwa tidak ada proses balik yang dapat memulihkan gas dan lingkungannya tanpa meninggalkan jejak di tempat lain."
      ]
    },
    "l6-q6": {
      "question": "Mesin kalor dua reservoir beroperasi antara 600 K dan 300 K serta menerima Q_H = 1 000 J per siklus. Berapakah nilai maksimum kerja yang diberikan |W|?",
      "choices": [
        "1 000 J.",
        "Sekitar 667 J.",
        "500 J.",
        "Tidak dapat ditentukan tanpa mengetahui fluida kerja."
      ],
      "explanations": [
        "Salah: seluruh kalor yang diterima dari reservoir panas tidak dapat diubah menjadi kerja dalam satu siklus. Hukum kedua mengharuskan sebagian dibuang ke reservoir dingin, sekalipun ΔU = 0.",
        "Salah: 667 J kira-kira bersesuaian dengan Q_H T_H/(T_H + T_C). Padahal efisiensi Carnot adalah 1 − T_C/T_H, bukan T_H/(T_H + T_C).",
        "Benar: efisiensi maksimum adalah efisiensi Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Jadi, |W|_max = η_max Q_H = 500 J. Nilai ini dicapai oleh mesin dua reservoir yang reversibel secara lokal.",
        "Salah: suhu kedua reservoir dan kalor yang diterima cukup untuk menghitung kerja maksimum: |W|_max = Q_H (1 − T_C/T_H). Tidak perlu mengetahui fluida maupun perincian mesin."
      ]
    },
    "l6-q18": {
      "question": "Dua subsistem dengan komposisi tetap dapat bertukar energi dan volume secara independen dalam gabungan terisolasi. Apa yang dapat dikatakan tentang keadaan setimbangnya?",
      "choices": [
        "U_1 = U_2 dan V_1 = V_2, apa pun ukuran kedua subsistem.",
        "P_1/T_1 = P_2/T_2, tanpa mengharuskan suhu keduanya sama.",
        "T_1 = T_2, tetapi tekanannya belum tentu sama.",
        "T_1 = T_2 dan P_1 = P_2."
      ],
      "explanations": [
        "Salah: kesetimbangan tidak mengharuskan besaran ekstensif sama. Dua subsistem dengan ukuran berbeda dapat memiliki energi dan volume berbeda pada kesetimbangan.",
        "Salah: kesetaraan ini hanya membuat koefisien dV_1 nol. Karena energi juga dapat didistribusikan ulang secara independen, koefisien dU_1 harus nol: T_1 = T_2. Kriteria yang digunakan adalah kestasioneran entropi total.",
        "Salah: karena pertukaran volume juga diizinkan, kesetimbangan harus bersifat mekanis sekaligus termal. Jadi, tekanannya juga harus sama.",
        "Benar: pada kesetimbangan, entropi total stasioner terhadap semua redistribusi yang diizinkan: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Karena pertukaran energi dan volume independen, kedua koefisien nol: T_1 = T_2 dan P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Mesin siklik menerima kalor aljabar Q_k dari reservoir termal pada T_k > 0 dan bertukar kerja dengan sumber ideal. Pernyataan manakah yang sesuai dengan pertidaksamaan Clausius dan definisi dalam pelajaran ini?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, dengan nilai yang benar-benar positif untuk siklus yang ireversibel secara global.",
        "Σ_k Q_k/T_k = 0 untuk setiap siklus, karena entropi mesin kembali ke nilai awalnya.",
        "Σ_k Q_k/T_k ≤ 0, dan kesetaraan itu sendiri membuktikan bahwa lintasan awal reversibel secara lokal.",
        "Σ_k Q_k/T_k ≤ 0; kesetaraan mencirikan reversibilitas global, tanpa membuktikan reversibilitas lokal."
      ],
      "explanations": [
        "Salah: Q_k dihitung positif ketika diterima oleh mesin. Dengan konvensi ini, jumlahnya negatif atau nol.",
        "Salah: ΔS_system = 0 selama satu siklus, tetapi entropi yang dipertukarkan dapat negatif dan diimbangi oleh produksi entropi positif.",
        "Salah: tandanya benar, tetapi kasus kesetaraan membangun proses balik global dengan mesin bantu. Hal ini tidak menunjukkan bahwa mesin awal dapat menelusuri kembali lintasannya sendiri.",
        "Benar: siklus yang reversibel secara lokal memenuhi kesetaraan. Sebaliknya, jumlah nol memungkinkan sumber-sumber dipulihkan menggunakan mesin bantu; jumlah yang benar-benar negatif menandakan siklus yang ireversibel secara global."
      ]
    },
    "l6-q9": {
      "question": "Bagaimana pelajaran ini membangun entropi dari kesetaraan ∮ δQ_rev/T = 0 pada siklus yang reversibel secara lokal?",
      "choices": [
        "Dengan menyimpulkan bahwa kalor Q merupakan fungsi keadaan.",
        "Dengan mendefinisikan S(B) − S(A) melalui integral δQ_rev/T.",
        "Dengan mendefinisikan S(B) − S(A) melalui integral δQ/T_ext sepanjang lintasan nyata sembarang."
      ],
      "explanations": [
        "Salah: yang merupakan diferensial eksak adalah δQ_rev/T. Kalor yang dipertukarkan tetap bergantung pada lintasan.",
        "Benar: dua lintasan yang reversibel secara lokal, dengan salah satunya ditempuh terbalik, membentuk siklus dengan integral nol. Entropi dengan demikian terdefinisi dengan kebebasan memilih konstanta aditif pada setiap domain yang terhubung secara reversibel, dan dinyatakan dalam J/K.",
        "Salah: sepanjang lintasan nyata yang ireversibel, integral δQ/T_ext memberikan entropi yang dipertukarkan, belum tentu ΔS. Konstruksi ini menggunakan δQ_rev/T sepanjang lintasan yang reversibel secara lokal."
      ]
    },
    "l6-q2": {
      "question": "Pernyataan manakah yang mendeskripsikan reversibilitas lokal dengan benar?",
      "choices": [
        "Cukup bahwa keadaan awal dan akhir sistem merupakan keadaan setimbang.",
        "Reversibilitas lokal otomatis mengikuti setiap prosedur yang memulihkan sistem dan lingkungannya secara global.",
        "Reversibilitas lokal mensyaratkan pembalikan setiap tahap rangkaian keadaan setimbang melalui perubahan infinitesimal kendala.",
        "Reversibilitas lokal memungkinkan penelusuran kembali lintasan sistem sambil mempertahankan tanda pertukaran kalor dan kerja."
      ],
      "explanations": [
        "Salah: keadaan antara dan kemampuan membalik setiap tahap merupakan bagian penting definisi lokal.",
        "Salah: proses balik global dapat menempuh lintasan berbeda. Keberadaannya saja tidak membuktikan bahwa lintasan awal reversibel secara lokal.",
        "Benar: rangkaian keadaan yang sama kemudian dapat ditempuh dengan arah berlawanan, sekaligus memulihkan lingkungan. Jadi, reversibilitas lokal mengimplikasikan reversibilitas global.",
        "Salah: ketika lintasan yang reversibel secara lokal ditempuh terbalik, pertukaran termal dan mekanis berubah tanda pada setiap tahap."
      ]
    },
    "l6-q12": {
      "question": "Proses ireversibel menghubungkan dua keadaan setimbang A dan B, tetapi keadaan antaranya jauh dari kesetimbangan. Pernyataan manakah yang benar?",
      "choices": [
        "Perubahan entropi ΔS adalah integral δQ_actual/T_ext sepanjang lintasan nyata.",
        "Perubahan entropi ΔS dapat dihitung sepanjang lintasan yang reversibel secara lokal antara A dan B, sedangkan S_e dan S_i bergantung pada proses nyata.",
        "Keadaan A dan B saja menentukan entropi yang dipertukarkan S_e dan entropi yang diproduksi S_i."
      ],
      "explanations": [
        "Salah: integral ini memberikan S_e, yaitu entropi yang dipertukarkan. Neracanya adalah ΔS = S_e + S_i: kalor yang benar-benar dipertukarkan tidak cukup untuk menghitung ΔS tanpa memperhitungkan entropi yang diproduksi.",
        "Benar: S merupakan fungsi keadaan, sehingga ΔS = ∫ δQ_rev/T dapat dihitung sepanjang lintasan yang reversibel secara lokal dan menghubungkan keadaan yang sama. Kemudian kita kembali ke pertukaran nyata untuk menentukan S_e = ∫ δQ_actual/T_ext dan S_i = ΔS − S_e.",
        "Salah: keadaan A dan B menentukan ΔS, tetapi tidak menentukan penguraiannya menjadi entropi yang dipertukarkan dan yang diproduksi. S_e bergantung pada kalor yang benar-benar dipertukarkan dan suhu lingkungan; S_i kemudian diperoleh dari neraca ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Operasi apa yang tepatnya dilarang oleh pernyataan Kelvin–Planck?",
      "choices": [
        "Mengubah kerja yang diterima menjadi kalor selama satu siklus.",
        "Menerima kalor Q > 0 dan memberikan kerja W = −Q selama ekspansi isotermal gas ideal yang tidak siklik.",
        "Memberikan kerja selama satu siklus dengan mengambil kalor dari reservoir panas dan membuang kalor ke reservoir dingin.",
        "Menjalani siklus yang satu-satunya akibatnya adalah mengambil kalor Q > 0 dari satu reservoir termal dan memberikan W = −Q kepada lingkungan."
      ],
      "explanations": [
        "Salah: mengubah kerja menjadi kalor diizinkan. Larangan berlaku pada perubahan seluruh kalor menjadi kerja dengan satu reservoir termal dan tanpa akibat lain.",
        "Salah: ekspansi ini tidak mengembalikan gas ke keadaan awalnya. Syarat siklik dalam pernyataan tersebut sangat penting.",
        "Salah: ini merupakan operasi mesin kalor dua reservoir, yang mungkin jika efisiensinya mematuhi batas Carnot.",
        "Benar: hukum pertama mengizinkan neraca Q + W = 0 ini, tetapi hukum kedua melarang operasi siklik dengan satu reservoir termal tersebut. Dengan konvensi dalam kuliah ini, memberikan kerja berarti W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Kompresi kuasistatik pasti reversibel secara lokal.",
      "choices": [
        "Benar",
        "Salah"
      ],
      "explanations": [
        "Salah: kompresi kuasistatik dapat, misalnya, berlangsung dengan gesekan. Gesekan mendisipasikan energi dan meninggalkan jejak pada gas atau lingkungannya, sekalipun gas tetap dekat dengan kesetimbangan.",
        "Benar: sifat kuasistatik tidak cukup. Disipasi juga harus dihilangkan dan pertukaran harus dijalankan dengan perbedaan infinitesimal tekanan, suhu, atau potensial kimia."
      ]
    },
    "l6-q7": {
      "question": "Urutan manakah yang menggambarkan siklus Carnot gas ideal sebagai mesin penghasil kerja, dengan semua cabangnya reversibel secara lokal?",
      "choices": [
        "Ekspansi isotermal pada T_H, ekspansi adiabatik reversibel, kompresi isotermal pada T_C, lalu kompresi adiabatik reversibel.",
        "Ekspansi isotermal pada T_H, pendinginan isokhorik, kompresi isotermal pada T_C, lalu pemanasan isokhorik.",
        "Ekspansi isotermal pada T_C, kompresi adiabatik, kompresi isotermal pada T_H, lalu ekspansi adiabatik."
      ],
      "explanations": [
        "Benar: pertukaran kalor berlangsung pada kedua isoterm yang reversibel secara lokal; proses adiabatik menghubungkan kedua suhu tanpa pertukaran kalor. Siklus penghasil kerja ditempuh searah jarum jam pada diagram (V, P).",
        "Salah: penghubung antara isoterm dalam siklus Carnot bersifat adiabatik, bukan isokhorik. Cabang isokhorik akan mengubah siklus dan pertukaran kalornya.",
        "Salah: urutan ini menggambarkan siklus Carnot yang ditempuh terbalik. Mesin kemudian menerima kerja untuk mengambil kalor dari reservoir dingin dan menyerahkannya kepada reservoir panas."
      ]
    },
    "l6-vf2": {
      "question": "Hukum kedua menetapkan arah evolusi yang diizinkan secara termodinamika, tetapi tidak dengan sendirinya menentukan durasinya maupun koefisien transport.",
      "choices": [
        "Benar",
        "Salah"
      ],
      "explanations": [
        "Benar: hukum kedua membatasi proses dan mencirikan kesetimbangan berdasarkan asumsi dalam kuliah ini. Hukum tersebut tidak memberikan waktu relaksasi, konduktivitas termal, viskositas, maupun koefisien difusi.",
        "Salah: hukum kedua bukan persamaan dinamika yang lengkap. Hukum tambahan diperlukan untuk mendeskripsikan laju evolusi dan keadaan antara dalam proses yang berlangsung mendadak."
      ]
    }
  },
  "tr": {
    "l6-q1": {
      "question": "Bu derste bir sürecin bütünsel tersinirliği neyi gerektirir?",
      "choices": [
        "Çevresindeki değişiklikler ne olursa olsun yalnızca sistemin başlangıç durumuna dönebilmesini.",
        "Bir dönüş sürecinin sistemi ve bütün çevresini, başka hiçbir değişiklik bırakmadan eski durumlarına getirebilmesini.",
        "Dönüşün mutlaka aynı yolu ters yönde izlemesini.",
        "Sürecin yarı statik olmasını ve sistemin her adımda dengeye yakın kalmasını."
      ],
      "explanations": [
        "Yanlış: yalnızca sistemi eski durumuna getirmek, bir termostatta veya iş kaynağında iz bırakabilir. Çevrenin tamamı da eski durumuna getirilmelidir.",
        "Doğru: en az bir dönüş işleminin sistem ve çevresindeki bütün değişiklikleri gidermesi yeterlidir. Bütünsel tanım bu dönüşün yolunu belirlemez.",
        "Yanlış: aynı yolu geriye doğru izlemek yerel tersinirlikle ilgilidir. Bütünsel tanım farklı bir dönüş yoluna izin verir.",
        "Yanlış: yarı statiklik yeterli değildir. Sürtünme devam edebilir ve sistem ile çevresinin tamamen eski durumlarına getirilmesini engelleyebilir."
      ]
    },
    "l6-q11": {
      "question": "Kapalı bir sistem 300 K sıcaklığındaki bir termostata 2 400 J ısı verir. Entropi değişimi ΔS = −6 J/K'dir. Alışveriş edilen entropisi S_e ve üretilen entropisi S_i nedir?",
      "choices": [
        "S_e = −8 J/K ve S_i = +2 J/K.",
        "S_e = +8 J/K ve S_i = +2 J/K.",
        "S_e = −6 J/K ve S_i = 0 J/K.",
        "S_e = −8 J/K ve S_i = +14 J/K."
      ],
      "explanations": [
        "Doğru: Q = −2 400 J, dolayısıyla S_e = Q/T_ext = −8 J/K. ΔS = S_e + S_i bilançosu S_i = +2 J/K verir. Termostat 8 J/K kazanır: diğer düzeneklerin entropisi değişmiyorsa toplam entropi 2 J/K artar.",
        "Yanlış: S_e, ısıyı veren sistem açısından sayılır: S_e = −2 400/300 = −8 J/K. +8 J/K ise termostatın kazancıdır.",
        "Yanlış: S_e, ΔS ile değil, Q/T_ext = −8 J/K ile belirlenir. Aralarındaki fark üretilen entropidir: S_i = ΔS − S_e = +2 J/K.",
        "Yanlış: ΔS'nin işareti korunmalıdır: S_i = (−6) − (−8) = +2 J/K. Mutlak değerler olan 6 ve 8'i toplamak üretilen entropiyi vermez."
      ]
    },
    "l6-q15": {
      "question": "Q = 1 200 J ısısı doğrudan 600 K sıcaklığındaki bir termostattan 300 K sıcaklığındaki bir termostata geçiyor. İki termostatın toplam entropi değişimi nedir?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Doğru: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Süre bu bilançoda yer almaz; ısıyı zayıf ileten bir duvar aktarımı yavaşlatır, ancak sonlu sıcaklık farkından kaynaklanan tersinmezliği ortadan kaldırmaz.",
        "Yanlış: enerji korunur, fakat entropi değişimleri, birbirinden farklı olan sıcaklıkların tersleriyle ağırlıklandırılır.",
        "Yanlış: bu sonuç mutlak değerleri toplar. Sıcak termostat 1 200/600 = 2 J/K kaybederken soğuk termostat 1 200/300 = 4 J/K kazanır: yapılması gereken işlem −2 + 4'tür.",
        "Yanlış: +4 J/K yalnızca soğuk termostatın değişimidir. Toplam bilanço, sıcak termostatın −2 J/K değişimini de içerir."
      ]
    },
    "l6-q3": {
      "question": "Sıradan bir buzdolabı neden Clausius ifadesiyle çelişmez?",
      "choices": [
        "Çünkü soğuktan sıcağa ısı aktarımına dışarıdan sağlanan iş eşlik eder.",
        "Çünkü akışkan her çevrimde başlangıç durumuna döner ve böylece iki termostat üzerindeki etkiler sıfırlanır.",
        "Çünkü bir çevrimde ısılarla işin cebirsel toplamı sıfırdır; bu da aktarımın mümkün olması için yeterlidir."
      ],
      "explanations": [
        "Doğru: Clausius, tek etkisi soğuktan sıcağa bu aktarım olan çevrimsel bir süreci yasaklar. Buzdolabı iş alır; dolayısıyla aktarım onun tek etkisi değildir.",
        "Yanlış: akışkan başlangıç durumuna döner, ancak termostatlar enerji alışverişi yapmıştır. Çevrimsel çalışma bu dış değişiklikleri ortadan kaldırmaz.",
        "Yanlış: enerji korunumu gereklidir, ama yeterli değildir. İkinci ilke ek bir fiziksel kısıt getirir."
      ]
    },
    "l6-q13": {
      "question": "n mol ideal gaz, rijit ve adyabatik bir kapta v hacminden V > v hacmine Joule–Gay-Lussac genleşmesi yapıyor. Bölmenin kaldırılması çevreyi değiştirmiyor. Hangi bilanço doğrudur?",
      "choices": [
        "Q = W = 0, dolayısıyla ΔU_gas = 0 ve ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 ve ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 ve ΔS_tot = 0; buna rağmen ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 ve ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Yanlış: Q = W = 0 gerçekten ΔU_gas = 0 verir, fakat ΔS_gas = 0 sonucunu vermez. Isı alışverişinin olmaması entropi üretimini yasaklamaz: dS = δQ_rev/T bağıntısı, bu tersinmez genleşmenin gerçek ısısına uygulanamaz.",
        "Yanlış: gaz boşluğa karşı genleşir; dolayısıyla hiç iş vermez, W = 0. Q = 0 ile ΔU_gas = 0 olur. Entropi, enerji girdisi olmadan artar.",
        "Yanlış: çevre değişmediği için ΔS_ext = 0 olur. Gazın entropi artışını dengeleyen bir dış azalma yoktur: ΔS_tot = ΔS_gas > 0.",
        "Doğru: Q = W = 0, ΔU_gas = 0 verir. Çevre değişmediğinden ΔS_tot = ΔS_gas = nR ln(V/v) > 0 olur. Bu artış, başka bir yerde iz bırakmadan gazı ve çevresini eski durumlarına döndürebilecek hiçbir dönüş olmadığını kanıtlar."
      ]
    },
    "l6-q6": {
      "question": "İki ısı rezervuarlı bir motor, 600 K ile 300 K arasında çalışıyor ve her çevrimde Q_H = 1 000 J alıyor. Verdiği işin |W| en büyük değeri nedir?",
      "choices": [
        "1 000 J.",
        "Yaklaşık 667 J.",
        "500 J.",
        "Çalışma akışkanı bilinmeden belirlenemez."
      ],
      "explanations": [
        "Yanlış: sıcak termostattan alınan ısının tamamı bir çevrimde işe dönüştürülemez. İkinci ilke, ΔU = 0 olsa bile bir kısmının soğuk termostata verilmesini gerektirir.",
        "Yanlış: 667 J yaklaşık olarak Q_H T_H/(T_H + T_C) ifadesine karşılık gelir. Oysa Carnot verimi T_H/(T_H + T_C) değil, 1 − T_C/T_H'dir.",
        "Doğru: en yüksek verim Carnot verimidir: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Böylece |W|_max = η_max Q_H = 500 J. Yerel olarak tersinir, iki ısı rezervuarlı bir makine bu değere ulaşır.",
        "Yanlış: iki termostatın sıcaklıkları ve alınan ısı, en büyük işi hesaplamaya yeter: |W|_max = Q_H (1 − T_C/T_H). Akışkanı ya da motorun ayrıntılarını bilmek gerekmez."
      ]
    },
    "l6-q18": {
      "question": "Bileşimleri sabit iki alt sistem, yalıtılmış bir bütün içinde enerji ve hacmi birbirinden bağımsız olarak alışveriş edebiliyor. Denge durumları için ne söylenebilir?",
      "choices": [
        "Alt sistemlerin büyüklükleri ne olursa olsun U_1 = U_2 ve V_1 = V_2.",
        "Sıcaklıkların eşit olması gerekmeden P_1/T_1 = P_2/T_2.",
        "T_1 = T_2, fakat basınçların eşit olması gerekmez.",
        "T_1 = T_2 ve P_1 = P_2."
      ],
      "explanations": [
        "Yanlış: denge, ekstensif büyüklüklerin eşitliğini gerektirmez. Farklı büyüklükteki alt sistemler dengede farklı enerji ve hacimlere sahip olabilir.",
        "Yanlış: bu eşitlik yalnızca dV_1'in katsayısını sıfırlar. Enerji de bağımsız olarak yeniden dağıtılabildiğinden dU_1'in katsayısı da sıfır olmalıdır: T_1 = T_2. Kullanılan ölçüt toplam entropinin durağanlığıdır.",
        "Yanlış: hacim alışverişine de izin verildiği için denge hem mekanik hem ısıl olmalıdır. Dolayısıyla basınçlar da eşit olmalıdır.",
        "Doğru: dengede toplam entropi izin verilen bütün yeniden dağılımlara göre durağandır: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Enerji ve hacim alışverişleri bağımsız olduğundan iki katsayı da sıfırlanır: T_1 = T_2 ve P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Çevrimsel bir makine, T_k > 0 sıcaklıklarındaki termostatlardan cebirsel Q_k ısılarını alıyor ve ideal bir kaynakla iş alışverişi yapıyor. Hangi ifade Clausius eşitsizliğine ve dersin tanımlarına uygundur?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0; bütünsel olarak tersinmez bir çevrimde değer kesinlikle pozitiftir.",
        "Makinenin entropisi başlangıç değerine döndüğü için her çevrimde Σ_k Q_k/T_k = 0.",
        "Σ_k Q_k/T_k ≤ 0 ve eşitlik tek başına başlangıçtaki yolun yerel olarak tersinir olduğunu kanıtlar.",
        "Σ_k Q_k/T_k ≤ 0; eşitlik, yerel tersinirliği kanıtlamadan bütünsel tersinirliği niteler."
      ],
      "explanations": [
        "Yanlış: makinenin aldığı Q_k ısıları pozitif sayılır. Bu işaret kuralıyla toplam negatif ya da sıfırdır.",
        "Yanlış: bir çevrimde ΔS_system = 0 olur, ancak alışveriş edilen entropi negatif olabilir ve pozitif entropi üretimiyle dengelenebilir.",
        "Yanlış: işaret doğrudur, fakat eşitlik durumunda yardımcı makinelerle bütünsel bir dönüş kurulur. Bu, başlangıçtaki makinenin kendi yolunu geriye doğru izleyebildiğini göstermez.",
        "Doğru: yerel olarak tersinir bir çevrim eşitliği sağlar. Tersine, sıfır toplam, kaynakları yardımcı makinelerle eski durumlarına getirmeyi sağlar; kesinlikle negatif toplam, bütünsel olarak tersinmez bir çevrime işaret eder."
      ]
    },
    "l6-q9": {
      "question": "Ders, yerel olarak tersinir çevrimlerdeki ∮ δQ_rev/T = 0 eşitliğinden entropiyi nasıl kurar?",
      "choices": [
        "Q ısısının bir durum fonksiyonu olduğu sonucunu çıkarır.",
        "S(B) − S(A)'yı δQ_rev/T integraliyle tanımlar.",
        "S(B) − S(A)'yı herhangi bir gerçek yol üzerindeki δQ/T_ext integraliyle tanımlar."
      ],
      "explanations": [
        "Yanlış: tam diferansiyel olan δQ_rev/T'dir. Alışveriş edilen ısı yola bağlı olmaya devam eder.",
        "Doğru: biri ters yönde izlenen, yerel olarak tersinir iki yol, integrali sıfır olan bir çevrim oluşturur. Böylece entropi, tersinir bağlantılı her bölgede bir toplamsal sabit dışında tanımlanır ve J/K ile ifade edilir.",
        "Yanlış: gerçek bir tersinmez yolda δQ/T_ext integrali, mutlaka ΔS'yi değil, alışveriş edilen entropiyi verir. Kuruluş, yerel olarak tersinir bir yol üzerindeki δQ_rev/T'yi kullanır."
      ]
    },
    "l6-q2": {
      "question": "Hangi ifade yerel tersinirliği doğru betimler?",
      "choices": [
        "Sistemin başlangıç ve son durumlarının denge durumları olması yeterlidir.",
        "Sistemi ve çevresini bütünsel olarak eski durumlarına getiren her işlemden otomatik olarak çıkar.",
        "Bir denge durumları dizisinin her adımının, kısıtlarda sonsuz küçük bir değişiklikle tersine çevrilebilmesini gerektirir.",
        "Isı ve iş alışverişlerinin işaretlerini koruyarak sistemin yolunu geriye doğru izlemeye izin verir."
      ],
      "explanations": [
        "Yanlış: ara durumlar ve her adımı tersine çevirebilme olanağı yerel tanım için esastır.",
        "Yanlış: bütünsel bir dönüş farklı bir yol izleyebilir. Varlığı tek başına başlangıçtaki yolun yerel olarak tersinir olduğunu kanıtlamaz.",
        "Doğru: aynı durumlar dizisi, çevre de eski durumuna getirilerek ters yönde izlenebilir. Dolayısıyla yerel tersinirlik bütünsel tersinirliği gerektirir.",
        "Yanlış: yerel olarak tersinir bir yol ters yönde izlenirken ısı ve iş alışverişleri her adımda işaret değiştirir."
      ]
    },
    "l6-q12": {
      "question": "Tersinmez bir süreç, A ve B denge durumlarını bağlıyor; ancak ara durumları dengeden uzak. Hangi ifade doğrudur?",
      "choices": [
        "Entropi değişimi ΔS, gerçek yol üzerindeki δQ_actual/T_ext integralidir.",
        "Entropi değişimi ΔS, A ile B arasındaki yerel olarak tersinir bir yolda hesaplanabilir; S_e ve S_i ise gerçek sürece bağlıdır.",
        "A ve B durumları tek başına alışveriş edilen S_e entropisini ve üretilen S_i entropisini belirler."
      ],
      "explanations": [
        "Yanlış: bu integral, alışveriş edilen entropi S_e'yi verir. Bilanço ΔS = S_e + S_i'dir: üretilen entropi hesaba katılmadan, gerçekten alışveriş edilen ısı ΔS'yi hesaplamaya yetmez.",
        "Doğru: S bir durum fonksiyonudur; dolayısıyla ΔS = ∫ δQ_rev/T, aynı durumları bağlayan yerel olarak tersinir bir yolda hesaplanabilir. Ardından S_e = ∫ δQ_actual/T_ext ve S_i = ΔS − S_e'yi belirlemek için gerçek alışverişlere dönülür.",
        "Yanlış: A ve B durumları ΔS'yi belirler, fakat alışveriş edilen ve üretilen entropi olarak ayrışımını belirlemez. S_e gerçekten alışveriş edilen ısılara ve dış sıcaklıklara bağlıdır; S_i daha sonra ΔS = S_e + S_i bilançosundan bulunur."
      ]
    },
    "l6-q4": {
      "question": "Kelvin–Planck ifadesi tam olarak hangi çalışmayı yasaklar?",
      "choices": [
        "Alınan işi bir çevrim boyunca ısıya dönüştürmek.",
        "İdeal gazın çevrimsel olmayan izotermal genleşmesinde Q > 0 ısısını almak ve W = −Q işini vermek.",
        "Bir çevrimde sıcak termostattan ısı alıp soğuk termostata bir kısmını vererek iş sağlamak.",
        "Tek etkisi tek bir termostattan Q > 0 ısısını almak ve çevreye W = −Q işini vermek olan bir çevrim gerçekleştirmek."
      ],
      "explanations": [
        "Yanlış: işin ısıya dönüştürülmesine izin verilir. Yasak, tek bir termostatla ve başka hiçbir etki olmadan ısının bütünüyle işe dönüştürülmesine ilişkindir.",
        "Yanlış: bu genleşme gazı başlangıç durumuna döndürmez. İfadedeki çevrim koşulu esastır.",
        "Yanlış: bu, verimi Carnot sınırına uyduğu sürece mümkün olan, iki ısı rezervuarlı bir motorun çalışmasıdır.",
        "Doğru: birinci ilke Q + W = 0 bilançosuna izin verirdi, fakat ikinci ilke tek termostatlı bu çevrimsel çalışmayı yasaklar. Dersin işaret kuralında iş vermek W < 0 demektir."
      ]
    },
    "l6-vf1": {
      "question": "Yarı statik bir sıkıştırma mutlaka yerel olarak tersinirdir.",
      "choices": [
        "Doğru",
        "Yanlış"
      ],
      "explanations": [
        "Yanlış: yarı statik bir sıkıştırma örneğin sürtünmeyle gerçekleşebilir. Gaz dengeye yakın kalsa bile sürtünme enerjiyi disipasyona uğratır ve gazda ya da çevresinde bir iz bırakır.",
        "Doğru: yarı statiklik yeterli değildir. Disipasyonlar da giderilmeli ve alışverişler sonsuz küçük basınç, sıcaklık veya kimyasal potansiyel farklarıyla yürütülmelidir."
      ]
    },
    "l6-q7": {
      "question": "Bütün kolları yerel olarak tersinir olan bir ideal gazın motor olarak çalışan Carnot çevrimini hangi sıralama betimler?",
      "choices": [
        "T_H'de izotermal genleşme, tersinir adyabatik genleşme, T_C'de izotermal sıkıştırma ve ardından tersinir adyabatik sıkıştırma.",
        "T_H'de izotermal genleşme, izokorik soğuma, T_C'de izotermal sıkıştırma ve ardından izokorik ısınma.",
        "T_C'de izotermal genleşme, adyabatik sıkıştırma, T_H'de izotermal sıkıştırma ve ardından adyabatik genleşme."
      ],
      "explanations": [
        "Doğru: ısı alışverişleri yerel olarak tersinir iki izoterm üzerinde gerçekleşir; adyabatik kollar iki sıcaklığı ısı alışverişi olmadan bağlar. Motor çevrimi (V, P) diyagramında saat yönünde izlenir.",
        "Yanlış: Carnot çevriminin izotermleri arasındaki bağlantılar izokorik değil, adyabatiktir. İzokorik kollar çevrimi ve ısı alışverişlerini değiştirirdi.",
        "Yanlış: bu sıralama, ters yönde izlenen Carnot çevrimini betimler. Makine bu durumda soğuk termostattan ısı almak ve sıcak termostata ısı vermek için iş alır."
      ]
    },
    "l6-vf2": {
      "question": "İkinci ilke, süreçlerin termodinamik açıdan izin verilen yönünü belirler; ancak tek başına sürelerini veya taşınım katsayılarını belirlemez.",
      "choices": [
        "Doğru",
        "Yanlış"
      ],
      "explanations": [
        "Doğru: dersin varsayımları altında süreçleri kısıtlar ve dengeleri niteler. Ne gevşeme süresi ne ısıl iletkenlik, viskozite veya difüzyon katsayısı verir.",
        "Yanlış: ikinci ilke dinamiğin tam bir denklemi değildir. Bir sürecin değişim hızını ve ani bir sürecin ara durumlarını betimlemek için ek yasalar gerekir."
      ]
    }
  },
  "bn": {
    "l6-q1": {
      "question": "এই পাঠে, কোনো রূপান্তরের সামগ্রিক প্রত্যাবর্তিতার জন্য কী প্রয়োজন?",
      "choices": [
        "পরিবেশে যা-ই পরিবর্তন হোক না কেন, শুধু তন্ত্রটি তার প্রাথমিক অবস্থায় ফিরতে পারলেই চলে।",
        "এমন একটি প্রত্যাবর্তন সম্ভব হতে হবে যা তন্ত্র ও তার সমগ্র পরিবেশকে পুনঃস্থাপন করে, অন্য কোনো পরিবর্তন রেখে যায় না।",
        "প্রত্যাবর্তনের সময় অবশ্যই একই পথ বিপরীত দিকে অনুসরণ করতে হবে।",
        "রূপান্তরটি কোয়াসি-স্থিতিশীল হতে হবে এবং প্রতিটি ধাপে তন্ত্রকে সাম্যের কাছাকাছি থাকতে হবে।"
      ],
      "explanations": [
        "ভুল: শুধু তন্ত্রকে পুনঃস্থাপন করলে কোনো তাপাধার বা কাজের উৎসে পরিবর্তনের চিহ্ন থেকে যেতে পারে। সমগ্র পরিবেশকেও পুনঃস্থাপন করতে হবে।",
        "সঠিক: অন্তত একটি প্রত্যাবর্তন প্রক্রিয়া তন্ত্র ও তার পরিবেশের সমস্ত পরিবর্তন মুছে দিতে পারলেই যথেষ্ট। সামগ্রিক সংজ্ঞা এই প্রত্যাবর্তনের পথ নির্দিষ্ট করে না।",
        "ভুল: একই পথ বিপরীত দিকে অনুসরণ করা স্থানীয় প্রত্যাবর্তিতার বিষয়। সামগ্রিক সংজ্ঞায় প্রত্যাবর্তনের জন্য অন্য পথও গ্রহণযোগ্য।",
        "ভুল: কোয়াসি-স্থিতিশীল হওয়াই যথেষ্ট নয়। ঘর্ষণ থেকে যেতে পারে এবং তন্ত্র ও তার পরিবেশের সম্পূর্ণ পুনঃস্থাপনকে বাধা দিতে পারে।"
      ]
    },
    "l6-q11": {
      "question": "একটি বদ্ধ তন্ত্র 300 K তাপমাত্রার একটি তাপাধারকে 2 400 J তাপ দেয়। তন্ত্রের এনট্রপির পরিবর্তন ΔS = −6 J/K। তার বিনিময় করা এনট্রপি S_e ও উৎপন্ন এনট্রপি S_i কত?",
      "choices": [
        "S_e = −8 J/K এবং S_i = +2 J/K।",
        "S_e = +8 J/K এবং S_i = +2 J/K।",
        "S_e = −6 J/K এবং S_i = 0 J/K।",
        "S_e = −8 J/K এবং S_i = +14 J/K।"
      ],
      "explanations": [
        "সঠিক: Q = −2 400 J, তাই S_e = Q/T_ext = −8 J/K। ΔS = S_e + S_i হিসাবে S_i = +2 J/K পাওয়া যায়। তাপাধারের এনট্রপি 8 J/K বাড়ে: অন্যান্য যন্ত্রের এনট্রপি অপরিবর্তিত থাকলে মোট এনট্রপি 2 J/K বাড়ে।",
        "ভুল: S_e তন্ত্রের দৃষ্টিকোণ থেকে গণনা করা হয়, আর তন্ত্র তাপ দিচ্ছে: S_e = −2 400/300 = −8 J/K। +8 J/K হলো তাপাধারের এনট্রপির বৃদ্ধি।",
        "ভুল: S_e নির্ধারিত হয় Q/T_ext = −8 J/K দিয়ে, ΔS দিয়ে নয়। এদের পার্থক্যই উৎপন্ন এনট্রপি: S_i = ΔS − S_e = +2 J/K।",
        "ভুল: ΔS-এর চিহ্ন অক্ষুণ্ণ রাখতে হবে: S_i = (−6) − (−8) = +2 J/K। পরম মান 6 ও 8 যোগ করলে উৎপন্ন এনট্রপি পাওয়া যায় না।"
      ]
    },
    "l6-q15": {
      "question": "Q = 1 200 J তাপ সরাসরি 600 K তাপমাত্রার একটি তাপাধার থেকে 300 K তাপমাত্রার একটি তাপাধারে যায়। দুটি তাপাধারের মোট এনট্রপির পরিবর্তন কত?",
      "choices": [
        "+2 J/K।",
        "0 J/K।",
        "+6 J/K।",
        "+4 J/K।"
      ],
      "explanations": [
        "সঠিক: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K। এই হিসাবে সময়কাল আসে না; কম তাপপরিবাহী দেয়াল স্থানান্তরকে ধীর করে, কিন্তু সসীম তাপমাত্রার পার্থক্য থেকে সৃষ্ট অপ্রত্যাবর্তিতা দূর করে না।",
        "ভুল: শক্তি সংরক্ষিত হয়, কিন্তু এনট্রপির পরিবর্তনগুলি ভিন্ন ভিন্ন তাপমাত্রার ব্যস্তক দ্বারা ভারিত হয়।",
        "ভুল: এই ফলে পরম মানগুলি যোগ করা হয়েছে। উষ্ণ তাপাধারের এনট্রপি 1 200/600 = 2 J/K কমে, আর শীতল তাপাধারের এনট্রপি 1 200/300 = 4 J/K বাড়ে: হিসাবটি হতে হবে −2 + 4।",
        "ভুল: +4 J/K কেবল শীতল তাপাধারের এনট্রপির পরিবর্তন। মোট হিসাবে উষ্ণ তাপাধারের −2 J/K-ও অন্তর্ভুক্ত করতে হবে।"
      ]
    },
    "l6-q3": {
      "question": "একটি সাধারণ রেফ্রিজারেটর কেন ক্লসিয়াসের বিবৃতির বিরোধিতা করে না?",
      "choices": [
        "কারণ শীতল থেকে উষ্ণ দিকে তাপ স্থানান্তরের সঙ্গে বাইরে থেকে কাজ সরবরাহ করা হয়।",
        "কারণ কার্যকরী প্রবাহী প্রতি চক্রে তার প্রাথমিক অবস্থায় ফেরে, ফলে দুটি তাপাধারের ওপর প্রভাব বাতিল হয়ে যায়।",
        "কারণ একটি চক্রে তাপ ও কাজের বীজগাণিতিক যোগফল শূন্য, আর এই স্থানান্তর অনুমোদিত হওয়ার জন্য এটিই যথেষ্ট।"
      ],
      "explanations": [
        "সঠিক: ক্লসিয়াস এমন চক্রাকার রূপান্তর নিষিদ্ধ করেন যার একমাত্র প্রভাব হবে শীতল থেকে উষ্ণ দিকে এই তাপ স্থানান্তর। রেফ্রিজারেটর কাজ গ্রহণ করে: তাই এই স্থানান্তর তার একমাত্র প্রভাব নয়।",
        "ভুল: প্রবাহী তার প্রাথমিক অবস্থায় ফিরে আসে, কিন্তু তাপাধারগুলি শক্তি বিনিময় করেছে। প্রক্রিয়াটি চক্রাকার হওয়ায় পরিবেশের এই পরিবর্তনগুলি মুছে যায় না।",
        "ভুল: শক্তির সংরক্ষণ প্রয়োজনীয়, কিন্তু যথেষ্ট নয়। দ্বিতীয় সূত্র একটি অতিরিক্ত ভৌত সীমাবদ্ধতা আরোপ করে।"
      ]
    },
    "l6-q13": {
      "question": "একটি অনমনীয় ও রুদ্ধতাপীয় পাত্রে n মোল আদর্শ গ্যাসের জুল–গে-লুসাক প্রসারণে আয়তন v থেকে V > v হয়। বিভাজক দেয়াল সরালে পরিবেশে কোনো পরিবর্তন হয় না। কোন হিসাবটি সঠিক?",
      "choices": [
        "Q = W = 0, তাই ΔU_gas = 0 এবং ΔS_gas = 0।",
        "Q = 0, W = ΔU_gas < 0 এবং ΔS_gas > 0।",
        "Q = W = ΔU_gas = 0 এবং ΔS_tot = 0, যদিও ΔS_gas > 0।",
        "Q = W = ΔU_gas = 0 এবং ΔS_tot = nR ln(V/v) > 0।"
      ],
      "explanations": [
        "ভুল: Q = W = 0 থেকে অবশ্যই ΔU_gas = 0 হয়, কিন্তু ΔS_gas = 0 হয় না। তাপ বিনিময় না হলেও এনট্রপি উৎপন্ন হতে পারে: dS = δQ_rev/T সম্পর্কটি এই অপ্রত্যাবর্তী প্রসারণের প্রকৃত তাপের ক্ষেত্রে প্রযোজ্য নয়।",
        "ভুল: গ্যাস শূন্যস্থানে প্রসারিত হয়; তাই এটি কোনো কাজ করে না, W = 0। Q = 0 হওয়ায় ΔU_gas = 0। শক্তি সরবরাহ ছাড়াই এনট্রপি বাড়ে।",
        "ভুল: পরিবেশ অপরিবর্তিত থাকে, তাই ΔS_ext = 0। গ্যাসের এনট্রপির বৃদ্ধিকে বাতিল করার মতো পরিবেশের এনট্রপির কোনো হ্রাস নেই: ΔS_tot = ΔS_gas > 0।",
        "সঠিক: Q = W = 0 থেকে ΔU_gas = 0 পাওয়া যায়। পরিবেশে পরিবর্তন না হওয়ায় ΔS_tot = ΔS_gas = nR ln(V/v) > 0। এই বৃদ্ধি প্রমাণ করে যে অন্য কোথাও পরিবর্তনের চিহ্ন না রেখে কোনো প্রত্যাবর্তনই গ্যাস ও তার পরিবেশকে পুনঃস্থাপন করতে পারে না।"
      ]
    },
    "l6-q6": {
      "question": "দুটি তাপাধারের মধ্যে একটি তাপ ইঞ্জিন 600 K ও 300 K তাপমাত্রায় চলে এবং প্রতি চক্রে Q_H = 1 000 J তাপ গ্রহণ করে। সরবরাহ করা কাজের পরম মান |W|-এর সর্বাধিক মান কত?",
      "choices": [
        "1 000 J।",
        "প্রায় 667 J।",
        "500 J।",
        "কার্যকরী প্রবাহী না জানলে নির্ধারণ করা অসম্ভব।"
      ],
      "explanations": [
        "ভুল: একটি চক্রে উষ্ণ তাপাধার থেকে গ্রহণ করা সমস্ত তাপকে কাজে রূপান্তর করা যায় না। ΔU = 0 হলেও দ্বিতীয় সূত্র অনুযায়ী তার একটি অংশ শীতল তাপাধারকে দিতে হয়।",
        "ভুল: 667 J প্রায় Q_H T_H/(T_H + T_C)-এর সমান। কিন্তু কার্নো দক্ষতা হলো 1 − T_C/T_H, T_H/(T_H + T_C) নয়।",
        "সঠিক: সর্বাধিক দক্ষতা হলো কার্নো দক্ষতা, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2। তাই |W|_max = η_max Q_H = 500 J। দুটি তাপাধারের মধ্যে চলা একটি স্থানীয়ভাবে প্রত্যাবর্তী যন্ত্র এই মানে পৌঁছায়।",
        "ভুল: সর্বাধিক কাজ গণনার জন্য দুটি তাপাধারের তাপমাত্রা ও গ্রহণ করা তাপই যথেষ্ট: |W|_max = Q_H (1 − T_C/T_H)। প্রবাহী বা ইঞ্জিনের বিস্তারিত বৈশিষ্ট্য জানার প্রয়োজন নেই।"
      ]
    },
    "l6-q18": {
      "question": "একটি বিচ্ছিন্ন সমষ্টির মধ্যে নির্দিষ্ট উপাদানগত গঠনবিশিষ্ট দুটি উপতন্ত্র স্বাধীনভাবে শক্তি ও আয়তন বিনিময় করতে পারে। তাদের সাম্যাবস্থা সম্পর্কে কী বলা যায়?",
      "choices": [
        "উপতন্ত্রগুলির আকার যা-ই হোক, U_1 = U_2 এবং V_1 = V_2।",
        "P_1/T_1 = P_2/T_2, কিন্তু তাপমাত্রা সমান হওয়া জরুরি নয়।",
        "T_1 = T_2, কিন্তু চাপ সমান হওয়া জরুরি নয়।",
        "T_1 = T_2 এবং P_1 = P_2।"
      ],
      "explanations": [
        "ভুল: সাম্যাবস্থায় ব্যাপক রাশিগুলি সমান হওয়ার প্রয়োজন নেই। ভিন্ন আকারের দুটি উপতন্ত্রের সাম্যাবস্থায় শক্তি ও আয়তন ভিন্ন হতে পারে।",
        "ভুল: এই সমতা কেবল dV_1-এর সহগকে শূন্য করে। শক্তিও স্বাধীনভাবে পুনর্বণ্টিত হতে পারে বলে dU_1-এর সহগও শূন্য হতে হবে: T_1 = T_2। এখানে ব্যবহৃত শর্ত হলো মোট এনট্রপির প্রথম ক্রমের পরিবর্তন শূন্য হওয়া।",
        "ভুল: আয়তন বিনিময়ও অনুমোদিত হওয়ায় তাপীয় সাম্যের পাশাপাশি যান্ত্রিক সাম্যও থাকতে হবে। তাই চাপও সমান হতে হবে।",
        "সঠিক: সাম্যাবস্থায় সমস্ত অনুমোদিত পুনর্বণ্টনের জন্য মোট এনট্রপির প্রথম ক্রমের পরিবর্তন শূন্য: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0। শক্তি ও আয়তন বিনিময় স্বাধীন হওয়ায় দুটি সহগই শূন্য হয়: T_1 = T_2 এবং P_1 = P_2।"
      ]
    },
    "l6-q8": {
      "question": "একটি চক্রাকার যন্ত্র T_k > 0 তাপমাত্রার তাপাধারগুলি থেকে চিহ্নসহ তাপ Q_k গ্রহণ করে এবং একটি আদর্শ কাজের উৎসের সঙ্গে কাজ বিনিময় করে। কোন বক্তব্যটি ক্লসিয়াসের অসমতা ও পাঠের সংজ্ঞাগুলির সঙ্গে সামঞ্জস্যপূর্ণ?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, এবং সামগ্রিকভাবে অপ্রত্যাবর্তী চক্রের ক্ষেত্রে মানটি কঠোরভাবে ধনাত্মক।",
        "প্রতিটি চক্রের জন্য Σ_k Q_k/T_k = 0, কারণ যন্ত্রের এনট্রপি তার প্রাথমিক মানে ফিরে আসে।",
        "Σ_k Q_k/T_k ≤ 0, এবং শুধু সমতা থেকেই প্রমাণিত হয় যে মূল পথটি স্থানীয়ভাবে প্রত্যাবর্তী।",
        "Σ_k Q_k/T_k ≤ 0; সমতা সামগ্রিক প্রত্যাবর্তিতাকে চিহ্নিত করে, কিন্তু স্থানীয় প্রত্যাবর্তিতা প্রমাণ করে না।"
      ],
      "explanations": [
        "ভুল: যন্ত্র তাপ গ্রহণ করলে Q_k ধনাত্মক ধরা হয়। এই চিহ্নরীতি অনুযায়ী যোগফল ঋণাত্মক বা শূন্য।",
        "ভুল: একটি চক্রে ΔS_system = 0, কিন্তু বিনিময় করা এনট্রপি ঋণাত্মক হতে পারে এবং ধনাত্মক এনট্রপি উৎপাদন তা বাতিল করতে পারে।",
        "ভুল: চিহ্নটি সঠিক, কিন্তু সমতার ক্ষেত্রে সহায়ক যন্ত্রের সাহায্যে একটি সামগ্রিক প্রত্যাবর্তন গঠন করা হয়। মূল যন্ত্রটি নিজের পথ বিপরীত দিকে অনুসরণ করতে পারে, তা এতে প্রমাণিত হয় না।",
        "সঠিক: স্থানীয়ভাবে প্রত্যাবর্তী চক্রে সমতা প্রতিষ্ঠিত হয়। বিপরীতভাবে, যোগফল শূন্য হলে সহায়ক যন্ত্রের সাহায্যে উৎসগুলিকে পুনঃস্থাপন করা যায়; যোগফল কঠোরভাবে ঋণাত্মক হলে চক্রটি সামগ্রিকভাবে অপ্রত্যাবর্তী।"
      ]
    },
    "l6-q9": {
      "question": "স্থানীয়ভাবে প্রত্যাবর্তী চক্রগুলির জন্য ∮ δQ_rev/T = 0 সমতা থেকে এই পাঠে কীভাবে এনট্রপি সংজ্ঞায়িত করা হয়?",
      "choices": [
        "এর থেকে সিদ্ধান্ত নেওয়া হয় যে তাপ Q একটি অবস্থা অপেক্ষক।",
        "δQ_rev/T-এর সমাকল দিয়ে S(B) − S(A) সংজ্ঞায়িত করা হয়।",
        "যেকোনো প্রকৃত পথে δQ/T_ext-এর সমাকল দিয়ে S(B) − S(A) সংজ্ঞায়িত করা হয়।"
      ],
      "explanations": [
        "ভুল: δQ_rev/T-ই একটি পূর্ণ অন্তরক। বিনিময় করা তাপ তখনও পথের ওপর নির্ভর করে।",
        "সঠিক: দুটি স্থানীয়ভাবে প্রত্যাবর্তী পথের একটিকে বিপরীত দিকে অনুসরণ করলে এমন একটি চক্র গঠিত হয় যার সমাকল শূন্য। এভাবে প্রতিটি প্রত্যাবর্তীভাবে সংযুক্ত অঞ্চলে একটি যোগধ্রুবক পর্যন্ত এনট্রপি সংজ্ঞায়িত হয়, এবং এর একক J/K।",
        "ভুল: কোনো প্রকৃত অপ্রত্যাবর্তী পথে δQ/T_ext-এর সমাকল বিনিময় করা এনট্রপি দেয়, যা সবসময় ΔS নয়। সংজ্ঞা গঠনে স্থানীয়ভাবে প্রত্যাবর্তী পথে δQ_rev/T ব্যবহার করা হয়।"
      ]
    },
    "l6-q2": {
      "question": "কোন বক্তব্যটি স্থানীয় প্রত্যাবর্তিতাকে সঠিকভাবে বর্ণনা করে?",
      "choices": [
        "তন্ত্রের প্রাথমিক ও চূড়ান্ত অবস্থা সাম্যাবস্থা হলেই যথেষ্ট।",
        "তন্ত্র ও তার পরিবেশকে সামগ্রিকভাবে পুনঃস্থাপন করে এমন যেকোনো প্রক্রিয়া থেকেই এটি স্বয়ংক্রিয়ভাবে অনুসৃত হয়।",
        "এর জন্য সীমাবদ্ধতাগুলির অসীম ক্ষুদ্র পরিবর্তনের মাধ্যমে সাম্যাবস্থার ধারাবাহিকতার প্রতিটি ধাপ উল্টে দেওয়া সম্ভব হতে হবে।",
        "এটি তাপ ও কাজ বিনিময়ের চিহ্ন অপরিবর্তিত রেখে তন্ত্রের পথ বিপরীত দিকে অনুসরণ করতে দেয়।"
      ],
      "explanations": [
        "ভুল: মধ্যবর্তী অবস্থাগুলি এবং প্রতিটি ধাপ উল্টে দেওয়ার সম্ভাবনা স্থানীয় সংজ্ঞার অপরিহার্য অংশ।",
        "ভুল: সামগ্রিক প্রত্যাবর্তন অন্য পথ অনুসরণ করতে পারে। তার অস্তিত্ব থেকেই মূল পথটি স্থানীয়ভাবে প্রত্যাবর্তী বলে প্রমাণিত হয় না।",
        "সঠিক: তখন একই অবস্থার ধারাবাহিকতা বিপরীত দিকে অনুসরণ করা যায় এবং পরিবেশকেও পুনঃস্থাপন করা যায়। তাই স্থানীয় প্রত্যাবর্তিতা থেকে সামগ্রিক প্রত্যাবর্তিতা অনুসৃত হয়।",
        "ভুল: স্থানীয়ভাবে প্রত্যাবর্তী পথ বিপরীত দিকে অনুসরণ করলে প্রতি ধাপে তাপ ও যান্ত্রিক কাজ বিনিময়ের চিহ্ন বদলে যায়।"
      ]
    },
    "l6-q12": {
      "question": "একটি অপ্রত্যাবর্তী রূপান্তর A ও B দুটি সাম্যাবস্থাকে যুক্ত করে, কিন্তু তার মধ্যবর্তী অবস্থাগুলি সাম্য থেকে অনেক দূরে। কোন বক্তব্যটি সঠিক?",
      "choices": [
        "এনট্রপির পরিবর্তন ΔS হলো প্রকৃত পথে δQ_actual/T_ext-এর সমাকল।",
        "A ও B-এর মধ্যে একটি স্থানীয়ভাবে প্রত্যাবর্তী পথে এনট্রপির পরিবর্তন ΔS গণনা করা যায়, কিন্তু S_e ও S_i প্রকৃত প্রক্রিয়ার ওপর নির্ভর করে।",
        "শুধু A ও B অবস্থা থেকেই বিনিময় করা এনট্রপি S_e ও উৎপন্ন এনট্রপি S_i নির্ধারিত হয়।"
      ],
      "explanations": [
        "ভুল: এই সমাকল বিনিময় করা এনট্রপি S_e দেয়। হিসাবটি হলো ΔS = S_e + S_i: উৎপন্ন এনট্রপি বিবেচনা না করলে প্রকৃতপক্ষে বিনিময় করা তাপ থেকে একাই ΔS গণনা করা যায় না।",
        "সঠিক: S একটি অবস্থা অপেক্ষক, তাই একই অবস্থাদ্বয়কে যুক্ত করা একটি স্থানীয়ভাবে প্রত্যাবর্তী পথে ΔS = ∫ δQ_rev/T গণনা করা যায়। এরপর প্রকৃত বিনিময়ে ফিরে S_e = ∫ δQ_actual/T_ext এবং S_i = ΔS − S_e নির্ধারণ করা হয়।",
        "ভুল: A ও B অবস্থা ΔS নির্ধারণ করে, কিন্তু বিনিময় করা ও উৎপন্ন এনট্রপিতে তার বিভাজন নির্ধারণ করে না। S_e প্রকৃতপক্ষে বিনিময় করা তাপ ও বাইরের তাপমাত্রার ওপর নির্ভর করে; তারপর ΔS = S_e + S_i হিসাব থেকে S_i পাওয়া যায়।"
      ]
    },
    "l6-q4": {
      "question": "কেলভিন–প্লাঙ্কের বিবৃতি ঠিক কোন কার্যপ্রক্রিয়াটি নিষিদ্ধ করে?",
      "choices": [
        "একটি চক্রে গ্রহণ করা কাজকে তাপে রূপান্তর করা।",
        "একটি আদর্শ গ্যাসের অচক্রাকার সমতাপ প্রসারণে Q > 0 তাপ গ্রহণ করা এবং W = −Q কাজ সরবরাহ করা।",
        "একটি চক্রে উষ্ণ তাপাধার থেকে তাপ নিয়ে এবং শীতল তাপাধারকে তাপ দিয়ে কাজ সরবরাহ করা।",
        "এমন একটি চক্র সম্পন্ন করা যার একমাত্র প্রভাব হলো একটি মাত্র তাপাধার থেকে Q > 0 তাপ নেওয়া এবং পরিবেশে W = −Q কাজ সরবরাহ করা।"
      ],
      "explanations": [
        "ভুল: কাজকে তাপে রূপান্তর করা অনুমোদিত। নিষেধটি হলো একটি মাত্র তাপাধার ব্যবহার করে, অন্য কোনো প্রভাব ছাড়া, তাপকে সম্পূর্ণভাবে কাজে রূপান্তর করা।",
        "ভুল: এই প্রসারণ গ্যাসকে তার প্রাথমিক অবস্থায় ফিরিয়ে আনে না। বিবৃতির চক্রাকার হওয়ার শর্তটি অপরিহার্য।",
        "ভুল: দুটি তাপাধারের মধ্যে চলা তাপ ইঞ্জিন এভাবেই কাজ করে; তার দক্ষতা কার্নোর সীমা মেনে চললে এটি সম্ভব।",
        "সঠিক: প্রথম সূত্র Q + W = 0 হিসাবটি অনুমোদন করত, কিন্তু দ্বিতীয় সূত্র একটি মাত্র তাপাধার নিয়ে এই চক্রাকার কার্যপ্রক্রিয়া নিষিদ্ধ করে। পাঠের চিহ্নরীতি অনুযায়ী কাজ সরবরাহ করলে W < 0 হয়।"
      ]
    },
    "l6-vf1": {
      "question": "একটি কোয়াসি-স্থিতিশীল সংকোচন অবশ্যই স্থানীয়ভাবে প্রত্যাবর্তী।",
      "choices": [
        "সত্য",
        "মিথ্যা"
      ],
      "explanations": [
        "ভুল: উদাহরণস্বরূপ, একটি কোয়াসি-স্থিতিশীল সংকোচন ঘর্ষণসহ ঘটতে পারে। ঘর্ষণ শক্তির অপচয় ঘটায় এবং গ্যাস সাম্যের কাছাকাছি থাকলেও গ্যাস বা তার পরিবেশে পরিবর্তনের চিহ্ন রেখে যায়।",
        "সঠিক: কোয়াসি-স্থিতিশীল হওয়াই যথেষ্ট নয়। অপচয়ও দূর করতে হবে এবং চাপ, তাপমাত্রা বা রাসায়নিক বিভবের অসীম ক্ষুদ্র পার্থক্যের মাধ্যমে বিনিময় ঘটাতে হবে।"
      ]
    },
    "l6-q7": {
      "question": "সমস্ত শাখা স্থানীয়ভাবে প্রত্যাবর্তী হলে, কোন ক্রমটি একটি আদর্শ গ্যাসের কার্নো ইঞ্জিন চক্র বর্ণনা করে?",
      "choices": [
        "T_H-তে সমতাপ প্রসারণ, প্রত্যাবর্তী রুদ্ধতাপীয় প্রসারণ, T_C-তে সমতাপ সংকোচন, তারপর প্রত্যাবর্তী রুদ্ধতাপীয় সংকোচন।",
        "T_H-তে সমতাপ প্রসারণ, সমায়তনে শীতলীকরণ, T_C-তে সমতাপ সংকোচন, তারপর সমায়তনে উত্তাপন।",
        "T_C-তে সমতাপ প্রসারণ, রুদ্ধতাপীয় সংকোচন, T_H-তে সমতাপ সংকোচন, তারপর রুদ্ধতাপীয় প্রসারণ।"
      ],
      "explanations": [
        "সঠিক: দুটি স্থানীয়ভাবে প্রত্যাবর্তী সমতাপ শাখায় তাপ বিনিময় হয়; রুদ্ধতাপীয় শাখাগুলি তাপ বিনিময় ছাড়াই দুটি তাপমাত্রাকে যুক্ত করে। (V, P) চিত্রে ইঞ্জিন চক্র ঘড়ির কাঁটার দিকে চলে।",
        "ভুল: কার্নো চক্রের সমতাপ শাখাগুলিকে যুক্ত করা শাখাগুলি রুদ্ধতাপীয়, সমায়তনিক নয়। সমায়তনিক শাখা ব্যবহার করলে চক্র ও তার তাপ বিনিময় বদলে যাবে।",
        "ভুল: এই ক্রমটি বিপরীত দিকে চলা কার্নো চক্র বর্ণনা করে। তখন যন্ত্রটি কাজ গ্রহণ করে শীতল তাপাধার থেকে তাপ নেয় এবং উষ্ণ তাপাধারকে তাপ দেয়।"
      ]
    },
    "l6-vf2": {
      "question": "দ্বিতীয় সূত্র পরিবর্তনের তাপগতীয়ভাবে অনুমোদিত দিক নির্ধারণ করে, কিন্তু একা তাদের সময়কাল বা পরিবহন সহগগুলি নির্ধারণ করে না।",
      "choices": [
        "সত্য",
        "মিথ্যা"
      ],
      "explanations": [
        "সঠিক: পাঠের অনুমানগুলির অধীনে এটি রূপান্তরগুলিকে সীমিত করে এবং সাম্যাবস্থাগুলির বৈশিষ্ট্য নির্ধারণ করে। এটি শিথিলন সময়, তাপ পরিবাহিতা, সান্দ্রতা বা ব্যাপন সহগ দেয় না।",
        "ভুল: দ্বিতীয় সূত্র গতিবিদ্যার একটি পূর্ণাঙ্গ সমীকরণ নয়। কোনো প্রবল রূপান্তরের পরিবর্তনের হার ও মধ্যবর্তী অবস্থাগুলি বর্ণনা করতে অতিরিক্ত সূত্র প্রয়োজন।"
      ]
    }
  },
  "ur": {
    "l6-q1": {
      "question": "اس سبق میں کسی تبدیلی کی مجموعی برگشت پذیری کے لیے کیا درکار ہے؟",
      "choices": [
        "صرف نظام اپنی ابتدائی حالت بحال کر سکے، خواہ اس کے ماحول میں کوئی بھی تبدیلیاں ہوں۔",
        "کوئی واپسی نظام اور اس کے پورے ماحول کو بحال کر سکے، اور کوئی دوسری تبدیلی باقی نہ چھوڑے۔",
        "واپسی لازماً اسی راستے پر الٹی سمت میں ہو۔",
        "تبدیلی نیم سکونی ہو اور نظام ہر مرحلے پر توازن کے قریب رہے۔"
      ],
      "explanations": [
        "غلط: صرف نظام کی بحالی کسی حرارتی ذخیرے یا کام کے منبع میں نشان چھوڑ سکتی ہے۔ پورا ماحول بھی بحال کرنا ضروری ہے۔",
        "درست: واپسی کا کم از کم ایک ایسا طریقہ کافی ہے جو نظام اور اس کے ماحول کی تمام تبدیلیاں مٹا دے۔ مجموعی تعریف اس واپسی کا راستہ مقرر نہیں کرتی۔",
        "غلط: اصل راستے کو الٹی سمت میں دہرانا مقامی برگشت پذیری سے متعلق ہے۔ مجموعی تعریف واپسی کے لیے دوسرا راستہ اختیار کرنے کی اجازت دیتی ہے۔",
        "غلط: نیم سکونی ہونا کافی نہیں۔ رگڑ باقی رہ سکتی ہے اور نظام اور اس کے ماحول کی مکمل بحالی روک سکتی ہے۔"
      ]
    },
    "l6-q11": {
      "question": "ایک بند نظام 300 K کے حرارتی ذخیرے کو 2 400 J دیتا ہے۔ اس کی اینٹروپی کی تبدیلی ΔS = −6 J/K ہے۔ اس کی مبادلہ شدہ اینٹروپی S_e اور پیدا شدہ اینٹروپی S_i کیا ہیں؟",
      "choices": [
        "S_e = −8 J/K اور S_i = +2 J/K۔",
        "S_e = +8 J/K اور S_i = +2 J/K۔",
        "S_e = −6 J/K اور S_i = 0 J/K۔",
        "S_e = −8 J/K اور S_i = +14 J/K۔"
      ],
      "explanations": [
        "درست: Q = −2 400 J، لہٰذا S_e = Q/T_ext = −8 J/K۔ موازنہ ΔS = S_e + S_i سے S_i = +2 J/K ملتا ہے۔ ذخیرے کی اینٹروپی 8 J/K بڑھتی ہے: اگر دوسرے آلات کی اینٹروپی نہ بدلے تو کل اینٹروپی 2 J/K بڑھتی ہے۔",
        "غلط: S_e نظام کے نقطۂ نظر سے شمار ہوتی ہے، اور نظام حرارت دیتا ہے: S_e = −2 400/300 = −8 J/K۔ مقدار +8 J/K ذخیرے کی اینٹروپی میں اضافے کے لیے ہے۔",
        "غلط: S_e کو Q/T_ext = −8 J/K متعین کرتا ہے، نہ کہ ΔS۔ ان کا فرق پیدا شدہ اینٹروپی ہے: S_i = ΔS − S_e = +2 J/K۔",
        "غلط: ΔS کی علامت برقرار رکھنا ضروری ہے: S_i = (−6) − (−8) = +2 J/K۔ مطلق قدروں 6 اور 8 کو جمع کرنے سے پیدا شدہ اینٹروپی نہیں ملتی۔"
      ]
    },
    "l6-q15": {
      "question": "حرارت Q = 1 200 J براہِ راست 600 K کے حرارتی ذخیرے سے 300 K کے حرارتی ذخیرے کو منتقل ہوتی ہے۔ دونوں ذخیروں کی کل اینٹروپی کی تبدیلی کیا ہے؟",
      "choices": [
        "+2 J/K۔",
        "0 J/K۔",
        "+6 J/K۔",
        "+4 J/K۔"
      ],
      "explanations": [
        "درست: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K۔ اس موازنے میں دورانیہ شامل نہیں؛ کم حرارت گزار دیوار انتقال کو سست کرتی ہے، مگر درجۂ حرارت کے محدود فرق سے پیدا ہونے والا عدمِ برگشت ختم نہیں کرتی۔",
        "غلط: توانائی محفوظ رہتی ہے، مگر اینٹروپی کی تبدیلیوں کو درجاتِ حرارت کے معکوسوں سے وزن دیا جاتا ہے، اور وہ مختلف ہیں۔",
        "غلط: یہ نتیجہ مطلق قدروں کو جمع کرتا ہے۔ گرم ذخیرے کی اینٹروپی 1 200/600 = 2 J/K گھٹتی ہے، جبکہ ٹھنڈے ذخیرے کی 1 200/300 = 4 J/K بڑھتی ہے: حساب −2 + 4 ہونا چاہیے۔",
        "غلط: +4 J/K صرف ٹھنڈے ذخیرے کی اینٹروپی کی تبدیلی ہے۔ کل حساب میں گرم ذخیرے کی −2 J/K بھی شامل ہے۔"
      ]
    },
    "l6-q3": {
      "question": "عام ریفریجریٹر کلازیئس کے بیان سے متصادم کیوں نہیں؟",
      "choices": [
        "کیونکہ ٹھنڈے سے گرم کی طرف حرارت کی منتقلی کے ساتھ باہر سے کام بھی فراہم کیا جاتا ہے۔",
        "کیونکہ سیال ہر چکر میں اپنی ابتدائی حالت بحال کر لیتا ہے، جس سے دونوں حرارتی ذخیروں پر اثرات ختم ہو جاتے ہیں۔",
        "کیونکہ ایک چکر میں حرارتوں اور کام کا الجبری مجموعہ صفر ہے، اور اس انتقال کی اجازت کے لیے یہی کافی ہے۔"
      ],
      "explanations": [
        "درست: کلازیئس ایسی چکری تبدیلی منع کرتا ہے جس کا واحد اثر ٹھنڈے سے گرم کی طرف یہی انتقال ہو۔ ریفریجریٹر کام وصول کرتا ہے، اس لیے یہ انتقال اس کا واحد اثر نہیں۔",
        "غلط: سیال ابتدائی حالت میں واپس آتا ہے، مگر حرارتی ذخیروں نے توانائی کا تبادلہ کیا ہے۔ چکری ہونا ان بیرونی تبدیلیوں کو ختم نہیں کرتا۔",
        "غلط: توانائی کا تحفظ ضروری ہے مگر کافی نہیں۔ دوسرا اصول ایک اضافی طبعی پابندی عائد کرتا ہے۔"
      ]
    },
    "l6-q13": {
      "question": "n مول مثالی گیس ایک سخت، حرارتی طور پر معزول ظرف میں حجم v سے حجم V > v تک ژول–گے-لوساک پھیلاؤ کرتی ہے۔ دیوار ہٹانے سے ماحول نہیں بدلتا۔ کون سا موازنہ درست ہے؟",
      "choices": [
        "Q = W = 0، لہٰذا ΔU_gas = 0 اور ΔS_gas = 0۔",
        "Q = 0، W = ΔU_gas < 0 اور ΔS_gas > 0۔",
        "Q = W = ΔU_gas = 0 اور ΔS_tot = 0، اگرچہ ΔS_gas > 0۔",
        "Q = W = ΔU_gas = 0 اور ΔS_tot = nR ln(V/v) > 0۔"
      ],
      "explanations": [
        "غلط: Q = W = 0 سے یقیناً ΔU_gas = 0 ملتا ہے، مگر ΔS_gas = 0 نہیں۔ حرارت کا تبادلہ نہ ہونا اینٹروپی کی پیداوار کو منع نہیں کرتا: تعلق dS = δQ_rev/T اس ناقابلِ برگشت پھیلاؤ کی حقیقی حرارت پر لاگو نہیں ہوتا۔",
        "غلط: گیس خلا کے خلاف پھیلتی ہے، اس لیے کوئی کام فراہم نہیں کرتی، W = 0۔ چونکہ Q = 0، اس لیے ΔU_gas = 0 ہے۔ اینٹروپی توانائی کی فراہمی کے بغیر بڑھتی ہے۔",
        "غلط: ماحول نہیں بدلتا، اس لیے ΔS_ext = 0۔ ماحول کی اینٹروپی میں کوئی کمی گیس کی اینٹروپی کے اضافے کی تلافی نہیں کرتی: ΔS_tot = ΔS_gas > 0۔",
        "درست: Q = W = 0 سے ΔU_gas = 0 ملتا ہے۔ ماحول نہ بدلنے کی وجہ سے ΔS_tot = ΔS_gas = nR ln(V/v) > 0۔ یہ اضافہ ثابت کرتا ہے کہ کوئی واپسی گیس اور اس کے ماحول کو کہیں اور نشان چھوڑے بغیر بحال نہیں کر سکتی۔"
      ]
    },
    "l6-q6": {
      "question": "دو حرارتی ذخیروں والا انجن 600 K اور 300 K کے درمیان چلتا ہے اور ہر چکر میں Q_H = 1 000 J لیتا ہے۔ فراہم کردہ کام |W| کی زیادہ سے زیادہ قدر کیا ہے؟",
      "choices": [
        "1 000 J۔",
        "تقریباً 667 J۔",
        "500 J۔",
        "کام کرنے والے سیال کو جانے بغیر تعین ناممکن ہے۔"
      ],
      "explanations": [
        "غلط: ایک چکر میں گرم ذخیرے سے لی گئی تمام حرارت کو کام میں تبدیل نہیں کیا جا سکتا۔ دوسرا اصول اس کا کچھ حصہ ٹھنڈے ذخیرے کو دینا لازم کرتا ہے، خواہ ΔU = 0 ہو۔",
        "غلط: 667 J تقریباً Q_H T_H/(T_H + T_C) کے برابر ہے۔ مگر کارنو کی کارکردگی 1 − T_C/T_H ہے، نہ کہ T_H/(T_H + T_C)۔",
        "درست: زیادہ سے زیادہ کارکردگی کارنو کی ہے، η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2۔ یوں |W|_max = η_max Q_H = 500 J۔ دو حرارتی ذخیروں والی مقامی طور پر قابلِ برگشت مشین یہ قدر حاصل کرتی ہے۔",
        "غلط: دونوں ذخیروں کے درجاتِ حرارت اور وصول کردہ حرارت زیادہ سے زیادہ کام نکالنے کے لیے کافی ہیں: |W|_max = Q_H (1 − T_C/T_H)۔ سیال یا انجن کی تفصیلات جاننا ضروری نہیں۔"
      ]
    },
    "l6-q18": {
      "question": "مستقل ترکیب والے دو ذیلی نظام ایک معزول مجموعے میں توانائی اور حجم کا آزادانہ تبادلہ کر سکتے ہیں۔ ان کی حالتِ توازن کے بارے میں کیا کہا جا سکتا ہے؟",
      "choices": [
        "U_1 = U_2 اور V_1 = V_2، خواہ ذیلی نظاموں کے سائز کچھ بھی ہوں۔",
        "P_1/T_1 = P_2/T_2، جبکہ درجاتِ حرارت کا برابر ہونا ضروری نہیں۔",
        "T_1 = T_2، مگر دباؤ لازماً برابر نہیں۔",
        "T_1 = T_2 اور P_1 = P_2۔"
      ],
      "explanations": [
        "غلط: توازن امتدادی مقادیر کی برابری لازم نہیں کرتا۔ مختلف سائز والے دو ذیلی نظام توازن میں مختلف توانائیاں اور حجم رکھ سکتے ہیں۔",
        "غلط: یہ برابری صرف dV_1 کا ضریب صفر کرتی ہے۔ چونکہ توانائی کی بھی آزادانہ بازتقسیم ہو سکتی ہے، اس لیے dU_1 کا ضریب بھی صفر ہونا چاہیے: T_1 = T_2۔ استعمال شدہ معیار کل اینٹروپی کا ساکن ہونا ہے۔",
        "غلط: چونکہ حجم کا تبادلہ بھی ممکن ہے، اس لیے توازن حرارتی ہونے کے ساتھ میکانیکی بھی ہونا چاہیے۔ لہٰذا دباؤ بھی برابر ہونے چاہییں۔",
        "درست: توازن میں کل اینٹروپی ہر مجاز بازتقسیم کے لحاظ سے ساکن ہے: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0۔ توانائی اور حجم کے تبادلے ایک دوسرے سے آزاد ہیں، اس لیے دونوں ضریب صفر ہوتے ہیں: T_1 = T_2 اور P_1 = P_2۔"
      ]
    },
    "l6-q8": {
      "question": "ایک چکری مشین T_k > 0 والے حرارتی ذخیروں سے الجبری حرارتیں Q_k لیتی ہے اور ایک مثالی منبع سے کام کا تبادلہ کرتی ہے۔ کون سا بیان کلازیئس کی عدم مساوات اور سبق کی تعریفوں کے مطابق ہے؟",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0، اور مجموعی طور پر ناقابلِ برگشت چکر کے لیے قدر قطعاً مثبت ہوتی ہے۔",
        "ہر چکر کے لیے Σ_k Q_k/T_k = 0، کیونکہ مشین کی اینٹروپی اپنی ابتدائی قدر بحال کرتی ہے۔",
        "Σ_k Q_k/T_k ≤ 0، اور مساوات اکیلے ثابت کرتی ہے کہ اصل راستہ مقامی طور پر قابلِ برگشت ہے۔",
        "Σ_k Q_k/T_k ≤ 0؛ مساوات مجموعی برگشت پذیری کی پہچان ہے، مگر مقامی برگشت پذیری ثابت نہیں کرتی۔"
      ],
      "explanations": [
        "غلط: مشین کو ملنے والی Q_k مثبت شمار ہوتی ہیں۔ اس روایت کے تحت مجموعہ منفی یا صفر ہوتا ہے۔",
        "غلط: ایک چکر میں ΔS_system = 0، مگر مبادلہ شدہ اینٹروپی منفی ہو سکتی ہے اور اس کی تلافی مثبت اینٹروپی کی پیداوار سے ہو سکتی ہے۔",
        "غلط: علامت درست ہے، مگر مساوات کی صورت میں معاون مشینوں سے مجموعی واپسی بنائی جاتی ہے۔ اس سے یہ ثابت نہیں ہوتا کہ اصل مشین اپنا ہی راستہ الٹی سمت میں دہرا سکتی ہے۔",
        "درست: مقامی طور پر قابلِ برگشت چکر مساوات پورا کرتا ہے۔ الٹے طور پر، صفر مجموعہ معاون مشینوں سے منابع بحال کرنا ممکن بناتا ہے؛ قطعاً منفی مجموعہ مجموعی طور پر ناقابلِ برگشت چکر کی علامت ہے۔"
      ]
    },
    "l6-q9": {
      "question": "سبق میں مقامی طور پر قابلِ برگشت چکروں پر مساوات ∮ δQ_rev/T = 0 سے اینٹروپی کیسے بنائی جاتی ہے؟",
      "choices": [
        "اس سے اخذ کیا جاتا ہے کہ حرارت Q حالت کا تفاعل ہے۔",
        "S(B) − S(A) کو δQ_rev/T کے تکمل سے متعین کیا جاتا ہے۔",
        "S(B) − S(A) کو کسی بھی حقیقی راستے پر δQ/T_ext کے تکمل سے متعین کیا جاتا ہے۔"
      ],
      "explanations": [
        "غلط: δQ_rev/T تام تفریقیہ ہے۔ مبادلہ شدہ حرارت اب بھی راستے پر منحصر رہتی ہے۔",
        "درست: دو مقامی طور پر قابلِ برگشت راستے، جن میں سے ایک الٹا طے کیا جائے، ایسا چکر بناتے ہیں جس کا تکمل صفر ہے۔ یوں ہر قابلِ برگشت راستوں سے متصل خطے میں اینٹروپی ایک جمعی مستقل کے فرق تک متعین ہوتی ہے، اور اس کی اکائی J/K ہے۔",
        "غلط: حقیقی ناقابلِ برگشت راستے پر δQ/T_ext کا تکمل مبادلہ شدہ اینٹروپی دیتا ہے، ضروری نہیں کہ ΔS دے۔ تعمیر میں مقامی طور پر قابلِ برگشت راستے پر δQ_rev/T استعمال ہوتا ہے۔"
      ]
    },
    "l6-q2": {
      "question": "کون سا بیان مقامی برگشت پذیری کی درست وضاحت کرتا ہے؟",
      "choices": [
        "بس نظام کی ابتدائی اور آخری حالتوں کا توازن میں ہونا کافی ہے۔",
        "یہ ہر ایسے طریقے سے خودبخود نکلتی ہے جو نظام اور اس کے ماحول کو مجموعی طور پر بحال کرے۔",
        "اس کے لیے حالت ہائے توازن کے تسلسل کے ہر مرحلے کو پابندیوں میں لامتناہی چھوٹی تبدیلی سے الٹنا ممکن ہونا چاہیے۔",
        "یہ حرارت اور کام کے تبادلوں کی وہی علامتیں برقرار رکھتے ہوئے نظام کا راستہ الٹی سمت میں دہرانے دیتی ہے۔"
      ],
      "explanations": [
        "غلط: درمیانی حالتیں اور ہر مرحلہ الٹنے کا امکان مقامی تعریف کے لیے بنیادی ہیں۔",
        "غلط: مجموعی واپسی دوسرا راستہ اختیار کر سکتی ہے۔ صرف اس کا وجود اصل راستے کی مقامی برگشت پذیری ثابت نہیں کرتا۔",
        "درست: تب انہی حالتوں کا تسلسل الٹی سمت میں طے کیا جا سکتا ہے اور ماحول بھی بحال ہوتا ہے۔ لہٰذا مقامی برگشت پذیری مجموعی برگشت پذیری کو لازم کرتی ہے۔",
        "غلط: مقامی طور پر قابلِ برگشت راستہ الٹا طے کرنے پر حرارتی اور میکانیکی تبادلوں کی علامت ہر مرحلے میں بدلتی ہے۔"
      ]
    },
    "l6-q12": {
      "question": "ایک ناقابلِ برگشت تبدیلی توازن کی دو حالتوں A اور B کو ملاتی ہے، مگر اس کی درمیانی حالتیں توازن سے دور ہیں۔ کون سا بیان درست ہے؟",
      "choices": [
        "اینٹروپی کی تبدیلی ΔS حقیقی راستے پر δQ_actual/T_ext کا تکمل ہے۔",
        "اینٹروپی کی تبدیلی ΔS کا حساب A اور B کے درمیان مقامی طور پر قابلِ برگشت راستے سے کیا جا سکتا ہے، جبکہ S_e اور S_i حقیقی عمل پر منحصر ہیں۔",
        "صرف حالتیں A اور B مبادلہ شدہ اینٹروپی S_e اور پیدا شدہ اینٹروپی S_i کو متعین کرتی ہیں۔"
      ],
      "explanations": [
        "غلط: یہ تکمل S_e، یعنی مبادلہ شدہ اینٹروپی، دیتا ہے۔ موازنہ ΔS = S_e + S_i ہے: واقعی مبادلہ ہونے والی حرارت، پیدا شدہ اینٹروپی کو ملحوظ رکھے بغیر، ΔS نکالنے کے لیے کافی نہیں۔",
        "درست: S حالت کا تفاعل ہے، اس لیے ΔS = ∫ δQ_rev/T انہی حالتوں کو ملانے والے مقامی طور پر قابلِ برگشت راستے سے نکالا جا سکتا ہے۔ پھر حقیقی تبادلوں پر واپس آ کر S_e = ∫ δQ_actual/T_ext اور S_i = ΔS − S_e متعین کیے جاتے ہیں۔",
        "غلط: حالتیں A اور B، ΔS کو متعین کرتی ہیں، مگر اس کی مبادلہ شدہ اور پیدا شدہ اینٹروپی میں تقسیم کو نہیں۔ S_e واقعی مبادلہ ہونے والی حرارتوں اور بیرونی درجاتِ حرارت پر منحصر ہے؛ پھر S_i موازنے ΔS = S_e + S_i سے ملتا ہے۔"
      ]
    },
    "l6-q4": {
      "question": "کیلون–پلانک کا بیان خاص طور پر کس طرزِ عمل کو منع کرتا ہے؟",
      "choices": [
        "ایک چکر میں وصول کردہ کام کو حرارت میں بدلنا۔",
        "مثالی گیس کے غیر چکری ہم دما پھیلاؤ میں حرارت Q > 0 وصول کرنا اور کام W = −Q فراہم کرنا۔",
        "گرم حرارتی ذخیرے سے حرارت لے کر اور اس کا کچھ حصہ ٹھنڈے ذخیرے کو دے کر ایک چکر میں کام فراہم کرنا۔",
        "ایسا چکر مکمل کرنا جس کا واحد اثر ایک ہی حرارتی ذخیرے سے حرارت Q > 0 لینا اور ماحول کو W = −Q فراہم کرنا ہو۔"
      ],
      "explanations": [
        "غلط: کام کو حرارت میں بدلنے کی اجازت ہے۔ ممانعت ایک ہی حرارتی ذخیرے کے ساتھ اور کسی دوسرے اثر کے بغیر حرارت کو مکمل طور پر کام میں بدلنے پر ہے۔",
        "غلط: یہ پھیلاؤ گیس کو ابتدائی حالت میں واپس نہیں لاتا۔ بیان میں چکری ہونے کی شرط بنیادی ہے۔",
        "غلط: یہ دو حرارتی ذخیروں والے انجن کا عمل ہے، جو ممکن ہے بشرطیکہ اس کی کارکردگی کارنو کی حد کا احترام کرے۔",
        "درست: پہلا اصول اس موازنے Q + W = 0 کی اجازت دیتا، مگر دوسرا اصول ایک ہی حرارتی ذخیرے کے ساتھ اس چکری عمل کو منع کرتا ہے۔ سبق کی علامتی روایت میں کام فراہم کرنا W < 0 سے مطابقت رکھتا ہے۔"
      ]
    },
    "l6-vf1": {
      "question": "نیم سکونی سکڑاؤ لازماً مقامی طور پر قابلِ برگشت ہوتا ہے۔",
      "choices": [
        "درست",
        "غلط"
      ],
      "explanations": [
        "غلط: مثلاً نیم سکونی سکڑاؤ رگڑ کے ساتھ ہو سکتا ہے۔ رگڑ توانائی منتشر کرتی ہے اور گیس یا اس کے ماحول میں نشان چھوڑتی ہے، خواہ گیس توازن کے قریب رہے۔",
        "درست: نیم سکونی ہونا کافی نہیں۔ تبدد بھی ختم کرنا اور تبادلے دباؤ، درجۂ حرارت یا کیمیائی پوٹینشل کے لامتناہی چھوٹے فرق سے انجام دینا ضروری ہے۔"
      ]
    },
    "l6-q7": {
      "question": "کون سا تسلسل مثالی گیس کے کارنو انجن چکر کو بیان کرتا ہے، جبکہ اس کی تمام شاخیں مقامی طور پر قابلِ برگشت ہوں؟",
      "choices": [
        "T_H پر ہم دما پھیلاؤ، قابلِ برگشت ادیابیاتی پھیلاؤ، T_C پر ہم دما سکڑاؤ، پھر قابلِ برگشت ادیابیاتی سکڑاؤ۔",
        "T_H پر ہم دما پھیلاؤ، مستقل حجم پر ٹھنڈا ہونا، T_C پر ہم دما سکڑاؤ، پھر مستقل حجم پر گرم ہونا۔",
        "T_C پر ہم دما پھیلاؤ، ادیابیاتی سکڑاؤ، T_H پر ہم دما سکڑاؤ، پھر ادیابیاتی پھیلاؤ۔"
      ],
      "explanations": [
        "درست: حرارت کا تبادلہ دو مقامی طور پر قابلِ برگشت ہم دما شاخوں پر ہوتا ہے؛ ادیابیاتی شاخیں دونوں درجاتِ حرارت کو حرارت کے تبادلے کے بغیر ملاتی ہیں۔ انجن چکر خاکے (V, P) میں گھڑی کی سوئیوں کی سمت طے ہوتا ہے۔",
        "غلط: کارنو چکر کی ہم دما شاخوں کو ملانے والی شاخیں ادیابیاتی ہیں، مستقل حجم والی نہیں۔ مستقل حجم والی شاخیں چکر اور اس کے حرارتی تبادلوں کو بدل دیں گی۔",
        "غلط: یہ تسلسل کارنو چکر کو الٹی سمت میں بیان کرتا ہے۔ تب مشین ٹھنڈے حرارتی ذخیرے سے حرارت لے کر گرم ذخیرے کو دینے کے لیے کام وصول کرتی ہے۔"
      ]
    },
    "l6-vf2": {
      "question": "دوسرا اصول ارتقا کی حرارتی حرکی طور پر مجاز سمت مقرر کرتا ہے، مگر اکیلے اس کا دورانیہ یا انتقال کے ضریب متعین نہیں کرتا۔",
      "choices": [
        "درست",
        "غلط"
      ],
      "explanations": [
        "درست: یہ تبدیلیوں پر پابندی لگاتا اور سبق کے مفروضوں کے تحت توازن کی خصوصیات بیان کرتا ہے۔ یہ نہ وقتِ استرخا دیتا ہے، نہ حرارتی چالکتا، نہ لزوجت، نہ ضریبِ انتشار۔",
        "غلط: دوسرا اصول حرکیات کی مکمل مساوات نہیں۔ ارتقا کی رفتار اور کسی شدید تبدیلی کی درمیانی حالتیں بیان کرنے کے لیے اضافی قوانین درکار ہیں۔"
      ]
    }
  },
  "sw": {
    "l6-q1": {
      "question": "Katika somo hili, urejeshi wa kijumla wa mabadiliko unahitaji nini?",
      "choices": [
        "Kwamba mfumo pekee unaweza kurudia hali yake ya awali, bila kujali mabadiliko ya mazingira yake.",
        "Kwamba njia ya kurudi inaweza kurejesha mfumo na mazingira yake yote, bila kuacha badiliko jingine lolote.",
        "Kwamba kurudi lazima kufuate njia ileile katika mwelekeo wa kinyume.",
        "Kwamba mabadiliko ni nusutuli na mfumo unabaki karibu na usawa katika kila hatua."
      ],
      "explanations": [
        "Si sahihi: kurejesha mfumo pekee kunaweza kuacha alama katika thermostati au chanzo cha kazi. Mazingira yote lazima pia yarejeshwe.",
        "Sahihi: inatosha kuwepo angalau utaratibu mmoja wa kurudi unaofuta mabadiliko yote ya mfumo na mazingira yake. Ufafanuzi wa kijumla hauweki sharti kuhusu njia ya kurudi.",
        "Si sahihi: kufuata tena njia kinyume kunahusu urejeshi wa kilokali. Ufafanuzi wa kijumla unaruhusu njia tofauti ya kurudi.",
        "Si sahihi: hali ya nusutuli haitoshi. Msuguano unaweza kuwepo na kuzuia urejeshaji kamili wa mfumo na mazingira yake."
      ]
    },
    "l6-q11": {
      "question": "Mfumo funge unatoa 2 400 J kwa thermostati yenye halijoto 300 K. Badiliko lake la entropy ni ΔS = −6 J/K. Entropy yake inayobadilishwa S_e na inayozalishwa S_i ni kiasi gani?",
      "choices": [
        "S_e = −8 J/K na S_i = +2 J/K.",
        "S_e = +8 J/K na S_i = +2 J/K.",
        "S_e = −6 J/K na S_i = 0 J/K.",
        "S_e = −8 J/K na S_i = +14 J/K."
      ],
      "explanations": [
        "Sahihi: Q = −2 400 J, hivyo S_e = Q/T_ext = −8 J/K. Mizani ΔS = S_e + S_i inatoa S_i = +2 J/K. Thermostati inaongezewa 8 J/K: entropy ya jumla huongezeka kwa 2 J/K ikiwa vifaa vingine havibadilishi entropy yake.",
        "Si sahihi: S_e huhesabiwa kwa mtazamo wa mfumo unaotoa joto: S_e = −2 400/300 = −8 J/K. +8 J/K ni ongezeko la thermostati.",
        "Si sahihi: S_e huwekwa na Q/T_ext = −8 J/K, si na ΔS. Tofauti yake ni entropy inayozalishwa: S_i = ΔS − S_e = +2 J/K.",
        "Si sahihi: lazima kuhifadhi ishara ya ΔS: S_i = (−6) − (−8) = +2 J/K. Kujumlisha thamani kamili 6 na 8 hakutoi entropy inayozalishwa."
      ]
    },
    "l6-q15": {
      "question": "Joto Q = 1 200 J linapita moja kwa moja kutoka thermostati yenye halijoto 600 K kwenda thermostati yenye halijoto 300 K. Badiliko la entropy ya jumla ya thermostati hizo mbili ni kiasi gani?",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "Sahihi: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. Muda haupo katika mizani hii; ukuta unaopitisha joto kidogo hupunguza kasi ya uhamishaji bila kuondoa kutokuwa rejeshi kunakotokana na tofauti yenye ukomo ya halijoto.",
        "Si sahihi: nishati huhifadhiwa, lakini mabadiliko ya entropy huzidishwa kwa vinyume vya halijoto, ambavyo vinatofautiana.",
        "Si sahihi: tokeo hili linajumlisha thamani kamili. Thermostati moto hupoteza 1 200/600 = 2 J/K, huku baridi ikipata 1 200/300 = 4 J/K: lazima kuhesabu −2 + 4.",
        "Si sahihi: +4 J/K ni badiliko la thermostati baridi pekee. Mizani ya jumla inajumuisha pia −2 J/K za thermostati moto."
      ]
    },
    "l6-q3": {
      "question": "Kwa nini jokofu la kawaida halipingani na tamko la Clausius?",
      "choices": [
        "Kwa sababu uhamishaji wa joto kutoka baridi kwenda moto unaambatana na kazi inayotolewa na mazingira.",
        "Kwa sababu kiowevu hurudia hali yake ya awali katika kila mzunguko, na hivyo kufuta athari kwa thermostati zote mbili.",
        "Kwa sababu jumla ya kialjebra ya joto na kazi katika mzunguko ni sifuri, jambo linalotosha kuruhusu uhamishaji huu."
      ],
      "explanations": [
        "Sahihi: Clausius anakataza mabadiliko ya mzunguko ambayo athari yake pekee ingekuwa uhamishaji huu kutoka baridi kwenda moto. Jokofu hupokea kazi: kwa hiyo uhamishaji huo si athari yake pekee.",
        "Si sahihi: kiowevu hurudia hali yake ya awali, lakini thermostati zimebadilishana nishati. Kufanya mzunguko hakufuti mabadiliko hayo ya nje.",
        "Si sahihi: uhifadhi wa nishati ni muhimu lakini hautoshi. Kanuni ya pili inaweka sharti jingine la kifizikia."
      ]
    },
    "l6-q13": {
      "question": "Gesi bora yenye moli n inapitia upanuzi wa Joule–Gay-Lussac kutoka ujazo v hadi V > v katika chombo kigumu cha adiabati. Kuondolewa kwa ukuta hakubadilishi mazingira. Ni mizani ipi iliyo sahihi?",
      "choices": [
        "Q = W = 0, hivyo ΔU_gas = 0 na ΔS_gas = 0.",
        "Q = 0, W = ΔU_gas < 0 na ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 na ΔS_tot = 0, ingawa ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 na ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "Si sahihi: Q = W = 0 kweli inamaanisha ΔU_gas = 0, lakini si ΔS_gas = 0. Kutokuwepo kwa ubadilishanaji wa joto hakukatazi uzalishaji wa entropy: uhusiano dS = δQ_rev/T hautumiki kwa joto halisi la upanuzi huu usio rejeshi.",
        "Si sahihi: gesi inapanuka dhidi ya ombwe, hivyo haitoi kazi yoyote: W = 0. Kwa Q = 0, tuna ΔU_gas = 0. Entropy huongezeka bila kuingizwa kwa nishati.",
        "Si sahihi: mazingira yanabaki bila kubadilika, hivyo ΔS_ext = 0. Hakuna upungufu wa nje unaofidia ongezeko la entropy ya gesi: ΔS_tot = ΔS_gas > 0.",
        "Sahihi: Q = W = 0 inatoa ΔU_gas = 0. Kwa kuwa mazingira hayabadiliki, ΔS_tot = ΔS_gas = nR ln(V/v) > 0. Ongezeko hili linathibitisha kwamba hakuna njia ya kurudi inayoweza kurejesha gesi na mazingira yake bila kuacha alama mahali pengine."
      ]
    },
    "l6-q6": {
      "question": "Injini ya thermostati mbili inafanya kazi kati ya 600 K na 300 K, ikipokea Q_H = 1 000 J kwa kila mzunguko. Thamani ya juu zaidi ya kazi inayotolewa |W| ni kiasi gani?",
      "choices": [
        "1 000 J.",
        "Takribani 667 J.",
        "500 J.",
        "Haiwezekani kuamua bila kujua kiowevu tendaji."
      ],
      "explanations": [
        "Si sahihi: haiwezekani kubadilisha joto lote linalopokelewa kutoka thermostati moto kuwa kazi katika mzunguko. Kanuni ya pili inahitaji sehemu itolewe kwa thermostati baridi, hata ikiwa ΔU = 0.",
        "Si sahihi: 667 J inalingana takribani na Q_H T_H/(T_H + T_C). Lakini ufanisi wa Carnot ni 1 − T_C/T_H, si T_H/(T_H + T_C).",
        "Sahihi: ufanisi wa juu zaidi ni wa Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Hivyo |W|_max = η_max Q_H = 500 J. Mashine ya thermostati mbili iliyo rejeshi kilokali hufikia thamani hii.",
        "Si sahihi: halijoto za thermostati mbili na joto linalopokelewa vinatosha kuhesabu kazi ya juu zaidi: |W|_max = Q_H (1 − T_C/T_H). Si lazima kujua kiowevu wala maelezo ya injini."
      ]
    },
    "l6-q18": {
      "question": "Mifumo midogo miwili yenye muundo uliowekwa inaweza kubadilishana nishati na ujazo kwa kujitegemea ndani ya mkusanyiko uliotengwa. Tunaweza kusema nini kuhusu hali yake ya usawa?",
      "choices": [
        "U_1 = U_2 na V_1 = V_2, bila kujali ukubwa wa mifumo hiyo.",
        "P_1/T_1 = P_2/T_2, bila kulazimisha halijoto kuwa sawa.",
        "T_1 = T_2, lakini si lazima shinikizo ziwe sawa.",
        "T_1 = T_2 na P_1 = P_2."
      ],
      "explanations": [
        "Si sahihi: usawa haulazimishi kiasi kinachotegemea ukubwa kuwa sawa. Mifumo midogo yenye ukubwa tofauti inaweza kuwa na nishati na ujazo tofauti katika usawa.",
        "Si sahihi: usawa huu hufanya mgawo wa dV_1 pekee kuwa sifuri. Kwa kuwa nishati inaweza pia kugawanywa upya kwa kujitegemea, mgawo wa dU_1 lazima uwe sifuri: T_1 = T_2. Kigezo kinachotumiwa ni hali tuli ya entropy ya jumla.",
        "Si sahihi: kwa kuwa ubadilishanaji wa ujazo pia unaruhusiwa, lazima kuwe na usawa wa kimitambo pamoja na wa joto. Kwa hiyo shinikizo lazima pia ziwe sawa.",
        "Sahihi: katika usawa, entropy ya jumla ni tuli kwa migawanyo yote mipya inayoruhusiwa: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. Kwa kuwa ubadilishanaji wa nishati na ujazo ni huru, migawo yote miwili inakuwa sifuri: T_1 = T_2 na P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "Mashine ya mzunguko inapokea joto la kialjebra Q_k kutoka thermostati zenye T_k > 0 na kubadilishana kazi na chanzo bora. Ni kauli ipi inayofuata ukosefu wa usawa wa Clausius na ufafanuzi wa somo?",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0, ikiwa chanya kabisa kwa mzunguko usio rejeshi kijumla.",
        "Σ_k Q_k/T_k = 0 kwa kila mzunguko, kwa kuwa entropy ya mashine hurudia thamani yake ya awali.",
        "Σ_k Q_k/T_k ≤ 0, na usawa pekee unathibitisha kwamba njia ya awali ni rejeshi kilokali.",
        "Σ_k Q_k/T_k ≤ 0; usawa unabainisha urejeshi wa kijumla bila kuthibitisha urejeshi wa kilokali."
      ],
      "explanations": [
        "Si sahihi: Q_k huhesabiwa chanya zinapopokelewa na mashine. Kwa utaratibu huu wa ishara, jumla ni hasi au sifuri.",
        "Si sahihi: ΔS_system = 0 katika mzunguko, lakini entropy inayobadilishwa inaweza kuwa hasi na kufidiwa na uzalishaji chanya wa entropy.",
        "Si sahihi: ishara ni sahihi, lakini hali ya usawa hujenga njia ya kurudi ya kijumla kwa kutumia mashine saidizi. Haionyeshi kwamba mashine ya awali inaweza kufuata njia yake yenyewe kinyume.",
        "Sahihi: mzunguko rejeshi kilokali unatimiza usawa. Kinyume chake, jumla ya sifuri inaruhusu kurejesha vyanzo kwa mashine saidizi; jumla hasi kabisa inaonyesha mzunguko usio rejeshi kijumla."
      ]
    },
    "l6-q9": {
      "question": "Somo linajengaje entropy kutokana na usawa ∮ δQ_rev/T = 0 kwa mizunguko rejeshi kilokali?",
      "choices": [
        "Linahitimisha kwamba joto Q ni dhima ya hali.",
        "Linafafanua S(B) − S(A) kwa integrali ya δQ_rev/T.",
        "Linafafanua S(B) − S(A) kwa integrali ya δQ/T_ext kwenye njia yoyote halisi."
      ],
      "explanations": [
        "Si sahihi: δQ_rev/T ndiyo diferenshali kamili. Joto linalobadilishwa linaendelea kutegemea njia.",
        "Sahihi: njia mbili rejeshi kilokali, moja ikifuatwa kinyume, huunda mzunguko wenye integrali sifuri. Hivyo entropy hufafanuliwa hadi konstanti ya kuongezwa katika kila eneo lililounganishwa kwa njia rejeshi, na huonyeshwa kwa J/K.",
        "Si sahihi: kwenye njia halisi isiyo rejeshi, integrali ya δQ/T_ext hutoa entropy inayobadilishwa, si lazima ΔS. Ujenzi hutumia δQ_rev/T kwenye njia rejeshi kilokali."
      ]
    },
    "l6-q2": {
      "question": "Ni kauli ipi inayoeleza kwa usahihi urejeshi wa kilokali?",
      "choices": [
        "Inatosha kwamba hali za awali na za mwisho za mfumo ziwe hali za usawa.",
        "Unatokana moja kwa moja na utaratibu wowote unaorejesha mfumo na mazingira yake kijumla.",
        "Unahitaji kila hatua ya mfululizo wa hali za usawa iweze kugeuzwa kwa badiliko dogo lisilo na kikomo la vikwazo.",
        "Unaruhusu kufuata njia ya mfumo kinyume huku ishara za ubadilishanaji wa joto na kazi zikibaki zilezile."
      ],
      "explanations": [
        "Si sahihi: hali za kati na uwezekano wa kugeuza kila hatua ni muhimu katika ufafanuzi wa kilokali.",
        "Si sahihi: kurudi kijumla kunaweza kufuata njia nyingine. Kuwepo kwake pekee hakuthibitishi kwamba njia ya awali ni rejeshi kilokali.",
        "Sahihi: tunaweza basi kufuata mfululizo uleule wa hali kinyume, huku tukirejesha pia mazingira. Kwa hiyo urejeshi wa kilokali unamaanisha urejeshi wa kijumla.",
        "Si sahihi: wakati wa kufuata njia rejeshi kilokali kinyume, ubadilishanaji wa joto na wa kimitambo hubadilisha ishara katika kila hatua."
      ]
    },
    "l6-q12": {
      "question": "Mabadiliko yasiyo rejeshi yanaunganisha hali mbili za usawa A na B, lakini hali zake za kati ziko mbali na usawa. Ni kauli ipi iliyo sahihi?",
      "choices": [
        "Badiliko la entropy ΔS ni integrali ya δQ_actual/T_ext kwenye njia halisi.",
        "Badiliko la entropy ΔS linaweza kuhesabiwa kwenye njia rejeshi kilokali kati ya A na B, ilhali S_e na S_i hutegemea mchakato halisi.",
        "Hali A na B pekee huamua entropy inayobadilishwa S_e na entropy inayozalishwa S_i."
      ],
      "explanations": [
        "Si sahihi: integrali hii hutoa S_e, entropy inayobadilishwa. Mizani ni ΔS = S_e + S_i: joto linalobadilishwa kweli halitoshi kuhesabu ΔS bila kuzingatia entropy inayozalishwa.",
        "Sahihi: S ni dhima ya hali, kwa hiyo ΔS = ∫ δQ_rev/T inaweza kuhesabiwa kwenye njia rejeshi kilokali inayounganisha hali zilezile. Kisha tunarudia ubadilishanaji halisi ili kupata S_e = ∫ δQ_actual/T_ext na S_i = ΔS − S_e.",
        "Si sahihi: hali A na B huweka ΔS, lakini si mgawanyo wake kuwa entropy inayobadilishwa na inayozalishwa. S_e hutegemea joto linalobadilishwa kweli na halijoto za nje; basi S_i hupatikana kwa mizani ΔS = S_e + S_i."
      ]
    },
    "l6-q4": {
      "question": "Ni utendaji upi hasa unaokatazwa na tamko la Kelvin–Planck?",
      "choices": [
        "Kubadilisha kazi inayopokelewa kuwa joto katika mzunguko.",
        "Kupokea joto Q > 0 na kutoa kazi W = −Q wakati wa upanuzi wa halijoto thabiti wa gesi bora ambao si mzunguko.",
        "Kutoa kazi katika mzunguko kwa kuchukua joto kutoka thermostati moto na kutoa sehemu kwa thermostati baridi.",
        "Kukamilisha mzunguko ambao athari yake pekee ni kuchukua joto Q > 0 kutoka thermostati moja tu na kutoa W = −Q kwa mazingira."
      ],
      "explanations": [
        "Si sahihi: kubadilisha kazi kuwa joto kunaruhusiwa. Kinachokatazwa ni kubadilisha joto lote kuwa kazi kwa thermostati moja tu na bila athari nyingine.",
        "Si sahihi: upanuzi huu haurudishi gesi katika hali yake ya awali. Sharti la mzunguko katika tamko ni muhimu.",
        "Si sahihi: huu ni utendaji wa injini ya thermostati mbili, unaowezekana ikiwa ufanisi wake hauzidi kikomo cha Carnot.",
        "Sahihi: kanuni ya kwanza ingeruhusu mizani hii Q + W = 0, lakini kanuni ya pili inakataza utendaji huu wa mzunguko wenye thermostati moja tu. Kwa utaratibu wa ishara wa kozi, kutoa kazi kunalingana na W < 0."
      ]
    },
    "l6-vf1": {
      "question": "Mbano nusutuli lazima uwe rejeshi kilokali.",
      "choices": [
        "Kweli",
        "Si kweli"
      ],
      "explanations": [
        "Si sahihi: mbano nusutuli unaweza, kwa mfano, kufanyika kwa msuguano. Msuguano hutawanya nishati na kuacha alama katika gesi au mazingira yake, hata ikiwa gesi inabaki karibu na usawa.",
        "Sahihi: hali ya nusutuli haitoshi. Lazima pia kuondoa utawanyaji wa nishati na kuendesha ubadilishanaji kwa tofauti ndogo zisizo na kikomo za shinikizo, halijoto au potenshali ya kemikali."
      ]
    },
    "l6-q7": {
      "question": "Ni mfuatano upi unaoeleza mzunguko wa Carnot wa gesi bora unaofanya kazi kama injini, matawi yake yote yakiwa rejeshi kilokali?",
      "choices": [
        "Upanuzi wa halijoto thabiti T_H, upanuzi wa adiabati rejeshi, mbano wa halijoto thabiti T_C, kisha mbano wa adiabati rejeshi.",
        "Upanuzi wa halijoto thabiti T_H, kupoa kwa ujazo thabiti, mbano wa halijoto thabiti T_C, kisha kupashwa joto kwa ujazo thabiti.",
        "Upanuzi wa halijoto thabiti T_C, mbano wa adiabati, mbano wa halijoto thabiti T_H, kisha upanuzi wa adiabati."
      ],
      "explanations": [
        "Sahihi: ubadilishanaji wa joto hutokea kwenye matawi mawili ya halijoto thabiti yaliyo rejeshi kilokali; adiabati huunganisha halijoto hizo mbili bila ubadilishanaji wa joto. Mzunguko wa injini hufuatwa katika mwelekeo wa saa kwenye mchoro wa (V, P).",
        "Si sahihi: viunganishi kati ya matawi ya halijoto thabiti katika mzunguko wa Carnot ni vya adiabati, si vya ujazo thabiti. Matawi ya ujazo thabiti yangebadilisha mzunguko na ubadilishanaji wake wa joto.",
        "Si sahihi: mfuatano huu unaeleza mzunguko wa Carnot unaofuatwa kinyume. Mashine basi hupokea kazi ili kuchukua joto kutoka thermostati baridi na kutoa joto kwa thermostati moto."
      ]
    },
    "l6-vf2": {
      "question": "Kanuni ya pili huweka mwelekeo wa mabadiliko unaoruhusiwa na thermodynamiki, lakini yenyewe pekee haiamui muda wake wala migawo ya usafirishaji.",
      "choices": [
        "Kweli",
        "Si kweli"
      ],
      "explanations": [
        "Sahihi: huwekea mabadiliko masharti na kubainisha hali za usawa chini ya dhana za kozi. Haitoi muda wa kutulia, upitishaji wa joto, mnato wala mgawo wa usambaaji.",
        "Si sahihi: kanuni ya pili si mlinganyo kamili wa mienendo. Sheria za ziada zinahitajika kueleza kasi ya mabadiliko na hali za kati za mabadiliko ya ghafla."
      ]
    }
  },
  "fa": {
    "l6-q1": {
      "question": "در این درس، برگشت‌پذیری سراسری یک فرایند چه چیزی را می‌طلبد؟",
      "choices": [
        "اینکه خود دستگاه بتواند صرف‌نظر از تغییرات محیط، حالت اولیه‌اش را بازیابد.",
        "اینکه بازگشتی وجود داشته باشد که دستگاه و تمام محیط آن را بدون باقی‌گذاشتن هیچ تغییر دیگری بازگرداند.",
        "اینکه بازگشت الزاماً همان مسیر را در جهت عکس بپیماید.",
        "اینکه فرایند شبه‌ایستا باشد و دستگاه در هر گام نزدیک تعادل بماند."
      ],
      "explanations": [
        "نادرست: بازگرداندن خود دستگاه می‌تواند ردی در یک مخزن گرمایی یا منبع کار باقی بگذارد. تمام محیط نیز باید بازگردانده شود.",
        "درست: کافی است دست‌کم یک روش بازگشت تمام تغییرات دستگاه و محیط آن را پاک کند. تعریف سراسری مسیر این بازگشت را تعیین نمی‌کند.",
        "نادرست: بازپیمودن مسیر به برگشت‌پذیری موضعی مربوط است. تعریف سراسری مسیر دیگری را برای بازگشت مجاز می‌داند.",
        "نادرست: شبه‌ایستا بودن کافی نیست. ممکن است اصطکاک باقی بماند و مانع بازگرداندن کامل دستگاه و محیط آن شود."
      ]
    },
    "l6-q11": {
      "question": "دستگاهی بسته 2 400 J به مخزن گرمایی در دمای 300 K می‌دهد. تغییر آنتروپی آن ΔS = −6 J/K است. آنتروپی مبادله‌شدهٔ S_e و آنتروپی تولیدشدهٔ S_i آن چقدرند؟",
      "choices": [
        "S_e = −8 J/K و S_i = +2 J/K.",
        "S_e = +8 J/K و S_i = +2 J/K.",
        "S_e = −6 J/K و S_i = 0 J/K.",
        "S_e = −8 J/K و S_i = +14 J/K."
      ],
      "explanations": [
        "درست: Q = −2 400 J، پس S_e = Q/T_ext = −8 J/K. موازنهٔ ΔS = S_e + S_i می‌دهد S_i = +2 J/K. آنتروپی مخزن 8 J/K افزایش می‌یابد: اگر آنتروپی سایر ابزارها تغییر نکند، آنتروپی کل 2 J/K افزایش می‌یابد.",
        "نادرست: S_e از دیدگاه دستگاهی محاسبه می‌شود که گرما می‌دهد: S_e = −2 400/300 = −8 J/K. مقدار +8 J/K مربوط به افزایش آنتروپی مخزن است.",
        "نادرست: S_e را Q/T_ext = −8 J/K تعیین می‌کند، نه ΔS. اختلاف آن‌ها آنتروپی تولیدشده است: S_i = ΔS − S_e = +2 J/K.",
        "نادرست: باید علامت ΔS را حفظ کرد: S_i = (−6) − (−8) = +2 J/K. جمع قدرمطلق‌های 6 و 8 آنتروپی تولیدشده را به دست نمی‌دهد."
      ]
    },
    "l6-q15": {
      "question": "گرمای Q = 1 200 J مستقیماً از مخزنی در دمای 600 K به مخزنی در دمای 300 K منتقل می‌شود. تغییر آنتروپی کل دو مخزن چقدر است؟",
      "choices": [
        "+2 J/K.",
        "0 J/K.",
        "+6 J/K.",
        "+4 J/K."
      ],
      "explanations": [
        "درست: ΔS_tot = −1 200/600 + 1 200/300 = +2 J/K. مدت زمان در این موازنه ظاهر نمی‌شود؛ دیواره‌ای با رسانندگی کم انتقال را کند می‌کند، اما برگشت‌ناپذیری ناشی از اختلاف متناهی دما را از بین نمی‌برد.",
        "نادرست: انرژی پایسته است، اما تغییرات آنتروپی با معکوس دماها وزن‌دهی می‌شوند و این دماها متفاوت‌اند.",
        "نادرست: این نتیجه قدرمطلق‌ها را جمع می‌کند. آنتروپی مخزن گرم به‌اندازهٔ 1 200/600 = 2 J/K کاهش و آنتروپی مخزن سرد به‌اندازهٔ 1 200/300 = 4 J/K افزایش می‌یابد: باید −2 + 4 را حساب کرد.",
        "نادرست: +4 J/K فقط تغییر آنتروپی مخزن سرد است. موازنهٔ کل، مقدار −2 J/K مخزن گرم را نیز در بر می‌گیرد."
      ]
    },
    "l6-q3": {
      "question": "چرا یک یخچال معمولی با بیان کلازیوس تناقض ندارد؟",
      "choices": [
        "زیرا انتقال گرما از سرد به گرم با دریافت کار از محیط همراه است.",
        "زیرا سیال در هر چرخه به حالت اولیه بازمی‌گردد و این اثرها بر دو مخزن را خنثی می‌کند.",
        "زیرا مجموع جبری گرماها و کار در یک چرخه صفر است و همین برای مجاز بودن این انتقال کافی است."
      ],
      "explanations": [
        "درست: کلازیوس فرایندی چرخه‌ای را منع می‌کند که تنها اثرش همین انتقال از سرد به گرم باشد. یخچال کار دریافت می‌کند، پس این انتقال تنها اثر آن نیست.",
        "نادرست: سیال به حالت اولیه بازمی‌گردد، اما مخزن‌ها انرژی مبادله کرده‌اند. چرخه‌ای بودن این تغییرات محیط را از بین نمی‌برد.",
        "نادرست: پایستگی انرژی لازم است اما کافی نیست. اصل دوم قید فیزیکی دیگری را اعمال می‌کند."
      ]
    },
    "l6-q13": {
      "question": "گاز ایده‌آلی به مقدار n مول، در محفظه‌ای صلب و بی‌دررو از حجم v به حجم V > v انبساط ژول–گی لوساک انجام می‌دهد. برداشتن دیواره محیط را تغییر نمی‌دهد. کدام موازنه درست است؟",
      "choices": [
        "Q = W = 0، پس ΔU_gas = 0 و ΔS_gas = 0.",
        "Q = 0، W = ΔU_gas < 0 و ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 و ΔS_tot = 0، با اینکه ΔS_gas > 0.",
        "Q = W = ΔU_gas = 0 و ΔS_tot = nR ln(V/v) > 0."
      ],
      "explanations": [
        "نادرست: از Q = W = 0 واقعاً ΔU_gas = 0 نتیجه می‌شود، اما نه ΔS_gas = 0. نبود تبادل گرما تولید آنتروپی را منع نمی‌کند: رابطهٔ dS = δQ_rev/T برای گرمای واقعی این انبساط برگشت‌ناپذیر کاربرد ندارد.",
        "نادرست: گاز در برابر خلأ منبسط می‌شود، پس هیچ کاری تحویل نمی‌دهد و W = 0 است. با Q = 0 داریم ΔU_gas = 0. آنتروپی بدون دریافت انرژی افزایش می‌یابد.",
        "نادرست: محیط بدون تغییر می‌ماند، پس ΔS_ext = 0. هیچ کاهش آنتروپی در محیط، افزایش آنتروپی گاز را جبران نمی‌کند: ΔS_tot = ΔS_gas > 0.",
        "درست: Q = W = 0 می‌دهد ΔU_gas = 0. چون محیط تغییر نکرده است، ΔS_tot = ΔS_gas = nR ln(V/v) > 0. این افزایش ثابت می‌کند که هیچ بازگشتی نمی‌تواند گاز و محیط آن را بدون باقی‌گذاشتن ردی در جایی دیگر بازگرداند."
      ]
    },
    "l6-q6": {
      "question": "موتوری دو‌مخزنی میان 600 K و 300 K کار می‌کند و در هر چرخه Q_H = 1 000 J دریافت می‌کند. بیشینهٔ کار تحویلی |W| چقدر است؟",
      "choices": [
        "1 000 J.",
        "حدود 667 J.",
        "500 J.",
        "بدون شناخت سیال عامل نمی‌توان تعیین کرد."
      ],
      "explanations": [
        "نادرست: نمی‌توان تمام گرمای دریافتی از مخزن گرم را در یک چرخه به کار تبدیل کرد. اصل دوم الزام می‌کند بخشی از آن به مخزن سرد داده شود، حتی اگر ΔU = 0 باشد.",
        "نادرست: 667 J تقریباً برابر Q_H T_H/(T_H + T_C) است. اما بازده کارنو 1 − T_C/T_H است، نه T_H/(T_H + T_C).",
        "درست: بیشینهٔ بازده همان بازده کارنو است: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. بنابراین |W|_max = η_max Q_H = 500 J. یک ماشین دو‌مخزنی دارای برگشت‌پذیری موضعی به این مقدار می‌رسد.",
        "نادرست: دماهای دو مخزن و گرمای دریافتی برای محاسبهٔ بیشینهٔ کار کافی‌اند: |W|_max = Q_H (1 − T_C/T_H). نیازی به شناخت سیال یا جزئیات موتور نیست."
      ]
    },
    "l6-q18": {
      "question": "دو زیردستگاه با ترکیب ثابت می‌توانند در مجموعه‌ای منزوی، انرژی و حجم را مستقل از هم مبادله کنند. دربارهٔ حالت تعادل آن‌ها چه می‌توان گفت؟",
      "choices": [
        "U_1 = U_2 و V_1 = V_2، مستقل از اندازهٔ زیردستگاه‌ها.",
        "P_1/T_1 = P_2/T_2، بدون اینکه دماها الزاماً برابر باشند.",
        "T_1 = T_2، اما فشارها لزوماً برابر نیستند.",
        "T_1 = T_2 و P_1 = P_2."
      ],
      "explanations": [
        "نادرست: تعادل برابری کمیت‌های گسترده را الزام نمی‌کند. دو زیردستگاه با اندازه‌های متفاوت می‌توانند در تعادل انرژی‌ها و حجم‌های متفاوت داشته باشند.",
        "نادرست: این برابری فقط ضریب dV_1 را صفر می‌کند. چون انرژی نیز می‌تواند مستقلاً بازتوزیع شود، ضریب dU_1 باید صفر شود: T_1 = T_2. معیار مورد استفاده ایستایی آنتروپی کل است.",
        "نادرست: چون تبادل حجم نیز مجاز است، تعادل باید هم مکانیکی و هم گرمایی باشد. پس فشارها نیز باید برابر باشند.",
        "درست: در تعادل، آنتروپی کل نسبت به تمام بازتوزیع‌های مجاز ایستا است: dS_tot = (1/T_1 − 1/T_2) dU_1 + (P_1/T_1 − P_2/T_2) dV_1 = 0. چون تبادل‌های انرژی و حجم مستقل‌اند، هر دو ضریب صفر می‌شوند: T_1 = T_2 و P_1 = P_2."
      ]
    },
    "l6-q8": {
      "question": "ماشینی چرخه‌ای گرماهای جبری Q_k را از مخزن‌هایی در T_k > 0 دریافت و با منبعی آرمانی کار مبادله می‌کند. کدام گزاره با نامساوی کلازیوس و تعریف‌های درس سازگار است؟",
      "choices": [
        "Σ_k Q_k/T_k ≥ 0 و برای چرخه‌ای با برگشت‌ناپذیری سراسری مقدار آن اکیداً مثبت است.",
        "برای هر چرخه Σ_k Q_k/T_k = 0 است، زیرا آنتروپی ماشین به مقدار اولیه بازمی‌گردد.",
        "Σ_k Q_k/T_k ≤ 0 و برابری به‌تنهایی ثابت می‌کند که مسیر اولیه به‌طور موضعی برگشت‌پذیر است.",
        "Σ_k Q_k/T_k ≤ 0؛ برابری مشخص‌کنندهٔ برگشت‌پذیری سراسری است، بی‌آنکه برگشت‌پذیری موضعی را اثبات کند."
      ],
      "explanations": [
        "نادرست: Q_k هنگامی مثبت شمرده می‌شود که ماشین آن را دریافت کند. با این قرارداد، مجموع منفی یا صفر است.",
        "نادرست: در یک چرخه ΔS_system = 0 است، اما آنتروپی مبادله‌شده می‌تواند منفی باشد و با تولید مثبت آنتروپی جبران شود.",
        "نادرست: علامت درست است، اما در حالت برابری، با کمک ماشین‌های کمکی یک بازگشت سراسری ساخته می‌شود. این نشان نمی‌دهد که ماشین اولیه می‌تواند مسیر خودش را بازپیماید.",
        "درست: چرخهٔ دارای برگشت‌پذیری موضعی برابری را برقرار می‌کند. برعکس، مجموع صفر امکان بازگرداندن منابع را با ماشین‌های کمکی فراهم می‌کند؛ مجموع اکیداً منفی نشان‌دهندهٔ چرخه‌ای با برگشت‌ناپذیری سراسری است."
      ]
    },
    "l6-q9": {
      "question": "در این درس آنتروپی چگونه از برابری ∮ δQ_rev/T = 0 روی چرخه‌های دارای برگشت‌پذیری موضعی ساخته می‌شود؟",
      "choices": [
        "از آن نتیجه گرفته می‌شود که گرمای Q تابع حالت است.",
        "S(B) − S(A) با انتگرال δQ_rev/T تعریف می‌شود.",
        "S(B) − S(A) با انتگرال δQ/T_ext روی هر مسیر واقعی دلخواه تعریف می‌شود."
      ],
      "explanations": [
        "نادرست: این δQ_rev/T است که دیفرانسیلی کامل است. گرمای مبادله‌شده همچنان به مسیر وابسته است.",
        "درست: دو مسیر دارای برگشت‌پذیری موضعی که یکی در جهت عکس پیموده شود، چرخه‌ای با انتگرال صفر تشکیل می‌دهند. بدین‌ترتیب آنتروپی در هر دامنهٔ همبند برگشت‌پذیر تا یک ثابت جمعی تعریف و برحسب J/K بیان می‌شود.",
        "نادرست: روی مسیر واقعی برگشت‌ناپذیر، انتگرال δQ/T_ext آنتروپی مبادله‌شده را می‌دهد، نه لزوماً ΔS را. در ساخت آنتروپی از δQ_rev/T روی مسیری دارای برگشت‌پذیری موضعی استفاده می‌شود."
      ]
    },
    "l6-q2": {
      "question": "کدام گزاره برگشت‌پذیری موضعی را به‌درستی توصیف می‌کند؟",
      "choices": [
        "کافی است حالت‌های اولیه و نهایی دستگاه حالت تعادل باشند.",
        "به‌طور خودکار از هر روشی که دستگاه و محیط را به‌صورت سراسری بازگرداند نتیجه می‌شود.",
        "مستلزم امکان وارونه‌کردن هر گام از دنباله‌ای از حالت‌های تعادل با تغییری بی‌نهایت کوچک در قیدهاست.",
        "امکان بازپیمودن مسیر دستگاه را با حفظ همان علامت‌ها برای تبادل گرما و کار فراهم می‌کند."
      ],
      "explanations": [
        "نادرست: حالت‌های میانی و امکان وارونه‌کردن هر گام برای تعریف موضعی اساسی‌اند.",
        "نادرست: بازگشت سراسری می‌تواند از مسیر دیگری بگذرد. وجود آن به‌تنهایی ثابت نمی‌کند که مسیر اولیه به‌طور موضعی برگشت‌پذیر است.",
        "درست: در این صورت می‌توان همان دنبالهٔ حالت‌ها را در جهت عکس پیمود و محیط را نیز بازگرداند. پس برگشت‌پذیری موضعی مستلزم برگشت‌پذیری سراسری است.",
        "نادرست: هنگام پیمودن مسیر دارای برگشت‌پذیری موضعی در جهت عکس، علامت تبادل‌های گرمایی و مکانیکی در هر گام عوض می‌شود."
      ]
    },
    "l6-q12": {
      "question": "فرایندی برگشت‌ناپذیر دو حالت تعادل A و B را به هم وصل می‌کند، اما حالت‌های میانی آن دور از تعادل‌اند. کدام گزاره درست است؟",
      "choices": [
        "تغییر آنتروپی ΔS برابر انتگرال δQ_actual/T_ext روی مسیر واقعی است.",
        "تغییر آنتروپی ΔS را می‌توان روی مسیری دارای برگشت‌پذیری موضعی میان A و B محاسبه کرد، درحالی‌که S_e و S_i به فرایند واقعی وابسته‌اند.",
        "حالت‌های A و B به‌تنهایی آنتروپی مبادله‌شدهٔ S_e و آنتروپی تولیدشدهٔ S_i را تعیین می‌کنند."
      ],
      "explanations": [
        "نادرست: این انتگرال S_e، یعنی آنتروپی مبادله‌شده، را می‌دهد. موازنه ΔS = S_e + S_i است: گرمای واقعاً مبادله‌شده برای محاسبهٔ ΔS بدون درنظرگرفتن آنتروپی تولیدشده کافی نیست.",
        "درست: S تابع حالت است، پس ΔS = ∫ δQ_rev/T را می‌توان روی مسیری دارای برگشت‌پذیری موضعی میان همان حالت‌ها محاسبه کرد. سپس به تبادل‌های واقعی بازمی‌گردیم تا S_e = ∫ δQ_actual/T_ext و S_i = ΔS − S_e را تعیین کنیم.",
        "نادرست: حالت‌های A و B مقدار ΔS را تعیین می‌کنند، اما تجزیهٔ آن به آنتروپی مبادله‌شده و تولیدشده را تعیین نمی‌کنند. S_e به گرماهای واقعاً مبادله‌شده و دماهای خارجی بستگی دارد؛ آنگاه S_i از موازنهٔ ΔS = S_e + S_i به دست می‌آید."
      ]
    },
    "l6-q4": {
      "question": "بیان کلوین–پلانک دقیقاً کدام عملکرد را منع می‌کند؟",
      "choices": [
        "تبدیل کار دریافتی به گرما طی یک چرخه.",
        "دریافت گرمای Q > 0 و تحویل کار W = −Q طی انبساط هم‌دمای غیرچرخه‌ای گاز ایده‌آل.",
        "تحویل کار در یک چرخه با گرفتن گرما از مخزن گرم و دادن بخشی از آن به مخزن سرد.",
        "اجرای چرخه‌ای که تنها اثرش گرفتن گرمای Q > 0 از یک مخزن گرمایی منفرد و تحویل W = −Q به محیط باشد."
      ],
      "explanations": [
        "نادرست: تبدیل کار به گرما مجاز است. ممنوعیت به تبدیل کامل گرما به کار با یک مخزن منفرد و بدون هیچ اثر دیگری مربوط است.",
        "نادرست: این انبساط گاز را به حالت اولیه بازنمی‌گرداند. شرط چرخه‌ای بودن در این بیان اساسی است.",
        "نادرست: این عملکرد موتور دو‌مخزنی است و اگر بازده آن از کران کارنو تجاوز نکند، ممکن است.",
        "درست: اصل اول موازنهٔ Q + W = 0 را مجاز می‌داند، اما اصل دوم این عملکرد چرخه‌ای با یک مخزن را منع می‌کند. با قرارداد درس، تحویل کار متناظر با W < 0 است."
      ]
    },
    "l6-vf1": {
      "question": "تراکم شبه‌ایستا لزوماً به‌طور موضعی برگشت‌پذیر است.",
      "choices": [
        "درست",
        "نادرست"
      ],
      "explanations": [
        "نادرست: تراکم شبه‌ایستا می‌تواند مثلاً با اصطکاک انجام شود. اصطکاک انرژی را تلف می‌کند و ردی در گاز یا محیط آن باقی می‌گذارد، حتی اگر گاز نزدیک تعادل بماند.",
        "درست: شبه‌ایستا بودن کافی نیست. باید اتلاف‌ها را نیز حذف کرد و تبادل‌ها را با اختلاف‌های بی‌نهایت کوچک فشار، دما یا پتانسیل شیمیایی انجام داد."
      ]
    },
    "l6-q7": {
      "question": "کدام توالی چرخهٔ موتوری کارنو را برای گاز ایده‌آل توصیف می‌کند، اگر همهٔ شاخه‌های آن به‌طور موضعی برگشت‌پذیر باشند؟",
      "choices": [
        "انبساط هم‌دما در T_H، انبساط بی‌درروی برگشت‌پذیر، تراکم هم‌دما در T_C و سپس تراکم بی‌درروی برگشت‌پذیر.",
        "انبساط هم‌دما در T_H، سرمایش هم‌حجم، تراکم هم‌دما در T_C و سپس گرمایش هم‌حجم.",
        "انبساط هم‌دما در T_C، تراکم بی‌دررو، تراکم هم‌دما در T_H و سپس انبساط بی‌دررو."
      ],
      "explanations": [
        "درست: تبادل‌های گرما روی دو شاخهٔ هم‌دمای دارای برگشت‌پذیری موضعی انجام می‌شوند؛ شاخه‌های بی‌دررو بدون تبادل گرما دو دما را به هم متصل می‌کنند. چرخهٔ موتوری در نمودار (V, P) در جهت ساعت‌گرد پیموده می‌شود.",
        "نادرست: پیوندهای میان شاخه‌های هم‌دمای چرخهٔ کارنو بی‌دررو هستند، نه هم‌حجم. شاخه‌های هم‌حجم چرخه و تبادل‌های گرمای آن را تغییر می‌دهند.",
        "نادرست: این توالی چرخهٔ کارنو را در جهت عکس توصیف می‌کند. ماشین در این حالت کار دریافت می‌کند تا از مخزن سرد گرما بگیرد و به مخزن گرم بدهد."
      ]
    },
    "l6-vf2": {
      "question": "اصل دوم جهت مجاز ترمودینامیکی تحول‌ها را تعیین می‌کند، اما به‌تنهایی مدت آن‌ها یا ضرایب انتقال را تعیین نمی‌کند.",
      "choices": [
        "درست",
        "نادرست"
      ],
      "explanations": [
        "درست: این اصل فرایندها را مقید و تعادل‌ها را تحت فرض‌های درس مشخص می‌کند. نه زمان واهلش می‌دهد، نه رسانندگی گرمایی، نه گرانروی و نه ضریب پخش.",
        "نادرست: اصل دوم معادله‌ای کامل برای دینامیک نیست. برای توصیف آهنگ تحول و حالت‌های میانی یک فرایند شدید، قوانین بیشتری لازم است."
      ]
    }
  }
};

// Unicode isolates keep complete mathematical expressions left-to-right while
// QuizText turns their lightweight underscore notation into HTML subscripts.
// Apply only to this lesson's RTL translations; the displayed text is unchanged.
function isolateQuizMath(text: string): string {
  return text.replace(
    /[A-Za-z0-9Α-ω∫∮ΣΔδ≥≤−+*=<>→_{}^()./|]+(?:[ \u00a0]+[A-Za-z0-9Α-ω∫∮ΣΔδ≥≤−+*=<>→_{}^()./|]+)*/g,
    "\u2066$&\u2069"
  );
}

for (const lang of ["ar", "fa", "ur"] as const) {
  for (const question of Object.values(quizLesson6Translations[lang] ?? {})) {
    question.question = isolateQuizMath(question.question);
    question.choices = question.choices.map(isolateQuizMath);
    question.explanations = question.explanations.map(isolateQuizMath);
  }
}
