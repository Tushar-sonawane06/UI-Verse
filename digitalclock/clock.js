const clock = document.getElementById("clock");

function updateClock(){

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();

// clock.js

// DIGITAL CLOCK

function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString();

  const fullDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("clock").innerHTML = time;

  document.getElementById("date").innerHTML = fullDate;
}

setInterval(updateClock, 1000);

updateClock();


// CALENDAR

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {

  calendarDays.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYear.innerHTML = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  // Empty spaces

  for(let i = 0; i < firstDay; i++) {

    const emptyDiv = document.createElement("div");

    emptyDiv.classList.add("empty");

    calendarDays.appendChild(emptyDiv);
  }

  // Dates

  for(let day = 1; day <= lastDate; day++) {

    const dayDiv = document.createElement("div");

    dayDiv.innerHTML = day;

    const today = new Date();

    if(
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    calendarDays.appendChild(dayDiv);
  }
}

prevMonth.addEventListener("click", () => {

  currentDate.setMonth(currentDate.getMonth() - 1);

  renderCalendar();
});

nextMonth.addEventListener("click", () => {

  currentDate.setMonth(currentDate.getMonth() + 1);

  renderCalendar();
});

renderCalendar();

// ================= CLOCK =================
function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  document.getElementById("date").textContent =
    now.toLocaleDateString("en-US", options);
}

setInterval(updateClock, 1000);
updateClock();


// ================= CALENDAR =================
let currentDate = new Date();

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  monthYear.textContent = `${monthNames[month]} ${year}`;

  calendarDays.innerHTML = "";

  // empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarDays.appendChild(empty);
  }

  // actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.textContent = day;

    // highlight today
    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.style.background = "#38bdf8";
      cell.style.color = "#000";
      cell.style.fontWeight = "bold";
    }

    calendarDays.appendChild(cell);
  }
}

// navigation
function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

// init
renderCalendar();