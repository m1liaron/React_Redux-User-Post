import { useGetUsersQuery, useDeleteUserMutation } from '../../api/apiSlice';
import { User } from '../user/User';
import './UserList.scss'

export const UserList = () => {
    
    const {
        data: users = [],
    } = useGetUsersQuery();

    const [deleteUser] = useDeleteUserMutation;

    const onDelete = ((id) => {
        deleteUser(id)
    }, []);

    const renderUsersList = (arr) => {
        if (arr.length === 0) {
            <h5>Not users yet</h5>
        }

        return arr.map(({id, ...props}) => {
            <User {...props} onDelete={() => onDelete(id)} />
        })
    }

    const elements = renderUsersList(users);
    return (
        <div className="container">
            <ul>
                    {elements}
            </ul>
        </div>
    )
};
