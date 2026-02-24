import './footer.css';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import avisoPrivacidad from '@/assets/doc/avisodeprivacidad.pdf';
import footerLogo from '@/assets/images/footer.png';

export default function Footer() {

  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {

    // Si ya estamos en Home, solo hacemos scroll
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegamos y mandamos el state
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <img
            src={footerLogo}
            alt="Hydromagic"
            className="footer-logo"
          />

          <p className="footer-description">
            Creamos experiencias de bienestar a través de nuestros diseños, confort y calidad.
            <br /><br />
            Conoce nuestros modelos o solicita una asesoría para tu hogar o proyecto.
          </p>
        </div>

        <div className="footer-column">

          <button onClick={() => goToSection("inicio")} className="footer-link footer-button">
            Inicio
          </button>

          <button onClick={() => goToSection("nosotros")} className="footer-link footer-button">
            Nosotros
          </button>

          <button onClick={() => goToSection("productos")} className="footer-link footer-button">
            Productos
          </button>

          <button onClick={() => goToSection("distribuidores")} className="footer-link footer-button">
            Distribuidores
          </button>

          <button onClick={() => goToSection("contacto")} className="footer-link footer-button">
            Contacto
          </button>

        </div>

        <div className="footer-column">
          <span className="footer-title">Redes sociales</span>

          <a
            href="https://www.facebook.com/profile.php?id=61581150105522"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/hydromagic_mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/35865072/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-column">
          <span className="footer-title">Contáctanos</span>

          <p className="footer-text">
            Autopista México-Cuervanava No. 48
            <br />
            Col. San Pedro Mártir, CP 14650
            <br />
            Ciudad de México
          </p>

          <p className="footer-text">contacto@hydromagic.mx</p>
          <p className="footer-text">55 5573 7889</p>
          <p className="footer-text">55 5573 4934</p>
          <p className="footer-text">55 5573 5539</p>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">
          Hydromagic © 2026. Todos los derechos reservados.
        </span>

        <div className="footer-legal">
          <a href="#" className="footer-legal-link">
            Términos y condiciones
          </a>

          <span className="footer-legal-divider" />

          <a
            href={avisoPrivacidad}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-legal-link"
          >
            Aviso de privacidad
          </a>

        </div>
      </div>

    </footer>
  );
}
