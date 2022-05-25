import { useLocation } from "react-router-dom";

export default function Todayshabits(){
    const location = useLocation();

    return(
        <>
            <p>Eu sou today's habits</p>
            <img alt="login" src={location.state.image}/>
            <p>{location.state.name}</p>
        </>
    );
}