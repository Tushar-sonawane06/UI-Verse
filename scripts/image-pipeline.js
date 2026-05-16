const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'generated-images');
const MANIFEST_PATH = path.join(ROOT, 'data', 'image-manifest.json');
const HTML_SKIP_DIRS = new Set([
  '.git',
  'node_modules',
  'playwright-report',
  'test-results',
  'coverage',
  'dist',
  'generated-images'
]);
const REMOTE_WIDTHS = [480, 768, 1024, 1440, 1920];
const LOCAL_WIDTHS = [320, 480, 768, 1024, 1440, 1920];
const AVATAR_WIDTHS = [40, 80, 150, 300];

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (HTML_SKIP_DIRS.has(entry.name)) {
        continue;
      }
      walk(path.join(dir, entry.name), results);
      continue;
    }

    results.push(path.join(dir, entry.name));
  }

  return results;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function setAttr(tag, name, value) {
  const attrPattern = new RegExp(`\\s${name}\\s*=\\s*("[^"]*"|'[^']*'|[^\\s>]+)`, 'i');
  const replacement = ` ${name}="${escapeAttr(value)}"`;

  if (attrPattern.test(tag)) {
    return tag.replace(attrPattern, replacement);
  }

  return tag.replace(/\/?>(\s*)$/, `${replacement}>`);
}

function getAttr(tag, name) {
  const attrPattern = new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
  const match = tag.match(attrPattern);
  if (!match) {
    return '';
  }

  return match[2] || match[3] || match[4] || '';
}

function hasAttr(tag, name) {
  return new RegExp(`\\s${name}\\s*=`, 'i').test(tag);
}

function isRemote(src) {
  return /^https?:\/\//i.test(src);
}

function isLocalImage(src) {
  return src && !isRemote(src) && !src.startsWith('data:') && !src.startsWith('blob:') && !src.startsWith('generated-images/');
}

function normalizeHtmlPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function buildSizes(tag, src) {
  const scope = `${tag} ${src}`.toLowerCase();

  if (/avatar|badge|icon|logo|profile/.test(scope)) {
    return '(max-width: 768px) 96px, 160px';
  }

  if (/hero|banner|featured|fullscreen|slider|carousel|gallery|product|article|blog|cover/.test(scope)) {
    return '(max-width: 768px) 100vw, 100vw';
  }

  if (/card|grid|thumb|thumbnail|tile|preview/.test(scope)) {
    return '(max-width: 768px) 100vw, 50vw';
  }

  return '(max-width: 768px) 100vw, 50vw';
}

function buildLoading(tag, src) {
  const scope = `${tag} ${src}`.toLowerCase();
  if (/hero|banner|featured|fullscreen|slider|carousel/.test(scope)) {
    return 'eager';
  }

  return 'lazy';
}

function buildRemoteSrcset(src) {
  const url = new URL(src);

  if (url.hostname.includes('unsplash.com')) {
    return REMOTE_WIDTHS.map((width) => {
      const next = new URL(url.toString());
      next.searchParams.set('w', String(width));
      next.searchParams.set('auto', 'format');
      next.searchParams.set('fit', 'crop');
      next.searchParams.set('q', '80');
      return `${next.toString()} ${width}w`;
    }).join(', ');
  }

  if (url.hostname === 'picsum.photos') {
    const parts = url.pathname.split('/').filter(Boolean);
    const originalWidth = Number.parseInt(parts[0], 10);
    const originalHeight = Number.parseInt(parts[1], 10);

    if (Number.isFinite(originalWidth) && Number.isFinite(originalHeight)) {
      return REMOTE_WIDTHS.map((width) => {
        const height = Math.max(1, Math.round((width * originalHeight) / originalWidth));
        const next = new URL(url.toString());
        next.pathname = `/${width}/${height}`;
        return `${next.toString()} ${width}w`;
      }).join(', ');
    }
  }

  if (url.hostname === 'i.pravatar.cc') {
    return AVATAR_WIDTHS.map((width) => {
      const next = new URL(url.toString());
      next.pathname = `/${width}`;
      return `${next.toString()} ${width}w`;
    }).join(', ');
  }

  return '';
}

