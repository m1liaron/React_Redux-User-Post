import DefaultAvatar from '../../resources/img/Default-ava.png'
import './User.scss'

export const User = ({avatar, name, message, theme}) => {
    return (
        <div className="container">
            <ul>
                <li className='user'>
                    <img className='avatar' src={DefaultAvatar} alt="" />
                    <div className="desc">
                        <h2>Theme:</h2>
                        <p>Message:</p>
                    </div>
                </li>
            </ul>
        </div>
    )
};