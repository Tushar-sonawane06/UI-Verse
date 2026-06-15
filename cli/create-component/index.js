#!/usr/bin/env node

/**
 * UI-Verse Advanced Component Generator CLI
 * Enhanced Interactive Developer Experience
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",

  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  gray: "\x1b[90m",
};


const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",

  red: "\x1b[38;5;196m",
  green: "\x1b[38;5;46m",
  yellow: "\x1b[38;5;226m",
  blue: "\x1b[38;5;39m",
  cyan: "\x1b[38;5;51m",
  magenta: "\x1b[38;5;213m",
  gray: "\x1b[38;5;244m",

  orange: "\x1b[38;5;208m",
  purple: "\x1b[38;5;141m",
};

function progress(step, total) {
  const width = 30;

  const filled = Math.round(
    (step / total) * width
  );

  const bar =
    "█".repeat(filled) +
    "░".repeat(width - filled);

  console.log(`
${COLORS.cyan}[${bar}] ${step}/${total}${COLORS.reset}
`);
}

function progress(step, total) {
  const width = 30;

  const filled = Math.round(
    (step / total) * width
  );

  const bar =
    "█".repeat(filled) +
    "░".repeat(width - filled);

  console.log(`
${COLORS.cyan}[${bar}] ${step}/${total}${COLORS.reset}
`);
}

async function spinner(text, ms = 1200) {
  const frames = ["⠋","⠙","⠸","⠴","⠦","⠧"];

  let i = 0;

  process.stdout.write("\n");

  const interval = setInterval(() => {
    process.stdout.write(
      `\r${COLORS.cyan}${frames[i++ % frames.length]} ${text}${COLORS.reset}`
    );
  }, 80);

  await new Promise(r => setTimeout(r, ms));

  clearInterval(interval);

  process.stdout.write(
    `\r${COLORS.green}✔ ${text}${COLORS.reset}\n`
  );
}

const answers = {};

const categories = [
  "components",
  "navigation",
  "forms",
  "layout",
  "cards",
  "buttons",
  "modals",
  "loaders",
  "animations",
];

function line() {
  console.log(
    `${COLORS.gray}────────────────────────────────────────────────────${COLORS.reset}`
  );
}

function header() {
  console.clear();

  console.log(`
${COLORS.cyan}${COLORS.bright}
██╗   ██╗██╗      ██╗   ██╗███████╗██████╗ ███████╗███████╗
██║   ██║██║      ██║   ██║██╔════╝██╔══██╗██╔════╝██╔════╝
██║   ██║██║█████╗██║   ██║█████╗  ██████╔╝███████╗█████╗
██║   ██║██║╚════╝██║   ██║██╔══╝  ██╔══██╗╚════██║██╔══╝
╚██████╔╝██║      ╚██████╔╝███████╗██║  ██║███████║███████╗
 ╚═════╝ ╚═╝       ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
${COLORS.reset}
${COLORS.yellow}✨ Advanced Component Generator CLI${COLORS.reset}
`);

  line();
}

function success(msg) {
  console.log(`${COLORS.green}✔ ${msg}${COLORS.reset}`);
}

function error(msg) {
  console.log(`${COLORS.red}✖ ${msg}${COLORS.reset}`);
}

function info(msg) {
  console.log(`${COLORS.cyan}➜ ${msg}${COLORS.reset}`);
}

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function askQuestions() {
  header();

  answers.name = (
    await ask(
      `${COLORS.blue}Component name ${COLORS.gray}(my-button)${COLORS.reset}: `
    )
  )
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  answers.title = (
    await ask(
      `${COLORS.blue}Display title ${COLORS.gray}(My Button)${COLORS.reset}: `
    )
  ).trim();

  console.log(`\n${COLORS.magenta}Available Categories:${COLORS.reset}`);

  categories.forEach((cat, i) => {
    console.log(`  ${COLORS.yellow}${i + 1}.${COLORS.reset} ${cat}`);
  });

  const categoryInput = await ask(
    `\n${COLORS.blue}Choose category ${COLORS.gray}(1-${categories.length})${COLORS.reset}: `
  );

  const categoryIndex = parseInt(categoryInput);

  answers.category =
    categories[categoryIndex - 1] || categoryInput || "components";

  answers.description = (
    await ask(`${COLORS.blue}Description${COLORS.reset}: `)
  ).trim();

  answers.tags = (
    await ask(
      `${COLORS.blue}Tags ${COLORS.gray}(comma-separated)${COLORS.reset}: `
    )
  )
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const premium = await ask(
    `${COLORS.blue}Include advanced starter template? ${COLORS.gray}(y/n)${COLORS.reset}: `
  );

  answers.premium = premium.toLowerCase() === "y";

  generateComponent();
}

function generateComponent() {
  const name = answers.name;
  const title = answers.title || name;
  const category = answers.category || "components";
  const description = answers.description || `${title} component`;

  const tags =
    answers.tags.length > 0 ? answers.tags : ["component"];

  const componentDir = path.join(
    __dirname,
    "..",
    "..",
    category,
    name
  );

  if (fs.existsSync(componentDir)) {
    line();
    error(`Component "${name}" already exists.`);
    rl.close();
    process.exit(1);
  }

  fs.mkdirSync(componentDir, { recursive: true });
  fs.mkdirSync(path.join(componentDir, "assets"), {
    recursive: true,
  });

  const htmlTemplate = generateHTML(
    name,
    title,
    category,
    description
  );

  const cssTemplate = generateCSS(title);

  const jsTemplate = generateJS();

  const metaJson = JSON.stringify(
    {
      id: name,
      title,
      description,
      category,
      tags,
      path: `${name}.html`,
      version: "1.0.0",
      author: "UI-Verse CLI",
      createdAt: new Date().toISOString(),
    },
    null,
    2
  );

  fs.writeFileSync(
    path.join(componentDir, `${name}.html`),
    htmlTemplate
  );

  fs.writeFileSync(
    path.join(componentDir, `${name}.css`),
    cssTemplate
  );

  fs.writeFileSync(
    path.join(componentDir, `${name}.js`),
    jsTemplate
  );

  fs.writeFileSync(
    path.join(componentDir, "meta.json"),
    metaJson
  );

  showSummary(componentDir, name);
}

function generateHTML(name, title, category, description) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} - UI-Verse</title>

  <link rel="stylesheet" href="${name}.css" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  />
</head>

<body>

  <main class="main-home">

    <header class="hero">
      <span class="badge">${category}</span>
      <h1>${title}</h1>
      <p>${description}</p>
    </header>

    <section
      class="component-card"
      data-name="${name}"
      data-cat="${category}"
    >

      <div class="card-preview">

        <!-- COMPONENT START -->

        <button class="demo-btn">
          Click Me
        </button>

        <!-- COMPONENT END -->

      </div>

      <div class="card-footer">

        <div class="actions">

          <button
            class="action-btn"
            onclick="toggleCode('code1', this)"
          >
            <i class="fa-solid fa-code"></i>
            View Code
          </button>

          <button
            class="action-btn"
            onclick="copyCode('code1', this)"
          >
            <i class="fa-solid fa-copy"></i>
            Copy
          </button>

        </div>

      </div>

      <pre
        id="code1"
        class="code-block"
      ><code>&lt;button class="demo-btn"&gt;Click Me&lt;/button&gt;</code></pre>

    </section>

  </main>

  <script src="${name}.js"></script>

</body>
</html>`;
}

function generateCSS(title) {
  return `/* ${title} - UI-Verse */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter, sans-serif;
  background:
    linear-gradient(
      135deg,
      #0f172a,
      #111827
    );

  color: white;
  min-height: 100vh;
  padding: 40px;
}

