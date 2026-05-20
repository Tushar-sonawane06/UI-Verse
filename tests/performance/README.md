# Performance Testing Suite

This directory contains performance monitoring and profiling tools for UI-Verse components.

## Files

### Scripts

- **performance-monitor.js** - Main performance monitoring script
  - Scans all HTML components
  - Measures performance metrics
  - Generates reports
  - Checks against budgets

- **component-profiler.js** - Component profiling utilities
  - Profile individual components
  - Analyze performance metrics
  - Generate recommendations
  - Calculate performance scores

### Tests

- **performance.spec.js** - Playwright-based performance tests
  - Load time measurements
  - Resource analysis
  - DOM structure analysis
  - CSS metrics collection
  - Paint timing measurement
  - Error handling

## Usage

### Run All Tests

```bash
# Using performance config
npx playwright test --config playwright.performance.config.ts

# Or run with npm script
npm run perf:monitor
```

### Run Specific Test

```bash
npx playwright test tests/performance/performance.spec.js -g "should measure component load time"
```

### Debug Tests

```bash
npx playwright test tests/performance/performance.spec.js --debug
```

### Update Test Snapshots

```bash
npx playwright test tests/performance/performance.spec.js --update-snapshots
```

## Metrics Collected

### Load Time Metrics
- DOM Content Loaded: Time to parse and load DOM
- Load Complete: Total page load time
- Time to First Byte: Network latency measurement

### Resource Metrics
- Total HTTP requests
- Total bytes transferred
- Resources grouped by type (script, style, image, etc.)

### DOM Metrics
- Total DOM elements
- DOM tree depth
- Number of head elements
- Number of body elements

### CSS Metrics
- Number of CSS rules
- CSS selector specificity
- Total CSS file size
- Number of stylesheet links

### Paint Metrics
- First Paint timing
- First Contentful Paint timing
- Largest Contentful Paint timing

## Performance Targets

### Load Time
- **Excellent**: < 100ms
- **Good**: < 500ms
- **Fair**: < 1000ms
- **Needs Improvement**: > 1000ms

### DOM Complexity
- **Excellent**: < 100 elements
- **Good**: < 500 elements
- **Fair**: < 1000 elements
- **Needs Improvement**: > 1000 elements

### CSS Size
- **Excellent**: < 10KB
- **Good**: < 50KB
- **Fair**: < 100KB
- **Needs Improvement**: > 100KB

## Understanding Reports

### performance-report.json
Complete performance data for all components:
- Timestamp of measurement
- Statistics (pass/fail counts, averages)
- Per-component metrics
- All violations found

### slowest-components.json
Top 10 slowest components by load time:
- Component name and path
- Load time measurements
- Resource counts
- DOM metrics

### violations.json
Performance budget violations:
- Component name
- Metric that exceeded budget
- Actual vs budget values
- Unit of measurement

## Optimization Guide

### Reduce Load Time
1. Minimize HTTP requests
2. Compress assets (gzip, brotli)
3. Use CSS shorthand properties
4. Defer non-critical JavaScript
5. Reduce CSS file size

### Reduce DOM Complexity
1. Remove unnecessary wrapper divs
2. Use semantic HTML elements
3. Avoid excessive nesting
4. Combine multiple elements where possible
5. Use CSS-only solutions instead of extra markup

### Optimize CSS
1. Remove unused CSS selectors
2. Reduce selector specificity
3. Avoid inline styles
4. Use CSS classes for styling
5. Minimize CSS rule count

## Troubleshooting

### Tests Fail to Run
- Ensure Playwright is installed: `npm install`
- Check that HTML files exist and are valid
- Verify file paths are correct
- Check browser timeout settings (default: 30s)

### No Performance Data
- Run `npm run perf:monitor` first
- Check `reports/performance-analysis/` directory exists
- Ensure report files are generated
- Verify JSON format is valid

### Inaccurate Measurements
- Run measurements multiple times (data may vary)
- Close other applications
- Check network conditions
- Monitor system resources
- Increase timeout if needed

## Integration with CI/CD

Add to GitHub Actions:

```yaml
- name: Run Performance Tests
  run: npm run perf:monitor

- name: Upload Reports
  uses: actions/upload-artifact@v3
  with:
    name: performance-reports
    path: reports/performance-analysis/
```

## Contributing

To improve performance testing:

1. Add new test cases to `performance.spec.js`
2. Improve metric collection in `component-profiler.js`
3. Add new metrics to analysis
4. Suggest performance improvements
5. Document findings and techniques

## References

- [Playwright Performance Testing](https://playwright.dev/docs/performance-testing)
- [Web Performance APIs](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
- [Performance Budget Guide](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/)
- [Core Web Vitals](https://web.dev/vitals/)

---

For more information, see [PERFORMANCE_MONITORING.md](../docs/PERFORMANCE_MONITORING.md)
