import { ITask } from "./ITask.js";
import { TaskStatus } from "./TaskStatus.js";

export class TaskClass implements ITask {
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
        return "default";
    }

    moveTo(status: TaskStatus): void {
        this.status = status;
        this.completed = status === TaskStatus.COMPLETED;
    }
}
