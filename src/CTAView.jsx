import { ContactForm } from './components/contactform/ContactForm';
import { Countdown } from './components/countdouwn';

import logo from './assets/logo.png';
import fbIcon from './assets/socials/fb-icon.png';
import igIcon from './assets/socials/ig-icon.png';

function CTAView() {
    return (
        <div className='ctaview'>
            <img className='logo' src={ logo } alt='logotipo'/>

            <h1 className='title'>Estamos construyendo la revolución de tus formularios.</h1>

            <Countdown />
            <p className='message'>¡Muy Pronto!</p>

            <ContactForm />

            <div className='socials'>
                <p>Síguenos</p>
                <div className='socials__images'>
                    <a href='https://facebook.com'>
                        <img src={ fbIcon } alt='icono de facebook'/>
                    </a>
                    <a href='https://instagram.com'>
                        <img src={ igIcon } alt='icono de instagram'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CTAView;
