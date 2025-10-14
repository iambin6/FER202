import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProfileById, updateProfile } = useProfile();
  
  const profile = getProfileById(id);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    username: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        email: profile.email || '',
        phone: profile.phone || '',
        age: profile.age || '',
        username: profile.username || '',
        street: profile.street || '',
        city: profile.city || '',
        state: profile.state || '',
        zipCode: profile.zipCode || '',
        country: profile.country || ''
      });
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (profile) {
      updateProfile({
        id: profile.id,
        ...formData
      });
      alert('Profile updated successfully!');
      navigate('/manage-profile');
    }
  };

  const handleCancel = () => {
    navigate('/manage-profile');
  };

  if (!profile) {
    return (
      <Container className="mt-4">
        <div className="text-center">
          <h3>Profile not found</h3>
          <Button variant="primary" onClick={() => navigate('/manage-profile')}>
            Back to Manage Profiles
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2><i className="bi bi-pencil-square me-2"></i>Edit Profile #{profile.id}</h2>
            <Button variant="outline-secondary" onClick={handleCancel}>
              <i className="bi bi-arrow-left me-2"></i>Back to Manage
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0"><i className="bi bi-person-circle me-2"></i>Profile Information</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label><i className="bi bi-person me-2"></i>First Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label><i className="bi bi-person me-2"></i>Last Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label><i className="bi bi-envelope me-2"></i>Email *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label><i className="bi bi-telephone me-2"></i>Phone *</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="age">
                      <Form.Label><i className="bi bi-calendar-date me-2"></i>Age *</Form.Label>
                      <Form.Control 
                        type="number" 
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="username">
                      <Form.Label><i className="bi bi-person-badge me-2"></i>Username *</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><i className="bi bi-person"></i></InputGroup.Text>
                        <Form.Control 
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="street">
                      <Form.Label><i className="bi bi-geo-alt me-2"></i>Street Address *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="city">
                      <Form.Label><i className="bi bi-building me-2"></i>City *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="state">
                      <Form.Label><i className="bi bi-geo me-2"></i>State *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="zipCode">
                      <Form.Label><i className="bi bi-postcard me-2"></i>Zip Code *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="country">
                      <Form.Label><i className="bi bi-flag me-2"></i>Country *</Form.Label>
                      <Form.Select 
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="Vietnam">Vietnam</option>
                        <option value="United States">United States</option>
                        <option value="Japan">Japan</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Thailand">Thailand</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button variant="outline-secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleSave}>
                <i className="bi bi-check-circle me-2"></i>Save Changes
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Header>
              <h6 className="mb-0"><i className="bi bi-info-circle me-2"></i>Profile Summary</h6>
            </Card.Header>
            <Card.Body>
              <div className="text-center mb-3">
                <i className="bi bi-person-circle fs-1 text-primary"></i>
                <h5 className="mt-2">{formData.firstName} {formData.lastName}</h5>
                <p className="text-muted">@{formData.username}</p>
              </div>
              
              <div className="border-top pt-3">
                <small className="text-muted">
                  <strong>Contact:</strong><br />
                  {formData.email}<br />
                  {formData.phone}
                </small>
              </div>
              
              <div className="border-top pt-3 mt-3">
                <small className="text-muted">
                  <strong>Location:</strong><br />
                  {formData.street}<br />
                  {formData.city}, {formData.state}<br />
                  {formData.zipCode}, {formData.country}
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
