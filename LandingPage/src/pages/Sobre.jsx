import React, { useState, useEffect } from "react";

// import motion
import {motion} from 'motion/react';
import FadeIn from "../components/Motion/FadeIn";

// import imagem
import woman from '../../src/images/woman.jpg';
import selo from '../../src/images/selo.png';
import woman2 from '../../src/images/woman2.jpg';
import carol from '../../src/images/carol.png';
import helena from '../../src/images/helena.png';
import leda from '../../src/images/leda.png';

const Sobre = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    // monitora o tamanho da tela para detectar se é mobile
    useEffect(() => {
            const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const imagem = {
        backgroundImage: `url(${woman})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: '20%',
        height: isMobile ? "300px" : "80vh",
    };

    const imagem2 = {
        backgroundImage: `url(${selo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: 'none',
        minHeight: '80px',
        minWidth: '80px'
    };

    const imagem3 = {
        backgroundImage: `url(${woman2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: '20%',
        height: isMobile ? "300px" : "80vh",
    };

    // Comentarios

    const comments = [
        {
          id: 1,
          name: "Carolina Mendonça",
          photo: `${carol}`,
          comment: "Gratidão imensa pelo seu trabalho! O curso é ótimo, você é maravilhosa para explicar. Acompanho seu trabalho ja faz um tempo, e coloquei como meta nesse ano fazer seu curso, e deu certo! Que Deus te abençoe também",
          link: "https://www.instagram.com/carolmendf?igsh=MXg3cTE3MXFyOXFvcQ%3D%3D"
        },
        {
          id: 2,
          name: "Helena Freire",
          photo: `${helena}`,
          comment: "Amo, a keli fez a minha sobrancelha, ficou linda, foi um prazer conhecer a keli pessoalmente durante as minhas férias no Brasil. Dediquei a minha confiança na Keli e ela é profissional nota 10, recomendo",
          link: "https://www.instagram.com/ola.helena?igsh=ajBkb3MzdTRtNDJw"
        },
        {
          id: 3,
          name: "Lêda Frey",
          photo: `${leda}`,
          comment: "A melhor! Fiz minhas sobrancelhas faz mais de 3 anos e está perfeita até hoje! O designer nunca mais saiu!",
          link: "https://www.instagram.com/ledafrey97?igsh=a29sc2Y5cWFlOTNz"
        }
      ];
      

    return (
        <section className="container-fluid my-2">
            <div className="d-flex flex-column align-items-center">
                <motion.div 
                    variants={FadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.5}}

                    className="col-12 col-md-6 border border-5" style={imagem}>
                    
                </motion.div>
                <div className="d-flex flex-column align-items-center justify-content-center p-4 bg-body my-3 rounded-3">
                    <motion.p 
                        variants={FadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}

                        className="text-dark">
                            Keli Oliveira Delicata é uma renomada profissional na área de micropigmentação, especializada na técnica que leva seu nome, a técnica Delicata. Essa técnica se destaca pela aplicação de traços suaves e delicados, que proporcionam uma harmonização perfeita e natural das sobrancelhas, dando aos resultados um aspecto sofisticado e de alto padrão.
                    </motion.p>

                    <motion.p 
                        variants={FadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}

                        className="text-dark">
                            Além de sua prática como micropigmentadora, Keli também compartilha seu vasto conhecimento com outros profissionais através de cursos online. Esses cursos são projetados para atender desde iniciantes até especialistas que buscam se aprimorar na técnica Delicata. O conteúdo dos cursos é cuidadosamente elaborado, permitindo que os alunos dominem a arte da micropigmentação com excelência.
                    </motion.p>

                    <motion.p 
                        variants={FadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}

                        className="text-dark">
                            Keli Oliveira Delicata é altamente reconhecida no ramo da beleza, e sua técnica vem conquistando admiradores e alunos em diversas regiões. Ela também disponibiliza seu trabalho e recursos em plataformas como blogs e vídeos demonstrativos, buscando sempre educar e inovar no mercado de micropigmentação.
                    </motion.p>

                    <motion.p 
                        variants={FadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}

                        className="text-dark">
                            Por meio de seu trabalho e ensinamentos, ela tem contribuído significativamente para a evolução da micropigmentação, oferecendo uma técnica que se destaca pela precisão e naturalidade nos resultados, além de compartilhar sua expertise com outros profissionais da área.
                    </motion.p>
                    <motion.div 
                        variants={FadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}
                        className="d-block" style={imagem2}>
                    </motion.div>
                    <motion.p 
                        variants={FadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}
                        className="text-dark fw-bold">Ganhadora em 1º lugar do prêmio de Melhor Curso de Micropigmentação nos anos de 2020, 2021 e 2022 por instituições como IMBRAP, IMPEQ e Latin American Quality Institute.
                    </motion.p>
                    <motion.p 
                        variants={FadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.5}}
                        className="text-dark">Em 2020, Keli Oliveira foi reconhecida com o <span className="fw-bold">Prêmio Top of Mind</span> na área de micropigmentação, consolidando seu nome como uma das profissionais mais lembradas e influentes do setor. Esse prêmio é um dos mais importantes do mercado, pois mede a força da marca na mente dos consumidores e profissionais, destacando aqueles que realmente fazem a diferença.
                    </motion.p>              
                </div>
                <motion.div 
                    variants={FadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.5}}
                    className="col-12 col-md-6 border border-5" style={imagem3}>
                </motion.div>
            </div>
            {/* comentarios */}
            <div className="mt-3 bg-light">
                <h2 className="text-center my-3">Feedback de clientes</h2>
                <div className="row justify-content-center">
                {comments.map((comment) => (
                    <div key={comment.id} className="col-md-4 text-center mb-4">
                    <img
                        src={comment.photo}
                        alt={comment.name}
                        className="rounded-circle mb-2"
                        width="70"
                        height="70"
                    />
                    <h5><a href={comment.link} target="_blank">{comment.name}</a></h5>
                    <p className="text-muted">"{comment.comment}"</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Sobre;