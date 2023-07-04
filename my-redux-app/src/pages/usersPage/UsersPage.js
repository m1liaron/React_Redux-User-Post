import { UserList } from '../../components/userList/UserList';

import './UsersPage.scss';

export const UsersPage = () => {
    return (
        <div className="container">
            <h1>Users:</h1>
            <UserList/>
        </div>
    )
}