// taskId -> timestamp
const deadlines = {};
function getNow() {
    return Date.now();
}
export function setDeadline(taskId, date) {
    deadlines[taskId] = date.getTime();
}
export function isExpired(taskId) {
    const deadline = deadlines[taskId];
    // Se não existir deadline, não está expirada
    if (deadline === undefined)
        return false;
    return deadline < getNow();
}
export function getExpiredTasks() {
    const expiredTasks = [];
    for (const taskId in deadlines) {
        const deadline = deadlines[taskId];
        if (deadline < getNow()) {
            expiredTasks.push(Number(taskId));
        }
    }
    return expiredTasks;
}
