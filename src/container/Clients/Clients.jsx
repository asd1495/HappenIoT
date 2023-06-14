import React from 'react';
import { images } from '../../constants'
import './Clients.css';

function Clients() {
  return (
    <section className="main-clients-detail">
      <div className="clients-detail--title">
        <h2>Nuestros clientes</h2>
      </div>
      <section className="clients-cards--container">
        <article className="clients-detail--card">
          <img src={images.itsao} alt="" />
        </article>
        <article className="clients-detail--card cuervo">
          <img src={images.cconsultores} alt="" />
        </article>
        <article className="clients-detail--card">
          <img src={images.greatex} alt="" />
        </article>
        <article className="clients-detail--card">
          <img src={images.ombs} alt="" />
        </article>
        <article className="clients-detail--card">
          <img src={images.itp} alt="" />
        </article>
        <article className="clients-detail--card">
          <img src={images.dt} alt="" />
        </article>
      </section>
    </section>
  );
}

export default Clients;
