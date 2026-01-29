import { TaskStatus } from "./TaskStatus.js";

export interface ITask {
    id: number;
    title: string;
    status: TaskStatus;

    getType(): string;
    moveTo(status: TaskStatus): void;
}