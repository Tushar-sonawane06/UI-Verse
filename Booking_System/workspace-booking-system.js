/* ================= SEARCH ================= */

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

/* ================= NOTIFICATION ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 5 new workspace updates."
  );

});

/* ================= HERO BUTTONS ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "🏢 Booking workspace panel opened."
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
    "📍 Exploring available offices."
  );

});

/* ================= BOOK BUTTONS ================= */

const bookButtons =
document.querySelectorAll(
".book-btn"
);

bookButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Booked";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Book";

      btn.style.opacity = "1";

    },2000);

  });

});

/* ================= JOIN BUTTONS ================= */

const joinButtons =
document.querySelectorAll(
".join-btn"
);

joinButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎥 Joining workspace meeting."
    );

  });

});

/* ================= CARD HOVER EFFECT ================= */

const workspaceCards =
document.querySelectorAll(
".workspace-card"
);

workspaceCards.forEach(card => {

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


// ==============================
// SIDEBAR ACTIVE MENU
// ==============================

const navLinks = document.querySelectorAll(".sidebar-nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

// ==============================
// SEARCH FUNCTION
// ==============================

const searchInput =
  document.querySelector(".search-box input");

const workspaceCards =
  document.querySelectorAll(".workspace-card");

searchInput.addEventListener("keyup", () => {

  const value =
    searchInput.value.toLowerCase();

  workspaceCards.forEach(card => {

    const title =
      card.querySelector("h3")
      .textContent
      .toLowerCase();

    const desc =
      card.querySelector("p")
      .textContent
      .toLowerCase();

    if (
      title.includes(value) ||
      desc.includes(value)
    ) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});

// ==============================
// BOOK BUTTON INTERACTION
// ==============================

const bookButtons =
  document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.innerHTML =
      '<i class="fa-solid fa-check"></i> Booked';

    button.style.background =
      "linear-gradient(135deg,#10b981,#059669)";

    button.disabled = true;

  });

});

// ==============================
// JOIN BUTTON INTERACTION
// ==============================

const joinButtons =
  document.querySelectorAll(".join-btn");

joinButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.innerHTML =
      '<i class="fa-solid fa-video"></i> Joining';

    button.style.background =
      "linear-gradient(135deg,#3b82f6,#2563eb)";

    setTimeout(() => {

      button.innerHTML =
        '<i class="fa-solid fa-check"></i> Joined';

    }, 1500);

  });

});

// ==============================
// NOTIFICATION BUTTON
// ==============================

const notificationBtn =
  document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

  createToast(
    "🔔 You have 3 new workspace updates"
  );

});

// ==============================
// TOAST NOTIFICATION
// ==============================

function createToast(message) {

  const toast =
    document.createElement("div");

  toast.classList.add("toast");

  toast.innerHTML = message;

  document.body.appendChild(toast);

  setTimeout(() => {

    toast.classList.add("show");

  }, 100);

  setTimeout(() => {

    toast.classList.remove("show");

    setTimeout(() => {

      toast.remove();

    }, 400);

  }, 3000);

}

// ==============================
// HERO BUTTONS
// ==============================

const primaryBtn =
  document.querySelector(".primary-btn");

const secondaryBtn =
  document.querySelector(".secondary-btn");

primaryBtn.addEventListener("click", () => {

  createToast(
    "🚀 Redirecting to workspace booking..."
  );

});

secondaryBtn.addEventListener("click", () => {

  createToast(
    "🏢 Loading available offices..."
  );

});

// ==============================
// LIVE CLOCK
// ==============================

const topbar =
  document.querySelector(".topbar");

const clock =
  document.createElement("div");

clock.classList.add("live-clock");

topbar.appendChild(clock);

function updateClock() {

  const now = new Date();

  const time =
    now.toLocaleTimeString([], {

      hour: "2-digit",
      minute: "2-digit"

    });

  clock.innerHTML =
    `<i class="fa-regular fa-clock"></i> ${time}`;

}

updateClock();

setInterval(updateClock, 1000);

