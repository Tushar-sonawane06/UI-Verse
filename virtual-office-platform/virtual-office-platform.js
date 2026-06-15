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
      "🔍 Searching workspace: " +
      searchInput.value
    );

  }

});

/* NOTIFICATIONS */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 6 unread notifications."
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
    "🏢 Joining virtual workspace..."
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
    "📊 Opening productivity analytics."
  );

});

/* USER CARD BUTTON */

const meetingBtn =
document.querySelector(
".user-card button"
);

meetingBtn.addEventListener(
"click",
() => {

  alert(
    "📹 Starting a new meeting..."
  );

});

/* OPEN TEAM */

const manageButtons =
document.querySelectorAll(
".manage-btn"
);

manageButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Opened";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Open";

      btn.style.opacity = "1";

    },2000);

  });

});

/* JOIN MEETING */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎥 Joining meeting room..."
    );

  });

});

/* CARD GLOW EFFECT */

const teamCards =
document.querySelectorAll(
".team-card"
);

teamCards.forEach(card => {

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

// LIVE CLOCK

function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString();

  document.getElementById("liveClock").textContent = time;

}

setInterval(updateClock, 1000);

updateClock();

// THEME TOGGLE

const themeToggle = document.querySelector(".theme-toggle");

let darkMode = true;

themeToggle.addEventListener("click", () => {

  darkMode = !darkMode;

  if (!darkMode) {

    document.documentElement.style.setProperty("--bg", "#f1f5f9");
    document.documentElement.style.setProperty("--text", "#0f172a");
    document.documentElement.style.setProperty("--surface", "rgba(15,23,42,0.08)");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    document.documentElement.style.setProperty("--bg", "#0f172a");
    document.documentElement.style.setProperty("--text", "#ffffff");
    document.documentElement.style.setProperty("--surface", "rgba(255,255,255,0.08)");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

});

// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.96)";

    setTimeout(() => {

      button.style.transform = "scale(1)";

    }, 150);

  });

});