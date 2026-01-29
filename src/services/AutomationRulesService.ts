import { ITask } from "../tasks/ITask.js";
import { TaskStatus } from "../tasks/TaskStatus.js";
import { getTasksFromUser, unassignUser } from "./AssignmentService.js";

// Aqui assumimos que tens algum UserService ou uma lista de users
// Para o exemplo, vamos usar apenas userId: number
// E vamos supor que existe uma função isUserInactive(userId)

export function applyRules(task: ITask) {
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

export function applyUserRules(userId: number) {
    if (isUserInactive(userId)) {
        removeUserAssignments(userId);
    }
}

function logTaskCompleted(task: ITask) {
    console.log(`Task ${task.id} completed: "${task.title}"`);
}

function notifyTaskBlocked(task: ITask) {
    console.log(`Notification: Task ${task.id} is blocked.`);
}

function hasTaskExpired(task: ITask): boolean {
    // Placeholder: supõe que Task tem expiryDate: Date
    // Se não tiver, podes usar createdAt + duração fictícia
    return false; // implementar regra real depois
}

function moveTaskToBlocked(task: ITask) {
    task.moveTo(TaskStatus.BLOCKED);
    notifyTaskBlocked(task); // opcional: notificar logo
}

function isUserInactive(userId: number): boolean {
    // Placeholder: supõe que tens user status
    return false; // implementar regra real depois
}

function removeUserAssignments(userId: number) {
    const tasks = getTasksFromUser(userId);
    tasks.forEach(taskId => unassignUser(taskId, userId));
}