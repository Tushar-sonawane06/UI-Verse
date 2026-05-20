#!/usr/bin/env node
// Component Dependency & Import Analysis Tool
// Analyzes component dependencies, detects circular imports, and generates reports

const fs = require('fs');
const path = require('path');

class DependencyAnalyzer {
  constructor(rootDir = './') {
    this.rootDir = rootDir;
    this.graph = {}; // dependency graph
    this.imports = {}; // file -> imports mapping
    this.circularDeps = [];
    this.unusedImports = {};
  }

  // Get all component files (JS, HTML, CSS)
  getComponentFiles(dir = './components', maxDepth = 10, currentDepth = 0) {
    if (currentDepth > maxDepth) return [];
    const files = [];
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relPath = path.relative(this.rootDir, fullPath);
        if (entry.isDirectory()) {
          files.push(...this.getComponentFiles(fullPath, maxDepth, currentDepth + 1));
        } else if (/\.(js|html|css)$/.test(entry.name)) {
          files.push(relPath);
        }
      }
    } catch (e) {
      console.warn(`Could not read ${dir}:`, e.message);
    }
    return files;
  }

  // Extract imports from a file
  extractImports(filePath) {
    const imports = [];
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      // Match ES6 imports
      const importRegex = /import\s+(?:{[^}]*}|[\w*]+|[\w*]+\s+from)?\s*['"]([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        imports.push(match[1]);
      }
      // Match require statements
      const requireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
      while ((match = requireRegex.exec(content)) !== null) {
        imports.push(match[1]);
      }
    } catch (e) {
      console.warn(`Could not read ${filePath}:`, e.message);
    }
    return imports;
  }

  // Resolve import path to actual file
  resolveImport(importPath, fromFile) {
    if (importPath.startsWith('.')) {
      const dir = path.dirname(fromFile);
      const resolved = path.resolve(path.join(dir, importPath));
      // Try variations
      for (const ext of ['', '.js', '.mjs', '/index.js']) {
        const candidate = resolved + ext;
        if (fs.existsSync(candidate)) return path.relative(this.rootDir, candidate);
      }
      return null;
    }
    // External imports (node_modules, CDN)
    return null;
  }

  // Build dependency graph
  buildGraph() {
    const files = this.getComponentFiles();
    for (const file of files) {
      this.graph[file] = [];
      this.imports[file] = this.extractImports(file);
      for (const imp of this.imports[file]) {
        const resolved = this.resolveImport(imp, file);
        if (resolved) {
          this.graph[file].push(resolved);
        }
      }
    }
  }

  // Detect circular dependencies using DFS
  detectCircularDeps() {
    const visited = new Set();
    const recStack = new Set();

    const dfs = (node, path = []) => {
      visited.add(node);
      recStack.add(node);
      path.push(node);

      for (const neighbor of this.graph[node] || []) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, [...path]);
        } else if (recStack.has(neighbor)) {
          const cycle = path.slice(path.indexOf(neighbor));
          if (!this.circularDeps.some(c => JSON.stringify(c.sort()) === JSON.stringify(cycle.sort()))) {
            this.circularDeps.push(cycle);
          }
        }
      }

      recStack.delete(node);
    };

    for (const node of Object.keys(this.graph)) {
      if (!visited.has(node)) {
        dfs(node);
      }
    }
  }

  // Analyze unused imports
  analyzeUnusedImports() {
    for (const [file, imports] of Object.entries(this.imports)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const unused = [];
        for (const imp of imports) {
          // Extract name from import
          const nameMatch = imp.match(/\/([^/]+)(?:\.js)?$/);
          if (!nameMatch) continue;
          const name = nameMatch[1].replace(/-/g, '');
          // Simple heuristic: check if name appears in content (rough check)
          if (!content.includes(name) && !imp.includes('node_modules')) {
            unused.push(imp);
          }
        }
        if (unused.length > 0) {
          this.unusedImports[file] = unused;
        }
      } catch (e) {
        // ignore
      }
    }
  }

  // Generate report
  generateReport() {
    this.buildGraph();
    this.detectCircularDeps();
    this.analyzeUnusedImports();

    const report = {
      timestamp: new Date().toISOString(),
      components: Object.keys(this.graph).length,
      totalImports: Object.values(this.imports).reduce((sum, arr) => sum + arr.length, 0),
      circularDependencies: this.circularDeps.map((cycle, idx) => ({
        id: idx + 1,
        files: cycle,
        count: cycle.length
      })),
      unusedImports: Object.entries(this.unusedImports).map(([file, imports]) => ({
        file,
        imports,
        count: imports.length
      })),
      graph: this.graph,
      summary: {
        hasCircularDeps: this.circularDeps.length > 0,
        circularDepCount: this.circularDeps.length,
        filesWithUnusedImports: Object.keys(this.unusedImports).length,
        totalUnusedImports: Object.values(this.unusedImports).reduce((sum, arr) => sum + arr.length, 0)
      }
    };

    return report;
  }

  // Run analysis and save report
  run(outputDir = './reports/dependencies') {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('🔍 Analyzing component dependencies...');
    const report = this.generateReport();

    const reportPath = path.join(outputDir, 'analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Report saved to ${reportPath}`);

    // Print summary
    console.log('\n📊 Dependency Analysis Summary:');
    console.log(`  Components scanned: ${report.components}`);
    console.log(`  Total imports: ${report.totalImports}`);
    console.log(`  Circular dependencies: ${report.summary.circularDepCount}`);
    console.log(`  Files with unused imports: ${report.summary.filesWithUnusedImports}`);

    if (report.circularDependencies.length > 0) {
      console.log('\n⚠️  Circular Dependencies:');
      report.circularDependencies.forEach(dep => {
        console.log(`  ${dep.id}. ${dep.files.join(' → ')}`);
      });
    }

    if (report.unusedImports.length > 0) {
      console.log('\n⚠️  Unused Imports (sample):');
      report.unusedImports.slice(0, 5).forEach(item => {
        console.log(`  ${item.file}: ${item.count} unused`);
      });
    }

    return report;
  }
}

// CLI
if (require.main === module) {
  const analyzer = new DependencyAnalyzer('./');
  analyzer.run();
}

module.exports = DependencyAnalyzer;
