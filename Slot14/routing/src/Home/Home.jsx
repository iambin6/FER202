import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <h1>Trang Chủ</h1>
      <p>Chào mừng bạn đến với trang chủ của chúng tôi!</p>
      <div className="home-content">
        <h2>Giới thiệu</h2>
        <p>
          Đây là trang chủ của ứng dụng React với React Router DOM. 
          Bạn có thể điều hướng đến các trang khác thông qua thanh menu phía trên.
        </p>
        <ul>
          <li> Sản phẩm: Xem danh sách sản phẩm</li>
          <li> Liên hệ: Thông tin liên hệ</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
