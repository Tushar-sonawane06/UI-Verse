# Component Registry Dependency Resolution API

Backend-friendly API specification for resolving component dependencies, analyzing dependency graphs, detecting circular dependencies, and managing complex dependency relationships.

**API Version:** 1.0.0  
**Base URL:** `/api/v1/components`

## Table of Contents

1. [Overview](#overview)
2. [Endpoints](#endpoints)
3. [Error Handling](#error-handling)
4. [Integration Examples](#integration-examples)
5. [Performance Considerations](#performance-considerations)
6. [Best Practices](#best-practices)

---

## Overview

The Dependency Resolution API provides backend capabilities for:

- **Transitive Resolution**: Automatically resolve all dependencies of a component
- **Conflict Detection**: Identify circular dependencies and version conflicts
- **Installation Order**: Get topologically sorted installation sequence
- **Graph Visualization**: Retrieve dependency graph data for UI rendering
- **Batch Processing**: Resolve multiple components in a single request
- **Analysis**: Generate statistics about dependency trees
- **Comparison**: Find common and unique dependencies across components

### Key Features

- **Smart Caching**: LRU cache with configurable TTL
- **Circular Dependency Detection**: Automatic cycle detection with chain reporting
- **Adaptive Depth Limiting**: Configurable maximum resolution depth
- **Conflict Resolution Strategies**: Multiple strategies (latest, strict, compatible)
- **Performance Metrics**: Built-in latency and throughput tracking
- **Batch Operations**: Efficient multi-component processing
- **Rate Limiting**: 300 requests/minute per IP or API key

---

## Endpoints

### 1. Resolve Single Component

**Endpoint:** `GET /resolve/{componentName}`

Resolves all dependencies for a single component, including transitive dependencies.

#### Parameters

| Name | Type | Location | Required | Default | Description |
|------|------|----------|----------|---------|-------------|
| componentName | string | path | Yes | - | Component identifier |
| includeOptional | boolean | query | No | false | Include optional dependencies |
| includeTransitive | boolean | query | No | true | Include transitive dependencies |
| includeConflicts | boolean | query | No | true | Include conflict analysis |
| maxDepth | integer | query | No | 50 | Max dependency depth (1-100) |

#### Request

```bash
curl -X GET "https://api.example.com/api/v1/components/resolve/button" \
  -H "Accept: application/json"
```

#### Response (200 OK)

```json
{
  "component": "button",
  "success": true,
  "dependencies": [
    {
      "name": "button",
      "version": "1.0.0",
      "depth": 0,
      "type": "direct"
    },
    {
      "name": "base-styles",
      "version": "2.1.0",
      "depth": 1,
      "type": "transitive"
    },
    {
      "name": "color-utilities",
      "version": "1.5.0",
      "depth": 2,
      "type": "transitive"
    }
  ],
  "installationOrder": ["color-utilities", "base-styles", "button"],
  "dependencyCount": 3,
  "transitiveDependencyCount": 2,
  "conflicts": [],
  "hasConflicts": false,
  "resolutionMetadata": {
    "timestamp": 1718318400000,
    "strategy": "latest",
    "depth": 2,
    "cacheHit": false
  }
}
```

#### Error Responses

**404 Not Found:**
```json
{
  "error": "Component not found: button-extended",
  "errorCode": "COMP_NOT_FOUND",
  "message": "The requested component is not in the registry",
  "timestamp": 1718318400000
}
```

**422 Unprocessable Entity (Circular Dependency):**
```json
{
  "error": "Circular dependency detected",
  "errorCode": "CIRCULAR_DEPENDENCY",
  "message": "Component A → B → C → A",
  "timestamp": 1718318400000
}
```

---

### 2. Resolve Multiple Components (Batch)

**Endpoint:** `POST /resolve/batch`

Batch resolve dependencies for multiple components with a single request.

#### Request Body

```json
{
  "components": ["button", "card", "modal"],
  "options": {
    "includeOptional": false,
    "includeTransitive": true,
    "includeConflicts": true,
    "maxDepth": 50
  }
}
```

#### Request Example

```bash
curl -X POST "https://api.example.com/api/v1/components/resolve/batch" \
  -H "Content-Type: application/json" \
  -d '{
    "components": ["button", "card"],
    "options": {
      "includeTransitive": true
    }
  }'
```

#### Response (200 OK)

```json
[
  {
    "component": "button",
    "success": true,
    "dependencies": [...],
    "installationOrder": [...],
    "dependencyCount": 3,
    "transitiveDependencyCount": 2,
    "conflicts": [],
    "hasConflicts": false,
    "resolutionMetadata": {...}
  },
  {
    "component": "card",
    "success": true,
    "dependencies": [...],
    "installationOrder": [...],
    "dependencyCount": 4,
    "transitiveDependencyCount": 3,
    "conflicts": [],
    "hasConflicts": false,
    "resolutionMetadata": {...}
  }
]
```

---

### 3. Get Dependency Graph

**Endpoint:** `GET /graph/{componentName}`

Retrieves dependency graph data in node-edge format for visualization.

#### Parameters

| Name | Type | Location | Required |
|------|------|----------|----------|
| componentName | string | path | Yes |

#### Response (200 OK)

```json
{
  "nodes": [
    {
      "id": "button",
      "label": "button",
      "depth": 0,
      "type": "root"
    },
    {
      "id": "base-styles",
      "label": "base-styles",
      "depth": 1,
      "type": "dependency"
    },
    {
      "id": "color-utilities",
      "label": "color-utilities",
      "depth": 2,
      "type": "dependency"
    }
  ],
  "edges": [
    {
      "from": "button",
      "to": "base-styles",
      "type": "required"
    },
    {
      "from": "base-styles",
      "to": "color-utilities",
      "type": "required"
    }
  ],
  "nodeCount": 3,
  "edgeCount": 2,
  "depth": 2
}
```

#### Visualization Integration

```javascript
// Using D3.js or Cytoscape.js
const response = await fetch('/api/v1/components/graph/button');
const graph = await response.json();

// Initialize visualization
cytoscape({
  container: document.getElementById('cy'),
  elements: [
    ...graph.nodes.map(n => ({ data: n })),
    ...graph.edges.map(e => ({ data: e }))
  ],
  layout: { name: 'breadthfirst' }
});
```

---

### 4. Detect Circular Dependencies

**Endpoint:** `GET /circular-check/{componentName}`

Analyzes component for circular dependency cycles.

#### Response (200 OK)

```json
{
  "hasCycles": false,
  "cycles": [],
  "cycleCount": 0
}
```

**With Circular Dependencies:**

```json
{
  "hasCycles": true,
  "cycles": [
    ["component-a", "component-b", "component-c", "component-a"],
    ["component-x", "component-y", "component-x"]
  ],
  "cycleCount": 2
}
```

---

### 5. Analyze Dependency Tree

**Endpoint:** `GET /analyze/{componentName}`

Returns comprehensive statistics about dependency tree.

#### Response (200 OK)

```json
{
  "component": "button",
  "totalDependencies": 8,
  "directDependencies": 2,
  "transitiveDependencies": 6,
  "maxDepth": 3,
  "averageDepth": "1.75",
  "conflicts": 0,
  "hasCircularDependencies": false,
  "depthDistribution": {
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 2
  }
}
```

---

### 6. Find Common Dependencies

**Endpoint:** `POST /common-dependencies`

Identifies shared and unique dependencies across multiple components.

#### Request Body

```json
{
  "components": ["button", "card", "modal"]
}
```

#### Response (200 OK)

```json
{
  "common": ["base-styles", "color-utilities", "spacing-utilities"],
  "unique": {
    "button": ["ripple-effect", "focus-ring"],
    "card": ["shadow-system", "border-radius"],
    "modal": ["z-index-manager", "backdrop"]
  },
  "componentCount": 3,
  "commonDependencyCount": 3
}
```

---

## Error Handling

### Error Response Format

All errors follow a consistent format:

```json
{
  "error": "Human-readable error message",
  "errorCode": "MACHINE_READABLE_CODE",
  "message": "Detailed explanation",
  "timestamp": 1718318400000
}
```

### Error Codes

| Code | Status | Description |
|------|--------|-------------|
| COMP_NOT_FOUND | 404 | Component not found in registry |
| CIRCULAR_DEPENDENCY | 422 | Circular dependency detected |
| MAX_DEPTH_EXCEEDED | 422 | Resolution exceeded max depth |
| INVALID_PARAMETERS | 400 | Invalid query/path parameters |
| MISSING_DEPENDENCY | 404 | Required dependency not in registry |
| VERSION_CONFLICT | 409 | Version conflict in dependencies |
| RESOLUTION_FAILED | 500 | Internal resolution error |
| INVALID_REQUEST_BODY | 400 | Malformed JSON request |

### Handling Errors in JavaScript

```javascript
async function resolveDependencies(component) {
  try {
    const response = await fetch(`/api/v1/components/resolve/${component}`);
    
    if (!response.ok) {
      const error = await response.json();
      if (error.errorCode === 'CIRCULAR_DEPENDENCY') {
        console.error('Circular dependency:', error.message);
      } else if (error.errorCode === 'COMP_NOT_FOUND') {
        console.error('Component not found');
      }
      throw new Error(error.message);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Resolution failed:', error);
  }
}
```

---

## Integration Examples

### Node.js Backend Integration

```javascript
const express = require('express');
const DependencyResolver = require('./dependency-resolver');

const app = express();
const registry = require('./components.json');
const resolver = new DependencyResolver(registry);

app.get('/api/v1/components/resolve/:componentName', (req, res) => {
  try {
    const options = {
      includeOptional: req.query.includeOptional === 'true',
      includeTransitive: req.query.includeTransitive !== 'false',
      includeConflicts: req.query.includeConflicts !== 'false',
      maxDepth: parseInt(req.query.maxDepth) || 50
    };
    
    const result = resolver.resolveDependencies(req.params.componentName, options);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      errorCode: 'RESOLUTION_FAILED',
      timestamp: Date.now()
    });
  }
});

app.post('/api/v1/components/resolve/batch', (req, res) => {
  try {
    const { components, options } = req.body;
    const results = resolver.resolveBatch(components, options);
    res.json(results);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      errorCode: 'INVALID_REQUEST_BODY',
      timestamp: Date.now()
    });
  }
});

app.listen(3000);
```

### Python Backend Integration

```python
from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Load components registry
with open('components.json') as f:
    registry = json.load(f)

@app.route('/api/v1/components/resolve/<component_name>')
def resolve_dependencies(component_name):
    try:
        include_optional = request.args.get('includeOptional', 'false') == 'true'
        include_transitive = request.args.get('includeTransitive', 'true') != 'false'
        max_depth = int(request.args.get('maxDepth', 50))
        
        # Implement resolution logic
        result = {
            'component': component_name,
            'success': True,
            'dependencies': [],
            'installationOrder': [],
            'dependencyCount': 0,
            'transitiveDependencyCount': 0,
            'conflicts': [],
            'hasConflicts': False
        }
        
        return jsonify(result)
    except Exception as e:
        return jsonify({
            'error': str(e),
            'errorCode': 'RESOLUTION_FAILED',
            'timestamp': int(time.time() * 1000)
        }), 500

if __name__ == '__main__':
    app.run(port=3000)
```

### Frontend Integration

```javascript
class DependencyAPI {
  constructor(baseURL = '/api/v1/components') {
    this.baseURL = baseURL;
  }

  async resolve(componentName, options = {}) {
    const params = new URLSearchParams();
    if (options.includeOptional) params.append('includeOptional', 'true');
    if (!options.includeTransitive) params.append('includeTransitive', 'false');
    
    const response = await fetch(
      `${this.baseURL}/resolve/${componentName}?${params}`
    );
    
    if (!response.ok) {
      throw await response.json();
    }
    
    return response.json();
  }

  async getGraph(componentName) {
    const response = await fetch(`${this.baseURL}/graph/${componentName}`);
    if (!response.ok) throw await response.json();
    return response.json();
  }

  async analyzeTree(componentName) {
    const response = await fetch(`${this.baseURL}/analyze/${componentName}`);
    if (!response.ok) throw await response.json();
    return response.json();
  }

  async findCommon(components) {
    const response = await fetch(`${this.baseURL}/common-dependencies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ components })
    });
    if (!response.ok) throw await response.json();
    return response.json();
  }
}

