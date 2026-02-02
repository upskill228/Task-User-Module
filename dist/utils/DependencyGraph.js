export class DependencyGraph {
    constructor() {
        this.graph = new Map();
    }
    addDependency(item, dependsOn) {
        var _a;
        const deps = (_a = this.graph.get(item)) !== null && _a !== void 0 ? _a : [];
        if (!deps.includes(dependsOn)) {
            deps.push(dependsOn);
        }
        this.graph.set(item, deps);
    }
    getDependencies(item) {
        var _a;
        return (_a = this.graph.get(item)) !== null && _a !== void 0 ? _a : [];
    }
    hasDependencies(item) {
        var _a, _b;
        return ((_b = (_a = this.graph.get(item)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0;
    }
}
