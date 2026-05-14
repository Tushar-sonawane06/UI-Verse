const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    sendMessage();
  }
});

function sendMessage(){

  const message = messageInput.value.trim();

  if(message === ""){
    return;
  }

  const userMessage = document.createElement("div");

  userMessage.classList.add("message", "user");

  userMessage.textContent = message;

  chatBox.appendChild(userMessage);

  messageInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {

    const botMessage = document.createElement("div");

    botMessage.classList.add("message", "assistant");

    botMessage.textContent =
      "This is a sample AI response.";

    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 1000);
}