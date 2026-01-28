// taskId -> list of tags
const taskTags = new Map<number, string[]>();

//Adds tag to new task with Set

export function addTag(taskId: number, tag: string): void {
    const tags = taskTags.get(taskId) ?? [];

    if (!tags.includes(tag)) {
        tags.push(tag);
        taskTags.set(taskId, tags);
    }
}

// Remove tag
export function removeTag(taskId: number, tag: string): void {
    const tags = taskTags.get(taskId);
    if (!tags) return;

    const filtered = tags.filter(t => t !== tag);

    if (filtered.length > 0) {
        taskTags.set(taskId, filtered);
    } else {
        taskTags.delete(taskId);
    }
}

//Get tags
export function getTags(taskId: number): string[] {
    return taskTags.get(taskId) ?? [];
}

// IDs from task with sae+me tag
export function getTasksByTag(tag: string): number[] {
    const taskIds: number[] = [];

    for (const [taskId, tags] of taskTags.entries()) {
        if (tags.includes(tag)) {
            taskIds.push(taskId);
        }
    }

    return taskIds;
}
