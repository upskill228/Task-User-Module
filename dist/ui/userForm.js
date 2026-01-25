import { addUser } from "../services/userService.js";
const form = document.querySelector(".user-form");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const formError = document.querySelector("#formError");
let onChange = null;
export function setOnFormChange(callback) {
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
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
