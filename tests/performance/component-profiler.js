/**
 * Component Performance Profiler
 * Provides utilities for profiling individual components
 */

const { test, expect } = require('@playwright/test');

/**
 * Profile a single component
 */
async function profileComponent(page, componentPath) {
  // Start performance measurement
  const startTime = Date.now();

  // Navigate to component
  await page.goto(`file://${componentPath}`, { waitUntil: 'networkidle' });

  // Collect performance metrics
  const metrics = await page.evaluate(() => {
    const perf = performance.getEntriesByType('navigation')[0];
    const paintEntries = performance.getEntriesByType('paint');
    const resourceEntries = performance.getEntriesByType('resource');

    return {
      navigationTiming: {
        domContentLoaded: perf?.domContentLoadedEventEnd - perf?.domContentLoadedEventStart,
        loadComplete: perf?.loadEventEnd - perf?.loadEventStart,
        timeToFirstByte: perf?.responseStart - perf?.requestStart,
      },
      paintTiming: paintEntries.map((p) => ({
        name: p.name,
        startTime: p.startTime,
      })),
      resourceTiming: {
        count: resourceEntries.length,
        totalSize: resourceEntries.reduce((sum, r) => sum + (r.transferSize || 0), 0),
        byType: groupBy(resourceEntries, (r) => r.initiatorType),
      },
      memory: performance.memory
        ? {
            usedJSHeapSize: performance.memory.usedJSHeapSize,
            totalJSHeapSize: performance.memory.totalJSHeapSize,
            jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
          }
        : null,
    };
  });

  // Measure DOM structure
  const domMetrics = await page.evaluate(() => {
    return {
      totalElements: document.querySelectorAll('*').length,
      depth: calculateDOMDepth(document.documentElement),
      uniqueClasses: new Set(
        Array.from(document.querySelectorAll('[class]')).flatMap((el) => el.className.split(' '))
      ).size,
    };
  });

  const totalTime = Date.now() - startTime;

  return {
    performance: metrics,
    dom: domMetrics,
    totalTime,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Helper function to group array items
 */
function groupBy(array, fn) {
  const groups = {};
  array.forEach((item) => {
    const key = fn(item);
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return groups;
}

/**
 * Calculate DOM tree depth
 */
async function calculateDOMDepth(element) {
  let maxDepth = 0;

  function traverse(node, depth) {
    maxDepth = Math.max(maxDepth, depth);
    Array.from(node.children).forEach((child) => {
      traverse(child, depth + 1);
    });
  }

  traverse(element, 0);
  return maxDepth;
}

/**
 * Analyze component performance
 */
function analyzePerformance(profile) {
  const { performance: perf, dom, totalTime } = profile;

  const analysis = {
    scores: {},
    recommendations: [],
  };

  // Load time score (0-100)
  const loadTime = perf.navigationTiming.loadComplete || 0;
  if (loadTime < 100) {
    analysis.scores.loadTime = 100;
  } else if (loadTime < 500) {
    analysis.scores.loadTime = 75;
  } else if (loadTime < 1000) {
    analysis.scores.loadTime = 50;
  } else {
    analysis.scores.loadTime = 25;
  }

  // Resource score
  const resourceCount = perf.resourceTiming.count;
  if (resourceCount < 5) {
    analysis.scores.resources = 100;
  } else if (resourceCount < 10) {
    analysis.scores.resources = 75;
  } else if (resourceCount < 20) {
    analysis.scores.resources = 50;
  } else {
    analysis.scores.resources = 25;
  }

  // DOM complexity score
  if (dom.totalElements < 100) {
    analysis.scores.domComplexity = 100;
  } else if (dom.totalElements < 500) {
    analysis.scores.domComplexity = 75;
  } else if (dom.totalElements < 1000) {
    analysis.scores.domComplexity = 50;
  } else {
    analysis.scores.domComplexity = 25;
  }

  // Overall score
  analysis.overallScore =
    (analysis.scores.loadTime + analysis.scores.resources + analysis.scores.domComplexity) / 3;

  // Generate recommendations
  if (loadTime > 500) {
    analysis.recommendations.push('⚠️ Component load time exceeds 500ms. Consider optimizing resources.');
  }

  if (resourceCount > 10) {
    analysis.recommendations.push('⚠️ Component uses many resources. Consider bundling or lazy-loading.');
  }

  if (dom.totalElements > 500) {
    analysis.recommendations.push('⚠️ DOM is complex. Simplify structure where possible.');
  }

  if (dom.depth > 20) {
    analysis.recommendations.push('⚠️ Deep DOM nesting detected. Flatten structure where possible.');
  }

  if (dom.uniqueClasses > 50) {
    analysis.recommendations.push(
      '⚠️ Many unique CSS classes. Consider consolidating or using a preprocessor.'
    );
  }

  return analysis;
}

module.exports = {
  profileComponent,
  analyzePerformance,
};
