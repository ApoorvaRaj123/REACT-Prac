import { useState } from "react";
import { createContext } from "react";


export const UserContext = createContext();

const Context = (props) => {

    const [users, setUsers] = useState([
        {id: 1, name: "John", email: "aa@gmail.com"},
        {id: 2, name: "Apoo", email: "bb@gmail.com"},
        {id: 3, name: "Yash", email: "cc@gmail.com"},
    ])

    console.log(props);
    return <UserContext.Provider vlaue = {{users, setUsers}}>{props.children}</UserContext.Provider>;
}

export default Context;
