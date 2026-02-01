// taskId -> Set de userIds
const taskToUsers = new Map();
// userId -> Set de taskIds
const userToTasks = new Map();
export function assignUser(taskId, userId) {
    if (!taskToUsers.has(taskId)) {
        taskToUsers.set(taskId, new Set());
    }
    taskToUsers.get(taskId).add(userId);
    if (!userToTasks.has(userId)) {
        userToTasks.set(userId, new Set());
    }
    userToTasks.get(userId).add(taskId);
}
export function unassignUser(taskId, userId) {
    var _a, _b;
    (_a = taskToUsers.get(taskId)) === null || _a === void 0 ? void 0 : _a.delete(userId);
    (_b = userToTasks.get(userId)) === null || _b === void 0 ? void 0 : _b.delete(taskId);
}
export function getUsersFromTask(taskId) {
    return Array.from(taskToUsers.get(taskId) || []);
}
export function getTasksFromUser(userId) {
    return Array.from(userToTasks.get(userId) || []);
}
// Statistics
export function getAllAssignedUsers() {
    const users = new Set();
    for (const userSet of taskToUsers.values()) {
        userSet.forEach(u => users.add(u));
    }
    return Array.from(users);
}
