/* =====================================================
ELEMENTS
===================================================== */

const overlay =
  document.getElementById(
    "spotlightOverlay"
  );

const openBtn =
  document.getElementById(
    "openSpotlight"
  );

const closeBtn =
  document.getElementById(
    "closeSpotlight"
  );

const spotlightInput =
  document.getElementById(
    "spotlightInput"
  );

/* =====================================================
OPEN MODAL
===================================================== */

function openSpotlight(){

  overlay.classList.add(
    "active"
  );

  spotlightInput.focus();
}

/* =====================================================
CLOSE MODAL
===================================================== */

function closeSpotlight(){

  overlay.classList.remove(
    "active"
  );
}

/* =====================================================
BUTTON EVENTS
===================================================== */

openBtn.addEventListener(
  "click",
  openSpotlight
);

closeBtn.addEventListener(
  "click",
  closeSpotlight
);

/* =====================================================
ESC CLOSE
===================================================== */

document.addEventListener(
  "keydown",
  (e)=>{

    if(
      e.key === "Escape"
    ){

      closeSpotlight();
    }

  }
);

/* =====================================================
CMD + K
===================================================== */

document.addEventListener(
  "keydown",
  (e)=>{

    if(
      (e.ctrlKey || e.metaKey)
      &&
      e.key.toLowerCase() === "k"
    ){

      e.preventDefault();

      openSpotlight();
    }

  }
);

/* =====================================================
OUTSIDE CLICK
===================================================== */

overlay.addEventListener(
  "click",
  (e)=>{

    if(
      e.target === overlay
    ){

      closeSpotlight();
    }

  }
);

/* =====================================================
ACTIVE RESULT
===================================================== */

const results =
  document.querySelectorAll(
    ".result-item"
  );

results.forEach(item=>{

  item.addEventListener(
    "click",
    ()=>{

      results.forEach(r=>
        r.classList.remove(
          "active-item"
        )
      );

      item.classList.add(
        "active-item"
      );

    }
  );

});

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);

/* ==========================================
SPOTLIGHT OPEN / CLOSE
========================================== */

const spotlightOverlay =
  document.getElementById("spotlightOverlay");

const openSpotlightBtn =
  document.getElementById("openSpotlight");

const closeSpotlightBtn =
  document.getElementById("closeSpotlight");

const spotlightInput =
  document.getElementById("spotlightInput");

if (openSpotlightBtn) {
  openSpotlightBtn.addEventListener("click", openSpotlight);
}

if (closeSpotlightBtn) {
  closeSpotlightBtn.addEventListener("click", closeSpotlight);
}

function openSpotlight() {
  spotlightOverlay.classList.add("active");
  spotlightInput?.focus();
}

function closeSpotlight() {
  spotlightOverlay.classList.remove("active");
}

/* ==========================================
KEYBOARD SHORTCUT
⌘K / CTRL+K
========================================== */

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();

    if (spotlightOverlay.classList.contains("active")) {
      closeSpotlight();
    } else {
      openSpotlight();
    }
  }

  if (e.key === "Escape") {
    closeSpotlight();
  }
});

/* ==========================================
CLICK OUTSIDE TO CLOSE
========================================== */

spotlightOverlay?.addEventListener("click", (e) => {
  if (e.target === spotlightOverlay) {
    closeSpotlight();
  }
});

/* ==========================================
AI SUGGESTIONS
========================================== */

const suggestionItems =
  document.querySelectorAll(".suggestion-item");

suggestionItems.forEach((item) => {
  item.addEventListener("click", () => {
    spotlightInput.value =
      item.textContent.trim();

    openSpotlight();

    console.debug(
      "AI Suggestion Selected:",
      item.textContent.trim()
    );
  });
});

/* ==========================================
RECENT SEARCH HISTORY
========================================== */

const historyItems =
  document.querySelectorAll(".history-item");

historyItems.forEach((item) => {
  item.addEventListener("click", () => {

    spotlightInput.value =
      item.textContent.trim();

    openSpotlight();
  });
});

