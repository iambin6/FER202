import React, { useState } from 'react';
import { Card, Row, Col, Badge, Button, Modal, Toast, ToastContainer } from 'react-bootstrap';
import { movies } from '../../data/movies';

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Lấy favourites từ localStorage
  const getFavourites = () => {
    const favourites = localStorage.getItem('favourites');
    return favourites ? JSON.parse(favourites) : [];
  };

  // Thêm vào favourites
  const addToFavourites = () => {
    const favourites = getFavourites();
    const isAlreadyFavourite = favourites.some(fav => fav.id === movie.id);
    
    if (!isAlreadyFavourite) {
      favourites.push(movie);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      setShowToast(true);
    }
  };

  // Rút gọn description
  const truncateDescription = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <>
      <Col xs={12} md={6} lg={4} className="mb-4">
        <Card 
          className="h-100 movie-card shadow-sm"
          style={{ 
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
          }}
        >
          <Card.Img 
            variant="top" 
            src={movie.poster} 
            alt={movie.title}
            style={{ 
              height: '300px', 
              objectFit: 'contain',
              backgroundColor: '#f8f9fa',
              padding: '10px'
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="h5 mb-2">{movie.title}</Card.Title>
            <Card.Text className="text-muted mb-2">
              {truncateDescription(movie.description)}
            </Card.Text>
            
            <div className="mt-auto">
              <div className="mb-2">
                <Badge bg="primary" className="me-1">{movie.genre}</Badge>
                <Badge bg="secondary" className="me-1">{movie.year}</Badge>
                <Badge bg="info" className="me-1">{movie.country}</Badge>
                <Badge bg="warning" text="dark">{movie.duration} phút</Badge>
              </div>
              
              <div className="d-grid gap-2 d-md-flex">
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="flex-fill"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToFavourites();
                  }}
                >
                  ❤️ Add to Favourites
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="flex-fill"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                >
                  📖 Details
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal chi tiết */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="img-fluid rounded"
                style={{ 
                  width: '100%', 
                  height: '400px',
                  objectFit: 'contain',
                  backgroundColor: '#f8f9fa',
                  padding: '15px'
                }}
              />
            </Col>
            <Col md={8}>
              <h5>Thông tin chi tiết</h5>
              <p><strong>Năm:</strong> {movie.year}</p>
              <p><strong>Quốc gia:</strong> {movie.country}</p>
              <p><strong>Thể loại:</strong> <Badge bg="primary">{movie.genre}</Badge></p>
              <p><strong>Thời lượng:</strong> {movie.duration} phút</p>
              
              <h6 className="mt-3">Mô tả đầy đủ:</h6>
              <p>{movie.description}</p>
              
              <h6 className="mt-3">Suất chiếu:</h6>
              <div className="d-flex flex-wrap gap-2">
                {movie.showtimes.map((time, index) => (
                  <Badge key={index} bg="success" className="fs-6">
                    {time}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => {
            addToFavourites();
            setShowModal(false);
          }}>
            ❤️ Add to Favourites
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast thông báo */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">🎉 Thành công!</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            <strong>Added to favourites!</strong>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default MovieCard;
