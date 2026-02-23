import '../../styles/styles.css';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import arquitecta from '@/assets/icons/arquitecta.png';
import boton1 from '@/assets/icons/boton1.png';
import boton2 from '@/assets/icons/boton2.png';
import director from '@/assets/icons/director.png';
import diseñadora from '@/assets/icons/disenadora.png';
import fisioterapeuta from '@/assets/icons/fisioterapeuta.png';
import iconoTestimoniales from '@/assets/icons/iconoTestimoniales.svg';
import medico from '@/assets/icons/medico.png';
import testimonialesBg from '@/assets/images/testimoniales.png';

export default function Testimoniales() {
  const [selected, setSelected] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonios = [
    {
      titulo: "Un ritual diario de bienestar",
      texto:
        "“Desde que instalamos Hydromagic, la rutina en casa cambió por completo. El hidromasaje se siente realmente terapéutico: alivia la tensión muscular, ayuda a relajarte mentalmente y se volvió nuestro momento favorito del día. Además, el diseño se integra perfecto al baño y se nota la calidad en los acabados.”",
      nombre: "Mariana López",
      puesto: "Arquitecta",
      foto: arquitecta,
    },
    {
      titulo: "Calidad que se siente",
      texto:
        "“La calidad se percibe desde el primer uso. Los jets tienen muy buena presión y el confort es excelente; después de una jornada pesada, el hidromasaje me ayuda a disminuir molestias y descansar mejor. Me gustó que la experiencia se siente premium, sin complicaciones, y con un diseño elegante.”",
      nombre: "Ricardo Hernández",
      puesto: "Médico Ortopedista",
      foto: medico,
    },
    {
      titulo: "Eleva la experiencia y el valor",
      texto:
        "“Buscábamos una solución premium para un proyecto residencial y Hydromagic fue la mejor decisión. La asesoría fue clara desde el inicio y nos ayudó a elegir el modelo adecuado para el espacio. El resultado elevó la percepción del baño: se ve sofisticado y ofrece una experiencia de bienestar real para el usuario.”",
      nombre: "Paola Martínez",
      puesto: "Diseñadora de Interiores",
      foto: diseñadora,
    },
    {
      titulo: "La mejor forma de cerrar el día",
      texto:
        "“Después de días intensos de trabajo, la tina se volvió mi ritual. Me ayuda a bajar el estrés, relajar la espalda y recuperar energía de una forma natural. Es ese tipo de compra que mejora tu calidad de vida, porque no solo se ve bien: realmente se siente el beneficio cuando la usas con constancia.”",
      nombre: "Fernando Castillo",
      puesto: "Director de Operaciones",
      foto: director,
    },
    {
      titulo: "Un spa en casa, sin complicaciones",
      texto:
        "“La combinación de comodidad y diseño es impecable. Se siente como tener un spa en casa: el hidromasaje te deja en un estado de relajación profunda y al mismo tiempo el producto luce elegante y bien construido. Es una experiencia que recomendaría a cualquiera que quiera invertir en bienestar.”",
      nombre: "Andrea Ríos",
      puesto: "Fisioterapeuta",
      foto: fisioterapeuta,
    },
  ];

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setSelected((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
    }, 20000); 
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements =
      sectionRef.current.querySelectorAll(".animate-apple");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setSelected((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const prevSlide = () => {
    setSelected((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
    startAutoSlide();
  };


  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section
      id="testimoniales"
      className="testimoniales-section"
      style={{ backgroundImage: `url(${testimonialesBg})` }}
      ref={sectionRef}
    >
      {/* Botones navegación */}
      <div className="testimoniales-top-buttons animate-apple">
        <img
          src={boton1}
          alt="Botón anterior"
          onClick={prevSlide}
          className="nav-button"
        />
        <img
          src={boton2}
          alt="Botón siguiente"
          onClick={nextSlide}
          className="nav-button"
        />
      </div>

      {/* Card */}
      <div
        className="testimonio-card animate-apple"
        style={{ transitionDelay: "0.6s" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={iconoTestimoniales}
          alt="Icono testimoniales"
          className="testimonio-icon"
        />

        <h2 className="testimonio-title">
          {testimonios[selected].titulo}
        </h2>

        <p className="testimonio-text">
          {testimonios[selected].texto}
        </p>

        <div className="testimonio-user">
          <img
            src={testimonios[selected].foto}
            alt={testimonios[selected].nombre}
          />
          <div className="user-info">
            <p className="user-name">
              {testimonios[selected].nombre}
            </p>
            <p className="user-position">
              {testimonios[selected].puesto}
            </p>
          </div>
        </div>
      </div>

      {/* Paginación */}
      <div
        className="testimoniales-pagination animate-apple"
        style={{ transitionDelay: "0.6s" }}
      >
        {testimonios.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              selected === index ? "active" : ""
            }`}
            onClick={() => {
              setSelected(index);
              startAutoSlide();
            }}
          />
        ))}
      </div>
    </section>
  );
}