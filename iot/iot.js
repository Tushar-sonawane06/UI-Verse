const startBtn = document.getElementById("startBtn");

const speedValue = document.getElementById("speedValue");

const download = document.getElementById("download");

const upload = document.getElementById("upload");

const ping = document.getElementById("ping");

startBtn.addEventListener("click", () => {

  let speed = 0;

  const interval = setInterval(() => {

    speed += 5;

    speedValue.textContent = speed;

    if(speed >= 95){

      clearInterval(interval);

      download.textContent = "95 Mbps";

      upload.textContent = "42 Mbps";

      ping.textContent = "12 ms";

    }

  }, 100);

});

const startBtn = document.getElementById("startBtn");
const speedValue = document.getElementById("speedValue");
const download = document.getElementById("download");
const upload = document.getElementById("upload");
const ping = document.getElementById("ping");
const circle = document.getElementById("circle");

function animate(from, to, duration, cb) {
  let start = null;

  function step(t) {
    if (!start) start = t;
    const progress = Math.min((t - start) / duration, 1);
    const value = Math.floor(progress * (to - from) + from);
    cb(value);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function runTest() {
  startBtn.disabled = true;
  startBtn.innerText = "Testing...";

  const down = Math.floor(Math.random() * 120) + 10;
  const up = Math.floor(Math.random() * 80) + 5;
  const p = Math.floor(Math.random() * 60) + 5;

  animate(0, down, 1200, (v) => {
    speedValue.innerText = v;
    download.innerText = v + " Mbps";

    circle.style.background =
      `conic-gradient(#00e5ff ${(v / 150) * 100}%, #1e293b 0%)`;
  });

  animate(0, up, 1200, (v) => {
    upload.innerText = v + " Mbps";
  });

  animate(0, p, 1200, (v) => {
    ping.innerText = v + " ms";
  });

  setTimeout(() => {
    startBtn.disabled = false;
    startBtn.innerText = "Start Test";
  }, 1500);
}

startBtn.addEventListener("click", runTest);