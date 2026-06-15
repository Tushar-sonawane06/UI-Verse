#!/usr/bin/env node

/**
 * Asset Deduplication Service
 * Tracks and deduplicates UI assets with comprehensive historical optimization visibility
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DEDUP_HISTORY_DIR = path.join(process.cwd(), 'reports', 'asset-optimization');
const DEDUP_STATE_FILE = path.join(process.cwd(), '.asset-dedup-state.json');
const OPTIMIZATION_HISTORY_FILE = path.join(DEDUP_HISTORY_DIR, 'optimization-history.json');

/**
 * Initialize deduplication service
 */
function ensureDirectories() {
  if (!fs.existsSync(DEDUP_HISTORY_DIR)) {
    fs.mkdirSync(DEDUP_HISTORY_DIR, { recursive: true });
  }
}

/**
 * Calculate file hash for deduplication
 * @param {string} filePath - File path
 * @returns {string} SHA256 hash
 */
function calculateFileHash(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return crypto.createHash('sha256').update(content).digest('hex');
}

/**
 * Load optimization history
 * @returns {Array} Historical optimization records
 */
function loadHistory() {
  if (!fs.existsSync(OPTIMIZATION_HISTORY_FILE)) {
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(OPTIMIZATION_HISTORY_FILE, 'utf8'));
  } catch {
    return [];
  }
}

/**
 * Save optimization history
 * @param {Array} history - History records to save
 */
function saveHistory(history) {
  fs.writeFileSync(OPTIMIZATION_HISTORY_FILE, JSON.stringify(history, null, 2));
}

/**
 * Load current deduplication state
 * @returns {Object} Current state with asset hashes
 */
function loadState() {
  if (!fs.existsSync(DEDUP_STATE_FILE)) {
    return { assets: {}, lastOptimized: null };
  }
  try {
    return JSON.parse(fs.readFileSync(DEDUP_STATE_FILE, 'utf8'));
  } catch {
    return { assets: {}, lastOptimized: null };
  }
}

/**
 * Save deduplication state
 * @param {Object} state - State to save
 */
function saveState(state) {
  fs.writeFileSync(DEDUP_STATE_FILE, JSON.stringify(state, null, 2));
}

/**
 * Scan and deduplicate assets
 * @param {Object} options - Deduplication options
 * @returns {Object} Deduplication results with optimization metrics
 */
function deduplicateAssets(options = {}) {
  ensureDirectories();
  
  const { extensions = ['.css', '.js'], includeHTML = false } = options;
  const assetPattern = includeHTML 
    ? /\.(css|js|html)$/i 
    : /\.(css|js)$/i;

  const currentState = loadState();
  const history = loadHistory();
  const duplicates = new Map();
  const newAssets = {};
  const changedAssets = [];
  const removedAssets = [];
  let duplicateCount = 0;
  let spaceSaved = 0;

  // Scan for assets
  const files = fs.readdirSync(process.cwd()).filter(file => {
    const ext = path.extname(file);
    return extensions.includes(ext) || (includeHTML && ext === '.html');
  });

  // Build hash map
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        const hash = calculateFileHash(filePath);
        const fileSize = stats.size;
        const assetId = path.basename(file);

        // Track asset changes
        if (currentState.assets[assetId]) {
          if (currentState.assets[assetId].hash !== hash) {
            changedAssets.push({
              file: assetId,
              oldHash: currentState.assets[assetId].hash,
              newHash: hash,
              sizeBefore: currentState.assets[assetId].size,
              sizeAfter: fileSize
            });
          }
        }

        newAssets[assetId] = { hash, size: fileSize, lastModified: stats.mtime.toISOString() };

        // Detect duplicates
        if (duplicates.has(hash)) {
          duplicates.get(hash).push(assetId);
          duplicateCount++;
          spaceSaved += fileSize; // Space that could be saved by deduplication
        } else {
          duplicates.set(hash, [assetId]);
        }
      }
    } catch (error) {
      console.warn(`Error processing file ${file}:`, error.message);
    }
  }

  // Track removed assets
  for (const assetId of Object.keys(currentState.assets)) {
    if (!newAssets[assetId]) {
      removedAssets.push(assetId);
    }
  }

  // Build optimization record
  const optimizationRecord = {
    timestamp: new Date().toISOString(),
    metrics: {
      totalAssets: Object.keys(newAssets).length,
      duplicateCount,
      uniqueAssets: duplicates.size,
      spaceSaved: spaceSaved,
      changedAssets: changedAssets.length,
      removedAssets: removedAssets.length
    },
    duplicates: Array.from(duplicates.entries()).map(([hash, files]) => ({
      hash: hash.substring(0, 8), // Short hash for readability
      fullHash: hash,
      files,
      potentialSavings: files.length > 1 ? files[0] : null
    })).filter(d => d.files.length > 1),
    changes: {
      added: Object.keys(newAssets).filter(f => !currentState.assets[f]),
      changed: changedAssets,
      removed: removedAssets
    }
  };

  // Add to history
  history.push(optimizationRecord);

  // Keep only last 100 records
  if (history.length > 100) {
    history.splice(0, history.length - 100);
  }

  // Save updated state and history
  saveState({ assets: newAssets, lastOptimized: new Date().toISOString() });
  saveHistory(history);

  return {
    success: true,
    currentRecord: optimizationRecord,
    history,
    summary: {
      timestamp: optimizationRecord.timestamp,
      totalAssets: optimizationRecord.metrics.totalAssets,
      duplicates: optimizationRecord.metrics.duplicateCount,
      uniqueAssets: optimizationRecord.metrics.uniqueAssets,
      spaceSaved: optimizationRecord.metrics.spaceSaved,
      historicalRecords: history.length
    }
  };
}

