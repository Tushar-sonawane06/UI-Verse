const toggleButtons =
  document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(toggle => {

  toggle.addEventListener("change", () => {

    const statusText =
      toggle.closest(".device-card")
      .querySelector(".status");

    if(toggle.checked){

      statusText.textContent = "ON";
      statusText.style.color = "#22c55e";
    }
    else{

      statusText.textContent = "OFF";
      statusText.style.color = "#ef4444";
    }

  });

});