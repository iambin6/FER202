import {Carousel, Badge} from 'react-bootstrap';
import {carouselMovies} from '../../data/HomeCarousel';
import './carousel.css';

function MyCarousel() {
    if (!Array.isArray(carouselMovies) || carouselMovies.length === 0) return null;
    return (
        <Carousel>
            {carouselMovies.map((m) => (
            <Carousel.Item key={m.id}>
                 <img
                     className="d-block w-100"
                     src={m.poster}
                     alt={m.title}
                 />
                 <Carousel.Caption>
                     <h3>{m.title}</h3>
                     <p>{m.description}</p>
                 </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MyCarousel;