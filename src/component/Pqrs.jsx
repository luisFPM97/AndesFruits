import React, { useEffect, useState } from "react";

const Pqrs = ({ contact }) => {
  const [result, setResult] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      setTimeout(() => setVisible(false), 2000); // 2 segundos
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <>
      <div className="pqrs">
        <div className="imgcont"></div>
        <div className="contenedorInfo">
          <div className="headerCont">
            <h1>{contact.title}</h1>
            <h2>
              {contact.description}, {contact.title2}
            </h2>
          </div>

          <div className="contForm">
            <form action="" onSubmit={onSubmit}>
              <input type="hidden" name="subject" value="RADICADO PQRS"/>
              <input type="hidden" name="replyto" value="ingsistemas@andesexport.com"></input>
              <input className="email" type="email" placeholder="Email" name="email" required/>
              <textarea className="mensaje" name="message" id="" placeholder="Message" required ></textarea>
              <button type="submit" className="btnForm">
                <i className="bx bxs-send"></i>
                {contact.button}
              </button>
                  <div className={visible?"alerta":"alerta hdd" }>
                    <img src="/img/LOGO VERTICAL.png" alt="" />
                    <p>{result}</p>
                  </div>
                  <div class="h-captcha" data-captcha="true"></div>
            </form>
            <div className="infoContact">
              <span className="title">{contact.title3}</span>
              <span>
                <b>{contact.te}:</b> info@andesexpor.com
              </span>
              <span>
                <b>{contact.ta}:</b> {contact.address}
              </span>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=andes+export&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pqrs;
