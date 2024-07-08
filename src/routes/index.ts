import express from "express";
import userRoutes from "./task";

const router = express();

router.get("/", (req, res) => {
  res.redirect("/tasks");
});
router.use("/tasks", userRoutes);

export default router;
