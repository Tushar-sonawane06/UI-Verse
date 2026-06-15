const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      walk(full, cb);
    } else {
      cb(full);
    }
  });
}

const repoRoot = path.resolve(__dirname, '..');
const hits = [];

walk(repoRoot, (file) => {
  // only check text files
  if (!file.match(/\.(js|html|css|md|ts)$/i)) return;
  try {
    const txt = fs.readFileSync(file, 'utf8');
    if (txt.includes('Calender') || txt.includes('calender/')) {
      hits.push(file);
    }
  } catch (e) {
    // ignore binary or unreadable files
  }
});

if (hits.length === 0) {
  console.debug('No Calender/calerder mismatches found.');
} else {
  console.debug('Found files referencing Calender/calerder:');
  hits.forEach(f => console.debug(' -', path.relative(repoRoot, f)));
}
