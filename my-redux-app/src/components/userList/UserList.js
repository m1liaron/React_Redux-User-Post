import { useSelector } from 'react-redux';
import { User } from '../user/User';
import './UserList.scss'

export const UserList = () => {
    const user = useSelector(state => state.contacts.contacts);

    return (
        <div className="container">
            <ul>
                {
                    user.length != 0 ? 
                    user.map(item => {
                        return (
                            <User name={item.name} avatar={item.avatar} theme={item.theme} message={item.message} />                                
                        )
                    }) : <h2>No users yet</h2>
                }
            </ul>
        </div>
    )
};
