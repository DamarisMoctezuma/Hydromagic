import './distribuidores.css';

import { useEffect } from 'react';

import distribuidor1 from '../../assets/images/distribuidor1.png';
import distribuidor2 from '../../assets/images/distribuidor2.png';
import distribuidor3 from '../../assets/images/distribuidor3.png';
import distribuidor4 from '../../assets/images/distribuidor4.png';
import distribuidor5 from '../../assets/images/distribuidor5.png';
import distribuidor6 from '../../assets/images/distribuidor6.png';
import distribuidor7 from '../../assets/images/distribuidor7.png';
import distribuidor8 from '../../assets/images/distribuidor8.png';
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

          <img className="fade-in" src={distribuidor1} alt="Distribuidor 1" />
          <img className="fade-in" src={distribuidor2} alt="Distribuidor 2" />

          <img className="fade-in" src={distribuidor3} alt="Distribuidor 3" />
          <img className="fade-in" src={distribuidor4} alt="Distribuidor 4" />

          <img className="fade-in" src={distribuidor5} alt="Distribuidor 5" />
          <img className="fade-in" src={distribuidor6} alt="Distribuidor 6" />

          <img className="fade-in" src={distribuidor7} alt="Distribuidor 7" />
          <img className="fade-in" src={distribuidor8} alt="Distribuidor 8" />

        </div>
      </section>

      <Contactanos />
    </>
  );
}
