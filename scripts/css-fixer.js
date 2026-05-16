/**
 * UIverse - CSS Fixer Utility
 * Fixes syntax errors, removes duplicates, and cleans up style.css
 * 
 * Usage: node scripts/css-fixer.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '..', 'style.css');
const OUTPUT_FILE = path.join(__dirname, '..', 'style.css');

function fixCSS(css) {
  let result = css;

  // Remove trailing whitespace
  result = result.replace(/[\t ]+$/gm, '');

  // Fix unmatched braces - count braces and fix incomplete blocks
  const openBraces = (result.match(/{/g) || []).length;
  const closeBraces = (result.match(/}/g) || []).length;
  const braceDiff = openBraces - closeBraces;
  
  if (braceDiff > 0) {
    console.log(`[CSS Fixer] Found ${braceDiff} unmatched opening braces, adding closing braces`);
    result += '\n' + '}'.repeat(braceDiff);
  } else if (braceDiff < 0) {
    console.log(`[CSS Fixer] Found ${Math.abs(braceDiff)} extra closing braces`);
    // Remove extra closing braces
    let opens = 0;
    let fixed = '';
    for (const char of result) {
      if (char === '{') opens++;
      else if (char === '}') {
        if (opens > 0) {
          opens--;
          fixed += char;
        }
      } else {
        fixed += char;
      }
    }
    result = fixed;
  }

  // Remove duplicate properties within same rule
  const lines = result.split('\n');
  const cleanedLines = [];
  const seenProps = new Map();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.includes('{')) {
      seenProps.clear();
    }
    
    if (line.includes(':') && !line.includes('{') && !line.includes('}')) {
      const prop = line.split(':')[0].trim();
      if (seenProps.has(prop)) {
        continue;
      }
      seenProps.set(prop, true);
    }
    
    cleanedLines.push(lines[i]);
  }
  result = cleanedLines.join('\n');

  // Fix missing semicolons before closing braces
  result = result.replace(/:\s*([^}]+?)\s*}/g, (match, value) => {
    const trimmed = value.trim();
    if (!trimmed.endsWith(';') && !trimmed.endsWith('}')) {
      return `: ${trimmed}; }`;
    }
    return match;
  });

  // Remove empty rules
  result = result.replace(/[^{}]*\{\s*\}/g, '');

  // Fix double semicolons
  result = result.replace(/;;/g, ';');

  // Normalize whitespace
  result = result.replace(/\n\s*\n\s*\n/g, '\n\n');

  return result;
}

function analyzeCSS(css) {
  const stats = {
    lines: css.split('\n').length,
    openBraces: (css.match(/{/g) || []).length,
    closeBraces: (css.match(/}/g) || []).length,
    mediaQueries: (css.match(/@media/g) || []).length,
    selectors: (css.match(/[^{}]+(?=\s*\{)/g) || []).length
  };
  
  stats.braceDiff = stats.openBraces - stats.closeBraces;
  
  return stats;
}

function main() {
  console.log('[CSS Fixer] Starting CSS cleanup...\n');

  if (!fs.existsSync(INPUT_FILE)) {
    console.error('[CSS Fixer] Input file not found:', INPUT_FILE);
    process.exit(1);
  }

  const originalCSS = fs.readFileSync(INPUT_FILE, 'utf8');
  
  console.log('[CSS Fixer] Before fix:');
  const beforeStats = analyzeCSS(originalCSS);
  console.log(`  Lines: ${beforeStats.lines}`);
  console.log(`  Opening braces: ${beforeStats.openBraces}`);
  console.log(`  Closing braces: ${beforeStats.closeBraces}`);
  console.log(`  Brace difference: ${beforeStats.braceDiff}`);
  console.log(`  Media queries: ${beforeStats.mediaQueries}`);

  const fixedCSS = fixCSS(originalCSS);

  console.log('\n[CSS Fixer] After fix:');
  const afterStats = analyzeCSS(fixedCSS);
  console.log(`  Lines: ${afterStats.lines}`);
  console.log(`  Opening braces: ${afterStats.openBraces}`);
  console.log(`  Closing braces: ${afterStats.closeBraces}`);
  console.log(`  Brace difference: ${afterStats.braceDiff}`);

  fs.writeFileSync(OUTPUT_FILE, fixedCSS);
  console.log(`\n[CSS Fixer] Fixed CSS written to: ${OUTPUT_FILE}`);
  console.log('[CSS Fixer] Done!');
}

main();