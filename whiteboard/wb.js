const canvas =
  document.getElementById("canvas");

const ctx =
  canvas.getContext("2d");

const colorPicker =
  document.getElementById("colorPicker");

const brushSize =
  document.getElementById("brushSize");

const clearBtn =
  document.getElementById("clearBtn");

const eraserBtn =
  document.getElementById("eraserBtn");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let drawing = false;

let currentColor = "#000000";

colorPicker.addEventListener("input", e => {

  currentColor = e.target.value;

});

canvas.addEventListener("mousedown", () => {

  drawing = true;

});

canvas.addEventListener("mouseup", () => {

  drawing = false;

  ctx.beginPath();

});

canvas.addEventListener("mousemove", draw);

function draw(e){

  if(!drawing){
    return;
  }

  ctx.lineWidth = brushSize.value;

  ctx.lineCap = "round";

  ctx.strokeStyle = currentColor;

  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(e.offsetX, e.offsetY);

}

clearBtn.addEventListener("click", () => {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

});

eraserBtn.addEventListener("click", () => {

  currentColor = "#ffffff";

});