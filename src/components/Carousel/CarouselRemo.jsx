//Css
import styles from './CarouselRemo.module.css';

// imagens
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img9 from '../../images/img9.jpg';
import img11 from '../../images/img11.jpg';


const CarouselRemo = () => {
    return (
        <div id="carouselIndicador1" className="carousel slide w-auto h-auto mb-3" data-bs-ride= "carousel">
            <div className="carousel-inner border border-5">
                <div className="carousel-item active">
                <img src={img4} alt="procedimento de remoçao" className={`${styles.bgContainer} d-block w-100`} />
                </div>
                <div className="carousel-item">
                    <img src={img5} alt="procedimento de remoçao" className={`${styles.bgContainer} d-block w-100`} />
                </div>
                <div className="carousel-item">
                    <img src={img6} alt="procedimento de remoçao" className={`${styles.bgContainer} d-block w-100`} />
                </div>
                <div className="carousel-item">
                    <img src={img9} alt="procedimento de remoçao" className={`${styles.bgContainer} d-block w-100`} />
                </div>
                <div className="carousel-item">
                    <img src={img11} alt="procedimento de remoçao" className={`${styles.bgContainer} d-block w-100`} />
                </div>
            </div>
            <button 
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselIndicador1"
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
                data-bs-target="#carouselIndicador1"
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

export default CarouselRemo;