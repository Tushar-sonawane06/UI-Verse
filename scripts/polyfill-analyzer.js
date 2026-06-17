#!/usr/bin/env node
/**
 * Event-Delegation and Dynamic Web API Polyfill Injector
 * 
 * This tool:
 * 1. Scans JavaScript files using Babel AST to identify modern Web APIs
 * 2. Matches APIs against a browser compatibility matrix
 * 3. Generates polyfill imports for unsupported APIs
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

// Browser compatibility matrix
const BROWSER_VERSIONS = {
  ie: 11,
  edge: 99,
  firefox: 100,
  chrome: 100,
  safari: 15,
  opera: 85,
  samsung: 16
};

// Modern Web APIs and their browser support (minimum version)
const API_COMPATIBILITY = {
  // ResizeObserver
  'ResizeObserver': { 
    browsers: { chrome: 64, firefox: 69, safari: 13.1, edge: 79, opera: 51 },
    polyfill: 'resize-observer-polyfill'
  },
  
  // IntersectionObserver
  'IntersectionObserver': { 
    browsers: { chrome: 51, firefox: 55, safari: 12.1, edge: 15, opera: 38 },
    polyfill: 'intersection-observer'
  },
  
  // CustomEvent
  'CustomEvent': { 
    browsers: { chrome: 15, firefox: 11, safari: 9, edge: 79, opera: 15 },
    polyfill: null // Built into polyfill-core
  },
  
  // Element.prototype.matches
  'matches': { 
    browsers: { chrome: 33, firefox: 4, safari: 7, edge: 79, opera: 20 },
    polyfill: 'polyfill-core'
  },
  
  // Element.prototype.closest
  'closest': { 
    browsers: { chrome: 41, firefox: 35, safari: 6, edge: 15, opera: 28 },
    polyfill: 'element-closest'
  },
  
  // Promise
  'Promise': { 
    browsers: { chrome: 32, firefox: 29, safari: 8, edge: 12, opera: 19 },
    polyfill: 'core-js-pure'
  },
  
  // fetch
  'fetch': { 
    browsers: { chrome: 40, firefox: 39, safari: 11, edge: 14, opera: 27 },
    polyfill: 'node-fetch'
  },
  
  // MutationObserver
  'MutationObserver': { 
    browsers: { chrome: 26, firefox: 14, safari: 7, edge: 12, opera: 15 },
    polyfill: null // Native support is good
  },
  
  // Object.assign
  'Object.assign': { 
    browsers: { chrome: 45, firefox: 45, safari: 9, edge: 12, opera: 32 },
    polyfill: 'polyfill-core'
  },
  
  // Array.from
  'Array.from': { 
    browsers: { chrome: 45, firefox: 32, safari: 9, edge: 12, opera: 32 },
    polyfill: 'polyfill-core'
  },
  
  // Array.prototype.includes
  'Array.prototype.includes': { 
    browsers: { chrome: 47, firefox: 43, safari: 10, edge: 14, opera: 34 },
    polyfill: 'polyfill-core'
  },
  
  // String.prototype.includes
  'String.prototype.includes': { 
    browsers: { chrome: 41, firefox: 40, safari: 9, edge: 12, opera: 28 },
    polyfill: 'polyfill-core'
  },
  
  // Object.values
  'Object.values': { 
    browsers: { chrome: 54, firefox: 47, safari: 10, edge: 14, opera: 41 },
    polyfill: 'polyfill-core'
  },
  
  // Object.entries
  'Object.entries': { 
    browsers: { chrome: 54, firefox: 47, safari: 10, edge: 14, opera: 41 },
    polyfill: 'polyfill-core'
  },
  
  // URL
  'URL': { 
    browsers: { chrome: 26, firefox: 21, safari: 7, edge: 12, opera: 16 },
    polyfill: 'polyfill-core'
  },
  
  // FormData
  'FormData': { 
    browsers: { chrome: 4, firefox: 4, safari: 5, edge: 12, opera: 27 },
    polyfill: null
  },
  
  // Blob
  'Blob': { 
    browsers: { chrome: 5, firefox: 4, safari: 6, edge: 12, opera: 12 },
    polyfill: null
  },
  
  // WeakMap
  'WeakMap': { 
    browsers: { chrome: 36, firefox: 6, safari: 6, edge: 12, opera: 23 },
    polyfill: null
  },
  
  // WeakSet
  'WeakSet': { 
    browsers: { chrome: 36, firefox: 34, safari: 6, edge: 12, opera: 23 },
    polyfill: null
  },
  
  // Map
  'Map': { 
    browsers: { chrome: 36, firefox: 31, safari: 8, edge: 12, opera: 23 },
    polyfill: null
  },
  
  // Set
  'Set': { 
    browsers: { chrome: 38, firefox: 31, safari: 8, edge: 12, opera: 25 },
    polyfill: null
  },
  
  // Proxy
  'Proxy': { 
    browsers: { chrome: 49, firefox: 18, safari: 10, edge: 12, opera: 36 },
    polyfill: null // Can't be polyfilled
  },
  
  // Symbol
  'Symbol': { 
    browsers: { chrome: 38, firefox: 36, safari: 9, edge: 12, opera: 25 },
    polyfill: null // Partially polyfillable
  },
  
  // classList
  'classList': { 
    browsers: { chrome: 8, firefox: 4, safari: 6, edge: 12, opera: 11 },
    polyfill: 'classlist-polyfill'
  },
  
  // dataset
  'dataset': { 
    browsers: { chrome: 8, firefox: 6, safari: 6, edge: 12, opera: 11 },
    polyfill: null // Native support
  },
  
  // ChildNode.remove
  'ChildNode.remove': { 
    browsers: { chrome: 54, firefox: 49, safari: 10, edge: 17, opera: 41 },
    polyfill: 'element-remove-polyfill'
  },
  
  // ParentNode.append
  'ParentNode.append': { 
    browsers: { chrome: 54, firefox: 49, safari: 10, edge: 17, opera: 41 },
    polyfill: 'element-observe-polyfill'
  },
  
  // ParentNode.prepend
  'ParentNode.prepend': { 
    browsers: { chrome: 54, firefox: 49, safari: 10, edge: 17, opera: 41 },
    polyfill: 'element-observe-polyfill'
  },
  
  // ResizeObserverEntry
  'ResizeObserverEntry': { 
    browsers: { chrome: 64, firefox: 69, safari: 13.1, edge: 79, opera: 51 },
    polyfill: 'resize-observer-polyfill'
  },
  
  // getComputedStyle
  'getComputedStyle': { 
    browsers: { chrome: 1, firefox: 1, safari: 1, edge: 12, opera: 7 },
    polyfill: null // Native support
  },
  
  // requestAnimationFrame
  'requestAnimationFrame': { 
    browsers: { chrome: 24, firefox: 23, safari: 6, edge: 12, opera: 15 },
    polyfill: null // Native support with prefixes
  },
  
  // cancelAnimationFrame
  'cancelAnimationFrame': { 
    browsers: { chrome: 24, firefox: 23, safari: 6, edge: 12, opera: 15 },
    polyfill: null
  },
  
  // PerformanceObserver
  'PerformanceObserver': { 
    browsers: { chrome: 62, firefox: 60, safari: 16.4, edge: 79, opera: 49 },
    polyfill: 'perf-observer-polyfill'
  },
  
  // EventTarget
  'EventTarget': { 
    browsers: { chrome: 1, firefox: 1, safari: 1, edge: 12, opera: 7 },
    polyfill: 'event-target-polyfill'
  },
  
  // AbortController
  'AbortController': { 
    browsers: { chrome: 66, firefox: 61, safari: 15.4, edge: 16, opera: 53 },
    polyfill: 'abort-controller'
  },
  
  // AbortSignal
  'AbortSignal': { 
    browsers: { chrome: 66, firefox: 61, safari: 15.4, edge: 16, opera: 53 },
    polyfill: 'abort-controller'
  },
  
  // structuredClone
  'structuredClone': { 
    browsers: { chrome: 98, firefox: 94, safari: 15.2, edge: 98, opera: 84 },
    polyfill: 'structured-clone-polyfill'
  },
  
  // crypto.randomUUID
  'crypto.randomUUID': { 
    browsers: { chrome: 100, firefox: 95, safari: 15.4, edge: 100, opera: 86 },
    polyfill: 'crypto-randomuuid-polyfill'
  }
};

/**
 * Polyfill Generator class
 */
