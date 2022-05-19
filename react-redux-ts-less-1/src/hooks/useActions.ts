import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../store/action-creators/user'

/**
 * Биндим все actions и вызываем их как: const { fetchUsers } = useActions();
 * вместо dispatch = useDispatch();
 * dispatch(fetchUser())
 * @returns 
 */
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}