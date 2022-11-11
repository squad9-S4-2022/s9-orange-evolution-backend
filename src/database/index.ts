// Conexão com o banco de dados
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

import { User } from "../modules/users/entities/User";
import { Content } from "../modules/contents/entities/Content";

dotenv.config();

// informações para a conexão com o banco de dados. Como esta na nuvem, apenas o link é suficiente
// entities e migrations são para o typeorm identificar as entidades e os arquivos para 
// executar as migrations -> todos na pasta migrations que terminam com .ts
const datasource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    // synchronize: true,
    // logging: true,
    entities: [User, Content],
    // entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/database/typeorm/migrations/*.ts"]
});

// conecta o banco de dados
export function createConnection(): Promise<DataSource> {
    return datasource.initialize();
}

export { datasource };