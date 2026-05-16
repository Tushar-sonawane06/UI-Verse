const sendBtn =
  document.getElementById("sendBtn");

const userInput =
  document.getElementById("userInput");

const messages =
  document.getElementById("messages");

sendBtn.addEventListener("click", () => {

  const text =
    userInput.value.trim();

  if(text === ""){
    return;
  }

  const userMessage =
    document.createElement("div");

  userMessage.classList.add("message");
  userMessage.classList.add("user");

  userMessage.textContent =
    `You: ${text}`;

  messages.appendChild(userMessage);

  const aiMessage =
    document.createElement("div");

  aiMessage.classList.add("message");
  aiMessage.classList.add("ai");

  aiMessage.textContent =
    "AI: Keep practicing daily and revise your concepts regularly.";

  messages.appendChild(aiMessage);

  userInput.value = "";

  messages.scrollTop =
    messages.scrollHeight;

});