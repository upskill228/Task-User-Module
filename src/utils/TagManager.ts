export class TagManager<T> {
    private tags: Map<T, string[]> = new Map();

    addTag(item: T, tag: string): void {
        const tags = this.tags.get(item) ?? [];

        if (!tags.includes(tag)) {
            tags.push(tag);
        }

        this.tags.set(item, tags);
    }

    removeTag(item: T, tag: string): void {
        const tags = this.tags.get(item) ?? [];
        this.tags.set(item, tags.filter(t => t !== tag));
    }

    getTags(item: T): string[] {
        return this.tags.get(item) ?? [];
    }
}