import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from '../store/action-creators/'

/**
 * Биндим все actions и вызываем их как: const { fetchUsers } = useActions();
 * вместо dispatch = useDispatch();
 * dispatch(fetchUser())
 * ДОбавили: теперь биндим всю папку action-creators, точнее все экшены указанные в ../store/action-creators/index.ts 
 * @returns 
 */
export const useActions = () => {
    const dispatch = useDispatch()
    console.log(ActionCreators); // test

    return bindActionCreators(ActionCreators, dispatch)
}