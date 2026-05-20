#!/usr/bin/env node

/**
 * UI-Verse Performance Monitoring System
 * Monitors and analyzes component performance metrics
 * Generates performance reports and ensures budget compliance
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

// Configuration
const CONFIG = {
  outputDir: path.join(__dirname, '..', 'reports', 'performance-analysis'),
  performanceBudgetFile: path.join(__dirname, '..', 'performance-budgets.json'),
  componentsPath: path.join(__dirname, '..'),
  timeout: 30000,
  retries: 2,
};

// Performance metrics tracker
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.violations = [];
    this.timestamp = new Date().toISOString();
  }

  /**
   * Get all HTML component files
   */
  getComponentFiles() {
    const htmlFiles = [];
    const excludeDirs = [
      'node_modules',
      '.git',
      '.github',
      '.storybook',
      'reports',
      'Public',
      'scripts',
      'stories',
      'tests',
      'Docs',
    ];

    const walk = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);
          const relativePath = path.relative(CONFIG.componentsPath, fullPath);

          // Skip excluded directories
          if (excludeDirs.some((excluded) => relativePath.startsWith(excluded))) {
            return;
          }

          if (stat.isDirectory()) {
            walk(fullPath);
          } else if (file.endsWith('.html') && !file.startsWith('.')) {
            htmlFiles.push({
              name: file,
              path: fullPath,
              relativePath: relativePath,
            });
          }
        });
      } catch (err) {
        // Ignore read errors
      }
    };

    walk(CONFIG.componentsPath);
    return htmlFiles;
  }

  /**
   * Measure component performance using Playwright
   */
  async measureComponentPerformance(browser, componentPath, componentName) {
    let page;
    try {
      page = await browser.newPage();

      // Intercept network requests to measure performance
      const navigationTiming = {};
      page.on('load', async () => {
        const metrics = await page.evaluate(() => {
          const perf = performance.getEntriesByType('navigation')[0];
          const paintEntries = performance.getEntriesByType('paint');
          const resourceEntries = performance.getEntriesByType('resource');

          return {
            domContentLoaded: perf?.domContentLoadedEventEnd - perf?.domContentLoadedEventStart,
            loadComplete: perf?.loadEventEnd - perf?.loadEventStart,
            timeToFirstByte: perf?.responseStart - perf?.requestStart,
            resourceCount: resourceEntries.length,
            totalResourceSize: resourceEntries.reduce((sum, r) => sum + (r.transferSize || 0), 0),
          };
        });

        Object.assign(navigationTiming, metrics);
      });

      // Load the component
      const fileUrl = `file://${componentPath.replace(/\\/g, '/')}`;
      const response = await page.goto(fileUrl, {
        waitUntil: 'networkidle',
        timeout: CONFIG.timeout,
      });

      // Measure CSS specificity
      const cssMetrics = await page.evaluate(() => {
        const sheets = Array.from(document.styleSheets);
        let maxSpecificity = 0;
        let ruleCount = 0;
        let cssSize = 0;

        sheets.forEach((sheet) => {
          try {
            const rules = sheet.cssRules;
            ruleCount += rules.length;

            Array.from(rules).forEach((rule) => {
              if (rule.selectorText) {
                const specificity = calculateSpecificity(rule.selectorText);
                maxSpecificity = Math.max(maxSpecificity, specificity);
              }
            });

            if (sheet.href) {
              cssSize += new Blob([sheet.ownerNode.textContent || '']).size;
            }
          } catch (e) {
            // Handle CORS issues
          }
        });

        function calculateSpecificity(selector) {
          const spec = [0, 0, 0, 0];
          const parts = selector.split(/[^\\w#.[:-]/g);

          parts.forEach((part) => {
            if (part.startsWith('#')) spec[1]++;
            else if (part.startsWith('.') || part.startsWith('[')) spec[2]++;
            else if (part.length > 0) spec[3]++;
          });

          return spec[1] * 1000 + spec[2] * 100 + spec[3];
        }

        return {
          cssRules: ruleCount,
          maxSpecificity,
          cssSize,
        };
      });

      // Measure memory and DOM
      const domMetrics = await page.evaluate(() => {
        return {
          domNodes: document.querySelectorAll('*').length,
          headElements: document.head.children.length,
          bodyElements: document.body.children.length,
        };
      });

      // Get HTTP status
      const httpStatus = response?.status() || 0;

      await page.close();

      return {
        success: true,
        httpStatus,
        metrics: {
          ...navigationTiming,
          ...cssMetrics,
          ...domMetrics,
          timestamp: new Date().toISOString(),
        },
      };
    } catch (error) {
      if (page) await page.close();
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }

  /**
   * Check performance against budget
   */
  checkPerformanceBudget(componentName, metrics) {
    const budgets = this.loadPerformanceBudget();
    const budget = budgets.components?.[componentName] || budgets.default;

    const violations = [];

    if (
      budget.maxLoadTimeMs &&
      metrics.domContentLoaded + metrics.loadComplete > budget.maxLoadTimeMs
    ) {
      violations.push({
        metric: 'Load Time',
        actual: metrics.domContentLoaded + metrics.loadComplete,
        budget: budget.maxLoadTimeMs,
        unit: 'ms',
      });
    }

    if (budget.maxDOMNodes && metrics.domNodes > budget.maxDOMNodes) {
      violations.push({
        metric: 'DOM Nodes',
        actual: metrics.domNodes,
        budget: budget.maxDOMNodes,
      });
    }

    if (
      budget.maxCSSSize &&
      metrics.cssSize > budget.maxCSSSize
    ) {
      violations.push({
        metric: 'CSS Size',
        actual: metrics.cssSize,
        budget: budget.maxCSSSize,
        unit: 'bytes',
      });
    }

    return violations;
  }

  /**
   * Load performance budget configuration
   */
  loadPerformanceBudget() {
    try {
      const content = fs.readFileSync(CONFIG.performanceBudgetFile, 'utf-8');
      return JSON.parse(content);
    } catch (err) {
      console.error('Failed to load performance budget:', err.message);
      return { default: {} };
    }
  }

  /**
   * Generate performance report
   */
  generateReport() {
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    // Sort components by performance
    const sortedComponents = Object.entries(this.metrics).sort((a, b) => {
      const aTime = a[1].metrics?.loadComplete || Infinity;
      const bTime = b[1].metrics?.loadComplete || Infinity;
      return bTime - aTime;
    });

    // Calculate statistics
    const loadTimes = sortedComponents
      .map((c) => c[1].metrics?.loadComplete)
      .filter((t) => typeof t === 'number');

    const stats = {
      totalComponents: sortedComponents.length,
      successfulTests: sortedComponents.filter((c) => c[1].success).length,
      failedTests: sortedComponents.filter((c) => !c[1].success).length,
      avgLoadTime: loadTimes.length > 0 ? (loadTimes.reduce((a, b) => a + b) / loadTimes.length).toFixed(2) : 0,
      maxLoadTime: loadTimes.length > 0 ? Math.max(...loadTimes).toFixed(2) : 0,
      minLoadTime: loadTimes.length > 0 ? Math.min(...loadTimes).toFixed(2) : 0,
      violations: this.violations.length,
    };

    // Save JSON report
    const jsonReport = {
      timestamp: this.timestamp,
      stats,
      components: Object.fromEntries(sortedComponents),
      violations: this.violations,
    };

    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'performance-report.json'),
      JSON.stringify(jsonReport, null, 2)
    );

    // Save top slow components
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'slowest-components.json'),
      JSON.stringify(sortedComponents.slice(0, 10), null, 2)
    );

    // Save violations
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'violations.json'),
      JSON.stringify(this.violations, null, 2)
    );

    console.log('\n✅ Performance Report Generated');
    console.log(`📊 Total Components: ${stats.totalComponents}`);
    console.log(`✓ Passed: ${stats.successfulTests}`);
    console.log(`✗ Failed: ${stats.failedTests}`);
    console.log(`⚠️  Violations: ${stats.violations}`);
    console.log(`⏱️  Avg Load Time: ${stats.avgLoadTime}ms`);
    console.log(`\n📂 Reports saved to: ${CONFIG.outputDir}`);

    return stats;
  }

  /**
   * Main execution
   */
  async run() {
    console.log('🚀 Starting Performance Monitoring...\n');

    const components = this.getComponentFiles();
    console.log(`📋 Found ${components.length} components to test\n`);

    const browser = await chromium.launch({ headless: true });

    let processedCount = 0;

    for (const component of components) {
      processedCount++;
      process.stdout.write(`[${processedCount}/${components.length}] Testing ${component.name}... `);

      let result;
      let attempts = 0;

      // Retry logic for failed measurements
      while (attempts < CONFIG.retries) {
        result = await this.measureComponentPerformance(browser, component.path, component.relativePath);
        if (result.success) break;
        attempts++;
      }

      if (result.success) {
        console.log('✓');
        this.metrics[component.relativePath] = result;

        // Check budget violations
        const violations = this.checkPerformanceBudget(component.relativePath, result.metrics);
        if (violations.length > 0) {
          violations.forEach((v) => {
            this.violations.push({
              component: component.name,
              ...v,
            });
          });
        }
      } else {
        console.log(`✗ (${result.error})`);
        this.metrics[component.relativePath] = result;
      }
    }

    await browser.close();

    const stats = this.generateReport();

    // Exit with error code if violations found
    if (stats.violations > 0) {
      console.log('\n⚠️  Performance budget violations detected!');
      process.exit(1);
    }

    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch((err) => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });
}

module.exports = PerformanceMonitor;
