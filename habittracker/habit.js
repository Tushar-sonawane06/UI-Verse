const completeButtons =
  document.querySelectorAll(".complete-btn");

completeButtons.forEach(button => {

  button.addEventListener("click", () => {

    const progress =
      button.parentElement
      .querySelector(".progress");

    progress.style.width = "100%";

    button.textContent = "Completed";

    button.disabled = true;

    button.style.background = "#22c55e";

  });

});
const buttons =
document.querySelectorAll(".complete-btn");

const totalHabits =
buttons.length;

let completed = 0;

buttons.forEach(button=>{

  button.addEventListener("click",()=>{

    if(button.classList.contains("completed"))
      return;

    button.classList.add("completed");

    button.innerText = "✓ Completed";

    const card =
    button.closest(".habit-card");

    card.classList.add("completed-card");

    const progress =
    card.querySelector(".progress");

    progress.style.width = "100%";

    completed++;

    document.getElementById(
    "completedCount"
    ).innerText = completed;

    document.getElementById(
    "streakCount"
    ).innerText = completed;

    const percentage =
    Math.round(
      (completed/totalHabits)*100
    );

    document.getElementById(
    "progressPercent"
    ).innerText =
    percentage + "%";

  });

});
/* Theme Changer */

const dots =
document.querySelectorAll(".theme-dot");

dots.forEach(dot=>{

  dot.addEventListener("click",()=>{

    const color =
    dot.dataset.theme;

    document.documentElement
    .style.setProperty(
      "--theme-color",
      color
    );

  });

});

/* Goal Save */

const saveBtn =
document.querySelector(".save-btn");

saveBtn.addEventListener("click",()=>{

  const goal =
  document.querySelector(".goal-input")
  .value;

  if(goal){

    saveBtn.innerText =
    `Goal Saved (${goal})`;

  }

});

/* Avatar Upload */

const upload =
document.getElementById(
"avatarUpload"
);

const preview =
document.getElementById(
"avatarPreview"
);

upload.addEventListener(
"change",
e=>{

  const file =
  e.target.files[0];

  if(file){

    preview.src =
    URL.createObjectURL(file);

    preview.style.display =
    "block";

  }

});
const themeBtn =
document.getElementById("themeBtn");

const musicBtn =
document.getElementById("musicBtn");

const music =
document.getElementById("focusMusic");

/* Theme Toggle */

themeBtn.addEventListener(
"click",
()=>{

  document.body.classList.toggle(
  "dark"
  );

  if(
    document.body.classList.contains(
    "dark"
    )
  ){

    themeBtn.innerHTML =
    "☀ Light Mode";

  }

  else{

    themeBtn.innerHTML =
    "🌙 Dark Mode";

  }

}
);

/* Music Toggle */

let playing = false;

musicBtn.addEventListener(
"click",
()=>{

  if(!playing){

    music.play();

    musicBtn.innerHTML =
    "⏸ Pause Music";

    playing = true;

  }

  else{

    music.pause();

    musicBtn.innerHTML =
    "▶ Play Music";

    playing = false;

  }

}
);
const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("dark");

  const dark =
  document.body.classList.contains(
  "dark"
  );

  localStorage.setItem(
    "theme",
    dark ? "dark" : "light"
  );

});
/* Focus Mode */

const focusBtn =
document.getElementById("focusBtn");

focusBtn.addEventListener(
"click",
()=>{

  document.body.classList.toggle(
  "focus-mode"
  );

  focusBtn.innerText =
  document.body.classList.contains(
  "focus-mode"
  )
  ? "Disable Focus Mode"
  : "Enable Focus Mode";

});

/* Goal */

document
.getElementById("saveGoal")
.addEventListener("click",()=>{

  const goal =
  document.getElementById(
  "goalInput"
  ).value;

  document.getElementById(
  "goalResult"
  ).innerHTML =
  `Goal: ${goal} habits/day`;

});

/* Accent Color */

document
.querySelectorAll(".color")
.forEach(color=>{

  color.addEventListener(
  "click",
  ()=>{

    const selected =
    getComputedStyle(color)
    .backgroundColor;

    document.documentElement
    .style.setProperty(
      "--accent",
      selected
    );

  });

});

/* Quotes */

const quotes = [

"Small progress is still progress.",

"Discipline beats motivation.",

"Success starts with consistency.",

"Your future self will thank you.",

"One habit can change your life.",

"Keep going. You're building momentum."

];

document
.getElementById("newQuote")
.addEventListener(
"click",
()=>{

  const random =
  Math.floor(
  Math.random()*quotes.length
  );

  document.getElementById(
  "quoteText"
  ).innerText =
  quotes[random];

});

/* Reminder */

document
.getElementById(
"saveReminder"
)
.addEventListener(
"click",
()=>{

  const time =
  document.getElementById(
  "reminderTime"
  ).value;

  document.getElementById(
  "reminderText"
  ).innerHTML =
  `Reminder set for ${time}`;

});