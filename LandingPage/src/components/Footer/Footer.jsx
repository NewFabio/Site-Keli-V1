import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                {/* Seção de Links */}
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>Sobre Nós</h5>
                        <p>
                        Somos uma empresa dedicada a fornecer os melhores serviços para nossos clientes, com qualidade e eficiência.
                        </p>
                    </div>

                    {/* Redes sociais */}
                    <div className="col-md-4 mb-3">
                        <h5>Redes Sociais</h5>
                        <div className='d-flex justify-content-around'>
                            <a href="https://facebook.com" className="text-light">
                                <i className="bi bi-facebook" style={{width: "50px", color: "white"}}></i>Facebook
                            </a>
                            <a href="https://instagram.com" className="text-light">
                                <i className="bi bi-instagram"></i>Instagram
                            </a>
                            <a href="https://youtube.com" className="text-light">
                                <i className="bi bi-youtube"></i>YouTube
                            </a>
                        </div>
                    </div>
                </div>

                {/* Linha de Direitos Autorais */}
                <div className="text-center mt-3">
                    <p className="mb-0">&copy; 2025 Estúdio Delicata. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;