#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { buildRegistryData } = require('./generate-component-registry');

const DEFAULT_COMPONENTS_FILE = path.join('data', 'components.json');
const DEFAULT_META_DIR = path.join('data', 'meta');
const DEFAULT_SNIPPETS_DIR = path.join('data', 'snippets');
const DEFAULT_SNIPPETS_INDEX = path.join('data', 'snippets', 'index.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function exists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (_) {
    return false;
  }
}

function normalizeAlias(value) {
  return String(value || '').trim().toLowerCase();
}

function getMetaEntries(metaDir) {
  if (!exists(metaDir)) return [];

  return fs
    .readdirSync(metaDir)
    .filter((name) => name.endsWith('.json') && name !== 'documentation-catalog.json')
    .map((name) => {
      const filePath = path.join(metaDir, name);
      try {
        const json = readJson(filePath);
        return {
          file: filePath,
          fileName: name,
          id: json.id || path.basename(name, '.json'),
          title: json.title,
          path: json.path
        };
      } catch (error) {
        return {
          file: filePath,
          fileName: name,
          id: path.basename(name, '.json'),
          invalid: true,
          error
        };
      }
    });
}

function getSnippetIds(snippetsDir, snippetsIndexPath) {
  const ids = new Set();

  if (exists(snippetsIndexPath)) {
    const indexJson = readJson(snippetsIndexPath);
    if (Array.isArray(indexJson)) {
      indexJson.forEach((entry) => {
        if (entry && entry.id) ids.add(String(entry.id));
      });
    }
  }

  if (exists(snippetsDir)) {
    const children = fs.readdirSync(snippetsDir, { withFileTypes: true });
    children
      .filter((item) => item.isDirectory())
      .forEach((dirent) => {
        const id = dirent.name;
        const htmlCandidate = path.join(snippetsDir, id, `${id}.html`);
        if (exists(htmlCandidate)) ids.add(id);
      });
  }

  return ids;
}

