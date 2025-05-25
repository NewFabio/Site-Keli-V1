// compents
import Micro from '../components/Carousel/CarouselMicro'
import Remocao from '../components/Carousel/CarouselRemoo';


// foto maquina
import maquina from '../../src/images/maquina.webp';

const Procedimentos = () => {
    
    return (
        <section className='container-fluid my-3'>
            {/* micropigmentacao */}
            <div className="d-flex flex-column align-items-center text-center">
                <h1 className="text-light fs-1 text-center fw-bold text-wrap">MICROPIGMENTAÇÃO DE SOBRANCELHAS</h1>
                
                <p className="text-light p-3">Imagina acordar todos os dias com sobrancelhas perfeitas, sem precisar gastar tempo a preenchê-las com maquilhagem. Com a micropigmentação de sobrancelhas, isso torna-se realidade! Este procedimento é ideal para quem quer sobrancelhas naturais, bem desenhadas e definidas sem esforço diário. Utilizamos técnicas avançadas para criar fios ultra-realistas ou um efeito sombreado suave, adaptado ao teu rosto e estilo. O resultado? Um olhar expressivo, jovem e harmonioso!</p>
                
                <Micro/>

                <h2 className="text-light text-center fw-bold p-2">Vantagens da micropigmentação</h2>
                <ul className="text-light list-unstyled p-4 fw-bold">
                    <li className="mb-2">Corrige falhas e assimetrias.</li>
                    <li className="mb-2">Reduz o tempo gasto com maquiagem diária.</li>
                    <li className="mb-2">Dura entre 1 a 2 anos com retoques mínimos.</li>
                    <li className="mb-2">Não borra nem desaparece ao longo do dia.</li>
                </ul>
            </div>
            
            
            {/* remoção */}
            <div className="d-flex flex-column align-items-center text-center pt-1 mt-4 my-4 ">
                <h1 className="text-light fs-1 text-center fw-bold text-wrap p-2">Remoção de Micropigmentação e Tatuagens a Laser</h1>
                
                <h3 className="text-light text-center fw-bold">Diga Adeus ao Que Já Não Combina Consigo!</h3>

                <p className="text-light p-3">Já fez micropigmentação de sobrancelha ou uma tatuagem e arrependeu-se do resultado? Ou simplesmente quer renovar o visual? Com a nossa remoção a laser, pode eliminar pigmentos indesejados de forma segura, eficaz e sem danificar a pele!</p>

                <h2 className="text-light text-center fw-bold p-2">Como Funciona</h2>

                <p className="text-light p-3">Usamos tecnologia de laser de última geração, que fragmenta os pigmentos da pele sem causar cortes ou cicatrizes. O corpo, de forma natural, elimina esses fragmentos ao longo das semanas, resultando numa pele limpa e renovada.</p>

                <div className="col-10 col-md-4">

                    <img src={maquina} alt="foto de keli" loading='lazy' style={{width: '100%', height: '100%' }} className="rounded-circle border-end border-5"/>
                </div>

                <p className="text-light text-center mt-3 p-3">Se procura a solução mais avançada e segura para remover tatuagens e micropigmentação, a máquina <span className="fw-bold">Omer Smart</span> é a escolha perfeita! Com tecnologia de ponta e certificação com selo da <span className="fw-bold">ANVISA</span>, garante um tratamento seguro, eficaz e aprovado pelos mais altos padrões de qualidade. O laser de alta precisão quebra os pigmentos sem agredir a pele, proporcionando um processo confortável e com menos sessões do que os métodos tradicionais. Ideal para todos os tipos de pele e cores de tinta, a Omer Smart oferece resultados visíveis desde a primeira sessão, sem riscos de cicatrizes ou danos. Se deseja uma remoção segura e definitiva, esta é a melhor opção para recuperar a sua pele com confiança! </p>

                <h2 className="text-light text-center fw-bold p-2">Vantagens da Remoção a Laser</h2>
                
                <ul className="text-light list-unstyled fw-bold p-3">
                    <li className="mb-2">Seguro e eficaz – Sem danificar a pele.</li>
                    <li className="mb-2">Indolor ou com mínimo desconforto – Usamos técnicas que minimizam a sensação de ardor.</li>
                    <li className="mb-2">Resultados visíveis – Pigmento desaparece gradualmente sem deixar marcas.</li>
                    <li className="mb-2">Para todos os tipos de pele e pigmentos.</li>
                </ul>
                <Remocao />
                <p className="text-light text-center p-3">Cada sessão é rápida e personalizada para garantir o melhor resultado possível. Dependendo da profundidade e da cor do pigmento, pode precisar de mais de uma sessão, mas já verá melhorias desde a primeira!</p>
            </div>
            
            <h2 className="text-light text-center">Para agendar o seu procedimento, nos chame no Whatsapp.</h2>
        </section>
    );
}

export default Procedimentos;