export interface State {
    toDoList: ToDoObject[]
}

export interface ToDoObject {
    name: string,
    isDone: boolean,
}