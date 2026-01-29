import { TaskStatus } from "./TaskStatus.js";
export class TaskClass {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.status = TaskStatus.CREATED;
    }
    getType() {
        return "default";
    }
    moveTo(status) {
        this.status = status;
        this.completed = status === TaskStatus.COMPLETED;
    }
}
