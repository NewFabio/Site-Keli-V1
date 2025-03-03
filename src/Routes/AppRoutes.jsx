import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import compentes
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Import das pages
import Sobre from '../pages/Sobre';
import Serviços from '../pages/Serviços';
import Cursos from '../pages/Cursos';
import Cuidados from '../pages/Cuidados';
import Whatsapp from "../components/Whatsapp/Whatsapp";

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Whatsapp />
            <Routes>
                <Route exact path="/" element={<Sobre/>} />
                <Route path="/serviços" element={<Serviços/>} />
                <Route path="/cursos" element={<Cursos/>} />
                <Route path="/cuidados" element={<Cuidados/>} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default AppRoutes;