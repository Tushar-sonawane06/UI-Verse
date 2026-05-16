const emojis = document.querySelectorAll(".emoji");
const selectedEmoji = document.getElementById("selectedEmoji");

emojis.forEach(emoji => {

  emoji.addEventListener("click", () => {

    selectedEmoji.innerText = emoji.innerText;

  });

});