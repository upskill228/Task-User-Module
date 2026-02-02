export class RatingSystem<T> {
    private ratings: Map<T, number[]> = new Map();

    rate(item: T, value: number): void {
        if (value < 1 || value > 5) return;

        const values = this.ratings.get(item) ?? [];
        values.push(value);
        this.ratings.set(item, values);
    }

    getAverage(item: T): number {
        const values = this.ratings.get(item) ?? [];
        if (values.length === 0) return 0;

        const sum = values.reduce((a, b) => a + b, 0);
        return Number((sum / values.length).toFixed(2));
    }

    getRatings(item: T): number[] {
        return this.ratings.get(item) ?? [];
    }
}
