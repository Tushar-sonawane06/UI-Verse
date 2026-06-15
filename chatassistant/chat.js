const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

if (!sendBtn || !messageInput || !chatBox) {
  // Page does not include the chat assistant UI.
} else {
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
}

// chat.js

const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const quickButtons = document.querySelectorAll(".quick-actions button");

const botReplies = [
  "That sounds like a great idea 🚀",
  "You can build this using HTML, CSS, and JavaScript.",
  "React would be perfect for this project.",
  "Try adding animations and dark mode for a modern UI.",
  "You can also connect it with an API.",
  "Frontend projects help improve UI/UX skills."
];

// SEND MESSAGE

function sendMessage() {

  const text = messageInput.value.trim();

  if (text === "") return;

  // USER MESSAGE
  addMessage(text, "user");

  messageInput.value = "";

  // SHOW TYPING
  showTyping();

  // BOT RESPONSE
  setTimeout(() => {

    removeTyping();

    const randomReply =
      botReplies[Math.floor(Math.random() * botReplies.length)];

    addMessage(randomReply, "assistant");

  }, 1500);

}

// ADD MESSAGE

function addMessage(text, sender) {

  const row = document.createElement("div");

  row.className =
    sender === "assistant"
      ? "message-row assistant-row"
      : "message-row user-row";

  // AVATAR
  if (sender === "assistant") {

    const avatar = document.createElement("div");

    avatar.className = "message-avatar";

    avatar.innerHTML = "🤖";

    row.appendChild(avatar);

  }

  // MESSAGE BOX
  const message = document.createElement("div");

  message.className = `message ${sender}`;

  const content = document.createElement("div");

  content.className = "message-content";

  content.textContent = text;

  const time = document.createElement("div");

  time.className = "message-time";

  time.textContent = getCurrentTime();

  message.appendChild(content);

  message.appendChild(time);

  row.appendChild(message);

  chatBox.appendChild(row);

  chatBox.scrollTop = chatBox.scrollHeight;

}

// TIME

function getCurrentTime() {

  const now = new Date();

  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

}

// TYPING

function showTyping() {

  const typing = document.createElement("div");

  typing.className = "typing-container";

  typing.id = "typingIndicator";

  typing.innerHTML = `
  
    <div class="message-avatar">🤖</div>

    <div class="typing">
      <span></span>
      <span></span>
      <span></span>
    </div>

  `;

  chatBox.appendChild(typing);

  chatBox.scrollTop = chatBox.scrollHeight;

}

function removeTyping() {

  const typing = document.getElementById("typingIndicator");

  if (typing) {
    typing.remove();
  }

}

// BUTTON CLICK

sendBtn.addEventListener("click", sendMessage);

// ENTER KEY

messageInput.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    sendMessage();
  }

});

// QUICK ACTIONS

quickButtons.forEach((button) => {

  button.addEventListener("click", () => {

    messageInput.value = button.innerText;

    sendMessage();

  });

});

// NEW CHAT BUTTON

const newChatBtn = document.querySelector(".new-chat-btn");

newChatBtn.addEventListener("click", () => {

  location.reload();

});

const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

function currentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function addUserMessage(text) {
  const row = document.createElement("div");
  row.className = "message-row user-row";

  row.innerHTML = `
    <div class="message user">
      <div class="message-content">${text}</div>
      <div class="message-time">${currentTime()}</div>
    </div>
  `;

  chatBox.appendChild(row);
}

function addAssistantMessage(text) {
  const row = document.createElement("div");
  row.className = "message-row assistant-row";

  row.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message assistant">
      <div class="message-content">${text}</div>
      <div class="message-time">${currentTime()}</div>
    </div>
  `;

  chatBox.appendChild(row);
}

function sendMessage() {
  const text = input.value.trim();

  if (!text) return;

  addUserMessage(text);
  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    addAssistantMessage(
      "Thanks for your message. This is a demo AI response. Connect an API like OpenAI, Gemini, or Claude to make it fully functional."
    );

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

document.querySelectorAll(".quick-actions button").forEach(btn => {
  btn.addEventListener("click", () => {
    input.value = btn.textContent;
    sendMessage();
  });
});

document.querySelector(".new-chat-btn").addEventListener("click", () => {
  location.reload();
});