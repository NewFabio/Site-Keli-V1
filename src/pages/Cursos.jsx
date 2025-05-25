// Imagens
import img1 from '../images/curso1.webp';
import img2 from '../images/curso2.webp';
import img3 from '../images/curso3.webp';

const Cursos = () => {
    return (
        <div className="container-lg">
            <h1 className="text-light text-center">Nossos Cursos</h1>
            <section className="d-flex flex-row gap-3 flex-wrap justify-content-center py-4">
                <div className='card' style={{width: '18rem'}}>
                    <img src={img1} className="card-img-top" loading='lazy' width={100} height={300} alt="Designer Sobrancelha"/>
                    <div className="card-body">
                        <h5 className="card-title">Designer de Sobrancelhas</h5>
                        <p className="card-text">Aprenda desde as técnicas básicas até as mais avançadas para design de sobrancelhas. Este curso foi desenvolvido para iniciantes ou para profissionais que ja atuam e queiram aperfeiçoar e aprender a minha técnica de designer harmonioso, que realça a sobrancelha da cliente elevando ainda mais a beleza.</p>
                        <p className="card-text">Acesso vitalício e suporte via Whatsapp para tirar dúvidas.</p>
                        <a href="https://hotmart.com/pt-br/marketplace/produtos/designer-de-sobrancelhas-do-iniciante-ao-avancado/P50259216A?sck=HOTMART_PRODUCT_PAGE" target="_blank" className="btn btn-primary">Comprar Curso</a>
                    </div>
                </div>
                <div className='card' style={{width: '18rem'}}>
                    <img src={img2} className="card-img-top" loading='lazy' width={100} height={300}  alt="Designer Sobrancelha"/>
                    <div className="card-body">
                        <h5 className="card-title">Curso Nanoblading - Técnica Delicata</h5>
                        <p className="card-text">Este curso foi desenvolvido para profissionais que já possuem o curso de designer de sobrancelhas. Ele foi elaborado para quem esta iniciando do zero absoluto, e para quem já atua na área da micropigmentação e deseja se especializar na técnica DELICATA(Curso 2 em 1). Leva você do iniciante ao avançado na TÉCNICA DELICATA</p>
                        <p className="card-text">Acesso vitalício e suporte via Whatsapp para tirar dúvidas.</p>
                        <a href="https://hotmart.com/pt-br/marketplace/produtos/curso-de-micropigmentacao-do-iniciante-ao-avancado-delicata/J52154156V" target="_blank" className="btn btn-primary">Comprar Curso</a>
                    </div>
                </div>
                <div className='card' style={{width: '18rem'}}>
                    <img src={img3} className="card-img-top" loading='lazy' width={100} height={300}  alt="Designer Sobrancelha"/>
                    <div className="card-body">
                        <h5 className="card-title">Especialização - Técnica Delicata</h5>
                        <p className="card-text">Este curso foi desenvolvido para profissionais que ja possuem o curso de iniciante na Microblading. É um curso que tem como maior foco ensinar a Técnica Delicata, que consiste em uma alta perfomance de arquitetura de fios com traços delicados e movimentos suaves, que dão harmonização para uma microblading de alto padrão!!!</p>
                        <p className="card-text">Acesso vitalício e suporte via Whatsapp para tirar dúvidas.</p>
                        <a href="https://hotmart.com/pt-br/marketplace/produtos/curso-de-especializacao-de-microblading/U40289074J?sck=HOTMART_PRODUCT_PAGE" target="_blank" className="btn btn-primary">Comprar Curso</a>
                    </div>
                </div>
            </section>
            <h2 className="text-light text-center">Em caso de dúvidas entre em contato via Whatsapp.</h2>
        </div>
    );
}

export default Cursos;