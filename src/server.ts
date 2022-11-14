import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send({ message: "Hello world" });
})

app.listen(3333, () => {
    console.log("Server online on port 3333 ✅");
})