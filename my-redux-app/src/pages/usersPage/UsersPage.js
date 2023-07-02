import { User } from '../../components/user/User';

import './UsersPage.scss';

export const UsersPage = () => {
    return (
        <div className="container">
            <h1>Users:</h1>
            <User/>
        </div>
    )
}