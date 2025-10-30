import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'My Website',
    email: 'admin@example.com',
    notifications: true,
    darkMode: false,
    language: 'vi',
    autoSave: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    alert('Cài đặt đã được lưu thành công!');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-page-header">
        <h1>⚙️ Cài đặt hệ thống</h1>
        <p>Quản lý cấu hình và tùy chỉnh hệ thống</p>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h2>Thông tin chung</h2>
          <div className="settings-group">
            <label htmlFor="siteName">Tên website</label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={settings.siteName}
              onChange={handleInputChange}
              className="settings-input"
            />
          </div>

          <div className="settings-group">
            <label htmlFor="email">Email quản trị</label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleInputChange}
              className="settings-input"
            />
          </div>

          <div className="settings-group">
            <label htmlFor="language">Ngôn ngữ</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleInputChange}
              className="settings-input"
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Tùy chọn</h2>
          
          <div className="settings-toggle">
            <div className="toggle-info">
              <div className="toggle-title">🔔 Thông báo</div>
              <div className="toggle-desc">Nhận thông báo về các hoạt động mới</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleInputChange}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="settings-toggle">
            <div className="toggle-info">
              <div className="toggle-title">🌙 Chế độ tối</div>
              <div className="toggle-desc">Sử dụng giao diện màu tối</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleInputChange}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="settings-toggle">
            <div className="toggle-info">
              <div className="toggle-title">💾 Tự động lưu</div>
              <div className="toggle-desc">Tự động lưu các thay đổi</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="autoSave"
                checked={settings.autoSave}
                onChange={handleInputChange}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>Bảo mật</h2>
          <div className="settings-group">
            <button className="btn-secondary btn-block">
              🔒 Đổi mật khẩu
            </button>
          </div>
          <div className="settings-group">
            <button className="btn-secondary btn-block">
              🔐 Xác thực hai yếu tố
            </button>
          </div>
        </div>

        <div className="settings-actions">
          <button onClick={handleSave} className="btn-primary btn-large">
            💾 Lưu thay đổi
          </button>
          <button className="btn-secondary btn-large">
            ↺ Đặt lại mặc định
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

