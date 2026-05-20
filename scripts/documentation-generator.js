#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COMPONENTS_FILE = path.join(ROOT, 'data', 'components.json');
const META_DIR = path.join(ROOT, 'data', 'meta');
const OUTPUT_JSON = path.join(ROOT, 'data', 'meta', 'documentation-catalog.json');
const OUTPUT_MD = path.join(ROOT, 'docs', 'COMPONENT_CATALOG.md');
const OUTPUT_COMPONENT_DOCS_DIR = path.join(ROOT, 'docs', 'components-generated');

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_) {
    return null;
  }
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (_) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function writeText(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, data, 'utf8');
}

function unique(items) {
  return Array.from(new Set((items || []).filter(Boolean)));
}

function parseLinks(html, tag, attr) {
  const regex = new RegExp(`<${tag}[^>]*${attr}=["']([^"']+)["'][^>]*>`, 'gi');
  const values = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    values.push(match[1]);
  }
  return unique(values);
}

function extractTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) return titleMatch[1].trim();
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) return '';
  return stripTags(h1Match[1]).trim();
}

function stripTags(value) {
  return String(value || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function extractMetaDescription(html) {
  const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  return match ? match[1].trim() : '';
}

function extractHeadings(html) {
  const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const headings = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    headings.push({ level: Number(match[1]), text: stripTags(match[2]) });
  }
  return headings;
}

function extractUsageSnippet(html) {
  const sectionMatch = html.match(/<section[\s\S]*?<\/section>/i);
  if (sectionMatch) return sectionMatch[0].trim();

  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) return mainMatch[0].trim();

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) return bodyMatch[1].trim().slice(0, 1200);

  return html.trim().slice(0, 1200);
}

function findSiblingAssets(componentPath) {
  const parsed = path.parse(componentPath);
  const candidates = [
    path.join(parsed.dir, `${parsed.name}.css`),
    path.join(parsed.dir, `${parsed.name}.js`),
    path.join(ROOT, `${parsed.name}.css`),
    path.join(ROOT, `${parsed.name}.js`)
  ];

  const existing = unique(candidates.filter((candidate) => fs.existsSync(candidate)));
  return {
    css: existing.filter((f) => f.endsWith('.css')).map((f) => path.relative(ROOT, f).replace(/\\/g, '/')),
    js: existing.filter((f) => f.endsWith('.js')).map((f) => path.relative(ROOT, f).replace(/\\/g, '/'))
  };
}

function scoreComponent(componentDoc) {
  let score = 0;
  if (componentDoc.exists) score += 30;
  if (componentDoc.version) score += 10;
  if (componentDoc.description) score += 10;
  if ((componentDoc.tags || []).length > 0) score += 10;
  if ((componentDoc.headings || []).length >= 2) score += 10;
  if ((componentDoc.assets.css || []).length > 0) score += 10;
  if ((componentDoc.assets.js || []).length > 0) score += 10;
  if (componentDoc.snippet && componentDoc.snippet.length > 50) score += 10;
  return Math.min(100, score);
}

function buildComponentDoc(component) {
  const id = component.id || path.basename(component.path || '', '.html');
  const relPath = String(component.path || '').replace(/\\/g, '/');
  const absPath = path.join(ROOT, relPath);
  const exists = !!safeRead(absPath);
  const html = exists ? safeRead(absPath) : '';

  const metaPath = path.join(META_DIR, `${id}.json`);
  const meta = readJson(metaPath, {});

  const linkedCss = exists ? parseLinks(html, 'link', 'href').filter((v) => v.endsWith('.css')) : [];
  const linkedJs = exists ? parseLinks(html, 'script', 'src').filter((v) => v.endsWith('.js')) : [];
  const siblingAssets = findSiblingAssets(absPath);

  const componentDoc = {
    id,
    title: component.title || meta.title || extractTitle(html) || id,
    path: relPath,
    exists,
    version: meta.version || '',
    tags: unique([].concat(component.tags || [], meta.tags || [])),
    aliases: unique(component.aliases || []),
    description: component.description || meta.description || extractMetaDescription(html) || '',
    headings: exists ? extractHeadings(html).slice(0, 8) : [],
    assets: {
      css: unique([].concat(linkedCss, siblingAssets.css)).sort(),
      js: unique([].concat(linkedJs, siblingAssets.js)).sort()
    },
    snippet: exists ? extractUsageSnippet(html) : '',
    changelogEntries: Array.isArray(meta.changelog) ? meta.changelog.length : 0,
    updatedAt: new Date().toISOString()
  };

  componentDoc.documentationScore = scoreComponent(componentDoc);
  return componentDoc;
}

function buildCatalog(docs) {
  const totals = docs.reduce(
    (acc, item) => {
      acc.total += 1;
      if (item.exists) acc.existing += 1;
      if (!item.exists) acc.missing += 1;
      acc.cssAssets += item.assets.css.length;
      acc.jsAssets += item.assets.js.length;
      acc.score += item.documentationScore;
      return acc;
    },
    { total: 0, existing: 0, missing: 0, cssAssets: 0, jsAssets: 0, score: 0 }
  );

  const averageScore = totals.total > 0 ? Number((totals.score / totals.total).toFixed(2)) : 0;

  return {
    generatedAt: new Date().toISOString(),
    totals: {
      ...totals,
      averageDocumentationScore: averageScore
    },
    components: docs
  };
}

