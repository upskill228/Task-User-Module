import { UserFilter } from "../types/userFilter.js";
import { IUser } from "../models/user.js";
import { UserClass } from "../models/user.js";
import { UserRole } from "../security/UserRole.js"; // <<-- ESSENCIAL

// ARRAY
let userList: IUser[] = [
    new UserClass(1, "Chris", "chris@email.com", UserRole.MEMBER),
    new UserClass(2, "Anna", "ana@email.com", UserRole.ADMIN),
    new UserClass(3, "Allison", "allison@email.com", UserRole.MEMBER, false)
];

// STATE
let currentFilter: UserFilter = "all";
let searchTerm = "";
let isOrderedAZ = false;
let nextId = userList.length > 0
  ? Math.max(...userList.map(u => u.getId())) + 1
  : 1;

// SET & GET
export function setFilter(filter: UserFilter) {
    currentFilter = filter;
}

export function getFilter(): UserFilter {
    return currentFilter;
}

export function setSearchTerm(term: string): void {
    searchTerm = term;
}

export function setIsOrderedAZ(isOrdered: boolean): void {
    isOrderedAZ = isOrdered;
}

export function getIsOrderedAZ(): boolean {
    return isOrderedAZ;
}

export function getNextId(): number {
    return nextId++;
}

// FUNCTION TO LOAD INITIAL USERS
export function getUserList(): IUser[] {
    return userList;
}

export function loadInitialUsers(): void {
    const initialData = [
        { name: "Mark", email: "mark@email.com", role: UserRole.MEMBER, active: true },
        { name: "Sophia", email: "sophia@email.com", role: UserRole.ADMIN, active: false },
        { name: "Brian", email: "brian@email.com", role: UserRole.MEMBER, active: true },
        { name: "Diana", email: "diana@email.com", role: UserRole.MEMBER, active: false }
    ];

    const newUsers = initialData.map(data => {
        const user = new UserClass(nextId++, data.name, data.email, data.role, data.active);
        return user;
    });

    userList = [...userList, ...newUsers];
}

export function getVisibleUsers(): IUser[] {
    let users = userList.filter(user => {
        if (currentFilter === "active" && !user.active) return false;
        if (currentFilter === "inactive" && user.active) return false;
        if (searchTerm && !user.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    if (isOrderedAZ) {
        users = [...users].sort((a, b) => a.name.localeCompare(b.name));
    }
    return users;
}

// STATISTICS
export function statistics() {
    const total = userList.length;
    const active = userList.filter(u => u.active).length;
    const inactive = total - active;

    let percentActive: number;
    let percentInactive: number;

    if (total === 0) {
        percentActive = 0;
        percentInactive = 0;
    } else {
        percentActive = Math.round((active / total) * 100);
        percentInactive = 100 - percentActive;
    }
    return { total, percentActive, percentInactive };
}

// USER FUNCTIONS
export function deleteUser(id: number): void {
    userList = userList.filter(u => u.getId() !== id);
}

export function toggleUserActive(id: number): void {
    const user = userList.find(u => u.getId() === id);
    if (user) user.toggleActive();
}

export function addUser(name: string, email: string, role: UserRole = UserRole.MEMBER): void {
    const user = new UserClass(nextId++, name, email, role);
    userList.push(user);
}
