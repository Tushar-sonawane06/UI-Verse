const commandInput = document.getElementById("commandInput");
const consoleBody = document.getElementById("consoleBody");

commandInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const command = commandInput.value.trim();

    if (command !== "") {
      const commandLine = document.createElement("p");
      commandLine.textContent = `>> ${command}`;

      const responseLine = document.createElement("p");

      switch (command.toLowerCase()) {
        case "help":
          responseLine.textContent =
            "Available commands: help, clear, status";
          break;

        case "status":
          responseLine.textContent =
            "System Status: ONLINE";
          break;

        case "clear":
          consoleBody.innerHTML = "";
          commandInput.value = "";
          return;

        default:
          responseLine.textContent =
            "Unknown command detected.";
      }

      consoleBody.appendChild(commandLine);
      consoleBody.appendChild(responseLine);

      consoleBody.scrollTop = consoleBody.scrollHeight;

      commandInput.value = "";
    }
  }
});

// script.js

const input = document.getElementById("commandInput");
const consoleBody = document.getElementById("consoleBody");

const commands = {
  help: [
    "Available commands:",
    "help - Show command list",
    "clear - Clear console",
    "about - System information",
    "time - Show current time",
    "hack - Simulate hacking",
    "status - System status"
  ],

  about: [
    "Cyberpunk Command Console v2.0",
    "Secure Neural Interface Active.",
    "Powered by Quantum Grid Engine."
  ],

  hack: [
    "Injecting exploit packets...",
    "Bypassing firewall...",
    "Decrypting neural nodes...",
    "ACCESS GRANTED ✔"
  ],

  status: [
    "System Status: ONLINE",
    "CPU Load: 18%",
    "Memory Usage: 42%",
    "Security Layer: ACTIVE"
  ]
};

function addLine(text, className = "") {
  const p = document.createElement("p");
  p.textContent = text;

  if (className) {
    p.classList.add(className);
  }

  consoleBody.appendChild(p);
  consoleBody.scrollTop = consoleBody.scrollHeight;
}

input.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {

    const cmd = input.value.trim().toLowerCase();

    if (!cmd) return;

    addLine(`>> ${cmd}`);

    if (cmd === "clear") {
      consoleBody.innerHTML = "";
    }

    else if (cmd === "time") {
      addLine(new Date().toLocaleTimeString());
    }

    else if (commands[cmd]) {

      commands[cmd].forEach((line, index) => {

        setTimeout(() => {
          addLine(line);
        }, index * 300);

      });

    }

    else {
      addLine(`Command not found: ${cmd}`);
      addLine(`Type "help" for available commands.`);
    }

    input.value = "";
  }

});

/* Boot Animation */
setTimeout(() => {
  addLine("> Neural link established.");
}, 1200);

setTimeout(() => {
  addLine("> Welcome Operator.");
}, 2200);

const input = document.getElementById("commandInput");
const consoleBody = document.getElementById("consoleBody");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();

    if (command !== "") {
      const line = document.createElement("p");
      line.textContent = `> ${command}`;
      consoleBody.appendChild(line);

      input.value = "";

      consoleBody.scrollTop = consoleBody.scrollHeight;
    }
  }
});
// Quantum Clock

