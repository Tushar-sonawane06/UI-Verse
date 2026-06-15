# UIverse Manifest Documentation

## Overview

The `manifest.json` file serves as the centralized registry and metadata structure for the entire UIverse component library. It provides machine-readable information about all components, resources, and project configuration.

## Purpose

The manifest enables:
- **Discovery**: Programmatic access to component information
- **Organization**: Centralized tracking of all library components
- **Metadata**: Rich metadata for each category and component
- **Integration**: Backend API endpoints and third-party integrations
- **Governance**: Version control, licensing, and quality metrics
- **Scalability**: Foundation for future automation and tooling

## Manifest Structure

### Root-Level Metadata

```json
{
  "name": "UIverse",
  "version": "2.0.0",
  "description": "A beginner-friendly open-source UI component library...",
  "author": "UIverse Community",
  "license": "MIT",
  "repository": "https://github.com/uiverse-io/uiverse",
  "manifestVersion": "1.0.0",
  "lastUpdated": "2026-06-11"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Project name |
| `version` | string | Semantic version of the library |
| `description` | string | Project description |
| `author` | string | Primary author/organization |
| `license` | string | License type (MIT, Apache, etc.) |
| `repository` | string | Git repository URL |
| `manifestVersion` | string | Version of this manifest format |
| `lastUpdated` | string | ISO date of last update |

### Components Section

The `components` object contains all 9 categories with their metadata:

```json
"components": {
  "buttons": {
    "id": "buttons",
    "name": "Buttons",
    "icon": "🔘",
    "description": "Interactive button styles...",
    "pageFile": "button.html",
    "cssFile": "buttons.css",
    "count": 24,
    "keywords": ["button", "cta", "action"],
    "status": "stable",
    "popularity": "high",
    "difficulty": "beginner"
  }
}
```

#### Component Category Fields

| Field | Type | Values | Purpose |
|-------|------|--------|---------|
| `id` | string | kebab-case | Unique category identifier |
| `name` | string | Title Case | Human-readable category name |
| `icon` | string | emoji | Visual category icon |
| `description` | string | text | Category description |
| `pageFile` | string | filename.html | HTML file containing components |
| `cssFile` | string | filename.css | Primary CSS file |
| `count` | number | integer | Total components in category |
| `keywords` | array | strings | Search terms |
| `status` | enum | stable, beta, deprecated | Component status |
| `popularity` | enum | high, medium, low | Usage popularity |
| `difficulty` | enum | beginner, intermediate, advanced | Learning difficulty |

### Resources Section

Tracks all CSS, JavaScript, and external resources:

```json
"resources": {
  "css": {
    "global": ["style.css"],
    "category": ["buttons.css", "navbar.css", ...],
    "total": 7
  },
  "javascript": {
    "global": ["script.js", "playground.js"],
    "total": 2
  },
  "external": {
    "fonts": { ... },
    "icons": { ... }
  }
}
```

### Pagination Section

Metadata for browsing and pagination:

```json
"pagination": {
  "itemsPerPage": 12,
  "totalItems": 120,
  "totalPages": 10,
  "categories": 9,
  "categoryDistribution": {
    "buttons": 24,
    "navbars": 12,
    ...
  }
}
```

### Features Section

Capabilities and compliance information:

```json
"features": {
  "responsive": true,
  "darkMode": true,
  "accessibility": {
    "wcag": "2.1 AA",
    "ariaSupport": true,
    "keyboardNavigation": true,
    "screenReaderSupport": true
  },
  "animations": {
    "supported": true,
    "prefersReducedMotion": true
  },
  "customization": {
    "cssVariables": true,
    "colorSchemes": true,
    "themeSupport": true
  }
}
```

### Documentation Section

Links to all documentation files:

```json
"documentation": {
  "readme": "README.md",
  "architecture": "Docs/ARCHITECTURE.md",
  "componentSchema": "COMPONENT_SCHEMA.md",
  "dependencies": "DEPENDENCIES.md",
  "dependencyGraph": "DEPENDENCY_GRAPH.md"
}
```

### API Section

Planned backend API structure:

```json
"api": {
  "endpoints": {
    "components": "/api/components",
    "categories": "/api/categories",
    "search": "/api/search",
    "recommendations": "/api/recommendations"
  },
  "baseUrl": "https://api.uiverse.io/v1"
}
```

### Files Section

Complete file inventory:

```json
"files": {
  "html": [...],
  "css": [...],
  "javascript": [...],
  "documentation": [...],
  "assets": [...]
}
```

### Stats Section

Library statistics:

```json
"stats": {
  "totalFiles": 62,
  "htmlFiles": 23,
  "cssFiles": 9,
  "jsFiles": 2,
  "totalComponents": 120,
  "totalCategories": 9,
  "estimatedSize": "~2.5 MB",
  "estimatedMinifiedSize": "~850 KB"
}
```

## Usage Examples

### JavaScript

#### Load and Parse Manifest

```javascript
fetch('manifest.json')
  .then(res => res.json())
  .then(manifest => {
    console.log(`Library: ${manifest.name} v${manifest.version}`);
    console.log(`Total components: ${manifest.metadata.totalComponents}`);
  });
