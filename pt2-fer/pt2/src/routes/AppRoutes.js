// AppRoutes.js định nghĩa các route cho ứng dụng sử dụng React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import UserListPage from '../pages/UserListPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';

// Component để bảo vệ các route cần xác thực
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Component để bảo vệ các route chỉ dành cho admin
const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (user?.role !== 'admin') {
    return (
      <Navigate 
        to="/unauthorized" 
        replace 
        state={{ message: 'Bạn không có quyền truy cập trang này. Chỉ admin mới được phép.' }}
      />
    );
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Trang mặc định */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Trang Đăng nhập */}
        <Route path="/login" element={<LoginPage />} />

        {/* Trang Home/Dashboard - Admin và User đều truy cập được */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Trang User Management - Chỉ admin mới truy cập được */}
        <Route
          path="/users"
          element={
            <AdminRoute>
              <UserListPage />
            </AdminRoute>
          }
        />

        {/* Trang Unauthorized - Khi user thường cố truy cập trang admin */}
        <Route
          path="/unauthorized"
          element={
            <PrivateRoute>
              <UnauthorizedPage />
            </PrivateRoute>
          }
        />

        {/* Tất cả route khác → /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
