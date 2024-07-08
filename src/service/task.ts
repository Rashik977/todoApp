import { Task } from "../interfaces/task";
import tasks from "../model/task";

export const createTask = (task: Task) => {
  return tasks.push({
    id: tasks.length + 1,
    title: task.title,
    status: task.status,
  });
};
