import DefaultAvatar from '../../resources/img/Default-ava.png'
import './User.scss'

export const User = ({ avatar, name, theme, message }) => {

    return (
                <li className='user'>
                    <ul>
                        <li>
                            <div className="user-profile">
                                    <img className='avatar' src={avatar ? avatar : DefaultAvatar} alt="" />
                                    <h2>{name}</h2>
                            </div>
                        </li>
                        <li>
                            <div className="desc">
                                <h2>{theme}</h2>
                                <p className='message'>{message}</p>    
                            </div>
                        </li>
                    </ul>
                    {/* <span className="position-absolute translate-middle badge border rounded-pill bg-light">
                        <button type="button" className="btn-close btn-close" aria-label="Close"></button>
                    </span> */}
                </li>
    )
};
