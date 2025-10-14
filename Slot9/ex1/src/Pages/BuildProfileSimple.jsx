import React, { useState } from 'react';
import { Button, Nav, ProgressBar, Stack, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';

const BuildProfile = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const { addProfile } = useProfile();
  
  // Form data state
  const [formData, setFormData] = useState({
    firstName: 'tral tb',
    lastName: 'BT',
    email: 'tralbt@fe.edu.vn',
    phone: '0976306047',
    age: '',
    username: 'tra1234',
    password: '',
    confirmPassword: '',
    secretQuestion: 'What is your first pet\'s name?',
    answer: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const steps = [
    { key: 'about', title: 'About', icon: 'bi-person-circle' },
    { key: 'account', title: 'Account', icon: 'bi-lock' },
    { key: 'address', title: 'Address', icon: 'bi-geo-alt' }
  ];

  const percent = active === 0 ? 33 : active === 1 ? 67 : 100;

  const handleClose = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFinish = () => {
    // Add the new profile to context
    addProfile(formData);
    alert('Profile created successfully!');
    navigate('/manage-profile');
  };

  const renderStep = () => {
    if (active === 0) {
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
                      <Form.Control 
                        type="text" 
                        name="firstName"
                        placeholder="Enter first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        isInvalid={!formData.firstName}
                      />
                      <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label><i className="bi bi-person me-2"></i>Last Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName"
                        placeholder="Enter last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        isInvalid={!formData.lastName}
                      />
                      <Form.Control.Feedback type="invalid">Last name is required</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="email">
                      <Form.Label><i className="bi bi-envelope me-2"></i>Email *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Enter email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        isInvalid={!formData.email}
                      />
                      <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="phone">
                      <Form.Label><i className="bi bi-telephone me-2"></i>Phone *</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone"
                        placeholder="Enter phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        isInvalid={!formData.phone}
                      />
                      <Form.Control.Feedback type="invalid">Phone is required</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="age">
                      <Form.Label><i className="bi bi-calendar-date me-2"></i>Age *</Form.Label>
                      <Form.Control 
                        type="number" 
                        name="age"
                        placeholder="Enter your age" 
                        value={formData.age}
                        onChange={handleInputChange}
                        isInvalid={!formData.age}
                      />
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
    }
    
    if (active === 1) {
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
    }
    
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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <Stack className="w-100" gap={2}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle"></i>
                    <strong>Build Your Profile</strong>
                  </div>
                  <Button variant="outline-secondary" size="sm" onClick={handleClose}>
                    <i className="bi bi-x"></i>
                  </Button>
                </div>
                <ProgressBar now={percent} label={`${percent}%`} style={{ height: 8 }} />
                <Nav variant="tabs" activeKey={active} onSelect={() => {}} className="mt-2">
                  {steps.map((s, idx) => (
                    <Nav.Item key={s.key}>
                      <Nav.Link eventKey={idx} active={active === idx} disabled>
                        <i className={`bi ${s.icon} me-2`}></i>{s.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Stack>
            </div>
            <div className="card-body">
              {renderStep()}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button variant="secondary" disabled={active === 0} onClick={() => setActive(Math.max(0, active - 1))}>
                Previous
              </Button>
              {active < 2 ? (
                <Button onClick={() => setActive(Math.min(2, active + 1))}>
                  Next
                </Button>
              ) : (
                <Button variant="success" onClick={handleFinish}>
                  Finish
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildProfile;
