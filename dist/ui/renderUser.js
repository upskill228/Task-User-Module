import { setFilter, getFilter, setSearchTerm, setIsOrderedAZ, getIsOrderedAZ, deleteUser, toggleUserActive } from "../services/userService.js";
import { openUserModal } from "./modalUser.js";
// ELEMENTS
const container = document.querySelector("#container");
const activeBtn = document.querySelector("#showActive");
const inactiveBtn = document.querySelector("#showInactive");
const btnOrder = document.querySelector("#btnOrder");
const searchInput = document.querySelector("#searchUser");
const clearSearchBtn = document.querySelector(".clear-search");
let onChange = null;
export function setOnChange(callback) {
    onChange = callback;
}
export function updateButtonsText() {
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
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
inactiveBtn.addEventListener("click", () => {
    setFilter(getFilter() === "inactive" ? "all" : "inactive");
    setSearchTerm("");
    searchInput.value = "";
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
btnOrder.addEventListener("click", () => {
    setIsOrderedAZ(!getIsOrderedAZ());
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
searchInput.addEventListener("input", () => {
    setSearchTerm(searchInput.value.trim());
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    setSearchTerm("");
    onChange === null || onChange === void 0 ? void 0 : onChange();
});
// CARD ELEMENTS 
export function getTasksElement() {
    const p = document.createElement("p");
    p.textContent = "0 tasks assigned";
    p.classList.add("tasks-info");
    return p;
}
export function createDeactivateButton(user) {
    const btn = document.createElement("button");
    btn.textContent = user.active ? "Deactivate" : "Activate";
    btn.classList.add("btn-status", user.active ? "active" : "inactive");
    btn.addEventListener("click", e => {
        e.stopPropagation();
        toggleUserActive(user.getId());
        onChange === null || onChange === void 0 ? void 0 : onChange();
    });
    return btn;
}
export function addDeleteButton(user) {
    const btn = document.createElement("button");
    btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    btn.classList.add("btnDelete");
    btn.addEventListener("click", e => {
        e.stopPropagation();
        deleteUser(user.getId());
        onChange === null || onChange === void 0 ? void 0 : onChange();
        ;
    });
    return btn;
}
export function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");
    if (!user.active)
        card.classList.add("inactive");
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
export function renderUsers(users) {
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
