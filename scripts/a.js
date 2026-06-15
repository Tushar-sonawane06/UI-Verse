

const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(process.cwd(), 'reports', 'visual-scale');
const INPUT_FILE = path.join(REPORT_DIR, 'results.json');

const SUMMARY_JSON = path.join(REPORT_DIR, 'summary.json');
const SUMMARY_HTML = path.join(REPORT_DIR, 'summary.html');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function color(text, clr) {
  return `${clr}${text}${colors.reset}`;
}

if (!fs.existsSync(INPUT_FILE)) {
  console.error(color('❌ Visual results not found.', colors.red));
  console.log('Run visual scale tests first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));

let passed = 0;
let failed = 0;
let skipped = 0;
let duration = 0;

const failedTests = [];
const browserStats = {};

function registerBrowser(browserName, status) {
  if (!browserStats[browserName]) {
    browserStats[browserName] = {
      passed: 0,
      failed: 0,
      skipped: 0
    };
  }

  browserStats[browserName][status]++;
}

function walkSuite(suite) {
  if (suite.specs) {
    for (const spec of suite.specs) {

      if (!spec.tests) continue;

      for (const test of spec.tests) {

        const result =
          (test.results && test.results[test.results.length - 1]) || {};

        const status = result.status || test.status || 'unknown';

        const browser =
          (test.projectName || result.projectName || 'unknown').toLowerCase();

        duration += result.duration || 0;

        if (status === 'passed') {
          passed++;
          registerBrowser(browser, 'passed');
        }

        else if (status === 'skipped') {
          skipped++;
          registerBrowser(browser, 'skipped');
        }

        else {
          failed++;
          registerBrowser(browser, 'failed');

          failedTests.push({
            title: spec.title,
            browser,
            file: spec.file || 'unknown',
            error:
              result.error?.message ||
              result.errors?.[0]?.message ||
              'Unknown error'
          });
        }
      }
    }
  }

  if (suite.suites) {
    suite.suites.forEach(walkSuite);
  }
}

(data.suites || []).forEach(walkSuite);

const total = passed + failed + skipped;

const successRate =
  passed + failed > 0
    ? Number(((passed / (passed + failed)) * 100).toFixed(2))
    : 100;

const summary = {
  timestamp: new Date().toISOString(),
  total,
  passed,
  failed,
  skipped,
  durationMs: duration,
  durationSeconds: Number((duration / 1000).toFixed(2)),
  successRate,
  browserStats,
  failedTests
};

fs.mkdirSync(REPORT_DIR, { recursive: true });

fs.writeFileSync(
  SUMMARY_JSON,
  JSON.stringify(summary, null, 2)
);

/**
 * HTML REPORT
 */

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Visual Scale Report</title>

<style>
body{
  font-family: Arial, sans-serif;
  background:#0f172a;
  color:white;
  padding:40px;
}

.card{
  background:#1e293b;
  padding:20px;
  border-radius:12px;
  margin-bottom:20px;
}

h1{
  color:#38bdf8;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}

.metric{
  padding:20px;
  border-radius:10px;
  background:#334155;
}

.pass{border-left:5px solid #22c55e;}
.fail{border-left:5px solid #ef4444;}
.skip{border-left:5px solid #facc15;}

table{
  width:100%;
  border-collapse:collapse;
}

th, td{
  padding:12px;
  border-bottom:1px solid #334155;
  text-align:left;
}

.badge{
  padding:4px 10px;
  border-radius:999px;
  font-size:12px;
}

.green{background:#14532d;}
.red{background:#7f1d1d;}
.yellow{background:#713f12;}
</style>
</head>

<body>

<h1>📊 Visual Scale Summary</h1>

<div class="grid">

<div class="metric pass">
<h2>Total</h2>
<p>${summary.total}</p>
</div>

<div class="metric pass">
<h2>Passed</h2>
<p>${summary.passed}</p>
</div>

<div class="metric fail">
<h2>Failed</h2>
<p>${summary.failed}</p>
</div>

<div class="metric skip">
<h2>Skipped</h2>
<p>${summary.skipped}</p>
</div>

<div class="metric">
<h2>Success Rate</h2>
<p>${summary.successRate}%</p>
</div>

<div class="metric">
<h2>Duration</h2>
<p>${summary.durationSeconds}s</p>
</div>

</div>

<div class="card">
<h2>🌐 Browser Stats</h2>

<table>
<tr>
<th>Browser</th>
<th>Passed</th>
<th>Failed</th>
<th>Skipped</th>
</tr>

${Object.entries(browserStats)
  .map(
    ([browser, stats]) => `
<tr>
<td>${browser}</td>
<td>${stats.passed}</td>
<td>${stats.failed}</td>
<td>${stats.skipped}</td>
</tr>
`
  )
  .join('')}

</table>
</div>

<div class="card">
<h2>❌ Failed Tests</h2>

${
  failedTests.length === 0
    ? '<p>No failed tests 🎉</p>'
    : `
<table>
<tr>
<th>Test</th>
<th>Browser</th>
<th>File</th>
<th>Error</th>
</tr>

${failedTests
  .map(
    t => `
<tr>
<td>${t.title}</td>
<td>${t.browser}</td>
<td>${t.file}</td>
<td>${t.error}</td>
</tr>
`
  )
  .join('')}

</table>
`
}
</div>

</body>
</html>
`;

fs.writeFileSync(SUMMARY_HTML, html);

/**
 * CONSOLE OUTPUT
 */

console.log('\n' + color('📊 Visual Scale Summary', colors.bold));

console.log(
  color(`✔ Passed : ${passed}`, colors.green)
);

console.log(
  color(`✖ Failed : ${failed}`, colors.red)
);

console.log(
  color(`➜ Skipped: ${skipped}`, colors.yellow)
);

console.log(
  color(`⏱ Duration: ${(duration / 1000).toFixed(2)}s`, colors.cyan)
);

console.log(
  color(`🎯 Success Rate: ${successRate}%`, colors.bold)
);

console.log('\nReports Generated:');

console.log(
  color(`JSON → ${path.relative(process.cwd(), SUMMARY_JSON)}`, colors.cyan)
);

console.log(
  color(`HTML → ${path.relative(process.cwd(), SUMMARY_HTML)}`, colors.cyan)
);

if (failed > 0) {
  console.log(
    color('\n❌ Some visual tests failed.', colors.red)
  );
  process.exit(1);
}

console.log(
  color('\n✅ All visual tests passed.', colors.green)
);