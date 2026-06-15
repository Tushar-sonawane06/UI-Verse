#!/usr/bin/env node

/**
 * Performance Budget Enforcer
 * Enforces performance budgets with comprehensive inline asset accounting
 */

const fs = require('fs');
const path = require('path');

const BUDGETS_CONFIG_FILE = path.join(process.cwd(), '.performance-budget.json');
const ENFORCEMENT_REPORTS_DIR = path.join(process.cwd(), 'reports', 'performance-budget');
const DEFAULT_BUDGET = {
  javascript: 150000, // 150KB
  css: 100000, // 100KB
  inline_javascript: 50000, // 50KB
  inline_css: 30000, // 30KB
  html: 200000, // 200KB
  images: 500000, // 500KB
  fonts: 100000, // 100KB
  total: 1200000 // 1.2MB
};

/**
 * Initialize budget infrastructure
 */
function ensureBudgetInfrastructure() {
  if (!fs.existsSync(ENFORCEMENT_REPORTS_DIR)) {
    fs.mkdirSync(ENFORCEMENT_REPORTS_DIR, { recursive: true });
  }

  if (!fs.existsSync(BUDGETS_CONFIG_FILE)) {
    fs.writeFileSync(BUDGETS_CONFIG_FILE, JSON.stringify(DEFAULT_BUDGET, null, 2));
  }
}

/**
 * Load performance budget configuration
 */
function loadBudgetConfig() {
  ensureBudgetInfrastructure();

  try {
    return JSON.parse(fs.readFileSync(BUDGETS_CONFIG_FILE, 'utf8'));
  } catch {
    return DEFAULT_BUDGET;
  }
}

/**
 * Extract inline scripts and styles from HTML
 */
function extractInlineAssets(htmlContent) {
  const inlineAssets = {
    scripts: [],
    styles: [],
    totalScriptSize: 0,
    totalStyleSize: 0
  };

  // Extract inline scripts
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = scriptRegex.exec(htmlContent)) !== null) {
    const content = match[1];
    // Skip if it's a src attribute (external script)
    if (!match[0].includes('src=')) {
      inlineAssets.scripts.push({
        size: Buffer.byteLength(content, 'utf8'),
        preview: content.substring(0, 100)
      });
      inlineAssets.totalScriptSize += Buffer.byteLength(content, 'utf8');
    }
  }

  // Extract inline styles
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;

  while ((match = styleRegex.exec(htmlContent)) !== null) {
    const content = match[1];
    inlineAssets.styles.push({
      size: Buffer.byteLength(content, 'utf8'),
      preview: content.substring(0, 100)
    });
    inlineAssets.totalStyleSize += Buffer.byteLength(content, 'utf8');
  }

  return inlineAssets;
}

/**
 * Calculate asset sizes including inline assets
 */
function calculateAssetSizes() {
  const sizes = {
    externalJavaScript: 0,
    externalCSS: 0,
    inlineJavaScript: 0,
    inlineCSS: 0,
    html: 0,
    images: 0,
    fonts: 0,
    files: {}
  };

  const files = fs.readdirSync(process.cwd());

  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const ext = path.extname(file).toLowerCase();
      const size = stats.size;

      switch (ext) {
        case '.js':
          sizes.externalJavaScript += size;
          sizes.files[file] = { type: 'external-js', size };
          break;
        case '.css':
          sizes.externalCSS += size;
          sizes.files[file] = { type: 'external-css', size };
          break;
        case '.html':
          sizes.html += size;
          sizes.files[file] = { type: 'html', size };

          // Extract inline assets from HTML
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const inlineAssets = extractInlineAssets(content);
            sizes.inlineJavaScript += inlineAssets.totalScriptSize;
            sizes.inlineCSS += inlineAssets.totalStyleSize;

            if (inlineAssets.scripts.length > 0 || inlineAssets.styles.length > 0) {
              sizes.files[file].inline = {
                scripts: inlineAssets.scripts.length,
                styles: inlineAssets.styles.length,
                scriptSize: inlineAssets.totalScriptSize,
                styleSize: inlineAssets.totalStyleSize
              };
            }
          } catch (error) {
            console.warn(`Error analyzing ${file}:`, error.message);
          }
          break;
        case '.png':
        case '.jpg':
        case '.jpeg':
        case '.gif':
        case '.svg':
        case '.webp':
          sizes.images += size;
          sizes.files[file] = { type: 'image', size };
          break;
        case '.woff':
        case '.woff2':
        case '.ttf':
        case '.otf':
          sizes.fonts += size;
          sizes.files[file] = { type: 'font', size };
          break;
      }
    }
  }

  return sizes;
}

