const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let tasks = [];

function updateStats() {

  totalTasks.innerText = `Total: ${tasks.length}`;

  const completed = tasks.filter(task => task.completed).length;

  completedTasks.innerText = `Completed: ${completed}`;
}

function renderTasks() {

  todoList.innerHTML = "";

  tasks.forEach((task, index) => {

    const li = document.createElement("li");

    li.className = task.completed
      ? "todo-item completed"
      : "todo-item";

    li.innerHTML = `
      <div class="left">

        <div class="check-circle"
          onclick="toggleTask(${index})">
        </div>

        <span class="task-text">
          ${task.text}
        </span>

      </div>

      <button class="delete-btn"
        onclick="deleteTask(${index})">
        ✖
      </button>
    `;

    todoList.appendChild(li);
  });

  updateStats();
}

function addTask() {

  const text = taskInput.value.trim();

  if(text === ""){
    alert("Please enter a task");
    return;
  }

  tasks.push({
    text:text,
    completed:false
  });

  taskInput.value = "";

  renderTasks();
}

function toggleTask(index){

  tasks[index].completed =
    !tasks[index].completed;

  renderTasks();
}

function deleteTask(index){

  tasks.splice(index,1);

  renderTasks();
}

taskInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    addTask();
  }

});

let currentFilter = "all";

loadTasks();

function setFilter(filter,btn){

  currentFilter = filter;

  document
    .querySelectorAll(".filter-btn")
    .forEach(b=>b.classList.remove("active"));

  btn.classList.add("active");

  renderTasks();

}

function updateProgress(){

  const completed =
    tasks.filter(t=>t.completed).length;

  const percentage =
    tasks.length
      ? Math.round(
          (completed/tasks.length)*100
        )
      : 0;

  document.getElementById(
    "progressFill"
  ).style.width = percentage + "%";

  document.getElementById(
    "progressText"
  ).textContent =
    percentage + "% Complete";
}

const search =
  document
  .getElementById("searchInput")
  .value
  .toLowerCase();

let filtered = tasks.filter(task=>{

  const matchesSearch =
    task.text.toLowerCase().includes(search);

  if(currentFilter==="active")
    return !task.completed && matchesSearch;

  if(currentFilter==="completed")
    return task.completed && matchesSearch;

  return matchesSearch;

});

function editTask(index){

  const updated =
    prompt(
      "Edit Task",
      tasks[index].text
    );

  if(updated){

    tasks[index].text = updated;

    saveTasks();

    renderTasks();

  }

}