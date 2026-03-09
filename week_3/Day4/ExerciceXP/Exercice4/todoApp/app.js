import { TodoList } from "./todo.js";

const myList = new TodoList()
myList.addTask("read Quran")
myList.addTask("Qiaam")
myList.markComplete("Qiaam")
myList.listTasks()
