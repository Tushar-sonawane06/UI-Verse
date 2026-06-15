const runBtn =
  document.getElementById("runBtn");

runBtn.addEventListener("click", () => {

  if (window.UIVERSE_DEBUG) alert("Code execution feature can be extended.");

});

const runBtn = document.getElementById("runBtn");
const codeArea = document.getElementById("codeArea");

// Create preview window dynamically
let previewFrame;

function createPreview() {
  previewFrame = document.createElement("iframe");
  previewFrame.style.width = "100%";
  previewFrame.style.height = "100%";
  previewFrame.style.border = "none";
  previewFrame.style.background = "white";

  document.querySelector(".code-wrapper").appendChild(previewFrame);
}

// Initialize preview once
createPreview();

// RUN CODE
runBtn.addEventListener("click", () => {
  const code = codeArea.value;

  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();

  runBtn.innerHTML = `<i class="fa-solid fa-check"></i> Running`;
  setTimeout(() => {
    runBtn.innerHTML = `<i class="fa-solid fa-play"></i> Run Project`;
  }, 1200);
});

// SIMPLE TAB SWITCH UI (visual only)
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const name = tab.innerText.trim();

    // Simple mock content switching
    if (name.includes("html")) {
      codeArea.value = `<!DOCTYPE html>
<html>
<head>
  <title>NeoCode</title>
</head>
<body>
  <h1>Hello World 🚀</h1>
</body>
</html>`;
    }

    if (name.includes("css")) {
      codeArea.value = `body {
  background: #0f172a;
  color: white;
  font-family: Arial;
}`;
    }

    if (name.includes("js")) {
      codeArea.value = `console.log("Hello from NeoCode JS 🚀");`;
    }
  });
});