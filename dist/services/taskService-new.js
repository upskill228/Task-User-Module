import { TaskClass } from "../tasks/TaskClass.js";
// ARRAY
let taskList = [
    new TaskClass(1, "This is my first made-up task"),
    new TaskClass(2, "Mock task number 2"),
    new TaskClass(3, "This is a mock task and a half"),
];
// STATE
let nextId = taskList.length > 0 ? Math.max(...taskList.map(t => t.id)) + 1 : 1;
let currentFilter = "all";
let searchTerm = "";
let isOrderedAZ = false;
// SET & GET - FILTER / SEARCH / ORDER
export function setFilter(filter) {
    currentFilter = filter;
}
;
export function getFilter() {
    return currentFilter;
}
;
export function setSearchTerm(term) {
    searchTerm = term;
}
;
export function getSearchTerm() {
    return searchTerm;
}
;
export function toggleOrderAZ() {
    isOrderedAZ = !isOrderedAZ;
}
;
export function getIsOrderedAZ() {
    return isOrderedAZ;
}
;
export function getTaskList() {
    return [...taskList]; // evita mutações acidentais
}
;
// TASKS
export function getVisibleTasks() {
    let tasks = taskList.filter(task => {
        if (currentFilter === "pending" && task.completed)
            return false;
        if (currentFilter === "completed" && !task.completed)
            return false;
        if (searchTerm && !task.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return false;
        return true;
    });
    if (isOrderedAZ) {
        tasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tasks;
}
export function addTask(title) {
    const newTask = new TaskClass(nextId++, title);
    taskList.push(newTask);
}
export function deleteTask(id) {
    taskList = taskList.filter(t => t.id !== id);
}
export function clearCompletedTasks() {
    taskList = taskList.filter(t => !t.completed);
}
// COUNT PENDING TASKS
export function countPendingTasks() {
    return taskList.filter(t => !t.completed).length;
}
