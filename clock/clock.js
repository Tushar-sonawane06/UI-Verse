/* ================= ANALOG CLOCK ================= */

const hourHand =
document.getElementById(
"hourHand"
);


const minuteHand =
document.getElementById(
"minuteHand"
);

const secondHand =
document.getElementById(
"secondHand"
);

function updateClock(){

  const now =
  new Date();

  const seconds =
  now.getSeconds();

  const minutes =
  now.getMinutes();

  const hours =
  now.getHours();

  const secondDeg =
  seconds * 6;

  const minuteDeg =
  minutes * 6 +
  seconds * 0.1;

  const hourDeg =
  hours * 30 +
  minutes * 0.5;

  secondHand.style.transform =
  `translateX(-50%) rotate(${secondDeg}deg)`;

  minuteHand.style.transform =
  `translateX(-50%) rotate(${minuteDeg}deg)`;

  hourHand.style.transform =
  `translateX(-50%) rotate(${hourDeg}deg)`;

  /* DIGITAL */

  const digitalClock =
  document.getElementById(
  "digitalClock"
  );

  const dateText =
  document.getElementById(
  "dateText"
  );

  digitalClock.innerText =
  now.toLocaleTimeString();

  dateText.innerText =
  now.toDateString();

}

setInterval(updateClock,1000);

updateClock();

/* ================= WORLD CLOCKS ================= */

const worldTimes =
document.querySelectorAll(
".world-time"
);

function updateWorldClocks(){

  const now =
  new Date();

  const utc =
  now.getTime() +
  now.getTimezoneOffset() *
  60000;

  worldTimes.forEach(clock => {

    const offset =
    parseFloat(
      clock.dataset.offset
    );

    const cityTime =
    new Date(
      utc +
      (3600000 * offset)
    );

    clock.innerText =
    cityTime.toLocaleTimeString();

  });

}

setInterval(
updateWorldClocks,
1000
);

updateWorldClocks();

/* ================= BUTTON EFFECT ================= */

const buttons =
document.querySelectorAll(
".theme-btn"
);

buttons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.style.transform =
    "scale(0.9)";

    setTimeout(() => {

      btn.style.transform =
      "scale(1)";

    },150);

  });

});

/* CLOCK MARKERS */

const clock =
document.getElementById("clock");

for(let i=0;i<60;i++){

const marker =
document.createElement("div");

marker.className = "marker";

marker.style.transform =
`translateX(-50%) rotate(${i*6}deg)`;

marker.style.height =
i % 5 === 0 ? "24px" : "12px";

marker.style.opacity =
i % 5 === 0 ? "1" : ".35";

clock.appendChild(marker);

}

/* CLOCK */

const hour =
document.getElementById("hourHand");

const minute =
document.getElementById("minuteHand");

const second =
document.getElementById("secondHand");

const digitalClock =
document.getElementById("digitalClock");

const dateText =
document.getElementById("dateText");

const greeting =
document.getElementById("greeting");

function updateClock(){

const now = new Date();

const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

const hourDeg =
(h % 12) * 30 + m * .5;

const minuteDeg =
m * 6;

const secondDeg =
s * 6;

hour.style.transform =
`translateX(-50%) rotate(${hourDeg}deg)`;

minute.style.transform =
`translateX(-50%) rotate(${minuteDeg}deg)`;

second.style.transform =
`translateX(-50%) rotate(${secondDeg}deg)`;

digitalClock.innerHTML =
now.toLocaleTimeString();

dateText.innerHTML =
now.toLocaleDateString(undefined,{
weekday:"long",
month:"long",
day:"numeric",
year:"numeric"
});

if(h < 12){

greeting.innerHTML =
"Good Morning ☀";

}
else if(h < 18){

greeting.innerHTML =
"Good Afternoon ⚡";

}
else{

greeting.innerHTML =
"Good Evening 🌙";

}

/* WORLD CLOCKS */

document.querySelectorAll(".world-time")
.forEach(clock=>{

const offset =
parseFloat(clock.dataset.offset);

const utc =
now.getTime() +
now.getTimezoneOffset() * 60000;

const cityTime =
new Date(
utc + (3600000 * offset)
);

clock.innerHTML =
cityTime.toLocaleTimeString();

});

}

