import { taskList } from "./types";

export const reoderTasks = (tasks: taskList): taskList => {
  const reorderedTasks: taskList = tasks.map((task, index) => ({
    id: index + 1,
    description: task.description,
  }));
  return reorderedTasks;
};

export const errorHandler = (err: unknown) => {
  console.error("Error reading or parsing the file:", err);
  throw err;
};
