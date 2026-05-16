/**
 * UIverse - CSP Hash Generator
 * Automatically generates CSP hashes for inline scripts and styles
 * 
 * Usage: node scripts/csp-hash-generator.js [--update]
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PROJECT_ROOT = path.join(__dirname, '..');

function sha256(base64Content) {
  return crypto.createHash('sha256').update(base64Content).digest('base64');
}

function extractInlineContent(htmlContent, type) {
  const results = [];
  
  if (type === 'script') {
    const regex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = regex.exec(htmlContent)) !== null) {
      const content = match[1].trim();
      if (content && !content.includes('src=')) {
        results.push({ content, hash: 'sha256-' + sha256(content) });
      }
    }
  } else if (type === 'style') {
    const regex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let match;
    while ((match = regex.exec(htmlContent)) !== null) {
      const content = match[1].trim();
      if (content) {
        results.push({ content, hash: 'sha256-' + sha256(content) });
      }
    }
  }
  
  return results;
}

function updateCSPInFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  
  const scripts = extractInlineContent(html, 'script');
  const styles = extractInlineContent(html, 'style');
  
  const newHashes = [...scripts, ...styles].map(item => item.hash);
  
  // Update CSP meta tag
  const cspRegex = /<meta[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/i;
  const cspMatch = html.match(cspRegex);
  
  if (cspMatch) {
    let cspLine = cspMatch[0];
    const existingHashes = cspLine.match(/sha256-[A-Za-z0-9+/=]+/g) || [];
    
    const allHashes = [...new Set([...existingHashes, ...newHashes])];
    const hashesStr = allHashes.join(' ');
    
    cspLine = cspLine.replace(/script-src[^;]*/i, `script-src 'self' https: 'unsafe-hashes' ${hashesStr}`);
    
    const newHtml = html.replace(cspMatch[0], cspLine);
    fs.writeFileSync(filePath, newHtml);
    console.log(`[CSP] Updated ${path.basename(filePath)}: ${newHashes.length} new hashes`);
  }
}

function generateCSPReport(htmlFiles) {
  console.log('\n=== CSP Hash Report ===\n');
  
  htmlFiles.forEach(file => {
    const html = fs.readFileSync(file, 'utf8');
    const scripts = extractInlineContent(html, 'script');
    const styles = extractInlineContent(html, 'style');
    
    if (scripts.length || styles.length) {
      console.log(`${path.basename(file)}:`);
      scripts.forEach(s => console.log(`  Script: ${s.hash}`));
      styles.forEach(s => console.log(`  Style: ${s.hash}`));
    }
  });
}

function main() {
  const args = process.argv.slice(2);
  const updateMode = args.includes('--update');
  
  const htmlFiles = [
    path.join(PROJECT_ROOT, 'index.html'),
    path.join(PROJECT_ROOT, 'button.html'),
    path.join(PROJECT_ROOT, 'cards.html'),
    path.join(PROJECT_ROOT, 'form.html'),
    path.join(PROJECT_ROOT, 'navbar.html')
  ].filter(f => fs.existsSync(f));

  if (updateMode) {
    console.log('[CSP] Running in update mode...\n');
    htmlFiles.forEach(updateCSPInFile);
    console.log('\n[CSP] Done!');
  } else {
    generateCSPReport(htmlFiles);
  }
}

main();