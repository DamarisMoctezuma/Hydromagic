import '../../styles/styles.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import catalogoPDF from '@/assets/doc/catalogo-digital-2025.pdf';
import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import linkedin from '@/assets/icons/linkedin-in.svg';
import heroBg from '@/assets/images/hero.png';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
        id="inicio"
        className="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >

      <div className="hero-container">
        <div
          className="hero-content"
          style={{
            transform: isMobile ? 'none' : `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <h1 className="hero-animate hero-title">
            Hechas para <br className="mobile-break" />
            durar, <br />
            
            <span>
              Diseñadas para <br className="mobile-break" />
              disfrutarse
            </span>
          </h1>



          <p className="hero-animate hero-text">
            Eleva tu espacio con una experiencia de confort, ergonomía y diseño.
            Asesoría para hogar y proyectos, con respaldo de nuestra fábrica.
          </p>

          <div className="hero-buttons hero-animate">
            <a
              href="https://wa.me/525591987726?text=Hola,%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
            >
              Contáctanos ahora
            </a>

            <a
              href={catalogoPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-catalogo-btn"
            >
              <span className="hero-catalogo-text">
                Ve nuestro catálogo de productos
              </span>
            </a>

          </div>


        </div>

        <div
          className="hero-bottom hero-animate hero-footer"
          style={{
            transform: isMobile ? 'none' : `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="hero-socials">
            <a href="https://www.instagram.com/hydromagic_mx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61581150105522" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/35865072/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

                      <div
              className="hero-more"
              onClick={() => navigate('/productos')}
              style={{ cursor: 'pointer' }}
            >
            <span>Conoce más de nuestras tinas</span>
            <svg className="hero-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.7086 7.29609C12.0992 7.68672 12.0992 8.32109 11.7086 8.71172L5.70859 14.7117C5.31797 15.1023 4.68359 15.1023 4.29297 14.7117C3.90234 14.3211 3.90234 13.6867 4.29297 13.2961L9.58672 8.00234L4.29609 2.70859C3.90547 2.31797 3.90547 1.68359 4.29609 1.29297C4.68672 0.902344 5.32109 0.902344 5.71172 1.29297L11.7117 7.29297L11.7086 7.29609Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}