#!/usr/bin/env node
/**
 * AST-Based HTML & CSS Validator and Code Auto-Fixer
 * 
 * This tool:
 * 1. Parses HTML and CSS into AST structures using htmlparser2 and postcss
 * 2. Validates against structural quality guidelines
 * 3. Auto-fixes common issues and writes corrected files
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

// Try to load optional dependencies
let htmlparser2, postcss;
try {
  htmlparser2 = require('htmlparser2');
  postcss = require('postcss');
} catch (e) {
  console.warn('Note: Install optional dependencies for full functionality:');
  console.warn('  npm install htmlparser2 domutils postcss');
}

/**
 * Validation result structure
 */
class ValidationResult {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.fixes = [];
  }

  addError(rule, message, node) {
    this.errors.push({ rule, message, node });
  }

  addWarning(rule, message, node) {
    this.warnings.push({ rule, message, node });
  }

  addFix(rule, original, fixed, node) {
    this.fixes.push({ rule, original, fixed, node });
  }

  get hasIssues() {
    return this.errors.length > 0 || this.warnings.length > 0;
  }

  get summary() {
    return {
      errors: this.errors.length,
      warnings: this.warnings.length,
      fixes: this.fixes.length
    };
  }
}

/**
 * HTML AST Validator
 */
class HTMLValidator {
  constructor(options = {}) {
    this.options = {
      checkDuplicateIds: true,
      checkDuplicateClasses: true,
      checkInvalidNesting: true,
      checkAccessibility: true,
      autoFix: false,
      ...options
    };
    this.seenIds = new Map();
    this.seenClasses = new Map();
  }

  validate(content, filePath = 'unknown.html') {
    const result = new ValidationResult();
    this.filePath = filePath;
    this.seenIds.clear();
    this.seenClasses.clear();

    if (!htmlparser2) {
      result.addError('DEPENDENCY', 'htmlparser2 not installed. Run: npm install htmlparser2 domutils');
      return result;
    }

    try {
      const ast = htmlparser2.parseDocument(content, {
        withStartIndices: true,
        withEndIndices: true
      });

      this.walk(ast, result);
    } catch (error) {
      result.addError('PARSE', `Failed to parse HTML: ${error.message}`);
    }

    return result;
  }

  walk(node, result) {
    if (!node) return;

    if (node.type === 'tag' || node.type === 'script' || node.type === 'style') {
      if (node.name && typeof node.name === 'string') {
        const attrs = node.attribs || {};

        // Track IDs
        if (this.options.checkDuplicateIds && attrs.id) {
          const id = attrs.id;
          if (this.seenIds.has(id)) {
            result.addError(
              'DUPLICATE_ID',
              `Duplicate ID "${id}" found`,
              { file: this.filePath, tag: node.name, id, line: node.startIndex }
            );
          } else {
            this.seenIds.set(id, node);
          }
        }

        // Track classes
        if (this.options.checkDuplicateClasses && attrs.class) {
          const classes = attrs.class.trim().split(/\s+/).filter(Boolean);
          for (const cls of classes) {
            if (this.seenClasses.has(cls)) {
              result.addWarning(
                'DUPLICATE_CLASS',
                `Duplicate class "${cls}" found`,
                { file: this.filePath, tag: node.name, class: cls, line: node.startIndex }
              );
            } else {
              this.seenClasses.set(cls, node);
            }
          }
        }

        // Accessibility checks
        if (this.options.checkAccessibility) {
          this.checkAccessibility(node, result);
        }
      }
    }

    if (node.children) {
      for (const child of node.children) {
        this.walk(child, result);
      }
    }
  }

  checkAccessibility(node, result) {
    const tag = node.name;
    const attrs = node.attribs || {};

    if (tag === 'img' && !attrs.alt) {
      result.addError(
        'MISSING_ALT',
        '<img> missing required alt attribute',
        { file: this.filePath, tag, line: node.startIndex }
      );
    }

    if (tag === 'a' && !attrs.href && !attrs.onclick) {
      result.addWarning(
        'MISSING_HREF',
        '<a> tag should have href or onclick attribute',
        { file: this.filePath, tag, line: node.startIndex }
      );
    }

    if (tag === 'button' && !attrs.type) {
      result.addWarning(
        'MISSING_TYPE',
        '<button> should have explicit type attribute',
        { file: this.filePath, tag, line: node.startIndex }
      );
    }

    if (tag === 'a' && attrs.href === '') {
      result.addWarning(
        'EMPTY_HREF',
        '<a> has empty href attribute',
        { file: this.filePath, tag, line: node.startIndex }
      );
    }
  }
}

/**
 * CSS AST Validator
 */
class CSSValidator {
  constructor(options = {}) {
    this.options = {
      checkVendorPrefixes: true,
      checkDuplicateRules: true,
      checkUnits: true,
      autoFix: false,
      ...options
    };
    this.seenRules = new Map();
  }

