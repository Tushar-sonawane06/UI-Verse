const micBtn = document.getElementById("micBtn");
const statusText = document.getElementById("status");

let listening = false;

if (!micBtn || !statusText) {
  // Page does not include the voice command UI.
} else {
  micBtn.addEventListener("click", () => {
    listening = !listening;

    micBtn.classList.toggle("active");

    if(listening){
      statusText.textContent = "Listening...";
    } else {
      statusText.textContent = "Waiting for command...";
    }
  });
}