import React from 'react'
import './Courses.css'
import { images } from '../../constants'

function Courses() {
    return (
        <section className="main-product-detail">
          <div className="product-detail--title">
            <h2>¡Conoce nuestros cursos!</h2>
          </div>
          <section className="product-cards--container">
            <article className="product-detail--card">
              {/*<span className='icon'>*/}<img className='icon' src={images.digitalt} alt="" />{/*</span>*/}
              <h3 className="product--card-title">Transformación Digital</h3>
              <p className="product--card-body">La importancia de reinventarse, impulsar y hacer competitivo a tu negocio a través de los datos y la tecnología</p>
            </article>
            
            <article className="product-detail--card">
              <img src={images.ml} alt="" className='icon' />
              <h3 className="product--card-title">Machine Learning</h3>
              <p className="product--card-body">Elemento primordial del aprendizaje artificial en la toma de decisiones</p>
            </article>
            <span className='icon'><img src="" alt="" /></span>
            <article className="product-detail--card">
              <h3 className="product--card-title">Internet of Things</h3>
              <p className="product--card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <span className='icon'><img src="" alt="" /></span>
            <article className="product-detail--card">
              <h3 className="product--card-title">Big Data</h3>
              <p className="product--card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <span className='icon'><img src="" alt="" /></span>
            <article className="product-detail--card">
              <h3 className="product--card-title">Inteligencia Artificial</h3>
              <p className="product--card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </section>
        </section>
    );
}

export default Courses