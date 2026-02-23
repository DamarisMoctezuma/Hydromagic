import '../../styles/styles.css';

import React, {
  useEffect,
  useRef,
} from 'react';

import hospitalIcon from '../../assets/icons/hospital.svg';
import hotelIcon from '../../assets/icons/hotel.svg';
import houseIcon from '../../assets/icons/house.svg';
import spaIcon from '../../assets/icons/spa.svg';

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.animate-apple');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: spaIcon,
      title: "SPA",
      description: "Experiencias de bienestar premium para SPA. Diseño, confort y desempeño para uso continuo.",
    },
    {
      icon: houseIcon,
      title: "Residencial",
      description: "Confort y estética para tu hogar. Modelos para baños, terrazas y áreas de descanso.",
    },
    {
      icon: hospitalIcon,
      title: "Hospital",
      description: "Soluciones confiables para entornos clínicos. Asesoría técnica y soporte en cada etapa.",
    },
    {
      icon: hotelIcon,
      title: "Hotel",
      description: "Diseñados para boutique, negocios, turismo y cavas. Durabilidad, diseño y entrega alineada a tu operación.",
      highlight: ["boutique", "negocios", "turismo", "cavas"],
    },
  ];

  return (
    <section id="nosotros" className="services-section" ref={sectionRef}>
      <h2 className="services-title animate-apple">
        Más de 40 años trabajando para ti
      </h2>

      <p className="services-subtitle animate-apple">
        En Hydromagic diseñamos y fabricamos tinas de hidromasaje con un estándar
        alto de calidad, ergonomía y estética. Te acompañamos desde la elección
        del modelo hasta la solución ideal para tu espacio o proyecto.
      </p>

      <div className="services-cards">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div
              className="service-card animate-apple"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img src={service.icon} alt={service.title} />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {service.highlight
                  ? service.description.split(/(\s+)/).map((word, i) =>
                      service.highlight.includes(word.replace(/[.,]/g, "")) ? (
                        <span className="highlight" key={i}>{word}</span>
                      ) : (word)
                    )
                  : service.description}
              </p>
            </div>
            {/* Divisor que cambia de vertical a horizontal por CSS */}
            {index < services.length - 1 && (
              <div className="divider animate-apple"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}