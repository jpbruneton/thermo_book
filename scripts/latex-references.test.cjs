const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

// Exercise the actual converter without starting Next's server runtime.
const cache = new Map();
function load(file) {
  const resolved = path.resolve(__dirname, '..', file);
  if (cache.has(resolved)) return cache.get(resolved).exports;
  const module = { exports: {} };
  cache.set(resolved, module);
  const js = ts.transpileModule(fs.readFileSync(resolved, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  new Function('require', 'module', 'exports', js)(id => {
    if (id === 'server-only') return {};
    return id.startsWith('@/') ? load(id.slice(2) + '.ts') : require(id);
  }, module, module.exports);
  return module.exports;
}

const { getTexWebHtmlFromSource } = load('lib/chapterContent.server.ts');
const render = source => getTexWebHtmlFromSource(source, 'fr', []);

test('equation references resolve in both directions and ref stays numeric', () => {
  const html = render(String.raw`
See \eqref{eq:first}, section~\ref{sec:test}.

\section{Test}\label{sec:test}
\begin{equation}a=b\label{eq:first}\end{equation}

Again \eqref{eq:first}, plain \ref{eq:first}, missing \eqref{eq:missing}.
`);
  assert.match(html, /See \(1\), section(?:\s|&nbsp;|&#160;)+1\./);
  assert.match(html, /Again \(1\), plain 1, missing \[eq:missing\]\./);
  assert.match(html, /latex-equation-number">\(1\)/);
});

test('displays without visible numbers do not shift equation references', () => {
  const html = render(String.raw`
\begin{equation}a=b\label{eq:first}\end{equation}
\begin{equation*}c=d\end{equation*}
\begin{align*}e&=f\end{align*}
\begin{gather}g=h\end{gather}
\begin{equation}i=j\label{eq:second}\end{equation}

See \eqref{eq:second}.
`);
  assert.match(html, /See \(2\)\./);
  assert.deepEqual([...html.matchAll(/latex-equation-number">\((\d+)\)/g)].map(m => m[1]), ['1', '2']);
});

test('every lesson 7 eqref matches the number displayed for its equation', () => {
  const source = fs.readFileSync(path.resolve(__dirname, '../content/tex/chp7_fr/lecon1.tex'), 'utf8');
  const numbers = new Map();
  let index = 0;
  for (const equation of source.matchAll(/\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g)) {
    index += 1;
    for (const label of equation[1].matchAll(/\\label\{([^}]+)\}/g)) numbers.set(label[1], index);
  }
  const references = [...source.matchAll(/\\eqref\{([^}]+)\}/g)].map(m => m[1]);
  assert.ok(references.length > 0);
  const probes = references.map(label => `CHECK:${label}=\\eqref{${label}};`).join('\n\n');
  const html = render(source + '\n\n' + probes);
  for (const label of references) {
    assert.ok(numbers.has(label), `Equation exists: ${label}`);
    assert.ok(html.includes(`CHECK:${label}=(${numbers.get(label)});`), `Reference resolves: ${label}`);
  }
  assert.doesNotMatch(html, /\\eqref\{/);
  assert.ok(html.includes('section&nbsp;1.4') || html.includes('section 1.4') || html.includes('section\u00a01.4'));
});
