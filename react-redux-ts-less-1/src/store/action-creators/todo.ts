import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";

// https://jsonplaceholder.typicode.com/users

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODO }) // * вызов инфо - ЗАГРУЗКА

            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            })

            setTimeout(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODO_SUCCESS,
                    payload: response.data
                })
            }, 1000)

        } catch (err) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })

        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}