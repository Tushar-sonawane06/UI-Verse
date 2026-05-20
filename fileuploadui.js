/* =====================================================
ELEMENTS
===================================================== */

const dropZone =
  document.getElementById(
    "dropZone"
  );

const fileInput =
  document.getElementById(
    "fileInput"
  );

const uploadBtn =
  document.querySelector(
    ".upload-btn"
  );

const fileList =
  document.getElementById(
    "fileList"
  );

/* =====================================================
OPEN FILE PICKER
===================================================== */

uploadBtn.addEventListener(
  "click",
  ()=>{

    fileInput.click();

  }
);

/* =====================================================
HANDLE FILES
===================================================== */

function displayFiles(files){

  fileList.innerHTML = "";

  [...files].forEach(file=>{

    const item =
      document.createElement(
        "div"
      );

    item.classList.add(
      "file-item"
    );

    item.innerHTML = `

      <div>

        <strong>${file.name}</strong>

      </div>

      <span>
        ${(file.size / 1024 / 1024)
          .toFixed(2)} MB
      </span>

    `;

    fileList.appendChild(item);

  });

}

/* =====================================================
INPUT CHANGE
===================================================== */

fileInput.addEventListener(
  "change",
  (e)=>{

    displayFiles(
      e.target.files
    );

  }
);

/* =====================================================
DRAG EVENTS
===================================================== */

dropZone.addEventListener(
  "dragover",
  (e)=>{

    e.preventDefault();

    dropZone.style.borderColor =
      "#7b61ff";

    dropZone.style.background =
      "rgba(123,97,255,.08)";

  }
);

dropZone.addEventListener(
  "dragleave",
  ()=>{

    dropZone.style.borderColor =
      "rgba(255,255,255,.14)";

    dropZone.style.background =
      "rgba(255,255,255,.03)";

  }
);

dropZone.addEventListener(
  "drop",
  (e)=>{

    e.preventDefault();

    dropZone.style.borderColor =
      "rgba(255,255,255,.14)";

    dropZone.style.background =
      "rgba(255,255,255,.03)";

    const files =
      e.dataTransfer.files;

    displayFiles(files);

  }
);

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);