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