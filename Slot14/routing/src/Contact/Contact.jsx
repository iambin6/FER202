import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <h1>Liên Hệ</h1>
      <p>Thông tin liên hệ với chúng tôi:</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3> Email</h3>
          <p>contact@example.com</p>
        </div>
        
        <div className="contact-item">
          <h3> Điện thoại</h3>
          <p>+84 123 456 789</p>
        </div>
        
        <div className="contact-item">
          <h3> Địa chỉ</h3>
          <p>
            123 Đường ABC, Quận 1<br />
            Thành phố Hồ Chí Minh, Việt Nam
          </p>
        </div>
        
        <div className="contact-item">
          <h3> Giờ làm việc</h3>
          <p>
            Thứ 2 - Thứ 6: 8:00 - 17:00<br />
            Thứ 7: 8:00 - 12:00<br />
            Chủ nhật: Nghỉ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
