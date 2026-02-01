export class TagManager {
    constructor() {
        this.tags = new Map();
    }
    addTag(item, tag) {
        var _a;
        const tags = (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
        tags.push(tag);
        this.tags.set(item, tags);
    }
    removeTag(item, tag) {
        var _a;
        const tags = (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
        const filtered = tags.filter(t => t !== tag);
        this.tags.set(item, filtered);
    }
    getTags(item) {
        var _a;
        return (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
    }
}
