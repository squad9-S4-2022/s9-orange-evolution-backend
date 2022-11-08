import { randomUUID } from "crypto";

import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
        }
    }
}

export { User };