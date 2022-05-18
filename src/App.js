import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaInicial from "./TelaInicial";
import Sessao from "./Sessao";
import Assentos from "./Assentos";



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial/>} />
                <Route path="/sessao/:idSessao" element={<Sessao/>} />
                <Route path="/assentos/:idAssento" element={<Assentos />} />

            </Routes>
        </BrowserRouter>
    )
}