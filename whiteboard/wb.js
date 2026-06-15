const canvas      = document.getElementById("canvas");
const ctx         = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const colorIndicator = document.getElementById("colorIndicator");
const brushSize   = document.getElementById("brushSize");
const clearBtn    = document.getElementById("clearBtn");
const brushBtn    = document.getElementById("brushBtn");
const eraserBtn   = document.getElementById("eraserBtn");
const fillBtn     = document.getElementById("fillBtn");
const undoBtn     = document.getElementById("undoBtn");
const redoBtn     = document.getElementById("redoBtn");
const shapeBtn    = document.getElementById("shapeBtn");
const shapeBtnIcon = document.getElementById("shapeBtnIcon");
const shapePopover = document.getElementById("shapePopover");
const shapePickerWrapper = document.getElementById("shapePickerWrapper");
const canvasHint  = document.getElementById("canvasHint");

// Modal Save controls
const saveModalBtn     = document.getElementById("saveModalBtn");
const saveModalOverlay = document.getElementById("saveModalOverlay");
const savePngBtn       = document.getElementById("savePngBtn");
const saveJpgBtn       = document.getElementById("saveJpgBtn");
const cancelSaveBtn    = document.getElementById("cancelSaveBtn");

// Virtual shape buttons (not in DOM, just state holders)
const lineBtn    = document.createElement("button");
const rectBtn    = document.createElement("button");
const ellipseBtn = document.createElement("button");

// Canvas sizing 
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// State 
let drawing      = false;
let currentColor = "#ff3737";

let shapeStartX  = 0;
let shapeStartY  = 0;
let shapeSnapshot = null;

const SHAPE_TOOLS = [lineBtn, rectBtn, ellipseBtn];
const isShapeTool = () => SHAPE_TOOLS.some(b => b.classList.contains("active"));

// History 
let history      = [];
let historyIndex = -1;

function saveSnapshot() {
  history = history.slice(0, historyIndex + 1);
  history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  historyIndex++;
}

// Initial canvas setup - Using a slightly off-white transparent clear for PNGs, but solid for JPGs
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
saveSnapshot();

// Hint dismissal 
let hintDismissed = false;

function dismissHint() {
  if (hintDismissed) return;
  hintDismissed = true;
  canvasHint.classList.add("hidden");
}

// Tool activation 
function setActiveTool(tool) {
  [brushBtn, eraserBtn, fillBtn].forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  SHAPE_TOOLS.forEach(b => b.classList.remove("active"));

  if (!SHAPE_TOOLS.includes(tool)) {
    shapeBtn.classList.remove("active");
    shapeBtn.setAttribute("aria-pressed", "false");
  }

  if (SHAPE_TOOLS.includes(tool)) {
    tool.classList.add("active");
    shapeBtn.classList.add("active");
    shapeBtn.setAttribute("aria-pressed", "true");
  } else {
    tool.classList.add("active");
    tool.setAttribute("aria-pressed", "true");
  }

  canvas.classList.toggle("fill-mode", tool === fillBtn);
}

// Canvas events 
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  dismissHint();
  if (isShapeTool()) {
    shapeStartX   = e.offsetX;
    shapeStartY   = e.offsetY;
    shapeSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mouseup", (e) => {
  if (!drawing) return;
  if (isShapeTool()) {
    ctx.putImageData(shapeSnapshot, 0, 0);
    drawShape(e.offsetX, e.offsetY, false);
  }
  drawing = false;
  ctx.beginPath();
  saveSnapshot();
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  if (isShapeTool()) {
    ctx.putImageData(shapeSnapshot, 0, 0);
    drawShape(e.offsetX, e.offsetY, true);
    return;
  }
  drawFreehand(e);
});

canvas.addEventListener("click", (e) => {
  if (!fillBtn.classList.contains("active")) return;
  floodFill(e.offsetX, e.offsetY, currentColor);
  saveSnapshot();
});

