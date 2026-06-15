const taskList = document.getElementById("taskList");

loadTasks();

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (!text) {
        alert("Enter a task");
        return;
    }

    createTask(text);
    saveTasks();

    input.value = "";
}

function createTask(text) {
    const task = document.createElement("div");

    task.className = "task";
    task.draggable = true;

    task.innerHTML = `
        <span>${text}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
        saveTasks();
    });

    task.addEventListener("dblclick", () => {
        task.classList.toggle("completed");
        saveTasks();
    });

    taskList.appendChild(task);
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

const slots = document.querySelectorAll(".slot");

slots.forEach(slot => {

    slot.addEventListener("dragover", e => {
        e.preventDefault();
        slot.classList.add("drag-over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("drag-over");
    });

    slot.addEventListener("drop", () => {
        const dragging = document.querySelector(".dragging");

        if (dragging) {
            slot.appendChild(dragging);
        }

        slot.classList.remove("drag-over");
        saveTasks();
    });
});

taskList.addEventListener("dragover", e => {
    e.preventDefault();
});

taskList.addEventListener("drop", () => {
    const dragging = document.querySelector(".dragging");

    if (dragging) {
        taskList.appendChild(dragging);
    }

    saveTasks();
});

function saveTasks() {
    localStorage.setItem(
        "plannerData",
        document.querySelector(".planner").innerHTML
    );
}

function loadTasks() {
    const saved = localStorage.getItem("plannerData");

    if (saved) {
        document.querySelector(".planner").innerHTML = saved;

        restoreEvents();
    }
}

function restoreEvents() {

    document.querySelectorAll(".task").forEach(task => {

        task.draggable = true;

        task.addEventListener("dragstart", () => {
            task.classList.add("dragging");
        });

        task.addEventListener("dragend", () => {
            task.classList.remove("dragging");
            saveTasks();
        });

        task.addEventListener("dblclick", () => {
            task.classList.toggle("completed");
            saveTasks();
        });
    });

    document.querySelectorAll(".slot").forEach(slot => {

        slot.addEventListener("dragover", e => {
            e.preventDefault();
            slot.classList.add("drag-over");
        });

        slot.addEventListener("dragleave", () => {
            slot.classList.remove("drag-over");
        });

        slot.addEventListener("drop", () => {
            const dragging = document.querySelector(".dragging");

            if (dragging) {
                slot.appendChild(dragging);
            }

            slot.classList.remove("drag-over");
            saveTasks();
        });
    });
}