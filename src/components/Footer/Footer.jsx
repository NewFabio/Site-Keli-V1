import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import whatsapp from '../../images/whatsapp.png';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className=" text-light py-2">
            <div className="container text-start">
                {/* Seção de Links */}
                <div className="row">
                    <div className="col-md-4 mb-3">   
                        <h5 style={{textAlign: "center"}}>Sobre Nós</h5>
                        <p>
                            Nosso espaço foi pensado para proporcionar conforto, segurança e um atendimento exclusivo. Trabalhamos com sobrancelhas fio a fio, sempre priorizando a individualidade de cada rosto. Além disso, oferecemos cursos para quem deseja ingressar no mundo da micropigmentação e se tornar um profissional de excelência.
                        </p>
                        <p>
                            A beleza está nos detalhes, e o nosso compromisso é trazer a melhor versão de você mesma.
                        </p>
                        <p>
                            Agende sua visita e venha viver essa experiência!
                        </p>
                    </div>
                    

                    {/* Redes sociais */}
                    <div className=" col-md-4 mb-3 text-start">
                        <h5 style={{textAlign: "center"}}>Redes Sociais</h5>
                        <div className='d-flex justify-content-evenly'>
                            <a href="https://www.facebook.com/keli.oliveira.986/" target='_blank'>
                                <img src={facebook} alt="Simbolo do facebook"  className={`${styles.FooterImg}`}/>
                            </a>
                            <a href="https://www.instagram.com/keli.delicata.pmu/" target='_blank'>
                                <img src={instagram} alt="Simbolo do instagram" className={`${styles.FooterImg}`}/>
                            </a>
                            <a href="https://www.youtube.com/@keli.delicatapmu" target='_blank'>
                                <img src={youtube} alt="Simbolo do youtube" className={`${styles.FooterImg}`}/>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5521969751879" target='_blank'>
                                <img src={whatsapp} alt="Simbolo do whatsapp" className={`${styles.FooterImg}`}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 text-start">
                        <h5 style={{textAlign: "center"}}>Links Úteis</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2" >
                                <a      
                                    className='text-decoration-none' href="https://hotmart.com/pt-br/marketplace/produtos/designer-de-sobrancelhas-do-iniciante-ao-avancado/P50259216A?sck=HOTMART_PRODUCT_PAGE" 
                                    target='_blank'>Curso Designer de Sobrancelhas
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href="https://hotmart.com/pt-br/marketplace/produtos/curso-de-micropigmentacao-do-iniciante-ao-avancado-delicata/J52154156V"
                                    className='text-decoration-none'
                                    target='_blank'
                                >Curso Nanoblading - Técnica Delicata
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href="https://hotmart.com/pt-br/marketplace/produtos/curso-de-especializacao-de-microblading/U40289074J?sck=HOTMART_PRODUCT_PAGE"
                                    className='text-decoration-none'
                                    target='_blank'
                                    >Curso Especialização - Técnica Delicata
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href="https://drive.google.com/file/d/1_kP-BrcD5ZVIPajoqc4cwLAZzAB7NpgC/view?usp=drivesdk"
                                    className='text-decoration-none'
                                    >Dowload PDF cuidados pós Remoção
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href="https://drive.google.com/file/d/1_nqTFG7sJyw3arw1QkTdi59H_SGTCazX/view?usp=drivesdk"
                                    className='text-decoration-none'
                                    >Dowload PDF cuidados pós Microblanding
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-sm-flex flex-row justify-content-between container">
                    <p>&copy; 2025 Estúdio Delicata. Todos os direitos reservados.</p>
                    <p>Desenvolvido By <a href="#">Fabio Developer</a>.</p>
                </div>
        </footer>
    )
}

export default Footer;