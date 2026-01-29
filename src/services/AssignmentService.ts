// taskId -> Set de userIds
const taskToUsers = new Map<number, Set<number>>();

// userId -> Set de taskIds
const userToTasks = new Map<number, Set<number>>();

export function assignUser(taskId: number, userId: number): void {
    if (!taskToUsers.has(taskId)) {
        taskToUsers.set(taskId, new Set());
    }
    taskToUsers.get(taskId)!.add(userId);

    if (!userToTasks.has(userId)) {
        userToTasks.set(userId, new Set());
    }
    userToTasks.get(userId)!.add(taskId);
}

export function unassignUser(taskId: number, userId: number): void {
    taskToUsers.get(taskId)?.delete(userId);
    userToTasks.get(userId)?.delete(taskId);
}

export function getUsersFromTask(taskId: number): number[] {
    return Array.from(taskToUsers.get(taskId) || []);
}

export function getTasksFromUser(userId: number): number[] {
    return Array.from(userToTasks.get(userId) || []);
}

//Statistics
export function getAllAssignedUsers(): number[] {
    const users = new Set<number>();
    for (const userSet of taskToUsers.values()) {
        userSet.forEach(u => users.add(u));
    }
    return Array.from(users);
}