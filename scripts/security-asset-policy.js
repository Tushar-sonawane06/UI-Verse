#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SKIP_DIRS = new Set(['.git', 'node_modules', 'playwright-report', 'test-results', 'generated-images', 'coverage', 'dist']);
const TRUSTED_FONT_HOSTS = new Set(['fonts.googleapis.com', 'fonts.gstatic.com']);
const POLICY_ASSETS = [
  {
    url: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js',
    integrity: 'sha256-s4B2di9zY7yekStouOA0gmeY213ya7YfAA7C56MTe8c='
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/flatpickr',
    integrity: 'sha256-Huqxy3eUcaCwqqk92RwusapTfWlvAasF6p2rxV6FJaE='
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
    integrity: 'sha256-GzSkJVLJbxDk36qko2cnawOGiqz/Y8GsQv/jMTUrx1Q='
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css',
    integrity: 'sha256-UL4vkzn6LemtmggyEAIZqQn9VAHGwHYSwCyTeCf5MZw='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    integrity: 'sha256-HtsXJanqjKTc8vVQjO4YMhiqFoXkfBsjBWcX91T1jr8='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    integrity: 'sha256-yIDrPSXHZdOZhAqiBP7CKzIwMQmRCJ8UeB8Jo17YC4o='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    integrity: 'sha256-wiz7ZSCn/btzhjKDQBms9Hx4sSeUYsDrTLg7roPstac='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
    integrity: 'sha256-XOqroi11tY4EFQMR9ZYwZWKj5ZXiftSx36RRuC3anlA='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
    integrity: 'sha256-5eIC48iZUHmSlSUz9XtjRyK2mzQkHScZY1WdMaoz74E='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
    integrity: 'sha256-9sWQSWbvKc7NvB2NhyQKwP1ZVTLbZHUUPg4iCSTGiNA='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    integrity: 'sha256-rMfkFFWoB2W1/Zx+4bgHim0WC7vKRVrq6FTeZclH1Z4='
  },
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
    integrity: 'sha256-xUHvBjJ4hahBW8qN9gceFBibSFUzbe9PNttUvehITzY='
  },
  {
    url: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
  },
  {
    url: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
  }
];

const ASSET_BY_URL = new Map(POLICY_ASSETS.map((asset) => [asset.url, asset]));

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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeSlashes(value) {
  return value.split(path.sep).join('/');
}

function updateOpeningTag(tag, asset) {
  let updated = tag;

  if (/\bintegrity=/i.test(updated)) {
    updated = updated.replace(/\bintegrity=("|')[^"']*("|')/i, `integrity="${asset.integrity}"`);
  } else {
    updated = updated.replace(/\s*>$/, ` integrity="${asset.integrity}" crossorigin="anonymous">`);
  }

  if (/\bcrossorigin=/i.test(updated)) {
    updated = updated.replace(/\bcrossorigin=("|')[^"']*("|')/i, 'crossorigin="anonymous"');
  } else {
    updated = updated.replace(/\s*>$/, ' crossorigin="anonymous">');
  }

  return updated;
}

function applyAssetPolicy(html) {
  let updated = html;

  for (const asset of POLICY_ASSETS) {
    const escapedUrl = escapeRegExp(asset.url);
    const tagPattern = asset.url.endsWith('.js') || asset.url === 'https://cdn.jsdelivr.net/npm/flatpickr'
      ? new RegExp(`<script\\b[^>]*\\bsrc=("|')${escapedUrl}\\1[^>]*>`, 'gi')
      : new RegExp(`<link\\b[^>]*\\bhref=("|')${escapedUrl}\\1[^>]*>`, 'gi');

    updated = updated.replace(tagPattern, (tag) => updateOpeningTag(tag, asset));
  }

  updated = updated.replace(/<link\b([^>]*\brel=("|')preconnect\2[^>]*)>/gi, (tag) => {
    if (!/href=("|')https:\/\/fonts\.gstatic\.com\1/i.test(tag)) {
      return tag;
    }

    if (/\bcrossorigin=/i.test(tag)) {
      return tag.replace(/\bcrossorigin=("|')[^"']*("|')/i, 'crossorigin="anonymous"');
    }

    return tag.replace(/\s*>$/, ' crossorigin="anonymous">');
  });

  return updated;
}

function collectViolations(html, filePath) {
  const violations = [];
  const tagPattern = /<(script|link)\b[^>]*(?:src|href)=("|')([^"']+)\2[^>]*>/gi;
  let match;

  while ((match = tagPattern.exec(html)) !== null) {
    const tagName = match[1].toLowerCase();
    const url = match[3];

    if (!/^https?:\/\//i.test(url)) {
      continue;
    }

    const host = new URL(url).host;

    if (TRUSTED_FONT_HOSTS.has(host)) {
      if (host === 'fonts.gstatic.com' && !/\bcrossorigin=("|')anonymous\1/i.test(match[0])) {
        violations.push({
          filePath,
          url,
          message: 'fonts.gstatic.com preconnect must include crossorigin="anonymous"'
        });
      }

      continue;
    }

    const asset = ASSET_BY_URL.get(url);

    if (!asset) {
      violations.push({
        filePath,
        url,
        message: `Unapproved external ${tagName} asset`
      });
      continue;
    }

    if (!/\bintegrity=("|')/i.test(match[0])) {
      violations.push({
        filePath,
        url,
        message: 'Missing integrity attribute'
      });
    }

    if (!/\bcrossorigin=("|')anonymous\1/i.test(match[0])) {
      violations.push({
        filePath,
        url,
        message: 'Missing crossorigin="anonymous" attribute'
      });
    }
  }

  return violations;
}

function processFile(filePath, checkOnly) {
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = applyAssetPolicy(original);

  if (checkOnly) {
    return {
      changed: updated !== original,
      violations: collectViolations(original, filePath)
    };
  }

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
    return {
      changed: true,
      violations: []
    };
  }

  return {
    changed: false,
    violations: []
  };
}

function main() {
  const checkOnly = process.argv.includes('--check');
  const htmlFiles = walk(ROOT);
  const changedFiles = [];
  const violations = [];

  for (const filePath of htmlFiles) {
    const result = processFile(filePath, checkOnly);
    if (result.changed) {
      changedFiles.push(normalizeSlashes(path.relative(ROOT, filePath)));
    }

    violations.push(...result.violations);
  }

  if (checkOnly) {
    if (violations.length > 0) {
      console.error('Security asset policy verification failed.');
      for (const violation of violations.slice(0, 200)) {
        console.error(`- ${normalizeSlashes(path.relative(ROOT, violation.filePath))}: ${violation.message} (${violation.url})`);
      }

      if (violations.length > 200) {
        console.error(`- ...and ${violations.length - 200} more`);
      }

      process.exit(1);
    }

    if (changedFiles.length > 0) {
      console.error('Security asset policy verification failed. The following files still need policy updates:');
      changedFiles.forEach((file) => console.error(`- ${file}`));
      process.exit(1);
    }

    console.log('Security asset policy verification passed.');
    return;
  }

  console.log(`Updated security asset policy in ${changedFiles.length} HTML files.`);
}

if (require.main === module) {
  main();
}

module.exports = {
  POLICY_ASSETS,
  TRUSTED_FONT_HOSTS,
  applyAssetPolicy,
  collectViolations,
  main
};