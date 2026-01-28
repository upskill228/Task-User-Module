export class Comment {
    constructor(id, taskId, userId, message) {
        this.id = id;
        this.taskId = taskId;
        this.userId = userId;
        this.message = message;
        this.createdAt = new Date();
    }
}
