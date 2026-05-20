# Intelligent Documentation Generator

The documentation generator creates component documentation automatically from project metadata and source files.

## What it generates

- `data/meta/documentation-catalog.json`:
  - Full machine-readable metadata catalog.
  - Component-level summaries and scoring.
- `docs/COMPONENT_CATALOG.md`:
  - Human-readable documentation index.
  - Summary table and per-component details.
- `docs/components-generated/*.md`:
  - Individual markdown docs per component.

## Inputs

- `data/components.json`
- `data/meta/*.json`
- Each component page (`*.html`) and nearby asset files (`*.css`, `*.js`)

## Metadata enrichment

For each component, the generator extracts:

- Title fallback from `<title>` or `<h1>`
- Meta description fallback from HTML
- Headings (`H1` to `H6`)
- Linked CSS/JS assets from the page
- Nearby sibling assets matching component name
- Usage snippet from `<section>` or `<main>`
- Version and changelog count from component metadata
- Documentation completeness score (`0-100`)

## Run

```bash
npm run docs:generate
```

## Verify

```bash
npm run docs:generate:check
```

This command generates docs and validates required output files exist.
