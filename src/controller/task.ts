import tasks from "../model/task";
import { Request, Response } from "express";
import * as TaskService from "../service/task";

export function getTasks(req: Request, res: Response) {
  return res.json(tasks);
}

export function getTaskById(req: Request, res: Response) {
  const id = req.params.id;
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) return res.status(404).json({ message: "Task not found" });

  return res.json(task);
}

export function createUser(req: Request, res: Response) {
  TaskService.createTask(req.body);
  return res.json({ message: "Task created" });
}
