const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning =true;
    }

}

function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000*60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}
let laps = [];
function recordLap() {
    const display = document.getElementById("display").innerText;
    laps.push(display);
    updateLapList();
}
function recordSplit() {
    const display = document.getElementById("display").innerText;
    laps.push("Split: " + display);
    updateLapList();
}
function updateLapList() {
    const lapList = document.getElementById("lapList");
    lapList.innerHTML = "";
    laps.forEach((lap, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index+1} - ${lap}`;
        lapList.appendChild(li);
    });
}
class Pomodoro {
    constructor(displayId, progressId) {
        this.pomodoroTime = 25 * 60;
        this.breakTime = 5 * 60;
        this.timeLeft = this.pomodoroTime;
        this.interval = null;
        this.isRunning = false;
        this.display = document.getElementById(displayId);
        this.progress = document.getElementById(progressId);
        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.display.innerText =
            `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
        this.progress.style.width =
            `${((this.pomodoroTime - this.timeLeft) / this.pomodoroTime) * 100}%`;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                    this.updateDisplay();
                } else {
                    clearInterval(this.interval);
                    alert("Time's up! Take a break 🍵");
                    this.timeLeft = this.breakTime;
                    this.updateDisplay();
                    this.isRunning = false;
                }
            }, 1000);
        }
    }

    pause() {
        clearInterval(this.interval);
        this.isRunning = false;
    }

    reset() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.timeLeft = this.pomodoroTime;
        this.updateDisplay();
    }
}

// Initialize Pomodoro instance
const pomodoro = new Pomodoro("pomodoroDisplay", "progress");

// Hook up buttons
document.getElementById("startPomodoro").onclick = () => pomodoro.start();
document.getElementById("pausePomodoro").onclick = () => pomodoro.pause();
document.getElementById("resetPomodoro").onclick = () => pomodoro.reset();
function Stopwatch(displayId) {
    this.time = 0;
    this.interval = null;
    this.display = document.getElementById(displayId);

    this.update = () => {
        let hrs = Math.floor(this.time / 3600);
        let mins = Math.floor((this.time % 3600) / 60);
        let secs = this.time % 60;
        this.display.innerText =
            `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    };

    this.start = () => {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.time++;
                this.update();
            }, 1000);
        }
    };

    this.stop = () => { clearInterval(this.interval); this.interval = null; };
    this.reset = () => { this.stop(); this.time = 0; this.update(); };
    this.update();
}

const neonStopwatch = new Stopwatch("neonDisplay");
document.getElementById("neonStart").onclick = () => neonStopwatch.start();
document.getElementById("neonStop").onclick = () => neonStopwatch.stop();
document.getElementById("neonReset").onclick = () => neonStopwatch.reset();
const glassStopwatch = new Stopwatch("glassDisplay");
document.getElementById("glassStart").onclick = () => glassStopwatch.start();
document.getElementById("glassStop").onclick = () => glassStopwatch.stop();
document.getElementById("glassReset").onclick = () => glassStopwatch.reset();
const darkStopwatch = new Stopwatch("darkDisplay");
document.getElementById("darkStart").onclick = () => darkStopwatch.start();
document.getElementById("darkStop").onclick = () => darkStopwatch.stop();
document.getElementById("darkReset").onclick = () => darkStopwatch.reset();
function Stopwatch(displayId) {
  this.time = 0;
  this.interval = null;
  this.display = document.getElementById(displayId);

  this.update = () => {
    let mins = Math.floor(this.time / 60);
    let secs = this.time % 60;
    this.display.innerText =
      `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
  };

  this.start = () => {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.time++;
        this.update();
      }, 1000);
    }
  };

  this.stop = () => { clearInterval(this.interval); this.interval = null; };
  this.reset = () => { this.stop(); this.time = 0; this.update(); };
  this.update();
}

const digitalStopwatch = new Stopwatch("digitalDisplay");
document.getElementById("digitalStart").onclick = () => digitalStopwatch.start();
document.getElementById("digitalStop").onclick = () => digitalStopwatch.stop();
document.getElementById("digitalReset").onclick = () => digitalStopwatch.reset();
let circleTime = 60; // 1 minute
let circleInterval;
function startCircleTimer() {
  let timeLeft = circleTime;
  const circle = document.getElementById("progressCircle");
  const display = document.getElementById("circleDisplay");
  clearInterval(circleInterval);
  circleInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      display.innerText = `00:${timeLeft.toString().padStart(2,'0')}`;
      let offset = 339 - (timeLeft / circleTime) * 339;
      circle.setAttribute("stroke-dashoffset", offset);
    } else {
      clearInterval(circleInterval);
      alert("Timer finished!");
    }
  }, 1000);
}
function startHourglass() {
  const top = document.querySelector(".sand.top");
  const bottom = document.querySelector(".sand.bottom");
  top.style.height = "0";
  bottom.style.height = "50%";
  setTimeout(() => alert("Hourglass finished!"), 60000);
}
