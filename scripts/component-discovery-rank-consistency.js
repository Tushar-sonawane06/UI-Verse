#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { run } = require('./component-discovery-runner');

const CONSISTENCY_REPORT_DIR = path.join(process.cwd(), 'reports', 'discovery-consistency');

function ensureReportDir() {
  if (!fs.existsSync(CONSISTENCY_REPORT_DIR)) {
    fs.mkdirSync(CONSISTENCY_REPORT_DIR, { recursive: true });
  }
}

function generateConsistencyReport(results, query, filters) {
  const report = {
    timestamp: new Date().toISOString(),
    query,
    filters,
    resultCount: results.length,
    resultsByCategory: {},
    resultsByScore: [],
    rankingStable: true,
    meta: {
      totalScored: results.filter((r) => r._score).length,
      zeroScored: results.filter((r) => !r._score || r._score === 0).length
    }
  };

  // Group by category
  results.forEach((r) => {
    if (!report.resultsByCategory[r.category]) {
      report.resultsByCategory[r.category] = [];
    }
    report.resultsByCategory[r.category].push({
      id: r.id,
      title: r.title,
      score: r._score
    });
  });

  // Sort by score for analysis (deterministic: score desc, then id asc for tiebreaking)
  report.resultsByScore = results
    .map((r) => ({ id: r.id, title: r.title, score: r._score }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Tiebreaker: sort by id alphabetically
      return a.id.localeCompare(b.id);
    });

  // Verify stable sorting within categories
  Object.keys(report.resultsByCategory).forEach((category) => {
    const items = report.resultsByCategory[category];
    // Sort with deterministic tiebreaker: score desc, then id asc
    const sorted = items.slice().sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.id.localeCompare(b.id);
    });
    const isSorted = JSON.stringify(items) === JSON.stringify(sorted);
    if (!isSorted) {
      report.rankingStable = false;
    }
  });

  return report;
}

function compareMultipleRuns(runCount = 3) {
  const runs = [];

  for (let i = 0; i < runCount; i++) {
    const result = require.cache[require.resolve('./component-discovery-runner')] = null;
    delete require.cache[require.resolve('./component-discovery-runner')];

    const { run: freshRun } = require('./component-discovery-runner');
    const freshResult = freshRun.then((res) => res);

    runs.push(freshResult);
  }

  return Promise.all(runs).then((results) => {
    const hashes = results.map((r) => {
      const ids = r.results.map((x) => x.id).join('|');
      return require('crypto').createHash('md5').update(ids).digest('hex');
    });

    const consistent = hashes.every((h) => h === hashes[0]);

    return {
      runCount,
      consistent,
      hashes,
      results
    };
  });
}

async function main() {
  ensureReportDir();

  const result = await run();
  const report = generateConsistencyReport(result.results || [], result.query || '', result.filters || {});

  const reportPath = path.join(CONSISTENCY_REPORT_DIR, `consistency-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log('Component discovery ranking consistency report generated.');
  console.log(`- Report: ${path.relative(process.cwd(), reportPath)}`);
  console.log(`- Results: ${report.resultCount}`);
  console.log(`- Ranking stable: ${report.rankingStable ? '✓' : '✗'}`);
  console.log(`- Zero-scored items: ${report.meta.zeroScored}`);

  if (!report.rankingStable) {
    console.warn('⚠️  Non-deterministic ranking detected!');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  generateConsistencyReport,
  compareMultipleRuns
};
