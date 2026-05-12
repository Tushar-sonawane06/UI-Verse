const toastContainer = document.getElementById("toast-container");

const modalOverlay = document.getElementById("modalOverlay");
const modalCode = document.getElementById("modalCode");
const closeModal = document.getElementById("closeModal");

const codeLibrary = {

success: `
<div class="toast success-toast">
  ✅ Success Notification
</div>
`,

error: `
<div class="toast error-toast">
  ❌ Error Notification
</div>
`,

warning: `
<div class="toast warning-toast">
  ⚠ Warning Notification
</div>
`,

info: `
<div class="toast info-toast">
  ℹ Info Notification
</div>
`

};

// SHOW TOAST

function showToast(type, message){

  const toast = document.createElement("div");

  toast.className = \`toast \${type}-toast\`;

  toast.innerHTML = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);

}

// LIVE DEMOS

document.querySelector(".success-demo")
.addEventListener("click", () => {
  showToast("success", "✅ Successfully Saved!");
});

document.querySelector(".error-demo")
.addEventListener("click", () => {
  showToast("error", "❌ Something Went Wrong!");
});

document.querySelector(".warning-demo")
.addEventListener("click", () => {
  showToast("warning", "⚠ Check Your Input!");
});

document.querySelector(".info-demo")
.addEventListener("click", () => {
  showToast("info", "ℹ New Update Available!");
});

// COPY

document.querySelectorAll(".copy-btn")
.forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.copy;

    navigator.clipboard.writeText(codeLibrary[type]);

    showToast("success", "📋 Code Copied!");

  });

});

// VIEW CODE

document.querySelectorAll(".view-btn")
.forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.view;

    modalCode.textContent = codeLibrary[type];

    modalOverlay.style.display = "flex";

  });

});

// CLOSE MODAL

closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (e) => {

  if(e.target === modalOverlay){
    modalOverlay.style.display = "none";
  }

});