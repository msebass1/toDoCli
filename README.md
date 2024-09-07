![Screenshot from 2024-09-06 22-24-50](https://github.com/user-attachments/assets/6fa31da4-38ac-4e7b-bba3-b95b22d5a599)

Task Tracker CLI Tool
Overview
The Task Tracker CLI Tool is a simple command-line interface built with TypeScript that allows you to manage your tasks efficiently. Whether you need to add, list, delete, or edit tasks, this tool provides an easy way to handle these actions directly from your terminal.

Features
List Active Tasks: View all your current tasks.
Add New Task: Quickly add a new task with a description.
Delete Task: Remove an existing task by its ID.
Edit Task: Update the description of an existing task.

Running the CLI Tool
You can run the CLI tool using npx with ts-node to execute TypeScript files directly:

List Active Tasks
bash
Copy code
npx ts-node ./index.ts --list
This command will display all active tasks with their IDs and descriptions.

Add New Task
bash
Copy code
npx ts-node ./index.ts --add "Your task description"
Replace "Your task description" with the description of the task you want to add.

Delete Task
bash
Copy code
npx ts-node ./index.ts --delete <task-id>
Replace <task-id> with the ID of the task you want to delete.

Edit Task
bash
Copy code
npx ts-node ./index.ts --edit <task-id> "New task description"
Replace <task-id> with the ID of the task you want to edit and "New task description" with the updated description.

The data is saved in a json in the folder ./save/

------------------------------------------------------------------------------------------------------------------------------------------------------------

Happy task tracking!