setInterval(updateClock,1000);

updateClock();

/* STOPWATCH */

let stopwatchInterval;
let elapsed = 0;
let running = false;

const stopwatch =
document.getElementById("stopwatch");

document.getElementById("startBtn")
.addEventListener("click",()=>{

if(running) return;

running = true;

const start =
Date.now() - elapsed;

stopwatchInterval =
setInterval(()=>{

elapsed =
Date.now() - start;

let totalSeconds =
Math.floor(elapsed / 1000);

let hrs =
String(Math.floor(totalSeconds / 3600))
.padStart(2,"0");

let mins =
String(Math.floor((totalSeconds % 3600)/60))
.padStart(2,"0");

let secs =
String(totalSeconds % 60)
.padStart(2,"0");

stopwatch.innerHTML =
`${hrs}:${mins}:${secs}`;

},1000);

});

document.getElementById("pauseBtn")
.addEventListener("click",()=>{

running = false;

clearInterval(stopwatchInterval);

});

document.getElementById("resetBtn")
.addEventListener("click",()=>{

running = false;

clearInterval(stopwatchInterval);

elapsed = 0;

stopwatch.innerHTML =
"00:00:00";

});

/* TIMER */

let timer;
let timerSeconds = 0;

const timerDisplay =
document.getElementById("timerDisplay");

function updateTimerDisplay(){

const mins =
String(Math.floor(timerSeconds / 60))
.padStart(2,"0");

const secs =
String(timerSeconds % 60)
.padStart(2,"0");

timerDisplay.innerHTML =
`${mins}:${secs}`;

}

document.getElementById("timerStart")
.addEventListener("click",()=>{

const mins =
parseInt(
document.getElementById("minutesInput").value
) || 0;

const secs =
parseInt(
document.getElementById("secondsInput").value
) || 0;

if(timerSeconds <= 0){

timerSeconds =
mins * 60 + secs;

}

clearInterval(timer);

timer =
setInterval(()=>{

if(timerSeconds > 0){

timerSeconds--;

updateTimerDisplay();

}
else{

clearInterval(timer);

alert("⏰ Timer Finished!");

}

},1000);

});

document.getElementById("timerPause")
.addEventListener("click",()=>{

clearInterval(timer);

});

document.getElementById("timerReset")
.addEventListener("click",()=>{

clearInterval(timer);

timerSeconds = 0;

updateTimerDisplay();

});

updateTimerDisplay();

/* ALARM CLOCK */

let alarmTime = null;

document.getElementById("setAlarmBtn")
.addEventListener("click",()=>{

alarmTime =
document.getElementById("alarmTime").value;

document.getElementById("alarmStatus")
.innerHTML =
"Alarm Set For " + alarmTime;

});

function checkAlarm(){

const now = new Date();

const current =
String(now.getHours()).padStart(2,"0")
+ ":" +
String(now.getMinutes()).padStart(2,"0");

if(alarmTime === current){

alert("⏰ Alarm Ringing!");

alarmTime = null;

document.getElementById("alarmStatus")
.innerHTML =
"No Alarm Set";

}

}

setInterval(checkAlarm,1000);

/* POMODORO */

let pomodoroSeconds = 1500;
let pomodoroInterval;

const pomodoroDisplay =
document.getElementById("pomodoroDisplay");

function updatePomodoro(){

const mins =
String(Math.floor(pomodoroSeconds / 60))
.padStart(2,"0");

const secs =
String(pomodoroSeconds % 60)
.padStart(2,"0");

pomodoroDisplay.innerHTML =
`${mins}:${secs}`;

}

document.getElementById("pomodoroStart")
.addEventListener("click",()=>{

clearInterval(pomodoroInterval);

pomodoroInterval =
setInterval(()=>{

if(pomodoroSeconds > 0){

pomodoroSeconds--;

updatePomodoro();

}
else{

clearInterval(pomodoroInterval);

alert("🍅 Pomodoro Complete!");

}

},1000);

});

