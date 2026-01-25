import { TaskCategory } from "../types/taskCategory.js";

export interface ITask {
    id: number;
    title: string;
    completed: boolean;
    category: TaskCategory;
    conclusionDate?: Date;

    toggleCompleted(): void;
    editTitle(newTitle: string): void;
}

// CLASS
export class TaskClass implements ITask {
    id: number;
    title: string;
    completed: boolean;
    category: TaskCategory;
    conclusionDate?: Date;

    constructor(id: number, title: string, category: TaskCategory) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.category = category;
    }

    toggleCompleted(): void {
        this.completed = !this.completed;
        if (this.completed) this.conclusionDate = new Date();
        else delete this.conclusionDate;
    }

    editTitle(newTitle: string): void {
        const t = newTitle.trim();
        if (t) this.title = t;
    }
}