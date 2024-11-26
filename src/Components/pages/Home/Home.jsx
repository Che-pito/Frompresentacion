import './Home.css';
import { Acercade } from '../../common/Acercade/Acercade';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importación de imágenes
import imagen1 from '/src/assets/img/imagen1.jpg';
import imagen2 from '/src/assets/img/imagen2.jpg';
import imagen3 from '/src/assets/img/imagen3.jpg';

export function Home() {
  return (
    <>
      <div className="carousel-container">
        <Carousel interval={2000} indicators={true} controls={true}>
          <Carousel.Item>
            <img
              src={imagen1}
              alt="Primera imagen"
            />
            <Carousel.Caption>
              <h3>Primera diapositiva</h3>
              <p>Descripción de la primera diapositiva.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagen2}
              alt="Segunda imagen"
            />
            <Carousel.Caption>
              <h3>Segunda diapositiva</h3>
              <p>Descripción de la segunda diapositiva.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagen3}
              alt="Tercera imagen"
            />
            <Carousel.Caption>
              <h3>Tercera diapositiva</h3>
              <p>Descripción de la tercera diapositiva.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Otras secciones (como Acerca de) */}
      <Acercade />
    </>
  );
}
