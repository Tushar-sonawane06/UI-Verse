#!/usr/bin/env node
/**
 * Lighthouse CI Report Generator
 * 
 * Compares Core Web Vitals (FCP, LCP, TBT, CLS) against baseline
 * and generates markdown comparison tables for PR comments.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

// Core Web Vitals thresholds (in milliseconds for timing metrics)
const THRESHOLDS = {
  'first-contentful-paint': { warn: 1800, error: 3000 },
  'largest-contentful-paint': { warn: 2500, error: 4000 },
  'total-blocking-time': { warn: 300, error: 500 },
  'cumulative-layout-shift': { warn: 0.1, error: 0.25 },
  'speed-index': { warn: 3400, error: 5800 },
  'interactive': { warn: 3800, error: 7300 },
  'max-potential-fid': { warn: 300, error: 500 }
};

// Score thresholds (0-1)
const SCORE_THRESHOLDS = {
  performance: { warn: 0.85, error: 0.8 },
  accessibility: { warn: 0.9, error: 0.85 },
  'best-practices': { warn: 0.9, error: 0.85 },
  seo: { warn: 0.9, error: 0.85 }
};

/**
 * Parse Lighthouse JSON report
 */
function parseLighthouseReport(reportPath) {
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  
  const metrics = {};
  
  // Extract audits
  const audits = report.audits || {};
  
  // Core Web Vitals
  const vitalMappings = {
    'first-contentful-paint': 'firstContentfulPaint',
    'largest-contentful-paint': 'largestContentfulPaint',
    'total-blocking-time': 'totalBlockingTime',
    'cumulative-layout-shift': 'cumulativeLayoutShift',
    'speed-index': 'speedIndex',
    'interactive': 'interactive',
    'max-potential-fid': 'maxPotentialFid'
  };
  
  for (const [key, auditKey] of Object.entries(vitalMappings)) {
    if (audits[auditKey]) {
      const audit = audits[auditKey];
      metrics[key] = {
        value: audit.numericValue,
        displayValue: audit.displayValue || `${audit.numericValue.toFixed(0)}ms`,
        score: audit.score
      };
    }
  }
  
  // Categories (scores)
  const categories = report.categories || {};
  for (const [name, threshold] of Object.entries(SCORE_THRESHOLDS)) {
    if (categories[name]) {
      metrics[`score:${name}`] = {
        value: categories[name].score * 100,
        displayValue: `${(categories[name].score * 100).toFixed(0)}`,
        score: categories[name].score
      };
    }
  }
  
  return {
    url: report.finalUrl,
    fetchTime: report.fetchTime,
    metrics
  };
}

/**
 * Compare current vs baseline metrics
 */
