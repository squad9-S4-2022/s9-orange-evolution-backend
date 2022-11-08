import { Request, Response, Router } from "express";

const trailRotues = Router();


// Rota padrão de trilhas, que sempre começara com /trail, conforme definido no routes > index.ts
trailRotues.get("/", (request: Request, response: Response) => {
    return response.send({ message: "Rota de trilhas" });
})

export { trailRotues };