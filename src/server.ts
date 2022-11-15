import { createConnection } from "./database";
import { app } from "./app";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

createConnection();

// inicia o servidor da aplicação em localhost:3333
app.listen(3333, () => {
    console.log("Server online on port 3333 ✅");
});

app.use('/doc-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/swagger", (request, response) => {
    return response.sendFile(process.cwd() + "/swagger.json")
})

app.get("/doc-redocly", (request, response) => {
    return response.sendFile(process.cwd() + "/index.html")
})

