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
    const dependency = id.startsWith('@/')
      ? path.resolve(__dirname, '..', id.slice(2))
      : path.resolve(path.dirname(resolved), id);
    assert.ok(id.startsWith('.') || id.startsWith('@/'), `Unexpected dependency ${id}`);
    return load(dependency + '.ts');
  }, module, module.exports);
  return module.exports;
}

const { getReaderLanguage } = load('lib/readerLanguage.server.ts');
const { SUPPORTED_LANGS, getTranslations, sectionHref, sectionFromSlug } = load('lib/i18n.ts');
const { getExerciseTranslations } = load('lib/exerciseTranslations.ts');
const { bookMeta, getWebThemes, getThemeTitle, getThemeDescription, getThemePartHeading, getThemeUrlSlug, getWebThemeFromUrlSlug } = load('lib/chapters.ts');

test('all 20 reader payloads retain existing translations and are losslessly serializable', () => {
  for (const lang of SUPPORTED_LANGS) {
    const data = getReaderLanguage(lang);
    assert.equal(data.lang, lang);
    assert.deepEqual(JSON.parse(JSON.stringify(data)), data, `${lang}: no functions or missing values`);
    const source = getTranslations(lang);
    const { readTime, ...chapter } = source.chapter;
    assert.deepEqual(data.t, {
      ...source,
      chapter,
      footer: { ...source.footer, copyright: source.footer.copyright(bookMeta.year, bookMeta.author) },
    });
    assert.deepEqual(data.exercises, getExerciseTranslations(lang));
    assert.ok(Buffer.byteLength(JSON.stringify(data)) < 40000, `${lang}: one compact language payload`);
  }
});

test('localized chapter labels, listing visibility and canonical paths remain correct in every language', () => {
  for (const lang of SUPPORTED_LANGS) {
    const { chapters } = getReaderLanguage(lang);
    for (const theme of getWebThemes()) {
      const entry = chapters[theme.slug];
      assert.equal(entry.title, getThemeTitle(theme, lang));
      assert.equal(entry.description, getThemeDescription(theme, lang));
      assert.equal(entry.partHeading, getThemePartHeading(theme, lang) ?? null);
      assert.equal(entry.listed, theme.listed !== false);
      assert.equal(entry.urlSlug, getThemeUrlSlug(theme, lang));
      assert.equal(getWebThemeFromUrlSlug(entry.urlSlug, lang).slug, theme.slug);
      const href = sectionHref(lang, 'chapters', entry.urlSlug);
      assert.equal(sectionFromSlug(lang, href.split('/')[2]), 'chapters');
      assert.equal('lessons' in entry, false, 'language labels do not duplicate lesson bodies');
    }
  }
});
