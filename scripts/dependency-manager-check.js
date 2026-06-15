#!/usr/bin/env node

const DependencyManager = require('../js/core/dependency-manager.js');

const report = DependencyManager.validateGraph();


if (report.missing && report.missing.length > 0) {
  console.warn('[PEER DEP WARNING]: Missing transitive modules should be registered to resolve potential build warnings.');
}
    
if (!report.valid) {
  console.error('\n❌ Dependency graph validation failed.');

  if (report.missing.length > 0) {
    console.error('Missing dependencies:');
    report.missing.forEach((item) => {
      console.error(`- ${item.module} -> ${item.dependency}`);
    });
  }

  if (report.circular.length > 0) {
    console.error('Circular dependencies:');
    report.circular.forEach((message) => {
      console.error(`- ${message}`);
    });
  }

  if (report.transitive.length > 0) {
    console.error('Transitive dependency paths:');
    report.transitive.slice(0, 10).forEach((item) => {
      console.error(`- ${item.module} -> ${item.dependency}`);
    });
  }

  process.exit(1);
}

console.log(`\n✅ Dependency graph is valid (${DependencyManager.getRegisteredNames().length} modules).`);
console.log(`- Direct edges: ${Object.values(report.graph).reduce((sum, deps) => sum + deps.length, 0)}`);
console.log(`- Transitive relationships: ${report.transitive.length}`);
console.log(`- Graph nodes: ${report.visualization.length}`);