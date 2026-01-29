import { TaskStatus } from './TaskStatus.js';

export interface ITask {
    id: number;
    title: string;
    completed: boolean;
    status: TaskStatus;
    assignedUserIds?: number[];

    getType(): string;
    moveTo(status: TaskStatus): void;
}