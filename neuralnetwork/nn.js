(function () {
  const isDark = () =>
    document.documentElement.classList.contains("dark") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // ── State ─────────────────────────────────────────────
  let epoch = 0,
    maxEpoch = 50;
  let accuracy = 0,
    loss = 2.3,
    lr = 0.01;
  let accHistory = [],
    lossHistory = [];
  let signals = []; // active signal pulses
  let nodeActivations = Array(9).fill(0);

  // ── Network canvas ────────────────────────────────────
  const nc = document.getElementById("networkCanvas");
  const nctx = nc.getContext("2d");

  // Layer config: [input, hidden, output] x positions
  const LAYERS = [
    { x: 0.18, nodes: 3 },
    { x: 0.5, nodes: 3 },
    { x: 0.82, nodes: 3 },
  ];

  function getNodePos(layer, nodeIdx, W, H) {
    const n = LAYERS[layer].nodes;
    const spacing = H / (n + 1);
    return {
      x: LAYERS[layer].x * W,
      y: spacing * (nodeIdx + 1),
    };
  }

  function getColor(v, alpha = 1) {
    // v in [0,1]: 0 = dim, 1 = bright
    if (v < 0.3) return `rgba(100,100,120,${alpha * 0.4})`;
    const r = Math.round(80 + v * 120);
    const g = Math.round(100 + v * 100);
    const b = Math.round(200 + v * 50);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function drawNetwork() {
    const W = nc.clientWidth || 280;
    nc.width = W * window.devicePixelRatio;
    nc.height = nc.clientHeight * window.devicePixelRatio;
    nctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    const H = nc.clientHeight;

    nctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let l = 0; l < LAYERS.length - 1; l++) {
      for (let i = 0; i < LAYERS[l].nodes; i++) {
        for (let j = 0; j < LAYERS[l + 1].nodes; j++) {
          const from = getNodePos(l, i, W, H);
          const to = getNodePos(l + 1, j, W, H);
          const srcAct = nodeActivations[l * 3 + i];
          nctx.beginPath();
          nctx.moveTo(from.x, from.y);
          nctx.lineTo(to.x, to.y);
          nctx.strokeStyle = `rgba(120,110,200,${0.08 + srcAct * 0.18})`;
          nctx.lineWidth = 0.8;
          nctx.stroke();
        }
      }
    }

    // Draw signal pulses
    signals.forEach((sig) => {
      const from = getNodePos(sig.fromLayer, sig.fromNode, W, H);
      const to = getNodePos(sig.toLayer, sig.toNode, W, H);
      const t = sig.t;
      const px = from.x + (to.x - from.x) * t;
      const py = from.y + (to.y - from.y) * t;
      const alpha = t < 0.1 ? t / 0.1 : t > 0.9 ? (1 - t) / 0.1 : 1;
      nctx.beginPath();
      nctx.arc(px, py, 3.5, 0, Math.PI * 2);
      nctx.fillStyle = `rgba(130,180,255,${alpha * 0.9})`;
      nctx.fill();
    });

    // Draw nodes
    for (let l = 0; l < LAYERS.length; l++) {
      for (let i = 0; i < LAYERS[l].nodes; i++) {
        const pos = getNodePos(l, i, W, H);
        const act = nodeActivations[l * 3 + i];
        const r = 10 + act * 3;

        // Glow ring
        if (act > 0.3) {
          nctx.beginPath();
          nctx.arc(pos.x, pos.y, r + 5, 0, Math.PI * 2);
          nctx.fillStyle = `rgba(100, 140, 255, ${act * 0.15})`;
          nctx.fill();
        }

        // Node circle
        nctx.beginPath();
        nctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        const base = isDark() ? 30 : 230;
        const bright = Math.round(base + act * (isDark() ? 120 : -100));
        nctx.fillStyle =
          act > 0.5
            ? `rgba(100,130,${220 + Math.round(act * 30)}, ${0.6 + act * 0.4})`
            : `rgba(${bright},${bright},${bright + 20}, 0.5)`;
        nctx.fill();

        // Border
        nctx.beginPath();
        nctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        nctx.strokeStyle =
          act > 0.5
            ? `rgba(140,160,255,${0.5 + act * 0.5})`
            : `rgba(120,120,150,0.4)`;
        nctx.lineWidth = 1;
        nctx.stroke();

        // Layer labels
        if (i === 0) {
          const labels = ["Input", "Hidden", "Output"];
          nctx.fillStyle = isDark()
            ? "rgba(180,180,200,0.5)"
            : "rgba(80,80,100,0.6)";
          nctx.font = "10px var(--font-sans, sans-serif)";
          nctx.textAlign = "center";
          nctx.fillText(labels[l], pos.x, H - 4);
        }
      }
    }
  }

  // ── Chart canvas ──────────────────────────────────────
  const cc = document.getElementById("chartCanvas");
  const cctx = cc.getContext("2d");

  function drawChart() {
    const W = cc.clientWidth || 580;
    cc.width = W * window.devicePixelRatio;
    cc.height = cc.clientHeight * window.devicePixelRatio;
    cctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    const H = cc.clientHeight;
    const pad = { l: 36, r: 12, t: 8, b: 22 };
    const cW = W - pad.l - pad.r;
    const cH = H - pad.t - pad.b;
    const N = accHistory.length;

    cctx.clearRect(0, 0, W, H);

    // Gridlines
    const gridColor = isDark() ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
    cctx.strokeStyle = gridColor;
    cctx.lineWidth = 0.5;
    [0, 0.25, 0.5, 0.75, 1].forEach((v) => {
      const y = pad.t + cH * (1 - v);
      cctx.beginPath();
      cctx.moveTo(pad.l, y);
      cctx.lineTo(pad.l + cW, y);
      cctx.stroke();
      // y-axis labels
      cctx.fillStyle = isDark()
        ? "rgba(180,180,200,0.4)"
        : "rgba(80,80,100,0.5)";
      cctx.font = "9px var(--font-sans, sans-serif)";
      cctx.textAlign = "right";
      cctx.fillText(Math.round(v * 100) + "%", pad.l - 4, y + 3);
    });

    if (N < 2) return;

    function plotLine(data, color, scale = 1) {
      cctx.beginPath();
      data.forEach((v, i) => {
        const x = pad.l + (i / (maxEpoch - 1)) * cW;
        const y = pad.t + cH * (1 - v * scale);
        i === 0 ? cctx.moveTo(x, y) : cctx.lineTo(x, y);
      });
      cctx.strokeStyle = color;
      cctx.lineWidth = 1.5;
      cctx.lineJoin = "round";
      cctx.stroke();
    }

    // Fill under accuracy
    if (N > 1) {
      cctx.beginPath();
      accHistory.forEach((v, i) => {
        const x = pad.l + (i / (maxEpoch - 1)) * cW;
        const y = pad.t + cH * (1 - v / 100);
        i === 0 ? cctx.moveTo(x, y) : cctx.lineTo(x, y);
      });
      cctx.lineTo(pad.l + ((N - 1) / (maxEpoch - 1)) * cW, pad.t + cH);
      cctx.lineTo(pad.l, pad.t + cH);
      cctx.closePath();
      cctx.fillStyle = "rgba(52,211,153,0.06)";
      cctx.fill();
    }

    plotLine(accHistory, "#34d399", 1 / 100);
    plotLine(
      lossHistory.map((l) => Math.min(l / 2.5, 1)),
      "#f87171",
      1,
    );

    // x-axis labels
    cctx.fillStyle = isDark() ? "rgba(180,180,200,0.4)" : "rgba(80,80,100,0.5)";
    cctx.font = "9px var(--font-sans, sans-serif)";
    cctx.textAlign = "center";
    [0, 10, 20, 30, 40, 50].forEach((ep) => {
      const x = pad.l + (ep / (maxEpoch - 1)) * cW;
      cctx.fillText(ep, x, H - 4);
    });
  }

  // ── Simulation ────────────────────────────────────────
  let lastEpochTime = 0;
  let lastSignalTime = 0;
  let animFrame;
  let epochProgress = 0;

  function tick(ts) {
    // Advance signals
    signals = signals
      .map((s) => ({ ...s, t: s.t + 0.035 }))
      .filter((s) => s.t < 1);

    // Spawn new signals
    if (ts - lastSignalTime > 80) {
      const fromLayer = Math.floor(Math.random() * 2);
      const fromNode = Math.floor(Math.random() * 3);
      const toNode = Math.floor(Math.random() * 3);
      signals.push({
        fromLayer,
        fromNode,
        toLayer: fromLayer + 1,
        toNode,
        t: 0,
      });
      lastSignalTime = ts;

      // Update activation of source node
      const idx = fromLayer * 3 + fromNode;
      nodeActivations[idx] = Math.min(1, nodeActivations[idx] + 0.5);
    }

    // Decay activations
    nodeActivations = nodeActivations.map((a) => Math.max(0, a - 0.015));

    // Advance epoch every 1.2s
    if (ts - lastEpochTime > 1200) {
      epoch = Math.min(epoch + 1, maxEpoch);
      lastEpochTime = ts;

      // Simulate training curve
      const t = epoch / maxEpoch;
      const noise = (Math.random() - 0.5) * 2;
      accuracy = Math.min(98, 10 + 85 * (1 - Math.exp(-4 * t)) + noise);
      loss = Math.max(0.05, 2.3 * Math.exp(-3.5 * t) + Math.abs(noise) * 0.05);
      lr = epoch < 20 ? 0.01 : epoch < 35 ? 0.005 : 0.001;

      accHistory.push(accuracy);
      lossHistory.push(loss);

      // Update metrics
      document.getElementById("mEpoch").textContent = epoch;
      document.getElementById("mAcc").textContent = accuracy.toFixed(1) + "%";
      document.getElementById("mLoss").textContent = loss.toFixed(3);
      document.getElementById("mLR").textContent = lr.toFixed(3);

      // Update progress bars
      document.getElementById("epochBar").style.width =
        (epoch / maxEpoch) * 100 + "%";
      document.getElementById("epochPct").textContent =
        Math.round((epoch / maxEpoch) * 100) + "%";
      document.getElementById("accBar").style.width = accuracy.toFixed(1) + "%";
      document.getElementById("accPct").textContent = accuracy.toFixed(1) + "%";
      const lossPct = Math.max(0, 100 - (loss / 2.3) * 100);
      document.getElementById("lossBar").style.width = lossPct.toFixed(1) + "%";
      document.getElementById("lossPct").textContent = loss.toFixed(2);

      drawChart();

      if (epoch >= maxEpoch) {
        epoch = 0;
        accHistory = [];
        lossHistory = [];
        accuracy = 0;
        loss = 2.3;
      }
    }

    drawNetwork();
    animFrame = requestAnimationFrame(tick);
  }

  // Kick off
  setTimeout(() => {
    drawNetwork();
    drawChart();
    animFrame = requestAnimationFrame(tick);
  }, 80);

  // Resize observer
  const ro = new ResizeObserver(() => {
    drawNetwork();
    drawChart();
  });
  ro.observe(nc);
  ro.observe(cc);
})();