function renderCatalogMarkdown(catalog) {
  let md = '# Component Documentation Catalog\n\n';
  md += `Generated: ${catalog.generatedAt}\n\n`;
  md += '## Summary\n\n';
  md += `- Components indexed: ${catalog.totals.total}\n`;
  md += `- Existing component pages: ${catalog.totals.existing}\n`;
  md += `- Missing component pages: ${catalog.totals.missing}\n`;
  md += `- Linked CSS assets: ${catalog.totals.cssAssets}\n`;
  md += `- Linked JS assets: ${catalog.totals.jsAssets}\n`;
  md += `- Average documentation score: ${catalog.totals.averageDocumentationScore}/100\n\n`;

  md += '## Components\n\n';
  md += '| ID | Title | Version | Score | Page | CSS | JS |\n';
  md += '|---|---|---:|---:|---:|---:|---:|\n';

  for (const component of catalog.components) {
    const page = component.exists ? 'yes' : 'no';
    md += `| ${component.id} | ${component.title} | ${component.version || '-'} | ${component.documentationScore} | ${page} | ${component.assets.css.length} | ${component.assets.js.length} |\n`;
  }

  md += '\n## Per-Component Details\n\n';
  for (const component of catalog.components) {
    md += `### ${component.title} (${component.id})\n\n`;
    md += `- Path: ${component.path || '-'}\n`;
    md += `- Exists: ${component.exists ? 'yes' : 'no'}\n`;
    md += `- Version: ${component.version || '-'}\n`;
    md += `- Documentation score: ${component.documentationScore}/100\n`;
    md += `- Tags: ${(component.tags || []).join(', ') || '-'}\n`;
    md += `- Aliases: ${(component.aliases || []).join(', ') || '-'}\n`;
    md += `- Description: ${component.description || '-'}\n`;
    md += `- CSS assets: ${(component.assets.css || []).join(', ') || '-'}\n`;
    md += `- JS assets: ${(component.assets.js || []).join(', ') || '-'}\n`;

    if (component.headings.length > 0) {
      md += '- Headings:\n';
      component.headings.forEach((h) => {
        md += `  - H${h.level}: ${h.text}\n`;
      });
    }

    if (component.snippet) {
      md += '\nUsage snippet:\n\n';
      md += '```html\n';
      md += `${component.snippet}\n`;
      md += '```\n';
    }

    md += '\n';
  }

  return md;
}

function renderComponentMarkdown(component) {
  let md = `# ${component.title}\n\n`;
  md += `Component ID: ${component.id}\n\n`;
  md += `- Path: ${component.path || '-'}\n`;
  md += `- Version: ${component.version || '-'}\n`;
  md += `- Documentation score: ${component.documentationScore}/100\n`;
  md += `- Tags: ${(component.tags || []).join(', ') || '-'}\n`;
  md += `- Description: ${component.description || '-'}\n\n`;

  md += '## Assets\n\n';
  md += `- CSS: ${(component.assets.css || []).join(', ') || '-'}\n`;
  md += `- JS: ${(component.assets.js || []).join(', ') || '-'}\n\n`;

  if (component.headings.length > 0) {
    md += '## Headings\n\n';
    component.headings.forEach((heading) => {
      md += `- H${heading.level}: ${heading.text}\n`;
    });
    md += '\n';
  }

  if (component.snippet) {
    md += '## Usage Snippet\n\n';
    md += '```html\n';
    md += `${component.snippet}\n`;
    md += '```\n';
  }

  return md;
}

function generateDocumentation() {
  const components = readJson(COMPONENTS_FILE, []);
  if (!Array.isArray(components) || components.length === 0) {
    console.error(`No components found in ${path.relative(ROOT, COMPONENTS_FILE)}`);
    process.exit(1);
  }

  const docs = components.map(buildComponentDoc);
  const catalog = buildCatalog(docs);

  writeJson(OUTPUT_JSON, catalog);
  writeText(OUTPUT_MD, renderCatalogMarkdown(catalog));

  fs.mkdirSync(OUTPUT_COMPONENT_DOCS_DIR, { recursive: true });
  docs.forEach((component) => {
    const componentDocPath = path.join(OUTPUT_COMPONENT_DOCS_DIR, `${component.id}.md`);
    writeText(componentDocPath, renderComponentMarkdown(component));
  });

  console.log('Documentation generation complete.');
  console.log(`- JSON catalog: ${path.relative(ROOT, OUTPUT_JSON)}`);
  console.log(`- Markdown catalog: ${path.relative(ROOT, OUTPUT_MD)}`);
  console.log(`- Component docs directory: ${path.relative(ROOT, OUTPUT_COMPONENT_DOCS_DIR)}`);
  console.log(`- Components processed: ${catalog.totals.total}`);
  console.log(`- Missing pages: ${catalog.totals.missing}`);
  console.log(`- Average score: ${catalog.totals.averageDocumentationScore}/100`);
}

if (require.main === module) {
  generateDocumentation();
}

module.exports = {
  generateDocumentation
};
