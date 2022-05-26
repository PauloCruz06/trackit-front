import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function Todayshabits(){
    const { userdata } = useContext(UserContext);

    return(
        <>
            <p>Eu sou today's habits</p>
            <img alt="login" src={userdata.image}/>
            <p>{userdata.name}</p>
        </>
    );
}