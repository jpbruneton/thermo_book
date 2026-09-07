import type { Lang } from "@/lib/i18n";
import { quizLesson5Translations } from "@/lib/quizLesson5Translations";
import { quizLesson6Translations } from "@/lib/quizLesson6Translations";

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
 * (`content/tex/chp{1,2,3,4,5,6}_<lang>/lesson1.tex`) so that each quiz reuses the
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
    ...quizLesson5Translations.en,
    ...quizLesson6Translations.en,
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
        "Because the cold reservoir must necessarily condense the working fluid so that the engine can begin another cycle.",
      ],
      explanations: [
        "Correct: the engine is a toll on the hot → cold heat flow; no flow, no work. The temperature gradient is the real “fuel”.",
        "Wrong: there is no temperature threshold; even a small difference is enough (see OTEC plants exploiting a few degrees of difference in the ocean).",
        "Wrong: a heat engine can operate without a phase change of the working fluid. Condensation is not a general requirement.",
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
        "The observation that bodies of equal mass require different amounts of heat for the same temperature rise.",
      ],
      explanations: [
        "Correct: if heat were a finite, conserved fluid, continuous boring could not produce it indefinitely. Rumford (1798) concluded that heat is related to motion.",
        "Wrong: latent heat was, on the contrary, well explained by caloric theory (the fluid supposedly “combines” with matter during a change of state).",
        "Wrong: different heat capacities are compatible with caloric theory; this observation does not refute it.",
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
        "The heat needed to raise the temperature of the entire body by one degree.",
        "The quantity of heat that must be supplied per unit mass of the body to raise its temperature by one degree.",
        "The heat needed to melt a unit mass of the body at constant temperature.",
      ],
      explanations: [
        "Wrong: that defines the heat capacity C = mc of the entire body; c is per unit mass.",
        "Correct: it is the specific heat capacity (or specific heat), the coefficient characteristic of each material that Black identified.",
        "Wrong: that defines the specific latent heat of fusion L, not the specific heat capacity c.",
      ],
    },
    "l2-q5": {
      question: "In modern units, what is the value of the calorie as measured by Joule?",
      choices: [
        "Approximately 1 J per calorie",
        "Approximately 4,18 J per calorie",
        "Approximately 4,180 J per calorie",
        "Approximately 0,24 J per calorie",
      ],
      explanations: [
        "Wrong: this would be the case if the calorie and the joule already measured the same thing without conversion.",
        "Correct: 1 cal ≈ 4,18 J; this value, measured with increasing precision between 1843 and 1849, established the equivalence of heat and work.",
        "Wrong: approximately 4,180 J corresponds to one kilocalorie, or 1,000 calories.",
        "Wrong: this is approximately the reciprocal (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "A food package displays “250 kcal”. Approximately how many joules does this represent?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Wrong: this would confuse the stated unit with the joule.",
        "Correct: 1 kcal = 1,000 cal. The stated energy is approximately 1,046 kJ.",
        "Wrong: that corresponds to 250 cal, not 250 kcal. The prefix kilo represents a factor of 1,000.",
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
      question: "An ice cube of mass m at 0°C is heated to liquid water at 20°C. Let L be the specific latent heat of fusion, c_water and c_ice the specific heat capacities of liquid water and ice, and ΔT = 20°C. Which expression gives the total heat received Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Wrong: this calculation omits the latent heat of fusion, absorbed at 0°C without any change in temperature; this was precisely Black's second discovery, distinct from heat capacity.",
        "Correct: the latent heat (melting at constant temperature) and the relation Q = mcΔT (heating within a single phase) are added together, but each applies to a distinct stage of the process.",
        "Wrong: melting is included, but heating from 0°C to 20°C concerns liquid water. Use c_water, not c_ice.",
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
      question: "Only pressure-volume work is considered. Which wall properties ensure that the system is isolated?",
      choices: [
        "Rigid, adiabatic, and permeable.",
        "Rigid, adiabatic, and impermeable.",
        "Rigid, diathermanous, and impermeable.",
        "Movable, adiabatic, and impermeable.",
      ],
      explanations: [
        "Wrong: permeable walls allow matter exchange, even if they are rigid and adiabatic.",
        "Correct: rigidity prevents work exchange, an adiabatic wall prevents heat exchange, and impermeability prevents matter exchange.",
        "Wrong: diathermanous walls permit heat transfer, so the system would not be isolated.",
        "Wrong: movable walls allow pressure-volume work, even if they are adiabatic and impermeable.",
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
        "Because heat and work are not conserved, whereas the system's internal energy is conserved in every process.",
      ],
      explanations: [
        "Correct: Q and W depend on the path, unlike U, which depends only on the initial and final states. Writing dQ would amount to reviving caloric theory.",
        "Wrong: U can change. U is a state function, whereas Q and W depend on the path; the notation expresses this distinction.",
      ],
    },
    "l4-q3": {
      question: "A closed system undergoes a cyclic transformation (A → A). What can we say about the balance Q_cycle + W_cycle?",
      choices: [
        "It must be zero because Q and W are state functions.",
        "It is zero because U is a state function.",
        "It is zero only if the cycle is quasi-static.",
      ],
      explanations: [
        "Wrong: the reverse is true—Q and W are not state functions; they are transfers, not properties of the system. Only their sum is constrained to vanish over a cycle through ΔU_cycle = 0.",
        "Correct: over a cycle, the system returns to its initial state. Since U is a state function, ΔU_cycle = U(A) − U(A) = 0, so the first law requires Q_cycle + W_cycle = 0.",
        "Wrong: every cycle returns the system to its initial state. ΔU_cycle = 0 requires Q_cycle + W_cycle = 0, even for a cycle that is not quasi-static.",
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
      question: "During an isochoric transformation of a closed system, with pressure-volume work as the only form of work, we always have:",
      choices: ["W = 0, so ΔU = Q", "Q = 0, so ΔU = W", "ΔU = 0, so Q = −W"],
      explanations: [
        "Correct: at constant volume, pressure-volume work is zero. It is the only form of work here, so W = 0 and ΔU = Q.",
        "Wrong: this is the balance for an adiabatic transformation, not an isochoric one.",
        "Wrong: this is the balance for an isothermal transformation of an ideal gas, since U depends only on T.",
      ],
    },
  },

  de: {
    ...quizLesson5Translations.de,
    ...quizLesson6Translations.de,
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
        "Weil das kalte Reservoir das Arbeitsmedium zwangsläufig kondensieren muss, damit die Maschine ihren Kreisprozess erneut beginnen kann.",
      ],
      explanations: [
        "Richtig: Die Maschine erhebt gewissermaßen eine Maut auf den Wärmestrom heiß → kalt; ohne Strom keine Arbeit. Das Temperaturgefälle ist der eigentliche „Treibstoff“.",
        "Falsch: Es gibt keine Temperaturschwelle; schon eine kleine Differenz genügt (vgl. OTEC-Kraftwerke, die wenige Grad Unterschied im Ozean nutzen).",
        "Falsch: Eine Wärmekraftmaschine kann ohne Phasenwechsel des Arbeitsmediums arbeiten. Kondensation ist keine allgemeine Voraussetzung.",
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
        "Die Beobachtung, dass Körper gleicher Masse für dieselbe Temperaturerhöhung unterschiedliche Wärmemengen benötigen.",
      ],
      explanations: [
        "Richtig: Wäre Wärme ein endliches, erhaltenes Fluid, könnte fortgesetztes Bohren nicht unbegrenzt Wärme erzeugen. Rumford (1798) schloss daraus, dass Wärme mit Bewegung zusammenhängt.",
        "Falsch: Die latente Wärme ließ sich im Gegenteil durch die Kaloriktheorie gut erklären (das Fluid „verbindet“ sich beim Phasenübergang mit der Materie).",
        "Falsch: Unterschiedliche Wärmekapazitäten sind mit der Kaloriktheorie vereinbar; diese Beobachtung widerlegt sie nicht.",
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
        "Die Wärme, die benötigt wird, um die Temperatur des gesamten Körpers um ein Grad zu erhöhen.",
        "Für die Wärmemenge, die einer Masseneinheit des Körpers zugeführt werden muss, um ihre Temperatur um ein Grad zu erhöhen.",
        "Die Wärme, die benötigt wird, um eine Masseneinheit des Körpers bei konstanter Temperatur zu schmelzen.",
      ],
      explanations: [
        "Falsch: Das definiert die Wärmekapazität C = mc des gesamten Körpers; c ist auf eine Masseneinheit bezogen.",
        "Richtig: c ist die spezifische Wärmekapazität (oder spezifische Wärme), also der von Black nachgewiesene materialspezifische Koeffizient.",
        "Falsch: Das definiert die spezifische Schmelzwärme L, nicht die spezifische Wärmekapazität c.",
      ],
    },
    "l2-q5": {
      question: "Welchen Wert hat die von Joule gemessene Kalorie in heutigen Einheiten?",
      choices: [
        "Etwa 1 J pro Kalorie",
        "Etwa 4,18 J pro Kalorie",
        "Etwa 4 180 J pro Kalorie",
        "Etwa 0,24 J pro Kalorie",
      ],
      explanations: [
        "Falsch: Das wäre der Fall, wenn Kalorie und Joule bereits ohne Umrechnung dasselbe messen würden.",
        "Richtig: 1 cal ≈ 4,18 J; dieser zwischen 1843 und 1849 mit wachsender Genauigkeit gemessene Wert begründete die Äquivalenz von Wärme und Arbeit.",
        "Falsch: Etwa 4 180 J entsprechen einer Kilokalorie, also 1 000 Kalorien.",
        "Falsch: Das ist ungefähr der Kehrwert (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Auf einer Lebensmittelverpackung steht „250 kcal“. Wie vielen Joule entspricht dies ungefähr?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falsch: Dabei würde die angegebene Einheit mit dem Joule verwechselt.",
        "Richtig: 1 kcal = 1 000 cal. Die angegebene Energie beträgt etwa 1 046 kJ.",
        "Falsch: Das entspricht 250 cal, nicht 250 kcal. Die Vorsilbe Kilo steht für den Faktor 1 000.",
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
      question: "Ein Eiswürfel der Masse m bei 0°C wird zu flüssigem Wasser bei 20°C erwärmt. L bezeichnet die spezifische Schmelzwärme, c_water und c_ice die spezifischen Wärmekapazitäten von flüssigem Wasser und Eis; ΔT = 20°C. Welcher Ausdruck ergibt die insgesamt aufgenommene Wärme Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Falsch: Diese Rechnung lässt die latente Schmelzwärme außer Acht, die bei 0°C ohne Temperaturänderung aufgenommen wird; genau dies war Blacks zweite Entdeckung, die von der Wärmekapazität zu unterscheiden ist.",
        "Richtig: Die latente Wärme (Schmelzen bei konstanter Temperatur) und die Beziehung Q = mcΔT (Erwärmung innerhalb einer Phase) werden addiert, gelten aber jeweils für einen eigenen Schritt des Vorgangs.",
        "Falsch: Das Schmelzen ist berücksichtigt, aber von 0°C auf 20°C wird flüssiges Wasser erwärmt. Daher ist c_water statt c_ice zu verwenden.",
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
      question: "Es wird nur Volumenarbeit betrachtet. Welche Wandeigenschaften gewährleisten die Isolation des Systems?",
      choices: [
        "Starr, adiabatisch und durchlässig.",
        "Starr, adiabatisch und undurchlässig.",
        "Starr, diatherman und undurchlässig.",
        "Beweglich, adiabatisch und undurchlässig.",
      ],
      explanations: [
        "Falsch: Durchlässige Wände erlauben Stoffaustausch, auch wenn sie starr und adiabatisch sind.",
        "Richtig: Eine starre Wand verhindert den Austausch von Arbeit, eine adiabatische den Austausch von Wärme und eine undurchlässige den Austausch von Materie.",
        "Falsch: Diathermane Wände lassen Wärme hindurch; das System wäre nicht isoliert.",
        "Falsch: Bewegliche Wände erlauben Volumenarbeit, auch wenn sie adiabatisch und undurchlässig sind.",
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
        "Weil Wärme und Arbeit nicht erhalten bleiben, während die innere Energie des Systems bei jedem Prozess erhalten bleibt.",
      ],
      explanations: [
        "Richtig: Q und W hängen vom Weg ab, anders als U, das nur vom Anfangs- und Endzustand abhängt. dQ zu schreiben hieße, die Wärmestofftheorie wiederzubeleben.",
        "Falsch: U kann sich ändern. U ist eine Zustandsfunktion, während Q und W vom Weg abhängen; diesen Unterschied drückt die Schreibweise aus.",
      ],
    },
    "l4-q3": {
      question: "Ein geschlossenes System durchläuft eine Kreisprozessänderung (A → A). Was lässt sich über die Bilanz Q_cycle + W_cycle sagen?",
      choices: [
        "Sie ist notwendigerweise null, weil Q und W Zustandsfunktionen sind.",
        "Sie ist null, weil U eine Zustandsfunktion ist.",
        "Sie ist nur dann null, wenn der Kreisprozess quasistatisch ist.",
      ],
      explanations: [
        "Falsch: Das Gegenteil ist richtig—Q und W sind keine Zustandsfunktionen, sondern Übertragungen und keine Größen des Systems. Nur ihre Summe muss wegen ΔU_cycle = 0 über einen Kreisprozess verschwinden.",
        "Richtig: Nach einem Kreisprozess befindet sich das System wieder im Anfangszustand. Da U eine Zustandsfunktion ist, gilt ΔU_cycle = U(A) − U(A) = 0; der erste Hauptsatz fordert daher Q_cycle + W_cycle = 0.",
        "Falsch: Jeder Kreisprozess führt zum Anfangszustand zurück. ΔU_cycle = 0 erzwingt Q_cycle + W_cycle = 0, auch bei einem nicht quasistatischen Kreisprozess.",
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
      question: "Bei einer isochoren Zustandsänderung eines geschlossenen Systems, bei der nur Volumenarbeit möglich ist, gilt stets:",
      choices: ["W = 0, also ΔU = Q", "Q = 0, also ΔU = W", "ΔU = 0, also Q = −W"],
      explanations: [
        "Richtig: Bei konstantem Volumen ist die Volumenarbeit null. Andere Arbeitsformen sind hier ausgeschlossen, also W = 0 und ΔU = Q.",
        "Falsch: Das ist die Bilanz einer adiabatischen, nicht einer isochoren Zustandsänderung.",
        "Falsch: Das ist die Bilanz einer isothermen Zustandsänderung eines idealen Gases, da U nur von T abhängt.",
      ],
    },
  },

  es: {
    ...quizLesson5Translations.es,
    ...quizLesson6Translations.es,
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
        "Porque el foco frío debe necesariamente condensar el fluido de trabajo para que el motor pueda comenzar otro ciclo.",
      ],
      explanations: [
        "Correcto: el motor es un peaje sobre el flujo de calor caliente → frío; sin flujo, no hay trabajo. El gradiente de temperatura es el verdadero «combustible».",
        "Falso: no existe ningún umbral de temperatura; basta una diferencia incluso pequeña (véanse las centrales OTEC, que aprovechan unos pocos grados de diferencia en el océano).",
        "Falso: un motor térmico puede funcionar sin que el fluido cambie de fase. La condensación no es una condición general.",
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
        "La observación de que cuerpos de igual masa requieren cantidades de calor distintas para un mismo aumento de temperatura.",
      ],
      explanations: [
        "Correcto: si el calor fuera un fluido conservado y finito, la perforación continua no podría producirlo indefinidamente. Rumford (1798) concluyó que estaba relacionado con el movimiento.",
        "Falso: por el contrario, la teoría del calórico explicaba bien el calor latente (el fluido se «combina» con la materia durante el cambio de estado).",
        "Falso: distintas capacidades caloríficas son compatibles con la teoría del calórico; esta observación no la refuta.",
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
        "El calor necesario para elevar un grado la temperatura del cuerpo entero.",
        "La cantidad de calor que debe suministrarse por unidad de masa del cuerpo para elevar su temperatura un grado.",
        "El calor necesario para fundir una unidad de masa del cuerpo a temperatura constante.",
      ],
      explanations: [
        "Falso: eso define la capacidad térmica C = mc del cuerpo entero; c se refiere a una unidad de masa.",
        "Correcto: es la capacidad térmica específica (o calor específico), el coeficiente propio de cada material que Black puso de manifiesto.",
        "Falso: eso define el calor latente específico de fusión L, no la capacidad térmica específica c.",
      ],
    },
    "l2-q5": {
      question: "¿Cuál es, en unidades modernas, el valor de la caloría medido por Joule?",
      choices: [
        "Aproximadamente 1 J por caloría",
        "Aproximadamente 4,18 J por caloría",
        "Aproximadamente 4 180 J por caloría",
        "Aproximadamente 0,24 J por caloría",
      ],
      explanations: [
        "Falso: así sería si la caloría y el julio ya midieran lo mismo sin necesidad de conversión.",
        "Correcto: 1 cal ≈ 4,18 J; este valor, medido con precisión creciente entre 1843 y 1849, estableció la equivalencia entre calor y trabajo.",
        "Falso: unos 4 180 J corresponden a una kilocaloría, es decir, 1 000 calorías.",
        "Falso: es aproximadamente el inverso (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Un envase alimentario indica «250 kcal». ¿A cuántos julios corresponde aproximadamente?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falso: esto equivaldría a confundir la unidad indicada con el julio.",
        "Correcto: 1 kcal = 1 000 cal. La energía indicada es de aproximadamente 1 046 kJ.",
        "Falso: eso corresponde a 250 cal, no a 250 kcal. El prefijo kilo representa un factor de 1 000.",
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
      question: "Un cubito de hielo de masa m a 0°C se calienta hasta obtener agua líquida a 20°C. L es el calor latente específico de fusión, c_water y c_ice son las capacidades térmicas específicas del agua líquida y del hielo, y ΔT = 20°C. ¿Qué expresión da el calor total recibido Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Falso: este cálculo omite el calor latente de fusión, absorbido a 0°C sin que cambie la temperatura; esta fue precisamente la segunda aportación de Black, distinta de la capacidad térmica.",
        "Correcto: el calor latente (fusión a temperatura constante) y la relación Q = mcΔT (calentamiento dentro de una sola fase) se suman, pero cada uno se aplica a una etapa distinta del proceso.",
        "Falso: se incluye la fusión, pero el calentamiento de 0°C a 20°C corresponde al agua líquida. Hay que usar c_water, no c_ice.",
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
      question: "Solo se considera el trabajo de las fuerzas de presión. ¿Qué propiedades de las paredes aseguran que el sistema esté aislado?",
      choices: [
        "Rígidas, adiabáticas y permeables.",
        "Rígidas, adiabáticas e impermeables.",
        "Rígidas, diatermanas e impermeables.",
        "Móviles, adiabáticas e impermeables.",
      ],
      explanations: [
        "Falso: las paredes permeables permiten intercambiar materia, aunque sean rígidas y adiabáticas.",
        "Correcto: una pared rígida impide el intercambio de trabajo, una adiabática el de calor y una impermeable el de materia.",
        "Falso: las paredes diatermanas permiten el paso del calor; el sistema no estaría aislado.",
        "Falso: las paredes móviles permiten intercambiar trabajo de las fuerzas de presión, aunque sean adiabáticas e impermeables.",
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
        "Porque el calor y el trabajo no se conservan, mientras que la energía interna del sistema se conserva en toda transformación.",
      ],
      explanations: [
        "Correcto: Q y W dependen del camino, a diferencia de U, que solo depende de los estados inicial y final. Escribir dQ equivaldría a resucitar la teoría del calórico.",
        "Falso: U puede variar. U es una función de estado, mientras que Q y W dependen del camino; la notación expresa esta diferencia.",
      ],
    },
    "l4-q3": {
      question: "Un sistema cerrado experimenta una transformación cíclica (A → A). ¿Qué se puede afirmar sobre el balance Q_cycle + W_cycle?",
      choices: [
        "Es necesariamente nulo porque Q y W son funciones de estado.",
        "Es nulo porque U es una función de estado.",
        "Solo es nulo si el ciclo es cuasiestático.",
      ],
      explanations: [
        "Incorrecto: ocurre lo contrario—Q y W no son funciones de estado, sino transferencias, no magnitudes del sistema. Solo su suma debe anularse en un ciclo mediante ΔU_cycle = 0.",
        "Correcto: al terminar un ciclo, el sistema recupera su estado inicial. Como U es una función de estado, ΔU_cycle = U(A) − U(A) = 0; por tanto, el primer principio impone Q_cycle + W_cycle = 0.",
        "Falso: todo ciclo devuelve el sistema a su estado inicial. ΔU_cycle = 0 impone Q_cycle + W_cycle = 0, aunque el ciclo no sea cuasiestático.",
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
      question: "Durante una transformación isócora de un sistema cerrado, siendo el único trabajo el de las fuerzas de presión, siempre se cumple:",
      choices: ["W = 0, por tanto ΔU = Q", "Q = 0, por tanto ΔU = W", "ΔU = 0, por tanto Q = −W"],
      explanations: [
        "Correcto: a volumen constante, el trabajo de las fuerzas de presión es nulo. Aquí es el único trabajo, por lo que W = 0 y ΔU = Q.",
        "Incorrecto: este es el balance de una transformación adiabática, no isócora.",
        "Incorrecto: este es el balance de una transformación isotérmica de un gas ideal, pues U solo depende de T.",
      ],
    },
  },

  pt: {
    ...quizLesson5Translations.pt,
    ...quizLesson6Translations.pt,
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
        "Porque a fonte fria tem necessariamente de condensar o fluido de trabalho para que o motor possa iniciar outro ciclo.",
      ],
      explanations: [
        "Correto: o motor é uma portagem sobre o fluxo de calor quente → frio; sem fluxo, não há trabalho. O gradiente de temperatura é o verdadeiro «combustível».",
        "Falso: não existe qualquer limiar de temperatura; basta uma diferença mesmo pequena (ver as centrais OTEC, que exploram alguns graus de diferença no oceano).",
        "Falso: um motor térmico pode funcionar sem mudança de fase do fluido. A condensação não é uma condição geral.",
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
        "A observação de que corpos de igual massa necessitam de quantidades de calor diferentes para o mesmo aumento de temperatura.",
      ],
      explanations: [
        "Correto: se o calor fosse um fluido conservado e finito, a perfuração contínua não poderia produzi-lo indefinidamente. Rumford (1798) concluiu que estava relacionado com o movimento.",
        "Falso: pelo contrário, a teoria do calórico explicava bem o calor latente (o fluido «combina-se» com a matéria durante a mudança de estado).",
        "Falso: capacidades térmicas diferentes são compatíveis com a teoria do calórico; esta observação não a refuta.",
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
        "O calor necessário para elevar um grau a temperatura do corpo inteiro.",
        "A quantidade de calor que é necessário fornecer por unidade de massa do corpo para elevar a sua temperatura um grau.",
        "O calor necessário para fundir uma unidade de massa do corpo a temperatura constante.",
      ],
      explanations: [
        "Falso: isso define a capacidade térmica C = mc do corpo inteiro; c é referida à unidade de massa.",
        "Correto: é a capacidade térmica mássica (ou calor específico), o coeficiente próprio de cada material que Black pôs em evidência.",
        "Falso: isso define o calor latente mássico de fusão L, não a capacidade térmica mássica c.",
      ],
    },
    "l2-q5": {
      question: "Qual é, em unidades modernas, o valor da caloria medido por Joule?",
      choices: [
        "Cerca de 1 J por caloria",
        "Cerca de 4,18 J por caloria",
        "Cerca de 4 180 J por caloria",
        "Cerca de 0,24 J por caloria",
      ],
      explanations: [
        "Falso: seria esse o caso se a caloria e o joule já medissem a mesma coisa sem conversão.",
        "Correto: 1 cal ≈ 4,18 J; este valor, medido com precisão crescente entre 1843 e 1849, estabeleceu a equivalência entre calor e trabalho.",
        "Falso: cerca de 4 180 J correspondem a uma quilocaloria, ou seja, 1 000 calorias.",
        "Falso: é aproximadamente o inverso (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Uma embalagem alimentar indica «250 kcal». A quantos joules corresponde aproximadamente?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falso: isso equivaleria a confundir a unidade indicada com o joule.",
        "Correto: 1 kcal = 1 000 cal. A energia indicada é de cerca de 1 046 kJ.",
        "Falso: isso corresponde a 250 cal, não a 250 kcal. O prefixo quilo representa um fator de 1 000.",
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
      question: "Um cubo de gelo de massa m a 0°C é aquecido até se obter água líquida a 20°C. L é o calor latente mássico de fusão, c_water e c_ice são as capacidades térmicas mássicas da água líquida e do gelo, e ΔT = 20°C. Que expressão dá o calor total recebido Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Falso: este cálculo omite o calor latente de fusão, absorvido a 0°C sem que a temperatura se altere; foi precisamente esta a segunda descoberta de Black, distinta da capacidade térmica.",
        "Correto: o calor latente (fusão a temperatura constante) e a relação Q = mcΔT (aquecimento numa única fase) somam-se, mas cada um se aplica a uma etapa distinta do processo.",
        "Falso: a fusão está incluída, mas o aquecimento de 0°C a 20°C diz respeito à água líquida. Deve usar-se c_water, não c_ice.",
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
      question: "Considera-se apenas o trabalho das forças de pressão. Que propriedades das paredes garantem o isolamento do sistema?",
      choices: [
        "Rígidas, adiabáticas e permeáveis.",
        "Rígidas, adiabáticas e impermeáveis.",
        "Rígidas, diatermanas e impermeáveis.",
        "Móveis, adiabáticas e impermeáveis.",
      ],
      explanations: [
        "Falso: paredes permeáveis permitem trocar matéria, mesmo sendo rígidas e adiabáticas.",
        "Correto: uma parede rígida impede a troca de trabalho, uma adiabática a troca de calor e uma impermeável a troca de matéria.",
        "Falso: as paredes diatermanas permitem a passagem do calor; o sistema não estaria isolado.",
        "Falso: paredes móveis permitem trocar trabalho das forças de pressão, mesmo sendo adiabáticas e impermeáveis.",
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
        "Porque o calor e o trabalho não se conservam, enquanto a energia interna do sistema se conserva em qualquer transformação.",
      ],
      explanations: [
        "Correto: Q e W dependem do caminho, ao contrário de U, que depende apenas dos estados inicial e final. Escrever dQ equivaleria a ressuscitar a teoria do calórico.",
        "Falso: U pode variar. U é uma função de estado, enquanto Q e W dependem do caminho; a notação exprime esta diferença.",
      ],
    },
    "l4-q3": {
      question: "Um sistema fechado sofre uma transformação cíclica (A → A). O que se pode afirmar sobre o balanço Q_cycle + W_cycle?",
      choices: [
        "É necessariamente nulo porque Q e W são funções de estado.",
        "É nulo porque U é uma função de estado.",
        "Só é nulo se o ciclo for quase-estático.",
      ],
      explanations: [
        "Errado: é o contrário—Q e W não são funções de estado; são transferências, não grandezas do sistema. Apenas a sua soma é obrigada a anular-se num ciclo por ΔU_cycle = 0.",
        "Correto: num ciclo, o sistema regressa ao estado inicial. Como U é uma função de estado, ΔU_cycle = U(A) − U(A) = 0; o primeiro princípio impõe, portanto, Q_cycle + W_cycle = 0.",
        "Falso: qualquer ciclo devolve o sistema ao estado inicial. ΔU_cycle = 0 impõe Q_cycle + W_cycle = 0, mesmo que o ciclo não seja quase-estático.",
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
      question: "Durante uma transformação isocórica de um sistema fechado, sendo o único trabalho o das forças de pressão, tem-se sempre:",
      choices: ["W = 0, logo ΔU = Q", "Q = 0, logo ΔU = W", "ΔU = 0, logo Q = −W"],
      explanations: [
        "Correto: a volume constante, o trabalho das forças de pressão é nulo. Aqui é o único trabalho, logo W = 0 e ΔU = Q.",
        "Errado: este é o balanço de uma transformação adiabática, não isocórica.",
        "Errado: este é o balanço de uma transformação isotérmica de um gás ideal, pois U depende apenas de T.",
      ],
    },
  },

  it: {
    ...quizLesson5Translations.it,
    ...quizLesson6Translations.it,
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
        "Perché la sorgente fredda deve necessariamente condensare il fluido di lavoro affinché il motore possa iniziare un nuovo ciclo.",
      ],
      explanations: [
        "Esatto: il motore è un pedaggio sul flusso di calore caldo → freddo; senza flusso, niente lavoro. Il gradiente di temperatura è il vero «carburante».",
        "Falso: non esiste alcuna soglia di temperatura; basta una differenza anche piccola (cfr. le centrali OTEC, che sfruttano pochi gradi di scarto nell'oceano).",
        "Falso: un motore termico può funzionare senza cambiamenti di fase del fluido. La condensazione non è una condizione generale.",
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
        "L'osservazione che corpi di uguale massa richiedono quantità di calore diverse per lo stesso aumento di temperatura.",
      ],
      explanations: [
        "Esatto: se il calore fosse stato un fluido conservato e finito, una perforazione continua non avrebbe potuto produrne indefinitamente. Nel 1798 Rumford concluse che il calore è legato al movimento.",
        "Falso: il calore latente era invece ben spiegato dalla teoria del calorico (il fluido si «combina» con la materia durante il cambiamento di stato).",
        "Falso: capacità termiche diverse sono compatibili con la teoria del calorico; questa osservazione non la confuta.",
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
        "Il calore necessario per aumentare di un grado la temperatura dell'intero corpo.",
        "La quantità di calore che occorre fornire a un'unità di massa del corpo per aumentarne la temperatura di un grado.",
        "Il calore necessario per fondere un'unità di massa del corpo a temperatura costante.",
      ],
      explanations: [
        "Falso: questa è la capacità termica C = mc dell'intero corpo; c è riferita all'unità di massa.",
        "Esatto: è la capacità termica massica (o calore specifico), il coefficiente proprio di ciascun materiale messo in evidenza da Black.",
        "Falso: questo è il calore latente specifico di fusione L, non la capacità termica massica c.",
      ],
    },
    "l2-q5": {
      question: "Qual è, nelle unità moderne, il valore della caloria misurato da Joule?",
      choices: ["Circa 1 J per caloria", "Circa 4,18 J per caloria", "Circa 4 180 J per caloria", "Circa 0,24 J per caloria"],
      explanations: [
        "Falso: sarebbe così se la caloria e il joule misurassero già la stessa cosa senza conversione.",
        "Esatto: 1 cal ≈ 4,18 J; è il valore, misurato con precisione crescente tra il 1843 e il 1849, che stabilì l'equivalenza tra calore e lavoro.",
        "Falso: circa 4 180 J corrispondono a una chilocaloria, cioè 1 000 calorie.",
        "Falso: è approssimativamente l'inverso (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Su una confezione alimentare è indicato «250 kcal». A quanti joule corrispondono approssimativamente?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Falso: ciò equivarrebbe a confondere l'unità indicata con il joule.",
        "Esatto: 1 kcal = 1 000 cal. L'energia indicata è di circa 1 046 kJ.",
        "Falso: questo corrisponde a 250 cal, non a 250 kcal. Il prefisso chilo rappresenta un fattore 1 000.",
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
      question: "Un cubetto di ghiaccio di massa m a 0°C viene riscaldato fino a ottenere acqua liquida a 20°C. L è il calore latente specifico di fusione, c_water e c_ice sono le capacità termiche massiche dell'acqua liquida e del ghiaccio, e ΔT = 20°C. Quale espressione dà il calore totale ricevuto Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Falso: questo calcolo dimentica il calore latente di fusione, assorbito a 0°C senza variazione di temperatura; è proprio la seconda scoperta di Black, distinta dalla capacità termica.",
        "Esatto: il calore latente (fusione a temperatura costante) si somma al calore Q = mcΔT (riscaldamento senza cambiamento di fase), ma i due contributi si riferiscono a tappe distinte del processo.",
        "Falso: la fusione è inclusa, ma il riscaldamento da 0°C a 20°C riguarda l'acqua liquida. Occorre usare c_water, non c_ice.",
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
      question: "Si considera soltanto il lavoro delle forze di pressione. Quali proprietà delle pareti garantiscono l'isolamento del sistema?",
      choices: [
        "Rigide, adiabatiche e permeabili.",
        "Rigide, adiabatiche e impermeabili.",
        "Rigide, diatermane e impermeabili.",
        "Mobili, adiabatiche e impermeabili.",
      ],
      explanations: [
        "Falso: pareti permeabili consentono scambi di materia, anche se rigide e adiabatiche.",
        "Esatto: una parete rigida impedisce lo scambio di lavoro, una parete adiabatica lo scambio di calore e una parete impermeabile lo scambio di materia.",
        "Falso: le pareti diatermane lasciano passare il calore; il sistema non sarebbe isolato.",
        "Falso: pareti mobili consentono scambi di lavoro delle forze di pressione, anche se adiabatiche e impermeabili.",
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
        "Perché calore e lavoro non si conservano, mentre l'energia interna del sistema si conserva in ogni trasformazione.",
      ],
      explanations: [
        "Esatto: Q e W dipendono dal cammino, a differenza di U, che dipende soltanto dagli stati iniziale e finale. Scrivere dQ equivarrebbe a resuscitare la teoria del calorico.",
        "Falso: U può variare. U è una funzione di stato, mentre Q e W dipendono dal percorso; la notazione esprime questa distinzione.",
      ],
    },
    "l4-q3": {
      question: "Un sistema chiuso subisce una trasformazione ciclica (A → A). Che cosa si può affermare sul bilancio Q_cycle + W_cycle?",
      choices: [
        "È necessariamente nullo perché Q e W sono funzioni di stato.",
        "È nullo perché U è una funzione di stato.",
        "È nullo soltanto se il ciclo è quasi-statico.",
      ],
      explanations: [
        "Falso: è vero il contrario—Q e W non sono funzioni di stato, ma trasferimenti, non grandezze del sistema. Solo la loro somma deve annullarsi su un ciclo tramite ΔU_cycle = 0.",
        "Esatto: al termine di un ciclo il sistema ritrova lo stato iniziale. Poiché U è una funzione di stato, ΔU_cycle = U(A) − U(A) = 0; il primo principio impone quindi Q_cycle + W_cycle = 0.",
        "Falso: ogni ciclo riporta il sistema allo stato iniziale. ΔU_cycle = 0 impone Q_cycle + W_cycle = 0, anche se il ciclo non è quasi-statico.",
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
      question: "Durante una trasformazione isocora di un sistema chiuso, con il solo lavoro delle forze di pressione, si ha sempre:",
      choices: ["W = 0, quindi ΔU = Q", "Q = 0, quindi ΔU = W", "ΔU = 0, quindi Q = −W"],
      explanations: [
        "Esatto: a volume costante, il lavoro delle forze di pressione è nullo. Qui è l'unico lavoro, quindi W = 0 e ΔU = Q.",
        "Falso: questo è il bilancio di una trasformazione adiabatica, non isocora.",
        "Falso: questo è il bilancio di una trasformazione isoterma di un gas ideale, poiché U dipende soltanto da T.",
      ],
    },
  },

  pl: {
    ...quizLesson5Translations.pl,
    ...quizLesson6Translations.pl,
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
        "Ponieważ zimne źródło musi koniecznie skroplić czynnik roboczy, aby silnik mógł rozpocząć kolejny cykl.",
      ],
      explanations: [
        "Dobrze: silnik pobiera myto od strumienia ciepła gorące → zimne; bez strumienia nie ma pracy. Prawdziwym „paliwem” jest gradient temperatury.",
        "Źle: nie istnieje żaden próg temperatury; wystarczy nawet niewielka różnica (por. elektrownie OTEC, wykorzystujące kilka stopni różnicy w oceanie).",
        "Źle: silnik cieplny może działać bez przemiany fazowej czynnika roboczego. Skraplanie nie jest ogólnym warunkiem jego działania.",
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
        "Obserwacja, że ciała o jednakowej masie potrzebują różnych ilości ciepła do takiego samego wzrostu temperatury.",
      ],
      explanations: [
        "Dobrze: gdyby ciepło było skończonym, zachowywanym płynem, ciągłe wiercenie nie mogłoby wytwarzać go bez końca. W 1798 roku Rumford wywnioskował, że ciepło wiąże się z ruchem.",
        "Źle: ciepło utajone teoria cieplika wyjaśniała wręcz dobrze (płyn «wiąże się» z materią podczas przemiany fazowej).",
        "Źle: różne pojemności cieplne są zgodne z teorią cieplika; ta obserwacja jej nie obala.",
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
        "Ciepło potrzebne do podniesienia temperatury całego ciała o jeden stopień.",
        "Ilość ciepła, którą należy dostarczyć jednostce masy ciała, aby podnieść jego temperaturę o jeden stopień.",
        "Ciepło potrzebne do stopienia jednostki masy ciała w stałej temperaturze.",
      ],
      explanations: [
        "Źle: to definiuje pojemność cieplną C = mc całego ciała; c odnosi się do jednostki masy.",
        "Dobrze: jest to ciepło właściwe (dawniej także pojemność cieplna właściwa), współczynnik charakterystyczny dla każdego materiału, który wykazał Black.",
        "Źle: to definiuje ciepło topnienia na jednostkę masy L, a nie ciepło właściwe c.",
      ],
    },
    "l2-q5": {
      question: "Ile w nowoczesnych jednostkach wynosi kaloria zgodnie z pomiarem Joule'a?",
      choices: ["Około 1 J na kalorię", "Około 4,18 J na kalorię", "Około 4 180 J na kalorię", "Około 0,24 J na kalorię"],
      explanations: [
        "Źle: tak byłoby, gdyby kaloria i dżul już bez przeliczania mierzyły to samo.",
        "Dobrze: 1 cal ≈ 4,18 J; wartość ta, mierzona z coraz większą dokładnością w latach 1843–1849, ustaliła równoważność ciepła i pracy.",
        "Źle: około 4 180 J odpowiada jednej kilokalorii, czyli 1 000 kalorii.",
        "Źle: jest to w przybliżeniu odwrotność (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Na opakowaniu żywności widnieje «250 kcal». Ilu dżulom odpowiada to w przybliżeniu?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Źle: oznaczałoby to pomylenie podanej jednostki z dżulem.",
        "Dobrze: 1 kcal = 1 000 cal. Podana energia wynosi około 1 046 kJ.",
        "Źle: odpowiada to 250 cal, a nie 250 kcal. Przedrostek kilo oznacza mnożnik 1 000.",
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
      question: "Kostkę lodu o masie m i temperaturze 0°C ogrzewamy do otrzymania ciekłej wody o temperaturze 20°C. L oznacza ciepło topnienia na jednostkę masy, c_water i c_ice są ciepłami właściwymi ciekłej wody i lodu, a ΔT = 20°C. Które wyrażenie daje całkowite otrzymane ciepło Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Źle: obliczenie pomija ciepło utajone topnienia, pochłaniane w 0°C bez zmiany temperatury; było to właśnie drugie odkrycie Blacka, odrębne od pojemności cieplnej.",
        "Dobrze: ciepło utajone (topnienie w stałej temperaturze) i ciepło Q = mcΔT (ogrzewanie bez przemiany fazowej) sumują się, lecz odnoszą się do odrębnych etapów procesu.",
        "Źle: topnienie jest uwzględnione, ale ogrzewanie od 0°C do 20°C dotyczy ciekłej wody. Należy użyć c_water, a nie c_ice.",
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
      question: "Rozpatrujemy tylko pracę sił ciśnienia. Jakie właściwości ścian zapewniają izolację układu?",
      choices: [
        "Sztywne, adiabatyczne i przepuszczalne.",
        "Sztywne, adiabatyczne i nieprzepuszczalne.",
        "Sztywne, diatermiczne i nieprzepuszczalne.",
        "Ruchome, adiabatyczne i nieprzepuszczalne.",
      ],
      explanations: [
        "Źle: ściany przepuszczalne umożliwiają wymianę materii, nawet jeśli są sztywne i adiabatyczne.",
        "Dobrze: sztywność uniemożliwia wymianę pracy, adiabatyczność wymianę ciepła, a nieprzepuszczalność wymianę materii.",
        "Źle: ścianki diatermiczne przepuszczają ciepło, więc układ nie byłby izolowany.",
        "Źle: ściany ruchome umożliwiają wymianę pracy sił ciśnienia, nawet jeśli są adiabatyczne i nieprzepuszczalne.",
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
        "Ponieważ ciepło i praca nie są zachowane, natomiast energia wewnętrzna układu jest zachowana w każdej przemianie.",
      ],
      explanations: [
        "Dobrze: Q i W zależą od drogi, w przeciwieństwie do U, które zależy wyłącznie od stanu początkowego i końcowego. Zapis dQ oznaczałby wskrzeszenie teorii cieplika.",
        "Źle: U może się zmieniać. U jest funkcją stanu, a Q i W zależą od drogi; zapis wyraża właśnie tę różnicę.",
      ],
    },
    "l4-q3": {
      question: "Układ zamknięty przechodzi przemianę cykliczną (A → A). Co można powiedzieć o bilansie Q_cycle + W_cycle?",
      choices: [
        "Musi być równy zeru, ponieważ Q i W są funkcjami stanu.",
        "Jest równy zeru, ponieważ U jest funkcją stanu.",
        "Jest równy zeru tylko wtedy, gdy cykl jest quasi-statyczny.",
      ],
      explanations: [
        "Źle: jest odwrotnie—Q i W nie są funkcjami stanu; są przekazami energii, a nie wielkościami układu. Tylko ich suma musi zniknąć w cyklu na mocy ΔU_cycle = 0.",
        "Dobrze: po zakończeniu cyklu układ wraca do stanu początkowego. Ponieważ U jest funkcją stanu, ΔU_cycle = U(A) − U(A) = 0, zatem pierwsza zasada wymaga Q_cycle + W_cycle = 0.",
        "Źle: każdy cykl przywraca stan początkowy układu. ΔU_cycle = 0 wymaga Q_cycle + W_cycle = 0, nawet jeśli cykl nie jest quasi-statyczny.",
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
      question: "Podczas przemiany izochorycznej układu zamkniętego, gdy jedyną formą pracy jest praca sił ciśnienia, zawsze zachodzi:",
      choices: ["W = 0, zatem ΔU = Q", "Q = 0, zatem ΔU = W", "ΔU = 0, zatem Q = −W"],
      explanations: [
        "Dobrze: przy stałej objętości praca sił ciśnienia jest zerowa. Tutaj jest to jedyna forma pracy, więc W = 0 i ΔU = Q.",
        "Źle: jest to bilans przemiany adiabatycznej, a nie izochorycznej.",
        "Źle: jest to bilans przemiany izotermicznej gazu doskonałego, ponieważ U zależy wyłącznie od T.",
      ],
    },
  },

  ru: {
    ...quizLesson5Translations.ru,
    ...quizLesson6Translations.ru,
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
        "Потому что холодный источник обязательно должен конденсировать рабочее тело, чтобы двигатель мог начать новый цикл.",
      ],
      explanations: [
        "Верно: двигатель берёт своего рода пошлину с теплового потока горячее → холодное; нет потока — нет работы. Настоящее «топливо» — это перепад температур.",
        "Неверно: никакого температурного порога не существует; достаточно даже небольшой разности (ср. станции OTEC, использующие в океане разницу в несколько градусов).",
        "Неверно: тепловой двигатель может работать без фазовых переходов рабочего тела. Конденсация не является общим условием.",
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
        "Наблюдение, что телам одинаковой массы для одинакового повышения температуры нужны разные количества теплоты.",
      ],
      explanations: [
        "Верно: если бы теплота была конечной сохраняющейся жидкостью, непрерывное сверление не могло бы производить её бесконечно. В 1798 году Румфорд заключил, что теплота связана с движением.",
        "Неверно: скрытая теплота, напротив, хорошо объяснялась теорией теплорода (жидкость «связывается» с веществом при изменении агрегатного состояния).",
        "Неверно: разные теплоёмкости совместимы с теорией теплорода; это наблюдение её не опровергает.",
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
        "Количество теплоты, необходимое для повышения температуры всего тела на один градус.",
        "Количество теплоты, которое нужно сообщить единице массы тела, чтобы повысить его температуру на один градус.",
        "Количество теплоты, необходимое для плавления единицы массы тела при постоянной температуре.",
      ],
      explanations: [
        "Неверно: это теплоёмкость C = mc всего тела; c относится к единице массы.",
        "Верно: это удельная теплоёмкость (или, в более старой терминологии, удельная теплота) — свойственный каждому материалу коэффициент, обнаруженный Блэком.",
        "Неверно: это удельная теплота плавления L, а не удельная теплоёмкость c.",
      ],
    },
    "l2-q5": {
      question: "Чему в современных единицах равна калория согласно измерениям Джоуля?",
      choices: ["Около 1 J на калорию", "Около 4,18 J на калорию", "Около 4 180 Дж на калорию", "Около 0,24 J на калорию"],
      explanations: [
        "Неверно: так было бы, если бы калория и джоуль уже без пересчёта измеряли одно и то же.",
        "Верно: 1 cal ≈ 4,18 J; это значение, измеренное со всё большей точностью в 1843–1849 годах, установило эквивалентность теплоты и работы.",
        "Неверно: около 4 180 Дж соответствует одной килокалории, то есть 1 000 калорий.",
        "Неверно: это приблизительно обратная величина (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "На упаковке продукта указано «250 kcal». Скольким джоулям это приблизительно соответствует?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Неверно: это означало бы, что указанную единицу перепутали с джоулем.",
        "Верно: 1 kcal = 1 000 cal. Указанная энергия составляет около 1 046 кДж.",
        "Неверно: это соответствует 250 cal, а не 250 kcal. Приставка кило означает множитель 1 000.",
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
      question: "Кусок льда массой m при 0°C нагревают до получения жидкой воды при 20°C. L — удельная теплота плавления, c_water и c_ice — удельные теплоёмкости жидкой воды и льда, ΔT = 20°C. Какое выражение даёт полное количество полученной теплоты Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Неверно: в этом расчёте не учтена скрытая теплота плавления, поглощаемая при 0°C без изменения температуры; это как раз второе открытие Блэка, отличное от теплоёмкости.",
        "Верно: скрытая теплота (плавление при постоянной температуре) и соотношение Q = mcΔT (нагревание без изменения фазы) складываются, но относятся к разным этапам процесса.",
        "Неверно: плавление учтено, но от 0°C до 20°C нагревается жидкая вода. Нужно использовать c_water, а не c_ice.",
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
      question: "Рассматривается только работа сил давления. Какими должны быть стенки, чтобы обеспечить изоляцию системы?",
      choices: [
        "Жёсткими, адиабатическими и проницаемыми.",
        "Жёсткими, адиабатическими и непроницаемыми.",
        "Жёсткими, диатермическими и непроницаемыми.",
        "Подвижными, адиабатическими и непроницаемыми.",
      ],
      explanations: [
        "Неверно: проницаемые стенки допускают обмен веществом, даже если они жёсткие и адиабатические.",
        "Верно: жёсткость исключает обмен работой, адиабатичность — обмен теплотой, а непроницаемость — обмен веществом.",
        "Неверно: диатермические стенки пропускают теплоту, поэтому система не была бы изолированной.",
        "Неверно: подвижные стенки допускают обмен энергией в форме работы сил давления, даже если они адиабатические и непроницаемые.",
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
        "Потому что теплота и работа не сохраняются, а внутренняя энергия системы сохраняется при любом процессе.",
      ],
      explanations: [
        "Верно: Q и W зависят от пути, в отличие от U, которое зависит только от начального и конечного состояний. Запись dQ означала бы возрождение теории теплорода.",
        "Неверно: U может изменяться. U — функция состояния, а Q и W зависят от пути; обозначения отражают именно это различие.",
      ],
    },
    "l4-q3": {
      question: "Закрытая система совершает циклический процесс (A → A). Что можно утверждать о балансе Q_cycle + W_cycle?",
      choices: [
        "Он обязательно равен нулю, поскольку Q и W являются функциями состояния.",
        "Он равен нулю, поскольку U является функцией состояния.",
        "Он равен нулю только для квазистатического цикла.",
      ],
      explanations: [
        "Неверно: всё наоборот—Q и W не являются функциями состояния; это способы передачи энергии, а не величины системы. Только их сумма обязана обратиться в нуль за цикл благодаря ΔU_cycle = 0.",
        "Верно: по завершении цикла система возвращается в начальное состояние. Поскольку U — функция состояния, ΔU_cycle = U(A) − U(A) = 0; следовательно, первый закон требует Q_cycle + W_cycle = 0.",
        "Неверно: любой цикл возвращает систему в исходное состояние. ΔU_cycle = 0 требует Q_cycle + W_cycle = 0, даже если цикл не квазистатический.",
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
      question: "При изохорном процессе в закрытой системе, если возможна только работа сил давления, всегда выполняется:",
      choices: ["W = 0, поэтому ΔU = Q", "Q = 0, поэтому ΔU = W", "ΔU = 0, поэтому Q = −W"],
      explanations: [
        "Верно: при постоянном объёме работа сил давления равна нулю. Здесь это единственный вид работы, поэтому W = 0 и ΔU = Q.",
        "Неверно: это баланс адиабатического, а не изохорного процесса.",
        "Неверно: это баланс изотермического процесса идеального газа, поскольку U зависит только от T.",
      ],
    },
  },

  zh: {
    ...quizLesson5Translations.zh,
    ...quizLesson6Translations.zh,
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
        "因为低温热源必须使工质凝结，热机才能开始下一个循环。",
      ],
      explanations: [
        "正确：热机就像在高温 → 低温的热流上设卡收费；没有热流就没有功。真正的「燃料」是温度梯度。",
        "错误：并不存在温度阈值；哪怕温差很小也足够（参见利用海洋中几度温差的 OTEC 电站）。",
        "错误：热机可以在工质不发生相变的情况下运行。凝结并不是一般性的必要条件。",
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
        "观察到质量相同的物体升高相同温度所需的热量不同。",
      ],
      explanations: [
        "正确：如果热是一种总量有限且守恒的流体，持续镗削就不可能无止境地产生热。伦福德于1798年由此得出结论：热与运动有关。",
        "错误：热质说反而能很好地解释潜热（状态变化时，这种流体与物质“结合”）。",
        "错误：热容不同与热质说并不矛盾，因此这一观察不能反驳热质说。",
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
        "使整个物体的温度升高一度所需的热量。",
        "使单位质量物体的温度升高一度所需提供的热量。",
        "使单位质量的物体在恒温下熔化所需的热量。",
      ],
      explanations: [
        "错误：这定义的是整个物体的热容 C = mc；c 则按单位质量计。",
        "正确：它是比热容（旧称比热），即布莱克揭示的、每种材料所特有的系数。",
        "错误：这定义的是单位质量的熔化潜热 L，而不是比热容 c。",
      ],
    },
    "l2-q5": {
      question: "用现代单位表示，焦耳测得的一卡路里等于多少？",
      choices: ["约1 J/卡路里", "约4,18 J/卡路里", "每卡约 4 180 J", "约0,24 J/卡路里"],
      explanations: [
        "错误：只有在卡路里与焦耳无需换算就表示同一数值时才会如此。",
        "正确：1 cal ≈ 4,18 J；焦耳在1843年至1849年间以越来越高的精度测得这一数值，从而确立了热与功的等价关系。",
        "错误：约 4 180 J 对应一千卡，也就是 1 000 卡。",
        "错误：这大约是其倒数（1/4,18 ≈ 0,24）。",
      ],
    },
    "l2-q6": {
      question: "食品包装上标有“250 kcal”。这大约相当于多少焦耳？",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "错误：这相当于把标示的单位误当成焦耳。",
        "正确：1 kcal = 1 000 cal。标注的能量约为 1 046 kJ。",
        "错误：这对应 250 cal，而不是 250 kcal。前缀 kilo 表示 1 000 倍。",
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
      question: "将质量为 m、温度为 0°C 的冰块加热，直至得到 20°C 的液态水。L 为单位质量的熔化潜热，c_water 和 c_ice 分别为液态水和冰的比热容，ΔT = 20°C。哪个表达式给出吸收的总热量 Q？",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "错误：这一计算漏掉了冰在0°C熔化时吸收、但不引起温度变化的潜热；这正是布莱克继热容之后的第二项发现。",
        "正确：潜热（恒温熔化）与关系 Q = mcΔT（同一物态内升温）需要相加，但二者分别适用于过程中的不同阶段。",
        "错误：虽然计入了熔化，但从 0°C 升温到 20°C 的是液态水。应使用 c_water，而不是 c_ice。",
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
      question: "仅考虑压力所做的体积功。下列哪组边界性质能保证系统孤立？",
      choices: [
        "刚性、绝热且可渗透的。",
        "刚性、绝热且不可渗透的。",
        "刚性、透热且不可渗透的。",
        "可动、绝热且不可渗透的。",
      ],
      explanations: [
        "错误：可渗透的边界允许物质交换，即使它是刚性且绝热的。",
        "正确：刚性阻止功的交换，绝热阻止热交换，不可渗透则阻止物质交换。",
        "错误：透热壁允许热通过，因此该系统并非孤立系。",
        "错误：可动的边界允许通过体积功交换能量，即使它是绝热且不可渗透的。",
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
        "因为热量和功不守恒，而系统的内能在任何过程中都守恒。",
      ],
      explanations: [
        "正确：Q 和 W 与路径有关，而 U 只取决于初态和终态。写成 dQ 就等于让热质说死灰复燃。",
        "错误：U 可以改变。U 是状态函数，而 Q 和 W 依赖路径；记号体现的是这一区别。",
      ],
    },
    "l4-q3": {
      question: "一个封闭系统经历循环过程（A → A）。关于能量收支 Q_cycle + W_cycle，可以说什么？",
      choices: [
        "它必然为零，因为 Q 和 W 是状态函数。",
        "它为零，因为 U 是状态函数。",
        "只有准静态循环的这一能量收支才为零。",
      ],
      explanations: [
        "错误：事实恰好相反——Q 和 W 不是状态函数；它们是能量传递，而不是系统自身的物理量。由于 ΔU_cycle = 0，只有它们的和在一个循环中必须为零。",
        "正确：一个循环结束后，系统回到初态。由于 U 是状态函数，ΔU_cycle = U(A) − U(A) = 0，因此第一定律要求 Q_cycle + W_cycle = 0。",
        "错误：任何循环都会使系统回到初态。ΔU_cycle = 0 要求 Q_cycle + W_cycle = 0，即使循环不是准静态的。",
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
      question: "封闭系统经历等容过程，且只可能有压力所做的体积功时，总有：",
      choices: ["W = 0，因此 ΔU = Q", "Q = 0，因此 ΔU = W", "ΔU = 0，因此 Q = −W"],
      explanations: [
        "正确：体积恒定时，体积功为零。这里不存在其他形式的功，因此 W = 0，ΔU = Q。",
        "错误：这是绝热过程的能量收支，而不是等容过程。",
        "错误：这是理想气体等温过程的能量收支，因为 U 只依赖于 T。",
      ],
    },
  },

  ja: {
    ...quizLesson5Translations.ja,
    ...quizLesson6Translations.ja,
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
        "低温熱源が必ず作業物質を凝縮させなければ、熱機関は次のサイクルを始められないから。",
      ],
      explanations: [
        "正解：熱機関は高温 → 低温の熱流に課される通行料のようなものである。流れがなければ仕事もない。本当の「燃料」は温度勾配である。",
        "誤り：温度のしきい値は存在しない。わずかな差でも十分である（海洋の数度の温度差を利用する OTEC 発電を参照）。",
        "誤り：熱機関は作業物質の相変化がなくても動作する。凝縮は一般的な必要条件ではない。",
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
        "質量が等しい物体でも、同じ温度上昇に必要な熱量が異なるという観察。",
      ],
      explanations: [
        "正解：熱が有限量の保存流体なら、加工を続けても無限に生み出されることはない。ランフォードは1798年、熱は運動と関係していると結論した。",
        "誤り：潜熱はむしろ熱素説でうまく説明された。状態変化の際に流体が物質と「結合する」と考えられたのである。",
        "誤り：熱容量が異なることはカロリック説と両立する。この観察はその反証にはならない。",
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
        "物体全体の温度を一度上げるために必要な熱量。",
        "物体の単位質量の温度を1度上昇させるために供給すべき熱量。",
        "単位質量の物体を一定温度で融解させるために必要な熱量。",
      ],
      explanations: [
        "誤り：これは物体全体の熱容量 C = mc の定義である。c は単位質量あたりの量である。",
        "正解：これは比熱容量（または比熱）であり、ブラックが明らかにした物質ごとに固有の係数である。",
        "誤り：これは単位質量あたりの融解潜熱 L の定義であり、比熱容量 c ではない。",
      ],
    },
    "l2-q5": {
      question: "ジュールが測定したカロリーの値は、現代の単位ではいくらか。",
      choices: ["1カロリー当たり約1 J", "1カロリー当たり約4,18 J", "1 カロリーあたり約 4 180 J", "1カロリー当たり約0,24 J"],
      explanations: [
        "誤り：これはカロリーとジュールが換算なしですでに同じ量を表す場合の値である。",
        "正解：1 cal ≈ 4,18 J である。1843年から1849年にかけて精度を高めながら測定されたこの値により、熱と仕事の等価性が確立された。",
        "誤り：約 4 180 J は 1 キロカロリー、すなわち 1 000 カロリーに相当する。",
        "誤り：これはおよそ逆数である（1/4,18 ≈ 0,24）。",
      ],
    },
    "l2-q6": {
      question: "食品の包装に「250 kcal」と表示されている。これはおよそ何ジュールに相当するか。",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "誤り：これは表示された単位をジュールと取り違えた計算である。",
        "正解：1 kcal = 1 000 cal。表示されたエネルギーは約 1 046 kJ である。",
        "誤り：これは 250 kcal ではなく 250 cal に相当する。接頭語キロは 1 000 倍を表す。",
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
      question: "質量 m、温度 0°C の氷を加熱し、20°C の液体の水にする。L は単位質量あたりの融解潜熱、c_water と c_ice は液体の水と氷の比熱容量、ΔT = 20°C とする。受け取った総熱量 Q を表す式はどれか。",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "誤り：この計算では、温度を変えずに0°Cで吸収される融解の潜熱を忘れている。これは熱容量とは異なるブラックの第二の発見である。",
        "正解：潜熱（一定温度での融解）と関係 Q = mcΔT（相が一定のままの加熱）は加算されるが、それぞれ過程の異なる段階に適用される。",
        "誤り：融解は含まれているが、0°C から 20°C に加熱されるのは液体の水である。c_ice ではなく c_water を使う必要がある。",
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
      question: "圧力による体積仕事だけを考える。系を孤立させる壁の性質の組合せはどれか。",
      choices: [
        "剛体、断熱性、透過性。",
        "剛体、断熱性、不透過性。",
        "剛体、透熱性、不透過性。",
        "可動、断熱性、不透過性。",
      ],
      explanations: [
        "誤り：透過性の壁は、剛体かつ断熱性であっても物質の交換を許す。",
        "正解：剛体壁は仕事の交換を、断熱壁は熱の交換を、不透過性の壁は物質の交換をそれぞれ妨げる。",
        "誤り：透熱壁は熱を通すため、系は孤立していない。",
        "誤り：可動壁は、断熱性かつ不透過性であっても体積仕事によるエネルギー交換を許す。",
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
        "熱と仕事は保存されないが、系の内部エネルギーはどの過程でも保存されるから。",
      ],
      explanations: [
        "正解：Q と W は経路に依存するが、U は初期状態と最終状態だけに依存する。dQ と書けば、熱素説を復活させることになる。",
        "誤り：U は変化し得る。U は状態関数だが、Q と W は経路に依存する。記号はこの違いを表す。",
      ],
    },
    "l4-q3": {
      question: "閉じた系がサイクル変化（A → A）を行う。収支 Q_cycle + W_cycle について何がいえるか？",
      choices: [
        "Q と W は状態関数であるため、必ずゼロである。",
        "U が状態関数なのでゼロである。",
        "サイクルが準静的な場合に限りゼロになる。",
      ],
      explanations: [
        "誤り：逆である。Q と W は状態関数ではなく、系の量ではなくエネルギーの移動である。ΔU_cycle = 0 により、サイクルでゼロになるよう制約されるのはその和だけである。",
        "正解：サイクルの終わりに系は初期状態へ戻る。U は状態関数なので ΔU_cycle = U(A) − U(A) = 0 となり、第一法則から Q_cycle + W_cycle = 0 である。",
        "誤り：どのサイクルでも系は初期状態に戻る。ΔU_cycle = 0 より Q_cycle + W_cycle = 0 となり、準静的である必要はない。",
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
      question: "閉じた系の等積変化で、仕事が圧力による体積仕事に限られる場合、常に次が成り立つ：",
      choices: ["W = 0、したがって ΔU = Q", "Q = 0、したがって ΔU = W", "ΔU = 0、したがって Q = −W"],
      explanations: [
        "正解：体積一定では体積仕事はゼロである。ここでは他の仕事はないので、W = 0 かつ ΔU = Q となる。",
        "誤り：これは断熱変化の収支であり、等積変化ではない。",
        "誤り：U は T のみに依存するので、これは理想気体の等温変化の収支である。",
      ],
    },
  },

  ko: {
    ...quizLesson5Translations.ko,
    ...quizLesson6Translations.ko,
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
        "기관이 다음 사이클을 시작하려면 저온 열원이 반드시 작업 물질을 응축시켜야 하기 때문이다.",
      ],
      explanations: [
        "정답: 기관은 고온 → 저온 열류에 매기는 통행료와 같다. 흐름이 없으면 일도 없다. 진짜 '연료'는 온도 기울기다.",
        "틀림: 온도 문턱 같은 것은 없다. 작은 차이만 있어도 충분하다(바다의 몇 도 차이를 이용하는 OTEC 발전 참조).",
        "틀림: 열기관은 작업 물질의 상변화 없이도 작동할 수 있다. 응축은 일반적인 필수 조건이 아니다.",
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
        "질량이 같은 물체라도 온도를 같은 만큼 높이는 데 필요한 열량이 다르다는 관찰.",
      ],
      explanations: [
        "정답: 열이 유한하고 보존되는 유체라면 천공을 계속해도 무한히 생겨날 수는 없다. 럼퍼드는 1798년에 열이 운동과 관련되어 있다고 결론지었다.",
        "틀림: 잠열은 오히려 열소설로 잘 설명되었다. 상태 변화 때 유체가 물질에 '결합한다'고 보았기 때문이다.",
        "틀림: 열용량이 서로 다른 것은 열소설과 양립한다. 이 관찰은 열소설을 반박하지 않는다.",
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
        "물체 전체의 온도를 1도 높이는 데 필요한 열량.",
        "물체의 단위 질량의 온도를 1도 높이는 데 공급해야 하는 열량.",
        "단위 질량의 물체를 일정한 온도에서 녹이는 데 필요한 열량.",
      ],
      explanations: [
        "틀림: 이는 물체 전체의 열용량 C = mc를 정의한다. c는 단위 질량당 값이다.",
        "정답: 비열용량(또는 비열)으로, 블랙이 밝혀낸 물질마다 고유한 계수이다.",
        "틀림: 이는 단위 질량당 융해 잠열 L을 정의하며, 비열용량 c가 아니다.",
      ],
    },
    "l2-q5": {
      question: "줄이 측정한 칼로리의 값은 현대 단위로 얼마인가?",
      choices: ["1칼로리당 약 1 J", "1칼로리당 약 4,18 J", "1칼로리당 약 4 180 J", "1칼로리당 약 0,24 J"],
      explanations: [
        "틀림: 칼로리와 줄이 환산 없이 이미 같은 양을 나타낸다면 이 값이 될 것이다.",
        "정답: 1 cal ≈ 4,18 J이다. 1843년부터 1849년까지 점점 더 정밀하게 측정된 이 값이 열과 일의 등가성을 확립했다.",
        "틀림: 약 4 180 J은 1킬로칼로리, 즉 1 000칼로리에 해당한다.",
        "틀림: 이는 대략 그 역수이다(1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "식품 포장에 '250 kcal'이라고 적혀 있다. 이는 대략 몇 줄에 해당하는가?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "틀림: 표시된 단위를 줄과 혼동한 계산이다.",
        "정답: 1 kcal = 1 000 cal이다. 표시된 에너지는 약 1 046 kJ이다.",
        "틀림: 이는 250 kcal가 아니라 250 cal에 해당한다. 접두어 킬로는 1 000배를 뜻한다.",
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
      question: "질량 m, 온도 0°C인 얼음을 가열하여 20°C의 액체 물로 만든다. L은 단위 질량당 융해 잠열, c_water와 c_ice는 액체 물과 얼음의 비열용량이며 ΔT = 20°C이다. 받은 총열량 Q를 나타내는 식은 어느 것인가?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "틀림: 이 계산은 온도가 변하지 않은 채 0°C에서 흡수되는 융해 잠열을 빠뜨린다. 이것이 열용량과 구별되는 블랙의 두 번째 발견이다.",
        "정답: 잠열(일정 온도에서의 융해)과 관계 Q = mcΔT(상이 일정한 상태에서의 가열)는 더해지지만, 각각 과정의 서로 다른 단계에 적용된다.",
        "틀림: 융해는 포함되어 있지만 0°C에서 20°C로 가열되는 것은 액체 물이다. c_ice가 아니라 c_water를 사용해야 한다.",
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
      question: "압력에 의한 부피 일만 고려한다. 계를 고립시키는 벽의 성질은 어느 것인가?",
      choices: [
        "강체, 단열성, 투과성.",
        "강체, 단열성, 불투과성.",
        "강체, 투열성, 불투과성.",
        "가동성, 단열성, 불투과성.",
      ],
      explanations: [
        "틀림: 투과성 벽은 강체이면서 단열성이어도 물질 교환을 허용한다.",
        "정답: 강체 벽은 일의 교환을, 단열벽은 열의 교환을, 불투과성 벽은 물질의 교환을 막는다.",
        "틀림: 투열벽은 열을 통과시키므로 계가 고립되어 있지 않다.",
        "틀림: 움직이는 벽은 단열성이면서 불투과성이어도 부피 일을 통한 에너지 교환을 허용한다.",
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
        "열과 일은 보존되지 않지만 계의 내부 에너지는 모든 과정에서 보존되기 때문이다.",
      ],
      explanations: [
        "정답: Q와 W는 경로에 의존하지만 U는 초기 상태와 최종 상태에만 의존한다. dQ라고 쓰는 것은 열소 이론을 되살리는 것과 같다.",
        "틀림: U는 변할 수 있다. U는 상태 함수이고 Q와 W는 경로에 의존한다. 표기는 이 차이를 나타낸다.",
      ],
    },
    "l4-q3": {
      question: "닫힌계가 순환 과정(A → A)을 겪는다. 수지 Q_cycle + W_cycle에 대해 무엇을 말할 수 있는가?",
      choices: [
        "Q와 W는 상태함수이므로 반드시 0이다.",
        "U가 상태함수이므로 0이다.",
        "사이클이 준정적일 때만 영이다.",
      ],
      explanations: [
        "틀림: 반대이다. Q와 W는 상태함수가 아니라 계의 양이 아닌 에너지 전달이다. ΔU_cycle = 0이므로 한 순환에서 0이 되도록 제한되는 것은 그 합뿐이다.",
        "정답: 한 순환이 끝나면 계는 초기 상태로 돌아온다. U는 상태함수이므로 ΔU_cycle = U(A) − U(A) = 0이고, 따라서 제1법칙에 의해 Q_cycle + W_cycle = 0이다.",
        "틀림: 모든 사이클은 계를 초기 상태로 되돌린다. ΔU_cycle = 0이므로 Q_cycle + W_cycle = 0이며, 준정적 사이클일 필요는 없다.",
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
      question: "닫힌계의 등적 과정에서 압력에 의한 부피 일만 가능하다면 언제나 다음이 성립한다:",
      choices: ["W = 0, 따라서 ΔU = Q", "Q = 0, 따라서 ΔU = W", "ΔU = 0, 따라서 Q = −W"],
      explanations: [
        "정답: 부피가 일정하면 부피 일은 영이다. 여기서는 다른 형태의 일이 없으므로 W = 0이고 ΔU = Q이다.",
        "틀림: 이는 단열 과정의 수지이지 등적 과정의 수지가 아니다.",
        "틀림: U는 T에만 의존하므로 이는 이상 기체의 등온 과정에 대한 수지이다.",
      ],
    },
  },

  hi: {
    ...quizLesson5Translations.hi,
    ...quizLesson6Translations.hi,
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
        "क्योंकि इंजन के अगले चक्र को शुरू करने के लिए शीत स्रोत को कार्यकारी द्रव का संघनन करना अनिवार्य है।",
      ],
      explanations: [
        "सही: इंजन उष्ण → शीत ऊष्मा प्रवाह पर वसूले गए कर जैसा है; प्रवाह नहीं तो कार्य नहीं। असली “ईंधन” तापप्रवणता है।",
        "गलत: कोई ताप-सीमा नहीं होती; थोड़ा-सा अंतर भी पर्याप्त है (समुद्र में कुछ ही डिग्री के अंतर का उपयोग करने वाले OTEC संयंत्र देखें)।",
        "गलत: ऊष्मा इंजन कार्यकारी द्रव के प्रावस्था परिवर्तन के बिना भी चल सकता है। संघनन कोई सामान्य अनिवार्य शर्त नहीं है।",
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
        "यह प्रेक्षण कि समान द्रव्यमान वाले पिंडों का ताप समान मात्रा में बढ़ाने के लिए अलग-अलग ऊष्मा की आवश्यकता होती है।",
      ],
      explanations: [
        "सही: यदि ऊष्मा कोई सीमित और संरक्षित द्रव होती, तो लगातार बोरिंग करने से वह अनिश्चित काल तक उत्पन्न नहीं हो सकती थी। रम्फ़ोर्ड ने 1798 में निष्कर्ष निकाला कि उसका संबंध गति से है।",
        "गलत: गुप्त ऊष्मा को कैलोरिक सिद्धांत उलटे अच्छी तरह समझाता था—अवस्था परिवर्तन में द्रव को पदार्थ से 'बंधा' हुआ माना जाता था।",
        "गलत: अलग-अलग ऊष्मा धारिताएँ कैलोरिक सिद्धांत के अनुकूल हैं; यह प्रेक्षण उसका खंडन नहीं करता।",
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
        "पूरे पिंड का ताप एक डिग्री बढ़ाने के लिए आवश्यक ऊष्मा।",
        "पिंड के इकाई द्रव्यमान का तापमान एक केल्विन बढ़ाने के लिए आवश्यक ऊष्मा।",
        "स्थिर ताप पर पिंड के इकाई द्रव्यमान को पिघलाने के लिए आवश्यक ऊष्मा।",
      ],
      explanations: [
        "गलत: यह पूरे पिंड की ऊष्मा धारिता C = mc है; c प्रति इकाई द्रव्यमान की राशि है।",
        "सही: यह विशिष्ट ऊष्मा धारिता (या विशिष्ट ऊष्मा) है, अर्थात प्रत्येक पदार्थ का वह विशिष्ट गुणांक जिसे ब्लैक ने उजागर किया।",
        "गलत: यह गलन की विशिष्ट गुप्त ऊष्मा L है, विशिष्ट ऊष्मा धारिता c नहीं।",
      ],
    },
    "l2-q5": {
      question: "जूल द्वारा मापी गई कैलोरी का मान आधुनिक इकाइयों में कितना है?",
      choices: ["लगभग 1 J प्रति कैलोरी", "लगभग 4,18 J प्रति कैलोरी", "लगभग 4 180 J प्रति कैलोरी", "लगभग 0,24 J प्रति कैलोरी"],
      explanations: [
        "गलत: यह तब होता यदि कैलोरी और जूल बिना रूपांतरण के पहले से एक ही मान मापते।",
        "सही: 1 cal ≈ 4,18 J। 1843 से 1849 के बीच बढ़ती परिशुद्धता से मापे गए इसी मान ने ऊष्मा और कार्य की तुल्यता स्थापित की।",
        "गलत: लगभग 4 180 J एक किलोकैलोरी, यानी 1 000 कैलोरी के बराबर हैं।",
        "गलत: यह लगभग उसका व्युत्क्रम है (1/4,18 ≈ 0,24)।",
      ],
    },
    "l2-q6": {
      question: "किसी खाद्य पैकेट पर '250 kcal' लिखा है। यह लगभग कितने जूल के बराबर है?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "गलत: इसमें लिखी हुई इकाई को जूल समझ लिया गया है।",
        "सही: 1 kcal = 1 000 cal। दर्शाई गई ऊर्जा लगभग 1 046 kJ है।",
        "गलत: यह 250 cal के बराबर है, 250 kcal के नहीं। उपसर्ग किलो का अर्थ 1 000 का गुणक है।",
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
      question: "द्रव्यमान m की 0°C की बर्फ़ को गरम करके 20°C का द्रव पानी बनाया जाता है। L गलन की विशिष्ट गुप्त ऊष्मा है, c_water और c_ice द्रव पानी और बर्फ़ की विशिष्ट ऊष्मा धारिताएँ हैं, तथा ΔT = 20°C है। प्राप्त कुल ऊष्मा Q का सही व्यंजक कौन-सा है?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "गलत: इस गणना में गलन की गुप्त ऊष्मा छूट जाती है, जो तापमान बदले बिना 0°C पर अवशोषित होती है। ऊष्मा धारिता से अलग यह ब्लैक की दूसरी खोज थी।",
        "सही: गुप्त ऊष्मा (स्थिर तापमान पर गलन) और संबंध Q = mcΔT (एक ही अवस्था में तापन) जोड़े जाते हैं, पर दोनों प्रक्रम के अलग-अलग चरणों पर लागू होते हैं।",
        "गलत: गलन शामिल है, लेकिन 0°C से 20°C तक तापन द्रव पानी का होता है। c_ice के बजाय c_water का उपयोग करना चाहिए।",
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
      question: "केवल दाब बलों द्वारा किया गया कार्य माना जाता है। दीवारों के कौन-से गुण निकाय का विलगन सुनिश्चित करते हैं?",
      choices: [
        "दृढ़, रुद्धोष्म और पारगम्य।",
        "दृढ़, रुद्धोष्म और अपारगम्य।",
        "दृढ़, ऊष्मापारगम्य और अपारगम्य।",
        "गतिशील, रुद्धोष्म और अपारगम्य।",
      ],
      explanations: [
        "गलत: पारगम्य दीवारें पदार्थ का आदान-प्रदान होने देती हैं, भले ही वे दृढ़ और रुद्धोष्म हों।",
        "सही: दृढ़ दीवार कार्य का, रुद्धोष्म दीवार ऊष्मा का और अपारगम्य दीवार पदार्थ का विनिमय रोकती है।",
        "गलत: ऊष्मापारगम्य दीवारें ऊष्मा को पार होने देती हैं; निकाय विलगित नहीं होगा।",
        "गलत: गतिशील दीवारें दाब बलों के कार्य का आदान-प्रदान होने देती हैं, भले ही वे रुद्धोष्म और अपारगम्य हों।",
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
        "क्योंकि ऊष्मा और कार्य संरक्षित नहीं रहते, जबकि निकाय की आंतरिक ऊर्जा हर प्रक्रम में संरक्षित रहती है।",
      ],
      explanations: [
        "सही: Q और W मार्ग पर निर्भर करते हैं, जबकि U केवल आरंभिक और अंतिम अवस्थाओं पर निर्भर करता है। dQ लिखना कैलरिक सिद्धांत को पुनर्जीवित करने के समान होता।",
        "गलत: U बदल सकती है। U अवस्था फलन है, जबकि Q और W पथ पर निर्भर हैं; संकेत इसी अंतर को दर्शाते हैं।",
      ],
    },
    "l4-q3": {
      question: "एक बंद निकाय चक्रीय प्रक्रम (A → A) से गुजरता है। ऊर्जा-संतुलन Q_cycle + W_cycle के बारे में क्या कहा जा सकता है?",
      choices: [
        "यह अनिवार्यतः शून्य है, क्योंकि Q और W अवस्था फलन हैं।",
        "यह शून्य है, क्योंकि U एक अवस्था फलन है।",
        "यह केवल तभी शून्य होता है जब चक्र अर्धस्थैतिक हो।",
      ],
      explanations: [
        "गलत: उलटा सत्य है—Q और W अवस्था फलन नहीं, बल्कि ऊर्जा-अंतरण हैं, निकाय की राशियाँ नहीं। ΔU_cycle = 0 के कारण केवल उनका योग ही किसी चक्र पर शून्य होना आवश्यक है।",
        "सही: चक्र के अंत में निकाय अपनी आरंभिक अवस्था में लौट आता है। चूँकि U अवस्था फलन है, ΔU_cycle = U(A) − U(A) = 0; इसलिए प्रथम नियम Q_cycle + W_cycle = 0 अनिवार्य करता है।",
        "गलत: हर चक्र निकाय को प्रारंभिक अवस्था में लौटाता है। ΔU_cycle = 0 से Q_cycle + W_cycle = 0 अनिवार्य है, भले ही चक्र अर्धस्थैतिक न हो।",
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
      question: "बंद निकाय के समआयतनी प्रक्रम में, जब कार्य केवल दाब बलों द्वारा हो सकता है, सदैव होता है:",
      choices: ["W = 0, अतः ΔU = Q", "Q = 0, अतः ΔU = W", "ΔU = 0, अतः Q = −W"],
      explanations: [
        "सही: स्थिर आयतन पर दाब बलों का कार्य शून्य है। यहाँ यही एकमात्र कार्य है, इसलिए W = 0 और ΔU = Q।",
        "गलत: यह रुद्धोष्म प्रक्रम का संतुलन है, समआयतनी प्रक्रम का नहीं।",
        "गलत: यह आदर्श गैस के समतापी प्रक्रम का संतुलन है, क्योंकि U केवल T पर निर्भर करता है।",
      ],
    },
  },

  vi: {
    ...quizLesson5Translations.vi,
    ...quizLesson6Translations.vi,
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
        "Vì nguồn lạnh nhất thiết phải làm ngưng tụ môi chất công tác để động cơ có thể bắt đầu chu trình tiếp theo.",
      ],
      explanations: [
        "Đúng: động cơ giống như một trạm thu phí đặt trên dòng nhiệt nóng → lạnh; không có dòng thì không có công. “Nhiên liệu” thật sự chính là gradien nhiệt độ.",
        "Sai: không tồn tại ngưỡng nhiệt độ nào; một chênh lệch dù nhỏ cũng đủ (xem các nhà máy OTEC khai thác vài độ chênh lệch trong đại dương).",
        "Sai: động cơ nhiệt có thể hoạt động mà môi chất không chuyển pha. Sự ngưng tụ không phải là điều kiện bắt buộc chung.",
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
        "Quan sát cho thấy các vật có cùng khối lượng cần những lượng nhiệt khác nhau để tăng nhiệt độ một lượng như nhau.",
      ],
      explanations: [
        "Đúng: nếu nhiệt là một lưu chất hữu hạn và được bảo toàn thì việc khoan liên tục không thể sinh nhiệt mãi mãi. Năm 1798, Rumford kết luận rằng nhiệt gắn với chuyển động.",
        "Sai: ngược lại, thuyết chất nhiệt giải thích tốt ẩn nhiệt bằng cách cho rằng lưu chất 'liên kết' với vật chất khi chuyển trạng thái.",
        "Sai: các nhiệt dung khác nhau vẫn phù hợp với thuyết nhiệt chất; quan sát này không bác bỏ thuyết đó.",
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
        "Nhiệt lượng cần để tăng nhiệt độ của toàn bộ vật lên một độ.",
        "Nhiệt lượng cần cung cấp để làm nhiệt độ của một đơn vị khối lượng vật tăng một độ.",
        "Nhiệt lượng cần để làm nóng chảy một đơn vị khối lượng của vật ở nhiệt độ không đổi.",
      ],
      explanations: [
        "Sai: đó là nhiệt dung C = mc của toàn bộ vật; c được tính trên một đơn vị khối lượng.",
        "Đúng: đó là nhiệt dung riêng (hay nhiệt riêng), hệ số đặc trưng cho từng vật liệu mà Black đã làm rõ.",
        "Sai: đó là nhiệt nóng chảy riêng L, không phải nhiệt dung riêng c.",
      ],
    },
    "l2-q5": {
      question: "Theo đơn vị hiện đại, giá trị của calo mà Joule đo được là bao nhiêu?",
      choices: ["Khoảng 1 J mỗi calo", "Khoảng 4,18 J mỗi calo", "Khoảng 4 180 J mỗi calo", "Khoảng 0,24 J mỗi calo"],
      explanations: [
        "Sai: điều này chỉ đúng nếu calo và joule vốn đo cùng một giá trị mà không cần chuyển đổi.",
        "Đúng: 1 cal ≈ 4,18 J; giá trị này, được đo ngày càng chính xác từ năm 1843 đến 1849, đã xác lập sự tương đương giữa nhiệt và công.",
        "Sai: khoảng 4 180 J tương ứng với một kilocalo, tức 1 000 calo.",
        "Sai: đây xấp xỉ là giá trị nghịch đảo (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Một bao bì thực phẩm ghi '250 kcal'. Giá trị này xấp xỉ bao nhiêu joule?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Sai: cách tính này nhầm đơn vị ghi trên bao bì với joule.",
        "Đúng: 1 kcal = 1 000 cal. Năng lượng ghi trên bao bì xấp xỉ 1 046 kJ.",
        "Sai: giá trị này tương ứng với 250 cal, không phải 250 kcal. Tiền tố kilo biểu thị hệ số 1 000.",
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
      question: "Một viên nước đá khối lượng m ở 0°C được làm nóng thành nước lỏng ở 20°C. L là nhiệt nóng chảy riêng, c_water và c_ice là nhiệt dung riêng của nước lỏng và nước đá, còn ΔT = 20°C. Biểu thức nào cho tổng nhiệt lượng nhận được Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Sai: phép tính này bỏ qua ẩn nhiệt nóng chảy, được hấp thụ ở 0°C mà nhiệt độ không đổi; đó chính là khám phá thứ hai của Black, khác với nhiệt dung.",
        "Đúng: ẩn nhiệt (nóng chảy ở nhiệt độ không đổi) và hệ thức Q = mcΔT (làm nóng trong cùng một pha) được cộng lại, nhưng mỗi phần áp dụng cho một giai đoạn riêng của quá trình.",
        "Sai: đã tính phần nóng chảy, nhưng từ 0°C đến 20°C là nước lỏng được làm nóng. Phải dùng c_water, không phải c_ice.",
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
      question: "Chỉ xét công của lực áp suất. Những tính chất nào của vách bảo đảm hệ cô lập?",
      choices: [
        "Cứng, đoạn nhiệt và thấm.",
        "Cứng, đoạn nhiệt và không thấm.",
        "Cứng, dẫn nhiệt và không thấm.",
        "Di động, đoạn nhiệt và không thấm.",
      ],
      explanations: [
        "Sai: vách thấm cho phép trao đổi vật chất, dù cứng và đoạn nhiệt.",
        "Đúng: vách cứng ngăn trao đổi công, vách đoạn nhiệt ngăn trao đổi nhiệt và vách không thấm ngăn trao đổi vật chất.",
        "Sai: vách dẫn nhiệt cho nhiệt đi qua nên hệ sẽ không cô lập.",
        "Sai: vách di động cho phép trao đổi công của lực áp suất, dù đoạn nhiệt và không thấm.",
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
        "Vì nhiệt lượng và công không được bảo toàn, còn nội năng của hệ được bảo toàn trong mọi quá trình.",
      ],
      explanations: [
        "Đúng: Q và W phụ thuộc vào đường đi, khác với U chỉ phụ thuộc vào trạng thái đầu và cuối. Viết dQ chẳng khác nào làm sống lại thuyết chất nhiệt.",
        "Sai: U có thể thay đổi. U là hàm trạng thái, còn Q và W phụ thuộc đường đi; ký hiệu thể hiện sự khác biệt này.",
      ],
    },
    "l4-q3": {
      question: "Một hệ kín trải qua quá trình theo chu trình (A → A). Có thể khẳng định gì về cân bằng Q_cycle + W_cycle?",
      choices: [
        "Nó nhất thiết bằng không vì Q và W là hàm trạng thái.",
        "Nó bằng không vì U là một hàm trạng thái.",
        "Chỉ bằng không nếu chu trình là tựa tĩnh.",
      ],
      explanations: [
        "Sai: điều ngược lại mới đúng—Q và W không phải là hàm trạng thái; chúng là các truyền năng lượng, không phải đại lượng của hệ. Chỉ tổng của chúng bị buộc phải bằng không trên một chu trình thông qua ΔU_cycle = 0.",
        "Đúng: sau một chu trình, hệ trở lại trạng thái ban đầu. Vì U là hàm trạng thái nên ΔU_cycle = U(A) − U(A) = 0; do đó nguyên lý thứ nhất áp đặt Q_cycle + W_cycle = 0.",
        "Sai: mọi chu trình đều đưa hệ về trạng thái ban đầu. ΔU_cycle = 0 đòi hỏi Q_cycle + W_cycle = 0, dù chu trình không tựa tĩnh.",
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
      question: "Trong một quá trình đẳng tích của hệ kín, khi công duy nhất là công của lực áp suất, ta luôn có:",
      choices: ["W = 0, nên ΔU = Q", "Q = 0, nên ΔU = W", "ΔU = 0, nên Q = −W"],
      explanations: [
        "Đúng: ở thể tích không đổi, công của lực áp suất bằng không. Đây là dạng công duy nhất, nên W = 0 và ΔU = Q.",
        "Sai: đây là cân bằng của một quá trình đoạn nhiệt, không phải đẳng tích.",
        "Sai: đây là cân bằng của một quá trình đẳng nhiệt của khí lý tưởng, vì U chỉ phụ thuộc vào T.",
      ],
    },
  },

  // Arabic is rendered RTL: the hot → cold arrow of the French source is spelled
  // out in words here, since a bare "→" flips visually inside an RTL paragraph.
  ar: {
    ...quizLesson5Translations.ar,
    ...quizLesson6Translations.ar,
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
        "لأن المصدر البارد يجب بالضرورة أن يكثف المائع العامل كي يتمكن المحرك من بدء دورة جديدة.",
      ],
      explanations: [
        "صحيح: المحرك أشبه برسم مرور يفرض على التدفق الحراري من الساخن إلى البارد؛ فلا شغل من دون تدفق. و«الوقود» الحقيقي هو تدرج درجة الحرارة.",
        "خطأ: لا وجود لأي عتبة حرارية؛ يكفي فرق ولو ضئيل (انظر محطات \u2066OTEC\u2069 التي تستثمر فرقا من بضع درجات في المحيط).",
        "خطأ: يمكن للمحرك الحراري أن يعمل دون تغير طور المائع العامل. التكاثف ليس شرطا عاما.",
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
        "ملاحظة أن أجساما متساوية الكتلة تحتاج إلى كميات مختلفة من الحرارة لرفع درجة حرارتها بالمقدار نفسه.",
      ],
      explanations: [
        "صحيح: لو كانت الحرارة مائعا محفوظا ومحدودا لما أمكن للحفر المستمر أن يولدها إلى ما لا نهاية. واستنتج رمفورد سنة \u20661798\u2069 أنها مرتبطة بالحركة.",
        "خطأ: على العكس، كانت نظرية السيال الحراري تفسر الحرارة الكامنة تفسيرا جيدا، إذ يفترض أن المائع «يرتبط» بالمادة أثناء تغير الحالة.",
        "خطأ: اختلاف السعات الحرارية متوافق مع نظرية السيال الحراري؛ هذه الملاحظة لا تدحضها.",
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
      question: "في العلاقة \u2066Q = m c ΔT\u2069 التي أبرزها جوزيف بلاك، ماذا يمثل المعامل \u2066c\u2069؟",
      choices: [
        "الحرارة اللازمة لرفع درجة حرارة الجسم كله درجة واحدة.",
        "كمية الحرارة اللازم تزويد وحدة كتلة من الجسم بها لرفع درجة حرارتها درجة واحدة.",
        "الحرارة اللازمة لصهر وحدة كتلة من الجسم عند درجة حرارة ثابتة.",
      ],
      explanations: [
        "خطأ: هذا تعريف السعة الحرارية \u2066C = mc\u2069 للجسم كله؛ أما \u2066c\u2069 فهي لكل وحدة كتلة.",
        "صحيح: إنها السعة الحرارية النوعية (أو الحرارة النوعية)، أي المعامل المميز لكل مادة الذي أبرزه بلاك.",
        "خطأ: هذا تعريف الحرارة الكامنة النوعية للانصهار \u2066L\u2069، وليس السعة الحرارية النوعية \u2066c.\u2069",
      ],
    },
    "l2-q5": {
      question: "ما قيمة السعر الحراري التي قاسها جول، بالوحدات الحديثة؟",
      choices: ["نحو \u20661 J\u2069 لكل سعر حراري", "نحو \u20664,18 J\u2069 لكل سعر حراري", "نحو \u20664 180 J\u2069 لكل سعرة حرارية", "نحو \u20660,24 J\u2069 لكل سعر حراري"],
      explanations: [
        "خطأ: لا يصح ذلك إلا لو كان السعر الحراري والجول يقيسان الشيء نفسه من دون تحويل.",
        "صحيح: \u20661 cal ≈ 4,18 J\u2069؛ وهذه القيمة، التي قيست بدقة متزايدة بين \u20661843\u2069 و\u20661849\u2069، هي التي أثبتت تكافؤ الحرارة والشغل.",
        "خطأ: نحو \u20664 180 J\u2069 يقابل سعرة حرارية كبيرة واحدة، أي \u20661 000\u2069 سعرة حرارية صغيرة.",
        "خطأ: هذه تقريبا القيمة العكسية \u2066(1/4,18 ≈ 0,24).\u2069",
      ],
    },
    "l2-q6": {
      question: "كتب على عبوة غذائية «\u2066250 kcal\u2069». فكم تساوي هذه القيمة تقريبا بالجول؟",
      choices: ["\u2066≈ 250 J\u2069", "\u2066≈ 1046 kJ\u2069", "\u2066≈ 1046 J\u2069", "\u2066≈ 250 kJ\u2069"],
      explanations: [
        "خطأ: يعني ذلك الخلط بين الوحدة المبينة والجول.",
        "صحيح: \u20661 kcal = 1 000 cal.\u2069 الطاقة المذكورة تقارب \u20661 046 kJ.\u2069",
        "خطأ: هذا يقابل \u2066250 cal\u2069 وليس \u2066250 kcal.\u2069 تمثل البادئة كيلو عامل ضرب مقداره \u20661 000.\u2069",
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
      question: "نسخن مكعب جليد كتلته \u2066m\u2069 عند \u20660°C\u2069 حتى يصبح ماء سائلا عند \u206620°C.\u2069 نرمز بالرمز \u2066L\u2069 إلى الحرارة الكامنة النوعية للانصهار، وبالرمزين \u2066c_water\u2069 و\u2066c_ice\u2069 إلى السعتين الحراريتين النوعيتين للماء السائل والجليد، ونعتمد \u2066ΔT = 20°C.\u2069 أي تعبير يعطي الحرارة الكلية المتلقاة \u2066Q\u2069؟",
      choices: [
        "\u2066Q = m c_water ΔT\u2069",
        "\u2066Q = m L + m c_water ΔT\u2069",
        "\u2066Q = m L + m c_ice ΔT\u2069",
      ],
      explanations: [
        "خطأ: يهمل هذا الحساب الحرارة الكامنة للانصهار التي تمتص عند \u20660°C\u2069 من دون تغير في درجة الحرارة؛ وهذا تحديدا هو اكتشاف بلاك الثاني المتميز عن السعة الحرارية.",
        "صحيح: تجمع الحرارة الكامنة (الانصهار عند درجة حرارة ثابتة) والعلاقة \u2066Q = mcΔT (\u2069التسخين من دون تغير في الطور)، لكن كل منهما يطبق على مرحلة مختلفة من العملية.",
        "خطأ: الانصهار محسوب، لكن التسخين من \u20660°C\u2069 إلى \u206620°C\u2069 يخص الماء السائل. يجب استخدام \u2066c_water\u2069 وليس \u2066c_ice.\u2069",
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
      question: "نعتبر شغل قوى الضغط وحده. ما خصائص الجدران التي تضمن عزل النظام؟",
      choices: [
        "صلبة وكظومة ونافذة للمادة.",
        "صلبة وكظومة وغير نافذة للمادة.",
        "صلبة ونافذة للحرارة وغير نافذة للمادة.",
        "متحركة وكظومة وغير نافذة للمادة.",
      ],
      explanations: [
        "خطأ: الجدران النافذة للمادة تسمح بتبادلها، حتى إن كانت صلبة وكظومة.",
        "صحيح: يمنع الجدار الصلب تبادل الشغل، ويمنع الجدار الكظوم تبادل الحرارة، ويمنع الجدار غير النافذ تبادل المادة.",
        "خطأ: تسمح الجدران النافذة للحرارة بمرور الحرارة، فلا يكون النظام معزولا.",
        "خطأ: الجدران المتحركة تسمح بتبادل شغل قوى الضغط، حتى إن كانت كظومة وغير نافذة للمادة.",
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
      question: "لماذا نكتب \u2066δQ\u2069 و\u2066δW\u2069 بدلا من \u2066dQ\u2069 و\u2066dW\u2069؟",
      choices: [
        "لأنهما تفاضلان غير تامين: فتكاملهما يتعلق بالمسار المتبع.",
        "لأن الحرارة والشغل لا ينحفظان، بينما تنحفظ الطاقة الداخلية للنظام في كل تحول.",
      ],
      explanations: [
        "صحيح: تتعلق \u2066Q\u2069 و\u2066W\u2069 بالمسار، خلافا لـ\u2066U\u2069 التي لا تتعلق إلا بالحالتين البدئية والنهائية. وكتابة \u2066dQ\u2069 تعني إحياء نظرية السيال الحراري.",
        "خطأ: يمكن أن تتغير \u2066U.\u2069 فهي دالة حالة، بينما يعتمد \u2066Q\u2069 و\u2066W\u2069 على المسار؛ والترميز يعبر عن هذا الفرق.",
      ],
    },
    "l4-q3": {
      question: "يخضع نظام مغلق لتحول دوري \u2066(A → A).\u2069 ماذا يمكن أن نقول عن الحصيلة \u2066Q_cycle + W_cycle\u2069؟",
      choices: [
        "هي منعدمة بالضرورة لأن \u2066Q\u2069 و\u2066W\u2069 دالتا حالة.",
        "هي منعدمة لأن \u2066U\u2069 دالة حالة.",
        "يساوي صفرا فقط إذا كانت الدورة شبه ساكنة.",
      ],
      explanations: [
        "خطأ: العكس هو الصحيح—فـ\u2066Q\u2069 و\u2066W\u2069 ليستا دالتي حالة؛ إنهما انتقالان للطاقة لا كميتان للنظام. ولا يلزم أن ينعدم على دورة، بفعل \u2066ΔU_cycle = 0\u2069، إلا مجموعهما.",
        "صحيح: في نهاية الدورة يعود النظام إلى حالته البدئية. وبما أن \u2066U\u2069 دالة حالة فإن \u2066ΔU_cycle = U(A) − U(A) = 0\u2069؛ ومن ثم يفرض المبدأ الأول \u2066Q_cycle + W_cycle = 0.\u2069",
        "خطأ: كل دورة تعيد النظام إلى حالته الابتدائية. يفرض \u2066ΔU_cycle = 0\u2069 أن يكون \u2066Q_cycle + W_cycle = 0\u2069، حتى إن لم تكن الدورة شبه ساكنة.",
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
      question: "في تحول ثابت الحجم لنظام مغلق، إذا كان الشغل الوحيد هو شغل قوى الضغط، يكون لدينا دائما:",
      choices: ["\u2066W = 0\u2069، ومن ثم \u2066ΔU = Q\u2069", "\u2066Q = 0\u2069، ومن ثم \u2066ΔU = W\u2069", "\u2066ΔU = 0\u2069، ومن ثم \u2066Q = −W\u2069"],
      explanations: [
        "صحيح: عند ثبات الحجم ينعدم شغل قوى الضغط. وهو الشغل الوحيد هنا، لذا \u2066W = 0\u2069 و\u2066ΔU = Q.\u2069",
        "خطأ: هذه حصيلة تحول كظوم، لا تحول ثابت الحجم.",
        "خطأ: هذه حصيلة تحول متساوي الحرارة لغاز مثالي، لأن \u2066U\u2069 لا تتعلق إلا بـ\u2066T.\u2069",
      ],
    },
  },

  id: {
    ...quizLesson5Translations.id,
    ...quizLesson6Translations.id,
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
        "Karena reservoir dingin harus mengembunkan fluida kerja agar mesin dapat memulai siklus berikutnya.",
      ],
      explanations: [
        "Benar: mesin ibarat gerbang tol pada aliran kalor panas → dingin; tanpa aliran, tidak ada kerja. “Bahan bakar” yang sebenarnya adalah gradien suhu.",
        "Salah: tidak ada ambang suhu apa pun; perbedaan yang kecil pun sudah cukup (lih. pembangkit OTEC yang memanfaatkan selisih beberapa derajat di laut).",
        "Salah: mesin kalor dapat bekerja tanpa perubahan fase fluida kerja. Pengembunan bukan syarat umum.",
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
        "Pengamatan bahwa benda bermassa sama memerlukan jumlah kalor berbeda untuk kenaikan suhu yang sama.",
      ],
      explanations: [
        "Benar: jika kalor merupakan fluida kekal yang jumlahnya terbatas, pengeboran terus-menerus tidak mungkin menghasilkannya tanpa henti. Pada 1798 Rumford menyimpulkan bahwa kalor berkaitan dengan gerak.",
        "Salah: sebaliknya, teori kalorik menjelaskan kalor laten dengan baik—fluida tersebut dianggap “terikat” pada materi selama perubahan wujud.",
        "Salah: kapasitas kalor yang berbeda sesuai dengan teori kalorik; pengamatan ini tidak membantahnya.",
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
        "Kalor yang diperlukan untuk menaikkan suhu seluruh benda sebesar satu derajat.",
        "Jumlah kalor yang harus diberikan kepada satu satuan massa benda untuk menaikkan suhunya satu derajat.",
        "Kalor yang diperlukan untuk melebur satu satuan massa benda pada suhu tetap.",
      ],
      explanations: [
        "Salah: itu mendefinisikan kapasitas kalor C = mc seluruh benda; c adalah besaran per satuan massa.",
        "Benar: c adalah kalor jenis, yakni koefisien khas setiap bahan yang ditunjukkan Black.",
        "Salah: itu mendefinisikan kalor laten peleburan per satuan massa L, bukan kalor jenis c.",
      ],
    },
    "l2-q5": {
      question: "Dalam satuan modern, berapakah nilai kalori yang diukur oleh Joule?",
      choices: ["Sekitar 1 J per kalori", "Sekitar 4,18 J per kalori", "Sekitar 4 180 J per kalori", "Sekitar 0,24 J per kalori"],
      explanations: [
        "Salah: ini hanya benar jika kalori dan joule sudah mengukur hal yang sama tanpa konversi.",
        "Benar: 1 cal ≈ 4,18 J; nilai yang diukur dengan ketelitian yang terus meningkat antara 1843 dan 1849 inilah yang menetapkan kesetaraan antara kalor dan kerja.",
        "Salah: sekitar 4 180 J setara dengan satu kilokalori, yaitu 1 000 kalori.",
        "Salah: ini kira-kira nilai kebalikannya (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Sebuah kemasan makanan mencantumkan “250 kcal”. Kira-kira berapa joule nilai itu?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Salah: ini berarti menyamakan satuan yang dicantumkan dengan joule.",
        "Benar: 1 kcal = 1 000 cal. Energi yang tercantum sekitar 1 046 kJ.",
        "Salah: itu setara dengan 250 cal, bukan 250 kcal. Awalan kilo menyatakan faktor 1 000.",
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
      question: "Es bermassa m pada 0°C dipanaskan hingga menjadi air cair pada 20°C. L adalah kalor laten peleburan per satuan massa, c_water dan c_ice adalah kalor jenis air cair dan es, dan ΔT = 20°C. Manakah ungkapan kalor total yang diterima Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Salah: perhitungan ini melupakan kalor laten peleburan, yang diserap pada 0°C tanpa perubahan suhu; inilah tepatnya penemuan kedua Black, yang berbeda dari kalor jenis.",
        "Benar: kalor laten (peleburan pada suhu konstan) dan hubungan Q = mcΔT (pemanasan tanpa perubahan fase) dijumlahkan, tetapi masing-masing berlaku pada tahap proses yang berbeda.",
        "Salah: peleburan sudah dihitung, tetapi yang dipanaskan dari 0°C ke 20°C adalah air cair. Gunakan c_water, bukan c_ice.",
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
      question: "Hanya kerja oleh gaya tekanan yang dipertimbangkan. Sifat dinding manakah yang memastikan sistem terisolasi?",
      choices: [
        "Kaku, adiabatik, dan permeabel.",
        "Kaku, adiabatik, dan impermeabel.",
        "Kaku, diatermal, dan impermeabel.",
        "Bergerak, adiabatik, dan impermeabel.",
      ],
      explanations: [
        "Salah: dinding permeabel memungkinkan pertukaran materi, meskipun kaku dan adiabatik.",
        "Benar: dinding kaku mencegah pertukaran kerja, dinding adiabatik mencegah pertukaran kalor, dan dinding impermeabel mencegah pertukaran materi.",
        "Salah: dinding diatermal memungkinkan perpindahan kalor; sistemnya tidak akan terisolasi.",
        "Salah: dinding yang dapat bergerak memungkinkan pertukaran kerja oleh gaya tekanan, meskipun adiabatik dan impermeabel.",
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
        "Karena kalor dan kerja tidak kekal, sedangkan energi dalam sistem kekal dalam setiap proses.",
      ],
      explanations: [
        "Benar: Q dan W bergantung pada lintasan, berbeda dengan U yang hanya bergantung pada keadaan awal dan akhir. Menulis dQ sama saja dengan menghidupkan kembali teori kalorik.",
        "Salah: U dapat berubah. U adalah fungsi keadaan, sedangkan Q dan W bergantung pada lintasan; notasi menyatakan perbedaan ini.",
      ],
    },
    "l4-q3": {
      question: "Sebuah sistem tertutup mengalami proses siklik (A → A). Apa yang dapat dikatakan tentang neraca Q_cycle + W_cycle?",
      choices: [
        "Nilainya pasti nol karena Q dan W adalah fungsi keadaan.",
        "Nilainya nol karena U adalah fungsi keadaan.",
        "Nilainya nol hanya jika siklus bersifat kuasistatik.",
      ],
      explanations: [
        "Salah: justru kebalikannya—Q dan W bukan fungsi keadaan; keduanya adalah perpindahan energi, bukan besaran sistem. Hanya jumlah keduanya yang harus nol dalam satu siklus melalui ΔU_cycle = 0.",
        "Benar: pada akhir siklus sistem kembali ke keadaan awal. Karena U adalah fungsi keadaan, ΔU_cycle = U(A) − U(A) = 0; maka hukum pertama mensyaratkan Q_cycle + W_cycle = 0.",
        "Salah: setiap siklus mengembalikan sistem ke keadaan awal. ΔU_cycle = 0 mengharuskan Q_cycle + W_cycle = 0, meskipun siklus tidak kuasistatik.",
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
      question: "Dalam proses isokhorik pada sistem tertutup, jika satu-satunya kerja adalah kerja oleh gaya tekanan, selalu berlaku:",
      choices: ["W = 0, sehingga ΔU = Q", "Q = 0, sehingga ΔU = W", "ΔU = 0, sehingga Q = −W"],
      explanations: [
        "Benar: pada volume tetap, kerja oleh gaya tekanan adalah nol. Di sini tidak ada bentuk kerja lain, sehingga W = 0 dan ΔU = Q.",
        "Salah: ini adalah neraca proses adiabatik, bukan proses isokhorik.",
        "Salah: ini adalah neraca proses isotermal gas ideal, karena U hanya bergantung pada T.",
      ],
    },
  },

  tr: {
    ...quizLesson5Translations.tr,
    ...quizLesson6Translations.tr,
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
        "Çünkü makinenin yeni bir çevrime başlayabilmesi için soğuk rezervuarın çalışma akışkanını mutlaka yoğuşturması gerekir.",
      ],
      explanations: [
        "Doğru: makine, sıcak → soğuk ısı akışından alınan bir geçiş ücreti gibidir; akış yoksa iş de yoktur. Gerçek “yakıt” sıcaklık farkıdır.",
        "Yanlış: hiçbir sıcaklık eşiği yoktur; küçük bir fark bile yeterlidir (okyanustaki birkaç derecelik farkı kullanan OTEC santrallerine bakınız).",
        "Yanlış: bir ısı makinesi, çalışma akışkanı faz değiştirmeden de çalışabilir. Yoğuşma genel bir zorunluluk değildir.",
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
        "Eşit kütleli cisimlerin aynı sıcaklık artışı için farklı miktarlarda ısıya ihtiyaç duyduğunun gözlenmesi.",
      ],
      explanations: [
        "Doğru: ısı sonlu ve korunan bir akışkan olsaydı, sürekli delme işlemi onu sonsuza dek üretemezdi. Rumford 1798'de ısının hareketle ilişkili olduğu sonucuna vardı.",
        "Yanlış: tersine, gizli ısı kalori teorisiyle iyi açıklanıyordu; akışkanın hal değişimi sırasında maddeye “bağlandığı” düşünülüyordu.",
        "Yanlış: farklı ısı kapasiteleri kalorik kuramıyla uyumludur; bu gözlem kuramı çürütmez.",
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
        "Cismin tamamının sıcaklığını bir derece artırmak için gereken ısı.",
        "Cismin birim kütlesinin sıcaklığını bir derece yükseltmek için verilmesi gereken ısı miktarını.",
        "Cismin birim kütlesini sabit sıcaklıkta eritmek için gereken ısı.",
      ],
      explanations: [
        "Yanlış: bu, cismin tamamının ısı kapasitesi C = mc'yi tanımlar; c birim kütle başınadır.",
        "Doğru: bu, Black'in her malzemeye özgü olduğunu gösterdiği katsayı, yani özgül ısı kapasitesidir (ya da özgül ısıdır).",
        "Yanlış: bu, özgül erime gizli ısısı L'yi tanımlar; özgül ısı kapasitesi c'yi değil.",
      ],
    },
    "l2-q5": {
      question: "Joule'ün ölçtüğü kalorinin modern birimlerdeki değeri nedir?",
      choices: ["Kalori başına yaklaşık 1 J", "Kalori başına yaklaşık 4,18 J", "Kalori başına yaklaşık 4 180 J", "Kalori başına yaklaşık 0,24 J"],
      explanations: [
        "Yanlış: kalori ile joule herhangi bir dönüşüm gerektirmeden aynı şeyi ölçseydi bu doğru olurdu.",
        "Doğru: 1 cal ≈ 4,18 J; 1843 ile 1849 arasında giderek artan hassasiyetle ölçülen bu değer, ısı ile işin eşdeğerliğini ortaya koymuştur.",
        "Yanlış: yaklaşık 4 180 J bir kilokaloriye, yani 1 000 kaloriye karşılık gelir.",
        "Yanlış: bu yaklaşık olarak tersidir (1/4,18 ≈ 0,24).",
      ],
    },
    "l2-q6": {
      question: "Bir gıda ambalajında “250 kcal” yazıyor. Bu yaklaşık kaç joule'e karşılık gelir?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Yanlış: bu, belirtilen birimi joule ile karıştırmak olurdu.",
        "Doğru: 1 kcal = 1 000 cal. Belirtilen enerji yaklaşık 1 046 kJ'dür.",
        "Yanlış: bu, 250 kcal değil 250 cal değerine karşılık gelir. Kilo öneki 1 000 çarpanını ifade eder.",
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
      question: "Kütlesi m olan 0°C'deki bir buz parçası, 20°C'de sıvı su elde edilene kadar ısıtılıyor. L özgül erime gizli ısısı, c_water ve c_ice sıvı suyun ve buzun özgül ısı kapasiteleri, ΔT = 20°C'dir. Alınan toplam ısı Q'yu hangi ifade verir?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Yanlış: bu hesap, sıcaklık değişmeden 0°C'de soğurulan erime gizli ısısını unutur; bu, Black'in özgül ısı kapasitesinden ayrı olan ikinci keşfidir.",
        "Doğru: gizli ısı (sabit sıcaklıkta erime) ile Q = mcΔT bağıntısı (faz değişimi olmadan ısınma) toplanır, ancak her biri sürecin farklı bir aşamasına uygulanır.",
        "Yanlış: erime hesaba katılmıştır, ancak 0°C'den 20°C'ye ısıtılan sıvı sudur. c_ice yerine c_water kullanılmalıdır.",
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
      question: "Yalnızca basınç kuvvetlerinin yaptığı iş ele alınıyor. Hangi duvar özellikleri sistemin yalıtılmış olmasını sağlar?",
      choices: [
        "Rijit, adyabatik ve geçirgendir.",
        "Rijit, adyabatik ve geçirimsizdir.",
        "Rijit, diyatermik ve geçirimsizdir.",
        "Hareketli, adyabatik ve geçirimsizdir.",
      ],
      explanations: [
        "Yanlış: geçirgen duvarlar, rijit ve adyabatik olsalar bile madde alışverişine izin verir.",
        "Doğru: rijitlik iş alışverişini, adyabatiklik ısı alışverişini, geçirimsizlik ise madde alışverişini engeller.",
        "Yanlış: diyatermik duvarlar ısıyı geçirir; sistem yalıtılmış olmaz.",
        "Yanlış: hareketli duvarlar, adyabatik ve geçirimsiz olsalar bile basınç kuvvetleri aracılığıyla iş alışverişine izin verir.",
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
        "Çünkü ısı ve iş korunmazken sistemin iç enerjisi her süreçte korunur.",
      ],
      explanations: [
        "Doğru: Yalnızca başlangıç ve bitiş durumlarına bağlı olan U'nun tersine Q ile W yola bağlıdır. dQ yazmak kalorik teorisini yeniden diriltmek olurdu.",
        "Yanlış: U değişebilir. U bir durum fonksiyonudur; Q ve W ise izlenen yola bağlıdır. Gösterim bu ayrımı ifade eder.",
      ],
    },
    "l4-q3": {
      question: "Kapalı bir sistem çevrimsel bir dönüşüm (A → A) geçiriyor. Q_cycle + W_cycle bilançosu için ne söylenebilir?",
      choices: [
        "Mutlaka sıfırdır, çünkü Q ile W durum fonksiyonudur.",
        "U bir durum fonksiyonu olduğu için sıfırdır.",
        "Yalnızca çevrim yarı-statik ise sıfırdır.",
      ],
      explanations: [
        "Yanlış: Tersi doğrudur—Q ile W durum fonksiyonu değildir; sistemin büyüklükleri değil, enerji aktarımlarıdır. ΔU_cycle = 0 aracılığıyla bir çevrimde yalnızca toplamlarının sıfır olması gerekir.",
        "Doğru: Çevrimin sonunda sistem başlangıç durumuna döner. U bir durum fonksiyonu olduğundan ΔU_cycle = U(A) − U(A) = 0'dır; bu nedenle birinci yasa Q_cycle + W_cycle = 0'ı gerektirir.",
        "Yanlış: her çevrim sistemi başlangıç hâline döndürür. ΔU_cycle = 0, çevrim yarı-statik olmasa bile Q_cycle + W_cycle = 0 olmasını gerektirir.",
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
      question: "Kapalı bir sistemin izokorik dönüşümünde, yalnızca basınç kuvvetlerinin işi söz konusuysa her zaman:",
      choices: ["W = 0, dolayısıyla ΔU = Q", "Q = 0, dolayısıyla ΔU = W", "ΔU = 0, dolayısıyla Q = −W"],
      explanations: [
        "Doğru: sabit hacimde basınç kuvvetlerinin işi sıfırdır. Burada başka iş türü yoktur; dolayısıyla W = 0 ve ΔU = Q.",
        "Yanlış: Bu, izokorik değil adyabatik bir dönüşümün bilançosudur.",
        "Yanlış: U yalnızca T'ye bağlı olduğundan bu, ideal gazın izotermal dönüşümünün bilançosudur.",
      ],
    },
  },
  bn: {
    ...quizLesson5Translations.bn,
    ...quizLesson6Translations.bn,
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
        "কারণ ইঞ্জিনের পরবর্তী চক্র শুরু করতে শীতল উৎসকে অবশ্যই কার্যকরী তরলের ঘনীভবন ঘটাতে হয়।",
      ],
      explanations: [
        "সঠিক: ইঞ্জিন উষ্ণ → শীতল তাপপ্রবাহের উপর আরোপিত একটি ‘টোল’; প্রবাহ না থাকলে কাজও নেই। তাপমাত্রার ঢালই প্রকৃত ‘জ্বালানি’।",
        "ভুল: এমন কোনো ন্যূনতম তাপমাত্রা নেই; অল্প পার্থক্যও যথেষ্ট (সমুদ্রে কয়েক ডিগ্রির পার্থক্য কাজে লাগানো OTEC কেন্দ্র দেখুন)।",
        "ভুল: কার্যকরী তরলের দশা পরিবর্তন ছাড়াও তাপ ইঞ্জিন চলতে পারে। ঘনীভবন কোনো সাধারণ আবশ্যিক শর্ত নয়।",
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
        "সমান ভরের বস্তুগুলির তাপমাত্রা একই পরিমাণ বাড়াতে ভিন্ন পরিমাণ তাপ লাগে—এই পর্যবেক্ষণ।",
      ],
      explanations: [
        "সঠিক: তাপ যদি সীমিত ও সংরক্ষিত তরল হতো, অবিরাম ছিদ্রকরণ অনির্দিষ্টকাল তাপ উৎপন্ন করতে পারত না। রামফোর্ড (১৭৯৮) সিদ্ধান্ত নেন যে তাপ গতির সঙ্গে সম্পর্কিত।",
        "ভুল: সুপ্ত তাপ বরং ক্যালরিক তত্ত্বে ভালোভাবেই ব্যাখ্যা করা হতো—দশা পরিবর্তনের সময় তরলটি পদার্থের সঙ্গে ‘যুক্ত’ হয়।",
        "ভুল: ভিন্ন তাপধারণ ক্ষমতা ক্যালোরিক তত্ত্বের সঙ্গে সামঞ্জস্যপূর্ণ; এই পর্যবেক্ষণ তত্ত্বটিকে খণ্ডন করে না।",
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
        "সম্পূর্ণ বস্তুর তাপমাত্রা এক ডিগ্রি বাড়াতে প্রয়োজনীয় তাপ।",
        "একক ভরের বস্তুটির তাপমাত্রা এক ডিগ্রি বাড়াতে যে তাপ দিতে হয়।",
        "স্থির তাপমাত্রায় বস্তুর একক ভর গলাতে প্রয়োজনীয় তাপ।",
      ],
      explanations: [
        "ভুল: এটি সম্পূর্ণ বস্তুর তাপ ধারণক্ষমতা C = mc; c হলো একক ভরপ্রতি রাশি।",
        "সঠিক: এটি ভর-নির্দিষ্ট তাপ ধারণক্ষমতা (বা বিশিষ্ট তাপ), ব্ল্যাকের চিহ্নিত প্রতিটি পদার্থের নিজস্ব সহগ।",
        "ভুল: এটি গলনের ভর-নির্দিষ্ট লীন তাপ L, ভর-নির্দিষ্ট তাপ ধারণক্ষমতা c নয়।",
      ],
    },
    "l2-q5": {
      question: "আধুনিক এককে জুলের পরিমাপ অনুযায়ী এক ক্যালরির মান কত?",
      choices: ["প্রতি ক্যালরিতে প্রায় 1 J", "প্রতি ক্যালরিতে প্রায় 4.18 J", "প্রতি ক্যালোরিতে প্রায় 4 180 J", "প্রতি ক্যালরিতে প্রায় 0.24 J"],
      explanations: [
        "ভুল: ক্যালরি ও জুল কোনো রূপান্তর ছাড়াই একই একক হলে তবেই এটি সত্য হতো।",
        "সঠিক: 1 cal ≈ 4.18 J; ১৮৪৩ থেকে ১৮৪৯ সালের মধ্যে ক্রমবর্ধমান নির্ভুলতায় মাপা এই মানই তাপ ও কাজের সমতুল্যতা প্রতিষ্ঠা করে।",
        "ভুল: প্রায় 4 180 J হলো এক কিলোক্যালোরি, অর্থাৎ 1 000 ক্যালোরি।",
        "ভুল: এটি মোটামুটি বিপরীত মান (1/4.18 ≈ 0.24)।",
      ],
    },
    "l2-q6": {
      question: "একটি খাদ্যের মোড়কে ‘250 kcal’ লেখা আছে। এটি আনুমানিক কত জুল?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "ভুল: এতে লেখা এককটিকে জুলের সঙ্গে গুলিয়ে ফেলা হয়।",
        "সঠিক: 1 kcal = 1 000 cal। উল্লিখিত শক্তি প্রায় 1 046 kJ।",
        "ভুল: এটি 250 cal-এর সমান, 250 kcal-এর নয়। কিলো উপসর্গের অর্থ 1 000 গুণ।",
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
      question: "m ভরের 0°C তাপমাত্রার বরফখণ্ডকে গরম করে 20°C তাপমাত্রার তরল জল করা হয়। L হলো গলনের ভর-নির্দিষ্ট সুপ্ত তাপ, c_water ও c_ice হলো তরল জল ও বরফের ভর-নির্দিষ্ট তাপ ধারণক্ষমতা, এবং ΔT = 20°C। কোন রাশিটি মোট গৃহীত তাপ Q দেয়?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "ভুল: এতে 0°C তাপমাত্রায় তাপমাত্রা না বদলে শোষিত গলনের সুপ্ত তাপ বাদ পড়ে; তাপ ধারণক্ষমতা থেকে আলাদা এটিই ব্ল্যাকের দ্বিতীয় আবিষ্কার।",
        "সঠিক: সুপ্ত তাপ (ধ্রুব তাপমাত্রায় গলন) ও Q = mcΔT সম্পর্ক (একই দশায় উত্তাপন) যোগ হয়, তবে প্রক্রিয়ার পৃথক ধাপে প্রযোজ্য।",
        "ভুল: গলন ধরা হয়েছে, কিন্তু 0°C থেকে 20°C পর্যন্ত উত্তাপন তরল জলের হয়। c_ice নয়, c_water ব্যবহার করতে হবে।",
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
      question: "কেবল চাপ বলের কাজ বিবেচনা করা হচ্ছে। দেয়ালের কোন বৈশিষ্ট্যগুলি সিস্টেমের বিচ্ছিন্নতা নিশ্চিত করে?",
      choices: [
        "দৃঢ়, রুদ্ধতাপীয় ও ভেদ্য।",
        "দৃঢ়, রুদ্ধতাপীয় ও অভেদ্য।",
        "দৃঢ়, ডায়াথার্মিক ও অভেদ্য।",
        "চলনশীল, রুদ্ধতাপীয় ও অভেদ্য।",
      ],
      explanations: [
        "ভুল: ভেদ্য দেয়াল দৃঢ় ও রুদ্ধতাপীয় হলেও পদার্থের আদান-প্রদান হতে দেয়।",
        "সঠিক: দৃঢ়তা কাজের বিনিময়, রুদ্ধতাপীয়তা তাপের বিনিময় এবং অভেদ্যতা পদার্থের বিনিময় রোধ করে।",
        "ভুল: ডায়াথার্মিক দেয়াল তাপ যেতে দেয়; তন্ত্রটি বিচ্ছিন্ন হতো না।",
        "ভুল: চলনশীল দেয়াল রুদ্ধতাপীয় ও অভেদ্য হলেও চাপ বলের কাজের আদান-প্রদান হতে দেয়।",
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
        "কারণ তাপ ও কাজ সংরক্ষিত থাকে না, অথচ সিস্টেমের অভ্যন্তরীণ শক্তি প্রতিটি প্রক্রিয়ায় সংরক্ষিত থাকে।",
      ],
      explanations: [
        "সঠিক: Q ও W পথের উপর নির্ভর করে, কিন্তু U শুধু প্রাথমিক ও চূড়ান্ত অবস্থার উপর নির্ভর করে। dQ লেখা ক্যালরিক তত্ত্বকে পুনরুজ্জীবিত করার সমতুল্য হতো।",
        "ভুল: U বদলাতে পারে। U একটি অবস্থা অপেক্ষক, কিন্তু Q ও W পথের উপর নির্ভরশীল; প্রতীক এই পার্থক্য বোঝায়।",
      ],
    },
    "l4-q3": {
      question: "একটি বদ্ধ তন্ত্র চক্রাকার রূপান্তর (A → A) সম্পন্ন করে। Q_cycle + W_cycle হিসাব সম্পর্কে কী বলা যায়?",
      choices: [
        "এর মান অবশ্যই শূন্য, কারণ Q ও W অবস্থা অপেক্ষক।",
        "এর মান শূন্য, কারণ U একটি অবস্থা অপেক্ষক।",
        "চক্রটি কোয়াসি-স্থিতিশীল হলেই কেবল এটি শূন্য হয়।",
      ],
      explanations: [
        "ভুল: ঠিক উল্টো—Q ও W অবস্থা অপেক্ষক নয়; এগুলি স্থানান্তর, তন্ত্রের রাশি নয়। তাই ΔU_cycle = 0-এর মাধ্যমে কেবল তাদের যোগফলই একটি চক্রে শূন্য হতে বাধ্য।",
        "সঠিক: একটি চক্র শেষে তন্ত্রটি প্রাথমিক অবস্থায় ফেরে। U অবস্থা অপেক্ষক বলে ΔU_cycle = U(A) − U(A) = 0, তাই প্রথম সূত্রে Q_cycle + W_cycle = 0।",
        "ভুল: প্রতিটি চক্র সিস্টেমকে প্রাথমিক অবস্থায় ফেরায়। ΔU_cycle = 0 থেকে Q_cycle + W_cycle = 0 আবশ্যক, চক্রটি কোয়াসি-স্থিতিশীল না হলেও।",
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
      question: "একটি বদ্ধ তন্ত্রের সমআয়তনিক রূপান্তরে, কেবল চাপ বলের কাজ সম্ভব হলে, সবসময় কোনটি সত্য?",
      choices: ["W = 0, তাই ΔU = Q", "Q = 0, তাই ΔU = W", "ΔU = 0, তাই Q = -W"],
      explanations: [
        "সঠিক: স্থির আয়তনে চাপ বলের কাজ শূন্য। এখানে এটিই একমাত্র কাজ, তাই W = 0 এবং ΔU = Q।",
        "ভুল: এটি রুদ্ধতাপীয় রূপান্তরের হিসাব, সমআয়তনিক রূপান্তরের নয়।",
        "ভুল: এটি আদর্শ গ্যাসের সমোষ্ণ রূপান্তরের হিসাব, কারণ U শুধু T-এর উপর নির্ভর করে।",
      ],
    },
  },
  ur: {
    ...quizLesson5Translations.ur,
    ...quizLesson6Translations.ur,
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
        "کیونکہ انجن کا اگلا چکر شروع کرنے کے لیے ٹھنڈے منبع کو عامل سیال کی تکثیف کرنا لازمی ہے۔",
      ],
      explanations: [
        "درست: انجن گرم → ٹھنڈے حرارتی بہاؤ پر ایک محصول کی مانند ہے؛ بہاؤ نہیں تو کام بھی نہیں۔ درجۂ حرارت کا میلان ہی اصل ’ایندھن‘ ہے۔",
        "غلط: درجۂ حرارت کی کوئی کم از کم حد نہیں؛ معمولی فرق بھی کافی ہے (سمندر میں چند درجوں کا فرق استعمال کرنے والے \u2066OTEC\u2069 پلانٹ دیکھیے)۔",
        "غلط: حرارتی انجن عامل سیال کی حالتِ مادہ بدلے بغیر بھی چل سکتا ہے۔ تکثیف کوئی عمومی لازمی شرط نہیں ہے۔",
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
        "یہ مشاہدہ کہ یکساں کمیت والے اجسام کا درجۂ حرارت ایک ہی مقدار سے بڑھانے کے لیے مختلف مقدار میں حرارت درکار ہوتی ہے۔",
      ],
      explanations: [
        "درست: اگر حرارت ایک محدود اور محفوظ سیال ہوتی تو مسلسل کھدائی غیر معینہ مدت تک اسے پیدا نہ کر سکتی۔ رمفورڈ \u2066(1798)\u2069 نے نتیجہ اخذ کیا کہ حرارت حرکت سے وابستہ ہے۔",
        "غلط: پوشیدہ حرارت کی وضاحت کیلورک نظریے میں الٹا اچھی طرح ہو جاتی تھی—مرحلہ بدلتے وقت سیال مادے کے ساتھ ’مل‘ جاتا ہے۔",
        "غلط: مختلف حرارتی گنجائشیں کیلورک نظریے سے مطابقت رکھتی ہیں؛ یہ مشاہدہ اس کی تردید نہیں کرتا۔",
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
      question: "جوزف بلیک کے قائم کردہ تعلق \u2066Q = m c ΔT\u2069 میں ضریب \u2066c\u2069 کیا ظاہر کرتا ہے؟",
      choices: [
        "پورے جسم کا درجۂ حرارت ایک درجہ بڑھانے کے لیے درکار حرارت۔",
        "جسم کی اکائی کمیت کا درجۂ حرارت ایک درجہ بڑھانے کے لیے درکار حرارت۔",
        "مستقل درجۂ حرارت پر جسم کی اکائی کمیت کو پگھلانے کے لیے درکار حرارت۔",
      ],
      explanations: [
        "غلط: یہ پورے جسم کی حرارتی گنجائش \u2066C = mc\u2069 ہے؛ \u2066c\u2069 فی اکائی کمیت کی مقدار ہے۔",
        "درست: یہ مخصوص حرارتی گنجائش ہے، یعنی ہر مادے کا وہ مخصوص ضریب جسے بلیک نے نمایاں کیا۔",
        "غلط: یہ پگھلنے کی مخصوص پوشیدہ حرارت \u2066L\u2069 ہے، مخصوص حرارتی گنجائش \u2066c\u2069 نہیں۔",
      ],
    },
    "l2-q5": {
      question: "جدید اکائیوں میں جول کی پیمائش کے مطابق ایک کیلوری کی قدر کیا ہے؟",
      choices: ["تقریباً \u20661 J\u2069 فی کیلوری", "تقریباً \u20664.18 J\u2069 فی کیلوری", "تقریباً \u20664 180 J\u2069 فی کیلوری", "تقریباً \u20660.24 J\u2069 فی کیلوری"],
      explanations: [
        "غلط: یہ صرف تب درست ہوتا اگر کیلوری اور جول بغیر تبدیلی کے ایک ہی چیز ناپتے۔",
        "درست: \u20661 cal ≈ 4.18 J\u2069؛ \u20661843\u2069 سے \u20661849\u2069 کے درمیان بڑھتی صحت کے ساتھ ناپی گئی اسی قدر نے حرارت اور کام کی مساوات قائم کی۔",
        "غلط: تقریباً \u20664 180 J\u2069 ایک کلوکیلوری، یعنی \u20661 000\u2069 کیلوریز کے برابر ہیں۔",
        "غلط: یہ تقریباً اس کا معکوس ہے \u2066(1/4.18 ≈ 0.24)\u2069۔",
      ],
    },
    "l2-q6": {
      question: "خوراک کے ایک پیکٹ پر ’\u2066250 kcal\u2069‘ لکھا ہے۔ یہ تقریباً کتنے جول کے برابر ہے؟",
      choices: ["\u2066≈ 250 J\u2069", "\u2066≈ 1046 kJ\u2069", "\u2066≈ 1046 J\u2069", "\u2066≈ 250 kJ\u2069"],
      explanations: [
        "غلط: اس میں لکھی ہوئی اکائی کو جول سمجھ لیا گیا ہے۔",
        "درست: \u20661 kcal = 1 000 cal\u2069۔ درج شدہ توانائی تقریباً \u20661 046 kJ\u2069 ہے۔",
        "غلط: یہ \u2066250 cal\u2069 کے برابر ہے، \u2066250 kcal\u2069 کے نہیں۔ سابقہ کلو کا مطلب \u20661 000\u2069 کا عامل ہے۔",
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
      question: "\u2066m\u2069 کمیت کی \u20660°C\u2069 پر موجود برف کو گرم کر کے \u206620°C\u2069 کا مائع پانی بنایا جاتا ہے۔ \u2066L\u2069 پگھلنے کی مخصوص پوشیدہ حرارت، \u2066c_water\u2069 اور \u2066c_ice\u2069 مائع پانی اور برف کی مخصوص حرارتی گنجائشیں ہیں، اور \u2066ΔT = 20°C\u2069 ہے۔ کون سا اظہار کل حاصل کردہ حرارت \u2066Q\u2069 دیتا ہے؟",
      choices: [
        "\u2066Q = m c_water ΔT\u2069",
        "\u2066Q = m L + m c_water ΔT\u2069",
        "\u2066Q = m L + m c_ice ΔT\u2069",
      ],
      explanations: [
        "غلط: یہ حساب \u20660°C\u2069 پر درجۂ حرارت بدلے بغیر جذب ہونے والی پگھلاؤ کی پوشیدہ حرارت بھول جاتا ہے؛ یہی حرارتی گنجائش سے الگ بلیک کی دوسری دریافت تھی۔",
        "درست: پوشیدہ حرارت (مستقل درجۂ حرارت پر پگھلاؤ) اور \u2066Q = mcΔT (\u2069ایک ہی مرحلے میں گرم کرنا) جمع ہوتی ہیں، مگر عمل کے الگ الگ حصوں پر لاگو ہوتی ہیں۔",
        "غلط: پگھلنا شامل ہے، مگر \u20660°C\u2069 سے \u206620°C\u2069 تک مائع پانی گرم ہوتا ہے۔ \u2066c_ice\u2069 کی جگہ \u2066c_water\u2069 استعمال کرنا چاہیے۔",
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
      question: "صرف دباؤ کی قوتوں کا کام زیرِ غور ہے۔ دیواروں کی کون سی خصوصیات نظام کی تنہائی یقینی بناتی ہیں؟",
      choices: [
        "صلب، ادیابیاتی اور نفوذ پذیر۔",
        "صلب، ادیابیاتی اور ناقابلِ نفوذ۔",
        "صلب، حرارت گزار اور ناقابلِ نفوذ۔",
        "متحرک، ادیابیاتی اور ناقابلِ نفوذ۔",
      ],
      explanations: [
        "غلط: نفوذ پذیر دیواریں مادے کا تبادلہ ہونے دیتی ہیں، چاہے وہ صلب اور ادیابیاتی ہوں۔",
        "درست: صلب ہونا کام کے، ادیابیاتی ہونا حرارت کے، اور ناقابلِ نفوذ ہونا مادے کے تبادلے کو روکتا ہے۔",
        "غلط: حرارت گزار دیواریں حرارت گزرنے دیتی ہیں؛ نظام معزول نہ ہوتا۔",
        "غلط: متحرک دیواریں دباؤ کی قوتوں کے کام کا تبادلہ ہونے دیتی ہیں، چاہے وہ ادیابیاتی اور ناقابلِ نفوذ ہوں۔",
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
      question: "\u2066dQ\u2069 اور \u2066dW\u2069 کے بجائے \u2066δQ\u2069 اور \u2066δW\u2069 کیوں لکھتے ہیں؟",
      choices: [
        "کیونکہ یہ نادرست تفرقات ہیں: ان کا تکمل اختیار کردہ راستے پر منحصر ہے۔",
        "کیونکہ حرارت اور کام محفوظ نہیں رہتے، جبکہ نظام کی اندرونی توانائی ہر عمل میں محفوظ رہتی ہے۔",
      ],
      explanations: [
        "درست: \u2066Q\u2069 اور \u2066W\u2069 راستے پر منحصر ہیں، جبکہ \u2066U\u2069 صرف ابتدائی اور آخری حالت پر منحصر ہے۔ \u2066dQ\u2069 لکھنا کیلورک نظریے کو دوبارہ زندہ کرنے کے مترادف ہوتا۔",
        "غلط: \u2066U\u2069 بدل سکتی ہے۔ \u2066U\u2069 ایک حالتی تفاعل ہے، جبکہ \u2066Q\u2069 اور \u2066W\u2069 راستے پر منحصر ہیں؛ علامتیں یہی فرق ظاہر کرتی ہیں۔",
      ],
    },
    "l4-q3": {
      question: "ایک بند نظام چکری تبدیلی \u2066(A → A)\u2069 سے گزرتا ہے۔ میزان \u2066Q_cycle + W_cycle\u2069 کے بارے میں کیا کہا جا سکتا ہے؟",
      choices: [
        "یہ لازماً صفر ہے، کیونکہ \u2066Q\u2069 اور \u2066W\u2069 حالتی تفاعل ہیں۔",
        "یہ صفر ہے کیونکہ \u2066U\u2069 حالتی تفاعل ہے۔",
        "یہ صرف اسی صورت میں صفر ہے جب چکر نیم سکونی ہو۔",
      ],
      explanations: [
        "غلط: حقیقت الٹ ہے—\u2066Q\u2069 اور \u2066W\u2069 حالتی تفاعل نہیں؛ یہ انتقالات ہیں، نظام کی مقداریں نہیں۔ اسی لیے \u2066ΔU_cycle = 0\u2069 کے ذریعے چکر میں صرف ان کا مجموعہ صفر ہونے کا پابند ہے۔",
        "درست: چکر کے آخر میں نظام اپنی ابتدائی حالت میں لوٹتا ہے۔ \u2066U\u2069 حالتی تفاعل ہے، اس لیے \u2066ΔU_cycle = U(A) − U(A) = 0\u2069، اور پہلا اصول \u2066Q_cycle + W_cycle = 0\u2069 عائد کرتا ہے۔",
        "غلط: ہر چکر نظام کو ابتدائی حالت میں واپس لاتا ہے۔ \u2066ΔU_cycle = 0\u2069 سے \u2066Q_cycle + W_cycle = 0\u2069 لازم ہے، چاہے چکر نیم سکونی نہ ہو۔",
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
      question: "بند نظام کی ہم حجمی تبدیلی میں، اگر کام صرف دباؤ کی قوتوں کا ہو، تو ہمیشہ کیا ہوتا ہے؟",
      choices: ["\u2066W = 0\u2069، لہٰذا \u2066ΔU = Q\u2069", "\u2066Q = 0\u2069، لہٰذا \u2066ΔU = W\u2069", "\u2066ΔU = 0\u2069، لہٰذا \u2066Q = -W\u2069"],
      explanations: [
        "درست: مستقل حجم پر دباؤ کی قوتوں کا کام صفر ہے۔ یہاں یہی واحد کام ہے، اس لیے \u2066W = 0\u2069 اور \u2066ΔU = Q\u2069۔",
        "غلط: یہ ادیابیاتی تبدیلی کا میزان ہے، ہم حجمی تبدیلی کا نہیں۔",
        "غلط: یہ مثالی گیس کی ہم حرارت تبدیلی کا میزان ہے، کیونکہ \u2066U\u2069 صرف \u2066T\u2069 پر منحصر ہے۔",
      ],
    },
  },
  sw: {
    ...quizLesson5Translations.sw,
    ...quizLesson6Translations.sw,
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
        "Kwa sababu chanzo baridi lazima kifanye mvuke wa kiowevu tendaji uwe kioevu ili injini ianze mzunguko mwingine.",
      ],
      explanations: [
        "Sahihi: injini ni kama ushuru unaotozwa kwenye mtiririko wa joto kutoka moto → baridi; hakuna mtiririko, hakuna kazi. Mteremko wa halijoto ndio ‘mafuta’ halisi.",
        "Si sahihi: hakuna kiwango cha chini cha halijoto; hata tofauti ndogo inatosha (tazama mitambo ya OTEC inayotumia tofauti ya digrii chache baharini).",
        "Si sahihi: injini ya joto inaweza kufanya kazi bila kiowevu tendaji kubadilisha awamu. Kufanya mvuke uwe kioevu si sharti la jumla.",
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
        "Uchunguzi kwamba miili yenye masi sawa inahitaji kiasi tofauti cha joto kwa ongezeko lilelile la halijoto.",
      ],
      explanations: [
        "Sahihi: kama joto lingekuwa kiowevu finyu kinachohifadhiwa, uchimbaji unaoendelea usingeweza kulizalisha bila kikomo. Rumford (1798) alihitimisha kuwa linahusiana na mwendo.",
        "Si sahihi: joto fiche lilielezwa vizuri na nadharia ya kaloriki—kiowevu kilidhaniwa ‘kuungana’ na mata wakati wa mabadiliko ya hali.",
        "Si sahihi: uwezo tofauti wa joto unaendana na nadharia ya kaloriki; uchunguzi huu hauikanushi.",
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
        "Joto linalohitajika kuongeza halijoto ya mwili mzima kwa digrii moja.",
        "Kiasi cha joto kinachohitajika kuongeza halijoto ya kitengo kimoja cha misa ya mwili kwa digrii moja.",
        "Joto linalohitajika kuyeyusha kipimo kimoja cha masi ya mwili katika halijoto isiyobadilika.",
      ],
      explanations: [
        "Si sahihi: huu ni uwezo wa joto C = mc wa mwili mzima; c ni kwa kila kipimo cha masi.",
        "Sahihi: huu ni uwezo mahususi wa joto, kigawo cha kila nyenzo ambacho Black alibainisha.",
        "Si sahihi: hili ni joto fiche mahususi la kuyeyuka L, si uwezo mahususi wa joto c.",
      ],
    },
    "l2-q5": {
      question: "Katika vitengo vya kisasa, kalori moja kama ilivyopimwa na Joule ina thamani gani?",
      choices: ["Takriban 1 J kwa kalori", "Takriban 4.18 J kwa kalori", "Takriban 4 180 J kwa kalori", "Takriban 0.24 J kwa kalori"],
      explanations: [
        "Si sahihi: hilo lingekuwa kweli kama kalori na joule zingepima kitu kilekile bila ubadilishaji.",
        "Sahihi: 1 cal ≈ 4.18 J; thamani hii, iliyopimwa kwa usahihi unaoongezeka kati ya 1843 na 1849, ndiyo iliyoanzisha usawa kati ya joto na kazi.",
        "Si sahihi: takriban 4 180 J ni kilokalori moja, yaani kalori 1 000.",
        "Si sahihi: hii ni takriban kinyume chake (1/4.18 ≈ 0.24).",
      ],
    },
    "l2-q6": {
      question: "Kifungashio cha chakula kinaonyesha ‘250 kcal’. Hii ni sawa na joule ngapi takriban?",
      choices: ["≈ 250 J", "≈ 1046 kJ", "≈ 1046 J", "≈ 250 kJ"],
      explanations: [
        "Si sahihi: hii ingechanganya kitengo kilichoandikwa na joule.",
        "Sahihi: 1 kcal = 1 000 cal. Nishati iliyoandikwa ni takriban 1 046 kJ.",
        "Si sahihi: hii ni sawa na 250 cal, si 250 kcal. Kiambishi kilo kinawakilisha kizidishi cha 1 000.",
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
      question: "Kipande cha barafu chenye masi m katika 0°C kinapashwa hadi kuwa maji ya kioevu katika 20°C. L ni joto fiche mahususi la kuyeyuka, c_water na c_ice ni uwezo mahususi wa joto wa maji ya kioevu na barafu, na ΔT = 20°C. Ni usemi upi unaotoa joto lote linalopokelewa Q?",
      choices: [
        "Q = m c_water ΔT",
        "Q = m L + m c_water ΔT",
        "Q = m L + m c_ice ΔT",
      ],
      explanations: [
        "Si sahihi: hesabu hii inasahau joto fiche la kuyeyuka linalofyonzwa kwa 0°C bila halijoto kubadilika; hili ndilo ugunduzi wa pili wa Black, tofauti na uwezo wa joto.",
        "Sahihi: joto fiche (kuyeyuka katika halijoto isiyobadilika) na uhusiano Q = mcΔT (kupasha bila kubadili awamu) hujumlishwa, lakini kila mmoja hutumika katika hatua tofauti ya mchakato.",
        "Si sahihi: kuyeyuka kumehesabiwa, lakini kinachopashwa kutoka 0°C hadi 20°C ni maji ya kioevu. Tumia c_water, si c_ice.",
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
      question: "Tunazingatia kazi ya nguvu za shinikizo pekee. Ni sifa zipi za kuta zinazohakikisha mfumo umetengwa?",
      choices: [
        "Ngumu, za adiabatiki na penyevu.",
        "Ngumu, za adiabatiki na zisizopenyeza.",
        "Ngumu, za diathermiki na zisizopenyeza.",
        "Zinazosogea, za adiabatiki na zisizopenyeza.",
      ],
      explanations: [
        "Si sahihi: kuta penyevu huruhusu ubadilishanaji wa mata hata zikiwa ngumu na za adiabatiki.",
        "Sahihi: ugumu huzuia ubadilishanaji wa kazi, adiabatiki huzuia wa joto, na kutopenyeza huzuia wa mada.",
        "Si sahihi: kuta za diathermiki huruhusu joto kupita; mfumo usingekuwa umetengwa kabisa.",
        "Si sahihi: kuta zinazosogea huruhusu ubadilishanaji wa kazi ya nguvu za shinikizo hata zikiwa za adiabatiki na zisizopenyeza.",
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
        "Kwa sababu joto na kazi havihifadhiwi, lakini nishati ya ndani ya mfumo huhifadhiwa katika kila mchakato.",
      ],
      explanations: [
        "Sahihi: Q na W hutegemea njia, tofauti na U inayotegemea tu hali ya awali na ya mwisho. Kuandika dQ kungekuwa kuifufua nadharia ya kaloriki.",
        "Si sahihi: U inaweza kubadilika. U ni fonksia ya hali, lakini Q na W hutegemea njia; alama zinaonyesha tofauti hiyo.",
      ],
    },
    "l4-q3": {
      question: "Mfumo funge unapitia mabadiliko ya mzunguko (A → A). Tunaweza kusema nini kuhusu mizania Q_cycle + W_cycle?",
      choices: [
        "Lazima iwe sifuri kwa sababu Q na W ni dhima za hali.",
        "Ni sifuri kwa sababu U ni dhima ya hali.",
        "Ni sifuri tu ikiwa mzunguko ni nusutuli.",
      ],
      explanations: [
        "Si sahihi: kinyume chake—Q na W si dhima za hali; ni uhamisho, si sifa za mfumo. Ndiyo maana ni jumla yao pekee inayolazimika kuwa sifuri katika mzunguko kupitia ΔU_cycle = 0.",
        "Sahihi: baada ya mzunguko mfumo hurudia hali yake ya awali. Kwa kuwa U ni dhima ya hali, ΔU_cycle = U(A) − U(A) = 0, hivyo kanuni ya kwanza inalazimisha Q_cycle + W_cycle = 0.",
        "Si sahihi: kila mzunguko hurudisha mfumo katika hali ya awali. ΔU_cycle = 0 hulazimisha Q_cycle + W_cycle = 0, hata mzunguko usipokuwa nusutuli.",
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
      question: "Katika mabadiliko ya isokori ya mfumo funge, ikiwa kazi pekee ni ya nguvu za shinikizo, daima tuna:",
      choices: ["W = 0, kwa hiyo ΔU = Q", "Q = 0, kwa hiyo ΔU = W", "ΔU = 0, kwa hiyo Q = -W"],
      explanations: [
        "Sahihi: katika ujazo usiobadilika, kazi ya nguvu za shinikizo ni sifuri. Hapa hakuna aina nyingine ya kazi, hivyo W = 0 na ΔU = Q.",
        "Si sahihi: hii ni mizania ya mabadiliko ya adiabatiki, si ya isokori.",
        "Si sahihi: hii ni mizania ya mabadiliko ya isothermali ya gesi bora, kwa kuwa U hutegemea T pekee.",
      ],
    },
  },
  fa: {
    ...quizLesson5Translations.fa,
    ...quizLesson6Translations.fa,
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
        "زیرا منبع سرد باید حتماً سیال عامل را چگالیده کند تا موتور بتواند چرخهٔ بعدی را آغاز کند.",
      ],
      explanations: [
        "درست: موتور مانند عوارضی بر شار گرما از گرم → سرد است؛ بدون شار، کاری هم نیست. گرادیان دما «سوخت» واقعی است.",
        "نادرست: هیچ آستانهٔ دمایی وجود ندارد؛ حتی اختلافی اندک کافی است (نیروگاه‌های \u2066OTEC\u2069 را ببینید که از اختلاف چند درجه‌ای اقیانوس بهره می‌گیرند).",
        "نادرست: موتور حرارتی می‌تواند بدون تغییر فاز سیال عامل کار کند. چگالش شرطی عمومی نیست.",
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
        "مشاهدهٔ اینکه جسم‌های هم‌جرم برای افزایش دمای یکسان به مقدارهای متفاوتی گرما نیاز دارند.",
      ],
      explanations: [
        "درست: اگر گرما سیالی محدود و پایسته بود، سوراخ‌کاری پیوسته نمی‌توانست آن را بی‌پایان تولید کند. رامفورد (۱۷۹۸) نتیجه گرفت گرما با حرکت مرتبط است.",
        "نادرست: گرمای نهان برعکس در نظریهٔ کالریک به‌خوبی توضیح داده می‌شد—سیال هنگام تغییر حالت با ماده «ترکیب» می‌شد.",
        "نادرست: ظرفیت‌های گرمایی متفاوت با نظریهٔ کالریک سازگارند؛ این مشاهده آن را رد نمی‌کند.",
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
      question: "در رابطهٔ \u2066Q = m c ΔT\u2069 که جوزف بلک نشان داد، ضریب \u2066c\u2069 نمایانگر چیست؟",
      choices: [
        "گرمای لازم برای افزایش دمای کل جسم به اندازهٔ یک درجه.",
        "مقدار گرمای لازم برای افزایش دمای یک واحد جرم جسم به‌اندازهٔ یک درجه.",
        "گرمای لازم برای ذوب واحد جرم جسم در دمای ثابت.",
      ],
      explanations: [
        "نادرست: این ظرفیت گرمایی \u2066C = mc\u2069 کل جسم است؛ \u2066c\u2069 به واحد جرم مربوط می‌شود.",
        "درست: این ظرفیت گرمایی ویژه است، یعنی ضریب خاص هر ماده که بلک آن را آشکار کرد.",
        "نادرست: این گرمای نهان ویژهٔ ذوب \u2066L\u2069 است، نه ظرفیت گرمایی ویژه \u2066c.\u2069",
      ],
    },
    "l2-q5": {
      question: "در یکاهای امروزی، مقدار یک کالری طبق اندازه‌گیری ژول چقدر است؟",
      choices: ["حدود \u20661 J\u2069 به‌ازای هر کالری", "حدود \u20664.18 J\u2069 به‌ازای هر کالری", "حدود \u20664 180 J\u2069 به ازای هر کالری", "حدود \u20660.24 J\u2069 به‌ازای هر کالری"],
      explanations: [
        "نادرست: این تنها هنگامی درست بود که کالری و ژول بدون تبدیل یک چیز را اندازه می‌گرفتند.",
        "درست: \u20661 cal ≈ 4.18 J\u2069؛ همین مقدار که میان ۱۸۴۳ و ۱۸۴۹ با دقت روزافزون اندازه‌گیری شد، هم‌ارزی گرما و کار را برقرار کرد.",
        "نادرست: حدود \u20664 180 J\u2069 برابر یک کیلوکالری، یعنی \u20661 000\u2069 کالری است.",
        "نادرست: این تقریباً معکوس مقدار درست است \u2066(1/4.18 ≈ 0.24).\u2069",
      ],
    },
    "l2-q6": {
      question: "روی بسته‌بندی یک مادهٔ غذایی «\u2066250 kcal\u2069» نوشته شده است. این مقدار تقریباً چند ژول است؟",
      choices: ["\u2066≈ 250 J\u2069", "\u2066≈ 1046 kJ\u2069", "\u2066≈ 1046 J\u2069", "\u2066≈ 250 kJ\u2069"],
      explanations: [
        "نادرست: این پاسخ یکای نوشته‌شده را با ژول اشتباه می‌گیرد.",
        "درست: \u20661 kcal = 1 000 cal.\u2069 انرژی درج‌شده حدود \u20661 046 kJ\u2069 است.",
        "نادرست: این مقدار برابر \u2066250 cal\u2069 است، نه \u2066250 kcal.\u2069 پیشوند کیلو ضریب \u20661 000\u2069 را نشان می‌دهد.",
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
      question: "تکه‌ای یخ با جرم \u2066m\u2069 در \u20660°C\u2069 گرم می‌شود تا آب مایع در \u206620°C\u2069 به دست آید\u2066. L\u2069 گرمای نهان ویژهٔ ذوب، \u2066c_water\u2069 و \u2066c_ice\u2069 ظرفیت‌های گرمایی ویژهٔ آب مایع و یخ هستند و \u2066ΔT = 20°C\u2069 است. کدام عبارت گرمای کل دریافتی \u2066Q\u2069 را می‌دهد؟",
      choices: [
        "\u2066Q = m c_water ΔT\u2069",
        "\u2066Q = m L + m c_water ΔT\u2069",
        "\u2066Q = m L + m c_ice ΔT\u2069",
      ],
      explanations: [
        "نادرست: این محاسبه گرمای نهان ذوب را که در \u20660°C\u2069 بدون تغییر دما جذب می‌شود نادیده می‌گیرد؛ این همان کشف دوم بلک و متمایز از ظرفیت گرمایی است.",
        "درست: گرمای نهان (ذوب در دمای ثابت) و رابطهٔ \u2066Q = mcΔT (\u2069گرم‌شدن بدون تغییر فاز) با هم جمع می‌شوند، اما هرکدام در مرحله‌ای جدا از فرایند به کار می‌روند.",
        "نادرست: ذوب لحاظ شده، اما گرم‌شدن از \u20660°C\u2069 تا \u206620°C\u2069 مربوط به آب مایع است. باید از \u2066c_water\u2069 استفاده کرد، نه \u2066c_ice.\u2069",
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
      question: "فقط کار نیروهای فشار را در نظر می‌گیریم. کدام ویژگی‌های دیواره‌ها منزوی‌بودن سیستم را تضمین می‌کنند؟",
      choices: [
        "صلب، بی‌دررو و تراوا.",
        "صلب، بی‌دررو و ناتراوا.",
        "صلب، دیاترمی و ناتراوا.",
        "متحرک، بی‌دررو و ناتراوا.",
      ],
      explanations: [
        "نادرست: دیواره‌های تراوا تبادل ماده را ممکن می‌کنند، حتی اگر صلب و بی‌دررو باشند.",
        "درست: صلب‌بودن مبادلهٔ کار، بی‌درروبودن مبادلهٔ گرما و ناتراوابودن مبادلهٔ ماده را منع می‌کند.",
        "نادرست: دیوارهٔ دیاترمی گرما را عبور می‌دهد؛ دستگاه منزوی نمی‌بود.",
        "نادرست: دیواره‌های متحرک تبادل کار نیروهای فشار را ممکن می‌کنند، حتی اگر بی‌دررو و ناتراوا باشند.",
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
      question: "چرا به‌جای \u2066dQ\u2069 و \u2066dW\u2069 از \u2066δQ\u2069 و \u2066δW\u2069 استفاده می‌کنیم؟",
      choices: [
        "زیرا آن‌ها دیفرانسیل‌های ناکامل‌اند: انتگرالشان به مسیر پیموده‌شده بستگی دارد.",
        "زیرا گرما و کار پایسته نیستند، اما انرژی درونی سیستم در هر فرایندی پایسته می‌ماند.",
      ],
      explanations: [
        "درست: \u2066Q\u2069 و \u2066W\u2069 به مسیر بستگی دارند، برخلاف \u2066U\u2069 که تنها به حالت‌های آغازین و پایانی وابسته است. نوشتن \u2066dQ\u2069 به‌منزلهٔ زنده‌کردن دوبارهٔ نظریهٔ کالریک بود.",
        "نادرست: \u2066U\u2069 می‌تواند تغییر کند\u2066. U\u2069 تابع حالت است، اما \u2066Q\u2069 و \u2066W\u2069 به مسیر بستگی دارند؛ نمادگذاری این تفاوت را بیان می‌کند.",
      ],
    },
    "l4-q3": {
      question: "دستگاه بسته‌ای یک تحول چرخه‌ای \u2066(A → A)\u2069 انجام می‌دهد. دربارهٔ موازنهٔ \u2066Q_cycle + W_cycle\u2069 چه می‌توان گفت؟",
      choices: [
        "الزاماً صفر است، زیرا \u2066Q\u2069 و \u2066W\u2069 تابع حالت‌اند.",
        "صفر است، زیرا \u2066U\u2069 تابع حالت است.",
        "فقط اگر چرخه شبه‌ساکن باشد، صفر است.",
      ],
      explanations: [
        "نادرست: عکس آن درست است—\u2066Q\u2069 و \u2066W\u2069 تابع حالت نیستند؛ انتقال‌اند، نه کمیت‌های دستگاه. دقیقاً به همین دلیل تنها مجموع آن‌ها از راه \u2066ΔU_cycle = 0\u2069 ناگزیر است در چرخه صفر شود.",
        "درست: در پایان چرخه دستگاه به حالت آغازین بازمی‌گردد. چون \u2066U\u2069 تابع حالت است، \u2066ΔU_cycle = U(A) − U(A) = 0\u2069؛ پس قانون اول \u2066Q_cycle + W_cycle = 0\u2069 را ایجاب می‌کند.",
        "نادرست: هر چرخه سیستم را به حالت آغازین برمی‌گرداند\u2066. ΔU_cycle = 0\u2069 مستلزم \u2066Q_cycle + W_cycle = 0\u2069 است، حتی اگر چرخه شبه‌ساکن نباشد.",
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
      question: "در تحول هم‌حجم یک دستگاه بسته، اگر تنها کار ممکن کار نیروهای فشار باشد، همیشه داریم:",
      choices: ["\u2066W = 0\u2069، پس \u2066ΔU = Q\u2069", "\u2066Q = 0\u2069، پس \u2066ΔU = W\u2069", "\u2066ΔU = 0\u2069، پس \u2066Q = -W\u2069"],
      explanations: [
        "درست: در حجم ثابت، کار نیروهای فشار صفر است. اینجا کار دیگری وجود ندارد، پس \u2066W = 0\u2069 و \u2066ΔU = Q.\u2069",
        "نادرست: این موازنهٔ تحول بی‌دررو است، نه هم‌حجم.",
        "نادرست: این موازنهٔ تحول هم‌دمای گاز ایده‌آل است، زیرا \u2066U\u2069 تنها به \u2066T\u2069 بستگی دارد.",
      ],
    },
  },
};
