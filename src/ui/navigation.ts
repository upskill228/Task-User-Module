// IMPORT
const userSidebar = document.querySelector("#user-sidebar") as HTMLDivElement;
const taskSidebar = document.querySelector("#task-sidebar") as HTMLDivElement;
const userSite = document.querySelector("#user-site") as HTMLElement;
const taskSite = document.querySelector("#task-site") as HTMLElement;

const userBtn= document.querySelector("#btnUsers") as HTMLButtonElement;
const taskBtn= document.querySelector("#btnTasks") as HTMLButtonElement;

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