async function createLocalVariants(imagePath, sourceRootPath) {
  const image = sharp(imagePath, { failOnError: false });
  const metadata = await image.metadata();

  if (!metadata.width || !metadata.height || metadata.format === 'svg') {
    return null;
  }

  const relativeSource = path.relative(sourceRootPath, imagePath);
  const parsed = path.parse(relativeSource);
  const outDir = path.join(OUTPUT_DIR, parsed.dir, parsed.name);
  ensureDir(outDir);

  const candidateWidths = LOCAL_WIDTHS.filter((width) => width < metadata.width);
  if (!candidateWidths.length || candidateWidths[candidateWidths.length - 1] !== metadata.width) {
    candidateWidths.push(metadata.width);
  }

  const fallbackWidth = candidateWidths[candidateWidths.length - 1];
  const fallbackExt = parsed.ext.toLowerCase() === '.jpeg' ? '.jpg' : parsed.ext.toLowerCase();
  const fallbackFormat = fallbackExt === '.jpg' ? 'jpeg' : fallbackExt.replace('.', '');
  const fallbackFile = path.join(outDir, `${parsed.name}-optimized-${fallbackWidth}${fallbackExt}`);

  if (!fs.existsSync(fallbackFile)) {
    await image
      .clone()
      .resize({ width: fallbackWidth, withoutEnlargement: true })
      .toFormat(fallbackFormat, { quality: 82, effort: 4 })
      .toFile(fallbackFile);
  }

  const avifSources = [];
  const webpSources = [];

  for (const width of candidateWidths) {
    const avifFile = path.join(outDir, `${parsed.name}-${width}.avif`);
    const webpFile = path.join(outDir, `${parsed.name}-${width}.webp`);

    if (!fs.existsSync(avifFile)) {
      await image
        .clone()
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 55 })
        .toFile(avifFile);
    }

    if (!fs.existsSync(webpFile)) {
      await image
        .clone()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpFile);
    }

    avifSources.push({ file: avifFile, width });
    webpSources.push({ file: webpFile, width });
  }

  return {
    metadata,
    fallbackFile,
    avifSources,
    webpSources
  };
}

function toWebPath(htmlFile, assetFile) {
  return normalizeHtmlPath(path.relative(path.dirname(htmlFile), assetFile));
}

function buildPictureMarkup(tag, imageData, htmlFile, src) {
  const fallbackSrc = toWebPath(htmlFile, imageData.fallbackFile);
  const avifSrcset = imageData.avifSources.map((entry) => `${toWebPath(htmlFile, entry.file)} ${entry.width}w`).join(', ');
  const webpSrcset = imageData.webpSources.map((entry) => `${toWebPath(htmlFile, entry.file)} ${entry.width}w`).join(', ');
  const sizes = buildSizes(tag, src);
  const loading = buildLoading(tag, src);
  const width = imageData.metadata.width;
  const height = imageData.metadata.height;

  let img = tag;
  img = setAttr(img, 'src', fallbackSrc);
  if (!hasAttr(img, 'sizes')) {
    img = setAttr(img, 'sizes', sizes);
  }
  if (!hasAttr(img, 'loading')) {
    img = setAttr(img, 'loading', loading);
  }
  if (!hasAttr(img, 'decoding')) {
    img = setAttr(img, 'decoding', 'async');
  }
  if (!hasAttr(img, 'width')) {
    img = setAttr(img, 'width', String(width));
  }
  if (!hasAttr(img, 'height')) {
    img = setAttr(img, 'height', String(height));
  }

  const sources = [
    `<source type="image/avif" srcset="${escapeAttr(avifSrcset)}" sizes="${escapeAttr(sizes)}">`,
    `<source type="image/webp" srcset="${escapeAttr(webpSrcset)}" sizes="${escapeAttr(sizes)}">`
  ];

  return `<picture>${sources.join('')}${img}</picture>`;
}

