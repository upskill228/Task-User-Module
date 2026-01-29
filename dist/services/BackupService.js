import { getTaskList } from "./taskService-new.js";
import { getUsersFromTask } from "./AssignmentService.js";
export function exportTasks() {
    return getTaskList().map(task => (Object.assign({}, task)));
}
export function exportUsers() {
    const users = new Set();
    getTaskList().forEach(task => {
        getUsersFromTask(task.id).forEach(userId => users.add(userId));
    });
    return Array.from(users);
}
export function exportAssignments() {
    return getTaskList().map(task => ({
        taskId: task.id,
        userIds: [...getUsersFromTask(task.id)],
    }));
}
export function exportAll() {
    return {
        users: exportUsers(),
        tasks: exportTasks(),
        assignments: exportAssignments(),
    };
}
