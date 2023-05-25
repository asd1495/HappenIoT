import React, { useEffect } from 'react';
import { images } from '../../constants'
import './Home.css'

function Home() {
    useEffect(() => {
        const handleScroll = () => {
          const bannerText = document.querySelector('.banner-text');
          bannerText.classList.toggle('opacity', window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <section className="banner">
            <img src={images.Cover} alt="" />    
                <p className="banner-text">
                    HappenIoT se dedica a ofrecer servicios innovadores de consultoria especializada en sistemas inteligentes con internet de las cosas e inteligencia artificial
                </p>
        </section>
      );
    }

export default Home