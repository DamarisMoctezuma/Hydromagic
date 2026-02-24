import './distribuidores.css';

import { useEffect } from 'react';

import distribuidor1 from '../../assets/images/brand1.png';
import distribuidor10 from '../../assets/images/brand10.png';
import distribuidor11 from '../../assets/images/brand11.png';
import distribuidor2 from '../../assets/images/brand2.png';
import distribuidor3 from '../../assets/images/brand3.png';
import distribuidor4 from '../../assets/images/brand4.png';
import distribuidor5 from '../../assets/images/brand5.png';
import distribuidor6 from '../../assets/images/brand6.png';
import distribuidor7 from '../../assets/images/brand7.svg';
import distribuidor8 from '../../assets/images/brand8.svg';
import distribuidor9 from '../../assets/images/brand9.png';
import Contactanos from '../sections/Contactanos';

export default function Distribuidores() {

  useEffect(() => { 
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="distribuidores-hero fade-in">
        <h1>Conoce nuestros <br /> distribuidores</h1>
      </section>

      {/* GRID */}
      <section className="distribuidores-grid-section">
        <div className="distribuidores-grid">

  <div className="distribuidor-card fade-in">
    <img src={distribuidor1} alt="Distribuidor 1" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor2} alt="Distribuidor 2" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor3} alt="Distribuidor 3" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor4} alt="Distribuidor 4" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor5} alt="Distribuidor 5" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor6} alt="Distribuidor 6" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor7} alt="Distribuidor 7" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor8} alt="Distribuidor 8" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor9} alt="Distribuidor 9" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor10} alt="Distribuidor 10" />
  </div>

  <div className="distribuidor-card fade-in">
    <img src={distribuidor11} alt="Distribuidor 11" />
  </div>

</div>

      </section>

      <Contactanos />
    </>
  );
}
