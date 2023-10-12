import { User } from "../domain/entities/User";

export interface UsersState {
    users: User [],
    isLoading: boolean,
    error: null | string,
}

export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS,
}

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: User [],
}

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR,
    payload: string,
}

export type UsersAction =
    FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction;