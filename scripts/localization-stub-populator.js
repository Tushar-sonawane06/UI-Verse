#!/usr/bin/env node

/**
 * Localization Stub Populator
 * Automated stub generation and population for missing translations
 */

const fs = require('fs');
const path = require('path');
const { loadLocale, saveLocale } = require('./localization-sync-service');

const LOCALES_DIR = path.join(process.cwd(), 'locales');
const STUB_TEMPLATES_DIR = path.join(process.cwd(), 'locales', '_stub-templates');
const SOURCE_LOCALE = 'en';
const STUB_PLACEHOLDER = '__NEEDS_TRANSLATION__';
const STUB_CONTEXT_PLACEHOLDER = '__CONTEXT__';

/**
 * Initialize stub infrastructure
 */
function ensureStubInfrastructure() {
  if (!fs.existsSync(STUB_TEMPLATES_DIR)) {
    fs.mkdirSync(STUB_TEMPLATES_DIR, { recursive: true });
  }
}

/**
 * Create stub template from source
 */
function createStubTemplate(sourceData, templatePath, namespace = 'common') {
  ensureStubInfrastructure();

  const template = {
    namespace,
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    source: SOURCE_LOCALE,
    description: `Stub template for ${namespace} - all values marked as needing translation`,
    structure: buildTemplateStructure(sourceData),
    instructions: {
      format: 'Replace __NEEDS_TRANSLATION__ with actual translations',
      nested: 'Use dot notation for nested keys (e.g., buttons.submit)',
      comments: 'Do not remove keys, add translations for all entries'
    }
  };

  fs.writeFileSync(templatePath, JSON.stringify(template, null, 2));
  return template;
}

/**
 * Build template structure with annotations
 */
function buildTemplateStructure(data, prefix = '') {
  const structure = {};

  for (const [key, value] of Object.entries(data)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      structure[key] = buildTemplateStructure(value, fullKey);
    } else {
      structure[key] = {
        key: fullKey,
        type: typeof value,
        source: value,
        translation: STUB_PLACEHOLDER,
        context: STUB_CONTEXT_PLACEHOLDER
      };
    }
  }

  return structure;
}

/**
 * Populate stubs for a locale
 */
function populateStubsForLocale(locale, sourceData, namespace = 'common') {
  const existingData = loadLocale(locale, namespace) || {};
  const populated = populateStubsRecursive(sourceData, existingData);

  saveLocale(locale, namespace, populated.data);

  return {
    locale,
    namespace,
    stubsAdded: populated.stubCount,
    existingEntries: populated.existingCount,
    totalEntries: populated.totalCount
  };
}

/**
 * Recursively populate stubs
 */
function populateStubsRecursive(sourceData, targetData = {}, prefix = '') {
  const result = {
    data: { ...targetData },
    stubCount: 0,
    existingCount: 0,
    totalCount: 0
  };

  for (const [key, value] of Object.entries(sourceData)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      if (!result.data[key]) {
        result.data[key] = {};
      }
      const nested = populateStubsRecursive(value, result.data[key], fullKey);
      result.data[key] = nested.data;
      result.stubCount += nested.stubCount;
      result.existingCount += nested.existingCount;
      result.totalCount += nested.totalCount;
    } else {
      result.totalCount++;

      if (!result.data[key]) {
        result.data[key] = STUB_PLACEHOLDER;
        result.stubCount++;
      } else if (result.data[key] && result.data[key].length > 0 && result.data[key] !== STUB_PLACEHOLDER) {
        result.existingCount++;
      } else {
        result.stubCount++;
      }
    }
  }

  return result;
}

/**
 * Generate batch stub population report
 */
function generateBatchStubPopulationReport(locales, namespace = 'common') {
  ensureStubInfrastructure();

  const sourceData = loadLocale(SOURCE_LOCALE, namespace) || {};
  const report = {
    timestamp: new Date().toISOString(),
    namespace,
    sourceLocale: SOURCE_LOCALE,
    targetLocales: locales,
    results: [],
    summary: {
      totalLocales: locales.length,
      totalStubsPopulated: 0,
      totalExistingEntries: 0,
      totalUniqueKeys: countKeysRecursive(sourceData)
    }
  };

  for (const locale of locales) {
    if (locale === SOURCE_LOCALE) continue;

    const populationResult = populateStubsForLocale(locale, sourceData, namespace);
    report.results.push(populationResult);
    report.summary.totalStubsPopulated += populationResult.stubsAdded;
    report.summary.totalExistingEntries += populationResult.existingEntries;
  }

  return report;
}

