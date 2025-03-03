import { Link } from 'react-router-dom';
function Header() {

    const handleClick = () => {
        const navbarCollapse = document.getElementById('navbarHumburguerMenu');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');  // Fecha o menu
        }
    };

    return (
        <div className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#0E424D"}}>
            <nav className="container">
                <span className="navbar-text text-light" style={{fontWeight: '300'}} >ESTÚDIO DELICATA</span>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHumburguerMenu" aria-controls="navbarHumburguerMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarHumburguerMenu">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" onClick={handleClick}>O Estúdio Delicata</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/serviços" className="nav-link" aria-current="page" onClick={handleClick}>Procedimentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cursos" className="nav-link" aria-current="page" onClick={handleClick}>Cursos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuidados" className="nav-link" aria-current="page" onClick={handleClick}>Mais Informações</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;