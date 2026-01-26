import { BaseEntity } from "./BaseEntity.js";
// CLASS
export class UserClass extends BaseEntity {
    constructor(id, name, email, role, active = true) {
        super(id);
        this.name = name;
        this.email = email;
        this.role = role;
        this.active = active;
    }
    toggleActive() {
        this.active = !this.active;
    }
    getRole() {
        return this.role;
    }
}
