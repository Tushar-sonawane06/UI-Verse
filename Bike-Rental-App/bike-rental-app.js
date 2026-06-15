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
      "🚴 Searching for: " +
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
    "🔔 You have 3 new ride notifications."
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
    "⚡ Redirecting to bike rental page."
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
    "🗺 Opening nearby station map."
  );

});

/* ================= RENT BUTTONS ================= */

const rentButtons =
document.querySelectorAll(
".rent-btn"
);

rentButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Booked";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Rent";

      btn.style.opacity = "1";

    },2000);

  });

});

/* ================= STATION BUTTONS ================= */

const stationButtons =
document.querySelectorAll(
".station-btn"
);

stationButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📍 Navigation started."
    );

  });

});

/* ================= BIKE CARD HOVER EFFECT ================= */

const bikeCards =
document.querySelectorAll(
".bike-card"
);

bikeCards.forEach(card => {

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


// ===============================
// RIDEGO BIKE RENTAL APP
// ===============================

// ---------- SIDEBAR ACTIVE MENU ----------

const navLinks = document.querySelectorAll(".sidebar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });
});

// ---------- SEARCH FUNCTION ----------

const searchInput = document.querySelector(".search-box input");
const bikeCards = document.querySelectorAll(".bike-card");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  bikeCards.forEach((card) => {

    const bikeName = card.querySelector("h3").textContent.toLowerCase();

    if (bikeName.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

// ---------- RENT BUTTON ----------

const rentButtons = document.querySelectorAll(".rent-btn");

rentButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const bikeCard = button.closest(".bike-card");
    const bikeName = bikeCard.querySelector("h3").textContent;

    button.innerHTML = "Booked ✓";
    button.style.background =
      "linear-gradient(135deg,#20c997,#16a085)";

    button.disabled = true;

    showToast(`${bikeName} booked successfully 🚴`);

  });

});

// ---------- HERO BUTTONS ----------

const rentHeroBtn = document.querySelector(".primary-btn");
const mapHeroBtn = document.querySelector(".secondary-btn");

rentHeroBtn.addEventListener("click", () => {

  window.scrollTo({
    top: document.querySelector(".bike-section").offsetTop - 40,
    behavior: "smooth"
  });

});

mapHeroBtn.addEventListener("click", () => {

  showToast("Opening nearby stations map 📍");

});

// ---------- NOTIFICATION BUTTON ----------

const notificationBtn = document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

  showToast("You have 3 new ride updates 🔔");

});

// ---------- NAVIGATE BUTTONS ----------

const stationButtons = document.querySelectorAll(".station-btn");

stationButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const station =
      button.parentElement.querySelector("h3").textContent;

    showToast(`Navigation started to ${station}`);

  });

});

// ---------- FLOATING ANIMATION ----------

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

  card.animate(
    [
      {
        transform: "translateY(0px)"
      },
      {
        transform: "translateY(-10px)"
      },
      {
        transform: "translateY(0px)"
      }
    ],
    {
      duration: 2500 + index * 400,
      iterations: Infinity
    }
  );

});

// ---------- LIVE STATS COUNTER ----------

const statNumbers = document.querySelectorAll(".stat-card h2");

function animateCounter(element, target, suffix = "") {

  let current = 0;

  const increment = target / 80;

  const counter = setInterval(() => {

    current += increment;

    if (current >= target) {

      current = target;
      clearInterval(counter);

    }

    element.textContent =
      Math.floor(current) + suffix;

  }, 20);

}

// Initial stats animation

window.addEventListener("load", () => {

  animateCounter(statNumbers[0], 124);
  animateCounter(statNumbers[1], 24);
  animateCounter(statNumbers[2], 8.5, "K");
  animateCounter(statNumbers[3], 98, "%");

});

// ---------- DARK GLOW EFFECT ----------

document.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.background = `
    radial-gradient(circle at ${x * 100}% ${y * 100}%,
    rgba(124,92,255,0.18),
    transparent 20%),
    radial-gradient(circle at bottom right,
    #111936 0%,
    transparent 25%),
    #0b1020
  `;

});

// ---------- TOAST SYSTEM ----------

function showToast(message) {

  const toast = document.createElement("div");

  toast.className = "toast-message";

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    ${message}
  `;

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

// ---------- TOAST STYLE ----------

const toastStyle = document.createElement("style");

toastStyle.innerHTML = `

.toast-message{
  position:fixed;
  bottom:30px;
  right:30px;
  background:rgba(19,27,51,0.95);
  color:#fff;
  border:1px solid rgba(255,255,255,0.08);
  padding:16px 22px;
  border-radius:18px;
  display:flex;
  align-items:center;
  gap:12px;
  font-weight:600;
  z-index:9999;
  opacity:0;
  transform:translateY(20px);
  transition:0.4s ease;
  backdrop-filter:blur(16px);
  box-shadow:0 15px 40px rgba(0,0,0,0.35);
}

.toast-message.show{
  opacity:1;
  transform:translateY(0);
}

.toast-message i{
  color:#20c997;
}

`;

document.head.appendChild(toastStyle);

// ---------- BIKE CARD HOVER 3D EFFECT ----------

bikeCards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";

  });

});

// ---------- LIVE CLOCK ----------

const topbar = document.querySelector(".topbar");

const clock = document.createElement("div");

clock.className = "live-clock";

topbar.appendChild(clock);

const clockStyle = document.createElement("style");

clockStyle.innerHTML = `

.live-clock{
  background:rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.08);
  padding:12px 18px;
  border-radius:16px;
  font-weight:700;
  color:#fff;
  backdrop-filter:blur(12px);
}

`;

document.head.appendChild(clockStyle);

function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  clock.textContent = `🕒 ${time}`;

}

setInterval(updateClock, 1000);

updateClock();

// ---------- LOADING EFFECT ----------

window.addEventListener("load", () => {

  document.body.style.opacity = "0";

  setTimeout(() => {

    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "1";

  }, 100);

});

// ---------- KEYBOARD SHORTCUT ----------

document.addEventListener("keydown", (e) => {

  // Press "/" to focus search

  if (e.key === "/") {

    e.preventDefault();
    searchInput.focus();

  }

});

// ---------- RANDOM BIKE AVAILABILITY ----------

const bikeStatus = [
  "Available",
  "Limited",
  "Fast Booking"
];

bikeCards.forEach((card) => {

  const status = document.createElement("span");

  status.className = "bike-status";

  status.textContent =
    bikeStatus[
      Math.floor(Math.random() * bikeStatus.length)
    ];

  card.appendChild(status);

});

const statusStyle = document.createElement("style");

statusStyle.innerHTML = `

.bike-status{
  position:absolute;
  top:18px;
  right:18px;
  background:rgba(255,255,255,0.1);
  border:1px solid rgba(255,255,255,0.12);
  padding:8px 12px;
  border-radius:999px;
  font-size:0.8rem;
  font-weight:700;
  backdrop-filter:blur(10px);
}

`;

document.head.appendChild(statusStyle);