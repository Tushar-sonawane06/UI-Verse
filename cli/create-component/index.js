#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  { key: 'name', question: 'Component name (e.g., my-button): ' },
  { key: 'title', question: 'Display title (e.g., My Button): ' },
  { key: 'category', question: 'Category (components/navigation/forms/layout): ' },
  { key: 'description', question: 'Description: ' },
  { key: 'tags', question: 'Tags (comma-separated): ' }
];

let answers = {};

function ask(index) {
  if (index >= questions.length) {
    return generateComponent();
  }
  
  const q = questions[index];
  rl.question(q.question, (answer) => {
    answers[q.key] = answer.trim();
    ask(index + 1);
  });
}

function generateComponent() {
  const name = answers.name.toLowerCase().replace(/\s+/g, '-');
  const title = answers.title || name;
  const category = answers.category || 'components';
  const description = answers.description || `${title} component`;
  const tags = answers.tags ? answers.tags.split(',').map(t => t.trim()) : ['component'];
  
  const componentDir = path.join(__dirname, '..', '..', category, name);
  
  if (fs.existsSync(componentDir)) {
    console.log(`\n❌ Component "${name}" already exists!`);
    process.exit(1);
  }

  fs.mkdirSync(componentDir, { recursive: true });
  fs.mkdirSync(path.join(componentDir, 'assets'), { recursive: true });

  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - UI-Verse</title>
  <link rel="stylesheet" href="${name}.css">
</head>
<body>
  <main class="main-home">
    <h1>${title}</h1>
    <p>${description}</p>

    <div class="component-card" data-name="${name}" data-cat="${category}">
      <div class="card-preview">
        <!-- Your component here -->
        <div class="preview-box">Preview</div>
      </div>
      <p class="card-desc">${description}</p>
      <div class="actions">
        <button class="action-btn" onclick="toggleCode('code1', this)">
          <i class="fa-solid fa-code"></i> View Code
        </button>
        <button class="action-btn" onclick="copyCode('code1', this)">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
      </div>
      <pre id="code1" class="code-block" style="display:none"><code>&lt;!-- ${title} code --&gt;</code></pre>
    </div>
  </main>
  <script src="../../js/bootstrap.js"></script>
</body>
</html>`;

  const cssTemplate = `/* ${title} - UI-Verse */

.preview-box {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

/* Add your component styles here */`;

  const metaJson = JSON.stringify({
    id: name,
    title: title,
    description: description,
    category: category,
    tags: tags,
    path: `${name}.html`,
    version: '1.0.0'
  }, null, 2);

  fs.writeFileSync(path.join(componentDir, `${name}.html`), htmlTemplate);
  fs.writeFileSync(path.join(componentDir, `${name}.css`), cssTemplate);
  fs.writeFileSync(path.join(componentDir, 'meta.json`), metaJson);

  console.log(`\n✅ Component "${name}" created successfully!`);
  console.log(`   Location: ${componentDir}/`);
  console.log(`   Files: ${name}.html, ${name}.css, meta.json`);
  console.log(`\n   Run: npx uiverse add ${name}`);

  rl.close();
}

console.log('\n=== UI-Verse Component Generator ===\n');
ask(0);