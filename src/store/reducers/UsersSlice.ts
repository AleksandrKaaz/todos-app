import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../domain/entities/User";
import axios from "axios";

export interface UsersState {
    users: User [],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined,
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: undefined
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched users to the array
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
    },
})

export const fetchUsers = createAsyncThunk('users', async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    return result.data;
})

export default usersSlice.reducer;