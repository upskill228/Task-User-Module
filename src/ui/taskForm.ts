
import { TaskCategory } from "types/taskCategory.js";
import { addTask } from "../services/taskService.js";

const form = document.querySelector(".taskForm") as HTMLFormElement;
const input = document.querySelector("#inputTask") as HTMLInputElement;
const selectCategory = document.querySelector("#category") as HTMLSelectElement;
const taskFormError = document.querySelector("#taskFormError") as HTMLParagraphElement;
let onChange: (() => void) | null = null;

export function setOnFormChange(callback: () => void) {
    onChange = callback;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    taskFormError.textContent = "";

    const title = input.value.trim();
    const category = selectCategory.value as TaskCategory;
    const titleRegex = /[a-zA-Z]{3,}/;

    if (!titleRegex.test(title)) {
        taskFormError.textContent = "The task title must contain at least 3 letters.";
        return;
    }

    if (!category) {
        taskFormError.textContent = "Please select a category.";
        return;
    }

    addTask(title, category);

    form.reset();
    
    onChange?.();
});