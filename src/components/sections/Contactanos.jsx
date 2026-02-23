import '../../styles/styles.css';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

const ciudadesMexico = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];

const tinas = ["ATENAS I", "ATENAS II", "ATENAS III", "BOLONIA I", "BOLONIA II", "BRESCIA", "CALE", "CANNES", "CAPRI", "CARRARA", "CISILIA", "FERRARA", "GRANADA", "HERMES", "MODENA", "MONACO", "MONTECARLO", "NAPOLES", "NIZA", "NORMANDIA", "PADUA I", "PADUA II", "PADUA II S/F", "PALERMO", "PALERMO FREE", "ROMANA", "SIENA", "TOSCANA", "TOLEDO", "TURIN", "UJU", "VENECIA", "VERONA"];

const CustomSelect = ({ label, options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="form-field custom-select-wrapper" ref={containerRef}>
      <div 
        className={`select-trigger ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={!value ? "placeholder-text" : ""}>{value || label}</span>
        <svg className={`arrow-icon ${isOpen ? 'rotate' : ''}`} width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8.70859 11.7086C8.31797 12.0992 7.68359 12.0992 7.29297 11.7086L1.29297 5.70859C0.902344 5.31797 0.902344 4.68359 1.29297 4.29297C1.68359 3.90234 2.31797 3.90234 2.70859 4.29297L8.00234 9.58672L13.2961 4.29609C13.6867 3.90547 14.3211 3.90547 14.7117 4.29609C15.1023 4.68672 15.1023 5.32109 14.7117 5.71172L8.71172 11.7117L8.70859 11.7086Z" fill="white"/>
        </svg>
      </div>
      {isOpen && (
        <ul className="select-dropdown">
          {options.map((option) => (
            <li 
              key={option} 
              onClick={() => {
                onChange(name, option);
                setIsOpen(false);
              }}
              className={value === option ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Contactanos() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const initialFormState = {
    nombre: "", apellido: "", email: "", telefono: "", ciudad: "", tina: "", proyecto: "", duda: ""
  };
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSelectChange = (name, value) => setFormData({ ...formData, [name]: value });

  const validateForm = () => {
    const { nombre, apellido, email, telefono, ciudad, tina, proyecto, duda } = formData;
    if (!nombre || !apellido || !email || !telefono || !ciudad || !tina || !proyecto || !duda) {
      return "Todos los campos son obligatorios.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Ingresa un correo electrónico válido.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Formulario enviado correctamente");
    console.log("Datos enviados:", formData);
    
    setFormData(initialFormState);

    setTimeout(() => setSuccess(""), 5000);
  };

  return (
    <section id="contacto" ref={sectionRef} className={`contact-section ${isVisible ? "contact-show" : ""}`}>
      <h2 className={`contact-title ${isVisible ? "contact-title-show" : ""}`}>Contáctanos</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className={`form-row ${isVisible ? "row-show row-delay-1" : ""}`}>
          <div className="form-field"><input type="text" name="nombre" placeholder="Nombre(s)" value={formData.nombre} onChange={handleChange} /></div>
          <div className="form-field"><input type="text" name="apellido" placeholder="Apellido(s)" value={formData.apellido} onChange={handleChange} /></div>
        </div>

        <div className={`form-row ${isVisible ? "row-show row-delay-2" : ""}`}>
          <div className="form-field"><input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} /></div>
          <div className="form-field"><input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} /></div>
        </div>

        <div className={`form-row ${isVisible ? "row-show row-delay-3" : ""}`} style={{ zIndex: 10 }}>
          <CustomSelect label="Selecciona tu ciudad" options={ciudadesMexico} value={formData.ciudad} name="ciudad" onChange={handleSelectChange} />
          <CustomSelect label="Selecciona la tina" options={tinas} value={formData.tina} name="tina" onChange={handleSelectChange} />
        </div>

        <div className={`form-row ${isVisible ? "row-show row-delay-4" : ""}`}>
          <div className="form-field"><input type="text" name="proyecto" placeholder="Proyecto" value={formData.proyecto} onChange={handleChange} /></div>
          <div className="form-field"><input type="text" name="duda" placeholder="Duda" value={formData.duda} onChange={handleChange} /></div>
        </div>

        {error && <p className="status-msg" style={{ color: "#ff4d4d", textAlign: "center", fontFamily: "Poppins" }}>{error}</p>}
        {success && <p className="status-msg" style={{ color: "#34B5E5", textAlign: "center", fontFamily: "Poppins" }}>{success}</p>}

        <button type="submit" className={`contact-button ${isVisible ? "button-show" : ""}`}>
          Contáctanos ahora
        </button>
      </form>
    </section>
  );
}