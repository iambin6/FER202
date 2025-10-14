// src/pages/HomePage.jsx
import React, { useState, useCallback } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import HomeCarousel from "../Components/Carousel/HomeCarousel";
import MovieCard from "../Components/Movie/MovieCard";
import { movies } from "../data/movies";
import Filter from "../Components/Filter/Filter";
import NavBar from "../Components/NavBar/NavBar";

export default function HomePage() {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilteredMovies = useCallback((movies) => {
    setFilteredMovies(movies);
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <HomeCarousel />
      
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Featured Movies Collections</h2>
            <p className="text-center text-secondary mb-3">
              Những bộ phim bom tấn được yêu thích nhất, phù hợp với mọi lứa tuổi
            </p>
          </Col>
        </Row>

        <Filter 
          movies={movies} 
          onFilteredMovies={handleFilteredMovies} 
          searchQuery={searchQuery}
        />

        <Row>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
