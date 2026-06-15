/* SEARCH */

const searchBtn =
document.querySelector(
".search-btn"
);

searchBtn.addEventListener(
"click",
() => {

  alert(
    "🎵 Searching Concert Events..."
  );

});

/* HERO BUTTONS */

const heroButtons =
document.querySelectorAll(
".hero-buttons button"
);

heroButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      `🎤 ${btn.innerText} clicked`
    );

  });

});

/* EVENT TICKETS */

const ticketButtons =
document.querySelectorAll(
".ticket-btn"
);

ticketButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎫 Redirecting to Ticket Booking..."
    );

  });

});

/* DOWNLOAD */

const downloadBtn =
document.querySelector(
".download-btn"
);

downloadBtn.addEventListener(
"click",
() => {

  alert(
    "📥 Downloading Ticket..."
  );

});

/* EVENT CARD GLOW */

const cards =
document.querySelectorAll(
".event-card"
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
    rgba(236,72,153,0.25),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* NAVBAR SCROLL */

window.addEventListener(
"scroll",
() => {

  const navbar =
  document.querySelector(
  ".navbar"
  );

  if(window.scrollY > 60){

    navbar.style.background =
    "rgba(2,6,23,0.9)";

    navbar.style.backdropFilter =
    "blur(14px)";
  }

  else{

    navbar.style.background =
    "transparent";
  }

});

// ================================
// SOUNDWAVE CONCERT BOOKING SYSTEM
// ================================

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(5, 8, 22, 0.92)";

    navbar.style.boxShadow =
      "0 10px 40px rgba(0,0,0,0.35)";

  }

  else {

    navbar.style.background =
      "rgba(5, 8, 22, 0.7)";

    navbar.style.boxShadow = "none";

  }

});

// ====================================
// HERO BUTTON INTERACTIONS
// ====================================

const exploreBtn =
  document.querySelector(".hero-buttons .primary-btn");

const watchBtn =
  document.querySelector(".hero-buttons .secondary-btn");

exploreBtn.addEventListener("click", () => {

  document.querySelector(".events-section")
    .scrollIntoView({
      behavior: "smooth"
    });

});

watchBtn.addEventListener("click", () => {

  alert(
    "🎬 Concert trailer coming soon!"
  );

});

// ====================================
// SEARCH FUNCTIONALITY
// ====================================

const searchBtn =
  document.querySelector(".search-btn");

const cityInput =
  document.querySelectorAll(".search-input input")[0];

const dateInput =
  document.querySelectorAll(".search-input input")[1];

const genreInput =
  document.querySelectorAll(".search-input input")[2];

searchBtn.addEventListener("click", () => {

  const city = cityInput.value.trim();
  const date = dateInput.value;
  const genre = genreInput.value.trim();

  if (!city || !date || !genre) {

    showToast(
      "⚠️ Please fill all search fields"
    );

    return;

  }

  showToast(
    `🎵 Searching concerts in ${city}`
  );

  console.log({
    city,
    date,
    genre
  });

});

// ====================================
// EVENT BOOKING SYSTEM
// ====================================

const ticketButtons =
  document.querySelectorAll(".ticket-btn");

ticketButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const card =
      button.closest(".event-card");

    const title =
      card.querySelector("h3").innerText;

    const price =
      card.querySelector(".event-meta span:last-child")
      .innerText;

    const date =
      card.querySelector(".event-date").innerText;

    openBookingModal(
      title,
      date,
      price
    );

  });

});

// ====================================
// BOOKING MODAL
// ====================================

function openBookingModal(
  title,
  date,
  price
) {

  const existingModal =
    document.querySelector(".booking-modal");

  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");

  modal.classList.add("booking-modal");

  modal.innerHTML = `

    <div class="modal-content">

      <button class="close-modal">
        ✖
      </button>

      <h2>
        🎟 Confirm Your Booking
      </h2>

      <div class="booking-details">

        <p>
          <strong>Concert:</strong>
          ${title}
        </p>

        <p>
          <strong>Date:</strong>
          ${date}
        </p>

        <p>
          <strong>Price:</strong>
          ${price}
        </p>

      </div>

      <div class="ticket-quantity">

        <button class="qty-minus">
          -
        </button>

        <span class="qty-value">
          1
        </span>

        <button class="qty-plus">
          +
        </button>

      </div>

      <button class="confirm-booking">
        Confirm Booking
      </button>

    </div>

  `;

  document.body.appendChild(modal);

  document.body.style.overflow = "hidden";

  // Quantity Logic

  let quantity = 1;

  const qtyValue =
    modal.querySelector(".qty-value");

  modal.querySelector(".qty-plus")
    .addEventListener("click", () => {

      quantity++;

      qtyValue.innerText = quantity;

    });

  modal.querySelector(".qty-minus")
    .addEventListener("click", () => {

      if (quantity > 1) {

        quantity--;

        qtyValue.innerText = quantity;

      }

    });

  // Close Modal

  modal.querySelector(".close-modal")
    .addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {

    if (e.target === modal) {

      closeModal();

    }

  });

  // Confirm Booking

  modal.querySelector(".confirm-booking")
    .addEventListener("click", () => {

      showToast(
        `✅ ${quantity} Ticket(s) Booked Successfully!`
      );

      closeModal();

      updateStats();

    });

}

// ====================================
// CLOSE MODAL
// ====================================

function closeModal() {

  const modal =
    document.querySelector(".booking-modal");

  if (modal) {

    modal.remove();

    document.body.style.overflow = "auto";

  }

}

// ====================================
// DOWNLOAD TICKET
// ====================================

const downloadBtn =
  document.querySelector(".download-btn");

