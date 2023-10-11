import { TodoAction, TodoActionTypes } from "../../../types/todo"

export const inputTodoChange = (event: React.ChangeEvent<HTMLInputElement>): TodoAction => {
    return { type: TodoActionTypes.INPUT_TODO_CHANGE, payload: event.target.value }
}

export const switchComplete = (name: string): TodoAction => {
    return { type: TodoActionTypes.SWITCH_COMPLETE, payload: name }
}

export const addTodo = (): TodoAction => {
    return { type: TodoActionTypes.ADD_TODO }
}

export const bottomNavigationChange = (newValue: number): TodoAction => {
    return { type: TodoActionTypes.BOTTOM_NAVIGATION_CHANGE, payload: newValue };
}

export const clearCompleted = (): TodoAction => {
    return { type: TodoActionTypes.CLEAR_COMPLETED };
}