// Touch support
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect  = canvas.getBoundingClientRect();
  const fake  = { offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top };
  drawing = true;
  dismissHint();
  if (isShapeTool()) {
    shapeStartX   = fake.offsetX;
    shapeStartY   = fake.offsetY;
    shapeSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }
}, { passive: false });

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (!drawing) return;
  const touch = e.touches[0];
  const rect  = canvas.getBoundingClientRect();
  const fake  = { offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top };
  if (isShapeTool()) {
    ctx.putImageData(shapeSnapshot, 0, 0);
    drawShape(fake.offsetX, fake.offsetY, true);
    return;
  }
  drawFreehand(fake);
}, { passive: false });

canvas.addEventListener("touchend", (e) => {
  if (!drawing) return;
  if (isShapeTool() && e.changedTouches.length) {
    const touch = e.changedTouches[0];
    const rect  = canvas.getBoundingClientRect();
    ctx.putImageData(shapeSnapshot, 0, 0);
    drawShape(touch.clientX - rect.left, touch.clientY - rect.top, false);
  }
  drawing = false;
  ctx.beginPath();
  saveSnapshot();
});

// Drawing functions 
function drawFreehand(e) {
  ctx.lineWidth   = brushSize.value;
  ctx.lineCap     = "round";
  ctx.strokeStyle = currentColor;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function drawShape(ex, ey, isGhost) {
  ctx.save();
  ctx.lineWidth   = brushSize.value;
  ctx.lineCap     = "round";
  ctx.strokeStyle = currentColor;
  if (isGhost) ctx.globalAlpha = 0.55;

  const x = Math.min(shapeStartX, ex);
  const y = Math.min(shapeStartY, ey);
  const w = Math.abs(ex - shapeStartX);
  const h = Math.abs(ey - shapeStartY);

  ctx.beginPath();
  if (lineBtn.classList.contains("active")) {
    ctx.moveTo(shapeStartX, shapeStartY);
    ctx.lineTo(ex, ey);
  } else if (rectBtn.classList.contains("active")) {
    ctx.rect(x, y, w, h);
  } else if (ellipseBtn.classList.contains("active")) {
    if (w === 0 || h === 0) { ctx.restore(); return; }
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
  }
  ctx.stroke();
  ctx.restore();
}

// Flood fill 
function floodFill(startX, startY, fillColor) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  const idx = (Math.floor(startY) * canvas.width + Math.floor(startX)) * 4;
  const target = [data[idx], data[idx+1], data[idx+2], data[idx+3]];

  const tmp = document.createElement("canvas");
  tmp.width = tmp.height = 1;
  const tmpCtx = tmp.getContext("2d");
  tmpCtx.fillStyle = fillColor;
  tmpCtx.fillRect(0, 0, 1, 1);
  const [fr, fg, fb, fa] = tmpCtx.getImageData(0, 0, 1, 1).data;

  if (target[0]===fr && target[1]===fg && target[2]===fb && target[3]===fa) return;

  const match = (i) =>
    data[i]===target[0] && data[i+1]===target[1] &&
    data[i+2]===target[2] && data[i+3]===target[3];

  const stack   = [Math.floor(startX) + Math.floor(startY) * canvas.width];
  const visited = new Uint8Array(canvas.width * canvas.height);

  while (stack.length) {
    const pos = stack.pop();
    if (visited[pos]) continue;
    visited[pos] = 1;
    const i = pos * 4;
    if (!match(i)) continue;
    data[i]=fr; data[i+1]=fg; data[i+2]=fb; data[i+3]=fa;
    const x = pos % canvas.width;
    const y = Math.floor(pos / canvas.width);
    if (x > 0)               stack.push(pos - 1);
    if (x < canvas.width-1)  stack.push(pos + 1);
    if (y > 0)               stack.push(pos - canvas.width);
    if (y < canvas.height-1) stack.push(pos + canvas.width);
  }

  ctx.putImageData(imageData, 0, 0);
}

