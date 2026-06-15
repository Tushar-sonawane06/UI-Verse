const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const os = require('os');

const sampleRoot = path.join(os.tmpdir(), `uiverse-a11y-${Date.now()}`);
const sampleDir = path.join(sampleRoot, 'pages');
const sampleFile = path.join(sampleDir, 'audit-sample.html');

function ensureFixture() {
  fs.mkdirSync(sampleDir, { recursive: true });
  fs.writeFileSync(sampleFile, `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sample A11y Page</title>
</head>
<body>
  <img src="hero.png">
  <button><i class="icon"></i></button>
  <input type="text" id="email">
</body>
</html>
`, 'utf8');
}

test.describe('Accessibility remediation system', () => {
  test('generates audit report and applies safe fixes', async () => {
    ensureFixture();
    const engine = require('../../scripts/accessibility-engine');

    const reportBefore = engine.analyzeFile(sampleFile);
    expect(reportBefore.errorCount).toBeGreaterThan(0);
    expect(reportBefore.fixableCount).toBeGreaterThan(0);

    const result = engine.run({ apply: true, rootDir: sampleRoot });
    expect(fs.existsSync(result.reportPath)).toBeTruthy();
    expect(fs.existsSync(result.dashboardPath)).toBeTruthy();

    const fixed = fs.readFileSync(sampleFile, 'utf8');
    expect(fixed).toContain('lang="en"');
    expect(fixed).toContain('alt=""');
    expect(fixed).toContain('data-a11y-remediation="button-label-needed"');
    expect(fixed).toContain('data-a11y-remediation="label-needed"');

    const report = JSON.parse(fs.readFileSync(result.reportPath, 'utf8'));
    expect(report.totals.pages).toBeGreaterThan(0);
    expect(report.totals.fixable).toBeGreaterThan(0);
  });

  test('produces remediation pipeline summary and baseline gate outputs', async () => {
    const engine = require('../../scripts/a11y-remediation');
    const result = engine.runPipeline({ apply: false });

    expect(fs.existsSync(result.pipelinePath)).toBeTruthy();
    expect(result.pipeline.before.pages).toBeGreaterThan(0);
    expect(result.pipeline.after.pages).toBeGreaterThan(0);
    expect(typeof result.delta.errors).toBe('number');
    expect(typeof result.remediation.filesChanged).toBe('number');
  });
});
