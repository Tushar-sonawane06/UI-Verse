const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUTPUT_FILE = path.join(ROOT, 'components', 'components-index-data.js');

const EXCLUDED_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  'dist',
  'build',
  'coverage',
  'stories',
  'tests',
  'Docs',
  'docs',
  'Public',
  'public',
  'packages'
]);

const EXCLUDED_FILES = new Set([
  'index-bundled.html',
  'docs.html',
  'documentation.html',
  'license.html',
  'terms.html',
  'privacy.html',
  'privacypolicy.html',
  'howtocontribute.html',
  'guidelines.html',
  'contributorss.html',
  'welcome.html'
]);

const CATEGORY_RULES = [
  {
    id: 'buttons',
    name: 'Buttons',
    keywords: ['button', 'buttons', 'toggle', 'switch', 'cta'],
    basePopularity: 96,
    icon: 'fa-hand-pointer'
  },
  {
    id: 'cards',
    name: 'Cards',
    keywords: ['card', 'cards', 'flipcard', 'profilecard'],
    basePopularity: 94,
    icon: 'fa-id-card'
  },
  {
    id: 'forms',
    name: 'Forms',
    keywords: ['form', 'forms', 'input', 'inputs', 'checkbox', 'radio', 'otp', 'select'],
    basePopularity: 90,
    icon: 'fa-rectangle-list'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    keywords: ['nav', 'navbar', 'menu', 'sidebar', 'tabs', 'breadcrumb', 'dropdown', 'pagination'],
    basePopularity: 91,
    icon: 'fa-compass'
  },
  {
    id: 'feedback',
    name: 'Feedback',
    keywords: ['alert', 'toast', 'notification', 'snackbar', 'tooltip', 'popover', 'popup', 'modal'],
    basePopularity: 88,
    icon: 'fa-bell'
  },
  {
    id: 'data-display',
    name: 'Data Display',
    keywords: ['chart', 'table', 'calendar', 'timeline', 'map', 'badge', 'stat'],
    basePopularity: 86,
    icon: 'fa-chart-column'
  },
  {
    id: 'layout',
    name: 'Layout',
    keywords: ['hero', 'footer', 'section', 'layout', 'grid', 'gallery', 'carousel'],
    basePopularity: 84,
    icon: 'fa-layer-group'
  },
  {
    id: 'dashboards',
    name: 'Dashboards',
    keywords: ['dashboard', 'admin', 'analytics', 'monitor', 'panel'],
    basePopularity: 89,
    icon: 'fa-gauge-high'
  },
  {
    id: 'commerce',
    name: 'Commerce',
    keywords: ['pricing', 'subscription', 'ecommerce', 'shop', 'cart', 'product', 'checkout'],
    basePopularity: 83,
    icon: 'fa-cart-shopping'
  },
  {
    id: 'authentication',
    name: 'Authentication',
    keywords: ['auth', 'login', 'signup', 'password', 'recovery'],
    basePopularity: 82,
    icon: 'fa-user-shield'
  }
];

const FALLBACK_CATEGORY = {
  id: 'other',
  name: 'Other Components',
  basePopularity: 75,
  icon: 'fa-cubes'
};

function toTitleCase(value) {
  return String(value || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function normalizePath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function isHtmlFile(filePath) {
  return filePath.toLowerCase().endsWith('.html');
}

function walkHtmlFiles(dirPath, output = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      walkHtmlFiles(absolutePath, output);
      continue;
    }

    if (!entry.isFile() || !isHtmlFile(entry.name)) continue;
    if (EXCLUDED_FILES.has(entry.name.toLowerCase())) continue;

    output.push(absolutePath);
  }

  return output;
}

function detectCategoryKey(text) {
  const lowerText = text.toLowerCase();

  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((keyword) => lowerText.includes(keyword))) {
      return rule.id;
    }
  }

  return FALLBACK_CATEGORY.id;
}

function getCategoryConfig(categoryId) {
  return CATEGORY_RULES.find((rule) => rule.id === categoryId) || FALLBACK_CATEGORY;
}

function inferPopularity(fileRelPath, categoryConfig) {
  const lowerPath = fileRelPath.toLowerCase();
  let score = categoryConfig.basePopularity || 75;

  if (lowerPath.includes('premium')) score += 3;
  if (lowerPath.includes('dashboard')) score += 2;
  if (lowerPath.includes('component')) score += 1;
  if (lowerPath.includes('/index.html')) score -= 2;

  return Math.max(60, Math.min(99, score));
}

function buildComponentRecord(filePath) {
  const relativePath = normalizePath(filePath);
  const parsed = path.parse(relativePath);
  const folderHint = parsed.dir.split('/').slice(0, 2).join(' ');
  const keywordSource = `${parsed.name} ${parsed.dir} ${folderHint}`;
  const categoryId = detectCategoryKey(keywordSource);
  const category = getCategoryConfig(categoryId);
  const stats = fs.statSync(filePath);
  const updatedAt = stats.mtime.toISOString();

  return {
    id: relativePath.replace(/\.html$/i, '').replace(/[^a-z0-9/\-]+/gi, '').toLowerCase(),
    title: toTitleCase(parsed.name),
    path: relativePath,
    categoryId,
    popularity: inferPopularity(relativePath, category),
    updatedAt
  };
}

function aggregateByCategory(components) {
  const bucket = new Map();

  components.forEach((component) => {
    const category = getCategoryConfig(component.categoryId);

    if (!bucket.has(component.categoryId)) {
      bucket.set(component.categoryId, {
        id: category.id,
        name: category.name,
        icon: category.icon || FALLBACK_CATEGORY.icon,
        items: []
      });
    }

    bucket.get(component.categoryId).items.push(component);
  });

  return Array.from(bucket.values()).map((group) => {
    const sortedByPopularity = [...group.items].sort((a, b) => b.popularity - a.popularity);
    const sortedByRecency = [...group.items].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));

    const popularityScore = Math.round(
      sortedByPopularity.reduce((sum, item) => sum + item.popularity, 0) / Math.max(sortedByPopularity.length, 1)
    );

    const latestUpdatedAt = sortedByRecency[0] ? sortedByRecency[0].updatedAt : new Date(0).toISOString();

    return {
      id: group.id,
      name: group.name,
      icon: group.icon,
      count: group.items.length,
      popularityScore,
      latestUpdatedAt,
      previewItems: sortedByPopularity.slice(0, 4).map((item) => ({
        title: item.title,
        path: item.path,
        popularity: item.popularity,
        updatedAt: item.updatedAt
      })),
      items: group.items.sort((a, b) => a.title.localeCompare(b.title))
    };
  });
}

function writeOutput(data) {
  const payload = `window.UIVerseComponentsIndexData = ${JSON.stringify(data, null, 2)};\n`;
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, payload, 'utf8');
}

function main() {
  const htmlFiles = walkHtmlFiles(ROOT).filter((filePath) => {
    const rel = normalizePath(filePath).toLowerCase();

    if (rel.startsWith('components/')) return false;
    if (rel.startsWith('admin/')) return false;
    if (rel.startsWith('data/')) return false;

    return true;
  });

  const components = htmlFiles.map(buildComponentRecord);
  const categories = aggregateByCategory(components)
    .filter((category) => category.count > 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  const output = {
    generatedAt: new Date().toISOString(),
    totalComponents: components.length,
    totalCategories: categories.length,
    categories
  };

  writeOutput(output);

  console.log(`Generated ${normalizePath(OUTPUT_FILE)} with ${components.length} components in ${categories.length} categories.`);
}

main();
