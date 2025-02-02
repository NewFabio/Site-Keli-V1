import React from "react";

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
                    <img src="https://placehold.co/300x100" alt="imagem" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block text-dark">
                        <h5>Slide 1</h5>
                        <p>Texto sobre o slide 1</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://placehold.co/300x100" alt="imagem" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block text-dark">
                        <h5>Slide 2</h5>
                        <p>Texto sobre o slide 2</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://placehold.co/300x100" alt="imagem" className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block text-dark">
                        <h5>Slide 3</h5>
                        <p>Texto sobre o slide 3</p>
                    </div>
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