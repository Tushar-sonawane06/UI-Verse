// ui.js

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

function sendMessage() {

  const text = messageInput.value.trim();

  if(text === "") return;

  // Create message
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "sent");

  const now = new Date();

  const time =
    now.getHours() +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  const msgContent = document.createElement('div');
  msgContent.className = 'message-content';
  msgContent.textContent = text;

  const timeSpan = document.createElement('span');
  timeSpan.className = 'time';
  timeSpan.textContent = time;

  messageDiv.appendChild(msgContent);
  messageDiv.appendChild(timeSpan);

  chatBox.appendChild(messageDiv);

  messageInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  // Fake Reply
  setTimeout(() => {

    const reply = document.createElement("div");

    reply.classList.add("message", "received");

    const replyContent = document.createElement('div');
    replyContent.className = 'message-content';
    replyContent.textContent = "✨ That's a great UI idea!";

    const replyTime = document.createElement('span');
    replyTime.className = 'time';
    replyTime.textContent = time;

    reply.appendChild(replyContent);
    reply.appendChild(replyTime);

    chatBox.appendChild(reply);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 1000);

}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    sendMessage();
  }

});
