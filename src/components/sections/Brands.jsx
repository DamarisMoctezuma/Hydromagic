import '../../styles/styles.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import brand1 from '@/assets/images/brand1.png';
import brand10 from '@/assets/images/brand10.png';
import brand11 from '@/assets/images/brand11.png';
import brand2 from '@/assets/images/brand2.png';
import brand3 from '@/assets/images/brand3.png';
import brand4 from '@/assets/images/brand4.png';
import brand5 from '@/assets/images/brand5.png';
import brand6 from '@/assets/images/brand6.png';
import brand7 from '@/assets/images/brand7.svg';
import brand8 from '@/assets/images/brand8.svg';
import brand9 from '@/assets/images/brand9.png';

export default function Brands() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const brands = [
    brand1, brand2, brand3, brand4, 
    brand5, brand6, brand7, brand8,
    brand9, brand10, brand11
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const cards = sectionRef.current.querySelectorAll(".brand-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);


  const displayBrands = isMobile ? brands : [...brands, ...brands];

  return (
    <section className="brands-section" ref={sectionRef}>
      <div className="brands-slider">
        <div className="brands-track">
          {displayBrands.map((brand, index) => (
            <div
              className="brand-card"
              key={index}
              style={{ 
                transitionDelay: isMobile ? '0s' : `${(index % brands.length) * 0.1}s` 
              }}
            >
              <img src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}