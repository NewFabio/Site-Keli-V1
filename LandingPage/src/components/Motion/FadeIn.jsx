import {  useState, useEffect } from "react";

const FadeIn = (direction, delay) => {
    const [hasAnimated, setHasAnimated] = useState(false);

    // Verificar se o scroll é para baixo e acionar a animação
    useEffect(() => {
        const handleScroll = () => {
            if (!hasAnimated && window.scrollY > 100) {// Quando o scroll for para baixo (mais de 100px de rolagem)
                setHasAnimated(true);// Marca que a animação foi disparada
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)

        };
    }, [hasAnimated])
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}

export default FadeIn;