import { getTaskList } from "./taskServiceNew.js";
import { TaskStatus } from "../tasks/TaskStatus.js";
import { getAllAssignedUsers } from "./AssignmentService.js";


// USERS
export function countUsers(): number {
    return getAllAssignedUsers().length;
}

// TASKS
export function countTasks(): number {
    return getTaskList().length;
}

export function countCompletedTasks(): number {
    return getTaskList().filter(
        task => task.status === TaskStatus.COMPLETED
    ).length;
}

export function countActiveTasks(): number {
    return getTaskList().filter(
        task => task.status !== TaskStatus.COMPLETED &&
                task.status !== TaskStatus.ARCHIVED
    ).length;
}

// GROUP BY STATUS
export function tasksByStatus(): Record<TaskStatus, number> {
    const stats: Record<TaskStatus, number> = {
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