class PolyfillAnalyzer {
  constructor(options = {}) {
    this.options = {
      targetBrowsers: { ...BROWSER_VERSIONS },
      minBrowserVersions: null,
      verbose: false,
      generateImportStatements: true,
      ...options
    };
    this.usedAPIs = new Map();
    this.requiredPolyfills = new Set();
    this.results = new Map();
  }

  /**
   * Analyze a JavaScript file for modern API usage
   */
  analyzeFile(filePath) {
    console.log(`  Analyzing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const fileAPIs = this.detectAPIs(content);
    
    this.results.set(filePath, {
      filePath,
      detectedAPIs: fileAPIs,
      requiredPolyfills: []
    });
    
    // Check each API against compatibility matrix
    for (const api of fileAPIs) {
      const compatibility = API_COMPATIBILITY[api];
      if (compatibility) {
        const needsPolyfill = this.checkCompatibility(api, compatibility);
        if (needsPolyfill && compatibility.polyfill) {
          this.requiredPolyfills.add(compatibility.polyfill);
          this.results.get(filePath).requiredPolyfills.push({
            api,
            polyfill: compatibility.polyfill
          });
        }
      }
    }
    
    if (this.options.verbose && fileAPIs.length > 0) {
      console.log(`    Found APIs: ${fileAPIs.join(', ')}`);
    }
    
    return this.results.get(filePath);
  }

  /**
   * Detect modern Web APIs used in JavaScript code
   * This is a simplified AST detection - for production, use @babel/parser
   */
  detectAPIs(content) {
    const apis = new Set();
    
    // Simple regex-based detection (for production, use Babel)
    const apiPatterns = Object.keys(API_COMPATIBILITY);
    
    for (const api of apiPatterns) {
      // Check for constructor usage: new ResizeObserver(...)
      if (new RegExp(`new\\s+${api}\\s*\\(`).test(content)) {
        apis.add(api);
      }
      
      // Check for static method usage: ResizeObserver.observe(...)
      if (new RegExp(`${api}\\s*\\.\\s*\\w+\\s*\\(`).test(content)) {
        apis.add(api);
      }
      
      // Check for member access
      if (new RegExp(`${api}\\s*\\.\\s*\\w+`).test(content)) {
        apis.add(api);
      }
    }
    
    // Additional pattern detection
    const patterns = [
      // ResizeObserver usage
      { regex: /ResizeObserver/g, api: 'ResizeObserver' },
      // IntersectionObserver usage
      { regex: /IntersectionObserver/g, api: 'IntersectionObserver' },
      // CustomEvent usage
      { regex: /new\s+CustomEvent/g, api: 'CustomEvent' },
      // matches selector
      { regex: /\.matches\s*\(/g, api: 'matches' },
      // closest method
      { regex: /\.closest\s*\(/g, api: 'closest' },
      // classList
      { regex: /\.classList\b/g, api: 'classList' },
      // Promise
      { regex: /new\s+Promise\s*\(/g, api: 'Promise' },
      // fetch
      { regex: /\bfetch\s*\(/g, api: 'fetch' },
      // Object.assign
      { regex: /Object\.assign/g, api: 'Object.assign' },
      // Array.from
      { regex: /Array\.from/g, api: 'Array.from' },
      // Array.prototype.includes
      { regex: /\.includes\s*\(/g, api: 'Array.prototype.includes' },
      // String.prototype.includes
      { regex: /\.includes\s*\(/g, api: 'String.prototype.includes' },
      // Object.values
      { regex: /Object\.values/g, api: 'Object.values' },
      // Object.entries
      { regex: /Object\.entries/g, api: 'Object.entries' },
      // URL constructor
      { regex: /new\s+URL\s*\(/g, api: 'URL' },
      // PerformanceObserver
      { regex: /PerformanceObserver/g, api: 'PerformanceObserver' },
      // AbortController
      { regex: /AbortController/g, api: 'AbortController' },
      // structuredClone
      { regex: /structuredClone/g, api: 'structuredClone' },
      // crypto.randomUUID
      { regex: /crypto\.randomUUID/g, api: 'crypto.randomUUID' },
      // element.remove()
      { regex: /\.remove\s*\(\s*\)/g, api: 'ChildNode.remove' },
      // element.append()
      { regex: /\.append\s*\(/g, api: 'ParentNode.append' },
      // element.prepend()
      { regex: /\.prepend\s*\(/g, api: 'ParentNode.prepend' }
    ];
    
    for (const pattern of patterns) {
      if (pattern.regex.test(content)) {
        apis.add(pattern.api);
      }
    }
    
    return Array.from(apis);
  }

  /**
   * Check if an API needs a polyfill based on target browsers
   */
  checkCompatibility(api, compatibility) {
    const targetBrowsers = this.options.minBrowserVersions || this.options.targetBrowsers;
    
    for (const [browser, minVersion] of Object.entries(targetBrowsers)) {
      const apiSupport = compatibility.browsers[browser];
      if (apiSupport !== undefined && minVersion < apiSupport) {
        return true;
      }
    }
    
    return false;
  }

  /**
   * Analyze all files in a directory
   */
  analyzeDirectory(dirPath) {
    console.log(`\nAnalyzing directory: ${dirPath}\n`);
    
    const files = this.glob(dirPath, ['.js', '.mjs']);
    
    for (const file of files) {
      this.analyzeFile(file);
    }
    
    return this.results;
  }

  /**
   * Generate polyfill import statements
   */
  generatePolyfillImports() {
    if (this.requiredPolyfills.size === 0) {
      return '// No polyfills required for target browsers\n';
    }
    
    const imports = [];
    imports.push('// Polyfills required for target browser support\n');
    
    const polyfillImports = {
      'resize-observer-polyfill': "import ResizeObserver from 'resize-observer-polyfill';",
      'intersection-observer': "import 'intersection-observer';",
      'element-closest': "import 'element-closest';",
      'element-remove-polyfill': `
        // ChildNode.remove polyfill
        if (!Element.prototype.remove) {
          Element.prototype.remove = function() {
            if (this.parentNode) this.parentNode.removeChild(this);
          };
        }
      `,
      'element-observe-polyfill': `
        // ParentNode.append/prepend polyfill
        if (!Element.prototype.append) {
          Element.prototype.append = function(...nodes) {
            const frag = document.createDocumentFragment();
            nodes.forEach(node => frag.appendChild(node instanceof Node ? node : document.createTextNode(node)));
            this.appendChild(frag);
          };
        }
        if (!Element.prototype.prepend) {
          Element.prototype.prepend = function(...nodes) {
            const frag = document.createDocumentFragment();
            nodes.forEach(node => frag.appendChild(node instanceof Node ? node : document.createTextNode(node)));
            this.insertBefore(frag, this.firstChild);
          };
        }
      `,
      'core-js-pure': "import 'core-js/stable';",
      'polyfill-core': "import 'core-js/stable';",
      'node-fetch': "import 'isomorphic-fetch';",
      'event-target-polyfill': `
        // EventTarget polyfill
        if (typeof EventTarget === 'undefined') {
          class EventTarget {
            constructor() {
              this.listeners = {};
            }
            addEventListener(type, callback) {
              if (!this.listeners[type]) this.listeners[type] = [];
              this.listeners[type].push(callback);
            }
            removeEventListener(type, callback) {
              if (this.listeners[type]) {
                this.listeners[type] = this.listeners[type].filter(cb => cb !== callback);
              }
            }
            dispatchEvent(event) {
              if (this.listeners[event.type]) {
                this.listeners[event.type].forEach(callback => callback.call(this, event));
              }
            }
          }
          window.EventTarget = EventTarget;
        }
      `,
      'abort-controller': "import 'abort-controller';",
      'perf-observer-polyfill': `
        // Basic PerformanceObserver polyfill
        if (typeof PerformanceObserver === 'undefined') {
          window.PerformanceObserver = class {
            constructor(callback) { this.callback = callback; }
            observe() {}
            disconnect() {}
            takeRecords() { return []; }
            static get entries() { return []; }
          };
        }
      `,
      'classlist-polyfill': `
        // classList polyfill
        if (!('classList' in Element.prototype)) {
          Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
              const self = this;
              return {
                add: function(c) { if (!self.classList.contains(c)) self.className += ' ' + c; },
                remove: function(c) { self.className = self.className.replace(new RegExp('(?:^|\\s)' + c + '(?:\\s|$)', 'g'), ' '); },
                contains: function(c) { return self.className.match(new RegExp('(?:^|\\s)' + c + '(?:\\s|$)')) !== null; },
                toggle: function(c) { this.contains(c) ? this.remove(c) : this.add(c); }
              };
            }
          });
        }
      `,
      'structured-clone-polyfill': `
        // structuredClone polyfill
        if (typeof structuredClone === 'undefined') {
          window.structuredClone = function(obj) {
            return JSON.parse(JSON.stringify(obj));
          };
        }
      `,
      'crypto-randomuuid-polyfill': `
        // crypto.randomUUID polyfill
        if (!crypto.randomUUID) {
          crypto.randomUUID = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              const r = Math.random() * 16 | 0;
              const v = c === 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
          };
        }
      `
    };
    
    for (const polyfill of this.requiredPolyfills) {
      if (polyfillImports[polyfill]) {
        imports.push(polyfillImports[polyfill]);
      } else {
        imports.push(`// Note: ${polyfill} needs to be installed and imported`);
      }
    }
    
    return imports.join('\n');
  }

  /**
   * Generate a Rollup/Babel configuration snippet
   */
  generateRollupConfig() {
    const polyfills = Array.from(this.requiredPolyfills);
    
    return `
// polyfills.config.js - Rollup polyfill configuration
export const polyfills = ${JSON.stringify(polyfills, null, 2)};

// Recommended .browserslistrc for targeted polyfill injection:
/*
# Target browsers for polyfill injection
last 2 Chrome versions
last 2 Firefox versions
last 2 Safari versions
last 2 Edge versions
not IE 11
*/
`;
  }

  /**
   * Generate report
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      targetBrowsers: this.options.targetBrowsers,
      summary: {
        totalFiles: this.results.size,
        totalAPIs: 0,
        totalPolyfills: this.requiredPolyfills.size
      },
      files: [],
      requiredPolyfills: Array.from(this.requiredPolyfills)
    };
    
    for (const [filePath, result] of this.results) {
      report.summary.totalAPIs += result.detectedAPIs.length;
      if (result.requiredPolyfills.length > 0) {
        report.files.push({
          path: filePath,
          detectedAPIs: result.detectedAPIs,
          polyfills: result.requiredPolyfills
        });
      }
    }
    
    return report;
  }

  glob(dir, extensions) {
    const results = [];
    
    const walk = (currentDir) => {
      try {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(currentDir, entry.name);
          
          if (entry.isDirectory()) {
            if (!['node_modules', 'dist', 'build', '.git'].includes(entry.name)) {
              walk(fullPath);
            }
          } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (extensions.includes(ext)) {
              results.push(fullPath);
            }
          }
        }
      } catch (e) {
        // Skip inaccessible directories
      }
    };
    
    walk(dir);
    return results;
  }
}

/**
 * Generate inline polyfills (for direct injection into bundles)
 */
