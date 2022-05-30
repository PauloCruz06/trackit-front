import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

export default function Menu(){
    const { userdata } = useContext(UserContext);   

    return(
        <Div>
            <Link to={"/habitos"}>
                <button>Hábitos</button>
            </Link>
            <div>
                <Link to={"/hoje"}>
                    <CircularProgressbar
                        value={userdata.percentage ? userdata.percentage : 0}
                        text=""
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            pathTransitionDuration: 0.25,
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            strokeLinecap: "round"
                        })}
                    />
                    <p>Hoje</p>
                </Link>
            </div>
            <Link to={"/historico"}>
                <button>Histórico</button>
            </Link>
        </Div>
    );
}

const Div = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding-left: 34px;
    padding-right: 34px;
    box-sizing: border-box;
    button{
        width: auto;
        height: auto;
        background: none;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17px;
        color: #52B6FF;
    }
    > div{
        width: 91px;
        height: 91px;
        display: flex;
        position: relative;
    }
    .CircularProgressbar{
        width: 91px;
        height: 91px;
        position: absolute;
        left: 0px;
        top: -21px;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        position: absolute;
        left: 26px;
        bottom: 57px;
        z-index: 2;
    }

    @media(max-width: 320px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`