import React from 'react'
import './Contact.css'
import { images } from '../../constants'

function Contact() {
  return (
    <section className='contact'>
        <h2 className='head-text'>¡Contáctanos!</h2>
        <div className='footer-cards'>
            <div className='footer-card'>
                <a href="mailto:happeniot@gmail.com" className='p-text' target='_blank'>
                    <img src={images.mail} alt="" />
                    Envíanos un mail</a>
            </div>
            <div className='footer-card'>
                <a href="https://www.linkedin.com/company/happeniot/" className='p-text' target='_blank'>
                    <img src={images.linkedin} alt="" />
                    Encuéntranos en LinkedIn
                </a>
            </div>
            <div className='footer-card'>
                <a href="https://www.linkedin.com" className='p-text' target='_blank'>
                    <img src={images.instagram} alt="" />
                    Síguenos en Instagram
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact