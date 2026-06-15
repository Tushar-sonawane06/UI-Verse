const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".form-card");

searchInput.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();

  cards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(val) ? "block" : "none";
  });
});

function toggleCode(btn) {
  const code = btn.parentElement.nextElementSibling;
  code.style.display = code.style.display === "block" ? "none" : "block";
}


function copyCode(btn) {
  const code = btn.parentElement.nextElementSibling.innerText;
  navigator.clipboard.writeText(code);
  toast("Copied!");
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";

  setTimeout(() => {
    t.style.display = "none";
  }, 1500);
}