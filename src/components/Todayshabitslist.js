import styled from "styled-components";

import check from "./assets/images/Group.png";
import { Loaderspinner } from "./Loaderspinner";

export default function Todayshabitslist({ id, name, done, current, highest, checkhab, erasehab, loading, setLoading }){
    function sendRequest(id){
        if(done){
            erasehab(id);
            setLoading(true);
        }else{
            checkhab(id);
            setLoading(true);
        }
    }
    
    return(
        <Today>
            <div className="div">
                <h3>{name}</h3>
                <p>
                    Sequência atual:
                     <Green color={done ? "#8FC549" : "#666666"}>
                        {current} {current === 1 ? "dia" : "dias"}
                    </Green>
                </p>
                <p>
                    Seu recorde:
                    <Green color={current === highest ? "#8FC549" : "#666666"}>
                        {highest} {highest === 1 ? "dia" : "dias"}
                    </Green>
                </p>
            </div>
            <Button backcolor={done ? "#8FC549" : "#EBEBEB"} onClick={loading ? null : () => sendRequest(id)}>
                {loading ? <Loaderspinner /> : <img alt="check" src={check} />}
            </Button>
        </Today>
    );
}

const Today = styled.div`
    width: 100%;
    height: 94px;
    border-radius: 5px;
    border: none;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .div{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 14px 0px 17px 0px;
    }
    h3{
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        margin: 0px 8px 10px 10px;
    }
    p{
        font-weight: 400;
        font-size: 13px;
        color: #666666;
        margin: 0px 0px 2px 10px;
    }
`

const Button = styled.button`
    width: 69px;
    height: 69px;
    margin-right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backcolor};
    border-radius: 5px;
    border: none;
    img{
        width: 35px;
        height: 28px;
    }
`

const Green = styled.strong`
    color: ${props => props.color};
    margin-left: 5px;
`