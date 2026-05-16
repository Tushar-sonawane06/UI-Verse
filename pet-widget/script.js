const moodText = document.getElementById("mood");
const feedBtn = document.getElementById("feedBtn");
const playBtn = document.getElementById("playBtn");

feedBtn.addEventListener("click", () => {
  moodText.textContent = "Mood: Full 😋";
});

playBtn.addEventListener("click", () => {
  moodText.textContent = "Mood: Excited 🎉";
});

setInterval(() => {
  moodText.textContent = "Mood: Sleepy 😴";
}, 10000);