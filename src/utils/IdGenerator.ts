export class IdGenerator {
    private static counter: number = 1;

    static generate(): number {
        return IdGenerator.counter++
    }
}