import { TaskFilter } from "../types/taskFilter.js";
import { ITask } from "../models/task.js";
import { TaskClass } from "../models/task.js";
import { TaskCategory } from "../types/taskCategory.js";

// ARRAY
let taskList: ITask[] = [
    new TaskClass(1, "This is my first made-up task", "Study"),
    new TaskClass(2, "Mock task number 2", "Work"),
    new TaskClass(3, "This is a mock task and a half", "Work"),
];

// STATE
let nextId = taskList.length > 0 ? Math.max(...taskList.map(t => t.id)) + 1 : 1;
let currentFilter: TaskFilter = "all";
let searchTerm = "";
let isOrderedAZ = false;

// SET & GET - FILTER / SEARCH / ORDER
export function setFilter(filter: TaskFilter) {
    currentFilter = filter;
};

export function getFilter(): TaskFilter {
    return currentFilter;
};

export function setSearchTerm(term: string) {
    searchTerm = term;
};

export function getSearchTerm(): string {
    return searchTerm;
};

export function toggleOrderAZ() {
    isOrderedAZ = !isOrderedAZ;
};

export function getIsOrderedAZ(): boolean {
    return isOrderedAZ;
};

export function getTaskList(): ITask[] {
    return [...taskList]; // evita mutações acidentais
};

// TASKS
export function getVisibleTasks(): ITask[] {
    let tasks = taskList.filter(task => {
        if (currentFilter === "pending" && task.completed) return false;
        if (currentFilter === "completed" && !task.completed) return false;
        if (searchTerm && !task.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    if (isOrderedAZ) {
        tasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    }

    return tasks;
}

export function addTask(title: string, category: TaskCategory): void {
    const newTask = new TaskClass(nextId++, title, category);
    taskList.push(newTask);
};

export function deleteTask(id: number) {
    taskList = taskList.filter(t => t.id !== id);
}

export function clearCompletedTasks() {
    taskList = taskList.filter(t => !t.completed);
}

// COUNT PENDING TASKS
export function countPendingTasks(): number {
    return taskList.filter(t => !t.completed).length;
}

