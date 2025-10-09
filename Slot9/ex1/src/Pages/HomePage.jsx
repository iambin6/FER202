// src/pages/HomePage.jsx
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HomeCarousel from "../Components/Carousel/HomeCarousel";
import MovieCard from "../Components/Movie/MovieCard";
import { movies } from "../data/movies";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      
      {/* Featured Movies Collections */}
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Featured Movies Collections</h2>
            <p className="text-center text-secondary mb-5">
              Những bộ phim bom tấn được yêu thích nhất, phù hợp với mọi lứa tuổi
            </p>
          </Col>
        </Row>
        
        <Row>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
