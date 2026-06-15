const fs = require('fs');
const path = require('path');

const DEFAULT_SOURCE_DIR = path.join(__dirname, '..', 'src', 'locales');
const DEFAULT_TARGET_DIR = path.join(__dirname, '..', 'dist', 'locales');

function readLocaleFiles(localeDir) {
  if (!fs.existsSync(localeDir)) {
    return [];
  }

  return fs.readdirSync(localeDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => ({
      name: file,
      path: path.join(localeDir, file),
      content: fs.readFileSync(path.join(localeDir, file), 'utf8')
    }));
}

function normalizeJson(content) {
  return JSON.stringify(JSON.parse(content));
}


function fillMissingKeyStubs(targetLocale, defaultLocale) {
  for (const key of Object.keys(defaultLocale)) {
    if (!targetLocale[key]) {
      targetLocale[key] = `[STUB] ${defaultLocale[key]}`;
    }
  }
}
    
function syncLocales({
  sourceDir = DEFAULT_SOURCE_DIR,
  targetDir = DEFAULT_TARGET_DIR,
  checkOnly = false
} = {}) {
  const sourceLocales = readLocaleFiles(sourceDir);

  if (!sourceLocales.length) {
    return {
      ok: false,
      error: `No locale files found in ${sourceDir}`
    };
  }

  const targetLocales = readLocaleFiles(targetDir);
  const targetByName = new Map(targetLocales.map((locale) => [locale.name, locale]));
  const mismatches = [];

  for (const sourceLocale of sourceLocales) {
    const targetLocale = targetByName.get(sourceLocale.name);
    if (!targetLocale) {
      mismatches.push({ name: sourceLocale.name, reason: 'missing in target' });
      continue;
    }

    if (normalizeJson(sourceLocale.content) !== normalizeJson(targetLocale.content)) {
      mismatches.push({ name: sourceLocale.name, reason: 'content differs' });
    }
  }

  for (const targetLocale of targetLocales) {
    if (!sourceLocales.find((locale) => locale.name === targetLocale.name)) {
      mismatches.push({ name: targetLocale.name, reason: 'extra in target' });
    }
  }

  if (!checkOnly && mismatches.length > 0) {
    fs.mkdirSync(targetDir, { recursive: true });
    for (const sourceLocale of sourceLocales) {
      fs.writeFileSync(path.join(targetDir, sourceLocale.name), sourceLocale.content);
    }

    for (const targetLocale of targetLocales) {
      if (!sourceLocales.find((locale) => locale.name === targetLocale.name)) {
        fs.unlinkSync(targetLocale.path);
      }
    }
  }

  return {
    ok: checkOnly ? mismatches.length === 0 : true,
    sourceDir,
    targetDir,
    mismatches
  };
}

function main(argv = process.argv.slice(2)) {
  const checkOnly = argv.includes('--check');
  const report = syncLocales({ checkOnly });
  console.log(JSON.stringify(report, null, 2));

  if (!report.ok) {
    process.exitCode = 2;
  }
}

if (require.main === module) main();

module.exports = {
  DEFAULT_SOURCE_DIR,
  DEFAULT_TARGET_DIR,
  readLocaleFiles,
  syncLocales,
  main
};