// ==============================
// OCCUPANCY ANIMATION
// ==============================

const occupancyCard =
  document.querySelector(".green h2");

let count = 0;

const target = 92;

const counter = setInterval(() => {

  count++;

  occupancyCard.textContent =
    count + "%";

  if (count >= target) {

    clearInterval(counter);

  }

}, 20);

// ==============================
// FLOATING EFFECT
// ==============================

const floatingCards =
  document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

  card.style.animationDelay =
    `${index * 0.4}s`;

});

// ==============================
// DARK / LIGHT TOGGLE
// ==============================

const toggleBtn =
  document.createElement("button");

toggleBtn.classList.add("theme-toggle");

toggleBtn.innerHTML =
  '<i class="fa-solid fa-moon"></i>';

document.body.appendChild(toggleBtn);

let darkMode = true;

toggleBtn.addEventListener("click", () => {

  darkMode = !darkMode;

  if (!darkMode) {

    document.documentElement.style.setProperty(
      "--bg",
      "#f4f7fb"
    );

    document.documentElement.style.setProperty(
      "--card",
      "rgba(255,255,255,0.85)"
    );

    document.documentElement.style.setProperty(
      "--white",
      "#111827"
    );

    document.documentElement.style.setProperty(
      "--text-light",
      "#4b5563"
    );

    toggleBtn.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    document.documentElement.style.setProperty(
      "--bg",
      "#0f172a"
    );

    document.documentElement.style.setProperty(
      "--card",
      "rgba(255,255,255,0.06)"
    );

    document.documentElement.style.setProperty(
      "--white",
      "#ffffff"
    );

    document.documentElement.style.setProperty(
      "--text-light",
      "#b7bfd4"
    );

    toggleBtn.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

});

// ==============================
// SCROLL ANIMATION
// ==============================

const revealElements =
  document.querySelectorAll(
    ".workspace-card, .stat-card, .booking-item"
  );

function revealOnScroll() {

  const trigger =
    window.innerHeight * 0.9;

  revealElements.forEach(element => {

    const top =
      element.getBoundingClientRect().top;

    if (top < trigger) {

      element.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// ==============================
// RANDOM LIVE USERS
// ==============================

const memberCard =
  document.querySelector(".pink h2");

setInterval(() => {

  const random =
    Math.floor(Math.random() * 10);

  memberCard.textContent =
    320 + random;

}, 5000);

// ==============================
// AUTO GREETING
// ==============================

window.addEventListener("load", () => {

  setTimeout(() => {

    createToast(
      "👋 Welcome back Sarah! Ready to book your workspace?"
    );

  }, 1000);

});

// ==============================
// KEYBOARD SHORTCUT
// ==============================

document.addEventListener("keydown", e => {

  if (e.key === "/") {

    e.preventDefault();

    searchInput.focus();

  }

});

// ==============================
// PARALLAX HERO EFFECT
// ==============================

document.addEventListener("mousemove", e => {

  const heroVisual =
    document.querySelector(".workspace-circle");

  const x =
    (window.innerWidth / 2 - e.pageX) / 30;

  const y =
    (window.innerHeight / 2 - e.pageY) / 30;

  heroVisual.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ==============================
// DYNAMIC DATE
// ==============================

const dateElement =
  document.createElement("div");

dateElement.classList.add("live-date");

const options = {

  weekday: "long",
  month: "short",
  day: "numeric"

};

dateElement.innerHTML =
  `<i class="fa-regular fa-calendar"></i>
   ${new Date().toLocaleDateString("en-US", options)}`;

topbar.appendChild(dateElement);

// ================= BOOKING MODAL =================
const modal = document.getElementById("bookingModal");

document.querySelectorAll(".book-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// ================= NOTIFICATION PANEL =================
const bell = document.querySelector(".notification-btn");
const panel = document.getElementById("notificationPanel");

bell.addEventListener("click", () => {
  panel.classList.toggle("active");
});


// ================= SEARCH FILTER =================
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll(".workspace-card").forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});