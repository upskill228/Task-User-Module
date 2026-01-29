export class IdGenerator {
    static generate() {
        return IdGenerator.counter++;
    }
}
IdGenerator.counter = 1;
