export class TagManager<T> {
    private tags: Map<T, string[]> = new Map<T, string[]>();

    addTag(item: T, tag: string): void {
        const tags = this.tags.get(item) ?? [];
        tags.push(tag);
        this.tags.set(item, tags);
    }

    removeTag(item: T, tag: string): void {
        const tags = this.tags.get(item) ?? [];
        const filtered = tags.filter(t => t !== tag);
        this.tags.set(item, filtered);
    }

    getTags(item: T): string[] {
        return this.tags.get(item) ?? [];
    }
}