import '../../styles/styles.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import hydromagicVideo from '../../assets/images/Hydromagic.mp4';

export default function Asesorias() {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`servicios-section ${isVisible ? "apple-show" : ""}`}
    >

      <h2 className={`servicios-title ${isVisible ? "apple-title-show" : ""}`}>
        Servicios y asesorías para tu instalación
      </h2>

      <div className={`servicios-video ${isVisible ? "apple-image-show" : ""}`}>
        <video
          className="servicios-video-element"
          src={hydromagicVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <p className={`servicios-text ${isVisible ? "apple-text-show" : ""}`}>
        Nuestros servicios y asesorías van acompañado por un experto para que tu instalación sea perfecta.
        Desde la elección del modelo, las recomendaciones para tu espacio, la coordinación con tu proyecto y soporte antes y después de la compra.
        Todo para que la experiencia que brindamos en Hydromagic este en todo momento.
      </p>

    </section>
  );
}
