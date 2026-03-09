export class TodoList {
    constructor(){
        this.tasks=[]

    }
    addTask(task) {
        this.tasks.push({ name: task, completed: false })
    }
    markComplete(taskname) {
        const task = this.tasks.find(t=>t.name === taskname)
        task.completed = true
    }
    listTasks(tasks) {
        this.tasks.forEach(task => console.log(task))
}
    }
