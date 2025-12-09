import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Rotas/Home/Home";
import Login from "./Rotas/Login/Login";
import Eventos from "./Rotas/Agenda de Eventos/Eventos";
import Erro from "./Rotas/Erro/Erros";
import Header from "./Rotas/Header/Header";
import Agendar from "./Rotas/Agendar Evento/agendar";
import Cadastro from "./Rotas/cadastro/Cadastro";
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="/agendar" element={<Agendar/>} />
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;