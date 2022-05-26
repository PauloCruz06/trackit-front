import Menu from "./Menu";
import Top from "./Top";

import styled from "styled-components";

export default function Todayshabits(){
    return(
        <Screen>
            <Top />
            <Tag>Eu sou today's habits</Tag>
            <Menu />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #F2F2F2;
`

const Tag = styled.p`
    margin-top: 100px;
`