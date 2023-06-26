import { useState } from 'react';
import './Form.css';
import UserCard from '../userCard/userCard';

function Form() {
    const [formData, setformData] = useState({
        nickName: "",
        age: "",
        email: "",
        password: ""
    });

    const [userList, setUserList] = useState([]);

    const handleInput = (event) => {
        event.preventDefault();

        const {value, id} = event.target;

        const data = {...formData, [id]: value};
        setformData(data);
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isFormValid()) {
            const newUserList = [...userList, formData];
            setUserList(newUserList);
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
                <input type="text" id="nickName" placeholder='Digite seu usuário' onInput={handleInput}/>
                <label htmlFor="age">Idade</label>
                <input type="text" id="age" placeholder='Digite sua idade' onInput={handleInput}/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder='Digite seu e-mail' onInput={handleInput}/>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder='Digite sua senha' onInput={handleInput}/>
                <button type="submit">Cadastrar</button>
            </form>
            <div className='userCard-wrapper'>
                <UserCard userList={userList}></UserCard>
            </div>
        </div>
    );
}

export default Form;