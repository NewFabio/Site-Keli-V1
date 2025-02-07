import React from "react";

// imagens
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img10 from '../../images/img10.jpg';
import img12 from '../../images/img12.jpg';
import img13 from '../../images/img13.jpg';
import img14 from '../../images/img14.jpg';

const Carousel = () => {
    return (
        <div style={{width: 'auto'}}>
            <div id="carouselIndicador" className='carousel slide carousel-fade' data-bs-ride= "carousel">
                <div className='carousel-inner border border-5'>
                    <div className='carousel-item active'>
                        <img src={img1} alt="foto sobrancelhas e olho verde" className='d-block w-100 '/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} alt="foto sobrancelhas e olho" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} alt="sobrancelhas" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img7} alt="imagem" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img8} alt="imagem" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img10} alt="imagem" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img12} alt="imagem" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img13} alt="imagem" className='d-block w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={img14} alt="imagem" className='d-block w-100' />
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
        </div>
    )
}

export default Carousel;