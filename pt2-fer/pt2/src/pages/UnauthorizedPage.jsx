import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import NavigationHeader from '../components/NavigationHeader';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <NavigationHeader />
      <Container className="mt-5">
        <Card className="text-center shadow-sm">
          <Card.Body style={{ padding: '3rem' }}>
            <h2 className="text-danger mb-3">⚠️ Không có quyền truy cập</h2>
            <p className="lead mb-4">
              Bạn không có quyền truy cập trang này. Chỉ admin mới được phép truy cập Payment Management và User Management.
            </p>
            <div>
              <Button variant="primary" onClick={handleLogout} className="me-2">
                Đăng xuất
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default UnauthorizedPage;

