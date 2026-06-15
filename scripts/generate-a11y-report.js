#!/usr/bin/env node
/**
 * Generate aggregated accessibility report with category scores and badge eligibility
 */

const fs = require('fs');
const path = require('path');

const AUDIT_PATH = './reports/a11y/audit-report.json';
const OUTPUT_PATH = './reports/a11y/aggregated-report.json';

function generateReport() {
  if (!fs.existsSync(AUDIT_PATH)) {
    console.error('❌ audit-report.json not found. Run: npm run a11y:audit');
    process.exit(1);
  }

  const audit = JSON.parse(fs.readFileSync(AUDIT_PATH, 'utf8'));
  const { results, summary } = audit;

  // Category aggregates
  const categories = {};
  for (const r of results) {
    if (!categories[r.category]) {
      categories[r.category] = { components: [], totalScore: 0, errors: 0, warnings: 0 };
    }
    categories[r.category].components.push(r);
    categories[r.category].totalScore += r.score;
    categories[r.category].errors += r.errors;
    categories[r.category].warnings += r.warnings;
  }

  const categorySummary = Object.entries(categories).map(([id, data]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' '),
    componentCount: data.components.length,
    averageScore: Math.round(data.totalScore / data.components.length),
    totalErrors: data.errors,
    totalWarnings: data.warnings,
    passRate: Math.round((data.components.filter(c => c.status === 'pass').length / data.components.length) * 100),
    components: data.components.map(c => ({
      file: c.file,
      title: c.title,
      score: c.score,
      status: c.status,
      errors: c.errors,
      warnings: c.warnings
    }))
  })).sort((a, b) => a.averageScore - b.averageScore);

  // Badge eligibility: components with 100% score and zero errors
  const badgeEligible = results
    .filter(r => r.score === 100 && r.errors === 0)
    .map(r => ({ file: r.file, title: r.title, category: r.category }));

  // Violation frequency
  const violationFreq = {};
  for (const r of results) {
    for (const v of r.violations) {
      if (!violationFreq[v.rule]) violationFreq[v.rule] = { count: 0, affected: [] };
      violationFreq[v.rule].count++;
      violationFreq[v.rule].affected.push({ file: r.file, title: r.title });
    }
  }
  const topViolations = Object.entries(violationFreq)
    .map(([rule, data]) => ({ rule, count: data.count, affected: data.affected }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const report = {
    generatedAt: new Date().toISOString(),
    summary,
    categorySummary,
    badgeEligible,
    badgeEligibleCount: badgeEligible.length,
    topViolations,
    allResults: results.map(r => ({
      file: r.file,
      title: r.title,
      category: r.category,
      score: r.score,
      status: r.status,
      errors: r.errors,
      warnings: r.warnings,
      violations: r.violations.map(v => ({
        rule: v.rule,
        message: v.message,
        selector: v.selector,
        severity: v.severity,
        criterion: v.criterion,
        level: v.level,
        fix: v.fix
      }))
    }))
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2));
  console.log(`✅ Aggregated report saved to ${OUTPUT_PATH}`);
  console.log(`   Categories: ${categorySummary.length}`);
  console.log(`   Badge eligible: ${badgeEligible.length}`);
  console.log(`   Top violation: ${topViolations[0]?.rule || 'none'} (${topViolations[0]?.count || 0} files)`);
}

generateReport();