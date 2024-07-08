import express from "express";
import userRoutes from "./task";

const router = express();

router.use("/tasks", userRoutes);

export default router;
