import React, { useEffect, useState } from "react";
import SEO from "./SEO";
import "./Contact.css";

const Contact = ({ contact }) => {
  const [result, setResult] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("¡Muchas gracias por contactarnos en Andes Export! Hemos recibido tu mensaje y lo revisaremos a la brevedad.");
      event.target.reset();
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    } else {
      setResult(data.message);
    }
  };
  
  return (
    <>
      <SEO
        title="Contact Us - Andes Fruits | Get in Touch"
        description="Contact Andes Fruits for premium Colombian exotic fruits. Get quotes, product information, and export inquiries. We're here to help."
        keywords="contact andes fruits, fruit export inquiry, colombian fruit supplier contact, exotic fruits quote"
        url="/contact"
      />
      <div className="contact-container">
        {/* Header Section */}
        <section className="contact-header">
          <div className="contact-header-bg"></div>
          <div className="contact-header-content">
            <h1>{contact.title}</h1>
            <h2>{contact.description}, {contact.title2}</h2>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          {/* Form Section */}
          <div className="contact-form-section">
            <h3><i className='bx bxs-envelope'></i> {contact.button}</h3>
            <form className="contact-form" onSubmit={onSubmit} aria-label="Contact form">
              <input type="hidden" name="subject" value="SOLICITUD CONTACTO"/>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-firstname">
                    <i className='bx bx-user'></i> First Name *
                  </label>
                  <input 
                    id="contact-firstname"
                    type="text" 
                    placeholder="John" 
                    name="name" 
                    required 
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-lastname">
                    <i className='bx bx-user'></i> Last Name *
                  </label>
                  <input 
                    id="contact-lastname"
                    type="text"  
                    placeholder="Doe"   
                    name="last_name"  
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">
                    <i className='bx bx-phone'></i> Phone *
                  </label>
                  <input 
                    id="contact-phone"
                    type="tel" 
                    placeholder="+1 234 567 8900" 
                    name="phone" 
                    required
                    aria-required="true"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-email">
                    <i className='bx bx-envelope'></i> Email *
                  </label>
                  <input 
                    id="contact-email"
                    type="email" 
                    placeholder="john@company.com" 
                    name="email" 
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-company">
                  <i className='bx bx-buildings'></i> Company *
                </label>
                <input 
                  id="contact-company"
                  type="text" 
                  placeholder="Your Company Name" 
                  name="company" 
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-message">
                  <i className='bx bx-message-detail'></i> Message *
                </label>
                <textarea 
                  id="contact-message"
                  name="message" 
                  placeholder="Tell us how we can help you..." 
                  required
                  aria-required="true"
                ></textarea>
              </div>
              
              <button type="submit" className="contact-submit-btn" aria-label="Send message">
                <i className="bx bxs-send" aria-hidden="true"></i>
                Send Message
              </button>
              
              <div className={visible ? "contact-alert" : "contact-alert hidden"} role="status" aria-live="polite">
                <img src="/img/lv.png" alt="" aria-hidden="true" />
                <p>{result}</p>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3><i className='bx bxs-contact'></i> {contact.title3}</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <i className='bx bxs-phone'></i>
                  <div className="contact-info-text">
                    <strong>{contact.tp}</strong>
                    <span>{contact.phone2}</span>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className='bx bxs-envelope'></i>
                  <div className="contact-info-text">
                    <strong>{contact.te}</strong>
                    <span>{contact.email}</span>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className='bx bxs-map'></i>
                  <div className="contact-info-text">
                    <strong>{contact.ta}</strong>
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>
              
              <a 
                className='contact-linkedin' 
                href={contact.lk} 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <i className='bx bxl-linkedin'></i> 
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact-info-card">
              <h3><i className='bx bxs-map-pin'></i> Find Us</h3>
              <div className="contact-map">
                <iframe
                  src="https://maps.google.com/maps?q=andes+export&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  title="Google Maps - Andes Export location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
