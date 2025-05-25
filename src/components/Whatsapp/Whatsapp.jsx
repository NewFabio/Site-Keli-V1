// Css
import styles from './Whatsapp.module.css';

// img
import whatsapp from '../../images/whatsapp.png';
const Whatsapp = () => {
    return (
        <div  style={{ 
                zIndex: 1,
                right: 20,
                bottom: 20,
                position: 'fixed',
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
            <a href="https://wa.me/5521969751879?text=Olá, vim pelo site, gostaria de mais informações sobre procedimentos/cursos" className={`${styles.btn} whatsapp-link target-blank  btn btn-xl`} 
            target='_blank' 
            rel='nooperner noreferrer'>
                <img src={whatsapp} alt="Whatsapp" style={{width: '50px'}}/>
            </a>
            
        </div>
    );
}

export default Whatsapp;