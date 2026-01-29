export class BaseEntity {
    protected id: number;
    protected createdAt: Date;
    static totalEntities: number = 0;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        BaseEntity.totalEntities++;
    }

    getId(): number {
        return this.id;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    static getTotalEntities(): number {
         return BaseEntity.totalEntities;
    }
}