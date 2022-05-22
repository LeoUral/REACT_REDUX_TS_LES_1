import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
// import { useDispatch } from 'react-redux'; //* используем useAction()
// import { useSelector } from 'react-redux'; //* используем UseTypedSelector()
import { UseTypedSelector } from '../hooks/useTypedSelector';
// import { fetchUsers } from '../store/action-creators/user'; //* возвращается из useAction()


const UserList: React.FC = () => {

    // const state = useSelector(state => state.users) // сделаем свой hook
    const { users, error, loading } = UseTypedSelector(state => state.user)

    // const dispatch: any = useDispatch() // <--добавлен тип 'any' | сделан hook см. ниже
    const { fetchUsers } = useActions() // * вызываем hook который биндит все хуки

    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(users);

    if (loading) {
        return <h1> Идет загрузка... </h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id} >{user.name} --- {user.username} </div>
            )}
        </div>
    );
};

export default UserList;