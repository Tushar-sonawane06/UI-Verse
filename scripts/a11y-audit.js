#!/usr/bin/env node
/**
 * UI-Verse Accessibility Audit Engine
 * Scans component HTML files for WCAG 2.1 Level AA compliance
 * Produces per-component scores with violation details and fix suggestions
 */

const fs = require('fs');
const path = require('path');

// WCAG success criteria mapping for fix suggestions
const WCAG_CRITERIA = {
  'main-landmark': {
    criterion: '1.3.1 Info and Relationships',
    level: 'A',
    fix: 'Wrap primary content in a <main> element or add role="main" to the content container'
  },
  'skip-link': {
    criterion: '2.4.1 Bypass Blocks',
    level: 'A',
    fix: 'Add a skip link as the first child of <body>: <a href="#main-content" class="skip-link">Skip to main content</a>'
  },
  'accessible-name': {
    criterion: '4.1.2 Name, Role, Value',
    level: 'A',
    fix: 'Add aria-label, aria-labelledby, or visible text content to the element'
  },
  'form-label': {
    criterion: '3.3.2 Labels or Instructions',
    level: 'A',
    fix: 'Associate a <label> with the input using for="" attribute, or add aria-label/aria-labelledby'
  },
  'focus-visible': {
    criterion: '2.4.7 Focus Visible',
    level: 'AA',
    fix: 'Add :focus-visible { outline: 3px solid #06b6d4; outline-offset: 2px; } or equivalent'
  },
  'contrast': {
    criterion: '1.4.3 Contrast (Minimum)',
    level: 'AA',
    fix: 'Ensure text has a contrast ratio of at least 4.5:1 against its background. Use a contrast checker tool.'
  },
  'heading-hierarchy': {
    criterion: '1.3.1 Info and Relationships',
    level: 'A',
    fix: 'Use heading levels sequentially (h1 → h2 → h3) without skipping levels'
  },
  'lang-attribute': {
    criterion: '3.1.1 Language of Page',
    level: 'A',
    fix: 'Add lang="en" (or appropriate language) to the <html> element'
  },
  'img-alt': {
    criterion: '1.1.1 Non-text Content',
    level: 'A',
    fix: 'Add descriptive alt text to images, or alt="" if decorative'
  },
  'aria-roles': {
    criterion: '4.1.2 Name, Role, Value',
    level: 'A',
    fix: 'Use valid ARIA roles and ensure required properties are present'
  },
  'keyboard-activation': {
    criterion: '2.1.1 Keyboard',
    level: 'A',
    fix: 'Ensure all interactive elements are focusable and operable via keyboard (Enter/Space)'
  },
  'target-size': {
    criterion: '2.5.5 Target Size',
    level: 'AAA',
    fix: 'Ensure interactive elements are at least 44×44 CSS pixels (24×24 for Level AA)'
  }
};

const SEVERITY_WEIGHTS = {
  error: 3,
  warning: 1,
  passed: 0
};

const MAX_SCORE = 100;

class A11yAuditEngine {
  constructor(rootDir = '.') {
    this.rootDir = path.resolve(rootDir);
    this.results = [];
    this.componentIndex = null;
  }

