// ConfirmModal.jsx được dùng để hiển thị một modal xác nhận hành động
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, title, message, onConfirm, onHide }) => {
  const handleClose = () => {
    if (onHide) onHide();
    else if (onConfirm) onConfirm();
  };

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
