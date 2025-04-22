import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {/* Sección 1: Quiénes Somos */}
      <section className="section who-we-are">
        <h2>Quiénes Somos</h2>
        <p>
          En <strong>Andes Export Company S.A.S.</strong>,  llevamos más de dos 
          décadas llevando el sabor y la frescura de las frutas exóticas colombianas 
          a diferentes rincones del mundo. Desde nuestras raíces en Boyacá, hemos 
          trabajado con pasión y compromiso para conectar a pequeños productores 
          locales con mercados internacionales, garantizando productos de la más
           alta calidad.
        </p>
        <p>
        Nos especializamos en la exportación de frutas como uchuva, pitahaya, 
        granadilla y maracuyá, cultivadas con esmero por manos expertas y bajo 
        estrictos estándares de calidad. Creemos en un comercio justo, en prácticas 
        sostenibles y en la innovación constante para seguir creciendo junto a 
        nuestros aliados y clientes.
        </p>
        <p>
        Hoy, Andes Export es sinónimo de frescura, confianza y excelencia. Nuestro 
        compromiso es seguir compartiendo lo mejor del campo colombiano con el mundo.
        </p>
        
        <video src="/vid/capacitacion basc.mp4" autoPlay muted loop></video>
        
      </section>
      {/* Sección 2: Nuestra Historia */}
      <section className="section history">
        <h2>Nuestra Historia</h2>
        <p>
        Todo comenzó en 1999 con un sueño: llevar las mejores frutas exóticas
         de Colombia al mundo. En un pequeño rincón de Boyacá, un grupo de 
         emprendedores vio el potencial de los cultivos locales y decidió crear
          Andes Export Company S.A.S., una empresa con la misión de conectar a 
          los productores con mercados internacionales.
        </p>
        <p>
        Con trabajo duro y dedicación, fuimos creciendo, abriendo caminos en 
        Europa y Estados Unidos. Año tras año, ampliamos nuestro portafolio, 
        incorporando nuevas frutas como la gulupa, el mangostino y el aguacate 
        Hass. Pero nuestro compromiso siempre ha sido el mismo: calidad, 
        frescura y sostenibilidad.
        </p>
        <p>
        Hoy, más de dos décadas después, nos hemos consolidado como un referente 
        en la exportación de frutas exóticas colombianas. Seguimos innovando, 
        fortaleciendo relaciones con productores locales y explorando nuevos 
        mercados, manteniendo siempre la esencia que nos vio nacer: pasión 
        por el campo y orgullo por lo nuestro.
        </p>
      </section>
      {/* Sección 3: Misión, Visión y Valores */}
      <section className="section philosophy">
        <h2>Nuestra Filosofía</h2>
        <div className="philosophy-cards">
          <div className="card">
            <h3>🌍 Misión</h3>
            <p>
                Trabajamos para llevar la frescura y calidad de las frutas 
                exóticas colombianas a mercados internacionales. Nos esforzamos 
                por apoyar a los productores locales, garantizar procesos 
                sostenibles y ofrecer a nuestros clientes productos que cumplan 
                con los más altos estándares de seguridad y sabor.
            </p>
          </div>
          <div className="card">
            <h3>🚀 Visión</h3>
            <p>
                Ser la empresa líder en la exportación de frutas exóticas de Colombia, 
                expandiendo nuestra presencia en nuevos mercados y consolidándonos 
                como un referente de calidad, sostenibilidad y comercio justo. 
                Buscamos innovar constantemente en nuestros procesos para seguir 
                creciendo junto a nuestros aliados y clientes.
            </p>
          </div>
          <div className="card">
            <h3>⭐ Valores</h3>
            <p>
              <b>Calidad: </b>Nos aseguramos de que cada fruta cumpla con los más altos estándares internacionales.
              <br /><br />
              <b>Compromiso: </b>Apoyamos a los agricultores locales y promovemos un comercio justo.
              <br /><br />
              <b>Sostenibilidad: </b> Implementamos prácticas responsables con el medio ambiente y la comunidad.
              <br /><br />
              <b>Innovación: </b> Buscamos mejorar nuestros procesos para ser más eficientes y competitivos.
              <br /><br />
              <b>Confianza: </b> Construimos relaciones sólidas y transparentes con nuestros clientes y proveedores.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 4: Garantía de Calidad */}
      <section className="section quality">
        <h2>Garantía de Calidad</h2>
        <p>
        En <b>Andes Export Company S.A.S.</b>, la calidad no es una opción, es nuestro 
        sello distintivo. Nos aseguramos de que cada fruta que exportamos cumpla 
        con los más altos estándares internacionales, desde el cultivo hasta la 
        entrega final.
        </p>
        <p>
        Para garantizarlo, contamos con certificaciones reconocidas a nivel mundial, que avalan nuestras buenas 
        prácticas agrícolas, sostenibilidad y compromiso con la seguridad alimentaria:
        </p>
        <div className="philosophy-cards">
            <div className="cert-card">
                <img src="/img/basc.svg" alt="BASC" />
                <h3>BASC</h3>
                <p><strong>Seguridad y confianza en cada paso del proceso.</strong></p>
                <p>
                    La Norma BASC es un programa de cooperación público-privada que fortalece la seguridad de la cadena de suministro y previene el contrabando, la falsificación y el terrorismo en el comercio internacional.
                </p>
                <a href="https://www.wbasco.org/es" target="_blank" rel="noopener noreferrer">Más información</a>
            </div>

            {/* CoC (Global.G.A.P.) */}
            <div className="cert-card">
                <img src="/img/globalgap.png" alt="GlobalG.A.P." />
                <h3>CoC (Global.G.A.P.)</h3>
                <p><strong>Calidad y trazabilidad desde el origen hasta tu hogar.</strong></p>
                <p>
                    El estándar de Cadena de Custodia (CoC) GLOBALG.A.P. garantiza que cualquier producto vendido con un reclamo GLOBALG.A.P. proviene verdaderamente de un proceso de producción certificado.
                </p>
                <a href="https://database.globalgap.org/globalgap/search/SearchMain.faces" target="_blank" rel="noopener noreferrer">Ver certificación</a>
            </div>

            {/* SMETA */}
            <div className="cert-card">
                <img src="/img/smeta.png" alt="SMETA" />
                <h3>SMETA</h3>
                <p><strong>Ética y responsabilidad social en cada fruta que exportamos.</strong></p>
                <p>
                    SMETA es la auditoría más utilizada en el mundo para evaluar y mejorar las condiciones de trabajo y el desempeño ambiental en la cadena de suministro.
                </p>
                <a href="https://www.sedex.com/es/soluciones/smeta-auditoria/" target="_blank" rel="noopener noreferrer">Más información</a>
            </div>

            {/* Primus */}
            <div className="cert-card">
                <img src="/img/primuslabs.png" alt="Primus" />
                <h3>Primus</h3>
                <p><strong>Excelencia y seguridad alimentaria certificada.</strong></p>
                <p>
                    Es un programa de auditoría voluntario que evalúa las prácticas de producción y procesamiento de alimentos frescos para garantizar la seguridad alimentaria bajo estándares internacionales estrictos.
                </p>
                <a href="https://www.primuslabs.com/" target="_blank" rel="noopener noreferrer">Conoce más</a>
            </div>
        </div>
      </section>

      {/* Sección 5: Productos y Mercados */}
      <section className="section export">
        <h2>¿Qué Exportamos y a Dónde?</h2>
        <p>
          Exportamos uchuva, pitahaya, granadilla, maracuyá, aguacate, entre
          otras frutas exóticas. Nuestros principales mercados incluyen{" "}
          <strong>Europa, Norteamérica y Asia</strong>.
        </p>
        <div className="fruits">
            <h3>🍍 Nuestras Frutas Exóticas</h3>
            <ul>
            <li>✅ <strong>Uchuva (Physalis)</strong> – Dulce, ácida y llena de antioxidantes.</li>
            <li>✅ <strong>Pitahaya Amarilla</strong> – Exótica, refrescante y rica en fibra.</li>
            <li>✅ <strong>Granadilla</strong> – Suave, dulce y perfecta para consumir fresca.</li>
            <li>✅ <strong>Gulupa (Fruta de la Pasión)</strong> – Intensa en sabor y altamente nutritiva.</li>
            <li>✅ <strong>Maracuyá</strong> – Tropical y versátil, ideal para jugos y postres.</li>
            <li>✅ <strong>Tomate de Árbol</strong> – Sabor único y alto contenido de vitaminas.</li>
            <li>✅ <strong>Aguacate Hass</strong> – Cremoso, nutritivo y con una gran demanda internacional.</li>
            <li>✅ <strong>Mangostino</strong> – Considerado "la reina de las frutas" por su sabor inigualable.</li>
            <li>✅ <strong>Limón Tahití</strong> – Fresco y cítrico, ideal para cocina y bebidas.</li>
            <li>✅ <strong>Bananito</strong> – Pequeño, dulce y lleno de energía.</li>
            </ul>
        </div>
        <div className="markets">
            <h3>🌍 Nuestros Mercados</h3>
            <p>
            Exportamos nuestras frutas a diferentes países, asegurando que lleguen frescas y en perfectas condiciones a cada destino. Algunos de nuestros principales mercados incluyen:
            </p>
            <ul>
            <li>🌎 <strong>Europa:</strong> Alemania, España, Países Bajos, Francia, Reino Unido.</li>
            <li>🌎 <strong>Norteamérica:</strong> Estados Unidos y Canadá.</li>
            <li>🌎 <strong>Asia:</strong> Expansión en mercados emergentes como Emiratos Árabes Unidos.</li>
            </ul>
            <p>
            Nuestra experiencia y certificaciones nos permiten garantizar envíos seguros y eficientes, cumpliendo con todas las normativas internacionales de exportación.
            </p>
        </div>
      </section>

      {/* Sección 6: Nuestro Equipo */}
      <section className="section team">
        <h2>El Equipo Detrás de Andes Export</h2>
        <p>
            En Andes Export Company S.A.S., sabemos que el éxito no solo depende de la calidad de nuestros productos, sino también de las personas que los hacen posibles. Detrás de cada fruta exportada hay un equipo apasionado, comprometido con la excelencia y con una visión clara de llevar lo mejor de Colombia al mundo.
        </p>

        <div className="team-container">
            <div className="team-category">
                <h3>👨‍🌾 Productores y Agricultores</h3>
                <p>
                Nuestros aliados en el campo son la esencia de nuestra empresa. Agricultores con años de experiencia cultivan cada fruta con dedicación, aplicando técnicas sostenibles que garantizan calidad y frescura en cada cosecha.
                </p>
            </div>

            <div className="team-category">
                <h3>📦 Logística y Control de Calidad</h3>
                <p>
                Desde la selección de las frutas hasta su empaque y distribución, nuestro equipo de logística y calidad trabaja con precisión para que cada pedido llegue en perfectas condiciones a su destino, cumpliendo con los más altos estándares internacionales.
                </p>
            </div>

            <div className="team-category">
                <h3>🌎 Equipo Directivo y Comercial</h3>
                <p>
                La visión y estrategia de Andes Export están en manos de un equipo directivo con amplia experiencia en exportaciones y comercio internacional. Nuestro equipo comercial se encarga de fortalecer relaciones con clientes en todo el mundo, asegurando que cada mercado reciba productos que cumplan con sus expectativas.
                </p>
            </div>

            <div className="team-category">
                <h3>💡 Innovación y Sostenibilidad</h3>
                <p>
                Siempre buscamos nuevas formas de mejorar. Contamos con un equipo dedicado a la innovación y sostenibilidad, desarrollando procesos más eficientes y amigables con el medio ambiente, asegurando que nuestro impacto sea positivo tanto para el planeta como para las comunidades locales.
                </p>
            </div>
        </div>

        <p className="team-footer">
            En Andes Export Company S.A.S., cada persona juega un papel clave en nuestro crecimiento y éxito. ¡Estamos orgullosos de nuestro equipo y del trabajo que hacemos juntos!
        </p>
      </section>

      {/* Sección 7: Sostenibilidad */}
      <section className="section environment">
        <h2>Compromiso con el Medio Ambiente y la Comunidad</h2>
        <p>
            En Andes Export Company S.A.S., creemos que hacer negocios va más allá de vender productos; se trata de generar un impacto positivo en el mundo. Por eso, nuestra empresa está comprometida con la sostenibilidad, el respeto por el medio ambiente y el bienestar de las comunidades con las que trabajamos.
        </p>

        <div className="environment-container">
            <div className="environment-category">
                <h3>🌱 Agricultura Sostenible</h3>
                <ul>
                <li><strong>Uso eficiente del agua</strong> – Optimizamos el riego para reducir el consumo y evitar el desperdicio.</li>
                <li><strong>Cero deforestación</strong> – Protegemos los ecosistemas locales y fomentamos la biodiversidad.</li>
                <li><strong>Reducción de químicos</strong> – Promovemos el uso de fertilizantes orgánicos y técnicas de control biológico de plagas.</li>
                </ul>
            </div>

            <div className="environment-category">
                <h3>🌍 Reducción del Impacto Ambiental</h3>
                <ul>
                <li><strong>Empaques ecológicos</strong> – Utilizamos materiales reciclables y biodegradables para reducir residuos.</li>
                <li><strong>Energía renovable</strong> – Apostamos por procesos energéticamente eficientes en nuestras operaciones.</li>
                <li><strong>Logística sostenible</strong> – Optimizamos nuestras rutas de transporte para reducir emisiones de CO₂.</li>
                </ul>
            </div>

            <div className="environment-category">
                <h3>🤝 Apoyo a las Comunidades Locales</h3>
                <ul>
                <li><strong>Precios justos y apoyo técnico</strong> a nuestros agricultores.</li>
                <li><strong>Programas de educación y capacitación</strong> en buenas prácticas agrícolas.</li>
                <li><strong>Proyectos de responsabilidad social</strong> en salud, educación y desarrollo comunitario.</li>
                </ul>
            </div>
        </div>

        <p className="environment-footer">
            Nuestra meta es seguir exportando lo mejor de Colombia mientras cuidamos nuestro entorno y fortalecemos a quienes hacen posible este sueño.
        </p>
      </section>
    </div>
  );
};

export default Nosotros;