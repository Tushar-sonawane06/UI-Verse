#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('crypto');

// Config
const ROOT = process.cwd();
const SKIP_DIRS = new Set(['.git', 'node_modules', 'playwright-report', 'test-results', 'generated-images', 'coverage', 'dist', '.storybook', 'storybook-static']);
const DYNAMIC_HASHES_FILE = path.join(ROOT, 'dynamic-csp-hashes.json');

// MIME types for local server
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// Start a local static server on a random free port
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let urlPath = decodeURIComponent(req.url.split('?')[0]);
      if (urlPath === '/') urlPath = '/index.html';
      const filePath = path.join(ROOT, urlPath);

      fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('404 Not Found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', contentType + '; charset=utf-8');

        const stream = fs.createReadStream(filePath);
        stream.on('error', () => {
          res.statusCode = 500;
          res.end('Internal Server Error');
        });
        stream.pipe(res);
      });
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      console.log(`[Audit Server] Running locally on http://127.0.0.1:${port}`);
      resolve({ server, port });
    });
  });
}

// Walk directories to gather all HTML files
function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) {
        continue;
      }
      walk(path.join(dir, entry.name), results);
      continue;
    }

    if (entry.name.toLowerCase().endsWith('.html')) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

// Compute standard CSP hash
function computeHash(content) {
  const normalized = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const hash = crypto.createHash('sha256').update(normalized, 'utf8').digest('base64');
  return `'sha256-${hash}'`;
}

// Load Playwright
function getPlaywright() {
  try {
    return require('@playwright/test');
  } catch (e) {
    try {
      return require('playwright');
    } catch (err) {
      console.error('Playwright must be installed to run the dynamic audit tool.');
      process.exit(1);
    }
  }
}

