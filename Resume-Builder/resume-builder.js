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
      "🔍 Searching template: " +
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
    "🔔 Resume tips and updates available."
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
    "✨ Creating a new resume."
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
    "📄 Opening resume preview."
  );

});

/* TEMPLATE BUTTONS */

const templateButtons =
document.querySelectorAll(
".use-btn"
);

templateButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    "Selected";

    btn.style.opacity = "0.7";

    setTimeout(() => {

      btn.innerHTML =
      "Use Template";

      btn.style.opacity = "1";

    },2000);

  });

});

/* DOWNLOAD BUTTON */

const downloadBtn =
document.querySelector(
".user-card button"
);

downloadBtn.addEventListener(
"click",
() => {

  alert(
    "⬇️ Downloading resume PDF..."
  );

});

/* CARD GLOW EFFECT */

const templateCards =
document.querySelectorAll(
".template-card"
);

templateCards.forEach(card => {

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

// ================= SIDEBAR ACTIVE LINK =================

const navLinks = document.querySelectorAll(".sidebar-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });
});

// ================= SEARCH FILTER =================

const searchInput = document.querySelector(".search-box input");
const templateCards = document.querySelectorAll(".template-card");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  templateCards.forEach(card => {

    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

// ================= NOTIFICATION BUTTON =================

const notificationBtn = document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

  alert("🔔 No new notifications right now!");

});

// ================= CREATE RESUME BUTTON =================

const createBtn = document.querySelector(".primary-btn");

createBtn.addEventListener("click", () => {

  alert("✨ Resume creation started!");

});

// ================= PREVIEW BUTTON =================

const previewBtn = document.querySelector(".secondary-btn");

previewBtn.addEventListener("click", () => {

  alert("📄 Opening resume preview...");

});

// ================= SAVE DRAFT =================

const saveDraftBtn = document.querySelector(".form-section .section-header button");

saveDraftBtn.addEventListener("click", () => {

  alert("💾 Draft saved successfully!");

});

// ================= TEMPLATE BUTTONS =================

const useButtons = document.querySelectorAll(".use-btn");

useButtons.forEach(button => {

  button.addEventListener("click", () => {

    const templateName =
      button.parentElement.querySelector("h3").innerText;

    alert(`🎨 ${templateName} selected successfully!`);

  });

});

// ================= DOWNLOAD RESUME =================

const downloadBtn = document.querySelector(".user-card button");

downloadBtn.addEventListener("click", () => {

  alert("⬇️ Downloading your resume PDF...");

});

// ================= SKILL ADD BUTTON =================

const addSkillBtn =
  document.querySelector(".skills-section .section-header button");

const skillsGrid =
  document.querySelector(".skills-grid");

addSkillBtn.addEventListener("click", () => {

  const skill = prompt("Enter a new skill:");

  if (skill && skill.trim() !== "") {

    const chip = document.createElement("div");

    chip.classList.add("skill-chip");

    chip.innerText = skill;

    skillsGrid.appendChild(chip);

  }

});

// ================= EXPERIENCE BUTTON =================

const expBtn =
  document.querySelector(".experience-section .section-header button");

expBtn.addEventListener("click", () => {

  alert("➕ Add new work experience form opened!");

});

// ================= EDUCATION BUTTON =================

const eduBtn =
  document.querySelector(".education-section .section-header button");

eduBtn.addEventListener("click", () => {

  alert("🎓 Add education details!");

});

// ================= CERTIFICATION BUTTON =================

const certBtn =
  document.querySelector(".certification-section .section-header button");

certBtn.addEventListener("click", () => {

  alert("🏆 Add a new certification!");

});

// ================= IMPORT RESUME =================

const importBtn =
  document.querySelector(".action-card button");

importBtn.addEventListener("click", () => {

  alert("📂 Resume import feature coming soon!");

});

// ================= AI SUGGESTIONS =================

const aiBtn =
  document.querySelectorAll(".action-card button")[1];

aiBtn.addEventListener("click", () => {

  alert("🤖 AI suggestions generated successfully!");

});

// ================= SHARE RESUME =================

const shareBtn =
  document.querySelectorAll(".action-card button")[2];

shareBtn.addEventListener("click", () => {

  navigator.clipboard.writeText(
    "https://resumepro-demo.vercel.app/my-resume"
  );

  alert("🔗 Resume link copied to clipboard!");

});

// ================= LIVE ATS SCORE ANIMATION =================

const scoreCircle =
  document.querySelector(".score-circle");

let score = 0;

const interval = setInterval(() => {

  if (score >= 92) {

    clearInterval(interval);

  } else {

    score++;

    scoreCircle.innerText = score + "%";

  }

}, 20);

// ================= FORM AUTO SAVE =================

const formInputs =
  document.querySelectorAll(".form-grid input, .form-grid textarea");

formInputs.forEach(input => {

  input.addEventListener("input", () => {

    localStorage.setItem(
      input.placeholder,
      input.value
    );

  });

});

// ================= LOAD SAVED DATA =================

window.addEventListener("DOMContentLoaded", () => {

  formInputs.forEach(input => {

    const saved =
      localStorage.getItem(input.placeholder);

    if (saved) {
      input.value = saved;
    }

  });

});

// ================= ACTIVITY LOG =================

const activityList =
  document.querySelector(".activity-list");

function addActivity(message) {

  const item = document.createElement("div");

  item.classList.add("activity-item");

  item.innerHTML = `
    <i class="fa-solid fa-clock"></i>
    ${message}
  `;

  activityList.prepend(item);

}

// Example logs

addActivity("Opened Resume Builder");
addActivity("Viewed dashboard successfully");

// ================= DARK MODE TOGGLE =================

const darkModeBtn = document.createElement("button");

darkModeBtn.innerHTML =
  '<i class="fa-solid fa-moon"></i>';

darkModeBtn.classList.add("notification-btn");

document.querySelector(".top-actions")
  .appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

// ================= SCROLL ANIMATION =================

const animatedSections =
  document.querySelectorAll(
    ".quick-actions, .skills-section, .experience-section, .education-section, .certification-section, .testimonial-section"
  );

window.addEventListener("scroll", () => {

  animatedSections.forEach(section => {

    const sectionTop =
      section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

      section.style.opacity = "1";
      section.style.transform = "translateY(0)";

    }

  });

});

// Initial hidden state

animatedSections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";

});