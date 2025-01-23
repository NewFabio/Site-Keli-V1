
function Header() {
    return (
        <header className="navbar">
            <nav className="container">
                <a className="navbar-brand">Logo</a>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#humburguer" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <span className="navbar-toggle-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="humburguer">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active">Home</a></li>
                        <li className="nav-item"><a className="nav-link">About</a></li>
                        <li className="nav-item"><a className="nav-link">Services</a></li>
                        <li className="nav-item"><a className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;