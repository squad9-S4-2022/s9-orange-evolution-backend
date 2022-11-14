import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableContentsTrail1668310681837 implements MigrationInterface {
    name = 'CreateTableContentsTrail1668310681837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contents_trails",
                columns: [
                    {
                        name: "content_id",
                        type: "uuid",
                    },
                    {
                        name: "trail_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
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
            "contents_trails",
            new TableForeignKey({
                name: "FK_content_trail",
                referencedTableName: "contents",
                referencedColumnNames: ["id"],
                columnNames: ["content_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );

        await queryRunner.createForeignKey(
            "contents_trails",
            new TableForeignKey({
                name: "FK_trail_content",
                referencedTableName: "trails",
                referencedColumnNames: ["id"],
                columnNames: ["trail_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("contents_trails", "FK_trail_content");
        await queryRunner.dropForeignKey("contents_trails", "FK_content_trail");
        await queryRunner.dropTable("contents_trails");
    }

}
