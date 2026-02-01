// mainNew.ts

import { EntityList } from "./utils/EntityList.js";
import { UserClass } from "./models/UserClass.js";
import { TaskClass } from "./tasks/TaskClass.js";
import { UserRole } from "./security/UserRole.js";


const user1 = new UserClass(1, "ana@email.com", UserRole.MEMBER);
const user2 = new UserClass(2, "bruno@email.com", UserRole.ADMIN);

const task1 = new TaskClass(1, "Estudar TypeScript");
const task2 = new TaskClass(2, "Fazer exercícios");

const userList = new EntityList<UserClass>();
userList.add(user1);
userList.add(user2);

const taskList = new EntityList<TaskClass>();
taskList.add(task1);
taskList.add(task2);

console.log("UTILIZADORES:");
console.log(userList.getAll());

console.log("TAREFAS:");
console.log(taskList.getAll());
