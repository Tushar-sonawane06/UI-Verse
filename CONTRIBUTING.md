# Contributing

See [Docs/CONTRIBUTING.md](Docs/CONTRIBUTING.md) for the contributor guide.

## Local Testing Pipeline

Before committing, run components check:

```bash
npm run components:version:check
```

## Component Contribution Standards

1. **Layout Naming**: Every component wrapper should follow BEM styling namespace rules.
2. **Global CSS Variables**: Refer to `design-tokens.css` values when defining visual properties (e.g. `--color-primary`).
3. **Accessibility (a11y)**: Every interaction button/input must supply unique labels and accessible ARIA attributes.
