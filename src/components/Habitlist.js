import { Buttons } from "./Stylehabits";
import { Button } from "./Daybutton";
import styled from "styled-components";

export default function Habitlist({ name, days, deletehabit, index }){
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return(
        <Div>
            <p>{name}</p>
            <ion-icon onClick={() => deletehabit(index)} name="trash-outline"></ion-icon>
            <Buttons>
                {weekdays.map((day, index) => (
                    <Button
                        key={index}
                        color={days.filter((i) => (i===index)).length === 0 ? "#DBDBDB" : "#FFFFFF"} 
                        backcolor={days.filter((i) => (i===index)).length === 0 ? "#FFFFFF" : "#CFCFCF"}
                    >
                        {day}
                    </Button>
                ))}
            </Buttons>
        </Div>
    );
}

const Div = styled.div`
    width: 90%;
    height: 91px;
    margin: 0px 0px 10px 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
    > p{
        width: 94%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 13px 0px 12px 15px;
        font-weight: 400;
        font-size: 20px;
    }
    ion-icon{
        width: 20px;
        height: 25px;
        position: absolute;
        top: 10px;
        right: 8px;
    }
`