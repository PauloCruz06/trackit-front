import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import Login from "./Login";
import Signup from "./Signup";

export default function App(){
    const[token, setToken] = useState("");

    return (
        <UserContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}