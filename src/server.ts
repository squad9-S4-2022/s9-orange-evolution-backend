import { createConnection } from "./database";
import { app } from "./app";

createConnection();

// inicia o servidor da aplicação em localhost:3333
app.listen(process.env.PORT || 3333, () => {
    console.log("Server online on port 3333 ✅");
});