/**
 * UIverse - CSS Modularization Script
 * Splits monolithic style.css into modular component-based files
 * 
 * Usage: node scripts/css-modularizer.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '..', 'style.css');
const OUTPUT_DIR = path.join(__dirname, '..', 'css', 'modules');

function parseCSS(css) {
  const rules = [];
  let currentRule = { selector: '', properties: '' };
  let braceCount = 0;
  let inRule = false;

  const lines = css.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.includes('{')) {
      if (!inRule) {
        const selectorMatch = trimmed.match(/^([^{]+)/);
        currentRule.selector = selectorMatch ? selectorMatch[1].trim() : '';
        currentRule.properties = '';
        inRule = true;
      }
      braceCount += (trimmed.match(/{/g) || []).length;
      currentRule.properties += line + '\n';
    } else if (trimmed.includes('}')) {
      braceCount -= (trimmed.match(/}/g) || []).length;
      currentRule.properties += line + '\n';
      
      if (braceCount === 0) {
        currentRule.properties = currentRule.properties.trim();
        if (currentRule.selector && currentRule.properties) {
          rules.push({ ...currentRule });
        }
        currentRule = { selector: '', properties: '' };
        inRule = false;
      }
    } else if (inRule) {
      currentRule.properties += line + '\n';
    }
  }

  return rules;
}

function categorizeSelector(selector) {
  const s = selector.toLowerCase();
  
  if (s.includes('button') || s.includes('btn')) return 'buttons';
  if (s.includes('card') || s.includes('component')) return 'cards';
  if (s.includes('nav') || s.includes('menu') || s.includes('header')) return 'navigation';
  if (s.includes('form') || s.includes('input') || s.includes('select')) return 'forms';
  if (s.includes('footer')) return 'layout';
  if (s.includes('modal') || s.includes('popup') || s.includes('dialog')) return 'modals';
  if (s.includes('grid') || s.includes('container')) return 'layout';
  if (s.includes('table')) return 'tables';
  if (s.includes('badge') || s.includes('tag')) return 'badges';
  if (s.includes('alert') || s.includes('toast')) return 'alerts';
  if (s.includes('media') || s.includes('@')) return 'responsive';
  if (s.startsWith('.') || s.startsWith('#') || s.startsWith('@')) return 'utilities';
  
  return 'base';
}

function generateModuleFile(category, rules) {
  let content = `/* UI-Verse - ${category} styles */\n`;
  content += `/* Auto-generated from style.css */\n\n`;
  
  rules.forEach(rule => {
    content += `${rule.selector} {\n${rule.properties}}\n\n`;
  });
  
  return content;
}

function main() {
  console.log('[CSS Modularizer] Starting CSS modularization...\n');

  if (!fs.existsSync(INPUT_FILE)) {
    console.error('[CSS Modularizer] Input file not found:', INPUT_FILE);
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('[CSS Modularizer] Created modules directory:', OUTPUT_DIR);
  }

  const css = fs.readFileSync(INPUT_FILE, 'utf8');
  const rules = parseCSS(css);
  
  console.log(`[CSS Modularizer] Parsed ${rules.length} CSS rules`);

  const categories = {};
  
  rules.forEach(rule => {
    const category = categorizeSelector(rule.selector);
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(rule);
  });

  Object.entries(categories).forEach(([category, rules]) => {
    const filename = `${category}.css`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const content = generateModuleFile(category, rules);
    fs.writeFileSync(filepath, content);
    console.log(`[CSS Modularizer] Created ${filename} (${rules.length} rules)`);
  });

  const mainIndex = `/* UI-Verse Main CSS - Modular Import File */
/* Import all modular CSS files */

@import url('modules/base.css');
@import url('modules/buttons.css');
@import url('modules/cards.css');
@import url('modules/navigation.css');
@import url('modules/forms.css');
@import url('modules/layout.css');
@import url('modules/modals.css');
@import url('modules/tables.css');
@import url('modules/badges.css');
@import url('modules/alerts.css');
@import url('modules/responsive.css');
@import url('modules/utilities.css');
`;

  const indexPath = path.join(__dirname, '..', 'css', 'main.css');
  fs.writeFileSync(indexPath, mainIndex);
  console.log('\n[CSS Modularizer] Created main.css import file');

  console.log('\n[CSS Modularizer] Done! Modular CSS files created in css/modules/');
  console.log('[CSS Modularizer] To use: Replace style.css with css/main.css');
}

main();