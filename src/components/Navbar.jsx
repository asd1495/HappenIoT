import React, { useEffect } from 'react';
import { images } from '../constants';
import './Navbar.css'

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <a href="#" className="logo">
        <img src={images.logoPngLight} alt="" />
      </a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Clientes</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </header>
  );
}

export default Header;