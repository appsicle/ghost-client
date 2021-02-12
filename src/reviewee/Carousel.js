import { Carousel } from 'react-responsive-carousel';
import { uuid } from 'uuidv4';
import './Carousel.scss';

const ContentDisplay = ({ images }) => (
  <div className="carousel-container">
    <Carousel centerMode>
      {images.map((url) => (
        <div key={uuid()}>
          <img src={url} alt="" />
          <p>screenshot</p>
        </div>
      ))}
    </Carousel>
  </div>
);

export default ContentDisplay;
