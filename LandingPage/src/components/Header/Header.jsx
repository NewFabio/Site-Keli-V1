
function Header() {
    return (
        <div className="navbar navbar-expand-md navbar-white bg-transparent fixed-top">
            <nav className="container">
                <span className="navbar-brand text-white" style={{fontWeight: '200'}} >Estúdio<span style={{fontFamily:'Playwrite in', fontWeight:'400'}}>Delicata</span></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHumburguerMenu" aria-controls="navbarHumburguerMenu" aria-expanded="false" aria-label="Toggle navigation" style={{border: 'none'}}>
                    <span className="navbar-toggler-icon bg-white" style={{}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHumburguerMenu">
                    <ul className="navbar-nav">
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