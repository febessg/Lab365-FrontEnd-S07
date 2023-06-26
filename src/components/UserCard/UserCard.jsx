import './UserCard.css';
import propTypes from 'prop-types';

function userCard({userList}) {
    return (  
        <>
            <div className="cards-h2-wrapper">
                <h2>Usuários:</h2>
            </div>
            <div className="card-wrapper">
                {userList.map((user, index) => (
                    <div className='user-wrapper' key={index}>
                        <div className="userName-wrapper">
                            <h3>{user.nickName}</h3>
                        </div>
                        <div className='user-img-wrapper'></div>
                        <ul>
                        <li><strong>id:</strong> {index+1}</li>
                        <li><strong>Idade:</strong> {user.age}</li>
                        <li><strong>E-mail:</strong> {user.email}</li>  
                        </ul>
                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default userCard;

userCard.propTypes = {
    userList: propTypes.array    
}