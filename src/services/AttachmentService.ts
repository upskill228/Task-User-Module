import { Attachment } from '../models/AttachmentClass.js';

const attachments: Attachment[] = [];

let nextId = 1; // generate Ids

export function addAttachment(
    taskId: number,
    filename: string,
    size: number,
    url: string
): Attachment {
    const attachment = new Attachment(
        nextId++,
        taskId,
        filename,
        size,
        url,
        new Date()
    );

    attachments.push(attachment);
    return attachment;
}

export function getAttachments(taskId: number): Attachment[] {
    return attachments.filter(a => a.taskId === taskId);
}

export function deleteAttachment(attachmentId: number): void {
    // Remove with splice
    for (let i = 0; i < attachments.length; i++) {
        if (attachments[i].id === attachmentId) {
            attachments.splice(i, 1);
            break;
        }
    }
}
