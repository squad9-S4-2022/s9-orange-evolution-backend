import { Router } from "express";
import { contentRoutes } from "./contents.routes";
import { userRoutes } from "./users.routes";
import { authenticantionRouter } from "../routes/authentication.routes";
import { trailRoutes } from "./trails.routes";

const router = Router();

router.get("/", (req, res) => {
    return res.send({ Mensagem: "Bem vindo a API do Orange Evolution - squad9" });
})

router.use("/login", authenticantionRouter);
router.use("/user", userRoutes);
router.use("/trails", trailRoutes);
router.use("/content", contentRoutes);

export { router };