import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import NavigationHeader from '../components/NavigationHeader.jsx';
import FilterBar from '../components/FilterBar.jsx';
import PaymentTable from '../components/PaymentTable.jsx';
import PaymentFormModal from '../components/PaymentFormModal.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import { usePaymentContext } from '../contexts/PaymentContext.jsx';

const DashboardPage = () => {
  const { user } = useAuth();
  const { fetchPayments } = usePaymentContext();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (user?.id) {
      fetchPayments(user.id);
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
    </>
  );
};

export default DashboardPage;
