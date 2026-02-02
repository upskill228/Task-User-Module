export class WatcherSystem {
    constructor() {
        this.watchers = new Map();
    }
    watch(target, user) {
        var _a;
        const users = (_a = this.watchers.get(target)) !== null && _a !== void 0 ? _a : [];
        if (!users.includes(user)) {
            users.push(user);
        }
        this.watchers.set(target, users);
    }
    unwatch(target, user) {
        var _a;
        const users = (_a = this.watchers.get(target)) !== null && _a !== void 0 ? _a : [];
        this.watchers.set(target, users.filter(u => u !== user));
    }
    getWatchers(target) {
        var _a;
        return (_a = this.watchers.get(target)) !== null && _a !== void 0 ? _a : [];
    }
}
