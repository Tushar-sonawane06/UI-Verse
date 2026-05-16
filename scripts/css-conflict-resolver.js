/**
 * UIverse - CSS Conflict Resolver
 * Identifies and fixes conflicting CSS selectors
 * 
 * Usage: node scripts/css-conflict-resolver.js
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');

function findConflicts(css) {
  const selectors = {};
  const conflicts = [];
  
  const ruleRegex = /([^{]+)\s*\{([^}]+)\}/g;
  let match;
  
  while ((match = ruleRegex.exec(css)) !== null) {
    const selector = match[1].trim();
    const props = match[2].trim();
    
    if (!selectors[selector]) {
      selectors[selector] = [];
    }
    selectors[selector].push(props);
  }
  
  Object.entries(selectors).forEach(([selector, values]) => {
    if (values.length > 1) {
      conflicts.push({ selector, count: values.length });
    }
  });
  
  return conflicts;
}

function suggestModularSelectors(css) {
  const suggestions = [];
  
  const problemSelectors = ['body', '.sidebar', '.container', '.header', '.footer'];
  
  problemSelectors.forEach(sel => {
    const regex = new RegExp(`${sel}\\s*\\{`, 'g');
    const matches = css.match(regex);
    if (matches && matches.length > 1) {
      suggestions.push({
        original: sel,
        fix: `${sel.split('.')[0] || sel} { /* consolidate here */ }`,
        note: `Found ${matches.length} definitions of "${sel}". Consider using specific classes.`
      });
    }
  });
  
  return suggestions;
}

function main() {
  console.log('[CSS Conflict Resolver] Analyzing style.css...\n');
  
  const stylePath = path.join(PROJECT_ROOT, 'style.css');
  if (!fs.existsSync(stylePath)) {
    console.error('[CSS] style.css not found');
    return;
  }
  
  const css = fs.readFileSync(stylePath, 'utf8');
  const conflicts = findConflicts(css);
  
  console.log(`Found ${conflicts.length} conflicting selectors:\n`);
  conflicts.slice(0, 10).forEach(c => {
    console.log(`  ${c.selector}: ${c.count} definitions`);
  });
  
  const suggestions = suggestModularSelectors(css);
  
  if (suggestions.length > 0) {
    console.log('\n=== Suggestions for fix ===\n');
    suggestions.forEach(s => {
      console.log(`- ${s.note}`);
    });
  }
  
  console.log('\n[CSS] Run "npm run css:bem" to convert to modular BEM classes');
}

main();