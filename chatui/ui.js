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

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

function sendMessage(){

  const text = messageInput.value.trim();

  if(text === "") return;

  const currentTime = new Date().toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit'
  });

  // USER MESSAGE

  const message = document.createElement("div");

  message.classList.add("message","sent");

  message.innerHTML = `
    ${text}
    <span class="time">${currentTime}</span>
  `;

  chatBox.appendChild(message);

  messageInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  // BOT REPLY

  setTimeout(()=>{

    const reply = document.createElement("div");

    reply.classList.add("message","received");

    reply.innerHTML = `
      Thanks for your message 🚀
      <span class="time">${currentTime}</span>
    `;

    chatBox.appendChild(reply);

    chatBox.scrollTop = chatBox.scrollHeight;

  },1000);

}

sendBtn.addEventListener("click",sendMessage);

messageInput.addEventListener("keypress",(e)=>{

  if(e.key === "Enter"){
    sendMessage();
  }

});