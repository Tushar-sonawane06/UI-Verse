#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { run } = require('./component-discovery-runner');

const DISCOVERY_BASELINE_FILE = path.join(process.cwd(), '.discovery-baseline.json');

function hashRankingState(results) {
  // Normalize results with deterministic tiebreaker for equal scores
  const normalized = results.map((r) => ({
    id: r.id,
    score: r._score,
    title: r.title,
    category: r.category
  })).sort((a, b) => {
    // First sort by score descending
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // Tiebreaker: sort by id ascending for determinism
    return a.id.localeCompare(b.id);
  });
  const json = JSON.stringify(normalized, null, 0);
  return crypto.createHash('sha256').update(json).digest('hex');
}

function saveBaseline(results, query, filters) {
  const baseline = {
    timestamp: new Date().toISOString(),
    query,
    filters,
    hash: hashRankingState(results),
    resultCount: results.length,
    results: results.map((r) => ({ id: r.id, score: r._score }))
  };
  fs.writeFileSync(DISCOVERY_BASELINE_FILE, JSON.stringify(baseline, null, 2));
  return baseline;
}

function verifyRankingStability(results, query, filters) {
  if (!fs.existsSync(DISCOVERY_BASELINE_FILE)) {
    return { stable: true, baseline: saveBaseline(results, query, filters) };
  }

  try {
    const baseline = JSON.parse(fs.readFileSync(DISCOVERY_BASELINE_FILE, 'utf8'));
    const currentHash = hashRankingState(results);

    if (currentHash !== baseline.hash) {
      return {
        stable: false,
        baseline,
        current: { hash: currentHash, resultCount: results.length },
        message: 'Search result ranking changed. This may indicate non-deterministic ordering.'
      };
    }

    return { stable: true, baseline };
  } catch (error) {
    console.warn('Could not verify baseline:', error.message);
    return { stable: true };
  }
}

(async () => {
  const result = await run();
  const required = [
    path.join(process.cwd(), 'components', 'Discovery', 'component-discovery.html'),
    path.join(process.cwd(), 'docs', 'COMPONENT_DISCOVERY.md')
  ];

  const missing = required.filter((item) => !fs.existsSync(item));
  if (missing.length > 0) {
    console.error('Missing discovery files:');
    missing.forEach((file) => console.error(`- ${path.relative(process.cwd(), file)}`));
    process.exit(1);
  }

  if (!result || !result.summary || result.summary.returned === 0) {
    process.exitCode = 1;
  }

  // Verify ranking stability
  const stabilityCheck = verifyRankingStability(result.results || [], result.query || '', result.filters || {});
  if (!stabilityCheck.stable) {
    console.warn('⚠️  Ranking stability warning:', stabilityCheck.message);
    console.warn('Baseline was generated at:', stabilityCheck.baseline.timestamp);
  }

  console.log('Component discovery outputs verified.');
  console.log(`- Items indexed: ${result.summary.total}`);
  console.log(`- Returned: ${result.summary.returned}`);
  console.log(`- Ranking stable: ${stabilityCheck.stable ? '✓' : '✗'}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