downloadBtn.addEventListener("click", () => {

  const ticketText = `
🎵 SOUNDWAVE VIP PASS

Event: Neon Lights Festival
Date: 28 AUG 2026
Venue: New York Arena

Status: CONFIRMED
`;

  const blob = new Blob(
    [ticketText],
    { type: "text/plain" }
  );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    "soundwave-ticket.txt";

  link.click();

  showToast(
    "🎫 Ticket Downloaded!"
  );

});

// ====================================
// STATS COUNTER ANIMATION
// ====================================

const statNumbers =
  document.querySelectorAll(".stat-card h2");

function animateCounter(
  element,
  target,
  suffix = ""
) {

  let count = 0;

  const increment =
    target / 80;

  const update = () => {

    count += increment;

    if (count < target) {

      element.innerText =
        Math.floor(count) + suffix;

      requestAnimationFrame(update);

    }

    else {

      element.innerText =
        target + suffix;

    }

  };

  update();

}

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        statNumbers.forEach((stat, index) => {

          const values = [
            [120, "+"],
            [80, "K+"],
            [50, "+"],
            [4.9, ""]
          ];

          animateCounter(
            stat,
            values[index][0],
            values[index][1]
          );

        });

        observer.disconnect();

      }

    });

  });

observer.observe(
  document.querySelector(".stats-section")
);

// ====================================
// TOAST NOTIFICATION
// ====================================

function showToast(message) {

  const existingToast =
    document.querySelector(".toast");

  if (existingToast) {
    existingToast.remove();
  }

  const toast =
    document.createElement("div");

  toast.classList.add("toast");

  toast.innerText = message;

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

// ====================================
// DYNAMIC LIVE BADGE BLINK
// ====================================

setInterval(() => {

  const badges =
    document.querySelectorAll(".live-badge");

  badges.forEach((badge) => {

    badge.classList.toggle("active-live");

  });

}, 800);

// ====================================
// UPDATE STATS AFTER BOOKING
// ====================================

function updateStats() {

  const soldStat =
    document.querySelectorAll(".stat-card h2")[1];

  let current =
    soldStat.innerText.replace("K+", "");

  current = parseFloat(current);

  current += 1;

  soldStat.innerText =
    current.toFixed(0) + "K+";

}

// ====================================
// PARALLAX EFFECT
// ====================================

window.addEventListener("scroll", () => {

  const hero =
    document.querySelector(".hero");

  let scrollPosition =
    window.pageYOffset;

  hero.style.backgroundPositionY =
    scrollPosition * 0.5 + "px";

});

// ====================================
// KEYBOARD SHORTCUTS
// ====================================

document.addEventListener("keydown", (e) => {

  // ESC closes modal

  if (e.key === "Escape") {

    closeModal();

  }

  // CTRL + K focuses search

  if (e.ctrlKey && e.key === "k") {

    e.preventDefault();

    cityInput.focus();

    showToast(
      "🔍 Search Activated"
    );

  }

});

// ====================================
// CREATE EXTRA STYLES VIA JS
// ====================================

const style =
  document.createElement("style");

style.innerHTML = `

/* =========================
   MODAL
========================= */

.booking-modal {

  position: fixed;
  inset: 0;

  background: rgba(0,0,0,0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  padding: 20px;

  backdrop-filter: blur(10px);

}

.modal-content {

  width: 100%;
  max-width: 500px;

  background:
    linear-gradient(
      135deg,
      #111827,
      #1e293b
    );

  border-radius: 28px;

  padding: 40px;

  position: relative;

  border:
    1px solid rgba(255,255,255,0.08);

  animation:
    popup 0.4s ease;

}

@keyframes popup {

  from {

    transform:
      translateY(40px)
      scale(0.9);

    opacity: 0;

  }

  to {

    transform:
      translateY(0)
      scale(1);

    opacity: 1;

  }

}

.close-modal {

  position: absolute;
  top: 16px;
  right: 16px;

  width: 42px;
  height: 42px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background:
    rgba(255,255,255,0.08);

  color: #fff;
  font-size: 1rem;

}

.modal-content h2 {

  margin-bottom: 30px;
  font-size: 2rem;

}

.booking-details {

  margin-bottom: 30px;

}

.booking-details p {

  margin-bottom: 14px;
  color: #d1d5db;

}

.ticket-quantity {

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 18px;

  margin-bottom: 30px;

}

.ticket-quantity button {

  width: 44px;
  height: 44px;

  border-radius: 12px;
  border: none;

  cursor: pointer;

  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #06b6d4
    );

  color: #fff;
  font-size: 1.2rem;

}

.qty-value {

  font-size: 1.4rem;
  font-weight: 700;

}

.confirm-booking {

  width: 100%;

  padding: 16px;

  border-radius: 16px;
  border: none;

  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #ec4899
    );

  color: #fff;

  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

}

/* =========================
   TOAST
========================= */

.toast {

  position: fixed;
  bottom: 30px;
  right: 30px;

  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #06b6d4
    );

  color: #fff;

  padding: 16px 24px;

  border-radius: 14px;

  font-weight: 600;

  opacity: 0;
  transform: translateY(20px);

  transition: 0.4s ease;

  z-index: 9999;

  box-shadow:
    0 20px 40px rgba(0,0,0,0.35);

}

.toast.show {

  opacity: 1;
  transform: translateY(0);

}

/* =========================
   LIVE BLINK
========================= */

.active-live {

  transform: scale(1.08);

  box-shadow:
    0 0 18px rgba(255,255,255,0.5);

}

`;

document.head.appendChild(style);

// ====================================
// PAGE LOADED
// ====================================

window.addEventListener("load", () => {

  showToast(
    "🎵 Welcome to SoundWave!"
  );

});