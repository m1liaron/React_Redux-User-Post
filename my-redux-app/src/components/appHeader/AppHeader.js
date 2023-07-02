import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

export const AppHeader = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="post">Post</NavLink>
            <NavLink to="users">Users</NavLink>
        </nav>
    )
};