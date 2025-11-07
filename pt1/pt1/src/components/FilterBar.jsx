import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { usePaymentContext } from '../contexts/PaymentContext';

const FilterBar = () => {
  const { filters, dispatch, getUniqueSemesters, getUniqueCourseNames } =
    usePaymentContext();

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FILTER', field, value });
  };

  const uniqueSemesters = getUniqueSemesters();
  const uniqueCourses = getUniqueCourseNames();

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header as="h5">Bộ lọc, Tìm kiếm &amp; Sắp xếp</Card.Header>
      <Card.Body>
        <Form>
          <Row className="g-3">
            {/* Search by semester or course name */}
            <Col xs={12} lg={4}>
              <Form.Group>
                <Form.Label>Tìm kiếm (Semester/Course)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search by semester or course name"
                  value={filters.search}
                  onChange={(e) => handleChange('search', e.target.value)}
                />
              </Form.Group>
            </Col>

            {/* Filter by Semester */}
            <Col xs={6} md={4} lg={2}>
              <Form.Group>
                <Form.Label>Lọc theo Semester</Form.Label>
                <Form.Select
                  value={filters.semester}
                  onChange={(e) => handleChange('semester', e.target.value)}
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

            {/* Filter by Course name */}
            <Col xs={6} md={4} lg={2}>
              <Form.Group>
                <Form.Label>Lọc theo Course</Form.Label>
                <Form.Select
                  value={filters.courseName}
                  onChange={(e) => handleChange('courseName', e.target.value)}
                >
                  <option value="">All Courses</option>
                  {uniqueCourses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Sorting */}
            <Col xs={12} md={4} lg={4}>
              <Form.Group>
                <Form.Label>Sắp xếp theo:</Form.Label>
                <Form.Select
                  value={filters.sortBy}
                  onChange={(e) => handleChange('sortBy', e.target.value)}
                >
                  <option value="course_asc">Course name (A-Z)</option>
                  <option value="course_desc">Course name (Z-A)</option>
                  <option value="semester_asc">Semester (A-Z)</option>
                  <option value="semester_desc">Semester (Z-A)</option>
                  <option value="date_asc">Date (Oldest first)</option>
                  <option value="date_desc">Date (Newest first)</option>
                  <option value="amount_asc">Amount (Low to High)</option>
                  <option value="amount_desc">Amount (High to Low)</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterBar;
