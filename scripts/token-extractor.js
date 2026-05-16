/**
 * UIverse - Design Token Extraction Utility
 * Automatically extracts CSS variables from stylesheets
 * 
 * Usage: node scripts/token-extractor.js [--input path/to/style.css] [--output tokens.css]
 */

const fs = require('fs');
const path = require('path');

const DEFAULT_INPUT = '*.css';
const DEFAULT_OUTPUT = 'css/tokens.css';

const args = process.argv.slice(2);
let inputPattern = DEFAULT_INPUT;
let outputFile = DEFAULT_OUTPUT;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--input' && args[i + 1]) inputPattern = args[i + 1];
  if (args[i] === '--output' && args[i + 1]) outputFile = args[i + 1];
}

const TOKEN_TYPES = {
  color: { prefix: 'color', patterns: ['#', 'rgb', 'rgba', 'hsl', 'hsla'] },
  spacing: { prefix: 'spacing', patterns: ['px', 'rem', 'em'] },
  font: { prefix: 'font', patterns: ['px', 'rem', 'em'] },
  border: { prefix: 'border', patterns: ['px'] },
  radius: { prefix: 'radius', patterns: ['px', 'rem'] },
  shadow: { prefix: 'shadow', patterns: ['box-shadow', 'rgba'] },
  z: { prefix: 'z', patterns: ['z-index'] }
};

function extractValues(css) {
  const values = new Map();
  const valueCounts = new Map();

  const colorPattern = /#([0-9a-fA-F]{3,8})\b/g;
  const rgbPattern = /rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[\d.]+\s*)?\)/g;
  const hslPattern = /hsla?\s*\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%s*(?:,\s*[\d.]+\s*)?\)/g;
  const pxPattern = /(\d+(?:\.\d+)?)px/g;
  const remPattern = /(\d+(?:\.\d+)?)rem/g;

  const allMatches = css.match(/#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)|\d+(?:\.\d+)?(?:px|rem)/g) || [];
  
  allMatches.forEach(val => {
    const normalized = val.trim();
    valueCounts.set(normalized, (valueCounts.get(normalized) || 0) + 1);
  });

  valueCounts.forEach((count, value) => {
    if (count >= 2) {
      values.set(value, count);
    }
  });

  return values;
}

function categorizeValue(value) {
  const lower = value.toLowerCase();
  
  if (TOKEN_TYPES.color.patterns.some(p => lower.includes(p.replace('(', '')))) {
    return 'color';
  }
  if (value.includes('px') || value.includes('rem')) {
    const num = parseFloat(value);
    if (num <= 8) return 'spacing';
    if (num <= 24) return 'spacing';
    if (num <= 72) return 'font';
    if (value.includes('border') || lower.includes('radius')) return 'radius';
    if (num > 100) return 'spacing';
  }
  return 'spacing';
}

function generateTokenName(value, category) {
  const clean = value.replace(/[^\w\d]/g, '').toLowerCase();
  return `--${category}-${clean}`;
}

