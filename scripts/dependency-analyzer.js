#!/usr/bin/env node
// UI-Verse Component Dependency & Import Analysis Tool
// Scans root-level HTML/CSS component files, extracts <link>, <script src>, @import
// and generates a typed dependency graph (CSS, JS, shared-utility).

const fs = require('fs');
const path = require('path');

const SHARED_CSS = new Set([
  'style.css','home.css','shared-page.css','shared-sidebar.css',
  'design-tokens.css','css/url-state.css','accessibility.css',
  'footer.css','navbar.css','sidebar.css'
]);
const SHARED_JS = new Set([
  'script.js','playground.js','js/loader.js','js/bootstrap.js',
  'js/registry.js','js/theme-api.js'
]);
const CDN_PATTERNS = [
  /^https?:\/\//,
  /^\/\//,
  /cdnjs\.cloudflare\.com/,
  /fonts\.googleapis\.com/,
  /unpkg\.com/,
  /jsdelivr\.net/
];

class DependencyAnalyzer {
  constructor(rootDir = '.') {
    this.rootDir = path.resolve(rootDir);
    this.nodes = new Map();      // id -> {id, type, category, path}
    this.edges = [];             // {source, target, type}
    this.orphans = new Set();    // component ids with no shared deps
    this.circularDeps = [];
    this.componentIndex = null;  // loaded from components-index-data.js
  }

  /* ---------- Discovery ---------- */

