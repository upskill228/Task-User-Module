import { Task } from "../models/task.js";
import { getFilter, setFilter, getSearchTerm, setSearchTerm, getIsOrderedAZ, toggleOrderAZ, getVisibleTasks, deleteTask, clearCompletedTasks } from "../services/taskService.js";
import { renderStats } from "./taskStats.js";

// ELEMENTS
const taskListUl = document.querySelector("#taskListUl") as HTMLUListElement;

const searchInput = document.querySelector("#searchTask") as HTMLInputElement;
const clearSearchBtn = document.querySelector(".clear-search") as HTMLButtonElement;

const btnShowPending = document.querySelector("#btnShowPending") as HTMLButtonElement;
const btnShowCompleted = document.querySelector("#btnShowCompleted") as HTMLButtonElement;
const btnOrder = document.querySelector("#btnOrder") as HTMLButtonElement;
const btnClearCompleted = document.querySelector("#btnClearCompleted") as HTMLButtonElement;

let onChange: (() => void) | null = null;

export function setOnChange(callback: () => void) {
    onChange = callback;
};

export function updateTaskButtonsText(): void {
    btnShowPending.textContent = getFilter() === "pending" ? "Show All" : "Pending";
    btnShowCompleted.textContent = getFilter() === "completed" ? "Show All" : "Completed";
    btnOrder.textContent = getIsOrderedAZ() ? "Original Order" : "Order A-Z";
}

export function addTaskButtons(task: Task): HTMLDivElement {
    const container = document.createElement("div");
    container.classList.add("task-actions");

    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.innerHTML = task.completed ? `<i class="fa-regular fa-square"></i>` : `<i class="fa-solid fa-check-square"></i>`;
    checkBtn.addEventListener("click", () => {
        task.toggleCompleted();
        onChange?.();
    });

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Edit task:", task.title);
        if (newTitle) task.editTitle(newTitle);
        onChange?.();
    });

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    delBtn.addEventListener("click", () => {
        deleteTask(task.id);

        onChange?.();
    });

    container.append(checkBtn, editBtn, delBtn);
    return container;
}

export function createTaskLi(task: Task): HTMLLIElement {
    const li = document.createElement("li");
    li.className = `task-item ${task.category.toLowerCase()} ${task.completed ? "completed" : ""}`;

    const header = document.createElement("div");
    header.classList.add("task-header");

    const title = document.createElement("h4");
    title.textContent = task.title;
    title.classList.add("task-title");

    const meta = document.createElement("div");
    meta.classList.add("task-meta");
    meta.textContent = task.category;
    if (task.completed && task.conclusionDate) {
        meta.textContent += ` — Completed: ${task.conclusionDate.toLocaleString("pt-PT", { day:"2-digit", month:"2-digit", hour:"2-digit", minute:"2-digit" })}`;
    }

    header.append(title);
    li.append(header, meta, addTaskButtons(task));
    return li;
};


// EVENT LISTENERS

// Filter
btnShowPending.addEventListener("click", () => {
    setFilter( getFilter() === "pending" ? "all" : "pending");
    setSearchTerm("");
    searchInput.value = "";
    onChange?.();
});
btnShowCompleted.addEventListener("click", () => {
    setFilter(getFilter() === "completed" ? "all" : "completed");
    setSearchTerm ("");
    searchInput.value = "";
    onChange?.();
});

// Order
btnOrder.addEventListener("click", () => {
    toggleOrderAZ();
    onChange?.();
});

// Clear completed
btnClearCompleted.addEventListener("click", () => {
    clearCompletedTasks();
    onChange?.();
});

// Search
searchInput.addEventListener("input", () => {
    setSearchTerm(searchInput.value.trim());
    onChange?.();
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    setSearchTerm("");
    onChange?.();
});

// RENDER
export function renderTasks(): void {
    const tasks = getVisibleTasks();
    taskListUl.innerHTML = "";
    if (!tasks.length) {
        const li = document.createElement("li");
        li.textContent = getSearchTerm()
            ? `No tasks match "${getSearchTerm()}"` 
            : "No tasks available";
        li.classList.add("no-tasks");
        taskListUl.appendChild(li);
        return;
    } else {
    tasks.forEach(task => taskListUl.appendChild(createTaskLi(task)));
    }
    renderStats();
};
