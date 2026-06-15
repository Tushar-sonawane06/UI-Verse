const speakBtn = document.getElementById("speakBtn");
const textInput = document.getElementById("text");
const voiceSelect = document.getElementById("voiceSelect");
let voices = [];

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.textContent =
      voice.name.replace(/Google |Microsoft |Apple |Voice/g, "") ||
      `Voice ${index + 1}`;
    option.value = index;
    voiceSelect.appendChild(option);
  });
}

window.speechSynthesis.onvoiceschanged = loadVoices;

speakBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    alert("Please enter some text!");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  window.speechSynthesis.speak(utterance);
});