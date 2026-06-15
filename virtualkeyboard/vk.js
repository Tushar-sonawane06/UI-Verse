const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

keys.forEach(key => {

  key.addEventListener("click", () => {

    const value = key.innerText;

    if(value === "⌫"){
      display.value = display.value.slice(0, -1);
    }
    else if(value === "Space"){
      display.value += " ";
    }
    else{
      display.value += value;
    }

  });

});

// vk.js

const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

const clearBtn = document.getElementById("clearBtn");
const themeBtn = document.getElementById("themeBtn");

let capsLock = true;
let soundEnabled = true;

function playSound() {
  if (!soundEnabled) return;

  const audio = new Audio(
    "https://www.soundjay.com/buttons/sounds/button-16.mp3"
  );

  audio.volume = 0.2;
  audio.play();
}

keys.forEach(key => {
  key.addEventListener("click", () => {

    playSound();

    const value = key.innerText;

    if (value === "Space") {
      display.value += " ";
    }

    else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
    }

    else if (value === "Enter") {
      display.value += "\n";
    }

    else if (value === "Caps") {
      capsLock = !capsLock;

      document.querySelectorAll(".key").forEach(btn => {
        if (
          btn.innerText.length === 1 &&
          /[a-zA-Z]/.test(btn.innerText)
        ) {
          btn.innerText = capsLock
            ? btn.innerText.toUpperCase()
            : btn.innerText.toLowerCase();
        }
      });
    }

    else if (value === "Shift") {
      display.value += "";
    }

    else if (value === "😊") {
      display.value += "😊";
    }

    else {
      display.value += value;
    }
  });
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

document.getElementById("soundBtn").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
});