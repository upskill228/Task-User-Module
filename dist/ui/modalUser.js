// ELEMENTS
const modal = document.querySelector("#infoModal");
const modalBody = document.querySelector("#modalBody");
const btnClose = document.querySelector("#infoClose");
// MODAL
export function openUserModal(user) {
    modalBody.innerHTML = `
        <p><strong>ID:</strong> ${user.getId()}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Status:</strong> ${user.active ? "Active" : "Inactive"}</p>
    `;
    modal.classList.add("show");
}
btnClose.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => {
    if (e.target === modal)
        modal.classList.remove("show");
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape")
        modal.classList.remove("show");
});
