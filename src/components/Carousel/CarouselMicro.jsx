import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import './CarouselMicro.css';

import img1 from '../../images/img1.webp';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp';
import img7 from '../../images/img7.webp';
import img8 from '../../images/img8.webp';
import img10 from '../../images/img10.webp';
import img12 from '../../images/img12.webp';
import img13 from '../../images/img13.webp';
import img14 from '../../images/img14.webp';
import img18 from '../../images/img18.webp';
import img19 from '../../images/img19.webp';
import img20 from '../../images/img20.webp';
import img21 from '../../images/img21.webp';
import img22 from '../../images/img22.webp';
import img23 from '../../images/img23.webp';


function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1500 })])

  const images = [img1, img2, img3, img7, img8, img10, img12, img13, img14, img18, img19, img20, img21, img22, img23]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className='embla_slide' key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className='embla_image'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel