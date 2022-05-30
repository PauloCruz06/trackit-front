import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Calendar from "react-calendar";
import dayjs from "dayjs";

import Top from "./Top";
import Menu from "./Menu";

import UserContext from "../contexts/UserContext";

import { Screen, Div } from "./Stylehabits";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export default function History(){
    const[habitdays, setHabitdays] = useState("");
    const{ userdata } = useContext(UserContext)
    const hab = [{data: "23/05/2022", done: true}, {data: "24/05/2022", done: false}, {data: "25/05/2022", done: true}, {data: "26/05/2022", done: true}]

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
    
    return(
        <Screen>
            <Top />
            <Div>
                <h3>Histórico</h3>
                <Calendarconteiner>
                    <Calendar
                        tileClassName={tileClassName}
                    />
                </Calendarconteiner>
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