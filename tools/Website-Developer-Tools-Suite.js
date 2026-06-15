const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full, cb);
    } else {
      cb(full);
    }
  });
}

const repoRoot = path.resolve(__dirname, '..');
const broken = [];

walk(repoRoot, file => {
  if (!file.match(/\.html$/i)) return;

  const content = fs.readFileSync(file, 'utf8');
  const links = [...content.matchAll(/href=["']([^"']+)["']/g)];

  links.forEach(match => {
    const link = match[1];

    if (
      !link.startsWith('http') &&
      !link.startsWith('#') &&
      !fs.existsSync(path.resolve(path.dirname(file), link))
    ) {
      broken.push({
        file,
        link
      });
    }
  });
});

console.log(broken);