/**
 * Count keys recursively
 */
function countKeysRecursive(data) {
  let count = 0;

  for (const value of Object.values(data)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      count += countKeysRecursive(value);
    } else {
      count++;
    }
  }

  return count;
}

/**
 * Find stub entries in a locale
 */
function findStubsInLocale(locale, namespace = 'common') {
  const data = loadLocale(locale, namespace) || {};
  const stubs = [];

  function findStubsRecursive(obj, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        findStubsRecursive(value, fullKey);
      } else if (value === STUB_PLACEHOLDER) {
        stubs.push(fullKey);
      }
    }
  }

  findStubsRecursive(data);

  return stubs;
}

/**
 * Replace stub with translation
 */
function replaceStub(locale, key, translation, namespace = 'common') {
  const data = loadLocale(locale, namespace) || {};
  const keys = key.split('.');
  let current = data;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  const lastKey = keys[keys.length - 1];
  if (current[lastKey] === STUB_PLACEHOLDER) {
    current[lastKey] = translation;
    saveLocale(locale, namespace, data);
    return true;
  }

  return false;
}

/**
 * Generate stub completion status
 */
function getStubCompletionStatus(namespace = 'common') {
  const status = {
    timestamp: new Date().toISOString(),
    namespace,
    locales: {}
  };

  const localeFiles = fs.readdirSync(LOCALES_DIR).filter(item => {
    const itemPath = path.join(LOCALES_DIR, item);
    return fs.statSync(itemPath).isDirectory() && item !== '_stub-templates';
  });

  let totalStubs = 0;
  let totalKeys = 0;

  for (const locale of localeFiles) {
    const stubs = findStubsInLocale(locale, namespace);
    const data = loadLocale(locale, namespace) || {};
    const keyCount = countKeysRecursive(data);

    const completionPercent = keyCount > 0 
      ? Math.round(((keyCount - stubs.length) / keyCount) * 100)
      : 0;

    status.locales[locale] = {
      stubs: stubs.length,
      total: keyCount,
      completion: completionPercent,
      stubKeys: stubs.slice(0, 10) // First 10 for preview
    };

    totalStubs += stubs.length;
    totalKeys += keyCount;
  }

  status.summary = {
    totalLocales: localeFiles.length,
    totalStubs,
    totalKeys,
    averageCompletion: localeFiles.length > 0 
      ? Math.round((totalKeys - totalStubs) / totalKeys * 100)
      : 0
  };

  return status;
}

module.exports = {
  populateStubsForLocale,
  generateBatchStubPopulationReport,
  findStubsInLocale,
  replaceStub,
  getStubCompletionStatus,
  createStubTemplate,
  ensureStubInfrastructure
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'populate';

  try {
    switch (command) {
      case 'populate': {
        const locales = process.argv.slice(3);
        if (locales.length === 0) {
          console.error('Usage: node localization-stub-populator.js populate <locale1> [<locale2> ...]');
          process.exit(1);
        }

        const report = generateBatchStubPopulationReport(locales);
        console.log('Stub Population Report:');
        console.log(`- Namespace: ${report.namespace}`);
        console.log(`- Target locales: ${locales.join(', ')}`);
        console.log(`- Total unique keys: ${report.summary.totalUniqueKeys}`);
        console.log(`- Total stubs populated: ${report.summary.totalStubsPopulated}`);
        console.log('\nPer-locale results:');
        for (const result of report.results) {
          console.log(`  ${result.locale}: +${result.stubsAdded} stubs (${result.existingEntries} existing)`);
        }
        break;
      }
      case 'status': {
        const status = getStubCompletionStatus();
        console.log('Stub Completion Status:');
        console.log(`- Average completion: ${status.summary.averageCompletion}%`);
        console.log(`- Total stubs pending: ${status.summary.totalStubs}/${status.summary.totalKeys}`);
        console.log('\nLocale status:');
        for (const [locale, data] of Object.entries(status.locales)) {
          console.log(`  ${locale}: ${data.completion}% (${data.stubs} stubs)`);
        }
        break;
      }
      case 'stubs': {
        const locale = process.argv[3];
        if (!locale) {
          console.error('Usage: node localization-stub-populator.js stubs <locale>');
          process.exit(1);
        }

        const stubs = findStubsInLocale(locale);
        console.log(`Stub entries in ${locale}:`);
        for (const key of stubs) {
          console.log(`  - ${key}`);
        }
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: populate, status, stubs');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
