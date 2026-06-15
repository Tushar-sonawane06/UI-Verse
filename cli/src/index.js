#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

const COMPONENTS_PATH = path.join(__dirname, '..', '..', 'data', 'components.json');
const REGISTRY_PATH = path.join(__dirname, '..', '..', 'data', 'registry.json');

function normalizeComponent(component) {
  const id = String(component && (component.id || component.name) || '').trim();
  return {
    id,
    name: id,
    title: String(component && component.title || id).trim(),
    description: String(component && component.description || '').trim(),
    category: String(component && component.category || '').trim(),
    path: String(component && component.path || '').trim(),
    tags: Array.isArray(component && component.tags) ? component.tags.slice() : [],
    aliases: Array.isArray(component && component.aliases) ? component.aliases.slice() : [],
    dependencies: Array.isArray(component && component.dependencies) ? component.dependencies.slice() : [],
    files: component && component.files ? component.files : {}
  };
}

function loadRegistry() {
  try {
    if (fs.pathExistsSync(COMPONENTS_PATH)) {
      const data = fs.readFileSync(COMPONENTS_PATH, 'utf8');
      const components = JSON.parse(data);
      if (Array.isArray(components)) {
        return components.map(normalizeComponent);
      }
    }

    if (fs.pathExistsSync(REGISTRY_PATH)) {
      const data = fs.readFileSync(REGISTRY_PATH, 'utf8');
      const registry = JSON.parse(data);
      const entries = Array.isArray(registry.registry) ? registry.registry : [];
      return entries.map((entry) => normalizeComponent({
        id: entry.id || entry.name,
        name: entry.name || entry.id,
        title: entry.title,
        description: entry.description,
        category: entry.category,
        path: entry.path || entry.files?.html || '',
        tags: entry.tags,
        aliases: entry.aliases,
        dependencies: entry.dependencies,
        files: entry.files
      }));
    }
  } catch (error) {
    console.error(chalk.red('Error: Could not load component catalog. Make sure you are running this from the UI-Verse directory.'));
    process.exit(1);
  }

  console.error(chalk.red('Error: Could not load component catalog. Make sure data/components.json exists.'));
  process.exit(1);
}

function findComponent(registry, name) {
  const query = String(name || '').toLowerCase();
  return registry.find((component) => {
    const aliases = Array.isArray(component.aliases) ? component.aliases : [];
    return [component.id, component.name, component.title].concat(aliases).filter(Boolean).some((value) => String(value).toLowerCase() === query);
  });
}

function findExistingFile(baseDir, fileName) {
  const exactPath = path.join(baseDir, fileName);
  if (fs.pathExistsSync(exactPath)) {
    return fileName;
  }

  const directory = path.dirname(exactPath);
  if (!fs.pathExistsSync(directory)) {
    return '';
  }

  const expectedName = path.basename(fileName).toLowerCase();
  const match = fs.readdirSync(directory).find((entry) => entry.toLowerCase() === expectedName);
  return match ? path.join(path.dirname(fileName), match).replace(/\\/g, '/') : '';
}

