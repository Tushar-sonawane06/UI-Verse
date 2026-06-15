const fs = require('fs');
const path = require('path');
const assert = require('assert');
const test = require('node:test');

const checker = require('../../scripts/perf-budget-checker.js');

const tempDir = path.join('tests', 'performance', 'tmp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

test('perf budget analyzer and comparator', () => {
	const sampleHtmlPath = path.join('tests', 'performance', 'tmp', 'sample.html');
	const absSample = path.join(process.cwd(), sampleHtmlPath);
	fs.writeFileSync(absSample, `<html><head><link rel="stylesheet" href="style.css"></head><body><script src="app.js"></script><img src="img.png"></body></html>`);
	fs.writeFileSync(path.join(tempDir, 'style.css'), 'body{color:red}');
	fs.writeFileSync(path.join(tempDir, 'app.js'), 'console.log("x")');
	fs.writeFileSync(path.join(tempDir, 'img.png'), Buffer.from([0,1,2,3]));

	const report = checker.analyzeHtml(sampleHtmlPath);
	assert.equal(report.totalRequests, 3);
	assert.ok(report.totalBytes > 0);

	const budget = { maxTotalRequests: 2, maxTotalBytes: 10, maxJsBytes: 1 };
	const violations = checker.compareBudget(sampleHtmlPath, budget, report);
	assert.ok(violations.length >= 1);

	// cleanup
	fs.unlinkSync(absSample);
	fs.unlinkSync(path.join(tempDir, 'style.css'));
	fs.unlinkSync(path.join(tempDir, 'app.js'));
	fs.unlinkSync(path.join(tempDir, 'img.png'));
	fs.rmdirSync(tempDir);
});
