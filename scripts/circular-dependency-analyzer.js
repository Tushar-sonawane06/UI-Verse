#!/usr/bin/env node

/**
 * Circular Dependency Analyzer
 * Detects and reports circular dependencies with granular failure isolation
 */

const fs = require('fs');
const path = require('path');

const ANALYSIS_REPORTS_DIR = path.join(process.cwd(), 'reports', 'circular-dependencies');
const DEPENDENCY_STATE = path.join(process.cwd(), '.circular-dependency-state.json');

/**
 * Initialize analysis directories
 */
function ensureDirectories() {
  if (!fs.existsSync(ANALYSIS_REPORTS_DIR)) {
    fs.mkdirSync(ANALYSIS_REPORTS_DIR, { recursive: true });
  }
}

/**
 * Get all JavaScript and CSS files in the project
 */
function getAllDependencyFiles() {
  const files = [];

  function scanDirectory(dir) {
    try {
      const entries = fs.readdirSync(dir);

      for (const entry of entries) {
        const fullPath = path.join(dir, entry);

        // Skip node_modules, .git, and other excluded dirs
        if (entry.startsWith('.') || entry === 'node_modules' || entry === 'reports') {
          continue;
        }

        try {
          const stats = fs.statSync(fullPath);

          if (stats.isDirectory()) {
            scanDirectory(fullPath);
          } else if (entry.endsWith('.js') || entry.endsWith('.css')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files we can't stat
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }

  scanDirectory(process.cwd());
  return files;
}

/**
 * Extract dependencies from a JavaScript file
 */
function extractJSImports(filePath, content) {
  const imports = [];

  // Match ES6 imports: import ... from '...'
  const es6ImportRegex = /import\s+(?:.*?)\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = es6ImportRegex.exec(content)) !== null) {
    const importPath = match[1];
    imports.push({
      type: 'es6-import',
      path: importPath,
      line: content.substring(0, match.index).split('\n').length
    });
  }

  // Match CommonJS requires: require('...')
  const cjsRequireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

  while ((match = cjsRequireRegex.exec(content)) !== null) {
    const importPath = match[1];
    imports.push({
      type: 'cjs-require',
      path: importPath,
      line: content.substring(0, match.index).split('\n').length
    });
  }

  // Match dynamic imports: import('...')
  const dynamicImportRegex = /import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

  while ((match = dynamicImportRegex.exec(content)) !== null) {
    const importPath = match[1];
    imports.push({
      type: 'dynamic-import',
      path: importPath,
      line: content.substring(0, match.index).split('\n').length
    });
  }

  return imports;
}

/**
 * Extract dependencies from a CSS file
 */
function extractCSSImports(filePath, content) {
  const imports = [];

  // Match @import statements: @import "..." or @import url(...)
  const importRegex = /@import\s+(?:url\(\s*)?['"]?([^'")\s]+)['"]?(?:\s*\))?/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    imports.push({
      type: 'css-import',
      path: importPath,
      line: content.substring(0, match.index).split('\n').length
    });
  }

  return imports;
}

/**
 * Resolve an import path to an actual file
 */
function resolveImportPath(importPath, sourceDir) {
  const resolvedPaths = [];

  // Try as-is
  let testPath = path.resolve(sourceDir, importPath);
  if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
    resolvedPaths.push(testPath);
  }

  // Try with .js extension
  if (!importPath.endsWith('.js') && !importPath.endsWith('.css')) {
    testPath = path.resolve(sourceDir, importPath + '.js');
    if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
      resolvedPaths.push(testPath);
    }

    testPath = path.resolve(sourceDir, importPath + '.css');
    if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
      resolvedPaths.push(testPath);
    }
  }

  // Try as directory with index.js
  testPath = path.resolve(sourceDir, importPath, 'index.js');
  if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
    resolvedPaths.push(testPath);
  }

  testPath = path.resolve(sourceDir, importPath, 'index.css');
  if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
    resolvedPaths.push(testPath);
  }

  return resolvedPaths;
}

/**
 * Build dependency graph
 */
function buildDependencyGraph() {
  const graph = {};
  const allFiles = getAllDependencyFiles();

  for (const filePath of allFiles) {
    const relPath = path.relative(process.cwd(), filePath);
    graph[relPath] = [];

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let imports = [];

      if (filePath.endsWith('.js')) {
        imports = extractJSImports(filePath, content);
      } else if (filePath.endsWith('.css')) {
        imports = extractCSSImports(filePath, content);
      }

      for (const imp of imports) {
        const sourceDir = path.dirname(filePath);
        const resolved = resolveImportPath(imp.path, sourceDir);

        for (const resolvedPath of resolved) {
          const relResolvedPath = path.relative(process.cwd(), resolvedPath);
          if (relResolvedPath !== relPath) {
            graph[relPath].push({
              target: relResolvedPath,
              type: imp.type,
              line: imp.line,
              originalPath: imp.path
            });
          }
        }
      }
    } catch (error) {
      // Isolated failure - file read error
      graph[relPath].error = {
        type: 'read-error',
        message: error.message
      };
    }
  }

  return graph;
}

/**
 * Detect cycles using DFS with path tracking
 */
