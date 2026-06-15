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

const moodText = document.getElementById("mood");
const feedBtn = document.getElementById("feedBtn");
const playBtn = document.getElementById("playBtn");

let mood = "Happy 😊";

feedBtn.addEventListener("click", () => {
  mood = "Full 😋";
  moodText.textContent = "Mood: " + mood;
});

playBtn.addEventListener("click", () => {
  mood = "Excited 🤩";
  moodText.textContent = "Mood: " + mood;
});

// Auto decay mood
setInterval(() => {
  if (mood === "Excited 🤩") {
    mood = "Happy 😊";
  } else if (mood === "Full 😋") {
    mood = "Hungry 🥺";
  }
  moodText.textContent = "Mood: " + mood;
}, 5000);