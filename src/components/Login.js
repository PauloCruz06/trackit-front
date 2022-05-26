import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import logo from "./assets/images/logo.png";
import { Loaderspinner } from "./Loaderspinner";

import { Div, Image, Form } from "./Stylelogin";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading]= useState(false);
    const { setUserdata } = useContext(UserContext);
    const navigate = useNavigate();

    function sub(e){
        e.preventDefault();
        setLoading(true);
    }

    if(loading){
        const body = {
            email: email,
            password: password
        };

        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            body
        );

        promise.then((re) => {
            navigate("/hoje");
            setUserdata(re.data);
        });
        promise.catch(() => {
            alert("Não foi possível efetuar o login");
            setLoading(false);
        });
    }

    return(
        <Div>
            <Image className="logo" alt="TrackIt logo" src={logo} />
            <Form onSubmit={loading ? null : sub}>
                <input
                    className={loading ? "pale" : ""}
                    type="email"
                    id={loading ? null : "email"}
                    placeholder="email"
                    value={email}
                    onChange={loading ? null : (e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={loading ? "pale" : ""}
                    type="password"
                    id={loading ? null : "password"}
                    placeholder="senha"
                    value={password}
                    onChange={loading ? null : (e) => setPassword(e.target.value)}
                    required
                />
                <button className={loading ? "pale" : ""} type={loading ? null : "submit"}>
                    {loading ? <Loaderspinner /> : "Entrar"}
                </button>
            </Form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Div>
    );
}
