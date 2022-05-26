import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import Habits from "./Habits";
import History from "./History";
import Login from "./Login";
import Signup from "./Signup";
import Todayshabits from "./Todayshabits";

export default function App(){
    const[userdata, setUserdata] = useState("");

    return (
        <UserContext.Provider value={{ userdata, setUserdata }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Signup />} />
                    <Route path="/hoje" element={<Todayshabits />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}