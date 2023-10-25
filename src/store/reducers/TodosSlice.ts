import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TodoItem } from "../../domain/entities/TodoItem";
import { BottomMenuButtons } from "../../enums/BottomMenuButtons";
import { RootState } from "../store";

interface TodosState {
    todos: TodoItem [],
    inputTodoValue: string,
    isLoading: boolean,
    error: null | string,
    bottomNavValue: number,
    itemsLeft: number,
}

const initialState: TodosState = {
    todos: [
        {id: 0, name: "first", isCompleted: true, show: true},
        {id: 1, name: "second", isCompleted: false, show: true},
    ],
    inputTodoValue: '',
    isLoading: false,
    error: null,
    bottomNavValue: 0,
    itemsLeft: 1,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<number>) => {
                state.todos.push({
                    id: action.payload,
                    isCompleted: false,
                    name: state.inputTodoValue,
                    
                });
            },
            prepare: () => {
                return {
                    payload: +nanoid(),
                }
            }
        },

        inputTodoChange: (state, action: PayloadAction<string>) => {
            state.inputTodoValue = action.payload
        },

        switchComplete: (state, action: PayloadAction<string>) => {
            let findedTodo = state.todos.find(
                todoItem =>{
                    return todoItem.name === action.payload;
                }
            );
            if (findedTodo) {
                findedTodo.isCompleted = !findedTodo.isCompleted;
                state.itemsLeft = findedTodo.isCompleted ? state.itemsLeft - 1 : state.itemsLeft + 1;
            }
        },

        // Use the PayloadAction type to declare the contents of `action.payload`
        bottomNavigationChange: (state, action: PayloadAction<number>) => {
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
            state.bottomNavValue = action.payload;
        },

        clearCompleted: (state) => {
            state.todos = state.todos.filter(item=>
                item.isCompleted === false
            );
        },
        
    }
})

export const {
    addTodo,
    bottomNavigationChange,
    clearCompleted,
    inputTodoChange,
    switchComplete
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;