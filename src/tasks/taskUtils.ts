import { ITask } from './ITask.js';

export function processTask(task: ITask): void {
    const type = task.getType();

    if (type === "bug") {
        console.log("Bug - Special Process");
    } else if (type === "feature") {
        console.log("Feature Process");
    } else {
        console.log("Default Process");
    }
}
