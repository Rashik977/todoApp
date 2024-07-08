import { Router } from "express";
import userRoutes from "./task";

const router = Router();

router.get("/", (req, res) => {
  res.redirect("/tasks");
});

router.use("/tasks", userRoutes);

export default router;
