/**
 * UIverse - SEO Metadata Generator
 * Generates SEO and Open Graph metadata for pages
 * 
 * Usage: node scripts/seo-metadata.js [--page index]
 */

const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  name: 'UI-Verse',
  title: 'UI-Verse - Open-Source UI Component Library',
  description: 'A curated collection of open-source HTML, CSS, and JavaScript UI components for modern web development. Free to use, regularly updated.',
  url: 'https://uiverse.vercel.app',
  ogImage: 'https://uiverse.vercel.app/preview.png',
  twitter: '@uiverse',
  author: 'UI-Verse Community',
  keywords: ['ui components', 'css', 'html', 'javascript', 'open source', 'web components', 'frontend', 'ui library']
};

const PAGE_CONFIGS = {
  index: {
    title: 'UI-Verse - Open-Source UI Component Library',
    description: 'Discover free, open-source HTML, CSS, and JavaScript UI components. Browse buttons, cards, forms, navigation and more.',
    path: 'index.html'
  },
  buttons: {
    title: 'Buttons - UI-Verse',
    description: 'Explore our collection of beautiful, customizable button components built with HTML and CSS. Gradient, outline, neon, and more.',
    path: 'button.html'
  },
  cards: {
    title: 'Cards - UI-Verse',
    description: 'Browse our card components collection. Modern, responsive card designs for portfolios, dashboards, and content display.',
    path: 'cards.html'
  },
  forms: {
    title: 'Forms - UI-Verse',
    description: 'Build beautiful forms with our CSS form components. Input fields, checkboxes, radio buttons, toggles, and form layouts.',
    path: 'form.html'
  },
  navbar: {
    title: 'Navbar - UI-Verse',
    description: 'Responsive navigation bars and menu components. Sidebars, headers, and mobile-friendly navigation for your projects.',
    path: 'navbar.html'
  },
  badges: {
    title: 'Badges - UI-Verse',
    description: 'Status badges, labels, and tag components. Small, colorful indicators for notifications, counts, and status display.',
    path: 'badges.html'
  },
  alerts: {
    title: 'Alerts - UI-Verse',
    description: 'Alert messages, notifications, and toast components. Beautiful CSS alerts for success, warning, error, and info states.',
    path: 'alerts.html'
  },
  footer: {
    title: 'Footer - UI-Verse',
    description: 'Footer templates and layouts. Complete footer designs with newsletter signup, social links, and site navigation.',
    path: 'footer.html'
  }
};

function generateSchema(pageConfig) {
  const site = SITE_CONFIG;
  const page = pageConfig;
  const url = `${site.url}/${page.path || ''}`;
  
  const isComponentPage = ['button', 'cards', 'form', 'navbar', 'badges', 'alerts', 'footer', 'pricing', 'testimonials', 'toggles'].includes(page.id);
  
  let schema;
  
  if (page.id === 'index') {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": site.name,
      "url": site.url,
      "description": site.description,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${site.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "author": {
        "@type": "Organization",
        "name": site.name,
        "url": site.url
      }
    };
  } else if (isComponentPage) {
    schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": page.title,
      "description": page.description,
      "url": url,
      "about": {
        "@type": "Thing",
        "name": page.title,
        "description": page.description
      },
      "keywords": (page.tags || []).join(', '),
      "genre": "Web Development",
      "programmingLanguage": ["HTML", "CSS", "JavaScript"]
    };
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": page.title,
      "description": page.description,
      "url": url
    };
  }
  
  // Add breadcrumb for component pages
  if (isComponentPage) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.url },
        { "@type": "ListItem", "position": 2, "name": "Components", "item": `${site.url}/components` },
        { "@type": "ListItem", "position": 3, "name": page.title, "item": url }
      ]
    };
  }
  
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}
  
function generateMetaTags(pageConfig) {
  const site = SITE_CONFIG;
  const page = pageConfig;
  
  const fullTitle = page.title || site.title;
  const fullDesc = page.description || site.description;
  const canonicalUrl = `${site.url}/${page.path || ''}`;

  const schema = generateSchema(pageConfig);

  return `
  <!-- Primary Meta Tags -->
  <title>${fullTitle}</title>
  <meta name="title" content="${fullTitle}">
  <meta name="description" content="${fullDesc}">
  <meta name="author" content="${site.author}">
  <meta name="keywords" content="${site.keywords.join(', ')}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${fullDesc}">
  <meta property="og:image" content="${site.ogImage}">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:locale" content="en_US">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="${canonicalUrl}">
  <meta property="twitter:title" content="${fullTitle}">
  <meta property="twitter:description" content="${fullDesc}">
  <meta property="twitter:image" content="${site.ogImage}">
  <meta property="twitter:creator" content="${site.twitter}">

  <!-- JSON-LD Structured Data -->
  ${schema}`;
}

function injectMetadata(htmlFile, pageKey) {
  const pageConfig = PAGE_CONFIGS[pageKey];
  if (!pageConfig) {
    console.error(`[SEO] Unknown page: ${pageKey}`);
    return;
  }

  const tags = generateMetaTags(pageConfig);

  let html = fs.readFileSync(htmlFile, 'utf8');
  
  const insertPoint = html.indexOf('</head>');
  if (insertPoint === -1) {
    console.error(`[SEO] No </head> tag found in ${htmlFile}`);
    return;
  }

  html = html.slice(0, insertPoint) + '\n' + tags + '\n' + html.slice(insertPoint);
  fs.writeFileSync(htmlFile, html);
  console.log(`[SEO] Metadata added to: ${htmlFile}`);
}

function main() {
  const args = process.argv.slice(2);
  const pageKey = args.includes('--page') ? args[args.indexOf('--page') + 1] : 'index';
  
  if (pageKey === 'all') {
    Object.entries(PAGE_CONFIGS).forEach(([key, config]) => {
      const filePath = path.join(__dirname, '..', config.path);
      if (fs.existsSync(filePath)) {
        injectMetadata(filePath, key);
      }
    });
  } else {
    const config = PAGE_CONFIGS[pageKey];
    if (config) {
      const filePath = path.join(__dirname, '..', config.path);
      if (fs.existsSync(filePath)) {
        injectMetadata(filePath, pageKey);
      } else {
        console.error(`[SEO] File not found: ${filePath}`);
      }
    }
  }
}

main();