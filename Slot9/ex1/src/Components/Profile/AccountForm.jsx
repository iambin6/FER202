import React from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';

const AccountForm = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-lock fs-4 me-2"></i>
        <h5 className="mb-0">Account Information</h5>
      </div>
      <Form noValidate>
        <Row className="g-3">
          <Col md={12}>
            <Form.Group controlId="username">
              <Form.Label>Username *</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className="bi bi-person"></i></InputGroup.Text>
                <Form.Control placeholder="Enter username" defaultValue="tra1234" isInvalid={true} />
              </InputGroup>
              <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="password">
              <Form.Label>Password *</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className="bi bi-lock"></i></InputGroup.Text>
                <Form.Control type="password" placeholder="Enter password" isInvalid={true} defaultValue="" />
              </InputGroup>
              <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password *</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className="bi bi-lock"></i></InputGroup.Text>
                <Form.Control type="password" placeholder="Re-enter password" isInvalid={true} defaultValue="" />
              </InputGroup>
              <Form.Control.Feedback type="invalid">Confirm password is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="secretQuestion">
              <Form.Label>Secret Question *</Form.Label>
              <Form.Select defaultValue="What is your first pet's name?">
                <option>What is your first pet's name?</option>
                <option>What city were you born in?</option>
                <option>What is your favorite movie?</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="answer">
              <Form.Label>Answer *</Form.Label>
              <Form.Control placeholder="Enter your answer" isInvalid={true} />
              <Form.Control.Feedback type="invalid">Answer is required</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AccountForm;