function transformCSStoTokens(cssFile) {
  const tokens = {
    color: new Map(),
    spacing: new Map(),
    font: new Map(),
    border: new Map(),
    radius: new Map(),
    shadow: new Map()
  };

  const colorMap = new Map();
  const spacingMap = new Map();
  const fontMap = new Map();

  const declarations = cssFile.match(/[\w-]+\s*:\s*[^;]+;/g) || [];
  
  declarations.forEach(decl => {
    const match = decl.match(/([\w-]+)\s*:\s*([^;]+)/);
    if (!match) return;
    
    const prop = match[1].trim();
    const value = match[2].trim();

    const colors = value.match(/#([0-9a-fA-F]{3,8})|rgba?\([^)]+\)|hsla?\([^)]+\)/g) || [];
    colors.forEach(c => {
      if (!colorMap.has(c)) colorMap.set(c, new Set());
      colorMap.get(c).add(prop);
    });

    const spacing = value.match(/(\d+(?:\.\d+)?)(px|rem)/g) || [];
    spacing.forEach(s => {
      if (!spacingMap.has(s)) spacingMap.set(s, new Set());
      spacingMap.get(s).add(prop);
    });

    const fontSizes = value.match(/(\d+(?:\.\d+)?)(px|rem)/g) || [];
    fontSizes.forEach(f => {
      const size = parseFloat(f);
      if (size >= 10 && size <= 72) {
        if (!fontMap.has(f)) fontMap.set(f, new Set());
        fontMap.get(f).add(prop);
      }
    });
  });

  colorMap.forEach((props, color) => {
    if (props.size >= 2) {
      const name = `--color-${color.replace(/[^0-9a-f]/g, '').substring(0, 6)}`;
      tokens.color.set(name, color);
    }
  });

  spacingMap.forEach((props, spacing) => {
    if (props.size >= 2) {
      const name = `--spacing-${spacing.replace(/[^0-9]/g, '')}`;
      tokens.spacing.set(name, spacing);
    }
  });

  fontMap.forEach((props, size) => {
    if (props.size >= 2) {
      const name = `--font-size-${size.replace(/[^0-9]/g, '')}`;
      tokens.font.set(name, size);
    }
  });

  return tokens;
}

function generateTokensFile(tokens) {
  let output = `/* UI-Verse Design Tokens - Auto-generated */\n`;
  output += `/* Do not edit manually - regenerate with: node scripts/token-extractor.js */\n\n`;
  output += `:root {\n`;

  if (tokens.color.size > 0) {
    output += `  /* Color Tokens */\n`;
    tokens.color.forEach((value, name) => {
      output += `  ${name}: ${value};\n`;
    });
    output += `\n`;
  }

  if (tokens.spacing.size > 0) {
    output += `  /* Spacing Tokens */\n`;
    tokens.spacing.forEach((value, name) => {
      output += `  ${name}: ${value};\n`;
    });
    output += `\n`;
  }

  if (tokens.font.size > 0) {
    output += `  /* Font Size Tokens */\n`;
    tokens.font.forEach((value, name) => {
      output += `  ${name}: ${value};\n`;
    });
    output += `\n`;
  }

  output += `}\n`;
  return output;
}

async function processCSSFile(filePath) {
  try {
    const css = fs.readFileSync(filePath, 'utf8');
    const tokens = transformCSStoTokens(css);
    console.log(`[TokenExtractor] Processed: ${filePath}`);
    return tokens;
  } catch (error) {
    console.error(`[TokenExtractor] Error processing ${filePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('[TokenExtractor] Starting design token extraction...\n');

  const cssDir = path.join(__dirname, '..');
  
  const cssFiles = [
    path.join(cssDir, 'button.css'),
    path.join(cssDir, 'cards.css'),
    path.join(cssDir, 'navbar.css'),
    path.join(cssDir, 'badges.css'),
    path.join(cssDir, 'form.css'),
    path.join(cssDir, 'footer.css'),
    path.join(cssDir, 'alerts.css'),
    path.join(cssDir, 'index.css')
  ].filter(f => fs.existsSync(f));

  const mergedTokens = {
    color: new Map(),
    spacing: new Map(),
    font: new Map(),
    border: new Map(),
    radius: new Map(),
    shadow: new Map()
  };

  for (const file of cssFiles) {
    const tokens = await processCSSFile(file);
    if (tokens) {
      Object.keys(mergedTokens).forEach(key => {
        tokens[key].forEach((value, name) => {
          if (!mergedTokens[key].has(name)) {
            mergedTokens[key].set(name, value);
          }
        });
      });
    }
  }

  const tokensCSS = generateTokensFile(mergedTokens);
  const outputPath = path.join(__dirname, '..', outputFile);
  
  fs.writeFileSync(outputPath, tokensCSS);
  console.log(`\n[TokenExtractor] Tokens written to: ${outputPath}`);
  console.log(`[TokenExtractor] Total tokens extracted: ${mergedTokens.color.size + mergedTokens.spacing.size + mergedTokens.font.size}`);
}

main();