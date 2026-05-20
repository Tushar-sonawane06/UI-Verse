/* =====================================================
CONTACT ACTIVE
===================================================== */

const contacts =
  document.querySelectorAll(
    ".contact-item"
  );

contacts.forEach(contact=>{

  contact.addEventListener(
    "click",
    ()=>{

      contacts.forEach(c=>
        c.classList.remove(
          "active-contact"
        )
      );

      contact.classList.add(
        "active-contact"
      );

    }
  );

});

/* =====================================================
CHANNEL ACTIVE
===================================================== */

const channels =
  document.querySelectorAll(
    ".channel"
  );

channels.forEach(channel=>{

  channel.addEventListener(
    "click",
    ()=>{

      channels.forEach(c=>
        c.classList.remove(
          "active-channel"
        )
      );

      channel.classList.add(
        "active-channel"
      );

    }
  );

});

/* =====================================================
SEND MESSAGE
===================================================== */

const sendBtn =
  document.querySelector(
    ".send-btn"
  );

const input =
  document.querySelector(
    ".chat-input input"
  );

const chatWindow =
  document.querySelector(
    ".chat-window"
  );

function sendMessage(){

  if(input.value.trim() === "")
    return;

  const msg =
    document.createElement(
      "div"
    );

  msg.classList.add(
    "message",
    "sent"
  );

  msg.innerHTML = `

    <div class="bubble">

      <strong>You</strong>

      <p>${input.value}</p>

      <span>Now</span>

    </div>

  `;

  chatWindow.appendChild(msg);

  input.value = "";

  chatWindow.scrollTop =
    chatWindow.scrollHeight;
}

sendBtn.addEventListener(
  "click",
  sendMessage
);

input.addEventListener(
  "keypress",
  (e)=>{

    if(e.key === "Enter"){
      sendMessage();
    }

  }
);

/* =====================================================
AI BUTTON
===================================================== */

const aiBtn =
  document.querySelector(
    ".generate-btn"
  );

aiBtn.addEventListener(
  "click",
  ()=>{

    aiBtn.innerText =
      "Generating...";

    setTimeout(()=>{

      aiBtn.innerText =
        "Generated ✓";

    },1500);

  }
);

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);