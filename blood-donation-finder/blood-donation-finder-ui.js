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
      "🩸 Searching Blood Group: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const donorBtn =
document.querySelector(
".donor-btn"
);

const requestBtn =
document.querySelector(
".request-btn"
);

donorBtn.addEventListener(
"click",
() => {

  alert(
    "❤️ Finding Nearby Donors..."
  );

});

requestBtn.addEventListener(
"click",
() => {

  alert(
    "🚨 Emergency Blood Request Sent!"
  );

});

/* DONOR BUTTONS */

const cardBtns =
document.querySelectorAll(
".card-btn"
);

cardBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📞 Connecting To Donor..."
    );

  });

});

/* EMERGENCY CARD */

const emergencyBtn =
document.querySelector(
".emergency-card button"
);

emergencyBtn.addEventListener(
"click",
() => {

  alert(
    "🚑 Opening Emergency Blood Request..."
  );

});

/* COMMUNITY BUTTON */

const communityBtn =
document.querySelector(
".community-card button"
);

communityBtn.addEventListener(
"click",
() => {

  alert(
    "❤️ Appreciation Sent To Donor!"
  );

});

/* SIDEBAR ACTIVE */

const links =
document.querySelectorAll(
".sidebar-nav a"
);

links.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    links.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});

/* DONOR CARD GLOW */

const cards =
document.querySelectorAll(
".donor-card"
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
    rgba(239,68,68,0.25),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

document.querySelectorAll(".donor button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Contact request sent to donor!");
  });
});

document.querySelector(".primary").addEventListener("click", () => {
  alert("Searching nearby donors...");
});

document.querySelector(".secondary").addEventListener("click", () => {
  alert("Emergency request initiated!");
});

// ===============================
// BLOOD DONATION FINDER UI JS
// ===============================

// SEARCH FUNCTIONALITY

const searchInput = document.querySelector(".search-box input");
const donorCards = document.querySelectorAll(".donor-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  donorCards.forEach((card) => {
    const donorName = card
      .querySelector("h3")
      .textContent.toLowerCase();

    const bloodGroup = card
      .querySelector(".blood-tag")
      .textContent.toLowerCase();

    if (
      donorName.includes(value) ||
      bloodGroup.includes(value)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// ===============================
// CONTACT DONOR BUTTONS
// ===============================

const contactButtons =
  document.querySelectorAll(".card-btn");

contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const donorCard =
      button.closest(".donor-card");

    const donorName =
      donorCard.querySelector("h3").textContent;

    const bloodType =
      donorCard.querySelector(".blood-tag").textContent;

    showNotification(
      `📞 Contact request sent to ${donorName} (${bloodType})`
    );
  });
});

// ===============================
// EMERGENCY REQUEST BUTTONS
// ===============================

const emergencyBtn = document.querySelector(
  ".emergency-card button"
);

const requestBtn =
  document.querySelector(".request-btn");

function handleEmergencyRequest() {
  showNotification(
    "🚨 Emergency blood request has been submitted successfully!"
  );
}

emergencyBtn.addEventListener(
  "click",
  handleEmergencyRequest
);

requestBtn.addEventListener(
  "click",
  handleEmergencyRequest
);

// ===============================
// FIND DONOR BUTTON
// ===============================

const donorBtn =
  document.querySelector(".donor-btn");

donorBtn.addEventListener("click", () => {
  document
    .querySelector(".donor-section")
    .scrollIntoView({
      behavior: "smooth",
    });

  showNotification(
    "🩸 Showing nearby blood donors..."
  );
});

// ===============================
// VIEW ALL BUTTON
// ===============================

const viewAllBtn =
  document.querySelector(".section-header button");

viewAllBtn.addEventListener("click", () => {
  showNotification(
    "📋 Loading all registered donors..."
  );
});

// ===============================
// APPRECIATE DONOR BUTTON
// ===============================

const appreciateBtn =
  document.querySelector(".community-card button");

appreciateBtn.addEventListener("click", () => {
  showNotification(
    "❤️ Appreciation sent to Emma Wilson!"
  );
});

// ===============================
// ACTIVE SIDEBAR NAVIGATION
// ===============================

const navLinks =
  document.querySelectorAll(".sidebar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) =>
      item.classList.remove("active")
    );

    link.classList.add("active");
  });
});

// ===============================
// LIVE BLOOD COUNTER ANIMATION
// ===============================

const bloodCounters =
  document.querySelectorAll(".group p");

bloodCounters.forEach((counter) => {
  const finalValue = parseInt(counter.textContent);

  let startValue = 0;

  const updateCounter = () => {
    startValue += 2;

    if (startValue >= finalValue) {
      counter.textContent =
        finalValue + " Donors";
    } else {
      counter.textContent =
        startValue + " Donors";

      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
});

// ===============================
// STAT CARD HOVER EFFECT
// ===============================

const statCards =
  document.querySelectorAll(".stat-card");

statCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform =
      "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "translateY(0px) scale(1)";
  });
});

// ===============================
// NOTIFICATION SYSTEM
// ===============================

function showNotification(message) {
  const notification =
    document.createElement("div");

  notification.className = "notification";

  notification.innerHTML = `
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");

    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 3000);
}

// ===============================
// CREATE NOTIFICATION STYLE
// ===============================

const style =
  document.createElement("style");

style.innerHTML = `
  .notification {
    position: fixed;
    top: 30px;
    right: -400px;
    background: linear-gradient(
      135deg,
      #ff4d6d,
      #7c3aed
    );
    color: white;
    padding: 16px 24px;
    border-radius: 18px;
    font-weight: 600;
    box-shadow: 0 12px 30px rgba(0,0,0,0.3);
    z-index: 9999;
    transition: 0.5s ease;
    backdrop-filter: blur(12px);
  }

  .notification.show {
    right: 30px;
  }

  @media (max-width: 600px) {
    .notification {
      width: calc(100% - 40px);
      right: -120%;
      font-size: 0.9rem;
    }

    .notification.show {
      right: 20px;
    }
  }
`;

document.head.appendChild(style);

// ===============================
// HERO BUTTON ANIMATION
// ===============================

const heroButtons =
  document.querySelectorAll(".hero-buttons button");

heroButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.boxShadow =
      "0 12px 30px rgba(255,77,109,0.35)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "none";
  });
});

// ===============================
// RANDOM LIVE STATUS UPDATE
// ===============================

const statusText =
  document.querySelector(".status-header p");

const statuses = [
  "Nearby Donor Network",
  "Emergency Response Active",
  "Live Blood Tracking",
  "24/7 Donor Availability",
  "Real-Time Blood Support",
];

setInterval(() => {
  const random =
    statuses[
      Math.floor(
        Math.random() * statuses.length
      )
    ];

  statusText.textContent = random;
}, 4000);

// ===============================
// PAGE LOAD ANIMATION
// ===============================

window.addEventListener("load", () => {
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.style.transition =
      "opacity 0.8s ease";

    document.body.style.opacity = "1";
  }, 100);

  showNotification(
    "🩸 Welcome to LifeFlow Blood Donation Finder"
  );
});