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
}