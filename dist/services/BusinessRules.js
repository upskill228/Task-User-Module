export class BusinessRules {
    static canUserBeDeactivated(activeTasks) {
        return activeTasks === 0;
    }
    static canTaskBeCompleted(isBlocked) {
        return !isBlocked;
    }
    static canAssignTask(active) {
        return active;
    }
    static isValidTitle(title) {
        if (!title)
            return false; // null ou undefined
        const trimmed = title.trim();
        return trimmed.length >= 3;
    }
}
