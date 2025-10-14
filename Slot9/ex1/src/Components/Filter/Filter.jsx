import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Filter.css';

export default function Filter({ movies, onFilteredMovies, searchQuery }) {
  const [search, setSearch] = useState('');
  const [yearRange, setYearRange] = useState('all');
  const [sort, setSort] = useState('none');

  const applyFilters = (list, { searchQuery, search, yearRange, sort }) => {
    let filtered = [...list];

    // Search by title or genre (from NavBar or Filter)
    const searchTerm = searchQuery || search;
    if (searchTerm && searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q)
      );
    }

    if (yearRange === '<=2000') {
      filtered = filtered.filter(m => Number(m.year) <= 2000);
    } else if (yearRange === '2001-2015') {
      filtered = filtered.filter(m => Number(m.year) >= 2001 && Number(m.year) <= 2015);
    } else if (yearRange === '>2015') {
      filtered = filtered.filter(m => Number(m.year) > 2015);
    }

    switch (sort) {
      case 'year_asc':
        filtered.sort((a,b) => Number(a.year) - Number(b.year));
        break;
      case 'year_desc':
        filtered.sort((a,b) => Number(b.year) - Number(a.year));
        break;
      case 'title_asc':
        filtered.sort((a,b) => a.title.localeCompare(b.title));
        break;
      case 'title_desc':
        filtered.sort((a,b) => b.title.localeCompare(a.title));
        break;
      case 'duration_asc':
        filtered.sort((a,b) => Number(a.duration) - Number(b.duration));
        break;
      case 'duration_desc':
        filtered.sort((a,b) => Number(b.duration) - Number(a.duration));
        break;
      default:
        break;
    }

    return filtered;
  };

  useEffect(() => {
    const filteredMovies = applyFilters(movies, { searchQuery, search, yearRange, sort });
    onFilteredMovies(filteredMovies);
  }, [searchQuery, search, yearRange, sort, movies, onFilteredMovies]);

  return (
    <Card className="mb-4 filter-card shadow-sm">
      <Card.Body>
        <Row className="g-3 align-items-end">
          <Col xs={12} md={6} lg={6}>
            <Form.Group controlId="filterSearch">
              <Form.Label className="filter-label">Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search by title or genre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="filter-input"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <Form.Group controlId="filterYear">
              <Form.Label className="filter-label">Filter</Form.Label>
              <Form.Select value={yearRange} onChange={(e) => setYearRange(e.target.value)} className="filter-select">
                <option value="all">All years</option>
                <option value="<=2000">Year ≤ 2000</option>
                <option value="2001-2015">Year 2001–2015</option>
                <option value=">2015">Year > 2015</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <Form.Group controlId="filterSort">
              <Form.Label className="filter-label">Sorting</Form.Label>
              <Form.Select value={sort} onChange={(e) => setSort(e.target.value)} className="filter-select">
                <option value="none">None</option>
                <option value="year_asc">Year ↑</option>
                <option value="year_desc">Year ↓</option>
                <option value="title_asc">Title A→Z</option>
                <option value="title_desc">Title Z→A</option>
                <option value="duration_asc">Duration ↑</option>
                <option value="duration_desc">Duration ↓</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}


