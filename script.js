/* Toggle Code Block */
function toggleCode(id) {
  const el = document.getElementById(id);

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

/* Copy Code with Better UX */
function copyCode(id, btn) {
  const code = document.getElementById(id).innerText;

  navigator.clipboard.writeText(code)
    .then(() => {
      btn.innerText = "Copied!";
      btn.style.background = "#00b894";

      setTimeout(() => {
        btn.innerText = "Copy";
        btn.style.background = "#111";
      }, 1500);
    })
    .catch(() => {
      btn.innerText = "Error";
    });
}