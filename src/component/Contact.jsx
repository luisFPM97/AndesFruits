
import React, { useEffect, useState } from 'react'


const Contact = ({contact}) => {
  console.log(contact)
  
  return (
    <>
    <div className='contactenos'>
      <div className='contenedorInfo'>
        <div className='headerCont'>
          <h1>{contact.title}</h1>
          <h2>{contact.description}, {contact.title2}</h2>
        </div>
        
        <div className='contForm'>
          <form action="">
            <input className='firstName' type="text"  placeholder='First Name'/>
            <input className='lastName' type="text" placeholder='Last Name'/>
            <input className='phone' type="text" placeholder='Phone'/>
            <input className='email' type="text" placeholder='Email'/>
            <input className='company' type="text" placeholder='Company'/>
            <textarea className='mensaje' name="" id="" placeholder='Message'></textarea>
            <button className='btnForm'><i class='bx bxs-send' ></i>{contact.button}</button>
          </form>
          <div className='infoContact'>
              <span>{contact.title3}</span>
              <p><span>Phone: </span>{contact.phone}</p>
              <p><span>Email: </span>{contact.email}</p>
              <p><span>{contact.ta}: </span>{contact.address}</p>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe 
                    width="351" 
                    height="250" 
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