import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({content}) => {
  return (
    <footer>
        <div className="fc">
          <hr />
          <div className="firstf">
            <span className="titlef">{content.home.titleE}</span>
            <a
              target="blank"
              className="titlef"
              href={`https://wa.me/+57${content.contactenos.phone}`}
            >
              <a
                target="blank"
                href={`https://wa.me/+57${content.contactenos.phone}`}
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              {content.contactenos.phone2}
            </a>
          </div>
          <hr />
          <div className="fd">
            <span>Andes Fruits - Andes Export Company S.A.S</span>
            <span>{content.contactenos.address}</span>
          </div>
          <hr />
          <div className="ff">
            <span className="cc">© Andes Fruits 2024 || <Link to="/data">{content.contactenos.td}</Link> || <Link to="/eticalLine">PQRS</Link> || <Link to="/PortalEmpleados">Portal Empleados</Link></span>
            <span>
              {" "}
              <a
                className="lcode"
                href="https://luis-code.netlify.app/"
                target="blank"
              >
                {" "}
                dev by Luis Code
              </a>
            </span>
          </div>
        </div>
      </footer>
  )
}

export default Footer