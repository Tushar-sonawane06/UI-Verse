const scanBtn = document.getElementById("scanBtn");

scanBtn.addEventListener("click", () => {

  if(scanBtn.textContent === "Start Scan"){

    scanBtn.textContent = "Scanning...";
  }
  else{

    scanBtn.textContent = "Start Scan";
  }

});