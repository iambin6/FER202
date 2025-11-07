import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmModal({ 
  show, 
  title, 
  message, 
  onConfirm, 
  onHide,
  confirmText = "OK",
  confirmVariant = "primary"
}) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant={confirmVariant} 
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
