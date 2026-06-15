const reminderBtn =
  document.getElementById("setReminderBtn");

const bedtimeInput =
  document.getElementById("bedtimeInput");

const message =
  document.getElementById("message");

reminderBtn.addEventListener("click", () => {

  const bedtime = bedtimeInput.value;

  if(bedtime === ""){
    message.textContent =
      "Please select a bedtime.";
    return;
  }

  message.textContent =
    `Bedtime reminder set for ${bedtime}`;

});
// Goal Progress Animation

let progress = 0;
const goalFill = document.getElementById("goalFill");

const animateGoal = () => {
  const interval = setInterval(() => {
    if(progress >= 78){
      clearInterval(interval);
    }else{
      progress++;
      goalFill.style.width = progress + "%";
    }
  },20);
};

animateGoal();


// Mood Tracker

const moods = document.querySelectorAll(".mood");
const moodResult = document.getElementById("moodResult");

moods.forEach(btn => {
  btn.addEventListener("click", () => {
    moodResult.textContent =
      "Today's mood: " + btn.textContent;
  });
});


// AI Tips

const tips = [
  "Try sleeping 20 minutes earlier tonight.",
  "Reduce screen time before bed.",
  "Your sleep consistency is improving.",
  "Deep sleep increased by 12% this week.",
  "Keep room temperature below 25°C."
];

document
.getElementById("newTip")
.addEventListener("click", () => {

  const random =
    tips[Math.floor(Math.random()*tips.length)];

  document.getElementById("aiTip").textContent =
    random;
});


// Water Tracker

let water = 0;

document
.getElementById("addWater")
.addEventListener("click", () => {

  water++;

  document.getElementById("waterCount")
  .textContent = water;
});


// Live Clock

function updateClock(){

  const now = new Date();

  document.getElementById("clock")
  .textContent =
  now.toLocaleTimeString();
}

setInterval(updateClock,1000);

updateClock();
document.querySelectorAll(".sounds-card button")
.forEach(btn=>{
  btn.addEventListener("click",()=>{
    alert(btn.innerText + " Sound Activated");
  });
});
/* Daily Sleep Tips */

const tips = [
  "Avoid caffeine after 4 PM.",
  "Maintain a consistent sleep schedule.",
  "Keep your room cool and dark.",
  "Reduce screen exposure before bed.",
  "Practice deep breathing before sleeping.",
  "Avoid heavy meals at night.",
  "Read a book instead of scrolling."
];

const tipElement =
document.getElementById("sleepTip");

if(tipElement){

  const randomTip =
  tips[Math.floor(Math.random()*tips.length)];

  tipElement.textContent =
  randomTip;
}


/* Weekly Goal Animation */

const weekFill =
document.querySelector(".week-fill");

let weekProgress = 0;

function animateWeekGoal(){

  const target = 72;

  const interval =
  setInterval(()=>{

    if(weekProgress >= target){

      clearInterval(interval);

    }else{

      weekProgress++;

      weekFill.style.width =
      weekProgress + "%";
    }

  },20);

}

if(weekFill){
  animateWeekGoal();
}


/* Sleep Sounds */

document
.querySelectorAll(".sounds-card button")
.forEach(button=>{

  button.addEventListener("click",()=>{

    button.innerText =
    "✓ Playing";

    setTimeout(()=>{

      button.innerText =
      button.dataset.name ||
      button.textContent.replace("✓ Playing","");

    },2000);

  });

});


/* Achievement Animation */

const badges =
document.querySelectorAll(".badge");

badges.forEach((badge,index)=>{

  badge.style.opacity = "0";
  badge.style.transform =
  "translateX(-30px)";

  setTimeout(()=>{

    badge.style.transition=".5s";
    badge.style.opacity="1";
    badge.style.transform=
    "translateX(0)";

  },index * 300);

});


/* Live Energy Change */

const energyValue =
document.querySelector(".energy-ring");

if(energyValue){

  let energy = 88;

  setInterval(()=>{

    energy +=
    Math.floor(Math.random()*3)-1;

    if(energy > 100)
      energy = 100;

    if(energy < 75)
      energy = 75;

    energyValue.textContent =
    energy + "%";

  },5000);

}


/* Sleep Score Counter */

const scoreElement =
document.querySelector(".score");

if(scoreElement){

  let score = 0;

  const target = 92;

  const scoreInterval =
  setInterval(()=>{

    if(score >= target){

      clearInterval(scoreInterval);

    }else{

      score++;

      scoreElement.textContent =
      score;

    }

  },25);

}