function validateComponentRegistry(options = {}) {
  const rootDir = options.rootDir || process.cwd();
  const componentsFile = path.join(rootDir, options.componentsFile || DEFAULT_COMPONENTS_FILE);
  const metaDir = path.join(rootDir, options.metaDir || DEFAULT_META_DIR);
  const snippetsDir = path.join(rootDir, options.snippetsDir || DEFAULT_SNIPPETS_DIR);
  const snippetsIndexPath = path.join(rootDir, options.snippetsIndexFile || DEFAULT_SNIPPETS_INDEX);
  const registryFile = path.join(rootDir, 'data', 'registry.json');

  const errors = [];
  const warnings = [];

  if (!exists(componentsFile)) {
    errors.push(`Registry file not found: ${path.relative(rootDir, componentsFile)}`);
    return {
      ok: false,
      errors,
      warnings,
      stats: {
        registryEntries: 0,
        metadataEntries: 0,
        snippetEntries: 0,
        checkedPages: 0
      }
    };
  }

  const registry = readJson(componentsFile);
  if (!Array.isArray(registry)) {
    errors.push('Registry file must be an array: data/components.json');
    return {
      ok: false,
      errors,
      warnings,
      stats: {
        registryEntries: 0,
        metadataEntries: 0,
        snippetEntries: 0,
        checkedPages: 0
      }
    };
  }

  const expectedRegistry = buildRegistryData({ rootDir });
  const actualRegistryText = fs.existsSync(registryFile) ? fs.readFileSync(registryFile, 'utf8') : '';
  const expectedRegistryText = `${JSON.stringify(expectedRegistry, null, 2)}\n`;

  if (!actualRegistryText) {
    errors.push(`Missing registry file: ${path.relative(rootDir, registryFile)}`);
  } else if (actualRegistryText !== expectedRegistryText) {
    errors.push('data/registry.json is out of date. Regenerate it with npm run components:registry:generate.');
  }

  const metaEntries = getMetaEntries(metaDir);
  const snippetIds = getSnippetIds(snippetsDir, snippetsIndexPath);

  const registryById = new Map();
  const aliasMap = new Map();
  const pathToId = new Map();

  registry.forEach((entry, index) => {
    const marker = `registry entry #${index + 1}`;
    const id = String(entry && entry.id || '').trim();
    const pagePath = String(entry && entry.path || '').trim();

    // JSON structural check
    if (!entry.title || typeof entry.title !== 'string') {
      errors.push(`[${id}] Component is missing a valid 'title' string.`);
    }
    if (!entry.category || typeof entry.category !== 'string') {
      errors.push(`[${id}] Component is missing a valid 'category' string.`);
    }

    if (!id) {
      errors.push(`${marker}: missing required field 'id'.`);
      return;
    }

    if (!pagePath) {
      errors.push(`[${id}] missing required field 'path'.`);
      return;
    }

    if (registryById.has(id)) {
      errors.push(`Duplicate registry id '${id}' found.`);
      return;
    }

    registryById.set(id, entry);

    const pageAbs = path.join(rootDir, pagePath);
    if (!exists(pageAbs)) {
      errors.push(`[${id}] invalid path '${pagePath}' (file does not exist).`);
    }

    const existingPathOwner = pathToId.get(pagePath);
    if (existingPathOwner && existingPathOwner !== id) {
      errors.push(`Duplicate registry path '${pagePath}' used by '${existingPathOwner}' and '${id}'.`);
    } else {
      pathToId.set(pagePath, id);
    }

    const aliases = Array.isArray(entry.aliases) ? entry.aliases : [];
    aliases.forEach((rawAlias) => {
      const alias = normalizeAlias(rawAlias);
      if (!alias) return;
      const owners = aliasMap.get(alias) || new Set();
      owners.add(id);
      aliasMap.set(alias, owners);
    });
  });

  aliasMap.forEach((owners, alias) => {
    if (owners.size > 1) {
      errors.push(`Duplicate alias '${alias}' used by multiple components: ${Array.from(owners).sort().join(', ')}`);
    }
  });

  const metaById = new Map();
  metaEntries.forEach((meta) => {
    if (meta.invalid) {
      errors.push(`Invalid metadata JSON: ${path.relative(rootDir, meta.file)}`);
      return;
    }

    if (metaById.has(meta.id)) {
      errors.push(`Duplicate metadata id '${meta.id}' found in data/meta.`);
      return;
    }

    metaById.set(meta.id, meta);
  });

  // Every registry entry must have matching metadata.
  registryById.forEach((entry, id) => {
    const meta = metaById.get(id);
    if (!meta) {
      errors.push(`[${id}] stale metadata: missing data/meta/${id}.json`);
      return;
    }

    if (meta.path && entry.path && meta.path !== entry.path) {
      errors.push(`[${id}] stale metadata path '${meta.path}' does not match registry path '${entry.path}'.`);
    }

    if (meta.title && entry.title && meta.title !== entry.title) {
      warnings.push(`[${id}] metadata title '${meta.title}' differs from registry title '${entry.title}'.`);
    }
  });

  // Metadata files that are no longer represented in registry are stale/orphaned.
  metaById.forEach((meta, id) => {
    if (!registryById.has(id)) {
      errors.push(`[${id}] stale metadata: present in data/meta but missing in data/components.json.`);
    }
  });

  // Snippet ids represent component surfaces that should exist in registry.
  snippetIds.forEach((id) => {
    if (!registryById.has(id)) {
      errors.push(`[${id}] missing registry entry: discovered from snippets.`);
      return;
    }

    const registryPath = registryById.get(id).path;
    const inferredPage = `${id}.html`;
    const inferredAbs = path.join(rootDir, inferredPage);
    if (exists(inferredAbs) && registryPath !== inferredPage) {
      warnings.push(`[${id}] registry path '${registryPath}' differs from inferred page '${inferredPage}'.`);
    }
  });

  // Build component pages set that this validator guarantees to cover.
  const checkedPages = new Set();
  registryById.forEach((entry) => {
    if (entry && entry.path) checkedPages.add(entry.path);
  });
  metaById.forEach((meta) => {
    if (meta && meta.path) checkedPages.add(meta.path);
  });
  snippetIds.forEach((id) => {
    const page = `${id}.html`;
    if (exists(path.join(rootDir, page))) checkedPages.add(page);
  });

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      registryEntries: registry.length,
      metadataEntries: metaById.size,
      snippetEntries: snippetIds.size,
      checkedPages: checkedPages.size
    }
  };
}

function printReport(result) {
  console.log('Component registry validation summary');
  console.log(`- Registry entries: ${result.stats.registryEntries}`);
  console.log(`- Metadata entries: ${result.stats.metadataEntries}`);
  console.log(`- Snippet entries: ${result.stats.snippetEntries}`);
  console.log(`- Component pages checked: ${result.stats.checkedPages}`);

  if (result.warnings.length > 0) {
    console.log(`- Warnings: ${result.warnings.length}`);
    result.warnings.forEach((warning) => console.log(`  - ${warning}`));
  } else {
    console.log('- Warnings: 0');
  }

  if (result.errors.length > 0) {
    console.log(`- Errors: ${result.errors.length}`);
    result.errors.forEach((error) => console.log(`  - ${error}`));
  } else {
    console.log('- Errors: 0');
  }
}

if (require.main === module) {
  const result = validateComponentRegistry();
  printReport(result);

  if (!result.ok) {
    process.exit(1);
  }

  console.log('Component registry validation passed.');
}

module.exports = {
  validateComponentRegistry,
  printReport
};
