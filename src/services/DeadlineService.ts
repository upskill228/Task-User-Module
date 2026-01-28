
// taskId -> timestamp
const deadlines: Record<number, number> = {};

function getNow(): number {
    return Date.now();
}

export function setDeadline(taskId: number, date: Date): void {
    deadlines[taskId] = date.getTime();
}


export function isExpired(taskId: number): boolean {
    const deadline = deadlines[taskId];

    // Se não existir deadline, não está expirada
    if (deadline === undefined) return false;

    return deadline < getNow();
}

export function getExpiredTasks(): number[] {
    const expiredTasks: number[] = [];

    for (const taskId in deadlines) {
        const deadline = deadlines[taskId];

        if (deadline < getNow()) {
            expiredTasks.push(Number(taskId));
        }
    }

    return expiredTasks;
}
