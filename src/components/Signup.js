import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "./assets/images/logo.png";
import { Loaderspinner } from "./Loaderspinner";

import { Div, Image, Form } from "./Stylelogin";

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

        promise.then(() => {
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
