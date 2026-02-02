export class TagManager {
    constructor() {
        this.tags = new Map();
    }
    addTag(item, tag) {
        var _a;
        const tags = (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
        this.tags.set(item, tags);
    }
    removeTag(item, tag) {
        var _a;
        const tags = (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
        this.tags.set(item, tags.filter(t => t !== tag));
    }
    getTags(item) {
        var _a;
        return (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
    }
}
