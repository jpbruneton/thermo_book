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
 * (`content/tex/chp{1,2,3}_<lang>/lesson1.tex`) so that each quiz reuses the
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
  },
};
