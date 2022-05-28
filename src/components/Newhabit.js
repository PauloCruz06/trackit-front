import { useState, useEffect, useContext } from "react";

import Daybutton from "./Daybutton";
import { Loaderspinner } from "./Loaderspinner";

import UserContext from "../contexts/UserContext";
import { Buttons } from "./Stylehabits";

import styled from "styled-components";
import axios from "axios";

export default function Newhabit({ setHabits, hablist, setHablist }){
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const { userdata} = useContext(UserContext);
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    let habits = [];

    useEffect(() => {
        const userhabit = localStorage.getItem('habits');

        if(userhabit !== null){
            const data = JSON.parse(userhabit);
            setName(data.name);
        }
        
        habits = weekdays.map((day, i) => ({days: i, color: "#DBDBDB"}));
        setDays(habits);
    },[]);

    function habitdays(color, index){
        habits = [ ...days ];
        habits[index] = {days: habits[index].days, color: color};
        setDays(habits);
    }

    function calloff(e){
        e.preventDefault();
        const dayindex = days.filter((day) => (day.color === "#FFFFFF"));
        const data = {name: name, days: dayindex.map((day) => (day.days))};
        const datastring = JSON.stringify(data);
        localStorage.setItem('habits', datastring);
        setHabits("none");
    }

   function sub(e){
        e.preventDefault();
        setLoading(true);
    }

    if(loading){
        const dayindex = days.filter((day) => (day.color === "#FFFFFF"));
        const body = {name: name, days: dayindex.map((day) => (day.days))};
        const config = {
            headers: {
                Authorization: `Bearer ${userdata.token}`
            }
        }
        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            body,
            config
        );
        promise.then((re) => {
            localStorage.removeItem('habits');
            setHabits("none");
            setHablist([...hablist, re.data]);
        });
        promise.catch(() => {
            alert("Não foi possível salvar o hábito");
            setLoading(false);
        });
    }

    return(
        <Form onSubmit={loading ? null : sub}>
            <input 
                className={loading ? "pale" : null}
                type="text"
                id={loading ? null : "name"}
                placeholder="nome do hábito"
                value={name}
                onChange={loading ? null : (e) => setName(e.target.value)}
                required
            />
            <Buttons>
                 {weekdays.map((day, index) => (
                     <Daybutton key={index} id={index} loading={loading} day={day} habitdays={habitdays} />
                 ))}
            </Buttons>
            <Submits className={loading ? "pale" : null}>
                <button className="cancel" onClick={loading ? null : calloff}>
                    Cancelar
                </button>
                <button className="save" type={loading ? null : "submit"}>
                    {loading ? <Loaderspinner /> : "Salvar"}
                </button>
            </Submits>
        </Form>
    );
}

const Form = styled.form`
    width: 90%;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-left: 15px;
    .pale{
        filter: contrast(75%);
        color: #B3B3B3;
    }
    input{
        width: 90%;
        height: 45px;
        margin: 18px 0px 10px 0px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        ::placeholder{
            color: #DBDBDB;
        }
    }
`
const Submits = styled.div`
    width: 92%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    > button{
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
    .cancel{
        margin-right: 10px;
        background: none;
        border: none;
        color: #52B6FF;
    }
    .save{
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF;
        border-radius: 4.6px;
        border: none;
        color: #FFFFFF;
    }
    .save :first-child{
        width: auto;
        height: 46px;
    }
`