  loadComponentIndex() {
    const indexPath = path.join(this.rootDir, 'components', 'components-index-data.js');
    if (!fs.existsSync(indexPath)) return;
    const raw = fs.readFileSync(indexPath, 'utf8');
    // Strip the window.UIVerseComponentsIndexData = prefix and trailing semicolon
    const jsonStart = raw.indexOf('{');
    const jsonEnd = raw.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) return;
    try {
      this.componentIndex = JSON.parse(raw.slice(jsonStart, jsonEnd + 1));
    } catch (e) {
      console.warn('Could not parse component index:', e.message);
    }
  }

  getCategoryForPath(filePath) {
    if (!this.componentIndex) return 'other';
    const rel = filePath.replace(/\\/g, '/');
    for (const cat of this.componentIndex.categories || []) {
      for (const item of cat.items || []) {
        if (item.path === rel) return cat.id;
      }
    }
    return 'other';
  }

  getComponentTitle(filePath) {
    if (!this.componentIndex) return path.basename(filePath, path.extname(filePath));
    const rel = filePath.replace(/\\/g, '/');
    for (const cat of this.componentIndex.categories || []) {
      for (const item of cat.items || []) {
        if (item.path === rel) return item.title || item.id;
      }
    }
    return path.basename(filePath, path.extname(filePath));
  }

  isRootComponentFile(name) {
    // Root-level .html files that are component pages (not index.html, docs, etc.)
    const exclude = new Set([
      'index.html','documentation.html','guidelines.html','about.html',
      'faq.html','contact.html','terms.html','privacypolicy.html',
      'license.html','dependency-dashboard.html','performance-dashboard.html',
      'admin-panel.html','test-command-palette.html','test-security-csp.html',
      'test-url-state.html','url-state.html','verify-produce.html',
      'smart-search-demo.html','web-components-demo.html','welcome.html'
    ]);
    return name.endsWith('.html') && !exclude.has(name);
  }

  scanFiles() {
    const entries = fs.readdirSync(this.rootDir, { withFileTypes: true });
    const files = [];
    for (const ent of entries) {
      if (!ent.isFile()) continue;
      const name = ent.name;
      if (this.isRootComponentFile(name) || name.endsWith('.css')) {
        files.push(path.join(this.rootDir, name));
      }
    }
    // Also scan subfolder .html files that are component pages
    const subDirs = fs.readdirSync(this.rootDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && !['node_modules','reports','dist','tests','bench','scripts','.github','.storybook'].includes(d.name))
      .map(d => d.name);
    for (const dir of subDirs) {
      const dirPath = path.join(this.rootDir, dir);
      try {
        const subEntries = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const ent of subEntries) {
          if (ent.isFile() && ent.name.endsWith('.html')) {
            files.push(path.join(dirPath, ent.name));
          }
        }
      } catch (e) { /* ignore unreadable */ }
    }
    return files;
  }

  /* ---------- Extraction ---------- */

  extractHtmlDeps(filePath) {
    const deps = [];
    let content;
    try { content = fs.readFileSync(filePath, 'utf8'); } catch (e) { return deps; }

    // <link rel="stylesheet" href="...">
    const linkRe = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["'][^>]*>/gi;
    let m;
    while ((m = linkRe.exec(content)) !== null) {
      deps.push({ type: 'css', raw: m[1] });
    }

    // <script src="..." defer?>
    const scriptRe = /<script[^>]+src=["']([^"']+)["'][^>]*>/gi;
    while ((m = scriptRe.exec(content)) !== null) {
      deps.push({ type: 'js', raw: m[1] });
    }

    // @import url("...") or @import '...';
    const importRe = /@import\s+(?:url\()?["']([^"']+)["']\)?;/gi;
    while ((m = importRe.exec(content)) !== null) {
      deps.push({ type: 'css', raw: m[1] });
    }

    return deps;
  }

  resolveDep(rawDep, fromFile) {
    if (CDN_PATTERNS.some(p => p.test(rawDep))) return null; // skip CDN
    const dir = path.dirname(fromFile);
    let resolved = path.resolve(dir, rawDep);
    if (fs.existsSync(resolved)) return path.relative(this.rootDir, resolved).replace(/\\/g, '/');
    // Try with extensions
    for (const ext of ['.css', '.js', '.html']) {
      const withExt = resolved + ext;
      if (fs.existsSync(withExt)) return path.relative(this.rootDir, withExt).replace(/\\/g, '/');
    }
    return null;
  }

  classifyEdge(targetPath) {
    const base = path.basename(targetPath);
    if (SHARED_CSS.has(base) || targetPath.startsWith('css/')) return 'shared-css';
    if (SHARED_JS.has(base) || targetPath.startsWith('js/')) return 'shared-js';
    if (base.endsWith('.css')) return 'css';
    if (base.endsWith('.js')) return 'js';
    return 'other';
  }

  /* ---------- Graph Building ---------- */

  buildGraph() {
    this.loadComponentIndex();
    const files = this.scanFiles();

    // Create nodes
    for (const file of files) {
      const rel = path.relative(this.rootDir, file).replace(/\\/g, '/');
      const isComponent = rel.endsWith('.html');
      const type = isComponent ? 'component' : 'stylesheet';
      const category = isComponent ? this.getCategoryForPath(rel) : 'resource';
      this.nodes.set(rel, {
        id: rel,
        type,
        category,
        title: this.getComponentTitle(rel),
        path: rel
      });
    }

    // Create edges
    for (const file of files) {
      const rel = path.relative(this.rootDir, file).replace(/\\/g, '/');
      const deps = this.extractHtmlDeps(file);
      for (const dep of deps) {
        const resolved = this.resolveDep(dep.raw, file);
        if (!resolved) continue;

        // Ensure target node exists
        if (!this.nodes.has(resolved)) {
          const isComp = resolved.endsWith('.html');
          this.nodes.set(resolved, {
            id: resolved,
            type: isComp ? 'component' : 'resource',
            category: isComp ? this.getCategoryForPath(resolved) : 'resource',
            title: path.basename(resolved, path.extname(resolved)),
            path: resolved
          });
        }

        const edgeType = dep.type === 'css' ? this.classifyEdge(resolved) : 'js';
        this.edges.push({ source: rel, target: resolved, type: edgeType });
      }
    }

    // Detect orphans: components with no edges to shared resources
    for (const [id, node] of this.nodes) {
      if (node.type !== 'component') continue;
      const hasShared = this.edges.some(e =>
        e.source === id && (e.type === 'shared-css' || e.type === 'shared-js')
      );
      if (!hasShared) this.orphans.add(id);
    }
  }

  /* ---------- Circular Detection ---------- */

  detectCircular() {
    const adj = new Map();
    for (const [id] of this.nodes) adj.set(id, []);
    for (const e of this.edges) {
      if (!adj.has(e.source)) adj.set(e.source, []);
      adj.get(e.source).push(e.target);
    }

    const visited = new Set();
    const recStack = new Set();

    const dfs = (node, stack = []) => {
      visited.add(node);
      recStack.add(node);
      stack.push(node);

      for (const neighbor of adj.get(node) || []) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, [...stack]);
        } else if (recStack.has(neighbor)) {
          const cycle = stack.slice(stack.indexOf(neighbor));
          const key = cycle.slice().sort().join('|');
          if (!this.circularDeps.some(c => c.key === key)) {
            this.circularDeps.push({ key, cycle });
          }
        }
      }
      recStack.delete(node);
    };

    for (const node of adj.keys()) {
      if (!visited.has(node)) dfs(node);
    }
  }

  /* ---------- Report ---------- */

  generateReport() {
    this.buildGraph();
    this.detectCircular();

    const components = [...this.nodes.values()].filter(n => n.type === 'component');
    const resources = [...this.nodes.values()].filter(n => n.type !== 'component');
    const sharedCssEdges = this.edges.filter(e => e.type === 'shared-css');
    const sharedJsEdges = this.edges.filter(e => e.type === 'shared-js');
    const cssEdges = this.edges.filter(e => e.type === 'css' && e.type !== 'shared-css');
    const jsEdges = this.edges.filter(e => e.type === 'js' && e.type !== 'shared-js');

    // Compute dependents
    const dependents = new Map();
    for (const e of this.edges) {
      if (!dependents.has(e.target)) dependents.set(e.target, new Set());
      dependents.get(e.target).add(e.source);
    }

    // Compute transitive deps per component
    const transitive = new Map();
    for (const comp of components) {
      const visited = new Set();
      const queue = [comp.id];
      while (queue.length) {
        const curr = queue.shift();
        for (const e of this.edges) {
          if (e.source === curr && !visited.has(e.target)) {
            visited.add(e.target);
            queue.push(e.target);
          }
        }
      }
      visited.delete(comp.id);
      transitive.set(comp.id, [...visited]);
    }

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalNodes: this.nodes.size,
        componentCount: components.length,
        resourceCount: resources.length,
        totalEdges: this.edges.length,
        sharedCssEdges: sharedCssEdges.length,
        sharedJsEdges: sharedJsEdges.length,
        cssEdges: cssEdges.length,
        jsEdges: jsEdges.length,
        circularCount: this.circularDeps.length,
        orphanCount: this.orphans.size
      },
      nodes: [...this.nodes.values()],
      edges: this.edges,
      orphans: [...this.orphans],
      circularDependencies: this.circularDeps.map((c, i) => ({
        id: i + 1,
        files: c.cycle,
        count: c.cycle.length
      })),
      componentDetails: components.map(c => ({
        id: c.id,
        title: c.title,
        category: c.category,
        directDeps: this.edges.filter(e => e.source === c.id).map(e => e.target),
        dependents: [...(dependents.get(c.id) || new Set())],
        transitiveDeps: transitive.get(c.id) || [],
        isOrphan: this.orphans.has(c.id)
      })),
      resourceDetails: resources.map(r => ({
        id: r.id,
        title: r.title,
        type: r.type,
        dependents: [...(dependents.get(r.id) || new Set())],
        dependentCount: (dependents.get(r.id) || new Set()).size
      }))
    };

    return report;
  }

  run(outputDir = './reports/dependencies') {
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    console.log('🔍 Scanning UI-Verse component dependencies...');
    const report = this.generateReport();

    const reportPath = path.join(outputDir, 'analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Report saved to ${reportPath}`);

    console.log('\n📊 Dependency Analysis Summary:');
    console.log(`  Components: ${report.summary.componentCount}`);
    console.log(`  Resources:  ${report.summary.resourceCount}`);
    console.log(`  Edges:      ${report.summary.totalEdges}`);
    console.log(`  Shared CSS: ${report.summary.sharedCssEdges}`);
    console.log(`  Shared JS:  ${report.summary.sharedJsEdges}`);
    console.log(`  Circular:   ${report.summary.circularCount}`);
    console.log(`  Orphans:    ${report.summary.orphanCount}`);

    if (report.circularDependencies.length) {
      console.log('\n⚠️  Circular Dependencies:');
      report.circularDependencies.forEach(dep => {
        console.log(`  ${dep.id}. ${dep.files.join(' → ')}`);
      });
    }

    if (report.orphans.length) {
      console.log('\n⚠️  Orphaned Components (no shared deps):');
      report.orphans.slice(0, 10).forEach(o => console.log(`  - ${o}`));
    }

    return report;
  }
}

if (require.main === module) {
  const analyzer = new DependencyAnalyzer('.');
  analyzer.run();
}

module.exports = DependencyAnalyzer;
