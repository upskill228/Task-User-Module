import { addTask } from "../services/taskService.js";
const form = document.querySelector(".taskForm");
const input = document.querySelector("#inputTask");
const selectCategory = document.querySelector("#category");
const taskFormError = document.querySelector("#taskFormError");
let onChange = null;
export function setOnFormChange(callback) {
    onChange = callback;
}
form.addEventListener("submit", e => {
    e.preventDefault();
    taskFormError.textContent = "";
    const title = input.value.trim();
    const category = selectCategory.value;
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
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
