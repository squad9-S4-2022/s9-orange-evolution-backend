import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("contents")
class Content {
    @PrimaryColumn()
    id: string = randomUUID();

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column()
    duration: number;

    @Column()
    source: string;

    @Column()
    category: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Content };