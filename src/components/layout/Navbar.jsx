import './navbar.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import menuHamburguesa from '../../assets/icons/menu.svg';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", section: "inicio" },
    { name: "Nosotros", section: "nosotros" },
    { name: "Productos", path: "/productos" },
    { name: "Distribuidores", path: "/distribuidores" },
    { name: "Contacto", section: "contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {

      if (item.section) {
        const section = document.getElementById(item.section);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      if (item.path) {
        navigate(item.path);
        window.scrollTo(0, 0);
        return;
      }
    }


    if (item.section) {
      navigate("/", { state: { scrollTo: item.section } });
      return;
    }

    
    if (item.path) {
      if (location.pathname === item.path) return;
      navigate(item.path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : "solid"}`}>
      <nav className="navbar-container">

        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => {
            if (location.pathname === "/") {
              const hero = document.getElementById("inicio");
              if (hero) hero.scrollIntoView({ behavior: "smooth" });
            } else {
              navigate("/", { state: { scrollTo: "inicio" } });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Hydromagic" />
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => {
            const isActive =
              item.path && location.pathname === item.path;

            return (
              <li
                key={index}
                onClick={() => handleNavigation(item)}
                style={{
                  cursor: isActive ? "default" : "pointer",
                  opacity: isActive ? 0.6 : 1,
                }}
              >
                {item.name}
              </li>
            );
          })}


          <li className="mobile-cta">
            <a
              href="https://wa.me/525591987726?text=Hola,%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contáctanos ahora
            </a>
          </li>

        </ul>

        {/* Botón CTA */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/525591987726?text=Hola,%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            Contáctanos ahora
          </a>



          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={menuHamburguesa}
              alt="Menú"
              className="menu-icon"
            />
          </button>
        </div>

      </nav>
    </header>
  );
}
