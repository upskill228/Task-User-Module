// taskId -> list of tags
const taskTags = new Map();
//Adds tag to new task with Set
export function addTag(taskId, tag) {
    var _a;
    const tags = (_a = taskTags.get(taskId)) !== null && _a !== void 0 ? _a : [];
    if (!tags.includes(tag)) {
        tags.push(tag);
        taskTags.set(taskId, tags);
    }
}
// Remove tag
export function removeTag(taskId, tag) {
    const tags = taskTags.get(taskId);
    if (!tags)
        return;
    const filtered = tags.filter(t => t !== tag);
    if (filtered.length > 0) {
        taskTags.set(taskId, filtered);
    }
    else {
        taskTags.delete(taskId);
    }
}
//Get tags
export function getTags(taskId) {
    var _a;
    return (_a = taskTags.get(taskId)) !== null && _a !== void 0 ? _a : [];
}
// IDs from task with sae+me tag
export function getTasksByTag(tag) {
    const taskIds = [];
    for (const [taskId, tags] of taskTags.entries()) {
        if (tags.includes(tag)) {
            taskIds.push(taskId);
        }
    }
    return taskIds;
}
