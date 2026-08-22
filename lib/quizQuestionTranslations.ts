import type { Lang } from "@/lib/i18n";

/**
 * Translated quiz question content, keyed by question id (`lib/quizzes.ts`).
 *
 * French is the source language and deliberately absent from this table: it is
 * read straight from `quizQuestions`. A lesson's quiz is served in a language
 * only when *every* one of its questions appears here with the same number of
 * choices and explanations as the French original — otherwise the page shows
 * an explicit "not available yet" state rather than a half-translated quiz
 * (see docs/languages.md: never a silent fallback to French or English).
 *
 * Terminology is aligned on the already-translated lesson text
 * (`content/tex/chp{1,2,3,4}_<lang>/lesson1.tex`) so that each quiz reuses the
 * same scientific vocabulary as its lesson.
 */
export interface TranslatedQuizQuestion {
  question: string;
  choices: string[];
  explanations: string[];
}

export const quizQuestionTranslations: Partial<
  Record<Lang, Record<string, TranslatedQuizQuestion>>
> = {
  en: {
    "l1-q1": {
      question: "What is a heat engine, in the thermodynamic sense?",
      choices: [
        "A device that, over a cycle, converts all of the heat it receives from the hot reservoir into work.",
        "A device that operates in a cycle in contact with a single heat reservoir, from which it extracts work.",
        "A device that produces heat from mechanical work supplied by an external operator.",
        "A cyclic device that converts into work a fraction of the heat flow going from hot to cold.",
      ],
      explanations: [
        "Wrong: converting heat entirely into work over a cycle is impossible (Kelvin statement of the second law).",
        "Wrong: a cyclic single-reservoir engine cannot supply any work; that is precisely the Kelvin statement.",
        "Wrong: that would rather describe a radiator or a heat pump, not an engine.",
        "Correct: the engine diverts a fraction of the hot → cold flow, never all of it.",
      ],
    },
    "l1-q2": {
      question: "Why does a heat engine need a temperature difference between two reservoirs?",
      choices: [
        "Because without a temperature difference no heat flows, and there is nothing to convert into work.",
        "Because mechanical work can only be produced from a reservoir whose temperature exceeds a minimum threshold, specific to each working fluid.",
        "Because the pressure of the working fluid must stay above atmospheric pressure throughout the cycle.",
      ],
      explanations: [
        "Correct: the engine is a toll on the hot → cold heat flow; no flow, no work. The temperature gradient is the real “fuel”.",
        "Wrong: there is no temperature threshold; even a small difference is enough (see OTEC plants exploiting a few degrees of difference in the ocean).",
        "Wrong: pressure is not the criterion; what matters is the temperature difference between the two reservoirs.",
      ],
    },
    "l1-vf1": {
      question: "A cyclic heat engine can operate while in contact with a single heat reservoir only.",
      choices: ["True", "False"],
      explanations: [
        "Wrong: this is precisely what the Kelvin statement of the second law forbids; a cyclic single-reservoir engine cannot supply work.",
        "Correct: at least two reservoirs at different temperatures are needed.",
      ],
    },
    "l2-q1": {
      question: "What did caloric theory, which prevailed at the end of the eighteenth century, maintain?",
      choices: [
        "Heat is a form of microscopic agitation of matter, transmitted step by step through collisions between particles.",
        "Heat is a conserved material fluid that flows from hot to cold.",
        "Heat and temperature are one and the same physical quantity, measured by a thermometer.",
      ],
      explanations: [
        "Wrong: this is the rival mechanistic or kinetic view (Bacon, Bernoulli), which would prove correct in hindsight.",
        "Correct: caloric was conceived as a weightless, conserved fluid—a false but fruitful theory.",
        "Wrong: the distinction between heat and temperature had in fact been established before caloric theory, thanks to Joseph Black (heat capacity, latent heat).",
      ],
    },
    "l2-q2": {
      question: "Which experiment contradicted caloric theory?",
      choices: [
        "Rumford's observation of cannon boring: friction produces an apparently unlimited amount of heat.",
        "Joseph Black's measurement of the latent heat absorbed by ice as it melts at constant temperature.",
        "Clapeyron's synthesis of the laws of Boyle, Charles, and Gay-Lussac into a single equation of state for ideal gases.",
      ],
      explanations: [
        "Correct: if heat were a finite, conserved fluid, continuous boring could not produce it indefinitely. Rumford (1798) concluded that heat is related to motion.",
        "Wrong: latent heat was, on the contrary, well explained by caloric theory (the fluid supposedly “combines” with matter during a change of state).",
        "Wrong: Clapeyron (1834) unified the gas laws, with no direct connection to the nature of heat.",
      ],
    },
    "l2-vf1": {
      question: "In 1824, Carnot established the formula for maximum efficiency η = 1 - T_f/T_c.",
      choices: ["True", "False"],
      explanations: [
        "Wrong: Carnot demonstrated the existence and universality of a maximum efficiency, but not its expression; the absolute temperature scale, introduced by Kelvin in 1848, was still missing.",
        "Correct: he proved that this universal bound exists without being able to give its expression, because there was no rigorous definition of temperature.",
      ],
    },
    "l2-q4": {
      question: "In the relation Q = m c ΔT identified by Joseph Black, what does the coefficient c represent?",
      choices: [
        "The total quantity of heat exchanged by the body, expressed in joules.",
        "The quantity of heat that must be supplied per unit mass of the body to raise its temperature by one degree.",
        "The ratio of the work supplied to the body to the heat it receives.",
      ],
      explanations: [
        "Wrong: Q itself is the total heat exchanged, not c; Q also depends on the mass and the temperature difference.",
        "Correct: it is the specific heat capacity (or specific heat), the coefficient characteristic of each material that Black identified.",
        "Wrong: this relation has nothing to do with such a ratio; c involves only heat and temperature.",
      ],
    },
    "l2-q5": {
      question: "In modern units, what is the value of the calorie as measured by Joule?",
      choices: [
        "Approximately 1 J per calorie",
        "Approximately 4,18 J per calorie",
        "Approximately 100 J per calorie",
        "Approximately 0,24 J per calorie",
      ],
      explanations: [
        "Wrong: this would be the case if the calorie and the joule already measured the same thing without conversion.",
        "Correct: 1 cal ≈ 4,18 J; this value, measured with increasing precision between 1843 and 1849, established the equivalence of heat and work.",
        "Wrong: this value is too large by a factor of about 24 compared with Joule's measurement.",
        "Wrong: this is approximately the reciprocal (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "A food package displays “250 cal”. Approximately how many joules does this represent?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Wrong: this would confuse the stated unit with the joule.",
        "Correct: a food calorie is actually 1 kcal, normally written Cal with a capital letter. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Wrong: this would overlook the fact that a food calorie is actually a kilocalorie.",
        "Wrong: this would confuse the food calorie with the kilojoule.",
      ],
    },
    "l2-vf3": {
      question: "Calorimetry is the science of measuring quantities of heat exchanged between systems.",
      choices: ["True", "False"],
      explanations: [
        "Correct: Black, 1760—the beginning of calorimetry.",
        "Wrong: calorimetry is indeed the science of measuring heat, not temperature.",
      ],
    },
    "l2-q7": {
      question: "An ice cube at 0°C is heated until it becomes liquid water at 20°C. How should the total heat received be calculated?",
      choices: [
        "Q = m c_eau ΔT, with ΔT = 20°C and c_eau the specific heat capacity of liquid water.",
        "Q = m L + m c_eau ΔT, with L the specific latent heat of fusion, c_eau the specific heat capacity of liquid water, and ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT with ΔT = 20°C.",
      ],
      explanations: [
        "Wrong: this calculation omits the latent heat of fusion, absorbed at 0°C without any change in temperature; this was precisely Black's second discovery, distinct from heat capacity.",
        "Correct: the latent heat (melting at constant temperature) and the relation Q = mcΔT (heating within a single phase) are added together, but each applies to a distinct stage of the process.",
        "Wrong: once the ice has melted, the specific heat capacity of liquid water applies to heating from 0°C to 20°C, not that of ice.",
      ],
    },
    "l2-vf4": {
      question: "When liquid water freezes, it releases heat to its surroundings.",
      choices: ["True", "False"],
      explanations: [
        "Correct: freezing is the reverse of melting. The water releases exactly the latent heat that had to be supplied to melt the same amount of ice; this explains, for example, why water in a lake freezing in winter slightly warms the surrounding air.",
        "Wrong: it is indeed an exothermic phenomenon, the counterpart of melting (which is endothermic): it involves the same latent heat with the opposite sign.",
      ],
    },
    "l3-q1": {
      question: "An isolated system is a system whose walls are:",
      choices: [
        "Diathermanous, movable, and permeable.",
        "Rigid, adiabatic, and impermeable.",
        "Rigid, diathermanous, and impermeable.",
        "Movable, adiabatic, and permeable.",
      ],
      explanations: [
        "Wrong: on the contrary, these properties permit all exchanges (heat, work, and matter).",
        "Correct: rigidity prevents work exchange, an adiabatic wall prevents heat exchange, and impermeability prevents matter exchange.",
        "Wrong: diathermanous walls permit heat transfer, so the system would not be isolated.",
        "Wrong: movable and permeable walls permit exchanges of work and matter.",
      ],
    },
    "l3-vf2": {
      question: "A diathermanous wall permits heat to pass through it.",
      choices: ["True", "False"],
      explanations: ["Correct", "Wrong"],
    },
    "l3-vf3": {
      question: "An adiabatic wall permits heat to pass through it.",
      choices: ["True", "False"],
      explanations: [
        "Wrong: that would be a diathermanous wall.",
        "Correct: adiabatic means, on the contrary, that no heat crosses the wall; adiabatic is the opposite of diathermanous.",
      ],
    },
    "l3-vf4": {
      question: "A system is closed if its walls are impermeable to matter, while it may still exchange heat and work with its surroundings.",
      choices: ["True", "False"],
      explanations: [
        "Correct: closed means only that there is no matter exchange; unlike an isolated system, heat and work may still be exchanged.",
        "Wrong: this is indeed the definition of a closed system (not to be confused with an isolated system, which also prevents exchanges of heat and work).",
      ],
    },
    "l3-q3": {
      question: "Which of these quantities is intensive?",
      choices: ["Volume V", "Internal energy U", "Pressure P", "Particle number N"],
      explanations: [
        "Wrong: volume doubles when the system is doubled; it is extensive.",
        "Wrong: internal energy is extensive (in the absence of long-range forces).",
        "Correct: pressure does not change when the system is doubled; it is an emergent quantity with no counterpart for an individual molecule.",
        "Wrong: N doubles with the system; it is extensive.",
      ],
    },
    "l3-q5": {
      question: "An isochoric process takes place:",
      choices: ["At constant pressure", "With no heat exchange", "At constant temperature", "At constant volume"],
      explanations: [
        "Wrong: that is an isobaric process.",
        "Wrong: that is an adiabatic process.",
        "Wrong: that is an isothermal process.",
        "Correct: isochoric = constant volume.",
      ],
    },
    "l3-vf1": {
      question: "A thermodynamic system at equilibrium is necessarily homogeneous (with the same intensive quantities at every point).",
      choices: ["True", "False"],
      explanations: [
        "Wrong: a glass of water resting on a table is at equilibrium, yet its pressure is not the same at the surface and at the bottom. This is Pascal's law (hydrostatics): in a fluid at rest under gravity, pressure increases with depth, P(z) = P_0 + ρgh. This nonuniformity never disappears, no matter how long one waits; it is therefore due not to a lack of equilibrium but to the presence of an external force field (gravity).",
        "Correct: the classic example is a glass of water resting on a table—its pressure increases with depth (Pascal's law: P(z) = P_0 + ρgh) without anything flowing or changing. Thermodynamic equilibrium requires only the absence of macroscopic fluxes (of heat, matter, and momentum) between points in the system; it does not require intensive quantities such as pressure to be identical everywhere, especially in the presence of an external field such as gravity.",
      ],
    },
    "l3-vf5": {
      question: "A metal bar whose two ends are maintained at different temperatures eventually reaches a regime in which the temperature profile no longer depends on time. This regime is a state of thermodynamic equilibrium.",
      choices: ["True", "False"],
      explanations: [
        "Wrong: this is a steady state, not an equilibrium state. The temperature profile is indeed constant in time, but a macroscopic heat flux continues to pass through the bar from the hot end to the cold end.",
        "Correct: this is a steady state, which must be distinguished from equilibrium. The definition of thermodynamic equilibrium requires not only that macroscopic quantities no longer change, but also that every macroscopic flux be absent (here, a heat flux persists between the two ends).",
      ],
    },
    "l4-q2": {
      question: "Why do we write δQ and δW rather than dQ and dW?",
      choices: [
        "Because they are inexact differentials: their integrals depend on the path followed.",
        "Because Q and W are quantities too small to be described by ordinary differentials.",
      ],
      explanations: [
        "Correct: Q and W depend on the path, unlike U, which depends only on the initial and final states. Writing dQ would amount to reviving caloric theory.",
        "Wrong: the ‘size’ of the quantities is irrelevant; what matters is their path dependence.",
      ],
    },
    "l4-q2b": {
      question: "An ideal gas goes from an equilibrium state A to an equilibrium state B, either by being compressed and then heated, or by being heated and then compressed. What can we say?",
      choices: [
        "The change in internal energy ΔU and the heat Q and work W received are the same in both cases.",
        "ΔU is the same in both cases, but Q and W may differ from one path to the other.",
        "Q is the same in both cases, but ΔU may differ.",
        "None of the three quantities depends on the path followed.",
      ],
      explanations: [
        "Wrong: only ΔU is fixed by states A and B; Q and W generally depend on the path followed.",
        "Correct: U is a state function (dU is an exact differential), so ΔU = U(B) − U(A) depends only on the initial and final states. Q and W are not state functions (δQ and δW are not exact differentials), so they depend on the path; only their sum Q + W = ΔU is fixed by the first law.",
        "Wrong: the reverse is true—ΔU, not Q, is independent of the path.",
        "Wrong: ΔU does not depend on the path, but Q and W generally do.",
      ],
    },
    "l4-q3": {
      question: "A closed system undergoes a cyclic transformation (A → A). What can we say about the balance Q_cycle + W_cycle?",
      choices: [
        "It must be zero because Q and W are state functions.",
        "It is zero because U is a state function.",
        "It is always strictly positive for a heat engine.",
      ],
      explanations: [
        "Wrong: the reverse is true—Q and W are not state functions; they are transfers, not properties of the system. Only their sum is constrained to vanish over a cycle through ΔU_cycle = 0.",
        "Correct: over a cycle, the system returns to its initial state. Since U is a state function, ΔU_cycle = U(A) − U(A) = 0, so the first law requires Q_cycle + W_cycle = 0.",
        "Wrong: it is the sum Q_cycle + W_cycle that is zero, not each term separately; Q_cycle and W_cycle may each be nonzero and have opposite signs in a heat engine.",
      ],
    },
    "l4-q4": {
      question: "A gas is compressed quasi-statically. What can we say about the work received by the gas?",
      choices: [
        "It is negative: as it is compressed, the gas necessarily transfers mechanical energy to the surroundings that compress it.",
        "It is positive: the gas receives work during compression.",
        "It is zero: in a quasi-static transformation, work exchanges cancel exactly at every stage.",
      ],
      explanations: [
        "Wrong: this is the classic sign error; with dV < 0, we have −P dV > 0, so the gas receives work.",
        "Correct: compressing a gas requires mechanical energy to be supplied to it; under the banker’s sign convention, energy entering the system is counted as positive.",
        "Wrong: quasi-static does not mean zero work; it only means that the transformation passes through a sequence of equilibrium states.",
      ],
    },
    "l4-q6": {
      question: "During an isochoric transformation of a closed system, we always have:",
      choices: ["W = 0, so ΔU = Q", "Q = 0, so ΔU = W", "ΔU = 0, so Q = −W"],
      explanations: [
        "Correct: at constant volume, δW = −P dV = 0; the entire change in internal energy comes from heat.",
        "Wrong: this is the balance for an adiabatic transformation, not an isochoric one.",
        "Wrong: this is the balance for an isothermal transformation of an ideal gas, since U depends only on T.",
      ],
    },
  },

  de: {
    "l1-q1": {
      question: "Was ist eine Wärmekraftmaschine im thermodynamischen Sinne?",
      choices: [
        "Eine Vorrichtung, die im Verlauf eines Kreisprozesses die vom heißen Wärmereservoir aufgenommene Wärme vollständig in Arbeit umwandelt.",
        "Eine Vorrichtung, die im Kreisprozess im Kontakt mit einem einzigen Wärmereservoir arbeitet und daraus Arbeit gewinnt.",
        "Eine Vorrichtung, die aus mechanischer Arbeit, die ein äußerer Betreiber zuführt, Wärme erzeugt.",
        "Eine zyklisch arbeitende Vorrichtung, die einen Teil des vom Warmen zum Kalten fließenden Wärmestroms in Arbeit umwandelt.",
      ],
      explanations: [
        "Falsch: Wärme im Verlauf eines Kreisprozesses vollständig in Arbeit umzuwandeln ist unmöglich (Kelvin'sche Formulierung des zweiten Hauptsatzes).",
        "Falsch: Eine zyklisch arbeitende Maschine an einem einzigen Wärmereservoir kann keinerlei Arbeit liefern; genau das besagt die Kelvin'sche Formulierung.",
        "Falsch: Das beschriebe eher eine Heizung oder eine Wärmepumpe, keine Wärmekraftmaschine.",
        "Richtig: Die Maschine zweigt einen Teil des Wärmestroms heiß → kalt ab, niemals dessen Gesamtheit.",
      ],
    },
    "l1-q2": {
      question: "Warum benötigt eine Wärmekraftmaschine eine Temperaturdifferenz zwischen zwei Wärmereservoiren?",
      choices: [
        "Weil ohne Temperaturdifferenz kein Wärmestrom fließt und es nichts gibt, was sich in Arbeit umwandeln ließe.",
        "Weil mechanische Arbeit nur aus einem Reservoir gewonnen werden kann, dessen Temperatur einen Mindestwert überschreitet, der für jedes Arbeitsmedium verschieden ist.",
        "Weil der Druck des Arbeitsmediums während des gesamten Kreisprozesses über dem Atmosphärendruck bleiben muss.",
      ],
      explanations: [
        "Richtig: Die Maschine erhebt gewissermaßen eine Maut auf den Wärmestrom heiß → kalt; ohne Strom keine Arbeit. Das Temperaturgefälle ist der eigentliche „Treibstoff“.",
        "Falsch: Es gibt keine Temperaturschwelle; schon eine kleine Differenz genügt (vgl. OTEC-Kraftwerke, die wenige Grad Unterschied im Ozean nutzen).",
        "Falsch: Der Druck ist nicht das Kriterium; entscheidend ist die Temperaturdifferenz zwischen den beiden Reservoiren.",
      ],
    },
    "l1-vf1": {
      question: "Eine zyklisch arbeitende Wärmekraftmaschine kann im Kontakt mit nur einem einzigen Wärmereservoir betrieben werden.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Falsch: Genau das verbietet die Kelvin'sche Formulierung des zweiten Hauptsatzes; eine zyklische Maschine an einem einzigen Reservoir kann keine Arbeit liefern.",
        "Richtig: Es braucht mindestens zwei Reservoire mit verschiedenen Temperaturen.",
      ],
    },
    "l2-q1": {
      question: "Was besagt die Ende des 18. Jahrhunderts vorherrschende Kaloriktheorie?",
      choices: [
        "Wärme ist eine Form mikroskopischer Bewegung der Materie, die durch Zusammenstöße zwischen Teilchen schrittweise übertragen wird.",
        "Wärme ist ein erhaltenes materielles Fluid, das vom Warmen zum Kalten strömt.",
        "Wärme und Temperatur sind ein und dieselbe physikalische Größe, die mit dem Thermometer gemessen wird.",
      ],
      explanations: [
        "Falsch: Dies ist die konkurrierende mechanistische oder kinetische Auffassung (Bacon, Bernoulli), die sich im Nachhinein als richtig erweisen sollte.",
        "Richtig: Das Kalorikum wurde als gewichtsloses und erhaltenes Fluid aufgefasst—eine falsche, aber fruchtbare Theorie.",
        "Falsch: Die Unterscheidung zwischen Wärme und Temperatur war dank Joseph Black (Wärmekapazität, latente Wärme) bereits vor der Kaloriktheorie etabliert.",
      ],
    },
    "l2-q2": {
      question: "Welches Experiment widersprach der Kaloriktheorie?",
      choices: [
        "Das von Rumford beobachtete Bohren von Kanonenrohren: Durch Reibung entsteht scheinbar unbegrenzt Wärme.",
        "Joseph Blacks Messung der latenten Wärme, die Eis beim Schmelzen bei konstanter Temperatur aufnimmt.",
        "Clapeyrons Zusammenfassung der Gesetze von Boyle, Charles und Gay-Lussac zu einer einzigen Zustandsgleichung des idealen Gases.",
      ],
      explanations: [
        "Richtig: Wäre Wärme ein endliches, erhaltenes Fluid, könnte fortgesetztes Bohren nicht unbegrenzt Wärme erzeugen. Rumford (1798) schloss daraus, dass Wärme mit Bewegung zusammenhängt.",
        "Falsch: Die latente Wärme ließ sich im Gegenteil durch die Kaloriktheorie gut erklären (das Fluid „verbindet“ sich beim Phasenübergang mit der Materie).",
        "Falsch: Clapeyron (1834) vereinheitlichte die Gasgesetze, ohne direkten Bezug zur Natur der Wärme.",
      ],
    },
    "l2-vf1": {
      question: "Carnot stellte 1824 die Formel für den maximalen Wirkungsgrad η = 1 - T_f/T_c auf.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Falsch: Carnot wies die Existenz und Universalität eines maximalen Wirkungsgrads nach, nicht aber dessen Ausdruck; es fehlte die absolute Temperaturskala, die Kelvin 1848 einführte.",
        "Richtig: Er bewies die Existenz dieser universellen Grenze, konnte aber mangels einer strengen Definition der Temperatur keinen Ausdruck dafür angeben.",
      ],
    },
    "l2-q4": {
      question: "Wofür steht der Koeffizient c in der von Joseph Black nachgewiesenen Beziehung Q = m c ΔT?",
      choices: [
        "Für die gesamte vom Körper ausgetauschte Wärmemenge, angegeben in Joule.",
        "Für die Wärmemenge, die einer Masseneinheit des Körpers zugeführt werden muss, um ihre Temperatur um ein Grad zu erhöhen.",
        "Für das Verhältnis zwischen der dem Körper zugeführten Arbeit und der von ihm aufgenommenen Wärme.",
      ],
      explanations: [
        "Falsch: Q selbst ist die insgesamt ausgetauschte Wärme, nicht c; Q hängt außerdem von der Masse und der Temperaturdifferenz ab.",
        "Richtig: c ist die spezifische Wärmekapazität (oder spezifische Wärme), also der von Black nachgewiesene materialspezifische Koeffizient.",
        "Falsch: Diese Beziehung hat mit einem solchen Verhältnis nichts zu tun; in c gehen nur Wärme und Temperatur ein.",
      ],
    },
    "l2-q5": {
      question: "Welchen Wert hat die von Joule gemessene Kalorie in heutigen Einheiten?",
      choices: [
        "Etwa 1 J pro Kalorie",
        "Etwa 4,18 J pro Kalorie",
        "Etwa 100 J pro Kalorie",
        "Etwa 0,24 J pro Kalorie",
      ],
      explanations: [
        "Falsch: Das wäre der Fall, wenn Kalorie und Joule bereits ohne Umrechnung dasselbe messen würden.",
        "Richtig: 1 cal ≈ 4,18 J; dieser zwischen 1843 und 1849 mit wachsender Genauigkeit gemessene Wert begründete die Äquivalenz von Wärme und Arbeit.",
        "Falsch: Dieser Wert ist gegenüber Joules Messung um einen Faktor von etwa 24 zu groß.",
        "Falsch: Das ist ungefähr der Kehrwert (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Auf einer Lebensmittelverpackung steht „250 cal“. Wie vielen Joule entspricht dies ungefähr?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falsch: Dabei würde die angegebene Einheit mit dem Joule verwechselt.",
        "Richtig: Eine Lebensmittelkalorie ist tatsächlich 1 kcal und wird üblicherweise mit einem großen C als Cal geschrieben. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Falsch: Dabei würde übersehen, dass eine Lebensmittelkalorie tatsächlich eine Kilokalorie ist.",
        "Falsch: Dabei würde die Lebensmittelkalorie mit dem Kilojoule verwechselt.",
      ],
    },
    "l2-vf3": {
      question: "Die Kalorimetrie ist die Wissenschaft von der Messung der zwischen Systemen ausgetauschten Wärmemengen.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Richtig: Black, 1760—der Beginn der Kalorimetrie.",
        "Falsch: Die Kalorimetrie ist tatsächlich die Wissenschaft von der Messung der Wärme, nicht der Temperatur.",
      ],
    },
    "l2-q7": {
      question: "Ein Eiswürfel bei 0°C wird erwärmt, bis flüssiges Wasser bei 20°C entsteht. Wie lässt sich die insgesamt aufgenommene Wärme richtig berechnen?",
      choices: [
        "Q = m c_eau ΔT, mit ΔT = 20°C und c_eau als spezifischer Wärmekapazität flüssigen Wassers.",
        "Q = m L + m c_eau ΔT, wobei L die spezifische Schmelzwärme und c_eau die spezifische Wärmekapazität des flüssigen Wassers bezeichnen; dabei gilt ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT mit ΔT = 20°C.",
      ],
      explanations: [
        "Falsch: Diese Rechnung lässt die latente Schmelzwärme außer Acht, die bei 0°C ohne Temperaturänderung aufgenommen wird; genau dies war Blacks zweite Entdeckung, die von der Wärmekapazität zu unterscheiden ist.",
        "Richtig: Die latente Wärme (Schmelzen bei konstanter Temperatur) und die Beziehung Q = mcΔT (Erwärmung innerhalb einer Phase) werden addiert, gelten aber jeweils für einen eigenen Schritt des Vorgangs.",
        "Falsch: Nach dem Schmelzen des Eises gilt für die Erwärmung von 0°C auf 20°C die spezifische Wärmekapazität des flüssigen Wassers, nicht diejenige des Eises.",
      ],
    },
    "l2-vf4": {
      question: "Wenn flüssiges Wasser gefriert, gibt es Wärme an die Umgebung ab.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Richtig: Erstarren ist der umgekehrte Vorgang des Schmelzens. Das Wasser gibt genau die latente Wärme ab, die zum Schmelzen derselben Eismenge zugeführt werden musste; dies erklärt beispielsweise, warum das im Winter gefrierende Wasser eines Sees die Umgebungsluft leicht erwärmt.",
        "Falsch: Es handelt sich tatsächlich um einen exothermen Vorgang, das Gegenstück zum endothermen Schmelzen: Es ist dieselbe latente Wärme mit umgekehrtem Vorzeichen.",
      ],
    },
    "l3-q1": {
      question: "Die Wände eines isolierten Systems sind:",
      choices: [
        "Diatherman, beweglich und durchlässig.",
        "Starr, adiabatisch und undurchlässig.",
        "Starr, diatherman und undurchlässig.",
        "Beweglich, adiabatisch und durchlässig.",
      ],
      explanations: [
        "Falsch: Diese Eigenschaften erlauben im Gegenteil alle Austauschvorgänge (Wärme, Arbeit und Materie).",
        "Richtig: Eine starre Wand verhindert den Austausch von Arbeit, eine adiabatische den Austausch von Wärme und eine undurchlässige den Austausch von Materie.",
        "Falsch: Diathermane Wände lassen Wärme hindurch; das System wäre nicht isoliert.",
        "Falsch: Bewegliche und durchlässige Wände lassen den Austausch von Arbeit und Materie zu.",
      ],
    },
    "l3-vf2": {
      question: "Eine diathermane Wand lässt Wärme hindurch.",
      choices: ["Wahr", "Falsch"],
      explanations: ["Richtig", "Falsch"],
    },
    "l3-vf3": {
      question: "Eine adiabatische Wand lässt Wärme hindurch.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Falsch: Das wäre eine diathermane Wand.",
        "Richtig: Adiabatisch bedeutet im Gegenteil, dass keine Wärme durch die Wand hindurchtritt; adiabatisch ist das Gegenteil von diatherman.",
      ],
    },
    "l3-vf4": {
      question: "Ein System heißt geschlossen, wenn seine Wände für Materie undurchlässig sind, es aber Wärme und Arbeit mit der Umgebung austauschen kann.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Richtig: Geschlossen bedeutet lediglich, dass kein Materieaustausch stattfindet; anders als bei einem isolierten System können Wärme und Arbeit ausgetauscht werden.",
        "Falsch: Dies ist tatsächlich die Definition eines geschlossenen Systems (nicht zu verwechseln mit einem isolierten System, das auch den Austausch von Wärme und Arbeit verhindert).",
      ],
    },
    "l3-q3": {
      question: "Welche dieser Größen ist intensiv?",
      choices: ["Das Volumen V", "Die innere Energie U", "Der Druck P", "Die Teilchenzahl N"],
      explanations: [
        "Falsch: Das Volumen verdoppelt sich, wenn das System verdoppelt wird; es ist extensiv.",
        "Falsch: Die innere Energie ist extensiv (in Abwesenheit langreichweitiger Kräfte).",
        "Richtig: Der Druck ändert sich nicht, wenn das System verdoppelt wird; er ist eine emergente Größe ohne Entsprechung für ein einzelnes Molekül.",
        "Falsch: N verdoppelt sich mit dem System; es ist extensiv.",
      ],
    },
    "l3-q5": {
      question: "Eine isochore Zustandsänderung erfolgt:",
      choices: ["Bei konstantem Druck", "Ohne Wärmeaustausch", "Bei konstanter Temperatur", "Bei konstantem Volumen"],
      explanations: [
        "Falsch: Das ist eine isobare Zustandsänderung.",
        "Falsch: Das ist eine adiabatische Zustandsänderung.",
        "Falsch: Das ist eine isotherme Zustandsänderung.",
        "Richtig: isochor = konstantes Volumen.",
      ],
    },
    "l3-vf1": {
      question: "Ein thermodynamisches System im Gleichgewicht ist notwendigerweise homogen (an jedem Punkt dieselben intensiven Größen).",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Falsch: Ein auf einem Tisch stehendes Glas Wasser befindet sich im Gleichgewicht, dennoch ist sein Druck an der Oberfläche und am Boden nicht gleich. Das ist das Pascalsche Gesetz (Hydrostatik): In einer ruhenden Flüssigkeit unter dem Einfluss der Schwerkraft nimmt der Druck mit der Tiefe zu, P(z) = P_0 + ρgh. Diese räumliche Ungleichförmigkeit verschwindet auch bei beliebig langem Warten nie; sie ist daher nicht auf fehlendes Gleichgewicht zurückzuführen, sondern auf ein äußeres Kraftfeld (die Gravitation).",
        "Richtig: Das klassische Beispiel ist ein auf einem Tisch stehendes Glas Wasser—sein Druck nimmt mit der Tiefe zu (Pascalsches Gesetz: P(z) = P_0 + ρgh), ohne dass darin etwas strömt oder sich verändert. Thermodynamisches Gleichgewicht verlangt nur das Fehlen makroskopischer Flüsse (von Wärme, Materie und Impuls) zwischen den Punkten des Systems; es verlangt nicht, dass intensive Größen wie der Druck überall gleich sind, insbesondere bei Anwesenheit eines äußeren Feldes wie der Gravitation.",
      ],
    },
    "l3-vf5": {
      question: "Ein Metallstab, dessen Enden auf unterschiedlichen Temperaturen gehalten werden, erreicht schließlich einen Zustand, in dem das Temperaturprofil nicht mehr von der Zeit abhängt. Dieser Zustand ist ein thermodynamischer Gleichgewichtszustand.",
      choices: ["Wahr", "Falsch"],
      explanations: [
        "Falsch: Dies ist ein stationärer Zustand, kein Gleichgewichtszustand. Das Temperaturprofil ist zwar zeitlich konstant, doch durch den Stab fließt weiterhin ein makroskopischer Wärmefluss vom heißen zum kalten Ende.",
        "Richtig: Es handelt sich um einen stationären Zustand, der vom Gleichgewicht zu unterscheiden ist. Die Definition des thermodynamischen Gleichgewichts verlangt nicht nur, dass sich die makroskopischen Größen nicht mehr ändern, sondern auch das Fehlen jedes makroskopischen Flusses (hier bleibt ein Wärmefluss zwischen den beiden Enden bestehen).",
      ],
    },
    "l4-q2": {
      question: "Warum schreibt man δQ und δW statt dQ und dW?",
      choices: [
        "Weil es sich um nicht exakte Differentiale handelt: Ihre Integrale hängen vom eingeschlagenen Weg ab.",
        "Weil Q und W zu kleine Größen sind, um mit gewöhnlichen Differentialen beschrieben zu werden.",
      ],
      explanations: [
        "Richtig: Q und W hängen vom Weg ab, anders als U, das nur vom Anfangs- und Endzustand abhängt. dQ zu schreiben hieße, die Wärmestofftheorie wiederzubeleben.",
        "Falsch: Die ‚Größe‘ der Größen spielt keine Rolle; entscheidend ist die Wegabhängigkeit.",
      ],
    },
    "l4-q2b": {
      question: "Ein ideales Gas gelangt vom Gleichgewichtszustand A zum Gleichgewichtszustand B, entweder indem es zuerst komprimiert und dann erwärmt oder zuerst erwärmt und dann komprimiert wird. Was lässt sich sagen?",
      choices: [
        "Die Änderung der inneren Energie ΔU sowie die aufgenommene Wärme Q und Arbeit W sind in beiden Fällen gleich.",
        "ΔU ist in beiden Fällen gleich, Q und W können sich jedoch von Weg zu Weg unterscheiden.",
        "Q ist in beiden Fällen gleich, ΔU kann sich jedoch unterscheiden.",
        "Keine der drei Größen hängt vom eingeschlagenen Weg ab.",
      ],
      explanations: [
        "Falsch: Nur ΔU ist durch die Zustände A und B festgelegt; Q und W hängen im Allgemeinen vom Weg ab.",
        "Richtig: U ist eine Zustandsfunktion (dU ist ein exaktes Differential), daher hängt ΔU = U(B) − U(A) nur vom Anfangs- und Endzustand ab. Q und W sind keine Zustandsfunktionen (δQ und δW sind keine exakten Differentiale) und hängen daher vom Weg ab; nur ihre Summe Q + W = ΔU ist durch den ersten Hauptsatz festgelegt.",
        "Falsch: Das Gegenteil ist richtig—ΔU ist wegunabhängig, nicht Q.",
        "Falsch: ΔU hängt nicht vom Weg ab, Q und W dagegen im Allgemeinen schon.",
      ],
    },
    "l4-q3": {
      question: "Ein geschlossenes System durchläuft eine Kreisprozessänderung (A → A). Was lässt sich über die Bilanz Q_cycle + W_cycle sagen?",
      choices: [
        "Sie ist notwendigerweise null, weil Q und W Zustandsfunktionen sind.",
        "Sie ist null, weil U eine Zustandsfunktion ist.",
        "Für eine Wärmekraftmaschine ist sie immer strikt positiv.",
      ],
      explanations: [
        "Falsch: Das Gegenteil ist richtig—Q und W sind keine Zustandsfunktionen, sondern Übertragungen und keine Größen des Systems. Nur ihre Summe muss wegen ΔU_cycle = 0 über einen Kreisprozess verschwinden.",
        "Richtig: Nach einem Kreisprozess befindet sich das System wieder im Anfangszustand. Da U eine Zustandsfunktion ist, gilt ΔU_cycle = U(A) − U(A) = 0; der erste Hauptsatz fordert daher Q_cycle + W_cycle = 0.",
        "Falsch: Die Summe Q_cycle + W_cycle ist null, nicht jeder Term einzeln; bei einer Wärmekraftmaschine können Q_cycle und W_cycle beide ungleich null sein und entgegengesetzte Vorzeichen haben.",
      ],
    },
    "l4-q4": {
      question: "Ein Gas wird quasistatisch komprimiert. Was lässt sich über die vom Gas aufgenommene Arbeit sagen?",
      choices: [
        "Sie ist negativ: Bei der Kompression gibt das Gas notwendigerweise mechanische Energie an die komprimierende Umgebung ab.",
        "Sie ist positiv: Das Gas nimmt bei einer Kompression Arbeit auf.",
        "Sie ist null: Bei einer quasistatischen Zustandsänderung heben sich die Arbeitsaustausche in jedem Schritt genau auf.",
      ],
      explanations: [
        "Falsch: Das ist der klassische Vorzeichenfehler; für dV < 0 gilt −P dV > 0, das Gas nimmt also Arbeit auf.",
        "Richtig: Um ein Gas zu komprimieren, muss ihm mechanische Energie zugeführt werden; nach der Bankierskonvention wird ein Energiezufluss positiv gezählt.",
        "Falsch: Quasistatisch bedeutet nicht, dass die Arbeit null ist, sondern nur, dass die Zustandsänderung eine Folge von Gleichgewichtszuständen durchläuft.",
      ],
    },
    "l4-q6": {
      question: "Bei einer isochoren Zustandsänderung eines geschlossenen Systems gilt stets:",
      choices: ["W = 0, also ΔU = Q", "Q = 0, also ΔU = W", "ΔU = 0, also Q = −W"],
      explanations: [
        "Richtig: Bei konstantem Volumen ist δW = −P dV = 0; die gesamte Änderung der inneren Energie stammt aus der Wärme.",
        "Falsch: Das ist die Bilanz einer adiabatischen, nicht einer isochoren Zustandsänderung.",
        "Falsch: Das ist die Bilanz einer isothermen Zustandsänderung eines idealen Gases, da U nur von T abhängt.",
      ],
    },
  },

  es: {
    "l1-q1": {
      question: "¿Qué es un motor térmico, en el sentido de la termodinámica?",
      choices: [
        "Un dispositivo que, a lo largo de un ciclo, convierte íntegramente en trabajo el calor que recibe del foco caliente.",
        "Un dispositivo que funciona en ciclo en contacto con un único foco de calor, del que extrae trabajo.",
        "Un dispositivo que produce calor a partir de un trabajo mecánico suministrado por un operador exterior.",
        "Un dispositivo cíclico que convierte en trabajo una fracción del flujo de calor que va de lo caliente a lo frío.",
      ],
      explanations: [
        "Falso: convertir íntegramente el calor en trabajo a lo largo de un ciclo es imposible (enunciado de Kelvin del segundo principio).",
        "Falso: un motor cíclico monotermo no puede suministrar ningún trabajo; es precisamente el enunciado de Kelvin.",
        "Falso: eso describiría más bien un radiador o una bomba de calor, no un motor.",
        "Correcto: el motor desvía una fracción del flujo caliente → frío, nunca la totalidad.",
      ],
    },
    "l1-q2": {
      question: "¿Por qué un motor térmico necesita una diferencia de temperatura entre dos focos?",
      choices: [
        "Porque sin diferencia de temperatura no circula ningún flujo de calor, y no hay nada que convertir en trabajo.",
        "Porque el trabajo mecánico solo puede producirse a partir de un foco cuya temperatura supere un umbral mínimo, propio de cada fluido de trabajo.",
        "Porque la presión del fluido de trabajo debe mantenerse siempre por encima de la presión atmosférica durante todo el ciclo.",
      ],
      explanations: [
        "Correcto: el motor es un peaje sobre el flujo de calor caliente → frío; sin flujo, no hay trabajo. El gradiente de temperatura es el verdadero «combustible».",
        "Falso: no existe ningún umbral de temperatura; basta una diferencia incluso pequeña (véanse las centrales OTEC, que aprovechan unos pocos grados de diferencia en el océano).",
        "Falso: la presión no es el criterio; lo que cuenta es la diferencia de temperatura entre los dos focos.",
      ],
    },
    "l1-vf1": {
      question: "Un motor térmico cíclico puede funcionar estando en contacto con un único foco de calor.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Falso: es precisamente lo que prohíbe el enunciado de Kelvin del segundo principio; un motor cíclico monotermo no puede suministrar trabajo.",
        "Correcto: hacen falta al menos dos focos a temperaturas diferentes.",
      ],
    },
    "l2-q1": {
      question: "¿Qué sostenía la teoría del calórico, predominante a finales del siglo XVIII?",
      choices: [
        "El calor es una forma de agitación microscópica de la materia, transmitida progresivamente mediante las colisiones entre partículas.",
        "El calor es un fluido material conservado que fluye de lo caliente a lo frío.",
        "El calor y la temperatura son una única magnitud física, medida por el termómetro.",
      ],
      explanations: [
        "Falso: esta es la tesis rival, denominada mecanicista o cinética (Bacon, Bernoulli), que a posteriori resultaría ser correcta.",
        "Correcto: el calórico se concebía como un fluido imponderable y conservado, una teoría falsa pero fecunda.",
        "Falso: la distinción entre calor y temperatura ya se había establecido antes de la teoría del calórico gracias a Joseph Black (capacidad térmica, calor latente).",
      ],
    },
    "l2-q2": {
      question: "¿Qué experimento contradijo la teoría del calórico?",
      choices: [
        "La perforación de cañones observada por Rumford: el rozamiento produce calor sin límite aparente.",
        "La medición de Joseph Black del calor latente absorbido por el hielo durante su fusión a temperatura constante.",
        "La síntesis de Clapeyron de las leyes de Boyle, Charles y Gay-Lussac en una única ecuación de estado de los gases ideales.",
      ],
      explanations: [
        "Correcto: si el calor fuera un fluido conservado y finito, la perforación continua no podría producirlo indefinidamente. Rumford (1798) concluyó que estaba relacionado con el movimiento.",
        "Falso: por el contrario, la teoría del calórico explicaba bien el calor latente (el fluido se «combina» con la materia durante el cambio de estado).",
        "Falso: Clapeyron (1834) unificó las leyes de los gases, sin relación directa con la naturaleza del calor.",
      ],
    },
    "l2-vf1": {
      question: "Carnot estableció en 1824 la fórmula del rendimiento máximo η = 1 - T_f/T_c.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Falso: Carnot demostró la existencia y la universalidad de un rendimiento máximo, pero no su expresión; faltaba la escala absoluta de temperatura, introducida por Kelvin en 1848.",
        "Correcto: demostró la existencia de este límite universal sin poder dar su expresión, por no disponer de una definición rigurosa de la temperatura.",
      ],
    },
    "l2-q4": {
      question: "En la relación Q = m c ΔT puesta de manifiesto por Joseph Black, ¿qué representa el coeficiente c?",
      choices: [
        "La cantidad total de calor intercambiada por el cuerpo, expresada en julios.",
        "La cantidad de calor que debe suministrarse por unidad de masa del cuerpo para elevar su temperatura un grado.",
        "La relación entre el trabajo suministrado al cuerpo y el calor que recibe.",
      ],
      explanations: [
        "Falso: Q es la cantidad total de calor intercambiada, no c; además, Q depende de la masa y de la diferencia de temperatura.",
        "Correcto: es la capacidad térmica específica (o calor específico), el coeficiente propio de cada material que Black puso de manifiesto.",
        "Falso: esta relación no tiene nada que ver con tal cociente; c solo relaciona el calor y la temperatura.",
      ],
    },
    "l2-q5": {
      question: "¿Cuál es, en unidades modernas, el valor de la caloría medido por Joule?",
      choices: [
        "Aproximadamente 1 J por caloría",
        "Aproximadamente 4,18 J por caloría",
        "Aproximadamente 100 J por caloría",
        "Aproximadamente 0,24 J por caloría",
      ],
      explanations: [
        "Falso: así sería si la caloría y el julio ya midieran lo mismo sin necesidad de conversión.",
        "Correcto: 1 cal ≈ 4,18 J; este valor, medido con precisión creciente entre 1843 y 1849, estableció la equivalencia entre calor y trabajo.",
        "Falso: este valor es unas 24 veces mayor que el valor medido por Joule.",
        "Falso: es aproximadamente el inverso (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Un envase alimentario indica «250 cal». ¿A cuántos julios corresponde aproximadamente?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falso: esto equivaldría a confundir la unidad indicada con el julio.",
        "Correcto: la caloría alimentaria es en realidad 1 kcal, que normalmente se escribe Cal con mayúscula. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Falso: esto equivaldría a olvidar que una caloría alimentaria es en realidad una kilocaloría.",
        "Falso: esto equivaldría a confundir la caloría alimentaria con el kilojulio.",
      ],
    },
    "l2-vf3": {
      question: "La calorimetría es la ciencia que mide las cantidades de calor intercambiadas entre sistemas.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Correcto: Black, 1760, inicio de la calorimetría.",
        "Falso: la calorimetría es, en efecto, la ciencia que mide el calor, no la temperatura.",
      ],
    },
    "l2-q7": {
      question: "Se calienta un cubito de hielo a 0°C hasta obtener agua líquida a 20°C. ¿Cómo debe calcularse correctamente el calor total recibido?",
      choices: [
        "Q = m c_eau ΔT, con ΔT = 20°C y c_eau la capacidad térmica específica del agua líquida.",
        "Q = m L + m c_eau ΔT, con L el calor latente específico de fusión, c_eau la capacidad térmica específica del agua líquida y ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT con ΔT = 20°C.",
      ],
      explanations: [
        "Falso: este cálculo omite el calor latente de fusión, absorbido a 0°C sin que cambie la temperatura; esta fue precisamente la segunda aportación de Black, distinta de la capacidad térmica.",
        "Correcto: el calor latente (fusión a temperatura constante) y la relación Q = mcΔT (calentamiento dentro de una sola fase) se suman, pero cada uno se aplica a una etapa distinta del proceso.",
        "Falso: una vez fundido el hielo, para calentar de 0°C a 20°C se aplica la capacidad térmica específica del agua líquida, no la del hielo.",
      ],
    },
    "l2-vf4": {
      question: "Cuando el agua líquida se congela, libera calor al exterior.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Correcto: la solidificación es el proceso inverso de la fusión. El agua restituye exactamente el calor latente que fue necesario suministrar para fundir la misma cantidad de hielo; esto explica, por ejemplo, que el agua de un lago que se congela en invierno caliente ligeramente el aire circundante.",
        "Falso: se trata, en efecto, de un fenómeno exotérmico, simétrico a la fusión (endotérmica): es el mismo calor latente con el signo opuesto.",
      ],
    },
    "l3-q1": {
      question: "Un sistema aislado es un sistema cuyas paredes son:",
      choices: [
        "Diatermanas, móviles y permeables.",
        "Rígidas, adiabáticas e impermeables.",
        "Rígidas, diatermanas e impermeables.",
        "Móviles, adiabáticas y permeables.",
      ],
      explanations: [
        "Falso: por el contrario, estas propiedades permiten todos los intercambios (calor, trabajo y materia).",
        "Correcto: una pared rígida impide el intercambio de trabajo, una adiabática el de calor y una impermeable el de materia.",
        "Falso: las paredes diatermanas permiten el paso del calor; el sistema no estaría aislado.",
        "Falso: las paredes móviles y permeables permiten intercambios de trabajo y materia.",
      ],
    },
    "l3-vf2": {
      question: "Una pared diatermana deja pasar el calor.",
      choices: ["Verdadero", "Falso"],
      explanations: ["Correcto", "Falso"],
    },
    "l3-vf3": {
      question: "Una pared adiabática deja pasar el calor.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Falso: eso correspondería a una pared diatermana.",
        "Correcto: adiabática significa, por el contrario, que ningún calor atraviesa la pared; adiabática es lo contrario de diatermana.",
      ],
    },
    "l3-vf4": {
      question: "Un sistema es cerrado si sus paredes son impermeables a la materia, aunque pueda intercambiar calor y trabajo con el exterior.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Correcto: cerrado solo significa que no hay intercambio de materia; a diferencia de un sistema aislado, sí puede intercambiar calor y trabajo.",
        "Falso: esta es precisamente la definición de un sistema cerrado (no debe confundirse con un sistema aislado, que impide además los intercambios de calor y trabajo).",
      ],
    },
    "l3-q3": {
      question: "¿Cuál de estas magnitudes es intensiva?",
      choices: ["El volumen V", "La energía interna U", "La presión P", "El número de partículas N"],
      explanations: [
        "Falso: el volumen se duplica al duplicar el sistema; es extensivo.",
        "Falso: la energía interna es extensiva (en ausencia de fuerzas de largo alcance).",
        "Correcto: la presión no cambia al duplicar el sistema; es una magnitud emergente, sin equivalente para una molécula individual.",
        "Falso: N se duplica con el sistema; es extensivo.",
      ],
    },
    "l3-q5": {
      question: "Una transformación isócora se realiza:",
      choices: ["A presión constante", "Sin intercambio de calor", "A temperatura constante", "A volumen constante"],
      explanations: [
        "Falso: esa es una transformación isobárica.",
        "Falso: esa es una transformación adiabática.",
        "Falso: esa es una transformación isotérmica.",
        "Correcto: isócora = volumen constante.",
      ],
    },
    "l3-vf1": {
      question: "Un sistema termodinámico en equilibrio es necesariamente homogéneo (con las mismas magnitudes intensivas en todos sus puntos).",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Falso: un vaso de agua sobre una mesa está en equilibrio y, sin embargo, su presión no es la misma en la superficie y en el fondo. Es la ley de Pascal (hidrostática): en un fluido en reposo sometido a la gravedad, la presión aumenta con la profundidad, P(z) = P_0 + ρgh. Esta falta de uniformidad no desaparece nunca, por mucho que se espere; por tanto, no se debe a una falta de equilibrio, sino a la presencia de un campo de fuerzas externo (la gravedad).",
        "Correcto: el ejemplo clásico es un vaso de agua sobre una mesa—su presión aumenta con la profundidad (ley de Pascal: P(z) = P_0 + ρgh) sin que nada fluya ni cambie. El equilibrio termodinámico solo exige la ausencia de flujos macroscópicos (de calor, materia y cantidad de movimiento) entre los puntos del sistema; no exige que magnitudes intensivas como la presión sean idénticas en todas partes, especialmente en presencia de un campo externo como la gravedad.",
      ],
    },
    "l3-vf5": {
      question: "Una barra metálica cuyos dos extremos se mantienen a temperaturas diferentes acaba alcanzando un régimen en el que el perfil de temperatura ya no depende del tiempo. Este régimen es un estado de equilibrio termodinámico.",
      choices: ["Verdadero", "Falso"],
      explanations: [
        "Falso: es un estado estacionario, no un estado de equilibrio. El perfil de temperatura es constante en el tiempo, pero un flujo macroscópico de calor sigue atravesando la barra desde el extremo caliente hacia el frío.",
        "Correcto: se trata de un estado estacionario, que debe distinguirse del equilibrio. La definición de equilibrio termodinámico exige no solo que las magnitudes macroscópicas ya no cambien, sino también la ausencia de todo flujo macroscópico (aquí persiste un flujo de calor entre los dos extremos).",
      ],
    },
    "l4-q2": {
      question: "¿Por qué se escriben δQ y δW en lugar de dQ y dW?",
      choices: [
        "Porque son diferenciales inexactas: sus integrales dependen del camino seguido.",
        "Porque Q y W son magnitudes demasiado pequeñas para describirse mediante diferenciales ordinarias.",
      ],
      explanations: [
        "Correcto: Q y W dependen del camino, a diferencia de U, que solo depende de los estados inicial y final. Escribir dQ equivaldría a resucitar la teoría del calórico.",
        "Incorrecto: el «tamaño» de las magnitudes no tiene nada que ver; lo importante es la dependencia del camino.",
      ],
    },
    "l4-q2b": {
      question: "Un gas ideal pasa de un estado de equilibrio A a otro B, bien comprimiéndolo y después calentándolo, bien calentándolo y después comprimiéndolo. ¿Qué se puede afirmar?",
      choices: [
        "La variación de energía interna ΔU y el calor Q y el trabajo W recibidos son iguales en ambos casos.",
        "ΔU es igual en ambos casos, pero Q y W pueden diferir de un camino a otro.",
        "Q es igual en ambos casos, pero ΔU puede diferir.",
        "Ninguna de las tres magnitudes depende del camino seguido.",
      ],
      explanations: [
        "Incorrecto: solo ΔU queda fijada por los estados A y B; Q y W dependen en general del camino seguido.",
        "Correcto: U es una función de estado (dU es una diferencial exacta), por lo que ΔU = U(B) − U(A) solo depende de los estados inicial y final. Q y W no son funciones de estado (δQ y δW no son diferenciales exactas), así que dependen del camino; solo su suma Q + W = ΔU queda fijada por el primer principio.",
        "Incorrecto: lo cierto es lo contrario—ΔU, y no Q, es independiente del camino.",
        "Incorrecto: ΔU no depende del camino, pero Q y W sí dependen en general.",
      ],
    },
    "l4-q3": {
      question: "Un sistema cerrado experimenta una transformación cíclica (A → A). ¿Qué se puede afirmar sobre el balance Q_cycle + W_cycle?",
      choices: [
        "Es necesariamente nulo porque Q y W son funciones de estado.",
        "Es nulo porque U es una función de estado.",
        "Siempre es estrictamente positivo para una máquina térmica motriz.",
      ],
      explanations: [
        "Incorrecto: ocurre lo contrario—Q y W no son funciones de estado, sino transferencias, no magnitudes del sistema. Solo su suma debe anularse en un ciclo mediante ΔU_cycle = 0.",
        "Correcto: al terminar un ciclo, el sistema recupera su estado inicial. Como U es una función de estado, ΔU_cycle = U(A) − U(A) = 0; por tanto, el primer principio impone Q_cycle + W_cycle = 0.",
        "Incorrecto: es la suma Q_cycle + W_cycle la que es nula, no cada término por separado; Q_cycle y W_cycle pueden ser ambos no nulos y de signos opuestos en una máquina térmica.",
      ],
    },
    "l4-q4": {
      question: "Se comprime un gas de forma cuasiestática. ¿Qué se puede decir del trabajo recibido por el gas?",
      choices: [
        "Es negativo: al comprimirse, el gas cede necesariamente energía mecánica al entorno que lo comprime.",
        "Es positivo: el gas recibe trabajo durante una compresión.",
        "Es nulo: en una transformación cuasiestática, los intercambios de trabajo se compensan exactamente en cada etapa.",
      ],
      explanations: [
        "Incorrecto: es el error de signo clásico; con dV < 0 se tiene −P dV > 0, por lo que el gas recibe trabajo.",
        "Correcto: comprimir un gas exige suministrarle energía mecánica; según el convenio contable, lo que entra se cuenta como positivo.",
        "Incorrecto: cuasiestático no significa trabajo nulo, sino únicamente que la transformación atraviesa una sucesión de estados de equilibrio.",
      ],
    },
    "l4-q6": {
      question: "Durante una transformación isócora de un sistema cerrado, siempre se cumple:",
      choices: ["W = 0, por tanto ΔU = Q", "Q = 0, por tanto ΔU = W", "ΔU = 0, por tanto Q = −W"],
      explanations: [
        "Correcto: a volumen constante, δW = −P dV = 0; toda la variación de energía interna procede del calor.",
        "Incorrecto: este es el balance de una transformación adiabática, no isócora.",
        "Incorrecto: este es el balance de una transformación isotérmica de un gas ideal, pues U solo depende de T.",
      ],
    },
  },

  pt: {
    "l1-q1": {
      question: "O que é um motor térmico, no sentido da termodinâmica?",
      choices: [
        "Um dispositivo que, ao longo de um ciclo, converte integralmente em trabalho o calor que recebe da fonte quente.",
        "Um dispositivo que funciona em ciclo em contacto com uma única fonte de calor, da qual extrai trabalho.",
        "Um dispositivo que produz calor a partir de um trabalho mecânico fornecido por um operador exterior.",
        "Um dispositivo cíclico que converte em trabalho uma fração do fluxo de calor que vai do quente para o frio.",
      ],
      explanations: [
        "Falso: converter integralmente o calor em trabalho ao longo de um ciclo é impossível (enunciado de Kelvin do segundo princípio).",
        "Falso: um motor cíclico monotérmico não pode fornecer qualquer trabalho; é precisamente o enunciado de Kelvin.",
        "Falso: isso descreveria antes um radiador ou uma bomba de calor, não um motor.",
        "Correto: o motor desvia uma fração do fluxo quente → frio, nunca a totalidade.",
      ],
    },
    "l1-q2": {
      question: "Porque é que um motor térmico precisa de uma diferença de temperatura entre duas fontes?",
      choices: [
        "Porque sem diferença de temperatura não circula nenhum fluxo de calor, e não há nada para converter em trabalho.",
        "Porque o trabalho mecânico só pode ser produzido a partir de uma fonte cuja temperatura ultrapasse um limiar mínimo, próprio de cada fluido de trabalho.",
        "Porque a pressão do fluido de trabalho tem de se manter sempre acima da pressão atmosférica durante todo o ciclo.",
      ],
      explanations: [
        "Correto: o motor é uma portagem sobre o fluxo de calor quente → frio; sem fluxo, não há trabalho. O gradiente de temperatura é o verdadeiro «combustível».",
        "Falso: não existe qualquer limiar de temperatura; basta uma diferença mesmo pequena (ver as centrais OTEC, que exploram alguns graus de diferença no oceano).",
        "Falso: a pressão não é o critério; o que conta é a diferença de temperatura entre as duas fontes.",
      ],
    },
    "l1-vf1": {
      question: "Um motor térmico cíclico pode funcionar estando em contacto com uma única fonte de calor.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Falso: é precisamente o que o enunciado de Kelvin do segundo princípio proíbe; um motor cíclico monotérmico não pode fornecer trabalho.",
        "Correto: são necessárias pelo menos duas fontes a temperaturas diferentes.",
      ],
    },
    "l2-q1": {
      question: "O que sustentava a teoria do calórico, dominante no final do século XVIII?",
      choices: [
        "O calor é uma forma de agitação microscópica da matéria, transmitida progressivamente pelas colisões entre partículas.",
        "O calor é um fluido material conservado, que flui do quente para o frio.",
        "O calor e a temperatura são uma única grandeza física, medida pelo termómetro.",
      ],
      explanations: [
        "Falso: esta é a tese rival, dita mecanicista ou cinética (Bacon, Bernoulli), que viria a revelar-se correta a posteriori.",
        "Correto: o calórico era concebido como um fluido imponderável e conservado, uma teoria falsa mas fecunda.",
        "Falso: a distinção entre calor e temperatura já tinha sido estabelecida antes da teoria do calórico graças a Joseph Black (capacidade térmica, calor latente).",
      ],
    },
    "l2-q2": {
      question: "Que experiência veio contradizer a teoria do calórico?",
      choices: [
        "A perfuração de canhões observada por Rumford: o atrito produz calor sem limite aparente.",
        "A medição por Joseph Black do calor latente absorvido pelo gelo durante a fusão, a temperatura constante.",
        "A síntese por Clapeyron das leis de Boyle, Charles e Gay-Lussac numa única equação de estado dos gases ideais.",
      ],
      explanations: [
        "Correto: se o calor fosse um fluido conservado e finito, a perfuração contínua não poderia produzi-lo indefinidamente. Rumford (1798) concluiu que estava relacionado com o movimento.",
        "Falso: pelo contrário, a teoria do calórico explicava bem o calor latente (o fluido «combina-se» com a matéria durante a mudança de estado).",
        "Falso: Clapeyron (1834) unificou as leis dos gases, sem relação direta com a natureza do calor.",
      ],
    },
    "l2-vf1": {
      question: "Carnot estabeleceu em 1824 a fórmula do rendimento máximo η = 1 - T_f/T_c.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Falso: Carnot demonstrou a existência e a universalidade de um rendimento máximo, mas não a sua expressão; faltava a escala absoluta de temperatura, introduzida por Kelvin em 1848.",
        "Correto: provou a existência deste limite universal sem poder indicar a sua expressão, por não dispor de uma definição rigorosa da temperatura.",
      ],
    },
    "l2-q4": {
      question: "Na relação Q = m c ΔT evidenciada por Joseph Black, o que representa o coeficiente c?",
      choices: [
        "A quantidade total de calor trocada pelo corpo, expressa em joules.",
        "A quantidade de calor que é necessário fornecer por unidade de massa do corpo para elevar a sua temperatura um grau.",
        "A razão entre o trabalho fornecido ao corpo e o calor que este recebe.",
      ],
      explanations: [
        "Falso: Q é a quantidade total de calor trocada, não c; além disso, Q depende da massa e da diferença de temperatura.",
        "Correto: é a capacidade térmica mássica (ou calor específico), o coeficiente próprio de cada material que Black pôs em evidência.",
        "Falso: esta relação nada tem que ver com essa razão; c relaciona apenas o calor e a temperatura.",
      ],
    },
    "l2-q5": {
      question: "Qual é, em unidades modernas, o valor da caloria medido por Joule?",
      choices: [
        "Cerca de 1 J por caloria",
        "Cerca de 4,18 J por caloria",
        "Cerca de 100 J por caloria",
        "Cerca de 0,24 J por caloria",
      ],
      explanations: [
        "Falso: seria esse o caso se a caloria e o joule já medissem a mesma coisa sem conversão.",
        "Correto: 1 cal ≈ 4,18 J; este valor, medido com precisão crescente entre 1843 e 1849, estabeleceu a equivalência entre calor e trabalho.",
        "Falso: este valor é cerca de 24 vezes superior ao valor medido por Joule.",
        "Falso: é aproximadamente o inverso (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Uma embalagem alimentar indica «250 cal». A quantos joules corresponde aproximadamente?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falso: isso equivaleria a confundir a unidade indicada com o joule.",
        "Correto: a caloria alimentar é, na realidade, 1 kcal, normalmente indicada por Cal com maiúscula. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Falso: isso equivaleria a esquecer que uma caloria alimentar é, na realidade, uma quilocaloria.",
        "Falso: isso equivaleria a confundir a caloria alimentar com o quilojoule.",
      ],
    },
    "l2-vf3": {
      question: "A calorimetria é a ciência da medição das quantidades de calor trocadas entre sistemas.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Correto: Black, 1760, início da calorimetria.",
        "Falso: a calorimetria é, de facto, a ciência da medição do calor, não da temperatura.",
      ],
    },
    "l2-q7": {
      question: "Aquece-se um cubo de gelo a 0°C até obter água líquida a 20°C. Como se deve calcular corretamente o calor total recebido?",
      choices: [
        "Q = m c_eau ΔT, com ΔT = 20°C e c_eau a capacidade térmica mássica da água líquida.",
        "Q = m L + m c_eau ΔT, com L o calor latente mássico de fusão, c_eau a capacidade térmica mássica da água líquida e ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT com ΔT = 20°C.",
      ],
      explanations: [
        "Falso: este cálculo omite o calor latente de fusão, absorvido a 0°C sem que a temperatura se altere; foi precisamente esta a segunda descoberta de Black, distinta da capacidade térmica.",
        "Correto: o calor latente (fusão a temperatura constante) e a relação Q = mcΔT (aquecimento numa única fase) somam-se, mas cada um se aplica a uma etapa distinta do processo.",
        "Falso: depois de o gelo fundir, é a capacidade térmica mássica da água líquida que se aplica ao aquecimento de 0°C a 20°C, não a do gelo.",
      ],
    },
    "l2-vf4": {
      question: "Quando a água líquida congela, liberta calor para o exterior.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Correto: a solidificação é o processo inverso da fusão. A água restitui exatamente o calor latente que tinha sido necessário fornecer para fundir a mesma quantidade de gelo; isto explica, por exemplo, por que motivo a água de um lago que congela no inverno aquece ligeiramente o ar circundante.",
        "Falso: trata-se, de facto, de um fenómeno exotérmico, simétrico da fusão (endotérmica): é o mesmo calor latente com o sinal invertido.",
      ],
    },
    "l3-q1": {
      question: "Um sistema isolado é um sistema cujas paredes são:",
      choices: [
        "Diatermanas, móveis e permeáveis.",
        "Rígidas, adiabáticas e impermeáveis.",
        "Rígidas, diatermanas e impermeáveis.",
        "Móveis, adiabáticas e permeáveis.",
      ],
      explanations: [
        "Falso: pelo contrário, estas propriedades permitem todas as trocas (calor, trabalho e matéria).",
        "Correto: uma parede rígida impede a troca de trabalho, uma adiabática a troca de calor e uma impermeável a troca de matéria.",
        "Falso: as paredes diatermanas permitem a passagem do calor; o sistema não estaria isolado.",
        "Falso: as paredes móveis e permeáveis permitem trocas de trabalho e matéria.",
      ],
    },
    "l3-vf2": {
      question: "Uma parede diatermana deixa passar o calor.",
      choices: ["Verdadeiro", "Falso"],
      explanations: ["Correto", "Falso"],
    },
    "l3-vf3": {
      question: "Uma parede adiabática deixa passar o calor.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Falso: isso corresponderia a uma parede diatermana.",
        "Correto: adiabática significa, pelo contrário, que nenhum calor atravessa a parede; adiabática é o contrário de diatermana.",
      ],
    },
    "l3-vf4": {
      question: "Um sistema é fechado se as suas paredes forem impermeáveis à matéria, embora possa trocar calor e trabalho com o exterior.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Correto: fechado significa apenas que não há troca de matéria; ao contrário de um sistema isolado, o calor e o trabalho podem ser trocados.",
        "Falso: esta é precisamente a definição de um sistema fechado (não deve ser confundido com um sistema isolado, que também impede as trocas de calor e trabalho).",
      ],
    },
    "l3-q3": {
      question: "Qual destas grandezas é intensiva?",
      choices: ["O volume V", "A energia interna U", "A pressão P", "O número de partículas N"],
      explanations: [
        "Falso: o volume duplica quando se duplica o sistema; é extensivo.",
        "Falso: a energia interna é extensiva (na ausência de forças de longo alcance).",
        "Correto: a pressão não se altera quando se duplica o sistema; é uma grandeza emergente, sem equivalente para uma molécula individual.",
        "Falso: N duplica com o sistema; é extensivo.",
      ],
    },
    "l3-q5": {
      question: "Uma transformação isocórica realiza-se:",
      choices: ["A pressão constante", "Sem troca de calor", "A temperatura constante", "A volume constante"],
      explanations: [
        "Falso: essa é uma transformação isobárica.",
        "Falso: essa é uma transformação adiabática.",
        "Falso: essa é uma transformação isotérmica.",
        "Correto: isocórica = volume constante.",
      ],
    },
    "l3-vf1": {
      question: "Um sistema termodinâmico em equilíbrio é necessariamente homogêneo (com as mesmas grandezas intensivas em todos os pontos).",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Falso: um copo de água pousado sobre uma mesa está em equilíbrio e, no entanto, a pressão não é a mesma à superfície e no fundo. É a lei de Pascal (hidrostática): num fluido em repouso sujeito à gravidade, a pressão aumenta com a profundidade, P(z) = P_0 + ρgh. Esta não uniformidade nunca desaparece, por mais tempo que se espere; por conseguinte, não se deve a uma falta de equilíbrio, mas à presença de um campo de forças externo (a gravidade).",
        "Correto: o exemplo clássico é um copo de água pousado sobre uma mesa—a sua pressão aumenta com a profundidade (lei de Pascal: P(z) = P_0 + ρgh) sem que nada flua ou se altere. O equilíbrio termodinâmico exige apenas a ausência de fluxos macroscópicos (de calor, matéria e quantidade de movimento) entre os pontos do sistema; não exige que grandezas intensivas como a pressão sejam idênticas em toda a parte, sobretudo na presença de um campo externo como a gravidade.",
      ],
    },
    "l3-vf5": {
      question: "Uma barra metálica cujas duas extremidades são mantidas a temperaturas diferentes acaba por atingir um regime em que o perfil de temperatura já não depende do tempo. Este regime é um estado de equilíbrio termodinâmico.",
      choices: ["Verdadeiro", "Falso"],
      explanations: [
        "Falso: é um estado estacionário, não um estado de equilíbrio. O perfil de temperatura é constante no tempo, mas um fluxo macroscópico de calor continua a atravessar a barra, da extremidade quente para a fria.",
        "Correto: trata-se de um estado estacionário, que deve ser distinguido do equilíbrio. A definição de equilíbrio termodinâmico exige não só que as grandezas macroscópicas deixem de evoluir, mas também a ausência de qualquer fluxo macroscópico (neste caso, persiste um fluxo de calor entre as duas extremidades).",
      ],
    },
    "l4-q2": {
      question: "Por que se escreve δQ e δW em vez de dQ e dW?",
      choices: [
        "Porque são diferenciais inexatas: os seus integrais dependem do caminho seguido.",
        "Porque Q e W são grandezas demasiado pequenas para serem descritas por diferenciais ordinárias.",
      ],
      explanations: [
        "Correto: Q e W dependem do caminho, ao contrário de U, que depende apenas dos estados inicial e final. Escrever dQ equivaleria a ressuscitar a teoria do calórico.",
        "Errado: o «tamanho» das grandezas é irrelevante; o que está em causa é a dependência do caminho.",
      ],
    },
    "l4-q2b": {
      question: "Um gás ideal passa de um estado de equilíbrio A para um estado de equilíbrio B, quer sendo primeiro comprimido e depois aquecido, quer sendo primeiro aquecido e depois comprimido. O que se pode afirmar?",
      choices: [
        "A variação da energia interna ΔU e o calor Q e o trabalho W recebidos são iguais nos dois casos.",
        "ΔU é igual nos dois casos, mas Q e W podem diferir de um caminho para outro.",
        "Q é igual nos dois casos, mas ΔU pode diferir.",
        "Nenhuma das três grandezas depende do caminho seguido.",
      ],
      explanations: [
        "Errado: apenas ΔU é fixada pelos estados A e B; Q e W dependem, em geral, do caminho seguido.",
        "Correto: U é uma função de estado (dU é uma diferencial exata), pelo que ΔU = U(B) − U(A) depende apenas dos estados inicial e final. Q e W não são funções de estado (δQ e δW não são diferenciais exatas), pelo que dependem do caminho; apenas a sua soma Q + W = ΔU é fixada pelo primeiro princípio.",
        "Errado: é o contrário que é verdade—ΔU, e não Q, é independente do caminho.",
        "Errado: ΔU não depende do caminho, mas Q e W dependem em geral.",
      ],
    },
    "l4-q3": {
      question: "Um sistema fechado sofre uma transformação cíclica (A → A). O que se pode afirmar sobre o balanço Q_cycle + W_cycle?",
      choices: [
        "É necessariamente nulo porque Q e W são funções de estado.",
        "É nulo porque U é uma função de estado.",
        "É sempre estritamente positivo para uma máquina térmica motora.",
      ],
      explanations: [
        "Errado: é o contrário—Q e W não são funções de estado; são transferências, não grandezas do sistema. Apenas a sua soma é obrigada a anular-se num ciclo por ΔU_cycle = 0.",
        "Correto: num ciclo, o sistema regressa ao estado inicial. Como U é uma função de estado, ΔU_cycle = U(A) − U(A) = 0; o primeiro princípio impõe, portanto, Q_cycle + W_cycle = 0.",
        "Errado: é a soma Q_cycle + W_cycle que é nula, não cada termo separadamente; Q_cycle e W_cycle podem ser ambos não nulos e ter sinais opostos numa máquina térmica.",
      ],
    },
    "l4-q4": {
      question: "Comprime-se um gás de forma quase-estática. O que se pode dizer do trabalho recebido pelo gás?",
      choices: [
        "É negativo: ao ser comprimido, o gás cede necessariamente energia mecânica ao meio exterior que o comprime.",
        "É positivo: o gás recebe trabalho durante uma compressão.",
        "É nulo: numa transformação quase-estática, as trocas de trabalho compensam-se exatamente em cada etapa.",
      ],
      explanations: [
        "Errado: é o erro de sinal clássico; com dV < 0, tem-se −P dV > 0, pelo que o gás recebe trabalho.",
        "Correto: comprimir um gás exige fornecer-lhe energia mecânica; pela convenção contabilística, o que entra é contado positivamente.",
        "Errado: quase-estática não significa trabalho nulo, mas apenas que a transformação passa por uma sucessão de estados de equilíbrio.",
      ],
    },
    "l4-q6": {
      question: "Durante uma transformação isocórica de um sistema fechado, tem-se sempre:",
      choices: ["W = 0, logo ΔU = Q", "Q = 0, logo ΔU = W", "ΔU = 0, logo Q = −W"],
      explanations: [
        "Correto: a volume constante, δW = −P dV = 0; toda a variação da energia interna provém do calor.",
        "Errado: este é o balanço de uma transformação adiabática, não isocórica.",
        "Errado: este é o balanço de uma transformação isotérmica de um gás ideal, pois U depende apenas de T.",
      ],
    },
  },

  it: {
    "l1-q1": {
      question: "Che cos'è un motore termico, nel senso della termodinamica?",
      choices: [
        "Un dispositivo che, nel corso di un ciclo, converte integralmente in lavoro il calore che riceve dalla sorgente calda.",
        "Un dispositivo che funziona ciclicamente a contatto con una sola sorgente di calore, dalla quale estrae lavoro.",
        "Un dispositivo che produce calore a partire da un lavoro meccanico fornito da un operatore esterno.",
        "Un dispositivo ciclico che converte in lavoro una frazione del flusso di calore che va dal caldo al freddo.",
      ],
      explanations: [
        "Falso: convertire integralmente il calore in lavoro nel corso di un ciclo è impossibile (enunciato di Kelvin del secondo principio).",
        "Falso: un motore ciclico monotermo non può fornire alcun lavoro; è precisamente l'enunciato di Kelvin.",
        "Falso: questo descriverebbe piuttosto un radiatore o una pompa di calore, non un motore.",
        "Esatto: il motore devia una frazione del flusso caldo → freddo, mai la totalità.",
      ],
    },
    "l1-q2": {
      question: "Perché un motore termico ha bisogno di una differenza di temperatura fra due sorgenti?",
      choices: [
        "Perché senza differenza di temperatura non scorre alcun flusso di calore, e non c'è nulla da convertire in lavoro.",
        "Perché il lavoro meccanico può essere prodotto solo a partire da una sorgente la cui temperatura superi una soglia minima, propria di ciascun fluido di lavoro.",
        "Perché la pressione del fluido di lavoro deve restare sempre superiore alla pressione atmosferica per tutto il ciclo.",
      ],
      explanations: [
        "Esatto: il motore è un pedaggio sul flusso di calore caldo → freddo; senza flusso, niente lavoro. Il gradiente di temperatura è il vero «carburante».",
        "Falso: non esiste alcuna soglia di temperatura; basta una differenza anche piccola (cfr. le centrali OTEC, che sfruttano pochi gradi di scarto nell'oceano).",
        "Falso: la pressione non è il criterio; ciò che conta è lo scarto di temperatura fra le due sorgenti.",
      ],
    },
    "l1-vf1": {
      question: "Un motore termico ciclico può funzionare restando a contatto con una sola sorgente di calore.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Falso: è precisamente ciò che vieta l'enunciato di Kelvin del secondo principio; un motore ciclico monotermo non può fornire lavoro.",
        "Esatto: occorrono almeno due sorgenti a temperature diverse.",
      ],
    },
    "l2-q1": {
      question: "Che cosa sosteneva la teoria del calorico, dominante alla fine del XVIII secolo?",
      choices: [
        "Il calore è l'agitazione delle parti più piccole della materia, trasmessa progressivamente attraverso le collisioni tra particelle.",
        "Il calore è un fluido materiale conservato, che scorre dal caldo verso il freddo.",
        "Il calore e la temperatura sono un'unica grandezza fisica, misurata dal termometro.",
      ],
      explanations: [
        "Falso: è la tesi rivale, detta meccanicistica o cinetica (Bacon, Bernoulli), che a posteriori si sarebbe rivelata corretta.",
        "Esatto: il calorico era concepito come un fluido imponderabile e conservato, una teoria falsa ma feconda.",
        "Falso: la distinzione tra calore e temperatura era stata acquisita prima della teoria del calorico, grazie a Joseph Black (capacità termica, calore latente).",
      ],
    },
    "l2-q2": {
      question: "Quale esperimento contraddisse la teoria del calorico?",
      choices: [
        "La perforazione dei cannoni osservata da Rumford: l'attrito produce calore senza un limite apparente.",
        "La misura di Joseph Black del calore latente assorbito dal ghiaccio durante la fusione, a temperatura costante.",
        "La sintesi, da parte di Clapeyron, delle leggi di Boyle, Charles e Gay-Lussac in un'unica equazione di stato dei gas ideali.",
      ],
      explanations: [
        "Esatto: se il calore fosse stato un fluido conservato e finito, una perforazione continua non avrebbe potuto produrne indefinitamente. Nel 1798 Rumford concluse che il calore è legato al movimento.",
        "Falso: il calore latente era invece ben spiegato dalla teoria del calorico (il fluido si «combina» con la materia durante il cambiamento di stato).",
        "Falso: nel 1834 Clapeyron riunì le leggi dei gas, senza un rapporto diretto con la natura del calore.",
      ],
    },
    "l2-vf1": {
      question: "Nel 1824 Carnot stabilì la formula del rendimento massimo η = 1 - T_f/T_c.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Falso: Carnot dimostrò l'esistenza e l'universalità di un rendimento massimo, ma non la sua espressione; mancava la scala assoluta della temperatura, introdotta da Kelvin nel 1848.",
        "Esatto: dimostrò l'esistenza di questo limite universale senza poterne fornire l'espressione, poiché mancava una definizione rigorosa della temperatura.",
      ],
    },
    "l2-q4": {
      question: "Nella relazione Q = m c ΔT messa in evidenza da Joseph Black, che cosa rappresenta il coefficiente c?",
      choices: [
        "La quantità totale di calore scambiata dal corpo, espressa in joule.",
        "La quantità di calore che occorre fornire a un'unità di massa del corpo per aumentarne la temperatura di un grado.",
        "Il rapporto tra il lavoro fornito al corpo e il calore che esso riceve.",
      ],
      explanations: [
        "Falso: è Q a rappresentare il calore totale scambiato, non c; Q dipende inoltre dalla massa e dalla variazione di temperatura.",
        "Esatto: è la capacità termica massica (o calore specifico), il coefficiente proprio di ciascun materiale messo in evidenza da Black.",
        "Falso: questa relazione non ha nulla a che vedere con c; c riguarda soltanto il calore e la temperatura.",
      ],
    },
    "l2-q5": {
      question: "Qual è, nelle unità moderne, il valore della caloria misurato da Joule?",
      choices: ["Circa 1 J per caloria", "Circa 4,18 J per caloria", "Circa 100 J per caloria", "Circa 0,24 J per caloria"],
      explanations: [
        "Falso: sarebbe così se la caloria e il joule misurassero già la stessa cosa senza conversione.",
        "Esatto: 1 cal ≈ 4,18 J; è il valore, misurato con precisione crescente tra il 1843 e il 1849, che stabilì l'equivalenza tra calore e lavoro.",
        "Falso: questo valore è circa 24 volte maggiore di quello misurato da Joule.",
        "Falso: è approssimativamente l'inverso (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Su una confezione alimentare è indicato «250 cal». A quanti joule corrispondono approssimativamente?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falso: ciò equivarrebbe a confondere l'unità indicata con il joule.",
        "Esatto: la caloria alimentare è in realtà 1 kcal, normalmente indicata con Cal maiuscola. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Falso: ciò equivarrebbe a dimenticare che una caloria alimentare è in realtà una chilocaloria.",
        "Falso: ciò equivarrebbe a confondere la caloria alimentare con il kilojoule.",
      ],
    },
    "l2-vf3": {
      question: "La calorimetria è la scienza che misura le quantità di calore scambiate tra sistemi.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Esatto: Black, 1760, nascita della calorimetria.",
        "Falso: la calorimetria è proprio la scienza della misura del calore, non della temperatura.",
      ],
    },
    "l2-q7": {
      question: "Si riscalda un cubetto di ghiaccio a 0°C fino a ottenere acqua liquida a 20°C. Come si calcola correttamente il calore totale ricevuto?",
      choices: [
        "Q = m c_eau ΔT, con ΔT = 20°C e c_eau capacità termica massica dell'acqua liquida.",
        "Q = m L + m c_eau ΔT, con L calore latente massico di fusione, c_eau capacità termica massica dell'acqua liquida e ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT con ΔT = 20°C.",
      ],
      explanations: [
        "Falso: questo calcolo dimentica il calore latente di fusione, assorbito a 0°C senza variazione di temperatura; è proprio la seconda scoperta di Black, distinta dalla capacità termica.",
        "Esatto: il calore latente (fusione a temperatura costante) si somma al calore Q = mcΔT (riscaldamento senza cambiamento di fase), ma i due contributi si riferiscono a tappe distinte del processo.",
        "Falso: una volta fuso il ghiaccio, al riscaldamento da 0°C a 20°C si applica la capacità termica dell'acqua liquida, non quella del ghiaccio.",
      ],
    },
    "l2-vf4": {
      question: "Quando l'acqua liquida congela, libera calore verso l'esterno.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Esatto: la solidificazione è l'inverso della fusione. L'acqua restituisce esattamente il calore latente che era stato necessario fornirle per fondere la stessa quantità di ghiaccio; ciò spiega, per esempio, perché l'acqua di un lago che gela in inverno riscaldi leggermente l'aria circostante.",
        "Falso: è proprio un fenomeno esotermico, simmetrico alla fusione (endotermica): si tratta dello stesso calore latente, con segno opposto.",
      ],
    },
    "l3-q1": {
      question: "Un sistema isolato è un sistema le cui pareti sono:",
      choices: [
        "Diatermane, mobili e permeabili.",
        "Rigide, adiabatiche e impermeabili.",
        "Rigide, diatermane e impermeabili.",
        "Mobili, adiabatiche e permeabili.",
      ],
      explanations: [
        "Falso: sono, al contrario, le proprietà che consentono tutti gli scambi (calore, lavoro, materia).",
        "Esatto: una parete rigida impedisce lo scambio di lavoro, una parete adiabatica lo scambio di calore e una parete impermeabile lo scambio di materia.",
        "Falso: le pareti diatermane lasciano passare il calore; il sistema non sarebbe isolato.",
        "Falso: pareti mobili e permeabili consentono il passaggio di lavoro e materia.",
      ],
    },
    "l3-vf2": {
      question: "Una parete diatermana lascia passare il calore.",
      choices: ["Vero", "Falso"],
      explanations: ["Esatto", "Falso"],
    },
    "l3-vf3": {
      question: "Una parete adiabatica lascia passare il calore.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Falso: questa sarebbe una parete diatermana.",
        "Esatto: adiabatica significa, al contrario, che nessun calore attraversa la parete; adiabatica è l'opposto di diatermana.",
      ],
    },
    "l3-vf4": {
      question: "Un sistema è detto chiuso se le sue pareti sono impermeabili alla materia, pur potendo scambiare calore e lavoro con l'esterno.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Esatto: chiuso significa soltanto assenza di scambio di materia; a differenza di un sistema isolato, calore e lavoro possono essere scambiati.",
        "Falso: questa è proprio la definizione di un sistema chiuso (da non confondere con un sistema isolato, che impedisce anche gli scambi di calore e lavoro).",
      ],
    },
    "l3-q3": {
      question: "Quale delle seguenti grandezze è intensiva?",
      choices: ["Il volume V", "L'energia interna U", "La pressione P", "Il numero di particelle N"],
      explanations: [
        "Falso: il volume raddoppia se si raddoppia il sistema; è una grandezza estensiva.",
        "Falso: l'energia interna è estensiva (in assenza di forze a lungo raggio).",
        "Esatto: la pressione non cambia se si raddoppia il sistema; è una grandezza emergente, senza equivalente per una singola molecola.",
        "Falso: N raddoppia con il sistema; è una grandezza estensiva.",
      ],
    },
    "l3-q5": {
      question: "Una trasformazione isocora avviene:",
      choices: ["A pressione costante", "Senza scambio di calore", "A temperatura costante", "A volume costante"],
      explanations: [
        "Falso: questa è una trasformazione isobara.",
        "Falso: questa è una trasformazione adiabatica.",
        "Falso: questa è una trasformazione isoterma.",
        "Esatto: isocora = volume costante.",
      ],
    },
    "l3-vf1": {
      question: "Un sistema termodinamico all'equilibrio è necessariamente omogeneo (stesse grandezze intensive in ogni punto).",
      choices: ["Vero", "Falso"],
      explanations: [
        "Falso: un bicchiere d'acqua appoggiato su un tavolo è all'equilibrio, eppure la pressione non è la stessa in superficie e sul fondo. È la legge di Pascal (idrostatica): in un fluido in quiete soggetto alla gravità, la pressione aumenta con la profondità, P(z) = P_0 + ρgh. Questa non uniformità non scompare mai, nemmeno attendendo indefinitamente: non è quindi dovuta a una mancanza di equilibrio, ma alla presenza di un campo di forze esterno (la gravità).",
        "Esatto: il bicchiere d'acqua appoggiato su un tavolo è l'esempio classico — la pressione aumenta con la profondità (legge di Pascal: P(z) = P_0 + ρgh) senza che nulla circoli o cambi. L'equilibrio termodinamico richiede soltanto l'assenza di flussi macroscopici (di calore, materia o quantità di moto) tra i punti del sistema; non richiede che grandezze intensive come la pressione siano identiche ovunque, soprattutto in presenza di un campo esterno come la gravità.",
      ],
    },
    "l3-vf5": {
      question: "Una barra metallica le cui estremità sono mantenute a temperature diverse raggiunge infine un regime in cui il profilo di temperatura non dipende più dal tempo. Questo regime è uno stato di equilibrio termodinamico.",
      choices: ["Vero", "Falso"],
      explanations: [
        "Falso: è uno stato stazionario, non uno stato di equilibrio. Il profilo di temperatura è effettivamente costante nel tempo, ma un flusso di calore macroscopico continua ad attraversare la barra dall'estremità calda a quella fredda.",
        "Esatto: si tratta di uno stato stazionario, da distinguere dall'equilibrio. La definizione di equilibrio termodinamico richiede non solo che le grandezze macroscopiche non cambino più, ma anche l'assenza di ogni flusso macroscopico (qui persiste un flusso di calore tra le due estremità).",
      ],
    },
    "l4-q2": {
      question: "Perché si scrivono δQ e δW anziché dQ e dW?",
      choices: [
        "Perché sono differenziali inesatti: i loro integrali dipendono dal cammino seguito.",
        "Perché Q e W sono grandezze troppo piccole per essere descritte con differenziali ordinari.",
      ],
      explanations: [
        "Esatto: Q e W dipendono dal cammino, a differenza di U, che dipende soltanto dagli stati iniziale e finale. Scrivere dQ equivarrebbe a resuscitare la teoria del calorico.",
        "Falso: la «dimensione» delle grandezze non c'entra; ciò che conta è la dipendenza dal cammino.",
      ],
    },
    "l4-q2b": {
      question: "Un gas ideale passa da uno stato di equilibrio A a uno stato di equilibrio B, comprimendolo prima di riscaldarlo oppure riscaldandolo prima di comprimerlo. Che cosa si può affermare?",
      choices: [
        "La variazione di energia interna ΔU e il calore Q e il lavoro W ricevuti sono uguali nei due casi.",
        "ΔU è uguale nei due casi, ma Q e W possono differire da un cammino all'altro.",
        "Q è uguale nei due casi, ma ΔU può differire.",
        "Nessuna delle tre grandezze dipende dal cammino seguito.",
      ],
      explanations: [
        "Falso: soltanto ΔU è fissata dagli stati A e B; Q e W dipendono in generale dal cammino seguito.",
        "Esatto: U è una funzione di stato (dU è un differenziale esatto), quindi ΔU = U(B) − U(A) dipende soltanto dagli stati iniziale e finale. Q e W non sono funzioni di stato (δQ e δW non sono differenziali esatti), perciò dipendono dal cammino; solo la loro somma Q + W = ΔU è fissata dal primo principio.",
        "Falso: è vero il contrario—ΔU, non Q, è indipendente dal cammino.",
        "Falso: ΔU non dipende dal cammino, mentre Q e W in generale sì.",
      ],
    },
    "l4-q3": {
      question: "Un sistema chiuso subisce una trasformazione ciclica (A → A). Che cosa si può affermare sul bilancio Q_cycle + W_cycle?",
      choices: [
        "È necessariamente nullo perché Q e W sono funzioni di stato.",
        "È nullo perché U è una funzione di stato.",
        "È sempre strettamente positivo per una macchina termica motrice.",
      ],
      explanations: [
        "Falso: è vero il contrario—Q e W non sono funzioni di stato, ma trasferimenti, non grandezze del sistema. Solo la loro somma deve annullarsi su un ciclo tramite ΔU_cycle = 0.",
        "Esatto: al termine di un ciclo il sistema ritrova lo stato iniziale. Poiché U è una funzione di stato, ΔU_cycle = U(A) − U(A) = 0; il primo principio impone quindi Q_cycle + W_cycle = 0.",
        "Falso: è la somma Q_cycle + W_cycle a essere nulla, non ciascun termine separatamente; Q_cycle e W_cycle possono essere entrambi non nulli e di segno opposto in una macchina termica.",
      ],
    },
    "l4-q4": {
      question: "Un gas viene compresso in modo quasi-statico. Che cosa si può dire del lavoro ricevuto dal gas?",
      choices: [
        "È negativo: comprimendosi, il gas cede necessariamente energia meccanica all'ambiente esterno che lo comprime.",
        "È positivo: durante una compressione il gas riceve lavoro.",
        "È nullo: in una trasformazione quasi-statica gli scambi di lavoro si compensano esattamente in ogni fase.",
      ],
      explanations: [
        "Falso: è il classico errore di segno; con dV < 0 si ha −P dV > 0, quindi il gas riceve lavoro.",
        "Esatto: comprimere un gas richiede di fornirgli energia meccanica; con la convenzione del banchiere, ciò che entra viene contato positivamente.",
        "Falso: quasi-statico non significa lavoro nullo, ma soltanto che la trasformazione attraversa una successione di stati di equilibrio.",
      ],
    },
    "l4-q6": {
      question: "Durante una trasformazione isocora di un sistema chiuso si ha sempre:",
      choices: ["W = 0, quindi ΔU = Q", "Q = 0, quindi ΔU = W", "ΔU = 0, quindi Q = −W"],
      explanations: [
        "Esatto: a volume costante, δW = −P dV = 0; l'intera variazione di energia interna proviene dal calore.",
        "Falso: questo è il bilancio di una trasformazione adiabatica, non isocora.",
        "Falso: questo è il bilancio di una trasformazione isoterma di un gas ideale, poiché U dipende soltanto da T.",
      ],
    },
  },

  pl: {
    "l1-q1": {
      question: "Czym jest silnik cieplny w sensie termodynamicznym?",
      choices: [
        "Urządzeniem, które w trakcie cyklu zamienia w całości w pracę ciepło pobrane ze źródła gorącego.",
        "Urządzeniem, które pracuje cyklicznie w kontakcie z jednym tylko źródłem ciepła, z którego czerpie pracę.",
        "Urządzeniem, które wytwarza ciepło z pracy mechanicznej dostarczonej przez operatora z zewnątrz.",
        "Urządzeniem cyklicznym, które zamienia w pracę część strumienia ciepła płynącego od ciała gorącego do zimnego.",
      ],
      explanations: [
        "Źle: całkowita zamiana ciepła w pracę w trakcie cyklu jest niemożliwa (kelvinowskie sformułowanie drugiej zasady).",
        "Źle: cykliczny silnik jednoźródłowy nie może dostarczyć żadnej pracy; mówi o tym właśnie sformułowanie Kelvina.",
        "Źle: to opis raczej grzejnika lub pompy ciepła, a nie silnika.",
        "Dobrze: silnik odprowadza część strumienia gorące → zimne, nigdy zaś całość.",
      ],
    },
    "l1-q2": {
      question: "Dlaczego silnik cieplny potrzebuje różnicy temperatur między dwoma źródłami?",
      choices: [
        "Ponieważ bez różnicy temperatur nie płynie żaden strumień ciepła i nie ma czego zamieniać w pracę.",
        "Ponieważ pracę mechaniczną można uzyskać tylko ze źródła, którego temperatura przekracza pewien próg minimalny, właściwy dla każdego czynnika roboczego.",
        "Ponieważ ciśnienie czynnika roboczego musi przez cały cykl pozostawać wyższe od ciśnienia atmosferycznego.",
      ],
      explanations: [
        "Dobrze: silnik pobiera myto od strumienia ciepła gorące → zimne; bez strumienia nie ma pracy. Prawdziwym „paliwem” jest gradient temperatury.",
        "Źle: nie istnieje żaden próg temperatury; wystarczy nawet niewielka różnica (por. elektrownie OTEC, wykorzystujące kilka stopni różnicy w oceanie).",
        "Źle: kryterium nie jest ciśnienie; liczy się różnica temperatur między dwoma źródłami.",
      ],
    },
    "l1-vf1": {
      question: "Cykliczny silnik cieplny może działać, pozostając w kontakcie tylko z jednym źródłem ciepła.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Źle: zabrania tego właśnie kelvinowskie sformułowanie drugiej zasady; cykliczny silnik jednoźródłowy nie może dostarczyć pracy.",
        "Dobrze: potrzebne są co najmniej dwa źródła o różnych temperaturach.",
      ],
    },
    "l2-q1": {
      question: "Co głosiła teoria cieplika, dominująca pod koniec XVIII wieku?",
      choices: [
        "Ciepło jest ruchem najmniejszych części materii, przekazywanym stopniowo przez zderzenia cząstek.",
        "Ciepło jest zachowywanym płynem materialnym, który przepływa od ciała gorącego do zimnego.",
        "Ciepło i temperatura są jedną i tą samą wielkością fizyczną, mierzoną termometrem.",
      ],
      explanations: [
        "Źle: jest to konkurencyjna teza, nazywana mechanistyczną lub kinetyczną (Bacon, Bernoulli), która z perspektywy czasu okazała się poprawna.",
        "Dobrze: cieplik pojmowano jako nieważki, zachowywany płyn; teoria była błędna, lecz płodna.",
        "Źle: rozróżnienie ciepła i temperatury ustalono jeszcze przed teorią cieplika dzięki Josephowi Blackowi (pojemność cieplna, ciepło utajone).",
      ],
    },
    "l2-q2": {
      question: "Które doświadczenie podważyło teorię cieplika?",
      choices: [
        "Wiercenie luf armatnich obserwowane przez Rumforda: tarcie wydziela pozornie niewyczerpaną ilość ciepła.",
        "Pomiar przez Josepha Blacka ciepła utajonego pochłanianego przez lód podczas topnienia w stałej temperaturze.",
        "Połączenie przez Clapeyrona praw Boyle'a, Charles'a i Gay-Lussaca w jedno równanie stanu gazu doskonałego.",
      ],
      explanations: [
        "Dobrze: gdyby ciepło było skończonym, zachowywanym płynem, ciągłe wiercenie nie mogłoby wytwarzać go bez końca. W 1798 roku Rumford wywnioskował, że ciepło wiąże się z ruchem.",
        "Źle: ciepło utajone teoria cieplika wyjaśniała wręcz dobrze (płyn «wiąże się» z materią podczas przemiany fazowej).",
        "Źle: w 1834 roku Clapeyron połączył prawa gazowe, co nie miało bezpośredniego związku z naturą ciepła.",
      ],
    },
    "l2-vf1": {
      question: "W 1824 roku Carnot ustalił wzór na maksymalną sprawność η = 1 - T_f/T_c.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Źle: Carnot wykazał istnienie i uniwersalność maksymalnej sprawności, ale nie podał jej wzoru; brakowało absolutnej skali temperatury, wprowadzonej przez Kelvina w 1848 roku.",
        "Dobrze: udowodnił istnienie tej uniwersalnej granicy, lecz nie mógł podać jej wzoru z powodu braku ścisłej definicji temperatury.",
      ],
    },
    "l2-q4": {
      question: "Co oznacza współczynnik c w zależności Q = m c ΔT wykazanej przez Josepha Blacka?",
      choices: [
        "Całkowitą ilość ciepła wymienioną przez ciało, wyrażoną w dżulach.",
        "Ilość ciepła, którą należy dostarczyć jednostce masy ciała, aby podnieść jego temperaturę o jeden stopień.",
        "Stosunek pracy dostarczonej ciału do otrzymanego przez nie ciepła.",
      ],
      explanations: [
        "Źle: całkowitą ilością wymienionego ciepła jest samo Q, a nie c; Q zależy ponadto od masy i zmiany temperatury.",
        "Dobrze: jest to ciepło właściwe (dawniej także pojemność cieplna właściwa), współczynnik charakterystyczny dla każdego materiału, który wykazał Black.",
        "Źle: zależność ta nie ma nic wspólnego z c; c wiąże jedynie ciepło i temperaturę.",
      ],
    },
    "l2-q5": {
      question: "Ile w nowoczesnych jednostkach wynosi kaloria zgodnie z pomiarem Joule'a?",
      choices: ["Około 1 J na kalorię", "Około 4,18 J na kalorię", "Około 100 J na kalorię", "Około 0,24 J na kalorię"],
      explanations: [
        "Źle: tak byłoby, gdyby kaloria i dżul już bez przeliczania mierzyły to samo.",
        "Dobrze: 1 cal ≈ 4,18 J; wartość ta, mierzona z coraz większą dokładnością w latach 1843–1849, ustaliła równoważność ciepła i pracy.",
        "Źle: wartość ta jest około 24 razy większa od pomiaru Joule'a.",
        "Źle: jest to w przybliżeniu odwrotność (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Na opakowaniu żywności widnieje «250 cal». Ilu dżulom odpowiada to w przybliżeniu?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Źle: oznaczałoby to pomylenie podanej jednostki z dżulem.",
        "Dobrze: kaloria żywieniowa jest w rzeczywistości kilokalorią (1 kcal), zwykle oznaczaną wielką literą jako Cal. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Źle: oznaczałoby to pominięcie faktu, że kaloria żywieniowa jest w rzeczywistości kilokalorią.",
        "Źle: oznaczałoby to pomylenie kalorii żywieniowej z kilodżulem.",
      ],
    },
    "l2-vf3": {
      question: "Kalorymetria jest nauką o pomiarze ilości ciepła wymienianego między układami.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Dobrze: Black, 1760 rok, początek kalorymetrii.",
        "Źle: kalorymetria jest właśnie nauką o pomiarze ciepła, a nie temperatury.",
      ],
    },
    "l2-q7": {
      question: "Ogrzewamy kostkę lodu o temperaturze 0°C aż do otrzymania ciekłej wody o temperaturze 20°C. Jak poprawnie obliczyć całkowite otrzymane ciepło?",
      choices: [
        "Q = m c_eau ΔT, gdzie ΔT = 20°C, a c_eau jest ciepłem właściwym ciekłej wody.",
        "Q = m L + m c_eau ΔT, gdzie L jest właściwym ciepłem utajonym topnienia, c_eau ciepłem właściwym ciekłej wody, a ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT, gdzie ΔT = 20°C.",
      ],
      explanations: [
        "Źle: obliczenie pomija ciepło utajone topnienia, pochłaniane w 0°C bez zmiany temperatury; było to właśnie drugie odkrycie Blacka, odrębne od pojemności cieplnej.",
        "Dobrze: ciepło utajone (topnienie w stałej temperaturze) i ciepło Q = mcΔT (ogrzewanie bez przemiany fazowej) sumują się, lecz odnoszą się do odrębnych etapów procesu.",
        "Źle: po stopieniu lodu do ogrzewania od 0°C do 20°C stosuje się ciepło właściwe ciekłej wody, a nie lodu.",
      ],
    },
    "l2-vf4": {
      question: "Gdy ciekła woda zamarza, oddaje ciepło do otoczenia.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Dobrze: krzepnięcie jest procesem odwrotnym do topnienia. Woda oddaje dokładnie tyle ciepła utajonego, ile należało jej dostarczyć, aby stopić taką samą ilość lodu; wyjaśnia to na przykład, dlaczego woda zamarzającego zimą jeziora nieznacznie ogrzewa otaczające powietrze.",
        "Źle: jest to właśnie zjawisko egzotermiczne, symetryczne względem topnienia (endotermicznego): występuje to samo ciepło utajone, lecz z przeciwnym znakiem.",
      ],
    },
    "l3-q1": {
      question: "Układ izolowany jest układem, którego ścianki są:",
      choices: [
        "Diatermiczne, ruchome i przepuszczalne.",
        "Sztywne, adiabatyczne i nieprzepuszczalne.",
        "Sztywne, diatermiczne i nieprzepuszczalne.",
        "Ruchome, adiabatyczne i przepuszczalne.",
      ],
      explanations: [
        "Źle: są to wręcz właściwości umożliwiające wszystkie rodzaje wymiany (ciepła, pracy i materii).",
        "Dobrze: sztywność uniemożliwia wymianę pracy, adiabatyczność wymianę ciepła, a nieprzepuszczalność wymianę materii.",
        "Źle: ścianki diatermiczne przepuszczają ciepło, więc układ nie byłby izolowany.",
        "Źle: ścianki ruchome i przepuszczalne umożliwiają wymianę pracy i materii.",
      ],
    },
    "l3-vf2": {
      question: "Ścianka diatermiczna przepuszcza ciepło.",
      choices: ["Prawda", "Fałsz"],
      explanations: ["Dobrze", "Źle"],
    },
    "l3-vf3": {
      question: "Ścianka adiabatyczna przepuszcza ciepło.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Źle: byłaby to ścianka diatermiczna.",
        "Dobrze: adiabatyczna oznacza przeciwnie, że żadne ciepło nie przechodzi przez ściankę; adiabatyczna jest przeciwieństwem diatermicznej.",
      ],
    },
    "l3-vf4": {
      question: "Układ nazywa się zamkniętym, jeśli jego ścianki są nieprzepuszczalne dla materii, choć może on wymieniać ciepło i pracę z otoczeniem.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Dobrze: zamknięty oznacza jedynie brak wymiany materii; w przeciwieństwie do układu izolowanego może on wymieniać ciepło i pracę.",
        "Źle: jest to właśnie definicja układu zamkniętego (nie należy go mylić z układem izolowanym, który nie pozwala także na wymianę ciepła ani pracy).",
      ],
    },
    "l3-q3": {
      question: "Która z tych wielkości jest intensywna?",
      choices: ["Objętość V", "Energia wewnętrzna U", "Ciśnienie P", "Liczba cząstek N"],
      explanations: [
        "Źle: objętość podwaja się po podwojeniu układu, więc jest ekstensywna.",
        "Źle: energia wewnętrzna jest ekstensywna (przy braku sił dalekiego zasięgu).",
        "Dobrze: ciśnienie nie zmienia się po podwojeniu układu; jest wielkością emergentną, bez odpowiednika dla pojedynczej cząsteczki.",
        "Źle: N podwaja się wraz z układem, więc jest wielkością ekstensywną.",
      ],
    },
    "l3-q5": {
      question: "Przemiana izochoryczna zachodzi:",
      choices: ["Przy stałym ciśnieniu", "Bez wymiany ciepła", "Przy stałej temperaturze", "Przy stałej objętości"],
      explanations: [
        "Źle: jest to przemiana izobaryczna.",
        "Źle: jest to przemiana adiabatyczna.",
        "Źle: jest to przemiana izotermiczna.",
        "Dobrze: izochoryczna = stała objętość.",
      ],
    },
    "l3-vf1": {
      question: "Układ termodynamiczny w równowadze jest koniecznie jednorodny (ma takie same wielkości intensywne w każdym punkcie).",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Źle: szklanka wody stojąca na stole jest w równowadze, a mimo to ciśnienie przy powierzchni i przy dnie nie jest takie samo. Opisuje to prawo Pascala (hydrostatyka): w spoczywającym płynie poddanym działaniu grawitacji ciśnienie rośnie z głębokością, P(z) = P_0 + ρgh. Ta niejednorodność nigdy nie znika, nawet po dowolnie długim oczekiwaniu; nie wynika więc z braku równowagi, lecz z obecności zewnętrznego pola sił (grawitacji).",
        "Dobrze: klasycznym przykładem jest szklanka wody stojąca na stole — ciśnienie rośnie z głębokością (prawo Pascala: P(z) = P_0 + ρgh), choć nic nie przepływa ani się nie zmienia. Równowaga termodynamiczna wymaga jedynie braku przepływów makroskopowych (ciepła, materii i pędu) między punktami układu; nie wymaga, aby wielkości intensywne, takie jak ciśnienie, były wszędzie jednakowe, zwłaszcza w obecności zewnętrznego pola, takiego jak grawitacja.",
      ],
    },
    "l3-vf5": {
      question: "Metalowy pręt, którego końce utrzymuje się w różnych temperaturach, osiąga w końcu stan, w którym profil temperatury nie zależy już od czasu. Jest to stan równowagi termodynamicznej.",
      choices: ["Prawda", "Fałsz"],
      explanations: [
        "Źle: jest to stan stacjonarny, a nie stan równowagi. Profil temperatury jest wprawdzie stały w czasie, ale przez pręt nadal płynie makroskopowy strumień ciepła od końca gorącego do zimnego.",
        "Dobrze: jest to stan stacjonarny, który należy odróżnić od równowagi. Definicja równowagi termodynamicznej wymaga nie tylko, aby wielkości makroskopowe przestały się zmieniać, lecz także braku wszelkich przepływów makroskopowych (tutaj między końcami nadal płynie ciepło).",
      ],
    },
    "l4-q2": {
      question: "Dlaczego zapisujemy δQ i δW zamiast dQ i dW?",
      choices: [
        "Ponieważ są to różniczki niezupełne: ich całki zależą od obranej drogi.",
        "Ponieważ Q i W są wielkościami zbyt małymi, aby opisać je zwykłymi różniczkami.",
      ],
      explanations: [
        "Dobrze: Q i W zależą od drogi, w przeciwieństwie do U, które zależy wyłącznie od stanu początkowego i końcowego. Zapis dQ oznaczałby wskrzeszenie teorii cieplika.",
        "Źle: „rozmiar” wielkości nie ma tu znaczenia; chodzi o zależność od drogi.",
      ],
    },
    "l4-q2b": {
      question: "Gaz doskonały przechodzi ze stanu równowagi A do stanu równowagi B: albo najpierw jest sprężany, a potem ogrzewany, albo najpierw ogrzewany, a potem sprężany. Co można stwierdzić?",
      choices: [
        "Zmiana energii wewnętrznej ΔU oraz pobrane ciepło Q i praca W są w obu przypadkach takie same.",
        "ΔU jest w obu przypadkach taka sama, lecz Q i W mogą być różne dla różnych dróg.",
        "Q jest w obu przypadkach takie samo, lecz ΔU może być różna.",
        "Żadna z tych trzech wielkości nie zależy od obranej drogi.",
      ],
      explanations: [
        "Źle: tylko ΔU jest wyznaczona przez stany A i B; Q i W na ogół zależą od drogi.",
        "Dobrze: U jest funkcją stanu (dU jest różniczką zupełną), więc ΔU = U(B) − U(A) zależy wyłącznie od stanu początkowego i końcowego. Q i W nie są funkcjami stanu (δQ i δW nie są różniczkami zupełnymi), dlatego zależą od drogi; pierwsza zasada wyznacza tylko ich sumę Q + W = ΔU.",
        "Źle: prawdziwe jest stwierdzenie odwrotne—to ΔU, a nie Q, jest niezależna od drogi.",
        "Źle: ΔU nie zależy od drogi, natomiast Q i W na ogół od niej zależą.",
      ],
    },
    "l4-q3": {
      question: "Układ zamknięty przechodzi przemianę cykliczną (A → A). Co można powiedzieć o bilansie Q_cycle + W_cycle?",
      choices: [
        "Musi być równy zeru, ponieważ Q i W są funkcjami stanu.",
        "Jest równy zeru, ponieważ U jest funkcją stanu.",
        "Dla silnika cieplnego jest zawsze ściśle dodatni.",
      ],
      explanations: [
        "Źle: jest odwrotnie—Q i W nie są funkcjami stanu; są przekazami energii, a nie wielkościami układu. Tylko ich suma musi zniknąć w cyklu na mocy ΔU_cycle = 0.",
        "Dobrze: po zakończeniu cyklu układ wraca do stanu początkowego. Ponieważ U jest funkcją stanu, ΔU_cycle = U(A) − U(A) = 0, zatem pierwsza zasada wymaga Q_cycle + W_cycle = 0.",
        "Źle: zerowa jest suma Q_cycle + W_cycle, a nie każdy składnik z osobna; w silniku cieplnym Q_cycle i W_cycle mogą być niezerowe i mieć przeciwne znaki.",
      ],
    },
    "l4-q4": {
      question: "Gaz jest sprężany quasi-statycznie. Co można powiedzieć o pracy pobranej przez gaz?",
      choices: [
        "Jest ujemna: podczas sprężania gaz musi oddawać energię mechaniczną otoczeniu, które go spręża.",
        "Jest dodatnia: podczas sprężania gaz pobiera pracę.",
        "Jest równa zeru: w przemianie quasi-statycznej wymiany pracy dokładnie znoszą się na każdym etapie.",
      ],
      explanations: [
        "Źle: to klasyczny błąd znaku; dla dV < 0 mamy −P dV > 0, więc gaz pobiera pracę.",
        "Dobrze: sprężenie gazu wymaga dostarczenia mu energii mechanicznej; zgodnie z przyjętą konwencją znaków energia wpływająca do układu jest dodatnia.",
        "Źle: quasi-statyczna nie znaczy bez pracy, lecz jedynie, że przemiana przebiega przez ciąg stanów równowagi.",
      ],
    },
    "l4-q6": {
      question: "Podczas przemiany izochorycznej układu zamkniętego zawsze zachodzi:",
      choices: ["W = 0, zatem ΔU = Q", "Q = 0, zatem ΔU = W", "ΔU = 0, zatem Q = −W"],
      explanations: [
        "Dobrze: przy stałej objętości δW = −P dV = 0; cała zmiana energii wewnętrznej pochodzi z ciepła.",
        "Źle: jest to bilans przemiany adiabatycznej, a nie izochorycznej.",
        "Źle: jest to bilans przemiany izotermicznej gazu doskonałego, ponieważ U zależy wyłącznie od T.",
      ],
    },
  },

  ru: {
    "l1-q1": {
      question: "Что такое тепловой двигатель с точки зрения термодинамики?",
      choices: [
        "Устройство, которое за цикл полностью превращает в работу теплоту, полученную от горячего источника.",
        "Устройство, работающее циклически в контакте с одним-единственным источником теплоты, из которого оно извлекает работу.",
        "Устройство, которое производит теплоту за счёт механической работы, сообщаемой внешним оператором.",
        "Циклическое устройство, превращающее в работу часть теплового потока, идущего от горячего к холодному.",
      ],
      explanations: [
        "Неверно: полностью превратить теплоту в работу за цикл невозможно (утверждение Кельвина о втором начале).",
        "Неверно: циклический двигатель с одним источником не может совершить никакой работы; именно об этом говорит утверждение Кельвина.",
        "Неверно: так описывается скорее обогреватель или тепловой насос, а не двигатель.",
        "Верно: двигатель отводит часть потока горячее → холодное, но никогда не весь поток.",
      ],
    },
    "l1-q2": {
      question: "Почему тепловому двигателю нужна разность температур между двумя источниками?",
      choices: [
        "Потому что без разности температур тепловой поток не течёт, и превращать в работу нечего.",
        "Потому что механическую работу можно получить лишь от источника, температура которого превышает некоторый минимальный порог, свой для каждого рабочего тела.",
        "Потому что давление рабочего тела должно на протяжении всего цикла оставаться выше атмосферного.",
      ],
      explanations: [
        "Верно: двигатель берёт своего рода пошлину с теплового потока горячее → холодное; нет потока — нет работы. Настоящее «топливо» — это перепад температур.",
        "Неверно: никакого температурного порога не существует; достаточно даже небольшой разности (ср. станции OTEC, использующие в океане разницу в несколько градусов).",
        "Неверно: дело не в давлении; важна именно разность температур между двумя источниками.",
      ],
    },
    "l1-vf1": {
      question: "Циклический тепловой двигатель может работать, находясь в контакте лишь с одним источником теплоты.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Неверно: именно это запрещает утверждение Кельвина о втором начале; циклический двигатель с одним источником не может совершать работу.",
        "Верно: нужны по меньшей мере два источника с разными температурами.",
      ],
    },
    "l2-q1": {
      question: "Что утверждала господствовавшая в конце XVIII века теория теплорода?",
      choices: [
        "Теплота представляет собой движение мельчайших частей материи, последовательно передаваемое при столкновениях частиц.",
        "Теплота представляет собой сохраняющуюся материальную жидкость, перетекающую от горячего к холодному.",
        "Теплота и температура — одна и та же физическая величина, измеряемая термометром.",
      ],
      explanations: [
        "Неверно: это конкурирующая, так называемая механистическая или кинетическая, теория (Бэкон, Бернулли), которая впоследствии оказалась верной.",
        "Верно: теплород считали невесомой сохраняющейся жидкостью; эта теория была ошибочной, но плодотворной.",
        "Неверно: различие между теплотой и температурой было установлено ещё до теории теплорода благодаря Джозефу Блэку (теплоёмкость, скрытая теплота).",
      ],
    },
    "l2-q2": {
      question: "Какой опыт противоречил теории теплорода?",
      choices: [
        "Наблюдавшееся Румфордом сверление пушечных стволов: трение производит, по-видимому, неограниченное количество теплоты.",
        "Измерение Джозефом Блэком скрытой теплоты, поглощаемой льдом при плавлении без изменения температуры.",
        "Объединение Клапейроном законов Бойля, Шарля и Гей-Люссака в единое уравнение состояния идеального газа.",
      ],
      explanations: [
        "Верно: если бы теплота была конечной сохраняющейся жидкостью, непрерывное сверление не могло бы производить её бесконечно. В 1798 году Румфорд заключил, что теплота связана с движением.",
        "Неверно: скрытая теплота, напротив, хорошо объяснялась теорией теплорода (жидкость «связывается» с веществом при изменении агрегатного состояния).",
        "Неверно: в 1834 году Клапейрон объединил газовые законы, что не имело прямого отношения к природе теплоты.",
      ],
    },
    "l2-vf1": {
      question: "В 1824 году Карно вывел формулу максимального КПД η = 1 - T_f/T_c.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Неверно: Карно доказал существование и универсальность максимального КПД, но не получил его выражения; ещё не было абсолютной температурной шкалы, введённой Кельвином в 1848 году.",
        "Верно: он доказал существование этой универсальной границы, но не мог получить её выражение из-за отсутствия строгого определения температуры.",
      ],
    },
    "l2-q4": {
      question: "Что означает коэффициент c в установленном Джозефом Блэком соотношении Q = m c ΔT?",
      choices: [
        "Полное количество теплоты, которым обменивается тело, выраженное в джоулях.",
        "Количество теплоты, которое нужно сообщить единице массы тела, чтобы повысить его температуру на один градус.",
        "Отношение работы, совершённой над телом, к полученной им теплоте.",
      ],
      explanations: [
        "Неверно: полное количество переданной теплоты обозначается самим Q, а не c; кроме того, Q зависит от массы и изменения температуры.",
        "Верно: это удельная теплоёмкость (или, в более старой терминологии, удельная теплота) — свойственный каждому материалу коэффициент, обнаруженный Блэком.",
        "Неверно: это соотношение не имеет ничего общего с c; коэффициент c связывает только теплоту и температуру.",
      ],
    },
    "l2-q5": {
      question: "Чему в современных единицах равна калория согласно измерениям Джоуля?",
      choices: ["Около 1 J на калорию", "Около 4,18 J на калорию", "Около 100 J на калорию", "Около 0,24 J на калорию"],
      explanations: [
        "Неверно: так было бы, если бы калория и джоуль уже без пересчёта измеряли одно и то же.",
        "Верно: 1 cal ≈ 4,18 J; это значение, измеренное со всё большей точностью в 1843–1849 годах, установило эквивалентность теплоты и работы.",
        "Неверно: это значение примерно в 24 раза превышает результат измерений Джоуля.",
        "Неверно: это приблизительно обратная величина (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "На упаковке продукта указано «250 cal». Скольким джоулям это приблизительно соответствует?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Неверно: это означало бы, что указанную единицу перепутали с джоулем.",
        "Верно: пищевая калория в действительности равна 1 kcal и обычно обозначается прописной буквой как Cal. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Неверно: здесь забыто, что пищевая калория в действительности является килокалорией.",
        "Неверно: здесь пищевая калория перепутана с килоджоулем.",
      ],
    },
    "l2-vf3": {
      question: "Калориметрия — это наука об измерении количества теплоты, передаваемой между системами.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Верно: Блэк, 1760 год, начало калориметрии.",
        "Неверно: калориметрия действительно измеряет теплоту, а не температуру.",
      ],
    },
    "l2-q7": {
      question: "Кусок льда при 0°C нагревают до получения жидкой воды при 20°C. Как правильно вычислить полное количество полученной теплоты?",
      choices: [
        "Q = m c_eau ΔT, где ΔT = 20°C, а c_eau — удельная теплоёмкость жидкой воды.",
        "Q = m L + m c_eau ΔT, где L — удельная скрытая теплота плавления, c_eau — удельная теплоёмкость жидкой воды, а ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT, где ΔT = 20°C.",
      ],
      explanations: [
        "Неверно: в этом расчёте не учтена скрытая теплота плавления, поглощаемая при 0°C без изменения температуры; это как раз второе открытие Блэка, отличное от теплоёмкости.",
        "Верно: скрытая теплота (плавление при постоянной температуре) и соотношение Q = mcΔT (нагревание без изменения фазы) складываются, но относятся к разным этапам процесса.",
        "Неверно: после плавления льда для нагревания от 0°C до 20°C применяется удельная теплоёмкость жидкой воды, а не льда.",
      ],
    },
    "l2-vf4": {
      question: "При замерзании жидкая вода выделяет теплоту в окружающую среду.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Верно: замерзание — процесс, обратный плавлению. Вода возвращает ровно ту скрытую теплоту, которую потребовалось бы сообщить для плавления такого же количества льда; этим, например, объясняется, почему вода замерзающего зимой озера слегка нагревает окружающий воздух.",
        "Неверно: это именно экзотермический процесс, симметричный плавлению (эндотермическому): скрытая теплота та же, но имеет противоположный знак.",
      ],
    },
    "l3-q1": {
      question: "Стенки изолированной системы являются:",
      choices: [
        "Диатермическими, подвижными и проницаемыми.",
        "Жёсткими, адиабатическими и непроницаемыми.",
        "Жёсткими, диатермическими и непроницаемыми.",
        "Подвижными, адиабатическими и проницаемыми.",
      ],
      explanations: [
        "Неверно: это, напротив, свойства, допускающие все виды обмена — теплотой, работой и веществом.",
        "Верно: жёсткость исключает обмен работой, адиабатичность — обмен теплотой, а непроницаемость — обмен веществом.",
        "Неверно: диатермические стенки пропускают теплоту, поэтому система не была бы изолированной.",
        "Неверно: подвижные и проницаемые стенки допускают обмен работой и веществом.",
      ],
    },
    "l3-vf2": {
      question: "Диатермическая стенка пропускает теплоту.",
      choices: ["Верно", "Неверно"],
      explanations: ["Верно", "Неверно"],
    },
    "l3-vf3": {
      question: "Адиабатическая стенка пропускает теплоту.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Неверно: такая стенка была бы диатермической.",
        "Верно: адиабатическая, напротив, означает, что теплота через стенку не проходит; адиабатическая стенка противоположна диатермической.",
      ],
    },
    "l3-vf4": {
      question: "Система называется замкнутой, если её стенки непроницаемы для вещества, хотя она может обмениваться с внешней средой теплотой и работой.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Верно: замкнутая означает только отсутствие обмена веществом; в отличие от изолированной системы, она может обмениваться теплотой и работой.",
        "Неверно: это как раз определение замкнутой системы (не путать с изолированной, которая запрещает также обмен теплотой и работой).",
      ],
    },
    "l3-q3": {
      question: "Какая из этих величин является интенсивной?",
      choices: ["Объём V", "Внутренняя энергия U", "Давление P", "Число частиц N"],
      explanations: [
        "Неверно: при удвоении системы объём удваивается, поэтому он является экстенсивной величиной.",
        "Неверно: внутренняя энергия является экстенсивной величиной (в отсутствие дальнодействующих сил).",
        "Верно: при удвоении системы давление не меняется; это эмерджентная величина, не имеющая аналога для отдельной молекулы.",
        "Неверно: N удваивается вместе с системой, поэтому это экстенсивная величина.",
      ],
    },
    "l3-q5": {
      question: "Изохорический процесс протекает:",
      choices: ["При постоянном давлении", "Без теплообмена", "При постоянной температуре", "При постоянном объёме"],
      explanations: [
        "Неверно: это изобарический процесс.",
        "Неверно: это адиабатический процесс.",
        "Неверно: это изотермический процесс.",
        "Верно: изохорический = при постоянном объёме.",
      ],
    },
    "l3-vf1": {
      question: "Термодинамическая система в равновесии обязательно однородна: интенсивные величины одинаковы в каждой точке.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Неверно: стакан воды на столе находится в равновесии, однако давление у поверхности и у дна различается. Это описывает закон Паскаля (гидростатика): в покоящейся жидкости под действием силы тяжести давление увеличивается с глубиной, P(z) = P_0 + ρgh. Эта неоднородность не исчезает даже при сколь угодно долгом ожидании, поэтому она вызвана не отсутствием равновесия, а наличием внешнего силового поля — гравитации.",
        "Верно: классический пример — стакан воды на столе. Давление в нём увеличивается с глубиной (закон Паскаля: P(z) = P_0 + ρgh), хотя ничего не течёт и не изменяется. Термодинамическое равновесие требует лишь отсутствия макроскопических потоков теплоты, вещества и импульса между точками системы; оно не требует, чтобы интенсивные величины, например давление, были везде одинаковы, особенно при наличии внешнего поля, такого как гравитация.",
      ],
    },
    "l3-vf5": {
      question: "Металлический стержень, концы которого поддерживают при разных температурах, со временем достигает режима, в котором распределение температуры больше не зависит от времени. Этот режим является состоянием термодинамического равновесия.",
      choices: ["Верно", "Неверно"],
      explanations: [
        "Неверно: это стационарное состояние, а не состояние равновесия. Распределение температуры действительно постоянно во времени, но через стержень по-прежнему идёт макроскопический поток теплоты от горячего конца к холодному.",
        "Верно: это стационарное состояние, которое следует отличать от равновесия. Определение термодинамического равновесия требует не только неизменности макроскопических величин, но и отсутствия любых макроскопических потоков; здесь между концами сохраняется поток теплоты.",
      ],
    },
    "l4-q2": {
      question: "Почему записывают δQ и δW, а не dQ и dW?",
      choices: [
        "Потому что это неточные дифференциалы: их интегралы зависят от выбранного пути.",
        "Потому что Q и W слишком малы, чтобы описывать их обычными дифференциалами.",
      ],
      explanations: [
        "Верно: Q и W зависят от пути, в отличие от U, которое зависит только от начального и конечного состояний. Запись dQ означала бы возрождение теории теплорода.",
        "Неверно: «размер» величин здесь ни при чём; важна зависимость от пути.",
      ],
    },
    "l4-q2b": {
      question: "Идеальный газ переходит из равновесного состояния A в равновесное состояние B: либо сначала сжимается, а затем нагревается, либо сначала нагревается, а затем сжимается. Что можно утверждать?",
      choices: [
        "Изменение внутренней энергии ΔU, полученные теплота Q и работа W одинаковы в обоих случаях.",
        "ΔU одинаково в обоих случаях, но Q и W могут различаться для разных путей.",
        "Q одинаково в обоих случаях, но ΔU может различаться.",
        "Ни одна из трёх величин не зависит от выбранного пути.",
      ],
      explanations: [
        "Неверно: состояниями A и B однозначно задаётся только ΔU; Q и W в общем случае зависят от пути.",
        "Верно: U — функция состояния (dU является точным дифференциалом), поэтому ΔU = U(B) − U(A) зависит только от начального и конечного состояний. Q и W не являются функциями состояния (δQ и δW — неточные дифференциалы), поэтому зависят от пути; первый закон задаёт лишь их сумму Q + W = ΔU.",
        "Неверно: верно обратное—от пути не зависит ΔU, а не Q.",
        "Неверно: ΔU не зависит от пути, а Q и W в общем случае зависят.",
      ],
    },
    "l4-q3": {
      question: "Закрытая система совершает циклический процесс (A → A). Что можно утверждать о балансе Q_cycle + W_cycle?",
      choices: [
        "Он обязательно равен нулю, поскольку Q и W являются функциями состояния.",
        "Он равен нулю, поскольку U является функцией состояния.",
        "Для теплового двигателя он всегда строго положителен.",
      ],
      explanations: [
        "Неверно: всё наоборот—Q и W не являются функциями состояния; это способы передачи энергии, а не величины системы. Только их сумма обязана обратиться в нуль за цикл благодаря ΔU_cycle = 0.",
        "Верно: по завершении цикла система возвращается в начальное состояние. Поскольку U — функция состояния, ΔU_cycle = U(A) − U(A) = 0; следовательно, первый закон требует Q_cycle + W_cycle = 0.",
        "Неверно: равна нулю сумма Q_cycle + W_cycle, а не каждый член по отдельности; в тепловом двигателе Q_cycle и W_cycle могут быть ненулевыми и иметь противоположные знаки.",
      ],
    },
    "l4-q4": {
      question: "Газ квазистатически сжимают. Что можно сказать о работе, полученной газом?",
      choices: [
        "Она отрицательна: при сжатии газ обязательно передаёт механическую энергию среде, которая его сжимает.",
        "Она положительна: при сжатии газ получает работу.",
        "Она равна нулю: в квазистатическом процессе обмены работой точно компенсируются на каждом этапе.",
      ],
      explanations: [
        "Неверно: это классическая ошибка со знаком; при dV < 0 имеем −P dV > 0, поэтому газ получает работу.",
        "Верно: чтобы сжать газ, ему необходимо сообщить механическую энергию; по банковскому соглашению о знаках входящая энергия считается положительной.",
        "Неверно: квазистатический не означает нулевую работу; это означает лишь, что процесс проходит через последовательность равновесных состояний.",
      ],
    },
    "l4-q6": {
      question: "При изохорном процессе в закрытой системе всегда выполняется:",
      choices: ["W = 0, поэтому ΔU = Q", "Q = 0, поэтому ΔU = W", "ΔU = 0, поэтому Q = −W"],
      explanations: [
        "Верно: при постоянном объёме δW = −P dV = 0; всё изменение внутренней энергии обусловлено теплотой.",
        "Неверно: это баланс адиабатического, а не изохорного процесса.",
        "Неверно: это баланс изотермического процесса идеального газа, поскольку U зависит только от T.",
      ],
    },
  },

  zh: {
    "l1-q1": {
      question: "在热力学意义上，什么是热机？",
      choices: [
        "一种在一个循环中把从高温热源吸收的热全部转化为功的装置。",
        "一种只与单一热源接触、以循环方式运行并从中提取功的装置。",
        "一种利用外部操作者提供的机械功来产生热的装置。",
        "一种循环运行的装置，把从高温流向低温的热流中的一部分转化为功。",
      ],
      explanations: [
        "错误：在一个循环中把热全部转化为功是不可能的（热力学第二定律的开尔文表述）。",
        "错误：只与单一热源接触的循环热机无法输出任何功；这正是开尔文表述的内容。",
        "错误：这描述的是暖气或热泵，而不是热机。",
        "正确：热机只截取高温 → 低温热流中的一部分，绝不可能截取全部。",
      ],
    },
    "l1-q2": {
      question: "热机为什么需要两个热源之间存在温差？",
      choices: [
        "因为没有温差就没有热流，也就没有可以转化为功的东西。",
        "因为机械功只能从温度超过某个最低阈值的热源中获得，而该阈值取决于工质。",
        "因为在整个循环中，工质的压强必须始终高于大气压。",
      ],
      explanations: [
        "正确：热机就像在高温 → 低温的热流上设卡收费；没有热流就没有功。真正的「燃料」是温度梯度。",
        "错误：并不存在温度阈值；哪怕温差很小也足够（参见利用海洋中几度温差的 OTEC 电站）。",
        "错误：判据不是压强，而是两个热源之间的温差。",
      ],
    },
    "l1-vf1": {
      question: "循环运行的热机可以只与单一热源接触而工作。",
      choices: ["正确", "错误"],
      explanations: [
        "错误：这正是热力学第二定律开尔文表述所禁止的；只与单一热源接触的循环热机无法输出功。",
        "正确：至少需要两个温度不同的热源。",
      ],
    },
    "l2-q1": {
      question: "18世纪末占主导地位的热质说认为热是什么？",
      choices: [
        "热是物质最小组成部分的运动，并通过粒子碰撞逐步传递。",
        "热是一种守恒的物质流体，从热处流向冷处。",
        "热和温度是同一个物理量，由温度计测量。",
      ],
      explanations: [
        "错误：这是与之竞争的机械论或动力论观点（培根、伯努利），后来证明这一观点是正确的。",
        "正确：热质被设想为一种无重量且守恒的流体；这套理论虽然错误，却富有成效。",
        "错误：早在热质说出现之前，约瑟夫·布莱克就已帮助确立热与温度的区别（热容、潜热）。",
      ],
    },
    "l2-q2": {
      question: "哪项实验与热质说相矛盾？",
      choices: [
        "伦福德观察到的炮管镗削实验：摩擦似乎可以无止境地产生热。",
        "约瑟夫·布莱克测量冰在恒温熔化时吸收的潜热。",
        "克拉佩龙把波义耳、查理和盖-吕萨克定律统一为一个理想气体状态方程。",
      ],
      explanations: [
        "正确：如果热是一种总量有限且守恒的流体，持续镗削就不可能无止境地产生热。伦福德于1798年由此得出结论：热与运动有关。",
        "错误：热质说反而能很好地解释潜热（状态变化时，这种流体与物质“结合”）。",
        "错误：克拉佩龙于1834年统一了气体定律，这与热的本质没有直接关系。",
      ],
    },
    "l2-vf1": {
      question: "卡诺在1824年给出了最大效率公式 η = 1 - T_f/T_c。",
      choices: ["正确", "错误"],
      explanations: [
        "错误：卡诺证明了最大效率的存在性和普适性，但没有给出其表达式；当时还缺少开尔文于1848年引入的绝对温标。",
        "正确：他证明了这一普适上限的存在，但由于当时还没有严格的温度定义，无法给出其表达式。",
      ],
    },
    "l2-q4": {
      question: "在约瑟夫·布莱克揭示的关系 Q = m c ΔT 中，系数 c 表示什么？",
      choices: [
        "物体交换的总热量，以焦耳表示。",
        "使单位质量物体的温度升高一度所需提供的热量。",
        "物体所获得的功与所吸收热量之比。",
      ],
      explanations: [
        "错误：交换的总热量是 Q 本身，而不是 c；Q 还取决于质量和温差。",
        "正确：它是比热容（旧称比热），即布莱克揭示的、每种材料所特有的系数。",
        "错误：这一比值与 c 无关；c 只联系热量与温度。",
      ],
    },
    "l2-q5": {
      question: "用现代单位表示，焦耳测得的一卡路里等于多少？",
      choices: ["约1 J/卡路里", "约4,18 J/卡路里", "约100 J/卡路里", "约0,24 J/卡路里"],
      explanations: [
        "错误：只有在卡路里与焦耳无需换算就表示同一数值时才会如此。",
        "正确：1 cal ≈ 4,18 J；焦耳在1843年至1849年间以越来越高的精度测得这一数值，从而确立了热与功的等价关系。",
        "错误：这一数值约为焦耳测量值的24倍，过大了。",
        "错误：这大约是其倒数（1/4,18 ≈ 0,24）。",
      ],
    },
    "l2-q6": {
      question: "食品包装上标有“250 cal”。这大约相当于多少焦耳？",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "错误：这相当于把标示的单位误当成焦耳。",
        "正确：食品中的一卡路里实际上是1 kcal，通常以大写的 Cal 表示。250 kcal × 4,18 kJ/kcal ≈ 1046 kJ。",
        "错误：这忽略了食品中的一卡路里实际上是一千卡。",
        "错误：这相当于把食品卡路里与千焦耳混为一谈。",
      ],
    },
    "l2-vf3": {
      question: "量热学是测量系统之间所交换热量的科学。",
      choices: ["正确", "错误"],
      explanations: [
        "正确：布莱克于1760年开创了量热学。",
        "错误：量热学所测量的正是热量，而不是温度。",
      ],
    },
    "l2-q7": {
      question: "把0°C的冰块加热，直至得到20°C的液态水。应如何正确计算其吸收的总热量？",
      choices: [
        "Q = m c_eau ΔT，其中 ΔT = 20°C，c_eau 为液态水的比热容。",
        "Q = m L + m c_eau ΔT，其中 L 为熔化比潜热，c_eau 为液态水的比热容，且 ΔT = 20°C。",
        "Q = m c_glace ΔT + m c_eau ΔT，其中 ΔT = 20°C。",
      ],
      explanations: [
        "错误：这一计算漏掉了冰在0°C熔化时吸收、但不引起温度变化的潜热；这正是布莱克继热容之后的第二项发现。",
        "正确：潜热（恒温熔化）与关系 Q = mcΔT（同一物态内升温）需要相加，但二者分别适用于过程中的不同阶段。",
        "错误：冰熔化后，从0°C升温至20°C时应使用液态水的比热容，而不是冰的比热容。",
      ],
    },
    "l2-vf4": {
      question: "液态水结冰时会向外界放出热量。",
      choices: ["正确", "错误"],
      explanations: [
        "正确：凝固是熔化的逆过程。水会完整释放熔化相同质量的冰时所需吸收的潜热；例如，这可以解释为什么湖水在冬季结冰时会使周围空气略微升温。",
        "错误：这确实是一个放热过程，与吸热的熔化过程相对称；两者涉及同一潜热，但符号相反。",
      ],
    },
    "l3-q1": {
      question: "孤立系的壁必须是：",
      choices: [
        "透热、可动且可渗透的。",
        "刚性、绝热且不可渗透的。",
        "刚性、透热且不可渗透的。",
        "可动、绝热且可渗透的。",
      ],
      explanations: [
        "错误：这些性质反而允许所有交换，即热、功和物质的交换。",
        "正确：刚性阻止功的交换，绝热阻止热交换，不可渗透则阻止物质交换。",
        "错误：透热壁允许热通过，因此该系统并非孤立系。",
        "错误：可动且可渗透的壁允许功和物质的交换。",
      ],
    },
    "l3-vf2": {
      question: "透热壁允许热通过。",
      choices: ["正确", "错误"],
      explanations: ["正确", "错误"],
    },
    "l3-vf3": {
      question: "绝热壁允许热通过。",
      choices: ["正确", "错误"],
      explanations: [
        "错误：这种壁应称为透热壁。",
        "正确：绝热恰恰意味着没有热量穿过壁；绝热与透热相反。",
      ],
    },
    "l3-vf4": {
      question: "若系统的壁对物质不可渗透，但系统仍可与外界交换热和功，则该系统称为闭系。",
      choices: ["正确", "错误"],
      explanations: [
        "正确：闭系仅表示不交换物质；与孤立系不同，闭系仍可交换热和功。",
        "错误：这正是闭系的定义（不要与孤立系混淆，后者还禁止热和功的交换）。",
      ],
    },
    "l3-q3": {
      question: "下列哪个量是强度量？",
      choices: ["体积 V", "内能 U", "压强 P", "粒子数 N"],
      explanations: [
        "错误：系统加倍时体积也加倍，因此体积是广延量。",
        "错误：内能是广延量（不存在长程力时）。",
        "正确：系统加倍时压强不变；压强是一种涌现量，对单个分子没有对应量。",
        "错误：N 随系统一起加倍，因此是广延量。",
      ],
    },
    "l3-q5": {
      question: "等容过程是在：",
      choices: ["恒定压强下", "没有热交换时", "恒定温度下", "恒定体积下"],
      explanations: [
        "错误：这是等压过程。",
        "错误：这是绝热过程。",
        "错误：这是等温过程。",
        "正确：等容就是体积恒定。",
      ],
    },
    "l3-vf1": {
      question: "处于平衡的热力学系统必定是均匀的，即每一点的强度量都相同。",
      choices: ["正确", "错误"],
      explanations: [
        "错误：放在桌上的一杯水处于平衡态，但水面与杯底的压强并不相同。这就是帕斯卡定律（流体静力学）：受重力作用的静止流体，其压强随深度增加，P(z) = P_0 + ρgh。无论等待多久，这种不均匀性都不会消失；因此，它不是不平衡造成的，而是来自外部力场，即重力。",
        "正确：经典例子是放在桌上的一杯水——压强随深度增加（帕斯卡定律：P(z) = P_0 + ρgh），但其中没有任何流动或变化。热力学平衡只要求系统各点之间不存在热、物质或动量的宏观通量；它并不要求压强等强度量处处相同，尤其是在重力等外场存在时。",
      ],
    },
    "l3-vf5": {
      question: "一根金属棒的两端维持在不同温度，最终其温度分布不再随时间变化。这种状态是热力学平衡态。",
      choices: ["正确", "错误"],
      explanations: [
        "错误：这是定常态，而不是平衡态。温度分布虽然不随时间变化，但宏观热流仍持续穿过金属棒，从热端流向冷端。",
        "正确：这是定常态，必须与平衡态区分。热力学平衡的定义不仅要求宏观量不再变化，还要求不存在任何宏观通量；这里两端之间仍持续存在热流。",
      ],
    },
    "l4-q2": {
      question: "为什么写作 δQ 和 δW，而不是 dQ 和 dW？",
      choices: [
        "因为它们是非全微分：其积分取决于所经过的路径。",
        "因为 Q 和 W 太小，无法用普通微分来描述。",
      ],
      explanations: [
        "正确：Q 和 W 与路径有关，而 U 只取决于初态和终态。写成 dQ 就等于让热质说死灰复燃。",
        "错误：这与物理量的“大小”无关，关键在于路径依赖性。",
      ],
    },
    "l4-q2b": {
      question: "理想气体从平衡态 A 变到平衡态 B：可以先压缩再加热，也可以先加热再压缩。下列说法哪一项正确？",
      choices: [
        "两种情况下，内能变化 ΔU、吸收的热量 Q 和功 W 都相同。",
        "两种情况下 ΔU 相同，但 Q 和 W 可随路径而不同。",
        "两种情况下 Q 相同，但 ΔU 可以不同。",
        "这三个量都与所经过的路径无关。",
      ],
      explanations: [
        "错误：只有 ΔU 由状态 A 和 B 决定；Q 和 W 通常取决于路径。",
        "正确：U 是状态函数（dU 是全微分），所以 ΔU = U(B) − U(A) 只取决于初态和终态。Q 和 W 不是状态函数（δQ 和 δW 不是全微分），因而与路径有关；第一定律只确定它们的和 Q + W = ΔU。",
        "错误：事实恰好相反——与路径无关的是 ΔU，而不是 Q。",
        "错误：ΔU 与路径无关，但 Q 和 W 通常与路径有关。",
      ],
    },
    "l4-q3": {
      question: "一个封闭系统经历循环过程（A → A）。关于能量收支 Q_cycle + W_cycle，可以说什么？",
      choices: [
        "它必然为零，因为 Q 和 W 是状态函数。",
        "它为零，因为 U 是状态函数。",
        "对于热机，它总是严格大于零。",
      ],
      explanations: [
        "错误：事实恰好相反——Q 和 W 不是状态函数；它们是能量传递，而不是系统自身的物理量。由于 ΔU_cycle = 0，只有它们的和在一个循环中必须为零。",
        "正确：一个循环结束后，系统回到初态。由于 U 是状态函数，ΔU_cycle = U(A) − U(A) = 0，因此第一定律要求 Q_cycle + W_cycle = 0。",
        "错误：为零的是 Q_cycle + W_cycle 之和，而不是每一项分别为零；对于热机，Q_cycle 和 W_cycle 都可以不为零且符号相反。",
      ],
    },
    "l4-q4": {
      question: "对气体进行准静态压缩。关于气体所接受的功，可以说什么？",
      choices: [
        "功为负：气体被压缩时，必然向压缩它的外界传递机械能。",
        "功为正：气体在压缩过程中接受功。",
        "功为零：在准静态过程中，各阶段的功交换恰好相互抵消。",
      ],
      explanations: [
        "错误：这是典型的符号错误；当 dV < 0 时，−P dV > 0，因此气体接受功。",
        "正确：压缩气体需要向它提供机械能；按收支符号约定，进入系统的能量记为正。",
        "错误：准静态并不意味着功为零，而只表示过程经过一系列平衡态。",
      ],
    },
    "l4-q6": {
      question: "封闭系统经历等容过程时，总有：",
      choices: ["W = 0，因此 ΔU = Q", "Q = 0，因此 ΔU = W", "ΔU = 0，因此 Q = −W"],
      explanations: [
        "正确：体积不变时，δW = −P dV = 0；内能的全部变化都来自热量。",
        "错误：这是绝热过程的能量收支，而不是等容过程。",
        "错误：这是理想气体等温过程的能量收支，因为 U 只依赖于 T。",
      ],
    },
  },

  ja: {
    "l1-q1": {
      question: "熱力学でいう熱機関とは何か。",
      choices: [
        "一サイクルの間に、高温熱源から受け取った熱をすべて仕事に変換する装置。",
        "ただ一つの熱源と接触したままサイクル運転し、そこから仕事を取り出す装置。",
        "外部の操作者が与える力学的仕事から熱をつくり出す装置。",
        "高温から低温へ流れる熱流の一部を仕事に変換する、サイクル運転の装置。",
      ],
      explanations: [
        "誤り：一サイクルの間に熱をすべて仕事へ変換することは不可能である（第二法則のケルビンの表現）。",
        "誤り：単一熱源のサイクル機関は仕事をまったく供給できない。これこそがケルビンの表現である。",
        "誤り：それは暖房器具やヒートポンプの説明であって、熱機関ではない。",
        "正解：熱機関は高温 → 低温の熱流の一部を横取りするだけで、全部を取ることはない。",
      ],
    },
    "l1-q2": {
      question: "熱機関はなぜ二つの熱源のあいだの温度差を必要とするのか。",
      choices: [
        "温度差がなければ熱流が生じず、仕事に変換すべきものが存在しないから。",
        "力学的仕事は、作業物質ごとに決まる最低温度を超えた熱源からしか取り出せないから。",
        "サイクルの全過程を通じて、作業物質の圧力が常に大気圧より高くなければならないから。",
      ],
      explanations: [
        "正解：熱機関は高温 → 低温の熱流に課される通行料のようなものである。流れがなければ仕事もない。本当の「燃料」は温度勾配である。",
        "誤り：温度のしきい値は存在しない。わずかな差でも十分である（海洋の数度の温度差を利用する OTEC 発電を参照）。",
        "誤り：判断基準は圧力ではなく、二つの熱源のあいだの温度差である。",
      ],
    },
    "l1-vf1": {
      question: "サイクル運転の熱機関は、ただ一つの熱源とだけ接触して動作できる。",
      choices: ["正しい", "誤り"],
      explanations: [
        "誤り：まさにそれを第二法則のケルビンの表現が禁じている。単一熱源のサイクル機関は仕事を供給できない。",
        "正解：温度の異なる熱源が少なくとも二つ必要である。",
      ],
    },
    "l2-q1": {
      question: "18世紀末に支配的であった熱素説は、何を主張していたか。",
      choices: [
        "熱は物質の微視的な運動の一形態であり、粒子間の衝突によって次々に伝わる。",
        "熱は保存される物質的な流体であり、高温側から低温側へ流れる。",
        "熱と温度は同一の物理量であり、温度計で測定される。",
      ],
      explanations: [
        "誤り：これは対立する力学説または運動論（ベーコン、ベルヌーイ）の主張であり、後にこちらが正しいと判明した。",
        "正解：熱素は重さがなく保存される流体と考えられていた。誤った理論ではあったが、多くの成果を生んだ。",
        "誤り：熱と温度の区別は、ジョゼフ・ブラックの研究（熱容量、潜熱）によって、熱素説以前にすでに確立されていた。",
      ],
    },
    "l2-q2": {
      question: "熱素説に反することを示した実験はどれか。",
      choices: [
        "ランフォードが観察した大砲の砲身の加工。摩擦によって見かけ上限りなく熱が生じた。",
        "ジョゼフ・ブラックによる、氷が一定温度で融解するときに吸収する潜熱の測定。",
        "ボイル、シャルル、ゲイ＝リュサックの法則を、クラペイロンが理想気体の一つの状態方程式に統合したこと。",
      ],
      explanations: [
        "正解：熱が有限量の保存流体なら、加工を続けても無限に生み出されることはない。ランフォードは1798年、熱は運動と関係していると結論した。",
        "誤り：潜熱はむしろ熱素説でうまく説明された。状態変化の際に流体が物質と「結合する」と考えられたのである。",
        "誤り：クラペイロンは1834年に気体の法則を統合したが、これは熱の本質とは直接関係しない。",
      ],
    },
    "l2-vf1": {
      question: "カルノーは1824年に最大効率の式 η = 1 - T_f/T_c を確立した。",
      choices: ["正しい", "誤り"],
      explanations: [
        "誤り：カルノーは最大効率の存在と普遍性を証明したが、その式は導かなかった。1848年にケルビンが導入した絶対温度目盛がまだなかったためである。",
        "正解：カルノーは温度の厳密な定義を欠いていたため式を示せなかったが、この普遍的な上限の存在を証明した。",
      ],
    },
    "l2-q4": {
      question: "ジョゼフ・ブラックが明らかにした関係 Q = m c ΔT において、係数 c は何を表すか。",
      choices: [
        "物体が交換した熱の総量。単位はジュール。",
        "物体の単位質量の温度を1度上昇させるために供給すべき熱量。",
        "物体に供給された仕事と物体が受け取った熱との比。",
      ],
      explanations: [
        "誤り：交換された熱の総量は c ではなく Q である。さらに Q は質量と温度差にも依存する。",
        "正解：これは比熱容量（または比熱）であり、ブラックが明らかにした物質ごとに固有の係数である。",
        "誤り：この比は c と関係がない。c に関係するのは熱と温度だけである。",
      ],
    },
    "l2-q5": {
      question: "ジュールが測定したカロリーの値は、現代の単位ではいくらか。",
      choices: ["1カロリー当たり約1 J", "1カロリー当たり約4,18 J", "1カロリー当たり約100 J", "1カロリー当たり約0,24 J"],
      explanations: [
        "誤り：これはカロリーとジュールが換算なしですでに同じ量を表す場合の値である。",
        "正解：1 cal ≈ 4,18 J である。1843年から1849年にかけて精度を高めながら測定されたこの値により、熱と仕事の等価性が確立された。",
        "誤り：この値はジュールの測定値より約24倍も大きすぎる。",
        "誤り：これはおよそ逆数である（1/4,18 ≈ 0,24）。",
      ],
    },
    "l2-q6": {
      question: "食品の包装に「250 cal」と表示されている。これはおよそ何ジュールに相当するか。",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "誤り：これは表示された単位をジュールと取り違えた計算である。",
        "正解：食品表示の1カロリーは実際には1 kcalであり、本来は大文字の Cal と表記される。250 kcal × 4,18 kJ/kcal ≈ 1046 kJ である。",
        "誤り：食品表示の1 calが実際には1キロカロリーであることを見落としている。",
        "誤り：食品表示のカロリーをキロジュールと取り違えている。",
      ],
    },
    "l2-vf3": {
      question: "熱量測定学とは、系どうしで交換される熱量を測定する科学である。",
      choices: ["正しい", "誤り"],
      explanations: [
        "正解：ブラックの1760年の研究が熱量測定学の始まりである。",
        "誤り：熱量測定学は温度ではなく、熱量を測定する科学である。",
      ],
    },
    "l2-q7": {
      question: "0°Cの氷を加熱し、20°Cの液体の水にする。受け取った総熱量を正しく計算するにはどうすればよいか。",
      choices: [
        "Q = m c_eau ΔT。ここで ΔT = 20°C、c_eau は液体の水の比熱容量である。",
        "Q = m L + m c_eau ΔT。ここで L は融解の比潜熱、c_eau は液体の水の比熱容量、ΔT = 20°C である。",
        "Q = m c_glace ΔT + m c_eau ΔT。ここで ΔT = 20°C である。",
      ],
      explanations: [
        "誤り：この計算では、温度を変えずに0°Cで吸収される融解の潜熱を忘れている。これは熱容量とは異なるブラックの第二の発見である。",
        "正解：潜熱（一定温度での融解）と関係 Q = mcΔT（相が一定のままの加熱）は加算されるが、それぞれ過程の異なる段階に適用される。",
        "誤り：氷が融けた後、0°Cから20°Cまでの加熱に適用されるのは液体の水の比熱容量であり、氷の比熱容量ではない。",
      ],
    },
    "l2-vf4": {
      question: "液体の水が凍るとき、外界へ熱を放出する。",
      choices: ["正しい", "誤り"],
      explanations: [
        "正解：凝固は融解の逆過程である。同じ量の氷を融かすために必要だった潜熱を、水はちょうど外界へ返す。このため、例えば冬に湖の水が凍ると周囲の空気がわずかに暖められる。",
        "誤り：これは確かに発熱過程であり、吸熱過程である融解と対称である。同じ潜熱の符号が逆になる。",
      ],
    },
    "l3-q1": {
      question: "孤立系の壁がもつ性質はどれか。",
      choices: [
        "透熱性、可動、透過性。",
        "剛体、断熱性、不透過性。",
        "剛体、透熱性、不透過性。",
        "可動、断熱性、透過性。",
      ],
      explanations: [
        "誤り：これらは逆に、あらゆる交換（熱、仕事、物質）を許す性質である。",
        "正解：剛体壁は仕事の交換を、断熱壁は熱の交換を、不透過性の壁は物質の交換をそれぞれ妨げる。",
        "誤り：透熱壁は熱を通すため、系は孤立していない。",
        "誤り：可動で透過性の壁は、仕事と物質を通す。",
      ],
    },
    "l3-vf2": {
      question: "透熱壁とは、熱を通す壁である。",
      choices: ["正しい", "誤り"],
      explanations: ["正解", "誤り"],
    },
    "l3-vf3": {
      question: "断熱壁とは、熱を通す壁である。",
      choices: ["正しい", "誤り"],
      explanations: [
        "誤り：それは透熱壁である。",
        "正解：断熱とは逆に、熱が壁を通過しないことを意味する。断熱は透熱の反対である。",
      ],
    },
    "l3-vf4": {
      question: "物質に対して壁が不透過性であり、外界とは熱や仕事を交換できる系を閉鎖系という。",
      choices: ["正しい", "誤り"],
      explanations: [
        "正解：閉鎖系が意味するのは物質を交換しないことだけである。孤立系とは異なり、熱と仕事は交換できる。",
        "誤り：これは閉鎖系の定義そのものである。熱と仕事の交換も禁じる孤立系と混同してはならない。",
      ],
    },
    "l3-q3": {
      question: "次の量のうち、示強量はどれか。",
      choices: ["体積 V", "内部エネルギー U", "圧力 P", "粒子数 N"],
      explanations: [
        "誤り：系を二倍にすれば体積も二倍になるため、示量量である。",
        "誤り：長距離力がない場合、内部エネルギーは示量量である。",
        "正解：系を二倍にしても圧力は変わらない。圧力は創発的な量であり、個々の分子には対応する量がない。",
        "誤り：系を二倍にすれば N も二倍になるため、示量量である。",
      ],
    },
    "l3-q5": {
      question: "等積過程とは、どの量を一定に保つ過程か。",
      choices: ["圧力", "熱交換なし", "温度", "体積"],
      explanations: [
        "誤り：それは等圧過程である。",
        "誤り：それは断熱過程である。",
        "誤り：それは等温過程である。",
        "正解：等積とは体積一定を意味する。",
      ],
    },
    "l3-vf1": {
      question: "熱力学的平衡にある系は、必ず均質である（すべての点で示強変数が同じである）。",
      choices: ["正しい", "誤り"],
      explanations: [
        "誤り：机の上に置かれた水の入ったコップは平衡にあるが、水面と底では圧力が異なる。これはパスカルの法則（静水圧）による。重力を受けて静止している流体では、深さとともに圧力が増加し、P(z) = P_0 + ρgh となる。この不均一性はどれほど待っても消えないため、平衡が不完全だからではなく、外力場である重力の存在による。",
        "正解：机の上に置かれた水の入ったコップが典型例である。何も流れず変化もしないのに、圧力は深さとともに増加する（パスカルの法則：P(z) = P_0 + ρgh）。熱力学的平衡に必要なのは、系内の各点の間に巨視的流束（熱、物質、運動量の流束）がないことだけである。特に重力のような外場がある場合、圧力などの示強変数がどこでも同一である必要はない。",
      ],
    },
    "l3-vf5": {
      question: "両端を異なる温度に保った金属棒は、やがて温度分布が時間に依存しない状態に達する。この状態は熱力学的平衡状態である。",
      choices: ["正しい", "誤り"],
      explanations: [
        "誤り：これは定常状態であり、平衡状態ではない。温度分布は時間に依存しないが、高温端から低温端へ巨視的な熱流が棒を流れ続ける。",
        "正解：これは平衡とは区別すべき定常状態である。熱力学的平衡の定義では、巨視的量が変化しないだけでなく、あらゆる巨視的流束が存在しないことも必要である。ここでは両端の間に熱流が残っている。",
      ],
    },
    "l4-q2": {
      question: "なぜ dQ、dW ではなく δQ、δW と書くのか？",
      choices: [
        "これらは不完全微分であり、その積分が経路に依存するから。",
        "Q と W は通常の微分で表すには小さすぎる量だから。",
      ],
      explanations: [
        "正解：Q と W は経路に依存するが、U は初期状態と最終状態だけに依存する。dQ と書けば、熱素説を復活させることになる。",
        "誤り：量の「大きさ」は関係なく、問題は経路依存性である。",
      ],
    },
    "l4-q2b": {
      question: "理想気体が平衡状態 A から平衡状態 B へ移る。先に圧縮してから加熱する場合と、先に加熱してから圧縮する場合について、何がいえるか？",
      choices: [
        "内部エネルギー変化 ΔU、受け取った熱 Q、仕事 W は、いずれも両方の場合で同じである。",
        "ΔU は両方の場合で同じだが、Q と W は経路によって異なりうる。",
        "Q は両方の場合で同じだが、ΔU は異なりうる。",
        "三つの量はいずれも経路に依存しない。",
      ],
      explanations: [
        "誤り：状態 A と B によって決まるのは ΔU だけであり、Q と W は一般に経路に依存する。",
        "正解：U は状態関数（dU は完全微分）なので、ΔU = U(B) − U(A) は初期状態と最終状態だけに依存する。Q と W は状態関数ではなく（δQ と δW は完全微分ではない）、経路に依存する。第一法則が定めるのは、その和 Q + W = ΔU だけである。",
        "誤り：逆であり、経路に依存しないのは Q ではなく ΔU である。",
        "誤り：ΔU は経路に依存しないが、Q と W は一般に依存する。",
      ],
    },
    "l4-q3": {
      question: "閉じた系がサイクル変化（A → A）を行う。収支 Q_cycle + W_cycle について何がいえるか？",
      choices: [
        "Q と W は状態関数であるため、必ずゼロである。",
        "U が状態関数なのでゼロである。",
        "熱機関では常に厳密に正である。",
      ],
      explanations: [
        "誤り：逆である。Q と W は状態関数ではなく、系の量ではなくエネルギーの移動である。ΔU_cycle = 0 により、サイクルでゼロになるよう制約されるのはその和だけである。",
        "正解：サイクルの終わりに系は初期状態へ戻る。U は状態関数なので ΔU_cycle = U(A) − U(A) = 0 となり、第一法則から Q_cycle + W_cycle = 0 である。",
        "誤り：ゼロなのは Q_cycle + W_cycle の和であり、各項ではない。熱機関では Q_cycle と W_cycle はともにゼロでなく、互いに逆符号になりうる。",
      ],
    },
    "l4-q4": {
      question: "気体を準静的に圧縮する。気体が受け取る仕事について何がいえるか？",
      choices: [
        "負である。圧縮される気体は、それを圧縮する外界へ必ず力学的エネルギーを渡すから。",
        "正である。気体は圧縮時に仕事を受け取るから。",
        "ゼロである。準静的変化では、各段階の仕事の交換が厳密に相殺されるから。",
      ],
      explanations: [
        "誤り：典型的な符号の間違いである。dV < 0 なら −P dV > 0 なので、気体は仕事を受け取る。",
        "正解：気体を圧縮するには力学的エネルギーを与える必要がある。系に入るものを正とする符号規約では正になる。",
        "誤り：準静的とは仕事がゼロという意味ではなく、変化が一連の平衡状態を通るという意味にすぎない。",
      ],
    },
    "l4-q6": {
      question: "閉じた系の等積変化では、常に次が成り立つ：",
      choices: ["W = 0、したがって ΔU = Q", "Q = 0、したがって ΔU = W", "ΔU = 0、したがって Q = −W"],
      explanations: [
        "正解：体積一定では δW = −P dV = 0 であり、内部エネルギーの変化はすべて熱による。",
        "誤り：これは断熱変化の収支であり、等積変化ではない。",
        "誤り：U は T のみに依存するので、これは理想気体の等温変化の収支である。",
      ],
    },
  },

  ko: {
    "l1-q1": {
      question: "열역학에서 말하는 열기관이란 무엇인가?",
      choices: [
        "한 사이클 동안 고온 열원에서 받은 열을 전부 일로 바꾸는 장치.",
        "단 하나의 열원과 접촉한 채 사이클로 작동하면서 그로부터 일을 뽑아내는 장치.",
        "외부 조작자가 공급한 역학적 일로부터 열을 만들어 내는 장치.",
        "고온에서 저온으로 흐르는 열류의 일부를 일로 바꾸는 사이클 장치.",
      ],
      explanations: [
        "틀림: 한 사이클 동안 열을 전부 일로 바꾸는 것은 불가능하다(제2법칙의 켈빈 진술).",
        "틀림: 단일 열원으로 작동하는 사이클 기관은 어떤 일도 낼 수 없다. 이것이 바로 켈빈 진술이다.",
        "틀림: 그것은 난방기나 열펌프에 대한 설명이지 열기관이 아니다.",
        "정답: 기관은 고온 → 저온 열류의 일부만 가로챌 뿐, 전부를 가로채지는 못한다.",
      ],
    },
    "l1-q2": {
      question: "열기관은 왜 두 열원 사이의 온도 차이를 필요로 하는가?",
      choices: [
        "온도 차이가 없으면 열류가 흐르지 않아 일로 바꿀 것이 없기 때문이다.",
        "역학적 일은 작업 물질마다 정해진 최소 문턱을 넘는 온도의 열원에서만 얻을 수 있기 때문이다.",
        "사이클 내내 작업 물질의 압력이 항상 대기압보다 높아야 하기 때문이다.",
      ],
      explanations: [
        "정답: 기관은 고온 → 저온 열류에 매기는 통행료와 같다. 흐름이 없으면 일도 없다. 진짜 '연료'는 온도 기울기다.",
        "틀림: 온도 문턱 같은 것은 없다. 작은 차이만 있어도 충분하다(바다의 몇 도 차이를 이용하는 OTEC 발전 참조).",
        "틀림: 기준은 압력이 아니라 두 열원 사이의 온도 차이다.",
      ],
    },
    "l1-vf1": {
      question: "사이클로 작동하는 열기관은 단 하나의 열원과만 접촉한 채로 작동할 수 있다.",
      choices: ["참", "거짓"],
      explanations: [
        "틀림: 바로 그것을 제2법칙의 켈빈 진술이 금지한다. 단일 열원 사이클 기관은 일을 낼 수 없다.",
        "정답: 온도가 다른 열원이 적어도 둘 필요하다.",
      ],
    },
    "l2-q1": {
      question: "18세기 말에 지배적이었던 열소설은 무엇을 주장했는가?",
      choices: [
        "열은 물질의 미시적 운동 형태이며, 입자 사이의 충돌을 통해 차례로 전달된다.",
        "열은 보존되는 물질적 유체로서 뜨거운 곳에서 차가운 곳으로 흐른다.",
        "열과 온도는 온도계로 측정하는 하나의 동일한 물리량이다.",
      ],
      explanations: [
        "틀림: 이것은 경쟁 이론인 역학적 또는 운동론적 관점(베이컨, 베르누이)의 주장으로, 나중에 옳은 것으로 밝혀졌다.",
        "정답: 열소는 무게가 없고 보존되는 유체로 여겨졌다. 잘못된 이론이었지만 많은 성과를 낳았다.",
        "틀림: 열과 온도의 구분은 조지프 블랙의 연구(열용량, 잠열) 덕분에 열소설보다 앞서 이미 확립되었다.",
      ],
    },
    "l2-q2": {
      question: "어떤 실험이 열소설에 반하는 증거를 제시했는가?",
      choices: [
        "럼퍼드가 관찰한 대포 포신의 천공. 마찰이 겉보기에는 한없이 열을 만들어 냈다.",
        "조지프 블랙이 얼음이 일정한 온도에서 녹을 때 흡수하는 잠열을 측정한 실험.",
        "클라페롱이 보일, 샤를, 게이뤼삭의 법칙을 하나의 이상기체 상태 방정식으로 종합한 것.",
      ],
      explanations: [
        "정답: 열이 유한하고 보존되는 유체라면 천공을 계속해도 무한히 생겨날 수는 없다. 럼퍼드는 1798년에 열이 운동과 관련되어 있다고 결론지었다.",
        "틀림: 잠열은 오히려 열소설로 잘 설명되었다. 상태 변화 때 유체가 물질에 '결합한다'고 보았기 때문이다.",
        "틀림: 클라페롱은 1834년에 기체 법칙들을 통합했지만, 이는 열의 본질과 직접 관련이 없다.",
      ],
    },
    "l2-vf1": {
      question: "카르노는 1824년에 최대 효율의 공식 η = 1 - T_f/T_c를 확립했다.",
      choices: ["참", "거짓"],
      explanations: [
        "틀림: 카르노는 최대 효율의 존재와 보편성을 증명했지만 그 식을 구하지는 못했다. 1848년에 켈빈이 도입한 절대 온도 눈금이 아직 없었기 때문이다.",
        "정답: 카르노는 엄밀한 온도 정의가 없어 식을 제시하지는 못했지만, 이 보편적 상한의 존재를 증명했다.",
      ],
    },
    "l2-q4": {
      question: "조지프 블랙이 밝힌 관계 Q = m c ΔT에서 계수 c는 무엇을 나타내는가?",
      choices: [
        "물체가 교환한 총열량으로, 단위는 줄이다.",
        "물체의 단위 질량의 온도를 1도 높이는 데 공급해야 하는 열량.",
        "물체에 공급된 일과 물체가 받은 열의 비.",
      ],
      explanations: [
        "틀림: 교환된 총열량은 c가 아니라 Q이다. Q는 질량과 온도 차에도 의존한다.",
        "정답: 비열용량(또는 비열)으로, 블랙이 밝혀낸 물질마다 고유한 계수이다.",
        "틀림: 이 비는 c와 아무 관련이 없다. c에는 열과 온도만 관여한다.",
      ],
    },
    "l2-q5": {
      question: "줄이 측정한 칼로리의 값은 현대 단위로 얼마인가?",
      choices: ["1칼로리당 약 1 J", "1칼로리당 약 4,18 J", "1칼로리당 약 100 J", "1칼로리당 약 0,24 J"],
      explanations: [
        "틀림: 칼로리와 줄이 환산 없이 이미 같은 양을 나타낸다면 이 값이 될 것이다.",
        "정답: 1 cal ≈ 4,18 J이다. 1843년부터 1849년까지 점점 더 정밀하게 측정된 이 값이 열과 일의 등가성을 확립했다.",
        "틀림: 이 값은 줄의 측정값보다 약 24배나 크다.",
        "틀림: 이는 대략 그 역수이다(1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "식품 포장에 '250 cal'이라고 적혀 있다. 이는 대략 몇 줄에 해당하는가?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "틀림: 표시된 단위를 줄과 혼동한 계산이다.",
        "정답: 식품 칼로리 1 cal은 실제로 1 kcal이며, 원래는 대문자 Cal로 표기한다. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ이다.",
        "틀림: 식품의 1 cal이 실제로는 1킬로칼로리라는 점을 빠뜨린 계산이다.",
        "틀림: 식품 칼로리를 킬로줄과 혼동한 계산이다.",
      ],
    },
    "l2-vf3": {
      question: "열량계학은 계들 사이에서 교환되는 열량을 측정하는 과학이다.",
      choices: ["참", "거짓"],
      explanations: [
        "정답: 블랙의 1760년 연구가 열량계학의 시작이다.",
        "틀림: 열량계학은 온도가 아니라 열량을 측정하는 과학이다.",
      ],
    },
    "l2-q7": {
      question: "0°C의 얼음을 가열하여 20°C의 액체 물로 만든다. 받은 총열량을 올바르게 계산하려면 어떻게 해야 하는가?",
      choices: [
        "Q = m c_eau ΔT. 여기서 ΔT = 20°C이고 c_eau는 액체 물의 비열용량이다.",
        "Q = m L + m c_eau ΔT. 여기서 L은 융해의 비잠열, c_eau는 액체 물의 비열용량이며 ΔT = 20°C이다.",
        "Q = m c_glace ΔT + m c_eau ΔT. 여기서 ΔT = 20°C이다.",
      ],
      explanations: [
        "틀림: 이 계산은 온도가 변하지 않은 채 0°C에서 흡수되는 융해 잠열을 빠뜨린다. 이것이 열용량과 구별되는 블랙의 두 번째 발견이다.",
        "정답: 잠열(일정 온도에서의 융해)과 관계 Q = mcΔT(상이 일정한 상태에서의 가열)는 더해지지만, 각각 과정의 서로 다른 단계에 적용된다.",
        "틀림: 얼음이 녹은 뒤 0°C에서 20°C까지 가열할 때 적용되는 것은 액체 물의 비열용량이지 얼음의 비열용량이 아니다.",
      ],
    },
    "l2-vf4": {
      question: "액체 물이 얼 때는 외부로 열을 방출한다.",
      choices: ["참", "거짓"],
      explanations: [
        "정답: 응고는 융해의 역과정이다. 물은 같은 양의 얼음을 녹일 때 공급해야 했던 잠열을 정확히 되돌려 준다. 그래서 예를 들어 겨울에 호수가 얼면 주변 공기가 조금 따뜻해진다.",
        "틀림: 이는 융해라는 흡열 과정과 대칭인 발열 과정이다. 같은 잠열의 부호만 반대이다.",
      ],
    },
    "l3-q1": {
      question: "고립계의 벽이 갖는 성질은 무엇인가?",
      choices: [
        "투열성, 가동성, 투과성.",
        "강체, 단열성, 불투과성.",
        "강체, 투열성, 불투과성.",
        "가동성, 단열성, 투과성.",
      ],
      explanations: [
        "틀림: 이는 오히려 모든 교환(열, 일, 물질)을 허용하는 성질이다.",
        "정답: 강체 벽은 일의 교환을, 단열벽은 열의 교환을, 불투과성 벽은 물질의 교환을 막는다.",
        "틀림: 투열벽은 열을 통과시키므로 계가 고립되어 있지 않다.",
        "틀림: 가동성이고 투과성인 벽은 일과 물질을 통과시킨다.",
      ],
    },
    "l3-vf2": {
      question: "투열벽은 열을 통과시키는 벽을 뜻한다.",
      choices: ["참", "거짓"],
      explanations: ["정답", "틀림"],
    },
    "l3-vf3": {
      question: "단열벽은 열을 통과시키는 벽을 뜻한다.",
      choices: ["참", "거짓"],
      explanations: [
        "틀림: 그것은 투열벽이다.",
        "정답: 단열은 반대로 열이 벽을 통과하지 않는다는 뜻이다. 단열은 투열의 반대이다.",
      ],
    },
    "l3-vf4": {
      question: "벽이 물질에 대해 불투과성이지만 외부와 열과 일을 교환할 수 있는 계를 닫힌계라 한다.",
      choices: ["참", "거짓"],
      explanations: [
        "정답: 닫힌계는 물질을 교환하지 않는다는 뜻일 뿐이다. 고립계와 달리 열과 일은 교환할 수 있다.",
        "틀림: 이것이 바로 닫힌계의 정의이다. 열과 일의 교환도 금지하는 고립계와 혼동해서는 안 된다.",
      ],
    },
    "l3-q3": {
      question: "다음 양 가운데 세기량은 무엇인가?",
      choices: ["부피 V", "내부 에너지 U", "압력 P", "입자 수 N"],
      explanations: [
        "틀림: 계를 두 배로 하면 부피도 두 배가 되므로 크기량이다.",
        "틀림: 장거리 힘이 없을 때 내부 에너지는 크기량이다.",
        "정답: 계를 두 배로 해도 압력은 변하지 않는다. 압력은 창발량이며 개별 분자에는 이에 대응하는 양이 없다.",
        "틀림: 계를 두 배로 하면 N도 두 배가 되므로 크기량이다.",
      ],
    },
    "l3-q5": {
      question: "등적 과정은 어떤 조건에서 이루어지는가?",
      choices: ["일정한 압력", "열 교환 없음", "일정한 온도", "일정한 부피"],
      explanations: [
        "틀림: 그것은 등압 과정이다.",
        "틀림: 그것은 단열 과정이다.",
        "틀림: 그것은 등온 과정이다.",
        "정답: 등적은 부피가 일정하다는 뜻이다.",
      ],
    },
    "l3-vf1": {
      question: "열역학적 평형에 있는 계는 반드시 균질하다(모든 지점에서 세기 변수가 같다).",
      choices: ["참", "거짓"],
      explanations: [
        "틀림: 탁자 위의 물컵은 평형에 있지만 수면과 바닥의 압력은 다르다. 이는 파스칼 법칙(정수압) 때문이다. 중력을 받으며 정지한 유체에서는 깊이가 깊어질수록 압력이 증가하여 P(z) = P_0 + ρgh가 된다. 이 비균일성은 아무리 오래 기다려도 사라지지 않는다. 따라서 평형이 불완전해서가 아니라 외부 힘장인 중력이 존재하기 때문에 생긴다.",
        "정답: 탁자 위의 물컵이 고전적인 예이다. 아무것도 흐르거나 변하지 않는데도 압력은 깊이에 따라 증가한다(파스칼 법칙: P(z) = P_0 + ρgh). 열역학적 평형은 계의 지점들 사이에 거시적 유량(열, 물질, 운동량의 유량)이 없을 것만 요구한다. 특히 중력 같은 외부장이 있을 때 압력과 같은 세기 변수가 모든 곳에서 같을 필요는 없다.",
      ],
    },
    "l3-vf5": {
      question: "양 끝을 서로 다른 온도로 유지한 금속 막대는 결국 온도 분포가 시간에 의존하지 않는 상태에 이른다. 이 상태는 열역학적 평형 상태이다.",
      choices: ["참", "거짓"],
      explanations: [
        "틀림: 이는 정상 상태이지 평형 상태가 아니다. 온도 분포는 시간에 따라 일정하지만, 뜨거운 끝에서 차가운 끝으로 거시적인 열류가 막대를 계속 통과한다.",
        "정답: 이는 평형과 구분해야 하는 정상 상태이다. 열역학적 평형의 정의는 거시적 양이 더 이상 변하지 않을 뿐 아니라 거시적 유량이 전혀 없을 것도 요구한다. 여기서는 두 끝 사이에 열류가 남아 있다.",
      ],
    },
    "l4-q2": {
      question: "왜 dQ와 dW 대신 δQ와 δW라고 쓰는가?",
      choices: [
        "불완전미분이기 때문이다. 그 적분은 어떤 경로를 따랐는지에 따라 달라진다.",
        "Q와 W는 너무 작은 양이라서 보통의 미분으로 나타낼 수 없기 때문이다.",
      ],
      explanations: [
        "정답: Q와 W는 경로에 의존하지만 U는 초기 상태와 최종 상태에만 의존한다. dQ라고 쓰는 것은 열소 이론을 되살리는 것과 같다.",
        "틀림: 양의 ‘크기’는 관계없다. 핵심은 경로 의존성이다.",
      ],
    },
    "l4-q2b": {
      question: "이상 기체가 평형 상태 A에서 평형 상태 B로 간다. 먼저 압축한 뒤 가열하거나, 먼저 가열한 뒤 압축할 때 무엇을 말할 수 있는가?",
      choices: [
        "내부 에너지 변화 ΔU와 받은 열 Q 및 일 W는 두 경우 모두 같다.",
        "ΔU는 두 경우 모두 같지만 Q와 W는 경로에 따라 달라질 수 있다.",
        "Q는 두 경우 모두 같지만 ΔU는 달라질 수 있다.",
        "세 양 가운데 어느 것도 경로에 의존하지 않는다.",
      ],
      explanations: [
        "틀림: 상태 A와 B로 정해지는 것은 ΔU뿐이며, Q와 W는 일반적으로 경로에 의존한다.",
        "정답: U는 상태함수이고 dU는 완전미분이므로 ΔU = U(B) − U(A)는 초기 상태와 최종 상태에만 의존한다. Q와 W는 상태함수가 아니며 δQ와 δW는 완전미분이 아니므로 경로에 의존한다. 제1법칙이 정하는 것은 그 합 Q + W = ΔU뿐이다.",
        "틀림: 반대가 옳다. 경로와 무관한 것은 Q가 아니라 ΔU이다.",
        "틀림: ΔU는 경로에 의존하지 않지만 Q와 W는 일반적으로 의존한다.",
      ],
    },
    "l4-q3": {
      question: "닫힌계가 순환 과정(A → A)을 겪는다. 수지 Q_cycle + W_cycle에 대해 무엇을 말할 수 있는가?",
      choices: [
        "Q와 W는 상태함수이므로 반드시 0이다.",
        "U가 상태함수이므로 0이다.",
        "열기관에서는 언제나 엄밀히 양수이다.",
      ],
      explanations: [
        "틀림: 반대이다. Q와 W는 상태함수가 아니라 계의 양이 아닌 에너지 전달이다. ΔU_cycle = 0이므로 한 순환에서 0이 되도록 제한되는 것은 그 합뿐이다.",
        "정답: 한 순환이 끝나면 계는 초기 상태로 돌아온다. U는 상태함수이므로 ΔU_cycle = U(A) − U(A) = 0이고, 따라서 제1법칙에 의해 Q_cycle + W_cycle = 0이다.",
        "틀림: 0인 것은 Q_cycle + W_cycle의 합이지 각 항이 아니다. 열기관에서는 Q_cycle과 W_cycle이 각각 0이 아니면서 부호가 반대일 수 있다.",
      ],
    },
    "l4-q4": {
      question: "기체를 준정적으로 압축한다. 기체가 받은 일에 대해 무엇을 말할 수 있는가?",
      choices: [
        "음수이다. 압축되는 기체는 자신을 압축하는 외부에 반드시 역학적 에너지를 주기 때문이다.",
        "양수이다. 기체는 압축될 때 일을 받는다.",
        "0이다. 준정적 과정에서는 각 단계의 일 교환이 정확히 상쇄되기 때문이다.",
      ],
      explanations: [
        "틀림: 전형적인 부호 오류이다. dV < 0이면 −P dV > 0이므로 기체는 일을 받는다.",
        "정답: 기체를 압축하려면 역학적 에너지를 공급해야 한다. 계로 들어오는 에너지를 양수로 세는 부호 규약에 따르면 양수이다.",
        "틀림: 준정적이라는 말은 일이 0이라는 뜻이 아니라, 과정이 일련의 평형 상태를 거친다는 뜻이다.",
      ],
    },
    "l4-q6": {
      question: "닫힌계의 등적 과정에서는 언제나 다음이 성립한다:",
      choices: ["W = 0, 따라서 ΔU = Q", "Q = 0, 따라서 ΔU = W", "ΔU = 0, 따라서 Q = −W"],
      explanations: [
        "정답: 부피가 일정하면 δW = −P dV = 0이며, 내부 에너지 변화 전체가 열에서 온다.",
        "틀림: 이는 단열 과정의 수지이지 등적 과정의 수지가 아니다.",
        "틀림: U는 T에만 의존하므로 이는 이상 기체의 등온 과정에 대한 수지이다.",
      ],
    },
  },

  hi: {
    "l1-q1": {
      question: "ऊष्मागतिकी के अर्थ में ऊष्मा इंजन क्या है?",
      choices: [
        "ऐसा उपकरण जो एक चक्र के दौरान उष्ण स्रोत से प्राप्त सारी ऊष्मा को कार्य में बदल देता है।",
        "ऐसा उपकरण जो केवल एक ही ऊष्मा स्रोत के संपर्क में रहकर चक्र में चलता है और उससे कार्य निकालता है।",
        "ऐसा उपकरण जो किसी बाहरी संचालक द्वारा दिए गए यांत्रिक कार्य से ऊष्मा उत्पन्न करता है।",
        "ऐसा चक्रीय उपकरण जो उष्ण से शीत की ओर बहने वाले ऊष्मा प्रवाह के एक अंश को कार्य में बदलता है।",
      ],
      explanations: [
        "गलत: एक चक्र के दौरान ऊष्मा को पूरी तरह कार्य में बदलना असंभव है (द्वितीय नियम का केल्विन कथन)।",
        "गलत: एक ही स्रोत पर चलने वाला चक्रीय इंजन कोई कार्य नहीं दे सकता; केल्विन कथन ठीक यही कहता है।",
        "गलत: यह तो हीटर या ऊष्मा पंप का वर्णन है, इंजन का नहीं।",
        "सही: इंजन उष्ण → शीत प्रवाह का केवल एक अंश मोड़ता है, कभी पूरा नहीं।",
      ],
    },
    "l1-q2": {
      question: "ऊष्मा इंजन को दो स्रोतों के बीच तापांतर की आवश्यकता क्यों होती है?",
      choices: [
        "क्योंकि तापांतर के बिना कोई ऊष्मा प्रवाह नहीं होता, और कार्य में बदलने को कुछ बचता ही नहीं।",
        "क्योंकि यांत्रिक कार्य केवल ऐसे स्रोत से मिल सकता है जिसका ताप किसी न्यूनतम सीमा से ऊपर हो, जो हर कार्यकारी द्रव के लिए अलग होती है।",
        "क्योंकि पूरे चक्र के दौरान कार्यकारी द्रव का दाब सदैव वायुमंडलीय दाब से अधिक रहना चाहिए।",
      ],
      explanations: [
        "सही: इंजन उष्ण → शीत ऊष्मा प्रवाह पर वसूले गए कर जैसा है; प्रवाह नहीं तो कार्य नहीं। असली “ईंधन” तापप्रवणता है।",
        "गलत: कोई ताप-सीमा नहीं होती; थोड़ा-सा अंतर भी पर्याप्त है (समुद्र में कुछ ही डिग्री के अंतर का उपयोग करने वाले OTEC संयंत्र देखें)।",
        "गलत: कसौटी दाब नहीं है; महत्त्व दोनों स्रोतों के बीच के तापांतर का है।",
      ],
    },
    "l1-vf1": {
      question: "चक्रीय ऊष्मा इंजन केवल एक ही ऊष्मा स्रोत के संपर्क में रहकर काम कर सकता है।",
      choices: ["सही", "गलत"],
      explanations: [
        "गलत: द्वितीय नियम का केल्विन कथन ठीक इसी को मना करता है; एक ही स्रोत पर चलने वाला चक्रीय इंजन कार्य नहीं दे सकता।",
        "सही: कम से कम दो अलग-अलग तापों वाले स्रोत चाहिए।",
      ],
    },
    "l2-q1": {
      question: "18वीं शताब्दी के अंत में प्रभावी कैलोरिक सिद्धांत क्या मानता था?",
      choices: [
        "ऊष्मा पदार्थ की सूक्ष्म हलचल का एक रूप है, जो कणों की टक्करों से क्रमशः संचारित होती है।",
        "ऊष्मा एक संरक्षित भौतिक द्रव है, जो गरम से ठंडे की ओर बहता है।",
        "ऊष्मा और तापमान एक ही भौतिक राशि हैं, जिसे तापमापी से मापा जाता है।",
      ],
      explanations: [
        "गलत: यह प्रतिद्वंद्वी यांत्रिक या गतिज मत (बेकन, बर्नूली) था, जो बाद में सही सिद्ध हुआ।",
        "सही: कैलोरिक को भारहीन और संरक्षित द्रव माना जाता था। यह सिद्धांत गलत, किंतु उपयोगी और फलदायी था।",
        "गलत: ऊष्मा और तापमान का भेद कैलोरिक सिद्धांत से पहले ही जोज़ेफ़ ब्लैक के कार्य (ऊष्मा धारिता, गुप्त ऊष्मा) से स्थापित हो चुका था।",
      ],
    },
    "l2-q2": {
      question: "किस प्रयोग ने कैलोरिक सिद्धांत का खंडन किया?",
      choices: [
        "रम्फ़ोर्ड द्वारा देखी गई तोपों की बोरिंग: घर्षण से प्रतीततः असीमित ऊष्मा उत्पन्न होती थी।",
        "जोज़ेफ़ ब्लैक द्वारा स्थिर तापमान पर बर्फ़ के गलने में अवशोषित गुप्त ऊष्मा का मापन।",
        "क्लैपेरॉन द्वारा बॉयल, शार्ल और गे-लुसाक के नियमों को आदर्श गैस की एक अवस्था-समीकरण में संयोजित करना।",
      ],
      explanations: [
        "सही: यदि ऊष्मा कोई सीमित और संरक्षित द्रव होती, तो लगातार बोरिंग करने से वह अनिश्चित काल तक उत्पन्न नहीं हो सकती थी। रम्फ़ोर्ड ने 1798 में निष्कर्ष निकाला कि उसका संबंध गति से है।",
        "गलत: गुप्त ऊष्मा को कैलोरिक सिद्धांत उलटे अच्छी तरह समझाता था—अवस्था परिवर्तन में द्रव को पदार्थ से 'बंधा' हुआ माना जाता था।",
        "गलत: क्लैपेरॉन ने 1834 में गैस के नियमों को एकीकृत किया, जिसका ऊष्मा की प्रकृति से सीधा संबंध नहीं है।",
      ],
    },
    "l2-vf1": {
      question: "कार्नो ने 1824 में अधिकतम दक्षता का सूत्र η = 1 - T_f/T_c स्थापित किया था।",
      choices: ["सही", "गलत"],
      explanations: [
        "गलत: कार्नो ने अधिकतम दक्षता के अस्तित्व और सार्वत्रिकता को सिद्ध किया था, उसका सूत्र नहीं। उस समय निरपेक्ष तापमान पैमाना उपलब्ध नहीं था, जिसे केल्विन ने 1848 में प्रस्तुत किया।",
        "सही: तापमान की कठोर परिभाषा के अभाव में कार्नो इस सार्वत्रिक सीमा का सूत्र नहीं दे सके, किंतु उन्होंने इसके अस्तित्व को सिद्ध किया।",
      ],
    },
    "l2-q4": {
      question: "जोज़ेफ़ ब्लैक द्वारा स्पष्ट किए गए संबंध Q = m c ΔT में गुणांक c क्या दर्शाता है?",
      choices: [
        "पिंड द्वारा विनिमय की गई कुल ऊष्मा, जूल में।",
        "पिंड के इकाई द्रव्यमान का तापमान एक केल्विन बढ़ाने के लिए आवश्यक ऊष्मा।",
        "पिंड को दिए गए कार्य और उसके द्वारा प्राप्त ऊष्मा का अनुपात।",
      ],
      explanations: [
        "गलत: कुल विनिमय की गई ऊष्मा स्वयं Q है, c नहीं। Q द्रव्यमान और तापांतर पर भी निर्भर करता है।",
        "सही: यह विशिष्ट ऊष्मा धारिता (या विशिष्ट ऊष्मा) है, अर्थात प्रत्येक पदार्थ का वह विशिष्ट गुणांक जिसे ब्लैक ने उजागर किया।",
        "गलत: इस अनुपात का c से कोई संबंध नहीं है; c में केवल ऊष्मा और तापमान आते हैं।",
      ],
    },
    "l2-q5": {
      question: "जूल द्वारा मापी गई कैलोरी का मान आधुनिक इकाइयों में कितना है?",
      choices: ["लगभग 1 J प्रति कैलोरी", "लगभग 4,18 J प्रति कैलोरी", "लगभग 100 J प्रति कैलोरी", "लगभग 0,24 J प्रति कैलोरी"],
      explanations: [
        "गलत: यह तब होता यदि कैलोरी और जूल बिना रूपांतरण के पहले से एक ही मान मापते।",
        "सही: 1 cal ≈ 4,18 J। 1843 से 1849 के बीच बढ़ती परिशुद्धता से मापे गए इसी मान ने ऊष्मा और कार्य की तुल्यता स्थापित की।",
        "गलत: यह मान जूल के मापन से लगभग 24 गुना अधिक है।",
        "गलत: यह लगभग उसका व्युत्क्रम है (1/4,18 ≈ 0,24)।",
      ],
    },
    "l2-q6": {
      question: "किसी खाद्य पैकेट पर '250 cal' लिखा है। यह लगभग कितने जूल के बराबर है?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "गलत: इसमें लिखी हुई इकाई को जूल समझ लिया गया है।",
        "सही: खाद्य कैलोरी वास्तव में 1 kcal होती है, जिसे सामान्यतः बड़े अक्षर से Cal लिखना चाहिए। 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ।",
        "गलत: इसमें यह भूल गए हैं कि एक खाद्य cal वास्तव में एक किलोकैलोरी होती है।",
        "गलत: इसमें खाद्य कैलोरी को किलोजूल समझ लिया गया है।",
      ],
    },
    "l2-vf3": {
      question: "ऊष्मामिति निकायों के बीच विनिमय की गई ऊष्मा की मात्राओं को मापने का विज्ञान है।",
      choices: ["सही", "गलत"],
      explanations: [
        "सही: ब्लैक के 1760 के कार्य से ऊष्मामिति का आरंभ हुआ।",
        "गलत: ऊष्मामिति तापमान की नहीं, ऊष्मा की मात्रा मापने का विज्ञान है।",
      ],
    },
    "l2-q7": {
      question: "0°C की बर्फ़ को गरम करके 20°C का द्रव पानी बनाया जाता है। प्राप्त कुल ऊष्मा की सही गणना कैसे होगी?",
      choices: [
        "Q = m c_eau ΔT, जहाँ ΔT = 20°C और c_eau द्रव पानी की विशिष्ट ऊष्मा धारिता है।",
        "Q = m L + m c_eau ΔT, जहाँ L गलन की विशिष्ट गुप्त ऊष्मा, c_eau द्रव पानी की विशिष्ट ऊष्मा धारिता और ΔT = 20°C है।",
        "Q = m c_glace ΔT + m c_eau ΔT, जहाँ ΔT = 20°C है।",
      ],
      explanations: [
        "गलत: इस गणना में गलन की गुप्त ऊष्मा छूट जाती है, जो तापमान बदले बिना 0°C पर अवशोषित होती है। ऊष्मा धारिता से अलग यह ब्लैक की दूसरी खोज थी।",
        "सही: गुप्त ऊष्मा (स्थिर तापमान पर गलन) और संबंध Q = mcΔT (एक ही अवस्था में तापन) जोड़े जाते हैं, पर दोनों प्रक्रम के अलग-अलग चरणों पर लागू होते हैं।",
        "गलत: बर्फ़ गलने के बाद 0°C से 20°C तक तापन में द्रव पानी की विशिष्ट ऊष्मा धारिता लागू होती है, बर्फ़ की नहीं।",
      ],
    },
    "l2-vf4": {
      question: "द्रव पानी के जमने पर वह बाहर की ओर ऊष्मा मुक्त करता है।",
      choices: ["सही", "गलत"],
      explanations: [
        "सही: जमना गलन का उलटा प्रक्रम है। उतनी ही बर्फ़ को गलाने के लिए जितनी गुप्त ऊष्मा देनी पड़ती, पानी ठीक उतनी ही ऊष्मा लौटा देता है। इसी कारण, उदाहरणतः सर्दियों में झील का पानी जमने पर आसपास की हवा थोड़ी गरम होती है।",
        "गलत: यह वास्तव में ऊष्माक्षेपी परिघटना है और ऊष्माशोषी गलन की सममित विपरीत प्रक्रिया है—गुप्त ऊष्मा वही है, केवल चिह्न उलटा है।",
      ],
    },
    "l3-q1": {
      question: "विलगित निकाय की दीवारें कैसी होती हैं?",
      choices: [
        "ऊष्मापारगम्य, गतिशील और पारगम्य।",
        "दृढ़, रुद्धोष्म और अपारगम्य।",
        "दृढ़, ऊष्मापारगम्य और अपारगम्य।",
        "गतिशील, रुद्धोष्म और पारगम्य।",
      ],
      explanations: [
        "गलत: ये इसके विपरीत वे गुण हैं जो सभी विनिमय—ऊष्मा, कार्य और पदार्थ—होने देते हैं।",
        "सही: दृढ़ दीवार कार्य का, रुद्धोष्म दीवार ऊष्मा का और अपारगम्य दीवार पदार्थ का विनिमय रोकती है।",
        "गलत: ऊष्मापारगम्य दीवारें ऊष्मा को पार होने देती हैं; निकाय विलगित नहीं होगा।",
        "गलत: गतिशील और पारगम्य दीवारें कार्य और पदार्थ को पार होने देती हैं।",
      ],
    },
    "l3-vf2": {
      question: "ऊष्मापारगम्य या डायाथर्मल दीवार ऊष्मा को पार होने देती है।",
      choices: ["सही", "गलत"],
      explanations: ["सही", "गलत"],
    },
    "l3-vf3": {
      question: "रुद्धोष्म दीवार ऊष्मा को पार होने देती है।",
      choices: ["सही", "गलत"],
      explanations: [
        "गलत: वह ऊष्मापारगम्य दीवार होगी।",
        "सही: रुद्धोष्म का अर्थ इसके विपरीत है—कोई ऊष्मा दीवार को पार नहीं करती। रुद्धोष्म, ऊष्मापारगम्य का विलोम है।",
      ],
    },
    "l3-vf4": {
      question: "यदि किसी निकाय की दीवारें पदार्थ के लिए अपारगम्य हों, पर वह बाहर से ऊष्मा और कार्य का विनिमय कर सके, तो निकाय बंद कहलाता है।",
      choices: ["सही", "गलत"],
      explanations: [
        "सही: बंद का अर्थ केवल पदार्थ का विनिमय न होना है। विलगित निकाय के विपरीत ऊष्मा और कार्य का विनिमय हो सकता है।",
        "गलत: यही बंद निकाय की परिभाषा है। इसे विलगित निकाय से न मिलाएँ, जो ऊष्मा और कार्य के विनिमय भी रोकता है।",
      ],
    },
    "l3-q3": {
      question: "इन राशियों में कौन-सी सघन है?",
      choices: ["आयतन V", "आंतरिक ऊर्जा U", "दाब P", "कण संख्या N"],
      explanations: [
        "गलत: निकाय को दुगुना करने पर आयतन भी दुगुना होता है; यह व्यापक राशि है।",
        "गलत: लंबी दूरी के बलों के अभाव में आंतरिक ऊर्जा व्यापक राशि है।",
        "सही: निकाय को दुगुना करने पर दाब नहीं बदलता। यह एक उद्भूत राशि है, जिसके समतुल्य कोई राशि किसी अकेले अणु के लिए नहीं होती।",
        "गलत: निकाय के साथ N भी दुगुना होता है; यह व्यापक राशि है।",
      ],
    },
    "l3-q5": {
      question: "समआयतनी प्रक्रम किस दशा में होता है?",
      choices: ["नियत दाब पर", "ऊष्मा-विनिमय के बिना", "नियत तापमान पर", "नियत आयतन पर"],
      explanations: [
        "गलत: वह समदाबी प्रक्रम है।",
        "गलत: वह रुद्धोष्म प्रक्रम है।",
        "गलत: वह समतापी प्रक्रम है।",
        "सही: समआयतनी का अर्थ नियत आयतन है।",
      ],
    },
    "l3-vf1": {
      question: "ऊष्मागतिक साम्य में स्थित निकाय अनिवार्यतः समांगी होता है, अर्थात उसके सघन प्राचल हर बिंदु पर समान होते हैं।",
      choices: ["सही", "गलत"],
      explanations: [
        "गलत: मेज़ पर रखा पानी का गिलास साम्य में होता है, फिर भी सतह और तल पर उसका दाब समान नहीं होता। यह पास्कल का नियम (द्रवस्थैतिकी) है: गुरुत्व के अधीन विराम अवस्था वाले द्रव में गहराई के साथ दाब बढ़ता है, P(z) = P_0 + ρgh। यह असमानता अनंत समय तक प्रतीक्षा करने पर भी नहीं मिटती; अतः इसका कारण साम्य का अभाव नहीं, बल्कि बाहरी बल-क्षेत्र—गुरुत्व—की उपस्थिति है।",
        "सही: मेज़ पर रखा पानी का गिलास इसका चिरसम्मत उदाहरण है—उसमें कुछ भी बहता या बदलता नहीं, फिर भी गहराई के साथ दाब बढ़ता है (पास्कल का नियम: P(z) = P_0 + ρgh)। ऊष्मागतिक साम्य केवल यह माँगता है कि निकाय के बिंदुओं के बीच कोई स्थूल अभिवाह—ऊष्मा, पदार्थ या संवेग का—न हो। विशेषतः गुरुत्व जैसे बाहरी क्षेत्र की उपस्थिति में दाब जैसे सघन प्राचलों का हर स्थान पर समान होना आवश्यक नहीं है।",
      ],
    },
    "l3-vf5": {
      question: "जिस धातु की छड़ के दोनों सिरे अलग-अलग तापमान पर रखे जाते हैं, वह अंततः ऐसी अवस्था में पहुँचती है जहाँ तापमान-वितरण समय पर निर्भर नहीं रहता। यह ऊष्मागतिक साम्यावस्था है।",
      choices: ["सही", "गलत"],
      explanations: [
        "गलत: यह स्थायी अवस्था है, साम्यावस्था नहीं। तापमान-वितरण समय के साथ नियत रहता है, पर गर्म सिरे से ठंडे सिरे तक स्थूल ऊष्मा-अभिवाह छड़ से लगातार गुजरता रहता है।",
        "सही: यह स्थायी अवस्था है, जिसे साम्य से अलग करना चाहिए। ऊष्मागतिक साम्य की परिभाषा केवल यह नहीं चाहती कि स्थूल राशियाँ बदलना बंद करें, बल्कि किसी भी स्थूल अभिवाह का अभाव भी चाहती है। यहाँ दोनों सिरों के बीच ऊष्मा-अभिवाह बना रहता है।",
      ],
    },
    "l4-q2": {
      question: "हम dQ और dW के बजाय δQ और δW क्यों लिखते हैं?",
      choices: [
        "क्योंकि ये अयथार्थ अवकल रूप हैं: इनके समाकल अनुसरित मार्ग पर निर्भर करते हैं।",
        "क्योंकि Q और W इतनी छोटी राशियाँ हैं कि उन्हें सामान्य अवकलजों से वर्णित नहीं किया जा सकता।",
      ],
      explanations: [
        "सही: Q और W मार्ग पर निर्भर करते हैं, जबकि U केवल आरंभिक और अंतिम अवस्थाओं पर निर्भर करता है। dQ लिखना कैलरिक सिद्धांत को पुनर्जीवित करने के समान होता।",
        "गलत: राशियों के ‘आकार’ का इससे कोई संबंध नहीं; प्रश्न मार्ग-निर्भरता का है।",
      ],
    },
    "l4-q2b": {
      question: "एक आदर्श गैस साम्यावस्था A से साम्यावस्था B तक जाती है: या तो पहले उसे संपीडित करके फिर गर्म किया जाता है, या पहले गर्म करके फिर संपीडित किया जाता है। क्या कहा जा सकता है?",
      choices: [
        "आंतरिक ऊर्जा का परिवर्तन ΔU तथा प्राप्त ऊष्मा Q और कार्य W दोनों स्थितियों में समान हैं।",
        "ΔU दोनों स्थितियों में समान है, किंतु Q और W अलग-अलग मार्गों के लिए भिन्न हो सकते हैं।",
        "Q दोनों स्थितियों में समान है, किंतु ΔU भिन्न हो सकता है।",
        "इन तीनों राशियों में से कोई भी अनुसरित मार्ग पर निर्भर नहीं करती।",
      ],
      explanations: [
        "गलत: केवल ΔU अवस्थाओं A और B द्वारा निर्धारित है; Q और W सामान्यतः अनुसरित मार्ग पर निर्भर करते हैं।",
        "सही: U एक अवस्था फलन है (dU पूर्ण अवकलज है), इसलिए ΔU = U(B) − U(A) केवल आरंभिक और अंतिम अवस्थाओं पर निर्भर करता है। Q और W अवस्था फलन नहीं हैं (δQ और δW पूर्ण अवकलज नहीं हैं), अतः वे मार्ग पर निर्भर करते हैं; प्रथम नियम केवल उनका योग Q + W = ΔU निर्धारित करता है।",
        "गलत: इसका उलटा सत्य है—मार्ग से स्वतंत्र राशि ΔU है, Q नहीं।",
        "गलत: ΔU मार्ग पर निर्भर नहीं करता, किंतु Q और W सामान्यतः निर्भर करते हैं।",
      ],
    },
    "l4-q3": {
      question: "एक बंद निकाय चक्रीय प्रक्रम (A → A) से गुजरता है। ऊर्जा-संतुलन Q_cycle + W_cycle के बारे में क्या कहा जा सकता है?",
      choices: [
        "यह अनिवार्यतः शून्य है, क्योंकि Q और W अवस्था फलन हैं।",
        "यह शून्य है, क्योंकि U एक अवस्था फलन है।",
        "ऊष्मा इंजन के लिए यह सदैव पूर्णतः धनात्मक होता है।",
      ],
      explanations: [
        "गलत: उलटा सत्य है—Q और W अवस्था फलन नहीं, बल्कि ऊर्जा-अंतरण हैं, निकाय की राशियाँ नहीं। ΔU_cycle = 0 के कारण केवल उनका योग ही किसी चक्र पर शून्य होना आवश्यक है।",
        "सही: चक्र के अंत में निकाय अपनी आरंभिक अवस्था में लौट आता है। चूँकि U अवस्था फलन है, ΔU_cycle = U(A) − U(A) = 0; इसलिए प्रथम नियम Q_cycle + W_cycle = 0 अनिवार्य करता है।",
        "गलत: शून्य उनका योग Q_cycle + W_cycle है, प्रत्येक पद अलग-अलग नहीं; ऊष्मा इंजन में Q_cycle और W_cycle दोनों अशून्य तथा विपरीत चिह्नों वाले हो सकते हैं।",
      ],
    },
    "l4-q4": {
      question: "किसी गैस को अर्ध-स्थैतिक रूप से संपीडित किया जाता है। गैस द्वारा प्राप्त कार्य के बारे में क्या कहा जा सकता है?",
      choices: [
        "यह ऋणात्मक है: संपीडित होते समय गैस उसे संपीडित करने वाले बाहरी परिवेश को अनिवार्यतः यांत्रिक ऊर्जा देती है।",
        "यह धनात्मक है: संपीडन के दौरान गैस कार्य प्राप्त करती है।",
        "यह शून्य है: अर्ध-स्थैतिक प्रक्रम में प्रत्येक चरण पर कार्य-अंतरण ठीक-ठीक निरस्त हो जाते हैं।",
      ],
      explanations: [
        "गलत: यह चिह्न की पारंपरिक भूल है; dV < 0 होने पर −P dV > 0 होता है, अतः गैस कार्य प्राप्त करती है।",
        "सही: गैस को संपीडित करने के लिए उसे यांत्रिक ऊर्जा देनी पड़ती है; लेखा-चिह्न परिपाटी में निकाय में प्रवेश करने वाली ऊर्जा धनात्मक गिनी जाती है।",
        "गलत: अर्ध-स्थैतिक का अर्थ कार्य शून्य होना नहीं, बल्कि केवल यह है कि प्रक्रम साम्यावस्थाओं की एक श्रृंखला से गुजरता है।",
      ],
    },
    "l4-q6": {
      question: "बंद निकाय के समआयतनी प्रक्रम में सदैव होता है:",
      choices: ["W = 0, अतः ΔU = Q", "Q = 0, अतः ΔU = W", "ΔU = 0, अतः Q = −W"],
      explanations: [
        "सही: नियत आयतन पर δW = −P dV = 0; आंतरिक ऊर्जा का पूरा परिवर्तन ऊष्मा से आता है।",
        "गलत: यह रुद्धोष्म प्रक्रम का संतुलन है, समआयतनी प्रक्रम का नहीं।",
        "गलत: यह आदर्श गैस के समतापी प्रक्रम का संतुलन है, क्योंकि U केवल T पर निर्भर करता है।",
      ],
    },
  },

  vi: {
    "l1-q1": {
      question: "Động cơ nhiệt là gì, theo nghĩa của nhiệt động lực học?",
      choices: [
        "Một thiết bị biến toàn bộ nhiệt nhận từ nguồn nóng thành công trong một chu trình.",
        "Một thiết bị hoạt động theo chu trình khi chỉ tiếp xúc với một nguồn nhiệt duy nhất và lấy công từ nguồn đó.",
        "Một thiết bị sinh ra nhiệt từ công cơ học do người vận hành bên ngoài cung cấp.",
        "Một thiết bị chu trình biến một phần dòng nhiệt chảy từ nóng sang lạnh thành công.",
      ],
      explanations: [
        "Sai: không thể biến toàn bộ nhiệt thành công trong một chu trình (phát biểu Kelvin của nguyên lý thứ hai).",
        "Sai: động cơ chu trình chỉ có một nguồn nhiệt không thể sinh công; đó chính là phát biểu Kelvin.",
        "Sai: điều đó mô tả lò sưởi hay bơm nhiệt, không phải động cơ.",
        "Đúng: động cơ chỉ giữ lại một phần dòng nóng → lạnh, không bao giờ toàn bộ.",
      ],
    },
    "l1-q2": {
      question: "Vì sao động cơ nhiệt cần một chênh lệch nhiệt độ giữa hai nguồn?",
      choices: [
        "Vì không có chênh lệch nhiệt độ thì không có dòng nhiệt nào chảy, và cũng chẳng có gì để biến thành công.",
        "Vì công cơ học chỉ có thể sinh ra từ một nguồn có nhiệt độ vượt quá một ngưỡng tối thiểu, riêng cho từng môi chất công tác.",
        "Vì áp suất của môi chất công tác phải luôn cao hơn áp suất khí quyển trong suốt chu trình.",
      ],
      explanations: [
        "Đúng: động cơ giống như một trạm thu phí đặt trên dòng nhiệt nóng → lạnh; không có dòng thì không có công. “Nhiên liệu” thật sự chính là gradien nhiệt độ.",
        "Sai: không tồn tại ngưỡng nhiệt độ nào; một chênh lệch dù nhỏ cũng đủ (xem các nhà máy OTEC khai thác vài độ chênh lệch trong đại dương).",
        "Sai: tiêu chí không phải là áp suất; điều quan trọng là chênh lệch nhiệt độ giữa hai nguồn.",
      ],
    },
    "l1-vf1": {
      question: "Một động cơ nhiệt hoạt động theo chu trình có thể vận hành khi chỉ tiếp xúc với một nguồn nhiệt duy nhất.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Sai: đây chính là điều mà phát biểu Kelvin của nguyên lý thứ hai cấm; động cơ chu trình một nguồn không thể sinh công.",
        "Đúng: cần ít nhất hai nguồn ở nhiệt độ khác nhau.",
      ],
    },
    "l2-q1": {
      question: "Thuyết chất nhiệt, chiếm ưu thế vào cuối thế kỷ XVIII, khẳng định điều gì?",
      choices: [
        "Nhiệt là một dạng chuyển động vi mô của vật chất, được truyền dần qua các va chạm giữa các hạt.",
        "Nhiệt là một lưu chất vật chất được bảo toàn, chảy từ nóng sang lạnh.",
        "Nhiệt và nhiệt độ là cùng một đại lượng vật lý, được đo bằng nhiệt kế.",
      ],
      explanations: [
        "Sai: đây là luận điểm đối lập, gọi là quan điểm cơ học hoặc động học (Bacon, Bernoulli), về sau được chứng minh là đúng.",
        "Đúng: chất nhiệt được quan niệm là một lưu chất không trọng lượng và được bảo toàn. Đây là một lý thuyết sai nhưng có ích và giàu sức gợi mở.",
        "Sai: sự phân biệt giữa nhiệt và nhiệt độ đã được xác lập trước thuyết chất nhiệt nhờ Joseph Black (nhiệt dung, ẩn nhiệt).",
      ],
    },
    "l2-q2": {
      question: "Thí nghiệm nào đã bác bỏ thuyết chất nhiệt?",
      choices: [
        "Việc khoan nòng đại bác do Rumford quan sát: ma sát sinh ra nhiệt dường như không có giới hạn.",
        "Phép đo của Joseph Black về ẩn nhiệt mà băng hấp thụ khi nóng chảy ở nhiệt độ không đổi.",
        "Việc Clapeyron tổng hợp các định luật Boyle, Charles và Gay-Lussac thành một phương trình trạng thái duy nhất của khí lý tưởng.",
      ],
      explanations: [
        "Đúng: nếu nhiệt là một lưu chất hữu hạn và được bảo toàn thì việc khoan liên tục không thể sinh nhiệt mãi mãi. Năm 1798, Rumford kết luận rằng nhiệt gắn với chuyển động.",
        "Sai: ngược lại, thuyết chất nhiệt giải thích tốt ẩn nhiệt bằng cách cho rằng lưu chất 'liên kết' với vật chất khi chuyển trạng thái.",
        "Sai: năm 1834, Clapeyron thống nhất các định luật khí, không liên quan trực tiếp đến bản chất của nhiệt.",
      ],
    },
    "l2-vf1": {
      question: "Năm 1824, Carnot đã thiết lập công thức hiệu suất cực đại η = 1 - T_f/T_c.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Sai: Carnot đã chứng minh sự tồn tại và tính phổ quát của một hiệu suất cực đại, nhưng không tìm ra biểu thức của nó; khi ấy còn thiếu thang nhiệt độ tuyệt đối, được Kelvin đưa ra năm 1848.",
        "Đúng: ông chứng minh sự tồn tại của giới hạn phổ quát này nhưng không thể cho biểu thức vì chưa có một định nghĩa chặt chẽ về nhiệt độ.",
      ],
    },
    "l2-q4": {
      question: "Trong hệ thức Q = m c ΔT do Joseph Black làm sáng tỏ, hệ số c biểu thị điều gì?",
      choices: [
        "Tổng nhiệt lượng mà vật trao đổi, tính bằng joule.",
        "Nhiệt lượng cần cung cấp để làm nhiệt độ của một đơn vị khối lượng vật tăng một độ.",
        "Tỉ số giữa công cung cấp cho vật và nhiệt mà vật nhận.",
      ],
      explanations: [
        "Sai: chính Q mới là tổng nhiệt lượng trao đổi, không phải c; Q còn phụ thuộc vào khối lượng và độ chênh nhiệt độ.",
        "Đúng: đó là nhiệt dung riêng (hay nhiệt riêng), hệ số đặc trưng cho từng vật liệu mà Black đã làm rõ.",
        "Sai: tỉ số này không liên quan gì đến c; c chỉ liên hệ nhiệt và nhiệt độ.",
      ],
    },
    "l2-q5": {
      question: "Theo đơn vị hiện đại, giá trị của calo mà Joule đo được là bao nhiêu?",
      choices: ["Khoảng 1 J mỗi calo", "Khoảng 4,18 J mỗi calo", "Khoảng 100 J mỗi calo", "Khoảng 0,24 J mỗi calo"],
      explanations: [
        "Sai: điều này chỉ đúng nếu calo và joule vốn đo cùng một giá trị mà không cần chuyển đổi.",
        "Đúng: 1 cal ≈ 4,18 J; giá trị này, được đo ngày càng chính xác từ năm 1843 đến 1849, đã xác lập sự tương đương giữa nhiệt và công.",
        "Sai: giá trị này lớn hơn phép đo của Joule khoảng 24 lần.",
        "Sai: đây xấp xỉ là giá trị nghịch đảo (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Một bao bì thực phẩm ghi '250 cal'. Giá trị này xấp xỉ bao nhiêu joule?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Sai: cách tính này nhầm đơn vị ghi trên bao bì với joule.",
        "Đúng: một calo thực phẩm thực chất là 1 kcal, thường phải viết là Cal với chữ hoa. 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Sai: cách tính này quên rằng một cal thực phẩm thực chất là một kilocalo.",
        "Sai: cách tính này nhầm calo thực phẩm với kilojoule.",
      ],
    },
    "l2-vf3": {
      question: "Nhiệt lượng học là khoa học đo các nhiệt lượng trao đổi giữa các hệ.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Đúng: công trình của Black năm 1760 đánh dấu sự khởi đầu của nhiệt lượng học.",
        "Sai: nhiệt lượng học đúng là khoa học đo nhiệt lượng, không phải nhiệt độ.",
      ],
    },
    "l2-q7": {
      question: "Ta làm nóng một viên nước đá ở 0°C cho đến khi thu được nước lỏng ở 20°C. Phải tính tổng nhiệt lượng nhận được như thế nào?",
      choices: [
        "Q = m c_eau ΔT, với ΔT = 20°C và c_eau là nhiệt dung riêng của nước lỏng.",
        "Q = m L + m c_eau ΔT, với L là ẩn nhiệt riêng của sự nóng chảy, c_eau là nhiệt dung riêng của nước lỏng và ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT, với ΔT = 20°C.",
      ],
      explanations: [
        "Sai: phép tính này bỏ qua ẩn nhiệt nóng chảy, được hấp thụ ở 0°C mà nhiệt độ không đổi; đó chính là khám phá thứ hai của Black, khác với nhiệt dung.",
        "Đúng: ẩn nhiệt (nóng chảy ở nhiệt độ không đổi) và hệ thức Q = mcΔT (làm nóng trong cùng một pha) được cộng lại, nhưng mỗi phần áp dụng cho một giai đoạn riêng của quá trình.",
        "Sai: sau khi băng tan, nhiệt dung riêng của nước lỏng mới áp dụng cho sự tăng nhiệt từ 0°C đến 20°C, không phải nhiệt dung riêng của băng.",
      ],
    },
    "l2-vf4": {
      question: "Khi nước lỏng đông lại, nó giải phóng nhiệt ra môi trường.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Đúng: đông đặc là quá trình ngược với nóng chảy. Nước hoàn trả đúng lượng ẩn nhiệt đã phải cung cấp để làm tan cùng một lượng băng; điều này giải thích vì sao, chẳng hạn, nước hồ đóng băng vào mùa đông làm không khí xung quanh ấm lên đôi chút.",
        "Sai: đây đúng là một hiện tượng tỏa nhiệt, đối xứng với sự nóng chảy thu nhiệt; vẫn là cùng một ẩn nhiệt nhưng có dấu ngược lại.",
      ],
    },
    "l3-q1": {
      question: "Vách của một hệ cô lập có các tính chất nào?",
      choices: [
        "Dẫn nhiệt, di động và thấm.",
        "Cứng, đoạn nhiệt và không thấm.",
        "Cứng, dẫn nhiệt và không thấm.",
        "Di động, đoạn nhiệt và thấm.",
      ],
      explanations: [
        "Sai: ngược lại, đây là các tính chất cho phép mọi trao đổi—nhiệt, công và vật chất.",
        "Đúng: vách cứng ngăn trao đổi công, vách đoạn nhiệt ngăn trao đổi nhiệt và vách không thấm ngăn trao đổi vật chất.",
        "Sai: vách dẫn nhiệt cho nhiệt đi qua nên hệ sẽ không cô lập.",
        "Sai: vách di động và thấm cho phép công và vật chất đi qua.",
      ],
    },
    "l3-vf2": {
      question: "Vách dẫn nhiệt là vách cho phép nhiệt đi qua.",
      choices: ["Đúng", "Sai"],
      explanations: ["Đúng", "Sai"],
    },
    "l3-vf3": {
      question: "Vách đoạn nhiệt là vách cho phép nhiệt đi qua.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Sai: đó sẽ là một vách dẫn nhiệt.",
        "Đúng: đoạn nhiệt có nghĩa ngược lại là không có nhiệt nào đi qua vách; đoạn nhiệt đối lập với dẫn nhiệt.",
      ],
    },
    "l3-vf4": {
      question: "Một hệ được gọi là kín nếu các vách của nó không thấm vật chất, dù hệ vẫn có thể trao đổi nhiệt và công với môi trường.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Đúng: hệ kín chỉ có nghĩa là không trao đổi vật chất; khác với hệ cô lập, nó vẫn có thể trao đổi nhiệt và công.",
        "Sai: đây chính là định nghĩa của hệ kín, không nên nhầm với hệ cô lập, vốn còn cấm cả trao đổi nhiệt và công.",
      ],
    },
    "l3-q3": {
      question: "Trong các đại lượng sau, đại lượng nào là cường tính?",
      choices: ["Thể tích V", "Nội năng U", "Áp suất P", "Số hạt N"],
      explanations: [
        "Sai: thể tích tăng gấp đôi khi kích thước hệ tăng gấp đôi; đó là đại lượng quảng tính.",
        "Sai: nội năng là đại lượng quảng tính khi không có lực tầm xa.",
        "Đúng: áp suất không đổi khi kích thước hệ tăng gấp đôi; đó là một đại lượng nổi hiện, không có đại lượng tương ứng cho một phân tử riêng lẻ.",
        "Sai: N tăng gấp đôi cùng kích thước hệ; đó là đại lượng quảng tính.",
      ],
    },
    "l3-q5": {
      question: "Một quá trình đẳng tích diễn ra:",
      choices: ["Ở áp suất không đổi", "Không trao đổi nhiệt", "Ở nhiệt độ không đổi", "Ở thể tích không đổi"],
      explanations: [
        "Sai: đó là quá trình đẳng áp.",
        "Sai: đó là quá trình đoạn nhiệt.",
        "Sai: đó là quá trình đẳng nhiệt.",
        "Đúng: đẳng tích nghĩa là thể tích không đổi.",
      ],
    },
    "l3-vf1": {
      question: "Một hệ ở cân bằng nhiệt động nhất thiết phải đồng nhất, nghĩa là có cùng các tham số cường tính tại mọi điểm.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Sai: một cốc nước đặt trên bàn ở trạng thái cân bằng, nhưng áp suất ở mặt thoáng và ở đáy không giống nhau. Đó là định luật Pascal (thủy tĩnh học): trong một chất lưu đứng yên chịu trọng lực, áp suất tăng theo độ sâu, P(z) = P_0 + ρgh. Sự không đồng đều này không bao giờ biến mất dù chờ vô hạn; vì thế nó không do thiếu cân bằng mà do sự hiện diện của một trường lực ngoài—trọng lực.",
        "Đúng: cốc nước đặt trên bàn là ví dụ kinh điển—áp suất tăng theo độ sâu (định luật Pascal: P(z) = P_0 + ρgh) dù không có gì lưu chuyển hay biến đổi. Cân bằng nhiệt động chỉ đòi hỏi không có dòng vĩ mô—nhiệt, vật chất hoặc động lượng—giữa các điểm của hệ; nó không đòi hỏi các tham số cường tính như áp suất phải giống nhau ở mọi nơi, nhất là khi có trường ngoài như trọng lực.",
      ],
    },
    "l3-vf5": {
      question: "Một thanh kim loại có hai đầu được giữ ở nhiệt độ khác nhau cuối cùng đạt chế độ mà phân bố nhiệt độ không còn phụ thuộc thời gian. Chế độ này là một trạng thái cân bằng nhiệt động.",
      choices: ["Đúng", "Sai"],
      explanations: [
        "Sai: đây là trạng thái dừng, không phải trạng thái cân bằng. Phân bố nhiệt độ không đổi theo thời gian, nhưng một dòng nhiệt vĩ mô vẫn liên tục đi qua thanh từ đầu nóng sang đầu lạnh.",
        "Đúng: đây là trạng thái dừng, cần phân biệt với cân bằng. Định nghĩa cân bằng nhiệt động không chỉ đòi hỏi các đại lượng vĩ mô ngừng biến đổi mà còn đòi hỏi không có bất kỳ dòng vĩ mô nào; ở đây vẫn còn dòng nhiệt giữa hai đầu.",
      ],
    },
    "l4-q2": {
      question: "Tại sao ta viết δQ và δW thay vì dQ và dW?",
      choices: [
        "Vì chúng là các vi phân không đúng: tích phân của chúng phụ thuộc vào đường đi.",
        "Vì Q và W là những đại lượng quá nhỏ để có thể mô tả bằng các vi phân thông thường.",
      ],
      explanations: [
        "Đúng: Q và W phụ thuộc vào đường đi, khác với U chỉ phụ thuộc vào trạng thái đầu và cuối. Viết dQ chẳng khác nào làm sống lại thuyết chất nhiệt.",
        "Sai: ‘độ lớn’ của các đại lượng không liên quan; vấn đề là sự phụ thuộc vào đường đi.",
      ],
    },
    "l4-q2b": {
      question: "Một khí lý tưởng đi từ trạng thái cân bằng A đến trạng thái cân bằng B, hoặc được nén rồi nung nóng, hoặc được nung nóng rồi nén. Ta có thể khẳng định điều gì?",
      choices: [
        "Độ biến thiên nội năng ΔU, nhiệt Q và công W mà khí nhận được đều như nhau trong hai trường hợp.",
        "ΔU như nhau trong hai trường hợp, nhưng Q và W có thể khác nhau theo đường đi.",
        "Q như nhau trong hai trường hợp, nhưng ΔU có thể khác nhau.",
        "Không đại lượng nào trong ba đại lượng phụ thuộc vào đường đi.",
      ],
      explanations: [
        "Sai: chỉ ΔU được xác định bởi các trạng thái A và B; Q và W nói chung phụ thuộc vào đường đi.",
        "Đúng: U là một hàm trạng thái (dU là vi phân toàn phần), nên ΔU = U(B) − U(A) chỉ phụ thuộc vào trạng thái đầu và cuối. Q và W không phải là hàm trạng thái (δQ và δW không phải là vi phân toàn phần), nên chúng phụ thuộc vào đường đi; nguyên lý thứ nhất chỉ ấn định tổng Q + W = ΔU.",
        "Sai: điều ngược lại mới đúng—ΔU, chứ không phải Q, không phụ thuộc vào đường đi.",
        "Sai: ΔU không phụ thuộc vào đường đi, còn Q và W nói chung thì có.",
      ],
    },
    "l4-q3": {
      question: "Một hệ kín trải qua quá trình theo chu trình (A → A). Có thể khẳng định gì về cân bằng Q_cycle + W_cycle?",
      choices: [
        "Nó nhất thiết bằng không vì Q và W là hàm trạng thái.",
        "Nó bằng không vì U là một hàm trạng thái.",
        "Nó luôn luôn dương nghiêm ngặt đối với một động cơ nhiệt.",
      ],
      explanations: [
        "Sai: điều ngược lại mới đúng—Q và W không phải là hàm trạng thái; chúng là các truyền năng lượng, không phải đại lượng của hệ. Chỉ tổng của chúng bị buộc phải bằng không trên một chu trình thông qua ΔU_cycle = 0.",
        "Đúng: sau một chu trình, hệ trở lại trạng thái ban đầu. Vì U là hàm trạng thái nên ΔU_cycle = U(A) − U(A) = 0; do đó nguyên lý thứ nhất áp đặt Q_cycle + W_cycle = 0.",
        "Sai: chính tổng Q_cycle + W_cycle bằng không, chứ không phải từng số hạng riêng lẻ; trong một động cơ nhiệt, Q_cycle và W_cycle đều có thể khác không và trái dấu.",
      ],
    },
    "l4-q4": {
      question: "Một chất khí được nén theo cách tựa tĩnh. Có thể nói gì về công mà khí nhận được?",
      choices: [
        "Công âm: khi bị nén, khí nhất thiết truyền năng lượng cơ học cho môi trường bên ngoài đang nén nó.",
        "Công dương: khí nhận công trong quá trình nén.",
        "Công bằng không: trong quá trình tựa tĩnh, các trao đổi công triệt tiêu chính xác ở mỗi giai đoạn.",
      ],
      explanations: [
        "Sai: đây là lỗi dấu kinh điển; với dV < 0 ta có −P dV > 0, nên khí nhận công.",
        "Đúng: nén khí đòi hỏi cung cấp năng lượng cơ học cho nó; theo quy ước dấu kế toán, năng lượng đi vào hệ được tính dương.",
        "Sai: tựa tĩnh không có nghĩa là công bằng không, mà chỉ có nghĩa quá trình đi qua một chuỗi trạng thái cân bằng.",
      ],
    },
    "l4-q6": {
      question: "Trong một quá trình đẳng tích của hệ kín, ta luôn có:",
      choices: ["W = 0, nên ΔU = Q", "Q = 0, nên ΔU = W", "ΔU = 0, nên Q = −W"],
      explanations: [
        "Đúng: ở thể tích không đổi, δW = −P dV = 0; toàn bộ độ biến thiên nội năng đến từ nhiệt.",
        "Sai: đây là cân bằng của một quá trình đoạn nhiệt, không phải đẳng tích.",
        "Sai: đây là cân bằng của một quá trình đẳng nhiệt của khí lý tưởng, vì U chỉ phụ thuộc vào T.",
      ],
    },
  },

  // Arabic is rendered RTL: the hot → cold arrow of the French source is spelled
  // out in words here, since a bare "→" flips visually inside an RTL paragraph.
  ar: {
    "l1-q1": {
      question: "ما المحرك الحراري بالمعنى الترموديناميكي؟",
      choices: [
        "جهاز يحول خلال دورة كامل الحرارة التي يتلقاها من المصدر الساخن إلى شغل.",
        "جهاز يعمل في دورة على تماس مع مصدر حراري وحيد يستخرج منه شغلا.",
        "جهاز ينتج حرارة انطلاقا من شغل ميكانيكي يزوده به مشغل خارجي.",
        "جهاز دوري يحول إلى شغل جزءا من التدفق الحراري الجاري من الساخن إلى البارد.",
      ],
      explanations: [
        "خطأ: تحويل الحرارة كاملة إلى شغل خلال دورة أمر مستحيل (صياغة كلفن للقانون الثاني).",
        "خطأ: المحرك الدوري ذو المصدر الوحيد لا يمكنه تقديم أي شغل؛ وهذا بالضبط ما تقوله صياغة كلفن.",
        "خطأ: هذا وصف لمدفأة أو مضخة حرارية، لا لمحرك.",
        "صحيح: يحول المحرك جزءا من التدفق الحراري من الساخن إلى البارد، ولا يحوله كاملا أبدا.",
      ],
    },
    "l1-q2": {
      question: "لماذا يحتاج المحرك الحراري إلى فرق في درجة الحرارة بين مصدرين؟",
      choices: [
        "لأنه من دون فرق في درجة الحرارة لا يجري أي تدفق حراري، فلا يبقى شيء يحول إلى شغل.",
        "لأن الشغل الميكانيكي لا ينتج إلا من مصدر تتجاوز درجة حرارته عتبة دنيا خاصة بكل مائع عامل.",
        "لأن ضغط المائع العامل يجب أن يبقى دائما أعلى من الضغط الجوي طوال الدورة.",
      ],
      explanations: [
        "صحيح: المحرك أشبه برسم مرور يفرض على التدفق الحراري من الساخن إلى البارد؛ فلا شغل من دون تدفق. و«الوقود» الحقيقي هو تدرج درجة الحرارة.",
        "خطأ: لا وجود لأي عتبة حرارية؛ يكفي فرق ولو ضئيل (انظر محطات OTEC التي تستثمر فرقا من بضع درجات في المحيط).",
        "خطأ: المعيار ليس الضغط، بل الفرق في درجة الحرارة بين المصدرين.",
      ],
    },
    "l1-vf1": {
      question: "يمكن لمحرك حراري دوري أن يعمل وهو على تماس مع مصدر حراري وحيد فقط.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "خطأ: هذا بالضبط ما تمنعه صياغة كلفن للقانون الثاني؛ فالمحرك الدوري ذو المصدر الوحيد لا يمكنه تقديم شغل.",
        "صحيح: يلزم مصدران على الأقل بدرجتي حرارة مختلفتين.",
      ],
    },
    "l2-q1": {
      question: "ماذا تقول نظرية السيال الحراري، التي كانت سائدة في نهاية القرن الثامن عشر؟",
      choices: [
        "الحرارة شكل من أشكال الحركة المجهرية للمادة، تنتقل تدريجيا بواسطة التصادمات بين الجسيمات.",
        "الحرارة مائع مادي محفوظ، يتدفق من الساخن إلى البارد.",
        "الحرارة ودرجة الحرارة كمية فيزيائية واحدة بعينها يقيسها المحرار.",
      ],
      explanations: [
        "خطأ: هذه هي الفرضية المنافسة، المسماة ميكانيكية أو حركية (بيكون وبرنولي)، التي ثبت لاحقا أنها الصحيحة.",
        "صحيح: تصور السيال الحراري على أنه مائع عديم الوزن ومحفوظ؛ وهي نظرية خاطئة لكنها كانت مثمرة.",
        "خطأ: كان التمييز بين الحرارة ودرجة الحرارة قد ترسخ قبل نظرية السيال الحراري بفضل جوزيف بلاك (السعة الحرارية والحرارة الكامنة).",
      ],
    },
    "l2-q2": {
      question: "أي تجربة ناقضت نظرية السيال الحراري؟",
      choices: [
        "حفر المدافع الذي لاحظه رمفورد: يولد الاحتكاك حرارة بلا حد ظاهر.",
        "قياس جوزيف بلاك للحرارة الكامنة التي يمتصها الجليد عند انصهاره في درجة حرارة ثابتة.",
        "جمع كلابيرون قوانين بويل وشارل وغاي-لوساك في معادلة حالة واحدة للغاز المثالي.",
      ],
      explanations: [
        "صحيح: لو كانت الحرارة مائعا محفوظا ومحدودا لما أمكن للحفر المستمر أن يولدها إلى ما لا نهاية. واستنتج رمفورد سنة 1798 أنها مرتبطة بالحركة.",
        "خطأ: على العكس، كانت نظرية السيال الحراري تفسر الحرارة الكامنة تفسيرا جيدا، إذ يفترض أن المائع «يرتبط» بالمادة أثناء تغير الحالة.",
        "خطأ: وحد كلابيرون سنة 1834 قوانين الغازات، من دون صلة مباشرة بطبيعة الحرارة.",
      ],
    },
    "l2-vf1": {
      question: "استنتج كارنو سنة 1824 صيغة الكفاءة القصوى η = 1 - T_f/T_c.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "خطأ: أثبت كارنو وجود كفاءة قصوى عامة، لكنه لم يستنتج صيغتها؛ إذ كان ينقصه سلم درجة الحرارة المطلقة الذي أدخله كلفن سنة 1848.",
        "صحيح: أثبت وجود هذا الحد العام من دون أن يستطيع إعطاء صيغته، لعدم توافر تعريف دقيق لدرجة الحرارة.",
      ],
    },
    "l2-q4": {
      question: "في العلاقة Q = m c ΔT التي أبرزها جوزيف بلاك، ماذا يمثل المعامل c؟",
      choices: [
        "كمية الحرارة الكلية التي يتبادلها الجسم، معبرا عنها بالجول.",
        "كمية الحرارة اللازم تزويد وحدة كتلة من الجسم بها لرفع درجة حرارتها درجة واحدة.",
        "النسبة بين الشغل المقدم إلى الجسم والحرارة التي يتلقاها.",
      ],
      explanations: [
        "خطأ: Q نفسها هي الحرارة الكلية المتبادلة، لا c؛ كما أن Q تعتمد على الكتلة وعلى فرق درجة الحرارة.",
        "صحيح: إنها السعة الحرارية النوعية (أو الحرارة النوعية)، أي المعامل المميز لكل مادة الذي أبرزه بلاك.",
        "خطأ: لا صلة لهذه النسبة بالمعامل c؛ فهو لا يربط إلا الحرارة بدرجة الحرارة.",
      ],
    },
    "l2-q5": {
      question: "ما قيمة السعر الحراري التي قاسها جول، بالوحدات الحديثة؟",
      choices: ["نحو 1 J لكل سعر حراري", "نحو 4,18 J لكل سعر حراري", "نحو 100 J لكل سعر حراري", "نحو 0,24 J لكل سعر حراري"],
      explanations: [
        "خطأ: لا يصح ذلك إلا لو كان السعر الحراري والجول يقيسان الشيء نفسه من دون تحويل.",
        "صحيح: 1 cal ≈ 4,18 J؛ وهذه القيمة، التي قيست بدقة متزايدة بين 1843 و1849، هي التي أثبتت تكافؤ الحرارة والشغل.",
        "خطأ: هذه القيمة أكبر من قياس جول بنحو 24 مرة.",
        "خطأ: هذه تقريبا القيمة العكسية (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "كتب على عبوة غذائية «250 cal». فكم تساوي هذه القيمة تقريبا بالجول؟",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "خطأ: يعني ذلك الخلط بين الوحدة المبينة والجول.",
        "صحيح: السعر الغذائي هو في الواقع 1 kcal، ويرمز إليه عادة بـ Cal بحرف كبير. ومن ثم 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "خطأ: يعني ذلك نسيان أن السعر الغذائي يعادل في الواقع كيلو سعرة حرارية.",
        "خطأ: يعني ذلك الخلط بين السعر الغذائي والكيلوجول.",
      ],
    },
    "l2-vf3": {
      question: "المسعرية هي علم قياس كميات الحرارة المتبادلة بين الأنظمة.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "صحيح: بدأ بلاك علم المسعرية سنة 1760.",
        "خطأ: المسعرية هي بالفعل علم قياس الحرارة، لا درجة الحرارة.",
      ],
    },
    "l2-q7": {
      question: "نسخن مكعبا من الجليد عند 0°C حتى نحصل على ماء سائل عند 20°C. كيف نحسب الحرارة الكلية التي تلقاها حسابا صحيحا؟",
      choices: [
        "Q = m c_eau ΔT، حيث ΔT = 20°C وc_eau السعة الحرارية النوعية للماء السائل.",
        "Q = m L + m c_eau ΔT، حيث L الحرارة الكامنة النوعية للانصهار، وc_eau السعة الحرارية النوعية للماء السائل، وΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT، حيث ΔT = 20°C.",
      ],
      explanations: [
        "خطأ: يهمل هذا الحساب الحرارة الكامنة للانصهار التي تمتص عند 0°C من دون تغير في درجة الحرارة؛ وهذا تحديدا هو اكتشاف بلاك الثاني المتميز عن السعة الحرارية.",
        "صحيح: تجمع الحرارة الكامنة (الانصهار عند درجة حرارة ثابتة) والعلاقة Q = mcΔT (التسخين من دون تغير في الطور)، لكن كل منهما يطبق على مرحلة مختلفة من العملية.",
        "خطأ: بعد انصهار الجليد تطبق السعة الحرارية للماء السائل على تسخينه من 0°C إلى 20°C، لا السعة الحرارية للجليد.",
      ],
    },
    "l2-vf4": {
      question: "عندما يتجمد الماء السائل، يحرر حرارة إلى الوسط الخارجي.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "صحيح: التجمد هو عكس الانصهار. يعيد الماء بالضبط الحرارة الكامنة التي لزم تزويده بها لصهر الكمية نفسها من الجليد؛ وهذا يفسر مثلا لماذا يسخن ماء بحيرة متجمدة في الشتاء الهواء المحيط قليلا.",
        "خطأ: التجمد بالفعل ظاهرة طاردة للحرارة، متناظرة مع الانصهار الماص للحرارة؛ إنها الحرارة الكامنة نفسها لكن بإشارة معكوسة.",
      ],
    },
    "l3-q1": {
      question: "النظام المعزول هو نظام تكون جدرانه:",
      choices: [
        "نافذة للحرارة ومتحركة ونافذة للمادة.",
        "صلبة وكظومة وغير نافذة للمادة.",
        "صلبة ونافذة للحرارة وغير نافذة للمادة.",
        "متحركة وكظومة ونافذة للمادة.",
      ],
      explanations: [
        "خطأ: هذه، على العكس، هي الخصائص التي تسمح بجميع المبادلات: الحرارة والشغل والمادة.",
        "صحيح: يمنع الجدار الصلب تبادل الشغل، ويمنع الجدار الكظوم تبادل الحرارة، ويمنع الجدار غير النافذ تبادل المادة.",
        "خطأ: تسمح الجدران النافذة للحرارة بمرور الحرارة، فلا يكون النظام معزولا.",
        "خطأ: تسمح الجدران المتحركة والنافذة للمادة بانتقال الشغل والمادة.",
      ],
    },
    "l3-vf2": {
      question: "الجدار النافذ للحرارة يعني أنه يسمح بمرور الحرارة.",
      choices: ["صحيح", "خطأ"],
      explanations: ["صحيح", "خطأ"],
    },
    "l3-vf3": {
      question: "الجدار الكظوم يعني أنه يسمح بمرور الحرارة.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "خطأ: هذا وصف لجدار نافذ للحرارة.",
        "صحيح: الكظوم يعني، على العكس، أن الحرارة لا تعبر الجدار؛ والكظوم عكس النافذ للحرارة.",
      ],
    },
    "l3-vf4": {
      question: "يسمى النظام مغلقا إذا كانت جدرانه غير نافذة للمادة، مع إمكان تبادله الحرارة والشغل مع الوسط الخارجي.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "صحيح: لا يعني مغلق إلا انعدام تبادل المادة؛ وعلى خلاف النظام المعزول، يمكن تبادل الحرارة والشغل.",
        "خطأ: هذا بالفعل تعريف النظام المغلق، ويجب عدم الخلط بينه وبين النظام المعزول الذي يمنع أيضا تبادل الحرارة والشغل.",
      ],
    },
    "l3-q3": {
      question: "أي من هذه الكميات مكثفة؟",
      choices: ["الحجم V", "الطاقة الداخلية U", "الضغط P", "عدد الجسيمات N"],
      explanations: [
        "خطأ: يتضاعف الحجم إذا ضاعفنا النظام؛ فهو كمية امتدادية.",
        "خطأ: الطاقة الداخلية كمية امتدادية (في غياب قوى بعيدة المدى).",
        "صحيح: لا يتغير الضغط إذا ضاعفنا النظام؛ فهو كمية ناشئة لا مكافئ لها في جزيء منفرد.",
        "خطأ: يتضاعف N مع النظام؛ فهو كمية امتدادية.",
      ],
    },
    "l3-q5": {
      question: "يحدث التحول المتساوي الحجم:",
      choices: ["عند ضغط ثابت", "من دون تبادل للحرارة", "عند درجة حرارة ثابتة", "عند حجم ثابت"],
      explanations: [
        "خطأ: هذا تحول متساوي الضغط.",
        "خطأ: هذا تحول كظوم.",
        "خطأ: هذا تحول متساوي الحرارة.",
        "صحيح: متساوي الحجم يعني أن الحجم ثابت.",
      ],
    },
    "l3-vf1": {
      question: "يكون النظام في حالة توازن ديناميكي حراري بالضرورة متجانسا، أي إن له المعلمات المكثفة نفسها في كل نقطة.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "خطأ: يكون كأس ماء موضوع على طاولة في حالة توازن، ومع ذلك يختلف الضغط عند سطحه عنه عند قاعه. وهذا قانون باسكال في الهيدروستاتيكا: يزداد الضغط مع العمق في مائع ساكن خاضع للجاذبية، P(z) = P_0 + ρgh. ولا تزول هذه اللاتجانسية أبدا مهما طال الانتظار؛ فهي لا تنتج من غياب التوازن، بل من وجود مجال قوة خارجي هو الجاذبية.",
        "صحيح: كأس الماء الموضوع على طاولة مثال مألوف؛ إذ يزداد ضغطه مع العمق (قانون باسكال: P(z) = P_0 + ρgh) من دون أي جريان أو تطور. لا يشترط التوازن الديناميكي الحراري إلا غياب التدفقات العيانية، كالحرارة والمادة وكمية الحركة، بين نقاط النظام؛ ولا يشترط تطابق المعلمات المكثفة كالضغط في كل مكان، ولا سيما بوجود مجال خارجي كالجاذبية.",
      ],
    },
    "l3-vf5": {
      question: "يصل قضيب معدني تثبت نهايتاه عند درجتي حرارة مختلفتين في النهاية إلى حالة لا يعود فيها توزع درجة الحرارة معتمدا على الزمن. هذه الحالة حالة توازن ديناميكي حراري.",
      choices: ["صحيح", "خطأ"],
      explanations: [
        "خطأ: هذه حالة مستقرة لا حالة توازن. صحيح أن توزع درجة الحرارة لا يعود يعتمد على الزمن، لكن تدفقا حراريا عيانيا يظل يعبر القضيب من الطرف الساخن إلى الطرف البارد.",
        "صحيح: هذه حالة مستقرة يجب تمييزها عن التوازن. لا يقتضي تعريف التوازن الديناميكي الحراري توقف تطور الكميات العيانية فحسب، بل يقتضي أيضا غياب كل تدفق عياني؛ وهنا يستمر تدفق الحرارة بين الطرفين.",
      ],
    },
    "l4-q2": {
      question: "لماذا نكتب δQ وδW بدلا من dQ وdW؟",
      choices: [
        "لأنهما تفاضلان غير تامين: فتكاملهما يتعلق بالمسار المتبع.",
        "لأن Q وW كميتان أصغر من أن توصفا بتفاضلات عادية.",
      ],
      explanations: [
        "صحيح: تتعلق Q وW بالمسار، خلافا لـU التي لا تتعلق إلا بالحالتين البدئية والنهائية. وكتابة dQ تعني إحياء نظرية السيال الحراري.",
        "خطأ: لا علاقة لـ«حجم» الكميات بالأمر؛ المسألة هي تعلقها بالمسار.",
      ],
    },
    "l4-q2b": {
      question: "ينتقل غاز مثالي من حالة التوازن A إلى حالة التوازن B، إما بضغطه ثم تسخينه، وإما بتسخينه ثم ضغطه. ماذا يمكن أن نؤكد؟",
      choices: [
        "تكون قيم تغير الطاقة الداخلية ΔU والحرارة Q والشغل W المتلقاة متساوية في الحالتين.",
        "يكون ΔU متساويا في الحالتين، لكن Q وW قد يختلفان من مسار إلى آخر.",
        "تكون Q متساوية في الحالتين، لكن ΔU قد يختلف.",
        "لا تتعلق أي من الكميات الثلاث بالمسار المتبع.",
      ],
      explanations: [
        "خطأ: لا تحدد الحالتان A وB إلا ΔU؛ أما Q وW فتتعلقان عموما بالمسار المتبع.",
        "صحيح: U دالة حالة (وdU تفاضل تام)، لذلك لا يتعلق ΔU = U(B) − U(A) إلا بالحالتين البدئية والنهائية. أما Q وW فليستا دالتي حالة (وδQ وδW ليسا تفاضلين تامين)، ولذلك تتعلقان بالمسار؛ ولا يحدد المبدأ الأول إلا مجموعهما Q + W = ΔU.",
        "خطأ: العكس هو الصحيح—فـΔU، لا Q، هي المستقلة عن المسار.",
        "خطأ: لا يتعلق ΔU بالمسار، بينما تتعلق به Q وW عموما.",
      ],
    },
    "l4-q3": {
      question: "يخضع نظام مغلق لتحول دوري (A → A). ماذا يمكن أن نقول عن الحصيلة Q_cycle + W_cycle؟",
      choices: [
        "هي منعدمة بالضرورة لأن Q وW دالتا حالة.",
        "هي منعدمة لأن U دالة حالة.",
        "هي دائما موجبة تماما بالنسبة إلى آلة حرارية محركة.",
      ],
      explanations: [
        "خطأ: العكس هو الصحيح—فـQ وW ليستا دالتي حالة؛ إنهما انتقالان للطاقة لا كميتان للنظام. ولا يلزم أن ينعدم على دورة، بفعل ΔU_cycle = 0، إلا مجموعهما.",
        "صحيح: في نهاية الدورة يعود النظام إلى حالته البدئية. وبما أن U دالة حالة فإن ΔU_cycle = U(A) − U(A) = 0؛ ومن ثم يفرض المبدأ الأول Q_cycle + W_cycle = 0.",
        "خطأ: المنعدم هو المجموع Q_cycle + W_cycle لا كل حد على حدة؛ ويمكن أن يكون كل من Q_cycle وW_cycle غير منعدم وبإشارتين متعاكستين في آلة حرارية.",
      ],
    },
    "l4-q4": {
      question: "يُضغط غاز بطريقة شبه ساكنة. ماذا يمكن أن نقول عن الشغل الذي يتلقاه الغاز؟",
      choices: [
        "هو سالب: فالغاز، حين ينضغط، يعطي بالضرورة طاقة ميكانيكية للوسط الخارجي الذي يضغطه.",
        "هو موجب: فالغاز يتلقى شغلا أثناء الضغط.",
        "هو منعدم: ففي تحول شبه ساكن تتعادل تبادلات الشغل تماما في كل مرحلة.",
      ],
      explanations: [
        "خطأ: هذا هو خطأ الإشارة الشائع؛ فعندما يكون dV < 0 يكون −P dV > 0، ولذلك يتلقى الغاز شغلا.",
        "صحيح: يتطلب ضغط الغاز تزويده بطاقة ميكانيكية؛ ووفق اصطلاح الإشارات المحاسبي تحسب الطاقة الداخلة موجبة.",
        "خطأ: لا يعني شبه السكون انعدام الشغل، بل يعني فقط أن التحول يمر بسلسلة من حالات التوازن.",
      ],
    },
    "l4-q6": {
      question: "في تحول ثابت الحجم لنظام مغلق، يكون لدينا دائما:",
      choices: ["W = 0، ومن ثم ΔU = Q", "Q = 0، ومن ثم ΔU = W", "ΔU = 0، ومن ثم Q = −W"],
      explanations: [
        "صحيح: عند ثبات الحجم يكون δW = −P dV = 0؛ ويأتي تغير الطاقة الداخلية كله من الحرارة.",
        "خطأ: هذه حصيلة تحول كظوم، لا تحول ثابت الحجم.",
        "خطأ: هذه حصيلة تحول متساوي الحرارة لغاز مثالي، لأن U لا تتعلق إلا بـT.",
      ],
    },
  },

  id: {
    "l1-q1": {
      question: "Apa itu mesin kalor dalam pengertian termodinamika?",
      choices: [
        "Alat yang, dalam satu siklus, mengubah seluruh kalor yang diterimanya dari reservoir panas menjadi kerja.",
        "Alat yang bekerja dalam siklus sambil bersentuhan dengan satu reservoir kalor saja, dan menarik kerja darinya.",
        "Alat yang menghasilkan kalor dari kerja mekanis yang dipasok oleh operator dari luar.",
        "Alat siklik yang mengubah menjadi kerja sebagian aliran kalor yang mengalir dari panas ke dingin.",
      ],
      explanations: [
        "Salah: mengubah kalor seluruhnya menjadi kerja dalam satu siklus adalah mustahil (pernyataan Kelvin untuk hukum kedua).",
        "Salah: mesin siklik dengan satu reservoir tidak dapat memberikan kerja sama sekali; itulah tepatnya pernyataan Kelvin.",
        "Salah: itu lebih menggambarkan pemanas atau pompa kalor, bukan mesin.",
        "Benar: mesin hanya mengalihkan sebagian aliran panas → dingin, tidak pernah seluruhnya.",
      ],
    },
    "l1-q2": {
      question: "Mengapa mesin kalor memerlukan perbedaan suhu antara dua reservoir?",
      choices: [
        "Karena tanpa perbedaan suhu tidak ada aliran kalor yang mengalir, sehingga tidak ada yang dapat diubah menjadi kerja.",
        "Karena kerja mekanis hanya dapat dihasilkan dari reservoir yang suhunya melampaui ambang minimum tertentu, khas bagi setiap fluida kerja.",
        "Karena tekanan fluida kerja harus selalu tetap di atas tekanan atmosfer sepanjang siklus.",
      ],
      explanations: [
        "Benar: mesin ibarat gerbang tol pada aliran kalor panas → dingin; tanpa aliran, tidak ada kerja. “Bahan bakar” yang sebenarnya adalah gradien suhu.",
        "Salah: tidak ada ambang suhu apa pun; perbedaan yang kecil pun sudah cukup (lih. pembangkit OTEC yang memanfaatkan selisih beberapa derajat di laut).",
        "Salah: kriterianya bukan tekanan, melainkan selisih suhu antara kedua reservoir.",
      ],
    },
    "l1-vf1": {
      question: "Mesin kalor siklik dapat bekerja hanya dengan bersentuhan dengan satu reservoir kalor saja.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Salah: justru inilah yang dilarang oleh pernyataan Kelvin untuk hukum kedua; mesin siklik dengan satu reservoir tidak dapat memberikan kerja.",
        "Benar: diperlukan sekurang-kurangnya dua reservoir pada suhu yang berbeda.",
      ],
    },
    "l2-q1": {
      question: "Apa yang dinyatakan oleh teori kalorik, yang dominan pada akhir abad ke-18?",
      choices: [
        "Kalor adalah bentuk gerak mikroskopis materi, yang diteruskan sedikit demi sedikit melalui tumbukan antarpartikel.",
        "Kalor adalah fluida material yang kekal dan mengalir dari panas ke dingin.",
        "Kalor dan suhu adalah satu besaran fisika yang sama, yang diukur dengan termometer.",
      ],
      explanations: [
        "Salah: ini adalah gagasan tandingan yang disebut mekanistik atau kinetik (Bacon, Bernoulli), yang kemudian terbukti benar.",
        "Benar: kalorik dipandang sebagai fluida tak berbobot dan kekal; teorinya keliru, tetapi produktif.",
        "Salah: perbedaan antara kalor dan suhu justru telah ditetapkan sebelum teori kalorik berkat Joseph Black (kapasitas kalor dan kalor laten).",
      ],
    },
    "l2-q2": {
      question: "Percobaan manakah yang bertentangan dengan teori kalorik?",
      choices: [
        "Pengeboran meriam yang diamati Rumford: gesekan menghasilkan kalor dalam jumlah yang tampaknya tidak terbatas.",
        "Pengukuran Joseph Black atas kalor laten yang diserap es ketika mencair pada suhu konstan.",
        "Penyatuan hukum Boyle, Charles, dan Gay-Lussac oleh Clapeyron menjadi satu persamaan keadaan gas ideal.",
      ],
      explanations: [
        "Benar: jika kalor merupakan fluida kekal yang jumlahnya terbatas, pengeboran terus-menerus tidak mungkin menghasilkannya tanpa henti. Pada 1798 Rumford menyimpulkan bahwa kalor berkaitan dengan gerak.",
        "Salah: sebaliknya, teori kalorik menjelaskan kalor laten dengan baik—fluida tersebut dianggap “terikat” pada materi selama perubahan wujud.",
        "Salah: pada 1834 Clapeyron menyatukan hukum-hukum gas, tanpa hubungan langsung dengan hakikat kalor.",
      ],
    },
    "l2-vf1": {
      question: "Pada 1824 Carnot menetapkan rumus efisiensi maksimum η = 1 - T_f/T_c.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Salah: Carnot membuktikan keberadaan dan keuniversalan efisiensi maksimum, tetapi bukan rumusnya; skala suhu mutlak yang diperkenalkan Kelvin pada 1848 belum tersedia.",
        "Benar: ia membuktikan adanya batas universal tersebut tanpa dapat memberikan rumusnya karena belum ada definisi suhu yang ketat.",
      ],
    },
    "l2-q4": {
      question: "Dalam hubungan Q = m c ΔT yang ditunjukkan oleh Joseph Black, apakah yang dinyatakan oleh koefisien c?",
      choices: [
        "Jumlah kalor total yang dipertukarkan benda, dinyatakan dalam joule.",
        "Jumlah kalor yang harus diberikan kepada satu satuan massa benda untuk menaikkan suhunya satu derajat.",
        "Perbandingan antara kerja yang diberikan kepada benda dan kalor yang diterimanya.",
      ],
      explanations: [
        "Salah: Q-lah yang merupakan kalor total yang dipertukarkan, bukan c; Q juga bergantung pada massa dan selisih suhu.",
        "Benar: c adalah kalor jenis, yakni koefisien khas setiap bahan yang ditunjukkan Black.",
        "Salah: perbandingan tersebut tidak berkaitan dengan c; c hanya menghubungkan kalor dengan suhu.",
      ],
    },
    "l2-q5": {
      question: "Dalam satuan modern, berapakah nilai kalori yang diukur oleh Joule?",
      choices: ["Sekitar 1 J per kalori", "Sekitar 4,18 J per kalori", "Sekitar 100 J per kalori", "Sekitar 0,24 J per kalori"],
      explanations: [
        "Salah: ini hanya benar jika kalori dan joule sudah mengukur hal yang sama tanpa konversi.",
        "Benar: 1 cal ≈ 4,18 J; nilai yang diukur dengan ketelitian yang terus meningkat antara 1843 dan 1849 inilah yang menetapkan kesetaraan antara kalor dan kerja.",
        "Salah: nilai ini sekitar 24 kali lebih besar daripada hasil pengukuran Joule.",
        "Salah: ini kira-kira nilai kebalikannya (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Sebuah kemasan makanan mencantumkan “250 cal”. Kira-kira berapa joule nilai itu?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Salah: ini berarti menyamakan satuan yang dicantumkan dengan joule.",
        "Benar: kalori makanan sebenarnya adalah 1 kcal, yang biasanya ditulis Cal dengan huruf besar. Jadi, 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Salah: ini berarti melupakan bahwa satu kalori makanan sebenarnya adalah satu kilokalori.",
        "Salah: ini berarti menyamakan kalori makanan dengan kilojoule.",
      ],
    },
    "l2-vf3": {
      question: "Kalorimetri adalah ilmu pengukuran jumlah kalor yang dipertukarkan antarsistem.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Benar: Black, 1760, menandai awal kalorimetri.",
        "Salah: kalorimetri memang ilmu pengukuran kalor, bukan suhu.",
      ],
    },
    "l2-q7": {
      question: "Sebongkah es pada 0°C dipanaskan hingga menjadi air cair pada 20°C. Bagaimana cara menghitung dengan benar kalor total yang diterimanya?",
      choices: [
        "Q = m c_eau ΔT, dengan ΔT = 20°C dan c_eau adalah kalor jenis air cair.",
        "Q = m L + m c_eau ΔT, dengan L adalah kalor laten jenis peleburan, c_eau adalah kalor jenis air cair, dan ΔT = 20°C.",
        "Q = m c_glace ΔT + m c_eau ΔT dengan ΔT = 20°C.",
      ],
      explanations: [
        "Salah: perhitungan ini melupakan kalor laten peleburan, yang diserap pada 0°C tanpa perubahan suhu; inilah tepatnya penemuan kedua Black, yang berbeda dari kalor jenis.",
        "Benar: kalor laten (peleburan pada suhu konstan) dan hubungan Q = mcΔT (pemanasan tanpa perubahan fase) dijumlahkan, tetapi masing-masing berlaku pada tahap proses yang berbeda.",
        "Salah: setelah es mencair, kalor jenis air cairlah yang berlaku untuk pemanasan dari 0°C hingga 20°C, bukan kalor jenis es.",
      ],
    },
    "l2-vf4": {
      question: "Ketika air cair membeku, air melepaskan kalor ke lingkungan.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Benar: pembekuan adalah kebalikan dari peleburan. Air melepaskan kalor laten dalam jumlah yang persis sama dengan kalor yang harus diberikan untuk mencairkan jumlah es yang sama; hal ini menjelaskan, misalnya, mengapa air danau yang membeku pada musim dingin sedikit menghangatkan udara di sekitarnya.",
        "Salah: pembekuan memang gejala eksotermik, kebalikan simetris dari peleburan yang endotermik; kalor latennya sama, hanya tandanya berlawanan.",
      ],
    },
    "l3-q1": {
      question: "Sistem terisolasi adalah sistem yang dindingnya bersifat:",
      choices: [
        "Diatermal, bergerak, dan permeabel.",
        "Kaku, adiabatik, dan impermeabel.",
        "Kaku, diatermal, dan impermeabel.",
        "Bergerak, adiabatik, dan permeabel.",
      ],
      explanations: [
        "Salah: sebaliknya, sifat-sifat ini memungkinkan semua pertukaran—kalor, kerja, dan materi.",
        "Benar: dinding kaku mencegah pertukaran kerja, dinding adiabatik mencegah pertukaran kalor, dan dinding impermeabel mencegah pertukaran materi.",
        "Salah: dinding diatermal memungkinkan perpindahan kalor; sistemnya tidak akan terisolasi.",
        "Salah: dinding bergerak dan permeabel memungkinkan pertukaran kerja dan materi.",
      ],
    },
    "l3-vf2": {
      question: "Dinding diatermal memungkinkan perpindahan kalor.",
      choices: ["Benar", "Salah"],
      explanations: ["Benar", "Salah"],
    },
    "l3-vf3": {
      question: "Dinding adiabatik memungkinkan perpindahan kalor.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Salah: itu adalah dinding diatermal.",
        "Benar: adiabatik justru berarti tidak ada kalor yang melintasi dinding; dinding adiabatik adalah kebalikan dari dinding diatermal.",
      ],
    },
    "l3-vf4": {
      question: "Sistem disebut tertutup jika dindingnya impermeabel terhadap materi, meskipun masih dapat bertukar kalor dan kerja dengan lingkungan.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Benar: tertutup hanya berarti tidak ada pertukaran materi; berbeda dengan sistem terisolasi, kalor dan kerja masih dapat dipertukarkan.",
        "Salah: ini memang definisi sistem tertutup—jangan tertukar dengan sistem terisolasi, yang juga melarang pertukaran kalor dan kerja.",
      ],
    },
    "l3-q3": {
      question: "Di antara besaran berikut, manakah yang intensif?",
      choices: ["Volume V", "Energi dalam U", "Tekanan P", "Jumlah partikel N"],
      explanations: [
        "Salah: volume menjadi dua kali lipat jika sistem digandakan; volume adalah besaran ekstensif.",
        "Salah: energi dalam adalah besaran ekstensif (tanpa adanya gaya berjangkauan jauh).",
        "Benar: tekanan tidak berubah jika sistem digandakan; tekanan adalah besaran emergen, tanpa padanan untuk satu molekul individual.",
        "Salah: N menjadi dua kali lipat bersama sistem; N adalah besaran ekstensif.",
      ],
    },
    "l3-q5": {
      question: "Proses isokhorik berlangsung:",
      choices: ["Pada tekanan konstan", "Tanpa pertukaran kalor", "Pada suhu konstan", "Pada volume konstan"],
      explanations: [
        "Salah: itu adalah proses isobarik.",
        "Salah: itu adalah proses adiabatik.",
        "Salah: itu adalah proses isotermal.",
        "Benar: isokhorik berarti volume konstan.",
      ],
    },
    "l3-vf1": {
      question: "Sistem termodinamika dalam kesetimbangan pasti homogen, dengan parameter intensif yang sama pada setiap titik.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Salah: segelas air di atas meja berada dalam kesetimbangan, tetapi tekanannya tidak sama di permukaan dan di dasar. Menurut hukum Pascal dalam hidrostatika, pada fluida diam di bawah pengaruh gravitasi, tekanan bertambah dengan kedalaman: P(z) = P_0 + ρgh. Ketidakseragaman ini tidak pernah hilang, berapa lama pun sistem dibiarkan; penyebabnya bukan ketidaksetimbangan, melainkan adanya medan gaya luar, yaitu gravitasi.",
        "Benar: segelas air di atas meja adalah contoh klasik—tekanannya bertambah dengan kedalaman (hukum Pascal: P(z) = P_0 + ρgh) tanpa adanya aliran atau perubahan apa pun. Kesetimbangan termodinamika hanya mensyaratkan tidak adanya fluks makroskopik—kalor, materi, atau momentum—antara titik-titik sistem; parameter intensif seperti tekanan tidak harus sama di semua tempat, terutama jika terdapat medan luar seperti gravitasi.",
      ],
    },
    "l3-vf5": {
      question: "Sebuah batang logam yang kedua ujungnya dijaga pada suhu berbeda akhirnya mencapai keadaan ketika profil suhunya tidak lagi bergantung pada waktu. Keadaan ini adalah keadaan kesetimbangan termodinamika.",
      choices: ["Benar", "Salah"],
      explanations: [
        "Salah: ini adalah keadaan tunak, bukan keadaan kesetimbangan. Profil suhu memang konstan terhadap waktu, tetapi fluks kalor makroskopik terus melintasi batang dari ujung panas ke ujung dingin.",
        "Benar: ini adalah keadaan tunak, yang harus dibedakan dari kesetimbangan. Definisi kesetimbangan termodinamika bukan hanya mensyaratkan besaran makroskopik berhenti berubah, melainkan juga ketiadaan semua fluks makroskopik; di sini fluks kalor tetap berlangsung di antara kedua ujung.",
      ],
    },
    "l4-q2": {
      question: "Mengapa kita menulis δQ dan δW, bukan dQ dan dW?",
      choices: [
        "Karena keduanya adalah diferensial tak eksak: integralnya bergantung pada lintasan yang ditempuh.",
        "Karena Q dan W merupakan besaran yang terlalu kecil untuk dijelaskan dengan diferensial biasa.",
      ],
      explanations: [
        "Benar: Q dan W bergantung pada lintasan, berbeda dengan U yang hanya bergantung pada keadaan awal dan akhir. Menulis dQ sama saja dengan menghidupkan kembali teori kalorik.",
        "Salah: ‘ukuran’ besaran tidak ada hubungannya; persoalannya adalah ketergantungan pada lintasan.",
      ],
    },
    "l4-q2b": {
      question: "Gas ideal berpindah dari keadaan kesetimbangan A ke keadaan kesetimbangan B, baik dengan dimampatkan lalu dipanaskan maupun dipanaskan lalu dimampatkan. Apa yang dapat dinyatakan?",
      choices: [
        "Perubahan energi dalam ΔU serta kalor Q dan kerja W yang diterima sama dalam kedua kasus.",
        "ΔU sama dalam kedua kasus, tetapi Q dan W dapat berbeda dari satu lintasan ke lintasan lain.",
        "Q sama dalam kedua kasus, tetapi ΔU dapat berbeda.",
        "Tidak satu pun dari ketiga besaran itu bergantung pada lintasan yang ditempuh.",
      ],
      explanations: [
        "Salah: hanya ΔU yang ditentukan oleh keadaan A dan B; Q dan W pada umumnya bergantung pada lintasan.",
        "Benar: U adalah fungsi keadaan (dU merupakan diferensial eksak), sehingga ΔU = U(B) − U(A) hanya bergantung pada keadaan awal dan akhir. Q dan W bukan fungsi keadaan (δQ dan δW bukan diferensial eksak), sehingga keduanya bergantung pada lintasan; hukum pertama hanya menentukan jumlahnya, Q + W = ΔU.",
        "Salah: yang benar adalah kebalikannya—ΔU, bukan Q, tidak bergantung pada lintasan.",
        "Salah: ΔU tidak bergantung pada lintasan, tetapi Q dan W pada umumnya bergantung.",
      ],
    },
    "l4-q3": {
      question: "Sebuah sistem tertutup mengalami proses siklik (A → A). Apa yang dapat dikatakan tentang neraca Q_cycle + W_cycle?",
      choices: [
        "Nilainya pasti nol karena Q dan W adalah fungsi keadaan.",
        "Nilainya nol karena U adalah fungsi keadaan.",
        "Nilainya selalu positif secara ketat untuk sebuah mesin kalor.",
      ],
      explanations: [
        "Salah: justru kebalikannya—Q dan W bukan fungsi keadaan; keduanya adalah perpindahan energi, bukan besaran sistem. Hanya jumlah keduanya yang harus nol dalam satu siklus melalui ΔU_cycle = 0.",
        "Benar: pada akhir siklus sistem kembali ke keadaan awal. Karena U adalah fungsi keadaan, ΔU_cycle = U(A) − U(A) = 0; maka hukum pertama mensyaratkan Q_cycle + W_cycle = 0.",
        "Salah: yang nol adalah jumlah Q_cycle + W_cycle, bukan setiap suku secara terpisah; pada mesin kalor, Q_cycle dan W_cycle dapat sama-sama tak nol dan bertanda berlawanan.",
      ],
    },
    "l4-q4": {
      question: "Gas dimampatkan secara kuasistatik. Apa yang dapat dikatakan tentang kerja yang diterima gas?",
      choices: [
        "Negatif: ketika dimampatkan, gas pasti memberikan energi mekanis kepada lingkungan luar yang memampatkannya.",
        "Positif: gas menerima kerja selama pemampatan.",
        "Nol: dalam proses kuasistatik, pertukaran kerja saling meniadakan secara tepat pada setiap tahap.",
      ],
      explanations: [
        "Salah: ini adalah kekeliruan tanda yang klasik; untuk dV < 0 berlaku −P dV > 0, sehingga gas menerima kerja.",
        "Benar: memampatkan gas memerlukan pemberian energi mekanis kepadanya; menurut konvensi tanda akuntansi, energi yang masuk dihitung positif.",
        "Salah: kuasistatik tidak berarti kerja nol, melainkan hanya bahwa proses melewati serangkaian keadaan kesetimbangan.",
      ],
    },
    "l4-q6": {
      question: "Dalam proses isokhorik pada sistem tertutup, selalu berlaku:",
      choices: ["W = 0, sehingga ΔU = Q", "Q = 0, sehingga ΔU = W", "ΔU = 0, sehingga Q = −W"],
      explanations: [
        "Benar: pada volume konstan, δW = −P dV = 0; seluruh perubahan energi dalam berasal dari kalor.",
        "Salah: ini adalah neraca proses adiabatik, bukan proses isokhorik.",
        "Salah: ini adalah neraca proses isotermal gas ideal, karena U hanya bergantung pada T.",
      ],
    },
  },

  tr: {
    "l1-q1": {
      question: "Termodinamik anlamda ısı makinesi nedir?",
      choices: [
        "Bir çevrim boyunca sıcak rezervuardan aldığı ısının tamamını işe dönüştüren bir aygıt.",
        "Tek bir ısı rezervuarıyla temas hâlinde çevrim yaparak çalışan ve ondan iş çeken bir aygıt.",
        "Dışarıdan bir işletmecinin sağladığı mekanik işten ısı üreten bir aygıt.",
        "Sıcaktan soğuğa akan ısı akışının bir kısmını işe dönüştüren, çevrimle çalışan bir aygıt.",
      ],
      explanations: [
        "Yanlış: bir çevrim boyunca ısıyı tamamen işe dönüştürmek imkânsızdır (ikinci yasanın Kelvin ifadesi).",
        "Yanlış: tek rezervuarlı çevrimsel bir makine hiçbir iş sağlayamaz; Kelvin ifadesi tam olarak bunu söyler.",
        "Yanlış: bu daha çok bir ısıtıcıyı ya da ısı pompasını tanımlar, bir motoru değil.",
        "Doğru: makine sıcak → soğuk akışının yalnızca bir kısmını çeker, asla tamamını değil.",
      ],
    },
    "l1-q2": {
      question: "Bir ısı makinesi neden iki rezervuar arasında bir sıcaklık farkına ihtiyaç duyar?",
      choices: [
        "Çünkü sıcaklık farkı olmadan hiçbir ısı akışı gerçekleşmez ve işe dönüştürülecek bir şey kalmaz.",
        "Çünkü mekanik iş, ancak sıcaklığı her çalışma akışkanına özgü bir asgari eşiği aşan bir rezervuardan üretilebilir.",
        "Çünkü çalışma akışkanının basıncı çevrim boyunca daima atmosfer basıncının üzerinde kalmalıdır.",
      ],
      explanations: [
        "Doğru: makine, sıcak → soğuk ısı akışından alınan bir geçiş ücreti gibidir; akış yoksa iş de yoktur. Gerçek “yakıt” sıcaklık farkıdır.",
        "Yanlış: hiçbir sıcaklık eşiği yoktur; küçük bir fark bile yeterlidir (okyanustaki birkaç derecelik farkı kullanan OTEC santrallerine bakınız).",
        "Yanlış: ölçüt basınç değildir; önemli olan iki rezervuar arasındaki sıcaklık farkıdır.",
      ],
    },
    "l1-vf1": {
      question: "Çevrimle çalışan bir ısı makinesi yalnızca tek bir ısı rezervuarıyla temas hâlinde çalışabilir.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Yanlış: ikinci yasanın Kelvin ifadesinin yasakladığı tam olarak budur; tek rezervuarlı çevrimsel bir makine iş sağlayamaz.",
        "Doğru: farklı sıcaklıklarda en az iki rezervuar gerekir.",
      ],
    },
    "l2-q1": {
      question: "XVIII. yüzyılın sonunda egemen olan kalori teorisi neyi savunur?",
      choices: [
        "Isı, maddenin mikroskopik çalkalanmasının bir biçimidir ve parçacıklar arasındaki çarpışmalarla adım adım iletilir.",
        "Isı, sıcaktan soğuğa akan, korunan maddi bir akışkandır.",
        "Isı ile sıcaklık, termometrenin ölçtüğü tek ve aynı fiziksel büyüklüktür.",
      ],
      explanations: [
        "Yanlış: bu, mekanistik ya da kinetik denen rakip görüştür (Bacon, Bernoulli) ve sonradan doğru olduğu anlaşılmıştır.",
        "Doğru: kalori, ağırlıksız ve korunan bir akışkan olarak düşünülüyordu; teori yanlıştı ama verimliydi.",
        "Yanlış: Joseph Black sayesinde ısı ile sıcaklık arasındaki ayrım, kalori teorisinden önce kurulmuştu (özgül ısı kapasitesi ve gizli ısı).",
      ],
    },
    "l2-q2": {
      question: "Hangi deney kalori teorisiyle çelişmiştir?",
      choices: [
        "Rumford'un gözlemlediği top namlusu delme işlemi: sürtünme, görünürde sınırsız miktarda ısı üretir.",
        "Joseph Black'in, buzun sabit sıcaklıkta erirken soğurduğu gizli ısıyı ölçmesi.",
        "Clapeyron'un Boyle, Charles ve Gay-Lussac yasalarını tek bir ideal gaz durum denkleminde birleştirmesi.",
      ],
      explanations: [
        "Doğru: ısı sonlu ve korunan bir akışkan olsaydı, sürekli delme işlemi onu sonsuza dek üretemezdi. Rumford 1798'de ısının hareketle ilişkili olduğu sonucuna vardı.",
        "Yanlış: tersine, gizli ısı kalori teorisiyle iyi açıklanıyordu; akışkanın hal değişimi sırasında maddeye “bağlandığı” düşünülüyordu.",
        "Yanlış: Clapeyron 1834'te gaz yasalarını birleştirdi; bunun ısının doğasıyla doğrudan ilgisi yoktur.",
      ],
    },
    "l2-vf1": {
      question: "Carnot, 1824'te η = 1 - T_f/T_c maksimum verim formülünü ortaya koymuştur.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Yanlış: Carnot maksimum verimin varlığını ve evrenselliğini kanıtladı, fakat ifadesini vermedi; Kelvin'in 1848'de ortaya koyduğu mutlak sıcaklık ölçeği henüz yoktu.",
        "Doğru: sıcaklığın kesin bir tanımı bulunmadığından formülünü veremese de bu evrensel sınırın varlığını kanıtladı.",
      ],
    },
    "l2-q4": {
      question: "Joseph Black'in ortaya koyduğu Q = m c ΔT bağıntısında c katsayısı neyi temsil eder?",
      choices: [
        "Cismin alışveriş ettiği ve joule cinsinden ifade edilen toplam ısı miktarını.",
        "Cismin birim kütlesinin sıcaklığını bir derece yükseltmek için verilmesi gereken ısı miktarını.",
        "Cisme verilen işin cismin aldığı ısıya oranını.",
      ],
      explanations: [
        "Yanlış: alışveriş edilen toplam ısı c değil, Q'dur; ayrıca Q kütleye ve sıcaklık farkına bağlıdır.",
        "Doğru: bu, Black'in her malzemeye özgü olduğunu gösterdiği katsayı, yani özgül ısı kapasitesidir (ya da özgül ısıdır).",
        "Yanlış: bu oranın c ile ilgisi yoktur; c yalnızca ısı ile sıcaklığı ilişkilendirir.",
      ],
    },
    "l2-q5": {
      question: "Joule'ün ölçtüğü kalorinin modern birimlerdeki değeri nedir?",
      choices: ["Kalori başına yaklaşık 1 J", "Kalori başına yaklaşık 4,18 J", "Kalori başına yaklaşık 100 J", "Kalori başına yaklaşık 0,24 J"],
      explanations: [
        "Yanlış: kalori ile joule herhangi bir dönüşüm gerektirmeden aynı şeyi ölçseydi bu doğru olurdu.",
        "Doğru: 1 cal ≈ 4,18 J; 1843 ile 1849 arasında giderek artan hassasiyetle ölçülen bu değer, ısı ile işin eşdeğerliğini ortaya koymuştur.",
        "Yanlış: bu değer Joule'ün ölçümünden yaklaşık 24 kat daha büyüktür.",
        "Yanlış: bu yaklaşık olarak tersidir (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Bir gıda ambalajında “250 cal” yazıyor. Bu yaklaşık kaç joule'e karşılık gelir?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Yanlış: bu, belirtilen birimi joule ile karıştırmak olurdu.",
        "Doğru: gıda kalorisi aslında 1 kcal'dir ve normalde büyük harfle Cal olarak yazılır. Dolayısıyla 250 kcal × 4,18 kJ/kcal ≈ 1046 kJ.",
        "Yanlış: bu, bir gıda kalorisinin aslında bir kilokalori olduğunu unutmak olurdu.",
        "Yanlış: bu, gıda kalorisini kilojoule ile karıştırmak olurdu.",
      ],
    },
    "l2-vf3": {
      question: "Kalorimetri, sistemler arasında alışveriş edilen ısı miktarlarını ölçme bilimidir.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Doğru: Black'in 1760'taki çalışması kalorimetrinin başlangıcıdır.",
        "Yanlış: kalorimetri gerçekten sıcaklığın değil, ısının ölçülmesi bilimidir.",
      ],
    },
    "l2-q7": {
      question: "0°C'deki bir buz parçası, 20°C'de sıvı su elde edilene kadar ısıtılıyor. Alınan toplam ısı nasıl doğru hesaplanır?",
      choices: [
        "Q = m c_eau ΔT; burada ΔT = 20°C ve c_eau sıvı suyun özgül ısı kapasitesidir.",
        "Q = m L + m c_eau ΔT; burada L erimenin spesifik gizli ısısı, c_eau sıvı suyun özgül ısı kapasitesi ve ΔT = 20°C'dir.",
        "Q = m c_glace ΔT + m c_eau ΔT; burada ΔT = 20°C'dir.",
      ],
      explanations: [
        "Yanlış: bu hesap, sıcaklık değişmeden 0°C'de soğurulan erime gizli ısısını unutur; bu, Black'in özgül ısı kapasitesinden ayrı olan ikinci keşfidir.",
        "Doğru: gizli ısı (sabit sıcaklıkta erime) ile Q = mcΔT bağıntısı (faz değişimi olmadan ısınma) toplanır, ancak her biri sürecin farklı bir aşamasına uygulanır.",
        "Yanlış: buz eridikten sonra 0°C'den 20°C'ye ısınmada buzun değil, sıvı suyun özgül ısı kapasitesi kullanılır.",
      ],
    },
    "l2-vf4": {
      question: "Sıvı su donarken çevreye ısı verir.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Doğru: donma, erimenin tersidir. Su, aynı miktardaki buzu eritmek için verilmesi gereken gizli ısının tam olarak aynısını geri verir; örneğin kışın donan bir gölün suyunun çevredeki havayı biraz ısıtmasının nedeni budur.",
        "Yanlış: donma gerçekten ekzotermik bir olaydır ve endotermik olan erimenin tersidir; aynı gizli ısı söz konusudur, yalnızca işareti terstir.",
      ],
    },
    "l3-q1": {
      question: "Yalıtılmış bir sistemin duvarları:",
      choices: [
        "Diyatermik, hareketli ve geçirgendir.",
        "Rijit, adyabatik ve geçirimsizdir.",
        "Rijit, diyatermik ve geçirimsizdir.",
        "Hareketli, adyabatik ve geçirgendir.",
      ],
      explanations: [
        "Yanlış: bunlar tam tersine bütün alışverişlere—ısı, iş ve madde alışverişlerine—izin veren özelliklerdir.",
        "Doğru: rijitlik iş alışverişini, adyabatiklik ısı alışverişini, geçirimsizlik ise madde alışverişini engeller.",
        "Yanlış: diyatermik duvarlar ısıyı geçirir; sistem yalıtılmış olmaz.",
        "Yanlış: hareketli ve geçirgen duvarlar iş ve madde alışverişine izin verir.",
      ],
    },
    "l3-vf2": {
      question: "Diyatermik bir duvar ısıyı geçirir.",
      choices: ["Doğru", "Yanlış"],
      explanations: ["Doğru", "Yanlış"],
    },
    "l3-vf3": {
      question: "Adyabatik bir duvar ısıyı geçirir.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Yanlış: bu, diyatermik bir duvar olurdu.",
        "Doğru: adyabatik, tam tersine, duvardan hiç ısı geçmediği anlamına gelir; adyabatik, diyatermiğin karşıtıdır.",
      ],
    },
    "l3-vf4": {
      question: "Duvarları maddeye karşı geçirimsiz olan, ancak çevreyle ısı ve iş alışverişi yapabilen bir sisteme kapalı sistem denir.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Doğru: kapalı yalnızca madde alışverişi olmadığı anlamına gelir; yalıtılmış sistemden farklı olarak ısı ve iş alışverişi yapılabilir.",
        "Yanlış: bu tam olarak kapalı sistemin tanımıdır; ısı ve iş alışverişlerini de engelleyen yalıtılmış sistemle karıştırılmamalıdır.",
      ],
    },
    "l3-q3": {
      question: "Bu büyüklüklerden hangisi intensiftir?",
      choices: ["Hacim V", "İç enerji U", "Basınç P", "Parçacık sayısı N"],
      explanations: [
        "Yanlış: sistem iki katına çıkarılırsa hacim de iki katına çıkar; hacim ekstensiftir.",
        "Yanlış: iç enerji ekstensiftir (uzun menzilli kuvvetlerin yokluğunda).",
        "Doğru: sistem iki katına çıkarıldığında basınç değişmez; basınç, tek bir molekül için karşılığı olmayan ortaya çıkan bir büyüklüktür.",
        "Yanlış: N sistemle birlikte iki katına çıkar; ekstensiftir.",
      ],
    },
    "l3-q5": {
      question: "İzokorik bir süreç hangi koşulda gerçekleşir?",
      choices: ["Sabit basınçta", "Isı alışverişi olmadan", "Sabit sıcaklıkta", "Sabit hacimde"],
      explanations: [
        "Yanlış: bu izobarik bir süreçtir.",
        "Yanlış: bu adyabatik bir süreçtir.",
        "Yanlış: bu izotermal bir süreçtir.",
        "Doğru: izokorik, hacmin sabit olduğu anlamına gelir.",
      ],
    },
    "l3-vf1": {
      question: "Dengedeki bir termodinamik sistem zorunlu olarak homojendir; yani her noktada aynı intensif parametrelere sahiptir.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Yanlış: masa üzerindeki bir bardak su dengededir, ancak yüzeyindeki ve dibindeki basınç aynı değildir. Hidrostatikte Pascal yasasına göre, yerçekimine maruz kalan durgun bir akışkanda basınç derinlikle artar: P(z) = P_0 + ρgh. Bu tekdüzesizlik ne kadar uzun süre beklenirse beklensin ortadan kalkmaz; sistemin dengede olmamasından değil, dış bir kuvvet alanının, yani yerçekiminin varlığından kaynaklanır.",
        "Doğru: masa üzerindeki bir bardak su klasik örnektir—hiçbir şey akmadan ya da değişmeden basıncı derinlikle artar (Pascal yasası: P(z) = P_0 + ρgh). Termodinamik denge yalnızca sistemin noktaları arasında ısı, madde veya momentum gibi makroskopik akıların bulunmamasını gerektirir; özellikle yerçekimi gibi bir dış alan varken basınç gibi intensif parametrelerin her yerde aynı olmasını gerektirmez.",
      ],
    },
    "l3-vf5": {
      question: "İki ucu farklı sıcaklıklarda tutulan metal bir çubuk, sonunda sıcaklık profilinin artık zamana bağlı olmadığı bir rejime ulaşır. Bu rejim bir termodinamik denge durumudur.",
      choices: ["Doğru", "Yanlış"],
      explanations: [
        "Yanlış: bu bir sürekli rejimdir, denge durumu değildir. Sıcaklık profili zaman içinde sabittir, fakat sıcak uçtan soğuk uca makroskopik bir ısı akısı çubuktan geçmeye devam eder.",
        "Doğru: bu, dengeden ayırt edilmesi gereken bir sürekli rejimdir. Termodinamik denge tanımı yalnızca makroskopik büyüklüklerin değişmeyi bırakmasını değil, bütün makroskopik akıların yokluğunu da gerektirir; burada iki uç arasında ısı akısı sürer.",
      ],
    },
    "l4-q2": {
      question: "Neden dQ ve dW yerine δQ ve δW yazılır?",
      choices: [
        "Çünkü bunlar tam olmayan diferansiyellerdir: integralleri izlenen yola bağlıdır.",
        "Çünkü Q ve W, sıradan diferansiyellerle betimlenemeyecek kadar küçük büyüklüklerdir.",
      ],
      explanations: [
        "Doğru: Yalnızca başlangıç ve bitiş durumlarına bağlı olan U'nun tersine Q ile W yola bağlıdır. dQ yazmak kalorik teorisini yeniden diriltmek olurdu.",
        "Yanlış: Büyüklüklerin ‘boyutu’ konuyla ilgisizdir; söz konusu olan yola bağımlılıktır.",
      ],
    },
    "l4-q2b": {
      question: "İdeal bir gaz, önce sıkıştırılıp sonra ısıtılarak ya da önce ısıtılıp sonra sıkıştırılarak A denge durumundan B denge durumuna geçiyor. Ne söylenebilir?",
      choices: [
        "İç enerji değişimi ΔU ile alınan ısı Q ve iş W her iki durumda da aynıdır.",
        "ΔU her iki durumda da aynıdır, ama Q ile W bir yoldan diğerine farklı olabilir.",
        "Q her iki durumda da aynıdır, ama ΔU farklı olabilir.",
        "Üç büyüklüğün hiçbiri izlenen yola bağlı değildir.",
      ],
      explanations: [
        "Yanlış: Yalnızca ΔU, A ve B durumlarınca belirlenir; Q ile W genel olarak izlenen yola bağlıdır.",
        "Doğru: U bir durum fonksiyonudur (dU tam diferansiyeldir), dolayısıyla ΔU = U(B) − U(A) yalnızca başlangıç ve bitiş durumlarına bağlıdır. Q ile W durum fonksiyonu değildir (δQ ile δW tam diferansiyel değildir), bu yüzden yola bağlıdır; birinci yasa yalnızca toplamlarını, Q + W = ΔU'yu belirler.",
        "Yanlış: Tersi doğrudur—yoldan bağımsız olan Q değil, ΔU'dur.",
        "Yanlış: ΔU yola bağlı değildir, ama Q ile W genel olarak bağlıdır.",
      ],
    },
    "l4-q3": {
      question: "Kapalı bir sistem çevrimsel bir dönüşüm (A → A) geçiriyor. Q_cycle + W_cycle bilançosu için ne söylenebilir?",
      choices: [
        "Mutlaka sıfırdır, çünkü Q ile W durum fonksiyonudur.",
        "U bir durum fonksiyonu olduğu için sıfırdır.",
        "Bir ısı makinesi için her zaman kesinlikle pozitiftir.",
      ],
      explanations: [
        "Yanlış: Tersi doğrudur—Q ile W durum fonksiyonu değildir; sistemin büyüklükleri değil, enerji aktarımlarıdır. ΔU_cycle = 0 aracılığıyla bir çevrimde yalnızca toplamlarının sıfır olması gerekir.",
        "Doğru: Çevrimin sonunda sistem başlangıç durumuna döner. U bir durum fonksiyonu olduğundan ΔU_cycle = U(A) − U(A) = 0'dır; bu nedenle birinci yasa Q_cycle + W_cycle = 0'ı gerektirir.",
        "Yanlış: Sıfır olan, her terim ayrı ayrı değil, Q_cycle + W_cycle toplamıdır; bir ısı makinesinde Q_cycle ile W_cycle sıfırdan farklı ve zıt işaretli olabilir.",
      ],
    },
    "l4-q4": {
      question: "Bir gaz kuazistatik olarak sıkıştırılıyor. Gazın aldığı iş için ne söylenebilir?",
      choices: [
        "Negatiftir: Gaz sıkıştırılırken onu sıkıştıran dış ortama zorunlu olarak mekanik enerji verir.",
        "Pozitiftir: Gaz sıkıştırma sırasında iş alır.",
        "Sıfırdır: Kuazistatik bir dönüşümde iş alışverişleri her aşamada birbirini tam olarak götürür.",
      ],
      explanations: [
        "Yanlış: Bu klasik işaret hatasıdır; dV < 0 iken −P dV > 0 olur, dolayısıyla gaz iş alır.",
        "Doğru: Bir gazı sıkıştırmak ona mekanik enerji vermeyi gerektirir; muhasebe işaret uzlaşımında sisteme giren enerji pozitif sayılır.",
        "Yanlış: Kuazistatik, işin sıfır olduğu anlamına gelmez; yalnızca dönüşümün bir denge durumları dizisinden geçtiğini belirtir.",
      ],
    },
    "l4-q6": {
      question: "Kapalı bir sistemin izokorik dönüşümünde her zaman:",
      choices: ["W = 0, dolayısıyla ΔU = Q", "Q = 0, dolayısıyla ΔU = W", "ΔU = 0, dolayısıyla Q = −W"],
      explanations: [
        "Doğru: Sabit hacimde δW = −P dV = 0'dır; iç enerji değişiminin tamamı ısıdan gelir.",
        "Yanlış: Bu, izokorik değil adyabatik bir dönüşümün bilançosudur.",
        "Yanlış: U yalnızca T'ye bağlı olduğundan bu, ideal gazın izotermal dönüşümünün bilançosudur.",
      ],
    },
  },
  bn: {
    "l1-q1": {
      question: "তাপগতিবিদ্যার অর্থে তাপ ইঞ্জিন কী?",
      choices: [
        "এমন একটি যন্ত্র, যা একটি চক্রে উষ্ণ উৎস থেকে পাওয়া সমস্ত তাপকে কাজে রূপান্তরিত করে।",
        "এমন একটি যন্ত্র, যা একটি মাত্র তাপ-উৎসের সংস্পর্শে চক্রাকারে চলে এবং সেখান থেকে কাজ উৎপন্ন করে।",
        "এমন একটি যন্ত্র, যা বাইরের কোনো অপারেটরের দেওয়া যান্ত্রিক কাজ থেকে তাপ উৎপন্ন করে।",
        "এমন একটি চক্রাকার যন্ত্র, যা উষ্ণ থেকে শীতলের দিকে প্রবাহিত তাপের একটি অংশকে কাজে রূপান্তরিত করে।",
      ],
      explanations: [
        "ভুল: একটি চক্রে তাপকে সম্পূর্ণভাবে কাজে রূপান্তর করা অসম্ভব (দ্বিতীয় সূত্রের কেলভিন-বিবৃতি)।",
        "ভুল: একটি মাত্র উৎসে চলা চক্রাকার ইঞ্জিন কোনো কাজ দিতে পারে না; এটিই কেলভিন-বিবৃতির বক্তব্য।",
        "ভুল: এটি বরং একটি হিটার বা তাপ-পাম্পের বর্ণনা, ইঞ্জিনের নয়।",
        "সঠিক: ইঞ্জিন উষ্ণ → শীতল তাপপ্রবাহের একটি অংশ কাজে লাগায়, কখনোই পুরোটিকে নয়।",
      ],
    },
    "l1-q2": {
      question: "একটি তাপ ইঞ্জিনের দুটি উৎসের মধ্যে তাপমাত্রার পার্থক্য কেন প্রয়োজন?",
      choices: [
        "কারণ তাপমাত্রার পার্থক্য না থাকলে তাপপ্রবাহ থাকে না, ফলে কাজে রূপান্তর করার মতো কিছুই থাকে না।",
        "কারণ যান্ত্রিক কাজ কেবল এমন উৎস থেকে উৎপন্ন করা যায় যার তাপমাত্রা কার্যকরী তরলের নিজস্ব একটি ন্যূনতম সীমার চেয়ে বেশি।",
        "কারণ পুরো চক্রে কার্যকরী তরলের চাপ বায়ুমণ্ডলীয় চাপের চেয়ে বেশি থাকতে হয়।",
      ],
      explanations: [
        "সঠিক: ইঞ্জিন উষ্ণ → শীতল তাপপ্রবাহের উপর আরোপিত একটি ‘টোল’; প্রবাহ না থাকলে কাজও নেই। তাপমাত্রার ঢালই প্রকৃত ‘জ্বালানি’।",
        "ভুল: এমন কোনো ন্যূনতম তাপমাত্রা নেই; অল্প পার্থক্যও যথেষ্ট (সমুদ্রে কয়েক ডিগ্রির পার্থক্য কাজে লাগানো OTEC কেন্দ্র দেখুন)।",
        "ভুল: চাপ এখানে নির্ণায়ক নয়; দুটি উৎসের তাপমাত্রার পার্থক্যই গুরুত্বপূর্ণ।",
      ],
    },
    "l1-vf1": {
      question: "একটি চক্রাকার তাপ ইঞ্জিন শুধু একটি তাপ-উৎসের সংস্পর্শে থেকেই চলতে পারে।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "ভুল: দ্বিতীয় সূত্রের কেলভিন-বিবৃতি ঠিক এটিই নিষিদ্ধ করে; একটি মাত্র উৎসে চলা চক্রাকার ইঞ্জিন কাজ দিতে পারে না।",
        "সঠিক: ভিন্ন তাপমাত্রার অন্তত দুটি উৎস প্রয়োজন।",
      ],
    },
    "l2-q1": {
      question: "অষ্টাদশ শতাব্দীর শেষে প্রভাবশালী ক্যালরিক তত্ত্ব কী দাবি করত?",
      choices: [
        "তাপ পদার্থের আণুবীক্ষণিক আলোড়নের একটি রূপ, যা কণার সংঘর্ষে ধাপে ধাপে সঞ্চারিত হয়।",
        "তাপ একটি সংরক্ষিত বস্তুগত তরল, যা উষ্ণ থেকে শীতলের দিকে প্রবাহিত হয়।",
        "তাপ ও তাপমাত্রা একই ভৌত রাশি, যা থার্মোমিটার দিয়ে মাপা হয়।",
      ],
      explanations: [
        "ভুল: এটি প্রতিদ্বন্দ্বী যান্ত্রিক বা গতিতাত্ত্বিক মত (বেকন, বের্নুলি), যা পরে সঠিক প্রমাণিত হয়।",
        "সঠিক: ক্যালরিককে ভারহীন ও সংরক্ষিত তরল হিসেবে ভাবা হতো—ভুল হলেও ফলপ্রসূ একটি তত্ত্ব।",
        "ভুল: জোসেফ ব্ল্যাকের কাজের মাধ্যমে ক্যালরিক তত্ত্বের আগেই তাপ ও তাপমাত্রার পার্থক্য প্রতিষ্ঠিত হয়েছিল (তাপ ধারণক্ষমতা, সুপ্ত তাপ)।",
      ],
    },
    "l2-q2": {
      question: "কোন পরীক্ষাটি ক্যালরিক তত্ত্বের বিরোধিতা করেছিল?",
      choices: [
        "রামফোর্ডের কামান ছিদ্র করার পর্যবেক্ষণ: ঘর্ষণ আপাতদৃষ্টিতে সীমাহীন তাপ উৎপন্ন করে।",
        "জোসেফ ব্ল্যাকের ধ্রুব তাপমাত্রায় বরফ গলার সময় শোষিত সুপ্ত তাপের পরিমাপ।",
        "বয়েল, চার্লস ও গে-লুসাকের সূত্রকে ক্ল্যাপেরঁর একটি আদর্শ-গ্যাস অবস্থা সমীকরণে একীভূত করা।",
      ],
      explanations: [
        "সঠিক: তাপ যদি সীমিত ও সংরক্ষিত তরল হতো, অবিরাম ছিদ্রকরণ অনির্দিষ্টকাল তাপ উৎপন্ন করতে পারত না। রামফোর্ড (১৭৯৮) সিদ্ধান্ত নেন যে তাপ গতির সঙ্গে সম্পর্কিত।",
        "ভুল: সুপ্ত তাপ বরং ক্যালরিক তত্ত্বে ভালোভাবেই ব্যাখ্যা করা হতো—দশা পরিবর্তনের সময় তরলটি পদার্থের সঙ্গে ‘যুক্ত’ হয়।",
        "ভুল: ক্ল্যাপেরঁ (১৮৩৪) গ্যাসের সূত্রগুলিকে একীভূত করেন; তাপের প্রকৃতির সঙ্গে এর সরাসরি সম্পর্ক নেই।",
      ],
    },
    "l2-vf1": {
      question: "কার্নো ১৮২৪ সালে সর্বোচ্চ দক্ষতার সূত্র η = 1 - T_f/T_c প্রতিষ্ঠা করেছিলেন।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "ভুল: কার্নো সর্বোচ্চ দক্ষতার অস্তিত্ব ও সার্বজনীনতা প্রমাণ করেছিলেন, কিন্তু তার সূত্র দেননি; ১৮৪৮ সালে কেলভিন প্রবর্তিত পরম তাপমাত্রা স্কেল তখনও অনুপস্থিত ছিল।",
        "সঠিক: তাপমাত্রার কঠোর সংজ্ঞা না থাকায় তিনি এই সার্বজনীন সীমার অস্তিত্ব প্রমাণ করলেও তার সূত্র দিতে পারেননি।",
      ],
    },
    "l2-q4": {
      question: "জোসেফ ব্ল্যাকের প্রদর্শিত Q = m c ΔT সম্পর্কে c সহগটি কী বোঝায়?",
      choices: [
        "বস্তুটির মোট বিনিময় করা তাপ, জুলে প্রকাশিত।",
        "একক ভরের বস্তুটির তাপমাত্রা এক ডিগ্রি বাড়াতে যে তাপ দিতে হয়।",
        "বস্তুটিকে দেওয়া কাজ ও তার পাওয়া তাপের অনুপাত।",
      ],
      explanations: [
        "ভুল: মোট বিনিময় করা তাপ হলো Q, c নয়; Q ভর ও তাপমাত্রার পার্থক্যের উপরও নির্ভর করে।",
        "সঠিক: এটি ভর-নির্দিষ্ট তাপ ধারণক্ষমতা (বা বিশিষ্ট তাপ), ব্ল্যাকের চিহ্নিত প্রতিটি পদার্থের নিজস্ব সহগ।",
        "ভুল: এই সম্পর্কের সঙ্গে c-এর কোনো যোগ নেই; c শুধু তাপ ও তাপমাত্রাকে যুক্ত করে।",
      ],
    },
    "l2-q5": {
      question: "আধুনিক এককে জুলের পরিমাপ অনুযায়ী এক ক্যালরির মান কত?",
      choices: ["প্রতি ক্যালরিতে প্রায় 1 J", "প্রতি ক্যালরিতে প্রায় 4.18 J", "প্রতি ক্যালরিতে প্রায় 100 J", "প্রতি ক্যালরিতে প্রায় 0.24 J"],
      explanations: [
        "ভুল: ক্যালরি ও জুল কোনো রূপান্তর ছাড়াই একই একক হলে তবেই এটি সত্য হতো।",
        "সঠিক: 1 cal ≈ 4.18 J; ১৮৪৩ থেকে ১৮৪৯ সালের মধ্যে ক্রমবর্ধমান নির্ভুলতায় মাপা এই মানই তাপ ও কাজের সমতুল্যতা প্রতিষ্ঠা করে।",
        "ভুল: জুলের পরিমাপের তুলনায় এই মান প্রায় ২৪ গুণ বেশি।",
        "ভুল: এটি মোটামুটি বিপরীত মান (1/4.18 ≈ 0.24)।",
      ],
    },
    "l2-q6": {
      question: "একটি খাদ্যের মোড়কে ‘250 cal’ লেখা আছে। এটি আনুমানিক কত জুল?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "ভুল: এতে লেখা এককটিকে জুলের সঙ্গে গুলিয়ে ফেলা হয়।",
        "সঠিক: খাদ্য-ক্যালরি আসলে 1 kcal, যা নিয়মমতো বড় হাতের Cal দিয়ে লেখা হয়। 250 kcal × 4.18 kJ/kcal ≈ 1046 kJ।",
        "ভুল: এতে ভুলে যাওয়া হয় যে একটি খাদ্য-ক্যালরি আসলে এক কিলোক্যালরি।",
        "ভুল: এতে খাদ্য-ক্যালরিকে কিলোজুলের সঙ্গে গুলিয়ে ফেলা হয়।",
      ],
    },
    "l2-vf3": {
      question: "ক্যালরিমিতি হলো তন্ত্রগুলির মধ্যে বিনিময় করা তাপের পরিমাণ মাপার বিজ্ঞান।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "সঠিক: ১৭৬০ সালে ব্ল্যাকের কাজ ক্যালরিমিতির সূচনা করে।",
        "ভুল: ক্যালরিমিতি তাপমাত্রা নয়, তাপের পরিমাণ মাপারই বিজ্ঞান।",
      ],
    },
    "l2-q7": {
      question: "0°C তাপমাত্রার একটি বরফখণ্ডকে গরম করে 20°C তাপমাত্রার তরল জল করা হলো। মোট গৃহীত তাপ কীভাবে সঠিকভাবে হিসাব করা হবে?",
      choices: [
        "Q = m c_জল ΔT, যেখানে ΔT = 20°C এবং c_জল তরল জলের ভর-নির্দিষ্ট তাপ ধারণক্ষমতা।",
        "Q = m L + m c_জল ΔT, যেখানে L গলনের ভর-নির্দিষ্ট সুপ্ত তাপ, c_জল তরল জলের ভর-নির্দিষ্ট তাপ ধারণক্ষমতা এবং ΔT = 20°C।",
        "Q = m c_বরফ ΔT + m c_জল ΔT, যেখানে ΔT = 20°C।",
      ],
      explanations: [
        "ভুল: এতে 0°C তাপমাত্রায় তাপমাত্রা না বদলে শোষিত গলনের সুপ্ত তাপ বাদ পড়ে; তাপ ধারণক্ষমতা থেকে আলাদা এটিই ব্ল্যাকের দ্বিতীয় আবিষ্কার।",
        "সঠিক: সুপ্ত তাপ (ধ্রুব তাপমাত্রায় গলন) ও Q = mcΔT সম্পর্ক (একই দশায় উত্তাপন) যোগ হয়, তবে প্রক্রিয়ার পৃথক ধাপে প্রযোজ্য।",
        "ভুল: বরফ গলে যাওয়ার পর 0°C থেকে 20°C পর্যন্ত উত্তাপনে বরফের নয়, তরল জলের তাপ ধারণক্ষমতাই প্রযোজ্য।",
      ],
    },
    "l2-vf4": {
      question: "তরল জল জমে বরফ হলে তা পরিবেশে তাপ ছাড়ে।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "সঠিক: জমাট বাঁধা গলনের বিপরীত। একই পরিমাণ বরফ গলাতে যে সুপ্ত তাপ দিতে হতো, জল ঠিক সেই তাপ ফিরিয়ে দেয়; তাই শীতে হ্রদের জল জমলে আশপাশের বায়ু সামান্য উষ্ণ হয়।",
        "ভুল: জমাট বাঁধা একটি তাপমোচী প্রপঞ্চ এবং তাপগ্রাহী গলনের বিপরীত; একই সুপ্ত তাপ কেবল বিপরীত চিহ্নে বিনিময় হয়।",
      ],
    },
    "l3-q1": {
      question: "একটি বিচ্ছিন্ন তন্ত্রের দেয়াল কেমন হয়?",
      choices: [
        "ডায়াথার্মিক, চলনশীল ও ভেদ্য।",
        "দৃঢ়, রুদ্ধতাপীয় ও অভেদ্য।",
        "দৃঢ়, ডায়াথার্মিক ও অভেদ্য।",
        "চলনশীল, রুদ্ধতাপীয় ও ভেদ্য।",
      ],
      explanations: [
        "ভুল: এগুলি বরং সব ধরনের বিনিময়—তাপ, কাজ ও পদার্থ—সম্ভব করে।",
        "সঠিক: দৃঢ়তা কাজের বিনিময়, রুদ্ধতাপীয়তা তাপের বিনিময় এবং অভেদ্যতা পদার্থের বিনিময় রোধ করে।",
        "ভুল: ডায়াথার্মিক দেয়াল তাপ যেতে দেয়; তন্ত্রটি বিচ্ছিন্ন হতো না।",
        "ভুল: চলনশীল ও ভেদ্য দেয়াল কাজ ও পদার্থের বিনিময় সম্ভব করে।",
      ],
    },
    "l3-vf2": {
      question: "ডায়াথার্মিক দেয়াল তাপ যেতে দেয়।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: ["সঠিক", "ভুল"],
    },
    "l3-vf3": {
      question: "রুদ্ধতাপীয় দেয়াল তাপ যেতে দেয়।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "ভুল: সেটি ডায়াথার্মিক দেয়াল হতো।",
        "সঠিক: রুদ্ধতাপীয় মানেই দেয়ালের মধ্য দিয়ে কোনো তাপ যায় না; এটি ডায়াথার্মিকের বিপরীত।",
      ],
    },
    "l3-vf4": {
      question: "কোনো তন্ত্রের দেয়াল পদার্থের জন্য অভেদ্য, কিন্তু তন্ত্রটি পরিবেশের সঙ্গে তাপ ও কাজ বিনিময় করতে পারে—তখন তাকে বদ্ধ তন্ত্র বলা হয়।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "সঠিক: বদ্ধ বলতে শুধু পদার্থ বিনিময় না হওয়া বোঝায়; বিচ্ছিন্ন তন্ত্রের বিপরীতে তাপ ও কাজ বিনিময় হতে পারে।",
        "ভুল: এটিই বদ্ধ তন্ত্রের সংজ্ঞা; একে বিচ্ছিন্ন তন্ত্রের সঙ্গে গুলিয়ে ফেলা যাবে না, যেখানে তাপ ও কাজের বিনিময়ও নিষিদ্ধ।",
      ],
    },
    "l3-q3": {
      question: "নিচের কোন রাশিটি নিবিড়?",
      choices: ["আয়তন V", "অভ্যন্তরীণ শক্তি U", "চাপ P", "কণার সংখ্যা N"],
      explanations: [
        "ভুল: তন্ত্রের আকার দ্বিগুণ করলে আয়তনও দ্বিগুণ হয়; এটি ব্যাপক।",
        "ভুল: দীর্ঘ-পাল্লার বল না থাকলে অভ্যন্তরীণ শক্তি ব্যাপক।",
        "সঠিক: তন্ত্রের আকার দ্বিগুণ করলেও চাপ বদলায় না; এটি একটি উদ্ভূত রাশি, যার একক অণুর ক্ষেত্রে কোনো সমতুল্য নেই।",
        "ভুল: তন্ত্রের সঙ্গে N-ও দ্বিগুণ হয়; এটি ব্যাপক।",
      ],
    },
    "l3-q5": {
      question: "সমআয়তনিক রূপান্তর কোন শর্তে ঘটে?",
      choices: ["ধ্রুব চাপে", "তাপ বিনিময় ছাড়া", "ধ্রুব তাপমাত্রায়", "ধ্রুব আয়তনে"],
      explanations: [
        "ভুল: এটি সমচাপীয় রূপান্তর।",
        "ভুল: এটি রুদ্ধতাপীয় রূপান্তর।",
        "ভুল: এটি সমোষ্ণ রূপান্তর।",
        "সঠিক: সমআয়তনিক অর্থ আয়তন ধ্রুব।",
      ],
    },
    "l3-vf1": {
      question: "সাম্যাবস্থায় থাকা তাপগতীয় তন্ত্র আবশ্যিকভাবে সমসত্ত্ব—অর্থাৎ প্রতিটি বিন্দুতে তার নিবিড় রাশিগুলি একই।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "ভুল: টেবিলের উপর রাখা এক গ্লাস জল সাম্যে থাকে, অথচ পৃষ্ঠে ও তলায় তার চাপ এক নয়। স্থিতিবিদ্যায় পাস্কালের সূত্র অনুযায়ী, মহাকর্ষাধীন স্থির তরলে গভীরতার সঙ্গে চাপ বাড়ে: P(z) = P_0 + ρgh। অনির্দিষ্টকাল অপেক্ষা করলেও এই অসমতা দূর হয় না; এটি সাম্যের অভাবের জন্য নয়, বরং মহাকর্ষের মতো বাহ্যিক বলক্ষেত্রের উপস্থিতির জন্য।",
        "সঠিক: টেবিলের উপর রাখা এক গ্লাস জল এর পরিচিত উদাহরণ—কিছু প্রবাহিত বা পরিবর্তিত না হলেও গভীরতার সঙ্গে চাপ বাড়ে (পাস্কালের সূত্র: P(z) = P_0 + ρgh)। তাপগতীয় সাম্য শুধু তন্ত্রের বিন্দুগুলির মধ্যে তাপ, পদার্থ বা ভরবেগের সামষ্টিক প্রবাহের অনুপস্থিতি দাবি করে; বিশেষত মহাকর্ষের মতো বাহ্যিক ক্ষেত্র থাকলে চাপের মতো নিবিড় রাশি সর্বত্র একই হতে হবে না।",
      ],
    },
    "l3-vf5": {
      question: "একটি ধাতব দণ্ডের দুই প্রান্ত ভিন্ন তাপমাত্রায় রাখা হলে একসময় তার তাপমাত্রা-বিন্যাস আর সময়ের সঙ্গে বদলায় না। এই অবস্থা তাপগতীয় সাম্যাবস্থা।",
      choices: ["সত্য", "মিথ্যা"],
      explanations: [
        "ভুল: এটি স্থিতিশীল অবস্থা, সাম্যাবস্থা নয়। তাপমাত্রা-বিন্যাস সময়ে ধ্রুব হলেও উষ্ণ প্রান্ত থেকে শীতল প্রান্তে সামষ্টিক তাপপ্রবাহ চলতেই থাকে।",
        "সঠিক: এটি স্থিতিশীল অবস্থা, যাকে সাম্য থেকে আলাদা করতে হয়। তাপগতীয় সাম্যের সংজ্ঞায় শুধু সামষ্টিক রাশির পরিবর্তন থামাই নয়, সব সামষ্টিক প্রবাহের অনুপস্থিতিও দরকার; এখানে দুই প্রান্তের মধ্যে তাপপ্রবাহ অব্যাহত থাকে।",
      ],
    },
    "l4-q2": {
      question: "dQ ও dW না লিখে δQ ও δW লেখা হয় কেন?",
      choices: [
        "কারণ এগুলি অসম্পূর্ণ অন্তরক: এদের সমাকল পথের উপর নির্ভর করে।",
        "কারণ Q ও W এত ছোট রাশি যে সাধারণ অন্তরক দিয়ে তাদের বর্ণনা করা যায় না।",
      ],
      explanations: [
        "সঠিক: Q ও W পথের উপর নির্ভর করে, কিন্তু U শুধু প্রাথমিক ও চূড়ান্ত অবস্থার উপর নির্ভর করে। dQ লেখা ক্যালরিক তত্ত্বকে পুনরুজ্জীবিত করার সমতুল্য হতো।",
        "ভুল: রাশির ‘আকার’ এখানে অপ্রাসঙ্গিক; বিষয়টি হলো পথ-নির্ভরতা।",
      ],
    },
    "l4-q2b": {
      question: "একটি আদর্শ গ্যাস সাম্যাবস্থা A থেকে সাম্যাবস্থা B-তে যায়—একবার আগে সংকুচিত করে পরে গরম করা হয়, আরেকবার আগে গরম করে পরে সংকুচিত করা হয়। কী বলা যায়?",
      choices: [
        "অভ্যন্তরীণ শক্তির পরিবর্তন ΔU এবং গৃহীত তাপ Q ও কাজ W—তিনটিই উভয় ক্ষেত্রে একই।",
        "ΔU উভয় ক্ষেত্রে একই, কিন্তু Q ও W পথভেদে আলাদা হতে পারে।",
        "Q উভয় ক্ষেত্রে একই, কিন্তু ΔU আলাদা হতে পারে।",
        "তিনটি রাশির কোনোটিই অনুসৃত পথের উপর নির্ভর করে না।",
      ],
      explanations: [
        "ভুল: শুধু ΔU অবস্থা A ও B দ্বারা নির্ধারিত; Q ও W সাধারণত পথের উপর নির্ভর করে।",
        "সঠিক: U একটি অবস্থা অপেক্ষক (dU সম্পূর্ণ অন্তরক), তাই ΔU = U(B) − U(A) শুধু প্রাথমিক ও চূড়ান্ত অবস্থার উপর নির্ভর করে। Q ও W অবস্থা অপেক্ষক নয় (δQ ও δW সম্পূর্ণ অন্তরক নয়), তাই তারা পথের উপর নির্ভর করে; কেবল তাদের যোগফল Q + W = ΔU প্রথম সূত্র দ্বারা নির্ধারিত।",
        "ভুল: সত্যটি ঠিক উল্টো—Q নয়, ΔU পথ-নিরপেক্ষ।",
        "ভুল: ΔU পথের উপর নির্ভর করে না, কিন্তু Q ও W সাধারণত করে।",
      ],
    },
    "l4-q3": {
      question: "একটি বদ্ধ তন্ত্র চক্রাকার রূপান্তর (A → A) সম্পন্ন করে। Q_cycle + W_cycle হিসাব সম্পর্কে কী বলা যায়?",
      choices: [
        "এর মান অবশ্যই শূন্য, কারণ Q ও W অবস্থা অপেক্ষক।",
        "এর মান শূন্য, কারণ U একটি অবস্থা অপেক্ষক।",
        "ইঞ্জিন হিসেবে কাজ করা যন্ত্রের ক্ষেত্রে এটি সর্বদা কঠোরভাবে ধনাত্মক।",
      ],
      explanations: [
        "ভুল: ঠিক উল্টো—Q ও W অবস্থা অপেক্ষক নয়; এগুলি স্থানান্তর, তন্ত্রের রাশি নয়। তাই ΔU_cycle = 0-এর মাধ্যমে কেবল তাদের যোগফলই একটি চক্রে শূন্য হতে বাধ্য।",
        "সঠিক: একটি চক্র শেষে তন্ত্রটি প্রাথমিক অবস্থায় ফেরে। U অবস্থা অপেক্ষক বলে ΔU_cycle = U(A) − U(A) = 0, তাই প্রথম সূত্রে Q_cycle + W_cycle = 0।",
        "ভুল: Q_cycle + W_cycle যোগফলটি শূন্য; প্রতিটি পদ আলাদাভাবে নয়। ইঞ্জিনে Q_cycle ও W_cycle উভয়ই অশূন্য ও বিপরীত চিহ্নের হতে পারে।",
      ],
    },
    "l4-q4": {
      question: "একটি গ্যাসকে কোয়াসি-স্থিতিশীলভাবে সংকুচিত করা হয়। গ্যাসের গৃহীত কাজ সম্পর্কে কী বলা যায়?",
      choices: [
        "ঋণাত্মক: সংকুচিত হওয়ার সময় গ্যাস অবশ্যই তাকে সংকুচিত করা পরিবেশে যান্ত্রিক শক্তি দেয়।",
        "ধনাত্মক: সংকোচনের সময় গ্যাস কাজ গ্রহণ করে।",
        "শূন্য: কোয়াসি-স্থিতিশীল রূপান্তরে প্রতিটি ধাপে কাজের বিনিময় ঠিক ঠিক পরস্পরকে বাতিল করে।",
      ],
      explanations: [
        "ভুল: এটি প্রচলিত চিহ্নের ভুল; dV < 0 হলে -P dV > 0, অর্থাৎ গ্যাস কাজ গ্রহণ করে।",
        "সঠিক: গ্যাস সংকুচিত করতে তাকে যান্ত্রিক শক্তি দিতে হয়; ব্যাঙ্কারের চিহ্ন-রীতিতে যা ভেতরে আসে তা ধনাত্মক।",
        "ভুল: কোয়াসি-স্থিতিশীল মানে কাজ শূন্য নয়; শুধু রূপান্তরটি ধারাবাহিক সাম্যাবস্থার মধ্য দিয়ে যায়।",
      ],
    },
    "l4-q6": {
      question: "একটি বদ্ধ তন্ত্রের সমআয়তনিক রূপান্তরে সবসময় কোনটি সত্য?",
      choices: ["W = 0, তাই ΔU = Q", "Q = 0, তাই ΔU = W", "ΔU = 0, তাই Q = -W"],
      explanations: [
        "সঠিক: ধ্রুব আয়তনে δW = -P dV = 0; অভ্যন্তরীণ শক্তির সব পরিবর্তন তাপ থেকে আসে।",
        "ভুল: এটি রুদ্ধতাপীয় রূপান্তরের হিসাব, সমআয়তনিক রূপান্তরের নয়।",
        "ভুল: এটি আদর্শ গ্যাসের সমোষ্ণ রূপান্তরের হিসাব, কারণ U শুধু T-এর উপর নির্ভর করে।",
      ],
    },
  },
  ur: {
    "l1-q1": {
      question: "حرارتی حرکیات کے مفہوم میں حرارتی انجن کیا ہے؟",
      choices: [
        "ایسا آلہ جو ایک چکر کے دوران گرم منبع سے حاصل ہونے والی تمام حرارت کو کام میں بدل دیتا ہے۔",
        "ایسا آلہ جو صرف ایک حرارتی منبع کے رابطے میں چکر کی صورت میں چلتا اور اس سے کام حاصل کرتا ہے۔",
        "ایسا آلہ جو کسی بیرونی عامل کے فراہم کردہ میکانی کام سے حرارت پیدا کرتا ہے۔",
        "ایسا چکری آلہ جو گرم سے ٹھنڈے کی طرف جانے والے حرارتی بہاؤ کے ایک حصے کو کام میں بدلتا ہے۔",
      ],
      explanations: [
        "غلط: کسی چکر میں تمام حرارت کو کام میں بدلنا ناممکن ہے (دوسرے اصول کا کیلون بیان)۔",
        "غلط: ایک منبع والا چکری انجن کوئی کام فراہم نہیں کر سکتا؛ یہی کیلون بیان کا مفہوم ہے۔",
        "غلط: یہ انجن کے بجائے ہیٹر یا حرارتی پمپ کی وضاحت ہو گی۔",
        "درست: انجن گرم → ٹھنڈے حرارتی بہاؤ کا صرف ایک حصہ کام میں بدلتا ہے، پورا بہاؤ کبھی نہیں۔",
      ],
    },
    "l1-q2": {
      question: "حرارتی انجن کو دو منابع کے درمیان درجۂ حرارت کا فرق کیوں درکار ہے؟",
      choices: [
        "کیونکہ درجۂ حرارت کے فرق کے بغیر حرارت بہتی ہی نہیں، اس لیے کام میں بدلنے کو کچھ نہیں ہوتا۔",
        "کیونکہ میکانی کام صرف ایسے منبع سے پیدا ہو سکتا ہے جس کا درجۂ حرارت ہر عامل سیال کے مخصوص کم از کم حد سے زیادہ ہو۔",
        "کیونکہ پورے چکر میں عامل سیال کا دباؤ لازماً فضائی دباؤ سے زیادہ رہنا چاہیے۔",
      ],
      explanations: [
        "درست: انجن گرم → ٹھنڈے حرارتی بہاؤ پر ایک محصول کی مانند ہے؛ بہاؤ نہیں تو کام بھی نہیں۔ درجۂ حرارت کا میلان ہی اصل ’ایندھن‘ ہے۔",
        "غلط: درجۂ حرارت کی کوئی کم از کم حد نہیں؛ معمولی فرق بھی کافی ہے (سمندر میں چند درجوں کا فرق استعمال کرنے والے OTEC پلانٹ دیکھیے)۔",
        "غلط: دباؤ معیار نہیں؛ دونوں منابع کے درمیان درجۂ حرارت کا فرق اہم ہے۔",
      ],
    },
    "l1-vf1": {
      question: "ایک چکری حرارتی انجن صرف ایک حرارتی منبع کے رابطے میں رہ کر چل سکتا ہے۔",
      choices: ["درست", "غلط"],
      explanations: [
        "غلط: دوسرے اصول کا کیلون بیان عین اسی بات کو منع کرتا ہے؛ ایک منبع والا چکری انجن کام فراہم نہیں کر سکتا۔",
        "درست: مختلف درجۂ حرارت والے کم از کم دو منابع ضروری ہیں۔",
      ],
    },
    "l2-q1": {
      question: "اٹھارہویں صدی کے آخر میں غالب کیلورک نظریہ کیا کہتا تھا؟",
      choices: [
        "حرارت مادے کی خردبینی بےترتیب حرکت کی ایک صورت ہے، جو ذرات کے باہمی تصادم سے آگے منتقل ہوتی ہے۔",
        "حرارت ایک محفوظ مادی سیال ہے جو گرم سے ٹھنڈے کی طرف بہتا ہے۔",
        "حرارت اور درجۂ حرارت ایک ہی طبیعی مقدار ہیں جسے تھرمامیٹر ناپتا ہے۔",
      ],
      explanations: [
        "غلط: یہ حریف میکانی یا حرکیاتی نظریہ تھا (بیکن، برنولی)، جو بعد میں درست ثابت ہوا۔",
        "درست: کیلورک کو بےوزن اور محفوظ سیال سمجھا جاتا تھا—ایک غلط مگر ثمرآور نظریہ۔",
        "غلط: جوزف بلیک کی بدولت حرارت اور درجۂ حرارت کا فرق کیلورک نظریے سے پہلے ہی قائم ہو چکا تھا (حرارتی گنجائش، پوشیدہ حرارت)۔",
      ],
    },
    "l2-q2": {
      question: "کس تجربے نے کیلورک نظریے کی تردید کی؟",
      choices: [
        "رمفورڈ کا توپوں کی نالیں کھودنے کا مشاہدہ: رگڑ بظاہر لامحدود حرارت پیدا کرتی ہے۔",
        "جوزف بلیک کی مستقل درجۂ حرارت پر برف پگھلنے کے دوران جذب شدہ پوشیدہ حرارت کی پیمائش۔",
        "کلاپیرون کا بوائل، چارلس اور گے-لیوساک کے قوانین کو مثالی گیس کی ایک حالتی مساوات میں یکجا کرنا۔",
      ],
      explanations: [
        "درست: اگر حرارت ایک محدود اور محفوظ سیال ہوتی تو مسلسل کھدائی غیر معینہ مدت تک اسے پیدا نہ کر سکتی۔ رمفورڈ (1798) نے نتیجہ اخذ کیا کہ حرارت حرکت سے وابستہ ہے۔",
        "غلط: پوشیدہ حرارت کی وضاحت کیلورک نظریے میں الٹا اچھی طرح ہو جاتی تھی—مرحلہ بدلتے وقت سیال مادے کے ساتھ ’مل‘ جاتا ہے۔",
        "غلط: کلاپیرون (1834) نے گیسوں کے قوانین یکجا کیے؛ اس کا حرارت کی نوعیت سے براہِ راست تعلق نہیں۔",
      ],
    },
    "l2-vf1": {
      question: "کارنو نے 1824 میں زیادہ سے زیادہ کارکردگی کا فارمولا η = 1 - T_f/T_c قائم کیا تھا۔",
      choices: ["درست", "غلط"],
      explanations: [
        "غلط: کارنو نے زیادہ سے زیادہ کارکردگی کا وجود اور آفاقیت ثابت کی، مگر اس کا فارمولا نہیں دیا؛ 1848 میں کیلون کی متعارف کردہ مطلق درجۂ حرارت کی پیمائش ابھی موجود نہ تھی۔",
        "درست: درجۂ حرارت کی سخت تعریف نہ ہونے کے باعث وہ اس آفاقی حد کا وجود ثابت کر سکے، مگر اس کا فارمولا نہیں دے سکے۔",
      ],
    },
    "l2-q4": {
      question: "جوزف بلیک کے قائم کردہ تعلق Q = m c ΔT میں ضریب c کیا ظاہر کرتا ہے؟",
      choices: [
        "جسم کی تبادلہ کردہ کل حرارت، جسے جول میں ظاہر کیا جاتا ہے۔",
        "جسم کی اکائی کمیت کا درجۂ حرارت ایک درجہ بڑھانے کے لیے درکار حرارت۔",
        "جسم کو دیے گئے کام اور اس کی حاصل کردہ حرارت کا تناسب۔",
      ],
      explanations: [
        "غلط: کل تبادلہ شدہ حرارت Q ہے، c نہیں؛ Q کمیت اور درجۂ حرارت کے فرق پر بھی منحصر ہے۔",
        "درست: یہ مخصوص حرارتی گنجائش ہے، یعنی ہر مادے کا وہ مخصوص ضریب جسے بلیک نے نمایاں کیا۔",
        "غلط: اس تعلق کا c سے کوئی واسطہ نہیں؛ c صرف حرارت اور درجۂ حرارت کو ملاتا ہے۔",
      ],
    },
    "l2-q5": {
      question: "جدید اکائیوں میں جول کی پیمائش کے مطابق ایک کیلوری کی قدر کیا ہے؟",
      choices: ["تقریباً 1 J فی کیلوری", "تقریباً 4.18 J فی کیلوری", "تقریباً 100 J فی کیلوری", "تقریباً 0.24 J فی کیلوری"],
      explanations: [
        "غلط: یہ صرف تب درست ہوتا اگر کیلوری اور جول بغیر تبدیلی کے ایک ہی چیز ناپتے۔",
        "درست: 1 cal ≈ 4.18 J؛ 1843 سے 1849 کے درمیان بڑھتی صحت کے ساتھ ناپی گئی اسی قدر نے حرارت اور کام کی مساوات قائم کی۔",
        "غلط: یہ قدر جول کی پیمائش سے تقریباً 24 گنا زیادہ ہے۔",
        "غلط: یہ تقریباً اس کا معکوس ہے (1/4.18 ≈ 0.24)۔",
      ],
    },
    "l2-q6": {
      question: "خوراک کے ایک پیکٹ پر ’250 cal‘ لکھا ہے۔ یہ تقریباً کتنے جول کے برابر ہے؟",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "غلط: اس میں لکھی ہوئی اکائی کو جول سمجھ لیا گیا ہے۔",
        "درست: غذائی کیلوری دراصل 1 kcal ہوتی ہے اور اسے اصولاً بڑے C کے ساتھ Cal لکھتے ہیں۔ 250 kcal × 4.18 kJ/kcal ≈ 1046 kJ۔",
        "غلط: اس میں یہ بھلا دیا گیا ہے کہ ایک غذائی کیلوری دراصل ایک کلوکیلوری ہے۔",
        "غلط: اس میں غذائی کیلوری کو کلو جول سمجھ لیا گیا ہے۔",
      ],
    },
    "l2-vf3": {
      question: "کیلوری میٹری نظاموں کے درمیان تبادلہ ہونے والی حرارت کی مقدار ناپنے کی سائنس ہے۔",
      choices: ["درست", "غلط"],
      explanations: [
        "درست: 1760 میں بلیک کے کام سے کیلوری میٹری کا آغاز ہوا۔",
        "غلط: کیلوری میٹری واقعی حرارت ناپنے کی سائنس ہے، درجۂ حرارت ناپنے کی نہیں۔",
      ],
    },
    "l2-q7": {
      question: "0°C کی برف کو گرم کر کے 20°C کا مائع پانی بنایا جاتا ہے۔ حاصل کردہ کل حرارت کا درست حساب کیسے ہو گا؟",
      choices: [
        "Q = m c_پانی ΔT، جہاں ΔT = 20°C اور c_پانی مائع پانی کی مخصوص حرارتی گنجائش ہے۔",
        "Q = m L + m c_پانی ΔT، جہاں L پگھلاؤ کی مخصوص پوشیدہ حرارت، c_پانی مائع پانی کی مخصوص حرارتی گنجائش، اور ΔT = 20°C ہے۔",
        "Q = m c_برف ΔT + m c_پانی ΔT، جہاں ΔT = 20°C ہے۔",
      ],
      explanations: [
        "غلط: یہ حساب 0°C پر درجۂ حرارت بدلے بغیر جذب ہونے والی پگھلاؤ کی پوشیدہ حرارت بھول جاتا ہے؛ یہی حرارتی گنجائش سے الگ بلیک کی دوسری دریافت تھی۔",
        "درست: پوشیدہ حرارت (مستقل درجۂ حرارت پر پگھلاؤ) اور Q = mcΔT (ایک ہی مرحلے میں گرم کرنا) جمع ہوتی ہیں، مگر عمل کے الگ الگ حصوں پر لاگو ہوتی ہیں۔",
        "غلط: برف پگھلنے کے بعد 0°C سے 20°C تک گرم کرنے کے لیے برف نہیں بلکہ مائع پانی کی حرارتی گنجائش استعمال ہوتی ہے۔",
      ],
    },
    "l2-vf4": {
      question: "مائع پانی جمتے وقت حرارت ماحول کو دیتا ہے۔",
      choices: ["درست", "غلط"],
      explanations: [
        "درست: جمنا پگھلنے کا الٹ ہے۔ پانی عین اتنی پوشیدہ حرارت واپس کرتا ہے جتنی اسی مقدار کی برف پگھلانے کے لیے دینی پڑتی؛ اسی لیے سردیوں میں جھیل کا جمتا پانی آس پاس کی ہوا کو قدرے گرم کرتا ہے۔",
        "غلط: جمنا واقعی حرارت خارج کرنے والا مظہر اور حرارت جذب کرنے والے پگھلاؤ کا الٹ ہے؛ وہی پوشیدہ حرارت صرف الٹی علامت کے ساتھ شامل ہوتی ہے۔",
      ],
    },
    "l3-q1": {
      question: "ایک معزول نظام کی دیواریں کیسی ہوتی ہیں؟",
      choices: [
        "حرارت گزار، متحرک اور نفوذ پذیر۔",
        "صلب، ادیابیاتی اور ناقابلِ نفوذ۔",
        "صلب، حرارت گزار اور ناقابلِ نفوذ۔",
        "متحرک، ادیابیاتی اور نفوذ پذیر۔",
      ],
      explanations: [
        "غلط: یہ خواص الٹا تمام تبادلوں—حرارت، کام اور مادے—کی اجازت دیتے ہیں۔",
        "درست: صلب ہونا کام کے، ادیابیاتی ہونا حرارت کے، اور ناقابلِ نفوذ ہونا مادے کے تبادلے کو روکتا ہے۔",
        "غلط: حرارت گزار دیواریں حرارت گزرنے دیتی ہیں؛ نظام معزول نہ ہوتا۔",
        "غلط: متحرک اور نفوذ پذیر دیواریں کام اور مادے کے تبادلے کی اجازت دیتی ہیں۔",
      ],
    },
    "l3-vf2": {
      question: "حرارت گزار دیوار حرارت گزرنے دیتی ہے۔",
      choices: ["درست", "غلط"],
      explanations: ["درست", "غلط"],
    },
    "l3-vf3": {
      question: "ادیابیاتی دیوار حرارت گزرنے دیتی ہے۔",
      choices: ["درست", "غلط"],
      explanations: [
        "غلط: وہ حرارت گزار دیوار ہوتی۔",
        "درست: ادیابیاتی کا مطلب اس کے برعکس یہ ہے کہ دیوار سے کوئی حرارت نہیں گزرتی؛ یہ حرارت گزار کی ضد ہے۔",
      ],
    },
    "l3-vf4": {
      question: "اگر نظام کی دیواریں مادے کے لیے ناقابلِ نفوذ ہوں، مگر وہ ماحول سے حرارت اور کام کا تبادلہ کر سکے، تو اسے بند نظام کہتے ہیں۔",
      choices: ["درست", "غلط"],
      explanations: [
        "درست: بند کا مطلب صرف مادے کا تبادلہ نہ ہونا ہے؛ معزول نظام کے برعکس حرارت اور کام کا تبادلہ ہو سکتا ہے۔",
        "غلط: یہی بند نظام کی تعریف ہے؛ اسے معزول نظام سے نہ ملائیں، جو حرارت اور کام کے تبادلے بھی روکتا ہے۔",
      ],
    },
    "l3-q3": {
      question: "ان مقداروں میں کون سی شدتی ہے؟",
      choices: ["حجم V", "اندرونی توانائی U", "دباؤ P", "ذرات کی تعداد N"],
      explanations: [
        "غلط: نظام دوگنا کرنے پر حجم بھی دوگنا ہوتا ہے؛ یہ امتدادی ہے۔",
        "غلط: دور رس قوتیں نہ ہوں تو اندرونی توانائی امتدادی ہے۔",
        "درست: نظام دوگنا کرنے پر دباؤ نہیں بدلتا؛ یہ ایک ابھرتی ہوئی مقدار ہے جس کا انفرادی مالیکیول کے لیے کوئی مماثل نہیں۔",
        "غلط: N نظام کے ساتھ دوگنا ہوتا ہے؛ یہ امتدادی ہے۔",
      ],
    },
    "l3-q5": {
      question: "ہم حجمی تبدیلی کس شرط پر ہوتی ہے؟",
      choices: ["مستقل دباؤ پر", "حرارت کے تبادلے کے بغیر", "مستقل درجۂ حرارت پر", "مستقل حجم پر"],
      explanations: [
        "غلط: یہ ہم دباؤ تبدیلی ہے۔",
        "غلط: یہ ادیابیاتی تبدیلی ہے۔",
        "غلط: یہ ہم حرارت تبدیلی ہے۔",
        "درست: ہم حجمی کا مطلب حجم کا مستقل ہونا ہے۔",
      ],
    },
    "l3-vf1": {
      question: "توازن میں حرارتی حرکیاتی نظام لازماً یکساں ہوتا ہے، یعنی ہر مقام پر اس کے شدتی پیرامیٹر یکساں ہوتے ہیں۔",
      choices: ["درست", "غلط"],
      explanations: [
        "غلط: میز پر رکھا پانی کا گلاس توازن میں ہے، مگر سطح اور تہہ پر اس کا دباؤ یکساں نہیں۔ ہائڈروسٹیٹکس میں پاسکل کے قانون کے مطابق کششِ ثقل کے زیرِ اثر ساکن سیال میں دباؤ گہرائی کے ساتھ بڑھتا ہے: P(z) = P_0 + ρgh۔ کتنی ہی دیر انتظار کیا جائے یہ ناہمواری ختم نہیں ہوتی؛ اس کی وجہ عدم توازن نہیں بلکہ بیرونی قوتی میدان، یعنی کششِ ثقل، کی موجودگی ہے۔",
        "درست: میز پر رکھا پانی کا گلاس اس کی معروف مثال ہے—کسی بہاؤ یا تبدیلی کے بغیر دباؤ گہرائی کے ساتھ بڑھتا ہے (پاسکل کا قانون: P(z) = P_0 + ρgh)۔ حرارتی حرکیاتی توازن صرف نظام کے نقاط کے درمیان حرارت، مادے یا مقدارِ حرکت جیسے میکروسکوپک بہاؤ کی عدم موجودگی چاہتا ہے؛ بالخصوص کششِ ثقل جیسے بیرونی میدان میں دباؤ جیسے شدتی پیرامیٹر ہر جگہ یکساں ہونا ضروری نہیں۔",
      ],
    },
    "l3-vf5": {
      question: "ایک دھاتی سلاخ کے دونوں سروں کو مختلف درجۂ حرارت پر رکھا جائے تو آخرکار درجۂ حرارت کا پروفائل وقت کے ساتھ بدلنا بند کر دیتا ہے۔ یہ حرارتی حرکیاتی توازن کی حالت ہے۔",
      choices: ["درست", "غلط"],
      explanations: [
        "غلط: یہ مستقل حالت ہے، توازن کی حالت نہیں۔ درجۂ حرارت کا پروفائل وقت کے ساتھ مستقل ہے، مگر گرم سرے سے ٹھنڈے سرے تک میکروسکوپک حرارتی بہاؤ جاری رہتا ہے۔",
        "درست: یہ مستقل حالت ہے جسے توازن سے الگ رکھنا چاہیے۔ حرارتی حرکیاتی توازن کے لیے صرف میکروسکوپک مقداروں کا بدلنا بند ہونا کافی نہیں بلکہ تمام میکروسکوپک بہاؤ بھی غائب ہونے چاہییں؛ یہاں دونوں سروں کے درمیان حرارتی بہاؤ برقرار ہے۔",
      ],
    },
    "l4-q2": {
      question: "dQ اور dW کے بجائے δQ اور δW کیوں لکھتے ہیں؟",
      choices: [
        "کیونکہ یہ نادرست تفرقات ہیں: ان کا تکمل اختیار کردہ راستے پر منحصر ہے۔",
        "کیونکہ Q اور W اتنی چھوٹی مقداریں ہیں کہ انہیں معمول کے تفرقات سے بیان نہیں کیا جا سکتا۔",
      ],
      explanations: [
        "درست: Q اور W راستے پر منحصر ہیں، جبکہ U صرف ابتدائی اور آخری حالت پر منحصر ہے۔ dQ لکھنا کیلورک نظریے کو دوبارہ زندہ کرنے کے مترادف ہوتا۔",
        "غلط: مقداروں کے ’سائز‘ کا اس سے کوئی تعلق نہیں؛ مسئلہ راستے پر انحصار کا ہے۔",
      ],
    },
    "l4-q2b": {
      question: "ایک مثالی گیس حالتِ توازن A سے حالتِ توازن B تک جاتی ہے: پہلے دبا کر پھر گرم کی جائے، یا پہلے گرم کر کے پھر دبائی جائے۔ ہم کیا کہہ سکتے ہیں؟",
      choices: [
        "اندرونی توانائی کی تبدیلی ΔU، حاصل کردہ حرارت Q اور کام W تینوں دونوں صورتوں میں یکساں ہیں۔",
        "ΔU دونوں صورتوں میں یکساں ہے، مگر Q اور W راستے کے ساتھ بدل سکتے ہیں۔",
        "Q دونوں صورتوں میں یکساں ہے، مگر ΔU بدل سکتی ہے۔",
        "تینوں مقداروں میں سے کوئی بھی اختیار کردہ راستے پر منحصر نہیں۔",
      ],
      explanations: [
        "غلط: صرف ΔU حالتوں A اور B سے متعین ہے؛ Q اور W عموماً اختیار کردہ راستے پر منحصر ہیں۔",
        "درست: U ایک حالتی تفاعل ہے (dU درست تفرق ہے)، اس لیے ΔU = U(B) − U(A) صرف ابتدائی اور آخری حالت پر منحصر ہے۔ Q اور W حالتی تفاعل نہیں (δQ اور δW درست تفرقات نہیں)، اس لیے راستے پر منحصر ہیں؛ صرف ان کا مجموعہ Q + W = ΔU پہلے اصول سے متعین ہے۔",
        "غلط: حقیقت اس کے برعکس ہے—راستے سے آزاد مقدار ΔU ہے، Q نہیں۔",
        "غلط: ΔU راستے پر منحصر نہیں، مگر Q اور W عموماً منحصر ہوتے ہیں۔",
      ],
    },
    "l4-q3": {
      question: "ایک بند نظام چکری تبدیلی (A → A) سے گزرتا ہے۔ میزان Q_cycle + W_cycle کے بارے میں کیا کہا جا سکتا ہے؟",
      choices: [
        "یہ لازماً صفر ہے، کیونکہ Q اور W حالتی تفاعل ہیں۔",
        "یہ صفر ہے کیونکہ U حالتی تفاعل ہے۔",
        "محرک مشین کے لیے یہ ہمیشہ سختی سے مثبت ہوتا ہے۔",
      ],
      explanations: [
        "غلط: حقیقت الٹ ہے—Q اور W حالتی تفاعل نہیں؛ یہ انتقالات ہیں، نظام کی مقداریں نہیں۔ اسی لیے ΔU_cycle = 0 کے ذریعے چکر میں صرف ان کا مجموعہ صفر ہونے کا پابند ہے۔",
        "درست: چکر کے آخر میں نظام اپنی ابتدائی حالت میں لوٹتا ہے۔ U حالتی تفاعل ہے، اس لیے ΔU_cycle = U(A) − U(A) = 0، اور پہلا اصول Q_cycle + W_cycle = 0 عائد کرتا ہے۔",
        "غلط: مجموعہ Q_cycle + W_cycle صفر ہے، ہر جزو الگ الگ نہیں؛ محرک مشین میں Q_cycle اور W_cycle دونوں غیر صفر اور مخالف علامتوں کے ہو سکتے ہیں۔",
      ],
    },
    "l4-q4": {
      question: "ایک گیس کو نیم سکونی طور پر دبایا جاتا ہے۔ گیس کو ملنے والے کام کے بارے میں کیا کہا جا سکتا ہے؟",
      choices: [
        "منفی: دبنے کے دوران گیس لازماً اسے دبانے والے ماحول کو میکانی توانائی دیتی ہے۔",
        "مثبت: دباؤ کے دوران گیس کام حاصل کرتی ہے۔",
        "صفر: نیم سکونی تبدیلی میں کام کے تبادلے ہر مرحلے پر عین ایک دوسرے کو منسوخ کر دیتے ہیں۔",
      ],
      explanations: [
        "غلط: یہ علامت کی معروف غلطی ہے؛ dV < 0 کے ساتھ -P dV > 0 ہوتا ہے، یعنی گیس کام حاصل کرتی ہے۔",
        "درست: گیس دبانے کے لیے اسے میکانی توانائی دینی پڑتی ہے؛ بینکار کی علامتی روایت میں اندر آنے والی مقدار مثبت شمار ہوتی ہے۔",
        "غلط: نیم سکونی کا مطلب کام کا صفر ہونا نہیں؛ صرف یہ کہ تبدیلی حالت ہائے توازن کے سلسلے سے گزرتی ہے۔",
      ],
    },
    "l4-q6": {
      question: "بند نظام کی ہم حجمی تبدیلی میں ہمیشہ کیا ہوتا ہے؟",
      choices: ["W = 0، لہٰذا ΔU = Q", "Q = 0، لہٰذا ΔU = W", "ΔU = 0، لہٰذا Q = -W"],
      explanations: [
        "درست: مستقل حجم پر δW = -P dV = 0؛ اندرونی توانائی کی تمام تبدیلی حرارت سے آتی ہے۔",
        "غلط: یہ ادیابیاتی تبدیلی کا میزان ہے، ہم حجمی تبدیلی کا نہیں۔",
        "غلط: یہ مثالی گیس کی ہم حرارت تبدیلی کا میزان ہے، کیونکہ U صرف T پر منحصر ہے۔",
      ],
    },
  },
  sw: {
    "l1-q1": {
      question: "Injini ya joto ni nini kwa maana ya thermodynamiki?",
      choices: [
        "Kifaa ambacho, katika mzunguko mmoja, hugeuza joto lote linalopokea kutoka chanzo moto kuwa kazi.",
        "Kifaa kinachofanya kazi kwa mzunguko kikigusana na chanzo kimoja tu cha joto, ambacho hukipatia kazi.",
        "Kifaa kinachozalisha joto kutokana na kazi ya kimekanika inayotolewa na mwendeshaji wa nje.",
        "Kifaa cha mzunguko kinachogeuza kuwa kazi sehemu ya mtiririko wa joto unaotoka sehemu moto kwenda sehemu baridi.",
      ],
      explanations: [
        "Si sahihi: kugeuza joto lote kuwa kazi katika mzunguko mmoja haiwezekani (kauli ya Kelvin ya kanuni ya pili).",
        "Si sahihi: injini ya mzunguko yenye chanzo kimoja haiwezi kutoa kazi; hiyo ndiyo hasa kauli ya Kelvin.",
        "Si sahihi: hilo lingeeleza zaidi kipasha-joto au pampu ya joto, si injini.",
        "Sahihi: injini huchukua sehemu ya mtiririko wa joto kutoka moto → baridi, kamwe si mtiririko wote.",
      ],
    },
    "l1-q2": {
      question: "Kwa nini injini ya joto inahitaji tofauti ya halijoto kati ya vyanzo viwili?",
      choices: [
        "Kwa sababu pasipo tofauti ya halijoto hakuna mtiririko wa joto, hivyo hakuna kitu cha kugeuzwa kuwa kazi.",
        "Kwa sababu kazi ya kimekanika inaweza kuzalishwa tu kutoka chanzo ambacho halijoto yake inazidi kiwango fulani cha chini kinachotegemea kiowevu tendaji.",
        "Kwa sababu shinikizo la kiowevu tendaji lazima libaki juu ya shinikizo la anga katika mzunguko wote.",
      ],
      explanations: [
        "Sahihi: injini ni kama ushuru unaotozwa kwenye mtiririko wa joto kutoka moto → baridi; hakuna mtiririko, hakuna kazi. Mteremko wa halijoto ndio ‘mafuta’ halisi.",
        "Si sahihi: hakuna kiwango cha chini cha halijoto; hata tofauti ndogo inatosha (tazama mitambo ya OTEC inayotumia tofauti ya digrii chache baharini).",
        "Si sahihi: shinikizo si kigezo; muhimu ni tofauti ya halijoto kati ya vyanzo viwili.",
      ],
    },
    "l1-vf1": {
      question: "Injini ya joto inayofanya kazi kwa mzunguko inaweza kufanya kazi ikigusana na chanzo kimoja tu cha joto.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Si sahihi: kauli ya Kelvin ya kanuni ya pili inakataza jambo hili hasa; injini ya mzunguko yenye chanzo kimoja haiwezi kutoa kazi.",
        "Sahihi: vyanzo angalau viwili vyenye halijoto tofauti vinahitajika.",
      ],
    },
    "l2-q1": {
      question: "Nadharia ya kaloriki iliyotawala mwishoni mwa karne ya kumi na nane ilidai nini?",
      choices: [
        "Joto ni aina ya msukosuko wa kihadubini wa mata, unaopitishwa hatua kwa hatua kwa migongano ya chembe.",
        "Joto ni kiowevu cha kimaada kinachohifadhiwa na kutiririka kutoka sehemu moto kwenda sehemu baridi.",
        "Joto na halijoto ni sifa moja tu ya kifizikia inayopimwa kwa kipimajoto.",
      ],
      explanations: [
        "Si sahihi: hii ilikuwa nadharia pinzani ya kimekanika au kinetiki (Bacon, Bernoulli), ambayo baadaye ilithibitika kuwa sahihi.",
        "Sahihi: kaloriki ilifikiriwa kuwa kiowevu kisicho na uzito na kinachohifadhiwa—nadharia isiyo sahihi lakini yenye manufaa.",
        "Si sahihi: tofauti kati ya joto na halijoto ilikuwa tayari imeanzishwa kabla ya nadharia ya kaloriki kupitia kazi ya Joseph Black (uwezo wa joto, joto fiche).",
      ],
    },
    "l2-q2": {
      question: "Ni jaribio gani lililopingana na nadharia ya kaloriki?",
      choices: [
        "Uchunguzi wa Rumford wa uchimbaji wa mizinga: msuguano huzalisha joto linaloonekana kutokuwa na kikomo.",
        "Kipimo cha Joseph Black cha joto fiche linalofyonzwa na barafu inapoyeyuka katika halijoto isiyobadilika.",
        "Clapeyron kuunganisha sheria za Boyle, Charles na Gay-Lussac kuwa mlinganyo mmoja wa hali wa gesi bora.",
      ],
      explanations: [
        "Sahihi: kama joto lingekuwa kiowevu finyu kinachohifadhiwa, uchimbaji unaoendelea usingeweza kulizalisha bila kikomo. Rumford (1798) alihitimisha kuwa linahusiana na mwendo.",
        "Si sahihi: joto fiche lilielezwa vizuri na nadharia ya kaloriki—kiowevu kilidhaniwa ‘kuungana’ na mata wakati wa mabadiliko ya hali.",
        "Si sahihi: Clapeyron (1834) aliunganisha sheria za gesi bila kuhusiana moja kwa moja na asili ya joto.",
      ],
    },
    "l2-vf1": {
      question: "Carnot alianzisha mwaka 1824 fomula ya ufanisi wa juu zaidi η = 1 - T_f/T_c.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Si sahihi: Carnot alithibitisha kuwepo na uwiano wa jumla wa ufanisi wa juu zaidi, lakini hakutoa fomula yake; kipimo kamili cha halijoto kilichoanzishwa na Kelvin mwaka 1848 bado hakikuwepo.",
        "Sahihi: alithibitisha kuwepo kwa kikomo hiki cha jumla bila kuweza kutoa fomula yake kwa kukosa ufafanuzi madhubuti wa halijoto.",
      ],
    },
    "l2-q4": {
      question: "Katika uhusiano Q = m c ΔT ulioonyeshwa na Joseph Black, kigawo c kinawakilisha nini?",
      choices: [
        "Kiasi chote cha joto kilichobadilishwa na mwili, kikionyeshwa kwa joule.",
        "Kiasi cha joto kinachohitajika kuongeza halijoto ya kitengo kimoja cha misa ya mwili kwa digrii moja.",
        "Uwiano kati ya kazi inayotolewa kwa mwili na joto linalopokelewa nao.",
      ],
      explanations: [
        "Si sahihi: Q yenyewe ndiyo joto lote lililobadilishwa, si c; Q pia hutegemea misa na tofauti ya halijoto.",
        "Sahihi: huu ni uwezo mahususi wa joto, kigawo cha kila nyenzo ambacho Black alibainisha.",
        "Si sahihi: uhusiano huo hauhusiani na c; c huhusisha joto na halijoto pekee.",
      ],
    },
    "l2-q5": {
      question: "Katika vitengo vya kisasa, kalori moja kama ilivyopimwa na Joule ina thamani gani?",
      choices: ["Takriban 1 J kwa kalori", "Takriban 4.18 J kwa kalori", "Takriban 100 J kwa kalori", "Takriban 0.24 J kwa kalori"],
      explanations: [
        "Si sahihi: hilo lingekuwa kweli kama kalori na joule zingepima kitu kilekile bila ubadilishaji.",
        "Sahihi: 1 cal ≈ 4.18 J; thamani hii, iliyopimwa kwa usahihi unaoongezeka kati ya 1843 na 1849, ndiyo iliyoanzisha usawa kati ya joto na kazi.",
        "Si sahihi: thamani hii ni kubwa mno, kwa takriban mara 24, kuliko kipimo cha Joule.",
        "Si sahihi: hii ni takriban kinyume chake (1/4.18 ≈ 0.24).",
      ],
    },
    "l2-q6": {
      question: "Kifungashio cha chakula kinaonyesha ‘250 cal’. Hii ni sawa na joule ngapi takriban?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Si sahihi: hii ingechanganya kitengo kilichoandikwa na joule.",
        "Sahihi: kalori ya chakula kwa kweli ni 1 kcal, ambayo kwa kawaida huandikwa Cal kwa herufi kubwa. 250 kcal × 4.18 kJ/kcal ≈ 1046 kJ.",
        "Si sahihi: hii ingesahau kwamba kalori moja ya chakula kwa kweli ni kilokalori moja.",
        "Si sahihi: hii ingechanganya kalori ya chakula na kilojoule.",
      ],
    },
    "l2-vf3": {
      question: "Kalorimetria ni sayansi ya kupima kiasi cha joto kinachobadilishwa kati ya mifumo.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Sahihi: kazi ya Black ya mwaka 1760 ilikuwa mwanzo wa kalorimetria.",
        "Si sahihi: kalorimetria kwa kweli ni sayansi ya kupima joto, si halijoto.",
      ],
    },
    "l2-q7": {
      question: "Kipande cha barafu cha 0°C kinapashwa hadi kuwa maji ya kioevu ya 20°C. Joto lote linalopokelewa linahesabiwaje kwa usahihi?",
      choices: [
        "Q = m c_maji ΔT, ambapo ΔT = 20°C na c_maji ni uwezo mahususi wa joto wa maji ya kioevu.",
        "Q = m L + m c_maji ΔT, ambapo L ni joto fiche kwa kila kitengo cha misa la kuyeyuka, c_maji ni uwezo mahususi wa joto wa maji ya kioevu, na ΔT = 20°C.",
        "Q = m c_barafu ΔT + m c_maji ΔT, ambapo ΔT = 20°C.",
      ],
      explanations: [
        "Si sahihi: hesabu hii inasahau joto fiche la kuyeyuka linalofyonzwa kwa 0°C bila halijoto kubadilika; hili ndilo ugunduzi wa pili wa Black, tofauti na uwezo wa joto.",
        "Sahihi: joto fiche (kuyeyuka katika halijoto isiyobadilika) na uhusiano Q = mcΔT (kupasha bila kubadili awamu) hujumlishwa, lakini kila mmoja hutumika katika hatua tofauti ya mchakato.",
        "Si sahihi: baada ya barafu kuyeyuka, uwezo wa joto wa maji ya kioevu ndio hutumika kuyapasha kutoka 0°C hadi 20°C, si ule wa barafu.",
      ],
    },
    "l2-vf4": {
      question: "Maji ya kioevu yanapoganda, hutoa joto kwa mazingira.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Sahihi: kuganda ni kinyume cha kuyeyuka. Maji hurudisha kiasi kilekile cha joto fiche ambacho kingehitajika kuyeyusha kiasi kilekile cha barafu; ndiyo maana maji ya ziwa yanapoganda wakati wa baridi hupasha kidogo hewa inayozunguka.",
        "Si sahihi: kuganda kwa kweli ni tukio la kutoa joto, kinyume cha kuyeyuka kunakofyonza joto; joto fiche ni lilelile, ila ishara yake imegeuzwa.",
      ],
    },
    "l3-q1": {
      question: "Kuta za mfumo uliotengwa kabisa ni:",
      choices: [
        "Za diathermiki, zinazosogea na penyevu.",
        "Ngumu, za adiabatiki na zisizopenyeza.",
        "Ngumu, za diathermiki na zisizopenyeza.",
        "Zinazosogea, za adiabatiki na penyevu.",
      ],
      explanations: [
        "Si sahihi: hizi ndizo sifa zinazoruhusu ubadilishanaji wote—joto, kazi na mada.",
        "Sahihi: ugumu huzuia ubadilishanaji wa kazi, adiabatiki huzuia wa joto, na kutopenyeza huzuia wa mada.",
        "Si sahihi: kuta za diathermiki huruhusu joto kupita; mfumo usingekuwa umetengwa kabisa.",
        "Si sahihi: kuta zinazosogea na penyevu huruhusu ubadilishanaji wa kazi na mada.",
      ],
    },
    "l3-vf2": {
      question: "Ukuta wa diathermiki huruhusu joto kupita.",
      choices: ["Kweli", "Si kweli"],
      explanations: ["Sahihi", "Si sahihi"],
    },
    "l3-vf3": {
      question: "Ukuta wa adiabatiki huruhusu joto kupita.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Si sahihi: huo ungekuwa ukuta wa diathermiki.",
        "Sahihi: adiabatiki humaanisha kinyume chake kwamba hakuna joto linalovuka ukuta; ni kinyume cha diathermiki.",
      ],
    },
    "l3-vf4": {
      question: "Mfumo huitwa funge ikiwa kuta zake hazipitishi mada, ingawa unaweza kubadilishana joto na kazi na mazingira.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Sahihi: kufungwa humaanisha tu kutokuwa na ubadilishanaji wa mada; tofauti na mfumo uliotengwa kabisa, joto na kazi vinaweza kubadilishwa.",
        "Si sahihi: huu ndio ufafanuzi wa mfumo funge; usichanganywe na mfumo uliotengwa kabisa, ambao pia huzuia ubadilishanaji wa joto na kazi.",
      ],
    },
    "l3-q3": {
      question: "Ni sifa ipi kati ya hizi isiyotegemea ukubwa wa mfumo?",
      choices: ["Ujazo V", "Nishati ya ndani U", "Shinikizo P", "Idadi ya chembe N"],
      explanations: [
        "Si sahihi: ujazo huongezeka mara mbili mfumo unapoongezwa mara mbili; unategemea ukubwa.",
        "Si sahihi: nishati ya ndani hutegemea ukubwa ikiwa hakuna nguvu za masafa marefu.",
        "Sahihi: shinikizo halibadiliki mfumo unapoongezwa mara mbili; ni sifa inayoibuka isiyo na kilinganishi kwa molekuli moja.",
        "Si sahihi: N huongezeka mara mbili pamoja na mfumo; inategemea ukubwa.",
      ],
    },
    "l3-q5": {
      question: "Mabadiliko ya isokori hufanyika katika hali gani?",
      choices: ["Kwa shinikizo lisilobadilika", "Bila kubadilishana joto", "Kwa halijoto isiyobadilika", "Kwa ujazo usiobadilika"],
      explanations: [
        "Si sahihi: haya ni mabadiliko ya isobari.",
        "Si sahihi: haya ni mabadiliko ya adiabatiki.",
        "Si sahihi: haya ni mabadiliko ya isothermali.",
        "Sahihi: isokori humaanisha ujazo usiobadilika.",
      ],
    },
    "l3-vf1": {
      question: "Mfumo wa thermodynamiki ulio katika usawa lazima uwe wa namna moja, yaani uwe na vigezo vilevile visivyotegemea ukubwa katika kila sehemu.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Si sahihi: glasi ya maji mezani iko katika usawa, lakini shinikizo lake si sawa juu na chini. Kwa sheria ya Pascal katika hidrostatiki, shinikizo katika kiowevu kilichotulia chini ya mvuto huongezeka kwa kina: P(z) = P_0 + ρgh. Kutokuwa sare huku hakutoweki hata tukisubiri milele; hakutokani na ukosefu wa usawa bali na uga wa nguvu wa nje, yaani mvuto.",
        "Sahihi: glasi ya maji mezani ni mfano wa kawaida—shinikizo lake huongezeka kwa kina (sheria ya Pascal: P(z) = P_0 + ρgh) bila kitu kutiririka au kubadilika. Usawa wa thermodynamiki unahitaji tu kutokuwepo kwa mtiririko wa kimakroskopiki wa joto, mada au kiasi cha mwendo kati ya sehemu za mfumo; hasa kukiwa na uga wa nje kama mvuto, vigezo kama shinikizo si lazima vifanane kila mahali.",
      ],
    },
    "l3-vf5": {
      question: "Ncha mbili za ufito wa metali zikidumishwa katika halijoto tofauti, hatimaye hufikia hali ambapo mgawanyo wa halijoto haubadiliki tena kwa wakati. Hii ni hali ya usawa wa thermodynamiki.",
      choices: ["Kweli", "Si kweli"],
      explanations: [
        "Si sahihi: hii ni hali tuli, si hali ya usawa. Mgawanyo wa halijoto ni thabiti kwa wakati, lakini mtiririko wa joto wa kimakroskopiki unaendelea kupitia ufito kutoka ncha moto kwenda ncha baridi.",
        "Sahihi: hii ni hali tuli inayopaswa kutofautishwa na usawa. Ufafanuzi wa usawa wa thermodynamiki hautaki tu sifa za kimakroskopiki ziache kubadilika, bali pia mtiririko wote wa kimakroskopiki utoweke; hapa mtiririko wa joto kati ya ncha mbili unaendelea.",
      ],
    },
    "l4-q2": {
      question: "Kwa nini tunaandika δQ na δW badala ya dQ na dW?",
      choices: [
        "Kwa sababu ni diferenshali zisizo kamili: integrali zake hutegemea njia iliyofuatwa.",
        "Kwa sababu Q na W ni sifa ndogo mno kuweza kuelezwa kwa diferenshali za kawaida.",
      ],
      explanations: [
        "Sahihi: Q na W hutegemea njia, tofauti na U inayotegemea tu hali ya awali na ya mwisho. Kuandika dQ kungekuwa kuifufua nadharia ya kaloriki.",
        "Si sahihi: ‘ukubwa’ wa sifa hauhusiki; kinachohusika ni utegemezi kwa njia.",
      ],
    },
    "l4-q2b": {
      question: "Gesi bora hutoka hali ya usawa A hadi hali ya usawa B, ama kwa kubanwa kisha kupashwa, au kwa kupashwa kisha kubanwa. Tunaweza kusema nini?",
      choices: [
        "Mabadiliko ya nishati ya ndani ΔU, joto Q na kazi W zinazopokelewa ni sawa katika hali zote mbili.",
        "ΔU ni sawa katika hali zote mbili, lakini Q na W zinaweza kutofautiana kulingana na njia.",
        "Q ni sawa katika hali zote mbili, lakini ΔU inaweza kutofautiana.",
        "Hakuna kati ya sifa hizi tatu inayotegemea njia iliyofuatwa.",
      ],
      explanations: [
        "Si sahihi: ΔU pekee ndiyo huamuliwa na hali A na B; Q na W kwa kawaida hutegemea njia iliyofuatwa.",
        "Sahihi: U ni dhima ya hali (dU ni diferenshali kamili), kwa hiyo ΔU = U(B) − U(A) hutegemea tu hali ya awali na ya mwisho. Q na W si dhima za hali (δQ na δW si diferenshali kamili), hivyo hutegemea njia; jumla yao Q + W = ΔU pekee ndiyo huamuliwa na kanuni ya kwanza.",
        "Si sahihi: kinyume chake ndicho sahihi—ΔU ndiyo haitegemei njia, si Q.",
        "Si sahihi: ΔU haitegemei njia, lakini Q na W kwa kawaida huitegemea.",
      ],
    },
    "l4-q3": {
      question: "Mfumo funge unapitia mabadiliko ya mzunguko (A → A). Tunaweza kusema nini kuhusu mizania Q_cycle + W_cycle?",
      choices: [
        "Lazima iwe sifuri kwa sababu Q na W ni dhima za hali.",
        "Ni sifuri kwa sababu U ni dhima ya hali.",
        "Daima ni chanya kabisa kwa mashine inayozalisha kazi.",
      ],
      explanations: [
        "Si sahihi: kinyume chake—Q na W si dhima za hali; ni uhamisho, si sifa za mfumo. Ndiyo maana ni jumla yao pekee inayolazimika kuwa sifuri katika mzunguko kupitia ΔU_cycle = 0.",
        "Sahihi: baada ya mzunguko mfumo hurudia hali yake ya awali. Kwa kuwa U ni dhima ya hali, ΔU_cycle = U(A) − U(A) = 0, hivyo kanuni ya kwanza inalazimisha Q_cycle + W_cycle = 0.",
        "Si sahihi: jumla Q_cycle + W_cycle ndiyo sifuri, si kila neno peke yake; Q_cycle na W_cycle zinaweza zote kuwa si sifuri na kuwa na ishara tofauti katika mashine inayozalisha kazi.",
      ],
    },
    "l4-q4": {
      question: "Gesi inabanwa kwa mabadiliko nusutuli. Tunaweza kusema nini kuhusu kazi inayopokelewa na gesi?",
      choices: [
        "Ni hasi: inapobanwa, gesi lazima itoe nishati ya kimekanika kwa mazingira yanayoibana.",
        "Ni chanya: gesi hupokea kazi inapobanwa.",
        "Ni sifuri: katika mabadiliko nusutuli, ubadilishanaji wa kazi hufutana kikamilifu katika kila hatua.",
      ],
      explanations: [
        "Si sahihi: hili ni kosa la kawaida la ishara; ikiwa dV < 0, basi -P dV > 0: gesi hupokea kazi.",
        "Sahihi: kuibana gesi kunahitaji kuipatia nishati ya kimekanika; kwa kanuni ya ishara ya benki, kinachoingia huhesabiwa kuwa chanya.",
        "Si sahihi: nusutuli haimaanishi kazi ni sifuri, bali kwamba mabadiliko hupitia mfuatano wa hali za usawa.",
      ],
    },
    "l4-q6": {
      question: "Katika mabadiliko ya isokori ya mfumo funge, daima tuna:",
      choices: ["W = 0, kwa hiyo ΔU = Q", "Q = 0, kwa hiyo ΔU = W", "ΔU = 0, kwa hiyo Q = -W"],
      explanations: [
        "Sahihi: kwa ujazo usiobadilika, δW = -P dV = 0; mabadiliko yote ya nishati ya ndani hutokana na joto.",
        "Si sahihi: hii ni mizania ya mabadiliko ya adiabatiki, si ya isokori.",
        "Si sahihi: hii ni mizania ya mabadiliko ya isothermali ya gesi bora, kwa kuwa U hutegemea T pekee.",
      ],
    },
  },
  fa: {
    "l1-q1": {
      question: "موتور حرارتی در معنای ترمودینامیکی چیست؟",
      choices: [
        "دستگاهی که طی یک چرخه تمام گرمای دریافتی از منبع گرم را به کار تبدیل می‌کند.",
        "دستگاهی که در تماس با تنها یک منبع گرما به‌صورت چرخه‌ای کار می‌کند و از آن کار می‌گیرد.",
        "دستگاهی که از کار مکانیکی تأمین‌شده به‌وسیلهٔ عامل خارجی گرما تولید می‌کند.",
        "دستگاهی چرخه‌ای که بخشی از شار گرمای جاری از گرم به سرد را به کار تبدیل می‌کند.",
      ],
      explanations: [
        "نادرست: تبدیل کامل گرما به کار طی یک چرخه ناممکن است (بیان کلوین از قانون دوم).",
        "نادرست: موتور چرخه‌ای تک‌منبعی نمی‌تواند کاری تحویل دهد؛ این دقیقاً محتوای بیان کلوین است.",
        "نادرست: این توصیف بیشتر به گرم‌کن یا پمپ گرمایی مربوط است، نه موتور.",
        "درست: موتور بخشی از شار گرما از گرم → سرد را منحرف می‌کند، نه هرگز تمام آن را.",
      ],
    },
    "l1-q2": {
      question: "چرا موتور حرارتی به اختلاف دما میان دو منبع نیاز دارد؟",
      choices: [
        "زیرا بدون اختلاف دما هیچ شار گرمایی برقرار نمی‌شود و چیزی برای تبدیل به کار وجود ندارد.",
        "زیرا کار مکانیکی تنها از منبعی تولید می‌شود که دمایش از آستانهٔ کمینهٔ ویژهٔ هر سیال عامل بیشتر باشد.",
        "زیرا فشار سیال عامل باید در سراسر چرخه از فشار جو بیشتر بماند.",
      ],
      explanations: [
        "درست: موتور مانند عوارضی بر شار گرما از گرم → سرد است؛ بدون شار، کاری هم نیست. گرادیان دما «سوخت» واقعی است.",
        "نادرست: هیچ آستانهٔ دمایی وجود ندارد؛ حتی اختلافی اندک کافی است (نیروگاه‌های OTEC را ببینید که از اختلاف چند درجه‌ای اقیانوس بهره می‌گیرند).",
        "نادرست: فشار معیار نیست؛ اختلاف دمای دو منبع اهمیت دارد.",
      ],
    },
    "l1-vf1": {
      question: "یک موتور حرارتی چرخه‌ای می‌تواند تنها در تماس با یک منبع گرما کار کند.",
      choices: ["درست", "نادرست"],
      explanations: [
        "نادرست: بیان کلوین از قانون دوم دقیقاً این حالت را منع می‌کند؛ موتور چرخه‌ای تک‌منبعی نمی‌تواند کاری تحویل دهد.",
        "درست: دست‌کم دو منبع با دماهای متفاوت لازم‌اند.",
      ],
    },
    "l2-q1": {
      question: "نظریهٔ کالریک که در پایان سدهٔ هجدهم غالب بود چه ادعایی داشت؟",
      choices: [
        "گرما شکلی از جنب‌وجوش میکروسکوپی ماده است که با برخورد ذرات گام‌به‌گام منتقل می‌شود.",
        "گرما سیالی مادی و پایسته است که از گرم به سرد جریان می‌یابد.",
        "گرما و دما یک کمیت فیزیکی واحدند که دماسنج آن را اندازه می‌گیرد.",
      ],
      explanations: [
        "نادرست: این دیدگاه رقیب مکانیکی یا جنبشی بود (بیکن، برنولی) که بعدها درست از آب درآمد.",
        "درست: کالریک سیالی بی‌وزن و پایسته پنداشته می‌شد—نظریه‌ای نادرست اما ثمربخش.",
        "نادرست: تمایز گرما و دما پیش از نظریهٔ کالریک به‌کمک کار جوزف بلک برقرار شده بود (ظرفیت گرمایی، گرمای نهان).",
      ],
    },
    "l2-q2": {
      question: "کدام آزمایش نظریهٔ کالریک را به چالش کشید؟",
      choices: [
        "مشاهدهٔ رامفورد از سوراخ‌کاری توپ‌ها: اصطکاک ظاهراً مقدار نامحدودی گرما تولید می‌کند.",
        "اندازه‌گیری جوزف بلک از گرمای نهان جذب‌شده هنگام ذوب یخ در دمای ثابت.",
        "یکپارچه‌کردن قوانین بویل، شارل و گی-لوساک در یک معادلهٔ حالت گاز ایده‌آل به‌دست کلاپیرون.",
      ],
      explanations: [
        "درست: اگر گرما سیالی محدود و پایسته بود، سوراخ‌کاری پیوسته نمی‌توانست آن را بی‌پایان تولید کند. رامفورد (۱۷۹۸) نتیجه گرفت گرما با حرکت مرتبط است.",
        "نادرست: گرمای نهان برعکس در نظریهٔ کالریک به‌خوبی توضیح داده می‌شد—سیال هنگام تغییر حالت با ماده «ترکیب» می‌شد.",
        "نادرست: کلاپیرون (۱۸۳۴) قوانین گازها را یکپارچه کرد و این کار ارتباط مستقیمی با ماهیت گرما نداشت.",
      ],
    },
    "l2-vf1": {
      question: "کارنو در سال ۱۸۲۴ فرمول بازده بیشینهٔ η = 1 - T_f/T_c را به دست آورد.",
      choices: ["درست", "نادرست"],
      explanations: [
        "نادرست: کارنو وجود و جهان‌شمولی بازده بیشینه را اثبات کرد، اما فرمول آن را به دست نیاورد؛ مقیاس مطلق دما که کلوین در ۱۸۴۸ معرفی کرد هنوز وجود نداشت.",
        "درست: او وجود این کران جهان‌شمول را ثابت کرد، اما به‌سبب نبود تعریف دقیقی از دما نتوانست فرمول آن را بدهد.",
      ],
    },
    "l2-q4": {
      question: "در رابطهٔ Q = m c ΔT که جوزف بلک نشان داد، ضریب c نمایانگر چیست؟",
      choices: [
        "کل مقدار گرمای مبادله‌شده با جسم، برحسب ژول.",
        "مقدار گرمای لازم برای افزایش دمای یک واحد جرم جسم به‌اندازهٔ یک درجه.",
        "نسبت کار داده‌شده به جسم به گرمای دریافتی آن.",
      ],
      explanations: [
        "نادرست: Q خودِ گرمای کل مبادله‌شده است، نه c؛ Q همچنین به جرم و اختلاف دما بستگی دارد.",
        "درست: این ظرفیت گرمایی ویژه است، یعنی ضریب خاص هر ماده که بلک آن را آشکار کرد.",
        "نادرست: این نسبت ارتباطی با c ندارد؛ c تنها گرما و دما را به هم مربوط می‌کند.",
      ],
    },
    "l2-q5": {
      question: "در یکاهای امروزی، مقدار یک کالری طبق اندازه‌گیری ژول چقدر است؟",
      choices: ["حدود 1 J به‌ازای هر کالری", "حدود 4.18 J به‌ازای هر کالری", "حدود 100 J به‌ازای هر کالری", "حدود 0.24 J به‌ازای هر کالری"],
      explanations: [
        "نادرست: این تنها هنگامی درست بود که کالری و ژول بدون تبدیل یک چیز را اندازه می‌گرفتند.",
        "درست: 1 cal ≈ 4.18 J؛ همین مقدار که میان ۱۸۴۳ و ۱۸۴۹ با دقت روزافزون اندازه‌گیری شد، هم‌ارزی گرما و کار را برقرار کرد.",
        "نادرست: این مقدار در مقایسه با اندازه‌گیری ژول حدود ۲۴ برابر بیش از حد بزرگ است.",
        "نادرست: این تقریباً معکوس مقدار درست است (1/4.18 ≈ 0.24).",
      ],
    },
    "l2-q6": {
      question: "روی بسته‌بندی یک مادهٔ غذایی «250 cal» نوشته شده است. این مقدار تقریباً چند ژول است؟",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "نادرست: این پاسخ یکای نوشته‌شده را با ژول اشتباه می‌گیرد.",
        "درست: کالری غذایی در واقع 1 kcal است و معمولاً با C بزرگ به‌شکل Cal نوشته می‌شود. 250 kcal × 4.18 kJ/kcal ≈ 1046 kJ.",
        "نادرست: این پاسخ فراموش می‌کند که یک کالری غذایی در واقع یک کیلوکالری است.",
        "نادرست: این پاسخ کالری غذایی را با کیلوژول اشتباه می‌گیرد.",
      ],
    },
    "l2-vf3": {
      question: "کالریمتری علم اندازه‌گیری مقدار گرمای مبادله‌شده میان دستگاه‌ها است.",
      choices: ["درست", "نادرست"],
      explanations: [
        "درست: کار بلک در سال ۱۷۶۰ سرآغاز کالریمتری بود.",
        "نادرست: کالریمتری واقعاً علم اندازه‌گیری گرما است، نه دما.",
      ],
    },
    "l2-q7": {
      question: "تکه‌ای یخ در 0°C گرم می‌شود تا آب مایع در 20°C به دست آید. گرمای کل دریافتی را چگونه باید درست محاسبه کرد؟",
      choices: [
        "Q = m c_آب ΔT، که در آن ΔT = 20°C و c_آب ظرفیت گرمایی ویژهٔ آب مایع است.",
        "Q = m L + m c_آب ΔT، که در آن L گرمای نهان ویژهٔ ذوب، c_آب ظرفیت گرمایی ویژهٔ آب مایع و ΔT = 20°C است.",
        "Q = m c_یخ ΔT + m c_آب ΔT، که در آن ΔT = 20°C است.",
      ],
      explanations: [
        "نادرست: این محاسبه گرمای نهان ذوب را که در 0°C بدون تغییر دما جذب می‌شود نادیده می‌گیرد؛ این همان کشف دوم بلک و متمایز از ظرفیت گرمایی است.",
        "درست: گرمای نهان (ذوب در دمای ثابت) و رابطهٔ Q = mcΔT (گرم‌شدن بدون تغییر فاز) با هم جمع می‌شوند، اما هرکدام در مرحله‌ای جدا از فرایند به کار می‌روند.",
        "نادرست: پس از ذوب یخ، ظرفیت گرمایی آب مایع برای گرم‌شدن از 0°C تا 20°C به کار می‌رود، نه ظرفیت گرمایی یخ.",
      ],
    },
    "l2-vf4": {
      question: "آب مایع هنگام یخ‌زدن، گرما به محیط پس می‌دهد.",
      choices: ["درست", "نادرست"],
      explanations: [
        "درست: انجماد وارون ذوب است. آب دقیقاً همان گرمای نهانی را پس می‌دهد که برای ذوب همان مقدار یخ لازم بود؛ برای نمونه، به همین دلیل آب دریاچه هنگام یخ‌زدن در زمستان هوای اطراف را اندکی گرم می‌کند.",
        "نادرست: انجماد پدیده‌ای گرماده و وارون ذوب گرماگیر است؛ همان گرمای نهان با علامت مخالف مبادله می‌شود.",
      ],
    },
    "l3-q1": {
      question: "دیواره‌های یک دستگاه منزوی چگونه‌اند؟",
      choices: [
        "دیاترمی، متحرک و تراوا.",
        "صلب، بی‌دررو و ناتراوا.",
        "صلب، دیاترمی و ناتراوا.",
        "متحرک، بی‌دررو و تراوا.",
      ],
      explanations: [
        "نادرست: این ویژگی‌ها برعکس همهٔ مبادله‌ها—گرما، کار و ماده—را ممکن می‌کنند.",
        "درست: صلب‌بودن مبادلهٔ کار، بی‌درروبودن مبادلهٔ گرما و ناتراوابودن مبادلهٔ ماده را منع می‌کند.",
        "نادرست: دیوارهٔ دیاترمی گرما را عبور می‌دهد؛ دستگاه منزوی نمی‌بود.",
        "نادرست: دیواره‌های متحرک و تراوا مبادلهٔ کار و ماده را ممکن می‌کنند.",
      ],
    },
    "l3-vf2": {
      question: "دیوارهٔ دیاترمی گرما را عبور می‌دهد.",
      choices: ["درست", "نادرست"],
      explanations: ["درست", "نادرست"],
    },
    "l3-vf3": {
      question: "دیوارهٔ بی‌دررو گرما را عبور می‌دهد.",
      choices: ["درست", "نادرست"],
      explanations: [
        "نادرست: آن دیواره دیاترمی می‌بود.",
        "درست: بی‌دررو برعکس یعنی هیچ گرمایی از دیواره عبور نمی‌کند؛ بی‌دررو نقطهٔ مقابل دیاترمی است.",
      ],
    },
    "l3-vf4": {
      question: "اگر دیواره‌های دستگاه نسبت به ماده ناتراوا باشند، اما دستگاه بتواند با محیط گرما و کار مبادله کند، آن را دستگاه بسته می‌نامیم.",
      choices: ["درست", "نادرست"],
      explanations: [
        "درست: بسته فقط به معنی نبود مبادلهٔ ماده است؛ برخلاف دستگاه منزوی، گرما و کار می‌توانند مبادله شوند.",
        "نادرست: این دقیقاً تعریف دستگاه بسته است؛ نباید آن را با دستگاه منزوی اشتباه گرفت که مبادلهٔ گرما و کار را نیز منع می‌کند.",
      ],
    },
    "l3-q3": {
      question: "کدام‌یک از این کمیت‌ها شدتی است؟",
      choices: ["حجم V", "انرژی درونی U", "فشار P", "تعداد ذرات N"],
      explanations: [
        "نادرست: اگر اندازهٔ دستگاه دو برابر شود، حجم نیز دو برابر می‌شود؛ حجم گسترده است.",
        "نادرست: در نبود نیروهای دوربرد، انرژی درونی گسترده است.",
        "درست: با دو برابر کردن دستگاه، فشار تغییر نمی‌کند؛ فشار کمیتی نوظهور است که برای یک مولکول منفرد همتایی ندارد.",
        "نادرست: N همراه دستگاه دو برابر می‌شود؛ این کمیت گسترده است.",
      ],
    },
    "l3-q5": {
      question: "تحول هم‌حجم تحت چه شرطی انجام می‌شود؟",
      choices: ["در فشار ثابت", "بدون مبادلهٔ گرما", "در دمای ثابت", "در حجم ثابت"],
      explanations: [
        "نادرست: این تحول هم‌فشار است.",
        "نادرست: این تحول بی‌دررو است.",
        "نادرست: این تحول هم‌دما است.",
        "درست: هم‌حجم یعنی حجم ثابت است.",
      ],
    },
    "l3-vf1": {
      question: "یک دستگاه ترمودینامیکی در تعادل الزاماً همگن است، یعنی پارامترهای شدتی آن در همهٔ نقاط یکسان‌اند.",
      choices: ["درست", "نادرست"],
      explanations: [
        "نادرست: لیوان آبی روی میز در تعادل است، اما فشار آن در سطح و ته لیوان یکسان نیست. طبق قانون پاسکال در هیدرواستاتیک، فشار در سیال ساکن زیر گرانش با عمق افزایش می‌یابد: P(z) = P_0 + ρgh. این ناهمگنی هرقدر هم صبر کنیم از میان نمی‌رود؛ علت آن نبود تعادل نیست، بلکه حضور میدان نیروی خارجی، یعنی گرانش، است.",
        "درست: لیوان آب روی میز نمونهٔ کلاسیک است—بی‌آنکه چیزی جریان یابد یا تحول کند، فشار با عمق افزایش می‌یابد (قانون پاسکال: P(z) = P_0 + ρgh). تعادل ترمودینامیکی فقط نبود شار کلان گرما، ماده یا تکانه میان نقاط دستگاه را لازم می‌داند؛ به‌ویژه در حضور میدانی خارجی مانند گرانش، پارامترهای شدتی مانند فشار لازم نیست همه‌جا یکسان باشند.",
      ],
    },
    "l3-vf5": {
      question: "میله‌ای فلزی که دو سر آن در دماهای متفاوت نگه داشته می‌شوند سرانجام به وضعیتی می‌رسد که نمایهٔ دما دیگر با زمان تغییر نمی‌کند. این وضعیت یک حالت تعادل ترمودینامیکی است.",
      choices: ["درست", "نادرست"],
      explanations: [
        "نادرست: این حالت پایا است، نه حالت تعادل. نمایهٔ دما با زمان ثابت است، اما شار گرمای کلان همچنان از سر گرم به سر سرد میله جاری است.",
        "درست: این حالت پایا است و باید از تعادل متمایز شود. تعریف تعادل ترمودینامیکی نه‌تنها توقف تغییر کمیت‌های کلان، بلکه نبود هرگونه شار کلان را نیز لازم می‌داند؛ اینجا شار گرما میان دو سر میله ادامه دارد.",
      ],
    },
    "l4-q2": {
      question: "چرا به‌جای dQ و dW از δQ و δW استفاده می‌کنیم؟",
      choices: [
        "زیرا آن‌ها دیفرانسیل‌های ناکامل‌اند: انتگرالشان به مسیر پیموده‌شده بستگی دارد.",
        "زیرا Q و W کمیت‌هایی بیش از حد کوچک‌اند که با دیفرانسیل‌های معمولی توصیف شوند.",
      ],
      explanations: [
        "درست: Q و W به مسیر بستگی دارند، برخلاف U که تنها به حالت‌های آغازین و پایانی وابسته است. نوشتن dQ به‌منزلهٔ زنده‌کردن دوبارهٔ نظریهٔ کالریک بود.",
        "نادرست: «اندازهٔ» کمیت‌ها هیچ ارتباطی ندارد؛ مسئله وابستگی به مسیر است.",
      ],
    },
    "l4-q2b": {
      question: "گاز ایده‌آلی از حالت تعادل A به حالت تعادل B می‌رود؛ یا نخست فشرده و سپس گرم می‌شود، یا نخست گرم و سپس فشرده می‌شود. چه می‌توان گفت؟",
      choices: [
        "تغییر انرژی درونی ΔU، گرمای Q و کار W دریافتی در هر دو حالت یکسان‌اند.",
        "ΔU در هر دو حالت یکسان است، اما Q و W می‌توانند در مسیرهای متفاوت فرق کنند.",
        "Q در هر دو حالت یکسان است، اما ΔU می‌تواند فرق کند.",
        "هیچ‌یک از این سه کمیت به مسیر پیموده‌شده بستگی ندارد.",
      ],
      explanations: [
        "نادرست: فقط ΔU با حالت‌های A و B تعیین می‌شود؛ Q و W عموماً به مسیر پیموده‌شده وابسته‌اند.",
        "درست: U تابع حالت است (dU دیفرانسیل کامل است)، پس ΔU = U(B) − U(A) تنها به حالت‌های آغازین و پایانی بستگی دارد. Q و W تابع حالت نیستند (δQ و δW دیفرانسیل کامل نیستند)، پس به مسیر وابسته‌اند؛ تنها مجموع آن‌ها Q + W = ΔU با قانون اول تعیین می‌شود.",
        "نادرست: عکس آن درست است—ΔU مستقل از مسیر است، نه Q.",
        "نادرست: ΔU به مسیر بستگی ندارد، اما Q و W عموماً وابسته‌اند.",
      ],
    },
    "l4-q3": {
      question: "دستگاه بسته‌ای یک تحول چرخه‌ای (A → A) انجام می‌دهد. دربارهٔ موازنهٔ Q_cycle + W_cycle چه می‌توان گفت؟",
      choices: [
        "الزاماً صفر است، زیرا Q و W تابع حالت‌اند.",
        "صفر است، زیرا U تابع حالت است.",
        "برای یک ماشین محرک همیشه اکیداً مثبت است.",
      ],
      explanations: [
        "نادرست: عکس آن درست است—Q و W تابع حالت نیستند؛ انتقال‌اند، نه کمیت‌های دستگاه. دقیقاً به همین دلیل تنها مجموع آن‌ها از راه ΔU_cycle = 0 ناگزیر است در چرخه صفر شود.",
        "درست: در پایان چرخه دستگاه به حالت آغازین بازمی‌گردد. چون U تابع حالت است، ΔU_cycle = U(A) − U(A) = 0؛ پس قانون اول Q_cycle + W_cycle = 0 را ایجاب می‌کند.",
        "نادرست: مجموع Q_cycle + W_cycle صفر است، نه هر جمله به‌تنهایی؛ در ماشین محرک Q_cycle و W_cycle می‌توانند هردو ناصفر و دارای علامت‌های مخالف باشند.",
      ],
    },
    "l4-q4": {
      question: "گازی به‌صورت شبه‌ایستا فشرده می‌شود. دربارهٔ کار دریافتی گاز چه می‌توان گفت؟",
      choices: [
        "منفی است: گاز هنگام فشرده‌شدن الزاماً به محیطی که آن را می‌فشارد انرژی مکانیکی می‌دهد.",
        "مثبت است: گاز هنگام فشرده‌شدن کار دریافت می‌کند.",
        "صفر است: در تحول شبه‌ایستا مبادله‌های کار در هر مرحله دقیقاً یکدیگر را خنثی می‌کنند.",
      ],
      explanations: [
        "نادرست: این خطای رایج علامت است؛ با dV < 0 داریم -P dV > 0، پس گاز کار دریافت می‌کند.",
        "درست: فشردن گاز مستلزم دادن انرژی مکانیکی به آن است؛ در قرارداد علامت بانکدار، آنچه وارد می‌شود مثبت شمرده می‌شود.",
        "نادرست: شبه‌ایستا به معنی صفر بودن کار نیست، بلکه یعنی تحول از دنباله‌ای از حالت‌های تعادل می‌گذرد.",
      ],
    },
    "l4-q6": {
      question: "در تحول هم‌حجم یک دستگاه بسته همیشه داریم:",
      choices: ["W = 0، پس ΔU = Q", "Q = 0، پس ΔU = W", "ΔU = 0، پس Q = -W"],
      explanations: [
        "درست: در حجم ثابت δW = -P dV = 0؛ تمام تغییر انرژی درونی از گرما ناشی می‌شود.",
        "نادرست: این موازنهٔ تحول بی‌دررو است، نه هم‌حجم.",
        "نادرست: این موازنهٔ تحول هم‌دمای گاز ایده‌آل است، زیرا U تنها به T بستگی دارد.",
      ],
    },
  },
};
