import { useState } from 'react';
import { email } from '../../helpers';

export const ContactForm = () => {
    const [emailValue, setEmailValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!emailValue) return;
        
        const success = await email.subscribe(emailValue);
        if(success) setEmailValue('');
    }

    const handleInputChange = (e) => {
        setEmailValue(e.target.value);
    }
    
    return (
        <div className='contact'>
            <form className='contact__form' onSubmit={ handleSubmit }>
                <label htmlFor='email'>
                    Déjanos tu correo y le avisaremos cuando terminemos de hacer la magia.
                </label> <br />
                <input 
                    type='text'
                    placeholder='Correo Electrónico'
                    id='email'
                    value={ emailValue }
                    onChange={ handleInputChange }
                />
                
                <button
                    type='submit'
                >
                    Avísame
                </button>
            </form>
            
            <small>Al enviar tu correo, aceptas los términos y condiciones de FormuApp</small>
        </div>
    )
}
