const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => { if(e.key === "Enter") addTask(); });
taskInput.addEventListener("input", () => {
  addTaskBtn.disabled = taskInput.value.trim() === "";
});
addTaskBtn.disabled = true;

// Confirms and clears all tasks from both lists and storage
document.getElementById("clearAllBtn").addEventListener("click", () => {
  if(!confirm("Clear all tasks?")) return;
  pendingTasks.innerHTML = "";
  completedTasks.innerHTML = "";
  localStorage.removeItem("tasks");
});

// serializes both lists to localStorage on every add, complete, or delete
function saveTasks(){
  const pending = [...pendingTasks.querySelectorAll(".task-card span")].map(s => s.textContent);
  const completed = [...completedTasks.querySelectorAll(".task-card span")].map(s => s.textContent);
  localStorage.setItem("tasks", JSON.stringify({ pending, completed }));
}

function createTaskCard(taskText, isCompleted = false){
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  const span = document.createElement("span");
  span.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.setAttribute("data-tooltip", "Delete task");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener("click", () => { taskCard.remove(); saveTasks(); });

  if(!isCompleted){
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.setAttribute("aria-label", "Mark task as completed");
    completeBtn.setAttribute("data-tooltip", "Mark as completed");
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeBtn.addEventListener("click", () => {
      completeBtn.remove();
      completedTasks.appendChild(taskCard);
      saveTasks();
    });
    buttonsDiv.appendChild(completeBtn);
  }

  buttonsDiv.appendChild(deleteBtn);
  taskCard.appendChild(span);
  taskCard.appendChild(buttonsDiv);
  return taskCard;
}

function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText === "") return;
  pendingTasks.appendChild(createTaskCard(taskText, false));
  taskInput.value = "";
  addTaskBtn.disabled = true;
  saveTasks();
}

// runs on page load and rebuilds the cards from storage
function loadTasks(){
  const saved = localStorage.getItem("tasks");
  if(!saved) return;
  const { pending, completed } = JSON.parse(saved);
  pending.forEach(t => pendingTasks.appendChild(createTaskCard(t, false)));
  completed.forEach(t => completedTasks.appendChild(createTaskCard(t, true)));
}

loadTasks();

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

function updateStats() {

  const pending =
    pendingTasks.children.length;

  const completed =
    completedTasks.children.length;

  const total = pending + completed;

  document.getElementById("pendingCount").innerText = pending;
  document.getElementById("completedCount").innerText = completed;
  document.getElementById("totalTasks").innerText = total;

  let progress = total
    ? Math.round((completed / total) * 100)
    : 0;

  document.getElementById("progressText").innerText =
    progress + "%";

  document.getElementById("progressFill").style.width =
    progress + "%";
}

function createTask(text){

  const task = document.createElement("div");
  task.classList.add("task");

  task.innerHTML = `
    <span>${text}</span>

    <button class="complete-btn">
      <i class="fas fa-check"></i>
    </button>

    <button class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  `;

  const completeBtn =
    task.querySelector(".complete-btn");

  const deleteBtn =
    task.querySelector(".delete-btn");

  completeBtn.onclick = () => {

    completedTasks.appendChild(task);

    completeBtn.remove();

    task.style.animation =
      "slideIn .5s ease";

    updateStats();
  };

  deleteBtn.onclick = () => {
    task.remove();
    updateStats();
  };

  pendingTasks.appendChild(task);

  updateStats();
}

addTaskBtn.onclick = () => {

  const text = taskInput.value.trim();

  if(!text) return;

  createTask(text);

  taskInput.value = "";
};

function updateClock(){

  const now = new Date();

  document.getElementById("time").innerText =
    now.toLocaleTimeString();

  document.getElementById("date").innerText =
    now.toDateString();
}

setInterval(updateClock,1000);
updateClock();

function updateGoal(progress){

 const circle =
 document.getElementById("goalProgress");

 const percent =
 document.getElementById("goalPercent");

 let offset = 377 - (377 * progress)/100;

 circle.style.strokeDashoffset = offset;

 percent.innerText = progress + "%";
}

const focusBtn =
document.getElementById("focusBtn");

focusBtn.addEventListener("click",()=>{

 document.body.classList.toggle("focus");

 const active =
 document.body.classList.contains("focus");

 document.getElementById("focusStatus")
 .innerText = active
 ? "Focus Mode Enabled"
 : "Normal Mode";
});

function updateInsights(){

 let completed =
 document.getElementById("completedTasks")
 .children.length;

 let insight =
 document.getElementById("insightText");

 if(completed >= 10){

   insight.innerHTML =
   "🏆 Amazing! You're having a highly productive day.";

 }else if(completed >= 5){

   insight.innerHTML =
   "🚀 Great work! Keep your momentum going.";

 }else{

   insight.innerHTML =
   "⚡ Complete more tasks to unlock achievements.";
 }
}

const cursor =
document.querySelector(".cursor");

const blur =
document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

    blur.style.left =
    e.clientX - 20 + "px";

    blur.style.top =
    e.clientY - 20 + "px";
});

/* Button Hover Effect */

document
.querySelectorAll("button,a")
.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        blur.style.transform =
        "scale(2)";
    });

    item.addEventListener("mouseleave",()=>{

        blur.style.transform =
        "scale(1)";
    });

});