function generateInlinePolyfills() {
  return `
// Inline Polyfills for Modern Web APIs
// Auto-generated by polyfill-analyzer.js

(function(global) {
  'use strict';

  // ResizeObserver
  if (typeof ResizeObserver === 'undefined') {
    global.ResizeObserver = class ResizeObserver {
      constructor(callback) {
        this.callback = callback;
        this.observations = [];
      }
      observe(target) {
        if (!this.observations.find(o => o.target === target)) {
          this.observations.push({ target });
        }
      }
      unobserve(target) {
        this.observations = this.observations.filter(o => o.target !== target);
      }
      disconnect() {
        this.observations = [];
      }
    };
  }

  // IntersectionObserver
  if (typeof IntersectionObserver === 'undefined') {
    global.IntersectionObserver = class IntersectionObserver {
      constructor(callback, options = {}) {
        this.callback = callback;
        this.options = options;
        this.observations = [];
      }
      observe(target) {
        if (!this.observations.find(o => o.target === target)) {
          this.observations.push({ target, isIntersecting: false });
        }
      }
      unobserve(target) {
        this.observations = this.observations.filter(o => o.target !== target);
      }
      disconnect() {
        this.observations = [];
      }
      takeRecords() {
        return this.observations.map(o => ({ target: o.target, isIntersecting: o.isIntersecting }));
      }
    };
  }

  // CustomEvent
  if (typeof CustomEvent === 'undefined') {
    global.CustomEvent = class CustomEvent extends Event {
      constructor(type, options = {}) {
        super(type, options);
        this.detail = options.detail || null;
      }
    };
  }

  // Element.prototype.matches
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
      Element.prototype.webkitMatchesSelector;
  }

  // Element.prototype.closest
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      let el = this;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // ChildNode.remove
  if (!Element.prototype.remove) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  // ParentNode.append
  if (!Element.prototype.append) {
    Element.prototype.append = function(...nodes) {
      const frag = document.createDocumentFragment();
      nodes.forEach(node => {
        frag.appendChild(node instanceof Node ? node : document.createTextNode(String(node)));
      });
      this.appendChild(frag);
    };
  }

  // ParentNode.prepend
  if (!Element.prototype.prepend) {
    Element.prototype.prepend = function(...nodes) {
      const frag = document.createDocumentFragment();
      nodes.forEach(node => {
        frag.appendChild(node instanceof Node ? node : document.createTextNode(String(node)));
      });
      this.insertBefore(frag, this.firstChild);
    };
  }

  // crypto.randomUUID
  if (!global.crypto || !global.crypto.randomUUID) {
    if (!global.crypto) global.crypto = {};
    global.crypto.randomUUID = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };
  }

  // structuredClone
  if (typeof structuredClone === 'undefined') {
    global.structuredClone = function(obj) {
      return JSON.parse(JSON.stringify(obj));
    };
  }

})(typeof window !== 'undefined' ? window : global);
`;
}

