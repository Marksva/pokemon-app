import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/home';
import Login from '../pages/login';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}


export default Rotas;

