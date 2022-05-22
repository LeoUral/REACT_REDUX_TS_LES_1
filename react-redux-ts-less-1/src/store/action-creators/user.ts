import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";

// https://jsonplaceholder.typicode.com/users

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS }) // * вызов инфо - ЗАГРУЗКА

            const response = await axios.get('https://jsonplaceholder.typicode.com/users')

            setTimeout(() => {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS, // * загружаем в STORE данные
                    payload: response.data
                })
            }, 1000)



        } catch (err) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, // * обработка ошибок
                payload: 'Произошла ошибка при загрузке пользователей'
            })

        }
    }
}