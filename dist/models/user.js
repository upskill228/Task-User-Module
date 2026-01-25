// CLASS
export class UserClass {
    constructor(id, name, email, active = true) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.active = active;
    }
    toggleActive() {
        this.active = !this.active;
    }
}
