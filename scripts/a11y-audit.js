const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const IGNORE_DIRS = new Set(['.git', 'node_modules', 'Public']);

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function hasAny(regex, text) {
  return regex.test(text);
}

function count(regex, text) {
  const matches = text.match(new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : `${regex.flags}g`));
  return matches ? matches.length : 0;
}

function run() {
  const htmlFiles = walk(ROOT);
  let errors = 0;
  let warnings = 0;

  for (const file of htmlFiles) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    if (!hasAny(/<html[^>]*\blang\s*=\s*['"][^'"]+['"]/i, content)) {
      errors += 1;
      console.log(`ERROR ${rel}: missing html lang attribute`);
    }

    if (!hasAny(/<main\b|role\s*=\s*['"]main['"]/i, content)) {
      warnings += 1;
      console.log(`WARN  ${rel}: no static main landmark (runtime hardening may add one)`);
    }

    const imgCount = count(/<img\b/gi, content);
    const imgAltCount = count(/<img\b[^>]*\balt\s*=\s*['"][^'"]*['"][^>]*>/gi, content);
    if (imgAltCount < imgCount) {
      warnings += 1;
      console.log(`WARN  ${rel}: ${imgCount - imgAltCount} image(s) without static alt (runtime hardening may add empty alt)`);
    }
  }

  const bootstrapped = htmlFiles
    .map((file) => fs.readFileSync(file, 'utf8'))
    .some((content) => content.includes('js/features/accessibility.js') || content.includes('script.js'));

  if (!bootstrapped) {
    errors += 1;
    console.log('ERROR global: accessibility runtime script not found in html pages');
  }

  console.log(`\nAccessibility audit summary: ${htmlFiles.length} HTML file(s), ${errors} error(s), ${warnings} warning(s).`);

  if (errors > 0) {
    process.exit(1);
  }
}

run();
