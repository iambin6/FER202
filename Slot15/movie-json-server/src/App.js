import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Contexts
import { AuthProvider } from './contexts/AuthContext';

// Pages
import LoginPage from './pages/LoginPage';
import MovieManager from './pages/MovieManager';

// Components
import Header from './component/Header';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          
          <Routes>
            {/* Route công khai: Trang đăng nhập */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Route được bảo vệ: Trang quản lý phim */}
            <Route 
              path="/movies" 
              element={
                <PrivateRoute>
                  <MovieManager />
                </PrivateRoute>
              } 
            />
            
            {/* Redirect mặc định về /movies */}
            <Route path="/" element={<Navigate to="/movies" replace />} />
            
            {/* Route không tồn tại, redirect về /movies */}
            <Route path="*" element={<Navigate to="/movies" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

