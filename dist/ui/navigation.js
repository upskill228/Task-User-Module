// IMPORT
const userSidebar = document.querySelector("#user-sidebar");
const taskSidebar = document.querySelector("#task-sidebar");
const userSite = document.querySelector("#user-site");
const taskSite = document.querySelector("#task-site");
const userBtn = document.querySelector("#btnUsers");
const taskBtn = document.querySelector("#btnTasks");
// CHANGE VISIBILITY
export function showUserSite() {
    userSidebar.classList.add("active");
    taskSidebar.classList.remove("active");
    userSite.classList.add("active");
    taskSite.classList.remove("active");
}
export function showTaskSite() {
    userSidebar.classList.remove("active");
    taskSidebar.classList.add("active");
    userSite.classList.remove("active");
    taskSite.classList.add("active");
}
export function initNavigation() {
    userBtn.addEventListener("click", showUserSite);
    taskBtn.addEventListener("click", showTaskSite);
}