async function addComponent(componentName, options) {
  const spinner = ora(`Searching for component: ${componentName}`).start();
  
  const registry = loadRegistry();
  const component = findComponent(registry, componentName);
  
  if (!component) {
    spinner.fail(chalk.red(`Component "${componentName}" not found.`));
    console.log(chalk.yellow('\nAvailable components:'));
    registry.forEach(c => {
      console.log(chalk.cyan(`  - ${c.name}`) + chalk.gray(` (${c.title})`));
    });
    process.exit(1);
  }
  
  spinner.succeed(chalk.green(`Found: ${component.title}`));
  
  const targetDir = options.directory || process.cwd();
  const componentDir = path.join(targetDir, component.id || component.name);
  
  const installSpinner = ora(`Installing ${component.name} to ${targetDir}`).start();
  const copiedFiles = [];
  
  try {
    await fs.ensureDir(componentDir);
    
    const baseDir = path.join(__dirname, '..', '..');
    const baseName = component.path ? path.basename(component.path, path.extname(component.path)) : (component.id || component.name);
    const componentFolderCandidates = [
      path.join(baseDir, component.id || component.name),
      path.join(baseDir, baseName)
    ];
    let filesCopied = false;
    
    const componentFolder = componentFolderCandidates.find((folder) => fs.pathExistsSync(folder));
    if (componentFolder) {
      const files = await fs.readdir(componentFolder);
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (['.html', '.css', '.js'].includes(ext)) {
          await fs.copy(
            path.join(componentFolder, file),
            path.join(componentDir, file)
          );
          copiedFiles.push(file);
          filesCopied = true;
        }
      }
    }
    
    if (!filesCopied) {
      const fileNames = component.files && Object.keys(component.files).length > 0
        ? Object.values(component.files)
        : [`${baseName}.html`, `${baseName}.css`, `${baseName}.js`];
      for (const fileName of fileNames) {
        const matchedFile = findExistingFile(baseDir, fileName);
        if (matchedFile) {
          await fs.copy(path.join(baseDir, matchedFile), path.join(componentDir, path.basename(matchedFile)));
          copiedFiles.push(path.basename(matchedFile));
          filesCopied = true;
        }
      }
    }
    
    if (!filesCopied) {
      const snippetsDir = path.join(baseDir, 'data', 'snippets', component.id || component.name);
      if (await fs.pathExists(snippetsDir)) {
        const files = await fs.readdir(snippetsDir);
        for (const file of files) {
          await fs.copy(
            path.join(snippetsDir, file),
            path.join(componentDir, file)
          );
          copiedFiles.push(file);
          filesCopied = true;
        }
      }
    }

    const listedFiles = copiedFiles.filter((file) => file !== 'README.md');
    
    const readmeContent = `# ${component.title}

## Installation

This component was installed using: \`npx uiverse add ${component.id || component.name}\`

## Files

${listedFiles.length > 0 ? listedFiles.map((file) => `- ${file}`).join('\n') : 'Component files installed'}

## Description

${component.description}

## Tags

${component.tags.join(', ')}

---
Generated by UI-Verse CLI
`;
    
    await fs.writeFile(path.join(componentDir, 'README.md'), readmeContent);
    
    installSpinner.succeed(chalk.green(`Component "${component.name}" installed successfully!`));
    
    console.log(chalk.blue('\nNext steps:'));
    console.log(chalk.gray(`  cd ${component.id || component.name}`));
    console.log(chalk.gray('  # Open the HTML file in your browser'));
    
  } catch (error) {
    installSpinner.fail(chalk.red(`Failed to install component: ${error.message}`));
    process.exit(1);
  }
}

async function listComponents() {
  const spinner = ora('Loading component catalog...').start();
  const registry = loadRegistry();
  spinner.stop();
  
  console.log(chalk.bold('\n📦 Available UI-Verse Components\n'));
  
  const categories = {};
  registry.forEach(c => {
    if (!categories[c.category]) {
      categories[c.category] = [];
    }
    categories[c.category].push(c);
  });
  
  Object.keys(categories).forEach(cat => {
    console.log(chalk.cyan.bold(`\n${cat.charAt(0).toUpperCase() + cat.slice(1)}:`));
    categories[cat].forEach(c => {
      console.log(`  ${chalk.green(c.id || c.name)} - ${chalk.gray(c.description.substring(0, 50))}...`);
    });
  });
  
  console.log(chalk.blue('\n\nUsage:'));
  console.log(chalk.gray('  npx uiverse add <component-name>'));
  console.log(chalk.gray('  npx uiverse add button --directory ./my-project'));
}

program
  .name('uiverse')
  .description('CLI tool to install UI-Verse components')
  .version('1.0.0');

program
  .command('add <component>')
  .description('Add a component to your project')
  .option('-d, --directory <path>', 'Target directory for installation', '.')
  .action(addComponent);

program
  .command('list')
  .description('List all available components')
  .action(listComponents);

program
  .command('init')
  .description('Initialize a new UI-Verse project')
  .action(async () => {
    const spinner = ora('Initializing project...').start();
    
    const targetDir = process.cwd();
    const dirs = ['components', 'css', 'js', 'assets'];
    
    for (const dir of dirs) {
      await fs.ensureDir(path.join(targetDir, dir));
    }
    
    await fs.writeFile(path.join(targetDir, 'index.html'), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My UI-Verse Project</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <h1>Welcome to UI-Verse</h1>
  <!-- Add your components here -->
  <script src="js/main.js"></script>
</body>
</html>`);
    
    await fs.writeFile(path.join(targetDir, 'css', 'styles.css'), `/* UI-Verse Project Styles */
:root {
  --primary-color: #eb6835;
  --secondary-color: #6c5ce7;
  --background: #ffffff;
  --text-color: #333333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--background);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
`);
    
    await fs.writeFile(path.join(targetDir, 'js', 'main.js'), `// UI-Verse Project Main File
console.log('UI-Verse project initialized');

// Add your component logic here
`);
    
    await fs.writeFile(path.join(targetDir, 'README.md'), `# UI-Verse Project

Quick start:
\`\`\`bash
# Add components
npx uiverse add button
\`\`\`
`);
    
    spinner.succeed(chalk.green('Project initialized successfully!'));
    console.log(chalk.blue('\nProject structure created:'));
    console.log(chalk.gray('  - index.html'));
    console.log(chalk.gray('  - css/styles.css'));
    console.log(chalk.gray('  - js/main.js'));
    console.log(chalk.gray('  - components/'));
  });

program.parse(process.argv);