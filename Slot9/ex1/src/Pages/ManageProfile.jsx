import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';

const ManageProfile = () => {
  const navigate = useNavigate();
  const { profiles, deleteProfile } = useProfile();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);

  const handleEditProfile = (profileId) => {
    // Navigate to edit profile page
    navigate(`/edit-profile/${profileId}`);
  };

  const handleCreateNew = () => {
    navigate('/build-profile');
  };

  const handleDeleteProfile = (profile) => {
    setProfileToDelete(profile);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (profileToDelete) {
      deleteProfile(profileToDelete.id);
      setShowDeleteModal(false);
      setProfileToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProfileToDelete(null);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2><i className="bi bi-person-gear me-2"></i>Manage Your Profiles</h2>
            <Button variant="primary" onClick={handleCreateNew}>
              <i className="bi bi-plus-circle me-2"></i>Create New Profile
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0"><i className="bi bi-list-ul me-2"></i>Profile List</h5>
            </Card.Header>
            <Card.Body>
              {profiles.length > 0 ? (
                <div className="table-responsive">
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Location</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profiles.map((profile) => (
                        <tr key={profile.id}>
                          <td>{profile.id}</td>
                          <td>
                            <strong>{profile.firstName} {profile.lastName}</strong>
                            <br />
                            <small className="text-muted">Age: {profile.age}</small>
                          </td>
                          <td>{profile.email}</td>
                          <td>{profile.phone}</td>
                          <td>
                            <Badge bg="secondary">{profile.username}</Badge>
                          </td>
                          <td>
                            <small>
                              {profile.street}<br />
                              {profile.city}, {profile.state}<br />
                              {profile.zipCode}, {profile.country}
                            </small>
                          </td>
                          <td>{profile.createdAt}</td>
                          <td>
                            <Badge bg="success">{profile.status}</Badge>
                          </td>
                          <td>
                            <Button 
                              variant="outline-primary" 
                              size="sm" 
                              onClick={() => handleEditProfile(profile.id)}
                            >
                              <i className="bi bi-pencil me-1"></i>Edit
                            </Button>
                          </td>
                          <td>
                            <Button 
                              variant="outline-danger" 
                              size="sm" 
                              onClick={() => handleDeleteProfile(profile)}
                            >
                              <i className="bi bi-trash me-1"></i>Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-person-x fs-1 text-muted"></i>
                  <h4 className="mt-3 text-muted">No profiles found</h4>
                  <p className="text-muted">Create your first profile to get started.</p>
                  <Button variant="primary" onClick={handleCreateNew}>
                    <i className="bi bi-plus-circle me-2"></i>Create Profile
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Profile Statistics */}
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-person-check fs-1 text-primary"></i>
              <h4 className="mt-2">{profiles.length}</h4>
              <p className="text-muted">Total Profiles</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-check-circle fs-1 text-success"></i>
              <h4 className="mt-2">{profiles.filter(p => p.status === 'Active').length}</h4>
              <p className="text-muted">Active Profiles</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-calendar-check fs-1 text-info"></i>
              <h4 className="mt-2">{profiles.length > 0 ? profiles[0].createdAt : 'N/A'}</h4>
              <p className="text-muted">Latest Created</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-exclamation-triangle text-warning me-2"></i>
            Confirm Delete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this profile?</p>
          {profileToDelete && (
            <div className="alert alert-warning">
              <strong>{profileToDelete.firstName} {profileToDelete.lastName}</strong><br />
              <small>Email: {profileToDelete.email}</small>
            </div>
          )}
          <p className="text-danger">
            <i className="bi bi-exclamation-circle me-1"></i>
            This action cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            <i className="bi bi-trash me-1"></i>Delete Profile
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageProfile;
