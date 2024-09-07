import { writeFile, readFile } from "fs/promises";
import { taskList } from "./types";
import { errorHandler, reoderTasks } from "./utils";

const filePath = process.argv[1].replace("index.ts", "/saved/savedTasks.json");

const getTasks = async (): Promise<taskList> => {
  try {
    const data = await readFile(filePath, "utf8");
    const list: taskList = JSON.parse(data);
    return list;
  } catch (err) {
    errorHandler(err);
    return [];
  }
};
const writeTasks = async (newTasks: taskList) => {
  try {
    const parsedList = JSON.stringify(newTasks);
    writeFile(filePath, parsedList, "utf8");
  } catch (err) {
    errorHandler(err);
  }
};

const addTasks = async (description: string) => {
  try {
    const oldTasks: taskList = await getTasks();
    oldTasks.push({
      id: oldTasks.length + 1,
      description: description,
    });
    return await writeTasks(oldTasks);
  } catch (err) {
    errorHandler(err);
  }
};

const deleteTask = async (id: number) => {
  try {
    const oldTasks: taskList = await getTasks();
    let newTasks: taskList = [];
    oldTasks.forEach((task) => {
      if (task.id !== id) newTasks.push(task);
    });
    const tasks = reoderTasks(newTasks);
    await writeTasks(tasks);
  } catch (err) {
    errorHandler(err);
  }
};

const editTask = async (id: number, newDescription: string) => {
  try {
    const oldTasks: taskList = await getTasks();
    let newTasks: taskList = [];
    oldTasks.forEach((task) => {
      if (task.id !== id) newTasks.push(task);
      else {
        newTasks.push({ ...task, description: newDescription });
      }
    });
    const tasks = reoderTasks(newTasks);
    await writeTasks(tasks);
  } catch (err) {
    errorHandler(err);
  }
};

export { getTasks, addTasks, deleteTask, editTask };
