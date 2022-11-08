import * as dotenv from "dotenv";

import "reflect-metadata";

import './database';

import express from "express";
import { router } from "./routes";
import cors from "cors";

// carrega as variaveis de ambiente e cria a aplicação express
dotenv.config();
const app = express();

// define que a aplicação fará uso de json, cors e do arquivo de roteamento
app.use(express.json());
app.use(cors());
app.use(router);

export { app };