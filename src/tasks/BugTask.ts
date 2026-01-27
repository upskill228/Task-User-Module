import { ITask } from './ITask.js';
import { TaskStatus } from './TaskStatus.js';

export class BugTask implements ITask {

    id: number;
    title: string;
    completed: boolean;
    status: TaskStatus;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.status = TaskStatus.CREATED;
    }

    getType(): string {
        return "bug";
    }

    moveTo(newStatus: TaskStatus): void {

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
