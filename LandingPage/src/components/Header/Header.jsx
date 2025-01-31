import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#0E424D"}}>
            <nav className="container">
                <span className="navbar-text text-light" style={{fontWeight: '200'}} >Estúdio<span style={{fontFamily:'Playwrite in', fontWeight:'400'}}>Delicata</span></span>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHumburguerMenu" aria-controls="navbarHumburguerMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarHumburguerMenu">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link to="/sobre" className="nav-link" aria-current="page">Sobre o Estúdio Delicata</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/serviços" className="nav-link" aria-current="page">Serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cursos" className="nav-link" aria-current="page">Cursos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuidados" className="nav-link" aria-current="page">Cuidados</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;