import { EntityList } from "./utils/EntityList.js";
import { UserClass } from "./models/UserClass.js";
import { TaskClass } from "./tasks/TaskClass.js";
import { UserRole } from "./security/UserRole.js";
import { SimpleCache } from "./utils/SimpleCache.js";
import { Favorites } from "./utils/Favorites.js";
import { Paginator } from "./utils/Paginator.js";
import { TagManager } from "./utils/TagManager.js";
import { WatcherSystem } from "./utils/WatcherSystem.js";
import { PriorityManager } from "./utils/PriorityManager.js";
import { RatingSystem } from "./utils/RatingSystem.js";
// ENTITIES / ELEMENTS
const user1 = new UserClass(1, "anna@email.com", UserRole.MEMBER);
const user2 = new UserClass(2, "faith@email.com", UserRole.ADMIN);
const user3 = new UserClass(3, "john@email.com", UserRole.MEMBER);
const user4 = new UserClass(4, "lisa@email.com", UserRole.ADMIN);
const task1 = new TaskClass(1, "Mock task number X");
const task2 = new TaskClass(2, "Made-up task number Y");
const task3 = new TaskClass(3, "Another task Z");
// ENTITY LIST
const userList = new EntityList();
userList.add(user1);
userList.add(user2);
userList.add(user3);
userList.add(user4);
const taskList = new EntityList();
taskList.add(task1);
taskList.add(task2);
taskList.add(task3);
console.log("Users");
console.log(userList.getAll());
console.log("Tasks");
console.log(taskList.getAll());
// SIMPLE CACHE
const userCache = new SimpleCache();
userCache.set(user1.getId(), user1);
userCache.set(user2.getId(), user2);
console.log("User Cache");
console.log(userCache.get(user1.getId()));
console.log(userCache.get(user2.getId()));
const taskCache = new SimpleCache();
taskCache.set(task1.id, task1);
taskCache.set(task2.id, task2);
console.log("Task Cache");
console.log(taskCache.get(task1.id));
console.log(taskCache.get(task2.id));
// FAVORITES
const favUsers = new Favorites();
favUsers.add(user1);
favUsers.add(user2);
favUsers.remove(user1);
console.log("Favorite Users");
console.log(favUsers.getAll());
const favTasks = new Favorites();
favTasks.add(task3);
console.log("Favorite Tasks");
console.log(favTasks.exists(task3));
// PAGINATOR
const paginator = new Paginator();
const page1 = paginator.paginate(userList.getAll(), 1, 2);
const page2 = paginator.paginate(userList.getAll(), 2, 2);
console.log("User Page 1");
console.log(page1);
console.log("User Page 2");
console.log(page2);
// TAG MANAGER
const tagManager = new TagManager();
tagManager.addTag(task1, 'urgent');
tagManager.addTag(task1, 'backend');
console.log(tagManager.getTags(task1));
const userTagManager = new TagManager();
userTagManager.addTag(user1, "admin");
userTagManager.addTag(user1, "remote");
console.log(userTagManager.getTags(user1));
// WATCHER SYSTEM
const watcherSystem = new WatcherSystem();
const userFollowerSystem = new WatcherSystem();
watcherSystem.watch(task1, user1);
watcherSystem.watch(task1, user2);
console.log("Followers of task 1:");
console.log(watcherSystem.getWatchers(task1).map(u => u.getEmail()));
userFollowerSystem.watch(user1, user2);
userFollowerSystem.watch(user1, user3);
console.log("Followers of user 1");
console.log(userFollowerSystem.getWatchers(user1).map(u => u.getEmail()));
// PRIORITY MANAGER
const priorityManager = new PriorityManager();
priorityManager.setPriority(task1, 5);
priorityManager.setPriority(task2, 1);
console.log(priorityManager.getPriority(task1));
// RATING SYSTEM
const ratingSystem = new RatingSystem();
ratingSystem.rate(task1, 5);
ratingSystem.rate(task1, 3);
console.log(ratingSystem.getAverage(task1));