  loadComponentIndex() {
    const indexPath = path.join(this.rootDir, 'components', 'components-index-data.js');
    if (!fs.existsSync(indexPath)) return;
    const raw = fs.readFileSync(indexPath, 'utf8');
    const jsonStart = raw.indexOf('{');
    const jsonEnd = raw.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) return;
    try {
      this.componentIndex = JSON.parse(raw.slice(jsonStart, jsonEnd + 1));
    } catch (e) {
      console.warn('Could not parse component index:', e.message);
    }
  }

  getComponentFiles() {
    const entries = fs.readdirSync(this.rootDir, { withFileTypes: true });
    const files = [];
    for (const ent of entries) {
      if (!ent.isFile()) continue;
      const name = ent.name;
      if (name.endsWith('.html') && !this._isExcluded(name)) {
        files.push(path.join(this.rootDir, name));
      }
    }
    // Subdirs
    const subDirs = fs.readdirSync(this.rootDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && !['node_modules','reports','dist','tests','bench','scripts','.github','.storybook'].includes(d.name))
      .map(d => d.name);
    for (const dir of subDirs) {
      const dirPath = path.join(this.rootDir, dir);
      try {
        const subEntries = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const ent of subEntries) {
          if (ent.isFile() && ent.name.endsWith('.html')) {
            files.push(path.join(dirPath, ent.name));
          }
        }
      } catch (e) {}
    }
    return files;
  }

  _isExcluded(name) {
    const exclude = new Set([
      'index.html','documentation.html','guidelines.html','about.html','faq.html',
      'contact.html','terms.html','privacypolicy.html','license.html',
      'dependency-dashboard.html','performance-dashboard.html','admin-panel.html',
      'a11y-dashboard.html','test-command-palette.html','test-security-csp.html',
      'test-url-state.html','url-state.html','verify-produce.html',
      'smart-search-demo.html','web-components-demo.html','welcome.html'
    ]);
    return exclude.has(name);
  }

  _getCategory(filePath) {
    if (!this.componentIndex) return 'other';
    const rel = path.relative(this.rootDir, filePath).replace(/\\/g, '/');
    for (const cat of this.componentIndex.categories || []) {
      for (const item of cat.items || []) {
        if (item.path === rel) return cat.id;
      }
    }
    return 'other';
  }

  _getTitle(filePath) {
    if (!this.componentIndex) return path.basename(filePath, '.html');
    const rel = path.relative(this.rootDir, filePath).replace(/\\/g, '/');
    for (const cat of this.componentIndex.categories || []) {
      for (const item of cat.items || []) {
        if (item.path === rel) return item.title || item.id;
      }
    }
    return path.basename(filePath, '.html');
  }

  auditFile(filePath) {
    let content;
    try {
      content = fs.readFileSync(filePath, 'utf8');
    } catch (e) {
      return null;
    }

    const violations = [];
    const passes = [];
    const warnings = [];

    // 1. lang attribute
    const hasLang = /<html[^>]*lang=["'][^"']+["']/.test(content);
    if (hasLang) {
      passes.push({ rule: 'lang-attribute', message: 'Page has lang attribute' });
    } else {
      violations.push({
        rule: 'lang-attribute',
        message: '<html> element is missing lang attribute',
        selector: 'html',
        severity: 'error'
      });
    }

    // 2. main landmark
    const hasMain = /<main[>\s]/.test(content) || /role=["']main["']/.test(content);
    if (hasMain) {
      passes.push({ rule: 'main-landmark', message: 'Main landmark present' });
    } else {
      violations.push({
        rule: 'main-landmark',
        message: 'Page lacks <main> element or role="main"',
        selector: 'body > :first-child',
        severity: 'error'
      });
    }

    // 3. skip link
    const hasSkipLink = /skip-link/.test(content) || /href=["']#main-content["']/.test(content);
    if (hasSkipLink) {
      passes.push({ rule: 'skip-link', message: 'Skip link present' });
    } else {
      violations.push({
        rule: 'skip-link',
        message: 'No skip link detected',
        selector: 'body',
        severity: 'warning'
      });
    }

    // 4. heading hierarchy
    const h1Match = content.match(/<<h1/gi);
    const h2Match = content.match(/<<h2/gi);
    const h3Match = content.match(/<<h3/gi);
    const h1Count = h1Match ? h1Match.length : 0;
    if (h1Count === 1) {
      passes.push({ rule: 'heading-hierarchy', message: 'Single h1 present' });
    } else if (h1Count === 0) {
      violations.push({
        rule: 'heading-hierarchy',
        message: 'No h1 element found',
        selector: 'body',
        severity: 'error'
      });
    } else {
      warnings.push({
        rule: 'heading-hierarchy',
        message: `Multiple h1 elements found (${h1Count})`,
        selector: 'h1',
        severity: 'warning'
      });
    }

    // 5. img alt
    const imgTags = content.match(/<<img[^>]*>/gi) || [];
    let imgWithAlt = 0;
    let imgWithoutAlt = 0;
    for (const img of imgTags) {
      if (/alt=["']/.test(img)) {
        imgWithAlt++;
      } else {
        imgWithoutAlt++;
      }
    }
    if (imgTags.length > 0) {
      if (imgWithoutAlt === 0) {
        passes.push({ rule: 'img-alt', message: 'All images have alt text' });
      } else {
        violations.push({
          rule: 'img-alt',
          message: `${imgWithoutAlt} image(s) missing alt text`,
          selector: 'img:not([alt])',
          severity: 'error',
          count: imgWithoutAlt
        });
      }
    }

    // 6. button accessible names
    const buttonTags = content.match(/<<button[^>]*>[\s\S]*?<\/button>/gi) || [];
    let buttonsWithoutName = 0;
    for (const btn of buttonTags) {
      const hasAriaLabel = /aria-label=["']/.test(btn);
      const hasTitle = /title=["']/.test(btn);
      const hasText = btn.replace(/<<[^>]*>/g, '').trim().length > 0;
      const hasAriaLabelledBy = /aria-labelledby=["']/.test(btn);
      if (!hasAriaLabel && !hasTitle && !hasText && !hasAriaLabelledBy) {
        buttonsWithoutName++;
      }
    }
    if (buttonTags.length > 0) {
      if (buttonsWithoutName === 0) {
        passes.push({ rule: 'accessible-name', message: 'All buttons have accessible names' });
      } else {
        violations.push({
          rule: 'accessible-name',
          message: `${buttonsWithoutName} button(s) missing accessible name`,
          selector: 'button:not([aria-label]):not([aria-labelledby]):not([title]):empty',
          severity: 'error',
          count: buttonsWithoutName
        });
      }
    }

    // 7. form labels
    const inputTags = content.match(/<<input[^>]*>/gi) || [];
    const textareaTags = content.match(/<<textarea[>\s]/gi) || [];
    const selectTags = content.match(/<<select[>\s]/gi) || [];
    let unlabeledFields = 0;
    const fieldSelectors = [];

    for (const field of [...inputTags, ...textareaTags, ...selectTags]) {
      if (/type=["']hidden["']/.test(field)) continue;
      const hasAriaLabel = /aria-label=["']/.test(field);
      const hasAriaLabelledBy = /aria-labelledby=["']/.test(field);
      const idMatch = field.match(/id=["']([^"']+)["']/);
      const hasLabel = idMatch && new RegExp(`<<label[^>]*for=["']${idMatch[1]}["']`).test(content);
      if (!hasAriaLabel && !hasAriaLabelledBy && !hasLabel) {
        unlabeledFields++;
        const typeMatch = field.match(/type=["']([^"']+)["']/);
        fieldSelectors.push(typeMatch ? `input[type="${typeMatch[1]}"]` : 'input');
      }
    }
    if (inputTags.length + textareaTags.length + selectTags.length > 0) {
      if (unlabeledFields === 0) {
        passes.push({ rule: 'form-label', message: 'All form controls have labels' });
      } else {
        violations.push({
          rule: 'form-label',
          message: `${unlabeledFields} form control(s) missing label`,
          selector: fieldSelectors.join(', ') || 'input, textarea, select',
          severity: 'error',
          count: unlabeledFields
        });
      }
    }

    // 8. ARIA roles validity
    const roleTags = content.match(/role=["']([^"']+)["']/gi) || [];
    const validRoles = new Set([
      'alert','alertdialog','application','article','banner','button','cell',
      'checkbox','columnheader','combobox','complementary','contentinfo',
      'definition','dialog','directory','document','feed','figure','form',
      'grid','gridcell','group','heading','img','link','list','listbox',
      'listitem','log','main','marquee','math','menu','menubar','menuitem',
      'menuitemcheckbox','menuitemradio','navigation','none','note',
      'option','presentation','progressbar','radio','radiogroup','region',
      'row','rowgroup','rowheader','scrollbar','search','searchbox',
      'separator','slider','spinbutton','status','switch','tab','table',
      'tablist','tabpanel','textbox','timer','toolbar','tooltip','tree',
      'treegrid','treeitem'
    ]);
    let invalidRoles = 0;
    for (const roleTag of roleTags) {
      const roleMatch = roleTag.match(/role=["']([^"']+)["']/);
      if (roleMatch && !validRoles.has(roleMatch[1])) {
        invalidRoles++;
      }
    }
    if (roleTags.length > 0) {
      if (invalidRoles === 0) {
        passes.push({ rule: 'aria-roles', message: 'All ARIA roles are valid' });
      } else {
        violations.push({
          rule: 'aria-roles',
          message: `${invalidRoles} invalid ARIA role(s)`,
          selector: '[role]',
          severity: 'error',
          count: invalidRoles
        });
      }
    }

    // 9. keyboard activation (onclick on non-interactive elements)
    const onclickTags = content.match(/<<[^>]*onclick=["'][^"']+["'][^>]*>/gi) || [];
    let nonInteractiveOnclick = 0;
    for (const tag of onclickTags) {
      const tagName = tag.match(/<<([a-z0-9]+)/i);
      if (tagName && !['button','a','input','select','textarea','summary'].includes(tagName[1].toLowerCase())) {
        if (!/role=["']button["']/.test(tag) && !/tabindex=["']0["']/.test(tag)) {
          nonInteractiveOnclick++;
        }
      }
    }
    if (onclickTags.length > 0) {
      if (nonInteractiveOnclick === 0) {
        passes.push({ rule: 'keyboard-activation', message: 'All click handlers are on interactive elements' });
      } else {
        violations.push({
          rule: 'keyboard-activation',
          message: `${nonInteractiveOnclick} non-interactive element(s) with onclick missing keyboard support`,
          selector: '[onclick]:not(button):not(a):not(input):not([role="button"])',
          severity: 'warning',
          count: nonInteractiveOnclick
        });
      }
    }

    // 10. focus styles (check for CSS)
    const hasFocusStyles = /:focus-visible/.test(content) || /outline:/.test(content);
    if (hasFocusStyles) {
      passes.push({ rule: 'focus-visible', message: 'Focus styles present' });
    } else {
      warnings.push({
        rule: 'focus-visible',
        message: 'No :focus-visible or outline styles detected in inline CSS',
        selector: '*',
        severity: 'warning'
      });
    }

    // Calculate score
    const errorCount = violations.filter(v => v.severity === 'error').length;
    const warningCount = violations.filter(v => v.severity === 'warning').length + warnings.length;
    const totalChecks = passes.length + violations.length + warnings.length;
    
    const penalty = (errorCount * SEVERITY_WEIGHTS.error) + (warningCount * SEVERITY_WEIGHTS.warning);
    const maxPenalty = totalChecks * SEVERITY_WEIGHTS.error;
    const score = maxPenalty > 0 ? Math.max(0, Math.round(MAX_SCORE - (penalty / maxPenalty) * MAX_SCORE)) : MAX_SCORE;

    let status = 'pass';
    if (score < 50) status = 'fail';
    else if (score < 85) status = 'warning';

    // Add fix suggestions to violations
    const violationsWithFixes = violations.map(v => ({
      ...v,
      criterion: WCAG_CRITERIA[v.rule]?.criterion || 'WCAG 2.1',
      level: WCAG_CRITERIA[v.rule]?.level || 'A',
      fix: WCAG_CRITERIA[v.rule]?.fix || 'Review WCAG guidelines for this criterion'
    }));

    const warningsWithFixes = warnings.map(w => ({
      ...w,
      criterion: WCAG_CRITERIA[w.rule]?.criterion || 'WCAG 2.1',
      level: WCAG_CRITERIA[w.rule]?.level || 'AA',
      fix: WCAG_CRITERIA[w.rule]?.fix || 'Review WCAG guidelines for this criterion'
    }));

    return {
      file: path.relative(this.rootDir, filePath).replace(/\\/g, '/'),
      title: this._getTitle(filePath),
      category: this._getCategory(filePath),
      score,
      status,
      totalChecks,
      passed: passes.length,
      errors: errorCount,
      warnings: warningCount,
      passes,
      violations: violationsWithFixes,
      warnings: warningsWithFixes
    };
  }

  run() {
    this.loadComponentIndex();
    const files = this.getComponentFiles();
    console.debug(`🔍 Auditing ${files.length} component files for WCAG compliance...`);

    for (const file of files) {
      const result = this.auditFile(file);
      if (result) this.results.push(result);
    }

    // Sort by score ascending (worst first)
    this.results.sort((a, b) => a.score - b.score);

    return this.results;
  }

  save(outputDir = './reports/a11y') {
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.results.length,
        averageScore: this.results.length > 0
          ? Math.round(this.results.reduce((s, r) => s + r.score, 0) / this.results.length)
          : 0,
        passCount: this.results.filter(r => r.status === 'pass').length,
        warningCount: this.results.filter(r => r.status === 'warning').length,
        failCount: this.results.filter(r => r.status === 'fail').length,
        totalErrors: this.results.reduce((s, r) => s + r.errors, 0),
        totalWarnings: this.results.reduce((s, r) => s + r.warnings, 0)
      },
      results: this.results
    };

    const reportPath = path.join(outputDir, 'audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.debug(`✅ Audit report saved to ${reportPath}`);

    // Print summary
    console.debug('\n📊 Accessibility Audit Summary:');
    console.debug(`  Files audited: ${report.summary.totalFiles}`);
    console.debug(`  Average score: ${report.summary.averageScore}%`);
    console.debug(`  Pass: ${report.summary.passCount} | Warning: ${report.summary.warningCount} | Fail: ${report.summary.failCount}`);
    console.debug(`  Total errors: ${report.summary.totalErrors} | Total warnings: ${report.summary.totalWarnings}`);

    const worst = this.results.slice(0, 5);
    if (worst.some(r => r.status !== 'pass')) {
      console.debug('\n⚠️  Lowest scoring components:');
      worst.forEach(r => {
        console.debug(`  ${r.title} (${r.file}): ${r.score}% — ${r.errors} errors, ${r.warnings} warnings`);
      });
    }

    return report;
  }
}

if (require.main === module) {
  const engine = new A11yAuditEngine('.');
  engine.run();
  engine.save();
}

module.exports = A11yAuditEngine;