  validate(content, filePath = 'unknown.css') {
    const result = new ValidationResult();
    this.filePath = filePath;
    this.seenRules.clear();

    if (!postcss) {
      result.addError('DEPENDENCY', 'postcss not installed. Run: npm install postcss');
      return result;
    }

    try {
      const ast = postcss.parse(content, { from: filePath });
      this.walk(ast, result);
    } catch (error) {
      result.addError('PARSE', `Failed to parse CSS: ${error.message}`);
    }

    return result;
  }

  walk(node, result) {
    if (!node) return;

    if (node.type === 'rule') {
      const selector = node.selector;

      if (this.options.checkDuplicateRules) {
        if (this.seenRules.has(selector)) {
          result.addWarning(
            'DUPLICATE_SELECTOR',
            `Duplicate selector "${selector}"`,
            { file: this.filePath, selector, line: node.source?.start?.line }
          );
        } else {
          this.seenRules.set(selector, node);
        }
      }

      if (node.nodes) {
        for (const decl of node.nodes) {
          if (decl.type === 'decl') {
            this.checkDeclaration(decl, result);
          }
        }
      }
    }

    if (node.nodes) {
      for (const child of node.nodes) {
        this.walk(child, result);
      }
    }
  }

  checkDeclaration(decl, result) {
    const prop = decl.prop?.toLowerCase() || '';
    const value = decl.value || '';

    const prefixedProps = [
      'transform', 'transition', 'animation', 'box-shadow',
      'border-radius', 'flex', 'flexbox', 'grid', 'backdrop-filter'
    ];

    if (this.options.checkVendorPrefixes && prefixedProps.includes(prop)) {
      result.addWarning(
        'VENDOR_PREFIX',
        `"${prop}" may benefit from vendor prefixes (-webkit-, -moz-, etc.)`,
        { file: this.filePath, prop, value, line: decl.source?.start?.line }
      );
    }

    if (this.options.checkUnits && /\b0(?!\s*(px|em|rem|%|deg|s|ms|vw|vh))/i.test(value)) {
      if (!value.includes('0deg') && !value.includes('0%') && !value.includes('calc')) {
        result.addWarning(
          'ZERO_UNIT',
          `Zero values should not have units`,
          { file: this.filePath, prop, value, line: decl.source?.start?.line }
        );
      }
    }
  }

  autoFix(content, result) {
    let fixed = content;
    
    // Fix zero units: 0px -> 0, 0em -> 0, etc.
    fixed = fixed.replace(/(\b0)(\s*)(px|em|rem|%)/gi, '$1');
    if (fixed !== content) {
      result.addFix('ZERO_UNIT', 'Fixed zero units', 'Applied');
    }
    
    return fixed;
  }
}

/**
 * Main Linter Class
 */
class ASTQualityLinter {
  constructor(options = {}) {
    this.options = {
      extensions: ['.html', '.htm', '.css'],
      ignorePaths: ['node_modules', 'dist', 'build', '.git'],
      autoFix: false,
      verbose: false,
      ...options
    };
    this.htmlValidator = new HTMLValidator(options);
    this.cssValidator = new CSSValidator(options);
    this.results = new Map();
  }

  lintFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    if (!this.options.extensions.includes(ext)) {
      return null;
    }

    if (this.options.ignorePaths.some(p => filePath.includes(p))) {
      return null;
    }

    console.log(`  Linting: ${filePath}`);

    let result;
    const content = fs.readFileSync(filePath, 'utf8');

    if (ext === '.html' || ext === '.htm') {
      result = this.htmlValidator.validate(content, filePath);
      if (this.options.autoFix && result.fixes.length > 0) {
        const fixed = this.htmlValidator.autoFix(content, result);
        fs.writeFileSync(filePath, fixed, 'utf8');
      }
    } else if (ext === '.css') {
      result = this.cssValidator.validate(content, filePath);
      if (this.options.autoFix && result.fixes.length > 0) {
        const fixed = this.cssValidator.autoFix(content, result);
        fs.writeFileSync(filePath, fixed, 'utf8');
      }
    }

    this.results.set(filePath, result);
    this.printResult(result);

