// script.js

const terminal = document.getElementById("terminal");

const commands = [
  "> Loading modules...",
  "> Connecting to server...",
  "> AI assistant initialized...",
  "> Security scan complete...",
  "> System stable..."
];

setInterval(() => {

  const line = document.createElement("p");

  line.textContent =
    commands[Math.floor(Math.random() * commands.length)];

  terminal.appendChild(line);

  terminal.scrollTop = terminal.scrollHeight;

}, 2500);


// Drag Window

const windowBox = document.getElementById("window");
const dragArea = document.getElementById("dragArea");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

dragArea.addEventListener("mousedown", (e) => {

  isDragging = true;

  offsetX = e.clientX - windowBox.offsetLeft;
  offsetY = e.clientY - windowBox.offsetTop;

});

document.addEventListener("mousemove", (e) => {

  if(isDragging){

    windowBox.style.left = `${e.clientX - offsetX}px`;
    windowBox.style.top = `${e.clientY - offsetY}px`;

  }

});

document.addEventListener("mouseup", () => {

  isDragging = false;

});