import React, { useState } from 'react';
import { Button, Modal, Nav, ProgressBar, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AboutForm from '../Components/Profile/AboutForm';
import AccountForm from '../Components/Profile/AccountForm';
import AddressForm from '../Components/Profile/AddressForm';

const steps = [
  { key: 'about', title: 'About', icon: 'bi-person-circle' },
  { key: 'account', title: 'Account', icon: 'bi-lock' },
  { key: 'address', title: 'Address', icon: 'bi-geo-alt' }
];

const BuildProfile = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const renderStep = () => {
    if (active === 0) return <AboutForm />;
    if (active === 1) return <AccountForm />;
    return <AddressForm />;
  };

  const percent = active === 0 ? 33 : active === 1 ? 67 : 100;

  const handleClose = () => {
    navigate('/');
  };

  const handleFinish = () => {
    alert('Profile created successfully!');
    navigate('/');
  };

  return (
    <Modal show centered size="lg" backdrop="static" onHide={handleClose}>
      <Modal.Header closeButton>
        <Stack className="w-100" gap={2}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-person-circle"></i>
              <strong>Build Your Profile</strong>
            </div>
          </div>
          <ProgressBar now={percent} label={`${percent}%`} style={{ height: 8 }} />
          <Nav variant="tabs" activeKey={active} onSelect={() => {}} className="mt-2">
            {steps.map((s, idx) => (
              <Nav.Item key={s.key}>
                <Nav.Link eventKey={idx} active={active === idx} disabled>
                  <i className={`bi ${s.icon} me-2`}></i>{s.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Stack>
      </Modal.Header>
      <Modal.Body>
        {renderStep()}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" disabled={active === 0} onClick={() => setActive(Math.max(0, active - 1))}>Previous</Button>
        {active < 2 ? (
          <Button onClick={() => setActive(Math.min(2, active + 1))}>Next</Button>
        ) : (
          <Button variant="success" onClick={handleFinish}>Finish</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default BuildProfile;


