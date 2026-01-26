import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Datatreat.css';

const Datatreat = ({content}) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const rights = [
        content.d4,
        content.d5,
        content.d6,
        content.d7
    ];

    return (
        <div className='data-container'>
            {/* Header Hero Section */}
            <section className='data-header'>
                <div className='data-header-content'>
                    <img src="/img/Recurso.png" alt="AndesFruits Logo" className='data-header-logo' />
                    <h1 className='data-header-title'>{content.title}</h1>
                </div>
            </section>

            {/* Content Section */}
            <div className='data-content'>
                {/* Main Policy Card */}
                <section className='data-policy-card'>
                    {/* Introducción */}
                    <div className='data-intro'>
                        {content.d1}
                    </div>

                    {/* Responsabilidad */}
                    <div className='data-section'>
                        <p className='data-section-text'>{content.d2}</p>
                    </div>

                    {/* Derechos de los Titulares */}
                    <div className='data-section'>
                        <h2 className='data-rights-title'>
                            <i className='bx bxs-shield-alt-2'></i>
                            {content.d3}
                        </h2>
                        <ul className='data-rights-list'>
                            {rights.map((right, index) => (
                                <li key={index} className='data-rights-item'>
                                    <i className='bx bxs-check-circle'></i>
                                    <span>{right}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Definición de Datos Sensibles */}
                    <div className='data-definition'>
                        <div className='data-definition-content'>
                            <h3 className='data-definition-title'>
                                <i className='bx bxs-info-circle'></i>
                                Definición de Datos Sensibles
                            </h3>
                            <p className='data-definition-text'>{content.d8}</p>
                        </div>
                    </div>
                </section>

                {/* Signature Section */}
                <section className='data-signature'>
                    <p className='data-signature-label'>{content.d9}</p>
                    <h2 className='data-signature-name'>{content.d10}</h2>
                    <p className='data-signature-position'>{content.d11}</p>
                </section>

                {/* Contact CTA */}
                <section className='data-contact-cta'>
                    <h2 className='data-contact-title'>¿Tienes preguntas sobre tus datos?</h2>
                    <p className='data-contact-description'>
                        Si tienes dudas sobre nuestra política de tratamiento de datos o deseas 
                        ejercer tus derechos, no dudes en contactarnos.
                    </p>
                    <Link to='/contactenos' className='data-contact-button'>
                        <i className='bx bxs-envelope'></i>
                        Contáctanos
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default Datatreat;