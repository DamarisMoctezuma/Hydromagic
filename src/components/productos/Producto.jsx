import '../productos/productos.module.css';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import tina1 from '../../assets/images/tina1.png';
import tina4 from '../../assets/images/tina4.png';
import atenasII from '../../assets/images/Tina=AtenasII.png';
import atenasIII from '../../assets/images/Tina=AtenasIII.png';
import boloniaI from '../../assets/images/Tina=BoloniaI.png';
import boloniaII from '../../assets/images/Tina=BoloniaII.png';
import brescia from '../../assets/images/Tina=Brescia.png';
import cale from '../../assets/images/Tina=Cale.png';
import cannes from '../../assets/images/Tina=Cannes.png';
import capri from '../../assets/images/Tina=Capri.png';
import ferrara from '../../assets/images/Tina=Ferrara.png';
import granada from '../../assets/images/Tina=Granada.png';
import monaco from '../../assets/images/Tina=Monaco.png';
import napoles from '../../assets/images/Tina=Napoles.png';
import niza from '../../assets/images/Tina=Niza.png';
import normandia from '../../assets/images/Tina=Normandia.png';
import paduaI from '../../assets/images/Tina=Padua.png';
import palermo from '../../assets/images/Tina=Palermo.png';
import free from '../../assets/images/Tina=PalermoFree.png';
import romana from '../../assets/images/Tina=Romana.png';
import sicilia from '../../assets/images/Tina=Sicilia.png';
import toledo from '../../assets/images/Tina=Toledo.png';
import turin from '../../assets/images/Tina=Turin.png';
import venecia from '../../assets/images/Tina=Venecia.png';
import Contactanos from '../sections/Contactanos';

