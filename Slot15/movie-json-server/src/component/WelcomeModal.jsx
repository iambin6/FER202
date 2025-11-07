// src/component/WelcomeModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useAuthState, useAuthDispatch } from '../contexts/AuthContext';

const WelcomeModal = () => {
  const { user, showWelcomeModal } = useAuthState();
  const { closeWelcomeModal } = useAuthDispatch();

  const handleClose = () => {
    closeWelcomeModal();
  };

  if (!user || !showWelcomeModal) {
    return null;
  }

  return (
    <Modal show={showWelcomeModal} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>🎉 Chào mừng!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <h4>Xin chào, <strong>{user.fullname}</strong>!</h4>
          <p className="mt-3">Chúc bạn có trải nghiệm tuyệt vời với hệ thống quản lý phim.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;

