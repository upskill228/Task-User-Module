export class RatingSystem {
    constructor() {
        this.ratings = new Map();
    }
    rate(item, value) {
        if (value < 1 || value > 5) {
            throw new Error("Rating value must be between 1 and 5.");
        }
        if (!this.ratings.has(item)) {
            this.ratings.set(item, []);
        }
        this.ratings.get(item).push(value);
    }
    getAverage(item) {
        const itemRatings = this.ratings.get(item);
        if (!itemRatings || itemRatings.length === 0) {
            return 0;
        }
        const sum = itemRatings.reduce((acc, val) => acc + val, 0);
        return Number((sum / itemRatings.length).toFixed(2));
    }
    getRatings(item) {
        return this.ratings.get(item) || [];
    }
}
