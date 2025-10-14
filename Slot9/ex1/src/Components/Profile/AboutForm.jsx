import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const AboutForm = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-person-circle fs-4 me-2"></i>
        <h5 className="mb-0">About Information</h5>
      </div>
      <Form noValidate>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label><i className="bi bi-person me-2"></i>First Name *</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" isInvalid={true} defaultValue="tral tb" />
              <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label><i className="bi bi-person me-2"></i>Last Name *</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" isInvalid={true} defaultValue="BT" />
              <Form.Control.Feedback type="invalid">Last name is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="email">
              <Form.Label><i className="bi bi-envelope me-2"></i>Email *</Form.Label>
              <Form.Control type="email" placeholder="Enter email" isInvalid={true} defaultValue="tralbt@fe.edu.vn" />
              <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="phone">
              <Form.Label><i className="bi bi-telephone me-2"></i>Phone *</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone" isInvalid={true} defaultValue="0976306047" />
              <Form.Control.Feedback type="invalid">Phone is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="age">
              <Form.Label><i className="bi bi-calendar-date me-2"></i>Age *</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" isInvalid={true} />
              <Form.Control.Feedback type="invalid">Age is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="avatar">
              <Form.Label><i className="bi bi-image me-2"></i>Avatar</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AboutForm;


