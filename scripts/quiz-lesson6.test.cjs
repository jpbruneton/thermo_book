const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

// Load the actual TypeScript data and public localization functions in Node.
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
const languages = 'en de es pt it pl ru zh ja ko hi vi ar id tr bn ur sw fa'.split(' ');
const source = getQuizQuestionsByLecon(6);
const fields = q => [q.question, ...q.choices, ...q.explanations];
const indices = text => [...text.normalize('NFC')
  .replace(/[\u2066-\u2069]/g, '')
  .replace(/_\{([^}]+)\}/g, '_$1')
  .replace(/_ch\b/g, '_H').replace(/_fr\b/g, '_C')
  .replace(/_gaz\b/g, '_gas').replace(/_réel\b/g, '_actual')
  .replace(/_machine\b/g, '_system')
  .matchAll(/_([A-Za-z0-9]+)/g)].map(m => m[1]).sort();

test('lesson 6 is complete in French and all 19 target languages', () => {
  assert.equal(source.length, 15);
  assert.deepEqual(getQuizLangsForLecon(6, ['fr', ...languages]), ['fr', ...languages]);
  for (const lang of ['fr', ...languages]) {
    const questions = getLocalizedQuizQuestions(6, lang);
    assert.equal(questions.length, source.length, lang);
    questions.forEach((q, i) => {
      assert.equal(q.id, source[i].id, lang);
      assert.equal(q.correctIndex, source[i].correctIndex, `${lang}/${q.id}`);
      assert.equal(q.choices.length, source[i].choices.length);
      assert.equal(q.explanations.length, q.choices.length);
      assert.equal(new Set(q.choices).size, q.choices.length, `${lang}/${q.id}: distinct choices`);
      assert.equal(q.trueFalse, q.id.includes('-vf'), `${lang}/${q.id}: localized true/false`);
      assert.ok(fields(q).every(value => typeof value === 'string' && value.trim()));
      if (lang !== 'fr') assert.notEqual(q.question, source[i].question, `${lang}/${q.id}: translated prompt`);
    });
  }
});

test('each translated prompt, choice and explanation preserves the scientific indices', () => {
  for (const lang of languages) {
    getLocalizedQuizQuestions(6, lang).forEach((q, i) => {
      fields(q).forEach((text, j) => {
        assert.deepEqual(indices(text), indices(fields(source[i])[j]), `${lang}/${q.id}/${j}`);
        assert.doesNotMatch(text, /_(?:ch|fr|gaz|réel|machine)\b|\ufffd|\$|\\(?:frac|mathrm|text)\b/);
      });
    });
  }
  assert.match(source.find(q => q.id === 'l6-q6').question, /Q_ch/);
  assert.match(source.find(q => q.id === 'l6-q7').choices[0], /T_fr/);
});

test('RTL quiz formulas have balanced LTR isolates around complete expressions', () => {
  for (const lang of ['ar', 'fa', 'ur']) {
    const questions = getLocalizedQuizQuestions(6, lang);
    for (const q of questions) for (const text of fields(q)) {
      let depth = 0;
      for (const char of text) {
        if (char === '\u2066') assert.equal(++depth, 1, `${lang}/${q.id}: nested isolate`);
        if (char === '\u2069') assert.equal(--depth, 0, `${lang}/${q.id}: unmatched isolate`);
      }
      assert.equal(depth, 0);
    }
    assert.match(questions.find(q => q.id === 'l6-q11').choices[0], /\u2066S_e = −8 J\/K[.\u2069]/);
  }
  for (const lang of ['fr', 'en', 'de', 'zh']) {
    assert.ok(getLocalizedQuizQuestions(6, lang).every(q => fields(q).every(t => !/[\u2066-\u2069]/.test(t))));
  }
});
