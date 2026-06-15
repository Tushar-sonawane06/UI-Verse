#!/usr/bin/env node

/**
 * Inline Asset Analyzer
 * Comprehensive analysis of inline assets and optimization recommendations
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ANALYSIS_REPORTS_DIR = path.join(process.cwd(), 'reports', 'inline-assets');

/**
 * Initialize analysis infrastructure
 */
function ensureAnalysisDir() {
  if (!fs.existsSync(ANALYSIS_REPORTS_DIR)) {
    fs.mkdirSync(ANALYSIS_REPORTS_DIR, { recursive: true });
  }
}

/**
 * Parse and analyze inline assets from HTML
 */
function analyzeInlineAssets(htmlFile) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  const fileName = path.basename(htmlFile);
  const analysis = {
    file: fileName,
    filePath: htmlFile,
    scripts: {
      count: 0,
      totalSize: 0,
      items: []
    },
    styles: {
      count: 0,
      totalSize: 0,
      items: []
    },
    statistics: {
      duplicateScripts: 0,
      duplicateStyles: 0,
      compressibleScripts: 0,
      compressibleStyles: 0
    }
  };

  // Analyze inline scripts
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  const scriptHashes = new Map();
  let match;

  while ((match = scriptRegex.exec(content)) !== null) {
    if (!match[0].includes('src=')) {
      const scriptContent = match[1];
      const size = Buffer.byteLength(scriptContent, 'utf8');
      const hash = crypto.createHash('sha256').update(scriptContent).digest('hex');

      analysis.scripts.count++;
      analysis.scripts.totalSize += size;

      const compressedSize = getEstimatedCompressedSize(scriptContent);
      const isDuplicate = scriptHashes.has(hash);

      if (isDuplicate) {
        analysis.statistics.duplicateScripts++;
      }

      scriptHashes.set(hash, {
        index: analysis.scripts.count,
        isDuplicate
      });

      analysis.scripts.items.push({
        index: analysis.scripts.count,
        size,
        compressedSize,
        hash: hash.substring(0, 8),
        isDuplicate,
        preview: scriptContent.substring(0, 50).replace(/\n/g, ' '),
        lines: scriptContent.split('\n').length
      });

      if (compressedSize < size * 0.7) {
        analysis.statistics.compressibleScripts++;
      }
    }
  }

  // Analyze inline styles
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const styleHashes = new Map();

  while ((match = styleRegex.exec(content)) !== null) {
    const styleContent = match[1];
    const size = Buffer.byteLength(styleContent, 'utf8');
    const hash = crypto.createHash('sha256').update(styleContent).digest('hex');

    analysis.styles.count++;
    analysis.styles.totalSize += size;

    const compressedSize = getEstimatedCompressedSize(styleContent);
    const isDuplicate = styleHashes.has(hash);

    if (isDuplicate) {
      analysis.statistics.duplicateStyles++;
    }

    styleHashes.set(hash, {
      index: analysis.styles.count,
      isDuplicate
    });

    analysis.styles.items.push({
      index: analysis.styles.count,
      size,
      compressedSize,
      hash: hash.substring(0, 8),
      isDuplicate,
      preview: styleContent.substring(0, 50).replace(/\n/g, ' '),
      lines: styleContent.split('\n').length
    });

    if (compressedSize < size * 0.7) {
      analysis.statistics.compressibleStyles++;
    }
  }

  return analysis;
}

/**
 * Estimate compressed size using simple compression ratio
 */
function getEstimatedCompressedSize(content) {
  // Simple gzip-like compression estimation
  // Actual compression typically achieves 60-75% reduction for text
  return Math.ceil(content.length * 0.65);
}

/**
 * Analyze all HTML files for inline assets
 */
