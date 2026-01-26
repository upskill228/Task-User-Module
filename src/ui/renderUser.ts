import { IUser } from "../models/user.js";
import { setFilter, getFilter, setSearchTerm, setIsOrderedAZ, getIsOrderedAZ, deleteUser, toggleUserActive } from "../services/userService.js";
import { openUserModal } from "./modalUser.js";

// ELEMENTS
const container = document.querySelector("#container") as HTMLDivElement;


const activeBtn = document.querySelector("#showActive") as HTMLButtonElement;
const inactiveBtn = document.querySelector("#showInactive") as HTMLButtonElement;
const btnOrder = document.querySelector("#btnOrder") as HTMLButtonElement;

const searchInput = document.querySelector("#searchUser") as HTMLInputElement;
const clearSearchBtn = document.querySelector(".clear-search") as HTMLButtonElement;

let onChange: (() => void) | null = null;

export function setOnChange(callback: () => void) {
    onChange = callback;
}

export function updateButtonsText(): void {
    activeBtn.textContent =
        getFilter() === "active" ? "Show All" : "Active Users";

    inactiveBtn.textContent =
        getFilter() === "inactive" ? "Show All" : "Inactive Users";

    btnOrder.textContent =
        getIsOrderedAZ() ? "Original Order" : "Order A-Z";
}

// EVENT LISTENERS
activeBtn.addEventListener("click", () => {
    setFilter(getFilter() === "active" ? "all" : "active");
    setSearchTerm("");
    searchInput.value = "";
    
    onChange?.();
});

inactiveBtn.addEventListener("click", () => {
    setFilter (getFilter() === "inactive" ? "all" : "inactive");
    setSearchTerm("");
    searchInput.value = "";
    onChange?.();
});

btnOrder.addEventListener("click", () => {
    setIsOrderedAZ(!getIsOrderedAZ());
    onChange?.();
});

searchInput.addEventListener("input", () => {
    setSearchTerm(searchInput.value.trim());
    onChange?.();
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    setSearchTerm("");
    onChange?.();
});

// CARD ELEMENTS 
export function getTasksElement(): HTMLParagraphElement {
    const p = document.createElement("p");
    p.textContent = "0 tasks assigned";
    p.classList.add("tasks-info");
    return p;
}

export function createDeactivateButton(user: IUser): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.textContent = user.active ? "Deactivate" : "Activate";
    btn.classList.add("btn-status", user.active ? "active" : "inactive");

    btn.addEventListener("click", e => {
        e.stopPropagation();
        toggleUserActive(user.getId());
        onChange?.();
    });

    return btn;
}

export function addDeleteButton(user: IUser): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    btn.classList.add("btnDelete");

    btn.addEventListener("click", e => {
        e.stopPropagation();
        deleteUser(user.getId());

        onChange?.();;
    });

    return btn;
}

export function createUserCard(user: IUser): HTMLDivElement {
    const card = document.createElement("div");
    card.classList.add("card");
    if (!user.active) card.classList.add("inactive");

    // Elements
    const userId = document.createElement("p");
    userId.textContent = `ID: ${user.getId()}`;
    userId.classList.add("user-id");

    const name = document.createElement("h3");
    name.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = user.email;

    const status = document.createElement("p");
    status.textContent = user.active ? "Status: Active user" : "Status: Inactive user";
    status.classList.add("user-status");

    const deactivateBtn = createDeactivateButton(user);
    const deleteBtn = addDeleteButton(user);

    const tasks = getTasksElement();

    // Card structure
    const header = document.createElement("div");
    header.classList.add("card-header");
    header.append(userId, name);

    const body = document.createElement("div");
    body.classList.add("card-body");
    body.append(email, tasks, status);

    const footer = document.createElement("div");
    footer.classList.add("card-footer");
    footer.append(deactivateBtn, deleteBtn);

    card.append(header, body, footer);

    // Modal
    card.addEventListener("click", () => openUserModal(user));

    return card;
}

//RENDER
export function renderUsers(users: IUser[]): void {
    container.innerHTML = "";

    if (users.length === 0) {
        const noUsers = document.createElement("p");
        noUsers.textContent = "No users available";
        noUsers.classList.add("no-users");
        container.appendChild(noUsers);
        return;
    }

    users.forEach(user => container.appendChild(createUserCard(user)));
}