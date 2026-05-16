const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS_FILE = path.join(ROOT, 'data', 'components.json');
const OUT_DIR = path.join(ROOT, 'data', 'snippets');

function readJSON(p){
  try{ return JSON.parse(fs.readFileSync(p,'utf8')); }
  catch(e){ console.error('Failed to read', p); return []; }
}

function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function extractSnippet(html){
  // Try to extract <main> contents, fallback to <body> innerHTML, else full file
  const mainMatch = html.match(/<main[\s\S]*?>[\s\S]*?<\/main>/i);
  if(mainMatch){ return mainMatch[0]; }
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if(bodyMatch) return bodyMatch[1];
  return html;
}

function toJSX(html){
  // Minimal normalization for JSX:
  // - Replace class= with className=
  // - Self-close common void elements if not closed (best-effort)
  let jsx = html.replace(/class=/g, 'className=');
  // Replace HTML comments to JS comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  // Self-close img/input/br/hr if necessary (simple heuristic)
  jsx = jsx.replace(/<(img|input|br|hr)([^>]*)>/gi, (m, tag, rest)=>{
    if(/\/>\s*$/.test(m)) return m;
    return `<${tag}${rest} />`;
  });
  return jsx;
}

function writeFilesFor(component){
  const id = component.id || path.basename(component.path || component.title || 'component', '.html');
  const outDir = path.join(OUT_DIR, id);
  ensureDir(outDir);

  const pagePath = path.join(ROOT, component.path || component.file || '');
  if(!fs.existsSync(pagePath)){
    console.warn(`skip ${id}: source file not found: ${pagePath}`);
    return null;
  }
  const html = fs.readFileSync(pagePath, 'utf8');
  const snippet = extractSnippet(html).trim();
  if(!snippet) return null;

  // 1) raw HTML
  const htmlFile = path.join(outDir, `${id}.html`);
  fs.writeFileSync(htmlFile, snippet + '\n', 'utf8');

  // 2) React JSX component (functional)
  const jsxContent = `import React from 'react';\n\nexport default function ${camelCase(id)}(){\n  return (\n    <>\n${indent(toJSX(snippet), 6)}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, `${id}.jsx`), jsxContent, 'utf8');

  // 3) Vue SFC
  const vueContent = `<template>\n${snippet}\n</template>\n\n<script>\nexport default { name: '${pascalCase(id)}' }\n</script>\n`;
  fs.writeFileSync(path.join(outDir, `${id}.vue`), vueContent, 'utf8');

  return { id, htmlFile, jsx: path.join(outDir, `${id}.jsx`), vue: path.join(outDir, `${id}.vue`) };
}

function indent(s, n){ return s.split('\n').map(l=> ' '.repeat(n) + l).join('\n'); }
function camelCase(s){ return s.replace(/[-_ ]+(.)/g, (_,c)=>c.toUpperCase()).replace(/[^a-zA-Z0-9]/g,'').replace(/^(.)/, m=>m.toLowerCase()); }
function pascalCase(s){ const c = camelCase(s); return c.charAt(0).toUpperCase()+c.slice(1); }

function main(){
  const comps = readJSON(COMPONENTS_FILE);
  if(!comps || comps.length === 0){ console.error('No components found in', COMPONENTS_FILE); process.exit(1); }
  ensureDir(OUT_DIR);
  const index = [];
  for(const c of comps){
    const res = writeFilesFor(c);
    if(res) index.push(res);
  }
  fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n', 'utf8');
  console.log(`Exported ${index.length} component snippet sets to ${OUT_DIR}`);
}

if(require.main === module) main();
