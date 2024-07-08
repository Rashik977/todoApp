import express from "express";
import { createUser, getTaskById, getTasks } from "../controller/task";

const router = express();

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.post("/", createUser);

router.put("/:id", (req, res) => {
  return res.json({ message: "update user" });
});

router.delete("/:id", (req, res) => {
  return res.json({ message: "delete user" });
});

export default router;
