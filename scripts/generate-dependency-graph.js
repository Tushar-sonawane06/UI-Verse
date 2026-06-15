#!/usr/bin/env node
// Generate visualizer-ready graph data from analysis report

const fs = require('fs');
const path = require('path');

const REPORT_PATH = './reports/dependencies/analysis-report.json';
const OUTPUT_PATH = './reports/dependencies/graph-data.json';

function generateGraphData() {
  if (!fs.existsSync(REPORT_PATH)) {
    console.error('❌ analysis-report.json not found. Run: npm run dependencies:analyze');
    process.exit(1);
  }

  const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
  const { nodes, edges, orphans, circularDependencies, componentDetails, resourceDetails } = report;

  // Category colors (same as UI-Verse palette)
  const categoryColors = {
    authentication: '#eb6835',
    buttons: '#6c5ce7',
    cards: '#00b894',
    commerce: '#fdcb6e',
    dashboards: '#74b9ff',
    'data-display': '#a29bfe',
    feedback: '#ff7675',
    forms: '#fab1a0',
    layout: '#55efc4',
    navigation: '#0984e3',
    other: '#636e72',
    resource: '#b2bec3'
  };

  // Build node list with visual properties
  const graphNodes = nodes.map(n => {
    const isOrphan = orphans.includes(n.id);
    const inCycle = circularDependencies.some(c => c.files.includes(n.id));
    const detail = n.type === 'component'
      ? componentDetails.find(c => c.id === n.id)
      : resourceDetails.find(r => r.id === n.id);
    const depCount = detail ? (detail.directDeps || []).length : 0;
    const dependentCount = detail ? (detail.dependents || []).length : 0;

    return {
      id: n.id,
      label: n.title || path.basename(n.id),
      type: n.type,
      category: n.category,
      color: categoryColors[n.category] || categoryColors.other,
      radius: n.type === 'component' ? 8 + Math.min(depCount * 2, 16) : 5 + Math.min(dependentCount, 10),
      x: 0, y: 0, // populated by force layout in browser
      isOrphan,
      inCycle,
      depCount,
      dependentCount
    };
  });

  // Build edge list
  const graphEdges = edges.map((e, i) => ({
    id: `e${i}`,
    source: e.source,
    target: e.target,
    type: e.type,
    color: e.type === 'shared-css' ? '#eb6835'
      : e.type === 'shared-js' ? '#6c5ce7'
      : e.type === 'css' ? '#00b894'
      : e.type === 'js' ? '#0984e3'
      : '#b2bec3'
  }));

  const graphData = {
    generatedAt: new Date().toISOString(),
    meta: report.summary,
    nodes: graphNodes,
    edges: graphEdges,
    orphans,
    circularCycles: circularDependencies.map(c => c.files)
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(graphData, null, 2));
  console.log(`✅ Graph data saved to ${OUTPUT_PATH}`);
  console.log(`   Nodes: ${graphNodes.length}, Edges: ${graphEdges.length}`);
}

generateGraphData();