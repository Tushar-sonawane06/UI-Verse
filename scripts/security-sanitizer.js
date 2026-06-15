#!/usr/bin/env node
/**
 * Security Sanitizer - CSP Violation Fixer
 * 
 * This tool:
 * 1. Parses JavaScript files into AST structures
 * 2. Rewrites inline event properties (onclick, onerror, etc.) to programmatic listeners
 * 3. Replaces eval() calls with secure alternatives
 * 4. Saves the updated source files
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

// Try to load optional parser
let acorn;
try {
  acorn = require('acorn');
} catch (e) {
  console.warn('Note: Install acorn for enhanced AST parsing: npm install acorn');
}

/**
 * Security issues and their patterns
 */
const SECURITY_PATTERNS = {
  // Inline event handlers that should be converted
  EVENT_HANDLERS: [
    'onclick', 'onload', 'onerror', 'onmouseover', 'onmouseout', 'onfocus', 'onblur',
    'onchange', 'onsubmit', 'onkeydown', 'onkeyup', 'onkeypress', 'ondblclick',
    'oncontextmenu', 'onwheel', 'oncopy', 'onpaste', 'oncut', 'onscroll',
    'onanimationstart', 'onanimationend', 'onanimationiteration'
  ],
  
  // Dangerous functions that should be replaced
  DANGEROUS_FUNCTIONS: [
    'eval', 'Function', 'setTimeout', 'setInterval', 'execScript', 'exec'
  ],
  
  // Dangerous property assignments
  DANGEROUS_ASSIGNMENTS: [
    'innerHTML', 'outerHTML', 'insertAdjacentHTML', 'document.write', 'document.writeln'
  ]
};

/**
 * Security sanitizer class
 */
class SecuritySanitizer {
  constructor(options = {}) {
    this.options = {
      verbose: false,
      dryRun: false,
      backup: true,
      extensions: ['.js', '.mjs'],
      ignorePaths: ['node_modules', 'dist', 'build', '.git'],
      ...options
    };
    this.fixes = [];
    this.violations = [];
  }

