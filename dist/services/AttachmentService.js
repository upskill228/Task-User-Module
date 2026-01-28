import { Attachment } from '../models/AttachmentClass.js';
const attachments = [];
let nextId = 1; // generate Ids
export function addAttachment(taskId, filename, size, url) {
    const attachment = new Attachment(nextId++, taskId, filename, size, url, new Date());
    attachments.push(attachment);
    return attachment;
}
export function getAttachments(taskId) {
    return attachments.filter(a => a.taskId === taskId);
}
export function deleteAttachment(attachmentId) {
    // Remove with splice
    for (let i = 0; i < attachments.length; i++) {
        if (attachments[i].id === attachmentId) {
            attachments.splice(i, 1);
            break;
        }
    }
}
