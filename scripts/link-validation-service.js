#!/usr/bin/env node

/**
 * Link Validation Service
 * Validates both external and internal navigation links with integrity checks
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const VALIDATION_REPORTS_DIR = path.join(process.cwd(), 'reports', 'link-validation');
const LINK_VALIDATION_STATE = path.join(process.cwd(), '.link-validation-state.json');

/**
 * Initialize validation directories
 */
function ensureDirectories() {
  if (!fs.existsSync(VALIDATION_REPORTS_DIR)) {
    fs.mkdirSync(VALIDATION_REPORTS_DIR, { recursive: true });
  }
}

/**
 * Get all HTML files in the project
 */
function getAllHTMLFiles() {
  return fs.readdirSync(process.cwd())
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(process.cwd(), file));
}

/**
 * Extract all links from an HTML file
 */
function extractLinksFromHTML(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const links = [];

  // Match href attributes
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    links.push({
      href,
      type: classifyLink(href),
      file: path.basename(filePath)
    });
  }

  return links;
}

/**
 * Classify link type (internal, external, fragment, mailto, etc.)
 */
function classifyLink(href) {
  if (!href || href.trim() === '') return 'empty';
  if (href.startsWith('http://') || href.startsWith('https://')) return 'external';
  if (href.startsWith('mailto:')) return 'mailto';
  if (href.startsWith('tel:')) return 'tel';
  if (href.startsWith('#')) return 'fragment';
  if (href.startsWith('/')) return 'absolute-internal';
  if (href.startsWith('./') || href.startsWith('../')) return 'relative-internal';
  if (href.endsWith('.html') || href.includes('.html')) return 'internal-file';
  return 'internal-unknown';
}

/**
 * Validate internal navigation link
 */
function validateInternalLink(href, sourceFile) {
  const issues = [];

  // Handle different internal link types
  if (href.startsWith('#')) {
    // Fragment link - check if element exists in same file
    const elementId = href.substring(1);
    if (!elementId) {
      issues.push({
        severity: 'error',
        type: 'empty-fragment',
        message: 'Fragment identifier is empty'
      });
    }
    // Note: Cannot verify element existence from server-side, so mark as warning
    issues.push({
      severity: 'warning',
      type: 'unverified-fragment',
      message: `Fragment #${elementId} cannot be verified server-side`
    });
  } else if (href.includes('.html')) {
    // HTML file link
    const targetPath = href.split('#')[0]; // Remove fragment
    const resolvedPath = path.resolve(path.dirname(sourceFile), targetPath);
    const normalizedPath = path.normalize(resolvedPath);

    if (!fs.existsSync(normalizedPath)) {
      issues.push({
        severity: 'error',
        type: 'broken-link',
        message: `Target file does not exist: ${targetPath}`
      });
    }

    // Check for case sensitivity issues on case-sensitive systems
    const targetFile = path.basename(normalizedPath);
    if (fs.existsSync(path.dirname(normalizedPath))) {
      const actualFiles = fs.readdirSync(path.dirname(normalizedPath));
      const caseInsensitiveMatch = actualFiles.find(f => f.toLowerCase() === targetFile.toLowerCase());
      
      if (caseInsensitiveMatch && caseInsensitiveMatch !== targetFile) {
        issues.push({
          severity: 'warning',
          type: 'case-sensitivity',
          message: `Case mismatch: expected '${caseInsensitiveMatch}' but got '${targetFile}'`
        });
      }
    }
  }

  return issues;
}

/**
 * Validate external link format
 */
function validateExternalLink(href) {
  const issues = [];

  // Basic URL validation
  try {
    new URL(href);
  } catch (error) {
    issues.push({
      severity: 'error',
      type: 'invalid-url-format',
      message: `Invalid URL format: ${error.message}`
    });
  }

  // Check for incomplete protocols
  if (href.startsWith('http:/') && !href.startsWith('http://')) {
    issues.push({
      severity: 'error',
      type: 'malformed-protocol',
      message: 'Malformed http protocol - should be http://'
    });
  }

  if (href.startsWith('https:/') && !href.startsWith('https://')) {
    issues.push({
      severity: 'error',
      type: 'malformed-protocol',
      message: 'Malformed https protocol - should be https://'
    });
  }

  return issues;
}

/**
 * Validate all links in project
 */