function compareMetrics(current, baseline) {
  const comparison = {
    regressions: [],
    improvements: [],
    unchanged: []
  };
  
  const allKeys = new Set([
    ...Object.keys(current?.metrics || {}),
    ...Object.keys(baseline?.metrics || {})
  ]);
  
  for (const key of allKeys) {
    const currentValue = current?.metrics?.[key]?.value;
    const baselineValue = baseline?.metrics?.[key]?.value;
    
    if (currentValue === undefined || baselineValue === undefined) {
      continue;
    }
    
    const diff = currentValue - baselineValue;
    const percentChange = baselineValue !== 0 
      ? ((diff / baselineValue) * 100).toFixed(1)
      : 'N/A';
    
    const entry = {
      metric: key,
      baseline: baselineValue,
      current: currentValue,
      diff,
      percentChange,
      status: 'unchanged'
    };
    
    // Check for regression or improvement
    // For most metrics, higher is worse
    const higherIsWorse = !key.includes('score:');
    
    if (higherIsWorse) {
      if (diff > 0) {
        entry.status = 'regression';
        comparison.regressions.push(entry);
      } else if (diff < 0) {
        entry.status = 'improvement';
        comparison.improvements.push(entry);
      } else {
        comparison.unchanged.push(entry);
      }
    } else {
      // For scores, higher is better
      if (diff > 0) {
        entry.status = 'improvement';
        comparison.improvements.push(entry);
      } else if (diff < 0) {
        entry.status = 'regression';
        comparison.regressions.push(entry);
      } else {
        comparison.unchanged.push(entry);
      }
    }
  }
  
  return comparison;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(comparisons, options = {}) {
  const { prNumber, commitSha } = options;
  
  let md = `## Lighthouse CI Performance Report\n\n`;
  md += `📊 Generated: ${new Date().toISOString()}\n\n`;
  
  if (commitSha) {
    md += `Commit: \`${commitSha}\`\n\n`;
  }
  
  // Summary
  const totalRegressions = comparisons.reduce((sum, c) => sum + c.comparison.regressions.length, 0);
  const totalImprovements = comparisons.reduce((sum, c) => sum + c.comparison.improvements.length, 0);
  
  md += `### Summary\n\n`;
  md += `| Metric | Baseline | Current | Change | Status |\n`;
  md += `|--------|----------|---------|--------|--------|\n`;
  
  for (const { page, comparison } of comparisons) {
    md += `\n#### ${page}\n\n`;
    
    if (comparison.regressions.length === 0 && comparison.improvements.length === 0) {
      md += `✅ No changes detected\n\n`;
      continue;
    }
    
    // Show all metrics
    const allMetrics = [
      ...comparison.regressions.map(m => ({ ...m, status: '❌ Regression' })),
      ...comparison.improvements.map(m => ({ ...m, status: '✅ Improvement' })),
      ...comparison.unchanged
    ];
    
    for (const metric of allMetrics) {
      const baselineDisplay = formatValue(metric.metric, metric.baseline);
      const currentDisplay = formatValue(metric.metric, metric.current);
      const changeDisplay = formatChange(metric.metric, metric.diff, metric.percentChange);
      
      md += `| \`${metric.metric}\` | ${baselineDisplay} | ${currentDisplay} | ${changeDisplay} | ${metric.status} |\n`;
    }
  }
  
  // Overall verdict
  md += `\n---\n\n`;
  md += `### Verdict\n\n`;
  
  if (totalRegressions === 0) {
    md += `✅ **No regressions detected!** Performance is stable or improved.\n`;
  } else {
    md += `⚠️ **${totalRegressions} regression(s) detected.**\n\n`;
    md += `| Regression | Impact |\n`;
    md += `|------------|--------|\n`;
    
    for (const { comparison } of comparisons) {
      for (const reg of comparison.regressions) {
        const threshold = THRESHOLDS[reg.metric] || {};
        const impact = reg.diff > (threshold.error || 500) ? '🔴 High' : '🟡 Medium';
        md += `| ${reg.metric} | ${impact} (${formatValue(reg.metric, reg.diff)} increase) |\n`;
      }
    }
    
    md += `\n`;
    if (totalRegressions > 0) {
      md += `> ⚠️ **Warning:** Performance regressions may block merge. Consider optimizing before merging.\n`;
    }
  }
  
  // Footer
  md += `\n---\n`;
  md += `*Generated by Lighthouse CI Report Generator*\n`;
  
  return md;
}

/**
 * Format metric value for display
 */
function formatValue(metric, value) {
  if (value === undefined || value === null) return 'N/A';
  
  if (metric.includes('score:')) {
    return `${value.toFixed(0)}%`;
  }
  
  if (metric === 'cumulative-layout-shift') {
    return value.toFixed(4);
  }
  
  return `${value.toFixed(0)}ms`;
}

/**
 * Format change for display
 */
function formatChange(metric, diff, percentChange) {
  if (diff === 0) return '—';
  
  const sign = diff > 0 ? '+' : '';
  const value = formatValue(metric, Math.abs(diff));
  return `${sign}${value} (${sign}${percentChange}%)`;
}

/**
 * Load baseline from file
 */
function loadBaseline(baselinePath) {
  if (!fs.existsSync(baselinePath)) {
    return null;
  }
  
  try {
    const data = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
    return data;
  } catch (e) {
    console.warn('Failed to load baseline:', e.message);
    return null;
  }
}

/**
 * Find Lighthouse reports in directory
 */
function findReports(dir) {
  const reports = [];
  
  if (!fs.existsSync(dir)) {
    return reports;
  }
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.json') && !file.includes('baseline')) {
      const fullPath = path.join(dir, file);
      try {
        const report = parseLighthouseReport(fullPath);
        reports.push(report);
      } catch (e) {
        console.warn(`Failed to parse ${file}:`, e.message);
      }
    }
  }
  
  return reports;
}

/**
 * Check for regressions and generate output
 */
