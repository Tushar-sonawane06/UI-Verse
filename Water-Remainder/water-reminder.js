/* ================= WATER TRACKER ================= */

const waterButtons =
document.querySelectorAll(
".water-btn"
);

const progressFill =
document.getElementById(
"progressFill"
);

const waterLevel =
document.getElementById(
"waterLevel"
);

const waterPercent =
document.getElementById(
"waterPercent"
);

const currentWater =
document.getElementById(
"currentWater"
);

const cupsCount =
document.getElementById(
"cupsCount"
);

const timeline =
document.getElementById(
"timeline"
);

const resetBtn =
document.getElementById(
"resetBtn"
);

let totalWater = 0;
let cups = 0;

const goal = 2500;

/* ================= ADD WATER ================= */

waterButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const amount =
    parseInt(
      btn.dataset.amount
    );

    totalWater += amount;

    if(totalWater > goal){
      totalWater = goal;
    }

    cups++;

    updateUI(amount);

  });

});

/* ================= UPDATE UI ================= */

function updateUI(amount){

  const percent =
  Math.floor(
  (totalWater / goal) * 100
  );

  progressFill.style.width =
  percent + "%";

  waterLevel.style.height =
  percent + "%";

  waterPercent.textContent =
  percent + "%";

  currentWater.textContent =
  totalWater + " ml";

  cupsCount.textContent =
  cups;

  /* TIMELINE ENTRY */

  const item =
  document.createElement("div");

  item.className =
  "timeline-item";

  const now =
  new Date();

  const time =
  now.toLocaleTimeString(
  [],
  {
    hour:"2-digit",
    minute:"2-digit"
  });

  item.innerHTML = `
    <span>${time}</span>
    <p>${amount} ml consumed</p>
  `;

  timeline.prepend(item);

  /* SUCCESS */

  if(percent >= 100){

    setTimeout(() => {

      alert(
        "🎉 Congratulations! You reached your hydration goal."
      );

    },300);

  }

}

/* ================= RESET ================= */

resetBtn.addEventListener(
"click",
() => {

  totalWater = 0;
  cups = 0;

  progressFill.style.width =
  "0%";

  waterLevel.style.height =
  "0%";

  waterPercent.textContent =
  "0%";

  currentWater.textContent =
  "0 ml";

  cupsCount.textContent =
  "0";

  timeline.innerHTML = `
    <div class="timeline-item">
      <span>08:00 AM</span>
      <p>250 ml consumed</p>
    </div>
  `;

});

/* ================= REMINDER TIMER ================= */

const reminderText =
document.getElementById(
"nextReminder"
);

let minutes = 45;

setInterval(() => {

  minutes--;

  if(minutes <= 0){

    alert(
      "💧 Time to drink water!"
    );

    minutes = 45;
  }

  reminderText.textContent =
  `In ${minutes} minutes`;

},60000);

const goal = 2500;

let currentWater =
Number(localStorage.getItem("waterAmount")) || 0;

const progressFill =
document.getElementById("progressFill");

const currentWaterText =
document.getElementById("currentWater");

const waterLevel =
document.getElementById("waterLevel");

const waterPercent =
document.getElementById("waterPercent");

const cupsCount =
document.getElementById("cupsCount");

const timeline =
document.getElementById("timeline");

const resetBtn =
document.getElementById("resetBtn");

const nextReminder =
document.getElementById("nextReminder");

const buttons =
document.querySelectorAll(".water-btn");

/* =========================
   UPDATE UI
========================= */

function updateUI(){

  if(currentWater > goal){
    currentWater = goal;
  }

  const percent =
  Math.round((currentWater / goal) * 100);

  progressFill.style.width =
  percent + "%";

  waterLevel.style.height =
  percent + "%";

  waterPercent.innerText =
  percent + "%";

  currentWaterText.innerText =
  currentWater + " ml";

  cupsCount.innerText =
  Math.floor(currentWater / 250);

  localStorage.setItem(
    "waterAmount",
    currentWater
  );

}

/* =========================
   ADD WATER
========================= */

buttons.forEach(button=>{

  button.addEventListener("click",()=>{

    const amount =
    Number(button.dataset.amount);

    currentWater += amount;

    if(currentWater > goal){
      currentWater = goal;
    }

    addTimeline(amount);

    updateUI();

  });

});

/* =========================
   TIMELINE
========================= */

function addTimeline(amount){

  const now = new Date();

  const time =
  now.toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit'
  });

  const item =
  document.createElement("div");

  item.classList.add("timeline-item");

  item.innerHTML = `
    <span>${time}</span>
    <p>${amount} ml consumed</p>
  `;

  timeline.prepend(item);

}

/* =========================
   RESET
========================= */

resetBtn.addEventListener("click",()=>{

  currentWater = 0;

  localStorage.removeItem(
    "waterAmount"
  );

  timeline.innerHTML = "";

  updateUI();

});

/* =========================
   REMINDER TIMER
========================= */

let reminderMinutes = 45;

function updateReminder(){

  nextReminder.innerText =
  `In ${reminderMinutes} minutes`;

  reminderMinutes--;

  if(reminderMinutes < 0){
    reminderMinutes = 45;
  }

}

setInterval(updateReminder,60000);

updateReminder();

/* =========================
   INIT
========================= */

updateUI();