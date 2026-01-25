import { countPendingTasks } from "../services/taskService.js";

const countPendingTasksDiv = document.querySelector("#countPendingTasks") as HTMLDivElement;

export function renderStats() {
    countPendingTasksDiv.innerHTML = `
      <h3>Stats</h3>
      <p>Pending Tasks: <strong>${countPendingTasks()}</strong></p>`;
}