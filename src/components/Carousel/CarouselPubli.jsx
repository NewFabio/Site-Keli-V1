import React from "react";

// Css
import styles from './Carouselpubli.module.css';

// Imagens
import img1 from '../../images/curso1.png';
import img2 from '../../images/curso2.png';
import img3 from '../../images/curso3.png';

const Carousel = () => {
    return (
        <div id="carouselIndicador" className="carousel slide w-auto h-auto mb-3" data-bs-ride= "carousel">
            <div className="carousel-indicators" style={{filter: "invert(50%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(90%) contrast(85%)"}}>
                <button 
                    type="button" 
                    data-bs-target="#carouselIndicador"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1" 
                ></button>
                <button 
                    type="button" 
                    data-bs-target="#carouselIndicador"
                    data-bs-slide-to="1"
                    aria-label="Slide 2" 
                ></button>
                <button 
                    type="button" 
                    data-bs-target="#carouselIndicador"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} alt="imagem" className={`${styles.bgContainer} d-block w-100`} />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="imagem" className={`${styles.bgContainer} d-block w-100`} />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="imagem" className={`${styles.bgContainer} d-block w-100`} />
                </div>
            </div>
            <button 
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselIndicador"
                data-bs-slide="prev">
                    <span 
                        className="carousel-control-prev-icon" 
                        aria-hidden="true"
                        style={{filter: "invert(50%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(90%) contrast(85%)"}}>
                    </span>
                    <span className="visually-hidden">Previous</span>
            </button>
            <button 
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselIndicador"
                data-bs-slide="next">
                    <span 
                        className="carousel-control-next-icon" aria-hidden="true"
                        style={{filter: "invert(50%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(90%) contrast(85%)"}}>
                    </span>
                    <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;