import { Comment } from '../models/CommentClass.js';

const comments: Comment[] = [];

let nextId = 1; // generate Ids

export function addComment(taskId: number, userId: number, message: string): Comment {
    const comment = new Comment(nextId++, taskId, userId, message);
    comments.push(comment);
    return comment;
}

export function getComments(taskId: number): Comment[] {
    return comments.filter(c => c.taskId === taskId);
}

export function deleteComment(commentId: number): void {
    // Remove with splice
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id === commentId) {
            comments.splice(i, 1);
            break;
        }
    }
}
