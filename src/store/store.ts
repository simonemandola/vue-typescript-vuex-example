import { createStore } from "vuex"
import type {State, ToDoObject} from "@/store/store.module.ts"

export default createStore({
    state: {
        toDoList: [],
    },
    mutations: {
        addNewToDo(state: State, newToDo: ToDoObject): void {
            state.toDoList.push(newToDo)
        },
        changeStatus(state: State, index: number): void {
            state.toDoList[index].isDone = !state.toDoList[index].isDone
        },
        deleteDoneToDos(state: State): void {
            state.toDoList = state.toDoList.filter((todo: ToDoObject) => !todo.isDone)
        },
        deleteToDo(state: State, index: number): void {
            state.toDoList.splice(index, 1)
        }
    },
    actions: {
        deleteDoneToDosAction(context: any): void {
            context.commit("deleteDoneToDos")
        },
        deleteToDoAction(context: any, index: number): void {
            context.commit("deleteToDo", index)
        },
    }
})