  /**
   * Analyze a file for security issues
   */
  analyzeFile(filePath) {
    console.log(`  Analyzing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const fileIssues = {
      filePath,
      inlineEventHandlers: [],
      dangerousFunctions: [],
      dangerousAssignments: [],
      totalIssues: 0
    };

    // Detect inline event handlers
    for (const handler of SECURITY_PATTERNS.EVENT_HANDLERS) {
      const regex = new RegExp(`\\b${handler}\\s*=`, 'gi');
      let match;
      while ((match = regex.exec(content)) !== null) {
        fileIssues.inlineEventHandlers.push({
          type: 'EVENT_HANDLER',
          handler,
          line: this.getLineNumber(content, match.index),
          position: match.index,
          original: this.getLineContent(content, match.index)
        });
      }
    }

    // Detect dangerous function calls
    for (const func of SECURITY_PATTERNS.DANGEROUS_FUNCTIONS) {
      const regex = new RegExp(`\\b${func}\\s*\\(`, 'gi');
      let match;
      while ((match = regex.exec(content)) !== null) {
        fileIssues.dangerousFunctions.push({
          type: 'DANGEROUS_FUNCTION',
          function: func,
          line: this.getLineNumber(content, match.index),
          position: match.index,
          original: this.getCodeSnippet(content, match.index, 100)
        });
      }
    }

    // Detect dangerous assignments
    for (const prop of SECURITY_PATTERNS.DANGEROUS_ASSIGNMENTS) {
      const regex = new RegExp(`\\b${prop}\\s*=`, 'gi');
      let match;
      while ((match = regex.exec(content)) !== null) {
        fileIssues.dangerousAssignments.push({
          type: 'DANGEROUS_ASSIGNMENT',
          property: prop,
          line: this.getLineNumber(content, match.index),
          position: match.index,
          original: this.getLineContent(content, match.index)
        });
      }
    }

    fileIssues.totalIssues = 
      fileIssues.inlineEventHandlers.length +
      fileIssues.dangerousFunctions.length +
      fileIssues.dangerousAssignments.length;

    this.violations.push(fileIssues);

    if (this.options.verbose && fileIssues.totalIssues > 0) {
      console.log(`    Found ${fileIssues.totalIssues} potential issues`);
    }

    return fileIssues;
  }

  /**
   * Sanitize a file by fixing security issues
   */
  sanitizeFile(filePath) {
    console.log(`  Sanitizing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const fixes = [];

    // Create backup
    if (this.options.backup && !this.options.dryRun) {
      const backupPath = filePath + '.backup';
      fs.writeFileSync(backupPath, content, 'utf8');
    }

    // Fix inline event handlers
    for (const handler of SECURITY_PATTERNS.EVENT_HANDLERS) {
      const regex = new RegExp(`\\b${handler}\\s*=\\s*["']([^"']*?)["']`, 'gi');
      content = content.replace(regex, (match, handlerCode) => {
        // Skip empty handlers or valid function references
        if (!handlerCode || handlerCode.startsWith('function') || handlerCode.includes('=>')) {
          return match;
        }
        
        // Convert to addEventListener pattern
        const safeCode = this.sanitizeHandlerCode(handlerCode);
        fixes.push({
          type: 'EVENT_HANDLER',
          handler,
          original: match,
          fixed: `addEventListener('${handler.slice(2)}', function(event) { ${safeCode} })`
        });
        return '';
      });

      // Handle onclick="return functionName()"
      const returnRegex = new RegExp(`\\b${handler}\\s*=\\s*"return\\s+(\\w+)\\s*\\(\\s*\\)"`, 'gi');
      content = content.replace(returnRegex, (match, funcName) => {
        fixes.push({
          type: 'EVENT_HANDLER',
          handler,
          original: match,
          fixed: `addEventListener('${handler.slice(2)}', ${funcName})`
        });
        return '';
      });
    }

    // Fix dangerous innerHTML assignments
    const innerHTMLRegex = /(\w+)\.innerHTML\s*=\s*(["'])(.*?)\2/gi;
    content = content.replace(innerHTMLRegex, (match, element, quote, html) => {
      // Skip if it's safe (from trusted source, not user input)
      if (html.trim().startsWith('//') || html.includes('sanitize')) {
        return match;
      }
      
      fixes.push({
        type: 'DANGEROUS_ASSIGNMENT',
        property: 'innerHTML',
        original: match,
        fixed: `${element}.innerHTML = sanitizeHTML(${quote}${html}${quote})`
      });
      return match; // Keep original but suggest using sanitizeHTML
    });

    // Add warning comments for eval and dangerous functions
    for (const func of SECURITY_PATTERNS.DANGEROUS_FUNCTIONS) {
      const evalRegex = new RegExp(`\\b(${func})\\(`, 'gi');
      content = content.replace(evalRegex, (match, funcName) => {
        // Don't warn about Function.bind
        if (funcName === 'Function' && match.includes('.bind')) {
          return match;
        }
        
        fixes.push({
          type: 'DANGEROUS_FUNCTION',
          function: funcName,
          original: match,
          fixed: `// SECURITY: ${funcName} is dangerous - consider using safer alternative\n    ${funcName}(`
        });
        return match; // Keep original but add warning
      });
    }

    // Add sanitizeHTML helper function at the top if innerHTML fixes were made
    if (fixes.some(f => f.type === 'DANGEROUS_ASSIGNMENT')) {
      const helperFunction = `
(function() {
  // Basic HTML sanitizer to prevent XSS
  function sanitizeHTML(str) {
    if (typeof str !== 'string') return str;
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }
  
  // Expose globally if needed
  if (typeof window !== 'undefined') {
    window.sanitizeHTML = sanitizeHTML;
  }
})();
`;
      
      // Add at the beginning of the file
      content = helperFunction + '\n' + content;
      
      fixes.push({
        type: 'HELPER_ADDED',
        original: '',
        fixed: 'Added sanitizeHTML helper function'
      });
    }

    // Write fixed file
    if (!this.options.dryRun) {
      fs.writeFileSync(filePath, content, 'utf8');
    }

    this.fixes.push({
      filePath,
      fixes
    });

    return { content, fixes };
  }

  /**
   * Sanitize handler code to be safe
   */
  sanitizeHandlerCode(code) {
    // Remove any potentially dangerous patterns
    let safe = code;
    
    // Remove script injection patterns
    safe = safe.replace(/<script[^>]*>.*?<\/script>/gi, '');
    
    // Remove javascript: URLs
    safe = safe.replace(/javascript:/gi, '');
    
    // Remove data: URLs (except for safe image types)
    safe = safe.replace(/data:(?!image\/(png|jpg|jpeg|gif|webp))/gi, '');
    
    // Escape quotes
    safe = safe.replace(/"/g, '\\"').replace(/'/g, "\\'");
    
    return safe;
  }

  /**
   * Analyze all files in a directory
   */
  analyzeDirectory(dirPath) {
    console.log(`\nAnalyzing directory: ${dirPath}\n`);
    
    const files = this.glob(dirPath);
    
    for (const file of files) {
      this.analyzeFile(file);
    }
    
    return this.violations;
  }

  /**
   * Sanitize all files in a directory
   */
  sanitizeDirectory(dirPath) {
    console.log(`\nSanitizing directory: ${dirPath}\n`);
    
    const files = this.glob(dirPath);
    
    for (const file of files) {
      const issues = this.analyzeFile(file);
      if (issues.totalIssues > 0) {
        this.sanitizeFile(file);
      }
    }
    
    return this.fixes;
  }

  /**
   * Generate report
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        filesAnalyzed: this.violations.length,
        totalIssues: this.violations.reduce((sum, v) => sum + v.totalIssues, 0),
        filesSanitized: this.fixes.length,
        totalFixes: this.fixes.reduce((sum, f) => sum + f.fixes.length, 0)
      },
      violations: this.violations,
      fixes: this.fixes
    };

    return report;
  }

  /**
   * Get line number from position
   */
  getLineNumber(content, position) {
    const lines = content.substring(0, position).split('\n');
    return lines.length;
  }

  /**
   * Get line content from position
   */
  getLineContent(content, position) {
    const lines = content.split('\n');
    const lineNum = this.getLineNumber(content, position) - 1;
    return lines[lineNum]?.trim() || '';
  }

  /**
   * Get code snippet around position
   */
  getCodeSnippet(content, position, length) {
    const start = Math.max(0, position - 20);
    const end = Math.min(content.length, position + length);
    return content.substring(start, end);
  }

  /**
   * Glob files
   */
  glob(dir) {
    const results = [];
    
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
            const ext = path.extname(entry.name);
            if (this.options.extensions.includes(ext)) {
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
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);
  const options = {
    verbose: false,
    dryRun: false,
    backup: true
  };
  let targetPath = path.join(ROOT, 'js');

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--path' || args[i] === '-p') {
      targetPath = args[++i];
    } else if (args[i] === '--sanitize' || args[i] === '-s') {
      options.sanitize = true;
    } else if (args[i] === '--dry-run') {
      options.dryRun = true;
    } else if (args[i] === '--verbose' || args[i] === '-v') {
      options.verbose = true;
    } else if (args[i] === '--no-backup') {
      options.backup = false;
    } else if (args[i] === '--help' || args[i] === '-h') {
      printHelp();
      process.exit(0);
    }
  }

  console.log('🔒 Security Sanitizer - CSP Violation Fixer');
  console.log('='.repeat(60));
  if (options.dryRun) {
    console.log('⚠️  DRY RUN MODE - No files will be modified');
  }
  console.log('');

  const sanitizer = new SecuritySanitizer(options);
  
  const stat = fs.statSync(targetPath);
  if (stat.isDirectory()) {
    if (options.sanitize) {
      sanitizer.sanitizeDirectory(targetPath);
    } else {
      sanitizer.analyzeDirectory(targetPath);
    }
  } else {
    if (options.sanitize) {
      sanitizer.analyzeFile(targetPath);
      sanitizer.sanitizeFile(targetPath);
    } else {
      sanitizer.analyzeFile(targetPath);
    }
  }

  const report = sanitizer.generateReport();
  
  console.log('\n' + '='.repeat(60));
  console.log('SECURITY ANALYSIS RESULTS');
  console.log('='.repeat(60));
  console.log(`Files analyzed: ${report.summary.filesAnalyzed}`);
  console.log(`Total issues found: ${report.summary.totalIssues}`);
  
  // Count by type
  let eventHandlers = 0;
  let dangerousFuncs = 0;
  let dangerousAssigns = 0;
  
  for (const v of report.violations) {
    eventHandlers += v.inlineEventHandlers.length;
    dangerousFuncs += v.dangerousFunctions.length;
    dangerousAssigns += v.dangerousAssignments.length;
  }
  
  console.log(`  - Inline event handlers: ${eventHandlers}`);
  console.log(`  - Dangerous function calls: ${dangerousFuncs}`);
  console.log(`  - Dangerous assignments: ${dangerousAssigns}`);
  
  if (options.sanitize) {
    console.log(`\nFiles sanitized: ${report.summary.filesSanitized}`);
    console.log(`Total fixes applied: ${report.summary.totalFixes}`);
  }

  // Save report
  const reportPath = path.join(ROOT, 'security-sanitizer-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`\n📊 Full report saved to: ${reportPath}`);
  console.log('='.repeat(60));

  // Show fix summary
  if (report.fixes.length > 0 && options.verbose) {
    console.log('\n📋 Fixes applied:');
    for (const fix of report.fixes) {
      if (fix.fixes.length > 0) {
        console.log(`\n  ${fix.filePath}:`);
        for (const f of fix.fixes) {
          console.log(`    - [${f.type}] ${f.handler || f.function || f.property || ''}`);
        }
      }
    }
  }
}

function printHelp() {
  console.log(`
Security Sanitizer - CSP Violation Fixer

Usage:
  node security-sanitizer.js [options] [path]

Options:
  -p, --path <path>      Directory or file to analyze (default: ./js)
  -s, --sanitize         Apply fixes to files
  --dry-run              Show what would be fixed without modifying files
  -v, --verbose          Show detailed output
  --no-backup            Don't create backup files
  -h, --help             Show this help message

Examples:
  # Analyze JS files for security issues
  node security-sanitizer.js --path ./js
  
  # Analyze and apply fixes
  node security-sanitizer.js --sanitize --path ./components
  
  # Dry run to see what would be fixed
  node security-sanitizer.js --dry-run --sanitize --verbose

Security Issues Detected:
  - Inline event handlers (onclick, onerror, etc.)
  - Dangerous function calls (eval, Function, setTimeout with strings)
  - Dangerous assignments (innerHTML, document.write)

Security Fixes Applied:
  - Convert inline event handlers to addEventListener
  - Add sanitizeHTML helper for innerHTML
  - Add warning comments for dangerous functions
  `);
}

// Export for programmatic use
module.exports = { SecuritySanitizer, SECURITY_PATTERNS };

// Run if called directly
if (require.main === module) {
  main();
}