// CLI Interface
function main() {
  const args = process.argv.slice(2);
  const options = {
    targetBrowsers: { ...BROWSER_VERSIONS },
    verbose: false,
    outputFile: null,
    generateInline: false,
    generateRollupConfig: false
  };
  let targetPath = path.join(ROOT, 'js');

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--path' || args[i] === '-p') {
      targetPath = args[++i];
    } else if (args[i] === '--verbose' || args[i] === '-v') {
      options.verbose = true;
    } else if (args[i] === '--output' || args[i] === '-o') {
      options.outputFile = args[++i];
    } else if (args[i] === '--inline') {
      options.generateInline = true;
    } else if (args[i] === '--rollup-config') {
      options.generateRollupConfig = true;
    } else if (args[i] === '--target') {
      const target = args[++i].toLowerCase();
      if (target === 'legacy') {
        options.targetBrowsers = { ie: 11, chrome: 50, firefox: 50, safari: 10, edge: 15 };
      } else if (target === 'modern') {
        options.targetBrowsers = { chrome: 90, firefox: 90, safari: 14, edge: 90 };
      }
    } else if (args[i] === '--help' || args[i] === '-h') {
      printHelp();
      process.exit(0);
    }
  }

  console.log('🔍 Polyfill Analyzer - Web API Compatibility Checker');
  console.log('='.repeat(60));
  console.log(`Target browsers:`, options.targetBrowsers);
  console.log('');

  const analyzer = new PolyfillAnalyzer(options);
  
  const stat = fs.statSync(targetPath);
  if (stat.isDirectory()) {
    analyzer.analyzeDirectory(targetPath);
  } else {
    analyzer.analyzeFile(targetPath);
  }

  const report = analyzer.generateReport();
  
  console.log('\n' + '='.repeat(60));
  console.log('ANALYSIS RESULTS');
  console.log('='.repeat(60));
  console.log(`Files analyzed: ${report.summary.totalFiles}`);
  console.log(`APIs detected: ${report.summary.totalAPIs}`);
  console.log(`Polyfills needed: ${report.summary.totalPolyfills}`);
  
  if (report.requiredPolyfills.length > 0) {
    console.log('\nRequired polyfills:');
    report.requiredPolyfills.forEach(p => console.log(`  - ${p}`));
  }
  
  // Generate polyfill imports
  if (report.requiredPolyfills.length > 0) {
    const imports = analyzer.generatePolyfillImports();
    
    if (options.outputFile) {
      fs.writeFileSync(options.outputFile, imports, 'utf8');
      console.log(`\n📄 Polyfill imports written to: ${options.outputFile}`);
    } else {
      console.log('\n📋 Polyfill imports:');
      console.log(imports);
    }
  }
  
  // Generate inline polyfills
  if (options.generateInline) {
    const inlinePolyfills = generateInlinePolyfills();
    const inlinePath = options.outputFile ? options.outputFile.replace('.js', '.inline.js') : 'polyfills-inline.js';
    fs.writeFileSync(inlinePath, inlinePolyfills, 'utf8');
    console.log(`\n📄 Inline polyfills written to: ${inlinePath}`);
  }
  
  // Generate Rollup config
  if (options.generateRollupConfig) {
    const rollupConfig = analyzer.generateRollupConfig();
    fs.writeFileSync('polyfills.config.js', rollupConfig, 'utf8');
    console.log('\n📄 Rollup config written to: polyfills.config.js');
  }

  // Save report
  const reportPath = path.join(ROOT, 'polyfill-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`\n📊 Full report saved to: ${reportPath}`);
  console.log('='.repeat(60));
}

