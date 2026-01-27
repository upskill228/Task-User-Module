import { TaskStatus } from './TaskStatus.js';
export class BugTask {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.status = TaskStatus.CREATED;
    }
    getType() {
        return "bug";
    }
    moveTo(newStatus) {
        if (this.status === TaskStatus.ARCHIVED) {
            throw new Error("Arquived task can't be changed.");
        }
        if (this.status === TaskStatus.COMPLETED && newStatus !== TaskStatus.ARCHIVED) {
            throw new Error("Completed task can't be changed.");
        }
        // Update status
        this.status = newStatus;
        // Mark as completed
        if (newStatus === TaskStatus.COMPLETED) {
            this.completed = true;
        }
    }
}
