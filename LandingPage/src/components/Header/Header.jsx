
function Header() {
    return (
        <div className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: "#0E424D", opacity: "0.8"}}>
            <nav className="container">
                <span className="navbar-text" style={{fontWeight: '200'}} >Estúdio<span style={{fontFamily:'Playwrite in', fontWeight:'400'}}>Delicata</span></span>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHumburguerMenu" aria-controls="navbarHumburguerMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " style={{}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHumburguerMenu">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;