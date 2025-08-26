import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

//import compentes
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Import das pages
import Inicio from '../pages/Inicio';
import Procedimentos from '../pages/Procedimentos';
import Cursos from '../pages/Cursos';
import MaisInformacoes from '../pages/MaisInformacoes';
// Import do componente de WhatsApp
import Whatsapp from "../components/Whatsapp/Whatsapp";

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Whatsapp />
            <Routes>
                {/* <Route path="/" element={<Navigate to="/inicio" replace />} /> */}
                <Route path="/" element={<Inicio/>} />
                <Route path="/procedimentos" element={<Procedimentos/>} />
                <Route path="/cursos" element={<Cursos/>} />
                <Route path="/maisinformacoes" element={<MaisInformacoes/>} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default AppRoutes;