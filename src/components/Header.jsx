import './Header.css';
import { useState } from 'react';

function Header() {
const [name, setName] = useState('Clique aqui')

const changeTitle = () => {
    if (name === 'Clique aqui') {
        let userName = prompt('Digite o seu nome');
        if (userName.trim() !== '') {
            setName(userName) 
        } 
    } else {
        setName('Clique aqui')
    } 
}


    return (  
        <div className='Header'>
            <h1 onClick={changeTitle}>Bem vindo(a), {name}</h1>
        </div>
    );
}


export default Header;