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