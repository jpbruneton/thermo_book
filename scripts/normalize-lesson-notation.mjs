import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { normalizeTranslatedNotation } from './lib/translation-notation.mjs';

// Local migration only: no translation API or network access.
const root=resolve(import.meta.dirname,'..');
const texRoot=join(root,'content/tex');
const write=process.argv.includes('--write');
const changes=new Map();
const lessons=[];
function removeLegacyNote(text) {
  const marker='\\footnote{';
  for(let start=text.indexOf(marker);start>=0;start=text.indexOf(marker,start+1)) {
    let end=start+marker.length,depth=1;
    while(end<text.length&&depth){if(text[end]==='{')depth++;if(text[end]==='}')depth--;end++;}
    const note=text.slice(start,end);
    if(note.includes('\\emph{ch}')&&note.includes('\\emph{retour}')&&note.includes('\\emph{gaz}')) {
      return text.slice(0,start)+text.slice(end);
    }
  }
  return text;
}
function record(relative,before,after,kind) {
  if(before===after)return;
  const prior=changes.get(relative);
  if(prior&&prior.after!==after)throw Error('Conflicting figure updates: '+relative);
  changes.set(relative,{kind,before,after});
}
for(const directory of readdirSync(texRoot).filter(d=>/^chp\d+_(?!fr$)[a-z]{2}$/.test(d))) {
  const lang=directory.slice(-2);
  for(const name of readdirSync(join(texRoot,directory)).filter(f=>/^lesson\d+\.tex$/.test(f))) {
    const relative=`content/tex/${directory}/${name}`;
    const before=readFileSync(join(root,relative),'utf8');
    let after=normalizeTranslatedNotation(removeLegacyNote(before),lang,{legacyReservoirIndices:directory.startsWith('chp1_')});
    lessons.push(relative);
    for(const figure of before.matchAll(/\\includegraphics(?:\[[^\]]*\])?\{(figs\/([a-z]{2})\/([^}]+))\}/g)) {
      const [,asset,figureLang,file]=figure;
      const source=`content/tex/figs-src/${figureLang}/${basename(file).replace(/\.[^.]+$/,'.tex')}`;
      if(!existsSync(join(root,source)))continue; // Photos and shared image-only assets.
      const original=readFileSync(join(root,source),'utf8');
      const normalized=normalizeTranslatedNotation(original,lang,{legacyReservoirIndices:basename(file)==='moteur-ditherme-schema.png'});
      if(normalized===original)continue;
      const target=source.replace(`/figs-src/${figureLang}/`,`/figs-src/${lang}/`);
      const targetBefore=existsSync(join(root,target))?readFileSync(join(root,target),'utf8'):null;
      record(target,targetBefore,normalized,'figure');
      if(figureLang!==lang)after=after.replaceAll(`{${asset}}`,`{figs/${lang}/${file}}`);
    }
    record(relative,before,after,'lesson');
  }
}
const inventory={lessonsScanned:lessons.length,changes:Object.fromEntries(changes)};
mkdirSync(join(root,'tmp'),{recursive:true});
const report=join(root,'tmp/notation-migration.json');
if(write){
  if(existsSync(report)){
    const previous=JSON.parse(readFileSync(report,'utf8'));
    for(const [file,change] of Object.entries(previous.changes)){
      const current=inventory.changes[file];
      if(current&&current.before!==change.after)throw Error('File changed since the prior notation snapshot: '+file);
      inventory.changes[file]=current?{...current,before:change.before}:change;
    }
  }
  writeFileSync(report,JSON.stringify(inventory,null,2),'utf8');
  for(const [relative,{after}] of changes){mkdirSync(dirname(join(root,relative)),{recursive:true});writeFileSync(join(root,relative),after,'utf8');}
}
const figures=[...changes.entries()].filter(([,v])=>v.kind==='figure').map(([p])=>p);
console.log(JSON.stringify({mode:write?'write':'check',lessonsScanned:lessons.length,lessonsChanged:[...changes.values()].filter(v=>v.kind==='lesson').length,figuresChanged:figures.length,figureNames:[...new Set(figures.map(p=>basename(p)))],pending:changes.size},null,2));
