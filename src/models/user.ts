// INTERFACE
export interface IUser {
    readonly id: number;
    name: string;
    email: string;
    active: boolean;
    toggleActive(): void;
}

// CLASS
export class UserClass implements IUser {
    id: number;
    name: string;
    email: string;
    active: boolean;

    constructor(id: number, name: string, email: string, active = true) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.active = active;
    }

    toggleActive(): void {
        this.active = !this.active;
    }
}