/* ==========================================
KEYBOARD NAVIGATION INSIDE RESULTS
========================================== */

let currentIndex = 0;

function getResults() {
  return document.querySelectorAll(".result-item");
}

function updateSelection(index) {

  const results = getResults();

  results.forEach((item) => {
    item.classList.remove("active-item");
  });

  if (results[index]) {
    results[index].classList.add("active-item");

    results[index].scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    });
  }
}

document.addEventListener("keydown", (e) => {

  if (
    !spotlightOverlay.classList.contains("active")
  ) return;

  const results = getResults();

  if (e.key === "ArrowDown") {

    e.preventDefault();

    currentIndex++;

    if (currentIndex >= results.length) {
      currentIndex = 0;
    }

    updateSelection(currentIndex);
  }

  if (e.key === "ArrowUp") {

    e.preventDefault();

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = results.length - 1;
    }

    updateSelection(currentIndex);
  }

  if (e.key === "Enter") {

    e.preventDefault();

    const selected =
      results[currentIndex];

    if (selected) {

      const title =
        selected.querySelector("strong")
          ?.textContent;

      alert(`Opening: ${title}`);
    }
  }
});

/* ==========================================
LIVE SEARCH FILTER
========================================== */

spotlightInput?.addEventListener("input", () => {

  const query =
    spotlightInput.value.toLowerCase();

  const results =
    document.querySelectorAll(".result-item");

  results.forEach((item) => {

    const text =
      item.textContent.toLowerCase();

    item.style.display =
      text.includes(query)
        ? "flex"
        : "none";
  });
});

/* ==========================================
INTEGRATION CARDS
========================================== */

document
  .querySelectorAll(".integration-card")
  .forEach((card) => {

    card.addEventListener("click", () => {

      const name =
        card.querySelector("span")
          ?.textContent;

      alert(`${name} connected successfully.`);
    });

  });

/* ==========================================
COMMAND CENTER BUTTON
========================================== */

const commandCenterBtn =
  document.querySelector(
    ".command-center .hero-open-btn"
  );

commandCenterBtn?.addEventListener(
  "click",
  () => {

    openSpotlight();

    spotlightInput.value =
      "Launch Command Center";
  }
);

/* ==========================================
VOICE SEARCH DEMO
========================================== */

const voiceCard =
  document.querySelector(".voice-card");

voiceCard?.addEventListener("click", () => {

  const circle =
    voiceCard.querySelector(".voice-circle");

  circle.classList.add("listening");

  setTimeout(() => {

    circle.classList.remove("listening");

    alert(
      "Voice command received."
    );

  }, 2500);

});

/* ==========================================
PERFORMANCE COUNTER ANIMATION
========================================== */

const counters =
  document.querySelectorAll(
    ".usage-box strong"
  );

const animateCounter = (el) => {

  const finalValue =
    parseInt(
      el.innerText.replace(/\D/g, "")
    );

  let current = 0;

  const increment =
    Math.ceil(finalValue / 40);

  const timer =
    setInterval(() => {

      current += increment;

      if (current >= finalValue) {

        current = finalValue;

        clearInterval(timer);
      }

      const suffix =
        el.innerText.includes("%")
          ? "%"
          : "";

      el.innerText =
        current.toLocaleString() + suffix;

    }, 30);
};

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          animateCounter(
            entry.target
          );

          observer.unobserve(
            entry.target
          );
        }

      });

    },
    { threshold: 0.4 }
  );

counters.forEach((counter) => {
  observer.observe(counter);
});

/* ==========================================
RANDOM AI SUGGESTIONS
========================================== */

const suggestions = [
  "Generate SaaS Landing Page",
  "Create Pricing Cards",
  "Build Dashboard Layout",
  "Design Login Screen",
  "Create Analytics UI",
  "Generate Hero Section"
];

setInterval(() => {

  const aiItems =
    document.querySelectorAll(
      ".suggestion-item"
    );

  aiItems.forEach((item) => {

    item.textContent =
      suggestions[
        Math.floor(
          Math.random() *
          suggestions.length
        )
      ];

  });

}, 10000);