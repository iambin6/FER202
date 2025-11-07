import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { usePaymentContext } from '../contexts/PaymentContext';

const FilterBar = () => {
  const { filters, dispatch, getUniqueSemesters, getUniqueCourseNames } = usePaymentContext();
  const uniqueSemesters = getUniqueSemesters();
  const uniqueCourseNames = getUniqueCourseNames();

  const handleFilterChange = (field, value) => {
    dispatch({ type: 'SET_FILTER', field, value });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return (
    <div className="mb-4 p-3 bg-light rounded">
      <Row>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by semester, course..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Semester</Form.Label>
            <Form.Select
              value={filters.semester}
              onChange={(e) => handleFilterChange('semester', e.target.value)}
            >
              <option value="">All Semesters</option>
              {uniqueSemesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Course Name</Form.Label>
            <Form.Select
              value={filters.courseName}
              onChange={(e) => handleFilterChange('courseName', e.target.value)}
            >
              <option value="">All Courses</option>
              {uniqueCourseNames.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Sort By</Form.Label>
            <Form.Select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <option value="course_asc">Course (A-Z)</option>
              <option value="course_desc">Course (Z-A)</option>
              <option value="date_asc">Date (Oldest)</option>
              <option value="date_desc">Date (Newest)</option>
              <option value="amount_asc">Amount (Low-High)</option>
              <option value="amount_desc">Amount (High-Low)</option>
              <option value="semester_asc">Semester (A-Z)</option>
              <option value="semester_desc">Semester (Z-A)</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={1} className="d-flex align-items-end">
          <Button variant="outline-secondary" onClick={handleReset} className="w-100">
            Reset
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilterBar;

