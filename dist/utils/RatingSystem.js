export class RatingSystem {
    constructor() {
        this.ratings = new Map();
    }
    rate(item, value) {
        var _a;
        if (value < 1 || value > 5)
            return;
        const values = (_a = this.ratings.get(item)) !== null && _a !== void 0 ? _a : [];
        values.push(value);
        this.ratings.set(item, values);
    }
    getAverage(item) {
        var _a;
        const values = (_a = this.ratings.get(item)) !== null && _a !== void 0 ? _a : [];
        if (values.length === 0)
            return 0;
        const sum = values.reduce((a, b) => a + b, 0);
        return Number((sum / values.length).toFixed(2));
    }
    getRatings(item) {
        var _a;
        return (_a = this.ratings.get(item)) !== null && _a !== void 0 ? _a : [];
    }
}