.main-home {
  max-width: 1100px;
  margin: auto;
}

.hero {
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3rem;
  margin: 10px 0;
}

.hero p {
  color: #cbd5e1;
  max-width: 700px;
}

.badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;

  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);

  font-size: 0.9rem;
}

.component-card {
  background: rgba(255,255,255,0.06);

  border: 1px solid rgba(255,255,255,0.08);

  border-radius: 24px;

  overflow: hidden;

  backdrop-filter: blur(16px);

  box-shadow:
    0 10px 40px rgba(0,0,0,0.35);
}

.card-preview {
  padding: 80px 20px;
  display: grid;
  place-items: center;
}

.demo-btn {
  border: none;
  outline: none;

  padding: 14px 28px;

  border-radius: 14px;

  background: white;
  color: #111827;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s ease;
}

.demo-btn:hover {
  transform: translateY(-4px);
}

.card-footer {
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.action-btn {
  border: none;
  cursor: pointer;

  padding: 12px 18px;

  border-radius: 12px;

  background: rgba(255,255,255,0.1);

  color: white;

  font-weight: 600;

  transition: 0.3s ease;
}

.action-btn:hover {
  background: rgba(255,255,255,0.2);
}

.code-block {
  display: none;

  background: #020617;

  color: #38bdf8;

  padding: 20px;

  overflow-x: auto;
}`;
}

function generateJS() {
  return `function toggleCode(id, btn) {

  const block = document.getElementById(id);

  if (block.style.display === "block") {
    block.style.display = "none";
    btn.innerHTML =
      '<i class="fa-solid fa-code"></i> View Code';
  } else {
    block.style.display = "block";
    btn.innerHTML =
      '<i class="fa-solid fa-eye-slash"></i> Hide Code';
  }
}

function copyCode(id, btn) {

  const code =
    document.getElementById(id).innerText;

  navigator.clipboard.writeText(code);

  const old = btn.innerHTML;

  btn.innerHTML =
    '<i class="fa-solid fa-check"></i> Copied';

  setTimeout(() => {
    btn.innerHTML = old;
  }, 2000);
}`;
}

function showSummary(componentDir, name) {
  line();

  success(`Component "${name}" created successfully.`);

  console.log(`
${COLORS.yellow}📁 Location:${COLORS.reset}
${componentDir}

${COLORS.yellow}📦 Files Generated:${COLORS.reset}

  ├── ${name}.html
  ├── ${name}.css
  ├── ${name}.js
  ├── meta.json
  └── assets/

${COLORS.green}🚀 Ready to use:${COLORS.reset}

  npx uiverse add ${name}
`);

  line();

  rl.close();
}

askQuestions();