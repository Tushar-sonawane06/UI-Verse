const timerEl = document.getElementById("timer");
const timerMsEl = document.getElementById("timerMs");
const startPauseBtn = document.getElementById("startPauseBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapSection = document.getElementById("lapSection");
const lapList = document.getElementById("lapList");

let running = false;
let offset = 0;
let start = null;
let raf = null;
const laps = [];
let lastLapTime = 0;

function pad(n, len = 2) {
  return String(n).padStart(len, "0");
}

function tick(ts) {
  const elapsed = offset + (ts - start);
  const h = Math.floor(elapsed / 3600000);
  const m = Math.floor((elapsed % 3600000) / 60000);
  const s = Math.floor((elapsed % 60000) / 1000);
  const cs = Math.floor((elapsed % 1000) / 10);

  timerEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  timerMsEl.textContent = `.${pad(cs)}`;
  raf = requestAnimationFrame(tick);
}

function startTimer() {
  start = performance.now();
  raf = requestAnimationFrame(tick);
  running = true;
  startPauseBtn.querySelector("i").className = "fas fa-pause";
  startPauseBtn.setAttribute("aria-label", "Pause");
  lapBtn.disabled = false;
}

function pauseTimer() {
  cancelAnimationFrame(raf);
  offset += performance.now() - start;
  running = false;
  startPauseBtn.querySelector("i").className = "fas fa-play";
  startPauseBtn.setAttribute("aria-label", "Resume");
}

function fmtHMS(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function fmtCs(ms) {
  return `.${pad(Math.floor((ms % 1000) / 10))}`;
}

function renderLaps() {
  if (!laps.length) { lapSection.style.display = "none"; return; }
  lapSection.style.display = "block";
  const splits = laps.map(l => l.split);
  const minS = Math.min(...splits);
  const maxS = Math.max(...splits);
  lapList.innerHTML = "";
  [...laps].reverse().forEach(l => {
    const isFastest = laps.length > 1 && l.split === minS;
    const isSlowest = laps.length > 1 && l.split === maxS;
    const div = document.createElement("div");
    div.className = `lap${isFastest ? " fastest" : isSlowest ? " slowest" : ""}`;
    div.innerHTML = `
      <span class="lap-n">LAP ${pad(l.n)}</span>
      <span class="lap-time">${fmtHMS(l.split)}${fmtCs(l.split)}</span>
      <span class="lap-time">${fmtHMS(l.total)}${fmtCs(l.total)}</span>
    `;
    lapList.appendChild(div);
  });
}

startPauseBtn.addEventListener("click", () => {
  running ? pauseTimer() : startTimer();
});

lapBtn.addEventListener("click", () => {
  if (!running) return;
  const now = offset + (performance.now() - start);
  laps.push({ n: laps.length + 1, split: now - lastLapTime, total: now });
  lastLapTime = now;
  renderLaps();
});

resetBtn.addEventListener("click", () => {
  cancelAnimationFrame(raf);
  offset = 0; start = null; running = false; lastLapTime = 0;
  laps.length = 0;
  timerEl.textContent = "00:00:00";
  timerMsEl.textContent = ".00";
  startPauseBtn.querySelector("i").className = "fas fa-play";
  startPauseBtn.setAttribute("aria-label", "Start");
  lapBtn.disabled = true;
  renderLaps();
});

document.addEventListener("keydown", e => {
  if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
  if (e.code === "Space") { e.preventDefault(); startPauseBtn.click(); }
  else if (e.key === "l" || e.key === "L") { lapBtn.click(); }
  else if (e.key === "r" || e.key === "R") { resetBtn.click(); }
});