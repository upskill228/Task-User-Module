import { Priority } from '../tasks/Priority.js';

const priorityMap = new Map<number, Priority>();

export function setPriority(taskId: number, level: Priority): void {
    priorityMap.set(taskId, level);
}

export function getPriority(taskId: number,): Priority | undefined {
    return priorityMap.get(taskId);
}

export function getHighPriorityTasks(): number[] {
    const highPriorityTasks: number[] = [];

    for (const [taskId, level] of priorityMap) {
      if (level === Priority.HIGH || level === Priority.CRITICAL) {
            highPriorityTasks.push(taskId);
        }
    }
    
    return highPriorityTasks;
}

