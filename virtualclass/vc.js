const sendBtn =
  document.getElementById("sendBtn");

const chatInput =
  document.getElementById("chatInput");

const messages =
  document.getElementById("messages");

if (!sendBtn || !chatInput || !messages) {
  // Page does not include the virtual class chat widget.
} else {
  sendBtn.addEventListener("click", () => {

  const text = chatInput.value.trim();

  if(text === ""){
    return;
  }

  const message =
    document.createElement("div");

  message.classList.add("message");
  message.classList.add("student");

  message.textContent =
    `You: ${text}`;

  messages.appendChild(message);

  chatInput.value = "";

    messages.scrollTop =
      messages.scrollHeight;

  });
}