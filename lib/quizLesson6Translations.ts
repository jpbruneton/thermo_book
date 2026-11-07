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
      "question": "In this lesson, what is a reversible process?",
      "choices": [
        "A process after which the system alone can return to its initial state, whatever changes occur in the surroundings.",
        "A process that can be run exactly backwards, exchanges with the surroundings included, by an infinitesimal change in the constraints.",
        "A sufficiently slow process.",
        "A process whose initial and final states are equilibrium states."
      ],
      "explanations": [
        "Incorrect: bringing the system alone back is always possible, for example by recompressing the gas after a Joule–Gay-Lussac expansion, but the surroundings then keep a trace of the operation.",
        "Correct: this is “the film run backwards”. Every exchange changes sign on the way back, so the system and its surroundings recover their initial states without leaving any trace.",
        "Incorrect: slowness is insufficient. A heat transfer slowed down by a poorly conducting wall remains irreversible as long as the temperatures differ by a finite amount.",
        "Incorrect: the definition concerns the whole sequence of states and the possibility of reversing each step. A Joule–Gay-Lussac expansion connects two equilibrium states, and it is irreversible."
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
    "l6-q19": {
      "question": "A thermal reservoir at 400 K receives the heat Q = 800 J. What is its entropy change?",
      "choices": [
        "+2 J/K.",
        "0 J/K, because its temperature does not change.",
        "−2 J/K.",
        "It depends on the process that supplied this heat to it."
      ],
      "explanations": [
        "Correct: the final state of the reservoir depends only on Q, and this heat can be supplied to it reversibly at its own temperature. The second postulate gives ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Incorrect: a constant temperature does not imply a constant entropy. The reservoir receives heat, and dS = δQ_rev/T_0 is not zero.",
        "Incorrect: the reservoir receives the heat, Q > 0: its entropy increases.",
        "Incorrect: S is a state function. Only the final state of the reservoir matters, and it depends only on Q, whatever the way the heat was supplied to it."
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
        "Approximately 917 J.",
        "500 J.",
        "Impossible to determine without knowing the working fluid."
      ],
      "explanations": [
        "Incorrect: not all the heat received from the hot reservoir can be converted into work over a cycle. The second law requires some to be rejected to the cold reservoir, even though ΔU = 0.",
        "Incorrect: this calculation uses the temperatures in degrees Celsius, 327 °C and 27 °C. Carnot efficiency is expressed with absolute temperatures: 1 − 300/600 = 1/2.",
        "Correct: the maximum efficiency is Carnot efficiency, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Thus |W|_max = η_max Q_H = 500 J. A reversible two-reservoir machine achieves this value.",
        "Incorrect: the temperatures of both reservoirs and the heat received suffice to calculate the maximum work: |W|_max = Q_H (1 − T_C/T_H). Neither the fluid nor the engine's details need to be known."
      ]
    },
    "l6-q8": {
      "question": "A two-reservoir engine receives Q_H = 1 000 J from a reservoir at 500 K and releases 700 J to a reservoir at 300 K during each cycle. What does the second law say?",
      "choices": [
        "This engine is allowed and irreversible: ΔS_tot ≈ +0.33 J/K per cycle.",
        "This engine is impossible, because it releases heat to the cold reservoir.",
        "This engine is reversible, because its fluid returns to its initial state at each cycle.",
        "This engine is impossible, because Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Correct: over a cycle, the entropy of the fluid does not change. The reservoirs receive −1 000 J and +700 J, so ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0. The efficiency 0.30 stays below the Carnot bound 1 − 300/500 = 0.40.",
        "Incorrect: releasing heat to the cold reservoir is, on the contrary, essential to a two-reservoir engine. The Kelvin statement forbids doing without it.",
        "Incorrect: the return of the fluid to its initial state only cancels its own entropy change. The entropy of the reservoirs increases overall: the cycle is irreversible.",
        "Incorrect: with the course conventions, Q_H = +1 000 J and Q_C = −700 J, so Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0. The Clausius inequality is satisfied."
      ]
    },
    "l6-q9": {
      "question": "Two bodies with the same heat capacity C = 100 J/K, at temperatures 400 K and 200 K, are brought into contact in an isolated enclosure, at fixed volume. What is the total entropy change?",
      "choices": [
        "Approximately +11.8 J/K.",
        "0 J/K, because the heat released by the hot body equals the heat received by the cold body.",
        "Approximately −28.8 J/K, because the hot body cools down.",
        "Approximately +25 J/K, that is Q/(200 K) − Q/(400 K) with Q = 10 000 J."
      ],
      "explanations": [
        "Correct: the final temperature is T_f = 300 K. Along fictitious reversible paths, ΔS_1 = C ln(300/400) ≈ −28.8 J/K and ΔS_2 = C ln(300/200) ≈ +40.5 J/K, so ΔS_tot ≈ +11.8 J/K > 0: the contact is irreversible.",
        "Incorrect: energy is conserved, but the entropy changes do not cancel, because the heat is exchanged at different temperatures.",
        "Incorrect: this is only the entropy change of the hot body. The cold body gains more entropy than the hot body loses.",
        "Incorrect: this calculation assumes that both temperatures stay fixed, as for two reservoirs. Here each temperature varies during the exchange: C dT/T must be integrated for each body."
      ]
    },
    "l6-q12": {
      "question": "An irreversible process connects two equilibrium states A and B, but its intermediate states are far from equilibrium. Which statement is correct?",
      "choices": [
        "The entropy change ΔS is the integral of δQ_actual/T_ext along the actual path.",
        "The entropy change ΔS can be calculated along a reversible path from A to B, whereas S_e and S_i depend on the actual process.",
        "States A and B alone determine the exchanged entropy S_e and produced entropy S_i."
      ],
      "explanations": [
        "Incorrect: this integral gives S_e, the exchanged entropy. The balance is ΔS = S_e + S_i: the heat actually exchanged is insufficient to calculate ΔS without accounting for the entropy produced.",
        "Correct: S is a state function, so ΔS = ∫ δQ_rev/T can be calculated along a reversible path connecting the same states. We then return to the actual exchanges to determine S_e = ∫ δQ_actual/T_ext and S_i = ΔS − S_e.",
        "Incorrect: states A and B fix ΔS, but not its decomposition into exchanged and produced entropy. S_e depends on the heat actually exchanged and the external temperatures; S_i then follows from ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "A resistor carrying a current is kept at constant temperature by a thermal reservoir. In steady state, what is the entropy balance of the resistor?",
      "choices": [
        "ΔS = 0, S_i > 0 and S_e = −S_i < 0.",
        "ΔS = 0, so the process is reversible.",
        "ΔS > 0, because Joule heating produces entropy."
      ],
      "explanations": [
        "Correct: the state of the resistor does not change, so ΔS = 0. Joule heating produces entropy, which the resistor releases to the reservoir along with the heat: the process is isentropic, but irreversible.",
        "Incorrect: isentropic does not mean reversible. The entropy produced is compensated by the entropy released to the reservoir, and the total entropy increases.",
        "Incorrect: the entropy produced leaves the resistor with the heat released to the reservoir. The state of the resistor, and therefore its entropy, remains unchanged."
      ]
    },
    "l6-q4": {
      "question": "Precisely which operation does the Kelvin statement forbid?",
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
      "question": "A quasi-static compression is necessarily reversible.",
      "choices": [
        "True",
        "False"
      ],
      "explanations": [
        "Incorrect: a quasi-static compression may, for example, involve friction. Friction dissipates energy and leaves a trace in the gas or its surroundings even if the gas stays close to equilibrium.",
        "Correct: being quasi-static is insufficient. Dissipation must also be eliminated and exchanges driven by infinitesimal differences in pressure, temperature or chemical potential."
      ]
    },
    "l6-vf3": {
      "question": "The entropy of a closed system can never decrease.",
      "choices": [
        "True",
        "False"
      ],
      "explanations": [
        "Incorrect: the second law imposes ΔS ≥ 0 only on an isolated system. A closed system that releases heat can see its entropy decrease, if the entropy it releases exceeds the entropy it produces.",
        "Correct: a hot body cooling in contact with a thermal reservoir loses entropy, for example. It is the total entropy of the system and its surroundings that cannot decrease."
      ]
    },
    "l6-q7": {
      "question": "Which sequence describes the Carnot engine cycle of an ideal gas, with all branches reversible?",
      "choices": [
        "Isothermal expansion at T_H, reversible adiabatic expansion, isothermal compression at T_C, then reversible adiabatic compression.",
        "Isothermal expansion at T_H, isochoric cooling, isothermal compression at T_C, then isochoric heating.",
        "Isothermal expansion at T_C, adiabatic compression, isothermal compression at T_H, then adiabatic expansion."
      ],
      "explanations": [
        "Correct: heat is exchanged along the two reversible isotherms; the adiabats connect the two temperatures without heat exchange. The engine cycle is traversed clockwise in the (V, P) diagram.",
        "Incorrect: in the Carnot cycle the connections between the isotherms are adiabatic, not isochoric. Isochoric branches would change the cycle and its heat exchanges.",
        "Incorrect: this sequence describes the Carnot cycle traversed in reverse. The machine then receives work to extract heat from the cold reservoir and reject heat to the hot reservoir."
      ]
    },
    "l6-q21": {
      "question": "An ideal gas of N particles is at equilibrium in an enclosure. What is the probability of finding, at a given instant, all the particles in the left half?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Exactly 0, because the second law forbids it."
      ],
      "explanations": [
        "Correct: each particle has a probability 1/2 of being on the left, and the particles of an ideal gas are independent. For one mole, 2^(−N) ≈ 10^(−1.8×10^23): the event is possible, but so improbable that it is never observed.",
        "Incorrect: 1/2 is the probability for a single particle. For N independent particles, the probabilities multiply.",
        "Incorrect: the probability decreases exponentially with N, not as 1/N.",
        "Incorrect: mechanics allows this configuration. Its extreme rarity explains the observed irreversibility, which is probabilistic in nature."
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
      "question": "Was ist in dieser Lektion eine reversible Zustandsänderung?",
      "choices": [
        "Eine Zustandsänderung, nach der das System allein in seinen Anfangszustand zurückkehren kann, unabhängig von den Änderungen der Umgebung.",
        "Eine Zustandsänderung, die sich durch eine infinitesimale Änderung der Randbedingungen exakt rückwärts durchlaufen lässt, einschließlich der Überträge mit der Umgebung.",
        "Eine hinreichend langsame Zustandsänderung.",
        "Eine Zustandsänderung, deren Anfangs- und Endzustand Gleichgewichtszustände sind."
      ],
      "explanations": [
        "Falsch: Das System allein zurückzuführen ist immer möglich, etwa indem man das Gas nach einer Joule–Gay-Lussac-Expansion wieder komprimiert. Die Umgebung behält dann jedoch eine Spur des Vorgangs.",
        "Richtig: Das ist „der rückwärts abgespielte Film“. Jeder Übertrag kehrt auf dem Rückweg sein Vorzeichen um, sodass System und Umgebung ihre Anfangszustände zurückerhalten, ohne eine Spur zu hinterlassen.",
        "Falsch: Langsamkeit genügt nicht. Ein durch eine schlecht leitende Wand verlangsamter Wärmeübertrag bleibt irreversibel, solange sich die Temperaturen um einen endlichen Betrag unterscheiden.",
        "Falsch: Die Definition betrifft die gesamte Abfolge der Zustände und die Möglichkeit, jeden Schritt umzukehren. Eine Joule–Gay-Lussac-Expansion verbindet zwei Gleichgewichtszustände und ist irreversibel."
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
    "l6-q19": {
      "question": "Ein Wärmereservoir bei 400 K nimmt die Wärme Q = 800 J auf. Wie groß ist seine Entropieänderung?",
      "choices": [
        "+2 J/K.",
        "0 J/K, weil sich seine Temperatur nicht ändert.",
        "−2 J/K.",
        "Sie hängt von der Zustandsänderung ab, die ihm diese Wärme zugeführt hat."
      ],
      "explanations": [
        "Richtig: Der Endzustand des Reservoirs hängt nur von Q ab, und man kann ihm diese Wärme reversibel bei seiner eigenen Temperatur zuführen. Das zweite Postulat liefert ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Falsch: Eine konstante Temperatur bedeutet keine konstante Entropie. Das Reservoir nimmt Wärme auf, und dS = δQ_rev/T_0 ist nicht null.",
        "Falsch: Das Reservoir nimmt die Wärme auf, Q > 0: Seine Entropie nimmt zu.",
        "Falsch: S ist eine Zustandsfunktion. Es zählt nur der Endzustand des Reservoirs, und dieser hängt nur von Q ab, gleich auf welche Weise die Wärme zugeführt wurde."
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
        "Etwa 917 J.",
        "500 J.",
        "Ohne Kenntnis des Arbeitsmediums nicht bestimmbar."
      ],
      "explanations": [
        "Falsch: Die gesamte vom heißen Reservoir aufgenommene Wärme lässt sich über einen Umlauf nicht in Arbeit umwandeln. Der zweite Hauptsatz verlangt, einen Teil an das kalte Reservoir abzugeben, auch wenn ΔU = 0 gilt.",
        "Falsch: Diese Rechnung verwendet die Temperaturen in Grad Celsius, 327 °C und 27 °C. Der Carnot-Wirkungsgrad wird mit den absoluten Temperaturen ausgedrückt: 1 − 300/600 = 1/2.",
        "Richtig: Der maximale Wirkungsgrad ist der Carnot-Wirkungsgrad: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Somit gilt |W|_max = η_max Q_H = 500 J. Eine reversible Maschine zwischen zwei Reservoiren erreicht diesen Wert.",
        "Falsch: Die Temperaturen beider Reservoirs und die aufgenommene Wärme genügen zur Berechnung der maximalen Arbeit: |W|_max = Q_H (1 − T_C/T_H). Arbeitsmedium und technische Einzelheiten des Motors müssen nicht bekannt sein."
      ]
    },
    "l6-q8": {
      "question": "Ein Motor zwischen zwei Wärmereservoiren nimmt pro Umlauf Q_H = 1 000 J von einem Reservoir bei 500 K auf und gibt 700 J an ein Reservoir bei 300 K ab. Was sagt der zweite Hauptsatz?",
      "choices": [
        "Dieser Motor ist erlaubt und irreversibel: ΔS_tot ≈ +0,33 J/K pro Umlauf.",
        "Dieser Motor ist unmöglich, weil er Wärme an das kalte Reservoir abgibt.",
        "Dieser Motor ist reversibel, weil sein Arbeitsmedium bei jedem Umlauf in seinen Anfangszustand zurückkehrt.",
        "Dieser Motor ist unmöglich, weil Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Richtig: Über einen Umlauf ändert sich die Entropie des Arbeitsmediums nicht. Die Reservoirs erhalten −1 000 J und +700 J, also ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. Der Wirkungsgrad 0,30 bleibt unter der Carnot-Schranke 1 − 300/500 = 0,40.",
        "Falsch: Die Wärmeabgabe an das kalte Reservoir ist für einen Motor mit zwei Wärmereservoiren im Gegenteil unverzichtbar. Die Kelvin-Aussage verbietet gerade, darauf zu verzichten.",
        "Falsch: Die Rückkehr des Arbeitsmediums in seinen Anfangszustand hebt nur dessen eigene Entropieänderung auf. Die Entropie der Reservoirs nimmt insgesamt zu: Der Kreisprozess ist irreversibel.",
        "Falsch: Mit den Konventionen des Kurses gilt Q_H = +1 000 J und Q_C = −700 J, also Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. Die Clausius-Ungleichung ist erfüllt."
      ]
    },
    "l6-q9": {
      "question": "Zwei Körper mit derselben Wärmekapazität C = 100 J/K und den Temperaturen 400 K und 200 K werden in einem abgeschlossenen Behälter bei festem Volumen in Kontakt gebracht. Wie groß ist die gesamte Entropieänderung?",
      "choices": [
        "Etwa +11,8 J/K.",
        "0 J/K, weil die vom heißen Körper abgegebene Wärme gleich der vom kalten Körper aufgenommenen Wärme ist.",
        "Etwa −28,8 J/K, weil sich der heiße Körper abkühlt.",
        "Etwa +25 J/K, also Q/(200 K) − Q/(400 K) mit Q = 10 000 J."
      ],
      "explanations": [
        "Richtig: Die Endtemperatur ist T_f = 300 K. Auf fiktiven reversiblen Wegen gilt ΔS_1 = C ln(300/400) ≈ −28,8 J/K und ΔS_2 = C ln(300/200) ≈ +40,5 J/K, also ΔS_tot ≈ +11,8 J/K > 0: Der Kontakt ist irreversibel.",
        "Falsch: Die Energie bleibt erhalten, doch die Entropieänderungen heben sich nicht auf, weil die Wärme bei unterschiedlichen Temperaturen ausgetauscht wird.",
        "Falsch: Das ist nur die Entropieänderung des heißen Körpers. Der kalte Körper gewinnt mehr Entropie, als der heiße verliert.",
        "Falsch: Diese Rechnung setzt voraus, dass beide Temperaturen fest bleiben, wie bei zwei Reservoiren. Hier ändert sich jede Temperatur während des Austauschs: Für jeden Körper muss C dT/T integriert werden."
      ]
    },
    "l6-q12": {
      "question": "Eine irreversible Zustandsänderung verbindet zwei Gleichgewichtszustände A und B, ihre Zwischenzustände liegen jedoch weit vom Gleichgewicht entfernt. Welche Aussage ist richtig?",
      "choices": [
        "Die Entropieänderung ΔS ist das Integral von δQ_actual/T_ext entlang des tatsächlichen Weges.",
        "Die Entropieänderung ΔS lässt sich auf einem reversiblen Weg zwischen A und B berechnen, während S_e und S_i vom tatsächlichen Prozess abhängen.",
        "Die Zustände A und B allein bestimmen die ausgetauschte Entropie S_e und die produzierte Entropie S_i."
      ],
      "explanations": [
        "Falsch: Dieses Integral liefert S_e, die ausgetauschte Entropie. Die Bilanz lautet ΔS = S_e + S_i: Die tatsächlich ausgetauschte Wärme genügt ohne Berücksichtigung der produzierten Entropie nicht zur Berechnung von ΔS.",
        "Richtig: S ist eine Zustandsfunktion, daher kann ΔS = ∫ δQ_rev/T auf einem reversiblen Weg zwischen denselben Zuständen berechnet werden. Anschließend bestimmt man anhand der tatsächlichen Überträge S_e = ∫ δQ_actual/T_ext und S_i = ΔS − S_e.",
        "Falsch: Die Zustände A und B legen ΔS fest, aber nicht dessen Zerlegung in ausgetauschte und produzierte Entropie. S_e hängt von den tatsächlich ausgetauschten Wärmen und den äußeren Temperaturen ab; S_i folgt dann aus ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Ein stromdurchflossener Widerstand wird durch ein Wärmereservoir auf konstanter Temperatur gehalten. Wie lautet im stationären Betrieb die Entropiebilanz des Widerstands?",
      "choices": [
        "ΔS = 0, S_i > 0 und S_e = −S_i < 0.",
        "ΔS = 0, also ist die Zustandsänderung reversibel.",
        "ΔS > 0, weil die Joule-Wärme Entropie produziert."
      ],
      "explanations": [
        "Richtig: Der Zustand des Widerstands ändert sich nicht, also ΔS = 0. Die Joule-Wärme produziert Entropie, die der Widerstand mit der Wärme an das Reservoir abgibt: Die Zustandsänderung ist isentrop, aber irreversibel.",
        "Falsch: Isentrop bedeutet nicht reversibel. Die produzierte Entropie wird durch die an das Reservoir abgegebene Entropie ausgeglichen, und die Gesamtentropie nimmt zu.",
        "Falsch: Die produzierte Entropie verlässt den Widerstand mit der an das Reservoir abgegebenen Wärme. Der Zustand des Widerstands und damit seine Entropie bleiben unverändert."
      ]
    },
    "l6-q4": {
      "question": "Welcher Betrieb wird durch die Kelvin-Aussage genau verboten?",
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
      "question": "Eine quasistatische Kompression ist notwendigerweise reversibel.",
      "choices": [
        "Wahr",
        "Falsch"
      ],
      "explanations": [
        "Falsch: Eine quasistatische Kompression kann beispielsweise mit Reibung erfolgen. Diese dissipiert Energie und hinterlässt eine Spur im Gas oder seiner Umgebung, selbst wenn das Gas nahe am Gleichgewicht bleibt.",
        "Richtig: Quasistatik allein genügt nicht. Zusätzlich müssen Dissipation beseitigt und Überträge durch infinitesimale Druck-, Temperatur- oder chemische Potentialdifferenzen angetrieben werden."
      ]
    },
    "l6-vf3": {
      "question": "Die Entropie eines geschlossenen Systems kann niemals abnehmen.",
      "choices": [
        "Wahr",
        "Falsch"
      ],
      "explanations": [
        "Falsch: Der zweite Hauptsatz verlangt ΔS ≥ 0 nur für ein abgeschlossenes System. Ein geschlossenes System, das Wärme abgibt, kann seine Entropie abnehmen sehen, wenn die abgegebene Entropie die produzierte übersteigt.",
        "Richtig: Ein heißer Körper, der sich in Kontakt mit einem Wärmereservoir abkühlt, verliert zum Beispiel Entropie. Die Gesamtentropie von System und Umgebung ist es, die nicht abnehmen kann."
      ]
    },
    "l6-q7": {
      "question": "Welche Abfolge beschreibt den Carnot-Kreisprozess eines idealen Gases im Motorbetrieb, wenn alle Teilprozesse reversibel sind?",
      "choices": [
        "Isotherme Expansion bei T_H, reversible adiabatische Expansion, isotherme Kompression bei T_C, dann reversible adiabatische Kompression.",
        "Isotherme Expansion bei T_H, isochore Abkühlung, isotherme Kompression bei T_C, dann isochore Erwärmung.",
        "Isotherme Expansion bei T_C, adiabatische Kompression, isotherme Kompression bei T_H, dann adiabatische Expansion."
      ],
      "explanations": [
        "Richtig: Der Wärmeübertrag findet auf den beiden reversiblen Isothermen statt; die Adiabaten verbinden die beiden Temperaturen ohne Wärmeübertrag. Im Motorbetrieb wird der Kreisprozess im (V, P)-Diagramm im Uhrzeigersinn durchlaufen.",
        "Falsch: Im Carnot-Kreisprozess sind die Verbindungen zwischen den Isothermen adiabatisch, nicht isochor. Isochore Teilprozesse würden den Kreisprozess und seine Wärmeüberträge verändern.",
        "Falsch: Diese Abfolge beschreibt den rückwärts durchlaufenen Carnot-Kreisprozess. Die Maschine nimmt dann Arbeit auf, um dem kalten Reservoir Wärme zu entziehen und dem heißen Wärme zuzuführen."
      ]
    },
    "l6-q21": {
      "question": "Ein ideales Gas aus N Teilchen befindet sich im Gleichgewicht in einem Behälter. Wie groß ist die Wahrscheinlichkeit, zu einem gegebenen Zeitpunkt alle Teilchen in der linken Hälfte anzutreffen?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Genau 0, weil der zweite Hauptsatz es verbietet."
      ],
      "explanations": [
        "Richtig: Jedes Teilchen befindet sich mit der Wahrscheinlichkeit 1/2 links, und die Teilchen eines idealen Gases sind unabhängig. Für ein Mol gilt 2^(−N) ≈ 10^(−1,8×10^23): Das Ereignis ist möglich, aber so unwahrscheinlich, dass man es nie beobachtet.",
        "Falsch: 1/2 ist die Wahrscheinlichkeit für ein einzelnes Teilchen. Für N unabhängige Teilchen multiplizieren sich die Wahrscheinlichkeiten.",
        "Falsch: Die Wahrscheinlichkeit nimmt exponentiell mit N ab, nicht wie 1/N.",
        "Falsch: Die Mechanik lässt diese Konfiguration zu. Ihre extreme Seltenheit erklärt die beobachtete Irreversibilität, die statistischer Natur ist."
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
      "question": "En esta lección, ¿qué es una transformación reversible?",
      "choices": [
        "Una transformación tras la cual el sistema por sí solo puede recuperar su estado inicial, cualesquiera que sean los cambios del exterior.",
        "Una transformación que puede recorrerse exactamente en sentido inverso, incluidos los intercambios con el exterior, mediante una modificación infinitesimal de las restricciones.",
        "Una transformación suficientemente lenta.",
        "Una transformación cuyos estados inicial y final son estados de equilibrio."
      ],
      "explanations": [
        "Falso: devolver solo el sistema a su estado inicial siempre es posible, por ejemplo recomprimiendo el gas tras una expansión de Joule–Gay-Lussac, pero el exterior conserva entonces una huella de la operación.",
        "Correcto: es «la película proyectada al revés». Cada intercambio cambia de signo a la vuelta, de modo que el sistema y su exterior recuperan sus estados iniciales sin dejar huella.",
        "Falso: la lentitud no basta. Una transferencia térmica frenada por una pared poco conductora sigue siendo irreversible mientras las temperaturas difieran en una cantidad finita.",
        "Falso: la definición se refiere a toda la sucesión de estados y a la posibilidad de invertir cada etapa. Una expansión de Joule–Gay-Lussac conecta dos estados de equilibrio, y es irreversible."
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
    "l6-q19": {
      "question": "Un termostato a 400 K recibe el calor Q = 800 J. ¿Cuál es su variación de entropía?",
      "choices": [
        "+2 J/K.",
        "0 J/K, porque su temperatura no varía.",
        "−2 J/K.",
        "Depende de la transformación que le ha suministrado ese calor."
      ],
      "explanations": [
        "Correcto: el estado final del termostato solo depende de Q, y se le puede aportar ese calor de forma reversible a su propia temperatura. El segundo postulado da ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Falso: una temperatura constante no implica una entropía constante. El termostato recibe calor, y dS = δQ_rev/T_0 no es nulo.",
        "Falso: el termostato recibe el calor, Q > 0: su entropía aumenta.",
        "Falso: S es una función de estado. Solo cuenta el estado final del termostato, que solo depende de Q, sea cual sea la manera en que se le ha suministrado el calor."
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
        "Aproximadamente 917 J.",
        "500 J.",
        "Es imposible determinarlo sin conocer el fluido de trabajo."
      ],
      "explanations": [
        "Falso: no se puede convertir en trabajo todo el calor recibido del termostato caliente durante un ciclo. El segundo principio exige ceder una parte al termostato frío, aunque ΔU = 0.",
        "Falso: este cálculo utiliza las temperaturas en grados Celsius, 327 °C y 27 °C. El rendimiento de Carnot se expresa con las temperaturas absolutas: 1 − 300/600 = 1/2.",
        "Correcto: el rendimiento máximo es el de Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Así, |W|_max = η_max Q_H = 500 J. Una máquina ditérmica reversible alcanza este valor.",
        "Falso: las temperaturas de ambos termostatos y el calor recibido bastan para calcular el trabajo máximo: |W|_max = Q_H (1 − T_C/T_H). No hace falta conocer el fluido ni los detalles del motor."
      ]
    },
    "l6-q8": {
      "question": "Un motor ditérmico recibe Q_H = 1 000 J de un termostato a 500 K y cede 700 J a un termostato a 300 K en cada ciclo. ¿Qué dice el segundo principio?",
      "choices": [
        "Este motor está permitido y es irreversible: ΔS_tot ≈ +0,33 J/K por ciclo.",
        "Este motor es imposible, porque cede calor al termostato frío.",
        "Este motor es reversible, porque su fluido recupera su estado inicial en cada ciclo.",
        "Este motor es imposible, porque Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Correcto: en un ciclo, la entropía del fluido no varía. Los termostatos reciben −1 000 J y +700 J, por lo que ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. El rendimiento 0,30 queda por debajo de la cota de Carnot 1 − 300/500 = 0,40.",
        "Falso: ceder calor al termostato frío es, al contrario, indispensable para un motor ditérmico. Es el enunciado de Kelvin el que prohíbe prescindir de ello.",
        "Falso: el retorno del fluido a su estado inicial solo anula su propia variación de entropía. La entropía de los termostatos aumenta en total: el ciclo es irreversible.",
        "Falso: con los convenios del curso, Q_H = +1 000 J y Q_C = −700 J, por lo que Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. La desigualdad de Clausius se cumple."
      ]
    },
    "l6-q9": {
      "question": "Dos cuerpos con la misma capacidad térmica C = 100 J/K, a las temperaturas 400 K y 200 K, se ponen en contacto en un recinto aislado, a volumen fijo. ¿Cuál es la variación de entropía total?",
      "choices": [
        "Aproximadamente +11,8 J/K.",
        "0 J/K, porque el calor cedido por el cuerpo caliente es igual al calor recibido por el cuerpo frío.",
        "Aproximadamente −28,8 J/K, porque el cuerpo caliente se enfría.",
        "Aproximadamente +25 J/K, es decir, Q/(200 K) − Q/(400 K) con Q = 10 000 J."
      ],
      "explanations": [
        "Correcto: la temperatura final es T_f = 300 K. Sobre caminos reversibles ficticios, ΔS_1 = C ln(300/400) ≈ −28,8 J/K y ΔS_2 = C ln(300/200) ≈ +40,5 J/K, por lo que ΔS_tot ≈ +11,8 J/K > 0: el contacto es irreversible.",
        "Falso: la energía se conserva, pero las variaciones de entropía no se compensan, porque el calor se intercambia a temperaturas distintas.",
        "Falso: es solo la variación de entropía del cuerpo caliente. El cuerpo frío gana más entropía de la que pierde el cuerpo caliente.",
        "Falso: este cálculo supone que ambas temperaturas permanecen fijas, como para dos termostatos. Aquí cada temperatura varía durante el intercambio: hay que integrar C dT/T para cada cuerpo."
      ]
    },
    "l6-q12": {
      "question": "Una transformación irreversible conecta dos estados de equilibrio A y B, pero sus estados intermedios están lejos del equilibrio. ¿Qué afirmación es correcta?",
      "choices": [
        "La variación de entropía ΔS es la integral de δQ_actual/T_ext sobre el camino real.",
        "La variación de entropía ΔS puede calcularse sobre un camino reversible entre A y B, mientras que S_e y S_i dependen del proceso real.",
        "Los estados A y B determinan por sí solos la entropía intercambiada S_e y la entropía producida S_i."
      ],
      "explanations": [
        "Falso: esta integral da S_e, la entropía intercambiada. El balance es ΔS = S_e + S_i: el calor realmente intercambiado no basta para calcular ΔS sin tener en cuenta la entropía producida.",
        "Correcto: S es una función de estado, por lo que ΔS = ∫ δQ_rev/T puede calcularse sobre un camino reversible que conecte los mismos estados. Después se vuelve a los intercambios reales para determinar S_e = ∫ δQ_actual/T_ext y S_i = ΔS − S_e.",
        "Falso: los estados A y B fijan ΔS, pero no su descomposición en entropía intercambiada y producida. S_e depende de los calores realmente intercambiados y de las temperaturas exteriores; S_i se deduce entonces del balance ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Una resistencia recorrida por una corriente se mantiene a temperatura constante mediante un termostato. En régimen permanente, ¿cuál es el balance de entropía de la resistencia?",
      "choices": [
        "ΔS = 0, S_i > 0 y S_e = −S_i < 0.",
        "ΔS = 0, por lo que la transformación es reversible.",
        "ΔS > 0, porque el efecto Joule produce entropía."
      ],
      "explanations": [
        "Correcto: el estado de la resistencia no cambia, por lo que ΔS = 0. El efecto Joule produce entropía, que la resistencia cede al termostato junto con el calor: la transformación es isentrópica, pero irreversible.",
        "Falso: isentrópica no significa reversible. La entropía producida se compensa con la entropía cedida al termostato, y la entropía total aumenta.",
        "Falso: la entropía producida sale de la resistencia con el calor cedido al termostato. El estado de la resistencia, y por tanto su entropía, permanece inalterado."
      ]
    },
    "l6-q4": {
      "question": "¿Qué funcionamiento prohíbe exactamente el enunciado de Kelvin?",
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
      "question": "Una compresión cuasiestática es necesariamente reversible.",
      "choices": [
        "Verdadero",
        "Falso"
      ],
      "explanations": [
        "Falso: una compresión cuasiestática puede realizarse, por ejemplo, con rozamiento. Este disipa energía y deja una huella en el gas o en su exterior, aunque el gas permanezca cerca del equilibrio.",
        "Correcto: el carácter cuasiestático no basta. También hay que eliminar las disipaciones y realizar los intercambios con diferencias infinitesimales de presión, temperatura o potencial químico."
      ]
    },
    "l6-vf3": {
      "question": "La entropía de un sistema cerrado nunca puede disminuir.",
      "choices": [
        "Verdadero",
        "Falso"
      ],
      "explanations": [
        "Falso: el segundo principio solo impone ΔS ≥ 0 a un sistema aislado. Un sistema cerrado que cede calor puede ver disminuir su entropía, si la entropía cedida supera a la que produce.",
        "Correcto: un cuerpo caliente que se enfría en contacto con un termostato pierde entropía, por ejemplo. Es la entropía total del sistema y de su exterior la que no puede disminuir."
      ]
    },
    "l6-q7": {
      "question": "¿Qué sucesión describe el ciclo de Carnot de un gas ideal que funciona como motor, siendo todas sus ramas reversibles?",
      "choices": [
        "Una expansión isotérmica a T_H, una expansión adiabática reversible, una compresión isotérmica a T_C y después una compresión adiabática reversible.",
        "Una expansión isotérmica a T_H, un enfriamiento isócoro, una compresión isotérmica a T_C y después un calentamiento isócoro.",
        "Una expansión isotérmica a T_C, una compresión adiabática, una compresión isotérmica a T_H y después una expansión adiabática."
      ],
      "explanations": [
        "Correcto: los intercambios de calor tienen lugar en las dos isotermas reversibles; las adiabáticas conectan ambas temperaturas sin intercambio térmico. El ciclo motor se recorre en sentido horario en el diagrama (V, P).",
        "Falso: las conexiones entre las isotermas del ciclo de Carnot son adiabáticas, no isócoras. Unas ramas isócoras modificarían el ciclo y sus intercambios de calor.",
        "Falso: esta sucesión describe el ciclo de Carnot recorrido en sentido inverso. La máquina recibe entonces trabajo para extraer calor del termostato frío y cederlo al caliente."
      ]
    },
    "l6-q21": {
      "question": "Un gas ideal de N partículas está en equilibrio en un recinto. ¿Cuál es la probabilidad de encontrar, en un instante dado, todas las partículas en la mitad izquierda?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Exactamente 0, porque el segundo principio lo prohíbe."
      ],
      "explanations": [
        "Correcto: cada partícula tiene una probabilidad 1/2 de encontrarse a la izquierda, y las partículas de un gas ideal son independientes. Para un mol, 2^(−N) ≈ 10^(−1,8×10^23): el suceso es posible, pero tan improbable que nunca se observa.",
        "Falso: 1/2 es la probabilidad para una sola partícula. Para N partículas independientes, las probabilidades se multiplican.",
        "Falso: la probabilidad decrece exponencialmente con N, y no como 1/N.",
        "Falso: la mecánica permite esta configuración. Su extrema rareza explica la irreversibilidad observada, que es de naturaleza probabilística."
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
      "question": "Nesta lição, o que é uma transformação reversível?",
      "choices": [
        "Uma transformação após a qual apenas o sistema pode recuperar o seu estado inicial, quaisquer que sejam as alterações do exterior.",
        "Uma transformação que pode ser percorrida exatamente no sentido inverso, incluindo as trocas com o exterior, por uma modificação infinitesimal das restrições.",
        "Uma transformação suficientemente lenta.",
        "Uma transformação cujos estados inicial e final são estados de equilíbrio."
      ],
      "explanations": [
        "Falso: trazer de volta apenas o sistema é sempre possível, por exemplo recomprimindo o gás após uma expansão de Joule–Gay-Lussac, mas o exterior guarda então um vestígio da operação.",
        "Correto: é «o filme passado ao contrário». Cada troca muda de sinal no regresso, de modo que o sistema e o seu exterior recuperam os seus estados iniciais sem deixar vestígio.",
        "Falso: a lentidão não basta. Uma transferência térmica abrandada por uma parede pouco condutora continua irreversível enquanto as temperaturas diferirem de uma quantidade finita.",
        "Falso: a definição diz respeito a toda a sucessão de estados e à possibilidade de inverter cada etapa. Uma expansão de Joule–Gay-Lussac liga dois estados de equilíbrio, e é irreversível."
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
    "l6-q19": {
      "question": "Um termostato a 400 K recebe o calor Q = 800 J. Qual é a sua variação de entropia?",
      "choices": [
        "+2 J/K.",
        "0 J/K, porque a sua temperatura não varia.",
        "−2 J/K.",
        "Depende da transformação que lhe forneceu esse calor."
      ],
      "explanations": [
        "Correto: o estado final do termostato depende apenas de Q, e pode fornecer-se-lhe esse calor de forma reversível à sua própria temperatura. O segundo postulado dá ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Falso: uma temperatura constante não implica uma entropia constante. O termostato recebe calor, e dS = δQ_rev/T_0 não é nulo.",
        "Falso: o termostato recebe o calor, Q > 0: a sua entropia aumenta.",
        "Falso: S é uma função de estado. Só conta o estado final do termostato, que depende apenas de Q, seja qual for a forma como o calor lhe foi fornecido."
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
        "Cerca de 917 J.",
        "500 J.",
        "É impossível determinar sem conhecer o fluido de trabalho."
      ],
      "explanations": [
        "Falso: não se pode converter em trabalho todo o calor recebido do termostato quente num ciclo. O segundo princípio exige ceder uma parte ao termostato frio, mesmo que ΔU = 0.",
        "Falso: este cálculo usa as temperaturas em graus Celsius, 327 °C e 27 °C. O rendimento de Carnot exprime-se com as temperaturas absolutas: 1 − 300/600 = 1/2.",
        "Correto: o rendimento máximo é o de Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Assim, |W|_max = η_max Q_H = 500 J. Este valor é atingido por uma máquina ditérmica reversível.",
        "Falso: as temperaturas dos dois termostatos e o calor recebido bastam para calcular o trabalho máximo: |W|_max = Q_H (1 − T_C/T_H). Não é necessário conhecer o fluido nem os pormenores do motor."
      ]
    },
    "l6-q8": {
      "question": "Um motor ditérmico recebe Q_H = 1 000 J de um termostato a 500 K e cede 700 J a um termostato a 300 K em cada ciclo. O que diz o segundo princípio?",
      "choices": [
        "Este motor é permitido e irreversível: ΔS_tot ≈ +0,33 J/K por ciclo.",
        "Este motor é impossível, porque cede calor ao termostato frio.",
        "Este motor é reversível, porque o seu fluido recupera o estado inicial em cada ciclo.",
        "Este motor é impossível, porque Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Correto: num ciclo, a entropia do fluido não varia. Os termostatos recebem −1 000 J e +700 J, pelo que ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. O rendimento 0,30 continua inferior ao limite de Carnot 1 − 300/500 = 0,40.",
        "Falso: ceder calor ao termostato frio é, pelo contrário, indispensável a um motor ditérmico. É o enunciado de Kelvin que proíbe dispensá-lo.",
        "Falso: o regresso do fluido ao estado inicial anula apenas a sua própria variação de entropia. A entropia dos termostatos aumenta no total: o ciclo é irreversível.",
        "Falso: com as convenções do curso, Q_H = +1 000 J e Q_C = −700 J, pelo que Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. A desigualdade de Clausius é respeitada."
      ]
    },
    "l6-q9": {
      "question": "Dois corpos com a mesma capacidade térmica C = 100 J/K, às temperaturas 400 K e 200 K, são postos em contacto num recipiente isolado, a volume fixo. Qual é a variação da entropia total?",
      "choices": [
        "Cerca de +11,8 J/K.",
        "0 J/K, porque o calor cedido pelo corpo quente é igual ao calor recebido pelo corpo frio.",
        "Cerca de −28,8 J/K, porque o corpo quente arrefece.",
        "Cerca de +25 J/K, ou seja, Q/(200 K) − Q/(400 K) com Q = 10 000 J."
      ],
      "explanations": [
        "Correto: a temperatura final é T_f = 300 K. Em caminhos reversíveis fictícios, ΔS_1 = C ln(300/400) ≈ −28,8 J/K e ΔS_2 = C ln(300/200) ≈ +40,5 J/K, pelo que ΔS_tot ≈ +11,8 J/K > 0: o contacto é irreversível.",
        "Falso: a energia conserva-se, mas as variações de entropia não se compensam, porque o calor é trocado a temperaturas diferentes.",
        "Falso: esta é apenas a variação de entropia do corpo quente. O corpo frio ganha mais entropia do que a que o corpo quente perde.",
        "Falso: este cálculo supõe que as duas temperaturas permanecem fixas, como para dois termostatos. Aqui, cada temperatura varia durante a troca: é necessário integrar C dT/T para cada corpo."
      ]
    },
    "l6-q12": {
      "question": "Uma transformação irreversível liga dois estados de equilíbrio A e B, mas os seus estados intermédios estão longe do equilíbrio. Que afirmação está correta?",
      "choices": [
        "A variação de entropia ΔS é o integral de δQ_actual/T_ext no caminho real.",
        "A variação de entropia ΔS pode ser calculada num caminho reversível entre A e B, enquanto S_e e S_i dependem do processo real.",
        "Os estados A e B determinam, por si só, a entropia trocada S_e e a entropia produzida S_i."
      ],
      "explanations": [
        "Falso: este integral dá S_e, a entropia trocada. O balanço é ΔS = S_e + S_i: o calor efetivamente trocado não basta para calcular ΔS sem ter em conta a entropia produzida.",
        "Correto: S é uma função de estado, pelo que ΔS = ∫ δQ_rev/T pode ser calculada num caminho reversível que ligue os mesmos estados. Regressa-se depois às trocas reais para determinar S_e = ∫ δQ_actual/T_ext e S_i = ΔS − S_e.",
        "Falso: os estados A e B fixam ΔS, mas não a sua decomposição em entropia trocada e produzida. S_e depende dos calores efetivamente trocados e das temperaturas exteriores; S_i deduz-se então do balanço ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Uma resistência percorrida por uma corrente é mantida a temperatura constante por um termostato. Em regime estacionário, qual é o balanço de entropia da resistência?",
      "choices": [
        "ΔS = 0, S_i > 0 e S_e = −S_i < 0.",
        "ΔS = 0, pelo que a transformação é reversível.",
        "ΔS > 0, porque o efeito Joule produz entropia."
      ],
      "explanations": [
        "Correto: o estado da resistência não muda, pelo que ΔS = 0. O efeito Joule produz entropia, que a resistência cede ao termostato com o calor: a transformação é isentrópica, mas irreversível.",
        "Falso: isentrópica não significa reversível. A entropia produzida é compensada pela entropia cedida ao termostato, e a entropia total aumenta.",
        "Falso: a entropia produzida sai da resistência com o calor cedido ao termostato. O estado da resistência, e portanto a sua entropia, permanece inalterado."
      ]
    },
    "l6-q4": {
      "question": "Que funcionamento é precisamente proibido pelo enunciado de Kelvin?",
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
      "question": "Uma compressão quase-estática é necessariamente reversível.",
      "choices": [
        "Verdadeiro",
        "Falso"
      ],
      "explanations": [
        "Falso: uma compressão quase-estática pode, por exemplo, realizar-se com atrito. Este dissipa energia e deixa um vestígio no gás ou no seu exterior, mesmo que o gás permaneça próximo do equilíbrio.",
        "Correto: o caráter quase-estático não basta. É também necessário eliminar as dissipações e conduzir as trocas com diferenças infinitesimais de pressão, temperatura ou potencial químico."
      ]
    },
    "l6-vf3": {
      "question": "A entropia de um sistema fechado nunca pode diminuir.",
      "choices": [
        "Verdadeiro",
        "Falso"
      ],
      "explanations": [
        "Falso: o segundo princípio só impõe ΔS ≥ 0 a um sistema isolado. Um sistema fechado que cede calor pode ver a sua entropia diminuir, se a entropia cedida exceder a que produz.",
        "Correto: um corpo quente que arrefece em contacto com um termostato perde entropia, por exemplo. É a entropia total do sistema e do seu exterior que não pode diminuir."
      ]
    },
    "l6-q7": {
      "question": "Que sucessão descreve o ciclo motor de Carnot de um gás ideal, sendo todos os seus ramos reversíveis?",
      "choices": [
        "Uma expansão isotérmica a T_H, uma expansão adiabática reversível, uma compressão isotérmica a T_C e, depois, uma compressão adiabática reversível.",
        "Uma expansão isotérmica a T_H, um arrefecimento isocórico, uma compressão isotérmica a T_C e, depois, um aquecimento isocórico.",
        "Uma expansão isotérmica a T_C, uma compressão adiabática, uma compressão isotérmica a T_H e, depois, uma expansão adiabática."
      ],
      "explanations": [
        "Correto: as trocas de calor ocorrem nas duas isotérmicas reversíveis; as adiabáticas ligam as duas temperaturas sem troca térmica. O ciclo motor é percorrido no sentido horário no diagrama (V, P).",
        "Falso: as ligações entre as isotérmicas do ciclo de Carnot são adiabáticas, não isocóricas. Ramos isocóricos modificariam o ciclo e as suas trocas de calor.",
        "Falso: esta sucessão descreve o ciclo de Carnot percorrido no sentido inverso. A máquina recebe então trabalho para retirar calor do termostato frio e cedê-lo ao termostato quente."
      ]
    },
    "l6-q21": {
      "question": "Um gás ideal de N partículas está em equilíbrio num recipiente. Qual é a probabilidade de encontrar, num dado instante, todas as partículas na metade esquerda?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Exatamente 0, porque o segundo princípio o proíbe."
      ],
      "explanations": [
        "Correto: cada partícula tem uma probabilidade 1/2 de se encontrar à esquerda, e as partículas de um gás ideal são independentes. Para uma mole, 2^(−N) ≈ 10^(−1,8×10^23): o acontecimento é possível, mas tão improvável que nunca é observado.",
        "Falso: 1/2 é a probabilidade para uma única partícula. Para N partículas independentes, as probabilidades multiplicam-se.",
        "Falso: a probabilidade decresce exponencialmente com N, e não como 1/N.",
        "Falso: a mecânica permite esta configuração. A sua extrema raridade explica a irreversibilidade observada, que é de natureza probabilística."
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
      "question": "In questa lezione, che cos'è una trasformazione reversibile?",
      "choices": [
        "Una trasformazione dopo la quale il solo sistema può ritornare al suo stato iniziale, qualunque siano i cambiamenti dell'ambiente esterno.",
        "Una trasformazione che può essere percorsa esattamente nel verso opposto, scambi con l'ambiente esterno compresi, mediante una modifica infinitesima dei vincoli.",
        "Una trasformazione sufficientemente lenta.",
        "Una trasformazione i cui stati iniziale e finale sono stati di equilibrio."
      ],
      "explanations": [
        "Falso: riportare indietro il solo sistema è sempre possibile, per esempio ricomprimendo il gas dopo un'espansione di Joule–Gay-Lussac, ma l'ambiente esterno conserva allora una traccia dell'operazione.",
        "Corretto: è «il film proiettato al contrario». Ogni scambio cambia segno al ritorno, così che il sistema e il suo ambiente esterno ritornano ai loro stati iniziali senza lasciare traccia.",
        "Falso: la lentezza non basta. Un trasferimento termico rallentato da una parete poco conduttrice resta irreversibile finché le temperature differiscono di una quantità finita.",
        "Falso: la definizione riguarda l'intera successione di stati e la possibilità di invertire ogni tappa. Un'espansione di Joule–Gay-Lussac collega due stati di equilibrio, ed è irreversibile."
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
    "l6-q19": {
      "question": "Un termostato a 400 K riceve il calore Q = 800 J. Qual è la sua variazione di entropia?",
      "choices": [
        "+2 J/K.",
        "0 J/K, perché la sua temperatura non varia.",
        "−2 J/K.",
        "Dipende dalla trasformazione che gli ha fornito questo calore."
      ],
      "explanations": [
        "Corretto: lo stato finale del termostato dipende solo da Q, e gli si può fornire questo calore in modo reversibile alla sua stessa temperatura. Il secondo postulato dà ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Falso: una temperatura costante non implica un'entropia costante. Il termostato riceve calore, e dS = δQ_rev/T_0 non è nullo.",
        "Falso: il termostato riceve il calore, Q > 0: la sua entropia aumenta.",
        "Falso: S è una funzione di stato. Conta solo lo stato finale del termostato, che dipende solo da Q, qualunque sia il modo in cui il calore gli è stato fornito."
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
        "Circa 917 J.",
        "500 J.",
        "Impossibile determinarlo senza conoscere il fluido di lavoro."
      ],
      "explanations": [
        "Falso: non si può convertire in lavoro tutto il calore ricevuto dal termostato caldo su un ciclo. Il secondo principio impone di cederne una parte al termostato freddo, anche se ΔU = 0.",
        "Falso: questo calcolo usa le temperature in gradi Celsius, 327 °C e 27 °C. Il rendimento di Carnot si esprime con le temperature assolute: 1 − 300/600 = 1/2.",
        "Corretto: il rendimento massimo è quello di Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Quindi |W|_max = η_max Q_H = 500 J. Questo valore è raggiunto da una macchina bitermica reversibile.",
        "Falso: le temperature dei due termostati e il calore ricevuto bastano per calcolare il lavoro massimo: |W|_max = Q_H (1 − T_C/T_H). Non occorre conoscere il fluido né i dettagli del motore."
      ]
    },
    "l6-q8": {
      "question": "Un motore bitermico riceve Q_H = 1 000 J da un termostato a 500 K e cede 700 J a un termostato a 300 K in ogni ciclo. Che cosa dice il secondo principio?",
      "choices": [
        "Questo motore è permesso e irreversibile: ΔS_tot ≈ +0,33 J/K per ciclo.",
        "Questo motore è impossibile, perché cede calore al termostato freddo.",
        "Questo motore è reversibile, perché il suo fluido ritorna allo stato iniziale a ogni ciclo.",
        "Questo motore è impossibile, perché Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Corretto: su un ciclo, l'entropia del fluido non varia. I termostati ricevono −1 000 J e +700 J, quindi ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. Il rendimento 0,30 resta inferiore al limite di Carnot 1 − 300/500 = 0,40.",
        "Falso: cedere calore al termostato freddo è invece indispensabile per un motore bitermico. È l'enunciato di Kelvin a vietare di farne a meno.",
        "Falso: il ritorno del fluido allo stato iniziale annulla solo la sua variazione di entropia. L'entropia dei termostati aumenta in totale: il ciclo è irreversibile.",
        "Falso: con le convenzioni del corso, Q_H = +1 000 J e Q_C = −700 J, quindi Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. La disuguaglianza di Clausius è rispettata."
      ]
    },
    "l6-q9": {
      "question": "Due corpi con la stessa capacità termica C = 100 J/K, alle temperature 400 K e 200 K, vengono messi a contatto in un recipiente isolato, a volume fissato. Qual è la variazione di entropia totale?",
      "choices": [
        "Circa +11,8 J/K.",
        "0 J/K, perché il calore ceduto dal corpo caldo è uguale al calore ricevuto dal corpo freddo.",
        "Circa −28,8 J/K, perché il corpo caldo si raffredda.",
        "Circa +25 J/K, cioè Q/(200 K) − Q/(400 K) con Q = 10 000 J."
      ],
      "explanations": [
        "Corretto: la temperatura finale è T_f = 300 K. Lungo cammini reversibili fittizi, ΔS_1 = C ln(300/400) ≈ −28,8 J/K e ΔS_2 = C ln(300/200) ≈ +40,5 J/K, quindi ΔS_tot ≈ +11,8 J/K > 0: il contatto è irreversibile.",
        "Falso: l'energia si conserva, ma le variazioni di entropia non si compensano, perché il calore è scambiato a temperature diverse.",
        "Falso: è solo la variazione di entropia del corpo caldo. Il corpo freddo guadagna più entropia di quanta ne perda il corpo caldo.",
        "Falso: questo calcolo suppone che le due temperature restino fisse, come per due termostati. Qui ogni temperatura varia durante lo scambio: occorre integrare C dT/T per ciascun corpo."
      ]
    },
    "l6-q12": {
      "question": "Una trasformazione irreversibile collega due stati di equilibrio A e B, ma i suoi stati intermedi sono lontani dall'equilibrio. Quale affermazione è corretta?",
      "choices": [
        "La variazione di entropia ΔS è l'integrale di δQ_actual/T_ext lungo il cammino reale.",
        "La variazione di entropia ΔS può essere calcolata lungo un cammino reversibile tra A e B, mentre S_e e S_i dipendono dal processo reale.",
        "Gli stati A e B determinano da soli l'entropia scambiata S_e e l'entropia prodotta S_i."
      ],
      "explanations": [
        "Falso: questo integrale dà S_e, l'entropia scambiata. Il bilancio è ΔS = S_e + S_i: il calore effettivamente scambiato non basta per calcolare ΔS senza tenere conto dell'entropia prodotta.",
        "Corretto: S è una funzione di stato, quindi ΔS = ∫ δQ_rev/T può essere calcolata lungo un cammino reversibile che collega gli stessi stati. Si torna poi agli scambi reali per determinare S_e = ∫ δQ_actual/T_ext e S_i = ΔS − S_e.",
        "Falso: gli stati A e B fissano ΔS, ma non la sua scomposizione in entropia scambiata e prodotta. S_e dipende dai calori effettivamente scambiati e dalle temperature esterne; S_i si ricava poi dal bilancio ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Un resistore percorso da corrente è mantenuto a temperatura costante da un termostato. In regime stazionario, qual è il bilancio di entropia del resistore?",
      "choices": [
        "ΔS = 0, S_i > 0 e S_e = −S_i < 0.",
        "ΔS = 0, quindi la trasformazione è reversibile.",
        "ΔS > 0, perché l'effetto Joule produce entropia."
      ],
      "explanations": [
        "Corretto: lo stato del resistore non cambia, quindi ΔS = 0. L'effetto Joule produce entropia, che il resistore cede al termostato insieme al calore: la trasformazione è isoentropica, ma irreversibile.",
        "Falso: isoentropica non significa reversibile. L'entropia prodotta è compensata dall'entropia ceduta al termostato, e l'entropia totale aumenta.",
        "Falso: l'entropia prodotta lascia il resistore insieme al calore ceduto al termostato. Lo stato del resistore, e quindi la sua entropia, resta invariato."
      ]
    },
    "l6-q4": {
      "question": "Quale funzionamento è precisamente vietato dall'enunciato di Kelvin?",
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
      "question": "Una compressione quasistatica è necessariamente reversibile.",
      "choices": [
        "Vero",
        "Falso"
      ],
      "explanations": [
        "Falso: una compressione quasistatica può, per esempio, avvenire con attrito. Questo dissipa energia e lascia una traccia nel gas o nel suo ambiente esterno, anche se il gas rimane vicino all'equilibrio.",
        "Corretto: il carattere quasistatico non basta. Occorre anche eliminare le dissipazioni e condurre gli scambi con differenze infinitesime di pressione, temperatura o potenziale chimico."
      ]
    },
    "l6-vf3": {
      "question": "L'entropia di un sistema chiuso non può mai diminuire.",
      "choices": [
        "Vero",
        "Falso"
      ],
      "explanations": [
        "Falso: il secondo principio impone ΔS ≥ 0 solo a un sistema isolato. Un sistema chiuso che cede calore può vedere la propria entropia diminuire, se l'entropia ceduta supera quella che produce.",
        "Corretto: un corpo caldo che si raffredda a contatto con un termostato perde entropia, per esempio. È l'entropia totale del sistema e del suo ambiente esterno a non poter diminuire."
      ]
    },
    "l6-q7": {
      "question": "Quale successione descrive il ciclo motore di Carnot di un gas perfetto, con tutti i rami reversibili?",
      "choices": [
        "Un'espansione isoterma a T_H, un'espansione adiabatica reversibile, una compressione isoterma a T_C, poi una compressione adiabatica reversibile.",
        "Un'espansione isoterma a T_H, un raffreddamento isocoro, una compressione isoterma a T_C, poi un riscaldamento isocoro.",
        "Un'espansione isoterma a T_C, una compressione adiabatica, una compressione isoterma a T_H, poi un'espansione adiabatica."
      ],
      "explanations": [
        "Corretto: gli scambi di calore avvengono sulle due isoterme reversibili; le adiabatiche collegano le due temperature senza scambio termico. Il ciclo motore è percorso in senso orario nel diagramma (V, P).",
        "Falso: i collegamenti tra le isoterme del ciclo di Carnot sono adiabatici, non isocori. Rami isocori modificherebbero il ciclo e i suoi scambi di calore.",
        "Falso: questa successione descrive il ciclo di Carnot percorso nel verso opposto. La macchina riceve allora lavoro per prelevare calore dal termostato freddo e cederlo a quello caldo."
      ]
    },
    "l6-q21": {
      "question": "Un gas perfetto di N particelle è in equilibrio in un recipiente. Qual è la probabilità di trovare, in un dato istante, tutte le particelle nella metà sinistra?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Esattamente 0, perché il secondo principio lo vieta."
      ],
      "explanations": [
        "Corretto: ogni particella ha probabilità 1/2 di trovarsi a sinistra, e le particelle di un gas perfetto sono indipendenti. Per una mole, 2^(−N) ≈ 10^(−1,8×10^23): l'evento è possibile, ma così improbabile che non lo si osserva mai.",
        "Falso: 1/2 è la probabilità per una sola particella. Per N particelle indipendenti, le probabilità si moltiplicano.",
        "Falso: la probabilità decresce esponenzialmente con N, e non come 1/N.",
        "Falso: la meccanica consente questa configurazione. La sua estrema rarità spiega l'irreversibilità osservata, che è di natura probabilistica."
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
      "question": "Czym w tej lekcji jest przemiana odwracalna?",
      "choices": [
        "Przemianą, po której sam układ może powrócić do stanu początkowego, niezależnie od zmian w otoczeniu.",
        "Przemianą, którą można przebyć dokładnie w przeciwnym kierunku, łącznie z wymianami z otoczeniem, przez infinitezymalną zmianę więzów.",
        "Przemianą dostatecznie powolną.",
        "Przemianą, której stany początkowy i końcowy są stanami równowagi."
      ],
      "explanations": [
        "Nieprawda: przywrócenie samego układu jest zawsze możliwe, na przykład przez ponowne sprężenie gazu po rozprężaniu Joule'a–Gay-Lussaca, ale otoczenie zachowuje wtedy ślad tej operacji.",
        "Zgadza się: to „film puszczony od tyłu”. Przy powrocie każda wymiana zmienia znak, tak że układ i jego otoczenie wracają do stanów początkowych, nie pozostawiając śladu.",
        "Nieprawda: powolność nie wystarcza. Przepływ ciepła spowolniony przez słabo przewodzącą ściankę pozostaje nieodwracalny, dopóki temperatury różnią się o skończoną wartość.",
        "Nieprawda: definicja dotyczy całego ciągu stanów i możliwości odwrócenia każdego etapu. Rozprężanie Joule'a–Gay-Lussaca łączy dwa stany równowagi, a jest nieodwracalne."
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
    "l6-q19": {
      "question": "Termostat o temperaturze 400 K otrzymuje ciepło Q = 800 J. Jaka jest zmiana jego entropii?",
      "choices": [
        "+2 J/K.",
        "0 J/K, ponieważ jego temperatura się nie zmienia.",
        "−2 J/K.",
        "Zależy od przemiany, która dostarczyła mu to ciepło."
      ],
      "explanations": [
        "Zgadza się: stan końcowy termostatu zależy tylko od Q, a to ciepło można mu dostarczyć odwracalnie w jego własnej temperaturze. Drugi postulat daje ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Nieprawda: stała temperatura nie oznacza stałej entropii. Termostat otrzymuje ciepło, a dS = δQ_rev/T_0 nie jest równe zeru.",
        "Nieprawda: termostat otrzymuje ciepło, Q > 0: jego entropia rośnie.",
        "Nieprawda: S jest funkcją stanu. Liczy się tylko stan końcowy termostatu, który zależy wyłącznie od Q, niezależnie od sposobu dostarczenia ciepła."
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
        "Około 917 J.",
        "500 J.",
        "Nie da się określić bez znajomości czynnika roboczego."
      ],
      "explanations": [
        "Nieprawda: nie można w cyklu przekształcić w pracę całego ciepła otrzymanego z gorącego termostatu. Druga zasada wymaga oddania części zimnemu termostatowi, nawet jeśli ΔU = 0.",
        "Nieprawda: to obliczenie wykorzystuje temperatury w stopniach Celsjusza, 327 °C i 27 °C. Sprawność Carnota wyraża się przez temperatury bezwzględne: 1 − 300/600 = 1/2.",
        "Zgadza się: maksymalną sprawnością jest sprawność Carnota, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Zatem |W|_max = η_max Q_H = 500 J. Wartość tę osiąga odwracalna maszyna dwutermostatowa.",
        "Nieprawda: temperatury obu termostatów i otrzymane ciepło wystarczają do obliczenia maksymalnej pracy: |W|_max = Q_H (1 − T_C/T_H). Nie trzeba znać czynnika roboczego ani szczegółów silnika."
      ]
    },
    "l6-q8": {
      "question": "Silnik dwutermostatowy w każdym cyklu otrzymuje Q_H = 1 000 J z termostatu o temperaturze 500 K i oddaje 700 J termostatowi o temperaturze 300 K. Co mówi druga zasada?",
      "choices": [
        "Ten silnik jest dozwolony i nieodwracalny: ΔS_tot ≈ +0,33 J/K na cykl.",
        "Ten silnik jest niemożliwy, ponieważ oddaje ciepło zimnemu termostatowi.",
        "Ten silnik jest odwracalny, ponieważ jego czynnik roboczy wraca do stanu początkowego w każdym cyklu.",
        "Ten silnik jest niemożliwy, ponieważ Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Zgadza się: w cyklu entropia czynnika roboczego się nie zmienia. Termostaty otrzymują −1 000 J i +700 J, skąd ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. Sprawność 0,30 pozostaje mniejsza od granicy Carnota 1 − 300/500 = 0,40.",
        "Nieprawda: oddawanie ciepła zimnemu termostatowi jest wręcz niezbędne dla silnika dwutermostatowego. To sformułowanie Kelvina zabrania obywania się bez niego.",
        "Nieprawda: powrót czynnika roboczego do stanu początkowego zeruje jedynie jego własną zmianę entropii. Łączna entropia termostatów rośnie: cykl jest nieodwracalny.",
        "Nieprawda: przy konwencjach przyjętych w kursie Q_H = +1 000 J i Q_C = −700 J, skąd Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. Nierówność Clausiusa jest spełniona."
      ]
    },
    "l6-q9": {
      "question": "Dwa ciała o tej samej pojemności cieplnej C = 100 J/K, o temperaturach 400 K i 200 K, zostają zetknięte w izolowanym zbiorniku przy stałej objętości. Jaka jest zmiana entropii całkowitej?",
      "choices": [
        "Około +11,8 J/K.",
        "0 J/K, ponieważ ciepło oddane przez ciało gorące jest równe ciepłu otrzymanemu przez ciało zimne.",
        "Około −28,8 J/K, ponieważ ciało gorące się ochładza.",
        "Około +25 J/K, czyli Q/(200 K) − Q/(400 K) przy Q = 10 000 J."
      ],
      "explanations": [
        "Zgadza się: temperatura końcowa wynosi T_f = 300 K. Po fikcyjnych drogach odwracalnych ΔS_1 = C ln(300/400) ≈ −28,8 J/K i ΔS_2 = C ln(300/200) ≈ +40,5 J/K, skąd ΔS_tot ≈ +11,8 J/K > 0: kontakt jest nieodwracalny.",
        "Nieprawda: energia jest zachowana, ale zmiany entropii się nie znoszą, ponieważ ciepło jest wymieniane w różnych temperaturach.",
        "Nieprawda: to tylko zmiana entropii ciała gorącego. Ciało zimne zyskuje więcej entropii, niż traci ciało gorące.",
        "Nieprawda: to obliczenie zakłada, że obie temperatury pozostają stałe, jak dla dwóch termostatów. Tutaj każda temperatura zmienia się podczas wymiany: trzeba scałkować C dT/T dla każdego ciała."
      ]
    },
    "l6-q12": {
      "question": "Przemiana nieodwracalna łączy dwa stany równowagi A i B, lecz jej stany pośrednie są dalekie od równowagi. Które stwierdzenie jest poprawne?",
      "choices": [
        "Zmiana entropii ΔS jest całką z δQ_actual/T_ext po rzeczywistej drodze.",
        "Zmianę entropii ΔS można obliczyć po odwracalnej drodze między A i B, natomiast S_e i S_i zależą od rzeczywistego procesu.",
        "Same stany A i B określają entropię wymienioną S_e i entropię wytworzoną S_i."
      ],
      "explanations": [
        "Nieprawda: ta całka daje S_e, czyli entropię wymienioną. Bilans ma postać ΔS = S_e + S_i: rzeczywiście wymienione ciepło nie wystarcza do obliczenia ΔS bez uwzględnienia entropii wytworzonej.",
        "Zgadza się: S jest funkcją stanu, więc ΔS = ∫ δQ_rev/T można obliczyć po odwracalnej drodze łączącej te same stany. Następnie wracamy do rzeczywistych wymian, aby wyznaczyć S_e = ∫ δQ_actual/T_ext i S_i = ΔS − S_e.",
        "Nieprawda: stany A i B określają ΔS, ale nie jej rozkład na entropię wymienioną i wytworzoną. S_e zależy od rzeczywiście wymienionego ciepła i temperatur zewnętrznych; S_i wyznacza się następnie z bilansu ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Opornik, przez który płynie prąd, jest utrzymywany w stałej temperaturze przez termostat. Jaki jest bilans entropii opornika w stanie ustalonym?",
      "choices": [
        "ΔS = 0, S_i > 0 i S_e = −S_i < 0.",
        "ΔS = 0, więc przemiana jest odwracalna.",
        "ΔS > 0, ponieważ efekt Joule'a wytwarza entropię."
      ],
      "explanations": [
        "Zgadza się: stan opornika się nie zmienia, więc ΔS = 0. Efekt Joule'a wytwarza entropię, którą opornik oddaje termostatowi wraz z ciepłem: przemiana jest izentropowa, ale nieodwracalna.",
        "Nieprawda: izentropowa nie znaczy odwracalna. Wytworzona entropia jest kompensowana przez entropię oddaną termostatowi, a entropia całkowita rośnie.",
        "Nieprawda: wytworzona entropia opuszcza opornik wraz z ciepłem oddanym termostatowi. Stan opornika, a więc i jego entropia, pozostaje niezmieniony."
      ]
    },
    "l6-q4": {
      "question": "Jakiego dokładnie sposobu działania zabrania sformułowanie Kelvina?",
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
      "question": "Sprężanie quasi-statyczne jest koniecznie odwracalne.",
      "choices": [
        "Prawda",
        "Fałsz"
      ],
      "explanations": [
        "Nieprawda: sprężanie quasi-statyczne może na przykład zachodzić z tarciem. Rozprasza ono energię i pozostawia ślad w gazie lub jego otoczeniu, nawet jeśli gaz pozostaje blisko równowagi.",
        "Zgadza się: quasi-statyczność nie wystarcza. Trzeba także wyeliminować dyssypację i prowadzić wymiany przy infinitezymalnych różnicach ciśnienia, temperatury lub potencjału chemicznego."
      ]
    },
    "l6-vf3": {
      "question": "Entropia układu zamkniętego nigdy nie może maleć.",
      "choices": [
        "Prawda",
        "Fałsz"
      ],
      "explanations": [
        "Nieprawda: druga zasada wymaga ΔS ≥ 0 tylko od układu izolowanego. Entropia układu zamkniętego, który oddaje ciepło, może maleć, jeśli oddana entropia przewyższa entropię przez niego wytworzoną.",
        "Zgadza się: na przykład ciało gorące stygnące w kontakcie z termostatem traci entropię. To entropia całkowita układu i jego otoczenia nie może maleć."
      ]
    },
    "l6-q7": {
      "question": "Która kolejność opisuje cykl silnikowy Carnota gazu doskonałego, gdy wszystkie jego gałęzie są odwracalne?",
      "choices": [
        "Rozprężanie izotermiczne przy T_H, odwracalne rozprężanie adiabatyczne, sprężanie izotermiczne przy T_C, a następnie odwracalne sprężanie adiabatyczne.",
        "Rozprężanie izotermiczne przy T_H, chłodzenie izochoryczne, sprężanie izotermiczne przy T_C, a następnie ogrzewanie izochoryczne.",
        "Rozprężanie izotermiczne przy T_C, sprężanie adiabatyczne, sprężanie izotermiczne przy T_H, a następnie rozprężanie adiabatyczne."
      ],
      "explanations": [
        "Zgadza się: wymiany ciepła zachodzą na dwóch odwracalnych izotermach; adiabaty łączą obie temperatury bez wymiany ciepła. Cykl silnikowy przebiega zgodnie z ruchem wskazówek zegara na wykresie (V, P).",
        "Nieprawda: izotermy cyklu Carnota są połączone adiabatami, a nie izochorami. Gałęzie izochoryczne zmieniłyby cykl i jego wymiany ciepła.",
        "Nieprawda: ta kolejność opisuje cykl Carnota przebiegający w przeciwnym kierunku. Maszyna otrzymuje wtedy pracę, aby pobierać ciepło z zimnego termostatu i oddawać je gorącemu."
      ]
    },
    "l6-q21": {
      "question": "Gaz doskonały złożony z N cząstek jest w równowadze w zbiorniku. Jakie jest prawdopodobieństwo, że w danej chwili wszystkie cząstki znajdą się w lewej połowie?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Dokładnie 0, ponieważ zabrania tego druga zasada."
      ],
      "explanations": [
        "Zgadza się: każda cząstka znajduje się po lewej stronie z prawdopodobieństwem 1/2, a cząstki gazu doskonałego są niezależne. Dla jednego mola 2^(−N) ≈ 10^(−1,8×10^23): zdarzenie jest możliwe, ale tak mało prawdopodobne, że nigdy się go nie obserwuje.",
        "Nieprawda: 1/2 to prawdopodobieństwo dla jednej cząstki. Dla N niezależnych cząstek prawdopodobieństwa się mnożą.",
        "Nieprawda: prawdopodobieństwo maleje wykładniczo z N, a nie jak 1/N.",
        "Nieprawda: mechanika dopuszcza taką konfigurację. Jej skrajna rzadkość wyjaśnia obserwowaną nieodwracalność, która ma charakter probabilistyczny."
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
      "question": "Что в этом уроке называется обратимым процессом?",
      "choices": [
        "Процесс, после которого одна лишь система может вернуться в исходное состояние, какими бы ни были изменения окружения.",
        "Процесс, который можно пройти точно в обратном направлении, включая обмены с окружением, бесконечно малым изменением ограничений.",
        "Достаточно медленный процесс.",
        "Процесс, начальное и конечное состояния которого являются равновесными."
      ],
      "explanations": [
        "Неверно: вернуть одну лишь систему всегда возможно, например повторно сжав газ после расширения Джоуля–Гей-Люссака, но тогда в окружении остаётся след этой операции.",
        "Верно: это «фильм, прокрученный назад». При возврате каждый обмен меняет знак, так что система и её окружение возвращаются в исходные состояния, не оставляя следа.",
        "Неверно: медленности недостаточно. Теплопередача, замедленная плохо проводящей стенкой, остаётся необратимой, пока температуры различаются на конечную величину.",
        "Неверно: определение касается всей последовательности состояний и возможности обратить каждый этап. Расширение Джоуля–Гей-Люссака соединяет два равновесных состояния, и оно необратимо."
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
    "l6-q19": {
      "question": "Термостат при 400 K получает теплоту Q = 800 J. Каково изменение его энтропии?",
      "choices": [
        "+2 J/K.",
        "0 J/K, потому что его температура не меняется.",
        "−2 J/K.",
        "Оно зависит от процесса, который передал ему эту теплоту."
      ],
      "explanations": [
        "Верно: конечное состояние термостата зависит только от Q, и эту теплоту можно передать ему обратимо при его собственной температуре. Второй постулат даёт ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Неверно: постоянная температура не означает постоянной энтропии. Термостат получает теплоту, и dS = δQ_rev/T_0 не равно нулю.",
        "Неверно: термостат получает теплоту, Q > 0: его энтропия возрастает.",
        "Неверно: S является функцией состояния. Важно лишь конечное состояние термостата, которое зависит только от Q, каким бы способом ни была передана теплота."
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
        "Примерно 917 J.",
        "500 J.",
        "Невозможно определить, не зная рабочего тела."
      ],
      "explanations": [
        "Неверно: нельзя за цикл превратить в работу всю теплоту, полученную от горячего термостата. Второе начало требует отдать её часть холодному термостату, даже если ΔU = 0.",
        "Неверно: в этом расчёте использованы температуры в градусах Цельсия, 327 °C и 27 °C. КПД Карно выражается через абсолютные температуры: 1 − 300/600 = 1/2.",
        "Верно: максимальный КПД равен КПД Карно, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Поэтому |W|_max = η_max Q_H = 500 J. Эту величину достигает обратимая машина, работающая между двумя термостатами.",
        "Неверно: температур двух термостатов и полученной теплоты достаточно для вычисления максимальной работы: |W|_max = Q_H (1 − T_C/T_H). Знать рабочее тело или устройство двигателя не требуется."
      ]
    },
    "l6-q8": {
      "question": "Двигатель, работающий с двумя термостатами, за каждый цикл получает Q_H = 1 000 J от термостата при 500 K и отдаёт 700 J термостату при 300 K. Что говорит второе начало?",
      "choices": [
        "Такой двигатель разрешён и необратим: ΔS_tot ≈ +0,33 J/K за цикл.",
        "Такой двигатель невозможен, потому что он отдаёт теплоту холодному термостату.",
        "Такой двигатель обратим, потому что его рабочее тело возвращается в исходное состояние в каждом цикле.",
        "Такой двигатель невозможен, потому что Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Верно: за цикл энтропия рабочего тела не меняется. Термостаты получают −1 000 J и +700 J, откуда ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. КПД 0,30 остаётся ниже предела Карно 1 − 300/500 = 0,40.",
        "Неверно: отдача теплоты холодному термостату, напротив, необходима двигателю с двумя термостатами. Именно формулировка Кельвина запрещает обходиться без неё.",
        "Неверно: возврат рабочего тела в исходное состояние обнуляет лишь его собственное изменение энтропии. Суммарная энтропия термостатов возрастает: цикл необратим.",
        "Неверно: по соглашениям курса Q_H = +1 000 J и Q_C = −700 J, откуда Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. Неравенство Клаузиуса выполняется."
      ]
    },
    "l6-q9": {
      "question": "Два тела с одинаковой теплоёмкостью C = 100 J/K при температурах 400 K и 200 K приводят в контакт в изолированном сосуде при постоянном объёме. Каково изменение полной энтропии?",
      "choices": [
        "Примерно +11,8 J/K.",
        "0 J/K, потому что теплота, отданная горячим телом, равна теплоте, полученной холодным.",
        "Примерно −28,8 J/K, потому что горячее тело остывает.",
        "Примерно +25 J/K, то есть Q/(200 K) − Q/(400 K) при Q = 10 000 J."
      ],
      "explanations": [
        "Верно: конечная температура T_f = 300 K. По фиктивным обратимым путям ΔS_1 = C ln(300/400) ≈ −28,8 J/K и ΔS_2 = C ln(300/200) ≈ +40,5 J/K, откуда ΔS_tot ≈ +11,8 J/K > 0: контакт необратим.",
        "Неверно: энергия сохраняется, но изменения энтропии не компенсируют друг друга, потому что теплота передаётся при разных температурах.",
        "Неверно: это лишь изменение энтропии горячего тела. Холодное тело получает больше энтропии, чем теряет горячее.",
        "Неверно: этот расчёт предполагает, что обе температуры остаются постоянными, как у двух термостатов. Здесь каждая температура меняется в ходе обмена: нужно проинтегрировать C dT/T для каждого тела."
      ]
    },
    "l6-q12": {
      "question": "Необратимый процесс соединяет два равновесных состояния A и B, но его промежуточные состояния далеки от равновесия. Какое утверждение верно?",
      "choices": [
        "Изменение энтропии ΔS равно интегралу от δQ_actual/T_ext по реальному пути.",
        "Изменение энтропии ΔS можно вычислить по обратимому пути между A и B, тогда как S_e и S_i зависят от реального процесса.",
        "Состояния A и B сами по себе определяют энтропию обмена S_e и произведённую энтропию S_i."
      ],
      "explanations": [
        "Неверно: этот интеграл даёт S_e, энтропию обмена. Баланс имеет вид ΔS = S_e + S_i: фактически переданной теплоты недостаточно для вычисления ΔS без учёта произведённой энтропии.",
        "Верно: S является функцией состояния, поэтому ΔS = ∫ δQ_rev/T можно вычислить по обратимому пути между теми же состояниями. Затем возвращаются к реальным обменам, чтобы определить S_e = ∫ δQ_actual/T_ext и S_i = ΔS − S_e.",
        "Неверно: состояния A и B задают ΔS, но не её разложение на энтропию обмена и произведённую энтропию. S_e зависит от фактически переданной теплоты и внешних температур; затем S_i определяется из баланса ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Резистор, по которому течёт ток, поддерживается термостатом при постоянной температуре. Каков баланс энтропии резистора в стационарном режиме?",
      "choices": [
        "ΔS = 0, S_i > 0 и S_e = −S_i < 0.",
        "ΔS = 0, поэтому процесс обратим.",
        "ΔS > 0, потому что джоулев нагрев производит энтропию."
      ],
      "explanations": [
        "Верно: состояние резистора не меняется, поэтому ΔS = 0. Джоулев нагрев производит энтропию, которую резистор отдаёт термостату вместе с теплотой: процесс изоэнтропийный, но необратимый.",
        "Неверно: изоэнтропийный не значит обратимый. Произведённая энтропия компенсируется энтропией, отданной термостату, а полная энтропия возрастает.",
        "Неверно: произведённая энтропия покидает резистор вместе с теплотой, отданной термостату. Состояние резистора, а значит и его энтропия, остаётся неизменным."
      ]
    },
    "l6-q4": {
      "question": "Какой именно режим работы запрещает формулировка Кельвина?",
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
      "question": "Квазистатическое сжатие обязательно обратимо.",
      "choices": [
        "Верно",
        "Неверно"
      ],
      "explanations": [
        "Неверно: квазистатическое сжатие может, например, происходить с трением. Трение рассеивает энергию и оставляет след в газе или его окружении, даже если газ остаётся близким к равновесию.",
        "Верно: квазистатичности недостаточно. Нужно также устранить диссипацию и проводить обмены при бесконечно малых разностях давления, температуры или химического потенциала."
      ]
    },
    "l6-vf3": {
      "question": "Энтропия закрытой системы никогда не может уменьшаться.",
      "choices": [
        "Верно",
        "Неверно"
      ],
      "explanations": [
        "Неверно: второе начало требует ΔS ≥ 0 только для изолированной системы. Энтропия закрытой системы, отдающей теплоту, может уменьшаться, если отданная энтропия превышает произведённую.",
        "Верно: например, горячее тело, остывающее в контакте с термостатом, теряет энтропию. Уменьшаться не может полная энтропия системы и её окружения."
      ]
    },
    "l6-q7": {
      "question": "Какая последовательность описывает двигательный цикл Карно для идеального газа, если все его участки обратимы?",
      "choices": [
        "Изотермическое расширение при T_H, обратимое адиабатическое расширение, изотермическое сжатие при T_C, затем обратимое адиабатическое сжатие.",
        "Изотермическое расширение при T_H, изохорическое охлаждение, изотермическое сжатие при T_C, затем изохорическое нагревание.",
        "Изотермическое расширение при T_C, адиабатическое сжатие, изотермическое сжатие при T_H, затем адиабатическое расширение."
      ],
      "explanations": [
        "Верно: теплообмены происходят на двух обратимых изотермах; адиабаты соединяют две температуры без теплообмена. Двигательный цикл проходится по часовой стрелке на диаграмме (V, P).",
        "Неверно: изотермы цикла Карно соединяются адиабатами, а не изохорами. Изохорические участки изменили бы цикл и его теплообмены.",
        "Неверно: эта последовательность описывает цикл Карно в обратном направлении. Тогда машина получает работу, чтобы забирать теплоту у холодного термостата и отдавать её горячему."
      ]
    },
    "l6-q21": {
      "question": "Идеальный газ из N частиц находится в равновесии в сосуде. Какова вероятность обнаружить в данный момент все частицы в левой половине?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Ровно 0, потому что это запрещает второе начало."
      ],
      "explanations": [
        "Верно: каждая частица находится слева с вероятностью 1/2, а частицы идеального газа независимы. Для одного моля 2^(−N) ≈ 10^(−1,8×10^23): событие возможно, но настолько маловероятно, что его никогда не наблюдают.",
        "Неверно: 1/2 — вероятность для одной частицы. Для N независимых частиц вероятности перемножаются.",
        "Неверно: вероятность убывает экспоненциально с N, а не как 1/N.",
        "Неверно: механика допускает такую конфигурацию. Её крайняя редкость объясняет наблюдаемую необратимость, которая имеет вероятностную природу."
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
      "question": "在本课中，什么是可逆过程？",
      "choices": [
        "过程结束后，仅系统自身能够恢复初态，而不论外界发生何种变化。",
        "通过约束的无穷小改变，能够沿完全相反的方向进行的过程，包括与外界的交换在内。",
        "足够缓慢的过程。",
        "初态和终态均为平衡态的过程。"
      ],
      "explanations": [
        "错误：仅让系统自身恢复总是可以做到的，例如在焦耳–盖吕萨克膨胀后重新压缩气体，但外界会因此留下这一操作的痕迹。",
        "正确：这就是“倒放的影片”。返回时每一项交换都改变符号，因此系统及其外界都恢复初态，不留下任何痕迹。",
        "错误：缓慢并不充分。经导热性差的壁减缓的传热，只要温差为有限值，仍是不可逆的。",
        "错误：定义涉及整个状态序列以及逆转每一步的可能性。焦耳–盖吕萨克膨胀连接两个平衡态，但它是不可逆的。"
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
    "l6-q19": {
      "question": "一个温度为 400 K 的热库吸收热量 Q = 800 J。它的熵变是多少？",
      "choices": [
        "+2 J/K。",
        "0 J/K，因为它的温度不变。",
        "−2 J/K。",
        "取决于向它提供这些热量的过程。"
      ],
      "explanations": [
        "正确：热库的终态只取决于 Q，而这些热量可以在热库自身温度下以可逆方式提供给它。第二条公设给出 ΔS = Q/T_0 = 800/400 = +2 J/K。",
        "错误：温度不变并不意味着熵不变。热库吸收了热量，dS = δQ_rev/T_0 不为零。",
        "错误：热库吸收热量，Q > 0：它的熵增加。",
        "错误：S 是状态函数。只有热库的终态才重要，而终态只取决于 Q，与热量以何种方式提供给它无关。"
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
        "约 917 J。",
        "500 J。",
        "不知道工质就无法确定。"
      ],
      "explanations": [
        "错误：一个循环中，不可能把从高温热库吸收的全部热量都转化为功。即使 ΔU = 0，第二定律仍要求向低温热库放出一部分热量。",
        "错误：该计算使用了摄氏温度 327 °C 和 27 °C。卡诺效率须用热力学温度表示：1 − 300/600 = 1/2。",
        "正确：最大效率是卡诺效率，η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2。因此 |W|_max = η_max Q_H = 500 J。可逆双热源机器可达到这一数值。",
        "错误：两个热库的温度和吸收的热量足以确定最大功：|W|_max = Q_H (1 − T_C/T_H)。不需要知道工质或动力机的具体细节。"
      ]
    },
    "l6-q8": {
      "question": "一个双热源动力机在每个循环中从 500 K 的热库吸收 Q_H = 1 000 J，并向 300 K 的热库放出 700 J。第二定律对此有何结论？",
      "choices": [
        "该动力机是允许的，且不可逆：每个循环 ΔS_tot ≈ +0.33 J/K。",
        "该动力机不可能实现，因为它向低温热库放热。",
        "该动力机是可逆的，因为其工质在每个循环中都恢复初态。",
        "该动力机不可能实现，因为 Q_H/T_H + Q_C/T_C > 0。"
      ],
      "explanations": [
        "正确：在一个循环中，工质的熵不变。两个热库分别得到 −1 000 J 和 +700 J，因此 ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0。效率 0.30 低于卡诺上限 1 − 300/500 = 0.40。",
        "错误：恰恰相反，向低温热库放热是双热源动力机必不可少的。开尔文表述禁止的正是省去这一放热。",
        "错误：工质恢复初态只消去了它自身的熵变。两个热库的熵总体增加：该循环不可逆。",
        "错误：按本课程的约定，Q_H = +1 000 J，Q_C = −700 J，因此 Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0。克劳修斯不等式得到满足。"
      ]
    },
    "l6-q9": {
      "question": "两个热容相同（C = 100 J/K）、温度分别为 400 K 和 200 K 的物体，在体积固定的孤立容器内相接触。总熵变是多少？",
      "choices": [
        "约 +11.8 J/K。",
        "0 J/K，因为高温物体放出的热量等于低温物体吸收的热量。",
        "约 −28.8 J/K，因为高温物体冷却了。",
        "约 +25 J/K，即 Q/(200 K) − Q/(400 K)，其中 Q = 10 000 J。"
      ],
      "explanations": [
        "正确：终温为 T_f = 300 K。沿虚拟的可逆路径，ΔS_1 = C ln(300/400) ≈ −28.8 J/K，ΔS_2 = C ln(300/200) ≈ +40.5 J/K，因此 ΔS_tot ≈ +11.8 J/K > 0：这一接触是不可逆的。",
        "错误：能量守恒，但熵变并不相互抵消，因为热量是在不同温度下交换的。",
        "错误：这只是高温物体的熵变。低温物体获得的熵多于高温物体失去的熵。",
        "错误：该计算假设两个温度都保持不变，如同两个热库。这里每个温度在交换过程中都在变化：必须对每个物体积分 C dT/T。"
      ]
    },
    "l6-q12": {
      "question": "一个不可逆过程连接平衡态 A 和 B，但中间状态远离平衡。哪个说法正确？",
      "choices": [
        "熵变 ΔS 等于实际路径上 δQ_actual/T_ext 的积分。",
        "熵变 ΔS 可以沿 A 与 B 之间的可逆路径计算，而 S_e 和 S_i 取决于实际过程。",
        "仅凭状态 A 和 B 就能确定交换熵 S_e 和熵产生量 S_i。"
      ],
      "explanations": [
        "错误：该积分给出交换熵 S_e。收支式为 ΔS = S_e + S_i；不考虑熵产生量，仅凭实际交换的热量不足以计算 ΔS。",
        "正确：S 是状态函数，因此可沿连接相同状态的可逆路径计算 ΔS = ∫ δQ_rev/T。随后回到实际交换，确定 S_e = ∫ δQ_actual/T_ext 和 S_i = ΔS − S_e。",
        "错误：状态 A 和 B 确定 ΔS，但不能确定它如何分为交换熵与熵产生量。S_e 取决于实际交换的热量及外界温度，再由 ΔS = S_e + S_i 确定 S_i。"
      ]
    },
    "l6-q20": {
      "question": "一个通有电流的电阻由热库维持在恒定温度。在稳态下，电阻的熵收支如何？",
      "choices": [
        "ΔS = 0，S_i > 0，S_e = −S_i < 0。",
        "ΔS = 0，因此该过程可逆。",
        "ΔS > 0，因为焦耳效应产生熵。"
      ],
      "explanations": [
        "正确：电阻的状态不变，因此 ΔS = 0。焦耳效应产生熵，电阻把这些熵连同热量一起交给热库：该过程是等熵的，但不可逆。",
        "错误：等熵并不意味着可逆。产生的熵被交给热库的熵所抵消，而总熵增加。",
        "错误：产生的熵随交给热库的热量离开电阻。电阻的状态及其熵都保持不变。"
      ]
    },
    "l6-q4": {
      "question": "开尔文表述具体禁止哪种运行方式？",
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
      "question": "准静态压缩必然是可逆的。",
      "choices": [
        "对",
        "错"
      ],
      "explanations": [
        "错误：例如，准静态压缩可以伴随摩擦。即使气体保持接近平衡，摩擦仍会耗散能量，并在气体或外界中留下痕迹。",
        "正确：准静态性并不充分。还须消除耗散，并通过无穷小的压强差、温差或化学势差进行交换。"
      ]
    },
    "l6-vf3": {
      "question": "封闭系统的熵永远不会减少。",
      "choices": [
        "对",
        "错"
      ],
      "explanations": [
        "错误：第二定律只对孤立系统规定 ΔS ≥ 0。放热的封闭系统，若放出的熵超过其产生的熵，熵就会减少。",
        "正确：例如，与热库接触而冷却的高温物体会失去熵。不能减少的是系统及其外界的总熵。"
      ]
    },
    "l6-q7": {
      "question": "哪一序列描述了理想气体的卡诺动力循环，且各段均可逆？",
      "choices": [
        "温度为 T_H 的等温膨胀、可逆绝热膨胀、温度为 T_C 的等温压缩，最后是可逆绝热压缩。",
        "温度为 T_H 的等温膨胀、等容冷却、温度为 T_C 的等温压缩，最后是等容加热。",
        "温度为 T_C 的等温膨胀、绝热压缩、温度为 T_H 的等温压缩，最后是绝热膨胀。"
      ],
      "explanations": [
        "正确：热交换发生在两个可逆等温过程中；绝热过程连接两种温度，期间没有热交换。在 (V, P) 图中，动力循环沿顺时针方向进行。",
        "错误：卡诺循环中连接两个等温过程的是绝热过程，而非等容过程。换成等容段会改变循环及其热交换。",
        "错误：该序列描述反向进行的卡诺循环。此时机器接受功，从低温热库吸热，向高温热库放热。"
      ]
    },
    "l6-q21": {
      "question": "由 N 个粒子组成的理想气体在容器内处于平衡。在某一时刻发现所有粒子都位于左半部分的概率是多少？",
      "choices": [
        "2^(−N)。",
        "1/2。",
        "1/N。",
        "严格为 0，因为第二定律禁止这种情况。"
      ],
      "explanations": [
        "正确：每个粒子位于左侧的概率为 1/2，且理想气体的粒子相互独立。对于 1 摩尔气体，2^(−N) ≈ 10^(−1.8×10^23)：这一事件是可能的，但极不可能，因而从未被观察到。",
        "错误：1/2 是单个粒子的概率。对于 N 个独立粒子，各概率相乘。",
        "错误：概率随 N 指数减小，而不是按 1/N 减小。",
        "错误：力学允许这种构型。它的极端稀有解释了所观察到的不可逆性，这种不可逆性本质上是概率性的。"
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
      "question": "この講義で、可逆変化とは何か。",
      "choices": [
        "外界にどのような変化が生じても、系だけは初期状態に戻ることができる変化。",
        "拘束条件の無限小の変更によって、外界との交換も含めて、正確に逆向きにたどることのできる変化。",
        "十分にゆっくりとした変化。",
        "始状態と終状態がともに平衡状態である変化。"
      ],
      "explanations": [
        "誤り。系だけを元に戻すことは常に可能である。例えばジュール–ゲイ＝リュサック膨張の後に気体を再圧縮すればよいが、そのとき外界にはこの操作の痕跡が残る。",
        "正しい。これは「逆再生した映像」である。帰り道ではそれぞれの交換の符号が反転するので、系と外界は痕跡を残さずに初期状態に戻る。",
        "誤り。遅さだけでは十分でない。熱を伝えにくい壁によって遅くした熱移動も、温度差が有限である限り不可逆である。",
        "誤り。定義は状態の系列全体と、各段階を逆転できるかどうかに関わる。ジュール–ゲイ＝リュサック膨張は二つの平衡状態を結ぶが、不可逆である。"
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
    "l6-q19": {
      "question": "400 K の熱浴が熱量 Q = 800 J を受け取る。そのエントロピー変化はいくらか。",
      "choices": [
        "+2 J/K。",
        "0 J/K。温度が変化しないからである。",
        "−2 J/K。",
        "この熱を供給した変化に依存する。"
      ],
      "explanations": [
        "正しい。熱浴の終状態は Q だけで決まり、この熱は熱浴自身の温度で可逆的に供給することができる。第二の公準より ΔS = Q/T_0 = 800/400 = +2 J/K となる。",
        "誤り。温度が一定でもエントロピーが一定とは限らない。熱浴は熱を受け取っており、dS = δQ_rev/T_0 は 0 でない。",
        "誤り。熱浴は熱を受け取り、Q > 0 である。そのエントロピーは増加する。",
        "誤り。S は状態関数である。重要なのは熱浴の終状態だけであり、それは熱の供給のしかたによらず Q だけで決まる。"
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
        "約 917 J。",
        "500 J。",
        "作動流体がわからなければ求められない。"
      ],
      "explanations": [
        "誤り。1 サイクルで高温熱浴から受け取った熱をすべて仕事には変換できない。ΔU = 0 でも、第二法則はその一部を低温熱浴へ渡すことを要求する。",
        "誤り。この計算は摂氏温度 327 °C と 27 °C を使っている。カルノー効率は絶対温度で表され、1 − 300/600 = 1/2 である。",
        "正しい。最大効率はカルノー効率 η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2。よって |W|_max = η_max Q_H = 500 J となる。可逆な二熱源機関がこの値を達成する。",
        "誤り。二つの熱浴の温度と受け取る熱量だけで、最大仕事 |W|_max = Q_H (1 − T_C/T_H) を計算できる。流体や機関の詳細は不要である。"
      ]
    },
    "l6-q8": {
      "question": "二熱源動力機関が、各サイクルで 500 K の熱浴から Q_H = 1 000 J を受け取り、300 K の熱浴へ 700 J を渡す。第二法則から何が言えるか。",
      "choices": [
        "この機関は許され、不可逆である。1 サイクルあたり ΔS_tot ≈ +0.33 J/K。",
        "この機関は不可能である。低温熱浴へ熱を渡しているからである。",
        "この機関は可逆である。作動流体が各サイクルで初期状態に戻るからである。",
        "この機関は不可能である。Q_H/T_H + Q_C/T_C > 0 だからである。"
      ],
      "explanations": [
        "正しい。1 サイクルでは作動流体のエントロピーは変化しない。熱浴はそれぞれ −1 000 J と +700 J を受け取るので、ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0 となる。効率 0.30 はカルノーの限界 1 − 300/500 = 0.40 を下回る。",
        "誤り。低温熱浴へ熱を渡すことは、むしろ二熱源動力機関に不可欠である。ケルビンの表現が禁じるのは、それを省くことである。",
        "誤り。作動流体が初期状態に戻ることで打ち消されるのは、流体自身のエントロピー変化だけである。熱浴のエントロピーは全体として増加するので、このサイクルは不可逆である。",
        "誤り。本講義の規約では Q_H = +1 000 J、Q_C = −700 J なので、Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0 となる。クラウジウスの不等式は満たされている。"
      ]
    },
    "l6-q9": {
      "question": "熱容量が等しく C = 100 J/K で、温度がそれぞれ 400 K と 200 K の二つの物体を、体積一定の孤立した容器内で接触させる。全エントロピー変化はいくらか。",
      "choices": [
        "約 +11.8 J/K。",
        "0 J/K。高温物体が放出する熱は低温物体が受け取る熱に等しいからである。",
        "約 −28.8 J/K。高温物体が冷えるからである。",
        "約 +25 J/K。すなわち Q = 10 000 J として Q/(200 K) − Q/(400 K)。"
      ],
      "explanations": [
        "正しい。終温度は T_f = 300 K である。仮想的な可逆経路で ΔS_1 = C ln(300/400) ≈ −28.8 J/K、ΔS_2 = C ln(300/200) ≈ +40.5 J/K となるので、ΔS_tot ≈ +11.8 J/K > 0 であり、この接触は不可逆である。",
        "誤り。エネルギーは保存されるが、熱が異なる温度で交換されるため、エントロピー変化は打ち消し合わない。",
        "誤り。これは高温物体のエントロピー変化にすぎない。低温物体が得るエントロピーは、高温物体が失うエントロピーより大きい。",
        "誤り。この計算は、二つの熱浴の場合のように両方の温度が一定のままであると仮定している。ここでは交換の間にそれぞれの温度が変化するので、各物体について C dT/T を積分する必要がある。"
      ]
    },
    "l6-q12": {
      "question": "不可逆な変化が二つの平衡状態 A、B を結ぶが、中間状態は平衡から遠い。正しい記述はどれか。",
      "choices": [
        "エントロピー変化 ΔS は実際の経路の δQ_actual/T_ext の積分である。",
        "ΔS は A、B 間の可逆な経路で計算できる一方、S_e と S_i は実際の過程に依存する。",
        "状態 A、B だけで交換エントロピー S_e と生成エントロピー S_i が決まる。"
      ],
      "explanations": [
        "誤り。この積分は交換エントロピー S_e を与える。収支は ΔS = S_e + S_i なので、生成エントロピーを考慮せずに実際の交換熱だけから ΔS は求められない。",
        "正しい。S は状態関数なので、同じ状態を結ぶ可逆な経路で ΔS = ∫ δQ_rev/T を計算できる。次に実際の交換に戻り、S_e = ∫ δQ_actual/T_ext と S_i = ΔS − S_e を求める。",
        "誤り。状態 A、B は ΔS を決めるが、交換エントロピーと生成エントロピーへの分解は決めない。S_e は実際の交換熱と外界温度に依存し、S_i は収支 ΔS = S_e + S_i から求める。"
      ]
    },
    "l6-q20": {
      "question": "電流の流れる抵抗が、熱浴によって一定温度に保たれている。定常状態において、抵抗のエントロピー収支はどうなるか。",
      "choices": [
        "ΔS = 0、S_i > 0、S_e = −S_i < 0。",
        "ΔS = 0 なので、この変化は可逆である。",
        "ジュール熱がエントロピーを生成するので、ΔS > 0。"
      ],
      "explanations": [
        "正しい。抵抗の状態は変化しないので ΔS = 0 である。ジュール熱はエントロピーを生成し、抵抗はそれを熱とともに熱浴へ渡す。この変化は等エントロピーだが、不可逆である。",
        "誤り。等エントロピーは可逆を意味しない。生成エントロピーは熱浴へ渡されるエントロピーで相殺され、全エントロピーは増加する。",
        "誤り。生成エントロピーは、熱浴へ渡される熱とともに抵抗から出ていく。抵抗の状態、したがってそのエントロピーは変わらない。"
      ]
    },
    "l6-q4": {
      "question": "ケルビンの表現が正確に禁じる動作はどれか。",
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
      "question": "準静的な圧縮は必ず可逆である。",
      "choices": [
        "正しい",
        "誤り"
      ],
      "explanations": [
        "誤り。例えば準静的な圧縮でも摩擦を伴いうる。気体が平衡に近くても、摩擦はエネルギーを散逸させ、気体や外界に痕跡を残す。",
        "正しい。準静的であるだけでは十分でない。散逸も除き、無限小の圧力差、温度差、化学ポテンシャル差で交換を進める必要がある。"
      ]
    },
    "l6-vf3": {
      "question": "閉じた系のエントロピーは決して減少しない。",
      "choices": [
        "正しい",
        "誤り"
      ],
      "explanations": [
        "誤り。第二法則が ΔS ≥ 0 を課すのは孤立系に対してだけである。熱を放出する閉じた系は、放出するエントロピーが生成するエントロピーを上回れば、エントロピーが減少しうる。",
        "正しい。例えば、熱浴と接触して冷える高温物体はエントロピーを失う。減少しえないのは、系と外界を合わせた全エントロピーである。"
      ]
    },
    "l6-q7": {
      "question": "すべての枝が可逆な、理想気体のカルノー動力サイクルを表す順序はどれか。",
      "choices": [
        "T_H での等温膨張、可逆断熱膨張、T_C での等温圧縮、可逆断熱圧縮。",
        "T_H での等温膨張、定積冷却、T_C での等温圧縮、定積加熱。",
        "T_C での等温膨張、断熱圧縮、T_H での等温圧縮、断熱膨張。"
      ],
      "explanations": [
        "正しい。熱交換は可逆な二つの等温変化で起こり、断熱変化は熱交換なしに二つの温度を結ぶ。(V, P) 線図では動力サイクルを時計回りにたどる。",
        "誤り。カルノーサイクルの等温変化を結ぶのは断熱変化であり、定積変化ではない。定積の枝に変えるとサイクルと熱交換が変わる。",
        "誤り。この順序はカルノーサイクルの逆向きに対応する。機関は仕事を受け取り、低温熱浴から熱を取り出して高温熱浴へ渡す。"
      ]
    },
    "l6-q21": {
      "question": "N 個の粒子からなる理想気体が容器内で平衡にある。ある瞬間に、すべての粒子が左半分に見いだされる確率はいくらか。",
      "choices": [
        "2^(−N)。",
        "1/2。",
        "1/N。",
        "第二法則が禁じるので、厳密に 0。"
      ],
      "explanations": [
        "正しい。各粒子が左側にある確率は 1/2 であり、理想気体の粒子は互いに独立である。1 モルでは 2^(−N) ≈ 10^(−1.8×10^23) となる。この事象は起こりうるが、あまりにも起こりにくいため決して観測されない。",
        "誤り。1/2 は粒子 1 個に対する確率である。独立な N 個の粒子では、確率は掛け合わされる。",
        "誤り。確率は 1/N のようにではなく、N とともに指数関数的に減少する。",
        "誤り。力学はこの配置を許す。その極端なまれさが、観測される不可逆性を説明する。この不可逆性は確率的な性質のものである。"
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
      "question": "이 강의에서 가역 과정이란 무엇인가?",
      "choices": [
        "주위가 어떻게 변했든, 끝난 뒤 계 자체만 처음 상태로 돌아갈 수 있는 과정.",
        "구속 조건의 무한소 변화로, 주위와의 교환까지 포함하여 정확히 반대 방향으로 진행할 수 있는 과정.",
        "충분히 느린 과정.",
        "처음 상태와 나중 상태가 평형 상태인 과정."
      ],
      "explanations": [
        "틀리다. 계 자체만 되돌리는 것은 언제나 가능하다. 예를 들어 줄–게이뤼삭 팽창 뒤 기체를 다시 압축하면 되지만, 그러면 주위에 그 조작의 흔적이 남는다.",
        "맞다. 이는 '거꾸로 돌린 영화'이다. 되돌아갈 때 모든 교환의 부호가 바뀌므로 계와 주위가 흔적 없이 처음 상태로 돌아간다.",
        "틀리다. 느린 것만으로는 충분하지 않다. 전도성이 낮은 벽으로 늦춘 열전달도 온도가 유한한 양만큼 다른 동안에는 비가역이다.",
        "틀리다. 정의는 상태들의 연속 전체와 각 단계를 반전할 수 있는지에 관한 것이다. 줄–게이뤼삭 팽창은 두 평형 상태를 연결하지만 비가역이다."
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
    "l6-q19": {
      "question": "400 K의 열원이 열 Q = 800 J를 받는다. 이 열원의 엔트로피 변화는 얼마인가?",
      "choices": [
        "+2 J/K.",
        "0 J/K. 온도가 변하지 않기 때문이다.",
        "−2 J/K.",
        "이 열을 공급한 과정에 따라 달라진다."
      ],
      "explanations": [
        "맞다. 열원의 나중 상태는 Q에만 의존하며, 이 열은 열원 자신의 온도에서 가역적으로 공급할 수 있다. 두 번째 공준에 따라 ΔS = Q/T_0 = 800/400 = +2 J/K이다.",
        "틀리다. 온도가 일정하다고 엔트로피가 일정한 것은 아니다. 열원은 열을 받으며 dS = δQ_rev/T_0는 0이 아니다.",
        "틀리다. 열원은 열을 받으므로 Q > 0이고, 엔트로피는 증가한다.",
        "틀리다. S는 상태 함수이다. 열이 어떤 방식으로 공급되었든, 중요한 것은 Q에만 의존하는 열원의 나중 상태뿐이다."
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
        "약 917 J.",
        "500 J.",
        "작동 유체를 모르면 결정할 수 없다."
      ],
      "explanations": [
        "틀리다. 한 사이클에서 고온 열원으로부터 받은 열을 전부 일로 바꿀 수 없다. ΔU = 0이어도 제2법칙은 그 일부를 저온 열원에 내놓도록 요구한다.",
        "틀리다. 이 계산은 섭씨온도 327 °C와 27 °C를 사용한다. 카르노 효율은 절대 온도로 나타내며, 1 − 300/600 = 1/2이다.",
        "맞다. 최대 효율은 카르노 효율 η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2이다. 따라서 |W|_max = η_max Q_H = 500 J이다. 가역인 두 열원 기관이 이 값을 달성한다.",
        "틀리다. 두 열원의 온도와 받은 열량만으로 최대 일 |W|_max = Q_H (1 − T_C/T_H)를 계산할 수 있다. 유체나 기관의 세부 사항은 필요하지 않다."
      ]
    },
    "l6-q8": {
      "question": "두 열원 동력 기관이 매 사이클 500 K 열원에서 Q_H = 1 000 J를 받고 300 K 열원에 700 J를 내놓는다. 제2법칙은 무엇을 말하는가?",
      "choices": [
        "이 기관은 허용되며 비가역이다. 사이클당 ΔS_tot ≈ +0.33 J/K이다.",
        "이 기관은 저온 열원에 열을 내놓으므로 불가능하다.",
        "이 기관은 작동 유체가 매 사이클 처음 상태로 돌아오므로 가역이다.",
        "Q_H/T_H + Q_C/T_C > 0이므로 이 기관은 불가능하다."
      ],
      "explanations": [
        "맞다. 한 사이클 동안 유체의 엔트로피는 변하지 않는다. 열원들은 −1 000 J와 +700 J를 받으므로 ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0이다. 효율 0.30은 카르노 한계 1 − 300/500 = 0.40보다 작다.",
        "틀리다. 저온 열원에 열을 내놓는 것은 오히려 두 열원 동력 기관에 필수적이다. 이를 생략하는 것을 금지하는 것이 켈빈 진술이다.",
        "틀리다. 유체가 처음 상태로 돌아오면 유체 자신의 엔트로피 변화만 0이 된다. 열원들의 엔트로피는 전체적으로 증가하므로 사이클은 비가역이다.",
        "틀리다. 강의의 부호 약속에서 Q_H = +1 000 J, Q_C = −700 J이므로 Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0이다. 클라우지우스 부등식이 만족된다."
      ]
    },
    "l6-q9": {
      "question": "열용량이 C = 100 J/K로 같고 온도가 400 K와 200 K인 두 물체를 부피가 고정된 고립된 용기 안에서 접촉시킨다. 전체 엔트로피 변화는 얼마인가?",
      "choices": [
        "약 +11.8 J/K.",
        "0 J/K. 고온 물체가 내놓은 열이 저온 물체가 받은 열과 같기 때문이다.",
        "약 −28.8 J/K. 고온 물체가 식기 때문이다.",
        "약 +25 J/K. 즉 Q = 10 000 J일 때 Q/(200 K) − Q/(400 K)이다."
      ],
      "explanations": [
        "맞다. 나중 온도는 T_f = 300 K이다. 가상의 가역 경로에서 ΔS_1 = C ln(300/400) ≈ −28.8 J/K, ΔS_2 = C ln(300/200) ≈ +40.5 J/K이므로 ΔS_tot ≈ +11.8 J/K > 0이다. 이 접촉은 비가역이다.",
        "틀리다. 에너지는 보존되지만, 열이 서로 다른 온도에서 교환되므로 엔트로피 변화는 상쇄되지 않는다.",
        "틀리다. 이는 고온 물체의 엔트로피 변화일 뿐이다. 저온 물체가 얻는 엔트로피는 고온 물체가 잃는 엔트로피보다 크다.",
        "틀리다. 이 계산은 두 열원처럼 두 온도가 고정되어 있다고 가정한다. 여기서는 교환 중에 각 온도가 변하므로 각 물체에 대해 C dT/T를 적분해야 한다."
      ]
    },
    "l6-q12": {
      "question": "비가역 과정이 두 평형 상태 A와 B를 연결하지만 중간 상태는 평형에서 멀리 떨어져 있다. 올바른 진술은 무엇인가?",
      "choices": [
        "엔트로피 변화 ΔS는 실제 경로에서 δQ_actual/T_ext의 적분이다.",
        "ΔS는 A와 B 사이의 가역인 경로에서 계산할 수 있지만 S_e와 S_i는 실제 과정에 의존한다.",
        "상태 A와 B만으로 교환 엔트로피 S_e와 생성 엔트로피 S_i가 정해진다."
      ],
      "explanations": [
        "틀리다. 이 적분은 교환 엔트로피 S_e를 준다. 수지는 ΔS = S_e + S_i이다. 생성 엔트로피를 고려하지 않으면 실제로 교환한 열만으로 ΔS를 계산할 수 없다.",
        "맞다. S는 상태 함수이므로 같은 상태를 연결하는 가역인 경로에서 ΔS = ∫ δQ_rev/T를 계산할 수 있다. 이후 실제 교환으로 돌아가 S_e = ∫ δQ_actual/T_ext와 S_i = ΔS − S_e를 결정한다.",
        "틀리다. A와 B는 ΔS를 정하지만 교환 엔트로피와 생성 엔트로피로의 분해는 정하지 않는다. S_e는 실제 교환 열과 외부 온도에 의존하며, S_i는 수지 ΔS = S_e + S_i에서 구한다."
      ]
    },
    "l6-q20": {
      "question": "전류가 흐르는 저항이 열원에 의해 일정한 온도로 유지된다. 정상 상태에서 저항의 엔트로피 수지는 어떠한가?",
      "choices": [
        "ΔS = 0, S_i > 0, S_e = −S_i < 0.",
        "ΔS = 0이므로 과정은 가역이다.",
        "줄 효과가 엔트로피를 생성하므로 ΔS > 0이다."
      ],
      "explanations": [
        "맞다. 저항의 상태가 변하지 않으므로 ΔS = 0이다. 줄 효과가 생성한 엔트로피를 저항은 열과 함께 열원에 내놓는다. 이 과정은 등엔트로피 과정이지만 비가역이다.",
        "틀리다. 등엔트로피가 가역을 뜻하지는 않는다. 생성된 엔트로피는 열원에 내놓은 엔트로피로 상쇄되며, 전체 엔트로피는 증가한다.",
        "틀리다. 생성된 엔트로피는 열원에 내놓는 열과 함께 저항을 떠난다. 저항의 상태, 따라서 그 엔트로피는 변하지 않는다."
      ]
    },
    "l6-q4": {
      "question": "켈빈 진술이 정확히 금지하는 작동은 무엇인가?",
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
      "question": "준정적 압축은 반드시 가역이다.",
      "choices": [
        "참",
        "거짓"
      ],
      "explanations": [
        "틀리다. 예를 들어 준정적 압축도 마찰을 동반할 수 있다. 기체가 평형에 가까워도 마찰은 에너지를 소산시키고 기체나 주위에 흔적을 남긴다.",
        "맞다. 준정적 성질만으로는 충분하지 않다. 소산도 없애고 무한소 압력차, 온도차 또는 화학 퍼텐셜 차이로 교환을 진행해야 한다."
      ]
    },
    "l6-vf3": {
      "question": "닫힌계의 엔트로피는 결코 감소할 수 없다.",
      "choices": [
        "참",
        "거짓"
      ],
      "explanations": [
        "틀리다. 제2법칙은 고립계에만 ΔS ≥ 0을 요구한다. 열을 내놓는 닫힌계는 내놓은 엔트로피가 생성한 엔트로피보다 크면 엔트로피가 감소할 수 있다.",
        "맞다. 예를 들어 열원과 접촉하여 식는 고온 물체는 엔트로피를 잃는다. 감소할 수 없는 것은 계와 주위의 전체 엔트로피이다."
      ]
    },
    "l6-q7": {
      "question": "모든 구간이 가역일 때, 이상기체의 카르노 동력 사이클을 나타내는 순서는 무엇인가?",
      "choices": [
        "T_H에서 등온 팽창, 가역 단열 팽창, T_C에서 등온 압축, 가역 단열 압축.",
        "T_H에서 등온 팽창, 등적 냉각, T_C에서 등온 압축, 등적 가열.",
        "T_C에서 등온 팽창, 단열 압축, T_H에서 등온 압축, 단열 팽창."
      ],
      "explanations": [
        "맞다. 열교환은 가역인 두 등온 구간에서 일어나고, 단열 구간은 열교환 없이 두 온도를 연결한다. (V, P) 선도에서 동력 사이클은 시계 방향으로 진행한다.",
        "틀리다. 카르노 사이클의 등온 구간을 잇는 것은 등적 과정이 아니라 단열 과정이다. 등적 구간으로 바꾸면 사이클과 열교환이 달라진다.",
        "틀리다. 이 순서는 카르노 사이클의 역방향이다. 그러면 기관은 일을 받아 저온 열원에서 열을 빼내고 고온 열원에 내놓는다."
      ]
    },
    "l6-q21": {
      "question": "N개 입자로 이루어진 이상기체가 용기 안에서 평형 상태에 있다. 어느 순간 모든 입자가 왼쪽 절반에 있을 확률은 얼마인가?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "정확히 0이다. 제2법칙이 이를 금지하기 때문이다."
      ],
      "explanations": [
        "맞다. 각 입자가 왼쪽에 있을 확률은 1/2이고, 이상기체의 입자들은 서로 독립이다. 1몰이면 2^(−N) ≈ 10^(−1.8×10^23)이다. 이 사건은 가능하지만 너무나 일어나기 어려워 결코 관찰되지 않는다.",
        "틀리다. 1/2은 입자 하나에 대한 확률이다. N개의 독립 입자에 대해서는 확률들을 곱한다.",
        "틀리다. 확률은 1/N처럼이 아니라 N에 대해 지수적으로 감소한다.",
        "틀리다. 역학은 이 배치를 허용한다. 그 극단적인 희귀성이 관찰되는 비가역성을 설명하며, 이 비가역성은 확률적 성격을 띤다."
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
      "question": "इस पाठ में उत्क्रमणीय प्रक्रम क्या है?",
      "choices": [
        "ऐसा प्रक्रम जिसके बाद केवल निकाय अपनी आरंभिक अवस्था में लौट सकता है, चाहे परिवेश में कोई भी परिवर्तन हुए हों।",
        "ऐसा प्रक्रम जिसे परिवेश के साथ विनिमयों सहित, बाधाओं में अति सूक्ष्म परिवर्तन द्वारा ठीक विपरीत दिशा में तय किया जा सकता है।",
        "पर्याप्त धीमा प्रक्रम।",
        "ऐसा प्रक्रम जिसकी आरंभिक और अंतिम अवस्थाएँ साम्यावस्थाएँ हैं।"
      ],
      "explanations": [
        "गलत: केवल निकाय को लौटाना सदा संभव है, उदाहरण के लिए जूल–गे-लुसाक प्रसार के बाद गैस को फिर से संपीडित करके, किंतु तब परिवेश में इस संक्रिया का चिह्न रह जाता है।",
        "सही: यह “उलटी चलाई गई फिल्म” है। वापसी में प्रत्येक विनिमय का चिह्न बदल जाता है, जिससे निकाय और उसका परिवेश कोई चिह्न छोड़े बिना अपनी आरंभिक अवस्थाओं में लौट आते हैं।",
        "गलत: धीमापन पर्याप्त नहीं है। कम चालक दीवार से धीमा किया गया ऊष्मा अंतरण तब तक अनुत्क्रमणीय रहता है जब तक तापमानों में परिमित अंतर हो।",
        "गलत: परिभाषा अवस्थाओं के पूरे अनुक्रम और प्रत्येक चरण को उलटने की संभावना से संबंधित है। जूल–गे-लुसाक प्रसार दो साम्यावस्थाओं को जोड़ता है, और वह अनुत्क्रमणीय है।"
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
    "l6-q19": {
      "question": "400 K का एक तापस्थायी भंडार ऊष्मा Q = 800 J प्राप्त करता है। उसका एंट्रॉपी परिवर्तन क्या है?",
      "choices": [
        "+2 J/K।",
        "0 J/K, क्योंकि उसका तापमान नहीं बदलता।",
        "−2 J/K।",
        "यह उस प्रक्रम पर निर्भर है जिसने उसे यह ऊष्मा दी।"
      ],
      "explanations": [
        "सही: भंडार की अंतिम अवस्था केवल Q पर निर्भर है, और यह ऊष्मा उसे उसके अपने तापमान पर उत्क्रमणीय रूप से दी जा सकती है। दूसरा अभिगृहीत ΔS = Q/T_0 = 800/400 = +2 J/K देता है।",
        "गलत: नियत तापमान का अर्थ नियत एंट्रॉपी नहीं है। भंडार ऊष्मा प्राप्त करता है, और dS = δQ_rev/T_0 शून्य नहीं है।",
        "गलत: भंडार ऊष्मा प्राप्त करता है, Q > 0: उसकी एंट्रॉपी बढ़ती है।",
        "गलत: S एक अवस्था फलन है। केवल भंडार की अंतिम अवस्था मायने रखती है, जो केवल Q पर निर्भर है, चाहे ऊष्मा उसे किसी भी तरह दी गई हो।"
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
        "लगभग 917 J।",
        "500 J।",
        "कार्यकारी द्रव जाने बिना निर्धारित नहीं किया जा सकता।"
      ],
      "explanations": [
        "गलत: एक चक्र में गर्म भंडार से मिली पूरी ऊष्मा को कार्य में नहीं बदला जा सकता। ΔU = 0 होने पर भी द्वितीय नियम उसका कुछ भाग ठंडे भंडार को देना आवश्यक करता है।",
        "गलत: यह गणना डिग्री सेल्सियस में तापमानों, 327 °C और 27 °C, का उपयोग करती है। कार्नो दक्षता परम तापमानों से व्यक्त होती है: 1 − 300/600 = 1/2।",
        "सही: अधिकतम दक्षता कार्नो दक्षता है: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2। अतः |W|_max = η_max Q_H = 500 J। उत्क्रमणीय द्वितापीय मशीन इस मान तक पहुँचती है।",
        "गलत: अधिकतम कार्य के लिए दोनों भंडारों के तापमान और मिली ऊष्मा पर्याप्त हैं: |W|_max = Q_H (1 − T_C/T_H)। द्रव या इंजन का विवरण जानना आवश्यक नहीं।"
      ]
    },
    "l6-q8": {
      "question": "एक द्वितापीय इंजन प्रत्येक चक्र में 500 K के तापस्थायी भंडार से Q_H = 1 000 J प्राप्त करता है और 300 K के भंडार को 700 J देता है। द्वितीय नियम क्या कहता है?",
      "choices": [
        "यह इंजन अनुमत और अनुत्क्रमणीय है: प्रति चक्र ΔS_tot ≈ +0.33 J/K।",
        "यह इंजन असंभव है, क्योंकि यह ठंडे भंडार को ऊष्मा देता है।",
        "यह इंजन उत्क्रमणीय है, क्योंकि इसका द्रव प्रत्येक चक्र में अपनी आरंभिक अवस्था में लौटता है।",
        "यह इंजन असंभव है, क्योंकि Q_H/T_H + Q_C/T_C > 0।"
      ],
      "explanations": [
        "सही: एक चक्र में द्रव की एंट्रॉपी नहीं बदलती। भंडार −1 000 J और +700 J प्राप्त करते हैं, अतः ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0। दक्षता 0.30 कार्नो सीमा 1 − 300/500 = 0.40 से कम रहती है।",
        "गलत: ठंडे भंडार को ऊष्मा देना तो द्वितापीय इंजन के लिए अनिवार्य है। केल्विन कथन ही इसके बिना काम चलाने को निषिद्ध करता है।",
        "गलत: द्रव के आरंभिक अवस्था में लौटने से केवल उसका अपना एंट्रॉपी परिवर्तन शून्य होता है। भंडारों की कुल एंट्रॉपी बढ़ती है: चक्र अनुत्क्रमणीय है।",
        "गलत: पाठ की परिपाटियों में Q_H = +1 000 J और Q_C = −700 J, अतः Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0। क्लॉसियस असमिका का पालन होता है।"
      ]
    },
    "l6-q9": {
      "question": "समान ऊष्मा धारिता C = 100 J/K वाले दो पिंड, जिनके तापमान 400 K और 200 K हैं, एक विलगित पात्र में नियत आयतन पर संपर्क में लाए जाते हैं। कुल एंट्रॉपी परिवर्तन क्या है?",
      "choices": [
        "लगभग +11.8 J/K।",
        "0 J/K, क्योंकि गर्म पिंड द्वारा दी गई ऊष्मा ठंडे पिंड द्वारा प्राप्त ऊष्मा के बराबर है।",
        "लगभग −28.8 J/K, क्योंकि गर्म पिंड ठंडा होता है।",
        "लगभग +25 J/K, अर्थात् Q = 10 000 J के साथ Q/(200 K) − Q/(400 K)।"
      ],
      "explanations": [
        "सही: अंतिम तापमान T_f = 300 K है। काल्पनिक उत्क्रमणीय पथों पर ΔS_1 = C ln(300/400) ≈ −28.8 J/K और ΔS_2 = C ln(300/200) ≈ +40.5 J/K, अतः ΔS_tot ≈ +11.8 J/K > 0: संपर्क अनुत्क्रमणीय है।",
        "गलत: ऊर्जा संरक्षित है, किंतु एंट्रॉपी परिवर्तन एक-दूसरे को निरस्त नहीं करते, क्योंकि ऊष्मा का विनिमय भिन्न तापमानों पर होता है।",
        "गलत: यह केवल गर्म पिंड का एंट्रॉपी परिवर्तन है। गर्म पिंड जितनी एंट्रॉपी खोता है, ठंडा पिंड उससे अधिक एंट्रॉपी प्राप्त करता है।",
        "गलत: यह गणना मानती है कि दोनों तापमान, दो तापस्थायी भंडारों की तरह, स्थिर रहते हैं। यहाँ विनिमय के दौरान प्रत्येक तापमान बदलता है: प्रत्येक पिंड के लिए C dT/T का समाकल करना होगा।"
      ]
    },
    "l6-q12": {
      "question": "एक अनुत्क्रमणीय प्रक्रम दो साम्यावस्थाओं A और B को जोड़ता है, किंतु उसकी मध्यवर्ती अवस्थाएँ साम्य से दूर हैं। कौन-सा कथन सही है?",
      "choices": [
        "एंट्रॉपी परिवर्तन ΔS वास्तविक पथ पर δQ_actual/T_ext का समाकल है।",
        "एंट्रॉपी परिवर्तन ΔS की गणना A और B के बीच उत्क्रमणीय पथ पर की जा सकती है, जबकि S_e और S_i वास्तविक प्रक्रम पर निर्भर हैं।",
        "केवल अवस्थाएँ A और B विनिमयित एंट्रॉपी S_e और उत्पन्न एंट्रॉपी S_i तय करती हैं।"
      ],
      "explanations": [
        "गलत: यह समाकल विनिमयित एंट्रॉपी S_e देता है। लेखा ΔS = S_e + S_i है: उत्पन्न एंट्रॉपी को ध्यान में लिए बिना केवल वास्तविक ऊष्मीय विनिमय से ΔS नहीं निकाला जा सकता।",
        "सही: S अवस्था फलन है, इसलिए उन्हीं अवस्थाओं को जोड़ने वाले उत्क्रमणीय पथ पर ΔS = ∫ δQ_rev/T की गणना संभव है। फिर वास्तविक विनिमयों पर लौटकर S_e = ∫ δQ_actual/T_ext और S_i = ΔS − S_e निकालते हैं।",
        "गलत: A और B से ΔS तय होता है, किंतु विनिमयित और उत्पन्न एंट्रॉपी में उसका विभाजन नहीं। S_e वास्तविक ऊष्माओं और बाहरी तापमानों पर निर्भर है; फिर S_i लेखे ΔS = S_e + S_i से मिलता है।"
      ]
    },
    "l6-q20": {
      "question": "धारा प्रवाहित एक प्रतिरोधक को एक तापस्थायी भंडार नियत तापमान पर बनाए रखता है। स्थायी अवस्था में प्रतिरोधक का एंट्रॉपी लेखा क्या है?",
      "choices": [
        "ΔS = 0, S_i > 0 और S_e = −S_i < 0।",
        "ΔS = 0, अतः प्रक्रम उत्क्रमणीय है।",
        "ΔS > 0, क्योंकि जूल प्रभाव एंट्रॉपी उत्पन्न करता है।"
      ],
      "explanations": [
        "सही: प्रतिरोधक की अवस्था नहीं बदलती, अतः ΔS = 0। जूल प्रभाव एंट्रॉपी उत्पन्न करता है, जिसे प्रतिरोधक ऊष्मा के साथ भंडार को दे देता है: प्रक्रम समएंट्रॉपी है, किंतु अनुत्क्रमणीय।",
        "गलत: समएंट्रॉपी का अर्थ उत्क्रमणीय नहीं है। उत्पन्न एंट्रॉपी की भरपाई भंडार को दी गई एंट्रॉपी से होती है, और कुल एंट्रॉपी बढ़ती है।",
        "गलत: उत्पन्न एंट्रॉपी भंडार को दी गई ऊष्मा के साथ प्रतिरोधक से निकल जाती है। प्रतिरोधक की अवस्था, और इसलिए उसकी एंट्रॉपी, अपरिवर्तित रहती है।"
      ]
    },
    "l6-q4": {
      "question": "केल्विन कथन ठीक किस संचालन को निषिद्ध करता है?",
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
      "question": "अर्ध-स्थैतिक संपीडन अनिवार्यतः उत्क्रमणीय होता है।",
      "choices": [
        "सत्य",
        "असत्य"
      ],
      "explanations": [
        "गलत: उदाहरणतः अर्ध-स्थैतिक संपीडन घर्षण के साथ हो सकता है। घर्षण ऊर्जा का क्षय करता है और गैस या परिवेश में चिह्न छोड़ता है, भले ही गैस साम्य के निकट रहे।",
        "सही: अर्ध-स्थैतिक प्रकृति पर्याप्त नहीं। क्षय मिटाना और दाब, तापमान या रासायनिक विभव के अति सूक्ष्म अंतरों से विनिमय कराना भी आवश्यक है।"
      ]
    },
    "l6-vf3": {
      "question": "किसी बंद निकाय की एंट्रॉपी कभी घट नहीं सकती।",
      "choices": [
        "सत्य",
        "असत्य"
      ],
      "explanations": [
        "गलत: द्वितीय नियम ΔS ≥ 0 केवल विलगित निकाय पर लागू करता है। ऊष्मा देने वाले बंद निकाय की एंट्रॉपी घट सकती है, यदि दी गई एंट्रॉपी उसके द्वारा उत्पन्न एंट्रॉपी से अधिक हो।",
        "सही: उदाहरण के लिए, तापस्थायी भंडार के संपर्क में ठंडा होता गर्म पिंड एंट्रॉपी खोता है। निकाय और उसके परिवेश की कुल एंट्रॉपी ही घट नहीं सकती।"
      ]
    },
    "l6-q7": {
      "question": "कौन-सा अनुक्रम आदर्श गैस का कार्नो इंजन चक्र बताता है, जिसकी सभी शाखाएँ उत्क्रमणीय हैं?",
      "choices": [
        "T_H पर समतापी प्रसार, उत्क्रमणीय रुद्धोष्म प्रसार, T_C पर समतापी संपीडन, फिर उत्क्रमणीय रुद्धोष्म संपीडन।",
        "T_H पर समतापी प्रसार, समआयतनी शीतलन, T_C पर समतापी संपीडन, फिर समआयतनी तापन।",
        "T_C पर समतापी प्रसार, रुद्धोष्म संपीडन, T_H पर समतापी संपीडन, फिर रुद्धोष्म प्रसार।"
      ],
      "explanations": [
        "सही: ऊष्मा विनिमय दोनों उत्क्रमणीय समतापी शाखाओं पर होते हैं; रुद्धोष्म शाखाएँ बिना ऊष्मीय विनिमय दोनों तापमान जोड़ती हैं। (V, P) आरेख में इंजन चक्र दक्षिणावर्त चलता है।",
        "गलत: कार्नो चक्र की समतापी शाखाओं को रुद्धोष्म शाखाएँ जोड़ती हैं, समआयतनी नहीं। समआयतनी शाखाओं से चक्र और उसके ऊष्मीय विनिमय बदलेंगे।",
        "गलत: यह अनुक्रम उलटी दिशा में तय किए कार्नो चक्र का है। तब मशीन कार्य लेकर ठंडे भंडार से ऊष्मा निकालती है और गर्म भंडार को देती है।"
      ]
    },
    "l6-q21": {
      "question": "N कणों वाली एक आदर्श गैस एक पात्र में साम्यावस्था में है। किसी दिए गए क्षण पर सभी कणों के बाएँ आधे भाग में पाए जाने की प्रायिकता क्या है?",
      "choices": [
        "2^(−N)।",
        "1/2।",
        "1/N।",
        "ठीक 0, क्योंकि द्वितीय नियम इसे निषिद्ध करता है।"
      ],
      "explanations": [
        "सही: प्रत्येक कण के बाएँ भाग में होने की प्रायिकता 1/2 है, और आदर्श गैस के कण स्वतंत्र हैं। एक मोल के लिए 2^(−N) ≈ 10^(−1.8×10^23): यह घटना संभव है, किंतु इतनी असंभाव्य कि कभी देखी नहीं जाती।",
        "गलत: 1/2 एक अकेले कण की प्रायिकता है। N स्वतंत्र कणों के लिए प्रायिकताएँ गुणा होती हैं।",
        "गलत: प्रायिकता N के साथ चरघातांकी रूप से घटती है, 1/N की तरह नहीं।",
        "गलत: यांत्रिकी इस विन्यास की अनुमति देती है। इसकी अत्यधिक दुर्लभता प्रेक्षित अनुत्क्रमणीयता की व्याख्या करती है, जो प्रायिकतात्मक प्रकृति की है।"
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
      "question": "Trong bài này, thế nào là một quá trình thuận nghịch?",
      "choices": [
        "Một quá trình mà sau đó chỉ riêng hệ có thể trở về trạng thái ban đầu, bất kể những thay đổi của môi trường bên ngoài.",
        "Một quá trình có thể được thực hiện đúng theo chiều ngược lại, kể cả các trao đổi với môi trường, nhờ một thay đổi vô cùng nhỏ của các ràng buộc.",
        "Một quá trình đủ chậm.",
        "Một quá trình có trạng thái đầu và trạng thái cuối là các trạng thái cân bằng."
      ],
      "explanations": [
        "Sai: luôn có thể đưa riêng hệ trở về, chẳng hạn bằng cách nén lại khí sau một sự giãn nở Joule–Gay-Lussac, nhưng khi đó môi trường vẫn giữ lại dấu vết của thao tác này.",
        "Đúng: đó là “bộ phim chiếu ngược”. Mỗi trao đổi đổi dấu khi quay về, nên hệ và môi trường của nó trở lại các trạng thái ban đầu mà không để lại dấu vết.",
        "Sai: sự chậm chạp chưa đủ. Một sự truyền nhiệt bị làm chậm bởi một vách dẫn nhiệt kém vẫn không thuận nghịch chừng nào các nhiệt độ còn chênh nhau một lượng hữu hạn.",
        "Sai: định nghĩa liên quan đến toàn bộ chuỗi trạng thái và khả năng đảo ngược mỗi bước. Một sự giãn nở Joule–Gay-Lussac nối hai trạng thái cân bằng, nhưng nó không thuận nghịch."
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
    "l6-q19": {
      "question": "Một nguồn nhiệt ở 400 K nhận nhiệt lượng Q = 800 J. Biến thiên entropy của nó bằng bao nhiêu?",
      "choices": [
        "+2 J/K.",
        "0 J/K, vì nhiệt độ của nó không thay đổi.",
        "−2 J/K.",
        "Nó phụ thuộc vào quá trình đã cung cấp nhiệt lượng này cho nó."
      ],
      "explanations": [
        "Đúng: trạng thái cuối của nguồn nhiệt chỉ phụ thuộc vào Q, và ta có thể cung cấp nhiệt lượng này cho nó một cách thuận nghịch ở chính nhiệt độ của nó. Tiên đề thứ hai cho ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Sai: nhiệt độ không đổi không kéo theo entropy không đổi. Nguồn nhiệt nhận nhiệt, và dS = δQ_rev/T_0 khác không.",
        "Sai: nguồn nhiệt nhận nhiệt, Q > 0: entropy của nó tăng.",
        "Sai: S là một hàm trạng thái. Chỉ trạng thái cuối của nguồn nhiệt là quan trọng, và trạng thái này chỉ phụ thuộc vào Q, bất kể nhiệt được cung cấp cho nó theo cách nào."
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
        "Khoảng 917 J.",
        "500 J.",
        "Không thể xác định nếu chưa biết môi chất công tác."
      ],
      "explanations": [
        "Sai: không thể biến toàn bộ nhiệt nhận từ nguồn nóng thành công trong một chu trình. Nguyên lý thứ hai đòi hỏi nhả một phần cho nguồn lạnh, ngay cả khi ΔU = 0.",
        "Sai: phép tính này dùng nhiệt độ theo độ Celsius, 327 °C và 27 °C. Hiệu suất Carnot được biểu diễn bằng nhiệt độ tuyệt đối: 1 − 300/600 = 1/2.",
        "Đúng: hiệu suất cực đại là hiệu suất Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Do đó |W|_max = η_max Q_H = 500 J. Một máy hai nguồn nhiệt thuận nghịch đạt được giá trị này.",
        "Sai: nhiệt độ của hai nguồn nhiệt và nhiệt lượng nhận vào đủ để tính công cực đại: |W|_max = Q_H (1 − T_C/T_H). Không cần biết môi chất hay các chi tiết của động cơ."
      ]
    },
    "l6-q8": {
      "question": "Một động cơ hai nguồn nhiệt nhận Q_H = 1 000 J từ một nguồn nhiệt ở 500 K và nhả 700 J cho một nguồn nhiệt ở 300 K trong mỗi chu trình. Nguyên lý thứ hai cho biết điều gì?",
      "choices": [
        "Động cơ này được phép và không thuận nghịch: ΔS_tot ≈ +0,33 J/K mỗi chu trình.",
        "Động cơ này không thể tồn tại, vì nó nhả nhiệt cho nguồn lạnh.",
        "Động cơ này thuận nghịch, vì môi chất của nó trở về trạng thái ban đầu sau mỗi chu trình.",
        "Động cơ này không thể tồn tại, vì Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Đúng: trong một chu trình, entropy của môi chất không đổi. Các nguồn nhiệt nhận −1 000 J và +700 J, do đó ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. Hiệu suất 0,30 vẫn nhỏ hơn giới hạn Carnot 1 − 300/500 = 0,40.",
        "Sai: trái lại, nhả nhiệt cho nguồn lạnh là điều không thể thiếu đối với một động cơ hai nguồn nhiệt. Chính phát biểu Kelvin cấm bỏ qua việc này.",
        "Sai: việc môi chất trở về trạng thái ban đầu chỉ triệt tiêu biến thiên entropy của riêng nó. Entropy của các nguồn nhiệt tăng về tổng thể: chu trình không thuận nghịch.",
        "Sai: theo các quy ước của môn học, Q_H = +1 000 J và Q_C = −700 J, do đó Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. Bất đẳng thức Clausius được thỏa mãn."
      ]
    },
    "l6-q9": {
      "question": "Hai vật có cùng nhiệt dung C = 100 J/K, ở các nhiệt độ 400 K và 200 K, được cho tiếp xúc với nhau trong một bình cách nhiệt, ở thể tích không đổi. Biến thiên entropy tổng cộng bằng bao nhiêu?",
      "choices": [
        "Khoảng +11,8 J/K.",
        "0 J/K, vì nhiệt lượng vật nóng nhả ra bằng nhiệt lượng vật lạnh nhận vào.",
        "Khoảng −28,8 J/K, vì vật nóng nguội đi.",
        "Khoảng +25 J/K, tức là Q/(200 K) − Q/(400 K) với Q = 10 000 J."
      ],
      "explanations": [
        "Đúng: nhiệt độ cuối là T_f = 300 K. Trên các đường thuận nghịch giả định, ΔS_1 = C ln(300/400) ≈ −28,8 J/K và ΔS_2 = C ln(300/200) ≈ +40,5 J/K, do đó ΔS_tot ≈ +11,8 J/K > 0: sự tiếp xúc là không thuận nghịch.",
        "Sai: năng lượng được bảo toàn, nhưng các biến thiên entropy không bù trừ nhau, vì nhiệt được trao đổi ở những nhiệt độ khác nhau.",
        "Sai: đó chỉ là biến thiên entropy của vật nóng. Vật lạnh nhận thêm nhiều entropy hơn lượng mà vật nóng mất đi.",
        "Sai: phép tính này giả thiết hai nhiệt độ giữ cố định, như với hai nguồn nhiệt. Ở đây, nhiệt độ của mỗi vật thay đổi trong quá trình trao đổi: phải lấy tích phân C dT/T cho mỗi vật."
      ]
    },
    "l6-q12": {
      "question": "Một quá trình không thuận nghịch nối hai trạng thái cân bằng A và B, nhưng các trạng thái trung gian ở xa cân bằng. Khẳng định nào đúng?",
      "choices": [
        "Biến thiên entropy ΔS là tích phân của δQ_actual/T_ext trên đường đi thực.",
        "Có thể tính biến thiên entropy ΔS trên một đường thuận nghịch giữa A và B, còn S_e và S_i phụ thuộc vào quá trình thực.",
        "Chỉ riêng các trạng thái A và B xác định entropy trao đổi S_e và entropy sinh ra S_i."
      ],
      "explanations": [
        "Sai: tích phân này cho S_e, tức entropy trao đổi. Cân bằng là ΔS = S_e + S_i: nhiệt thực sự trao đổi không đủ để tính ΔS nếu không xét đến entropy sinh ra.",
        "Đúng: S là hàm trạng thái, nên có thể tính ΔS = ∫ δQ_rev/T trên một đường thuận nghịch nối cùng các trạng thái. Sau đó quay lại các trao đổi thực để xác định S_e = ∫ δQ_actual/T_ext và S_i = ΔS − S_e.",
        "Sai: các trạng thái A và B xác định ΔS, nhưng không xác định cách phân tách nó thành entropy trao đổi và entropy sinh ra. S_e phụ thuộc vào nhiệt thực sự trao đổi và các nhiệt độ bên ngoài; S_i khi đó được suy ra từ cân bằng ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Một điện trở có dòng điện chạy qua được một nguồn nhiệt giữ ở nhiệt độ không đổi. Ở chế độ dừng, cân bằng entropy của điện trở là gì?",
      "choices": [
        "ΔS = 0, S_i > 0 và S_e = −S_i < 0.",
        "ΔS = 0, do đó quá trình là thuận nghịch.",
        "ΔS > 0, vì hiệu ứng Joule sinh ra entropy."
      ],
      "explanations": [
        "Đúng: trạng thái của điện trở không thay đổi, nên ΔS = 0. Hiệu ứng Joule sinh ra entropy, và điện trở nhả entropy này cho nguồn nhiệt cùng với nhiệt: quá trình là đẳng entropy nhưng không thuận nghịch.",
        "Sai: đẳng entropy không có nghĩa là thuận nghịch. Entropy sinh ra được bù bởi entropy nhả cho nguồn nhiệt, và entropy tổng cộng tăng.",
        "Sai: entropy sinh ra rời khỏi điện trở cùng với nhiệt nhả cho nguồn nhiệt. Trạng thái của điện trở, và do đó entropy của nó, không thay đổi."
      ]
    },
    "l6-q4": {
      "question": "Phát biểu Kelvin cấm chính xác kiểu hoạt động nào?",
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
      "question": "Một quá trình nén tựa tĩnh nhất thiết thuận nghịch.",
      "choices": [
        "Đúng",
        "Sai"
      ],
      "explanations": [
        "Sai: chẳng hạn, một quá trình nén tựa tĩnh có thể diễn ra với ma sát. Ma sát tiêu tán năng lượng và để lại dấu vết trong khí hoặc môi trường, dù khí luôn gần cân bằng.",
        "Đúng: tính tựa tĩnh chưa đủ. Cũng phải loại bỏ tiêu tán và tiến hành các trao đổi với chênh lệch vô cùng nhỏ về áp suất, nhiệt độ hoặc thế hóa học."
      ]
    },
    "l6-vf3": {
      "question": "Entropy của một hệ kín không bao giờ có thể giảm.",
      "choices": [
        "Đúng",
        "Sai"
      ],
      "explanations": [
        "Sai: nguyên lý thứ hai chỉ áp đặt ΔS ≥ 0 cho một hệ cô lập. Một hệ kín nhả nhiệt có thể có entropy giảm, nếu entropy nó nhả ra lớn hơn entropy nó sinh ra.",
        "Đúng: chẳng hạn, một vật nóng nguội đi khi tiếp xúc với một nguồn nhiệt sẽ mất entropy. Chính entropy tổng cộng của hệ và môi trường của nó mới không thể giảm."
      ]
    },
    "l6-q7": {
      "question": "Dãy quá trình nào mô tả chu trình động cơ Carnot của khí lý tưởng, với mọi nhánh đều thuận nghịch?",
      "choices": [
        "Giãn nở đẳng nhiệt ở T_H, giãn nở đoạn nhiệt thuận nghịch, nén đẳng nhiệt ở T_C, rồi nén đoạn nhiệt thuận nghịch.",
        "Giãn nở đẳng nhiệt ở T_H, làm lạnh đẳng tích, nén đẳng nhiệt ở T_C, rồi gia nhiệt đẳng tích.",
        "Giãn nở đẳng nhiệt ở T_C, nén đoạn nhiệt, nén đẳng nhiệt ở T_H, rồi giãn nở đoạn nhiệt."
      ],
      "explanations": [
        "Đúng: trao đổi nhiệt diễn ra trên hai đường đẳng nhiệt thuận nghịch; các đường đoạn nhiệt nối hai nhiệt độ mà không trao đổi nhiệt. Chu trình động cơ được thực hiện theo chiều kim đồng hồ trên đồ thị (V, P).",
        "Sai: các nhánh nối hai đường đẳng nhiệt của chu trình Carnot là đoạn nhiệt, không phải đẳng tích. Các nhánh đẳng tích sẽ làm thay đổi chu trình và các trao đổi nhiệt của nó.",
        "Sai: dãy này mô tả chu trình Carnot được thực hiện theo chiều ngược. Máy khi đó nhận công để lấy nhiệt từ nguồn lạnh và nhả cho nguồn nóng."
      ]
    },
    "l6-q21": {
      "question": "Một khí lý tưởng gồm N hạt ở trạng thái cân bằng trong một bình. Xác suất để, tại một thời điểm cho trước, tìm thấy tất cả các hạt ở nửa bên trái là bao nhiêu?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Đúng bằng 0, vì nguyên lý thứ hai cấm điều đó."
      ],
      "explanations": [
        "Đúng: mỗi hạt có xác suất 1/2 nằm ở bên trái, và các hạt của một khí lý tưởng là độc lập. Với một mol, 2^(−N) ≈ 10^(−1,8×10^23): sự kiện này có thể xảy ra, nhưng hiếm đến mức người ta không bao giờ quan sát thấy.",
        "Sai: 1/2 là xác suất đối với một hạt duy nhất. Với N hạt độc lập, các xác suất nhân với nhau.",
        "Sai: xác suất giảm theo hàm mũ của N, chứ không như 1/N.",
        "Sai: cơ học cho phép cấu hình này. Sự cực kỳ hiếm của nó giải thích tính không thuận nghịch quan sát được, vốn có bản chất xác suất."
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
      "question": "في هذا الدرس، ما التحول العكوس؟",
      "choices": [
        "تحول يستطيع النظام وحده بعده استعادة حالته الابتدائية، مهما كانت التغيرات في المحيط.",
        "تحول يمكن قطعه في الاتجاه المعاكس تماما، بما في ذلك المبادلات مع المحيط، بتعديل متناه في الصغر للقيود.",
        "تحول بطيء بما يكفي.",
        "تحول حالتاه الابتدائية والنهائية حالتا توازن."
      ],
      "explanations": [
        "خطأ: إعادة النظام وحده ممكنة دائما، مثلا بإعادة ضغط الغاز بعد تمدد جول–غي لوساك، لكن المحيط يحتفظ حينئذ بأثر لهذه العملية.",
        "صحيح: إنه «الفيلم معروضا بالعكس». تتغير إشارة كل تبادل في العودة، فيستعيد النظام ومحيطه حالتيهما الابتدائيتين دون ترك أي أثر.",
        "خطأ: البطء لا يكفي. يبقى الانتقال الحراري الذي يبطئه جدار ضعيف التوصيل لاعكوسا ما دامت درجتا الحرارة تختلفان بمقدار منته.",
        "خطأ: يتعلق التعريف بتعاقب الحالات كله وبإمكان عكس كل مرحلة. يصل تمدد جول–غي لوساك بين حالتي توازن، وهو لاعكوس."
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
    "l6-q19": {
      "question": "يتلقى خزان حراري عند 400 K الحرارة Q = 800 J. ما تغير إنتروبيته؟",
      "choices": [
        "+2 J/K.",
        "0 J/K، لأن درجة حرارته لا تتغير.",
        "−2 J/K.",
        "يعتمد على التحول الذي زوده بهذه الحرارة."
      ],
      "explanations": [
        "صحيح: لا تعتمد الحالة النهائية للخزان إلا على Q، ويمكن تزويده بهذه الحرارة بطريقة عكوسة عند درجة حرارته نفسها. تعطي المسلمة الثانية ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "خطأ: لا تستلزم درجة الحرارة الثابتة إنتروبيا ثابتة. يتلقى الخزان حرارة، وdS = δQ_rev/T_0 ليس معدوما.",
        "خطأ: يتلقى الخزان الحرارة، Q > 0: فتزداد إنتروبيته.",
        "خطأ: S دالة حالة. لا يهم إلا الحالة النهائية للخزان، وهي لا تعتمد إلا على Q، أيا كانت الطريقة التي زود بها بالحرارة."
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
        "نحو 917 J.",
        "500 J.",
        "لا يمكن تحديدها دون معرفة المائع العامل."
      ],
      "explanations": [
        "خطأ: لا يمكن تحويل كل الحرارة المتلقاة من الخزان الساخن إلى شغل على دورة. يفرض المبدأ الثاني إعطاء جزء منها للخزان البارد، حتى إذا كان ΔU = 0.",
        "خطأ: يستخدم هذا الحساب درجات الحرارة بالدرجات المئوية، 327 °C و27 °C. يعبر عن كفاءة كارنو بدرجات الحرارة المطلقة: 1 − 300/600 = 1/2.",
        "صحيح: الكفاءة القصوى هي كفاءة كارنو، η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. لذا |W|_max = η_max Q_H = 500 J. تحقق هذه القيمة آلة ثنائية الخزان الحراري عكوسة.",
        "خطأ: تكفي درجتا حرارة الخزانين والحرارة المتلقاة لحساب الشغل الأقصى: |W|_max = Q_H (1 − T_C/T_H). لا حاجة إلى معرفة المائع أو تفاصيل المحرك."
      ]
    },
    "l6-q8": {
      "question": "يتلقى محرك ثنائي الخزان الحراري Q_H = 1 000 J من خزان حراري عند 500 K ويعطي 700 J لخزان حراري عند 300 K في كل دورة. ماذا يقول المبدأ الثاني؟",
      "choices": [
        "هذا المحرك ممكن ولاعكوس: ΔS_tot ≈ +0.33 J/K لكل دورة.",
        "هذا المحرك مستحيل، لأنه يعطي حرارة للخزان البارد.",
        "هذا المحرك عكوس، لأن مائعه يستعيد حالته الابتدائية في كل دورة.",
        "هذا المحرك مستحيل، لأن Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "صحيح: لا تتغير إنتروبيا المائع على دورة. يتلقى الخزانان −1 000 J و+700 J، ومن ثم ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0. وتبقى الكفاءة 0.30 أدنى من حد كارنو 1 − 300/500 = 0.40.",
        "خطأ: على العكس، إعطاء حرارة للخزان البارد لا غنى عنه لمحرك ثنائي الخزان الحراري. وصيغة كلفن هي التي تمنع الاستغناء عن ذلك.",
        "خطأ: لا تلغي عودة المائع إلى حالته الابتدائية إلا تغير إنتروبيته هو. أما إنتروبيا الخزانين فتزداد في المجموع: الدورة لاعكوسة.",
        "خطأ: وفق اصطلاحات الدرس، Q_H = +1 000 J وQ_C = −700 J، ومن ثم Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0. متباينة كلاوزيوس محققة."
      ]
    },
    "l6-q9": {
      "question": "يوضع جسمان لهما السعة الحرارية نفسها C = 100 J/K، عند درجتي الحرارة 400 K و200 K، في تماس داخل وعاء معزول، عند حجم ثابت. ما تغير الإنتروبيا الكلي؟",
      "choices": [
        "نحو +11.8 J/K.",
        "0 J/K، لأن الحرارة التي يعطيها الجسم الساخن تساوي الحرارة التي يتلقاها الجسم البارد.",
        "نحو −28.8 J/K، لأن الجسم الساخن يبرد.",
        "نحو +25 J/K، أي Q/(200 K) − Q/(400 K) مع Q = 10 000 J."
      ],
      "explanations": [
        "صحيح: درجة الحرارة النهائية T_f = 300 K. على مسارات عكوسة وهمية، ΔS_1 = C ln(300/400) ≈ −28.8 J/K وΔS_2 = C ln(300/200) ≈ +40.5 J/K، ومن ثم ΔS_tot ≈ +11.8 J/K > 0: التماس لاعكوس.",
        "خطأ: الطاقة محفوظة، لكن تغيرات الإنتروبيا لا يعوض بعضها بعضا، لأن الحرارة تتبادل عند درجات حرارة مختلفة.",
        "خطأ: هذا تغير إنتروبيا الجسم الساخن وحده. يكسب الجسم البارد من الإنتروبيا أكثر مما يفقده الجسم الساخن.",
        "خطأ: يفترض هذا الحساب أن درجتي الحرارة تبقيان ثابتتين، كما في حالة خزانين حراريين. هنا تتغير كل درجة حرارة أثناء التبادل: يجب تكامل C dT/T لكل جسم."
      ]
    },
    "l6-q12": {
      "question": "يصل تحول لاعكوس بين حالتي توازن A وB، لكن حالاته الوسيطة بعيدة عن التوازن. أي عبارة صحيحة؟",
      "choices": [
        "تغير الإنتروبيا ΔS هو تكامل δQ_actual/T_ext على المسار الحقيقي.",
        "يمكن حساب تغير الإنتروبيا ΔS على مسار عكوس بين A وB، بينما تعتمد S_e وS_i على العملية الحقيقية.",
        "تحدد الحالتان A وB وحدهما الإنتروبيا المتبادلة S_e والإنتروبيا المنتجة S_i."
      ],
      "explanations": [
        "خطأ: يعطي هذا التكامل S_e، أي الإنتروبيا المتبادلة. الحصيلة هي ΔS = S_e + S_i: فلا تكفي الحرارة المتبادلة فعلا لحساب ΔS دون أخذ الإنتروبيا المنتجة في الحسبان.",
        "صحيح: S دالة حالة، لذا يمكن حساب ΔS = ∫ δQ_rev/T على مسار عكوس يصل بين الحالتين نفسيهما. ثم نعود إلى المبادلات الحقيقية لتحديد S_e = ∫ δQ_actual/T_ext وS_i = ΔS − S_e.",
        "خطأ: تحدد الحالتان A وB التغير ΔS، لكنهما لا تحددان تقسيمه إلى إنتروبيا متبادلة وإنتروبيا منتجة. تعتمد S_e على الحرارة المتبادلة فعلا ودرجات الحرارة الخارجية؛ ثم تستنتج S_i من الحصيلة ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "تحفظ مقاومة يمر فيها تيار عند درجة حرارة ثابتة بواسطة خزان حراري. في النظام الدائم، ما حصيلة إنتروبيا المقاومة؟",
      "choices": [
        "ΔS = 0، وS_i > 0 وS_e = −S_i < 0.",
        "ΔS = 0، إذن التحول عكوس.",
        "ΔS > 0، لأن مفعول جول ينتج إنتروبيا."
      ],
      "explanations": [
        "صحيح: لا تتغير حالة المقاومة، إذن ΔS = 0. ينتج مفعول جول إنتروبيا تعطيها المقاومة للخزان الحراري مع الحرارة: التحول متساوي الإنتروبيا، لكنه لاعكوس.",
        "خطأ: تساوي الإنتروبيا لا يعني العكوسية. تعوض الإنتروبيا المعطاة للخزان الإنتروبيا المنتجة، وتزداد الإنتروبيا الكلية.",
        "خطأ: تغادر الإنتروبيا المنتجة المقاومة مع الحرارة المعطاة للخزان. تبقى حالة المقاومة، ومن ثم إنتروبيتها، دون تغيير."
      ]
    },
    "l6-q4": {
      "question": "أي نمط تشغيل تمنعه صيغة كلفن تحديدا؟",
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
      "question": "الانضغاط شبه الساكن عكوس بالضرورة.",
      "choices": [
        "صحيح",
        "خطأ"
      ],
      "explanations": [
        "خطأ: قد يجري الانضغاط شبه الساكن مع احتكاك مثلا. يبدد الاحتكاك الطاقة ويترك أثرا في الغاز أو محيطه، حتى إذا بقي الغاز قريبا من التوازن.",
        "صحيح: لا تكفي الصفة شبه الساكنة. يجب أيضا إزالة التبديد وإجراء المبادلات بفروق متناهية في الصغر في الضغط أو درجة الحرارة أو الكمون الكيميائي."
      ]
    },
    "l6-vf3": {
      "question": "لا يمكن أبدا أن تتناقص إنتروبيا نظام مغلق.",
      "choices": [
        "صحيح",
        "خطأ"
      ],
      "explanations": [
        "خطأ: لا يفرض المبدأ الثاني ΔS ≥ 0 إلا على نظام معزول. قد تتناقص إنتروبيا نظام مغلق يعطي حرارة، إذا تجاوزت الإنتروبيا التي يعطيها تلك التي ينتجها.",
        "صحيح: مثلا، يفقد جسم ساخن يبرد في تماس مع خزان حراري إنتروبيا. الإنتروبيا الكلية للنظام ومحيطه هي التي لا يمكن أن تتناقص."
      ]
    },
    "l6-q7": {
      "question": "أي تعاقب يصف دورة كارنو المحركة لغاز مثالي، مع كون جميع فروعها عكوسة؟",
      "choices": [
        "تمدد متساوي درجة الحرارة عند T_H، ثم تمدد كظوم عكوس، ثم انضغاط متساوي درجة الحرارة عند T_C، ثم انضغاط كظوم عكوس.",
        "تمدد متساوي درجة الحرارة عند T_H، ثم تبريد متساوي الحجم، ثم انضغاط متساوي درجة الحرارة عند T_C، ثم تسخين متساوي الحجم.",
        "تمدد متساوي درجة الحرارة عند T_C، ثم انضغاط كظوم، ثم انضغاط متساوي درجة الحرارة عند T_H، ثم تمدد كظوم."
      ],
      "explanations": [
        "صحيح: تحدث المبادلات الحرارية على الفرعين المتساويَي درجة الحرارة والعكوسين؛ ويصل الفرعان الكظومان بين درجتي الحرارة دون تبادل حراري. تسلك الدورة المحركة اتجاه عقارب الساعة في المخطط (V, P).",
        "خطأ: الروابط بين الفرعين المتساويَي درجة الحرارة في دورة كارنو كظومة وليست متساوية الحجم. من شأن الفروع المتساوية الحجم تغيير الدورة ومبادلاتها الحرارية.",
        "خطأ: يصف هذا التعاقب دورة كارنو في الاتجاه المعاكس. وتتلقى الآلة حينئذ شغلا لأخذ حرارة من الخزان الحراري البارد وإعطائها للخزان الساخن."
      ]
    },
    "l6-q21": {
      "question": "غاز مثالي مكون من N جسيما في حالة توازن داخل وعاء. ما احتمال وجود جميع الجسيمات في النصف الأيسر في لحظة معينة؟",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "0 تماما، لأن المبدأ الثاني يمنع ذلك."
      ],
      "explanations": [
        "صحيح: احتمال وجود كل جسيم في اليسار 1/2، وجسيمات الغاز المثالي مستقلة. لمول واحد، 2^(−N) ≈ 10^(−1.8×10^23): الحدث ممكن، لكنه بعيد الاحتمال إلى حد أنه لا يلاحظ أبدا.",
        "خطأ: 1/2 هو احتمال جسيم واحد. أما لـ N جسيما مستقلا فتضرب الاحتمالات بعضها في بعض.",
        "خطأ: يتناقص الاحتمال أسيا مع N، لا مثل 1/N.",
        "خطأ: تسمح الميكانيكا بهذا التشكيل. وندرته البالغة تفسر اللاعكوسية المرصودة، وهي ذات طبيعة احتمالية."
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
      "question": "Dalam pelajaran ini, apa yang dimaksud dengan proses reversibel?",
      "choices": [
        "Proses yang setelahnya sistem saja dapat kembali ke keadaan awalnya, apa pun perubahan pada lingkungannya.",
        "Proses yang dapat ditempuh tepat dalam arah sebaliknya, termasuk pertukaran dengan lingkungan, melalui perubahan infinitesimal kendala.",
        "Proses yang cukup lambat.",
        "Proses yang keadaan awal dan akhirnya merupakan keadaan setimbang."
      ],
      "explanations": [
        "Salah: mengembalikan sistem saja selalu mungkin, misalnya dengan memampatkan kembali gas setelah ekspansi Joule–Gay-Lussac, tetapi lingkungan kemudian menyimpan jejak operasi tersebut.",
        "Benar: inilah “film yang diputar mundur”. Setiap pertukaran berubah tanda pada arah balik, sehingga sistem dan lingkungannya kembali ke keadaan awal masing-masing tanpa meninggalkan jejak.",
        "Salah: kelambatan tidak cukup. Perpindahan kalor yang diperlambat oleh dinding berdaya hantar rendah tetap ireversibel selama suhunya berbeda sebesar nilai berhingga.",
        "Salah: definisi ini menyangkut seluruh rangkaian keadaan dan kemungkinan membalik setiap tahap. Ekspansi Joule–Gay-Lussac menghubungkan dua keadaan setimbang, dan ekspansi itu ireversibel."
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
    "l6-q19": {
      "question": "Sebuah reservoir termal pada 400 K menerima kalor Q = 800 J. Berapakah perubahan entropinya?",
      "choices": [
        "+2 J/K.",
        "0 J/K, karena suhunya tidak berubah.",
        "−2 J/K.",
        "Bergantung pada proses yang memberikan kalor tersebut kepadanya."
      ],
      "explanations": [
        "Benar: keadaan akhir reservoir hanya bergantung pada Q, dan kalor ini dapat diberikan kepadanya secara reversibel pada suhunya sendiri. Postulat kedua memberikan ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Salah: suhu yang tetap tidak berarti entropi yang tetap. Reservoir menerima kalor, dan dS = δQ_rev/T_0 tidak nol.",
        "Salah: reservoir menerima kalor, Q > 0: entropinya meningkat.",
        "Salah: S merupakan fungsi keadaan. Yang penting hanyalah keadaan akhir reservoir, yang hanya bergantung pada Q, apa pun cara kalor itu diberikan kepadanya."
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
        "Sekitar 917 J.",
        "500 J.",
        "Tidak dapat ditentukan tanpa mengetahui fluida kerja."
      ],
      "explanations": [
        "Salah: seluruh kalor yang diterima dari reservoir panas tidak dapat diubah menjadi kerja dalam satu siklus. Hukum kedua mengharuskan sebagian dibuang ke reservoir dingin, sekalipun ΔU = 0.",
        "Salah: perhitungan ini menggunakan suhu dalam derajat Celsius, 327 °C dan 27 °C. Efisiensi Carnot dinyatakan dengan suhu mutlak: 1 − 300/600 = 1/2.",
        "Benar: efisiensi maksimum adalah efisiensi Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Jadi, |W|_max = η_max Q_H = 500 J. Nilai ini dicapai oleh mesin dua reservoir yang reversibel.",
        "Salah: suhu kedua reservoir dan kalor yang diterima cukup untuk menghitung kerja maksimum: |W|_max = Q_H (1 − T_C/T_H). Tidak perlu mengetahui fluida maupun perincian mesin."
      ]
    },
    "l6-q8": {
      "question": "Mesin kalor dua reservoir menerima Q_H = 1 000 J dari reservoir termal pada 500 K dan membuang 700 J ke reservoir termal pada 300 K dalam setiap siklus. Apa yang dikatakan hukum kedua?",
      "choices": [
        "Mesin ini diizinkan dan ireversibel: ΔS_tot ≈ +0,33 J/K per siklus.",
        "Mesin ini mustahil, karena membuang kalor ke reservoir dingin.",
        "Mesin ini reversibel, karena fluidanya kembali ke keadaan awal pada setiap siklus.",
        "Mesin ini mustahil, karena Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Benar: selama satu siklus, entropi fluida tidak berubah. Reservoir menerima −1 000 J dan +700 J, sehingga ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. Efisiensi 0,30 tetap lebih kecil daripada batas Carnot 1 − 300/500 = 0,40.",
        "Salah: membuang kalor ke reservoir dingin justru mutlak diperlukan oleh mesin kalor dua reservoir. Pernyataan Kelvin-lah yang melarang meniadakannya.",
        "Salah: kembalinya fluida ke keadaan awal hanya meniadakan perubahan entropinya sendiri. Entropi reservoir secara keseluruhan meningkat: siklus ini ireversibel.",
        "Salah: dengan konvensi dalam kuliah ini, Q_H = +1 000 J dan Q_C = −700 J, sehingga Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. Pertidaksamaan Clausius terpenuhi."
      ]
    },
    "l6-q9": {
      "question": "Dua benda dengan kapasitas kalor yang sama, C = 100 J/K, pada suhu 400 K dan 200 K, disentuhkan di dalam wadah terisolasi pada volume tetap. Berapakah perubahan entropi total?",
      "choices": [
        "Sekitar +11,8 J/K.",
        "0 J/K, karena kalor yang dilepas benda panas sama dengan kalor yang diterima benda dingin.",
        "Sekitar −28,8 J/K, karena benda panas mendingin.",
        "Sekitar +25 J/K, yaitu Q/(200 K) − Q/(400 K) dengan Q = 10 000 J."
      ],
      "explanations": [
        "Benar: suhu akhirnya T_f = 300 K. Sepanjang lintasan reversibel fiktif, ΔS_1 = C ln(300/400) ≈ −28,8 J/K dan ΔS_2 = C ln(300/200) ≈ +40,5 J/K, sehingga ΔS_tot ≈ +11,8 J/K > 0: kontak ini ireversibel.",
        "Salah: energi kekal, tetapi perubahan entropinya tidak saling meniadakan, karena kalor dipertukarkan pada suhu yang berbeda.",
        "Salah: itu hanya perubahan entropi benda panas. Benda dingin memperoleh entropi lebih banyak daripada yang hilang dari benda panas.",
        "Salah: perhitungan ini mengandaikan kedua suhu tetap, seperti pada dua reservoir termal. Di sini, suhu setiap benda berubah selama pertukaran: C dT/T harus diintegralkan untuk setiap benda."
      ]
    },
    "l6-q12": {
      "question": "Proses ireversibel menghubungkan dua keadaan setimbang A dan B, tetapi keadaan antaranya jauh dari kesetimbangan. Pernyataan manakah yang benar?",
      "choices": [
        "Perubahan entropi ΔS adalah integral δQ_actual/T_ext sepanjang lintasan nyata.",
        "Perubahan entropi ΔS dapat dihitung sepanjang lintasan yang reversibel antara A dan B, sedangkan S_e dan S_i bergantung pada proses nyata.",
        "Keadaan A dan B saja menentukan entropi yang dipertukarkan S_e dan entropi yang diproduksi S_i."
      ],
      "explanations": [
        "Salah: integral ini memberikan S_e, yaitu entropi yang dipertukarkan. Neracanya adalah ΔS = S_e + S_i: kalor yang benar-benar dipertukarkan tidak cukup untuk menghitung ΔS tanpa memperhitungkan entropi yang diproduksi.",
        "Benar: S merupakan fungsi keadaan, sehingga ΔS = ∫ δQ_rev/T dapat dihitung sepanjang lintasan yang reversibel dan menghubungkan keadaan yang sama. Kemudian kita kembali ke pertukaran nyata untuk menentukan S_e = ∫ δQ_actual/T_ext dan S_i = ΔS − S_e.",
        "Salah: keadaan A dan B menentukan ΔS, tetapi tidak menentukan penguraiannya menjadi entropi yang dipertukarkan dan yang diproduksi. S_e bergantung pada kalor yang benar-benar dipertukarkan dan suhu lingkungan; S_i kemudian diperoleh dari neraca ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Sebuah resistor yang dialiri arus dipertahankan pada suhu tetap oleh reservoir termal. Dalam keadaan tunak, bagaimana neraca entropi resistor tersebut?",
      "choices": [
        "ΔS = 0, S_i > 0 dan S_e = −S_i < 0.",
        "ΔS = 0, sehingga prosesnya reversibel.",
        "ΔS > 0, karena efek Joule memproduksi entropi."
      ],
      "explanations": [
        "Benar: keadaan resistor tidak berubah, sehingga ΔS = 0. Efek Joule memproduksi entropi, yang dibuang resistor ke reservoir bersama kalor: prosesnya isentropik, tetapi ireversibel.",
        "Salah: isentropik tidak berarti reversibel. Entropi yang diproduksi diimbangi oleh entropi yang dibuang ke reservoir, dan entropi total meningkat.",
        "Salah: entropi yang diproduksi meninggalkan resistor bersama kalor yang dibuang ke reservoir. Keadaan resistor, dan dengan demikian entropinya, tetap tidak berubah."
      ]
    },
    "l6-q4": {
      "question": "Operasi apa yang tepatnya dilarang oleh pernyataan Kelvin?",
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
      "question": "Kompresi kuasistatik pasti reversibel.",
      "choices": [
        "Benar",
        "Salah"
      ],
      "explanations": [
        "Salah: kompresi kuasistatik dapat, misalnya, berlangsung dengan gesekan. Gesekan mendisipasikan energi dan meninggalkan jejak pada gas atau lingkungannya, sekalipun gas tetap dekat dengan kesetimbangan.",
        "Benar: sifat kuasistatik tidak cukup. Disipasi juga harus dihilangkan dan pertukaran harus dijalankan dengan perbedaan infinitesimal tekanan, suhu, atau potensial kimia."
      ]
    },
    "l6-vf3": {
      "question": "Entropi sistem tertutup tidak pernah dapat berkurang.",
      "choices": [
        "Benar",
        "Salah"
      ],
      "explanations": [
        "Salah: hukum kedua hanya mengharuskan ΔS ≥ 0 untuk sistem terisolasi. Entropi sistem tertutup yang membuang kalor dapat berkurang, jika entropi yang dibuangnya melebihi entropi yang diproduksinya.",
        "Benar: misalnya, benda panas yang mendingin karena bersentuhan dengan reservoir termal kehilangan entropi. Yang tidak dapat berkurang adalah entropi total sistem dan lingkungannya."
      ]
    },
    "l6-q7": {
      "question": "Urutan manakah yang menggambarkan siklus Carnot gas ideal sebagai mesin penghasil kerja, dengan semua cabangnya reversibel?",
      "choices": [
        "Ekspansi isotermal pada T_H, ekspansi adiabatik reversibel, kompresi isotermal pada T_C, lalu kompresi adiabatik reversibel.",
        "Ekspansi isotermal pada T_H, pendinginan isokhorik, kompresi isotermal pada T_C, lalu pemanasan isokhorik.",
        "Ekspansi isotermal pada T_C, kompresi adiabatik, kompresi isotermal pada T_H, lalu ekspansi adiabatik."
      ],
      "explanations": [
        "Benar: pertukaran kalor berlangsung pada kedua isoterm yang reversibel; proses adiabatik menghubungkan kedua suhu tanpa pertukaran kalor. Siklus penghasil kerja ditempuh searah jarum jam pada diagram (V, P).",
        "Salah: penghubung antara isoterm dalam siklus Carnot bersifat adiabatik, bukan isokhorik. Cabang isokhorik akan mengubah siklus dan pertukaran kalornya.",
        "Salah: urutan ini menggambarkan siklus Carnot yang ditempuh terbalik. Mesin kemudian menerima kerja untuk mengambil kalor dari reservoir dingin dan menyerahkannya kepada reservoir panas."
      ]
    },
    "l6-q21": {
      "question": "Gas ideal yang terdiri atas N partikel berada dalam kesetimbangan di dalam sebuah wadah. Berapakah peluang menemukan, pada suatu saat tertentu, semua partikel di separuh bagian kiri?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Tepat 0, karena hukum kedua melarangnya."
      ],
      "explanations": [
        "Benar: setiap partikel memiliki peluang 1/2 untuk berada di kiri, dan partikel-partikel gas ideal saling independen. Untuk satu mol, 2^(−N) ≈ 10^(−1,8×10^23): peristiwa ini mungkin terjadi, tetapi peluangnya begitu kecil sehingga tidak pernah teramati.",
        "Salah: 1/2 adalah peluang untuk satu partikel saja. Untuk N partikel independen, peluang-peluangnya dikalikan.",
        "Salah: peluangnya berkurang secara eksponensial terhadap N, bukan seperti 1/N.",
        "Salah: mekanika mengizinkan konfigurasi ini. Kelangkaannya yang ekstrem menjelaskan ireversibilitas yang teramati, yang bersifat probabilistik."
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
      "question": "Bu derste tersinir süreç nedir?",
      "choices": [
        "Sonrasında, çevredeki değişiklikler ne olursa olsun, yalnızca sistemin başlangıç durumuna dönebildiği bir süreç.",
        "Kısıtlarda sonsuz küçük bir değişiklikle, çevreyle alışverişler de dahil olmak üzere tam olarak ters yönde izlenebilen bir süreç.",
        "Yeterince yavaş bir süreç.",
        "Başlangıç ve son durumları denge durumları olan bir süreç."
      ],
      "explanations": [
        "Yanlış: yalnızca sistemi geri getirmek her zaman mümkündür, örneğin bir Joule–Gay-Lussac genleşmesinden sonra gazı yeniden sıkıştırarak; ancak bu durumda çevre işlemin bir izini taşır.",
        "Doğru: bu, “geriye oynatılan film”dir. Dönüşte her alışveriş işaret değiştirir; böylece sistem ve çevresi hiçbir iz bırakmadan başlangıç durumlarına döner.",
        "Yanlış: yavaşlık yeterli değildir. Isıyı zayıf ileten bir duvarla yavaşlatılmış bir ısı aktarımı, sıcaklıklar sonlu bir miktar farklı olduğu sürece tersinmez kalır.",
        "Yanlış: tanım, durumların bütün dizisine ve her adımın tersine çevrilebilmesine ilişkindir. Bir Joule–Gay-Lussac genleşmesi iki denge durumunu bağlar ve tersinmezdir."
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
    "l6-q19": {
      "question": "400 K sıcaklığındaki bir termostat Q = 800 J ısı alıyor. Entropi değişimi nedir?",
      "choices": [
        "+2 J/K.",
        "0 J/K, çünkü sıcaklığı değişmez.",
        "−2 J/K.",
        "Bu ısıyı ona sağlayan sürece bağlıdır."
      ],
      "explanations": [
        "Doğru: termostatın son durumu yalnızca Q'ya bağlıdır ve bu ısı ona kendi sıcaklığında tersinir biçimde verilebilir. İkinci postülat ΔS = Q/T_0 = 800/400 = +2 J/K verir.",
        "Yanlış: sabit sıcaklık sabit entropi anlamına gelmez. Termostat ısı alır ve dS = δQ_rev/T_0 sıfır değildir.",
        "Yanlış: ısıyı alan termostattır, Q > 0: entropisi artar.",
        "Yanlış: S bir durum fonksiyonudur. Önemli olan yalnızca termostatın son durumudur; bu durum da ısının ona nasıl verildiğinden bağımsız olarak yalnızca Q'ya bağlıdır."
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
        "Yaklaşık 917 J.",
        "500 J.",
        "Çalışma akışkanı bilinmeden belirlenemez."
      ],
      "explanations": [
        "Yanlış: sıcak termostattan alınan ısının tamamı bir çevrimde işe dönüştürülemez. İkinci ilke, ΔU = 0 olsa bile bir kısmının soğuk termostata verilmesini gerektirir.",
        "Yanlış: bu hesap Celsius cinsinden sıcaklıkları, 327 °C ve 27 °C'yi kullanır. Carnot verimi mutlak sıcaklıklarla ifade edilir: 1 − 300/600 = 1/2.",
        "Doğru: en yüksek verim Carnot verimidir: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Böylece |W|_max = η_max Q_H = 500 J. Tersinir, iki ısı rezervuarlı bir makine bu değere ulaşır.",
        "Yanlış: iki termostatın sıcaklıkları ve alınan ısı, en büyük işi hesaplamaya yeter: |W|_max = Q_H (1 − T_C/T_H). Akışkanı ya da motorun ayrıntılarını bilmek gerekmez."
      ]
    },
    "l6-q8": {
      "question": "İki ısı rezervuarlı bir motor, her çevrimde 500 K sıcaklığındaki bir termostattan Q_H = 1 000 J alıyor ve 300 K sıcaklığındaki bir termostata 700 J veriyor. İkinci ilke ne söyler?",
      "choices": [
        "Bu motor mümkündür ve tersinmezdir: çevrim başına ΔS_tot ≈ +0,33 J/K.",
        "Bu motor imkânsızdır, çünkü soğuk termostata ısı verir.",
        "Bu motor tersinirdir, çünkü akışkanı her çevrimde başlangıç durumuna döner.",
        "Bu motor imkânsızdır, çünkü Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Doğru: bir çevrimde akışkanın entropisi değişmez. Termostatlar −1 000 J ve +700 J alır; buradan ΔS_tot = −1 000/500 + 700/300 ≈ +0,33 J/K > 0. 0,30 verimi, 1 − 300/500 = 0,40 Carnot sınırının altında kalır.",
        "Yanlış: soğuk termostata ısı vermek, iki ısı rezervuarlı bir motor için tam tersine vazgeçilmezdir. Bundan vazgeçmeyi yasaklayan Kelvin ifadesidir.",
        "Yanlış: akışkanın başlangıç durumuna dönmesi yalnızca kendi entropi değişimini sıfırlar. Termostatların entropisi toplamda artar: çevrim tersinmezdir.",
        "Yanlış: dersin işaret kurallarıyla Q_H = +1 000 J ve Q_C = −700 J'dür; buradan Q_H/T_H + Q_C/T_C ≈ −0,33 J/K ≤ 0. Clausius eşitsizliği sağlanır."
      ]
    },
    "l6-q9": {
      "question": "Isı sığaları aynı, C = 100 J/K olan ve sıcaklıkları 400 K ile 200 K olan iki cisim, yalıtılmış bir kapta sabit hacimde temas ettiriliyor. Toplam entropi değişimi nedir?",
      "choices": [
        "Yaklaşık +11,8 J/K.",
        "0 J/K, çünkü sıcak cismin verdiği ısı soğuk cismin aldığı ısıya eşittir.",
        "Yaklaşık −28,8 J/K, çünkü sıcak cisim soğur.",
        "Yaklaşık +25 J/K, yani Q = 10 000 J ile Q/(200 K) − Q/(400 K)."
      ],
      "explanations": [
        "Doğru: son sıcaklık T_f = 300 K'dir. Kurgusal tersinir yollar üzerinde ΔS_1 = C ln(300/400) ≈ −28,8 J/K ve ΔS_2 = C ln(300/200) ≈ +40,5 J/K; buradan ΔS_tot ≈ +11,8 J/K > 0: temas tersinmezdir.",
        "Yanlış: enerji korunur, fakat ısı farklı sıcaklıklarda alışveriş edildiği için entropi değişimleri birbirini dengelemez.",
        "Yanlış: bu yalnızca sıcak cismin entropi değişimidir. Soğuk cisim, sıcak cismin kaybettiğinden daha fazla entropi kazanır.",
        "Yanlış: bu hesap, iki termostatta olduğu gibi iki sıcaklığın da sabit kaldığını varsayar. Burada her cismin sıcaklığı alışveriş sırasında değişir: her cisim için C dT/T'nin integrali alınmalıdır."
      ]
    },
    "l6-q12": {
      "question": "Tersinmez bir süreç, A ve B denge durumlarını bağlıyor; ancak ara durumları dengeden uzak. Hangi ifade doğrudur?",
      "choices": [
        "Entropi değişimi ΔS, gerçek yol üzerindeki δQ_actual/T_ext integralidir.",
        "Entropi değişimi ΔS, A ile B arasındaki tersinir bir yolda hesaplanabilir; S_e ve S_i ise gerçek sürece bağlıdır.",
        "A ve B durumları tek başına alışveriş edilen S_e entropisini ve üretilen S_i entropisini belirler."
      ],
      "explanations": [
        "Yanlış: bu integral, alışveriş edilen entropi S_e'yi verir. Bilanço ΔS = S_e + S_i'dir: üretilen entropi hesaba katılmadan, gerçekten alışveriş edilen ısı ΔS'yi hesaplamaya yetmez.",
        "Doğru: S bir durum fonksiyonudur; dolayısıyla ΔS = ∫ δQ_rev/T, aynı durumları bağlayan tersinir bir yolda hesaplanabilir. Ardından S_e = ∫ δQ_actual/T_ext ve S_i = ΔS − S_e'yi belirlemek için gerçek alışverişlere dönülür.",
        "Yanlış: A ve B durumları ΔS'yi belirler, fakat alışveriş edilen ve üretilen entropi olarak ayrışımını belirlemez. S_e gerçekten alışveriş edilen ısılara ve dış sıcaklıklara bağlıdır; S_i daha sonra ΔS = S_e + S_i bilançosundan bulunur."
      ]
    },
    "l6-q20": {
      "question": "İçinden akım geçen bir direnç, bir termostat tarafından sabit sıcaklıkta tutuluyor. Kararlı rejimde direncin entropi bilançosu nedir?",
      "choices": [
        "ΔS = 0, S_i > 0 ve S_e = −S_i < 0.",
        "ΔS = 0, dolayısıyla süreç tersinirdir.",
        "ΔS > 0, çünkü Joule etkisi entropi üretir."
      ],
      "explanations": [
        "Doğru: direncin durumu değişmez, dolayısıyla ΔS = 0. Joule etkisi entropi üretir ve direnç bu entropiyi ısıyla birlikte termostata verir: süreç izentropiktir, ancak tersinmezdir.",
        "Yanlış: izentropik, tersinir anlamına gelmez. Üretilen entropi termostata verilen entropiyle dengelenir ve toplam entropi artar.",
        "Yanlış: üretilen entropi, termostata verilen ısıyla birlikte direnci terk eder. Direncin durumu, dolayısıyla entropisi, değişmeden kalır."
      ]
    },
    "l6-q4": {
      "question": "Kelvin ifadesi tam olarak hangi çalışmayı yasaklar?",
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
      "question": "Yarı statik bir sıkıştırma mutlaka tersinirdir.",
      "choices": [
        "Doğru",
        "Yanlış"
      ],
      "explanations": [
        "Yanlış: yarı statik bir sıkıştırma örneğin sürtünmeyle gerçekleşebilir. Gaz dengeye yakın kalsa bile sürtünme enerjiyi disipasyona uğratır ve gazda ya da çevresinde bir iz bırakır.",
        "Doğru: yarı statiklik yeterli değildir. Disipasyonlar da giderilmeli ve alışverişler sonsuz küçük basınç, sıcaklık veya kimyasal potansiyel farklarıyla yürütülmelidir."
      ]
    },
    "l6-vf3": {
      "question": "Kapalı bir sistemin entropisi hiçbir zaman azalamaz.",
      "choices": [
        "Doğru",
        "Yanlış"
      ],
      "explanations": [
        "Yanlış: ikinci ilke ΔS ≥ 0 koşulunu yalnızca yalıtılmış bir sisteme dayatır. Isı veren kapalı bir sistemin entropisi, verdiği entropi ürettiği entropiyi aşarsa azalabilir.",
        "Doğru: örneğin bir termostatla temas hâlinde soğuyan sıcak bir cisim entropi kaybeder. Azalamayan, sistem ile çevresinin toplam entropisidir."
      ]
    },
    "l6-q7": {
      "question": "Bütün kolları tersinir olan bir ideal gazın motor olarak çalışan Carnot çevrimini hangi sıralama betimler?",
      "choices": [
        "T_H'de izotermal genleşme, tersinir adyabatik genleşme, T_C'de izotermal sıkıştırma ve ardından tersinir adyabatik sıkıştırma.",
        "T_H'de izotermal genleşme, izokorik soğuma, T_C'de izotermal sıkıştırma ve ardından izokorik ısınma.",
        "T_C'de izotermal genleşme, adyabatik sıkıştırma, T_H'de izotermal sıkıştırma ve ardından adyabatik genleşme."
      ],
      "explanations": [
        "Doğru: ısı alışverişleri tersinir iki izoterm üzerinde gerçekleşir; adyabatik kollar iki sıcaklığı ısı alışverişi olmadan bağlar. Motor çevrimi (V, P) diyagramında saat yönünde izlenir.",
        "Yanlış: Carnot çevriminin izotermleri arasındaki bağlantılar izokorik değil, adyabatiktir. İzokorik kollar çevrimi ve ısı alışverişlerini değiştirirdi.",
        "Yanlış: bu sıralama, ters yönde izlenen Carnot çevrimini betimler. Makine bu durumda soğuk termostattan ısı almak ve sıcak termostata ısı vermek için iş alır."
      ]
    },
    "l6-q21": {
      "question": "N parçacıktan oluşan bir ideal gaz bir kap içinde dengededir. Belirli bir anda bütün parçacıkları sol yarıda bulma olasılığı nedir?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Tam olarak 0, çünkü ikinci ilke bunu yasaklar."
      ],
      "explanations": [
        "Doğru: her parçacığın solda bulunma olasılığı 1/2'dir ve ideal gazın parçacıkları bağımsızdır. Bir mol için 2^(−N) ≈ 10^(−1,8×10^23): olay mümkündür, ancak o kadar düşük olasılıklıdır ki hiçbir zaman gözlenmez.",
        "Yanlış: 1/2 tek bir parçacığın olasılığıdır. N bağımsız parçacık için olasılıklar çarpılır.",
        "Yanlış: olasılık N ile 1/N gibi değil, üstel olarak azalır.",
        "Yanlış: mekanik bu konfigürasyona izin verir. Aşırı nadirliği, gözlenen tersinmezliği açıklar; bu tersinmezlik olasılıksal niteliktedir."
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
      "question": "এই পাঠে প্রত্যাবর্তী প্রক্রিয়া কী?",
      "choices": [
        "এমন একটি প্রক্রিয়া যার পরে শুধু তন্ত্রটি তার প্রাথমিক অবস্থায় ফিরতে পারে, পরিবেশে যে পরিবর্তনই ঘটুক না কেন।",
        "এমন একটি প্রক্রিয়া যা, পরিবেশের সঙ্গে বিনিময়সহ, সীমাবদ্ধতার অসীম ক্ষুদ্র পরিবর্তনের মাধ্যমে ঠিক বিপরীত দিকে চালানো যায়।",
        "যথেষ্ট ধীর একটি প্রক্রিয়া।",
        "এমন একটি প্রক্রিয়া যার প্রাথমিক ও চূড়ান্ত অবস্থা সাম্যাবস্থা।"
      ],
      "explanations": [
        "ভুল: শুধু তন্ত্রটিকে ফিরিয়ে আনা সব সময় সম্ভব, যেমন জুল–গে-লুসাক প্রসারণের পরে গ্যাসকে আবার সংকুচিত করে, কিন্তু তখন পরিবেশে এই প্রক্রিয়ার চিহ্ন থেকে যায়।",
        "সঠিক: এটিই “উল্টো দিকে চালানো চলচ্চিত্র”। ফেরার পথে প্রতিটি বিনিময়ের চিহ্ন বদলে যায়, ফলে তন্ত্র ও তার পরিবেশ কোনো চিহ্ন না রেখে তাদের প্রাথমিক অবস্থায় ফিরে আসে।",
        "ভুল: ধীরগতি যথেষ্ট নয়। কম তাপপরিবাহী দেয়ালে ধীর করা তাপ স্থানান্তর ততক্ষণ অপ্রত্যাবর্তী থাকে, যতক্ষণ তাপমাত্রার পার্থক্য সসীম।",
        "ভুল: সংজ্ঞাটি অবস্থাগুলির সম্পূর্ণ ক্রম এবং প্রতিটি ধাপ উল্টানোর সম্ভাবনার সঙ্গে সম্পর্কিত। জুল–গে-লুসাক প্রসারণ দুটি সাম্যাবস্থাকে যুক্ত করে, অথচ তা অপ্রত্যাবর্তী।"
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
    "l6-q19": {
      "question": "400 K তাপমাত্রার একটি তাপাধার Q = 800 J তাপ গ্রহণ করে। তার এনট্রপির পরিবর্তন কত?",
      "choices": [
        "+2 J/K।",
        "0 J/K, কারণ তার তাপমাত্রা বদলায় না।",
        "−2 J/K।",
        "এটি নির্ভর করে কোন প্রক্রিয়া তাকে এই তাপ সরবরাহ করেছে তার ওপর।"
      ],
      "explanations": [
        "সঠিক: তাপাধারের চূড়ান্ত অবস্থা কেবল Q-এর ওপর নির্ভর করে, এবং এই তাপ তার নিজস্ব তাপমাত্রায় প্রত্যাবর্তীভাবে তাকে দেওয়া যায়। দ্বিতীয় স্বীকার্য থেকে ΔS = Q/T_0 = 800/400 = +2 J/K পাওয়া যায়।",
        "ভুল: স্থির তাপমাত্রা মানেই স্থির এনট্রপি নয়। তাপাধারটি তাপ গ্রহণ করে, এবং dS = δQ_rev/T_0 শূন্য নয়।",
        "ভুল: তাপাধারটি তাপ গ্রহণ করে, Q > 0: তার এনট্রপি বাড়ে।",
        "ভুল: S একটি অবস্থা অপেক্ষক। শুধু তাপাধারের চূড়ান্ত অবস্থাই গুরুত্বপূর্ণ, যা কেবল Q-এর ওপর নির্ভর করে, তাপ যেভাবেই সরবরাহ করা হোক না কেন।"
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
        "প্রায় 917 J।",
        "500 J।",
        "কার্যকরী প্রবাহী না জানলে নির্ধারণ করা অসম্ভব।"
      ],
      "explanations": [
        "ভুল: একটি চক্রে উষ্ণ তাপাধার থেকে গ্রহণ করা সমস্ত তাপকে কাজে রূপান্তর করা যায় না। ΔU = 0 হলেও দ্বিতীয় সূত্র অনুযায়ী তার একটি অংশ শীতল তাপাধারকে দিতে হয়।",
        "ভুল: এই গণনায় ডিগ্রি সেলসিয়াসে তাপমাত্রা, 327 °C ও 27 °C, ব্যবহার করা হয়েছে। কার্নো দক্ষতা পরম তাপমাত্রা দিয়ে প্রকাশ করা হয়: 1 − 300/600 = 1/2।",
        "সঠিক: সর্বাধিক দক্ষতা হলো কার্নো দক্ষতা, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2। তাই |W|_max = η_max Q_H = 500 J। দুটি তাপাধারের মধ্যে চলা একটি প্রত্যাবর্তী যন্ত্র এই মানে পৌঁছায়।",
        "ভুল: সর্বাধিক কাজ গণনার জন্য দুটি তাপাধারের তাপমাত্রা ও গ্রহণ করা তাপই যথেষ্ট: |W|_max = Q_H (1 − T_C/T_H)। প্রবাহী বা ইঞ্জিনের বিস্তারিত বৈশিষ্ট্য জানার প্রয়োজন নেই।"
      ]
    },
    "l6-q8": {
      "question": "দুটি তাপাধারের মধ্যে চলা একটি তাপ ইঞ্জিন প্রতি চক্রে 500 K তাপমাত্রার একটি তাপাধার থেকে Q_H = 1 000 J গ্রহণ করে এবং 300 K তাপমাত্রার একটি তাপাধারকে 700 J দেয়। দ্বিতীয় সূত্র কী বলে?",
      "choices": [
        "এই ইঞ্জিন সম্ভব এবং অপ্রত্যাবর্তী: প্রতি চক্রে ΔS_tot ≈ +0.33 J/K।",
        "এই ইঞ্জিন অসম্ভব, কারণ এটি শীতল তাপাধারকে তাপ দেয়।",
        "এই ইঞ্জিন প্রত্যাবর্তী, কারণ এর প্রবাহী প্রতি চক্রে তার প্রাথমিক অবস্থায় ফিরে আসে।",
        "এই ইঞ্জিন অসম্ভব, কারণ Q_H/T_H + Q_C/T_C > 0।"
      ],
      "explanations": [
        "সঠিক: একটি চক্রে প্রবাহীর এনট্রপি বদলায় না। তাপাধারগুলি −1 000 J ও +700 J গ্রহণ করে, তাই ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0। দক্ষতা 0.30, যা কার্নো সীমা 1 − 300/500 = 0.40-এর চেয়ে কম থাকে।",
        "ভুল: শীতল তাপাধারকে তাপ দেওয়া বরং দুটি তাপাধারের মধ্যে চলা তাপ ইঞ্জিনের জন্য অপরিহার্য। কেলভিন বিবৃতিই এটি বাদ দেওয়া নিষিদ্ধ করে।",
        "ভুল: প্রবাহী প্রাথমিক অবস্থায় ফিরে এলে কেবল তার নিজের এনট্রপির পরিবর্তন শূন্য হয়। তাপাধারগুলির মোট এনট্রপি বাড়ে: চক্রটি অপ্রত্যাবর্তী।",
        "ভুল: পাঠের চিহ্নরীতি অনুযায়ী Q_H = +1 000 J এবং Q_C = −700 J, তাই Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0। ক্লসিয়াসের অসমতা মেনে চলা হয়।"
      ]
    },
    "l6-q9": {
      "question": "একই তাপধারণ ক্ষমতা C = 100 J/K বিশিষ্ট দুটি বস্তু, যাদের তাপমাত্রা 400 K ও 200 K, একটি বিচ্ছিন্ন পাত্রে স্থির আয়তনে সংস্পর্শে আনা হয়। মোট এনট্রপির পরিবর্তন কত?",
      "choices": [
        "প্রায় +11.8 J/K।",
        "0 J/K, কারণ উষ্ণ বস্তু যে তাপ দেয় তা শীতল বস্তুর গৃহীত তাপের সমান।",
        "প্রায় −28.8 J/K, কারণ উষ্ণ বস্তুটি শীতল হয়।",
        "প্রায় +25 J/K, অর্থাৎ Q = 10 000 J নিয়ে Q/(200 K) − Q/(400 K)।"
      ],
      "explanations": [
        "সঠিক: চূড়ান্ত তাপমাত্রা T_f = 300 K। কাল্পনিক প্রত্যাবর্তী পথে ΔS_1 = C ln(300/400) ≈ −28.8 J/K এবং ΔS_2 = C ln(300/200) ≈ +40.5 J/K, তাই ΔS_tot ≈ +11.8 J/K > 0: সংস্পর্শটি অপ্রত্যাবর্তী।",
        "ভুল: শক্তি সংরক্ষিত থাকে, কিন্তু এনট্রপির পরিবর্তনগুলি পরস্পরকে বাতিল করে না, কারণ তাপ বিনিময় ভিন্ন ভিন্ন তাপমাত্রায় ঘটে।",
        "ভুল: এটি কেবল উষ্ণ বস্তুর এনট্রপির পরিবর্তন। উষ্ণ বস্তু যতটা এনট্রপি হারায়, শীতল বস্তু তার চেয়ে বেশি এনট্রপি লাভ করে।",
        "ভুল: এই গণনায় ধরে নেওয়া হয়েছে যে দুটি তাপমাত্রা, দুটি তাপাধারের মতো, স্থির থাকে। এখানে বিনিময়ের সময় প্রতিটি তাপমাত্রা বদলায়: প্রতিটি বস্তুর জন্য C dT/T-এর সমাকল করতে হবে।"
      ]
    },
    "l6-q12": {
      "question": "একটি অপ্রত্যাবর্তী রূপান্তর A ও B দুটি সাম্যাবস্থাকে যুক্ত করে, কিন্তু তার মধ্যবর্তী অবস্থাগুলি সাম্য থেকে অনেক দূরে। কোন বক্তব্যটি সঠিক?",
      "choices": [
        "এনট্রপির পরিবর্তন ΔS হলো প্রকৃত পথে δQ_actual/T_ext-এর সমাকল।",
        "A ও B-এর মধ্যে একটি প্রত্যাবর্তী পথে এনট্রপির পরিবর্তন ΔS গণনা করা যায়, কিন্তু S_e ও S_i প্রকৃত প্রক্রিয়ার ওপর নির্ভর করে।",
        "শুধু A ও B অবস্থা থেকেই বিনিময় করা এনট্রপি S_e ও উৎপন্ন এনট্রপি S_i নির্ধারিত হয়।"
      ],
      "explanations": [
        "ভুল: এই সমাকল বিনিময় করা এনট্রপি S_e দেয়। হিসাবটি হলো ΔS = S_e + S_i: উৎপন্ন এনট্রপি বিবেচনা না করলে প্রকৃতপক্ষে বিনিময় করা তাপ থেকে একাই ΔS গণনা করা যায় না।",
        "সঠিক: S একটি অবস্থা অপেক্ষক, তাই একই অবস্থাদ্বয়কে যুক্ত করা একটি প্রত্যাবর্তী পথে ΔS = ∫ δQ_rev/T গণনা করা যায়। এরপর প্রকৃত বিনিময়ে ফিরে S_e = ∫ δQ_actual/T_ext এবং S_i = ΔS − S_e নির্ধারণ করা হয়।",
        "ভুল: A ও B অবস্থা ΔS নির্ধারণ করে, কিন্তু বিনিময় করা ও উৎপন্ন এনট্রপিতে তার বিভাজন নির্ধারণ করে না। S_e প্রকৃতপক্ষে বিনিময় করা তাপ ও বাইরের তাপমাত্রার ওপর নির্ভর করে; তারপর ΔS = S_e + S_i হিসাব থেকে S_i পাওয়া যায়।"
      ]
    },
    "l6-q20": {
      "question": "তড়িৎপ্রবাহবাহী একটি রোধককে একটি তাপাধার স্থির তাপমাত্রায় রাখে। স্থিতাবস্থায় রোধকের এনট্রপির হিসাব কী?",
      "choices": [
        "ΔS = 0, S_i > 0 এবং S_e = −S_i < 0।",
        "ΔS = 0, তাই প্রক্রিয়াটি প্রত্যাবর্তী।",
        "ΔS > 0, কারণ জুল প্রভাব এনট্রপি উৎপন্ন করে।"
      ],
      "explanations": [
        "সঠিক: রোধকের অবস্থা বদলায় না, তাই ΔS = 0। জুল প্রভাব এনট্রপি উৎপন্ন করে, যা রোধক তাপের সঙ্গে তাপাধারকে দিয়ে দেয়: প্রক্রিয়াটি সমএনট্রপীয়, কিন্তু অপ্রত্যাবর্তী।",
        "ভুল: সমএনট্রপীয় মানেই প্রত্যাবর্তী নয়। উৎপন্ন এনট্রপি তাপাধারকে দেওয়া এনট্রপি দিয়ে পূরণ হয়, এবং মোট এনট্রপি বাড়ে।",
        "ভুল: উৎপন্ন এনট্রপি তাপাধারকে দেওয়া তাপের সঙ্গে রোধক ছেড়ে চলে যায়। রোধকের অবস্থা, এবং তাই তার এনট্রপি, অপরিবর্তিত থাকে।"
      ]
    },
    "l6-q4": {
      "question": "কেলভিন বিবৃতি ঠিক কোন কার্যপ্রক্রিয়াটি নিষিদ্ধ করে?",
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
      "question": "একটি কোয়াসি-স্থিতিশীল সংকোচন অবশ্যই প্রত্যাবর্তী।",
      "choices": [
        "সত্য",
        "মিথ্যা"
      ],
      "explanations": [
        "ভুল: উদাহরণস্বরূপ, একটি কোয়াসি-স্থিতিশীল সংকোচন ঘর্ষণসহ ঘটতে পারে। ঘর্ষণ শক্তির অপচয় ঘটায় এবং গ্যাস সাম্যের কাছাকাছি থাকলেও গ্যাস বা তার পরিবেশে পরিবর্তনের চিহ্ন রেখে যায়।",
        "সঠিক: কোয়াসি-স্থিতিশীল হওয়াই যথেষ্ট নয়। অপচয়ও দূর করতে হবে এবং চাপ, তাপমাত্রা বা রাসায়নিক বিভবের অসীম ক্ষুদ্র পার্থক্যের মাধ্যমে বিনিময় ঘটাতে হবে।"
      ]
    },
    "l6-vf3": {
      "question": "একটি বদ্ধ তন্ত্রের এনট্রপি কখনো কমতে পারে না।",
      "choices": [
        "সত্য",
        "মিথ্যা"
      ],
      "explanations": [
        "ভুল: দ্বিতীয় সূত্র ΔS ≥ 0 কেবল একটি বিচ্ছিন্ন তন্ত্রের ওপর আরোপ করে। তাপ প্রদানকারী একটি বদ্ধ তন্ত্রের এনট্রপি কমতে পারে, যদি প্রদত্ত এনট্রপি তার উৎপন্ন এনট্রপির চেয়ে বেশি হয়।",
        "সঠিক: উদাহরণস্বরূপ, একটি তাপাধারের সংস্পর্শে শীতল হতে থাকা একটি উষ্ণ বস্তু এনট্রপি হারায়। তন্ত্র ও তার পরিবেশের মোট এনট্রপিই কমতে পারে না।"
      ]
    },
    "l6-q7": {
      "question": "সমস্ত শাখা প্রত্যাবর্তী হলে, কোন ক্রমটি একটি আদর্শ গ্যাসের কার্নো ইঞ্জিন চক্র বর্ণনা করে?",
      "choices": [
        "T_H-তে সমতাপ প্রসারণ, প্রত্যাবর্তী রুদ্ধতাপীয় প্রসারণ, T_C-তে সমতাপ সংকোচন, তারপর প্রত্যাবর্তী রুদ্ধতাপীয় সংকোচন।",
        "T_H-তে সমতাপ প্রসারণ, সমায়তনে শীতলীকরণ, T_C-তে সমতাপ সংকোচন, তারপর সমায়তনে উত্তাপন।",
        "T_C-তে সমতাপ প্রসারণ, রুদ্ধতাপীয় সংকোচন, T_H-তে সমতাপ সংকোচন, তারপর রুদ্ধতাপীয় প্রসারণ।"
      ],
      "explanations": [
        "সঠিক: দুটি প্রত্যাবর্তী সমতাপ শাখায় তাপ বিনিময় হয়; রুদ্ধতাপীয় শাখাগুলি তাপ বিনিময় ছাড়াই দুটি তাপমাত্রাকে যুক্ত করে। (V, P) চিত্রে ইঞ্জিন চক্র ঘড়ির কাঁটার দিকে চলে।",
        "ভুল: কার্নো চক্রের সমতাপ শাখাগুলিকে যুক্ত করা শাখাগুলি রুদ্ধতাপীয়, সমায়তনিক নয়। সমায়তনিক শাখা ব্যবহার করলে চক্র ও তার তাপ বিনিময় বদলে যাবে।",
        "ভুল: এই ক্রমটি বিপরীত দিকে চলা কার্নো চক্র বর্ণনা করে। তখন যন্ত্রটি কাজ গ্রহণ করে শীতল তাপাধার থেকে তাপ নেয় এবং উষ্ণ তাপাধারকে তাপ দেয়।"
      ]
    },
    "l6-q21": {
      "question": "N কণাবিশিষ্ট একটি আদর্শ গ্যাস একটি পাত্রে সাম্যাবস্থায় আছে। কোনো নির্দিষ্ট মুহূর্তে সব কণাকে বাম অর্ধেকে পাওয়ার সম্ভাবনা কত?",
      "choices": [
        "2^(−N)।",
        "1/2।",
        "1/N।",
        "ঠিক 0, কারণ দ্বিতীয় সূত্র এটি নিষিদ্ধ করে।"
      ],
      "explanations": [
        "সঠিক: প্রতিটি কণার বাম দিকে থাকার সম্ভাবনা 1/2, এবং আদর্শ গ্যাসের কণাগুলি স্বাধীন। এক মোলের জন্য 2^(−N) ≈ 10^(−1.8×10^23): ঘটনাটি সম্ভব, কিন্তু এতই অসম্ভাব্য যে কখনো দেখা যায় না।",
        "ভুল: 1/2 হলো একটি মাত্র কণার সম্ভাবনা। N টি স্বাধীন কণার জন্য সম্ভাবনাগুলি গুণ হয়।",
        "ভুল: সম্ভাবনা N-এর সঙ্গে সূচকীয়ভাবে কমে, 1/N-এর মতো নয়।",
        "ভুল: বলবিদ্যা এই বিন্যাসের অনুমতি দেয়। এর চরম বিরলতাই পর্যবেক্ষিত অপ্রত্যাবর্তিতার ব্যাখ্যা দেয়, যা সম্ভাবনাভিত্তিক প্রকৃতির।"
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
      "question": "اس سبق میں قابلِ برگشت تبدیلی کیا ہے؟",
      "choices": [
        "ایسی تبدیلی جس کے بعد صرف نظام اپنی ابتدائی حالت میں واپس آ سکتا ہے، خواہ ماحول میں کوئی بھی تبدیلیاں ہوں۔",
        "ایسی تبدیلی جسے، ماحول کے ساتھ تبادلوں سمیت، پابندیوں میں لامتناہی چھوٹی تبدیلی کے ذریعے بالکل الٹی سمت میں طے کیا جا سکے۔",
        "کافی سست تبدیلی۔",
        "ایسی تبدیلی جس کی ابتدائی اور آخری حالتیں توازن کی حالتیں ہوں۔"
      ],
      "explanations": [
        "غلط: صرف نظام کو واپس لانا ہمیشہ ممکن ہے، مثلاً ژول–گے-لوساک پھیلاؤ کے بعد گیس کو دوبارہ سکیڑ کر، مگر تب ماحول میں اس عمل کا نشان رہ جاتا ہے۔",
        "درست: یہ “الٹی چلائی گئی فلم” ہے۔ واپسی میں ہر تبادلے کی علامت بدل جاتی ہے، یوں نظام اور اس کا ماحول کوئی نشان چھوڑے بغیر اپنی ابتدائی حالتوں میں لوٹ آتے ہیں۔",
        "غلط: سست ہونا کافی نہیں۔ کم حرارت گزار دیوار سے سست کیا گیا حرارتی انتقال اس وقت تک ناقابلِ برگشت رہتا ہے جب تک درجاتِ حرارت میں محدود فرق ہو۔",
        "غلط: تعریف حالتوں کے پورے تسلسل اور ہر مرحلے کو الٹنے کے امکان سے متعلق ہے۔ ژول–گے-لوساک پھیلاؤ توازن کی دو حالتوں کو ملاتا ہے، اور وہ ناقابلِ برگشت ہے۔"
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
    "l6-q19": {
      "question": "400 K پر ایک حرارتی ذخیرہ حرارت Q = 800 J وصول کرتا ہے۔ اس کی اینٹروپی کی تبدیلی کیا ہے؟",
      "choices": [
        "+2 J/K۔",
        "0 J/K، کیونکہ اس کا درجۂ حرارت نہیں بدلتا۔",
        "−2 J/K۔",
        "یہ اس تبدیلی پر منحصر ہے جس نے اسے یہ حرارت فراہم کی۔"
      ],
      "explanations": [
        "درست: ذخیرے کی آخری حالت صرف Q پر منحصر ہے، اور یہ حرارت اسے اس کے اپنے درجۂ حرارت پر قابلِ برگشت طریقے سے دی جا سکتی ہے۔ دوسرا مسلّمہ ΔS = Q/T_0 = 800/400 = +2 J/K دیتا ہے۔",
        "غلط: مستقل درجۂ حرارت کا مطلب مستقل اینٹروپی نہیں۔ ذخیرہ حرارت وصول کرتا ہے، اور dS = δQ_rev/T_0 صفر نہیں۔",
        "غلط: ذخیرہ حرارت وصول کرتا ہے، Q > 0: اس کی اینٹروپی بڑھتی ہے۔",
        "غلط: S حالت کا تفاعل ہے۔ صرف ذخیرے کی آخری حالت اہم ہے، جو صرف Q پر منحصر ہے، خواہ حرارت اسے کسی بھی طریقے سے فراہم کی گئی ہو۔"
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
        "تقریباً 917 J۔",
        "500 J۔",
        "کام کرنے والے سیال کو جانے بغیر تعین ناممکن ہے۔"
      ],
      "explanations": [
        "غلط: ایک چکر میں گرم ذخیرے سے لی گئی تمام حرارت کو کام میں تبدیل نہیں کیا جا سکتا۔ دوسرا اصول اس کا کچھ حصہ ٹھنڈے ذخیرے کو دینا لازم کرتا ہے، خواہ ΔU = 0 ہو۔",
        "غلط: یہ حساب درجۂ سیلسیس میں درجاتِ حرارت، 327 °C اور 27 °C، استعمال کرتا ہے۔ کارنو کی کارکردگی مطلق درجاتِ حرارت سے ظاہر کی جاتی ہے: 1 − 300/600 = 1/2۔",
        "درست: زیادہ سے زیادہ کارکردگی کارنو کی ہے، η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2۔ یوں |W|_max = η_max Q_H = 500 J۔ دو حرارتی ذخیروں والی قابلِ برگشت مشین یہ قدر حاصل کرتی ہے۔",
        "غلط: دونوں ذخیروں کے درجاتِ حرارت اور وصول کردہ حرارت زیادہ سے زیادہ کام نکالنے کے لیے کافی ہیں: |W|_max = Q_H (1 − T_C/T_H)۔ سیال یا انجن کی تفصیلات جاننا ضروری نہیں۔"
      ]
    },
    "l6-q8": {
      "question": "دو حرارتی ذخیروں والا ایک انجن ہر چکر میں 500 K کے حرارتی ذخیرے سے Q_H = 1 000 J لیتا ہے اور 300 K کے ذخیرے کو 700 J دیتا ہے۔ دوسرا اصول کیا کہتا ہے؟",
      "choices": [
        "یہ انجن ممکن اور ناقابلِ برگشت ہے: ہر چکر میں ΔS_tot ≈ +0.33 J/K۔",
        "یہ انجن ناممکن ہے، کیونکہ یہ ٹھنڈے ذخیرے کو حرارت دیتا ہے۔",
        "یہ انجن قابلِ برگشت ہے، کیونکہ اس کا سیال ہر چکر میں اپنی ابتدائی حالت میں لوٹ آتا ہے۔",
        "یہ انجن ناممکن ہے، کیونکہ Q_H/T_H + Q_C/T_C > 0۔"
      ],
      "explanations": [
        "درست: ایک چکر میں سیال کی اینٹروپی نہیں بدلتی۔ ذخیرے −1 000 J اور +700 J وصول کرتے ہیں، لہٰذا ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0۔ کارکردگی 0.30 کارنو کی حد 1 − 300/500 = 0.40 سے کم رہتی ہے۔",
        "غلط: ٹھنڈے ذخیرے کو حرارت دینا تو دو حرارتی ذخیروں والے انجن کے لیے ناگزیر ہے۔ کیلون کا بیان ہی اس کے بغیر کام چلانے کو منع کرتا ہے۔",
        "غلط: سیال کا ابتدائی حالت میں لوٹنا صرف اس کی اپنی اینٹروپی کی تبدیلی کو صفر کرتا ہے۔ ذخیروں کی کل اینٹروپی بڑھتی ہے: چکر ناقابلِ برگشت ہے۔",
        "غلط: سبق کی علامتی روایت میں Q_H = +1 000 J اور Q_C = −700 J، لہٰذا Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0۔ کلازیئس کی عدم مساوات پوری ہوتی ہے۔"
      ]
    },
    "l6-q9": {
      "question": "یکساں حرارتی گنجائش C = 100 J/K والے دو اجسام، جن کے درجاتِ حرارت 400 K اور 200 K ہیں، ایک الگ تھلگ ظرف میں مستقل حجم پر رابطے میں لائے جاتے ہیں۔ کل اینٹروپی کی تبدیلی کیا ہے؟",
      "choices": [
        "تقریباً +11.8 J/K۔",
        "0 J/K، کیونکہ گرم جسم کی دی گئی حرارت ٹھنڈے جسم کی وصول کردہ حرارت کے برابر ہے۔",
        "تقریباً −28.8 J/K، کیونکہ گرم جسم ٹھنڈا ہوتا ہے۔",
        "تقریباً +25 J/K، یعنی Q = 10 000 J کے ساتھ Q/(200 K) − Q/(400 K)۔"
      ],
      "explanations": [
        "درست: آخری درجۂ حرارت T_f = 300 K ہے۔ فرضی قابلِ برگشت راستوں پر ΔS_1 = C ln(300/400) ≈ −28.8 J/K اور ΔS_2 = C ln(300/200) ≈ +40.5 J/K، لہٰذا ΔS_tot ≈ +11.8 J/K > 0: رابطہ ناقابلِ برگشت ہے۔",
        "غلط: توانائی محفوظ رہتی ہے، مگر اینٹروپی کی تبدیلیاں ایک دوسرے کو منسوخ نہیں کرتیں، کیونکہ حرارت کا تبادلہ مختلف درجاتِ حرارت پر ہوتا ہے۔",
        "غلط: یہ صرف گرم جسم کی اینٹروپی کی تبدیلی ہے۔ ٹھنڈا جسم اس سے زیادہ اینٹروپی حاصل کرتا ہے جتنی گرم جسم کھوتا ہے۔",
        "غلط: یہ حساب فرض کرتا ہے کہ دونوں درجاتِ حرارت، دو حرارتی ذخیروں کی طرح، مستقل رہتے ہیں۔ یہاں تبادلے کے دوران ہر درجۂ حرارت بدلتا ہے: ہر جسم کے لیے C dT/T کا تکمل لینا ضروری ہے۔"
      ]
    },
    "l6-q12": {
      "question": "ایک ناقابلِ برگشت تبدیلی توازن کی دو حالتوں A اور B کو ملاتی ہے، مگر اس کی درمیانی حالتیں توازن سے دور ہیں۔ کون سا بیان درست ہے؟",
      "choices": [
        "اینٹروپی کی تبدیلی ΔS حقیقی راستے پر δQ_actual/T_ext کا تکمل ہے۔",
        "اینٹروپی کی تبدیلی ΔS کا حساب A اور B کے درمیان قابلِ برگشت راستے سے کیا جا سکتا ہے، جبکہ S_e اور S_i حقیقی عمل پر منحصر ہیں۔",
        "صرف حالتیں A اور B مبادلہ شدہ اینٹروپی S_e اور پیدا شدہ اینٹروپی S_i کو متعین کرتی ہیں۔"
      ],
      "explanations": [
        "غلط: یہ تکمل S_e، یعنی مبادلہ شدہ اینٹروپی، دیتا ہے۔ موازنہ ΔS = S_e + S_i ہے: واقعی مبادلہ ہونے والی حرارت، پیدا شدہ اینٹروپی کو ملحوظ رکھے بغیر، ΔS نکالنے کے لیے کافی نہیں۔",
        "درست: S حالت کا تفاعل ہے، اس لیے ΔS = ∫ δQ_rev/T انہی حالتوں کو ملانے والے قابلِ برگشت راستے سے نکالا جا سکتا ہے۔ پھر حقیقی تبادلوں پر واپس آ کر S_e = ∫ δQ_actual/T_ext اور S_i = ΔS − S_e متعین کیے جاتے ہیں۔",
        "غلط: حالتیں A اور B، ΔS کو متعین کرتی ہیں، مگر اس کی مبادلہ شدہ اور پیدا شدہ اینٹروپی میں تقسیم کو نہیں۔ S_e واقعی مبادلہ ہونے والی حرارتوں اور بیرونی درجاتِ حرارت پر منحصر ہے؛ پھر S_i موازنے ΔS = S_e + S_i سے ملتا ہے۔"
      ]
    },
    "l6-q20": {
      "question": "ایک مزاحم جس میں برقی رو گزر رہی ہے، ایک حرارتی ذخیرے کے ذریعے مستقل درجۂ حرارت پر رکھا جاتا ہے۔ مستقل حالت میں مزاحم کی اینٹروپی کا موازنہ کیا ہے؟",
      "choices": [
        "ΔS = 0، S_i > 0 اور S_e = −S_i < 0۔",
        "ΔS = 0، لہٰذا تبدیلی قابلِ برگشت ہے۔",
        "ΔS > 0، کیونکہ ژول اثر اینٹروپی پیدا کرتا ہے۔"
      ],
      "explanations": [
        "درست: مزاحم کی حالت نہیں بدلتی، لہٰذا ΔS = 0۔ ژول اثر اینٹروپی پیدا کرتا ہے، جسے مزاحم حرارت کے ساتھ ذخیرے کو دے دیتا ہے: تبدیلی ہم اینٹروپی ہے، مگر ناقابلِ برگشت۔",
        "غلط: ہم اینٹروپی ہونے کا مطلب قابلِ برگشت ہونا نہیں۔ پیدا شدہ اینٹروپی ذخیرے کو دی گئی اینٹروپی سے متوازن ہوتی ہے، اور کل اینٹروپی بڑھتی ہے۔",
        "غلط: پیدا شدہ اینٹروپی ذخیرے کو دی گئی حرارت کے ساتھ مزاحم سے نکل جاتی ہے۔ مزاحم کی حالت، اور اس لیے اس کی اینٹروپی، جوں کی توں رہتی ہے۔"
      ]
    },
    "l6-q4": {
      "question": "کیلون کا بیان خاص طور پر کس طرزِ عمل کو منع کرتا ہے؟",
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
      "question": "نیم سکونی سکڑاؤ لازماً قابلِ برگشت ہوتا ہے۔",
      "choices": [
        "درست",
        "غلط"
      ],
      "explanations": [
        "غلط: مثلاً نیم سکونی سکڑاؤ رگڑ کے ساتھ ہو سکتا ہے۔ رگڑ توانائی منتشر کرتی ہے اور گیس یا اس کے ماحول میں نشان چھوڑتی ہے، خواہ گیس توازن کے قریب رہے۔",
        "درست: نیم سکونی ہونا کافی نہیں۔ تبدد بھی ختم کرنا اور تبادلے دباؤ، درجۂ حرارت یا کیمیائی پوٹینشل کے لامتناہی چھوٹے فرق سے انجام دینا ضروری ہے۔"
      ]
    },
    "l6-vf3": {
      "question": "بند نظام کی اینٹروپی کبھی کم نہیں ہو سکتی۔",
      "choices": [
        "درست",
        "غلط"
      ],
      "explanations": [
        "غلط: دوسرا اصول ΔS ≥ 0 صرف الگ تھلگ نظام پر لازم کرتا ہے۔ حرارت دینے والے بند نظام کی اینٹروپی کم ہو سکتی ہے، اگر دی گئی اینٹروپی اس کی پیدا کردہ اینٹروپی سے زیادہ ہو۔",
        "درست: مثلاً حرارتی ذخیرے کے رابطے میں ٹھنڈا ہوتا ہوا گرم جسم اینٹروپی کھوتا ہے۔ نظام اور اس کے ماحول کی کل اینٹروپی ہی کم نہیں ہو سکتی۔"
      ]
    },
    "l6-q7": {
      "question": "کون سا تسلسل مثالی گیس کے کارنو انجن چکر کو بیان کرتا ہے، جبکہ اس کی تمام شاخیں قابلِ برگشت ہوں؟",
      "choices": [
        "T_H پر ہم دما پھیلاؤ، قابلِ برگشت ادیابیاتی پھیلاؤ، T_C پر ہم دما سکڑاؤ، پھر قابلِ برگشت ادیابیاتی سکڑاؤ۔",
        "T_H پر ہم دما پھیلاؤ، مستقل حجم پر ٹھنڈا ہونا، T_C پر ہم دما سکڑاؤ، پھر مستقل حجم پر گرم ہونا۔",
        "T_C پر ہم دما پھیلاؤ، ادیابیاتی سکڑاؤ، T_H پر ہم دما سکڑاؤ، پھر ادیابیاتی پھیلاؤ۔"
      ],
      "explanations": [
        "درست: حرارت کا تبادلہ دو قابلِ برگشت ہم دما شاخوں پر ہوتا ہے؛ ادیابیاتی شاخیں دونوں درجاتِ حرارت کو حرارت کے تبادلے کے بغیر ملاتی ہیں۔ انجن چکر خاکے (V, P) میں گھڑی کی سوئیوں کی سمت طے ہوتا ہے۔",
        "غلط: کارنو چکر کی ہم دما شاخوں کو ملانے والی شاخیں ادیابیاتی ہیں، مستقل حجم والی نہیں۔ مستقل حجم والی شاخیں چکر اور اس کے حرارتی تبادلوں کو بدل دیں گی۔",
        "غلط: یہ تسلسل کارنو چکر کو الٹی سمت میں بیان کرتا ہے۔ تب مشین ٹھنڈے حرارتی ذخیرے سے حرارت لے کر گرم ذخیرے کو دینے کے لیے کام وصول کرتی ہے۔"
      ]
    },
    "l6-q21": {
      "question": "N ذرات پر مشتمل ایک مثالی گیس ایک ظرف میں توازن میں ہے۔ کسی دیے گئے لمحے تمام ذرات کے بائیں نصف میں پائے جانے کا احتمال کیا ہے؟",
      "choices": [
        "2^(−N)۔",
        "1/2۔",
        "1/N۔",
        "بالکل 0، کیونکہ دوسرا اصول اسے منع کرتا ہے۔"
      ],
      "explanations": [
        "درست: ہر ذرے کے بائیں جانب ہونے کا احتمال 1/2 ہے، اور مثالی گیس کے ذرات ایک دوسرے سے آزاد ہیں۔ ایک مول کے لیے 2^(−N) ≈ 10^(−1.8×10^23): یہ واقعہ ممکن ہے، مگر اتنا غیر محتمل کہ کبھی مشاہدے میں نہیں آتا۔",
        "غلط: 1/2 ایک واحد ذرے کا احتمال ہے۔ N آزاد ذرات کے لیے احتمالات آپس میں ضرب ہوتے ہیں۔",
        "غلط: احتمال N کے ساتھ قوت نمائی طور پر گھٹتا ہے، نہ کہ 1/N کی طرح۔",
        "غلط: میکانیات اس ترتیب کی اجازت دیتی ہے۔ اس کی انتہائی نایابی مشاہدہ شدہ عدمِ برگشت کی وضاحت کرتی ہے، جو احتمالی نوعیت کی ہے۔"
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
      "question": "Katika somo hili, mabadiliko rejeshi ni nini?",
      "choices": [
        "Mabadiliko ambayo baada yake mfumo pekee unaweza kurudia hali yake ya awali, bila kujali mabadiliko ya mazingira.",
        "Mabadiliko yanayoweza kufuatwa kinyume kabisa, pamoja na ubadilishanaji na mazingira, kwa badiliko dogo lisilo na kikomo la vikwazo.",
        "Mabadiliko ya polepole vya kutosha.",
        "Mabadiliko ambayo hali zake za awali na za mwisho ni hali za usawa."
      ],
      "explanations": [
        "Si sahihi: kurudisha mfumo pekee kunawezekana kila wakati, kwa mfano kwa kubana tena gesi baada ya upanuzi wa Joule–Gay-Lussac, lakini mazingira basi hubaki na alama ya operesheni hiyo.",
        "Sahihi: hii ndiyo «filamu inayoonyeshwa kinyumenyume». Kila ubadilishanaji hubadilisha ishara wakati wa kurudi, hivyo mfumo na mazingira yake hurudia hali zao za awali bila kuacha alama.",
        "Si sahihi: upolepole hautoshi. Uhamishaji wa joto unaopunguzwa kasi na ukuta unaopitisha joto kidogo unabaki usio rejeshi maadamu halijoto zinatofautiana kwa kiasi chenye ukomo.",
        "Si sahihi: ufafanuzi unahusu mfululizo mzima wa hali na uwezekano wa kugeuza kila hatua. Upanuzi wa Joule–Gay-Lussac unaunganisha hali mbili za usawa, na si rejeshi."
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
    "l6-q19": {
      "question": "Thermostati yenye halijoto 400 K inapokea joto Q = 800 J. Badiliko lake la entropy ni kiasi gani?",
      "choices": [
        "+2 J/K.",
        "0 J/K, kwa sababu halijoto yake haibadiliki.",
        "−2 J/K.",
        "Linategemea mabadiliko yaliyoipa joto hilo."
      ],
      "explanations": [
        "Sahihi: hali ya mwisho ya thermostati hutegemea tu Q, na tunaweza kuipa joto hilo kwa njia rejeshi katika halijoto yake yenyewe. Postulati ya pili inatoa ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "Si sahihi: halijoto thabiti haimaanishi entropy thabiti. Thermostati inapokea joto, na dS = δQ_rev/T_0 si sifuri.",
        "Si sahihi: thermostati ndiyo inayopokea joto, Q > 0: entropy yake huongezeka.",
        "Si sahihi: S ni dhima ya hali. Kinachojalisha ni hali ya mwisho ya thermostati pekee, inayotegemea tu Q, bila kujali jinsi joto lilivyotolewa kwake."
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
        "Takribani 917 J.",
        "500 J.",
        "Haiwezekani kuamua bila kujua kiowevu tendaji."
      ],
      "explanations": [
        "Si sahihi: haiwezekani kubadilisha joto lote linalopokelewa kutoka thermostati moto kuwa kazi katika mzunguko. Kanuni ya pili inahitaji sehemu itolewe kwa thermostati baridi, hata ikiwa ΔU = 0.",
        "Si sahihi: hesabu hii inatumia halijoto katika nyuzi za Selsiasi, 327 °C na 27 °C. Ufanisi wa Carnot huonyeshwa kwa halijoto kamili (kelvini): 1 − 300/600 = 1/2.",
        "Sahihi: ufanisi wa juu zaidi ni wa Carnot, η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. Hivyo |W|_max = η_max Q_H = 500 J. Mashine ya thermostati mbili iliyo rejeshi hufikia thamani hii.",
        "Si sahihi: halijoto za thermostati mbili na joto linalopokelewa vinatosha kuhesabu kazi ya juu zaidi: |W|_max = Q_H (1 − T_C/T_H). Si lazima kujua kiowevu wala maelezo ya injini."
      ]
    },
    "l6-q8": {
      "question": "Injini ya thermostati mbili inapokea Q_H = 1 000 J kutoka thermostati yenye halijoto 500 K na kutoa 700 J kwa thermostati yenye halijoto 300 K katika kila mzunguko. Kanuni ya pili inasema nini?",
      "choices": [
        "Injini hii inaruhusiwa na si rejeshi: ΔS_tot ≈ +0.33 J/K kwa kila mzunguko.",
        "Injini hii haiwezekani, kwa sababu inatoa joto kwa thermostati baridi.",
        "Injini hii ni rejeshi, kwa sababu kiowevu chake hurudia hali yake ya awali katika kila mzunguko.",
        "Injini hii haiwezekani, kwa sababu Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "Sahihi: katika mzunguko, entropy ya kiowevu haibadiliki. Thermostati zinapokea −1 000 J na +700 J, hivyo ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0. Ufanisi wa 0.30 unabaki chini ya kikomo cha Carnot 1 − 300/500 = 0.40.",
        "Si sahihi: kinyume chake, kutoa joto kwa thermostati baridi ni lazima kwa injini ya thermostati mbili. Ni tamko la Kelvin linalokataza kuliepuka.",
        "Si sahihi: kurudi kwa kiowevu katika hali yake ya awali kunafuta tu badiliko la entropy yake yenyewe. Entropy ya thermostati huongezeka kwa jumla: mzunguko si rejeshi.",
        "Si sahihi: kwa utaratibu wa ishara wa kozi, Q_H = +1 000 J na Q_C = −700 J, hivyo Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0. Ukosefu wa usawa wa Clausius unatimizwa."
      ]
    },
    "l6-q9": {
      "question": "Miili miwili yenye uwezo wa joto uleule C = 100 J/K, katika halijoto 400 K na 200 K, inagusanishwa ndani ya chombo kilichotengwa, kwa ujazo thabiti. Badiliko la entropy ya jumla ni kiasi gani?",
      "choices": [
        "Takribani +11.8 J/K.",
        "0 J/K, kwa sababu joto linalotolewa na mwili moto ni sawa na joto linalopokelewa na mwili baridi.",
        "Takribani −28.8 J/K, kwa sababu mwili moto unapoa.",
        "Takribani +25 J/K, yaani Q/(200 K) − Q/(400 K) na Q = 10 000 J."
      ],
      "explanations": [
        "Sahihi: halijoto ya mwisho ni T_f = 300 K. Kwenye njia rejeshi za kubuni, ΔS_1 = C ln(300/400) ≈ −28.8 J/K na ΔS_2 = C ln(300/200) ≈ +40.5 J/K, hivyo ΔS_tot ≈ +11.8 J/K > 0: mgusano si rejeshi.",
        "Si sahihi: nishati huhifadhiwa, lakini mabadiliko ya entropy hayafidiani, kwa sababu joto hubadilishwa katika halijoto tofauti.",
        "Si sahihi: hili ni badiliko la entropy ya mwili moto pekee. Mwili baridi unapata entropy zaidi kuliko ile ambayo mwili moto unapoteza.",
        "Si sahihi: hesabu hii inadhani kwamba halijoto zote mbili zinabaki thabiti, kama kwa thermostati mbili. Hapa, halijoto ya kila mwili hubadilika wakati wa ubadilishanaji: lazima kuchukua integrali ya C dT/T kwa kila mwili."
      ]
    },
    "l6-q12": {
      "question": "Mabadiliko yasiyo rejeshi yanaunganisha hali mbili za usawa A na B, lakini hali zake za kati ziko mbali na usawa. Ni kauli ipi iliyo sahihi?",
      "choices": [
        "Badiliko la entropy ΔS ni integrali ya δQ_actual/T_ext kwenye njia halisi.",
        "Badiliko la entropy ΔS linaweza kuhesabiwa kwenye njia rejeshi kati ya A na B, ilhali S_e na S_i hutegemea mchakato halisi.",
        "Hali A na B pekee huamua entropy inayobadilishwa S_e na entropy inayozalishwa S_i."
      ],
      "explanations": [
        "Si sahihi: integrali hii hutoa S_e, entropy inayobadilishwa. Mizani ni ΔS = S_e + S_i: joto linalobadilishwa kweli halitoshi kuhesabu ΔS bila kuzingatia entropy inayozalishwa.",
        "Sahihi: S ni dhima ya hali, kwa hiyo ΔS = ∫ δQ_rev/T inaweza kuhesabiwa kwenye njia rejeshi inayounganisha hali zilezile. Kisha tunarudia ubadilishanaji halisi ili kupata S_e = ∫ δQ_actual/T_ext na S_i = ΔS − S_e.",
        "Si sahihi: hali A na B huweka ΔS, lakini si mgawanyo wake kuwa entropy inayobadilishwa na inayozalishwa. S_e hutegemea joto linalobadilishwa kweli na halijoto za nje; basi S_i hupatikana kwa mizani ΔS = S_e + S_i."
      ]
    },
    "l6-q20": {
      "question": "Kinzani inayopitishwa mkondo wa umeme inadumishwa kwenye halijoto thabiti na thermostati. Katika hali ya mtiririko thabiti, mizani ya entropy ya kinzani ni ipi?",
      "choices": [
        "ΔS = 0, S_i > 0 na S_e = −S_i < 0.",
        "ΔS = 0, hivyo mabadiliko ni rejeshi.",
        "ΔS > 0, kwa sababu athari ya Joule huzalisha entropy."
      ],
      "explanations": [
        "Sahihi: hali ya kinzani haibadiliki, hivyo ΔS = 0. Athari ya Joule huzalisha entropy, ambayo kinzani inaitoa kwa thermostati pamoja na joto: mabadiliko ni ya entropy thabiti, lakini si rejeshi.",
        "Si sahihi: entropy thabiti haimaanishi rejeshi. Entropy inayozalishwa hufidiwa na entropy inayotolewa kwa thermostati, na entropy ya jumla huongezeka.",
        "Si sahihi: entropy inayozalishwa huondoka kwenye kinzani pamoja na joto linalotolewa kwa thermostati. Hali ya kinzani, na hivyo entropy yake, inabaki bila kubadilika."
      ]
    },
    "l6-q4": {
      "question": "Ni utendaji upi hasa unaokatazwa na tamko la Kelvin?",
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
      "question": "Mbano nusutuli lazima uwe rejeshi.",
      "choices": [
        "Kweli",
        "Si kweli"
      ],
      "explanations": [
        "Si sahihi: mbano nusutuli unaweza, kwa mfano, kufanyika kwa msuguano. Msuguano hutawanya nishati na kuacha alama katika gesi au mazingira yake, hata ikiwa gesi inabaki karibu na usawa.",
        "Sahihi: hali ya nusutuli haitoshi. Lazima pia kuondoa utawanyaji wa nishati na kuendesha ubadilishanaji kwa tofauti ndogo zisizo na kikomo za shinikizo, halijoto au potenshali ya kemikali."
      ]
    },
    "l6-vf3": {
      "question": "Entropy ya mfumo funge haiwezi kamwe kupungua.",
      "choices": [
        "Kweli",
        "Si kweli"
      ],
      "explanations": [
        "Si sahihi: kanuni ya pili inalazimisha ΔS ≥ 0 kwa mfumo uliotengwa pekee. Entropy ya mfumo funge unaotoa joto inaweza kupungua, ikiwa entropy unayotoa inazidi ile unayozalisha.",
        "Sahihi: kwa mfano, mwili moto unaopoa kwa kugusana na thermostati hupoteza entropy. Ni entropy ya jumla ya mfumo na mazingira yake ambayo haiwezi kupungua."
      ]
    },
    "l6-q7": {
      "question": "Ni mfuatano upi unaoeleza mzunguko wa Carnot wa gesi bora unaofanya kazi kama injini, matawi yake yote yakiwa rejeshi?",
      "choices": [
        "Upanuzi wa halijoto thabiti T_H, upanuzi wa adiabati rejeshi, mbano wa halijoto thabiti T_C, kisha mbano wa adiabati rejeshi.",
        "Upanuzi wa halijoto thabiti T_H, kupoa kwa ujazo thabiti, mbano wa halijoto thabiti T_C, kisha kupashwa joto kwa ujazo thabiti.",
        "Upanuzi wa halijoto thabiti T_C, mbano wa adiabati, mbano wa halijoto thabiti T_H, kisha upanuzi wa adiabati."
      ],
      "explanations": [
        "Sahihi: ubadilishanaji wa joto hutokea kwenye matawi mawili ya halijoto thabiti yaliyo rejeshi; adiabati huunganisha halijoto hizo mbili bila ubadilishanaji wa joto. Mzunguko wa injini hufuatwa katika mwelekeo wa saa kwenye mchoro wa (V, P).",
        "Si sahihi: viunganishi kati ya matawi ya halijoto thabiti katika mzunguko wa Carnot ni vya adiabati, si vya ujazo thabiti. Matawi ya ujazo thabiti yangebadilisha mzunguko na ubadilishanaji wake wa joto.",
        "Si sahihi: mfuatano huu unaeleza mzunguko wa Carnot unaofuatwa kinyume. Mashine basi hupokea kazi ili kuchukua joto kutoka thermostati baridi na kutoa joto kwa thermostati moto."
      ]
    },
    "l6-q21": {
      "question": "Gesi bora yenye chembe N iko katika usawa ndani ya chombo. Uwezekano wa kupata, katika wakati fulani, chembe zote katika nusu ya kushoto ni kiasi gani?",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "Sifuri kabisa, kwa sababu kanuni ya pili inakataza hilo."
      ],
      "explanations": [
        "Sahihi: kila chembe ina uwezekano wa 1/2 wa kuwa upande wa kushoto, na chembe za gesi bora ni huru. Kwa moli moja, 2^(−N) ≈ 10^(−1.8×10^23): tukio linawezekana, lakini ni nadra mno kiasi kwamba halionekani kamwe.",
        "Si sahihi: 1/2 ni uwezekano kwa chembe moja tu. Kwa chembe N huru, uwezekano huzidishana.",
        "Si sahihi: uwezekano hupungua kieksponenshali pamoja na N, si kama 1/N.",
        "Si sahihi: mekaniki inaruhusu mpangilio huu. Uhaba wake uliokithiri unaeleza kutokuwa rejeshi kunakoonekana, ambako asili yake ni ya kiuwezekano."
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
      "question": "در این درس، فرایند برگشت‌پذیر چیست؟",
      "choices": [
        "فرایندی که پس از آن فقط خود دستگاه می‌تواند به حالت اولیه‌اش بازگردد، هر تغییری که در محیط رخ داده باشد.",
        "فرایندی که می‌توان آن را، همراه با تبادل‌ها با محیط، با تغییری بی‌نهایت کوچک در قیدها دقیقاً در جهت عکس پیمود.",
        "فرایندی به‌اندازهٔ کافی کند.",
        "فرایندی که حالت‌های اولیه و نهایی آن حالت‌های تعادل‌اند."
      ],
      "explanations": [
        "نادرست: بازگرداندن خود دستگاه همیشه ممکن است، مثلاً با متراکم‌کردن دوبارهٔ گاز پس از انبساط ژول–گی لوساک، اما در این صورت ردی از این عمل در محیط باقی می‌ماند.",
        "درست: این همان «فیلمِ از آخر به اول پخش‌شده» است. در بازگشت، هر تبادل تغییر علامت می‌دهد، به‌طوری‌که دستگاه و محیط آن بدون برجاگذاشتن هیچ ردی به حالت‌های اولیه‌شان بازمی‌گردند.",
        "نادرست: کندی کافی نیست. انتقال گرمایی که دیواره‌ای با رسانندگی کم آن را کند می‌کند، تا وقتی اختلاف دماها متناهی باشد برگشت‌ناپذیر می‌ماند.",
        "نادرست: تعریف به کل دنبالهٔ حالت‌ها و به امکان وارون‌کردن هر مرحله مربوط است. انبساط ژول–گی لوساک دو حالت تعادل را به هم وصل می‌کند و برگشت‌ناپذیر است."
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
    "l6-q19": {
      "question": "یک مخزن گرمایی در دمای 400 K گرمای Q = 800 J دریافت می‌کند. تغییر آنتروپی آن چقدر است؟",
      "choices": [
        "+2 J/K.",
        "0 J/K، زیرا دمای آن تغییر نمی‌کند.",
        "−2 J/K.",
        "به فرایندی بستگی دارد که این گرما را به آن داده است."
      ],
      "explanations": [
        "درست: حالت نهایی مخزن فقط به Q بستگی دارد، و می‌توان این گرما را به‌طور برگشت‌پذیر در دمای خود مخزن به آن داد. اصل موضوع دوم می‌دهد ΔS = Q/T_0 = 800/400 = +2 J/K.",
        "نادرست: دمای ثابت به معنای آنتروپی ثابت نیست. مخزن گرما دریافت می‌کند و dS = δQ_rev/T_0 صفر نیست.",
        "نادرست: مخزن گرما را دریافت می‌کند، Q > 0: آنتروپی آن افزایش می‌یابد.",
        "نادرست: S تابع حالت است. فقط حالت نهایی مخزن اهمیت دارد که تنها به Q بستگی دارد، به هر شیوه‌ای که گرما به آن داده شده باشد."
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
        "حدود 917 J.",
        "500 J.",
        "بدون شناخت سیال عامل نمی‌توان تعیین کرد."
      ],
      "explanations": [
        "نادرست: نمی‌توان تمام گرمای دریافتی از مخزن گرم را در یک چرخه به کار تبدیل کرد. اصل دوم الزام می‌کند بخشی از آن به مخزن سرد داده شود، حتی اگر ΔU = 0 باشد.",
        "نادرست: این محاسبه دماها را برحسب درجهٔ سلسیوس، 327 °C و 27 °C، به کار می‌برد. بازده کارنو با دماهای مطلق بیان می‌شود: 1 − 300/600 = 1/2.",
        "درست: بیشینهٔ بازده همان بازده کارنو است: η_max = 1 − T_C/T_H = 1 − 300/600 = 1/2. بنابراین |W|_max = η_max Q_H = 500 J. یک ماشین دو‌مخزنی برگشت‌پذیر به این مقدار می‌رسد.",
        "نادرست: دماهای دو مخزن و گرمای دریافتی برای محاسبهٔ بیشینهٔ کار کافی‌اند: |W|_max = Q_H (1 − T_C/T_H). نیازی به شناخت سیال یا جزئیات موتور نیست."
      ]
    },
    "l6-q8": {
      "question": "یک موتور دو‌مخزنی در هر چرخه Q_H = 1 000 J از مخزنی در دمای 500 K دریافت می‌کند و 700 J به مخزنی در دمای 300 K می‌دهد. اصل دوم چه می‌گوید؟",
      "choices": [
        "این موتور مجاز و برگشت‌ناپذیر است: ΔS_tot ≈ +0.33 J/K در هر چرخه.",
        "این موتور ناممکن است، زیرا به مخزن سرد گرما می‌دهد.",
        "این موتور برگشت‌پذیر است، زیرا سیال آن در هر چرخه به حالت اولیه‌اش بازمی‌گردد.",
        "این موتور ناممکن است، زیرا Q_H/T_H + Q_C/T_C > 0."
      ],
      "explanations": [
        "درست: در یک چرخه آنتروپی سیال تغییر نمی‌کند. مخزن‌ها −1 000 J و +700 J دریافت می‌کنند، پس ΔS_tot = −1 000/500 + 700/300 ≈ +0.33 J/K > 0. بازده 0.30 کمتر از کران کارنو 1 − 300/500 = 0.40 می‌ماند.",
        "نادرست: دادن گرما به مخزن سرد، برعکس، برای موتور دو‌مخزنی ضروری است. بیان کلوین است که چشم‌پوشی از آن را منع می‌کند.",
        "نادرست: بازگشت سیال به حالت اولیه‌اش فقط تغییر آنتروپی خود آن را صفر می‌کند. آنتروپی مخزن‌ها در مجموع افزایش می‌یابد: چرخه برگشت‌ناپذیر است.",
        "نادرست: با قراردادهای درس، Q_H = +1 000 J و Q_C = −700 J، پس Q_H/T_H + Q_C/T_C ≈ −0.33 J/K ≤ 0. نامساوی کلازیوس رعایت می‌شود."
      ]
    },
    "l6-q9": {
      "question": "دو جسم با ظرفیت گرمایی یکسان C = 100 J/K، در دماهای 400 K و 200 K، در محفظه‌ای منزوی و در حجم ثابت در تماس با هم قرار می‌گیرند. تغییر آنتروپی کل چقدر است؟",
      "choices": [
        "حدود +11.8 J/K.",
        "0 J/K، زیرا گرمایی که جسم گرم می‌دهد برابر گرمایی است که جسم سرد دریافت می‌کند.",
        "حدود −28.8 J/K، زیرا جسم گرم سرد می‌شود.",
        "حدود +25 J/K، یعنی Q/(200 K) − Q/(400 K) با Q = 10 000 J."
      ],
      "explanations": [
        "درست: دمای نهایی T_f = 300 K است. روی مسیرهای برگشت‌پذیر فرضی، ΔS_1 = C ln(300/400) ≈ −28.8 J/K و ΔS_2 = C ln(300/200) ≈ +40.5 J/K، پس ΔS_tot ≈ +11.8 J/K > 0: تماس برگشت‌ناپذیر است.",
        "نادرست: انرژی پایسته است، اما تغییرات آنتروپی یکدیگر را جبران نمی‌کنند، زیرا گرما در دماهای متفاوت مبادله می‌شود.",
        "نادرست: این فقط تغییر آنتروپی جسم گرم است. جسم سرد بیش از آنچه جسم گرم از دست می‌دهد آنتروپی به دست می‌آورد.",
        "نادرست: این محاسبه فرض می‌کند که دو دما، مانند دو مخزن گرمایی، ثابت می‌مانند. اینجا هر دما در طول تبادل تغییر می‌کند: باید از C dT/T برای هر جسم انتگرال گرفت."
      ]
    },
    "l6-q12": {
      "question": "فرایندی برگشت‌ناپذیر دو حالت تعادل A و B را به هم وصل می‌کند، اما حالت‌های میانی آن دور از تعادل‌اند. کدام گزاره درست است؟",
      "choices": [
        "تغییر آنتروپی ΔS برابر انتگرال δQ_actual/T_ext روی مسیر واقعی است.",
        "تغییر آنتروپی ΔS را می‌توان روی مسیری برگشت‌پذیر میان A و B محاسبه کرد، درحالی‌که S_e و S_i به فرایند واقعی وابسته‌اند.",
        "حالت‌های A و B به‌تنهایی آنتروپی مبادله‌شدهٔ S_e و آنتروپی تولیدشدهٔ S_i را تعیین می‌کنند."
      ],
      "explanations": [
        "نادرست: این انتگرال S_e، یعنی آنتروپی مبادله‌شده، را می‌دهد. موازنه ΔS = S_e + S_i است: گرمای واقعاً مبادله‌شده برای محاسبهٔ ΔS بدون درنظرگرفتن آنتروپی تولیدشده کافی نیست.",
        "درست: S تابع حالت است، پس ΔS = ∫ δQ_rev/T را می‌توان روی مسیری برگشت‌پذیر میان همان حالت‌ها محاسبه کرد. سپس به تبادل‌های واقعی بازمی‌گردیم تا S_e = ∫ δQ_actual/T_ext و S_i = ΔS − S_e را تعیین کنیم.",
        "نادرست: حالت‌های A و B مقدار ΔS را تعیین می‌کنند، اما تجزیهٔ آن به آنتروپی مبادله‌شده و تولیدشده را تعیین نمی‌کنند. S_e به گرماهای واقعاً مبادله‌شده و دماهای خارجی بستگی دارد؛ آنگاه S_i از موازنهٔ ΔS = S_e + S_i به دست می‌آید."
      ]
    },
    "l6-q20": {
      "question": "مقاومتی که جریان از آن می‌گذرد، به کمک یک مخزن گرمایی در دمای ثابت نگه داشته می‌شود. در حالت پایا، موازنهٔ آنتروپی مقاومت چیست؟",
      "choices": [
        "ΔS = 0، S_i > 0 و S_e = −S_i < 0.",
        "ΔS = 0، پس فرایند برگشت‌پذیر است.",
        "ΔS > 0، زیرا اثر ژول آنتروپی تولید می‌کند."
      ],
      "explanations": [
        "درست: حالت مقاومت تغییر نمی‌کند، پس ΔS = 0. اثر ژول آنتروپی تولید می‌کند که مقاومت آن را همراه با گرما به مخزن می‌دهد: فرایند هم‌آنتروپی است، اما برگشت‌ناپذیر.",
        "نادرست: هم‌آنتروپی به معنای برگشت‌پذیر نیست. آنتروپی تولیدشده با آنتروپی داده‌شده به مخزن جبران می‌شود و آنتروپی کل افزایش می‌یابد.",
        "نادرست: آنتروپی تولیدشده همراه با گرمای داده‌شده به مخزن از مقاومت خارج می‌شود. حالت مقاومت، و بنابراین آنتروپی آن، بدون تغییر می‌ماند."
      ]
    },
    "l6-q4": {
      "question": "بیان کلوین دقیقاً کدام عملکرد را منع می‌کند؟",
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
      "question": "تراکم شبه‌ایستا لزوماً برگشت‌پذیر است.",
      "choices": [
        "درست",
        "نادرست"
      ],
      "explanations": [
        "نادرست: تراکم شبه‌ایستا می‌تواند مثلاً با اصطکاک انجام شود. اصطکاک انرژی را تلف می‌کند و ردی در گاز یا محیط آن باقی می‌گذارد، حتی اگر گاز نزدیک تعادل بماند.",
        "درست: شبه‌ایستا بودن کافی نیست. باید اتلاف‌ها را نیز حذف کرد و تبادل‌ها را با اختلاف‌های بی‌نهایت کوچک فشار، دما یا پتانسیل شیمیایی انجام داد."
      ]
    },
    "l6-vf3": {
      "question": "آنتروپی یک دستگاه بسته هرگز نمی‌تواند کاهش یابد.",
      "choices": [
        "درست",
        "نادرست"
      ],
      "explanations": [
        "نادرست: اصل دوم ΔS ≥ 0 را فقط برای دستگاه منزوی الزام می‌کند. آنتروپی دستگاه بسته‌ای که گرما می‌دهد می‌تواند کاهش یابد، اگر آنتروپی داده‌شده از آنتروپی تولیدشده در آن بیشتر باشد.",
        "درست: برای نمونه، جسم گرمی که در تماس با یک مخزن گرمایی سرد می‌شود آنتروپی از دست می‌دهد. آنتروپی کل دستگاه و محیط آن است که نمی‌تواند کاهش یابد."
      ]
    },
    "l6-q7": {
      "question": "کدام توالی چرخهٔ موتوری کارنو را برای گاز ایده‌آل توصیف می‌کند، اگر همهٔ شاخه‌های آن برگشت‌پذیر باشند؟",
      "choices": [
        "انبساط هم‌دما در T_H، انبساط بی‌درروی برگشت‌پذیر، تراکم هم‌دما در T_C و سپس تراکم بی‌درروی برگشت‌پذیر.",
        "انبساط هم‌دما در T_H، سرمایش هم‌حجم، تراکم هم‌دما در T_C و سپس گرمایش هم‌حجم.",
        "انبساط هم‌دما در T_C، تراکم بی‌دررو، تراکم هم‌دما در T_H و سپس انبساط بی‌دررو."
      ],
      "explanations": [
        "درست: تبادل‌های گرما روی دو شاخهٔ هم‌دمای برگشت‌پذیر انجام می‌شوند؛ شاخه‌های بی‌دررو بدون تبادل گرما دو دما را به هم متصل می‌کنند. چرخهٔ موتوری در نمودار (V, P) در جهت ساعت‌گرد پیموده می‌شود.",
        "نادرست: پیوندهای میان شاخه‌های هم‌دمای چرخهٔ کارنو بی‌دررو هستند، نه هم‌حجم. شاخه‌های هم‌حجم چرخه و تبادل‌های گرمای آن را تغییر می‌دهند.",
        "نادرست: این توالی چرخهٔ کارنو را در جهت عکس توصیف می‌کند. ماشین در این حالت کار دریافت می‌کند تا از مخزن سرد گرما بگیرد و به مخزن گرم بدهد."
      ]
    },
    "l6-q21": {
      "question": "گاز ایده‌آلی با N ذره در محفظه‌ای در تعادل است. احتمال اینکه در یک لحظهٔ معین همهٔ ذره‌ها در نیمهٔ چپ باشند چقدر است؟",
      "choices": [
        "2^(−N).",
        "1/2.",
        "1/N.",
        "دقیقاً 0، زیرا اصل دوم آن را منع می‌کند."
      ],
      "explanations": [
        "درست: هر ذره با احتمال 1/2 در سمت چپ است، و ذره‌های گاز ایده‌آل مستقل‌اند. برای یک مول، 2^(−N) ≈ 10^(−1.8×10^23): این رویداد ممکن است، اما چنان نامحتمل که هرگز مشاهده نمی‌شود.",
        "نادرست: 1/2 احتمال برای یک ذرهٔ تنهاست. برای N ذرهٔ مستقل، احتمال‌ها در هم ضرب می‌شوند.",
        "نادرست: احتمال با N به‌طور نمایی کاهش می‌یابد، نه مانند 1/N.",
        "نادرست: مکانیک این پیکربندی را مجاز می‌داند. نادر بودن بی‌اندازهٔ آن برگشت‌ناپذیری مشاهده‌شده را توضیح می‌دهد که ماهیتی احتمالاتی دارد."
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
