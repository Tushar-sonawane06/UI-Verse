# Advanced Component Search & Discovery

This system provides centralized component discovery with filtering, ranking, and metadata-aware browsing.

## What it does

- Searches by title, alias, description, category, and tags.
- Supports filters for category, tags, docs coverage, and score thresholds.
- Ranks results by relevance and metadata quality.
- Exposes reusable APIs for command palette and search inputs.

## Core API

- `ComponentDiscovery.init()`
- `ComponentDiscovery.search(query, options)`
- `ComponentDiscovery.discover(query, options)`
- `ComponentDiscovery.getAll()`
- `ComponentDiscovery.getFacets()`
- `ComponentDiscovery.exportQuery(query, options)`

## Query examples

```text
button tag:dark score>80
category:buttons has:docs
card sort:title
```

## UI demo

Open `components/Discovery/component-discovery.html` to use the discovery dashboard.

## Test

```bash
npm run search:test
```

## Notes

`js/core/component-index.js` now acts as a compatibility wrapper around the discovery engine so the existing navbar and command palette continue to work.
