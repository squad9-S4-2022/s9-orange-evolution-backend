import { Request, Response, Router } from "express";

const contentRoutes = Router();


// Rota padrão de conteúdos, que sempre começara com /content, conforme definido no routes > index.ts
contentRoutes.get("/", (request: Request, response: Response) => {
    return response.send({ message: "Rota de conteúdos" });
})

export { contentRoutes };