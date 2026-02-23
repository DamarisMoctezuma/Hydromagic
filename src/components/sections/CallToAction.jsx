import '../../styles/styles.css';

import React, {
  useEffect,
  useRef,
} from 'react';

export default function CallToAction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.animate-apple');

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      <h2 className="cta-title animate-apple">
        Modelos para cada espacio y estilo de vida
      </h2>

      <p
        className="cta-text animate-apple"
        style={{ transitionDelay: '0.2s' }}
      >
        Recibe acompañamiento experto: elección del modelo, recomendaciones para tu espacio, coordinación con tu proyecto y soporte antes y después de la compra. Todo para que la experiencia Hydromagic se viva como debe ser.
      </p>

      <a
          href="https://wa.me/525591987726?text=Hola,%20quiero%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button animate-apple"
          style={{ transitionDelay: '0.4s' }}
        >
          <span className="cta-button-text">Contáctanos ahora</span>
        </a>

    </section>
  );
}