    return result;
  }

  lintDirectory(dirPath) {
    const files = this.glob(dirPath);
    let totalFiles = 0;
    let filesWithIssues = 0;

    console.log(`\nLinting directory: ${dirPath}\n`);

    for (const file of files) {
      const result = this.lintFile(file);
      if (result) {
        totalFiles++;
        if (result.hasIssues) {
          filesWithIssues++;
        }
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total files checked: ${totalFiles}`);
    console.log(`Files with issues: ${filesWithIssues}`);

    let totalErrors = 0;
    let totalWarnings = 0;
    for (const result of this.results.values()) {
      totalErrors += result.errors.length;
      totalWarnings += result.warnings.length;
    }
    console.log(`Total errors: ${totalErrors}`);
    console.log(`Total warnings: ${totalWarnings}`);
    console.log('='.repeat(60));

    return this.results;
  }

  glob(dir, pattern = '**/*') {
    const results = [];
    const exts = this.options.extensions;

    const walk = (currentDir) => {
      try {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(currentDir, entry.name);

          if (entry.isDirectory()) {
            if (!this.options.ignorePaths.includes(entry.name)) {
              walk(fullPath);
            }
          } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (exts.includes(ext)) {
              results.push(fullPath);
            }
          }
        }
      } catch (e) {
        // Skip inaccessible directories
      }
    };

    walk(dir);
    return results;
  }

  printResult(result) {
    const summary = result.summary;

    if (summary.errors === 0 && summary.warnings === 0) {
      console.log('    ✅ No issues found');
      return;
    }

    if (summary.errors > 0) {
      console.log(`    ❌ ${summary.errors} error(s)`);
      for (const error of result.errors) {
        console.log(`       [${error.rule}] ${error.message}`);
        if (error.node?.line) {
          console.log(`          Line ${error.node.line}`);
        }
      }
    }

    if (summary.warnings > 0) {
      console.log(`    ⚠️  ${summary.warnings} warning(s)`);
      if (this.options.verbose) {
        for (const warning of result.warnings) {
          console.log(`       [${warning.rule}] ${warning.message}`);
          if (warning.node?.line) {
            console.log(`          Line ${warning.node.line}`);
          }
        }
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      files: [],
      summary: {
        totalFiles: this.results.size,
        totalErrors: 0,
        totalWarnings: 0
      }
    };

    for (const [filePath, result] of this.results) {
      if (result.errors.length > 0 || result.warnings.length > 0) {
        report.files.push({
          path: filePath,
          errors: result.errors,
          warnings: result.warnings,
          fixes: result.fixes
        });
        report.summary.totalErrors += result.errors.length;
        report.summary.totalWarnings += result.warnings.length;
      }
    }

    const reportPath = path.join(ROOT, 'ast-lint-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
    console.log(`\n📊 Report saved to: ${reportPath}`);

    return report;
  }
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);
  const options = {
    extensions: ['.html', '.htm', '.css'],
    ignorePaths: ['node_modules', 'dist', 'build', '.git'],
    autoFix: false,
    verbose: false
  };
  let targetPath = ROOT;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--path' || args[i] === '-p') {
      targetPath = args[++i];
    } else if (args[i] === '--fix' || args[i] === '-f') {
      options.autoFix = true;
    } else if (args[i] === '--verbose' || args[i] === '-v') {
      options.verbose = true;
    } else if (args[i] === '--ext') {
      options.extensions = args[++i].split(',').map(e => e.startsWith('.') ? e : '.' + e);
    } else if (args[i] === '--ignore') {
      options.ignorePaths = args[++i].split(',');
    } else if (args[i] === '--help' || args[i] === '-h') {
      printHelp();
      process.exit(0);
    }
  }

  console.log('🔍 AST-Based HTML & CSS Validator');
  console.log('='.repeat(60));
  if (options.autoFix) {
    console.log('⚠️  AUTO-FIX MODE ENABLED');
  }
  console.log('');

  const linter = new ASTQualityLinter(options);

  const stat = fs.statSync(targetPath);
  if (stat.isDirectory()) {
    linter.lintDirectory(targetPath);
  } else {
    linter.lintFile(targetPath);
  }

  linter.generateReport();
}

function printHelp() {
  console.log(`
AST-Based HTML & CSS Validator and Code Auto-Fixer

Usage:
  node ast-quality-linter.js [options] [path]

Options:
  -p, --path <path>      Directory or file to lint (default: current directory)
  -f, --fix              Auto-fix issues where possible
  -v, --verbose          Show detailed warnings
  --ext <ext1,ext2>     File extensions to lint (default: .html,.htm,.css)
  --ignore <paths>       Comma-separated paths to ignore
  -h, --help             Show this help message

Examples:
  # Lint entire project
  node ast-quality-linter.js
  
  # Lint specific directory
  node ast-quality-linter.js --path ./components
  
  # Auto-fix issues
  node ast-quality-linter.js --fix --verbose
  
  # Lint specific file
  node ast-quality-linter.js --path index.html

Validation Rules:
  HTML:
    - DUPLICATE_ID: Duplicate ID attributes
    - DUPLICATE_CLASS: Duplicate class attributes
    - MISSING_ALT: <img> missing alt attribute
    - MISSING_HREF: <a> missing href
    - MISSING_TYPE: <button> missing type
  
  CSS:
    - DUPLICATE_SELECTOR: Duplicate CSS selectors
    - VENDOR_PREFIX: Properties that may need prefixes
    - ZERO_UNIT: Zero values with unnecessary units
  `);
}

// Export for programmatic use
module.exports = { ASTQualityLinter, HTMLValidator, CSSValidator, ValidationResult };

// Run if called directly
if (require.main === module) {
  main();
}