function checkRegressions(comparisons, outputDir) {
  const regressions = [];
  
  for (const { comparison } of comparisons) {
    for (const reg of comparison.regressions) {
      const threshold = THRESHOLDS[reg.metric];
      
      // Check if regression exceeds threshold
      if (threshold && Math.abs(reg.diff) > threshold.error) {
        regressions.push({
          metric: reg.metric,
          diff: reg.diff,
          threshold: threshold.error,
          page: reg.page
        });
      }
    }
  }
  
  // Write regression file if there are issues
  if (regressions.length > 0) {
    const regressionFile = path.join(outputDir, 'regression.txt');
    let content = `Performance Regressions Detected:\n\n`;
    
    for (const reg of regressions) {
      content += `- ${reg.metric}: +${reg.diff.toFixed(0)}ms (threshold: ${reg.threshold}ms)\n`;
    }
    
    fs.writeFileSync(regressionFile, content, 'utf8');
    return true;
  }
  
  return false;
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);
  const options = {
    currentDir: path.join(ROOT, '.lighthouseci'),
    baselinePath: path.join(ROOT, '.lighthouseci', 'baseline.json'),
    outputDir: path.join(ROOT, '.lighthouseci'),
    outputFile: 'comparison.md'
  };
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--current') {
      options.currentDir = args[++i];
    } else if (args[i] === '--baseline') {
      options.baselinePath = args[++i];
    } else if (args[i] === '--output' || args[i] === '-o') {
      options.outputFile = args[++i];
    } else if (args[i] === '--help' || args[i] === '-h') {
      printHelp();
      process.exit(0);
    }
  }
  
  console.log('🔍 Lighthouse CI Report Generator');
  console.log('='.repeat(50));
  console.log('');
  
  // Load baseline
  const baseline = loadBaseline(options.baselinePath);
  if (baseline) {
    console.log(`✓ Baseline loaded: ${Object.keys(baseline.pages || {}).length} pages`);
  } else {
    console.log('⚠ No baseline found, this will be the new baseline');
  }
  
  // Find current reports
  const currentReports = findReports(options.currentDir);
  console.log(`✓ Found ${currentReports.length} current reports`);
  console.log('');
  
  if (currentReports.length === 0) {
    console.log('No reports to compare');
    return;
  }
  
  // Compare reports
  const comparisons = [];
  
  for (const report of currentReports) {
    const pageName = extractPageName(report.url);
    const baselinePage = baseline?.pages?.[pageName];
    
    const comparison = compareMetrics(report, baselinePage);
    
    comparisons.push({
      page: pageName,
      report,
      baseline: baselinePage,
      comparison
    });
    
    // Log summary
    console.log(`📄 ${pageName}`);
    console.log(`   Regressions: ${comparison.regressions.length}`);
    console.log(`   Improvements: ${comparison.improvements.length}`);
  }
  
  // Generate markdown report
  const markdown = generateMarkdownReport(comparisons, {
    prNumber: process.env.PR_NUMBER,
    commitSha: process.env.GITHUB_SHA
  });
  
  // Write report
  const outputPath = path.join(options.outputDir, options.outputFile);
  fs.writeFileSync(outputPath, markdown, 'utf8');
  console.log('');
  console.log(`✓ Report written to: ${outputPath}`);
  
  // Check for blocking regressions
  const hasBlockingRegressions = checkRegressions(comparisons, options.outputDir);
  
  if (hasBlockingRegressions) {
    console.log('');
    console.log('⚠️  Blocking regressions detected!');
    process.exit(1);
  }
  
  console.log('');
  console.log('✅ All checks passed!');
}

function extractPageName(url) {
  try {
    const pathname = new URL(url).pathname;
    return pathname.replace(/^\//, '') || 'index.html';
  } catch {
    return url;
  }
}

function printHelp() {
  console.log(`
Lighthouse CI Report Generator

Usage:
  node lighthouse-report-generator.js [options]

Options:
  --current <dir>    Directory with current Lighthouse reports (default: .lighthouseci)
  --baseline <file>  Path to baseline JSON file (default: .lighthouseci/baseline.json)
  -o, --output <file> Output file name (default: comparison.md)
  -h, --help         Show this help message

Examples:
  # Generate comparison report
  node lighthouse-report-generator.js
  
  # Custom paths
  node lighthouse-report-generator.js --current ./lighthouse-results --baseline ./baseline.json
  `);
}

// Export for programmatic use
module.exports = { 
  parseLighthouseReport, 
  compareMetrics, 
  generateMarkdownReport,
  checkRegressions 
};

// Run if called directly
if (require.main === module) {
  main();
}