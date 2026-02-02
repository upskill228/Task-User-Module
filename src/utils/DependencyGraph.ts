export class DependencyGraph<T> {
    private graph: Map<T, T[]> = new Map();

    addDependency(item: T, dependsOn: T): void {
        const deps = this.graph.get(item) ?? [];

        if (!deps.includes(dependsOn)) {
            deps.push(dependsOn);
        }

        this.graph.set(item, deps);
    }

    getDependencies(item: T): T[] {
        return this.graph.get(item) ?? [];
    }

    hasDependencies(item: T): boolean {
        return (this.graph.get(item)?.length ?? 0) > 0;
    }
}
