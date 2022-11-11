import { Router } from "express";
import { contentRoutes } from "./contents.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/content", contentRoutes);

export { router };