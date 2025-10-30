import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="dashboard-header">
          <h2>📊 Dashboard</h2>
          <p className="dashboard-subtitle">Quản trị hệ thống</p>
        </div>
        
        <nav className="dashboard-nav">
          <NavLink 
            to="/dashboard" 
            end
            className={({ isActive }) => 
              isActive ? 'dashboard-nav-link active' : 'dashboard-nav-link'
            }
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Trang chủ</span>
          </NavLink>
          
          <NavLink 
            to="/dashboard/settings"
            className={({ isActive }) => 
              isActive ? 'dashboard-nav-link active' : 'dashboard-nav-link'
            }
          >
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Cài đặt</span>
          </NavLink>
          
          <NavLink 
            to="/dashboard/reports"
            className={({ isActive }) => 
              isActive ? 'dashboard-nav-link active' : 'dashboard-nav-link'
            }
          >
            <span className="nav-icon">📈</span>
            <span className="nav-text">Báo cáo</span>
          </NavLink>
        </nav>
        
        <div className="dashboard-footer">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <div className="user-name">Admin User</div>
              <div className="user-role">Quản trị viên</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        {/* Outlet sẽ render các route con ở đây */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

