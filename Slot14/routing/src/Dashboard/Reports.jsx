import React, { useState } from 'react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('sales');
  const [dateRange, setDateRange] = useState('month');

  const reportTypes = [
    { id: 'sales', name: 'Báo cáo doanh thu', icon: '💰' },
    { id: 'users', name: 'Báo cáo người dùng', icon: '👥' },
    { id: 'products', name: 'Báo cáo sản phẩm', icon: '📦' },
    { id: 'traffic', name: 'Báo cáo lưu lượng', icon: '📊' }
  ];

  const salesData = [
    { month: 'Tháng 1', revenue: '125M', orders: 245, growth: '+12%' },
    { month: 'Tháng 2', revenue: '138M', orders: 267, growth: '+10%' },
    { month: 'Tháng 3', revenue: '156M', orders: 301, growth: '+13%' },
    { month: 'Tháng 4', revenue: '142M', orders: 278, growth: '-9%' },
    { month: 'Tháng 5', revenue: '189M', orders: 356, growth: '+33%' },
    { month: 'Tháng 6', revenue: '201M', orders: 389, growth: '+6%' }
  ];

  const topProducts = [
    { name: 'iPhone 15', sales: 156, revenue: '3.9B VND' },
    { name: 'Samsung Galaxy S24', sales: 142, revenue: '2.8B VND' },
    { name: 'MacBook Pro M3', sales: 89, revenue: '4.0B VND' },
    { name: 'AirPods Pro', sales: 234, revenue: '1.4B VND' },
    { name: 'iPad Air', sales: 98, revenue: '1.8B VND' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-page-header">
        <h1>📈 Báo cáo thống kê</h1>
        <p>Xem và phân tích dữ liệu kinh doanh</p>
      </div>

      <div className="reports-controls">
        <div className="report-types">
          {reportTypes.map(type => (
            <button
              key={type.id}
              className={`report-type-btn ${selectedReport === type.id ? 'active' : ''}`}
              onClick={() => setSelectedReport(type.id)}
            >
              <span className="report-icon">{type.icon}</span>
              <span>{type.name}</span>
            </button>
          ))}
        </div>

        <div className="date-range-selector">
          <label htmlFor="dateRange">Khoảng thời gian:</label>
          <select
            id="dateRange"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="date-range-select"
          >
            <option value="week">7 ngày qua</option>
            <option value="month">30 ngày qua</option>
            <option value="quarter">Quý này</option>
            <option value="year">Năm nay</option>
          </select>
        </div>
      </div>

      {selectedReport === 'sales' && (
        <div className="reports-content">
          <div className="report-section">
            <h2>📊 Doanh thu theo tháng</h2>
            <div className="table-container">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Tháng</th>
                    <th>Doanh thu</th>
                    <th>Đơn hàng</th>
                    <th>Tăng trưởng</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.month}</td>
                      <td className="revenue-cell">{data.revenue}</td>
                      <td>{data.orders}</td>
                      <td className={data.growth.startsWith('+') ? 'growth-positive' : 'growth-negative'}>
                        {data.growth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="report-section">
            <h2>🏆 Top sản phẩm bán chạy</h2>
            <div className="top-products-list">
              {topProducts.map((product, index) => (
                <div key={index} className="top-product-item">
                  <div className="product-rank">#{index + 1}</div>
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-stats">
                      <span className="product-sales">Đã bán: {product.sales}</span>
                      <span className="product-revenue">Doanh thu: {product.revenue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedReport !== 'sales' && (
        <div className="reports-content">
          <div className="report-section">
            <div className="report-placeholder">
              <p>📝 Báo cáo này đang được phát triển</p>
              <p className="placeholder-desc">Vui lòng chọn "Báo cáo doanh thu" để xem dữ liệu mẫu</p>
            </div>
          </div>
        </div>
      )}

      <div className="reports-actions">
        <button className="btn-primary">
          📥 Xuất Excel
        </button>
        <button className="btn-secondary">
          📄 Xuất PDF
        </button>
        <button className="btn-secondary">
          📧 Gửi email
        </button>
      </div>
    </div>
  );
};

export default Reports;

