#!/usr/bin/env node

/**
 * Localization Synchronization Service
 * Manages translation workflows with automated stub population
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const LOCALES_DIR = path.join(process.cwd(), 'locales');
const SYNC_STATE_FILE = path.join(process.cwd(), '.localization-sync-state.json');
const SOURCE_LOCALE = 'en';
const STUB_PLACEHOLDER = '__NEEDS_TRANSLATION__';

/**
 * Initialize localization directories
 */
function ensureLocalizationDirs() {
  if (!fs.existsSync(LOCALES_DIR)) {
    fs.mkdirSync(LOCALES_DIR, { recursive: true });
  }
  
  const sourceDir = path.join(LOCALES_DIR, SOURCE_LOCALE);
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }
}

/**
 * Load locale file
 */
function loadLocale(locale, namespace = 'common') {
  const filePath = path.join(LOCALES_DIR, locale, `${namespace}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.warn(`Error loading locale file ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Save locale file
 */
function saveLocale(locale, namespace, data) {
  const localeDir = path.join(LOCALES_DIR, locale);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
  }

  const filePath = path.join(localeDir, `${namespace}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
  return filePath;
}

/**
 * Extract translatable strings from source
 */
function extractStringsFromSource() {
  const strings = {};

  // Extract from HTML files
  const htmlFiles = fs.readdirSync(process.cwd())
    .filter(file => file.endsWith('.html'));

  for (const file of htmlFiles) {
    const content = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
    
    // Extract data-i18n attributes
    const i18nRegex = /data-i18n=["']([^"']+)["']/g;
    let match;

    while ((match = i18nRegex.exec(content)) !== null) {
      const key = match[1];
      if (!strings[key]) {
        strings[key] = { files: [] };
      }
      strings[key].files.push(file);
    }

    // Extract text content patterns
    const textRegex = /<!--\s*i18n:\s*([a-zA-Z0-9._]+)\s*-->/g;
    while ((match = textRegex.exec(content)) !== null) {
      const key = match[1];
      if (!strings[key]) {
        strings[key] = { files: [] };
      }
      strings[key].files.push(file);
    }
  }

  return strings;
}

/**
 * Automatically populate stub translations
 */
function populateStubs(locale, sourceData, targetData = {}) {
  const stubs = { ...targetData };
  let stubCount = 0;

  for (const [key, value] of Object.entries(sourceData)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Handle nested objects
      if (!stubs[key]) {
        stubs[key] = {};
      }
      const nestedResult = populateStubs(locale, value, stubs[key]);
      stubs[key] = nestedResult.data;
      stubCount += nestedResult.count;
    } else if (!stubs[key]) {
      // Create stub with placeholder
      stubs[key] = STUB_PLACEHOLDER;
      stubCount++;
    }
  }

  return { data: stubs, count: stubCount };
}

/**
 * Synchronize localization files
 */
function synchronizeLocales(locales = [], options = {}) {
  ensureLocalizationDirs();

  const { autoPopulateStubs = true, namespace = 'common', force = false } = options;
  const syncReport = {
    timestamp: new Date().toISOString(),
    sourceLocale: SOURCE_LOCALE,
    targetLocales: locales,
    summary: {
      synchronized: [],
      created: [],
      stubsPopulated: 0,
      warnings: []
    },
    details: []
  };

  // Extract source strings
  const sourceStrings = extractStringsFromSource();
  const sourceData = extractTranslatableContent(sourceStrings);

  // Save source locale
  saveLocale(SOURCE_LOCALE, namespace, sourceData);
  
  // Synchronize target locales
  for (const locale of locales) {
    if (locale === SOURCE_LOCALE) continue;

    const localeDir = path.join(LOCALES_DIR, locale);
    const isNew = !fs.existsSync(localeDir);

    if (isNew) {
      fs.mkdirSync(localeDir, { recursive: true });
    }

    const targetFile = path.join(localeDir, `${namespace}.json`);
    let targetData = {};

    // Load existing target data if available
    if (fs.existsSync(targetFile) && !force) {
      targetData = loadLocale(locale, namespace) || {};
    }

    // Populate stubs for missing translations
    if (autoPopulateStubs) {
      const stubResult = populateStubs(locale, sourceData, targetData);
      targetData = stubResult.data;
      syncReport.summary.stubsPopulated += stubResult.count;

      if (stubResult.count > 0) {
        syncReport.details.push({
          locale,
          action: 'stubs_populated',
          count: stubResult.count
        });
      }
    }

    // Save synchronized locale
    saveLocale(locale, namespace, targetData);

    if (isNew) {
      syncReport.summary.created.push(locale);
    } else {
      syncReport.summary.synchronized.push(locale);
    }
  }

  // Save sync state
  saveSyncState(syncReport);

  return syncReport;
}

/**
 * Extract translatable content into structured format
 */
function extractTranslatableContent(sourceStrings) {
  const content = {};

  for (const [key] of Object.entries(sourceStrings)) {
    const parts = key.split('.');
    let current = content;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = `[${key}]`;
  }

  return content;
}

/**
 * Load sync state
 */
function loadSyncState() {
  if (!fs.existsSync(SYNC_STATE_FILE)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(SYNC_STATE_FILE, 'utf8'));
  } catch {
    return null;
  }
}

/**
 * Save sync state
 */
function saveSyncState(state) {
  fs.writeFileSync(SYNC_STATE_FILE, JSON.stringify(state, null, 2));
}

/**
 * Get localization status
 */
function getLocalizationStatus(namespace = 'common') {
  ensureLocalizationDirs();

  const status = {
    timestamp: new Date().toISOString(),
    sourceLocale: SOURCE_LOCALE,
    locales: {},
    summary: {
      totalLocales: 0,
      fullyTranslated: 0,
      partiallyTranslated: 0,
      stubOnly: 0,
      averageCompletion: 0
    }
  };

  const localeFiles = fs.readdirSync(LOCALES_DIR).filter(item =>
    fs.statSync(path.join(LOCALES_DIR, item)).isDirectory()
  );

  status.summary.totalLocales = localeFiles.length;

  let totalCompletion = 0;

  for (const locale of localeFiles) {
    const localeData = loadLocale(locale, namespace) || {};
    const { translated, total, stubs } = analyzeTranslationCompletion(localeData);

    const completionPercent = total > 0 ? Math.round((translated / total) * 100) : 0;

    status.locales[locale] = {
      total,
      translated,
      stubs,
      completion: completionPercent
    };

    totalCompletion += completionPercent;

    if (completionPercent === 100) {
      status.summary.fullyTranslated++;
    } else if (completionPercent > 0) {
      status.summary.partiallyTranslated++;
    } else if (stubs > 0) {
      status.summary.stubOnly++;
    }
  }

  status.summary.averageCompletion = localeFiles.length > 0 
    ? Math.round(totalCompletion / localeFiles.length)
    : 0;

  return status;
}

/**
 * Analyze translation completion
 */
function analyzeTranslationCompletion(data, prefix = '') {
  let translated = 0;
  let total = 0;
  let stubs = 0;

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const result = analyzeTranslationCompletion(value, `${prefix}${key}.`);
      translated += result.translated;
      total += result.total;
      stubs += result.stubs;
    } else {
      total++;
      if (value === STUB_PLACEHOLDER) {
        stubs++;
      } else if (value && value.length > 0) {
        translated++;
      }
    }
  }

  return { translated, total, stubs };
}

/**
 * Mark translation as complete
 */
function markTranslationComplete(locale, key, value, namespace = 'common') {
  const data = loadLocale(locale, namespace) || {};
  
  const keys = key.split('.');
  let current = data;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;

  saveLocale(locale, namespace, data);

  return true;
}

module.exports = {
  synchronizeLocales,
  getLocalizationStatus,
  loadLocale,
  saveLocale,
  markTranslationComplete,
  extractStringsFromSource,
  populateStubs
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'sync';
  const locales = process.argv.slice(3);

  try {
    switch (command) {
      case 'sync': {
        if (locales.length === 0) {
          console.error('Usage: node localization-sync-service.js sync <locale1> [<locale2> ...]');
          process.exit(1);
        }

        const report = synchronizeLocales(locales, { autoPopulateStubs: true });
        console.log('Localization synchronization completed:');
        console.log(`- Source locale: ${report.sourceLocale}`);
        console.log(`- Target locales: ${locales.join(', ')}`);
        console.log(`- Synchronized: ${report.summary.synchronized.length}`);
        console.log(`- Created: ${report.summary.created.length}`);
        console.log(`- Stubs populated: ${report.summary.stubsPopulated}`);
        break;
      }
      case 'status': {
        const status = getLocalizationStatus();
        console.log('Localization Status:');
        console.log(`- Total locales: ${status.summary.totalLocales}`);
        console.log(`- Fully translated: ${status.summary.fullyTranslated}`);
        console.log(`- Partially translated: ${status.summary.partiallyTranslated}`);
        console.log(`- Stub only: ${status.summary.stubOnly}`);
        console.log(`- Average completion: ${status.summary.averageCompletion}%`);
        console.log('\nLocale details:');
        for (const [locale, data] of Object.entries(status.locales)) {
          console.log(`  ${locale}: ${data.completion}% (${data.translated}/${data.total}, ${data.stubs} stubs)`);
        }
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: sync, status');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
