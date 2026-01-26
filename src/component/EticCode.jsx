import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EticCode.css';

const EticCode = (code) => {
    let contenido = code.code;
    let valores = contenido.valores;
    let principios = contenido.principios;
    let gruposInteres = contenido.gruposInteres;
    let conductas = contenido.conductasEsperadas;
    let denuncias = contenido.denuncias;

    const [result, setResult] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("¡Gracias por tu denuncia! Hemos recibido tu mensaje y lo trataremos de manera confidencial.");
            event.target.reset();
            setVisible(true);
            setTimeout(() => setVisible(false), 5000);
        } else {
            setResult(data.message);
        }
    };

    return (
        <div className='etic-container'>
            {/* Header Hero Section */}
            <section className='etic-header'>
                <div className='etic-header-bg'></div>
                <div className='etic-header-content'>
                    <h1>Código de Ética</h1>
                    <p>{contenido.visionGeneral}</p>
                </div>
            </section>

            {/* Content Section */}
            <div className='etic-content'>
                {/* Valores Section */}
                <section className='etic-section'>
                    <div className='etic-section-header'>
                        <h2 className='etic-section-title'>
                            <i className='bx bxs-star'></i>
                            {valores.titulo}
                        </h2>
                    </div>
                    <div className='etic-items-grid'>
                        {valores.valores.map((valor, i) => (
                            <article key={i} className='etic-item'>
                                <h3 className='etic-item-title'>
                                    <i className='bx bxs-badge-check'></i>
                                    {valor.nombre}
                                </h3>
                                <p className='etic-item-description'>{valor.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Principios Section */}
                <section className='etic-section'>
                    <div className='etic-section-header'>
                        <h2 className='etic-section-title'>
                            <i className='bx bxs-shield-alt-2'></i>
                            {principios.titulo}
                        </h2>
                    </div>
                    <div className='etic-items-grid'>
                        {principios.principios.map((principio, i) => (
                            <article key={i} className='etic-item'>
                                <h3 className='etic-item-title'>
                                    <i className='bx bxs-check-circle'></i>
                                    {principio.nombre}
                                </h3>
                                <p className='etic-item-description'>{principio.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Grupos de Interés Section */}
                <section className='etic-section'>
                    <div className='etic-section-header'>
                        <h2 className='etic-section-title'>
                            <i className='bx bxs-group'></i>
                            {gruposInteres.titulo}
                        </h2>
                    </div>
                    <div className='etic-grupos-list'>
                        {gruposInteres.gruposInteres.map((grupo, i) => (
                            <article key={i} className='etic-grupo-item'>
                                <h3 className='etic-grupo-title'>
                                    <i className='bx bxs-user-detail'></i>
                                    {grupo.grupo}
                                </h3>
                                <p className='etic-grupo-description'>{grupo.compromisos}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Conductas Esperadas Section */}
                <section className='etic-section'>
                    <div className='etic-section-header'>
                        <h2 className='etic-section-title'>
                            <i className='bx bxs-book-content'></i>
                            {conductas.titulo}
                        </h2>
                    </div>
                    <div className='etic-items-grid'>
                        {conductas.conductasEsperadas.map((conducta, i) => (
                            <article key={i} className='etic-item'>
                                <h3 className='etic-item-title'>
                                    <i className='bx bxs-compass'></i>
                                    {conducta.conducta}
                                </h3>
                                <p className='etic-item-description'>{conducta.descripcion}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Denuncias Section - Destacado */}
                <section className='etic-section etic-denuncias-section'>
                    <div className='etic-section-header'>
                        <h2 className='etic-section-title'>
                            <i className='bx bxs-megaphone'></i>
                            {denuncias.titulo}
                        </h2>
                    </div>
                    <div className='etic-denuncias-content'>
                        <div className='etic-denuncias-box'>
                            <h3 className='etic-denuncias-label'>
                                <i className='bx bxs-phone-call'></i>
                                Canal de Denuncias
                            </h3>
                            <p className='etic-denuncias-text'>{denuncias.denuncias.canal}</p>
                        </div>
                        <div className='etic-denuncias-box'>
                            <h3 className='etic-denuncias-label'>
                                <i className='bx bxs-lock-alt'></i>
                                Garantía de Confidencialidad
                            </h3>
                            <p className='etic-denuncias-text'>{denuncias.denuncias.garantia}</p>
                        </div>
                    </div>
                </section>

                {/* Formulario de Denuncia Anónima */}
                <section className='etic-section etic-form-section'>
                    <div className='etic-section-header'>
                        <h2 className='etic-section-title'>
                            <i className='bx bxs-envelope'></i>
                            Formulario de Denuncia Anónima
                        </h2>
                    </div>
                    <p className='etic-form-description'>
                        Utiliza este formulario para reportar de manera confidencial cualquier situación que consideres 
                        va en contra de nuestro código de ética. Tu identidad será protegida.
                    </p>
                    <form className='etic-form' onSubmit={onSubmit} aria-label='Formulario de denuncia anónima'>
                        <input type='hidden' name='subject' value='DENUNCIA ÉTICA ANÓNIMA'/>
                        <input type='hidden' name='name' value='Denuncia Anónima'/>
                        <input type='hidden' name='last_name' value=''/>
                        <input type='hidden' name='phone' value='N/A'/>
                        <input type='hidden' name='company' value='Anónimo'/>
                        
                        <div className='form-group'>
                            <label htmlFor='etic-subject'>
                                <i className='bx bx-tag'></i> Asunto *
                            </label>
                            <input 
                                id='etic-subject'
                                type='text' 
                                placeholder='Resumen breve de la situación' 
                                name='asunto' 
                                required 
                                aria-required='true'
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='etic-email'>
                                <i className='bx bx-envelope'></i> Correo Electrónico (opcional para anonimato completo)
                            </label>
                            <input 
                                id='etic-email'
                                type='email' 
                                placeholder='tu@email.com' 
                                name='email'
                            />
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='etic-message'>
                                <i className='bx bx-message-detail'></i> Descripción de la Denuncia *
                            </label>
                            <textarea 
                                id='etic-message'
                                name='message' 
                                placeholder='Describe detalladamente la situación que deseas reportar. Incluye fechas, lugares y personas involucradas si es posible...' 
                                required
                                aria-required='true'
                                rows='8'
                            ></textarea>
                        </div>
                        
                        <button type='submit' className='etic-submit-btn' aria-label='Enviar denuncia'>
                            <i className='bx bxs-send' aria-hidden='true'></i>
                            Enviar Denuncia
                        </button>
                        
                        <div className={visible ? 'etic-alert' : 'etic-alert hidden'} role='status' aria-live='polite'>
                            <img src='/img/lv.png' alt='' aria-hidden='true' />
                            <p>{result}</p>
                        </div>
                    </form>
                </section>

                {/* Contact CTA */}
                <section className='etic-contact-cta'>
                    <h2 className='etic-contact-title'>¿Tienes alguna pregunta?</h2>
                    <p className='etic-contact-description'>
                        Si tienes dudas sobre nuestro código de ética o necesitas más información, 
                        no dudes en contactarnos. Estamos aquí para ayudarte.
                    </p>
                    <Link to='/contactenos' className='etic-contact-button'>
                        <i className='bx bxs-envelope'></i>
                        Contáctanos
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default EticCode;