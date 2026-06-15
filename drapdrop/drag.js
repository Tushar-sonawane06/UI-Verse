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

    const fileName = document.createElement("strong");
    fileName.textContent = file.name;

    const size = document.createElement("span");
    size.textContent = `${(file.size / 1024).toFixed(2)} KB`;

    fileItem.appendChild(fileName);
    fileItem.appendChild(document.createElement("br"));
    fileItem.appendChild(size);

    preview.appendChild(fileItem);
  });
}

// drag.js

const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const browseBtn = document.getElementById("browseBtn");
const preview = document.getElementById("preview");

browseBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  handleFiles(e.target.files);
});

["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "#38bdf8";
    dropArea.style.background = "rgba(56,189,248,0.1)";
  });
});

["dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "rgba(255,255,255,0.2)";
    dropArea.style.background = "rgba(255,255,255,0.03)";
  });
});

dropArea.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files){

  [...files].forEach(file => {

    const card = document.createElement("div");
    card.className = "file-card";

    let icon = "fa-file";

    if(file.type.includes("image")){
      icon = "fa-file-image";
    }
    else if(file.type.includes("video")){
      icon = "fa-file-video";
    }
    else if(file.type.includes("pdf")){
      icon = "fa-file-pdf";
    }

    card.innerHTML = `
      <div class="file-top">
        <i class="fa-solid ${icon}"></i>
        <span>${(file.size / (1024 * 1024)).toFixed(2)} MB</span>
      </div>

      <h4>${file.name}</h4>

      <div class="mini-progress">
        <div class="mini-fill"></div>
      </div>

      <div class="file-actions">
        <button>
          <i class="fa-solid fa-eye"></i>
        </button>

        <button class="delete-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    preview.appendChild(card);

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      card.remove();
    });

  });

}