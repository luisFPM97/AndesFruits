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
                <span>{content.contactenos.address}</span>
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