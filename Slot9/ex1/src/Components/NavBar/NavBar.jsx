import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { FaUser, FaSignInAlt, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    console.log('Search query:', searchQuery);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Real-time search as user types
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleBuildAccount = () => {
    navigate('/build-profile');
  };

  const handleManageProfiles = () => {
    navigate('/manage-profile');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">CineHub</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search movies ..."
              className="me-2"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>

          {/* Icons and Dropdown */}
          <Nav className="d-flex align-items-center">
            {/* Accounts Dropdown */}
            <Dropdown className="me-3">
              <Dropdown.Toggle variant="outline-light" id="dropdown-accounts">
                <FaUser className="me-1" />
                Accounts
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleManageProfiles}>Manage Your Profiles</Dropdown.Item>
                <Dropdown.Item onClick={handleBuildAccount}>Build your Account</Dropdown.Item>
                <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Login Icon */}
            <Nav.Link href="#login" className="me-3">
              <FaSignInAlt className="navbar-icon" />
              Login
            </Nav.Link>

            {/* Favourites Icon */}
            <Nav.Link href="#favourites">
              <FaHeart className="navbar-icon" />
              Favourites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
