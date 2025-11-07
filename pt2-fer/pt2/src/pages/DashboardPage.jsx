import React, { useEffect, useState, useRef } from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import NavigationHeader from '../components/NavigationHeader';
import FilterBar from '../components/FilterBar';
import PaymentTable from '../components/PaymentTable';
import PaymentFormModal from '../components/PaymentFormModal';
import { useAuth } from '../contexts/AuthContext.jsx';
import { usePaymentContext } from '../contexts/PaymentContext';

const DashboardPage = () => {
  const { user } = useAuth();
  const { fetchPayments } = usePaymentContext();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const hasShownWelcome = useRef(false);

  useEffect(() => {
    if (user?.id) {
      fetchPayments(user.id);
      // Hiển thị welcome modal khi vào dashboard lần đầu
      if (!hasShownWelcome.current) {
        setShowWelcomeModal(true);
        hasShownWelcome.current = true;
      }
    }
  }, [user, fetchPayments]);

  return (
    <>
      {/* 1. Header (Navigation Bar) */}
      <NavigationHeader />

      {/* 2. Main Dashboard Content */}
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
          <h2>Payment Management</h2>
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            + Add New Payment
          </Button>
        </div>

        <FilterBar />

        <Card className="mb-4 shadow-sm">
          <Card.Header as="h5">Dashboard Overview</Card.Header>
          <Card.Body>
            <PaymentTable />
          </Card.Body>
        </Card>
      </Container>

      {/* Add Payment Modal */}
      <PaymentFormModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
      />

      {/* Welcome Modal */}
      <Modal show={showWelcomeModal} onHide={() => setShowWelcomeModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome, <strong>{user?.fullName || user?.username}</strong>! Login successful.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowWelcomeModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DashboardPage;