function validateAllLinks(options = {}) {
  ensureDirectories();

  const { includeExternal = true, includeInternal = true, strict = false } = options;
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFiles: 0,
      totalLinks: 0,
      errors: 0,
      warnings: 0,
      brokenInternalLinks: 0,
      invalidExternalLinks: 0
    },
    files: [],
    linksByType: {},
    issues: []
  };

  const htmlFiles = getAllHTMLFiles();
  report.summary.totalFiles = htmlFiles.length;

  for (const filePath of htmlFiles) {
    const fileName = path.basename(filePath);
    const links = extractLinksFromHTML(filePath);
    const fileReport = {
      file: fileName,
      linkCount: links.length,
      issues: []
    };

    for (const link of links) {
      report.summary.totalLinks++;

      // Initialize link type counter
      if (!report.linksByType[link.type]) {
        report.linksByType[link.type] = 0;
      }
      report.linksByType[link.type]++;

      let linkIssues = [];

      // Validate internal links
      if (includeInternal && (link.type.includes('internal') || link.type === 'fragment')) {
        linkIssues = validateInternalLink(link.href, filePath);
      }

      // Validate external links
      if (includeExternal && link.type === 'external') {
        linkIssues = validateExternalLink(link.href);
      }

      // Track issues
      for (const issue of linkIssues) {
        if (issue.severity === 'error') {
          report.summary.errors++;
          if (link.type.includes('internal')) {
            report.summary.brokenInternalLinks++;
          } else if (link.type === 'external') {
            report.summary.invalidExternalLinks++;
          }
        } else if (issue.severity === 'warning') {
          report.summary.warnings++;
        }

        fileReport.issues.push({
          href: link.href,
          linkType: link.type,
          ...issue
        });

        report.issues.push({
          file: fileName,
          href: link.href,
          linkType: link.type,
          ...issue
        });
      }
    }

    if (fileReport.issues.length > 0) {
      report.files.push(fileReport);
    }
  }

  // Save report
  const reportPath = path.join(VALIDATION_REPORTS_DIR, `link-validation-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  // Save state
  const state = {
    lastValidation: new Date().toISOString(),
    lastReportPath: reportPath,
    summary: report.summary
  };
  fs.writeFileSync(LINK_VALIDATION_STATE, JSON.stringify(state, null, 2));

  return report;
}

/**
 * Generate internal navigation integrity report
 */
function generateInternalNavigationReport() {
  const report = {
    timestamp: new Date().toISOString(),
    internalNavigation: {
      total: 0,
      valid: 0,
      broken: 0,
      caseSensitivityIssues: 0,
      unverifiedFragments: 0
    },
    details: []
  };

  const htmlFiles = getAllHTMLFiles();

  for (const filePath of htmlFiles) {
    const links = extractLinksFromHTML(filePath);

    for (const link of links) {
      // Only check internal links
      if (!link.type.includes('internal') && link.type !== 'fragment') continue;

      report.internalNavigation.total++;

      const issues = validateInternalLink(link.href, filePath);

      if (issues.length === 0) {
        report.internalNavigation.valid++;
      } else {
        for (const issue of issues) {
          if (issue.type === 'broken-link') {
            report.internalNavigation.broken++;
          } else if (issue.type === 'case-sensitivity') {
            report.internalNavigation.caseSensitivityIssues++;
          } else if (issue.type === 'unverified-fragment') {
            report.internalNavigation.unverifiedFragments++;
          }
        }

        report.details.push({
          file: path.basename(filePath),
          href: link.href,
          issues
        });
      }
    }
  }

  return report;
}

module.exports = {
  validateAllLinks,
  generateInternalNavigationReport,
  extractLinksFromHTML,
  validateInternalLink,
  validateExternalLink
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'validate';

  try {
    switch (command) {
      case 'validate': {
        const report = validateAllLinks({ includeExternal: true, includeInternal: true });
        console.log('Link Validation Report:');
        console.log(`- Total files scanned: ${report.summary.totalFiles}`);
        console.log(`- Total links found: ${report.summary.totalLinks}`);
        console.log(`- Errors: ${report.summary.errors}`);
        console.log(`- Warnings: ${report.summary.warnings}`);
        console.log(`- Broken internal links: ${report.summary.brokenInternalLinks}`);
        console.log(`- Invalid external links: ${report.summary.invalidExternalLinks}`);
        console.log('\nLink distribution:');
        for (const [type, count] of Object.entries(report.linksByType)) {
          console.log(`  - ${type}: ${count}`);
        }
        if (report.summary.errors > 0) {
          process.exit(1);
        }
        break;
      }
      case 'internal': {
        const report = generateInternalNavigationReport();
        console.log('Internal Navigation Integrity Report:');
        console.log(`- Total internal links: ${report.internalNavigation.total}`);
        console.log(`- Valid: ${report.internalNavigation.valid}`);
        console.log(`- Broken: ${report.internalNavigation.broken}`);
        console.log(`- Case sensitivity issues: ${report.internalNavigation.caseSensitivityIssues}`);
        console.log(`- Unverified fragments: ${report.internalNavigation.unverifiedFragments}`);
        
        if (report.internalNavigation.broken > 0) {
          console.log('\nBroken links found:');
          for (const detail of report.details) {
            for (const issue of detail.issues) {
              if (issue.type === 'broken-link') {
                console.log(`  - ${detail.file}: ${detail.href}`);
              }
            }
          }
          process.exit(1);
        }
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: validate, internal');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
