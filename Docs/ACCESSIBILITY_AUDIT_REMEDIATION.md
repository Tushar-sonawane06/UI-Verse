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

## Apply safe fixes

```bash
npm run a11y:remediate:apply
```

## Outputs

- `reports/a11y/audit-remediation-report.json`
- `reports/a11y/audit-remediation-report.md`
- `public/a11y-remediation-dashboard.html`

## Safe fixes

The remediation engine automatically handles:

- Missing `lang` on `<html>`
- Missing skip links
- Decorative images without `alt`
- Authoring hints for unlabeled buttons and inputs

## Notes

- Some issues still require manual review, such as landmark structure and empty headings.
- The remediation system is intentionally conservative so it does not guess labels or restructure content aggressively.
