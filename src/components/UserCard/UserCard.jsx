import './UserCard.css';
import heart from '../../assets/images/heart.png';
import heartFull from '../../assets/images/heart-full.png';
import { useContext, useState } from 'react';
import { UserContext } from '../../assets/contexts/UserContext';


function userCard() {
    const { userList } = useContext(UserContext);

    const [like, setLike] = useState(<img className='likeImg' src={heart} alt="Like"/>)

    const [totalLikes, setTotalLikes] = useState(0);

    const likeUser = () => {
        
        setLike(<img className='likeImg' src={heartFull} alt="Like"/>)
        setTotalLikes(totalLikes + 1)            
    };

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
                        <li><strong>Likes:</strong> {totalLikes}</li>                     
                        </ul>
                        <a onClick={likeUser}>{like}</a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default userCard;
