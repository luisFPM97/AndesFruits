import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import './Footer.css'

const Footer = () => {
    const location = useLocation();
    const { content, links, language, setSelectedLink } = useAppContext();
    
  return (
    <footer>
        {/* Main Footer Content */}
        <div className='footer-main'>
            {/* Company Info Section */}
            <div className='footer-section'>
                <div className='footer-company-info'>
                    <h3 className='footer-company-name'>{content.home.titleE}</h3>
                    <p className='footer-company-subtitle'>Andes Export Company S.A.S</p>
                    
                    <a 
                        href={`https://wa.me/+57${content.contactenos.phone}`} 
                        target='_blank'
                        rel="noopener noreferrer"
                        className='footer-contact-item'
                    >
                        <i className="bx bxl-whatsapp"></i>
                        {content.contactenos.phone2}
                    </a>
                    
                    <a 
                        href="https://www.google.com/maps?ll=5.580854,-73.336938&z=13&t=m&hl=es-ES&gl=US&mapclient=embed&cid=17034548024406326657" 
                        target='_blank'
                        rel="noopener noreferrer"
                        className='footer-contact-item'
                    >
                        <i className='bx bx-map'></i>
                        {content.contactenos.address}
                    </a>
                </div>
            </div>

            {/* Navigation Links */}
            <div className='footer-section'>
                <h4 className='footer-section-title'>Navegación</h4>
                <nav className='footer-links'>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            className={`footer-link ${location.pathname === link.path ? "active" : ""}`}
                            to={link.path}
                            onClick={() => setSelectedLink(link)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Additional Links */}
            <div className='footer-section'>
                <h4 className='footer-section-title'>Recursos</h4>
                <nav className='footer-links'>
                    <Link className='footer-link' to="/empleo">Trabaja con nosotros</Link>
                    <Link className='footer-link' to="/eticalLine">PQRS</Link>
                    <Link className='footer-link' to="/data">{content.contactenos.td}</Link>
                    <Link className='footer-link' to="/team">{content.team.title}</Link>
                </nav>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className='footer-bottom'>
            <span className="footer-copyright">
                © {content.home.titleE} {new Date().getFullYear()} - Todos los derechos reservados
            </span>       
            <span>
                Desarrollado por{" "}
                <a
                    className="footer-dev-link"
                    href="https://luiscodev.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Luis Code
                </a>
            </span>
        </div>
    </footer>
  )
}

export default Footer