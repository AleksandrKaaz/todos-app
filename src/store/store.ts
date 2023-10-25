import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from './reducers/TodosSlice';
import usersReducer from './reducers/UsersSlice';

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
});

export const store = configureStore({
      reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch