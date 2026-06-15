#!/usr/bin/env node

/**
 * Internal Link Integrity Checker
 * Continuous monitoring of internal navigation links with detailed diagnostics
 */

const fs = require('fs');
const path = require('path');
const { extractLinksFromHTML, validateInternalLink } = require('./link-validation-service');

const INTEGRITY_REPORT_DIR = path.join(process.cwd(), 'reports', 'link-integrity');
const LINK_MAP_FILE = path.join(process.cwd(), '.link-map.json');

/**
 * Build comprehensive link map for navigation analysis
 */
function buildLinkMap() {
  const linkMap = {
    timestamp: new Date().toISOString(),
    pages: {},
    brokenLinks: [],
    orphanedPages: [],
    navigationGraph: {}
  };

  const htmlFiles = fs.readdirSync(process.cwd())
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(process.cwd(), file));

  const pageSet = new Set(htmlFiles.map(f => path.basename(f)));

  // Build map of all pages and their links
  for (const filePath of htmlFiles) {
    const fileName = path.basename(filePath);
    const links = extractLinksFromHTML(filePath);
    const internalLinks = links.filter(l => 
      l.type.includes('internal') || l.type === 'fragment'
    );

    linkMap.pages[fileName] = {
      internalLinks: internalLinks.map(l => l.href),
      externalLinks: links.filter(l => l.type === 'external').map(l => l.href),
      fragmentLinks: links.filter(l => l.type === 'fragment').map(l => l.href),
      totalLinks: links.length
    };

    linkMap.navigationGraph[fileName] = [];

    // Check each internal link
    for (const link of internalLinks) {
      const issues = validateInternalLink(link.href, filePath);

      if (issues.length > 0) {
        const errorIssues = issues.filter(i => i.type === 'broken-link');
        if (errorIssues.length > 0) {
          linkMap.brokenLinks.push({
            sourceFile: fileName,
            targetLink: link.href,
            issues
          });
        }
      } else {
        // Add to navigation graph
        const targetFile = path.basename(link.href.split('#')[0] || link.href);
        if (targetFile && pageSet.has(targetFile)) {
          linkMap.navigationGraph[fileName].push(targetFile);
        }
      }
    }
  }

  // Find orphaned pages (not linked from any page)
  for (const fileName of pageSet) {
    const isLinked = Object.values(linkMap.navigationGraph).some(targets => 
      targets.includes(fileName)
    );

    const isHomePage = fileName === 'index.html';
    
    if (!isLinked && !isHomePage) {
      linkMap.orphanedPages.push(fileName);
    }
  }

  // Ensure report directory exists
  if (!fs.existsSync(INTEGRITY_REPORT_DIR)) {
    fs.mkdirSync(INTEGRITY_REPORT_DIR, { recursive: true });
  }

  // Save link map
  fs.writeFileSync(LINK_MAP_FILE, JSON.stringify(linkMap, null, 2));

  return linkMap;
}

/**
 * Generate detailed integrity report
 */
function generateIntegrityReport() {
  const linkMap = buildLinkMap();

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: Object.keys(linkMap.pages).length,
      totalInternalLinks: Object.values(linkMap.pages).reduce((sum, p) => 
        sum + p.internalLinks.length, 0
      ),
      brokenLinkCount: linkMap.brokenLinks.length,
      orphanedPageCount: linkMap.orphanedPages.length,
      integrityScore: 0
    },
    issues: {
      brokenLinks: linkMap.brokenLinks,
      orphanedPages: linkMap.orphanedPages,
      recommendations: []
    },
    navigationAnalysis: {
      graph: linkMap.navigationGraph,
      reachability: {}
    }
  };

  // Calculate integrity score
  const totalLinks = report.summary.totalInternalLinks;
  if (totalLinks > 0) {
    report.summary.integrityScore = Math.round(
      ((totalLinks - report.summary.brokenLinkCount) / totalLinks) * 100
    );
  }

  // Analyze page reachability
  for (const page of Object.keys(linkMap.pages)) {
    report.navigationAnalysis.reachability[page] = {
      linksIn: 0,
      linksOut: linkMap.navigationGraph[page].length
    };
  }

  for (const [source, targets] of Object.entries(linkMap.navigationGraph)) {
    for (const target of targets) {
      if (report.navigationAnalysis.reachability[target]) {
        report.navigationAnalysis.reachability[target].linksIn++;
      }
    }
  }

  // Generate recommendations
  if (report.summary.brokenLinkCount > 0) {
    report.issues.recommendations.push({
      severity: 'error',
      message: `${report.summary.brokenLinkCount} broken internal links found`,
      action: 'Fix broken links to maintain navigation integrity'
    });
  }

  if (report.summary.orphanedPageCount > 0) {
    report.issues.recommendations.push({
      severity: 'warning',
      message: `${report.summary.orphanedPageCount} orphaned pages found`,
      action: 'Add navigation links to orphaned pages or remove them'
    });
  }

  // Check for unreachable pages
  const unreachablePages = Object.entries(report.navigationAnalysis.reachability)
    .filter(([page, stats]) => stats.linksIn === 0 && page !== 'index.html')
    .map(([page]) => page);

  if (unreachablePages.length > 0) {
    report.issues.recommendations.push({
      severity: 'info',
      message: `${unreachablePages.length} pages have no incoming links`,
      pages: unreachablePages,
      action: 'Consider adding links to improve discoverability'
    });
  }

  if (report.summary.integrityScore === 100) {
    report.issues.recommendations.push({
      severity: 'success',
      message: 'All internal navigation links are valid',
      action: 'Continue monitoring for new links'
    });
  }

  return report;
}

