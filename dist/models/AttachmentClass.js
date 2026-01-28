export class Attachment {
    constructor(id, taskId, filename, size, url, uploadedAt) {
        this.id = id;
        this.taskId = taskId;
        this.filename = filename;
        this.size = size;
        this.url = url;
        this.uploadedAt = uploadedAt;
    }
}
