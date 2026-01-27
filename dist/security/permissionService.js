import { UserRole } from './UserRole.js';
export function canCreateTask(role) {
    if (role === UserRole.ADMIN || role === UserRole.MANAGER || role === UserRole.MEMBER) {
        return true;
    }
    else {
        return false;
    }
}
;
export function canEditTask(role) {
    if (role === UserRole.ADMIN || role === UserRole.MANAGER) {
        return true;
    }
    else {
        return false;
    }
}
;
export function canDeleteTask(role) {
    if (role === UserRole.ADMIN) {
        return true;
    }
    else {
        return false;
    }
}
;
export function canAssignTask(role) {
    if (role === UserRole.ADMIN || role === UserRole.MANAGER) {
        return true;
    }
    else {
        return false;
    }
}
;
