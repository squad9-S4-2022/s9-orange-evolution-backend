import { randomUUID } from "crypto";
import { Trail } from "../../../modules/trails/entities/Trail";

import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";

// esta entidade está sendo referenciada na tabela users do banco de dados
@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    admin: boolean;

    @ManyToMany(() => Trail)
    @JoinTable({
        name: "user_trails",
        joinColumns: [{ name: "user_id" }],
        inverseJoinColumns: [{ name: "trail_id" }]
    })
    trails?: Trail[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
        }
    }
}

export { User };