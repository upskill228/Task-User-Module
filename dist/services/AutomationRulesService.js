import { TaskStatus } from "../tasks/TaskStatus.js";
import { getTasksFromUser, unassignUser } from "./AssignmentService.js";
export function applyRules(task) {
    if (task.status === TaskStatus.COMPLETED) {
        logTaskCompleted(task);
    }
    if (task.status === TaskStatus.BLOCKED) {
        notifyTaskBlocked(task);
    }
    if (hasTaskExpired(task)) {
        moveTaskToBlocked(task);
    }
}
export function applyUserRules(userId) {
    if (isUserInactive(userId)) {
        removeUserAssignments(userId);
    }
}
function logTaskCompleted(task) {
    console.log(`Task ${task.id} completed: "${task.title}"`);
}
function notifyTaskBlocked(task) {
    console.log(`Notification: Task ${task.id} is blocked.`);
}
function hasTaskExpired(task) {
    return false;
}
function moveTaskToBlocked(task) {
    task.moveTo(TaskStatus.BLOCKED);
    notifyTaskBlocked(task);
}
function isUserInactive(userId) {
    return false;
}
function removeUserAssignments(userId) {
    const tasks = getTasksFromUser(userId);
    tasks.forEach(taskId => unassignUser(taskId, userId));
}
