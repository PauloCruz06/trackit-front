import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Habitlist from "./Habitlist";
import Menu from "./Menu";
import Newhabit from "./Newhabit";
import Top from "./Top";

import UserContext from "../contexts/UserContext";

import styled from "styled-components"
import { Screen, Div } from "./Stylehabits";
import axios from "axios";

export default function Habits(){
    const [habits, setHabits] = useState("none");
    const [hablist, setHablist] = useState(null);
    const [savecall, setSavecall] = useState(null);
    const { userdata } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(userdata.token){
            const config = {
                headers: {
                    Authorization: `Bearer ${userdata.token}`
                }
            };
            const promise = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                config
            );
            promise.then((re) => (
                setHablist([...re.data])
            ));
        }else{
            navigate("/");
        }
    }, []);

    function deletehabit(index){
        if(window.confirm("Deseja excluir o hábito?")){
            const config = {
                headers:{
                    Authorization: `Bearer ${userdata.token}`
                }
            }
            const promise = axios.delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}`,
                config
            );
            promise.then(() => {
                const promise = axios.get(
                    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                    config
                );
                promise.then((re) => (
                    setHablist([...re.data])
                ));
            });
        }
    }

    return(
        <Screen>
            <Top />
            <Div>
                <Addhab>
                    <h3>Meus hábitos</h3>
                    <button 
                        onClick={habits === "none" ? () => setHabits("new") : null}
                    > + </button>
                </Addhab>
                {habits === "new" ?
                <Newhabit
                    setHabits={setHabits}
                    hablist={hablist}
                    setHablist={setHablist}
                    savecall={savecall}
                    setSavecall={setSavecall}
                /> : null}
                {hablist === null || hablist.length === 0 ? 
                    <p>
                        Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!
                    </p>
                    :
                    hablist.map((hab, i) => (
                        <Habitlist key={i} name={hab.name} days={hab.days} deletehabit={deletehabit} index={hab.id} />
                    ))
                }
            </Div>
            <Menu />
        </Screen>
    );
}

const Addhab = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    > h3{
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
        margin: 0px 0px 0px 16px;
    }
    > button{
        width: 40px;
        height: 35px;
        border-radius: 4.7px;
        border: none;
        background-color: #52B6FF;
        margin-right: 18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 27px;
        color: #ffffff;
    }
`