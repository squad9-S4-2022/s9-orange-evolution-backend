import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("trails")
class Trail {
    @PrimaryColumn()
    id: string = randomUUID();

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Trail };