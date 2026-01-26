import { BaseEntity } from "./BaseEntity.js";
import { UserRole } from '../security/UserRole.js';

// INTERFACE
export interface IUser {
    getId(): number;
    name: string;
    email: string;
    active: boolean;
    toggleActive(): void;
    getCreatedAt(): Date;
}

// CLASS
export class UserClass extends BaseEntity implements IUser {
    name: string;
    email: string;
    active: boolean;
    private role: UserRole;

    constructor(id: number, name: string, email: string, role: UserRole, active = true) {
        super(id);
        this.name = name;
        this.email = email;
        this.role = role;
        this.active = active;
    }

    toggleActive(): void {
        this.active = !this.active;
    }

     getRole(): UserRole {
        return this.role;
    }
}