// Color picker 
function syncColorIndicator(color) {
  colorIndicator.style.background = color;
}

colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
  syncColorIndicator(currentColor);
  if (eraserBtn.classList.contains("active")) {
    setActiveTool(brushBtn);
  }
});

syncColorIndicator(colorPicker.value);

// Toolbar buttons 
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  saveSnapshot();
});

brushBtn.addEventListener("click", () => {
  currentColor = colorPicker.value;
  setActiveTool(brushBtn);
});

eraserBtn.addEventListener("click", () => {
  currentColor = "#ffffff";
  setActiveTool(eraserBtn);
});

fillBtn.addEventListener("click", () => {
  setActiveTool(fillBtn);
});

// Shape popover 
shapeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = shapePopover.classList.toggle("open");
  shapeBtn.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (e) => {
  if (!shapePickerWrapper.contains(e.target)) {
    shapePopover.classList.remove("open");
    shapeBtn.setAttribute("aria-expanded", "false");
  }
});

const shapeIconMap = {
  line:    "fa-solid fa-minus",
  rect:    "fa-regular fa-square",
  ellipse: "fa-regular fa-circle",
};

const shapeBtnMap = { line: lineBtn, rect: rectBtn, ellipse: ellipseBtn };

document.querySelectorAll(".shape-opt").forEach(opt => {
  opt.addEventListener("click", () => {
    const shape = opt.dataset.shape;
    shapeBtnIcon.className = shapeIconMap[shape];
    document.querySelectorAll(".shape-opt").forEach(o => o.classList.remove("active"));
    opt.classList.add("active");
    shapePopover.classList.remove("open");
    shapeBtn.setAttribute("aria-expanded", "false");
    currentColor = colorPicker.value;
    setActiveTool(shapeBtnMap[shape]);
  });
});

// Undo / Redo 
undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);

function undo() {
  if (historyIndex <= 0) return;
  historyIndex--;
  ctx.putImageData(history[historyIndex], 0, 0);
}

function redo() {
  if (historyIndex >= history.length - 1) return;
  historyIndex++;
  ctx.putImageData(history[historyIndex], 0, 0);
}

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) { e.preventDefault(); undo(); }
  if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.key === "z" && e.shiftKey))) { e.preventDefault(); redo(); }
});

// Modal Save Logic
const closeSaveModal = () => {
  saveModalOverlay.classList.remove("active");
};

saveModalBtn.addEventListener("click", () => {
  saveModalOverlay.classList.add("active");
});

cancelSaveBtn.addEventListener("click", closeSaveModal);

saveModalOverlay.addEventListener("click", (e) => {
  if (e.target === saveModalOverlay) closeSaveModal();
});

function executeSave(format) {
  const mimeType = format === "jpg" ? "image/jpeg" : "image/png";
  const quality  = format === "jpg" ? 0.95 : undefined;
  
  if (format === "jpg") {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.fillStyle = "#ffffff";
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.drawImage(canvas, 0, 0);
      
      const link = document.createElement("a");
      link.download = `drawing.jpg`;
      link.href = tempCanvas.toDataURL(mimeType, quality);
      link.click();
  } else {
      const link = document.createElement("a");
      link.download = `drawing.png`;
      link.href = canvas.toDataURL(mimeType);
      link.click();
  }
}

savePngBtn.addEventListener("click", () => {
  executeSave("png");
  closeSaveModal();
});

});

// Save Canvas

saveBtn.addEventListener("click", () => {
  const link = document.createElement("a");

  link.download = "whiteboard.png";
  link.href = canvas.toDataURL();

  link.click();
});

// Brush Size Label

brushSize.addEventListener("input", () => {
  sizeValue.textContent = brushSize.value;
saveJpgBtn.addEventListener("click", () => {
  executeSave("jpg");
  closeSaveModal();
});