/**
 * Enforce performance budgets
 */
function enforceBudgets() {
  ensureBudgetInfrastructure();

  const budget = loadBudgetConfig();
  const sizes = calculateAssetSizes();

  const violations = [];
  const warnings = [];
  const report = {
    timestamp: new Date().toISOString(),
    budget,
    actual: {
      javascript: sizes.externalJavaScript,
      css: sizes.externalCSS,
      inline_javascript: sizes.inlineJavaScript,
      inline_css: sizes.inlineCSS,
      html: sizes.html,
      images: sizes.images,
      fonts: sizes.fonts,
      total: sizes.externalJavaScript + sizes.externalCSS + sizes.inlineJavaScript + 
             sizes.inlineCSS + sizes.html + sizes.images + sizes.fonts
    },
    violations: [],
    warnings: [],
    summary: {
      passed: true,
      budgetStatus: {}
    },
    filesWithInlineAssets: []
  };

  // Check each budget category
  const categories = [
    { key: 'javascript', label: 'External JavaScript' },
    { key: 'css', label: 'External CSS' },
    { key: 'inline_javascript', label: 'Inline JavaScript' },
    { key: 'inline_css', label: 'Inline CSS' },
    { key: 'html', label: 'HTML' },
    { key: 'images', label: 'Images' },
    { key: 'fonts', label: 'Fonts' },
    { key: 'total', label: 'Total' }
  ];

  for (const category of categories) {
    const budgetSize = budget[category.key];
    const actualSize = report.actual[category.key];
    const percentOfBudget = (actualSize / budgetSize * 100).toFixed(2);

    report.summary.budgetStatus[category.key] = {
      budget: budgetSize,
      actual: actualSize,
      remaining: Math.max(0, budgetSize - actualSize),
      percentUsed: percentOfBudget
    };

    if (actualSize > budgetSize) {
      const overage = actualSize - budgetSize;
      report.violations.push({
        category: category.label,
        budget: budgetSize,
        actual: actualSize,
        overage,
        percentOver: ((overage / budgetSize) * 100).toFixed(2)
      });
      report.summary.passed = false;
    } else if (percentOfBudget > 80) {
      report.warnings.push({
        category: category.label,
        budget: budgetSize,
        actual: actualSize,
        percentUsed: percentOfBudget,
        message: `${category.label} is ${percentOfBudget}% of budget`
      });
    }
  }

  // Track files with inline assets
  for (const [file, fileInfo] of Object.entries(sizes.files)) {
    if (fileInfo.inline) {
      report.filesWithInlineAssets.push({
        file,
        inline: fileInfo.inline
      });
    }
  }

  // Save report
  const reportPath = path.join(ENFORCEMENT_REPORTS_DIR, `budget-enforcement-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  return report;
}

/**
 * Generate budget enforcement summary
 */
function generateBudgetSummary() {
  const report = enforceBudgets();

  const summary = {
    timestamp: report.timestamp,
    status: report.summary.passed ? 'PASS' : 'FAIL',
    violations: report.violations.length,
    warnings: report.warnings.length,
    inlineAssetCount: report.filesWithInlineAssets.length,
    budgetBreakdown: report.summary.budgetStatus
  };

  return summary;
}

/**
 * Get performance recommendations
 */
function getRecommendations() {
  const report = enforceBudgets();
  const recommendations = [];

  // Inline asset recommendations
  if (report.filesWithInlineAssets.length > 0) {
    const totalInlineScript = report.filesWithInlineAssets.reduce((sum, f) => 
      sum + f.inline.scriptSize, 0
    );
    const totalInlineStyle = report.filesWithInlineAssets.reduce((sum, f) => 
      sum + f.inline.styleSize, 0
    );

    if (totalInlineScript > 20000) {
      recommendations.push({
        severity: 'warning',
        category: 'Inline JavaScript',
        message: `${(totalInlineScript / 1024).toFixed(2)} KB of inline JavaScript detected`,
        recommendation: 'Extract inline scripts to external files for better caching',
        files: report.filesWithInlineAssets.filter(f => f.inline.scriptSize > 0)
      });
    }

    if (totalInlineStyle > 15000) {
      recommendations.push({
        severity: 'warning',
        category: 'Inline CSS',
        message: `${(totalInlineStyle / 1024).toFixed(2)} KB of inline CSS detected`,
        recommendation: 'Extract inline styles to external stylesheets',
        files: report.filesWithInlineAssets.filter(f => f.inline.styleSize > 0)
      });
    }
  }

  // Budget violation recommendations
  for (const violation of report.violations) {
    recommendations.push({
      severity: 'error',
      category: violation.category,
      message: `Budget exceeded by ${(violation.overage / 1024).toFixed(2)} KB (${violation.percentOver}%)`,
      recommendation: `Reduce ${violation.category.toLowerCase()} size to stay within ${(violation.budget / 1024).toFixed(2)} KB budget`
    });
  }

  // Warning recommendations
  for (const warning of report.warnings) {
    recommendations.push({
      severity: 'warning',
      category: warning.category,
      message: `Using ${warning.percentUsed}% of allocated budget`,
      recommendation: 'Monitor closely to avoid exceeding budget'
    });
  }

  return {
    timestamp: new Date().toISOString(),
    recommendations,
    summary: {
      errors: recommendations.filter(r => r.severity === 'error').length,
      warnings: recommendations.filter(r => r.severity === 'warning').length
    }
  };
}

module.exports = {
  enforceBudgets,
  generateBudgetSummary,
  getRecommendations,
  loadBudgetConfig,
  calculateAssetSizes,
  extractInlineAssets
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'enforce';

  try {
    switch (command) {
      case 'enforce': {
        const report = enforceBudgets();
        
        if (report.summary.passed) {
          console.log('✓ Performance budget PASSED');
        } else {
          console.log('✗ Performance budget FAILED');
          console.log(`\nViolations (${report.violations.length}):`);
          for (const v of report.violations) {
            console.log(`  - ${v.category}: ${(v.actual / 1024).toFixed(2)} KB (${v.percentOver}% over)`);
          }
        }

        console.log(`\nBudget Status:`);
        for (const [key, status] of Object.entries(report.summary.budgetStatus)) {
          console.log(`  ${key}: ${(status.actual / 1024).toFixed(2)} KB / ${(status.budget / 1024).toFixed(2)} KB (${status.percentUsed}%)`);
        }

        if (report.filesWithInlineAssets.length > 0) {
          console.log(`\nFiles with inline assets: ${report.filesWithInlineAssets.length}`);
          for (const f of report.filesWithInlineAssets) {
            console.log(`  - ${f.file}: ${f.inline.scripts} scripts, ${f.inline.styles} styles`);
          }
        }

        process.exit(report.summary.passed ? 0 : 1);
        break;
      }
      case 'summary': {
        const summary = generateBudgetSummary();
        console.log(JSON.stringify(summary, null, 2));
        break;
      }
      case 'recommendations': {
        const recs = getRecommendations();
        console.log(JSON.stringify(recs, null, 2));
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: enforce, summary, recommendations');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
