# Component Dependency & Import Analysis Tool

This tool automatically analyzes your component codebase to detect dependency patterns, circular imports, and unused imports.

## Features

- **Dependency Graph**: Maps all internal component imports and their relationships.
- **Circular Dependency Detection**: Identifies circular imports that can cause runtime issues.
- **Unused Import Scanning**: Detects likely unused imports that can be removed for cleaner code.
- **Interactive Dashboard**: Visualize analysis results in `dependency-dashboard.html`.
- **JSON Reports**: Detailed machine-readable reports in `reports/dependencies/`.

## Usage

### Run Analysis

```bash
npm run dependencies:analyze
```

This generates `reports/dependencies/analysis-report.json` with:
- Component count and import statistics
- List of circular dependencies (if any)
- Files with unused imports
- Full dependency graph

### View Dashboard

```bash
npm run dependencies:dashboard
```

Then open `dependency-dashboard.html` in your browser to view:
- Summary metrics (components, imports, issues)
- Visualization of circular dependencies
- List of files with unused imports
- Sample dependency relationships

## API Usage

Use the analyzer in your scripts:

```js
const DependencyAnalyzer = require('./scripts/dependency-analyzer.js');

const analyzer = new DependencyAnalyzer('./');
const report = analyzer.run('./reports/dependencies');

console.log(report.summary);
```

## Methods

- `getComponentFiles(dir, maxDepth)` — Get all JS/HTML/CSS files from directory
- `extractImports(filePath)` — Parse imports from a file
- `resolveImport(importPath, fromFile)` — Resolve import to actual file path
- `buildGraph()` — Build internal dependency graph
- `detectCircularDeps()` — Identify circular imports
- `analyzeUnusedImports()` — Find likely unused imports
- `generateReport()` — Create full analysis report
- `run(outputDir)` — Run full analysis and save report

## Output Format

```json
{
  "timestamp": "2026-05-18T12:00:00.000Z",
  "components": 25,
  "totalImports": 150,
  "circularDependencies": [
    {
      "id": 1,
      "files": ["components/button.js", "components/modal.js", "components/button.js"],
      "count": 3
    }
  ],
  "unusedImports": [
    {
      "file": "components/widget.js",
      "imports": ["./utils.js"],
      "count": 1
    }
  ],
  "summary": {
    "hasCircularDeps": true,
    "circularDepCount": 1,
    "filesWithUnusedImports": 5,
    "totalUnusedImports": 12
  }
}
```

## CI Integration

Add to your CI pipeline:

```yaml
- name: Analyze dependencies
  run: npm run dependencies:analyze
  
- name: Check for circular deps
  run: |
    CIRCULAR=$(node -e "const r=require('./reports/dependencies/analysis-report.json'); process.exit(r.summary.circularDepCount > 0 ? 1 : 0)")
    if [ $? -ne 0 ]; then echo "Circular dependencies detected"; exit 1; fi
```

## Limitations

- Heuristic-based unused import detection (may have false positives/negatives).
- Relative imports only; external/CDN imports are categorized as external.
- Works best with ES6 modules and CommonJS `require()` patterns.

For production-grade analysis, consider tools like:
- `madge` — Advanced dependency graph visualization
- `depcheck` — Comprehensive unused dependency scanner
- `eslint-plugin-import` — Linting for import issues
