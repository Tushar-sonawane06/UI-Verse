// Animated Counter - UIverse

// Count Up Animation
function animateCountUp() {
  document.querySelectorAll('.countup').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    if (!target) return;
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  });
}

// Circular Progress
function animateCircular() {
  const circumference = 251;

  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');

  if (circle1) {
    const offset = circumference - (75 / 100) * circumference;
    circle1.style.strokeDashoffset = offset;
  }

  if (circle2) {
    const offset = circumference - (90 / 100) * circumference;
    circle2.style.strokeDashoffset = offset;
  }
}

// Odometer
function animateOdometer() {
  const digits = ['d1', 'd2', 'd3', 'd4', 'd5'];
  const values = [1, 2, 3, 4, 5];

  digits.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      el.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        el.textContent = values[i];
        el.style.transition = 'none';
        el.style.transform = 'translateY(100%)';
        setTimeout(() => {
          el.style.transition = 'transform 0.5s ease';
          el.style.transform = 'translateY(0)';
        }, 50);
      }, 500);
    }, i * 200);
  });
}

// Minimal Counter
let minCount = 0;
function changeCount(val) {
  minCount += val;
  if (minCount < 0) minCount = 0;
  document.getElementById('minCount').textContent = minCount;
}

// Replay button
function startCountUp() {
  document.querySelectorAll('.countup').forEach(el => {
    el.textContent = '0';
  });
  document.querySelectorAll('.progress-circle').forEach(el => {
    el.style.strokeDashoffset = 251;
  });
  setTimeout(() => {
    animateCountUp();
    animateCircular();
    animateOdometer();
  }, 100);
}

// Intersection Observer - trigger on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCountUp();
      animateCircular();
      animateOdometer();
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

const firstCard = document.querySelector('.counter-card');
if (firstCard) observer.observe(firstCard);

// Visitor Counter

setInterval(()=>{

const visitor =
document.getElementById("visitorCount");

visitor.innerText =
parseInt(visitor.innerText)
+
Math.floor(Math.random()*3);

},3000);


// Revenue Counter

let revenue = 0;

const revenueEl =
document.getElementById("revenue");

const revenueTimer =
setInterval(()=>{

revenue += 250;

revenueEl.innerText =
revenue.toLocaleString();

if(revenue >= 50000){

clearInterval(revenueTimer);

}

},50);


// Like Counter

let likes = 0;

document
.getElementById("likeBtn")
.addEventListener("click",()=>{

likes++;

document
.getElementById("likeCount")
.innerText = likes;

});


// Countdown

let count = 60;

const countdown =
document.getElementById("countdown");

const countdownTimer =
setInterval(()=>{

count--;

countdown.innerText = count;

if(count <= 0){

clearInterval(countdownTimer);

countdown.innerText =
"🚀";

}

},1000);


// Goal Progress

let progress = 0;

const goalFill =
document.querySelector(".goal-fill");

const goalPercent =
document.getElementById("goalPercent");

const goalTimer =
setInterval(()=>{

progress++;

goalFill.style.width =
progress + "%";

goalPercent.innerText =
progress + "%";

if(progress >= 100){

clearInterval(goalTimer);

}

},50);
let xp = 0;

setInterval(()=>{

xp++;

document.getElementById("xpFill").style.width =
xp + "%";

if(xp % 20 === 0){
document.getElementById("xpLevel").innerText =
parseInt(document.getElementById("xpLevel").innerText)+1;
}

if(xp >= 100){
xp = 0;
}

},100);
setInterval(()=>{

let stock =
document.getElementById("stockValue");

let current =
parseInt(stock.innerText);

let change =
Math.floor(Math.random()*20)-10;

current += change;

stock.innerText = current;

document.getElementById("stockChange").innerText =
(change > 0 ? "+" : "") +
change + "%";

},2000);
setInterval(()=>{

let count =
document.getElementById("followers");

count.innerText =
parseInt(count.innerText)
+
Math.floor(Math.random()*15);

},1000);
let steps = 0;

setInterval(()=>{

steps +=
Math.floor(Math.random()*50);

document.getElementById("stepsCount")
.innerText = steps;

},1000);
let sales = 0;

setInterval(()=>{

sales++;

document.getElementById("salesCount")
.innerText = sales;

},1500);
let ai = 0;

setInterval(()=>{

ai +=
Math.floor(Math.random()*20);

document.getElementById("aiRequests")
.innerText =
ai.toLocaleString();

},1000);
setInterval(()=>{

let cpu =
Math.floor(Math.random()*100);

document.getElementById("cpuValue")
.innerText = cpu;

document.querySelector(
".performance-circle"
).style.background =

`conic-gradient(
#22c55e ${cpu*3.6}deg,
#e5e7eb ${cpu*3.6}deg
)`;

},2000);
let launch = 0;

setInterval(()=>{

if(launch < 100){

launch++;

document.getElementById(
"launchCount"
).innerText = launch;

}

},100);
let energy = 0;

setInterval(()=>{

energy += 15;

document.getElementById(
"energyValue"
).innerText = energy;

},500);
let power = 0;

setInterval(()=>{

power +=
Math.floor(Math.random()*50);

document.getElementById(
"powerCount"
).innerText = power;

},1000);
let level = 1;

setInterval(()=>{

level++;

document.getElementById(
"xpNumber"
).innerText = level;

},3000);
let gems = 0;

setInterval(()=>{

gems += 5;

document.getElementById(
"crystalCount"
).innerText = gems;

},500);