async function runAudit() {
  const checkMode = process.argv.includes('--check');
  console.log(`[Audit] Starting dynamic security audit (Mode: ${checkMode ? 'CHECK' : 'UPDATE'})...`);

  // Start HTTP Server
  const { server, port } = await startServer();

  // Load Playwright
  const { chromium } = getPlaywright();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    bypassCSP: false // We MUST enforce CSP to detect violations!
  });

  const htmlFiles = walk(ROOT);
  const results = {};
  const violationsMap = {};

  for (const htmlFile of htmlFiles) {
    const relativePath = path.relative(ROOT, htmlFile).split(path.sep).join('/');
    const url = `http://127.0.0.1:${port}/${relativePath}`;
    console.log(`[Audit] Auditing page: ${relativePath}`);

    const scriptHashes = new Set();
    const styleHashes = new Set();
    const violations = [];

    const page = await context.newPage();

    // 1. Expose binding functions for telemetry
    await page.exposeFunction('reportDynamicAsset', (type, content) => {
      if (!content || !content.trim()) return;
      if (type === 'script' || type === 'script-attr') {
        const hash = computeHash(type === 'script-attr' ? content.trim() : content);
        scriptHashes.add(hash);
      }
    });

    await page.exposeFunction('reportViolation', (violation) => {
      violations.push(violation);
      console.warn(`[Audit Warning] CSP Violation on ${relativePath}:`, violation);
    });

    // 2. Inject DOM wrappers to capture dynamic inline scripts & styles
    await page.addInitScript(() => {
      const report = (type, content) => {
        if (typeof window.reportDynamicAsset === 'function') {
          window.reportDynamicAsset(type, content);
        }
      };

      // Intercept setAttribute (event attributes & styles)
      const origSetAttribute = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(name, value) {
        const lowerName = name.toLowerCase();
        if (lowerName.startsWith('on')) {
          report('script-attr', value);
        } else if (lowerName === 'style') {
          report('style-attr', value);
        }
        return origSetAttribute.apply(this, arguments);
      };

      // Intercept properties on HTMLScriptElement and HTMLStyleElement
      const descText = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'text');
      if (descText && descText.set) {
        const origSetText = descText.set;
        Object.defineProperty(HTMLScriptElement.prototype, 'text', {
          set: function(val) {
            report('script', val);
            return origSetText.call(this, val);
          }
        });
      }

      const descTextContent = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
      if (descTextContent && descTextContent.set) {
        const origSetTextContent = descTextContent.set;
        Object.defineProperty(Node.prototype, 'textContent', {
          set: function(val) {
            if (this instanceof HTMLScriptElement) {
              report('script', val);
            } else if (this instanceof HTMLStyleElement) {
              report('style', val);
            }
            return origSetTextContent.call(this, val);
          }
        });
      }

      const descInnerText = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerText');
      if (descInnerText && descInnerText.set) {
        const origSetInnerText = descInnerText.set;
        Object.defineProperty(HTMLElement.prototype, 'innerText', {
          set: function(val) {
            if (this instanceof HTMLScriptElement) {
              report('script', val);
            } else if (this instanceof HTMLStyleElement) {
              report('style', val);
            }
            return origSetInnerText.call(this, val);
          }
        });
      }

      // Intercept innerHTML
      const descInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
      if (descInnerHTML && descInnerHTML.set) {
        const origSetInnerHTML = descInnerHTML.set;
        Object.defineProperty(Element.prototype, 'innerHTML', {
          set: function(val) {
            parseAndReportHTML(val);
            return origSetInnerHTML.call(this, val);
          }
        });
      }

      // Intercept document.write
      const origWrite = document.write;
      document.write = function(str) {
        parseAndReportHTML(str);
        return origWrite.apply(this, arguments);
      };

      // Intercept appendChild and insertBefore
      const origAppendChild = Node.prototype.appendChild;
      Node.prototype.appendChild = function(node) {
        inspectNodeAndReport(node);
        return origAppendChild.apply(this, arguments);
      };

      const origInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function(node, ref) {
        inspectNodeAndReport(node);
        return origInsertBefore.apply(this, arguments);
      };

      function inspectNodeAndReport(node) {
        if (!node) return;
        if (node instanceof HTMLScriptElement) {
          report('script', node.textContent || node.text || '');
        } else if (node instanceof HTMLStyleElement) {
          report('style', node.textContent || '');
        } else if (node.nodeType === 1) { // Element
          for (let i = 0; i < node.attributes.length; i++) {
            const attr = node.attributes[i];
            const name = attr.name.toLowerCase();
            if (name.startsWith('on')) {
              report('script-attr', attr.value);
            } else if (name === 'style') {
              report('style-attr', attr.value);
            }
          }
          const scripts = node.getElementsByTagName('script');
          for (let i = 0; i < scripts.length; i++) {
            report('script', scripts[i].textContent || scripts[i].text || '');
          }
          const styles = node.getElementsByTagName('style');
          for (let i = 0; i < styles.length; i++) {
            report('style', styles[i].textContent || '');
          }
          const descendants = node.getElementsByTagName('*');
          for (let i = 0; i < descendants.length; i++) {
            const desc = descendants[i];
            for (let j = 0; j < desc.attributes.length; j++) {
              const attr = desc.attributes[j];
              const name = attr.name.toLowerCase();
              if (name.startsWith('on')) {
                report('script-attr', attr.value);
              } else if (name === 'style') {
                report('style-attr', attr.value);
              }
            }
          }
        }
      }

      function parseAndReportHTML(htmlString) {
        try {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, 'text/html');
          inspectNodeAndReport(doc.body);
        } catch (e) {
          // Ignore
        }
      }

      // Listen to securitypolicyviolation events
      document.addEventListener('securitypolicyviolation', (e) => {
        if (typeof window.reportViolation === 'function') {
          window.reportViolation({
            blockedURI: e.blockedURI,
            violatedDirective: e.violatedDirective,
            sourceFile: e.sourceFile,
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber,
            sample: e.sample
          });
        }
      });
    });

    // 3. Open URL
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 5000 });

      // Run static scan on the page DOM just after load
      await page.evaluate(() => {
        const report = (type, content) => {
          if (typeof window.reportDynamicAsset === 'function') {
            window.reportDynamicAsset(type, content);
          }
        };

        // Static scripts without src
        const scripts = document.querySelectorAll('script:not([src])');
        scripts.forEach(s => report('script', s.textContent || s.text || ''));

        // Static styles
        const styles = document.querySelectorAll('style');
        styles.forEach(s => report('style', s.textContent || ''));

        // All element attributes
        const all = document.querySelectorAll('*');
        all.forEach(el => {
          for (let i = 0; i < el.attributes.length; i++) {
            const attr = el.attributes[i];
            const name = attr.name.toLowerCase();
            if (name.startsWith('on')) {
              report('script-attr', attr.value);
            } else if (name === 'style') {
              report('style-attr', attr.value);
            }
          }
        });
      });

      // Special action: if page is test-security-csp.html, click all buttons to trigger handlers
      if (relativePath.includes('test-security-csp.html')) {
        const buttons = await page.locator('button').all();
        console.log(`[Audit] Clicking ${buttons.length} buttons on test-security-csp.html to test handlers...`);
        for (const btn of buttons) {
          try {
            await btn.click({ timeout: 200 });
            await page.waitForTimeout(50);
          } catch (e) {
            // Ignore click failures
          }
        }
      }

      // Wait a short duration for any animations/delayed tasks to run
      await page.waitForTimeout(300);

    } catch (err) {
      console.error(`[Audit Error] Failed to process ${relativePath}:`, err.message);
    } finally {
      await page.close();
    }

    if (scriptHashes.size > 0 || styleHashes.size > 0) {
      results[relativePath] = {
        scriptHashes: Array.from(scriptHashes).sort(),
        styleHashes: Array.from(styleHashes).sort()
      };
    }

    if (violations.length > 0) {
      violationsMap[relativePath] = violations;
    }
  }

  // Close server and browser
  await browser.close();
  server.close();

  // Read existing hashes if any
  let oldResults = {};
  if (fs.existsSync(DYNAMIC_HASHES_FILE)) {
    try {
      oldResults = JSON.parse(fs.readFileSync(DYNAMIC_HASHES_FILE, 'utf8'));
    } catch (e) {}
  }

  if (checkMode) {
    // Check if hashes match
    let matches = true;
    for (const [key, value] of Object.entries(results)) {
      const old = oldResults[key] || { scriptHashes: [], styleHashes: [] };
      const sDiff1 = value.scriptHashes.filter(x => !old.scriptHashes.includes(x));
      const sDiff2 = old.scriptHashes.filter(x => !value.scriptHashes.includes(x));
      const cssDiff1 = value.styleHashes.filter(x => !old.styleHashes.includes(x));
      const cssDiff2 = old.styleHashes.filter(x => !value.styleHashes.includes(x));

      if (sDiff1.length || sDiff2.length || cssDiff1.length || cssDiff2.length) {
        console.error(`[Audit Error] Mismatched dynamic hashes for ${key}:`);
        if (sDiff1.length) console.error(`  Missing scripts in dynamic-csp-hashes.json:`, sDiff1);
        if (sDiff2.length) console.error(`  Stale scripts in dynamic-csp-hashes.json:`, sDiff2);
        if (cssDiff1.length) console.error(`  Missing styles in dynamic-csp-hashes.json:`, cssDiff1);
        if (cssDiff2.length) console.error(`  Stale styles in dynamic-csp-hashes.json:`, cssDiff2);
        matches = false;
      }
    }

    const violationCount = Object.keys(violationsMap).length;
    if (violationCount > 0) {
      console.error(`[Audit Fail] Detected ${violationCount} pages with CSP violations:`);
      for (const [page, list] of Object.entries(violationsMap)) {
        console.error(`- Page: ${page} has ${list.length} violation(s):`);
        list.forEach(v => console.error(`  * Violating directive: ${v.violatedDirective}, sample: ${v.sample || 'N/A'}`));
      }
      process.exit(1);
    }

    if (!matches) {
      console.error('[Audit Fail] Dynamic CSP verification failed. Run the audit tool to update.');
      process.exit(1);
    }

    console.log('[Audit Success] Dynamic CSP validation passed. No violations and hashes are up-to-date.');
  } else {
    // Update Mode
    fs.writeFileSync(DYNAMIC_HASHES_FILE, JSON.stringify(results, null, 2), 'utf8');
    console.log(`[Audit Success] Dynamic hashes written to ${DYNAMIC_HASHES_FILE}`);
  }
}

if (require.main === module) {
  runAudit().catch(err => {
    console.error('[Audit Process Error]:', err);
    process.exit(1);
  });
}
