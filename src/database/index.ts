// Conexão com o banco de dados
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Trail } from "../modules/trails/entities/Trail";

import { User } from "../modules/users/entities/User";
import { Content } from "../modules/contents/entities/Content";

dotenv.config();

// informações para a conexão com o banco de dados. Como esta na nuvem, apenas o link é suficiente
// entities e migrations são para o typeorm identificar as entidades e os arquivos para 
// executar as migrations -> todos na pasta migrations que terminam com .ts
const datasource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    entities: [User, Trail, Content],
    // migrations: ["./src/database/typeorm/migrations/*.ts"]
    // entities: [`${__dirname}/**/modules/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/database/typeorm/migrations/*.{ts,js}`],
});

// conecta o banco de dados
export function createConnection(): Promise<DataSource> {
    return datasource.initialize();
}

export { datasource };