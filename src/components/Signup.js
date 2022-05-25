import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "./assets/images/logo.png";
import { Loaderspinner } from "./Loaderspinner";

import styled from "styled-components";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();

    function signUp(e){
        e.preventDefault();
        setLoading(true);
    }

    if(loading){
        const body = {
            email: email,
            name: name,
            image: photo,
            password: password
        };

        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
            body
        );

        promise.then((re) => {
            navigate("/");
        });
        promise.catch(() => {
            alert("Erro em fazer cadastro");
            setLoading(false);
        });
    }

    return (
        <Div>
            <Image className="logo" alt="TrackIt logo" src={logo} />
            <Form onSubmit={loading ? () => {} : signUp}>
                <input
                    className={loading ? "pale" : ""}
                    type="email"
                    id="email"
                    placeholder="email"
                    value={loading ? "" : email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={loading ? "pale" : ""}
                    type="password"
                    id="password"
                    placeholder="senha"
                    value={loading ? "" : password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className={loading ? "pale" : ""}
                    type="text"
                    id="name"
                    placeholder="nome"
                    value={loading ? "" : name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className={loading ? "pale" : ""}
                    type="url"
                    id="url"
                    placeholder="foto"
                    value={loading ? "" : photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    required
                />
                <button className={loading ? "pale" : ""} type="submit"> {loading ? <Loaderspinner /> : "Cadastrar"}</button>
            </Form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
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
    .pale{
        filter: contrast(75%);
    }
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
        display: flex;
        justify-content: center;
        align-items: center;
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