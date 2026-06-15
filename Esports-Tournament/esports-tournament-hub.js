/* SEARCH */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🎮 Searching: " +
      searchInput.value
    );

  }

});

/* NOTIFICATION */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 12 new tournament updates!"
  );

});

/* HERO BUTTONS */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "⚡ Joining tournament..."
  );

});

const secondaryBtn =
document.querySelector(
".secondary-btn"
);

secondaryBtn.addEventListener(
"click",
() => {

  alert(
    "📺 Opening live streams..."
  );

});

/* HOST BUTTON */

const hostBtn =
document.querySelector(
".profile-card button"
);

hostBtn.addEventListener(
"click",
() => {

  alert(
    "🏆 Creating new tournament..."
  );

});

/* JOIN BUTTONS */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Joined";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Join";

      btn.style.opacity = "1";

    },2000);

  });

});

/* WATCH */

const watchButtons =
document.querySelectorAll(
".watch-btn"
);

watchButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📡 Streaming live match..."
    );

  });

});

/* CARD GLOW EFFECT */

const cards =
document.querySelectorAll(
".tournament-card"
);

cards.forEach(card => {

  card.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(139,92,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

// script.js

const targetDate = new Date("December 31, 2026 23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);

    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
  }
}

const timer = setInterval(updateCountdown, 1000);

updateCountdown();

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

  });

});

// Button Animation

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });

});

// esports-tournament.js

const targetDate = new Date("December 31, 2026 23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {

  const now = new Date().getTime();

  const distance = targetDate - now;

  if (distance < 0) {

    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";

    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  daysEl.innerText = String(days).padStart(2, "0");
  hoursEl.innerText = String(hours).padStart(2, "0");
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);