import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/images/logo.png";

import styled from "styled-components";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    return(
        <Div>
            <Image className="logo" alt="TrackIt logo" src={logo} />
            <Form>
                <input 
                    type="email"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button>Entrar</button>
            </Form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Div>
    );
}


const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    a{
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        text-decoration-color: #52B6FF;
    }
`

const Image = styled.img`
    width: 180px;
    height: 178px;
    object-fit: cover;
    margin-top: -120px;
    margin-bottom: 32px;
`

const Form = styled.form`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    > input{
        width: 303px;
        height: 45px;
        color: #222222;
        font-weight: 400;
        font-size: 20px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 6px;
        box-sizing: border-box;
        ::placeholder{
            color: #DBDBDB;
            font-family: 'Lexend Deca', sans-serif;
        }
    }
    > button{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        font-weight: 400;
        font-size: 21px;
        color: #FFFFFF;
        margin-bottom: 25px;
        font-family: 'Lexend Deca', sans-serif;
    }
`