import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducer";
import { usersReducer } from "./UsersReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>;