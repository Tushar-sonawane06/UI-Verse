const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = process.cwd();
const SKIP_DIRS = new Set(['.git', 'node_modules', 'playwright-report', 'test-results', 'generated-images', 'coverage', 'dist']);
const INLINE_SCRIPT_RE = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
const INLINE_STYLE_RE = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
const STYLE_ATTR_RE = /\sstyle\s*=\s*("([^"]*)"|'([^']*)')/gi;
const EVENT_ATTR_RE = /\s(on[a-z]+)\s*=\s*("([^"]*)"|'([^']*)')/gi;

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) {
        continue;
      }
      walk(path.join(dir, entry.name), results);
      continue;
    }

    if (entry.name.toLowerCase().endsWith('.html')) {
      results.push(path.join(dir, entry.name));
    }
  }

  return results;
}

function hashValue(value) {
  return `sha256-${crypto.createHash('sha256').update(value, 'utf8').digest('base64')}`;
}

function collectHashes(html) {
  const scriptHashes = new Set();
  const styleHashes = new Set();

  let match;
  while ((match = INLINE_SCRIPT_RE.exec(html)) !== null) {
    scriptHashes.add(hashValue(match[1]));
  }

  while ((match = INLINE_STYLE_RE.exec(html)) !== null) {
    styleHashes.add(hashValue(match[1]));
  }

  while ((match = STYLE_ATTR_RE.exec(html)) !== null) {
    styleHashes.add(hashValue(match[2] || match[3] || ''));
  }

  while ((match = EVENT_ATTR_RE.exec(html)) !== null) {
    scriptHashes.add(hashValue(match[3] || match[4] || ''));
  }

  return {
    scriptHashes: Array.from(scriptHashes).sort(),
    styleHashes: Array.from(styleHashes).sort(),
  };
}

function buildPolicy(scriptHashes, styleHashes) {
  const scriptHashesText = scriptHashes.length ? ` ${scriptHashes.join(' ')}` : '';
  const styleHashesText = styleHashes.length ? ` ${styleHashes.join(' ')}` : '';

  return [
    "default-src 'self' https:",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "connect-src 'self' https:",
    "img-src 'self' data: https:",
    "font-src 'self' data: https:",
    `script-src 'self' https: 'unsafe-hashes'${scriptHashesText}`,
    `script-src-attr 'unsafe-hashes'${scriptHashesText}`,
    `style-src 'self' https: 'unsafe-hashes'${styleHashesText}`,
    `style-src-attr 'unsafe-hashes'${styleHashesText}`
  ].join('; ');
}

function insertOrReplaceMeta(html, policy) {
  const metaTag = `<meta http-equiv="Content-Security-Policy" content="${policy.replace(/"/g, '&quot;')}">`;

  if (/<meta\s+http-equiv=["']Content-Security-Policy["']/i.test(html)) {
    return html.replace(/<meta\s+http-equiv=["']Content-Security-Policy["'][^>]*>/i, metaTag);
  }

  const headMatch = html.match(/<head\b[^>]*>/i);
  if (!headMatch) {
    return html;
  }

  const charsetMatch = html.match(/<meta\s+charset=["'][^"']*["'][^>]*>/i);
  if (charsetMatch) {
    return html.replace(charsetMatch[0], `${charsetMatch[0]}\n  ${metaTag}`);
  }

  return html.replace(headMatch[0], `${headMatch[0]}\n  ${metaTag}`);
}

function processFile(htmlFile, checkOnly) {
  const original = fs.readFileSync(htmlFile, 'utf8');
  const { scriptHashes, styleHashes } = collectHashes(original);
  const policy = buildPolicy(scriptHashes, styleHashes);
  const updated = insertOrReplaceMeta(original, policy);

  if (checkOnly) {
    return {
      changed: updated !== original,
      htmlFile,
    };
  }

  if (updated !== original) {
    fs.writeFileSync(htmlFile, updated, 'utf8');
    return {
      changed: true,
      htmlFile,
    };
  }

  return {
    changed: false,
    htmlFile,
  };
}

function main() {
  const checkOnly = process.argv.includes('--check');
  const htmlFiles = walk(ROOT);
  const changedFiles = [];

  for (const htmlFile of htmlFiles) {
    const result = processFile(htmlFile, checkOnly);
    if (result.changed) {
      changedFiles.push(path.relative(ROOT, htmlFile).split(path.sep).join('/'));
    }
  }

  if (checkOnly) {
    if (changedFiles.length) {
      console.error('CSP verification failed. The following HTML files still need the generated CSP meta tag:');
      changedFiles.forEach((file) => console.error(`- ${file}`));
      process.exit(1);
    }

    console.log('CSP verification passed.');
    return;
  }

  console.log(`Updated CSP meta tags in ${changedFiles.length} HTML files.`);
}

main();