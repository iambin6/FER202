// src/pages/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Spinner, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import movieApi from '../api/movieAPI';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      
      // Xử lý ID - có thể là number hoặc string
      let movieId = id;
      let useStringId = false;
      
      // Thử parse thành number
      const parsedId = parseInt(id);
      if (!isNaN(parsedId) && parsedId.toString() === id.toString()) {
        // ID là number hợp lệ (ví dụ: "10" -> 10)
        movieId = parsedId;
      } else {
        // ID là string hoặc không phải number (ví dụ: "dda4")
        useStringId = true;
        console.log('⚠️ ID không phải number, using string ID:', id);
      }
      
      // Kiểm tra ID có rỗng không
      if (!id || id === 'undefined' || id === 'null') {
        setError('ID phim không hợp lệ!');
        setLoading(false);
        return;
      }
      
      try {
        console.log('🔍 Fetching movie with ID:', movieId, 'from URL:', id, 'Type:', typeof movieId, 'UseStringId:', useStringId);

        // Lấy thông tin phim - thử với ID hiện tại trước
        let movieResponse;
        try {
          movieResponse = await movieApi.get(`/movies/${movieId}`);
          console.log('✅ Success with ID:', movieId);
        } catch (firstError) {
          // Nếu fail với parsed ID, thử với string ID gốc
          if (!useStringId && firstError.response?.status === 404) {
            console.log('⚠️ 404 with parsed ID, trying original string ID:', id);
            movieResponse = await movieApi.get(`/movies/${id}`);
            console.log('✅ Success with string ID:', id);
          } else {
            throw firstError;
          }
        }
        
        console.log('✅ Movie response received:', movieResponse.data);
        
        if (!movieResponse.data || !movieResponse.data.id) {
          setError(`Không tìm thấy phim với ID #${movieId}`);
          setLoading(false);
          return;
        }
        
        setMovie(movieResponse.data);
        
        // Lấy thông tin thể loại
        if (movieResponse.data.genreId) {
          try {
            const genreResponse = await movieApi.get(`/genres/${movieResponse.data.genreId}`);
            setGenre(genreResponse.data);
          } catch (genreErr) {
            console.error('Error fetching genre:', genreErr);
            setGenre(null);
          }
        }
      } catch (err) {
        console.error('Error fetching movie details:', err);
        console.error('Error response:', err.response);
        console.error('Attempted ID:', movieId, 'Original ID from URL:', id);
        
        if (err.response?.status === 404) {
          setError(`Không tìm thấy phim với ID #${id}. Phim có thể đã bị xóa hoặc chưa được tạo trong database. Vui lòng quay lại danh sách và kiểm tra lại.`);
        } else {
          setError(`Không thể tải thông tin phim. Lỗi: ${err.message || 'Unknown error'}`);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const handleBackToList = () => {
    navigate('/movies');
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-3">Đang tải thông tin phim...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Lỗi!</Alert.Heading>
          <p>{error}</p>
          <Button variant="primary" onClick={handleBackToList}>
            Back To Film List
          </Button>
        </Alert>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">
          <Alert.Heading>Không tìm thấy phim!</Alert.Heading>
          <p>Phim với ID #{id} không tồn tại.</p>
          <Button variant="primary" onClick={handleBackToList}>
            Back To Film List
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img
              variant="top"
              src={movie.poster || movie.avatar || 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.title}
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Card>
        </Col>

        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title as="h2" className="mb-3">
                {movie.title}
                <Badge bg="primary" className="ms-3">#{movie.id}</Badge>
              </Card.Title>

              <hr />

              <Row className="mb-3">
                <Col xs={4}>
                  <strong>Thể loại:</strong>
                </Col>
                <Col xs={8}>
                  <Badge bg="success" className="fs-6">
                    {genre?.name || 'Unknown'}
                  </Badge>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={4}>
                  <strong>Năm phát hành:</strong>
                </Col>
                <Col xs={8}>
                  {movie.year}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={4}>
                  <strong>Quốc gia:</strong>
                </Col>
                <Col xs={8}>
                  {movie.country}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={4}>
                  <strong>Thời lượng:</strong>
                </Col>
                <Col xs={8}>
                  {movie.duration} phút
                </Col>
              </Row>

              <hr />

              <div className="mb-3">
                <strong>Mô tả:</strong>
                <p className="mt-2 text-muted" style={{ lineHeight: '1.8' }}>
                  {movie.description}
                </p>
              </div>

              <hr />

              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  onClick={handleBackToList}
                >
                  ← Back To Film List
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;

