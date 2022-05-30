import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Menu from "./Menu";
import Todayshabitslist from "./Todayshabitslist";
import Top from "./Top";

import { Screen, Div } from "./Stylehabits";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Todayshabits(){
    dayjs.locale("pt-br");
    const [habits, setHabits] = useState([]);
    const [percentage, setPercentage] = useState(0);
    const { userdata, setUserdata } = useContext(UserContext);
    let brdata = dayjs().format('dddd, DD/MM');
    
    brdata = brdata[0].toUpperCase() + brdata.substring(1);
    
    useEffect(() => {
        if(userdata.token){
            const config = {
                headers: {
                    Authorization: `Bearer ${userdata.token}`
                }
            };
            const promise = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                config
            );
            promise.then((re) => {
                const done = re.data.filter((hab) => (hab.done));
                setHabits(re.data);
                setUserdata({...userdata, todays: re.data, percentage: 100*done.length/re.data.length});
                setPercentage(100*done.length/re.data.length);
            });
        }
    }, []);

    function checkhab(id){
        const config = {
            headers: {
                Authorization: `Bearer ${userdata.token}`
            }
        };
        const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            null,
            config
        );
        promise.then(() => {
            const request = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                config
            );
            request.then((re) => {
                const done = re.data.filter((hab) => (hab.done));
                setHabits(re.data);
                setUserdata({...userdata, percentage: 100*done.length/re.data.length});
                setPercentage(100*done.length/re.data.length);
            });
        });
    }

    function erasehab(id){
        const config = {
            headers: {
                Authorization: `Bearer ${userdata.token}`
            }
        };
        const promise = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
            null,
            config
        );
        promise.then(() => {
            const request = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                config
            );
            request.then((re) => {
                const done = re.data.filter((hab) => (hab.done));
                setHabits(re.data);
                setUserdata({...userdata, percentage: 100*done.length/re.data.length});
                setPercentage(100*done.length/re.data.length);
            });
        });
    }

    return(
        <Screen>
            <Top />
            <Div>
                <h3>{brdata}</h3>
                {percentage === 0 ? 
                    <p className="today">
                        Nenhum hábito concluído ainda
                    </p>
                :
                    <p className="today green">
                        {Math.round(percentage)}% dos hábitos concluídos
                    </p>
                }
                <Hablist>
                    {habits.map((hab, i) => (
                        <Todayshabitslist 
                            key={i}
                            id={hab.id}
                            name={hab.name}
                            done={hab.done} 
                            current={hab.currentSequence}
                            highest={hab.highestSequence}
                            checkhab={checkhab}
                            erasehab={erasehab}
                        />
                    ))}
                </Hablist>
            </Div>
            <Menu />
        </Screen>
    );
}

const Hablist = styled.div`
    width: 92%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 28px 0px 0px 15px;
`