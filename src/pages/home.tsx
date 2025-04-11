import React, { useState, useEffect } from 'react';
import '../component/home/Home.css';

// Importar imágenes locales
import logo from '../component/home/logos/gobmx_logo.png';
import headerImage1 from '../component/home/logos/gobierno.png';
import headerImage2 from '../component/home/logos/nacional.png';
import headerImage3 from '../component/home/logos/logotec.jpg';
import carouselImage1 from '../component/home/banner/1.jpeg';
import carouselImage2 from '../component/home/banner/2.jpeg';
import carouselImage3 from '../component/home/banner/3.jpg';


interface HeaderImage {
  id: number;
  image: string;
  link: string;
  alt: string;
}

interface CarouselImage {
  id: number;
  image: string;
  alt: string;
}

interface Card {
  id: number;
  title: string;
  icon: string;
  number: string;
  description: string;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const headerImages: HeaderImage[] = [
    { id: 1, image: headerImage1, link: '#', alt: 'Imagen 1' },
    { id: 2, image: headerImage2, link: '#', alt: 'Imagen 2' },
    { id: 3, image: headerImage3, link: '#', alt: 'Imagen 3' },
  ];

  const carouselImages: CarouselImage[] = [
    { id: 1, image: carouselImage1, alt: 'Slide 1' },
    { id: 2, image: carouselImage2, alt: 'Slide 2' },
    { id: 3, image: carouselImage3, alt: 'Slide 3' },
  ];

  const cards: Card[] = [
    { id: 1, title: 'Carreras', icon: '👨‍🎓', number: '+8', description: 'Oferta académica de pregrado' },
    { id: 2, title: 'Posgrados', icon: '📚', number: '+8', description: 'Maestrías y especializaciones' },
    { id: 3, title: 'Actividades', icon: '💡', number: '+8', description: 'Eventos y actividades culturales' },
    { id: 4, title: 'Estudiantes', icon: '👩‍🎓', number: '+8', description: 'Recursos para estudiantes' },
    { id: 5, title: 'Egresados', icon: '🎓', number: '+8', description: 'Red de egresados' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="page">
      {/* Primer encabezado */}
      <header className="header1">
        <div className="header1-container">
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Logo" 
              className="logo"
            />
          </div>
          
          <div className="empty-space"></div>
          
          <div className="nav-links">
            <a href="#" className="nav-link">Gobierno</a>
            <a href="#" className="nav-link">Participa</a>
            <a href="#" className="nav-link">Datos</a>
          </div>
        </div>
      </header>

      {/* Segundo encabezado */}
      <header className="header2">
        <div className="header2-container">
          {headerImages.map(image => (
            <a key={image.id} href={image.link} className="header-image-link">
              <img 
                src={image.image} 
                alt={image.alt} 
                className="header-image"
              />
            </a>
          ))}
        </div>
      </header>

      {/* Menú de navegación */}
      <nav className="menu">
        <div className="menu-container">
          <a href="#" className="menu-item">Inicio</a>
          <a href="#" className="menu-item">Acerca de</a>
          <a href="#" className="menu-item">Admisiones</a>
          <a href="#" className="menu-item">Investigación</a>
          <a href="#" className="menu-item">Contacto</a>
        </div>
      </nav>

      {/* Carrusel personalizado */}
<div className="carousel-container">
  <div className="carousel">
    {carouselImages.map((image, index) => {
      let slideClass = '';
      if (index === currentSlide) {
        slideClass = 'active';
      } else if (
        index === currentSlide - 1 || 
        (currentSlide === 0 && index === carouselImages.length - 1)
      ) {
        slideClass = 'prev';
      } else {
        slideClass = 'next';
      }
      
      return (
        <div 
          key={image.id}
          className={`carousel-slide ${slideClass}`}
        >
          <img 
            src={image.image} 
            alt={image.alt} 
            className="carousel-image"
          />
        </div>
      );
    })}
  </div>
  <div className="carousel-dots">
    {carouselImages.map((_, index) => (
      <button
        key={index}
        className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
        onClick={() => setCurrentSlide(index)}
      />
    ))}
  </div>
</div>

      {/* Tarjetas */}
      <div className="cards-container">
        {cards.map(card => (
          <div key={card.id} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-number">{card.number}</p>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;