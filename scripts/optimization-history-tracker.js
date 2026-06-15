#!/usr/bin/env node

/**
 * Optimization History Tracker
 * Provides comprehensive visibility into asset deduplication and optimization workflows
 */

const fs = require('fs');
const path = require('path');
const { deduplicateAssets, generateVisibilityReport, loadHistory } = require('./asset-deduplication-service');

const METRICS_DASHBOARD_FILE = path.join(process.cwd(), 'reports', 'asset-optimization', 'dashboard.json');

/**
 * Track optimization metrics over time
 */
function trackOptimizationMetrics() {
  // Run deduplication to update history
  const dedupResult = deduplicateAssets();
  
  // Generate visibility report
  const visibilityReport = generateVisibilityReport();

  // Create dashboard data
  const dashboard = {
    generatedAt: new Date().toISOString(),
    currentStatus: dedupResult.summary,
    historicalAnalysis: visibilityReport,
    recommendations: generateRecommendations(visibilityReport, dedupResult)
  };

  // Ensure directory exists
  const dir = path.dirname(METRICS_DASHBOARD_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save dashboard
  fs.writeFileSync(METRICS_DASHBOARD_FILE, JSON.stringify(dashboard, null, 2));

  return dashboard;
}

/**
 * Generate optimization recommendations based on history
 */
function generateRecommendations(visibilityReport, dedupResult) {
  const recommendations = [];

  if (!visibilityReport.historyAvailable) {
    return [{ severity: 'info', message: 'Run deduplication to establish baseline' }];
  }

  // Check for increasing duplicates
  if (visibilityReport.trends.duplicateTrend > 0) {
    recommendations.push({
      severity: 'warning',
      message: `Duplicate count increased by ${visibilityReport.trends.duplicateTrend} since last optimization`,
      action: 'Review and consolidate duplicate assets'
    });
  }

  // Check for high duplication rate
  const duplicationRate = (visibilityReport.latestOptimization.metrics.duplicateCount / 
    visibilityReport.latestOptimization.metrics.totalAssets * 100).toFixed(2);
  
  if (duplicationRate > 20) {
    recommendations.push({
      severity: 'warning',
      message: `High duplication rate: ${duplicationRate}% of assets are duplicates`,
      action: 'Consider implementing automated deduplication or shared asset library'
    });
  }

  // Check for large space savings potential
  if (visibilityReport.latestOptimization.metrics.spaceSaved > 50000) {
    recommendations.push({
      severity: 'info',
      message: `Significant space can be saved: ${(visibilityReport.latestOptimization.metrics.spaceSaved / 1024).toFixed(2)} KB`,
      action: 'Implement asset deduplication to reduce bundle size'
    });
  }

  // Check optimization frequency
  if (visibilityReport.recordCount > 1) {
    const firstRecord = visibilityReport.historicalTrend[0];
    const lastRecord = visibilityReport.historicalTrend[visibilityReport.historicalTrend.length - 1];
    
    if (firstRecord.duplicates === lastRecord.duplicates) {
      recommendations.push({
        severity: 'success',
        message: 'Duplication metrics remain stable',
        action: 'Continue current deduplication strategy'
      });
    }
  }

  return recommendations;
}

/**
 * Generate timeline visualization data
 */
function generateTimeline() {
  const history = loadHistory();
  
  if (history.length === 0) {
    return { message: 'No historical data available' };
  }

  const timeline = {
    entries: history.map((record, index) => ({
      index,
      timestamp: record.timestamp,
      metrics: {
        totalAssets: record.metrics.totalAssets,
        duplicates: record.metrics.duplicateCount,
        uniqueAssets: record.metrics.uniqueAssets,
        spaceSaved: record.metrics.spaceSaved,
        optimization: record.metrics
      },
      changes: record.changes
    })),
    summary: {
      totalRecords: history.length,
      timespan: history.length > 1 ? {
        start: history[0].timestamp,
        end: history[history.length - 1].timestamp
      } : null
    }
  };

  return timeline;
}

/**
 * Compare optimization between two timestamps
 */
function compareOptimizations(index1 = 0, index2 = -1) {
  const history = loadHistory();
  
  if (history.length === 0) {
    return { error: 'No optimization history available' };
  }

  const actualIndex2 = index2 < 0 ? history.length + index2 : index2;
  
  if (index1 >= history.length || actualIndex2 >= history.length) {
    return { error: 'Invalid indices' };
  }

  const record1 = history[index1];
  const record2 = history[actualIndex2];

  return {
    comparison: {
      period1: record1.timestamp,
      period2: record2.timestamp,
      changes: {
        assetDelta: record2.metrics.totalAssets - record1.metrics.totalAssets,
        duplicateDelta: record2.metrics.duplicateCount - record1.metrics.duplicateCount,
        spaceSavingsDelta: record2.metrics.spaceSaved - record1.metrics.spaceSaved,
        uniqueAssetsDelta: record2.metrics.uniqueAssets - record1.metrics.uniqueAssets
      }
    }
  };
}

module.exports = {
  trackOptimizationMetrics,
  generateTimeline,
  compareOptimizations,
  generateRecommendations
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'track';

  try {
    switch (command) {
      case 'track': {
        const dashboard = trackOptimizationMetrics();
        console.log('Optimization tracking completed:');
        console.log(`- Dashboard saved to: ${METRICS_DASHBOARD_FILE}`);
        console.log(`- Current duplicates: ${dashboard.currentStatus.duplicates}`);
        console.log(`- Historical records: ${dashboard.currentStatus.historicalRecords}`);
        console.log(`- Recommendations: ${dashboard.recommendations.length}`);
        break;
      }
      case 'timeline': {
        const timeline = generateTimeline();
        console.log(JSON.stringify(timeline, null, 2));
        break;
      }
      case 'compare': {
        const idx1 = parseInt(process.argv[3]) || 0;
        const idx2 = parseInt(process.argv[4]) || -1;
        const comparison = compareOptimizations(idx1, idx2);
        console.log(JSON.stringify(comparison, null, 2));
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: track, timeline, compare');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