/**
 * Monitor link changes over time
 */
function monitorLinkChanges() {
  const report = generateIntegrityReport();
  const reportPath = path.join(INTEGRITY_REPORT_DIR, `integrity-${Date.now()}.json`);
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  return {
    reportPath,
    report
  };
}

/**
 * Compare link integrity between two points in time
 */
function compareLinkIntegrity(reportPath1, reportPath2) {
  const report1 = JSON.parse(fs.readFileSync(reportPath1, 'utf8'));
  const report2 = JSON.parse(fs.readFileSync(reportPath2, 'utf8'));

  return {
    comparison: {
      timestamp1: report1.timestamp,
      timestamp2: report2.timestamp,
      summary: {
        brokenLinkDelta: report2.summary.brokenLinkCount - report1.summary.brokenLinkCount,
        orphanedPageDelta: report2.summary.orphanedPageCount - report1.summary.orphanedPageCount,
        integrityScoreDelta: report2.summary.integrityScore - report1.summary.integrityScore
      },
      newBrokenLinks: report2.issues.brokenLinks.filter(l =>
        !report1.issues.brokenLinks.some(r => r.sourceFile === l.sourceFile && r.targetLink === l.targetLink)
      ),
      fixedLinks: report1.issues.brokenLinks.filter(l =>
        !report2.issues.brokenLinks.some(r => r.sourceFile === l.sourceFile && r.targetLink === l.targetLink)
      )
    }
  };
}

module.exports = {
  buildLinkMap,
  generateIntegrityReport,
  monitorLinkChanges,
  compareLinkIntegrity
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'check';

  try {
    switch (command) {
      case 'check': {
        const result = monitorLinkChanges();
        const report = result.report;
        
        console.log('Internal Link Integrity Check:');
        console.log(`- Total pages: ${report.summary.totalPages}`);
        console.log(`- Total internal links: ${report.summary.totalInternalLinks}`);
        console.log(`- Broken links: ${report.summary.brokenLinkCount}`);
        console.log(`- Orphaned pages: ${report.summary.orphanedPageCount}`);
        console.log(`- Integrity score: ${report.summary.integrityScore}%`);
        console.log(`\nReport saved: ${result.reportPath}`);

        if (report.summary.brokenLinkCount > 0) {
          console.log('\nBroken links:');
          for (const broken of report.issues.brokenLinks) {
            console.log(`  - ${broken.sourceFile} -> ${broken.targetLink}`);
          }
          process.exit(1);
        }

        if (report.issues.recommendations.length > 0) {
          console.log('\nRecommendations:');
          for (const rec of report.issues.recommendations) {
            console.log(`  [${rec.severity}] ${rec.message}`);
          }
        }
        break;
      }
      case 'map': {
        const linkMap = buildLinkMap();
        console.log('Link Map generated:');
        console.log(`- Pages: ${Object.keys(linkMap.pages).length}`);
        console.log(`- Navigation graph nodes: ${Object.keys(linkMap.navigationGraph).length}`);
        console.log(`- Orphaned pages: ${linkMap.orphanedPages.length}`);
        console.log(`- Broken links: ${linkMap.brokenLinks.length}`);
        console.log(`\nLink map saved to: ${LINK_MAP_FILE}`);
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: check, map');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
