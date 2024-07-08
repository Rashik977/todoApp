export interface Task {
  id: number;
  title: string;
  status: TASK_STATUS;
}

export enum TASK_STATUS {
  NOTSTARTED = "not started",
  PENDING = "pending",
  DONE = "done",
}
