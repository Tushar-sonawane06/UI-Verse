const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

if (!sendBtn || !messageInput || !chatBox) {
  // Page does not include the chat UI.
} else {
  sendBtn.addEventListener("click", sendMessage);

  function sendMessage(){

  const message = messageInput.value.trim();

  if(message === ""){
    return;
  }

  const messageElement = document.createElement("div");

  messageElement.classList.add("message", "sent");

  messageElement.textContent = message;

  chatBox.appendChild(messageElement);

  chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = "";
  }
}