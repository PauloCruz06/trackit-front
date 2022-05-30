import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Calendar from "react-calendar";
import dayjs from "dayjs";

import Dayhabilist from "./Dayhabilist";
import Top from "./Top";
import Menu from "./Menu";

import UserContext from "../contexts/UserContext";

import { Screen, Div } from "./Stylehabits";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export default function History(){
    const [habitdays, setHabitdays] = useState([]);
    const [show, setShow] = useState("");
    const { userdata } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(userdata.token){
            const config = {
                headers: {
                    Authorization: `Bearer ${userdata.token}`
                }
            }
            const promise = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
                config
            );
            promise.then((re) => {
                setHabitdays(re.data);
            });
        }else{
            navigate("/");
        }
    },[])

    function tileClassName({ date, view }){
        if (view === 'month') {
          for(let i=0; i<habitdays.length; i++){
            const habits = habitdays[i].habits
            if (habitdays[i].day === dayjs(date).format("DD/MM/YYYY")){
                if(habits.filter((hab) => (hab.done)).length === habits.length){
                    return 'greencontent';
                }else{
                    return 'redcontent';
                }
            }
          }
        }
    }

    function showlisthabits(clickday){
        habitdays.map((hab) => {
            if(hab.day === dayjs(clickday).format("DD/MM/YYYY")){
                setShow(hab.habits);
            }
        });
    }
    
    return(
        <Screen>
            <Top />
            <Div>
                <h3>Histórico</h3>
                <Calendarconteiner>
                    <Calendar
                        tileClassName={tileClassName}
                        onClickDay={(clickday) => showlisthabits(clickday)}
                    />
                </Calendarconteiner>
                {show !== "" ? 
                    show.map((hab, i) => (
                        <Dayhabilist key={i} name={hab.name} done={hab.done} setShow={setShow} />
                    ))
                    :
                    <Par>Clique no dia para ver os hábitos</Par>
                }
                {show !== "" ? <Close onClick={() => setShow("")}>Fechar</Close> : <></>}
            </Div>
            <Menu />
        </Screen>
    );
}

const Calendarconteiner = styled.div`
    width: 91%;
    height: auto;
    margin: 12px 0px 0px 17px;
    .react-calendar{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
    }
    .react-calendar__month-view__days{
        height: 320px;
    }
    .greencontent{
        background-color: #8FC549;
        border-radius: 50px;
    }
    .redcontent{
        background-color: #E75766;
        border-radius: 50px;
    }
`

const Close = styled.button`
    width: 64px;
    height: 25px;
    border-radius: 5px;
    border: none;
    margin: 6px 0px 0px 20px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 14px;
`

const Par = styled.p`
    padding-top: 12px;
`