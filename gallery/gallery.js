const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

function loadImages() {
  for(let i = 0; i < 6; i++) {
    const img = document.createElement("img");

    img.src = `https://picsum.photos/400?random=${Math.random()}`;

    gallery.appendChild(img);
  }
}

loadImages();

window.addEventListener("scroll", () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadImages();
  }
});

const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const skeleton = document.getElementById("skeleton");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

let page = 1;

// Fake image generator
function loadImages() {
  loader.style.display = "block";

  setTimeout(() => {
    for (let i = 0; i < 9; i++) {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/300/200?random=${Math.random()}`;
      img.alt = "gallery image";

      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });

      gallery.appendChild(img);
    }

    loader.style.display = "none";
  }, 1000);
}

// Infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadImages();
  }
});

// Modal close
closeModal.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";

// Initial load
loadImages();