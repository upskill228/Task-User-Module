import { BaseEntity } from './BaseEntity.js';
import { UserRole } from '../security/UserRole.js';

export class UserClass extends BaseEntity {
    private email!: string;
    private active: boolean;
    private role: UserRole;

    constructor(
        id: number,
        email: string,
        role: UserRole,
        active = true
    ) {
        super(id);
        this.setEmail(email);
        this.role = role;
        this.active = active;
    }

    // GETTERS
    getEmail(): string {
        return this.email;
    }

    isActive(): boolean {
        return this.active;
    }

    getRole(): UserRole {
        return this.role;
    }

    // SETTERS (validation)
    setEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Email inválido");
        }
        this.email = email;
    }

    toggleActive(): void {
        this.active = !this.active;
    }

}
