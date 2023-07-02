import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <>
            <h1>Oops 404 page</h1>
            <NavLink to='home'/>
        </>
    )
}
