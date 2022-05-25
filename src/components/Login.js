import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import logo from "./assets/images/logo.png";

import { Div, Image, Form} from "./Stylelogin";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading]= useState(false);
    const { token, setToken } = useContext(UserContext);

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