/**
 * Generate optimization visibility report
 * @returns {Object} Comprehensive report with history
 */
function generateVisibilityReport() {
  const history = loadHistory();
  
  if (history.length === 0) {
    return {
      historyAvailable: false,
      message: 'No optimization history available yet. Run deduplication first.'
    };
  }

  // Calculate trends
  const duplicationTrend = history.map(r => ({
    timestamp: r.timestamp,
    duplicates: r.metrics.duplicateCount,
    spaceSaved: r.metrics.spaceSaved
  }));

  const latestRecord = history[history.length - 1];
  const previousRecord = history[history.length - 2] || null;

  const trends = {
    duplicateTrend: previousRecord 
      ? latestRecord.metrics.duplicateCount - previousRecord.metrics.duplicateCount
      : 0,
    spaceSavingsTrend: previousRecord
      ? latestRecord.metrics.spaceSaved - previousRecord.metrics.spaceSaved
      : 0
  };

  return {
    historyAvailable: true,
    recordCount: history.length,
    latestOptimization: latestRecord,
    historicalTrend: duplicationTrend,
    trends,
    averageMetrics: {
      avgDuplicates: (history.reduce((sum, r) => sum + r.metrics.duplicateCount, 0) / history.length).toFixed(2),
      avgSpaceSavings: (history.reduce((sum, r) => sum + r.metrics.spaceSaved, 0) / history.length).toFixed(0) + ' bytes',
      avgUniqueAssets: (history.reduce((sum, r) => sum + r.metrics.uniqueAssets, 0) / history.length).toFixed(0)
    }
  };
}

/**
 * Export deduplication report
 * @param {string} format - Export format (json, csv)
 * @returns {string} Formatted report
 */
function exportReport(format = 'json') {
  const visibilityReport = generateVisibilityReport();
  
  if (!visibilityReport.historyAvailable) {
    return JSON.stringify(visibilityReport, null, 2);
  }

  if (format === 'csv') {
    // CSV export
    const headers = ['Timestamp', 'Total Assets', 'Duplicates', 'Unique Assets', 'Space Saved (bytes)'];
    const rows = visibilityReport.historicalTrend.map(entry => [
      entry.timestamp,
      visibilityReport.latestOptimization.metrics.totalAssets,
      entry.duplicates,
      visibilityReport.latestOptimization.metrics.uniqueAssets,
      entry.spaceSaved
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  return JSON.stringify(visibilityReport, null, 2);
}

module.exports = {
  deduplicateAssets,
  generateVisibilityReport,
  exportReport,
  loadHistory
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'deduplicate';

  try {
    switch (command) {
      case 'deduplicate': {
        const result = deduplicateAssets();
        console.log('Asset deduplication completed:');
        console.log(`- Total assets: ${result.summary.totalAssets}`);
        console.log(`- Duplicates found: ${result.summary.duplicates}`);
        console.log(`- Unique assets: ${result.summary.uniqueAssets}`);
        console.log(`- Space savings: ${(result.summary.spaceSaved / 1024).toFixed(2)} KB`);
        console.log(`- Historical records: ${result.summary.historicalRecords}`);
        break;
      }
      case 'report': {
        const report = generateVisibilityReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      }
      case 'export': {
        const format = process.argv[3] || 'json';
        const exported = exportReport(format);
        console.log(exported);
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: deduplicate, report, export');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
