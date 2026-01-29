import { getTaskList } from "./taskService-new.js";
import { getUsersFromTask } from "./AssignmentService.js";
import { ITask } from "../tasks/ITask.js";

export function exportTasks(): ITask[] {
    return getTaskList().map(task => ({ ...task }));
}

export function exportUsers(): number[] {
    const users = new Set<number>();

    getTaskList().forEach(task => {
        getUsersFromTask(task.id).forEach(userId =>
            users.add(userId)
        );
    });

    return Array.from(users);
}

export function exportAssignments(): {
    taskId: number;
    userIds: number[];
}[] {
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