export default function Producto() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modeloActivo, setModeloActivo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setModeloActivo(null);
    };

    if (modeloActivo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modeloActivo]);

  const modelosData = [
    {
      id: 1,
      nombre: "Atenas I",
      tipo: "Tina Individual",
      forma: "Rectangular",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio.",
      imagen: tina1,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "152 x 86 x 46 cm",
      capacidad: "120L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 2,
      nombre: "Bolonia I",
      tipo: "Tina de pareja",
      forma: "Ovalada",
      descripcion:
        "Tina Ovalada. Diseño elegante y clásico, pero con todas las comodidades que brinda la tecnología.",
      imagen: boloniaI,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "11.75 x 0.90 x 0.62",
      capacidad: "160L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 3,
      nombre: "Cale",
      tipo: "Tina Redonda",
      forma: "Circular",
      descripcion:
        "Tina circular",
      imagen: cale,
      requerimientosElectricos: "",
      medidas: "1.70 x 1.70 x 0.46",
      capacidad: "300L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 4,
      nombre: "Capri",
      tipo: "Tina de pareja",
      forma: "Esquinera",
      descripcion:
        "Tina esquinera. Capacidad para dos personas. Modelo espacioso de líneas suaves y curvas en el interior.",
      imagen: capri,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "1.60 x 1.60 x 0.45",
      capacidad: "240L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 5,
      nombre: "Atenas II",
      tipo: "Tina Individual",
      forma: "Rectangular",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio.",
      imagen: atenasII,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "165 x 86 x 46 cm",
      capacidad: "140L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 6,
      nombre: "Atenas III",
      tipo: "Tina individual",
      forma: "Rectangular",
      descripcion:
        "Tina rectangular fabricada en acrílico",
      imagen: atenasIII,
      requerimientosElectricos: "110v con línea a tierra",
      medidas: "1.80 x 0.90 x 0.46",
      capacidad: "160L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 7,
      nombre: "Bolonia II",
      tipo: "Tina de pareja",
      forma: "Ovalada",
      descripcion:
        "Tina Ovalada. Diseño elegante y clásico, pero con todas las comodidades que brinda la tecnología.",
      imagen: boloniaII,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.94 x 1.17 x 0.46",
      capacidad: "220L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 8,
      nombre: "Brescia",
      tipo: "Tina Individual",
      forma: "Rectangular",
      descripcion:
        "Tina Rectangular. Tina vanguardista fabricada en acrílico. Ideal para una persona. Líneas caprichosas y cumple con todas las funciones para un baño relajante.",
      imagen: brescia,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.80 x 0.90 x 0.46",
      capacidad: "150L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 9,
      nombre: "Cannes",
      tipo: "Tina Individual",
      forma: "Rectangular",
      descripcion:
        "Tina fabricada en acrílico, capacidad para una persona. Adaptable para cualquier espacio para brindar mejor confort y relajación a la hora del baño.",
      imagen: cannes,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.60 x 0.75 x 0.45",
      capacidad: "130L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 10,
      nombre: "Ferrara",
      tipo: "Tina de pareja",
      forma: "Rectangular",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio y espuma de poliuretano como aislante térmico para conservar el agua caliente por más tiempo.",
      imagen: ferrara,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "180 x 130 x 46 cm",
      capacidad: "320L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 11,
      nombre: "Granada",
      tipo: "Tina de pareja",
      forma: "Rectangular",
      descripcion:
        "Tina Rectangular. Espaciosa capacidad para dos personas. De diseño sobrio pero confortable.",
      imagen: granada,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.80 x 1.42 x 0.46",
      capacidad: "280L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 12,
      nombre: "Modena",
      tipo: "Tina individual",
      forma: "Esquinera",
      descripcion:
        "Tina Esquinera. Capacidad para una persona. Modelo que incluye todos los aditamentos necesarios para brindar el mayor confort y relajación a la hora del baño.",
      imagen: tina4,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.53 x 1.07 x 0.44",
      capacidad: "140L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 13,
      nombre: "Monaco",
      tipo: "Tina de pareja",
      forma: "Ovalada",
      descripcion:
        "Tina ovalada con diseño elegante.",
      imagen: monaco,
      requerimientosElectricos: "110v con línea a tierra",
      medidas: "x1.80 x 1.14 x 0.46",
      capacidad: "200L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 14,
      nombre: "Napoles",
      tipo: "Tina de jardín",
      forma: "Redonda",
      descripcion:
        "Tina octagonal tipo spa.",
      imagen: napoles,
      requerimientosElectricos: "Varía según equipo",
      medidas: "1.80 x 1.80 x 0.75",
      capacidad: "420L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 15,
      nombre: "Niza",
      tipo: "Tina de pareja",
      forma: "Rectangular",
      descripcion:
        "Espaciosa que integra un acomodo frontal entre dos personas gracias a su diseño simétrico.",
      imagen: niza,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.80 x 1.14 x 0.46",
      capacidad: "220L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 16,
      nombre: "Normandia",
      tipo: "Tina de pareja",
      forma: "Rectangular",
      descripcion:
        "Capacidad para dos personas. Modelo espacioso de líneas suaves y curvas en el interior.",
      imagen: normandia,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.53 x 1.07 x 0.52",
      capacidad: "180L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 17,
      nombre: "Pádua I C/F",
      tipo: "Tina individual",
      forma: "Rectangular",
      descripcion:
        "Tina rectangular. Fabricada en acrílico, ideal para una persona, líneas limpias y elegantes. Con faldón.",
      imagen: paduaI,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.20 x 0.75 x 0.36",
      capacidad: "110L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 18,
      nombre: "Pádua II C/F",
      tipo: "Tina individual",
      forma: "Rectangular",
      descripcion:
        "Tina rectangular. Fabricada en acrílico, ideal para una persona, líneas limpias y elegantes. Con faldón.",
      imagen: tina1,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.53 x 0.75 x 0.35",
      capacidad: "120L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 19,
      nombre: "Pádua II S/F",
      tipo: "Tina individual",
      forma: "Rectangular",
      descripcion:
        "Tina rectangular. Fabricada en acrílico, ideal para una persona, líneas limpias y elegantes. Sin faldón.",
      imagen: tina1,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 Amp.",
      medidas: "1.51 x 0.75 x 0.35",
      capacidad: "110L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 20,
      nombre: "Palermo",
      tipo: "Tina individual",
      forma: "Ovalada",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio y espuma de poliuretano como aislante térmico para conservar el agua caliente por más tiempo.",
      imagen: palermo,
      requerimientosElectricos: "110v con línea a tierra",
      medidas: "1.80 x 1.00 x 0.46",
      capacidad: "160L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 21,
      nombre: "Palermo Free",
      tipo: "Tina individual",
      forma: "Ovalada",
      descripcion:
        "Tina con opción Free que incluye: Faldón perimetral, Base metálica, Desagüe instalado, Cascada de llenado, Patas Niveladoras.",
      imagen: free,
      requerimientosElectricos: "110v con línea a tierra",
      medidas: "1.80 x 1.00 x 0.46",
      capacidad: "160L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 22,
      nombre: "Romana",
      tipo: "Tina de pareja",
      forma: "Rectangular",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio.",
      imagen: romana,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "180 x 142 x 42 cm",
      capacidad: "280L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 23,
      nombre: "Sicilia",
      tipo: "Tina de jardín",
      forma: "Redonda",
      descripcion:
        "Tina circular tipo spa con base de fibra de vidrio.",
      imagen: sicilia,
      requerimientosElectricos: "Varía según equipo",
      medidas: "1.80 x 1.80 x 0.63",
      capacidad: "460L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 24,
      nombre: "Toledo",
      tipo: "Tina individual",
      forma: "Rectangular",
      descripcion:
        "Tina Rectangular. Fabricada en acrílico, capacidad para una persona. De líneas curvas y elegantes.",
      imagen: toledo,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "1.53 x 1.07 x 0.42",
      capacidad: "140L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 25,
      nombre: "Turin",
      tipo: "Tina de pareja",
      forma: "Esquinera",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio.",
      imagen: turin,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "150 x 150 x 45 cm",
      capacidad: "210L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
    {
      id: 26,
      nombre: "Venecia",
      tipo: "Tina de individual",
      forma: "Rectangular",
      descripcion:
        "Tina fabricada en acrílico grado sanitario que no promueve la formación de hongos, moho o depósitos salinos. Reforzada con fibra de vidrio y espuma de poliuretano como aislante térmico para conservar el agua caliente por más tiempo.",
      imagen: venecia,
      requerimientosElectricos: "110v con línea a tierra. Línea directa desde caja de fusibles, protegida con interruptor térmico de 15 amp.",
      medidas: "1.52 x 0.72 x 0.42",
      capacidad: "110L",
      colores: [
        { nombre: "Blanco", color: "#ffffff" },
        { nombre: "Marfil", color: "#cabfa8" },
        { nombre: "Azul", color: "#81c7dd" },
        { nombre: "Gris", color: "#878b87" },
        { nombre: "Azul Marino", color: "#234370" },
        { nombre: "Negro", color: "#070707" },
  ]
    },
  ];

  const generarFichaTecnicaURL = (nombre) => {
  const baseURL = "https://hydromagic.com.mx/resources/technical-specifications/";

  // Normalizar texto
  const slug = nombre
    .toLowerCase()
    .normalize("NFD") // quitar acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-") // espacios a guiones
    .replace(/\//g, "-") // reemplazar /
    .replace(/ii/g, "2")
    .replace(/iii/g, "3")
    .replace(/i/g, "1");

  return `${baseURL}file-${slug}.pdf`;
};



  return (
    <>
      <section
        id="productos"
        ref={sectionRef}
        className={`modelos-section ${isVisible ? "apple-show" : ""}`}
      >
        <h2 className={`modelos-title ${isVisible ? "apple-title-show" : ""}`}>
          Conoce nuestro catálogo <br /> de productos para ti
        </h2>

        <div className="cards-grid">
          {modelosData.map((modelo, index) => (
            <div
              key={modelo.id}
              className={`card ${isVisible ? "apple-card-show" : ""}`}
              onClick={() => setModeloActivo(modelo)}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="card-img">
                <img src={modelo.imagen} alt={modelo.nombre} />
              </div>

              <div className="card-content">
                <h3 className="card-title">{modelo.nombre}</h3>
                <div className="card-sub">
                  <span className="tipo">{modelo.tipo}</span>
                  <span className="forma">{modelo.forma}</span>
                </div>
                <p className="card-text">{modelo.descripcion}</p>
                <div className="colors">
                  {modelo.colores.map((c, i) => (
                    <span key={i} style={{ background: c.color }} />
                  ))}
                </div>
                     <button 
                      className="btn-cotizar"
                      onClick={(e) => {
                        e.stopPropagation();
                        const url = generarFichaTecnicaURL(modelo.nombre);
                        window.open(url, "_blank");
                      }}
                    >
                      Ver ficha técnica
                    </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {modeloActivo && (
        <div className="modal-overlay" onClick={() => setModeloActivo(null)}>
          <div className="modal-card apple-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <h2 className="modal-title">{modeloActivo.nombre}</h2>
                <span className="modal-separator"></span>
                <p className="modal-sub">{modeloActivo.tipo}</p>
              </div>
              <button className="modal-close" onClick={() => setModeloActivo(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-img">
                <img src={modeloActivo.imagen} alt={modeloActivo.nombre} />
              </div>

              <div className="modal-content">
                <div className="modal-info-block">
                  <h3 className="modal-section-title">Descripción</h3>
                  <p className="modal-text">{modeloActivo.descripcion}</p>
                </div>

                  {modeloActivo.requerimientosElectricos && (
                    <div className="modal-info-block">
                      <h3 className="modal-section-title">Requerimientos Eléctricos</h3>
                      <p className="modal-text">
                        {modeloActivo.requerimientosElectricos}
                      </p>
                    </div>
                  )}

                <div className="modal-row">
                  <div className="modal-info-block">
                    <h3 className="modal-section-title">Medidas</h3>
                    <p className="modal-text">{modeloActivo.medidas}</p>
                  </div>
                  <div className="modal-info-block">
                    <h3 className="modal-section-title">Capacidad</h3>
                    <p className="modal-text">{modeloActivo.capacidad}</p>
                  </div>
                </div>

                <div className="modal-info-block">
                  <h3 className="modal-section-title">Colores disponibles</h3>
                  <div className="modal-colores">
                    {modeloActivo.colores.map((c, i) => (
                      <div key={i} className="color-button">
                        <div className="color-dot" style={{ background: c.color }} />
                        <span>{c.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
              className="btn-cotizar-modal"
              onClick={() => {
                const mensaje = `Hola, me gustaría cotizar la tina ${modeloActivo.nombre}`;
                const url = `https://wa.me/525591987726?text=${encodeURIComponent(mensaje)}`;
                window.open(url, "_blank");
              }}
            >
              Cotizar ahora
            </button>
            </div>
          </div>
        </div>
      )}

      <Contactanos />
    </>
  );
}