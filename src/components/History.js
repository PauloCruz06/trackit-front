import Top from "./Top";
import Menu from "./Menu";

import styled from "styled-components"

export default function History(){ 
    return(
        <>
            <Top />
            <Div>Eu sou a tela de histórico</Div>
            <Menu />
        </>
    );
}

const Div = styled.div`
    margin-top: 100px;
`