function detectCycles(graph) {
  const cycles = [];
  const visited = new Set();
  const recursionStack = new Set();
  const paths = new Map();

  function dfs(node, currentPath = []) {
    visited.add(node);
    recursionStack.add(node);
    currentPath.push(node);
    paths.set(node, currentPath);

    if (!graph[node] || graph[node].error) {
      recursionStack.delete(node);
      return;
    }

    for (const dep of graph[node]) {
      const target = dep.target;

      if (!visited.has(target)) {
        dfs(target, [...currentPath]);
      } else if (recursionStack.has(target)) {
        // Found a cycle
        const cycleStart = currentPath.indexOf(target);
        const cycle = currentPath.slice(cycleStart).concat(target);

        cycles.push({
          cycle,
          length: cycle.length - 1, // Subtract 1 for the repeated node
          details: cycle.slice(0, -1).map((node, idx) => ({
            file: node,
            importedFrom: cycle[idx + 1],
            dependencyInfo: graph[node].find(d => d.target === cycle[idx + 1])
          }))
        });
      }
    }

    recursionStack.delete(node);
  }

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return cycles;
}

/**
 * Analyze circular dependency report
 */
function analyzeCircularDependencies() {
  ensureDirectories();

  const graph = buildDependencyGraph();
  const cycles = detectCycles(graph);

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFiles: Object.keys(graph).length,
      filesScanSuccessfully: Object.keys(graph).filter(f => !graph[f].error).length,
      filesWithErrors: Object.keys(graph).filter(f => graph[f].error).length,
      cyclesDetected: cycles.length,
      filesInCycles: new Set(cycles.flatMap(c => c.cycle.slice(0, -1))).size,
      totalDependencies: Object.values(graph).reduce((sum, deps) => 
        sum + (deps.error ? 0 : deps.length), 0
      )
    },
    cycles: cycles.sort((a, b) => a.length - b.length),
    isolatedFailures: {},
    recommendations: []
  };

  // Collect isolated failures
  for (const [file, deps] of Object.entries(graph)) {
    if (deps.error) {
      report.isolatedFailures[file] = deps.error;
    }
  }

  // Generate recommendations
  if (cycles.length === 0) {
    report.recommendations.push({
      severity: 'success',
      message: 'No circular dependencies detected',
      action: 'Continue monitoring for new dependencies'
    });
  } else {
    report.recommendations.push({
      severity: 'error',
      message: `${cycles.length} circular dependency cycle(s) detected`,
      action: 'Break cycles by removing or refactoring dependencies'
    });

    // Suggest breaking points
    const breakPoints = [];
    for (const cycle of cycles) {
      const weakestLink = cycle.details.reduce((min, curr, idx) => {
        const currWeight = curr.dependencyInfo ? 1 : 0;
        return currWeight < (min.weight || 1) ? { idx, weight: currWeight } : min;
      }, {});

      breakPoints.push({
        cycle: cycle.cycle,
        suggestedBreakPoint: cycle.details[weakestLink.idx].file,
        reason: 'Remove or refactor this import to break the cycle'
      });
    }

    if (breakPoints.length > 0) {
      report.recommendations.push({
        severity: 'info',
        message: `${breakPoints.length} suggested break point(s) identified`,
        breakPoints
      });
    }
  }

  if (report.summary.filesWithErrors > 0) {
    report.recommendations.push({
      severity: 'warning',
      message: `${report.summary.filesWithErrors} file(s) could not be analyzed`,
      action: 'Check logs for granular failure details'
    });
  }

  // Save report
  const reportPath = path.join(ANALYSIS_REPORTS_DIR, `circular-dependency-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  // Save state
  const state = {
    lastAnalysis: new Date().toISOString(),
    lastReportPath: reportPath,
    summary: report.summary
  };
  fs.writeFileSync(DEPENDENCY_STATE, JSON.stringify(state, null, 2));

  return report;
}

module.exports = {
  buildDependencyGraph,
  detectCycles,
  analyzeCircularDependencies,
  extractJSImports,
  extractCSSImports,
  resolveImportPath
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'analyze';

  try {
    switch (command) {
      case 'analyze': {
        const report = analyzeCircularDependencies();
        
        console.log('Circular Dependency Analysis:');
        console.log(`- Files scanned: ${report.summary.totalFiles}`);
        console.log(`- Files analyzed: ${report.summary.filesScanSuccessfully}`);
        console.log(`- Files with errors: ${report.summary.filesWithErrors}`);
        console.log(`- Cycles detected: ${report.summary.cyclesDetected}`);
        console.log(`- Files in cycles: ${report.summary.filesInCycles}`);
        console.log(`- Total dependencies: ${report.summary.totalDependencies}`);

        if (report.summary.cyclesDetected > 0) {
          console.log('\nCycles:');
          for (const cycle of report.cycles) {
            console.log(`  [Length ${cycle.length}] ${cycle.cycle.join(' -> ')}`);
          }
          process.exit(1);
        }

        if (report.summary.filesWithErrors > 0) {
          console.log('\nFiles with analysis errors:');
          for (const [file, error] of Object.entries(report.isolatedFailures)) {
            console.log(`  - ${file}: ${error.message}`);
          }
        }

        if (report.recommendations.length > 0) {
          console.log('\nRecommendations:');
          for (const rec of report.recommendations) {
            console.log(`  [${rec.severity}] ${rec.message}`);
          }
        }

        process.exit(0);
        break;
      }
      case 'graph': {
        const graph = buildDependencyGraph();
        console.log('Dependency Graph:');
        console.log(JSON.stringify(graph, null, 2));
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: analyze, graph');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
