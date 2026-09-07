import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeTranslatedNotation } from './lib/translation-notation.mjs';

test('distinguishes hot/cold, kinetic energy, heat capacities and vertices', () => {
  const source = String.raw`$Q_c+Q_{f}, T_c>T_{f}, E_c=E_{c}^{\mathrm{macro}}, c_V, C_V, Q_{C\to D}$`;
  assert.equal(normalizeTranslatedNotation(source, 'ja', { legacyReservoirIndices: true }),
    String.raw`$Q_{\mathrm{H}}+Q_{\mathrm{C}}, T_{\mathrm{H}}>T_{\mathrm{C}}, E_{\mathrm{kin}}=E_{\mathrm{kin}}^{\mathrm{macro}}, c_V, C_V, Q_{C\to D}$`);
  assert.equal(normalizeTranslatedNotation(source, 'fr'), source);
});

test('does not reinterpret a critical or final temperature outside lesson 1', () => {
  const source=String.raw`$T_c, T_f, Q_c, Q_f, c_V, C_P$`;
  assert.equal(normalizeTranslatedNotation(source,'en'),source);
});

test('preserves signs and nested machine indices and rewrites both return notations', () => {
  const source = String.raw`\[Q_{{\rm ch},(\mathcal M')^{-1}}<0, T_{\rm fr}<T_{\rm ch}, \Delta S_{\rm tot}^{\rm aller}+\Delta S_{\rm tot}^{\mathrm{retour}}=0\]`;
  const expected = String.raw`\[Q_{{\rm H},(\mathcal M')^{-1}}<0, T_{\rm C}<T_{\rm H}, \Delta S_{\rm tot}^{A\to B}+\Delta S_{\rm tot}^{B\to A}=0\]`;
  assert.equal(normalizeTranslatedNotation(source, 'en'), expected);
});

test('leaves prose, cross references and asset filenames unchanged', () => {
  const source = String.raw`E_c in prose; \includegraphics{figs/fr/Q_c.png}
\begin{equation} E_c+E_{\mathrm{int}}^{\mathrm{autres}}=0. \label{eq:E_c}\end{equation}
\ref{eq:E_c} \cite{Q_c} \input{ref_6_6}`;
  const result=normalizeTranslatedNotation(source,'zh');
  assert.equal(result,source.replace(' E_c+E_{\\mathrm{int}}^{\\mathrm{autres}}',' E_{\\mathrm{kin}}+E_{\\mathrm{int}}^{\\mathrm{other}}'));
  assert.equal(normalizeTranslatedNotation(result,'zh'),result);
});

test('handles inline, display and aligned math with stable common abbreviations', () => {
  const source=String.raw`\(W_{\mathrm{pression}}\) $$W_{\mathrm{élec}}$$ $S_{\rm gaz},S_{\rm tot},P_{\rm ext},W_{\rm rev}$
\begin{align}TV^{\gamma-1}&=\mathrm{constante}\\T_{\rm sys}&=\text{cste}\end{align}`;
  const out=normalizeTranslatedNotation(source,'ar');
  for(const expected of ['\\mathrm{press}','\\mathrm{elec}','\\rm gas','\\rm tot','\\rm ext','\\rm rev','\\mathrm{const}'])assert.ok(out.includes(expected));
  assert.equal(normalizeTranslatedNotation(out,'ar'),out);
});

test('uses the same compact constant label in non-Latin translations', () => {
  for(const word of ['constant','一定','常数','상수','ثابت','नियतांक','hằng số']) {
    assert.equal(normalizeTranslatedNotation(`$TV^{\\gamma-1}=\\text{${word}}$`,'ja'),String.raw`$TV^{\gamma-1}=\mathrm{const}$`);
  }
});
