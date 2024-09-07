import { Command } from "commander";
import { addTasks, deleteTask, editTask, getTasks } from "../model/model";

const mainProgram = new Command();

const controller = async () => {
  mainProgram
    .option("-l, --list", "list active tasks")
    // add
    .option("-a, --add <description>", "add new task <description>")
    // delete
    .option("-d, --delete <id>", "delete task with <id>")
    // modify
    .option("-e, --edit <id>", "change task with <id description>");

  mainProgram.parse(process.argv);

  const options = mainProgram.opts();

  const isEmtpy = !Object.keys(options).length;

  if (options.list || isEmtpy) {
    const tasks = await getTasks();
    // show
    console.log("To Do 📋:");
    tasks.forEach((task) => {
      console.log(`${task.id}  : ${task.description}`);
    });
  } else if (options.add) {
    addTasks(String(options.add));
    console.log("added task");
  } else if (options.delete) {
    deleteTask(Number(options.delete));
    console.log("deleted task");
  } else if (options.modify) {
    editTask(Number(options.editTask), mainProgram.args.join(" "));
    console.log("edittedtask task");
  }
};

export default controller;
