import { getTaskList } from "./taskService-new.js";
import { getTasksFromUser } from "./AssignmentService.js";
//Search tasks by title
export function searchByTitle(text) {
    if (!text.trim())
        return [];
    const term = text.toLowerCase();
    return getTaskList().filter(task => task.title.toLowerCase().includes(term));
}
//Search tasks by userId
export function searchByUser(userId) {
    const taskIds = new Set(getTasksFromUser(userId));
    return getTaskList().filter(task => taskIds.has(task.id));
}
// Search tasks by status
export function searchByStatus(status) {
    return getTaskList().filter(task => task.status === status);
}
// Global search
export function globalSearch(query) {
    const results = [];
    if (query.text) {
        results.push(...searchByTitle(query.text));
    }
    if (query.userId !== undefined) {
        results.push(...searchByUser(query.userId));
    }
    if (query.status !== undefined) {
        results.push(...searchByStatus(query.status));
    }
    // remover duplicados (por id)
    const unique = new Map();
    for (const task of results) {
        unique.set(task.id, task);
    }
    return Array.from(unique.values());
}
