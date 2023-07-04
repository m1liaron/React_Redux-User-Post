import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { User } from '../user/User';
import './UserList.scss'
import { useEffect } from 'react';

export const UserList = () => {
    const user = useSelector(state => state.contacts.contacts);

    return (
        <div className="container">
            <ul>
                {
                    user && 
                    user.map(item => {
                        return (
                            <User name={item.name} avatar={item.avatar} theme={item.theme} message={item.message} />                                
                        )
                    })
                }
            </ul>
        </div>
    )
};
