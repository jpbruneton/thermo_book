const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const cache = new Map();
function load(file) {
  const resolved = path.resolve(__dirname, '..', file);
  if (cache.has(resolved)) return cache.get(resolved).exports;
  const module = { exports: {} };
  cache.set(resolved, module);
  const js = ts.transpileModule(fs.readFileSync(resolved, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  new Function('require', 'module', 'exports', js)(id => {
    assert.ok(id.startsWith('@/lib/'), `Unexpected dependency ${id}`);
    return load(id.slice(2) + '.ts');
  }, module, module.exports);
  return module.exports;
}

const { getQuizQuestionsByLecon, getLocalizedQuizQuestions, getQuizLangsForLecon } = load('lib/quizzes.ts');
const langs = 'fr en de es pt it pl ru zh ja ko hi vi ar id tr bn ur sw fa'.split(' ');
const revised = {
  'l1-q2': 0, 'l2-q2': 0, 'l2-q4': 1, 'l2-q5': 1, 'l2-q7': 1,
  'l3-q1': 1, 'l4-q2': 0, 'l4-q3': 1, 'l5-q1': 2, 'l5-q3': 0,
  'l5-q4': 2, 'l5-q9': 0, 'l2-q6': 1, 'l4-q6': 0,
};
const clean = text => text.normalize('NFC').replace(/[\u2066-\u2069]/g, '');
const compact = text => clean(text).replace(/\s/g, '');
const question = (lang, id) => getLocalizedQuizQuestions(Number(id[1]), lang).find(q => q.id === id);

test('lessons 1 to 5 retain complete quizzes and answer ordering in all 20 languages', () => {
  for (let lesson = 1; lesson <= 5; lesson++) {
    const source = getQuizQuestionsByLecon(lesson);
    assert.equal(source.length, [3, 9, 8, 4, 9][lesson - 1]);
    assert.deepEqual(getQuizLangsForLecon(lesson, langs), langs);
    for (const lang of langs) {
      const questions = getLocalizedQuizQuestions(lesson, lang);
      assert.equal(questions.length, source.length);
      questions.forEach((q, i) => {
        assert.equal(q.id, source[i].id);
        assert.equal(q.correctIndex, source[i].correctIndex);
        assert.equal(q.choices.length, source[i].choices.length);
        assert.equal(q.explanations.length, q.choices.length);
        assert.equal(new Set(q.choices).size, q.choices.length);
        assert.ok([q.question, ...q.choices, ...q.explanations].every(t => t.trim() && !t.includes('\ufffd')));
        if (q.id in revised) assert.equal(q.correctIndex, revised[q.id]);
      });
    }
  }
});

test('revised distractors preserve units, signs and scientific indices across languages', () => {
  for (const lang of langs) {
    const water = lang === 'fr' ? 'eau' : 'water';
    const ice = lang === 'fr' ? 'glace' : 'ice';
    const melting = question(lang, 'l2-q7');
    assert.deepEqual(melting.choices.map(clean), [
      `Q = m c_${water} ΔT`, `Q = m L + m c_${water} ΔT`, `Q = m L + m c_${ice} ΔT`,
    ], lang);
    assert.ok(clean(melting.question).includes(`c_${water}`));
    assert.ok(clean(melting.question).includes(`c_${ice}`));
    assert.ok(clean(melting.explanations[2]).includes(`c_${water}`));
    assert.ok(clean(melting.explanations[2]).includes(`c_${ice}`));
    assert.match(compact(question(lang, 'l2-q5').choices[2]).replace(/,/g, ''), /4180/);
    assert.match(clean(question(lang, 'l2-q6').question), /250 kcal/);
    const conversion = compact(question(lang, 'l2-q6').explanations[2]).replace(/,/g, '');
    assert.ok(conversion.includes('250cal') && conversion.includes('250kcal') && conversion.includes('1000'));
    assert.equal(compact(question(lang, 'l5-q3').choices[2]).replace('et', ','), 'W<0,Q=0,ΔU=0');
    const slopes = compact(question(lang, 'l5-q4').explanations[1]);
    assert.ok(slopes.includes('-P/V') && slopes.includes('-γP/V'));
    assert.ok(compact(question(lang, 'l5-q4').explanations[3]).includes('ΔU=W<0'));
    assert.ok(compact(question(lang, 'l5-q9').explanations[1]).includes('T_C=T_B'));
    const isochoric = compact(question(lang, 'l4-q6').explanations[0]);
    assert.ok(isochoric.includes('W=0') && isochoric.includes('ΔU=Q'));
  }
});

test('revised RTL questions isolate formulas without unbalanced direction controls', () => {
  for (const lang of ['ar', 'fa', 'ur']) for (const id of Object.keys(revised)) {
    const q = question(lang, id);
    for (const text of [q.question, ...q.choices, ...q.explanations]) {
      let depth = 0;
      for (const char of text) {
        if (char === '\u2066') assert.equal(++depth, 1, `${lang}/${id}`);
        if (char === '\u2069') assert.equal(--depth, 0, `${lang}/${id}`);
      }
      assert.equal(depth, 0, `${lang}/${id}`);
    }
    if (id === 'l5-q3') assert.equal(q.choices[2], '\u2066W < 0, Q = 0, ΔU = 0\u2069');
    if (id === 'l5-q9') {
      assert.match(q.question, /\u2066\(P,V\)/);
      assert.match(q.question, /\u2066C\(2P_0,V_0\)/);
    }
  }
});
