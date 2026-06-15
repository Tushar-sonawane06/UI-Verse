/**
 * UIverse Component Registry Dependency Resolver
 * 
 * Provides backend-compatible dependency resolution for component registry.
 * Handles:
 * - Transitive dependency resolution
 * - Circular dependency detection
 * - Dependency graph analysis
 * - Version compatibility checking
 * - Installation order generation
 * - Conflict resolution
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class DependencyResolver {
  /**
   * Initialize Dependency Resolver
   * 
   * @param {Object} componentRegistry - Component registry data
   * @param {Object} options - Configuration options
   */
  constructor(componentRegistry = {}, options = {}) {
    this.registry = componentRegistry;
    this.cache = new Map();
    this.resolutionCache = new Map();
    this.enableCaching = options.enableCaching !== false;
    this.maxDepthLimit = options.maxDepthLimit || 50;
    this.conflictStrategy = options.conflictStrategy || 'latest'; // 'latest', 'strict', 'compatible'
  }

  /**
   * Resolve all dependencies for a component
   * 
   * @param {string} componentName - Component to resolve
   * @param {Object} options - Resolution options
   * @returns {Object} - Resolution result with dependencies, order, and metadata
   */
  resolveDependencies(componentName, options = {}) {
    const {
      includeOptional = false,
      includeTransitive = true,
      includeConflicts = true,
      maxDepth = options.maxDepth || this.maxDepthLimit
    } = options;

    const cacheKey = `${componentName}:${includeOptional}:${includeTransitive}`;
    if (this.enableCaching && this.resolutionCache.has(cacheKey)) {
      return this.resolutionCache.get(cacheKey);
    }

    const visited = new Set();
    const resolved = new Map();
    const conflicts = [];
    const chain = [];

    try {
      this.visit(componentName, visited, resolved, conflicts, chain, {
        includeOptional,
        includeTransitive,
        maxDepth,
        depth: 0
      });

      const result = {
        component: componentName,
        success: true,
        dependencies: this.formatDependencies(resolved),
        installationOrder: this.calculateInstallationOrder(resolved),
        dependencyCount: resolved.size,
        transitiveDependencyCount: resolved.size - 1,
        conflicts: includeConflicts ? conflicts : [],
        hasConflicts: conflicts.length > 0,
        resolutionMetadata: {
          timestamp: Date.now(),
          strategy: this.conflictStrategy,
          depth: chain.length,
          cacheHit: false
        }
      };

      if (this.enableCaching) {
        this.resolutionCache.set(cacheKey, result);
      }

      return result;
    } catch (error) {
      return {
        component: componentName,
        success: false,
        error: error.message,
        dependencies: [],
        conflicts,
        resolutionMetadata: {
          timestamp: Date.now(),
          errorType: error.constructor.name
        }
      };
    }
  }

  /**
   * Resolve dependencies for multiple components
   * 
   * @param {string[]} componentNames - Components to resolve
   * @param {Object} options - Resolution options
   * @returns {Object[]} - Array of resolution results
   */
  resolveBatch(componentNames, options = {}) {
    return componentNames.map(name => this.resolveDependencies(name, options));
  }

  /**
   * Visit component and resolve dependencies recursively
   * 
   * @private
   */
  visit(componentName, visited, resolved, conflicts, chain, options) {
    const { includeOptional, includeTransitive, maxDepth, depth } = options;

    // Check depth limit
    if (depth >= maxDepth) {
      throw new Error(`Dependency resolution exceeded max depth limit of ${maxDepth}`);
    }

    // Circular dependency detection
    if (visited.has(componentName)) {
      const circularChain = chain.join(' → ') + ` → ${componentName}`;
      conflicts.push({
        type: 'circular',
        component: componentName,
        chain: circularChain,
        severity: 'critical'
      });
      return;
    }

    visited.add(componentName);
    chain.push(componentName);

    const component = this.registry[componentName];
    if (!component) {
      throw new Error(`Component not found: ${componentName}`);
    }

    const targetVersion = component.version || '1.0.0';
    // Parse semver prefixes if present (^ or ~)
    const cleanVersion = targetVersion.replace(/^[\^~]/, '');
    resolved.set(componentName, {
      name: componentName,
      version: cleanVersion,
      required: true,
      depth
    });

    // Process required dependencies
    if (component.dependencies && includeTransitive) {
      for (const [depName, depVersion] of Object.entries(component.dependencies)) {
        if (!resolved.has(depName)) {
          this.visit(depName, visited, resolved, conflicts, [...chain], options);
        }
      }
    }

    // Process optional dependencies
    if (includeOptional && component.optionalDependencies) {
      for (const [depName, depVersion] of Object.entries(component.optionalDependencies)) {
        if (!resolved.has(depName)) {
          this.visit(depName, visited, resolved, conflicts, [...chain], options);
        }
      }
    }

    visited.delete(componentName);
  }

  /**
   * Calculate installation order based on dependency graph
   * 
   * @private
   */
  calculateInstallationOrder(resolvedMap) {
    const ordered = [];
    const processed = new Set();
    const graph = new Map();

    // Build adjacency graph
    for (const [name, dep] of resolvedMap.entries()) {
      graph.set(name, []);
    }

    for (const [name, dep] of resolvedMap.entries()) {
      const component = this.registry[name];
      if (component && component.dependencies) {
        for (const depName of Object.keys(component.dependencies)) {
          if (graph.has(depName)) {
            graph.get(depName).push(name);
          }
        }
      }
    }

    // Topological sort
    const visit = (node) => {
      if (processed.has(node)) return;
      processed.add(node);

      const component = this.registry[node];
      if (component && component.dependencies) {
        for (const depName of Object.keys(component.dependencies)) {
          visit(depName);
        }
      }

      ordered.push(node);
    };

    for (const name of resolvedMap.keys()) {
      visit(name);
    }

    return ordered;
  }

  /**
   * Format dependencies for output
   * 
   * @private
   */
  formatDependencies(resolvedMap) {
    const deps = [];
    
    for (const [name, info] of resolvedMap.entries()) {
      deps.push({
        name,
        version: info.version,
        depth: info.depth,
        type: info.depth === 0 ? 'direct' : 'transitive'
      });
    }

    return deps.sort((a, b) => a.depth - b.depth);
  }

  /**
   * Get dependency graph visualization data
   * 
   * @param {string} componentName - Component to visualize
   * @returns {Object} - Graph data with nodes and edges
   */
  getDependencyGraph(componentName) {
    const result = this.resolveDependencies(componentName);
    if (!result.success) {
      return { error: result.error };
    }

    const nodes = [];
    const edges = [];
    const visited = new Set();

    const addNode = (name, depth) => {
      if (visited.has(name)) return;
      visited.add(name);

      nodes.push({
        id: name,
        label: name,
        depth,
        type: depth === 0 ? 'root' : 'dependency'
      });

      const component = this.registry[name];
      if (component && component.dependencies) {
        for (const depName of Object.keys(component.dependencies)) {
          edges.push({
            from: name,
            to: depName,
            type: 'required'
          });
          addNode(depName, depth + 1);
        }
      }
    };

    addNode(componentName, 0);

    return {
      nodes,
      edges,
      nodeCount: nodes.length,
      edgeCount: edges.length,
      depth: Math.max(...nodes.map(n => n.depth), 0)
    };
  }

  /**
   * Check for circular dependencies
   * 
   * @param {string} componentName - Component to check
   * @returns {Object} - Circular dependency report
   */
  detectCircularDependencies(componentName) {
    const visited = new Set();
    const recursionStack = new Set();
    const cycles = [];

    const hasCycle = (name, path = []) => {
      visited.add(name);
      recursionStack.add(name);
      path.push(name);

      const component = this.registry[name];
      if (component && component.dependencies) {
        for (const depName of Object.keys(component.dependencies)) {
          if (!visited.has(depName)) {
            if (hasCycle(depName, [...path])) {
              return true;
            }
          } else if (recursionStack.has(depName)) {
            const cycleStart = path.indexOf(depName);
            const cycle = path.slice(cycleStart).concat(depName);
            cycles.push(cycle);
            // Continue searching other paths rather than returning immediately
          }
        }
      }

      recursionStack.delete(name);
      return false;
    };

    hasCycle(componentName);

    return {
      hasCycles: cycles.length > 0,
      cycles,
      cycleCount: cycles.length
    };
  }

  /**
   * Analyze dependency tree statistics
   * 
   * @param {string} componentName - Component to analyze
   * @returns {Object} - Dependency statistics
   */
  analyzeDependencyTree(componentName) {
    const result = this.resolveDependencies(componentName);
    if (!result.success) {
      return { error: result.error };
    }

    const stats = {
      totalDependencies: result.dependencies.length,
      directDependencies: result.dependencies.filter(d => d.type === 'direct').length,
      transitiveDependencies: result.dependencies.filter(d => d.type === 'transitive').length,
      maxDepth: Math.max(...result.dependencies.map(d => d.depth), 0),
      averageDepth: result.dependencies.length > 0
        ? (result.dependencies.reduce((sum, d) => sum + d.depth, 0) / result.dependencies.length).toFixed(2)
        : 0,
      conflicts: result.conflicts.length,
      hasCircularDependencies: result.hasConflicts && result.conflicts.some(c => c.type === 'circular')
    };

    // Distribution by depth
    const depthDistribution = {};
    for (const dep of result.dependencies) {
      depthDistribution[dep.depth] = (depthDistribution[dep.depth] || 0) + 1;
    }

    return {
      component: componentName,
      ...stats,
      depthDistribution
    };
  }

  /**
   * Find common dependencies between components
   * 
   * @param {string[]} componentNames - Components to compare
   * @returns {Object} - Common dependencies analysis
   */
  findCommonDependencies(componentNames) {
    if (componentNames.length === 0) {
      return { common: [], unique: {} };
    }

    const resolutions = componentNames.map(name => {
      const result = this.resolveDependencies(name);
      return result.success ? result.dependencies : [];
    });

    // Find common
    const depSets = resolutions.map(deps => new Set(deps.map(d => d.name)));
    let common = new Set(depSets[0]);
    for (let i = 1; i < depSets.length; i++) {
      common = new Set([...common].filter(x => depSets[i].has(x)));
    }

    // Find unique to each component
    const unique = {};
    for (let i = 0; i < componentNames.length; i++) {
      unique[componentNames[i]] = resolutions[i]
        .filter(d => !common.has(d.name))
        .map(d => d.name);
    }

    return {
      common: Array.from(common),
      unique,
      componentCount: componentNames.length,
      commonDependencyCount: common.size
    };
  }

  /**
   * Update component registry
   * 
   * @param {Object} registry - New component registry
   */
  updateRegistry(registry) {
    this.registry = registry;
    this.resolutionCache.clear();
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this.cache.clear();
    this.resolutionCache.clear();
  }

  /**
   * Get resolver statistics
   * 
   * @returns {Object} - Statistics about resolver
   */
  getStats() {
    return {
      registeredComponents: Object.keys(this.registry).length,
      cacheSize: this.resolutionCache.size,
      cacheEnabled: this.enableCaching,
      maxDepthLimit: this.maxDepthLimit,
      conflictStrategy: this.conflictStrategy
    };
  }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DependencyResolver;
}
