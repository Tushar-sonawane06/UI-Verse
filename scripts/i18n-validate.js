const fs = require('fs');
const path = require('path');

const DEFAULT_SOURCE_DIR = path.join(__dirname, '..', 'src', 'locales');
const DEFAULT_DISTRIBUTION_DIR = path.join(__dirname, '..', 'dist', 'locales');
const DEFAULT_EXTRACTED_KEYS_FILE = path.join(__dirname, '..', 'locales', 'extracted-keys.json');

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function readLocaleDirectory(localesDir) {
  if (!fs.existsSync(localesDir)) {
    return [];
  }

  return fs.readdirSync(localesDir)
    .filter((file) => file.endsWith('.json') && file !== 'extracted-keys.json')
    .map((file) => ({
      name: file.replace(/\.json$/, ''),
      path: path.join(localesDir, file),
      data: loadJson(path.join(localesDir, file))
    }));
}

function readExtractedKeys(extractedKeysFile = DEFAULT_EXTRACTED_KEYS_FILE) {
  if (!fs.existsSync(extractedKeysFile)) {
    return [];
  }

  const raw = loadJson(extractedKeysFile);
  return Array.isArray(raw) ? raw : [];
}

function compareLocaleDirectories(sourceDir, targetDir) {
  const sourceLocales = readLocaleDirectory(sourceDir);
  const targetLocales = readLocaleDirectory(targetDir);
  const targetByName = new Map(targetLocales.map((locale) => [locale.name, locale]));
  const mismatches = [];

  for (const sourceLocale of sourceLocales) {
    const targetLocale = targetByName.get(sourceLocale.name);
    if (!targetLocale) {
      mismatches.push({ name: sourceLocale.name, reason: 'missing in target' });
      continue;
    }

    if (JSON.stringify(sourceLocale.data) !== JSON.stringify(targetLocale.data)) {
      mismatches.push({ name: sourceLocale.name, reason: 'content differs' });
    }
  }

  for (const targetLocale of targetLocales) {
    if (!sourceLocales.find((locale) => locale.name === targetLocale.name)) {
      mismatches.push({ name: targetLocale.name, reason: 'extra in target' });
    }
  }

  return {
    ok: mismatches.length === 0,
    mismatches
  };
}

function validateLocales({
  sourceDir = DEFAULT_SOURCE_DIR,
  extractedKeysFile = DEFAULT_EXTRACTED_KEYS_FILE,
  distributionDir = DEFAULT_DISTRIBUTION_DIR
} = {}) {
  const locales = readLocaleDirectory(sourceDir);

  if (!locales.length) {
    return {
      ok: false,
      error: `No locale files found in ${sourceDir}`
    };
  }

  const canonical = locales.find((locale) => locale.name === 'en') || locales[0];
  const canonicalKeys = Object.keys(canonical.data).sort();
  const canonicalKeySet = new Set(canonicalKeys);
  const extractedKeys = readExtractedKeys(extractedKeysFile);

  const localeReports = locales.map((locale) => {
    const localeKeys = Object.keys(locale.data);
    return {
      name: locale.name,
      missingFromCanonical: canonicalKeys.filter((key) => !(key in locale.data)),
      extraComparedToCanonical: localeKeys.filter((key) => !canonicalKeySet.has(key)),
      missingExtracted: extractedKeys.filter((key) => !(key in locale.data))
    };
  });

  const distributionSync = compareLocaleDirectories(sourceDir, distributionDir);
  const ok = localeReports.every((report) => report.missingFromCanonical.length === 0 && report.extraComparedToCanonical.length === 0 && report.missingExtracted.length === 0) && distributionSync.ok;

  return {
    ok,
    sourceDir,
    distributionDir,
    extractedKeysFile,
    extractedKeys,
    locales: localeReports,
    distributionSync
  };
}

function main() {
  const report = validateLocales();
  console.log(JSON.stringify(report, null, 2));

  if (!report.ok) {
    process.exitCode = 2;
  }
}

if (require.main === module) main();

module.exports = {
  DEFAULT_DISTRIBUTION_DIR,
  DEFAULT_EXTRACTED_KEYS_FILE,
  DEFAULT_SOURCE_DIR,
  compareLocaleDirectories,
  loadJson,
  main,
  readExtractedKeys,
  readLocaleDirectory,
  validateLocales
};
