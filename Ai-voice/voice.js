const micBtn =
  document.getElementById("micBtn");

const status =
  document.getElementById("status");

const inputText =
  document.getElementById("inputText");

const translatedText =
  document.getElementById("translatedText");

let listening = false;

if (micBtn) {
  micBtn.addEventListener("click", () => {

    listening = !listening;

    if(listening){

      micBtn.classList.add("active");

      if (status) {
        status.textContent =
          "Listening...";
      }

      if (inputText) {
        inputText.textContent =
          "Good morning";
      }

      if (translatedText) {
        translatedText.textContent =
          "सुप्रभात";
      }

    } else {

      micBtn.classList.remove("active");

      if (status) {
        status.textContent =
          "Tap microphone to start speaking";
      }

    }

});

// voice.js

const micBtn = document.getElementById("micBtn");
const statusText = document.getElementById("status");

const inputText = document.getElementById("inputText");
const translatedText = document.getElementById("translatedText");

let listening = false;

micBtn.addEventListener("click", () => {

  listening = !listening;

  if(listening){

    statusText.innerText = "Listening... Speak now";

    micBtn.style.transform = "scale(1.1)";

    micBtn.style.boxShadow =
      "0 0 60px rgba(6,182,212,0.9)";

    inputText.innerText =
      "Hello, can you translate this sentence?";

    translatedText.innerText =
      "नमस्ते, क्या आप इस वाक्य का अनुवाद कर सकते हैं?";

  }

  else{

    statusText.innerText =
      "Tap microphone to start speaking";

    micBtn.style.transform = "scale(1)";

    micBtn.style.boxShadow =
      "0 0 40px rgba(124,58,237,0.6)";
  }

});
// voice.js

const micBtn = document.getElementById("micBtn");
const statusText = document.getElementById("status");
const inputText = document.getElementById("inputText");
const translatedText = document.getElementById("translatedText");

const themeBtn = document.querySelector(".theme-btn");
const swapBtn = document.querySelector(".swap-btn");

const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");

// Theme Toggle

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const icon = themeBtn.querySelector("i");

  if(document.body.classList.contains("light")){
    icon.className = "fa-solid fa-sun";
  }else{
    icon.className = "fa-solid fa-moon";
  }

});

// Swap Languages

swapBtn.addEventListener("click", () => {

  let temp = fromLanguage.value;
  fromLanguage.value = toLanguage.value;
  toLanguage.value = temp;

});

// Demo Voice Recognition

let listening = false;

micBtn.addEventListener("click", () => {

  listening = !listening;

  micBtn.classList.toggle("active");

  if(listening){

    statusText.innerText = "Listening... Speak now";
    
    setTimeout(() => {

      inputText.innerText =
        "Hello, I want to translate my voice using AI.";

      translatedText.innerText =
        "नमस्ते, मैं AI का उपयोग करके अपनी आवाज़ का अनुवाद करना चाहता हूँ।";

      statusText.innerText =
        "Translation completed successfully";

      listening = false;

      micBtn.classList.remove("active");

    }, 3000);

  }else{

    statusText.innerText =
      "Tap microphone to start speaking";

  }

});

// Copy Input

const copyBtn = document.querySelector(".input-card button");

copyBtn.addEventListener("click", () => {

  navigator.clipboard.writeText(inputText.innerText);

  copyBtn.innerHTML =
    `<i class="fa-solid fa-check"></i>`;

  setTimeout(() => {

    copyBtn.innerHTML =
      `<i class="fa-regular fa-copy"></i>`;

  }, 2000);

});

// Speak Output

const speakBtn = document.querySelector(".output-card button");

speakBtn.addEventListener("click", () => {

  const utterance =
    new SpeechSynthesisUtterance(translatedText.innerText);

  speechSynthesis.speak(utterance);

});

}
// Dark Mode

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',()=>{

document.body.classList.toggle('dark-mode');

if(document.body.classList.contains('dark-mode')){
themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';
}else{
themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';
}

});


// Language Swap

const swapBtn =
document.querySelector('.swap-btn');

swapBtn.addEventListener('click',()=>{

const from =
document.getElementById('fromLanguage');

const to =
document.getElementById('toLanguage');

[from.value,to.value] =
[to.value,from.value];

});


// Fake Analytics Counter

const stats =
document.querySelectorAll('.stat h2');

stats.forEach(stat=>{

let value = 0;

const target =
parseInt(stat.innerText);

const timer =
setInterval(()=>{

value += Math.ceil(target/40);

if(value >= target){
value = target;
clearInterval(timer);
}

stat.innerText = value;

},40);

});
// Assistant Button

document
.getElementById("assistantBtn")
.addEventListener("click",()=>{

alert("🤖 AI Assistant Activated");

});

// Voice Speed

const speedSlider =
document.getElementById("voiceSpeed");

const speedValue =
document.getElementById("speedValue");

speedSlider.addEventListener("input",()=>{

speedValue.innerText =
speedSlider.value + "x";

});

// Timeline Animation

let progress = 0;

const timeline =
document.querySelector(
".timeline-progress"
);

setInterval(()=>{

progress += 2;

if(progress > 100){
progress = 0;
}

timeline.style.width =
progress + "%";

},100);

// Confidence Animation

const ring =
document.querySelector(
".progress-ring"
);

let offset = 314;

setInterval(()=>{

offset -= 2;

if(offset < 25){
offset = 314;
}

ring.style.strokeDashoffset =
offset;

},50);
