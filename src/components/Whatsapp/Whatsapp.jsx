import React from 'react';

// Css
import styles from './Whatsapp.module.css';

// img
import whatsapp from '../../images/whatsapp.png';
const Whatsapp = () => {
    return (
        <div className='fixed-bottom p-3 d-flex align-items-center' style={{zIndex: '6', left: 'initial'}}>
            <a href="https://wa.me/5521969751879?text=Olá, vim pelo site, gostaria de mais informações sobre procedimentos/cursos" className={`${styles.btn} whatsapp-link target-blank  btn btn-xl`} target='_blank' rel='nooperner noreferrer'>
                <img src={whatsapp} alt="Whatsapp" style={{width: '50px'}}/>
            </a>
            
        </div>
    );
}

export default Whatsapp;