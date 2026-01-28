// taskId -> timestamp
const deadlines = new Map<number, number>();

function getNow(): number {
    return Date.now();
}

export function setDeadline(taskId: number, date: Date): void {
    deadlines.set(taskId, date.getTime());
}

export function isExpired(taskId: number): boolean {
    const deadline = deadlines.get(taskId);

    // If it doesn't have a deadline, it isn't expired
    if (deadline === undefined) return false;

    return deadline < getNow();
}

export function getExpiredTasks(): number[] {
    const expiredTasks: number[] = [];
    const now = getNow();

    for (const [taskId, deadline] of deadlines) {
        if (deadline < now) {
            expiredTasks.push(taskId);
        }
    }

    return expiredTasks;
}
