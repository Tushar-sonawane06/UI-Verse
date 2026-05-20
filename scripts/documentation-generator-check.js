#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { generateDocumentation } = require('./documentation-generator');

const requiredOutputs = [
  path.join(process.cwd(), 'data', 'meta', 'documentation-catalog.json'),
  path.join(process.cwd(), 'docs', 'COMPONENT_CATALOG.md'),
  path.join(process.cwd(), 'docs', 'components-generated')
];

function exists(targetPath) {
  try {
    return fs.existsSync(targetPath);
  } catch (_) {
    return false;
  }
}

generateDocumentation();

const missing = requiredOutputs.filter((outputPath) => !exists(outputPath));
if (missing.length > 0) {
  console.error('Documentation generation check failed. Missing output(s):');
  missing.forEach((m) => console.error(`- ${path.relative(process.cwd(), m)}`));
  process.exit(1);
}

const generatedFiles = fs
  .readdirSync(path.join(process.cwd(), 'docs', 'components-generated'))
  .filter((name) => name.endsWith('.md'));

if (generatedFiles.length === 0) {
  console.error('Documentation generation check failed: no component docs were generated.');
  process.exit(1);
}

console.log('Documentation generation check passed.');
console.log(`- Component docs: ${generatedFiles.length}`);
