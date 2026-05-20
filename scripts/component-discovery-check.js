#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { run } = require('./component-discovery-runner');

(async () => {
  const result = await run();
  const required = [
    path.join(process.cwd(), 'components', 'Discovery', 'component-discovery.html'),
    path.join(process.cwd(), 'docs', 'COMPONENT_DISCOVERY.md')
  ];

  const missing = required.filter((item) => !fs.existsSync(item));
  if (missing.length > 0) {
    console.error('Missing discovery files:');
    missing.forEach((file) => console.error(`- ${path.relative(process.cwd(), file)}`));
    process.exit(1);
  }

  if (!result || !result.summary || result.summary.returned === 0) {
    process.exitCode = 1;
  }

  console.log('Component discovery outputs verified.');
  console.log(`- Items indexed: ${result.summary.total}`);
  console.log(`- Returned: ${result.summary.returned}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
