#!/usr/bin/env node
/**
 * Critical CSS Path Inliner and Performance Purger
 * 
 * This script:
 * 1. Loads showcase pages in a headless Playwright browser
 * 2. Uses CSS coverage API to identify critical CSS
 * 3. Generates minimal CSS and injects it inline
 * 4. Rewrites external stylesheet calls for async loading
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const ROOT = process.cwd();
const INPUT_DIR = ROOT;  // Use root directory where HTML files are
const OUTPUT_DIR = path.join(ROOT, 'dist');
const SCRIPTS_DIR = __dirname;

const ASYNC_LOAD_SCRIPT = `<script>
// Async CSS loader - prevents render blocking
(function() {
  var link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '%URL%';
  link.onload = function() { this.onload = null; this.rel = 'stylesheet'; };
  link.onerror = function() { console.warn('Failed to load stylesheet:', '%URL%'); };
  document.head.appendChild(link);
})();
</script>`;

const NO_JS_FALLBACK = `<noscript><link rel="stylesheet" href="%URL%"></noscript>`;

class CriticalCSSInliner {
  constructor(options = {}) {
    this.options = {
      viewport: { width: 1280, height: 720 },
      waitUntil: 'networkidle',
      maxWaitTime: 30000,
      outputDir: OUTPUT_DIR,
      ...options
    };
    this.browser = null;
    this.context = null;
    this.results = new Map();
  }

  async init() {
    console.log('🚀 Initializing Critical CSS Inliner...\n');
    
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext({
      viewport: this.options.viewport
    });
    
    return this;
  }

  async processPage(pagePath) {
    const absolutePath = path.isAbsolute(pagePath) 
      ? pagePath 
      : path.join(INPUT_DIR, pagePath);
    
    const fileUrl = `file://${absolutePath}`;
    console.log(`📄 Processing: ${path.basename(pagePath)}`);
    
    const page = await this.context.newPage();
    
    try {
      // Start CSS coverage
      await page.coverage.startCSSCoverage({ resetOnNavigation: true });
      
      // Navigate to page
      await page.goto(fileUrl, { 
        waitUntil: this.options.waitUntil,
        timeout: this.options.maxWaitTime 
      });
      
      // Wait a bit for dynamic content
      await page.waitForTimeout(1000);
      
      // Stop CSS coverage and get results
      const coverage = await page.coverage.stopCSSCoverage();
      
      // Analyze coverage
      const criticalCSS = this.analyzeCoverage(coverage);
      
      // Get the page content with modifications
      const modifiedHTML = await this.inlineCriticalCSS(page, criticalCSS);
      
      this.results.set(pagePath, {
        criticalCSS,
        modifiedHTML,
        coverage
      });
      
      console.log(`   ✓ Found ${criticalCSS.size} CSS rules (${criticalCSS.totalRules} total rules)`);
      
    } catch (error) {
      console.error(`   ✗ Error processing ${pagePath}:`, error.message);
    } finally {
      await page.close();
    }
    
    return this;
  }

  analyzeCoverage(coverage) {
    const criticalRules = new Map();
    let totalRules = 0;
    
    for (const entry of coverage) {
      const rules = this.extractUsedCSSRules(entry.text, entry.ranges);
      totalRules += rules.totalRules;
      
      for (const [selector, cssText] of rules.used) {
        if (!criticalRules.has(selector)) {
          criticalRules.set(selector, cssText);
        }
      }
    }
    
    return {
      size: criticalRules.size,
      totalRules,
      rules: criticalRules
    };
  }

  extractUsedCSSRules(cssText, ranges) {
    const used = new Map();
    let totalRules = 0;
    
    // Extract the used portions of CSS
    for (const range of ranges) {
      const css = cssText.substring(range.start, range.end);
      
      // Parse CSS rules - simple regex-based parser
      const ruleRegex = /([^{}]+)\{([^{}]*)\}/g;
      let match;
      
      while ((match = ruleRegex.exec(css)) !== null) {
        const selector = match[1].trim();
        const declarations = match[2].trim();
        
        if (selector && declarations) {
          totalRules++;
          used.set(selector, declarations);
        }
      }
    }
    
    return { used, totalRules };
  }

  async inlineCriticalCSS(page, criticalCSS) {
    // Get current HTML
    const html = await page.content();
    
    // Build critical CSS string
    let criticalStyle = '\n    /* Critical CSS - Inlined by CriticalCSSInliner */\n';
    for (const [selector, declarations] of criticalCSS.rules) {
      criticalStyle += `    ${selector} { ${declarations} }\n`;
    }
    
    // Insert critical CSS before </head>
    let modifiedHTML = html.replace(
      '</head>',
      `    <style>${criticalStyle}</style>\n  </head>`
    );
    
    // Replace external stylesheets with async loaders
    modifiedHTML = this.makeStylesheetsAsync(modifiedHTML);
    
    return modifiedHTML;
  }

  makeStylesheetsAsync(html) {
    // Find all <link rel="stylesheet"> tags
    const stylesheetRegex = /<link([^>]*?)rel=["']stylesheet["']([^>]*)>/gi;
    
    return html.replace(stylesheetRegex, (match, before, after) => {
      // Extract href
      const hrefMatch = before.match(/href=["']([^"']+)["']/) || after.match(/href=["']([^"']+)["']/);
      
      if (!hrefMatch) return match;
      
      const href = hrefMatch[1];
      
      // Skip external stylesheets
      if (href.startsWith('http://') || href.startsWith('https://')) {
        return match;
      }
      
      // Create async loader version
      const asyncLoader = ASYNC_LOAD_SCRIPT.replace(/%URL%/g, href);
      const noJsFallback = NO_JS_FALLBACK.replace(/%URL%/g, href);
      
      return `<!-- Async loaded: ${href} -->\n    ${asyncLoader}\n    ${noJsFallback}`;
    });
  }

  async processDirectory(dirPath, pattern = '**/*.html') {
    const absoluteDir = path.isAbsolute(dirPath) 
      ? dirPath 
      : path.join(INPUT_DIR, dirPath);
    
    console.log(`\n📁 Processing directory: ${dirPath}\n`);
    
    const files = this.globSync(absoluteDir, pattern);
    
    for (const file of files) {
      const relativePath = path.relative(INPUT_DIR, file);
      await this.processPage(relativePath);
    }
    
    return this;
  }

  globSync(dir, pattern) {
    const results = [];
    const regex = new RegExp(
      pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*').replace(/\?/g, '.')
    );
    
    const walk = (currentDir) => {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        
        if (entry.isDirectory()) {
          walk(fullPath);
        } else if (entry.isFile() && regex.test(entry.name)) {
          results.push(fullPath);
        }
      }
    };
    
    walk(dir);
    return results;
  }

  async saveOutput() {
    console.log('\n💾 Saving output...\n');
    
    const outputDir = this.options.outputDir;
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    let savedCount = 0;
    
    for (const [pagePath, result] of this.results) {
      const outputPath = path.join(outputDir, pagePath);
      const outDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, result.modifiedHTML, 'utf8');
      savedCount++;
      
      console.log(`   ✓ Saved: ${pagePath}`);
      
      // Also save coverage report
      const coveragePath = outputPath.replace('.html', '.coverage.json');
      fs.writeFileSync(
        coveragePath, 
        JSON.stringify(result.coverage, null, 2), 
        'utf8'
      );
    }
    
    console.log(`\n✨ Saved ${savedCount} files to ${outputDir}/`);
    
    return this;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      pages: [],
      summary: {
        totalPages: this.results.size,
        totalCriticalRules: 0,
        totalRules: 0
      }
    };
    
    for (const [pagePath, result] of this.results) {
      report.pages.push({
        path: pagePath,
        criticalRules: result.criticalCSS.size,
        totalRules: result.criticalCSS.totalRules
      });
      
      report.summary.totalCriticalRules += result.criticalCSS.size;
      report.summary.totalRules += result.criticalCSS.totalRules;
    }
    
    if (report.summary.totalRules > 0) {
      report.summary.savingsPercent = 
        ((report.summary.totalRules - report.summary.totalCriticalRules) / report.summary.totalRules * 100).toFixed(2);
    }
    
    const reportPath = path.join(this.options.outputDir, 'critical-css-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
    
    console.log(`\n📊 Report saved to: ${reportPath}`);
    console.log(`   Total Pages: ${report.summary.totalPages}`);
    console.log(`   Critical Rules: ${report.summary.totalCriticalRules}`);
    console.log(`   Total Rules: ${report.summary.totalRules}`);
    console.log(`   Potential Savings: ${report.summary.savingsPercent}%`);
    
    return report;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const cliOptions = {
    input: INPUT_DIR,
    outputDir: OUTPUT_DIR
  };
  
  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--input' || args[i] === '-i') {
      cliOptions.input = args[++i];
    } else if (args[i] === '--output' || args[i] === '-o') {
      cliOptions.outputDir = args[++i];
    } else if (args[i] === '--page' || args[i] === '-p') {
      cliOptions.page = args[++i];
    } else if (args[i] === '--help' || args[i] === '-h') {
      printHelp();
      process.exit(0);
    }
  }
  
  try {
    const inliner = new CriticalCSSInliner({
      viewport: { width: 1280, height: 720 },
      outputDir: cliOptions.outputDir
    });
    
    await inliner.init();
    
    if (cliOptions.page) {
      await inliner.processPage(cliOptions.page);
    } else {
      // Process all HTML files in the input directory
      await inliner.processDirectory(cliOptions.input);
    }
    
    await inliner.saveOutput();
    inliner.generateReport();
    
    await inliner.close();
    
    console.log('\n✅ Critical CSS Inlining Complete!\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

function printHelp() {
  console.log(`
Critical CSS Path Inliner and Performance Purger

Usage:
  node critical-css-inliner.js [options]

Options:
  -i, --input <path>    Input directory (default: ./)
  -o, --output <path>   Output directory (default: ./dist)
  -p, --page <path>     Process a single page (relative to input)
  -h, --help            Show this help message

Examples:
  # Process all pages in current directory
  node critical-css-inliner.js
  
  # Process a specific page
  node critical-css-inliner.js --page index.html
  
  # Custom input/output directories
  node critical-css-inliner.js --input ./pages --output ./optimized

Output:
  - Optimized HTML files with inlined critical CSS
  - Critical CSS coverage reports (JSON)
  - Summary report (critical-css-report.json)
  `);
}

// Export for programmatic use
module.exports = { CriticalCSSInliner };

// Run if called directly
if (require.main === module) {
  main();
}