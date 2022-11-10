import * as dotenv from "dotenv";

import "reflect-metadata";

import "./database";

import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";

import cors from "cors";
import { router } from "./routes";

import { AppError } from "./utils/AppError";

// carrega as variaveis de ambiente e cria a aplicação express
dotenv.config();
const app = express();

// define que a aplicação fará uso de json, cors e do arquivo de roteamento
app.use(express.json());
app.use(cors());
app.use(router);

// middleware para tratamento de erros
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        // se for erro no client, retorna uma mensagem junto com o status code
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ message: err.message });
        }

        // caso contrário, será erro no servidor - na própria aplicação
        return response.status(500).json({
            status: "Erro",
            message: `Erro interno do servidor - ${err.message}`
        });
    }
);

export { app };