export class WatcherSystem<T, U> {
    private watchers: Map<T, U[]> = new Map();

    watch(target: T, user: U): void {
        const users = this.watchers.get(target) ?? [];

        if (!users.includes(user)) {
            users.push(user);
        }

        this.watchers.set(target, users);
    }

    unwatch(target: T, user: U): void {
        const users = this.watchers.get(target) ?? [];
        this.watchers.set(target, users.filter(u => u !== user));
    }

    getWatchers(target: T): U[] {
        return this.watchers.get(target) ?? [];
    }
}