// Usage
const api = new DependencyAPI();
const deps = await api.resolve('button');
const graph = await api.getGraph('button');
const analysis = await api.analyzeTree('button');
```

---

## Performance Considerations

### Caching

- **Default TTL:** 3600 seconds (1 hour)
- **Cache Strategy:** LRU (Least Recently Used)
- **Cache Size:** Up to 1000 entries per instance
- **Bypass Cache:** Add `?nocache=true` or `Cache-Control: no-cache` header

### Rate Limiting

- **Standard:** 300 requests/minute
- **Burst:** 50 concurrent requests
- **Hourly Limit:** 10,000 requests/hour
- **Retry Header:** `Retry-After` (in seconds)

### Optimization Tips

1. **Batch Operations:** Use batch endpoint for multiple components
2. **Cache Strategies:** Implement client-side caching for frequently accessed components
3. **Depth Limiting:** Lower maxDepth values for faster resolution
4. **Conditional Requests:** Only request optional dependencies when needed

### Response Times

| Operation | Avg Time | Max Time |
|-----------|----------|----------|
| Single resolution | 50ms | 200ms |
| Batch (10 components) | 200ms | 600ms |
| Graph generation | 30ms | 100ms |
| Analysis | 40ms | 150ms |

---

## Best Practices

### 1. Error Handling
Always handle circular dependency and version conflicts in your integration.

### 2. Caching Strategy
Implement multi-level caching: browser → server → registry.

### 3. Dependency Updates
Invalidate cache when component registry is updated.

### 4. Monitoring
Track resolution times and cache hit rates for optimization.

### 5. Documentation
Maintain clear documentation of custom dependency resolution logic.

---

## Related Documentation

- [Component Registry Schema](./COMPONENT_SCHEMA.md)
- [Dependency Documentation](./DEPENDENCIES.md)
- [Dependency Graph](./DEPENDENCY_GRAPH.md)
- [Theme Validation API](./THEME_VALIDATION_API.md)
- [State Management Guide](./STATE_MANAGEMENT.md)
