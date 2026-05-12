const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const browseBtn = document.getElementById("browseBtn");
const preview = document.getElementById("preview");

browseBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", handleFiles);

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("dragover");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("dragover");

  const files = e.dataTransfer.files;
  displayFiles(files);
});

function handleFiles() {
  displayFiles(fileInput.files);
}

function displayFiles(files) {
  preview.innerHTML = "";

  [...files].forEach(file => {
    const fileItem = document.createElement("div");
    fileItem.classList.add("file-item");

    fileItem.innerHTML = `
      <strong>${file.name}</strong><br>
      ${(file.size / 1024).toFixed(2)} KB
    `;

    preview.appendChild(fileItem);
  });
}