// taskId -> timestamp
const deadlines = new Map();
function getNow() {
    return Date.now();
}
export function setDeadline(taskId, date) {
    deadlines.set(taskId, date.getTime());
}
export function isExpired(taskId) {
    const deadline = deadlines.get(taskId);
    // If it doesn't have a deadline, it isn't expired
    if (deadline === undefined)
        return false;
    return deadline < getNow();
}
export function getExpiredTasks() {
    const expiredTasks = [];
    const now = getNow();
    for (const [taskId, deadline] of deadlines) {
        if (deadline < now) {
            expiredTasks.push(taskId);
        }
    }
    return expiredTasks;
}
