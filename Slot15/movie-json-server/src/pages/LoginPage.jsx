// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const { isAuthenticated, loading, error } = useAuthState();
  const { login, clearError } = useAuthDispatch();
  const navigate = useNavigate();

  // Nếu đã đăng nhập rồi, chuyển về trang movies
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/movies');
    }
  }, [isAuthenticated, navigate]);

  // Hiển thị error khi có
  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    clearError();

    // Validate
    if (!username.trim() || !password.trim()) {
      setShowError(true);
      return;
    }

    // Gọi hàm login
    await login(username, password);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">🎬 Movie Manager</h2>
                <p className="text-muted">Đăng nhập vào hệ thống</p>
              </div>

              {showError && error && (
                <Alert 
                  variant="danger" 
                  dismissible 
                  onClose={() => {
                    setShowError(false);
                    clearError();
                  }}
                >
                  {error}
                </Alert>
              )}

              {showError && !error && (
                <Alert 
                  variant="warning" 
                  dismissible 
                  onClose={() => setShowError(false)}
                >
                  Vui lòng nhập tên đăng nhập và mật khẩu!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={loading}
                    autoFocus
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Đang đăng nhập...
                      </>
                    ) : (
                      'Đăng nhập'
                    )}
                  </Button>
                </div>
              </Form>

              <div className="mt-4 text-center">
                <small className="text-muted">
                  <strong>Tài khoản demo:</strong>
                  <br />
                  Admin: <code>admin / admin123</code>
                  <br />
                  User: <code>user / user123</code>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

