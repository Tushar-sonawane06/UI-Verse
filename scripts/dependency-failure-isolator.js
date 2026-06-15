#!/usr/bin/env node

/**
 * Dependency Failure Isolator
 * Granular failure isolation for circular dependency detection with module-level diagnostics
 */

const fs = require('fs');
const path = require('path');
const { buildDependencyGraph, analyzeCircularDependencies } = require('./circular-dependency-analyzer');

const ISOLATION_REPORTS_DIR = path.join(process.cwd(), 'reports', 'dependency-failures');
const FAILURE_STATE = path.join(process.cwd(), '.dependency-failure-state.json');

/**
 * Initialize isolation directories
 */
function ensureDirectories() {
  if (!fs.existsSync(ISOLATION_REPORTS_DIR)) {
    fs.mkdirSync(ISOLATION_REPORTS_DIR, { recursive: true });
  }
}

/**
 * Isolate failures per module and categorize them
 */
function isolateModuleFailures() {
  ensureDirectories();

  const graph = buildDependencyGraph();
  const circularReport = analyzeCircularDependencies();

  const isolation = {
    timestamp: new Date().toISOString(),
    totalModules: Object.keys(graph).length,
    failureCategories: {
      readErrors: [],
      parseErrors: [],
      resolutionErrors: [],
      circularReferences: []
    },
    moduleStatus: {},
    failureMetrics: {
      totalFailures: 0,
      criticalCount: 0,
      warningCount: 0,
      resolvedCount: 0
    },
    recoveryPaths: []
  };

  // Process each module for failures
  for (const [file, deps] of Object.entries(graph)) {
    const moduleStatus = {
      file,
      status: 'ok',
      issues: [],
      dependencyCount: 0,
      failedDependencies: 0,
      canLoad: true
    };

    // Check for read errors
    if (deps.error) {
      moduleStatus.status = 'read-error';
      moduleStatus.canLoad = false;
      moduleStatus.issues.push({
        severity: 'critical',
        type: 'read-error',
        message: deps.error.message,
        category: 'FILE_READ'
      });

      isolation.failureCategories.readErrors.push({
        file,
        error: deps.error.message
      });

      isolation.failureMetrics.criticalCount++;
      isolation.failureMetrics.totalFailures++;
    } else {
      moduleStatus.dependencyCount = deps.length;

      // Check each dependency
      for (const dep of deps) {
        try {
          if (!dep.target) {
            moduleStatus.failedDependencies++;
            moduleStatus.issues.push({
              severity: 'warning',
              type: 'resolution-error',
              message: `Could not resolve import: ${dep.originalPath}`,
              category: 'RESOLUTION_FAILED',
              importType: dep.type,
              line: dep.line
            });

            isolation.failureCategories.resolutionErrors.push({
              sourceFile: file,
              attemptedPath: dep.originalPath,
              importType: dep.type,
              line: dep.line
            });

            isolation.failureMetrics.warningCount++;
            isolation.failureMetrics.totalFailures++;
          }

          // Check if target file exists and is readable
          if (dep.target && !fs.existsSync(dep.target)) {
            moduleStatus.failedDependencies++;
            moduleStatus.issues.push({
              severity: 'error',
              type: 'missing-target',
              message: `Target file does not exist: ${dep.target}`,
              category: 'TARGET_MISSING',
              target: dep.target
            });

            isolation.failureMetrics.criticalCount++;
            isolation.failureMetrics.totalFailures++;
          }
        } catch (error) {
          moduleStatus.failedDependencies++;
          moduleStatus.issues.push({
            severity: 'warning',
            type: 'analysis-error',
            message: `Error analyzing dependency: ${error.message}`,
            category: 'ANALYSIS_FAILED',
            target: dep.target
          });

          isolation.failureMetrics.warningCount++;
          isolation.failureMetrics.totalFailures++;
        }
      }

      // Determine if module can be loaded
      if (moduleStatus.failedDependencies > 0) {
        moduleStatus.status = 'load-error';
        moduleStatus.canLoad = false;
      }
    }

    // Check if module is involved in circular dependency
    const inCycle = circularReport.cycles.some(cycle => 
      cycle.cycle.includes(file)
    );

    if (inCycle) {
      const involvedCycles = circularReport.cycles.filter(cycle => 
        cycle.cycle.includes(file)
      );

      moduleStatus.status = moduleStatus.status === 'ok' ? 'circular' : 'circular-plus-errors';
      moduleStatus.issues.push({
        severity: 'error',
        type: 'circular-reference',
        message: `Module is involved in ${involvedCycles.length} circular cycle(s)`,
        category: 'CIRCULAR_DEPENDENCY',
        cycles: involvedCycles.map(c => c.cycle)
      });

      isolation.failureCategories.circularReferences.push({
        file,
        cycleCount: involvedCycles.length,
        cycles: involvedCycles.map(c => c.cycle)
      });

      isolation.failureMetrics.criticalCount++;
      isolation.failureMetrics.totalFailures++;

      moduleStatus.canLoad = false;
    }

    isolation.moduleStatus[file] = moduleStatus;

    if (moduleStatus.issues.length === 0) {
      isolation.failureMetrics.resolvedCount++;
    }
  }

  // Generate recovery paths
  for (const [file, status] of Object.entries(isolation.moduleStatus)) {
    if (!status.canLoad && status.issues.length > 0) {
      const recovery = {
        file,
        issues: status.issues.length,
        steps: []
      };

      for (const issue of status.issues) {
        if (issue.category === 'READ_ERROR') {
          recovery.steps.push({
            step: 1,
            action: 'Fix file permissions',
            description: `Make sure ${file} is readable`,
            command: process.platform === 'win32' 
              ? `icacls "${file}" /grant %USERNAME%:F` 
              : `chmod +r "${file}"`
          });
        } else if (issue.category === 'RESOLUTION_FAILED') {
          recovery.steps.push({
            step: 2,
            action: 'Verify import path',
            description: `Check that import path "${issue.message}" is correct`,
            suggestion: 'The import may need a file extension or relative path adjustment'
          });
        } else if (issue.category === 'TARGET_MISSING') {
          recovery.steps.push({
            step: 3,
            action: 'Create missing file',
            description: `Target file ${issue.target} does not exist`,
            suggestion: 'Create the file or fix the import path'
          });
        } else if (issue.category === 'CIRCULAR_DEPENDENCY') {
          recovery.steps.push({
            step: 4,
            action: 'Break circular dependency',
            description: `Module is involved in a circular dependency`,
            suggestion: 'Refactor to remove the circular reference'
          });
        }
      }

      isolation.recoveryPaths.push(recovery);
    }
  }

  // Save isolation report
  const reportPath = path.join(ISOLATION_REPORTS_DIR, `failure-isolation-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(isolation, null, 2));

  // Save state
  const state = {
    lastIsolation: new Date().toISOString(),
    lastReportPath: reportPath,
    summary: {
      totalModules: isolation.totalModules,
      failingModules: isolation.failureMetrics.totalFailures,
      canLoadCount: isolation.failureMetrics.resolvedCount,
      criticalIssues: isolation.failureMetrics.criticalCount,
      warnings: isolation.failureMetrics.warningCount
    }
  };
  fs.writeFileSync(FAILURE_STATE, JSON.stringify(state, null, 2));

  return isolation;
}

/**
 * Generate detailed failure report per module
 */
function generateDetailedFailureReport() {
  const isolation = isolateModuleFailures();

  const report = {
    timestamp: isolation.timestamp,
    summary: {
      totalModules: isolation.totalModules,
      failingModules: Object.values(isolation.moduleStatus)
        .filter(m => m.status !== 'ok').length,
      canLoadModules: Object.values(isolation.moduleStatus)
        .filter(m => m.canLoad).length,
      criticalIssues: isolation.failureMetrics.criticalCount,
      warnings: isolation.failureMetrics.warningCount
    },
    failureBreakdown: {
      readErrors: isolation.failureCategories.readErrors.length,
      parseErrors: isolation.failureCategories.parseErrors.length,
      resolutionErrors: isolation.failureCategories.resolutionErrors.length,
      circularReferences: isolation.failureCategories.circularReferences.length
    },
    failingModules: [],
    recoveryPaths: isolation.recoveryPaths
  };

  for (const [file, status] of Object.entries(isolation.moduleStatus)) {
    if (status.status !== 'ok') {
      report.failingModules.push({
        file,
        status: status.status,
        canLoad: status.canLoad,
        issueCount: status.issues.length,
        issues: status.issues
      });
    }
  }

  return report;
}

/**
 * Get modules that can be safely loaded
 */
function getLoadableModules() {
  const isolation = isolateModuleFailures();

  const loadable = [];
  const notLoadable = [];

  for (const [file, status] of Object.entries(isolation.moduleStatus)) {
    if (status.canLoad) {
      loadable.push({
        file,
        dependencies: status.dependencyCount,
        status: status.status
      });
    } else {
      notLoadable.push({
        file,
        reason: status.issues.map(i => i.message),
        issueCount: status.issues.length
      });
    }
  }

  return {
    timestamp: new Date().toISOString(),
    canLoad: loadable.length,
    cannotLoad: notLoadable.length,
    loadableModules: loadable,
    notLoadableModules: notLoadable,
    loadablePercentage: ((loadable.length / (loadable.length + notLoadable.length)) * 100).toFixed(2)
  };
}

module.exports = {
  isolateModuleFailures,
  generateDetailedFailureReport,
  getLoadableModules
};

// CLI execution
if (require.main === module) {
  const command = process.argv[2] || 'isolate';

  try {
    switch (command) {
      case 'isolate': {
        const isolation = isolateModuleFailures();

        console.log('Dependency Failure Isolation Report:');
        console.log(`- Total modules: ${isolation.totalModules}`);
        console.log(`- Modules with failures: ${isolation.failureMetrics.totalFailures}`);
        console.log(`- Modules can load: ${isolation.failureMetrics.resolvedCount}`);
        console.log(`- Critical issues: ${isolation.failureMetrics.criticalCount}`);
        console.log(`- Warnings: ${isolation.failureMetrics.warningCount}`);

        console.log('\nFailure Categories:');
        console.log(`  - Read errors: ${isolation.failureCategories.readErrors.length}`);
        console.log(`  - Parse errors: ${isolation.failureCategories.parseErrors.length}`);
        console.log(`  - Resolution errors: ${isolation.failureCategories.resolutionErrors.length}`);
        console.log(`  - Circular references: ${isolation.failureCategories.circularReferences.length}`);

        if (isolation.failureMetrics.totalFailures > 0) {
          console.log('\nFailing modules:');
          for (const [file, status] of Object.entries(isolation.moduleStatus)) {
            if (status.status !== 'ok') {
              console.log(`  - ${file} (${status.status}): ${status.issues.length} issue(s)`);
            }
          }

          if (isolation.recoveryPaths.length > 0) {
            console.log('\nRecovery paths:');
            for (const recovery of isolation.recoveryPaths.slice(0, 5)) {
              console.log(`  - ${recovery.file}: ${recovery.steps.length} recovery step(s)`);
            }
          }

          process.exit(1);
        }

        process.exit(0);
        break;
      }
      case 'report': {
        const report = generateDetailedFailureReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      }
      case 'loadable': {
        const loadable = getLoadableModules();
        console.log('Loadable Modules Analysis:');
        console.log(`- Can load: ${loadable.canLoad}`);
        console.log(`- Cannot load: ${loadable.cannotLoad}`);
        console.log(`- Loadable percentage: ${loadable.loadablePercentage}%`);

        if (loadable.cannotLoad > 0) {
          console.log('\nCannot load modules:');
          for (const mod of loadable.notLoadableModules.slice(0, 10)) {
            console.log(`  - ${mod.file}`);
            for (const reason of mod.reason.slice(0, 2)) {
              console.log(`    • ${reason}`);
            }
          }
        }

        process.exit(loadable.cannotLoad > 0 ? 1 : 0);
        break;
      }
      default:
        console.error(`Unknown command: ${command}`);
        console.error('Available commands: isolate, report, loadable');
        process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
