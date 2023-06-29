import { useContext, useState } from 'react';
import './Form.css';
import UserCard from '../userCard/userCard';
import { UserContext } from '../../assets/contexts/UserContext';

function Form() {
    const [formData, setformData] = useState({
        nickName: "",
        age: "",
        email: "",
        password: ""
    });

    const {userList, setUserList, setUser} = useContext(UserContext);

    const handleInput = (event) => {
        const {value, id} = event.target;
        setformData({...formData, [id]: value});
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isFormValid()) {
            setUser(formData);
            setUserList([...userList, formData]);
            alert(`${formData.nickName} logado(a) com sucesso`)
            console.log(userList);
        } else {
            alert(`Verifique os campos`)
        }
       
       }
      
       const isFormValid = () => {
        let validate = true;
      
        const data = Object.entries(formData);
      
        for(const [key] of data) {
          if (!formData[key].length) {
            validate = false;
          }
        }
        return validate;
       }

    return (  
        <div className="container-wrapper">
            <form className='form-wrapper' onSubmit={handleSubmit}>
                <label htmlFor="nickName">Nickname</label>
                <input type="text" id="nickName" placeholder='Digite seu usuário' onChange={handleInput}/>
                <label htmlFor="age">Idade</label>
                <input type="text" id="age" placeholder='Digite sua idade' onChange={handleInput}/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder='Digite seu e-mail' onChange={handleInput}/>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder='Digite sua senha' onChange={handleInput}/>
                <button type="submit">Cadastrar</button>
            </form>
            <div className='userCard-wrapper'>
                <UserCard/>
            </div>
        </div>
    );
}

export default Form;