import { Router } from "express";
import { userRoutes } from "./users.routes";
import { authenticantionRouter } from "../routes/authentication.routes";

const router = Router();

router.use("/login", authenticantionRouter)
router.use("/user", userRoutes);

export { router };