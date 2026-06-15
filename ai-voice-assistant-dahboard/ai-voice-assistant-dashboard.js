/* ================= SEARCH ================= */

const searchInput =
document.querySelector(
".search-box input"
);

if (searchInput) searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🔍 Searching: " +
      searchInput.value
    );

  }

});

/* ================= NOTIFICATION ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

if (notificationBtn) notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 8 new AI notifications."
  );

});

/* ================= VOICE BUTTON ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

if (primaryBtn) primaryBtn.addEventListener(
"click",
() => {

  if (window.VoiceAssistant && typeof window.VoiceAssistant.startListening === 'function') {
    window.VoiceAssistant.startListening();
    return;
  }

  alert("🎙 AI Assistant is now listening...");

});

/* ================= SETTINGS BUTTON ================= */

const secondaryBtn =
document.querySelector(
".secondary-btn"
);

if (secondaryBtn) secondaryBtn.addEventListener(
"click",
() => {

  const languageSelect = document.querySelector('[data-voice-language]');
  if (languageSelect) {
    languageSelect.focus();
    return;
  }

  alert("⚙ Opening voice assistant settings...");

});

/* ================= FEATURE HOVER ================= */

const featureCards =
document.querySelectorAll(
".feature-card"
);

featureCards.forEach(card => {

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
    rgba(139,92,246,0.16),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});