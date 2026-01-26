// IMPORT - USERS
import { loadInitialUsers, getVisibleUsers, statistics } from "./services/userService.js";
import { renderUsers, updateButtonsText, setOnChange as setOnUserChange } from "./ui/renderUser.js";

import { renderStatistics } from "./ui/userStats.js";
import { setOnFormChange } from "./ui/userForm.js";

// IMPORT - TASKS
import { renderTasks, updateTaskButtonsText, setOnChange as setOnTaskChange } from "./ui/renderTask.js";

//IMPORT NAVIGATION
import { initNavigation } from "./ui/navigation.js";

// FUNCTIONS - USERS
function refreshUI() {
    renderUsers(getVisibleUsers());
    updateButtonsText();
    renderStatistics(statistics());
    }

    setOnUserChange(refreshUI);
    setOnFormChange(refreshUI);

    loadInitialUsers();
    refreshUI();

// FUNCTIONS - TASKS
function refreshTasksUI() {
    renderTasks();
    updateTaskButtonsText();
}

    setOnTaskChange(refreshTasksUI);

    refreshTasksUI();

// NAVIGATION
initNavigation();