import { UsersAction, UsersActionTypes, UsersState } from "../../../types/users";

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null
}
export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type){
        case UsersActionTypes.FETCH_USERS:
            return {...state, isLoading: true};

        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {...state, isLoading: false, users: action.payload};

        case UsersActionTypes.FETCH_USERS_ERROR:
            return {...state, isLoading: false, error: action.payload};

        default:
            return state;
    }
}