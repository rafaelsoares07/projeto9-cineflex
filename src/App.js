import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaInicial from "./TelaInicial";
import Sessao from "./Sessao";
import Assentos from "./Assentos";
import TelaSucesso from "./TelaSucesso";



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial/>} />
                <Route path="/sessao/:idSessao" element={<Sessao/>} />
                <Route path="/assentos/:idAssento" element={<Assentos />} />
                <Route path='/sucesso' element={<TelaSucesso/>} />
            </Routes>
        </BrowserRouter>
    )
}