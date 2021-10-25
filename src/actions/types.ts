import { FetchTodosAction, DeleteToDoAction } from "./todos";

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteToDoAction