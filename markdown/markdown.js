const markdownInput = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {

  const text = markdownInput.value;

  preview.textContent = text;

});