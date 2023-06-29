import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {
        nickName: "",
        age: "",
        email: "",
        password: ""
    },
    setUser: () => {},
    userList: [],
    setUserList: () => {}
});

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        nickName: "Exemplo",
        age: "20",
        email: "exemplo@email.com",
        password: "senhaexemplo"
    });

    const [userList, setUserList] = useState([...[], user])

    return (
        <UserContext.Provider value={{user, setUser, userList, setUserList}}>
            {props.children}
        </UserContext.Provider>
    )
}