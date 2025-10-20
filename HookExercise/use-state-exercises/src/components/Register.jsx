import { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Modal, Toast, ToastContainer } from 'react-bootstrap';

export default function RegisterForm() {
  //  State quản lý form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //  Regex validate
  const usernameRegex = /^[A-Za-z0-9._]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  //  Hàm validate từng field
  const validateField = (name, value) => {
    let message = '';

    if (name === 'username') {
      if (!value.trim()) message = 'Username is required';
      else if (!usernameRegex.test(value)) message = '≥3 ký tự, chữ/số/._';
    }

    if (name === 'email') {
      if (!value.trim()) message = 'Email is required';
      else if (!emailRegex.test(value)) message = 'Email không hợp lệ';
    }

    if (name === 'password') {
      if (!value.trim()) message = 'Password is required';
      else if (!passwordRegex.test(value)) message = '≥8 ký tự, gồm hoa, thường, số & ký tự đặc biệt';
    }

    if (name === 'confirmPassword') {
      if (!value.trim()) message = 'Please confirm your password';
      else if (value !== formData.password) message = 'Incorrect password';
    }

    setErrors(prev => ({ ...prev, [name]: message }));
  };

  //  Cập nhật input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  //  Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate toàn bộ fields
    Object.entries(formData).forEach(([key, value]) => validateField(key, value));

    // Nếu không có lỗi => show toast + modal
    const noError = Object.values(errors).every(err => err === '');
    if (noError && Object.values(formData).every(v => v !== '')) {
      setShowToast(true);
      setShowModal(true);
    }
  };

  //  Cancel => reset form
  const handleCancel = () => {
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  //  Form hợp lệ khi không có lỗi và đủ dữ liệu
  const isFormValid =
    Object.values(formData).every(v => v !== '') &&
    Object.values(errors).every(err => err === '');

  return (
    <div className="register-wrapper" style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <div className="register-form" style={{ width: '400px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Register Account</h3>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="form-control"
            />
            {errors.username && <div className="text-danger">{errors.username}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="form-control"
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="form-control"
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="form-control"
            />
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" className="btn btn-primary w-50" disabled={!isFormValid}>Submit</button>
            <button type="button" className="btn btn-secondary w-50" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );

}
