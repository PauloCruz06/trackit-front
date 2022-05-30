import styled from "styled-components";


export default function Dayhabilist({name, done, setShow}){
    return(
        <Div>
            <h3>
                {name}
            </h3>
            {done ? <p className="green">feito</p> : <p className="red">Não feito</p>}
        </Div>
    );
}

const Div = styled.div`
    width: 91%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 8px 0px 0px 16px;
    border-radius: 5px;
    border: none;
    background-color: #FFFFFF;
    h3{
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        margin: 0px 0px 5px 12px;
    }
    p{
        font-weight: 400;
        font-size: 13px;
        margin-left: 12px;
    }
    .green{
        color: #8FC549;
    }
    .red{
        color: #E75766;
    }
`