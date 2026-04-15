function toggleCode(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function copyCode(id) {
  const code = document.getElementById(id).innerText;

  navigator.clipboard.writeText(code)
    .then(() => alert("Copied! 🚀"))
    .catch(() => alert("Error copying"));
} 