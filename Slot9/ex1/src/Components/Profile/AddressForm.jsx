import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const AddressForm = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-geo-alt fs-4 me-2"></i>
        <h5 className="mb-0">Address Information</h5>
      </div>
      <Form noValidate>
        <Row className="g-3">
          <Col md={12}>
            <Form.Group controlId="street">
              <Form.Label>Street *</Form.Label>
              <Form.Control placeholder="Enter your street address" isInvalid={true} />
              <Form.Control.Feedback type="invalid">Street is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City *</Form.Label>
              <Form.Control placeholder="Enter your city" isInvalid={true} />
              <Form.Control.Feedback type="invalid">City is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="state">
              <Form.Label>State *</Form.Label>
              <Form.Control placeholder="Enter your state/province" isInvalid={true} />
              <Form.Control.Feedback type="invalid">State is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="zip">
              <Form.Label>Zip Code *</Form.Label>
              <Form.Control placeholder="Enter your zip/postal code" isInvalid={true} />
              <Form.Control.Feedback type="invalid">Zip code is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country *</Form.Label>
              <Form.Select defaultValue="" isInvalid={true}>
                <option value="" disabled>Select a country</option>
                <option>Vietnam</option>
                <option>United States</option>
                <option>Japan</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">Country is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddressForm;


