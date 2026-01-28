export class Comment {
    id: number;
    taskId: number;
    userId: number;
    message: string;
    createdAt: Date;

    constructor(id: number, taskId: number, userId: number, message: string) {
        this.id = id;
        this.taskId = taskId;
        this.userId = userId;
        this.message = message;
        this.createdAt = new Date();
    }

}