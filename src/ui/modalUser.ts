import { User } from "../models/user.js";

// ELEMENTS
const modal = document.querySelector("#infoModal") as HTMLDivElement;
const modalBody = document.querySelector("#modalBody") as HTMLDivElement;
const btnClose = document.querySelector("#infoClose") as HTMLButtonElement;

// MODAL
export function openUserModal(user: User): void {
    modalBody.innerHTML = `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Status:</strong> ${user.active ? "Active" : "Inactive"}</p>
    `;
    modal.classList.add("show");
}

btnClose.addEventListener("click", () => modal.classList.remove("show"));

modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.classList.remove("show");
});