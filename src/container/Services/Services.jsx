import React from 'react';
import './Services.css'

function Services() {
  return (
    <section id="services" className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Servicios</h2>
          </div>
        </div>
        <div className="row">
          {/*Card 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://www.cetys.mx/noticias/wp-content/uploads/2022/04/Foto-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Consultoría</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 2*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://abanzapersonas.files.wordpress.com/2016/12/capacitacion-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Capacitación y talleres</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 3*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://cdn.masmovil.es/embed/f942e33f77a798f172fd7fbf1244c4a1600708225/Post_conferencias-sin.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Conferencias</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 4*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://storage.googleapis.com/site.esss.co/221f1801-thumb.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Certificación industria 4.0</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 5*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://quadranslawandfinance.com/wp-content/uploads/2019/11/registro-de-patentes-768x512.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Registro de patentes</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 6*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://directivosygerentes.es/wp-content/uploads/2020/09/getting-close-to-a-drone-with-stormy-skies_t20_WQW0pw-681x426.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lanzamientos de prueba con drones</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 7*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://images.theconversation.com/files/450630/original/file-20220308-21-1r14225.jpg?ixlib=rb-1.1.0&rect=1%2C1%2C1037%2C777&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lanzamientos de prueba con globos estratosféricos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          {/*Card 8*/}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img src="https://preview.redd.it/zpht1varhwi11.jpg?width=2048&format=pjpg&auto=webp&s=1f0cbef8e697b1f0dcacfde130c2b0b89fe2df06" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Diseño y aplicación de picosatélite</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;