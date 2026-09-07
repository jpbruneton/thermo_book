/** Shared mathematical labels for all non-French lesson translations.
 * Only math is rewritten: labels, citations, filenames and prose are untouched.
 * See docs/translation-prompt.md for the notation convention.
 */
const labels = {
  ch: 'H', fr: 'C', autres: 'other', pression: 'press',
  'élec': 'elec', gaz: 'gas', constante: 'const', cste: 'const',
};
const constantLabels = new Set([
  'const', 'constant', 'constante', 'cste', 'konstant', 'konstan', 'costante',
  'stała', 'постоянная', 'thabiti', 'sabit', 'hằng số', '常数', '一定', '일정',
  '상수', 'नियत', 'नियतांक', 'ধ্রুব', 'ধ্রুবক', 'ثابت', 'مستقل',
]);

export function normalizeMathNotation(math, { legacyReservoirIndices = false } = {}) {
  const protectedCommands = [];
  let result = math.replace(/\\(?:label|ref|eqref|cite|input|includegraphics)(?:\[[^\]]*\])?\{[^{}]*\}/g, command => {
    protectedCommands.push(command);
    return `NOTATIONPROTECTED${protectedCommands.length - 1}END`;
  })
    .replace(/\\(?:mathrm|textrm)\{(aller|retour)\}/g,
      (_, word) => word === 'aller' ? 'A\\to B' : 'B\\to A')
    .replace(/\\rm\s+(aller|retour)\b/g,
      (_, word) => word === 'aller' ? 'A\\to B' : 'B\\to A')
    .replace(/\\(mathrm|textrm)\{(ch|fr|autres|pression|élec|gaz|constante|cste)\}/g,
      (_, command, word) => `\\${command}{${labels[word]}}`)
    .replace(/\\rm\s+(ch|fr|autres|pression|élec|gaz|constante|cste)\b/g,
      (_, word) => `\\rm ${labels[word]}`)
    .replace(/\\(?:text|mathrm|textrm)\{([^{}]+)\}/g,
      (original, word) => constantLabels.has(word.trim()) ? '\\mathrm{const}' : original);
  // In lesson 1, c/f mean chaud/froid only on heat and temperature.
  // Never replace a general _c: c_V and the Carnot vertices are unrelated.
  if (legacyReservoirIndices) {
    result = result.replace(/\b([QT])_(?:\{([cf])\}|([cf])\b)/g,
      (_, variable, braced, bare) => `${variable}_{\\mathrm{${(braced || bare) === 'c' ? 'H' : 'C'}}}`);
  }
  // E_c is the French kinetic-energy mnemonic, not cold-reservoir energy.
  result = result.replace(/\bE_(?:c\b|\{c\})/g, 'E_{\\mathrm{kin}}');
  return result.replace(/NOTATIONPROTECTED(\d+)END/g, (_, index) => protectedCommands[Number(index)]);
}

export function mapLatexMath(source, transform) {
  return source.replace(
    /(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$|(?<!\\)\$(?!\$)(?:\\[\s\S]|[^$])*?(?<!\\)\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\\begin\{(equation\*?|align\*?|gather\*?|eqnarray\*?)\}[\s\S]*?\\end\{\1\}/g,
    match => transform(match),
  );
}

export function normalizeTranslatedNotation(source, lang, options) {
  if (lang === 'fr') return source;
  return mapLatexMath(source, math => normalizeMathNotation(math, options));
}
