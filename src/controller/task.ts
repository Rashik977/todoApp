import tasks from "../model/task";
import { Request, Response } from "express";
import * as TaskService from "../service/task";

export function getTasks(req: Request, res: Response) {
  return res.json(tasks);
}

export function getTaskById(req: Request, res: Response) {
  const id = req.params.id;
  const message = TaskService.getTaskById(parseInt(id));

  return res.json(message);
}

export function createUser(req: Request, res: Response) {
  const message = TaskService.createTask(req.body);
  return res.json(message);
}

export function updateTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const message = TaskService.updateTask(id, req.body);
  return res.json(message);
}

export function deleteTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const message = TaskService.deleteTask(id);
  return res.json(message);
}