```

#### Access Component Category

```javascript
fetch('manifest.json')
  .then(res => res.json())
  .then(manifest => {
    const buttons = manifest.components.buttons;
    console.log(`${buttons.name}: ${buttons.count} components`);
  });
```

#### Check Feature Support

```javascript
fetch('manifest.json')
  .then(res => res.json())
  .then(manifest => {
    if (manifest.features.accessibility.wcag === "2.1 AA") {
      console.log("WCAG 2.1 AA compliant");
    }
  });
```

#### Get All Components Count

```javascript
fetch('manifest.json')
  .then(res => res.json())
  .then(manifest => {
    const total = Object.values(manifest.components)
      .reduce((sum, cat) => sum + cat.count, 0);
    console.log(`Total: ${total} components`);
  });
```

### Backend Integration

#### Express.js API

```javascript
const manifest = require('./manifest.json');

app.get('/api/components', (req, res) => {
  res.json(manifest.components);
});

app.get('/api/categories', (req, res) => {
  res.json(Object.keys(manifest.components));
});

app.get('/api/components/:category', (req, res) => {
  const category = manifest.components[req.params.category];
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});
```

#### Search Implementation

```javascript
function searchComponents(query) {
  const manifest = require('./manifest.json');
  const results = [];
  
  Object.values(manifest.components).forEach(category => {
    if (
      category.name.toLowerCase().includes(query) ||
      category.keywords.some(k => k.includes(query))
    ) {
      results.push(category);
    }
  });
  
  return results;
}
```

## Maintenance

### When to Update

Update `manifest.json` when:
- Adding or removing a category
- Changing component count
- Updating version number
- Modifying documentation references
- Adding new features
- Updating accessibility compliance
- Releasing new version

### Update Checklist

- [ ] Update `version` number
- [ ] Update `lastUpdated` date
- [ ] Update component counts in `components` section
- [ ] Update total counts in `stats`
- [ ] Update `totalItems` in `pagination`
- [ ] Verify all file paths are correct
- [ ] Update `changelog` section
- [ ] Verify JSON validity
- [ ] Update documentation references
- [ ] Commit with clear message

### Validation

Ensure manifest is valid:

```bash
# Python
python -m json.tool manifest.json > /dev/null && echo "Valid"

# Node.js
node -e "require('./manifest.json')" && echo "Valid"

# Using jq (requires jq installed)
jq . manifest.json > /dev/null && echo "Valid"
```

## Field Reference

### Status Values

- `stable` - Production-ready, well-tested
- `beta` - Recently released, may have issues
- `deprecated` - No longer maintained

### Popularity Values

- `high` - Frequently used (>1000 views/month)
- `medium` - Moderately used (100-1000 views/month)
- `low` - Less frequently used (<100 views/month)

### Difficulty Values

- `beginner` - Easy to understand and implement
- `intermediate` - Requires some JavaScript knowledge
- `advanced` - Complex features or customization

### Browser Versions

Minimum supported versions:
- Chrome: 88+
- Firefox: 87+
- Safari: 14+
- Edge: 88+

## Accessibility Compliance

### WCAG 2.1 Level AA

- All interactive components have keyboard navigation
- Focus indicators clearly visible
- Color contrast meets requirements
- ARIA labels properly applied
- Screen reader tested

### Features

- Respects `prefers-reduced-motion` media query
- Proper heading hierarchy
- Form labels associated with inputs
- Alt text for images
- Semantic HTML structure

## API Integration Strategy

The manifest forms the foundation for a future REST API:

```
GET /api/components              # All components
GET /api/components/:category    # Category components
GET /api/search?q=button         # Search results
GET /api/recommendations?tags=   # Recommended components
GET /api/categories              # All categories
GET /api/stats                   # Statistics
GET /api/features                # Feature matrix
```

## CDN and Distribution

### Hosting Manifest

```html
<!-- Serve from CDN -->
<script>
  fetch('https://cdn.uiverse.io/manifest.json')
    .then(res => res.json())
    .then(manifest => {
      // Use manifest data
    });
</script>
```

### Package Manifest

Include manifest in packages:
- NPM package (future)
- ZIP distribution
- Docker image
- GitHub releases

## Versioning Strategy

Manifest version separate from library version:

```
library v2.0.0 → manifest v1.0.0
library v2.1.0 → manifest v1.0.0 (no breaking changes)
library v3.0.0 → manifest v2.0.0 (breaking changes)
```

## Security Considerations

- Manifest is public, read-only data
- No sensitive information stored
- Can be served from CDN safely
- Validate on backend when using

## Future Enhancements

- [ ] Component ratings and feedback
- [ ] Usage analytics
- [ ] Performance metrics per component
- [ ] Dependency graph inclusion
- [ ] Component preview URLs
- [ ] Dynamic component generation
- [ ] Component download packages
- [ ] Component version history

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-06-11 | Initial manifest structure |

## Related Documentation

- `COMPONENT_SCHEMA.md` - Component metadata structure
- `DEPENDENCIES.md` - Component dependency information
- `DEPENDENCY_GRAPH.md` - Dependency visualization
- `Docs/ARCHITECTURE.md` - System architecture
- `README.md` - Project overview

