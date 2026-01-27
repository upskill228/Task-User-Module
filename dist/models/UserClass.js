import { BaseEntity } from './BaseEntity.js';
export class UserClass extends BaseEntity {
    constructor(id, email, role, active = true) {
        super(id);
        this.setEmail(email);
        this.role = role;
        this.active = active;
    }
    // GETTERS
    getEmail() {
        return this.email;
    }
    isActive() {
        return this.active;
    }
    getRole() {
        return this.role;
    }
    // SETTERS (com validação)
    setEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Email inválido");
        }
        this.email = email;
    }
    toggleActive() {
        this.active = !this.active;
    }
}
