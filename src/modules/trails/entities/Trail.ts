import { randomUUID } from "crypto";
import { Content } from "../../../modules/contents/entities/Content";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("trails")
class Trail {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @ManyToMany(() => Content)
    @JoinTable({
        name: "contents_trails",
        joinColumns: [{ name: "trail_id" }],
        inverseJoinColumns: [{ name: "content_id" }]
    })
    contents?: Content[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Trail };