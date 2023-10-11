import { TodoItem } from "../domain/entities/TodoItem";

export interface TodosState {
    todos: TodoItem [],
    inputTodoValue: string,
    isLoading: boolean,
    error: null | string,
    bottomNavValue: number,
    itemsLeft: number,
}

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    INPUT_TODO_CHANGE = 'INPUT_TODO_CHANGE',
    SWITCH_COMPLETE = 'SWITCH_COMPLETE',
    BOTTOM_NAVIGATION_CHANGE = 'BOTTOM_NAVIGATION_CHANGE',
    CLEAR_COMPLETED = 'CLEAR_COMPLETED',
}

interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO,
}

interface InputTodoChangeAction {
    type: TodoActionTypes.INPUT_TODO_CHANGE,
    payload: string,
}

interface SwitchCompleteAction {
    type: TodoActionTypes.SWITCH_COMPLETE,
    payload: string,
}

interface NavigationChangeAction {
    type: TodoActionTypes.BOTTOM_NAVIGATION_CHANGE,
    payload: number,
}

interface ClearCompletedAction {
    type: TodoActionTypes.CLEAR_COMPLETED,
}

export type TodoAction =
    AddTodoAction
    | InputTodoChangeAction
    | SwitchCompleteAction
    | NavigationChangeAction
    | ClearCompletedAction;