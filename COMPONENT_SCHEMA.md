# Component Metadata Schema Documentation

## Overview

This document defines the standardized metadata schema for UIverse components. This schema enables consistent component documentation, backend integration, and programmatic component discovery.

## Files

### 1. `components.json`

Centralized metadata registry for all UI components with detailed information about each component.

**Top-level structure:**

- `version`: Schema version (e.g., "2.0.0")
- `lastUpdated`: ISO date of last update
- `totalComponents`: Total count of components across all categories
- `categories`: Array of component categories
- `sharedUtilities`: Reusable CSS and JavaScript utilities
- `themes`: Available theme configurations
- `accessibility`: Accessibility compliance information
- `metadata`: Project-level metadata

### 2. `registry.json`

High-level registry for component organization, pagination, and build dependencies.

**Top-level structure:**

- `componentRegistry`: Organized components by category with file mappings
- `pagination`: Pagination information for component listing
- `dependencies`: Shared utilities and file relationships
- `fileMapping`: Map of HTML files to their metadata
- `buildInfo`: Framework and build tool information

## Component Object Schema

### Full Component Definition (from `components.json`)

```json
{
  "id": "unique-identifier",
  "name": "Component Name",
  "description": "Short description of the component",
  "file": "component-page.html",
  "tags": ["tag1", "tag2"],
  "dependencies": ["style.css", "script.js"],
  "sharedUtilities": ["utility-name"],
  "difficulty": "beginner|intermediate|advanced",
  "responsive": true,
  "darkModeSupport": true
}
```

### Field Descriptions

| Field             | Type    | Description                          |
| ----------------- | ------- | ------------------------------------ |
| `id`              | string  | Unique identifier (kebab-case)       |
| `name`            | string  | Human-readable component name        |
| `description`     | string  | Short description (1-2 sentences)    |
| `file`            | string  | HTML file containing the component. MUST conform to `kebab-case.html`. (Good: `analysis-card.html`, Bad: `Accordionsui.html` or `AnalysisCard.html`) |
| `tags`            | array   | Search and categorization tags       |
| `dependencies`    | array   | Required CSS/JS files                |
| `sharedUtilities` | array   | Reference to shared utility names    |
| `difficulty`      | enum    | beginner, intermediate, or advanced  |
| `responsive`      | boolean | Whether component is responsive      |
| `darkModeSupport` | boolean | Whether component supports dark mode |

## Category Object Schema

```json
{
  "id": "category-id",
  "name": "Category Name",
  "icon": "emoji",
  "description": "Category description",
  "count": 24,
  "components": [
    {
      /* component objects */
    }
  ]
}
```

## Shared Utilities Schema

### CSS Utilities

```json
{
  "name": "utility-name",
  "file": "style.css",
  "description": "What this utility does"
}
```

### JavaScript Utilities

```json
{
  "name": "utility-name",
  "file": "script.js",
  "description": "What this utility does"
}
```

## Registry Entry Schema (from `registry.json`)

```json
{
  "category": "buttons",
  "pageFile": "button.html",
  "count": 24,
  "cssFiles": ["buttons.css", "style.css"],
  "jsFiles": ["script.js"],
  "components": ["component-id-1", "component-id-2"]
}
```

## Usage Examples

### Querying All Buttons

```javascript
const components = require('./components.json');
const buttons = components.categories.find((cat) => cat.id === 'buttons');
console.log(`Total buttons: ${buttons.count}`);
```

### Finding Component Dependencies

```javascript
const registry = require('./registry.json');
const buttonRegistry = registry.componentRegistry.buttons;
console.log(`CSS files needed: ${buttonRegistry.cssFiles.join(', ')}`);
console.log(`JS files needed: ${buttonRegistry.jsFiles.join(', ')}`);
```

### Getting Components by Difficulty

```javascript
const components = require('./components.json');
const allComponents = components.categories.flatMap((cat) => cat.components);
const beginnerFriendly = allComponents.filter((comp) => comp.difficulty === 'beginner');
```

### Checking Dark Mode Support

```javascript
const components = require('./components.json');
const darkModeReady = components.categories
  .flatMap((cat) => cat.components)
  .filter((comp) => comp.darkModeSupport);
```

## Integration Points

### Backend API Integration

These schemas can be used by a backend API to:

1. Serve component metadata via REST endpoints
2. Implement component search and filtering
3. Generate component documentation
4. Track component usage analytics
5. Manage component versioning
6. Build component selector tools

### Example API Endpoints

```
GET /api/components           - List all components
GET /api/components/:id       - Get specific component
GET /api/categories           - List all categories
GET /api/categories/:id       - List components in category
GET /api/components/search?q=button  - Search components
GET /api/components?difficulty=beginner  - Filter by difficulty
GET /api/components/:id/dependencies  - Get dependencies
```

### Frontend Integration

```javascript
// Load components metadata
fetch('components.json')
  .then((res) => res.json())
  .then((data) => {
    // Populate component listings
    // Filter components by category
    // Display component information
  });
```

## Maintenance

### When to Update

- Adding new components
- Removing deprecated components
- Changing component metadata
- Adding new shared utilities
- Updating theme information
- Modifying accessibility support levels

### Update Procedure

1. Edit `components.json` with new component entries
2. Update `registry.json` with registry and pagination changes
3. Ensure `id` fields are unique and kebab-cased
4. Verify `dependencies` reference existing files
5. Validate JSON syntax
6. Run validation script (if available)
7. Commit changes with clear message

## Validation

### Manual Validation Checklist

- [ ] All `id` fields are unique
- [ ] All `file` references exist
- [ ] All `dependencies` reference existing files
- [ ] All `sharedUtilities` are defined in utilities section
- [ ] JSON syntax is valid
- [ ] Component count matches actual components
- [ ] No circular dependencies
- [ ] Tags are lowercase and kebab-cased
- [ ] Descriptions are clear and concise

### Automated Validation (Future)

A validation script could be created to automatically:

- Check JSON validity
- Verify file references
- Detect duplicate IDs
- Validate tag format
- Check for missing required fields
- Update component counts automatically

## Version History

| Version | Date       | Changes                                      |
| ------- | ---------- | -------------------------------------------- |
| 1.0.0   | 2026-06-11 | Initial schema release                       |
| 2.0.0   | 2026-06-11 | Enhanced component metadata with more fields |

## Future Enhancements

- Component versioning (1.0.0, 1.1.0, etc.)
- Component preview URLs
- Component code snippets
- Usage statistics and popularity metrics
- Component update history
- Contributing author information
- License information per component
- Performance metrics
- Accessibility audit results
- Browser compatibility matrix
