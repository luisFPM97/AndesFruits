import React, { useState } from 'react'
import './ModalContact.css'

const ModalContact = ({showModalCOntact, setShowModalCOntact, contact}) => {
  const [result, setResult] = useState("");
  const [visible, setVisible] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cf29c7be-710b-448b-a92a-3c8716b092f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("¡Muchas gracias por contactarnos en Andes Export! Hemos recibido tu mensaje y lo revisaremos a la brevedad.");
      event.target.reset();
      setVisible(true);
      setTimeout(() => setVisible(false), 5000); // 2 segundos
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className={`modalcontact${showModalCOntact ? ' visible' : ''}`}>
        
        <div className='content'>
          <div className='secp'>
            <h3>{contact.title3}</h3>
            <h4>{contact.description}</h4>
            <hr />
            <br />
            <div className='cardc'>
              <h4>General Manager</h4>
              <h4>Juan Camilo Laverde</h4>
              <a href='mailto:jlaverde@andesexport.com'>jlaverde@andesexport.com<i className='bx bx-link-external'></i></a>
              <a href="https://wa.me/573153871168" target="_blank">(+57) 315-387-1168<i className='bx bx-link-external'></i></a>
            </div>
            <div className='cardc'>
              <h4>Commercial Manager</h4>
              <h4>Wanja Engbersen</h4>
              <a href='mailto:wengbersen@andesexport.com'>wengbersen@andesexport.com<i className='bx bx-link-external'></i></a>
              <a href="https://wa.me/31611813626" target="_blank">(+31)611813626<i className='bx bx-link-external'></i></a>
            </div>
            <div className='cards'>
              <a className='lk' href={contact.lk} target='_blank'>
              <i className='bxl  bx-linkedin'  ></i>
              </a>
            </div>
            <a href="/empleo">¿Eres productor?<b>Click aquí</b></a>
          </div>
          <br />
          <div className='secs'>
          <div className="contForm">
            <div>
              <h2>{contact.title}</h2>
              <h3>{contact.title3}</h3>
            </div>
            <form action="" onSubmit={onSubmit}>
              <input type="hidden" name="subject" value="SOLICITUD CONTACTO"/>
              <input className="firstName" type="text" placeholder="First Name" name="name" required />
              <input className="lastName"  type="text"  placeholder="Last Name"   name="last_name"  required/>
              <input className="phone" type="text" placeholder="Phone" name="phone" required/>
              <input className="email" type="email" placeholder="Email" name="email" required/>
              <input className="company" type="text" placeholder="Company" name="company" required />
              <textarea className="mensaje" name="message" id="" placeholder="Message" required ></textarea>
              <button type="submit" className="btnForm">
                <i className="bx bxs-send"></i>
                {contact.button}
              </button>
                  <div className={visible?"alerta":"alerta hdd" }>
                    <img src="/img/lv.png" alt="" />
                    <p>{result}</p>
                  </div>
            </form>
            
          </div>
          </div>
          <span className='btnclose' onClick={() => setShowModalCOntact(false)}>X</span>
        </div>
    </div>
  )
}

export default ModalContact