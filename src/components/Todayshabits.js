import Top from "./Top";

import styled from "styled-components";

export default function Todayshabits(){
    return(
        <>
            <Top />
            <Tag>Eu sou today's habits</Tag>
        </>
    );
}

const Tag = styled.p`
    margin-top: 100px;
`