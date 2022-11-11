import { Router } from "express";
import { userRoutes } from "./users.routes";
import { authenticantionRouter } from "../routes/authentication.routes";
import { trailRoutes } from "./trails.routes";

const router = Router();

router.use("/login", authenticantionRouter);
router.use("/user", userRoutes);
router.use("/trails", trailRoutes);

export { router };