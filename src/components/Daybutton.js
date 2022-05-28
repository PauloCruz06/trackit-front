import { useState, useEffect } from "react";

import styled from "styled-components";

export default function Daybutton({ day, loading, habitdays, id }){
    const [color, setColor] = useState("#DBDBDB");
    const [backcolor, setBackcolor] = useState("#FFFFFF");
    const [changecolor, setChangecolor] = useState(false);

    useEffect(() => {
        const userhabit = localStorage.getItem('habits');

        if(userhabit !== null){
            const data = JSON.parse(userhabit);
            data.days.map((i) => {
                if(i === id){
                    return setChangecolor(true);
                }
            })
        }
    },[])

    if(changecolor){
        setColor("#FFFFFF");
        setBackcolor("#CFCFCF");
        setChangecolor(false);
    }

    function toggle(e){
        e.preventDefault();
        if (backcolor === "#FFFFFF"){
            setColor("#FFFFFF");
            setBackcolor("#CFCFCF");
            habitdays("#FFFFFF", id);
        }else {
            setColor("#DBDBDB");
            setBackcolor("#FFFFFF");
            habitdays("#DBDBDB", id);
        }
    }

    return(
        <Button color={color} backcolor={backcolor} onClick={loading ? null : toggle}>
            {day}
        </Button>
    );
}

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.backcolor};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.color};
    margin-left: 4px;
`