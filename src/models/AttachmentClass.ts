export class Attachment {
    id: number
    taskId: number
    filename: string
    size: number
    url: string
    uploadedAt: Date
    
    constructor(id: number, taskId: number, filename: string, size: number, url: string, uploadedAt: Date) {
        this.id = id
        this.taskId = taskId
        this.filename = filename
        this.size = size
        this.url = url
        this.uploadedAt = uploadedAt
    }
}