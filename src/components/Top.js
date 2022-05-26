import { useContext } from "react";

import UserContext from "../contexts/UserContext";

import styled from "styled-components";
import trackit from "./assets/images/TrackIt.png";

export default function Top(){
    const { userdata, setUserdata } = useContext(UserContext);

    if(userdata === ""){
        const userlogin = localStorage.getItem('data');
        setUserdata(JSON.parse(userlogin));
    }

    return(
        <Div>
            <Imagelogo alt="TrackIt" src={trackit} />
            <Imageuser alt={userdata.name} src={userdata.image}/>
        </Div>
    );
}

const Div = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0px;
    left: 0px;
`
const Imagelogo = styled.img`
    width: 90px;
    height: 30px;
    margin-right: 85px;
`

const Imageuser = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-left: 85px;
`