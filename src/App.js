import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaInicial from "./TelaInicial";
import Sessao from "./Sessao";



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial/>} />
                <Route path="/sessao/:idSessao" element={<Sessao/>} />

            </Routes>
        </BrowserRouter>
    )
}