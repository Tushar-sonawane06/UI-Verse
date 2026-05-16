

const cpuValue = document.getElementById("cpuValue");
const ramValue = document.getElementById("ramValue");

let cpu = 72;
let ram = 58;

setInterval(() => {

  cpu = Math.floor(Math.random() * 40) + 40;
  ram = Math.floor(Math.random() * 40) + 30;

  cpuValue.textContent = `${cpu}%`;
  ramValue.textContent = `${ram}%`;

}, 3000);