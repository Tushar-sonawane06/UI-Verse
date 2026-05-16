# Security Hardening Guide

This document describes the frontend security baseline added to the project.

What was implemented
- A pragmatic Content-Security-Policy (CSP) meta tag is injected at runtime to reduce inline-script risk while keeping compatibility.
- Migration of simple inline handlers (e.g. `onclick="myFn()"`) to `addEventListener` where safe.
- Console warnings for external assets (scripts/styles) missing `integrity` attributes (SRI).

Files added/changed
- `js/core/security.js` — runtime module that injects CSP, migrates inline handlers, and warns on missing SRI.
- `js/bootstrap.js` — initializes `Security` early during boot.
- Documentation: this file and updated `Docs/CONTRIBUTING.md`.

Developer notes
- CSP is injected as a meta tag to be compatible with static hosting. It is intentionally pragmatic (allows styles inline) to avoid breaking pages.
- The inline-handler migration only transforms simple calls like `myFunc()` or `myFunc(event)` where `myFunc` exists as a global function. Complex inline code is left as-is and logged to the console to avoid unsafe eval.
- For third-party assets, prefer adding `integrity` and `crossorigin="anonymous"` attributes. Example:

```html
<link rel="stylesheet" href="https://cdn.example.com/lib.css"
      integrity="sha384-..." crossorigin="anonymous">
```

How to verify locally
1. Open the site in a browser and check the Console for Security logs (injection, migrations, warnings).
2. Confirm there are no broken interactive behaviors (buttons, forms) — the migration is conservative.

If CSP causes a blocking issue
- The CSP meta injected is in `js/core/security.js`. Adjust the `policy` string if needed for a stricter/looser baseline.
