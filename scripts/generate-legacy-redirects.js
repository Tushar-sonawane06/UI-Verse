#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const repoRoot = path.resolve(new URL('.', import.meta.url).pathname, '..');
const aliasesPath = path.join(repoRoot, 'data', 'legacy-aliases.json');

function makeRedirect(target) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${target}">
    <meta name="robots" content="noindex">
    <title>Redirecting…</title>
    <script>location.replace('${target}');</script>
  </head>
  <body>
    Redirecting to <a href="${target}">${target}</a>
  </body>
</html>`;
}

async function run() {
  if (!fs.existsSync(aliasesPath)) {
    console.error('No legacy aliases file found at', aliasesPath);
    process.exit(1);
  }

  const aliases = JSON.parse(fs.readFileSync(aliasesPath, 'utf8'));

  for (const [alias, target] of Object.entries(aliases)) {
    const aliasPath = path.join(repoRoot, alias);
    try {
      fs.writeFileSync(aliasPath, makeRedirect(target), { encoding: 'utf8' });
      console.log('Wrote redirect:', alias, '→', target);
    } catch (err) {
      console.error('Failed to write redirect for', alias, err);
    }
  }
}

run();
