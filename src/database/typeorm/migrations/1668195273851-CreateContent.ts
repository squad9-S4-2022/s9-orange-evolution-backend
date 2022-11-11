import { MigrationInterface, QueryRunner, Table, Timestamp } from "typeorm";
import { isDataView } from "util/types";

export class CreateContent1668195273851 implements MigrationInterface {
    name = 'CreateContent1668195273851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contents",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "url",
                        type: "varchar",
                    },
                    {
                        name: "duration",
                        type: "numeric",
                    },
                    {
                        name: "source",
                        type: "varchar",
                    },
                    {
                        name: "category",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contents")

    }

}
