# Performance Monitoring System

The UI-Verse Performance Monitoring System provides comprehensive performance tracking, analysis, and optimization tools for all components in the library.

## Overview

This system automatically monitors component performance metrics and ensures compliance with performance budgets.

## Features

✅ **Automated Performance Profiling**
- Measures load times, render performance, and resource usage
- Captures metrics for 100+ components
- Supports retry logic for reliability

✅ **Performance Budgets**
- Define and enforce performance budgets per component
- Component-level and default budget support
- Fails CI if budgets are exceeded

✅ **Visual Dashboard**
- Interactive performance dashboard (`performance-dashboard.html`)
- Real-time metrics visualization
- Top slowest components highlighting
- Performance violations reporting

✅ **Comprehensive Metrics**
- Load time (DOMContentLoaded, LoadComplete)
- Resource count and size tracking
- DOM structure analysis
- CSS metrics (rules, specificity, size)
- Memory footprint measurement

✅ **CI Integration**
- Automated performance checks in pull requests
- Build failure on budget violations
- Performance trend tracking
- Detailed violation reports

## Usage

### Run Performance Monitor

```bash
npm run perf:monitor
```

This command:
- Analyzes all components in the project
- Measures performance metrics
- Checks against performance budgets
- Generates detailed reports

### View Performance Dashboard

```bash
npm run perf:dashboard
```

Then open `performance-dashboard.html` in your browser to view:
- Overall performance statistics
- Component load times
- Budget violations
- Top slowest components

### Check Performance in CI

```bash
npm run perf:check
```

This is typically run in CI/CD pipelines to prevent performance regressions.

## Performance Budget Configuration

Edit `performance-budgets.json` to define budgets:

```json
{
  "default": {
    "maxLoadTimeMs": 1000,
    "maxDOMNodes": 1000,
    "maxCSSSize": 100000
  },
  "components": {
    "button.html": {
      "maxLoadTimeMs": 200,
      "maxDOMNodes": 100,
      "maxCSSSize": 10000
    }
  }
}
```

## Output Files

Performance reports are generated in `reports/performance-analysis/`:

- **performance-report.json** - Complete performance data for all components
- **slowest-components.json** - Top 10 slowest components
- **violations.json** - Performance budget violations

## Metrics Explained

### Load Time
- **DOMContentLoaded**: Time until DOM is fully parsed
- **LoadComplete**: Total page load time
- Budget: Typically 100-300ms for components

### DOM Metrics
- **domNodes**: Total number of DOM elements
- **depth**: Maximum nesting depth of DOM tree
- Budget: Typically 100-500 nodes for simple components

### CSS Metrics
- **cssRules**: Number of CSS rules loaded
- **maxSpecificity**: Maximum CSS selector specificity
- **cssSize**: Total CSS file size in bytes

### Resource Metrics
- **resourceCount**: Total HTTP requests
- **totalResourceSize**: Total bytes downloaded
- **byType**: Resources grouped by type (script, style, image, etc.)

## Performance Targets

### Excellent (Score 100)
- Load time < 100ms
- DOM nodes < 100
- Resources < 5

### Good (Score 75)
- Load time < 500ms
- DOM nodes < 500
- Resources < 10

### Fair (Score 50)
- Load time < 1000ms
- DOM nodes < 1000
- Resources < 20

### Needs Improvement (Score 25)
- Load time > 1000ms
- DOM nodes > 1000
- Resources > 20

## Optimization Tips

### Reduce Load Time
- Minimize HTTP requests
- Compress assets
- Use CSS shorthand properties
- Defer non-critical JavaScript
- Use CSS variables instead of inline styles

### Reduce DOM Complexity
- Flatten nested structures
- Remove unnecessary wrapper elements
- Use semantic HTML
- Consider CSS-only solutions

### Optimize CSS
- Remove unused selectors
- Reduce CSS specificity
- Use CSS classes instead of IDs
- Minimize selector complexity

### Monitor Resources
- Identify unused dependencies
- Bundle and minify code
- Use modern image formats (WebP)
- Lazy-load resources when possible

## CI Integration

Add to your CI workflow:

```yaml
- name: Check Performance Budgets
  run: npm run perf:check
```

The check will:
- Exit with code 0 if all budgets passed
- Exit with code 1 if any violations found
- Generate detailed violation reports
- Comment on pull requests with results

## Troubleshooting

### Performance Monitor Fails
- Ensure all HTML files are valid
- Check browser timeout settings
- Verify file paths are correct
- Check browser console for errors

### Dashboard Shows No Data
- Run `npm run perf:monitor` first
- Ensure `reports/performance-analysis/performance-report.json` exists
- Check browser's CORS settings
- Verify JSON file is valid

### Budget Violations
- Review slowest components first
- Use browser DevTools Performance tab
- Simplify component structure
- Remove unused resources
- Optimize CSS and JavaScript

## Advanced Usage

### Profile Individual Component

```javascript
const PerformanceMonitor = require('./scripts/performance-monitor.js');
const monitor = new PerformanceMonitor();

// Profile specific component
const metrics = await monitor.measureComponentPerformance(
  browser,
  './components/button/button.html',
  'button'
);
```

### Custom Performance Analysis

```javascript
const { profileComponent, analyzePerformance } = require('./tests/performance/component-profiler.js');

const profile = await profileComponent(page, componentPath);
const analysis = analyzePerformance(profile);

console.log('Overall Score:', analysis.overallScore);
console.log('Recommendations:', analysis.recommendations);
```

## Performance Trends

The system tracks performance over time. View trends:

1. Run monitor multiple times
2. Check `reports/performance-analysis/` directory
3. Historical data accumulates automatically
4. Use this data to identify regressions

## Support

For issues or questions about the performance monitoring system:

1. Check this documentation
2. Review generated reports
3. Open an issue on GitHub
4. See optimization tips above

## Contributing

To improve the performance monitoring system:

1. Report performance bugs
2. Suggest new metrics
3. Improve detection algorithms
4. Add new optimization rules
5. Share optimization techniques

---

**Happy optimizing! 🚀**
