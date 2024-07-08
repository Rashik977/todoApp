import express from "express";
import userRoutes from "./task";

const router = express();

router.use("/users", userRoutes);

export default router;
