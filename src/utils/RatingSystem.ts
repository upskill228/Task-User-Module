export class RatingSystem<T> {
    private ratings: Map<T, number[]>;
    constructor() {
        this.ratings = new Map<T, number[]>();
    }
    rate(item: T, value: number): void {
        if (value < 1 || value > 5) {
            throw new Error("Rating value must be between 1 and 5.");
        }  
        if (!this.ratings.has(item)) {
            this.ratings.set(item, []);
        }
        this.ratings.get(item)!.push(value);
    }
    getAverage(item: T): number {
        const itemRatings = this.ratings.get(item);
        if (!itemRatings || itemRatings.length === 0) {
            return 0;
        }
        const sum = itemRatings.reduce((acc, val) => acc + val, 0);
        return Number((sum / itemRatings.length).toFixed(2));
    }
    getRatings(item: T): number[] {
        return this.ratings.get(item) || [];
    }
}
