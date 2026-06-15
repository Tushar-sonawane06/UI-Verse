const assert = require('assert');
const { test } = require('node:test');
const ComponentI18nManager = require('../../component-i18n-manager.js');

test('exportTranslations includes globalSettings and directionalityMap in JSON', () => {
  const manager = new ComponentI18nManager({
    supportedLanguages: ['en', 'ar', 'he', 'es'],
    defaultLanguage: 'en',
    rtlLanguages: ['ar', 'he']
  });

  manager.registerComponent('button', {
    supportedLanguages: ['en', 'ar', 'he'],
    defaultLanguage: 'en',
    translations: {
      en: {
        name: 'Button',
        description: 'A clickable button component'
      },
      ar: {
        name: 'زر',
        description: 'مكون زر قابل للنقر'
      },
      he: {
        name: 'כפתור',
        description: 'רכיב כפתור שניתן ללחוץ עליו'
      }
    }
  });

  const jsonExport = manager.exportTranslations('json');
  const data = JSON.parse(jsonExport);

  // Verify global settings are included
  assert.strictEqual(typeof data.globalSettings, 'object');
  assert.strictEqual(data.globalSettings.defaultLanguage, 'en');
  assert.deepStrictEqual(data.globalSettings.rtlLanguages, ['ar', 'he']);

  // Verify directionality map is included
  assert.strictEqual(typeof data.directionalityMap, 'object');
  assert.deepStrictEqual(data.directionalityMap.rtl, ['ar', 'he']);
  assert.deepStrictEqual(data.directionalityMap.ltr, ['en', 'es']);

  // Verify components still exist
  assert.strictEqual(typeof data.components, 'object');
  assert.strictEqual(typeof data.components.button, 'object');
});

test('exportTranslations includes languageMetadata in components', () => {
  const manager = new ComponentI18nManager({
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'en',
    rtlLanguages: ['ar']
  });

  manager.registerComponent('dialog', {
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'en',
    translations: {
      en: {
        title: 'Dialog',
        content: 'Dialog content'
      },
      ar: {
        title: 'حوار',
        content: 'محتوى الحوار'
      }
    }
  });

  const jsonExport = manager.exportTranslations('json');
  const data = JSON.parse(jsonExport);

  const dialogComponent = data.components.dialog;

  // Verify languageMetadata is present
  assert.strictEqual(typeof dialogComponent.languageMetadata, 'object');
  assert.strictEqual(dialogComponent.languageMetadata.en.textDirection, 'ltr');
  assert.strictEqual(dialogComponent.languageMetadata.ar.textDirection, 'rtl');
  assert.strictEqual(dialogComponent.languageMetadata.ar.biDiRequired, true);
});

test('exportTranslations CSV includes directionality columns', () => {
  const manager = new ComponentI18nManager({
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'en',
    rtlLanguages: ['ar']
  });

  manager.registerComponent('badge', {
    supportedLanguages: ['en', 'ar'],
    defaultLanguage: 'en',
    translations: {
      en: {
        label: 'Badge'
      },
      ar: {
        label: 'شارة'
      }
    }
  });

  const csvExport = manager.exportTranslations('csv');
  const lines = csvExport.trim().split('\n');

  // Verify header
  assert.strictEqual(lines[0], 'Component,Language,TextDirection,ScriptCode,Key,Value');

  // Verify Arabic row includes rtl direction
  const arLine = lines.find(line => line.includes(',ar,'));
  assert.ok(arLine.includes('rtl'));
  assert.ok(arLine.includes('Arab'));
});

test('exportTranslations XLIFF includes dir attribute and BiDi metadata', () => {
  const manager = new ComponentI18nManager({
    supportedLanguages: ['en', 'ar', 'he'],
    defaultLanguage: 'en',
    rtlLanguages: ['ar', 'he']
  });

  manager.registerComponent('input', {
    supportedLanguages: ['en', 'ar', 'he'],
    defaultLanguage: 'en',
    translations: {
      en: {
        placeholder: 'Enter text'
      },
      ar: {
        placeholder: 'أدخل النص'
      },
      he: {
        placeholder: 'הזן טקסט'
      }
    }
  });

  const xliffExport = manager.exportTranslations('xliff');

  // Verify XLIFF structure with dir attributes
  assert.ok(xliffExport.includes('dir="ltr"'));
  assert.ok(xliffExport.includes('dir="rtl"'));

  // Verify Arabic section
  assert.ok(xliffExport.includes('target-language="ar"'));
  assert.ok(xliffExport.includes('<!-- Script: Arab, BiDi Required: true -->'));

  // Verify Hebrew section
  assert.ok(xliffExport.includes('target-language="he"'));
  assert.ok(xliffExport.includes('<!-- Script: Hebr, BiDi Required: true -->'));
});

test('directionalityMap correctly separates RTL and LTR languages', () => {
  const manager = new ComponentI18nManager({
    supportedLanguages: ['en', 'es', 'fr', 'de', 'ar', 'he', 'fa'],
    rtlLanguages: ['ar', 'he', 'fa']
  });

  const jsonExport = manager.exportTranslations('json');
  const data = JSON.parse(jsonExport);

  // Verify all RTL languages are in rtl array
  assert.deepStrictEqual(
    data.directionalityMap.rtl.sort(),
    ['ar', 'fa', 'he']
  );

  // Verify all LTR languages are in ltr array
  assert.deepStrictEqual(
    data.directionalityMap.ltr.sort(),
    ['de', 'en', 'es', 'fr']
  );
});

test('globalSettings includes rtlLanguages array', () => {
  const manager = new ComponentI18nManager({
    supportedLanguages: ['en', 'ar', 'he', 'ur'],
    rtlLanguages: ['ar', 'he', 'ur']
  });

  const jsonExport = manager.exportTranslations('json');
  const data = JSON.parse(jsonExport);

  // Verify rtlLanguages is an array in globalSettings
  assert.ok(Array.isArray(data.globalSettings.rtlLanguages));
  assert.deepStrictEqual(
    data.globalSettings.rtlLanguages.sort(),
    ['ar', 'he', 'ur']
  );
});
