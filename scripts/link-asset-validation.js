#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const SKIP_DIRS = new Set([
  '.git',
  'node_modules',
  'dist',
  'playwright-report',
  'test-results',
  'coverage',
  'generated-images',
  'Docs',
  'components',
  'data',
  '.github'
]);
const SKIP_FILES = new Set(['package-lock.json']);

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), results);
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (SKIP_FILES.has(entry.name)) continue;
    if (entry.name.toLowerCase().endsWith('.html') && !entry.name.toLowerCase().endsWith('.html.bak')) {
      results.push(fullPath);
    }
  }

  return results;
}

function normalizeSlashes(value) {
  return value.split(path.sep).join('/');
}


function isRemoteUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}
    
function isExternalUrl(value) {
  return /^(?:[a-z]+:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('mailto:') || value.startsWith('tel:');
}

function stripQueryAndHash(value) {
  return value.split('#')[0].split('?')[0];
}

function extractCandidates(html) {
  const refs = [];
  const attrRe = /<(?:a|link|script|img|source|video|audio|iframe|use)\b[^>]*(?:href|src|data-src|poster)=(["'])([^"']+)\1/gi;
  let match;

  while ((match = attrRe.exec(html)) !== null) {
    refs.push(match[2]);
  }

  return refs;
}

function resolveTarget(filePath, ref) {
  const cleanRef = stripQueryAndHash(ref);
  if (!cleanRef || isExternalUrl(cleanRef) || cleanRef.startsWith('#')) return null;

  const target = cleanRef.startsWith('/')
    ? path.resolve(ROOT, `.${cleanRef}`)
    : path.resolve(path.dirname(filePath), cleanRef);
  return target;
}

function collectMissingAssets(htmlFiles) {
  const missing = [];

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf8');
    const refs = new Set(extractCandidates(html));

    for (const ref of refs) {
      const target = resolveTarget(filePath, ref);
      if (!target) continue;

      if (!fs.existsSync(target)) {
        missing.push({
          filePath,
          ref,
          target
        });
      }
    }
  }

  return missing;
}

function runLinkinator() {
  const args = [
    'linkinator',
    ROOT,
    '--recurse',
    '--check-fragments',
    '--check-css',
    '--timeout',
    '2000',
    '--verbosity',
    'error',
    '--skip',
    '\\.bak$',
    '--skip',
    'dist/',
    '--skip',
    'node_modules/',
    '--skip',
    'playwright-report/',
    '--skip',
    'test-results/',
    '--skip',
    'coverage/'
  ];

  return spawnSync('npx', args, {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });
}

async function main() {
  const checkOnly = process.argv.includes('--check');
  const htmlFiles = walk(ROOT);

  const missingAssets = collectMissingAssets(htmlFiles);
  const linkinatorRun = runLinkinator();
  const brokenLinks = [];

  if (linkinatorRun.status !== 0) {
    const lines = String(linkinatorRun.stderr || linkinatorRun.stdout || '')
      .split(/\r?\n/)
      .filter(Boolean);

    lines.forEach((line) => {
      if (/broken|missing|404|error/i.test(line)) {
        brokenLinks.push({
          filePath: ROOT,
          url: line,
          status: linkinatorRun.status,
          message: line
        });
      }
    });
  }

  if (checkOnly) {
    if (missingAssets.length > 0 || brokenLinks.length > 0) {
      console.error('Broken-link and asset-path validation failed.');

      missingAssets.slice(0, 100).forEach((item) => {
        console.error(`- Missing asset: ${normalizeSlashes(path.relative(ROOT, item.filePath))} -> ${item.ref} (resolved to ${normalizeSlashes(path.relative(ROOT, item.target))})`);
      });

      brokenLinks.slice(0, 100).forEach((item) => {
        console.error(`- Broken link: ${normalizeSlashes(path.relative(ROOT, item.filePath))} -> ${item.url}`);
      });

      if (missingAssets.length > 100) {
        console.error(`- ...and ${missingAssets.length - 100} more missing assets`);
      }

      if (brokenLinks.length > 100) {
        console.error(`- ...and ${brokenLinks.length - 100} more broken links`);
      }

      process.exit(1);
    }

    console.log('Broken-link and asset-path validation passed.');
    return;
  }

  if (linkinatorRun.error) {
    console.error(`Linkinator execution failed: ${linkinatorRun.error.message}`);
    process.exit(1);
  }

  if (missingAssets.length > 0 || brokenLinks.length > 0 || linkinatorRun.status !== 0) {
    console.error('Broken-link and asset-path validation found issues. Re-run with --check for details.');
    process.exit(1);
  }

  console.log(`Validated ${htmlFiles.length} HTML file(s).`);
}

main().catch((error) => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
});
