let timer;
let timeLeft = 1500;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("timer").innerText =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("Session Completed!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 1500;
  updateDisplay();
}

function setMode(minutes) {
  clearInterval(timer);
  isRunning = false;
  timeLeft = minutes * 60;
  updateDisplay();
}

updateDisplay();

function addTask(){

  const input =
  document.getElementById("taskInput");

  if(!input.value.trim()) return;

  const li =
  document.createElement("li");

  li.textContent =
  input.value;

  li.onclick = () => {
    li.style.textDecoration =
    "line-through";
  };

  document
  .getElementById("taskList")
  .appendChild(li);

  input.value="";
}

let sessionCount = 0;

function sessionCompleted(){

  sessionCount++;

  document.getElementById(
  "sessions"
  ).textContent =
  sessionCount;

  document.getElementById(
  "focusHours"
  ).textContent =
  (sessionCount * 25 / 60)
  .toFixed(1);
}

sessionCompleted();

const quotes = [
 "Stay focused.",
 "Small progress is progress.",
 "Discipline beats motivation.",
 "One session at a time.",
 "Deep work creates results."
];

setInterval(()=>{

 document.getElementById("quote")
 .textContent =
 quotes[
 Math.floor(
 Math.random()*quotes.length
 )];

},10000);

function changeTheme(theme){

 const body=document.body;

 if(theme==="rain"){
   body.style.background=
   "#0f172a";
 }

 if(theme==="forest"){
   body.style.background=
   "#064e3b";
 }

 if(theme==="night"){
   body.style.background=
   "#111827";
 }
}

const revealElements =
document.querySelectorAll(
'.hero-content, .hero-visual, .footer'
);

const observer =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

revealElements.forEach(el => {

  el.classList.add('hidden');
  observer.observe(el);

});

const tips = [
 "Eliminate distractions.",
 "Work in 25 minute blocks.",
 "Take short breaks.",
 "Focus on one task only.",
 "Track your progress daily."
];

setInterval(() => {

 document.getElementById("tipText")
 .textContent =
 tips[Math.floor(Math.random()*tips.length)];

},8000);