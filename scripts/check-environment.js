#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REQUIRED_NODE_MAJOR = 18;
const RECOMMENDED_NODE_VERSIONS = '18.x or 20.x';
const PACKAGE_MANAGER = 'npm';

let exitCode = 0;

function log(...args) {
  console.log(...args);
}

function error(...args) {
  console.error('❌', ...args);
  exitCode = 1;
}

function warn(...args) {
  console.warn('⚠️ ', ...args);
}

function success(msg) {
  console.log('✅', msg);
}

function checkNodeVersion() {
  try {
    const nodeVersion = process.version.slice(1);
    const majorVersion = parseInt(nodeVersion.split('.')[0], 10);
    const fullVersion = process.version;

    log(`\n🔍 Node.js version: ${fullVersion}`);

    if (majorVersion < REQUIRED_NODE_MAJOR) {
      error(`Node.js ${REQUIRED_NODE_MAJOR}+ is required. Current: ${fullVersion}. Please upgrade using nvm or https://nodejs.org`);
    } else if (majorVersion >= 22) {
      warn(`Node.js ${fullVersion} is newer than recommended (${RECOMMENDED_NODE_VERSIONS}). Should work but not extensively tested.`);
    } else {
      success(`Node.js ${fullVersion} - compatible`);
    }
  } catch (e) {
    error('Could not detect Node.js version');
  }
}

function checkPackageManager() {
  try {
    const npmVersion = execSync(`${PACKAGE_MANAGER} --version`, { encoding: 'utf8' }).trim();
    log(`📦 ${PACKAGE_MANAGER} version: ${npmVersion}`);

    if (parseInt(npmVersion.split('.')[0], 10) < 8) {
      warn(`${PACKAGE_MANAGER} 8+ is recommended. Current: ${npmVersion}`);
    } else {
      success(`${PACKAGE_MANAGER} ${npmVersion} - compatible`);
    }
  } catch (e) {
    error(`${PACKAGE_MANAGER} is not installed. Install it from https://nodejs.org`);
  }

  try {
    execSync('pnpm --version', { encoding: 'utf8', stdio: 'ignore' });
    log('📦 pnpm is also available (alternative package manager)');
  } catch {
    // pnpm is optional
  }
}

function checkGit() {
  try {
    const gitVersion = execSync('git --version', { encoding: 'utf8' }).trim();
    log(`🔧 ${gitVersion}`);
    success('Git is installed');
  } catch {
    error('Git is not installed. Install from https://git-scm.com');
  }
}

function checkDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const lockFilePath = path.join(process.cwd(), 'package-lock.json');
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');

  log('\n📂 Checking project dependencies...');

  if (!fs.existsSync(packageJsonPath)) {
    error('package.json not found. Are you in the project root?');
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
  log(`📋 Total dependencies: ${Object.keys(deps).length}`);

  if (fs.existsSync(lockFilePath)) {
    success('package-lock.json found');
  } else {
    warn('package-lock.json not found. Run npm install to generate it.');
  }

  if (fs.existsSync(nodeModulesPath)) {
    const moduleCount = fs.readdirSync(nodeModulesPath).length;
    log(`📁 node_modules: ${moduleCount} packages installed`);
    success('Dependencies installed');
  } else {
    warn('node_modules not found. Run npm install first.');
  }
}

function checkConfigFiles() {
  log('\n⚙️  Checking configuration files...');

  const configs = [
    { name: 'tsconfig.json', file: 'tsconfig.json', critical: true },
    { name: 'Vite config', file: 'vite.config.js', critical: true },
    { name: 'Rollup config', file: 'rollup.config.mjs', critical: false },
    { name: 'ESLint config', file: '.eslintrc.json', critical: false },
    { name: 'Stylelint config', file: '.stylelintrc.json', critical: false },
    { name: 'GitHub CI', file: '.github/workflows/ci.yml', critical: false },
  ];

  for (const config of configs) {
    try {
      if (fs.existsSync(path.join(process.cwd(), config.file))) {
        success(`${config.name} found`);
      } else if (config.critical) {
        error(`Critical config ${config.name} (${config.file}) not found`);
      } else {
        warn(`${config.name} (${config.file}) not found - may be optional`);
      }
    } catch {
      warn(`Could not check ${config.name}`);
    }
  }
}

function checkDiskSpace() {
  log('\n💾 Checking system resources...');
  try {
    const freeMem = process.memoryUsage();
    log(`🧠 Memory usage: ${Math.round(freeMem.heapUsed / 1024 / 1024)} MB / ${Math.round(freeMem.heapTotal / 1024 / 1024)} MB`);
    log(`📊 CPU cores available: ${require('os').cpus().length}`);
  } catch {
    warn('Could not check system resources');
  }
}

function printSummary() {
  console.log('\n' + '='.repeat(50));
  if (exitCode === 0) {
    console.log('✅ Environment check passed! You are ready to develop UI-Verse.');
  } else {
    console.log(`❌ ${exitCode} issue(s) found. Please fix them before proceeding.`);
  }
  console.log('='.repeat(50) + '\n');
}

async function main() {
  console.log('\n🚀 UI-Verse Development Environment Check');
  console.log('='.repeat(50));

  checkNodeVersion();
  checkPackageManager();
  checkGit();
  checkDependencies();
  checkConfigFiles();
  checkDiskSpace();
  printSummary();

  process.exit(exitCode);
}

main().catch((e) => {
  console.error('Unexpected error during environment check:', e);
  process.exit(1);
});
