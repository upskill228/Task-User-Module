// CLASS
export class TaskClass {
    constructor(id, title, category) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.category = category;
    }
    toggleCompleted() {
        this.completed = !this.completed;
        if (this.completed)
            this.conclusionDate = new Date();
        else
            delete this.conclusionDate;
    }
    editTitle(newTitle) {
        const t = newTitle.trim();
        if (t)
            this.title = t;
    }
}