function updateClock(){

    const now = new Date();

    document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();


// Crypto Price Simulator

setInterval(()=>{

    const price =
    (Math.random()*50000+10000).toFixed(2);

    document.getElementById("cryptoPrice").textContent =
    "$"+price;

},2000);


// Network Speed

setInterval(()=>{

    const speed =
    (Math.random()*25).toFixed(2);

    document.getElementById("networkSpeed").textContent =
    speed+" GB/s";

},1000);
// AI Responses

const responses = [

"Neural network optimized.",
"Threat scan complete.",
"Quantum node stable.",
"Encryption secure.",
"Signal synchronized.",
"Mission trajectory updated."

];

document
.getElementById("askAI")
.addEventListener("click",()=>{

const random =
responses[Math.floor(Math.random()*responses.length)];

document.getElementById("aiResponse")
.textContent = random;

});


// Threat Radar

const threatLevels = [
"LOW",
"MEDIUM",
"HIGH",
"CRITICAL"
];

setInterval(()=>{

const level =
threatLevels[Math.floor(Math.random()*4)];

document.getElementById("threatLevel")
.textContent =
"Threat Level: " + level;

},3000);


// Signal Strength

setInterval(()=>{

const signal =
Math.floor(Math.random()*100);

document.getElementById("signalValue")
.textContent =
signal + "%";

},2000);


// Mission Progress

let mission = 72;

setInterval(()=>{

mission++;

if(mission > 100){
mission = 0;
}

document.getElementById("missionProgress")
.textContent =
mission + "%";

},1000);

// AI Insights

const insights = [

"Threat level normal",
"Neural network optimized",
"AI model updated",
"Quantum node stable",
"Firewall secure",
"New signal detected"

];

document
.getElementById("changeMessage")
.addEventListener("click",()=>{

const random =
insights[Math.floor(Math.random()*insights.length)];

document.getElementById("aiMessage")
.textContent = random;

});
// ===============================
// 👁 FACE RECOGNITION SCANNER
// ===============================

const identities = [
    "Identity Verified",
    "Unknown Subject",
    "VIP Access Granted",
    "Scanning...",
    "Face Matched",
    "Biometric Lock Confirmed"
];

setInterval(() => {

    document.querySelector(".face-status").textContent =
        identities[Math.floor(Math.random() * identities.length)];

}, 3000);


// ===============================
// 🔥 THREAT DETECTION RADAR
// ===============================

const threatLevels = [
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL"
];

setInterval(() => {

    const level =
        threatLevels[Math.floor(Math.random() * threatLevels.length)];

    document.getElementById("threatLevel").textContent =
        "Threat Level: " + level;

}, 2500);


// ===============================
// 🤖 AI CHAT MODULE
// ===============================

const aiResponses = [

    "Neural network optimized.",
    "Firewall active.",
    "Encryption stable.",
    "Quantum node online.",
    "Threat scan complete.",
    "Signal synchronized.",
    "Database refreshed.",
    "AI learning new patterns.",
    "Mission objectives updated.",
    "Satellite link secured."

];

document.getElementById("askAI").addEventListener("click", () => {

    const random =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

    document.getElementById("aiResponse").textContent =
        random;

});


// ===============================
// 🏆 HACKER LEADERBOARD
// ===============================

const leaderboardPlayers = [

    "ShadowX",
    "GhostByte",
    "CyberNova",
    "DarkRoot",
    "QuantumFox",
    "NeonGhost"

];

setInterval(() => {

    const listItems =
        document.querySelectorAll(".leaderboard li");

    listItems.forEach(item => {

        const xp =
            Math.floor(Math.random() * 10000);

        const player =
            leaderboardPlayers[
            Math.floor(Math.random() * leaderboardPlayers.length)
            ];

        item.textContent =
            `${player} - ${xp} XP`;

    });

}, 4000);


// ===============================
// 🚀 SPACE MISSION TRACKER
// ===============================

let missionProgress = 65;

setInterval(() => {

    missionProgress +=
        Math.floor(Math.random() * 4);

    if (missionProgress > 100)
        missionProgress = 0;

    document.getElementById("missionProgress")
        .textContent =
        missionProgress + "%";

}, 1500);


// ===============================
// 📡 SIGNAL STRENGTH
// ===============================

setInterval(() => {

    const signal =
        Math.floor(Math.random() * 101);

    document.getElementById("signalValue")
        .textContent =
        signal + "%";

}, 2000);


// ===============================
// 🎮 XP LEVEL SYSTEM
// ===============================

let xp = 0;
let level = 1;

setInterval(() => {

    xp += Math.floor(Math.random() * 15);

    if (xp >= 100) {

        xp = 0;
        level++;

    }

    document.getElementById("xpFill").style.width =
        xp + "%";

    document.getElementById("xpText").textContent =
        `Level ${level} • ${xp}/100 XP`;

}, 1000);


// ===============================
// 💾 STORAGE VISUALIZER
// ===============================

setInterval(() => {

    const storage =
        Math.floor(Math.random() * 100);

    document.getElementById("storageValue")
        .textContent =
        storage + "%";

}, 3000);


// ===============================
// 🔒 QUANTUM ENCRYPTION
// ===============================

setInterval(() => {

    const encrypt =
        Math.floor(Math.random() * 30) + 70;

    document.getElementById("encryptFill")
        .style.width =
        encrypt + "%";

}, 2500);


// ===============================
// 🧿 HOLOGRAPHIC PROFILE
// ===============================

const ranks = [

    "Elite Operator",
    "Cyber Agent",
    "Ghost Hacker",
    "Quantum Master",
    "Network Commander",
    "Neural Architect"

];

setInterval(() => {

    const rank =
        ranks[Math.floor(Math.random() * ranks.length)];

    document.querySelector(".profile-stats")
        .textContent =
        "Rank: " + rank;

}, 3500);


// ===============================
// GLOBAL SYSTEM STATS
// ===============================

setInterval(() => {

    const widgets =
        document.querySelectorAll(".widget");

    widgets.forEach(widget => {

        const glow =
            Math.floor(Math.random() * 40) + 10;

        widget.style.boxShadow =
            `0 0 ${glow}px rgba(0,255,255,.4)`;

    });

}, 2000);


// ===============================
// RANDOM CYBER NOTIFICATIONS
// ===============================

const notifications = [

    "⚡ New encrypted packet received",
    "🚀 Mission checkpoint reached",
    "🛰 Satellite synchronized",
    "🔒 Security protocol updated",
    "🤖 AI model upgraded",
    "📡 Signal boost activated",
    "🧬 Neural scan complete",
    "🌌 Quantum tunnel detected"

];

setInterval(() => {

    const random =
        notifications[
        Math.floor(Math.random() * notifications.length)
        ];

    console.log(random);

}, 5000);