import styled from "styled-components";

export const Screen = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #F2F2F2;
`

export const Div = styled.div`
    width: 100%;
    background-color: #F2F2F2;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    padding-bottom: 100px;
    > h3{
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
        margin: 0px 0px 17px 16px;
    }
    > p{
        font-weight: 400;
        font-size: 18px;
        margin: 0px 15px 0px 16px;
        color: #666666;
    }
    .today{
        font-weight: 400;
        font-size: 18px;
        margin-top: -10px;
        color: #BABABA;
    }
    .green{
        color: #8FC549;
    }
`

export const Buttons = styled.div`
    width: 92%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
`