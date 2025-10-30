// src/component/Header.jsx
import React from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, user } = useAuthState();
  const { logout } = useAuthDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">
          🎬 Movie Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {isAuthenticated && user && (
              <>
                <Nav.Item className="me-3">
                  <span className="text-light">
                    Xin chào, <strong>{user.fullname}</strong>{' '}
                    {user.role === 'admin' && (
                      <Badge bg="warning" text="dark">Admin</Badge>
                    )}
                    {user.role === 'user' && (
                      <Badge bg="info">User</Badge>
                    )}
                  </span>
                </Nav.Item>
                <Nav.Item>
                  <Button 
                    variant="outline-light" 
                    size="sm"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </Button>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

