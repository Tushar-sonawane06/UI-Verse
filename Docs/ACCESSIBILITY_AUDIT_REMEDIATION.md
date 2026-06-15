# Accessibility Audit & Remediation System

This system scans UI-Verse pages for common accessibility issues and produces a remediation plan with safe auto-fixes.

## What it does

- Scans all HTML pages for accessibility issues.
- Assigns severity and scores to each page.
- Classifies issues as fixable or manual.
- Generates a JSON report, Markdown report, and dashboard.
- Applies safe fixes when run with `--apply`.

## Run the audit

```bash
npm run a11y:remediate
```

This now also writes a remediation pipeline summary at:

- `reports/a11y/remediation-pipeline.json`

## Apply safe fixes

```bash
npm run a11y:remediate:apply
```

Run strict mode to fail the command when accessibility errors remain:

```bash
npm run a11y:remediate:strict
```

## Outputs

- `reports/a11y/audit-remediation-report.json`
- `reports/a11y/audit-remediation-report.md`
- `reports/a11y/remediation-pipeline.json`
- `public/a11y-remediation-dashboard.html`

## Baseline Gate

The non-regression gate runs with:

```bash
npm run a11y:remediation:check
```

It compares the current audit against:

- `reports/a11y/audit-remediation-baseline.json`

and fails if errors, warnings, fixable issues, pass rate, or average score regress beyond tolerance.

## Safe fixes

The remediation engine automatically handles:

- Missing `lang` on `<html>`
- Missing skip links
- Decorative images without `alt`
- Authoring hints for unlabeled buttons and inputs

## Notes

- Some issues still require manual review, such as landmark structure and empty headings.
- The remediation system is intentionally conservative so it does not guess labels or restructure content aggressively.
