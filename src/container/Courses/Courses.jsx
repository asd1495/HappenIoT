import React from 'react'
import './Courses.css'

function Courses() {
    return (
        <section className="main-product-detail">
          <div className="product-detail--title">
            <h2>¡Conoce nuestros cursos!</h2>
          </div>
          <section className="product-cards--container">
            <article className="product-detail--card">
              <h3 className="product--card-title">Transformación digital</h3>
              <p className="product--card-body">La importancia de reinventarse, impulsar y hacer competitivo a tu negocio a través de los datos y la tecnología</p>
            </article>
            <article className="product-detail--card">
              <h3 className="product--card-title">Machine Learning</h3>
              <p className="product--card-body">Elemento primordial del aprendizaje artificial en la toma de decisiones</p>
            </article>
            <article className="product-detail--card">
              <h3 className="product--card-title">Lorem Ipsum</h3>
              <p className="product--card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article className="product-detail--card">
              <h3 className="product--card-title">Lorem Ipsum</h3>
              <p className="product--card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </section>
        </section>
    );
}

export default Courses