import './User.scss'

export const User = ({ avatar, name, message, theme, onDelete }) => {
    return (
                <li className='user'>
                    <ul>
                        <li>
                            <img className='avatar' src={avatar} alt="" />
                            <h2>{name}</h2>
                        </li>
                    </ul>
                    <div className="desc">
                        <h2>Theme:{theme}</h2>
                        <p className='message'>Message: {message}</p>
                    </div>
                        <span onClick={onDelete} className="position-absolute translate-middle badge border rounded-pill bg-light">
                        <button type="button" className="btn-close btn-close" aria-label="Close"></button>
                    </span>
                </li>
    )
};
