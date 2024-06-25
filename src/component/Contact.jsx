
import React, { useEffect, useState } from 'react'


const Contact = ({contact}) => {
  console.log(contact)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Replace with your preferred email service
        auth: {
          user: process.env.EMAIL, // Use environment variable for security
          pass: process.env.PASSWORD, // Use environment variable for security
        },
        tls: {
          rejectUnauthorized: false, // Consider security implications!
        },
      });

      const mailOptions = {
        from: process.EMAIL,
        to: 'luis.pinzon.m.m@gmail.com', // Replace with recipient's email
        subject: 'Contact Form Submission',
        html: `
          <div>
            <h1>New Contact Form Submission</h1>
            <p>Name: ${formData.firstName} ${formData.lastName}</p>
            <p>Phone: ${formData.phone}</p>
            <p>Email: ${formData.email}</p>
            <p>Company: ${formData.company}</p>
            <p>Message: ${formData.message}</p>
          </div>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
    <div className='contactenos'>
      <div className='imgcont'></div>
      <div className='contenedorInfo'>
        <div className='headerCont'>
          <h1>{contact.title}</h1>
          <h2>{contact.description}, {contact.title2}</h2>
        </div>
        
        <div className='contForm'>
          <form action="" onSubmit={handleSubmit}>
            <input className='firstName' type="text"  placeholder='First Name'/>
            <input className='lastName' type="text" placeholder='Last Name'/>
            <input className='phone' type="text" placeholder='Phone'/>
            <input className='email' type="text" placeholder='Email'/>
            <input className='company' type="text" placeholder='Company'/>
            <textarea className='mensaje' name="" id="" placeholder='Message'></textarea>
            <button type="submit" className="btnForm" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : (
              <>
                <i className="bx bxs-send"></i>
                {contact.button}
              </>
            )}</button>
            {submissionStatus === 'success' && (
            <p className="success-message">Email sent successfully!</p>
          )}
          {submissionStatus === 'error' && (
            <p className="error-message">Error sending email. Please try again.</p>
          )}
          </form>
          <div className='infoContact'>
              <span className='title'>{contact.title3}</span>
              <span><b>{contact.tp}:</b> {contact.phone2}</span>
              <span><b>{contact.te}:</b> {contact.email}</span>
              <span><b>{contact.ta}:</b> {contact.address}</span>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe 
                    
                     
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=andes+export&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0">
                  </iframe>
                </div>
              </div>
          </div>
        </div>

      </div>
      
    </div>
    
    </>
  )
}

export default Contact