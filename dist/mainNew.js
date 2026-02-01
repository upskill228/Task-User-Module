// mainNew.ts
import { EntityList } from "./utils/EntityList.js";
import { UserClass } from "./models/UserClass.js";
import { TaskClass } from "./tasks/TaskClass.js";
import { UserRole } from "./security/UserRole.js";
import { SimpleCache } from "./utils/SimpleCache.js";
import { Favorites } from "./utils/Favorites.js";
const user1 = new UserClass(1, "anna@email.com", UserRole.MEMBER);
const user2 = new UserClass(2, "faith@email.com", UserRole.ADMIN);
const task1 = new TaskClass(1, "Mock task number X");
const task2 = new TaskClass(2, "Made-up task number Y");
// EntityList
const userList = new EntityList();
userList.add(user1);
userList.add(user2);
const taskList = new EntityList();
taskList.add(task1);
taskList.add(task2);
console.log("Users:");
console.log(userList.getAll());
console.log("Tasks:");
console.log(taskList.getAll());
// SimpleCache
const userCache = new SimpleCache();
userCache.set(1, user1);
console.log(userCache.get(1));
const taskCache = new SimpleCache();
taskCache.set(10, task1);
console.log(taskCache.get(10));
//Favorites
const favUsers = new Favorites();
favUsers.add(user1);
favUsers.add(user2);
favUsers.remove(user1);
console.log(favUsers.getAll());
const favTasks = new Favorites();
favTasks.add(task1);
console.log(favTasks.exists(task1));
