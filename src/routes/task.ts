import express from "express";
import {
  createUser,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controller/task";

const router = express();

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.post("/", createUser);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
