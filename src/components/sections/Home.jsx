import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Asesorias from './Asesorias';
import Brands from './Brands';
import CallToAction from './CallToAction';
import Contactanos from './Contactanos';
import Hero from './Hero';
import Productos from './Productos';
import Servicios from './Servicios';
import Testimoniales from './Testimoniales';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <Brands />

      <section id="nosotros">
        <Servicios />
      </section>

      <CallToAction />

      <section id="productos">
        <Productos />
      </section>

      <Asesorias />

      <Testimoniales />

      <section id="contacto">
        <Contactanos />
      </section>
    </>
  );
}
