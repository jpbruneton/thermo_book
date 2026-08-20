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
 * (`content/tex/chp1_<lang>/lesson1.tex`) so that the quiz and the lesson use
 * the same words for heat engine, hot/cold reservoir, cycle, work and heat.
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
  },
};
