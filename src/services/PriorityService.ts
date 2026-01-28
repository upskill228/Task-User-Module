import { Priority } from '../tasks/Priority.js';

const priorityMap = new Map<string, Priority>();

export function setPriority(taskId: string, level: Priority): void {
    priorityMap.set(taskId, level);
}

export function getPriority(taskId: string): Priority | undefined {
    return priorityMap.get(taskId);
}

export function getHighPriorityTasks(): string[] {
    const highPriorityTasks: string[] = [];

    for (const [taskId, level] of priorityMap) {
      if (level === Priority.HIGH || level === Priority.CRITICAL) {
            highPriorityTasks.push(taskId);
        }
    }
    
    return highPriorityTasks;
}

