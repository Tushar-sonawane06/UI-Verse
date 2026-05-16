const micBtn =
  document.getElementById("micBtn");

const status =
  document.getElementById("status");

const inputText =
  document.getElementById("inputText");

const translatedText =
  document.getElementById("translatedText");

let listening = false;

micBtn.addEventListener("click", () => {

  listening = !listening;

  if(listening){

    micBtn.classList.add("active");

    status.textContent =
      "Listening...";

    inputText.textContent =
      "Good morning";

    translatedText.textContent =
      "सुप्रभात";

  } else {

    micBtn.classList.remove("active");

    status.textContent =
      "Tap microphone to start speaking";

  }

});