import axios from "axios"
import { UsersAction, UsersActionTypes } from "../../../types/users"
import { Dispatch } from 'redux'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS});
            const result = await axios.get('https://jsonplaceholder.typicode.com/users');

            setTimeout(() => {
                dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: result.data});
            }, 700)
            
        } catch (e) {
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке пользователей'})
        }

    }
}