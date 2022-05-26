import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function Todayshabits(){
    const { userdata, setUserdata } = useContext(UserContext);

    if(userdata === ""){
        const userlogin = localStorage.getItem('data');
        setUserdata(JSON.parse(userlogin));
    }

    return(
        <>
            <p>Eu sou today's habits</p>
            <img alt="login" src={userdata.image}/>
            <p>{userdata.name}</p>
        </>
    );
}