// src/pages/MovieManager.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { MovieProvider } from '../contexts/MovieContext';
import MovieForm from '../component/MovieForm';
import MovieTable from '../component/MovieTable';

// Component con hiển thị nội dung, được bọc bởi Provider
const MovieManagerContent = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">🎬 Quản lý Phim </h1>
            
            <MovieForm /> 
            
            <h2 className="mt-4">Danh sách Phim</h2>
            
            <MovieTable /> 
            
        </Container>
    );
}

// Component chính cung cấp Context
const MovieManager = () => (
    <MovieProvider>
        <MovieManagerContent />
    </MovieProvider>
);

export default MovieManager;
