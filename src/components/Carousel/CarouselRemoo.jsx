import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import './CarouselRemoo.css';

import img4 from '../../images/img4.webp';
import img5 from '../../images/img5.webp';
import img6 from '../../images/img6.webp';
import img9 from '../../images/img9.webp';
import img11 from '../../images/img11.webp';
import img24 from '../../images/img24.webp';
import img25 from '../../images/img25.webp';
import img26 from '../../images/img26.webp';

function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

  const images = [img4, img5, img6, img9, img11, img24, img25, img26]
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