function analyzeAllInlineAssets() {
  ensureAnalysisDir();

  const htmlFiles = fs.readdirSync(process.cwd())
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(process.cwd(), file));

  const fullAnalysis = {
    timestamp: new Date().toISOString(),
    files: [],
    summary: {
      totalFiles: htmlFiles.length,
      filesWithInlineScripts: 0,
      filesWithInlineStyles: 0,
      totalInlineScriptSize: 0,
      totalInlineStyleSize: 0,
      totalDuplicateScripts: 0,
      totalDuplicateStyles: 0,
      totalCompressibleScripts: 0,
      totalCompressibleStyles: 0,
      potentialSavings: 0
    }
  };

  for (const htmlFile of htmlFiles) {
    const analysis = analyzeInlineAssets(htmlFile);
    fullAnalysis.files.push(analysis);

    if (analysis.scripts.count > 0) {
      fullAnalysis.summary.filesWithInlineScripts++;
      fullAnalysis.summary.totalInlineScriptSize += analysis.scripts.totalSize;
      fullAnalysis.summary.totalDuplicateScripts += analysis.statistics.duplicateScripts;
      fullAnalysis.summary.totalCompressibleScripts += analysis.statistics.compressibleScripts;
    }

    if (analysis.styles.count > 0) {
      fullAnalysis.summary.filesWithInlineStyles++;
      fullAnalysis.summary.totalInlineStyleSize += analysis.styles.totalSize;
      fullAnalysis.summary.totalDuplicateStyles += analysis.statistics.duplicateStyles;
      fullAnalysis.summary.totalCompressibleStyles += analysis.statistics.compressibleStyles;
    }
  }

  // Calculate potential savings
  fullAnalysis.summary.potentialSavings = 
    Math.ceil((fullAnalysis.summary.totalInlineScriptSize + fullAnalysis.summary.totalInlineStyleSize) * 0.35);

  // Save analysis report
  const reportPath = path.join(ANALYSIS_REPORTS_DIR, `inline-analysis-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(fullAnalysis, null, 2));

  return fullAnalysis;
}

/**
 * Generate optimization recommendations
 */
function generateOptimizationRecommendations() {
  const analysis = analyzeAllInlineAssets();
  const recommendations = {
    timestamp: analysis.timestamp,
    recommendations: [],
    summary: {
      criticalActions: 0,
      optimizations: 0
    }
  };

  // Check for large inline scripts
  if (analysis.summary.totalInlineScriptSize > 50000) {
    recommendations.recommendations.push({
      severity: 'critical',
      type: 'size',
      message: `${(analysis.summary.totalInlineScriptSize / 1024).toFixed(2)} KB of inline JavaScript`,
      action: 'Extract inline scripts to external files for better caching and reusability',
      estimatedSavings: Math.ceil(analysis.summary.totalInlineScriptSize * 0.2),
      files: analysis.files
        .filter(f => f.scripts.totalSize > 0)
        .map(f => ({ file: f.file, size: f.scripts.totalSize }))
    });
    recommendations.summary.criticalActions++;
  }

  // Check for large inline styles
  if (analysis.summary.totalInlineStyleSize > 30000) {
    recommendations.recommendations.push({
      severity: 'critical',
      type: 'size',
      message: `${(analysis.summary.totalInlineStyleSize / 1024).toFixed(2)} KB of inline CSS`,
      action: 'Extract inline styles to external stylesheets',
      estimatedSavings: Math.ceil(analysis.summary.totalInlineStyleSize * 0.2),
      files: analysis.files
        .filter(f => f.styles.totalSize > 0)
        .map(f => ({ file: f.file, size: f.styles.totalSize }))
    });
    recommendations.summary.criticalActions++;
  }

  // Check for duplicate inline assets
  if (analysis.summary.totalDuplicateScripts > 0) {
    recommendations.recommendations.push({
      severity: 'warning',
      type: 'duplication',
      message: `${analysis.summary.totalDuplicateScripts} duplicate inline scripts detected`,
      action: 'Consolidate duplicate inline scripts into single external file',
      estimatedSavings: Math.ceil(analysis.summary.totalInlineScriptSize * 0.1)
    });
    recommendations.summary.optimizations++;
  }

  if (analysis.summary.totalDuplicateStyles > 0) {
    recommendations.recommendations.push({
      severity: 'warning',
      type: 'duplication',
      message: `${analysis.summary.totalDuplicateStyles} duplicate inline styles detected`,
      action: 'Consolidate duplicate inline styles into shared stylesheet',
      estimatedSavings: Math.ceil(analysis.summary.totalInlineStyleSize * 0.1)
    });
    recommendations.summary.optimizations++;
  }

  // Check for compressible assets
  if (analysis.summary.totalCompressibleScripts > 0) {
    recommendations.recommendations.push({
      severity: 'info',
      type: 'compression',
      message: `${analysis.summary.totalCompressibleScripts} inline scripts could benefit from minification`,
      action: 'Minify inline JavaScript to reduce size',
      estimatedSavings: Math.ceil(analysis.summary.totalInlineScriptSize * 0.35)
    });
    recommendations.summary.optimizations++;
  }

  if (analysis.summary.totalCompressibleStyles > 0) {
    recommendations.recommendations.push({
      severity: 'info',
      type: 'compression',
      message: `${analysis.summary.totalCompressibleStyles} inline styles could benefit from minification`,
      action: 'Minify inline CSS to reduce size',
      estimatedSavings: Math.ceil(analysis.summary.totalInlineStyleSize * 0.35)
    });
    recommendations.summary.optimizations++;
  }

  // Overall potential savings
  recommendations.summary.potentialSavings = analysis.summary.potentialSavings;
  recommendations.summary.totalInlineSize = analysis.summary.totalInlineScriptSize + 
                                             analysis.summary.totalInlineStyleSize;

  return recommendations;
}

/**
 * Generate detailed inline asset report
 */
function generateDetailedReport() {
  const analysis = analyzeAllInlineAssets();
  const recommendations = generateOptimizationRecommendations();

  const report = {
    timestamp: analysis.timestamp,
    analysis: analysis.summary,
    recommendations: recommendations.recommendations,
    potentialSavings: recommendations.summary.potentialSavings,
    detailedBreakdown: analysis.files.filter(f => 
      f.scripts.count > 0 || f.styles.count > 0
    )
  };

  return report;
}

module.exports = {
  analyzeInlineAssets,
  analyzeAllInlineAssets,
  generateOptimizationRecommendations,
  generateDetailedReport
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'analyze';

  try {
    switch (command) {
      case 'analyze': {
        const analysis = analyzeAllInlineAssets();
        console.log('Inline Asset Analysis:');
        console.log(`- Total files: ${analysis.summary.totalFiles}`);
        console.log(`- Files with inline scripts: ${analysis.summary.filesWithInlineScripts}`);
        console.log(`- Files with inline styles: ${analysis.summary.filesWithInlineStyles}`);
        console.log(`- Total inline script size: ${(analysis.summary.totalInlineScriptSize / 1024).toFixed(2)} KB`);
        console.log(`- Total inline style size: ${(analysis.summary.totalInlineStyleSize / 1024).toFixed(2)} KB`);
        console.log(`- Potential savings: ${(analysis.summary.potentialSavings / 1024).toFixed(2)} KB`);
        break;
      }
      case 'recommendations': {
        const recs = generateOptimizationRecommendations();
        console.log('Inline Asset Optimization Recommendations:');
        console.log(`- Critical actions: ${recs.summary.criticalActions}`);
        console.log(`- Optimizations: ${recs.summary.optimizations}`);
        console.log(`- Potential savings: ${(recs.summary.potentialSavings / 1024).toFixed(2)} KB`);
        console.log('\nRecommendations:');
        for (const rec of recs.recommendations) {
          console.log(`  [${rec.severity}] ${rec.message}`);
        }
        break;
      }
      case 'report': {
        const report = generateDetailedReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: analyze, recommendations, report');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