/* Current Time */

const clock =
document.getElementById("clock");

function updateClock(){

  if(clock){

    clock.textContent =
    new Date().toLocaleTimeString();
  }

}

setInterval(updateClock,1000);

updateClock();


/* Sleep Streak Increase */

const streak =
document.getElementById("streakCount");

if(streak){

  streak.addEventListener("click",()=>{

    let value =
    Number(streak.textContent);

    value++;

    streak.textContent = value;

  });

}


/* Interactive Mood */

const moodButtons =
document.querySelectorAll(".mood");

const moodResult =
document.getElementById("moodResult");

moodButtons.forEach(btn=>{

  btn.addEventListener("click",()=>{

    moodButtons.forEach(b=>{

      b.style.transform="scale(1)";
    });

    btn.style.transform="scale(1.4)";

    moodResult.textContent =
    "Mood Selected: " +
    btn.textContent;

  });

});


/* Bedtime Reminder */

const reminderBtn =
document.getElementById(
"setReminderBtn"
);

if(reminderBtn){

  reminderBtn.addEventListener(
    "click",
    ()=>{

      const time =
      document.getElementById(
      "bedtimeInput"
      ).value;

      document.getElementById(
      "message"
      ).innerHTML =
      "🌙 Reminder Set for " + time;

    }
  );

}

/* ==========================
   SLEEP SCORE COUNTER
========================== */

let score = 0;
const target = 92;

const scoreCounter =
document.getElementById("scoreCounter");

const counter = setInterval(()=>{

  if(score >= target){

    clearInterval(counter);

  }else{

    score++;

    scoreCounter.textContent = score;
  }

},20);


/* ==========================
   THEME TOGGLE
========================== */

const themeBtn =
document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click",()=>{

  if(darkMode){

    document.body.style.background =
    "#f8fafc";

    document.body.style.color =
    "#111827";

  }else{

    document.body.style.background =
    "#0f172a";

    document.body.style.color =
    "white";
  }

  darkMode = !darkMode;

});


/* ==========================
   RANDOM MOTIVATION
========================== */

const messages = [

"🌙 Great sleep leads to great days",

"💤 Consistency is the key to recovery",

"✨ Better sleep = Better focus",

"⚡ Recharge tonight, conquer tomorrow",

"🌟 Your body heals while you sleep"

];

setInterval(()=>{

  const random =
  Math.floor(Math.random()*messages.length);

  document.querySelector(".hero-badge")
  .textContent = messages[random];

},4000);


/* ==========================
   SLEEP SOUND BUTTON
========================== */

document
.getElementById("sleepMusicBtn")
.addEventListener("click",()=>{

  alert(
    "🎵 Sleep sounds activated!"
  );

});


/* ==========================
   PARALLAX HERO
========================== */

document.addEventListener(
"mousemove",
(e)=>{

  const moon =
  document.querySelector(".moon");

  const x =
  (window.innerWidth/2 - e.clientX)
  / 50;

  const y =
  (window.innerHeight/2 - e.clientY)
  / 50;

  moon.style.transform =
  `translate(${x}px,${y}px)`;
});

const moon = document.getElementById("moonPhase");
const phaseText = document.getElementById("phaseName");

const phases = [

{
  name:"🌑 New Moon",
  shadow:"inset 70px 0 0 #111827"
},

{
  name:"🌒 Waxing Crescent",
  shadow:"inset 40px 0 0 #111827"
},

{
  name:"🌓 First Quarter",
  shadow:"inset 70px 0 0 #111827"
},

{
  name:"🌔 Waxing Gibbous",
  shadow:"inset -30px 0 0 #111827"
},

{
  name:"🌕 Full Moon",
  shadow:"none"
},

{
  name:"🌖 Waning Gibbous",
  shadow:"inset 30px 0 0 #111827"
},

{
  name:"🌗 Last Quarter",
  shadow:"inset -70px 0 0 #111827"
},

{
  name:"🌘 Waning Crescent",
  shadow:"inset -40px 0 0 #111827"
}

];

let currentPhase = 1;

document
.getElementById("changePhase")
.addEventListener("click",()=>{

  currentPhase++;

  if(currentPhase >= phases.length){
    currentPhase = 0;
  }

  moon.style.boxShadow =
  phases[currentPhase].shadow;

  phaseText.textContent =
  phases[currentPhase].name;
});