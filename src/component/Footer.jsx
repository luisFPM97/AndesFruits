import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = ({content, links, language}) => {
    const location = useLocation();
    
  return (
    <footer>
        
        <div className='contFooter'>
            <div className='contF'>
                <span>{content.home.titleE}</span>
                <a href={`https://wa.me/+57${content.contactenos.phone}`} target='blank'><i className="bx bxl-whatsapp"></i>{content.contactenos.phone2}</a>
                <span>Andes Fruits - Andes Export Company S.A.S</span>
                <a href="https://www.google.com/maps?ll=5.580854,-73.336938&z=13&t=m&hl=es-ES&gl=US&mapclient=embed&cid=17034548024406326657" target='blank'>{content.contactenos.address}</a>
            </div>
            <div className='contF'>
                <ul>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            className={`pagesMenu ${location.pathname === link.path ? "active" : ""}`}
                            to={link.path}
                            onClick={()=>(setSelectedLink(link), setShowNav(!showNav))}
                        >
                              
                            {link.label}
                        </Link>
                    ))}
                          
                </ul>
            </div>
            <div className='contF'>
                <Link to="/empleo">Trabaja con nosotros</Link>
                <Link to="/eticalLine">PQRS</Link>
                <Link to="/data">{content.contactenos.td}</Link>
                
            </div> 
                 
        </div>
        <div className='contFooter2'>
            <span className="cc">© Andes Fruits {new Date().getFullYear()}</span>       
            <span>
                    {" "}
                    <a
                        className="lcode"
                        href="https://luiscodev.com/"
                        target="blank"
                    >
                        {" "}
                        dev by Luis Code
                    </a>
            </span>
        </div>
    </footer>
  )
}

export default Footer