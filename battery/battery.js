const batteryLevel =
  document.getElementById("batteryLevel");

const batteryPercentage =
  document.getElementById("batteryPercentage");

const batteryStatus =
  document.getElementById("batteryStatus");

const toggleBtn =
  document.getElementById("toggleBtn");

let charging = true;

if (!batteryLevel || !batteryPercentage || !batteryStatus || !toggleBtn) {
  // Page does not include the battery widget.
} else {
  toggleBtn.addEventListener("click", () => {

    charging = !charging;

    if(charging){

      batteryLevel.style.width = "80%";

      batteryLevel.style.background =
        "#22c55e";

      batteryPercentage.textContent =
        "80%";

      batteryStatus.textContent =
        "Charging";
    }
    else{

      batteryLevel.style.width = "30%";

      batteryLevel.style.background =
        "#ef4444";

      batteryPercentage.textContent =
        "30%";

      batteryStatus.textContent =
        "Low Battery";
    }

  });
}
// Charging Speed

setInterval(() => {

    const speed =
        Math.floor(Math.random() * 60) + 20;

    document.getElementById("speedValue")
        .textContent =
        speed + "W";

}, 2000);


// Temperature

setInterval(() => {

    const temp =
        Math.floor(Math.random() * 15) + 28;

    document.getElementById("tempValue")
        .textContent =
        temp + "°C";

}, 3000);


// Battery Health

setInterval(() => {

    const health =
        Math.floor(Math.random() * 10) + 90;

    document.getElementById("healthValue")
        .textContent =
        health + "%";

}, 4000);


// Power Usage

setInterval(() => {

    const usage =
        Math.floor(Math.random() * 100);

    document.getElementById("usageValue")
        .textContent =
        usage + "%";

}, 2500);


// Charge Cycles

let cycles = 120;

setInterval(() => {

    cycles++;

    document.getElementById("cycleValue")
        .textContent =
        cycles;

}, 5000);
// 🔥 Fast Charging Detector

const modes = [
    "Normal Charging",
    "Fast Charging",
    "Super Charging"
];

setInterval(() => {

    const mode =
    modes[Math.floor(Math.random() * modes.length)];

    document.getElementById("chargeMode")
        .textContent = mode;

}, 3000);


// ☀ Solar Charging

setInterval(() => {

    const power =
    Math.floor(Math.random() * 250) + 100;

    document.getElementById("solarPower")
        .textContent =
        power + "W";

}, 2500);


// ⚡ Voltage Monitor

setInterval(() => {

    const voltage =
    Math.floor(Math.random() * 30) + 210;

    document.getElementById("voltageValue")
        .textContent =
        voltage + "V";

}, 1500);


// 🎯 Optimization Score

setInterval(() => {

    const score =
    Math.floor(Math.random() * 100);

    document.getElementById("optimizationScore")
        .textContent =
        score;

}, 3000);


// 🌍 Carbon Saved

let carbon = 12.5;

setInterval(() => {

    carbon += Math.random();

    document.getElementById("carbonSaved")
        .textContent =
        carbon.toFixed(1) + " kg";

}, 4000);


// 🚗 EV Simulator

let evCharge = 60;

setInterval(() => {

    evCharge++;

    if(evCharge > 100)
        evCharge = 0;

    document.getElementById("evCharge")
        .textContent =
        evCharge + "%";

    document.getElementById("evCar")
        .style.left =
        evCharge + "%";

}, 100);


// 💎 Efficiency Meter

setInterval(() => {

    const efficiency =
    Math.floor(Math.random() * 15) + 85;

    document.getElementById("efficiencyValue")
        .textContent =
        efficiency + "%";

}, 2500);


// 🛰 Wireless Charging

const wirelessStates = [
    "Connected",
    "Searching",
    "Charging",
    "Optimizing"
];

setInterval(() => {

    document.getElementById("wirelessPower")
        .textContent =
        wirelessStates[
        Math.floor(Math.random()*wirelessStates.length)
        ];

}, 3000);


// ⚙ Performance Monitor

setInterval(() => {

    document.getElementById("cpuBar")
        .style.width =
        Math.floor(Math.random()*100) + "%";

    document.getElementById("ramBar")
        .style.width =
        Math.floor(Math.random()*100) + "%";

    document.getElementById("gpuBar")
        .style.width =
        Math.floor(Math.random()*100) + "%";

}, 1200);


// 🚀 Battery Prediction

const predictions = [

    "4h 25m Remaining",
    "3h 58m Remaining",
    "6h 12m Remaining",
    "5h 41m Remaining",
    "2h 49m Remaining"

];

setInterval(() => {

    document.getElementById("batteryPrediction")
        .textContent =
        predictions[
        Math.floor(Math.random()*predictions.length)
        ];

}, 5000);
setInterval(()=>{

    const temp =
    Math.floor(Math.random()*15)+30;

    document.getElementById("shieldTemp")
        .textContent =
        temp + "°C";

},2500);
const sleepModes = [

"Paused at 80%",
"Charging Slowly",
"Battery Protected",
"Optimized Mode",
"Ready by 7:00 AM"

];

setInterval(()=>{

document.getElementById("sleepStatus")
.textContent =
sleepModes[
Math.floor(Math.random()*sleepModes.length)
];

},4000);
setInterval(()=>{

const value =
Math.floor(Math.random()*100);

document.getElementById("recoveryFill")
.style.width =
value + "%";

document.getElementById("recoveryValue")
.textContent =
value + "%";

},3000);
const batteryStates = [

{
text:"SAFE",
color:"#00ff88"
},

{
text:"STABLE",
color:"#00ccff"
},

{
text:"WARNING",
color:"#ffcc00"
},

{
text:"OPTIMAL",
color:"#22c55e"
}

];

setInterval(()=>{

const state =
batteryStates[
Math.floor(Math.random()*batteryStates.length)
];

const el =
document.getElementById("safetyStatus");

el.textContent =
state.text;

el.style.color =
state.color;

},3500);