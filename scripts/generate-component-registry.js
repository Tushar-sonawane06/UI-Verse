#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function readJson(filePath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (_) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function normalizeTags(tags) {
  return Array.from(new Set((Array.isArray(tags) ? tags : []).map((tag) => String(tag || '').trim().toLowerCase()).filter(Boolean)));
}

function normalizeAliases(aliases) {
  return Array.from(new Set((Array.isArray(aliases) ? aliases : []).map((alias) => String(alias || '').trim()).filter(Boolean)));
}

function findAssetFile(rootDir, baseName, extension) {
  const expectedName = `${baseName}${extension}`.toLowerCase();
  const expectedPath = path.join(rootDir, `${baseName}${extension}`);

  if (fs.existsSync(expectedPath)) {
    return path.basename(expectedPath);
  }

  if (!fs.existsSync(rootDir)) {
    return '';
  }

  const match = fs.readdirSync(rootDir).find((entry) => entry.toLowerCase() === expectedName);
  return match || '';
}

function buildRegistryEntry(component, rootDir) {
  const id = String(component && (component.id || component.name) || '').trim();
  const pathRef = String(component && component.path || `${id}.html`).trim();
  const baseName = path.basename(pathRef, path.extname(pathRef)) || id;
  const registry = {
    id,
    name: id,
    title: String(component && component.title || id).trim(),
    description: String(component && component.description || '').trim(),
    category: String(component && component.category || '').trim(),
    path: pathRef,
    files: {
      html: pathRef
    },
    tags: normalizeTags(component && component.tags),
    aliases: normalizeAliases(component && component.aliases),
    dependencies: Array.isArray(component && component.dependencies) ? component.dependencies.slice() : []
  };

  const cssFile = findAssetFile(rootDir, baseName, '.css');
  const jsFile = findAssetFile(rootDir, baseName, '.js');

  if (cssFile) {
    registry.files.css = cssFile;
  }

  if (jsFile) {
    registry.files.js = jsFile;
  }

  return registry;
}

function buildRegistryData(options = {}) {
  const rootDir = options.rootDir || process.cwd();
  const componentsFile = path.join(rootDir, options.componentsFile || path.join('data', 'components.json'));
  const packageFile = path.join(rootDir, options.packageFile || 'package.json');
  const components = readJson(componentsFile, []);

  if (!Array.isArray(components)) {
    throw new Error('data/components.json must be an array');
  }

  const registry = components.map((component) => buildRegistryEntry(component, rootDir));
  const packageJson = readJson(packageFile, {});

  return {
    version: String(packageJson.version || '1.0.0'),
    registry
  };
}

function generateRegistry(options = {}) {
  const rootDir = options.rootDir || process.cwd();
  const outputFile = path.join(rootDir, options.outputFile || path.join('data', 'registry.json'));
  const data = buildRegistryData({ rootDir, componentsFile: options.componentsFile, packageFile: options.packageFile });

  if (options.write !== false) {
    writeJson(outputFile, data);
  }

  return {
    outputFile,
    ...data
  };
}

function runCli(argv = process.argv.slice(2)) {
  const checkOnly = argv.includes('--check');
  const rootDir = process.cwd();
  const outputFile = path.join(rootDir, 'data', 'registry.json');

  try {
    const generated = buildRegistryData({ rootDir });
    const actual = fs.existsSync(outputFile) ? fs.readFileSync(outputFile, 'utf8') : '';
    const expected = `${JSON.stringify(generated, null, 2)}\n`;

    if (checkOnly) {
      if (!actual) {
        console.error(`Missing registry file: ${path.relative(rootDir, outputFile)}`);
        process.exitCode = 1;
        return 1;
      }

      if (actual !== expected) {
        console.error('data/registry.json is out of date. Regenerate it with npm run components:registry:generate.');
        process.exitCode = 1;
        return 1;
      }

      console.log('Component registry generation is in sync.');
      return 0;
    }

    writeJson(outputFile, generated);
    console.log(`Wrote ${path.relative(rootDir, outputFile)}`);
    console.log(`\n✅ Component registry generation complete (${generated.registry.length} components).`);
    return 0;
  } catch (error) {
    console.error(error.message || error);
    process.exitCode = 1;
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = runCli();
}

module.exports = {
  readJson,
  writeJson,
  normalizeTags,
  normalizeAliases,
  findAssetFile,
  buildRegistryEntry,
  buildRegistryData,
  generateRegistry,
  runCli
};