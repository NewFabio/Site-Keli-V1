import React from 'react';

import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import whatsapp from '../../images/whatsapp.png';

import './Footer.module.css';

const Footer = () => {
    return (
        <footer className=" text-light py-4">
            <div className="container-fluid">
                {/* Seção de Links */}
                <div className="row">
                    <div className="col-md-4 mb-3 text-start">
                        <h5 style={{textAlign: "center"}}>Sobre Nós</h5>
                        <p>
                        Somos uma empresa dedicada a fornecer os melhores serviços para nossos clientes, com qualidade e eficiência.
                        </p>
                    </div>

                    {/* Redes sociais */}
                    <div className=" col-md-4 mb-3 text-start">
                        <h5 style={{textAlign: "center"}}>Redes Sociais</h5>
                        <div className='d-flex justify-content-around'>
                            <a href="https://facebook.com">
                                <img src={facebook} alt="Simbolo do facebook" />
                            </a>
                            <a href="https://instagram.com">
                                <img src={instagram} alt="Simbolo do instagram" />
                            </a>
                            <a href="https://youtube.com">
                                <img src={youtube} alt="Simbolo do youtube" />
                            </a>
                            <a href="https://youtube.com">
                                <img src={whatsapp} alt="Simbolo do whatsapp" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 text-start">
                        <h5 style={{textAlign: "center"}}>Links Úteis</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2" >
                                <a      
                                    className='text-decoration-none' href="" 
                                    target='_blank'>Curso micro completo
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href=""
                                    className='text-decoration-none'
                                    target='_blank'
                                >Curso avançado
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href=""
                                    className='text-decoration-none'
                                    target='_blank'
                                    >Curso design
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href=""
                                    className='text-decoration-none'
                                    target='_blank'
                                    >Curso 2 em 1
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href=""
                                    className='text-decoration-none'
                                    >Dowload pdf cuidados pós remoção
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href=""
                                    className='text-decoration-none'
                                    >Dowload pdf cuidados sobrancelha
                                </a>
                            </li>
                        </ul>
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