import { UserRole } from '../security/UserRole.js';

// INTERFACE
export interface User {
    readonly id: number;
    name: string;
    email: string;
    active: boolean;
    toggleActive(): void;
}

// CLASS
export class UserClass implements User {
    id: number;
    name: string;
    email: string;
    active: boolean;

    constructor(id: number, name: string, email: string, role: UserRole, active = true) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.active = active;
    }

    toggleActive(): void {
        this.active = !this.active;
    }
}