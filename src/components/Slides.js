import Carousel from 'react-bootstrap/Carousel';
import { homeImages } from '../homeImages';

export default function Slide() {
  const { img1, img2, img3 } = homeImages;
  return (
   <div className="slides-container">
    <div className="narrow-color"><span></span></div>
    <div className="show-slides">
      <Carousel className="carousel-home">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ img1 }
            alt="It's me Hua"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ img2 }
            alt="Productive"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ img3 }
            alt="Team work"
          />
        </Carousel.Item>
      </Carousel>
    </div>
   </div>
  );
}

