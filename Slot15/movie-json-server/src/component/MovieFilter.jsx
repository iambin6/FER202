// src/component/MovieFilter.jsx
import React from 'react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';

const MovieFilter = () => {
  const state = useMovieState();
  const { dispatch } = useMovieDispatch();
  const { filters, genres, movies } = state;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FILTER',
      payload: { name, value }
    });
  };

  const handleResetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const getUniqueYears = () => {
    const years = movies.map(movie => movie.year);
    const uniqueYears = [...new Set(years)].sort((a, b) => b - a);
    return uniqueYears;
  };

  return (
    <div className="p-3 mb-4 border rounded">
      <h4 className="mb-3">🔍 Tìm kiếm và Lọc Phim</h4>
      <Form>
        <Row className="g-3">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text>🔎</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Tìm theo tên phim hoặc mô tả..."
                name="searchText"
                value={filters.searchText}
                onChange={handleFilterChange}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select
              name="genreId"
              value={filters.genreId}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả thể loại</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả năm</option>
              {getUniqueYears().map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <InputGroup>
              <InputGroup.Text>Sắp xếp:</InputGroup.Text>
              <Form.Select
                name="sortBy"
                value={filters.sortBy}
                onChange={handleFilterChange}
              >
                <option value="id">Mặc định (ID)</option>
                <option value="title">Tên phim (A-Z)</option>
                <option value="year">Năm phát hành (Mới nhất)</option>
                <option value="duration">Thời lượng (Dài nhất)</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small className="text-muted">
            {filters.searchText || filters.genreId || filters.year || filters.sortBy !== 'id' ? (
              <>
                Đang lọc:
                {filters.searchText && ` "${filters.searchText}"`}
                {filters.genreId && ` Thể loại: ${genres.find(g => g.id === parseInt(filters.genreId))?.name}`}
                {filters.year && ` Năm: ${filters.year}`}
                {filters.sortBy !== 'id' && ` Sắp xếp: ${filters.sortBy === 'title' ? 'Tên' : filters.sortBy === 'year' ? 'Năm' : 'Thời lượng'}`}
              </>
            ) : (
              "Hiển thị tất cả phim"
            )}
          </small>
          <Button variant="outline-secondary" size="sm" onClick={handleResetFilters}>
            ↻ Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MovieFilter;

