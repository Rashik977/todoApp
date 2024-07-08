import { Task } from "../interfaces/task";
import tasks from "../model/task";
import { TASK_STATUS } from "../interfaces/task";

export const getTaskById = (id: number) => {
  const task = tasks.find((task) => task.id === id);

  if (!task) return { error: "Task not found" };

  return task;
};

export const createTask = (task: Task) => {
  // Check if title and status are provided
  if (!task.title || !task.status)
    return { error: "Title and status are required" };

  // Check if status is valid from enum
  if (!Object.values(TASK_STATUS).includes(task.status))
    return { error: "Invalid status" };

  return tasks.push({
    id: tasks.length + 1,
    title: task.title,
    status: task.status,
  });
};

export const updateTask = (id: number, task: Task) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) return { error: "Task not found" };

  // Check if status is valid from enum
  if (task.status && !Object.values(TASK_STATUS).includes(task.status))
    return { message: "Invalid status" };

  tasks[taskIndex] = { ...tasks[taskIndex], ...task };

  return { message: "Task updated" };
};

export const deleteTask = (id: number) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) return { error: "Task not found" };

  tasks.splice(taskIndex, 1);

  return { message: "Task deleted" };
};
