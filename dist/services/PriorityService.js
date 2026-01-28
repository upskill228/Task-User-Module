import { Priority } from '../tasks/Priority.js';
const priorityMap = new Map();
export function setPriority(taskId, level) {
    priorityMap.set(taskId, level);
}
export function getPriority(taskId) {
    return priorityMap.get(taskId);
}
export function getHighPriorityTasks() {
    const highPriorityTasks = [];
    for (const [taskId, level] of priorityMap) {
        if (level === Priority.HIGH || level === Priority.CRITICAL) {
            highPriorityTasks.push(taskId);
        }
    }
    return highPriorityTasks;
}
