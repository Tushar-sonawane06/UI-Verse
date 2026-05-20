import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '../..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'data');

export function generateSidebar() {
  const sidebar = {
    '/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' }
        ]
      }
    ]
  };

  const categories = {
    components: 'UI Components',
    navigation: 'Navigation',
    forms: 'Forms',
    layout: 'Layout'
  };

  try {
    const metaDir = path.join(COMPONENTS_DIR, 'meta');
    if (fs.existsSync(metaDir)) {
      const files = fs.readdirSync(metaDir);
      
      files.forEach(file => {
        if (file.endsWith('.json')) {
          const data = JSON.parse(fs.readFileSync(path.join(metaDir, file), 'utf8'));
          const category = data.category || 'components';
          const catKey = `/${category}/`;
          
          if (!sidebar[catKey]) {
            sidebar[catKey] = [{
              text: categories[category] || 'Components',
              items: []
            }];
          }
          
          sidebar[catKey][0].items.push({
            text: data.title || data.id,
            link: `/${category}/${data.id}`
          });
        }
      });
    }
  } catch (e) {
    console.warn('[Sidebar] Could not load component metadata:', e.message);
  }

  sidebar['/components/'] = sidebar['/components/'] || [
    { text: 'Components', items: [] }
  ];

  return sidebar;
}

export function generateNavigation() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Components', link: '/components/' },
    { text: 'Guide', link: '/guide/' },
    { text: 'API', link: '/api/' }
  ];
}