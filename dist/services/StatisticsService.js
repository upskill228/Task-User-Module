import { getTaskList } from "./taskService-new.js";
import { TaskStatus } from "../tasks/TaskStatus.js";
import { getTasksFromUser } from "./AssignmentService.js";
// USERS
export function countUsers() {
    // users = chaves do assignmentService
    // como não há getUsers(), inferimos pelos task assignments
    const users = new Set();
    // percorre todas as tasks e recolhe users
    getTaskList().forEach(task => {
        getTasksFromUser(task.id).forEach(userId => users.add(userId));
    });
    return users.size;
}
// TASKS
export function countTasks() {
    return getTaskList().length;
}
export function countCompletedTasks() {
    return getTaskList().filter(task => task.status === TaskStatus.COMPLETED).length;
}
export function countActiveTasks() {
    return getTaskList().filter(task => task.status !== TaskStatus.COMPLETED &&
        task.status !== TaskStatus.ARCHIVED).length;
}
// GROUP BY STATUS
export function tasksByStatus() {
    const stats = {
        [TaskStatus.CREATED]: 0,
        [TaskStatus.ASSIGNED]: 0,
        [TaskStatus.IN_PROGRESS]: 0,
        [TaskStatus.BLOCKED]: 0,
        [TaskStatus.COMPLETED]: 0,
        [TaskStatus.ARCHIVED]: 0,
    };
    getTaskList().forEach(task => {
        stats[task.status]++;
    });
    return stats;
}
