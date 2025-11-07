// src/component/MovieTable.jsx
import React from 'react';
import { Table, Button, Image, Modal, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';

const MovieTable = () => {
  const state = useMovieState();
  const navigate = useNavigate();
  // Lấy confirmDelete từ Context (chứa logic xóa phim)
  const { dispatch, confirmDelete } = useMovieDispatch(); 
  
  const { movies, genres, loading, movieToDelete, showDeleteModal, filters } = state;

  // Tạo genre map từ dữ liệu API
  const genreMap = genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});

  // Hàm filter và sort movies
  const getFilteredAndSortedMovies = () => {
    let filtered = [...movies];

    // Filter by search text
    if (filters.searchText) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
        movie.description.toLowerCase().includes(filters.searchText.toLowerCase())
      );
    }

    // Filter by genre
    if (filters.genreId) {
      filtered = filtered.filter(movie =>
        movie.genreId === parseInt(filters.genreId)
      );
    }

    // Filter by year
    if (filters.year) {
      filtered = filtered.filter(movie =>
        movie.year === parseInt(filters.year)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'year':
          return b.year - a.year;
        case 'duration':
          return b.duration - a.duration;
        case 'id':
        default:
          return a.id - b.id;
      }
    });

    return filtered;
  };

  const filteredMovies = getFilteredAndSortedMovies();

  const handleViewClick = (movieId) => {
    // Đảm bảo ID tồn tại và hợp lệ
    if (movieId === undefined || movieId === null || movieId === '') {
      console.error('❌ Invalid movie ID:', movieId, 'Type:', typeof movieId);
      alert(`Lỗi: Phim không có ID hợp lệ! ID: ${movieId}`);
      
      // Debug: Log tất cả movies để xem ID
      console.log('📋 All movies in state:', movies.map(m => ({ id: m.id, title: m.title, idType: typeof m.id })));
      return;
    }
    
    // Convert sang string để navigate (React Router sẽ handle)
    const idToNavigate = movieId.toString();
    console.log('🔍 View clicked - Movie ID:', movieId, 'Type:', typeof movieId, 'Navigating to:', idToNavigate);
    navigate(`/movies/${idToNavigate}`);
  };

  const handleEditClick = (movie) => {
      // Mở Modal Sửa và gán dữ liệu vào state
      dispatch({ type: 'OPEN_EDIT_MODAL', payload: movie });
  };
  
  const handleDeleteClick = (movie) => {
      // Mở Modal Xác nhận Xóa và gán phim vào movieToDelete
      dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });
  };

  return (
    <>
      {loading && movies.length === 0 ? (
          <div className="text-center my-4">
              <Spinner animation="border" role="status" variant="primary" className="me-2" />
              <Alert variant="info" className="mt-3">Đang tải dữ liệu phim...</Alert>
          </div>
      ) : (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>ID</th>
              <th>Tên Phim</th>
              <th>Danh mục</th>
              <th>Thời lượng (phút)</th>
  
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  <h5>Không tìm thấy phim nào</h5>
                  <p>Thử thay đổi bộ lọc hoặc reset để xem tất cả</p>
                </td>
              </tr>
            ) : (
              filteredMovies.map((movie, index) => {
                const genreName = genreMap[movie.genreId] || 'Unknown';
                return (
                  <tr key={movie.id}>
                    <td><Image src={movie.poster || movie.avatar} alt={movie.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} rounded /></td>
                    <td>#{movie.id}</td>
                    <td>
                      <strong>{movie.title}</strong>
                      <br />
                      <small className="text-muted">({movie.year})</small>
                    </td>
                    <td>
                      {genreName}
                    </td>
                    <td>{movie.duration} phút</td>
                   
                    <td>
                      <Button variant="warning" size="sm" onClick={() => handleViewClick(movie.id)} className="me-2">View</Button>
                      <Button variant="primary" size="sm" onClick={() => handleEditClick(movie)} className="me-2">Sửa</Button>
                      <Button variant="danger" size="sm" onClick={() => handleDeleteClick(movie)}>Xóa</Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      )}

      {!loading && movies.length > 0 && (
        <div className="text-end text-muted mt-2">
          Hiển thị <strong>{filteredMovies.length}</strong> / {movies.length} phim
        </div>
      )}

      {/* MODAL XÁC NHẬN XÓA */}
      <Modal show={showDeleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận Xóa Phim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa phim **"{movieToDelete?.title}"** (ID: {movieToDelete?.id}) không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
            Hủy bỏ
          </Button>
          <Button variant="danger" onClick={() => confirmDelete(movieToDelete.id)}>
            Xác nhận Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;
