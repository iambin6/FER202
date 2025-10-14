import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h1>Test Page</h1>
      <p>This is a test page to check if routing works.</p>
      <Button onClick={() => navigate('/')}>Go Home</Button>
      <Button onClick={() => navigate('/build-profile')} className="ms-2">Go to Profile</Button>
    </Container>
  );
};

export default TestPage;