function buildRemoteMarkup(tag, src) {
  const srcset = buildRemoteSrcset(src);
  if (!srcset) {
    return tag;
  }

  const sizes = buildSizes(tag, src);
  const loading = buildLoading(tag, src);
  let img = tag;

  if (!hasAttr(img, 'srcset')) {
    img = setAttr(img, 'srcset', srcset);
  }
  if (!hasAttr(img, 'sizes')) {
    img = setAttr(img, 'sizes', sizes);
  }
  if (!hasAttr(img, 'loading')) {
    img = setAttr(img, 'loading', loading);
  }
  if (!hasAttr(img, 'decoding')) {
    img = setAttr(img, 'decoding', 'async');
  }

  return img;
}

async function processHtmlFile(htmlFile, checkOnly) {
  const original = fs.readFileSync(htmlFile, 'utf8');
  const localCache = new Map();
  let changed = false;

  const transformed = original.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = getAttr(tag, 'src');
    if (!src) {
      return tag;
    }

    if (isLocalImage(src)) {
      const absoluteImagePath = path.resolve(path.dirname(htmlFile), src);
      if (!fs.existsSync(absoluteImagePath)) {
        return tag;
      }

      if (!localCache.has(absoluteImagePath)) {
        localCache.set(absoluteImagePath, null);
      }

      return tag;
    }

    if (!isRemote(src)) {
      return tag;
    }

    const updated = buildRemoteMarkup(tag, src);
    if (updated !== tag) {
      changed = true;
    }
    return updated;
  });

  let finalHtml = transformed;
  const localTags = [...original.matchAll(/<img\b[^>]*>/gi)];

  for (const match of localTags) {
    const tag = match[0];
    const src = getAttr(tag, 'src');
    if (!src || !isLocalImage(src)) {
      continue;
    }

    const absoluteImagePath = path.resolve(path.dirname(htmlFile), src);
    if (!fs.existsSync(absoluteImagePath)) {
      continue;
    }

    let imageData = localCache.get(absoluteImagePath);
    if (!imageData) {
      imageData = await createLocalVariants(absoluteImagePath, ROOT);
      localCache.set(absoluteImagePath, imageData);
    }

    if (!imageData) {
      continue;
    }

    const pictureMarkup = buildPictureMarkup(tag, imageData, htmlFile, src);
    finalHtml = finalHtml.split(tag).join(pictureMarkup);
    changed = true;
  }

  if (finalHtml !== original) {
    if (checkOnly) {
      return { changed: true, htmlFile };
    }

    fs.writeFileSync(htmlFile, finalHtml, 'utf8');
    return { changed: true, htmlFile };
  }

  return { changed: false, htmlFile };
}

async function main() {
  const checkOnly = process.argv.includes('--check');
  ensureDir(OUTPUT_DIR);
  ensureDir(path.dirname(MANIFEST_PATH));

  const htmlFiles = walk(ROOT).filter((filePath) => filePath.endsWith('.html'));
  const manifest = {};
  const changedFiles = [];

  for (const htmlFile of htmlFiles) {
    const result = await processHtmlFile(htmlFile, checkOnly);
    if (result.changed) {
      changedFiles.push(normalizeHtmlPath(path.relative(ROOT, htmlFile)));
    }
  }

  const sourceImages = walk(ROOT).filter((filePath) => /\.(png|jpe?g|webp|avif)$/i.test(filePath));
  for (const imagePath of sourceImages) {
    if (imagePath.startsWith(OUTPUT_DIR)) {
      continue;
    }

    const stats = fs.statSync(imagePath);
    const rel = normalizeHtmlPath(path.relative(ROOT, imagePath));
    manifest[rel] = {
      bytes: stats.size
    };
  }

  if (!checkOnly) {
    fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  }

  if (checkOnly) {
    if (changedFiles.length) {
      console.error('Image pipeline verification failed. The following HTML files still need the pipeline applied:');
      for (const file of changedFiles) {
        console.error(`- ${file}`);
      }
      process.exit(1);
    }

    console.log('Image pipeline verification passed.');
    return;
  }

  if (changedFiles.length) {
    console.log(`Processed ${changedFiles.length} HTML files for responsive images.`);
  } else {
    console.log('No HTML image changes were needed.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});