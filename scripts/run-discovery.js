(async () => {
  try {
    const runner = require('./component-discovery-runner.js');
    const result = await runner.run();
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('DISCOVERY_ERROR', err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
