/**
 * UIverse - Component Registry Generator
 * Scans HTML files and generates components.json
 * 
 * Usage: node scripts/registry-generator.js
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'data', 'components.json');

const COMPONENT_FILES = [
  'index.html', 'button.html', 'cards.html', 'form.html', 'navbar.html',
  'badges.html', 'alerts.html', 'footer.html', 'pricing.html',
  'testimonials.html', 'settings.html', 'color.html', 'toggles.html'
];

function extractMetadata(htmlContent, filename) {
  const id = filename.replace('.html', '').toLowerCase();
  
  // Extract title
  const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/[-–] UI-Verse/i, '').trim() : id;
  
  // Extract description from meta
  const descMatch = htmlContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const description = descMatch ? descMatch[1] : `${title} component page`;
  
  // Extract tags from meta keywords
  const keywordsMatch = htmlContent.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']+)["']/i);
  const tags = keywordsMatch ? keywordsMatch[1].split(',').map(t => t.trim().toLowerCase()) : [];
  
  // Common aliases
  const aliases = {
    index: ['home', 'homepage', 'showcase'],
    button: ['btn', 'buttons'],
    cards: ['card', 'panels'],
    navbar: ['nav', 'navigation', 'header'],
    badges: ['badge', 'labels'],
    form: ['forms', 'inputs', 'input'],
    footer: ['footers'],
    alerts: ['toasts', 'notifications'],
    toggles: ['switch', 'switches'],
    pricing: ['pricing', 'plans'],
    testimonials: ['reviews', 'testimonial'],
    settings: ['preferences', 'config'],
    color: ['colors', 'palette']
  };
  
  return {
    id,
    title: title.charAt(0).toUpperCase() + title.slice(1),
    path: filename,
    tags: tags.length ? tags : [id],
    aliases: aliases[id] || [],
    description: description.substring(0, 100)
  };
}

function main() {
  console.log('[Registry] Generating component registry...\n');
  
  const components = [];
  
  COMPONENT_FILES.forEach(filename => {
    const filePath = path.join(PROJECT_ROOT, filename);
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf8');
      const metadata = extractMetadata(html, filename);
      components.push(metadata);
      console.log(`[Registry] Found: ${metadata.title} (${metadata.id})`);
    }
  });
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(components, null, 2));
  console.log(`\n[Registry] Written ${components.length} components to: ${OUTPUT_FILE}`);
}

main();