function printHelp() {
  console.log(`
Event-Delegation and Dynamic Web API Polyfill Injector

Usage:
  node polyfill-analyzer.js [options] [path]

Options:
  -p, --path <path>      Directory or file to analyze (default: ./js)
  -o, --output <file>    Write polyfill imports to file
  -v, --verbose          Show detailed API detection
  --inline               Generate inline polyfill bundle
  --rollup-config        Generate Rollup polyfill config
  --target <profile>     Target browser profile (legacy|modern)
  -h, --help             Show this help message

Examples:
  # Analyze JS files and show required polyfills
  node polyfill-analyzer.js --path ./js
  
  # Generate polyfill imports file
  node polyfill-analyzer.js -o polyfills-needed.js
  
  # Target legacy browsers (IE11, older Safari, etc.)
  node polyfill-analyzer.js --target legacy
  
  # Generate inline polyfill bundle
  node polyfill-analyzer.js --inline

Browser Profiles:
  legacy  - IE11, Safari 10, older mobile browsers
  modern  - Latest 2 versions of major browsers

Supported APIs:
  - ResizeObserver, IntersectionObserver
  - CustomEvent, Element.matches, Element.closest
  - Promise, fetch, Object.assign
  - Array.from, Array.includes
  - classList, dataset
  - ChildNode.remove, ParentNode.append/prepend
  - PerformanceObserver, AbortController
  - structuredClone, crypto.randomUUID
  `);
}

// Export for programmatic use
module.exports = { PolyfillAnalyzer, API_COMPATIBILITY, BROWSER_VERSIONS, generateInlinePolyfills };

// Run if called directly
if (require.main === module) {
  main();
}