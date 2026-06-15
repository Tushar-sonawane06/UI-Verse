const scanBtn = document.getElementById("scanBtn");
const fileInput = document.getElementById("fileInput");
const status = document.getElementById("scanStatus");

scanBtn.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", function() {
  const file = this.files[0];
  if (!file) return;

  status.textContent = "Reading...";

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert"
      });
      if (code) {
        status.innerHTML = `✓ ${code.data}`;
      } else {
        status.textContent = "No QR code found — try a clearer image";
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  this.value = "";
});