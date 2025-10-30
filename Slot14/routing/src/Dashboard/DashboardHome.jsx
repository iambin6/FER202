import React from 'react';

const DashboardHome = () => {
  const stats = [
    { id: 1, title: 'Tổng người dùng', value: '1,234', icon: '👥', color: '#3498db' },
    { id: 2, title: 'Doanh thu', value: '450M VND', icon: '💰', color: '#2ecc71' },
    { id: 3, title: 'Đơn hàng', value: '856', icon: '📦', color: '#e74c3c' },
    { id: 4, title: 'Sản phẩm', value: '124', icon: '🛍️', color: '#f39c12' }
  ];

  const recentActivities = [
    { id: 1, user: 'Nguyễn Văn A', action: 'đã đặt đơn hàng #1234', time: '5 phút trước' },
    { id: 2, user: 'Trần Thị B', action: 'đã đăng ký tài khoản mới', time: '15 phút trước' },
    { id: 3, user: 'Lê Văn C', action: 'đã thanh toán đơn hàng #1230', time: '30 phút trước' },
    { id: 4, user: 'Phạm Thị D', action: 'đã để lại đánh giá 5 sao', time: '1 giờ trước' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-page-header">
        <h1>Trang chủ Dashboard</h1>
        <p>Chào mừng bạn đến với trang quản trị</p>
      </div>

      <div className="stats-grid">
        {stats.map(stat => (
          <div key={stat.id} className="stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="stat-icon" style={{ backgroundColor: stat.color + '20' }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>📊 Biểu đồ tổng quan</h2>
          <div className="chart-placeholder">
            <p>Biểu đồ doanh thu theo tháng</p>
            <div className="chart-bars">
              <div className="bar" style={{ height: '60%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '45%' }}></div>
              <div className="bar" style={{ height: '90%' }}></div>
              <div className="bar" style={{ height: '70%' }}></div>
              <div className="bar" style={{ height: '95%' }}></div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>🔔 Hoạt động gần đây</h2>
          <div className="activity-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-avatar">👤</div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>{activity.user}</strong> {activity.action}
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

