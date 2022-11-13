import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableUsersTrails1668261539101 implements MigrationInterface {
    name = 'CreateTableUsersTrails1668261539101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_trails",
                columns: [
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "trail_id",
                        type: "uuid"
                    },
                    {
                        name: "progress",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "completed",
                        type: "boolean",
                        isNullable: true
                    },
                    {
                        name: "started_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "user_trails",
            new TableForeignKey({
                name: "FK_user_trail",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "user_trails",
            new TableForeignKey({
                name: "FK_trail_user",
                referencedTableName: "trails",
                referencedColumnNames: ["id"],
                columnNames: ["trail_id"],
                onDelete: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropForeignKeys("user trails", ["FK_user_trail"])
        await queryRunner.dropForeignKey("user_trails", "FK_trail_user");
        await queryRunner.dropForeignKey("user_trails", "FK_user_trail");
        await queryRunner.dropTable("user_trails");
    }

}
