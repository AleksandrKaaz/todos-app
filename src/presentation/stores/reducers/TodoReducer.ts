import { TodoItem } from "../../../domain/entities/TodoItem";
import { BottomMenuButtons } from "../../../enums/BottomMenuButtons";
import { TodoAction, TodoActionTypes, TodosState } from "../../../types/todo";

const initialState: TodosState = {
    todos: [
        {name: "first", isCompleted: true, show: true},
        {name: "second", isCompleted: false, show: true},
    ],
    inputTodoValue: '',
    isLoading: false,
    error: null,
    bottomNavValue: 0,
    itemsLeft: 1,
}

export const todoReducer = (state = initialState, action: TodoAction): TodosState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            let newItem: TodoItem = {
                name: state.inputTodoValue,
                isCompleted: false,
                show: true
            }
            return { ...state, todos: [...state.todos, newItem], itemsLeft: state.itemsLeft+1 };

        case TodoActionTypes.INPUT_TODO_CHANGE:
            return { ...state, inputTodoValue: action.payload };

        case TodoActionTypes.SWITCH_COMPLETE:
            let findedTodo = state.todos.find(
                todoItem =>{
                    return todoItem.name === action.payload;
                }
            );
            let isCompleted = false;
            if (findedTodo) {
                isCompleted = findedTodo.isCompleted;
                findedTodo.isCompleted = !findedTodo.isCompleted;
            }
            return { ...state, itemsLeft: isCompleted ? state.itemsLeft + 1 : state.itemsLeft - 1 };

        case TodoActionTypes.BOTTOM_NAVIGATION_CHANGE:
            if (action.payload === BottomMenuButtons.All) {
                state.todos.forEach(
                    item => item.show = true
                );
            }
            if (action.payload === BottomMenuButtons.Active) {
                state.todos.forEach(
                    item => {
                        if(item.isCompleted){
                            item.show = false
                        }
                        else {item.show = true}
                    }
                );
            }
            if (action.payload === BottomMenuButtons.Completed) {
                state.todos.forEach(
                    item => {
                        if(!item.isCompleted){
                            item.show = false
                        }
                        else{item.show = true}
                    }
                );
            }
            return { ...state, bottomNavValue: action.payload };

        case TodoActionTypes.CLEAR_COMPLETED:
            state.todos = state.todos.filter(item=>
                item.isCompleted === false
            );
            return { ...state };

        default: return state;
    }
}