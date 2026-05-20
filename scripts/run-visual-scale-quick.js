#!/usr/bin/env node

const { spawnSync } = require('child_process');

const env = {
  ...process.env,
  VISUAL_PROFILE: process.env.VISUAL_PROFILE || 'quick',
  VISUAL_MAX_PAGES: process.env.VISUAL_MAX_PAGES || '5'
};

const result = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['playwright', 'test', '--config=playwright.visual-scale.config.ts'],
  { stdio: 'inherit', env }
);

process.exit(result.status || 0);