document.getElementById("pomodoroPause")
.addEventListener("click",()=>{

clearInterval(pomodoroInterval);

});

document.getElementById("pomodoroReset")
.addEventListener("click",()=>{

clearInterval(pomodoroInterval);

pomodoroSeconds = 1500;

updatePomodoro();

});

updatePomodoro();

/* MILLISECOND CLOCK */

function updateMsClock(){

const now = new Date();

const hrs =
String(now.getHours()).padStart(2,"0");

const mins =
String(now.getMinutes()).padStart(2,"0");

const secs =
String(now.getSeconds()).padStart(2,"0");

const ms =
String(now.getMilliseconds())
.padStart(3,"0");

document.getElementById("msClock")
.innerHTML =
`${hrs}:${mins}:${secs}:${ms}`;

}

setInterval(updateMsClock,10);

/* FUTURE COUNTDOWN */

document.getElementById("startCountdown")
.addEventListener("click",()=>{

const targetDate =
new Date(
document.getElementById("futureDate").value
);

const countdown =
setInterval(()=>{

const now = new Date();

const diff =
targetDate - now;

if(diff <= 0){

clearInterval(countdown);

document.getElementById("futureCountdown")
.innerHTML =
"🎉 Event Started";

}
else{

const days =
Math.floor(diff / (1000*60*60*24));

document.getElementById("futureCountdown")
.innerHTML =
days + " Days";

}

},1000);

});

/* DAY NIGHT CLOCK */

function updateDayNight(){

const hour =
new Date().getHours();

if(hour >= 6 && hour < 18){

document.getElementById("dayNight")
.innerHTML =
"🌞 Day";

document.getElementById("sunMessage")
.innerHTML =
"Sunlight Time";

}
else{

document.getElementById("dayNight")
.innerHTML =
"🌙 Night";

document.getElementById("sunMessage")
.innerHTML =
"Moonlight Time";

}

}

setInterval(updateDayNight,1000);

updateDayNight();

/* BINARY CLOCK */

function updateBinaryClock(){

const now = new Date();

const h =
now.getHours()
.toString(2)
.padStart(6,"0");

const m =
now.getMinutes()
.toString(2)
.padStart(6,"0");

const s =
now.getSeconds()
.toString(2)
.padStart(6,"0");

document.getElementById("binaryClock")
.innerHTML =
`${h} : ${m} : ${s}`;

}

setInterval(updateBinaryClock,1000);

updateBinaryClock();

function updateModernClocks(){

  const now = new Date();

  const hrs =
  String(now.getHours()).padStart(2,"0");

  const mins =
  String(now.getMinutes()).padStart(2,"0");

  const secs =
  String(now.getSeconds()).padStart(2,"0");

  /* NEON CLOCK */

  document.getElementById("neonClock")
  .innerHTML =
  `${hrs}:${mins}:${secs}`;

  document.getElementById("neonDate")
  .innerHTML =
  now.toDateString();

  /* FLIP CLOCK */

  document.getElementById("flipHours")
  .innerHTML = hrs;

  document.getElementById("flipMinutes")
  .innerHTML = mins;

  document.getElementById("flipSeconds")
  .innerHTML = secs;

  /* CYBER CLOCK */

  document.getElementById("cyberClock")
  .innerHTML =
  `${hrs}:${mins}:${secs}`;

  /* MINIMAL CLOCK */

  document.getElementById("minimalClock")
  .innerHTML =
  `${hrs}:${mins}`;

  document.getElementById("minimalSeconds")
  .innerHTML =
  `${secs} Seconds`;

  /* PROGRESS CLOCK */

  document.getElementById("progressClock")
  .innerHTML =
  `${hrs}:${mins}`;

  const totalSeconds =
  now.getHours() * 3600 +
  now.getMinutes() * 60 +
  now.getSeconds();

  const progress =
  (totalSeconds / 86400) * 565;

  document.getElementById("progressRing")
  .style.strokeDashoffset =
  565 - progress;

}

setInterval(updateModernClocks,1000);

updateModernClocks();