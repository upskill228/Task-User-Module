
import { addUser } from "../services/userService.js";

const form = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#userName") as HTMLInputElement;
const userEmail = document.querySelector("#userEmail") as HTMLInputElement;

const formError = document.querySelector("#formError") as HTMLParagraphElement;

let onChange: (() => void) | null = null;

export function setOnFormChange(callback: () => void) {
    onChange = callback;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    formError.textContent = "";

    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        formError.textContent = "Please enter a valid name.";
        return;
    }

    if (!emailRegex.test(email)) {
        formError.textContent = "Please enter a valid email.";
        return;
    }

    addUser(name, email);

    userName.value = "";
    userEmail.value = "";

    onChange?.();
});